using System.Collections.Immutable;
using Bencodex.Types;

namespace Libplanet.Tx
{
    public interface ITransaction : ITxExcerpt
    {
        public byte[] Signature { get; }

        public Dictionary? SystemAction { get; }

        public IImmutableList<IValue>? CustomActions { get; }
    }
}
