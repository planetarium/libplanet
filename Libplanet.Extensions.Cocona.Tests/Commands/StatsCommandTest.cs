namespace Libplanet.Extensions.Cocona.Tests.Commands;

using System;
using System.Collections.Immutable;
using System.IO;
using Libplanet.Extensions.Cocona.Commands;
using Libplanet.RocksDBStore.Tests;
using Libplanet.Tests.Store;
using Xunit;

public class StatsCommandTest : IDisposable
{
    private readonly ImmutableArray<StoreFixture> _storeFixtures;
    private readonly StatsCommand _command;
    private readonly TextWriter _originalWriter;

    public StatsCommandTest()
    {
        _command = new StatsCommand();
        _originalWriter = Console.Out;
        try
        {
            _storeFixtures = ImmutableArray.Create<StoreFixture>(
                new DefaultStoreFixture(false),
                new RocksDBStoreFixture()
            );
        }
        catch (TypeInitializationException)
        {
            throw new SkipException("RocksDB is not available.");
        }

        foreach (var storeFixture in _storeFixtures)
        {
            var guid = Guid.NewGuid();
            storeFixture.Store.SetCanonicalChainId(guid);
            storeFixture.Store.PutBlock(storeFixture.Block1);
            storeFixture.Store.AppendIndex(guid, storeFixture.Block1.Hash);
            storeFixture.Store.PutTransaction(storeFixture.Transaction1);
        }
    }

    [SkippableFact]
    public void SummaryInvalidArguments()
    {
        string badPathFormat = "rocksdb+foo+bar://" + "/bar";
        string badPathScheme = "foo://" + "/bar";
        long badOffset = long.MaxValue;
        long badLimit = 0;

        foreach (var storeFixture in _storeFixtures)
        {
            _command.Summary(
                store: storeFixture.Store,
                header: true,
                offset: 0,
                limit: 1);

            Assert.Throws<ArgumentException>(() =>
                _command.Summary(
                    path: badPathFormat,
                    header: true,
                    offset: 0,
                    limit: 1));
            Assert.Throws<ArgumentException>(() =>
                _command.Summary(
                    path: badPathScheme,
                    header: true,
                    offset: 0,
                    limit: 1));
            Assert.Throws<ArgumentException>(() =>
                _command.Summary(
                    store: storeFixture.Store,
                    header: true,
                    offset: badOffset,
                    limit: 1));
            Assert.Throws<ArgumentException>(() =>
                _command.Summary(
                    store: storeFixture.Store,
                    header: true,
                    offset: 0,
                    limit: badLimit));
        }
    }

    public void Dispose()
    {
        foreach (var storeFixture in _storeFixtures)
        {
            storeFixture.Store?.Dispose();
            storeFixture.StateStore?.Dispose();
        }

        Console.SetOut(_originalWriter);
    }
}
