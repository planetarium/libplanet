using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using Libplanet.Tx;

namespace Libplanet.Explorer.ViewModels
{
    public class TransactionViewModel
    {
        public string Id { get; set; }
        public byte[] Signature { get; set; }
        public DateTime Timestamp { get; set; }
        public string Sender { get; set; }
        public string Recipient { get; set; }
        public IEnumerable<Dictionary<string, object>> Actions { get; set; }
    }
}
