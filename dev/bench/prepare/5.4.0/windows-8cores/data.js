window.BENCHMARK_DATA = {
  "lastUpdate": 1728551598635,
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
        "date": 1728551343277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946709.4736842106,
            "unit": "ns",
            "range": "± 92408.75323935476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1678035.5555555555,
            "unit": "ns",
            "range": "± 63697.80628288956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1409052.5,
            "unit": "ns",
            "range": "± 67048.3860329259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6544721.875,
            "unit": "ns",
            "range": "± 203675.37696900856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34083.67346938775,
            "unit": "ns",
            "range": "± 4066.906772524086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9441980,
            "unit": "ns",
            "range": "± 54041.07168229946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23267200,
            "unit": "ns",
            "range": "± 64115.903572429605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57475857.14285714,
            "unit": "ns",
            "range": "± 377661.4799083876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117809660,
            "unit": "ns",
            "range": "± 314595.8150661621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230503158.33333334,
            "unit": "ns",
            "range": "± 883990.8838056618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3254002.9296875,
            "unit": "ns",
            "range": "± 3011.2977035558492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1042830.3850446428,
            "unit": "ns",
            "range": "± 1271.1448734438159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728483.7139423077,
            "unit": "ns",
            "range": "± 1034.8257153917011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931572.4759615385,
            "unit": "ns",
            "range": "± 1873.080274466135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607202.48046875,
            "unit": "ns",
            "range": "± 891.9636329224089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 550520.1106770834,
            "unit": "ns",
            "range": "± 1385.086879093996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2068893.3333333333,
            "unit": "ns",
            "range": "± 25129.733858708565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2192096.153846154,
            "unit": "ns",
            "range": "± 37944.04807891989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2625320,
            "unit": "ns",
            "range": "± 39918.76035865128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2242200,
            "unit": "ns",
            "range": "± 32913.93539000073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2790928.5714285714,
            "unit": "ns",
            "range": "± 25241.91198937039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169500,
            "unit": "ns",
            "range": "± 5471.651885763052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163429.0909090909,
            "unit": "ns",
            "range": "± 6170.049304301257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144470,
            "unit": "ns",
            "range": "± 2592.902400234698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2672542.8571428573,
            "unit": "ns",
            "range": "± 23200.15630868147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2420246.6666666665,
            "unit": "ns",
            "range": "± 29821.41767892587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9730.337078651686,
            "unit": "ns",
            "range": "± 908.845983349467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50133.333333333336,
            "unit": "ns",
            "range": "± 3328.6296400919823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43893.023255813954,
            "unit": "ns",
            "range": "± 1614.5757733899386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48095.78947368421,
            "unit": "ns",
            "range": "± 7274.436671755236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2351.0204081632655,
            "unit": "ns",
            "range": "± 334.0612012448488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9256.818181818182,
            "unit": "ns",
            "range": "± 816.3269931011848"
          }
        ]
      }
    ]
  }
}