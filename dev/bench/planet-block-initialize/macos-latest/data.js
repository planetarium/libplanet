window.BENCHMARK_DATA = {
  "lastUpdate": 1680159648041,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tki@tkis-MacBook-Pro.local",
            "name": "tki"
          },
          "committer": {
            "email": "tki@tkis-MacBook-Pro.local",
            "name": "tki"
          },
          "distinct": true,
          "id": "e5de587bc316b6ec9203f496c494a0fb255ae1b4",
          "message": "temp: genesis validator inited with pk",
          "timestamp": "2023-03-30T14:47:51+09:00",
          "tree_id": "c07a35a90aacf41977de0ba85bb91b0ee0a85f74",
          "url": "https://github.com/planetarium/libplanet/commit/e5de587bc316b6ec9203f496c494a0fb255ae1b4"
        },
        "date": 1680159480632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 19188855.13157895,
            "unit": "ns",
            "range": "± 5336951.778075125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 74060493.46391752,
            "unit": "ns",
            "range": "± 12198761.239602614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 189675502.4574468,
            "unit": "ns",
            "range": "± 35639953.659892045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 421916461.7755102,
            "unit": "ns",
            "range": "± 60210390.94440171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 845728096.1632653,
            "unit": "ns",
            "range": "± 117081973.549374"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 490035.5425531915,
            "unit": "ns",
            "range": "± 271247.12204832357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 910709.6145833334,
            "unit": "ns",
            "range": "± 455903.96354931616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 612444.350515464,
            "unit": "ns",
            "range": "± 221937.74788736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 1038157.994949495,
            "unit": "ns",
            "range": "± 464597.7964013686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 50279499.72105263,
            "unit": "ns",
            "range": "± 12802092.081929117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 33236388.242424242,
            "unit": "ns",
            "range": "± 12908027.866572114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 354695.92268041236,
            "unit": "ns",
            "range": "± 148120.10389473886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 574421.0918367347,
            "unit": "ns",
            "range": "± 286013.78606951144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 370674.2989690722,
            "unit": "ns",
            "range": "± 163458.5577958883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 561860.1157894736,
            "unit": "ns",
            "range": "± 277098.7850790286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 124195.03092783505,
            "unit": "ns",
            "range": "± 46647.09311938544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 139707.21875,
            "unit": "ns",
            "range": "± 82912.69112292991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3247457.170212766,
            "unit": "ns",
            "range": "± 803940.4999346634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 9926657.232323233,
            "unit": "ns",
            "range": "± 3946234.7056324435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4912846.758064516,
            "unit": "ns",
            "range": "± 1374189.3943392741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21751081.847368423,
            "unit": "ns",
            "range": "± 6817201.848638533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 12731550.173684211,
            "unit": "ns",
            "range": "± 2773308.674179187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 17475226.23404255,
            "unit": "ns",
            "range": "± 4032291.71193834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 113591338.96391752,
            "unit": "ns",
            "range": "± 23439649.272050664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 21525006.575757574,
            "unit": "ns",
            "range": "± 8207794.339866578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 116464150.33333333,
            "unit": "ns",
            "range": "± 40390131.20376552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 27110977.858901516,
            "unit": "ns",
            "range": "± 3574304.3782824907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 4149084.657307943,
            "unit": "ns",
            "range": "± 340566.2790132795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 2641235.6442123726,
            "unit": "ns",
            "range": "± 159361.85991305177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 11544033.140940657,
            "unit": "ns",
            "range": "± 2181005.071031676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1430296.062294408,
            "unit": "ns",
            "range": "± 31195.98044558912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1173955.238017314,
            "unit": "ns",
            "range": "± 39152.61853192217"
          }
        ]
      }
    ]
  }
}