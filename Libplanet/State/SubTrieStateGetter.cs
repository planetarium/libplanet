using Bencodex.Types;

namespace Libplanet.State
{
    public delegate IValue? SubTrieStateGetter(IAccount account, Address keyAddress);
}
