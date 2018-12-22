using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Explorer.ViewModels
{
    public class AddressViewModel
    {
        public List<Dictionary<string, string>> Tx { get; set; }
        public AddressStateMap State { get; set; }
    }
}
