using CatCoffee.Data;
using CatCoffee.Models;
using CatCoffee.Repositorio;

namespace CatCoffee.Repository
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly BancoContext _context;
        public UsuarioRepositorio(BancoContext bancoContext)
        {
            _context = bancoContext;
        }
        public UsuarioModel Adicionar(UsuarioModel usuario)
        {
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();
            return usuario;
        }

    }
}
