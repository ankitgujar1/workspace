using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using msq.Models;

namespace msq.Models
{
    public class MSQDbContext:DbContext
    {
        public MSQDbContext(DbContextOptions<MSQDbContext> options):base(options){

        }

        public virtual DbSet<Student> Students{get;set;}
        public virtual DbSet<Class> Classes{get;set;}
    }
}