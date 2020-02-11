using System.Collections;
using System.Collections.Generic;
using System.Security.Cryptography;

namespace Libplanet.Blockchain
{
    internal class BlockLocator : IEnumerable<HashDigest<SHA256>>
    {
        private readonly IEnumerable<HashDigest<SHA256>> _impl;

        public BlockLocator(IEnumerable<HashDigest<SHA256>> hashes)
        {
            _impl = hashes;
        }

        public IEnumerator<HashDigest<SHA256>> GetEnumerator()
        {
            return _impl.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return _impl.GetEnumerator();
        }
    }
}
