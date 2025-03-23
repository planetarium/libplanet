using Libplanet.Action.State;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Mocks;

public static class MockUtil
{
    private static readonly IStateStore _stateStore =
        new TrieStateStore(new MemoryKeyValueStore());

    /// <summary>
    /// A disposable empty <see cref="ITrie"/>.
    /// </summary>
    public static ITrie MockTrie => _stateStore.GetStateRoot(default);

    /// <summary>
    /// A disposable empty <see cref="IAccountState"/>.
    /// </summary>
    public static IAccountState MockAccountState => new AccountState(MockTrie);

    /// <summary>
    /// A disposable empty legacy <see cref="IWorldState"/>.
    /// </summary>
    public static IWorldState MockLegacyWorldState => MockWorldState.CreateLegacy(_stateStore);

    /// <summary>
    /// A disposable empty modern <see cref="IWorldState"/>.
    /// </summary>
    public static IWorldState MockModernWorldState => MockWorldState.CreateModern(_stateStore);
}
