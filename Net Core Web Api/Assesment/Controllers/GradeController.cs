using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Assesment.Model;

namespace Assesment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GradeController : ControllerBase
    {
        private readonly EmployeeContext _context;

        public GradeController(EmployeeContext context)
        {
            _context = context;
        }

        // GET: api/Grade
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblGrade>>> GetTblGrade()
        {
            return await _context.TblGrade.ToListAsync();
        }

        // GET: api/Grade/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblGrade>> GetTblGrade(int id)
        {
            var tblGrade = await _context.TblGrade.FindAsync(id);

            if (tblGrade == null)
            {
                return NotFound();
            }

            return tblGrade;
        }

        // PUT: api/Grade/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{salary}")]
        public async Task<IActionResult> PutTblGrade(int salary, TblGrade tblGrade)
        {

            var six = _context.Database.ExecuteSqlRaw(
           @"UPDATE TblGrade
            SET Salary = {0}
            WHERE Grade ={1}", salary, 6);

            var fifth = _context.Database.ExecuteSqlRaw(
            @"UPDATE TblGrade
            SET Salary = {0}
            WHERE Grade ={1}", salary + 3000, 5);

            var fourth = _context.Database.ExecuteSqlRaw(
            @"UPDATE TblGrade
            SET Salary = {0}
            WHERE Grade ={1}", salary + 6000, 4);

            var third = _context.Database.ExecuteSqlRaw(
            @"UPDATE TblGrade
            SET Salary = {0}
            WHERE Grade ={1}", salary + 9000, 3);

            var second = _context.Database.ExecuteSqlRaw(
            @"UPDATE TblGrade
            SET Salary = {0}
            WHERE Grade ={1}", salary + 12000, 2);

            var one = _context.Database.ExecuteSqlRaw(
            @"UPDATE TblGrade
            SET Salary = {0}
            WHERE Grade ={1}", salary + 15000, 1);

            await _context.SaveChangesAsync();
            /*if (id != tblGrade.Grade)
            {
                return BadRequest();
            }

            _context.Entry(tblGrade).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblGradeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }*/

            return NoContent();
        }


        // POST: api/Grade
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TblGrade>> PostTblGrade(TblGrade tblGrade)
        {
            _context.TblGrade.Add(tblGrade);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblGrade", new { id = tblGrade.Grade }, tblGrade);
        }

        // DELETE: api/Grade/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TblGrade>> DeleteTblGrade(int id)
        {
            var tblGrade = await _context.TblGrade.FindAsync(id);
            if (tblGrade == null)
            {
                return NotFound();
            }

            _context.TblGrade.Remove(tblGrade);
            await _context.SaveChangesAsync();

            return tblGrade;
        }

        private bool TblGradeExists(int id)
        {
            return _context.TblGrade.Any(e => e.Grade == id);
        }
    }
}
