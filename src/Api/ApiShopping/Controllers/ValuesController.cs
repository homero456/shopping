using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Models;
using Data.Sql;
using Microsoft.AspNetCore.Mvc;

namespace ApiShopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {

        private readonly ShoppingContext _shoppingContext;

        public ValuesController(ShoppingContext shoppingContext)
        {
            _shoppingContext = shoppingContext;
        }


        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            var list = _shoppingContext.Employees.ToList();
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Employee> Get(int id)
        {
            var obj = _shoppingContext.Employees.Where(x => x.Id == id).FirstOrDefault();
            return obj;
        }

        // POST api/values
        [HttpPost]
        public ActionResult<string> Post([FromBody] Employee e)
        {
            try
            {
                e.EmploymentDate = DateTime.Now;
                _shoppingContext.Employees.Add(e);
                var idObject = _shoppingContext.SaveChanges();
                return idObject.ToString();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult<string> Put(int id, [FromBody] Employee e)
        {
            try
            {
                e.EmploymentDate = DateTime.Now;
                _shoppingContext.Employees.Update(e);
                var idObject = _shoppingContext.SaveChanges();
                return idObject.ToString();
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public ActionResult<string> Delete(int id)
        {
            try
            {
                var obj = _shoppingContext.Employees.Where(x => x.Id == id).FirstOrDefault();
                _shoppingContext.Employees.Remove(obj);
                var idObject = _shoppingContext.SaveChanges();
                return idObject.ToString();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
