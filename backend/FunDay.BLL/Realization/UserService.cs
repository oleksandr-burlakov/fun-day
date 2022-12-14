using FunDay.BLL.DTO.Users;
using FunDay.BLL.Interfaces;
using FunDay.Common.Globals;
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
                .AddAsync(new User()
                {
                    Email = dto.Email,
                    PasswordHash = dto.HashedPassword,
                    Salt = dto.Salt,
                    FirstName = dto.FirstName,
                    LastName = dto.LastName,
                    Role = UserRoles.User
                });
            await _dbContext.SaveChangesAsync();
        }

        public async Task<User?> FindByLogin(string login)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == login);
        }

        public async Task<User?> GetByIdAsync(Guid id)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Id == id);
        }

        public async Task UpdateAsync(User user)
        {
            _dbContext.Entry<User>(user).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }
    }
}
