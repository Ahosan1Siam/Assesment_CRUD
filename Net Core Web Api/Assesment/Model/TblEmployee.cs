using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Assesment.Model
{
    public class TblEmployee
    {   
        [Key]
        public int ID { get; set; }

        [StringLength(150)]
        public string Name { get; set; }


        public string Address { get; set; }

        [MaxLength(11)]
        public string Mobile { get; set; }

        public int Grade { get; set; }

        [NotMapped]

        public int Salary { get; set; }
    }
}
