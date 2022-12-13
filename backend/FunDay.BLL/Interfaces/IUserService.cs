using FunDay.BLL.DTO.Users;
using FunDay.Persistance.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FunDay.BLL.Interfaces
{
    public interface IUserService
    {
        public Task<User?> FindByLogin(string login);
        public Task Create(CreateDTO dto);
    }
}
