using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mvc.Models;

namespace asp.net.mvc.Controllers
{
    public class SongsController : Controller
    {
        private readonly ILogger<SongsController> _logger;
        //private MusicModel myModel = new MusicModel();

        public SongsController(ILogger<SongsController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult EdSheeran()
        {
            return View();
        }

        public IActionResult ColdPlay()
        {
            return View();
        }

        public IActionResult Maroon5()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
