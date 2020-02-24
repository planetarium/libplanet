using System;
using System.Collections;
using System.Collections.Generic;
using System.Security.Cryptography;

namespace Libplanet.Blockchain
{
    internal class BlockLocator : IEnumerable<HashDigest<SHA256>>
    {
        private readonly IEnumerable<HashDigest<SHA256>> _impl;

        public BlockLocator(
            Func<long, HashDigest<SHA256>?> indexBlockHash,
            Func<HashDigest<SHA256>, long> indexByBlockHash,
            int sampleAfter = 10
        )
        {
            HashDigest<SHA256>? current = indexBlockHash(-1);
            long step = 1;
            var hashes = new List<HashDigest<SHA256>>();
            while (current is HashDigest<SHA256> hash)
            {
                hashes.Add(hash);
                long currentBlockIndex = indexByBlockHash(hash);

                if (currentBlockIndex == 0)
                {
                    break;
                }

                long nextIndex = Math.Max(currentBlockIndex - step, 0);
                current = indexBlockHash(nextIndex);

                if (hashes.Count >= sampleAfter)
                {
                    step *= 2;
                }
            }

            _impl = hashes;
        }

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
