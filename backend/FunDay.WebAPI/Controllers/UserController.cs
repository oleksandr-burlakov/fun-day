using FunDay.BLL.DTO.Users;
using FunDay.BLL.Helpers;
using FunDay.BLL.Interfaces;
using FunDay.Common.Globals;
using FunDay.WebAPI.Models;
using FunDay.WebAPI.Authorization;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using FunDay.Persistance.Entities;
using FunDay.WebAPI.ViewModels;

namespace FunDay.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase {
        private readonly IUserService _userService;
        public UserController(IUserService userService) {
            _userService = userService;
        }

        [Authorize]
        [HttpGet("get-user-info")]
        public async Task<IActionResult> GetUserInfo() 
        {
            var user = HttpContext.Items["User"] as User;
            if (user is not null) {
                return Ok(new UserInfoViewModel() {
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Role = user.Role
                });
            }
            return NotFound();
        }
    }
}