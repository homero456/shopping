using Core.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace Data.Sql
{
    public class ShoppingContext:DbContext
    {
        public ShoppingContext(DbContextOptions<ShoppingContext> options):base(options)
        {

        }


        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>()
                .ToTable("Employee");
        }

    }
}
