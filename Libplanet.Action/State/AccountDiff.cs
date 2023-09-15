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
using Libplanet.Types.Consensus;

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
    ///         Any <see langword="null"/> value, again, which is equivalent to non-existent value
    ///         in the underlying storage, in the target for <see cref="FungibleAssetValue"/>
    ///         and <see cref="ValidatorSet"/> is interpreted accordingly.  That is,
    ///         0 amount of <see cref="FungibleAssetValue"/> and empty <see cref="ValidatorSet"/>
    ///         are used.  This is in accordance with how <see cref="IAccountState.GetBalance"/>
    ///         and <see cref="IAccountState.GetValidatorSet"/> would behave.
    ///     </description></item>
    ///     <item><description>
    ///         Due to the reason mentioned directly above, the size of <see cref="AccountDiff"/>
    ///         derived from <see cref="ITrie.Diff"/> may not be the same.  Moreover,
    ///         an <see cref="AccountDiff"/> being empty <em>does not guarantee</em>
    ///         that the data are the same as <see cref="IAccountState"/> is not capable of
    ///         distinguishing between <see langword="null"/> and 0 <see cref="FungibleAssetValue"/>
    ///         and so on and so forth.
    ///     </description></item>
    ///     <item><description>
    ///         As <see cref="Currency"/> information is in the domain of an application using
    ///         this library, only the hash of a <see cref="Currency"/> is directly stored in
    ///         the underlying storage.  As such, each <see cref="Currency"/> and
    ///         <see cref="FungibleAssetValue"/> are handled as raw values, that is, as hash and
    ///         <see cref="Integer"/>, for an <see cref="AccountDiff"/>.
    ///     </description></item>
    /// </list>
    /// </summary>
    public class AccountDiff
    {
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

        private AccountDiff(
            ImmutableDictionary<Address, (IValue?, IValue)> stateDiff,
            ImmutableDictionary<(Address, HashDigest<SHA1>), (Integer, Integer)>
                fungibleAssetValueDiff,
            ImmutableDictionary<HashDigest<SHA1>, (Integer, Integer)>
                totalSupplyDiff,
            (ValidatorSet, ValidatorSet)? validatorSetDiff)
        {
            StateDiffs = stateDiff;
            FungibleAssetValueDiffs = fungibleAssetValueDiff;
            TotalSupplyDiffs = totalSupplyDiff;
            ValidatorSetDiff = validatorSetDiff;
        }

        public ImmutableDictionary<Address, (IValue?, IValue)> StateDiffs { get; }

        public ImmutableDictionary<(Address, HashDigest<SHA1>), (Integer, Integer)>
            FungibleAssetValueDiffs { get; }

        public ImmutableDictionary<HashDigest<SHA1>, (Integer, Integer)>
            TotalSupplyDiffs { get; }

        public (ValidatorSet, ValidatorSet)? ValidatorSetDiff { get; }

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
            Dictionary<(Address, HashDigest<SHA1>), (Integer, Integer)> favDiffs =
                new Dictionary<(Address, HashDigest<SHA1>), (Integer, Integer)>();
            Dictionary<HashDigest<SHA1>, (Integer, Integer)> totalSupplyDiffs =
                new Dictionary<HashDigest<SHA1>, (Integer, Integer)>();
            (ValidatorSet, ValidatorSet)? validatorSetDiff = null;

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
                    var favd = ToFAVDiff(diff);

                    // NOTE: Only add when different.  Actual stored data may be different
                    // as 0 value can also be represented as null.
                    if (!favd.SourceValue.Equals(favd.TargetValue))
                    {
                        favDiffs[(favd.Address, favd.Currency)] =
                            (favd.TargetValue, favd.SourceValue);
                    }
                }
                else if (diff.Path.Length == _totalSupplyKeyLength)
                {
                    var tsd = ToTotalSupplyDiff(diff);

                    // NOTE: Only add when different.  Actual stored data may be different
                    // as 0 value can also be represented as null.
                    if (!tsd.SourceValue.Equals(tsd.TargetValue))
                    {
                        totalSupplyDiffs[tsd.Currency] = (tsd.TargetValue, tsd.SourceValue);
                    }
                }
                else if (diff.Path.Length == _validatorSetKeyLength)
                {
                    var vsd = ToValidatorSetDiff(diff);

                    // NOTE: Only set when different.  Actual stored data may be different
                    // as empty validator set can also be represented as null.
                    if (!vsd.SourceValue.Equals(vsd.TargetValue))
                    {
                        validatorSetDiff = (vsd.TargetValue, vsd.SourceValue);
                    }
                }
                else
                {
                    throw new ArgumentException(
                        $"Encountered different values at an invalid location: {diff.Path}");
                }
            }

            return new AccountDiff(
                stateDiffs.ToImmutableDictionary(),
                favDiffs.ToImmutableDictionary(),
                totalSupplyDiffs.ToImmutableDictionary(),
                validatorSetDiff);
        }

        internal static (Address Address, IValue? TargetValue, IValue SourceValue)
            ToStateDiff((KeyBytes Path, IValue? TargetValue, IValue SourceValue) encoded)
        {
            return (
                ToAddress(encoded.Path.ToByteArray()),
                encoded.TargetValue,
                encoded.SourceValue);
        }

        internal static (
            Address Address,
            HashDigest<SHA1> Currency,
            Integer TargetValue,
            Integer SourceValue) ToFAVDiff(
                (KeyBytes Path, IValue? TargetValue, IValue SourceValue) encoded)
        {
            Address address =
                ToAddress(
                    encoded.Path.ByteArray.Skip(1).Take(_addressKeyLength).ToArray());
            HashDigest<SHA1> currencyHash =
                ToCurrencyHash(
                    encoded.Path.ByteArray
                        .Skip(_addressKeyLength + 2)
                        .Take(_currencyKeyLength)
                        .ToArray());
            Integer sourceValue = encoded.SourceValue is Integer sourceInteger
                ? sourceInteger
                : throw new ArgumentException(
                    $"Expected an {nameof(Integer)} but encountered an invalid value " +
                    $"{encoded.SourceValue} at {encoded.Path}");
            Integer targetValue = encoded.TargetValue is { } value
                ? value is Integer targetInteger
                    ? targetInteger
                    : throw new ArgumentException(
                        $"Expected an {nameof(Integer)} but encountered " +
                        $"an invalid value {encoded.TargetValue} at {encoded.Path}")
                : new Integer(0);

            return (address, currencyHash, targetValue, sourceValue);
        }

        internal static (
            HashDigest<SHA1> Currency,
            Integer TargetValue,
            Integer SourceValue) ToTotalSupplyDiff(
                (KeyBytes Path, IValue? TargetValue, IValue SourceValue) encoded)
        {
            HashDigest<SHA1> currencyHash =
                ToCurrencyHash(
                    encoded.Path.ByteArray
                        .Skip(2)
                        .Take(_currencyKeyLength)
                        .ToArray());
            Integer sourceValue = encoded.SourceValue is Integer sourceInteger
                ? sourceInteger
                : throw new ArgumentException(
                    $"Expected an {nameof(Integer)} but encountered an invalid value " +
                    $"{encoded.SourceValue} at {encoded.Path}");
            Integer targetValue = encoded.TargetValue is { } value
                ? value is Integer targetInteger
                    ? targetInteger
                    : throw new ArgumentException(
                        $"Expected an {nameof(Integer)} but encountered " +
                        $"an invalid value {encoded.TargetValue} at {encoded.Path}")
                : new Integer(0);

            return (currencyHash, targetValue, sourceValue);
        }

        internal static (ValidatorSet TargetValue, ValidatorSet SourceValue)
            ToValidatorSetDiff(
                (KeyBytes Path, IValue? TargetValue, IValue SourceValue) encoded)
        {
            if (encoded.Path.Equals(KeyConverters.ValidatorSetKey))
            {
                ValidatorSet sourceVS = new ValidatorSet(encoded.SourceValue);
                ValidatorSet targetVS = encoded.TargetValue is { } value
                    ? new ValidatorSet(value)
                    : new ValidatorSet();
                return (targetVS, sourceVS);
            }
            else
            {
                throw new ArgumentException(
                    $"Encountered different values at an invalid location: {encoded.Path}");
            }
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

        // FIXME: This assumes to know that hash algorithm used by Currency is SHA1.
        internal static HashDigest<SHA1> ToCurrencyHash(byte[] bytes)
        {
            var expectedLength = _currencyKeyLength;
            if (bytes.Length != expectedLength)
            {
                throw new ArgumentException(
                    $"Given {nameof(bytes)} must be of length {_currencyKeyLength}: " +
                    $"{bytes.Length}");
            }

            byte[] buffer = new byte[HashDigest<SHA1>.Size];
            for (int i = 0; i < buffer.Length; i++)
            {
                buffer[i] = Pack(bytes[i * 2], bytes[i * 2 + 1]);
            }

            return new HashDigest<SHA1>(buffer);
        }

        // FIXME: Assumes both x and y are less than 16.
        private static byte Pack(byte x, byte y) =>
            (byte)((_reverseConversionTable[x] << 4) + _reverseConversionTable[y]);
    }
}
