using CatCoffee.Models;
using Microsoft.EntityFrameworkCore;

namespace CatCoffee.Data
{
    public class BancoContext : DbContext
    {
        public BancoContext(DbContextOptions<BancoContext> options) : base(options)
        {
            
        }
        public DbSet<UsuarioModel>Usuarios { get; set; }
    }
}
