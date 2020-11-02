using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Context;
using test.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        readonly EmployeeContext EmpDetails;

        public EmployeeController(EmployeeContext employeeContext)
        {
            EmpDetails = employeeContext;
        }
        // GET: api/<EmployeeController>
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            var data = EmpDetails.Employee.ToList();
            return data;
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            var data = EmpDetails.Employee.Where(a => a.EmpId == id).FirstOrDefault();
            return data;
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public IActionResult Post([FromBody] Employee obj)
        {
            var data = EmpDetails.Employee.Add(obj);
            EmpDetails.SaveChanges();
            return Ok();
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Employee obj)
        {
            var data = EmpDetails.Employee.Update(obj);
            EmpDetails.SaveChanges();
            return Ok();
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = EmpDetails.Employee.Where(a => a.EmpId == id).FirstOrDefault();
            EmpDetails.Employee.Remove(data);
            EmpDetails.SaveChanges();
            return Ok();
        }
    }
}
