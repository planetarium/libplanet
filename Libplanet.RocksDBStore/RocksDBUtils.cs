using System.IO;
using RocksDbSharp;

namespace Libplanet.RocksDBStore
{
    internal static class RocksDBUtils
    {
        internal static RocksDb OpenRocksDb(
            DbOptions options,
            string dbPath,
            ColumnFamilies? columnFamilies = null,
            bool readOnly = false
        )
        {
            if (!Directory.Exists(dbPath))
            {
                Directory.CreateDirectory(dbPath);
            }

            if (readOnly)
            {
                return columnFamilies is null
                    ? RocksDb.OpenReadOnly(options, dbPath, false)
                    : RocksDb.OpenReadOnly(options, dbPath, columnFamilies, false);
            }

            return columnFamilies is null
                ? RocksDb.Open(options, dbPath)
                : RocksDb.Open(options, dbPath, columnFamilies);
        }
    }
}
