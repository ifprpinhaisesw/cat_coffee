using CatCoffee.Models;
using CatCoffee.Repositorio;
using Microsoft.AspNetCore.Mvc;

namespace CatCoffee.Controllers
{
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        public UsuarioController(IUsuarioRepositorio usuarioRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Criar()
        {
            return View();
        }
        public IActionResult Editar()
        {
            return View();
        }
        public IActionResult Apagar()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Criar(UsuarioModel usuario)
        {
            _usuarioRepositorio.Adicionar(usuario);
            return RedirectToAction("Index");
        }
    }
}
