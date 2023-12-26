using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store.Trie;

namespace Libplanet.Action.State
{
    internal static class KeyConverters
    {
        // "___"
        internal static readonly KeyBytes ValidatorSetKey =
            new KeyBytes(new byte[] { _underScore, _underScore, _underScore });

        private const byte _underScore = 95;  // '_'

        private static readonly byte[] _conversionTable =
        {
            48,  // '0'
            49,  // '1'
            50,  // '2'
            51,  // '3'
            52,  // '4'
            53,  // '5'
            54,  // '6'
            55,  // '7'
            56,  // '8'
            57,  // '9'
            97,  // 'a'
            98,  // 'b'
            99,  // 'c'
            100, // 'd'
            101, // 'e'
            102, // 'f'
        };

        // $"{ByteUtil.Hex(address.ByteArray)}"
        internal static KeyBytes ToStateKey(Address address)
        {
            var addressBytes = address.ByteArray;
            byte[] buffer = new byte[addressBytes.Length * 2];
            for (int i = 0; i < addressBytes.Length; i++)
            {
                buffer[i * 2] = _conversionTable[addressBytes[i] >> 4];
                buffer[i * 2 + 1] = _conversionTable[addressBytes[i] & 0xf];
            }

            return new KeyBytes(buffer);
        }

        // $"_{ByteUtil.Hex(address.ByteArray)}_{ByteUtil.Hex(currencyHash.ByteArray)}"
        internal static KeyBytes ToFungibleAssetKey(Address address, HashDigest<SHA1> currencyHash)
        {
            var addressBytes = address.ByteArray;
            var currencyBytes = currencyHash.ByteArray;
            byte[] buffer = new byte[addressBytes.Length * 2 + currencyBytes.Length * 2 + 2];

            buffer[0] = _underScore;
            for (int i = 0; i < addressBytes.Length; i++)
            {
                buffer[1 + i * 2] = _conversionTable[addressBytes[i] >> 4];
                buffer[1 + i * 2 + 1] = _conversionTable[addressBytes[i] & 0xf];
            }

            var offset = addressBytes.Length * 2;
            buffer[offset + 1] = _underScore;
            for (int i = 0; i < currencyBytes.Length; i++)
            {
                buffer[offset + 2 + i * 2] = _conversionTable[currencyBytes[i] >> 4];
                buffer[offset + 2 + i * 2 + 1] = _conversionTable[currencyBytes[i] & 0xf];
            }

            return new KeyBytes(buffer);
        }

        // $"__{ByteUtil.Hex(currencyHash.ByteArray)}"
        internal static KeyBytes ToTotalSupplyKey(HashDigest<SHA1> currencyHash)
        {
            var currencyBytes = currencyHash.ByteArray;
            byte[] buffer = new byte[currencyBytes.Length * 2 + 2];

            buffer[0] = _underScore;
            buffer[1] = _underScore;

            for (int i = 0; i < currencyBytes.Length; i++)
            {
                buffer[2 + i * 2] = _conversionTable[currencyBytes[i] >> 4];
                buffer[2 + i * 2 + 1] = _conversionTable[currencyBytes[i] & 0xf];
            }

            return new KeyBytes(buffer);
        }
    }
}
