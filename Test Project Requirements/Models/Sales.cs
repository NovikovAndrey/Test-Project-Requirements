﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test_Project_Requirements.Models
{
    public class Sales
    {

        public Sales(DateTime key, int salesTemp, decimal amountDollarsTemp)
        {
            DateSale = key;
            Sale = salesTemp;
            AmountDollars = amountDollarsTemp;
        }

        public DateTime DateSale { get; private set; }
        public int Sale { get; private set; }
        public decimal AmountDollars { get; private set; }
    }
}
