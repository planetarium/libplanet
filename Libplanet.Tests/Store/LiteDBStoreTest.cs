using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Org.BouncyCastle.Crypto;
using Xunit;

namespace Libplanet.Tests.Store
{
    public class LiteDBStoreTest : StoreTest, IDisposable
    {
        private readonly LiteDBStoreFixture _fx;

        public LiteDBStoreTest()
        {
            Fx = _fx = new LiteDBStoreFixture();
        }

        public void Dispose()
        {
            _fx?.Dispose();
        }
    }
}
