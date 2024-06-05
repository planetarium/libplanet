window.BENCHMARK_DATA = {
  "lastUpdate": 1717562997912,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "ce8f7ecd0fec57e750b97aba0c14170f74f33792",
          "message": "feat: make ActionEvaluator.CommitWorld to public",
          "timestamp": "2024-06-04T19:38:01+09:00",
          "tree_id": "927016d20e8d96cc4a85cb63a10d9504b5eaac5c",
          "url": "https://github.com/planetarium/libplanet/commit/ce8f7ecd0fec57e750b97aba0c14170f74f33792"
        },
        "date": 1717562956816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10793291.23076923,
            "unit": "ns",
            "range": "± 131594.46428399754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26686079.769230768,
            "unit": "ns",
            "range": "± 187579.14293712305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67298881.96666667,
            "unit": "ns",
            "range": "± 85703.63111566233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135610794.86666667,
            "unit": "ns",
            "range": "± 218610.97098102525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273578271.14285713,
            "unit": "ns",
            "range": "± 395623.0170291016"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 16005.552631578947,
            "unit": "ns",
            "range": "± 1374.0808406985798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111154.32608695653,
            "unit": "ns",
            "range": "± 4251.047458133625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105004.44736842105,
            "unit": "ns",
            "range": "± 3531.6534520339274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90234.71428571429,
            "unit": "ns",
            "range": "± 1540.1839265076517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3094222.5185185187,
            "unit": "ns",
            "range": "± 129062.63832856448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2767357.4805194805,
            "unit": "ns",
            "range": "± 141852.3690742941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4898.923913043478,
            "unit": "ns",
            "range": "± 605.9171820552662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26483.47619047619,
            "unit": "ns",
            "range": "± 1657.2871756454301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22394.227272727272,
            "unit": "ns",
            "range": "± 757.2439889320908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29591.863157894735,
            "unit": "ns",
            "range": "± 5102.00247839862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1299.7659574468084,
            "unit": "ns",
            "range": "± 268.5337096851073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4861.860215053764,
            "unit": "ns",
            "range": "± 754.4156908466349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683192.9,
            "unit": "ns",
            "range": "± 37222.04488162442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1300960.3829787234,
            "unit": "ns",
            "range": "± 49908.58988606426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1090250.3384615385,
            "unit": "ns",
            "range": "± 45945.266096695465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9385185,
            "unit": "ns",
            "range": "± 1194433.515613497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2184039.4242424243,
            "unit": "ns",
            "range": "± 68464.9451959862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291203.1333333333,
            "unit": "ns",
            "range": "± 87029.85005303954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2555581.3928571427,
            "unit": "ns",
            "range": "± 40183.77747700468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2316949.230769231,
            "unit": "ns",
            "range": "± 38349.46661983242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3017784.534883721,
            "unit": "ns",
            "range": "± 164193.48436121098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3011520.6373697915,
            "unit": "ns",
            "range": "± 49067.30416239807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920541.5039713542,
            "unit": "ns",
            "range": "± 5395.475825167489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612639.2955078125,
            "unit": "ns",
            "range": "± 4675.572423063705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1623664.8930989583,
            "unit": "ns",
            "range": "± 14713.932132132682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459182.02689034597,
            "unit": "ns",
            "range": "± 845.8278140773288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428738.6446289063,
            "unit": "ns",
            "range": "± 1467.2954258921113"
          }
        ]
      }
    ]
  }
}