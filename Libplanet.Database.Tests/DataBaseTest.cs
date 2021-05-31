using System;
using System.IO;
using Libplanet.DataBase;
using Libplanet.DataBase.Rocksdb;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Database.Tests
{
    public class DataBaseTest : IDisposable
    {
        private readonly ITestOutputHelper _testOutputHelper;
        private readonly string _path;
        private readonly IDataBase _db;

        public DataBaseTest(ITestOutputHelper testOutputHelper)
        {
            _testOutputHelper = testOutputHelper;
            _path = Path.Combine(
                Path.GetTempPath(),
                $"rocksdb_test_{Guid.NewGuid()}"
            );

            _db = new RocksDb(_path);
        }

        [Theory]
        [InlineData(new byte[] {0x00, 0x01}, new byte[] {0x00, 0x00})]
        [InlineData(new byte[] {0x00, 0x02}, new byte[] {0x00, 0x11})]
        [InlineData(new byte[] {0x00, 0x03}, new byte[] {0x00, 0x22})]
        public void TestGetSetHasDelete(byte[] key, byte[] value)
        {
            _db.Set(key, value);
            Assert.True(Utils.ByteCompare(value, _db.Get(key)) == 0);
            Assert.True(_db.Has(key));
            Assert.False(_db.Has(new byte[] {0xFF, 0xFF, 0xFF}));
            _db.Delete(key);
            Assert.False(_db.Has(key));
        }

        [Fact]
        public void TestIteratorNormal()
        {
            _db.Set(new byte[] {0x00, 0x01, 0x00}, new byte[] {0x00, 0x00});
            _db.Set(new byte[] {0x00, 0x01, 0x01}, new byte[] {0x00, 0x11});
            _db.Set(new byte[] {0x00, 0x01, 0x02}, new byte[] {0x00, 0x22});
            _db.Set(new byte[] {0x00, 0x01, 0x03}, new byte[] {0x00, 0x33});
            _db.Set(new byte[] {0x00, 0x01, 0x04}, new byte[] {0x00, 0x44});
            for (
                var it = _db.Iterator(new byte[] {0x00, 0x01, 0x00}, new byte[] {0x00, 0x01, 0x05});
                it.Valid();
                it.Next())
            {
                _testOutputHelper.WriteLine("blah");
                _testOutputHelper.WriteLine(string.Join(", ", it.Key()));
                _testOutputHelper.WriteLine(string.Join(", ", it.Value()));
            }
        }

        [Fact]
        public void TestMyData()
        {
            _db.Set(new byte[] {0x00}, new byte[] {0x00, 0x00});
            _db.Set(new byte[] {0x00, 0x01}, new byte[] {0x00, 0x11});
            _db.Set(new byte[] {0x00, 0x01, 0x02}, new byte[] {0x00, 0x22});
            _db.Set(new byte[] {0x00, 0x01, 0x03}, new byte[] {0x00, 0x33});
            _db.Set(new byte[] {0x00, 0x01, 0x04, 0x05}, new byte[] {0x00, 0x44});

            var it = _db.Iterator(new byte[] {0x00}, new byte[] {0x00, 0x02});
            _testOutputHelper.WriteLine(string.Join(", ", it.Key()));
            it.Next();
            _testOutputHelper.WriteLine(string.Join(", ", it.Key()));
            it.Next();
            _testOutputHelper.WriteLine(string.Join(", ", it.Key()));
            it.Next();
            _testOutputHelper.WriteLine(string.Join(", ", it.Key()));
            it.Next();
            _testOutputHelper.WriteLine(string.Join(", ", it.Key()));
        }

        public void Dispose()
        {
            _db?.Dispose();
            if (!(_path is null))
            {
                Directory.Delete(_path, true);
            }
        }
    }
}
