using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Test_Project_Requirements.DBConnection;
using Test_Project_Requirements.GeneralСlasses;
using Test_Project_Requirements.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Test_Project_Requirements.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistorySaleController : ControllerBase
    {
        ApplicationContext db;
        public HistorySaleController(ApplicationContext applicationContext)
        {
            db = applicationContext;
        }
        // GET: api/<HistorySaleController>
        [HttpGet("{group}")]
        public IEnumerable<Sales> Get(
            DateTime? StartDateTime = null,
            DateTime? EndDateTime = null,
            DateGroupType group = DateGroupType.Quarter)
        {
            IEnumerable<Sales> Group;
            if (StartDateTime == null) StartDateTime = DateTime.MinValue;
            if (EndDateTime == null) EndDateTime = DateTime.MaxValue;
            switch (group)
            {
                case DateGroupType.Week:
                    {
                        Group = MathGroup.GetHistorySalesWeek(db.HistorySales.Where(x => x.DateSale >= StartDateTime).Where(x => x.DateSale <= EndDateTime).OrderBy(x => x.DateSale).ToList());
                        break;
                    }
                case DateGroupType.Month:
                    {
                        Group = MathGroup.GetHistorySalesMonth(db.HistorySales.Where(x => x.DateSale >= StartDateTime).Where(x => x.DateSale <= EndDateTime).OrderBy(x => x.DateSale).ToList());
                        break;
                    }
                case DateGroupType.Quarter:
                    {
                        Group = MathGroup.GetHistorySalesQuarter(db.HistorySales.Where(x => x.DateSale >= StartDateTime).Where(x => x.DateSale <= EndDateTime).OrderBy(x => x.DateSale).ToList());
                        break;
                    }
                default:
                    {
                        Group = MathGroup.GetHistorySalesDay(db.HistorySales.Where(x => x.DateSale >= StartDateTime).Where(x => x.DateSale <= EndDateTime).OrderBy(x => x.DateSale).ToList());
                        break;
                    }
            }
            return Group;
        }


        // POST api/<HistorySaleController>
        [HttpPost]
        public IActionResult Post(HistorySale historySale)
        {
            if (ModelState.IsValid)
            {
                db.HistorySales.Add(historySale);
                db.SaveChanges();
                return Ok(historySale);
            }
            return BadRequest(ModelState);
        }
    }
}
