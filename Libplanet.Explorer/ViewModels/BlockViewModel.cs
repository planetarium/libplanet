using System.Collections.Generic;
using System.Security.Cryptography;
using Libplanet.Tx;

namespace Libplanet.Explorer.ViewModels
{
    public class BlockViewModel
    {
        public long Index { get; set; }
        public int Difficulty { get; set; }
        public string Nonce { get; set; }
        public string RewardBeneficiary { get; set; }
        public string PreviousHash { get; set; }
        public string Timestamp { get; set; }
        public List<Dictionary<string, string>> TxIds { get; set; }
    }
}
