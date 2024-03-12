using CatCoffee.Models;

namespace CatCoffee.Repositorio
{
    public interface IUsuarioRepositorio
    {
        UsuarioModel Adicionar(UsuarioModel usuario);
    }
}
