using FunDay.BLL.Interfaces;
using FunDay.Persistance.Realization;
using Microsoft.EntityFrameworkCore;

namespace FunDay.WebAPI.Configuration
{
    public static class Dependencies
    {
        public static void AddRepositories(this IServiceCollection services, ConfigurationManager configuration)
        {
            services.AddDbContext<FunDayContext>(options =>
                options.UseNpgsql(configuration.GetConnectionString("FunDayContext")));
            AddServices(services);
        }
        public static void AddServices(this IServiceCollection services)
        {
            services.AddTransient<IUserService, BLL.Realization.UserService>();
        }
    }
}
