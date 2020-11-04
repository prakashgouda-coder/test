using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myinventory.Models;
using Microsoft.EntityFrameworkCore;
using System.Data.Entity;

namespace myinventory.Context
{
    public class EmployeeContext: Microsoft.EntityFrameworkCore.DbContext
    {
        /// <summary>
        /// DB context
        /// </summary>
        /// <param name="options"></param>
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {
            
        }
        public Microsoft.EntityFrameworkCore.DbSet<Employee> Employee { get; set; }
    }
}
