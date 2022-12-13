using FunDay.BLL.DTO.Users;
using FunDay.BLL.Interfaces;
using FunDay.Persistance.Entities;
using FunDay.Persistance.Realization;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FunDay.BLL.Realization
{
    public class UserService : IUserService
    {
        private readonly FunDayContext _dbContext;
        public UserService(FunDayContext context)
        {
            _dbContext = context;
        }

        public async Task Create(CreateDTO dto)
        {
            await _dbContext.Users
                .AddAsync(new User() { Email = dto.Email, PasswordHash = dto.HashedPassword, Salt = dto.Salt, FirstName = dto.FirstName, LastName = dto.LastName});
            await _dbContext.SaveChangesAsync();
        }

        public async Task<User?> FindByLogin(string login)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == login);
        }
    }
}
