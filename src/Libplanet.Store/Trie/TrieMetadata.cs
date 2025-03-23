using System;
using Bencodex;
using Bencodex.Types;
using Libplanet.Types.Blocks;

namespace Libplanet.Store.Trie;

/// <summary>
/// <para>
/// A metadata object to be injected to an <see cref="ITrie"/> to identify
/// and validate the data model.  The is to be injected at the root of
/// an <see cref="ITrie"/> with the zero byte array path.
/// </para>
/// <para>
/// <see cref="Version"/> represents under which <see cref="IBlockMetadata.ProtocolVersion"/>
/// the <see cref="ITrie"/> is to be interpreted.
/// </para>
/// <para>
/// This is newly introduced since <see cref="BlockMetadata.WorldStateProtocolVersion"/> and
/// every <see cref="ITrie"/> handled prior to
/// <see cref="BlockMetadata.WorldStateProtocolVersion"/> lacks this data.
/// </para>
/// </summary>
/// <remarks>
/// Due to some backward compatibility constraints, and in particular an empty
/// <see cref="Block"/> being allowed with no state transition, an <see cref="ITrie"/>
/// associated with the <see cref="Block.StateRootHash"/> of a <see cref="Block"/> with
/// <see cref="IBlockMetadata.ProtocolVersion"/> is <em>not guaranteed</em> to have
/// the same <see cref=Version"/> as the <see cref="Block"/>'s
/// <see cref="IBlockMetadata.ProtocolVersion"/>.
/// </remarks>
public sealed record class TrieMetadata : IBencodable
{
    /// <summary>
    /// Creates a <see cref="TrieMetadata"/> instance.
    /// </summary>
    /// <param name="version">The version of the <see cref="TrieMetadata"/> to create.
    /// This must equal to the version of <see cref="IPreEvaluationBlock"/> that is
    /// under evaluation.</param>
    /// <exception cref="ArgumentException">Thrown when either <paramref name="version"/>
    /// is less than <see cref="BlockMetadata.WorldStateProtocolVersion"/> or
    /// greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>.</exception>
    public TrieMetadata(int version)
    {
        if (version < BlockMetadata.WorldStateProtocolVersion ||
            version > BlockMetadata.CurrentProtocolVersion)
        {
            throw new ArgumentException(
                $"Given {nameof(version)} cannot be less than " +
                $"{BlockMetadata.WorldStateProtocolVersion} or greater than " +
                $"{BlockMetadata.CurrentProtocolVersion}: {version}",
                nameof(version));
        }

        Version = version;
    }

    public TrieMetadata(IValue value)
    {
        if (value is not List list)
        {
            var message = $"Given {nameof(value)} must be of type " +
                          $"{typeof(Binary)}: {value.GetType()}";
            throw new ArgumentException(message, nameof(value));
        }

        Version = (int)((Integer)list[0]).Value;
    }

    public int Version { get; }

    public IValue Bencoded => new List(new Integer(Version));
}
