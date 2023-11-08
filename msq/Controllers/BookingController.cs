using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using msq.Models;

namespace msq.Controllers
{
    // [Route("[controller]")]
    public class BookingController : Controller
    {
       
        private MSQDbContext db;

        public BookingController(MSQDbContext db){
            this.db=db;
        }
        public IActionResult ClassEnrollmentForm(int id)
        {
            var i=db.Classes.Find(id);
            
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}