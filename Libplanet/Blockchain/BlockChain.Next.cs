using System.Security.Cryptography;
using Libplanet.Common;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        private HashDigest<SHA256>? _nextStateRootHash;

        public HashDigest<SHA256>? NextStateRootHash => _nextStateRootHash;
    }
}
