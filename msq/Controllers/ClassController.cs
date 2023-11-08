using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using msq.Models;
using System.Collections;
using System.Collections.Generic;

namespace msq.Controllers
{
    // [Route("[controller]")]
    public class ClassController : Controller
    {

        

        private MSQDbContext db;

        public ClassController(MSQDbContext db){
            this.db=db;
        }

        public IActionResult AvailableClasses()
        {
            var i=db.Classes.Where(c=>c.Capacity>0);
            return View(i);
        }

        public IActionResult BookedClasses()
        {
            var i=db.Classes.Select(c=>c.Capacity<=0).ToList();
            return View(i);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}