using FunDay.BLL.DTO.Users;
using FunDay.BLL.Helpers;
using FunDay.BLL.Interfaces;
using FunDay.WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace FunDay.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [AllowAnonymous]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IConfiguration _configuration;
        public AccountController(IUserService userService, IConfiguration configuration)
        {
            _userService = userService;
            _configuration = configuration;
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel loginModel)
        {
            var user = await _userService.FindByLogin(loginModel.Login);

            if (user == null)
            {
                return NotFound("User with such login not found");
            }

            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: loginModel.Password!,
                salt: user.Salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 100000,
                numBytesRequested: 256 / 8));

            if (user.PasswordHash != hashed)
            {
                return BadRequest("Password is wrong");
            }

            var issuer = _configuration.GetSection("Jwt").GetValue<string>("Issuer");
            var audience = _configuration.GetSection("Jwt").GetValue<string>("Audience");
            var key = Encoding.ASCII.GetBytes(_configuration.GetSection("Jwt").GetValue<string>("Key"));
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("Id", Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim("FullName", user.FullName),
                    new Claim("Role", "User"),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                }),
                Expires = DateTime.UtcNow.AddMinutes(5),
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),SecurityAlgorithms.HmacSha512Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);
            var stringToken = tokenHandler.WriteToken(token);
            return Ok(stringToken);
        }

        [HttpPost("registration")]
        public async Task<IActionResult> Registration(RegistrationModel registrationModel)
        {
            var isEmailValid = ValidationHelper.IsValidEmail(registrationModel.Email);
            if (!isEmailValid)
            {
                return BadRequest("Email is invalid");
            }
            byte[] salt = RandomNumberGenerator.GetBytes(128 / 8);

            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: registrationModel.Password!,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 100000,
                numBytesRequested: 256 / 8));

            await _userService.Create(new CreateDTO()
            {
                LastName = registrationModel.LastName,
                FirstName = registrationModel.FirstName,
                Email = registrationModel.Email,
                Salt = salt,
                HashedPassword = hashed
            });
            return Ok();
        }
    }
}
