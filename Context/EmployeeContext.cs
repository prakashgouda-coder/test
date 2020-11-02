using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Models;
using Microsoft.EntityFrameworkCore;
using System.Data.Entity;

namespace test.Context
{
    public class EmployeeContext: Microsoft.EntityFrameworkCore.DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {
            
        }
        public Microsoft.EntityFrameworkCore.DbSet<Employee> Employee { get; set; }
    }
}
