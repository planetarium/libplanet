using System;
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
            RocksDbInstanceType type = RocksDbInstanceType.Primary)
        {
            if (!Directory.Exists(dbPath))
            {
                Directory.CreateDirectory(dbPath);
            }

            return type switch
            {
                RocksDbInstanceType.Primary => columnFamilies is null
                    ? RocksDb.Open(options, dbPath) : RocksDb.Open(options, dbPath, columnFamilies),
                RocksDbInstanceType.ReadOnly => columnFamilies is null
                    ? RocksDb.OpenReadOnly(options, dbPath, false)
                    : RocksDb.OpenReadOnly(options, dbPath, columnFamilies, false),
                RocksDbInstanceType.Secondary => columnFamilies is null
                    ? RocksDb.OpenAsSecondary(options, dbPath, CreateSecondaryPath(dbPath))
                    : RocksDb.OpenAsSecondary(
                        options,
                        dbPath,
                        CreateSecondaryPath(dbPath),
                        columnFamilies),
                _ => throw new ArgumentOutOfRangeException(nameof(type), type, null),
            };
        }

        private static string CreateSecondaryPath(string dbPath)
        {
            string secondaryPath = Path.Combine(dbPath, $"secondary-{Guid.NewGuid()}");
            if (!Directory.Exists(secondaryPath))
            {
                Directory.CreateDirectory(secondaryPath);
            }

            return secondaryPath;
        }
    }
}
