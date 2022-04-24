using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assesment.Model
{
    public class TblGrade
    {
        [Key]
        public int Grade { get; set; }
        public int Salary { get; set; }
    }
}
