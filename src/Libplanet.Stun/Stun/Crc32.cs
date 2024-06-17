using System;
using System.Collections.Generic;
using System.Linq;

namespace Libplanet.Stun
{
    public static class Crc32
    {
        private const uint _generator = 0xEDB88320;
        private static readonly uint[] _checksumTable;

        static Crc32()
        {
            _checksumTable = Enumerable.Range(0, 256).Select(
                i =>
                {
                    var tableEntry = (uint)i;
                    for (int j = 0; j < 8; ++j)
                    {
                        tableEntry = ((tableEntry & 1) != 0)
                        ? (_generator ^ (tableEntry >> 1))
                        : (tableEntry >> 1);
                    }

                    return tableEntry;
                }).ToArray();
        }

        public static uint Calculate(IEnumerable<byte> bytes)
        {
            return ~bytes.Aggregate(
                0xFFFFFFFF,
                (register, current) =>
                {
                    var index = (register & 0xFF) ^ Convert.ToByte(current);
                    return _checksumTable[index] ^ (register >> 8);
                });
        }
    }
}
