using System.Collections.Generic;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store.Trie;

/// <summary>
/// An interface for <see href="https://en.wikipedia.org/wiki/Merkle_tree">Merkle Tree</see>.
/// </summary>
/// <seealso cref="MerkleTrie"/>
public interface ITrie
{
    /// <summary>
    /// The root of the <see cref="ITrie"/>.  This is <see langword="null"/> if and only if
    /// the <see cref="ITrie"/> is empty.  That is, this is never a "hashed node" of a
    /// <see langword="null"/> root.
    /// </summary>
    /// <seealso cref="Hash"/>
    INode? Node { get; }

    /// <summary>
    /// The state root hash of the trie.
    /// </summary>
    /// <remarks>
    /// If <see cref="Node"/> is <see langword="null"/>, this still gives a unique
    /// <see cref="HashDigest{SHA256}"/> value corresponding to <see langword="null"/>
    /// that is <em>never recorded</em>.
    /// </remarks>
    /// <seealso cref="Node"/>
    HashDigest<SHA256> Hash { get; }

    /// <summary>
    /// Whether <see cref="Node"/> is recorded in the store.
    /// </summary>
    /// <remarks>A <see cref="Node"/> that is <see langword="null"/> is always considered
    /// as recorded.
    /// </remarks>
    bool Recorded { get; }

    /// <summary>
    /// Gets or sets the value stored with the specified <paramref name="key"/>.
    /// </summary>
    /// <param name="key">The key used to store or retrieve a value.</param>
    /// <returns>The value associated with the specified <paramref name="key"/>.
    /// Absent value is represented as <see langword="null"/>.</returns>
    IValue? this[in KeyBytes key] { get; }

    /// <summary>
    /// Stores the <paramref name="value"/> at the path corresponding to
    /// given <paramref name="key"/> <em>in memory</em>.
    /// </summary>
    /// <param name="key">The unique key to associate with the <paramref name="value"/>.</param>
    /// <param name="value">The value to store.</param>
    /// <exception cref="System.ArgumentNullException">Thrown when the given
    /// <paramref name="value"/> is <see langword="null"/>.</exception>
    /// <returns>Returns new updated <see cref="ITrie"/>.</returns>
    /// <remarks>
    /// This <em>should not</em> actually write anything to storage.
    /// Stored <paramref name="value"/> is actually written to storage when
    /// <see cref="IStateStore.Commit"/> is called.
    /// </remarks>
    /// <seealso cref="IStateStore.Commit"/>
    ITrie Set(in KeyBytes key, IValue value);

    /// <summary>
    /// Removes the value at the path corresponding to given <paramref name="key"/>
    /// <em>in memory</em>.  If there is no <see cref="IValue"/> at <paramref name="key"/>,
    /// this does nothing.
    /// </summary>
    /// <param name="key">The unique key to associate with the <paramref name="value"/>.</param>
    /// <returns>Returns new updated <see cref="ITrie"/>.</returns>
    /// <remarks>
    /// This <em>should not</em> actually remove anything from storage.
    /// The removal of the value at the marked path given by <paramref name="key"/> is actually
    /// recorded to storage when <see cref="IStateStore.Commit"/> is called.
    /// Regardless, there is actually no removal of any value from storage even when
    /// <see cref="IStateStore.Commit"/> is called.
    /// </remarks>
    /// <seealso cref="IStateStore.Commit"/>
    ITrie Remove(in KeyBytes key);

    /// <summary>
    /// Gets the first node encountered at <paramref name="nibbles"/> when traversing down
    /// from <see cref="Node"/>.
    /// </summary>
    /// <param name="nibbles">The path to check.</param>
    /// <returns>A node at <paramref name="nibbles"/>, if any.
    /// Otherwise <see langword="null"/>.</returns>
    /// <exception cref="InvalidTrieNodeException">Thrown when an unknown type
    /// of <see cref="INode"/> is encountered while traversing to the given path.</exception>
    /// <remarks>
    /// <para>
    /// There may be more than one <see cref="INode"/> at <paramref name="nibbles"/>.
    /// For instance, a <see cref="FullNode"/>, a <see cref="ValueNode"/> as the value of the
    /// aforementioned <see cref="FullNode"/>, and up to two additional <see cref="HashNode"/>s
    /// is possible.
    /// </para>
    /// <para>
    /// As such, for two equivalent <see cref="ITrie"/>s, <see cref="Trie"/>s that
    /// <em>would have the same committed <see cref="Hash"/>es</em>, this may return different
    /// types of <see cref="INode"/> depending on the actual underlying "structure".
    /// However, returned <see cref="INode"/>s for such <see cref="ITrie"/>s are
    /// equivalent as sub-<see cref="ITrie"/>s.
    /// </para>
    /// </remarks>
    INode? GetNode(in Nibbles nibbles);

    /// <summary>
    /// Iterates and every stored <see cref="IValue"/> along with its respective
    /// path in <see cref="KeyBytes"/>.
    /// </summary>
    /// <returns>An <see cref="IEnumerable{T}"/> of all <see cref="IValue"/>s
    /// in no particular order.</returns>
    /// <remarks>
    /// This is a very heavy operation.
    /// </remarks>
    IEnumerable<(KeyBytes Path, IValue Value)> IterateValues();

    /// <summary>
    /// Iterates and every stored <see cref="INode"/> along with its respective
    /// path in <see cref="Nibbles"/>.
    /// </summary>
    /// <returns>An <see cref="IEnumerable{T}"/> of all <see cref="INode"/>s
    /// in no particular order.</returns>
    /// <remarks>
    /// This is a very heavy operation.
    /// </remarks>
    IEnumerable<(Nibbles Path, INode Node)> IterateNodes();

    /// <summary>
    /// Lists every non-<see langword="null"/> <see cref="IValue"/> that is different
    /// from the one stored in <paramref name="other"/> given any <see cref="KeyBytes"/> path.
    /// </summary>
    /// <param name="other">The other <see cref="MerkleTrie"/> to compare to.</param>
    /// <returns>A list of tuples where each tuple consists of the path where
    /// the difference occurred, the "old" value from <paramref name="other"/> and
    /// the current "new" value.</returns>
    /// <exception cref="InvalidTrieNodeException">Thrown when the method fails
    /// to traverse the <see cref="ITrie"/>.</exception>
    /// <remarks>
    /// This operation has the following properties:
    /// <list type="bullet">
    ///     <item><description>
    ///         This operation is non-symmetric.  That is, in general,
    ///         <c>trieA.Diff(trieB)</c> and <c>trieB.Diff(trieA)</c> are not the same.
    ///     </description></item>
    ///     <item><description>
    ///         Values existing in <paramref name="other"/> but not in the source instance,
    ///         considered as <see langword="null"/> in the source, are not included in the
    ///         result.
    ///     </description></item>
    /// </list>
    /// </remarks>
    IEnumerable<(KeyBytes Path, IValue? TargetValue, IValue SourceValue)> Diff(ITrie other);
}
