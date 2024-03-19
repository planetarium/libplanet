using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;

namespace Libplanet.Action.State
{
    /// <summary>
    /// Represents a difference between two <see cref="IAccountState"/>s.
    /// This is a partial interpretation of a raw difference obtained by <see cref="ITrie.Diff"/>
    /// from <see cref="IAccountState"/>'s perspective.  Keep in mind of the following properties:
    /// <list type="bullet">
    ///     <item><description>
    ///         Any <see lagnword="null"/> value, which is equivalent to non-existent value in
    ///         the underlying storage, in the source is <em>ignored</em>.  That is, even if
    ///         the value in the target and the value in the source are different while
    ///         the value in the source is <see langword="null"/>, this will not be
    ///         part of the resulting <see cref="AccountDiff"/>.
    ///     </description></item>
    ///     <item><description>
    ///         This only shows the difference in "states" manipulated using
    ///         <see cref="IAccount.SetState"/> and <see cref="IAccount.RemoveState"/>.  That is,
    ///         this does care about differences in <see cref="FungibleAssetValue"/>s.
    ///     </description></item>
    ///     <item><description>
    ///         Due to the reason mentioned directly above, the size of <see cref="AccountDiff"/>
    ///         derived from <see cref="ITrie.Diff"/> may not be the same.  Moreover,
    ///         an <see cref="AccountDiff"/> being empty <em>does not guarantee</em>
    ///         that the data represented by <see cref="IAccountState"/>s are the same.
    ///     </description></item>
    /// </list>
    /// </summary>
    public class AccountDiff
    {
        private static readonly int _metadataKeyLength = 0;

        private static readonly int _addressKeyLength = Address.Size * 2;

        private static readonly int _currencyKeyLength = HashDigest<SHA1>.Size * 2;

        private static readonly int _stateKeyLength = _addressKeyLength;

        private static readonly int _fungibleAssetKeyLength =
            _addressKeyLength + _currencyKeyLength + 2;

        private static readonly int _totalSupplyKeyLength = _currencyKeyLength + 2;

        private static readonly int _validatorSetKeyLength = 3;

        private static readonly ImmutableDictionary<int, byte> _reverseConversionTable =
            new Dictionary<int, byte>()
            {
                [48] = 0,   // '0'
                [49] = 1,   // '1'
                [50] = 2,   // '2'
                [51] = 3,   // '3'
                [52] = 4,   // '4'
                [53] = 5,   // '5'
                [54] = 6,   // '6'
                [55] = 7,   // '7'
                [56] = 8,   // '8'
                [57] = 9,   // '9'
                [97] = 10,  // 'a'
                [98] = 11,  // 'b'
                [99] = 12,  // 'c'
                [100] = 13, // 'd'
                [101] = 14, // 'e'
                [102] = 15, // 'f'
            }.ToImmutableDictionary();

        private AccountDiff(ImmutableDictionary<Address, (IValue?, IValue)> stateDiff)
        {
            StateDiffs = stateDiff;
        }

        public ImmutableDictionary<Address, (IValue?, IValue)> StateDiffs { get; }

        /// <summary>
        /// Creates an <see cref="AccountDiff"/> instance from given parameters.
        /// </summary>
        /// <param name="target">The <see cref="IAccountState"/> to use as the target.</param>
        /// <param name="source">The <see cref="IAccountState"/> to use as the source.</param>
        /// <returns>An <see cref="AccountDiff"/> created from given parameters.</returns>
        /// <remarks>Note that the ordering of the parameters are flipped compared to
        /// <see cref="ITrie.Diff"/> for syntactical reasons.</remarks>
        /// <seealso cref="ITrie.Diff"/>
        /// <seealso cref="Create(ITrie, ITrie)"/>
        public static AccountDiff Create(IAccountState target, IAccountState source)
            => Create(target.Trie, source.Trie);

        /// <summary>
        /// Creates an <see cref="AccountDiff"/> instance from given parameters.
        /// </summary>
        /// <param name="target">The <see cref="ITrie"/> to use as the target.</param>
        /// <param name="source">The <see cref="ITrie"/> to use as the source.</param>
        /// <returns>An <see cref="AccountDiff"/> created from given parameters.</returns>
        /// <exception cref="ArgumentException">Thrown when the diff internally obtained from
        /// <see cref="ITrie.Diff"/> cannot be properly interpreted.</exception>
        /// <remarks>Note that the ordering of the parameters are flipped compared to
        /// <see cref="ITrie.Diff"/> for syntactical reasons.</remarks>
        /// <seealso cref="ITrie.Diff"/>
        /// <seealso cref="Create(IAccountState, IAccountState)"/>
        public static AccountDiff Create(ITrie target, ITrie source)
        {
            var rawDiffs = source.Diff(target).ToList();

            Dictionary<Address, (IValue?, IValue)> stateDiffs =
                new Dictionary<Address, (IValue?, IValue)>();

            foreach (var diff in rawDiffs)
            {
                // NOTE: Cannot use switch as some lengths cannot be derived as const.
                if (diff.Path.Length == _stateKeyLength)
                {
                    var sd = ToStateDiff(diff);
                    stateDiffs[sd.Address] = (sd.TargetValue, sd.SourceValue);
                }
                else if (diff.Path.Length == _fungibleAssetKeyLength)
                {
                    continue;
                }
                else if (diff.Path.Length == _totalSupplyKeyLength)
                {
                    continue;
                }
                else if (diff.Path.Length == _validatorSetKeyLength)
                {
                    continue;
                }
                else if (diff.Path.Length == _metadataKeyLength)
                {
                    continue;
                }
                else
                {
                    throw new ArgumentException(
                        $"Encountered different values at an invalid location: {diff.Path}");
                }
            }

            return new AccountDiff(stateDiffs.ToImmutableDictionary());
        }

        internal static (Address Address, IValue? TargetValue, IValue SourceValue)
            ToStateDiff((KeyBytes Path, IValue? TargetValue, IValue SourceValue) encoded)
        {
            return (
                ToAddress(encoded.Path.ToByteArray()),
                encoded.TargetValue,
                encoded.SourceValue);
        }

        internal static Address FromStateKey(KeyBytes key)
        {
            if (key.Length != _stateKeyLength)
            {
                throw new ArgumentException(
                    $"Given {nameof(key)} must be of length {_stateKeyLength}: {key.Length}");
            }

            byte[] buffer = new byte[Address.Size];
            for (int i = 0; i < buffer.Length; i++)
            {
                buffer[i] = Pack(key.ByteArray[i * 2], key.ByteArray[i * 2 + 1]);
            }

            return new Address(buffer);
        }

        internal static Address ToAddress(byte[] bytes)
        {
            if (bytes.Length != _stateKeyLength)
            {
                throw new ArgumentException(
                    $"Given {nameof(bytes)} must be of length {_stateKeyLength}: {bytes.Length}");
            }

            byte[] buffer = new byte[Address.Size];
            for (int i = 0; i < buffer.Length; i++)
            {
                buffer[i] = Pack(bytes[i * 2], bytes[i * 2 + 1]);
            }

            return new Address(buffer);
        }

        // FIXME: Assumes both x and y are less than 16.
        private static byte Pack(byte x, byte y) =>
            (byte)((_reverseConversionTable[x] << 4) + _reverseConversionTable[y]);
    }
}
