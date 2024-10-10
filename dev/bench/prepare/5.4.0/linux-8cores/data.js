window.BENCHMARK_DATA = {
  "lastUpdate": 1728551223123,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "a64bb707c40772c1579619b23fff87b8f759671e",
          "message": "Prepare 5.4.0",
          "timestamp": "2024-10-10T17:57:56+09:00",
          "tree_id": "0033fe6e460c7fbf5e142fde880619412807c1d6",
          "url": "https://github.com/planetarium/libplanet/commit/a64bb707c40772c1579619b23fff87b8f759671e"
        },
        "date": 1728551198428,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997351.9431818182,
            "unit": "ns",
            "range": "± 59183.47962142969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1939733.5555555555,
            "unit": "ns",
            "range": "± 64276.74389674896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612430.1791044776,
            "unit": "ns",
            "range": "± 76133.50537247557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7924752.153846154,
            "unit": "ns",
            "range": "± 208419.18197933555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10494078.2,
            "unit": "ns",
            "range": "± 190031.26435713528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27298209.733333334,
            "unit": "ns",
            "range": "± 112515.02800163862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70009411.56666666,
            "unit": "ns",
            "range": "± 390820.2978674592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139632158.73333332,
            "unit": "ns",
            "range": "± 518286.94387492485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288932290.3333333,
            "unit": "ns",
            "range": "± 1600384.705807266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3805521.091045673,
            "unit": "ns",
            "range": "± 4594.334405853685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221064.7782552084,
            "unit": "ns",
            "range": "± 3811.3819661145735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775992.7943209135,
            "unit": "ns",
            "range": "± 857.429753269672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952400.7098214286,
            "unit": "ns",
            "range": "± 2887.4176316135113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623492.2961077009,
            "unit": "ns",
            "range": "± 409.9757255856621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569763.0606971154,
            "unit": "ns",
            "range": "± 697.1708593604403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2475151.0625,
            "unit": "ns",
            "range": "± 48195.77025489374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2525353.227272727,
            "unit": "ns",
            "range": "± 61843.766191552495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3051095.3571428573,
            "unit": "ns",
            "range": "± 32238.8458035838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2660830.2,
            "unit": "ns",
            "range": "± 47430.09809513666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3247236.6666666665,
            "unit": "ns",
            "range": "± 38982.55375653258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199040.56,
            "unit": "ns",
            "range": "± 10051.84621369546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197786.9387755102,
            "unit": "ns",
            "range": "± 12388.147439625653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172254.4939759036,
            "unit": "ns",
            "range": "± 9185.361915640817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3087012.1333333333,
            "unit": "ns",
            "range": "± 46819.25966777022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2756860.9285714286,
            "unit": "ns",
            "range": "± 24435.82559312418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13003.851063829787,
            "unit": "ns",
            "range": "± 885.2672150800743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60387.67021276596,
            "unit": "ns",
            "range": "± 4656.058658219483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49376.03125,
            "unit": "ns",
            "range": "± 1148.7386767141743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55794.375,
            "unit": "ns",
            "range": "± 8720.259293887515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2635.302197802198,
            "unit": "ns",
            "range": "± 251.5599870929936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11969.192307692309,
            "unit": "ns",
            "range": "± 1045.0655130161585"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30753.76923076923,
            "unit": "ns",
            "range": "± 818.4268474429371"
          }
        ]
      }
    ]
  }
}