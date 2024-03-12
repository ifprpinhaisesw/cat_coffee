using CatCoffee.Data;
using CatCoffee.Repositorio;
using CatCoffee.Repository;
using Microsoft.EntityFrameworkCore;
using System;

namespace CatCoffee
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllersWithViews();
            string mySqlConnection = builder.Configuration.GetConnectionString("DefaultConnection");

            builder.Services.AddDbContext<BancoContext>(options =>
                                options.UseMySql(mySqlConnection,
                                ServerVersion.AutoDetect(mySqlConnection)));
            builder.Services.AddScoped<IUsuarioRepositorio, UsuarioRepositorio>();
            var app = builder.Build();


            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            app.Run();
        }
    }
}
