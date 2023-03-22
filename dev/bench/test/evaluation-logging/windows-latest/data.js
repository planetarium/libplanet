window.BENCHMARK_DATA = {
  "lastUpdate": 1679470081660,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1679470047090,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73248.91304347826,
            "unit": "ns",
            "range": "± 4172.924095743773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3563682.0442708335,
            "unit": "ns",
            "range": "± 11081.873398596425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1103923.3203125,
            "unit": "ns",
            "range": "± 1223.9944018459437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 833657.28515625,
            "unit": "ns",
            "range": "± 1104.2571391615722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1860716.4322916667,
            "unit": "ns",
            "range": "± 3540.5735810026536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613771.6936383928,
            "unit": "ns",
            "range": "± 1043.1737966145772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 525081.8815104166,
            "unit": "ns",
            "range": "± 750.0421901522449"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3098437.9464285714,
            "unit": "ns",
            "range": "± 12983.509635233222"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4410900,
            "unit": "ns",
            "range": "± 141922.67420868823"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 18121146.666666668,
            "unit": "ns",
            "range": "± 305156.99909266067"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 4546541.772151899,
            "unit": "ns",
            "range": "± 234299.69390942447"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 20368393.103448275,
            "unit": "ns",
            "range": "± 588187.8768915315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 74248.45360824742,
            "unit": "ns",
            "range": "± 7941.690014858061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 147198.94736842104,
            "unit": "ns",
            "range": "± 14145.636833786262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 122867.79661016949,
            "unit": "ns",
            "range": "± 5312.686205352245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2576580,
            "unit": "ns",
            "range": "± 29780.127602144352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6614200,
            "unit": "ns",
            "range": "± 53935.54354173931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15713.541666666666,
            "unit": "ns",
            "range": "± 1727.2807830543275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 40634.69387755102,
            "unit": "ns",
            "range": "± 6109.1464644318075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40771,
            "unit": "ns",
            "range": "± 4012.412433356463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84503.37078651685,
            "unit": "ns",
            "range": "± 10437.851240014985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5194.736842105263,
            "unit": "ns",
            "range": "± 866.3162929166807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14663.541666666666,
            "unit": "ns",
            "range": "± 1747.215516587324"
          }
        ]
      }
    ]
  }
}