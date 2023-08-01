window.BENCHMARK_DATA = {
  "lastUpdate": 1690863136312,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "49b0c5195840094a706c93fb185b65ce8b048450",
          "message": "test: Add WorldTest",
          "timestamp": "2023-07-31T16:14:07+09:00",
          "tree_id": "a7c1fc9eeeed6b956489c883189164715dab2a5d",
          "url": "https://github.com/planetarium/libplanet/commit/49b0c5195840094a706c93fb185b65ce8b048450"
        },
        "date": 1690863079418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10832326.25,
            "unit": "ns",
            "range": "± 1208170.17419364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23359452.589473683,
            "unit": "ns",
            "range": "± 1504931.0454670477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55773287.54945055,
            "unit": "ns",
            "range": "± 3098170.7904948983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111305177.625,
            "unit": "ns",
            "range": "± 2869056.041060889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232247751.0526316,
            "unit": "ns",
            "range": "± 7949350.941099016"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72452.8817204301,
            "unit": "ns",
            "range": "± 9887.68909218347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318325.9529411765,
            "unit": "ns",
            "range": "± 16369.41815144346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316281.25925925927,
            "unit": "ns",
            "range": "± 13242.9019178238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310862.0512820513,
            "unit": "ns",
            "range": "± 10732.382508701896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4165365.565217391,
            "unit": "ns",
            "range": "± 90345.98461058973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3613532.0172413792,
            "unit": "ns",
            "range": "± 103895.09624672266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20222.083333333332,
            "unit": "ns",
            "range": "± 4492.112241805904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101933.375,
            "unit": "ns",
            "range": "± 18442.776826686033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103769.67708333333,
            "unit": "ns",
            "range": "± 16800.7961377742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118914.77368421052,
            "unit": "ns",
            "range": "± 19195.565655619364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6825.241758241758,
            "unit": "ns",
            "range": "± 970.8089106016389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21110.866666666665,
            "unit": "ns",
            "range": "± 3277.9863104786446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1557465.2626262626,
            "unit": "ns",
            "range": "± 159359.14267135953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2950361.564102564,
            "unit": "ns",
            "range": "± 148497.44802648618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2074741.808080808,
            "unit": "ns",
            "range": "± 217540.37174532787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5940500.294736842,
            "unit": "ns",
            "range": "± 504028.36579071323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3701178.1464646463,
            "unit": "ns",
            "range": "± 296530.99112466094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3653006.303030303,
            "unit": "ns",
            "range": "± 409125.05030634895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4667694.5,
            "unit": "ns",
            "range": "± 219108.76879675713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4076821.7474226803,
            "unit": "ns",
            "range": "± 396688.08088335267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7163259.318181818,
            "unit": "ns",
            "range": "± 324678.6581500194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6758810.3625,
            "unit": "ns",
            "range": "± 197859.83519083602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017324.0787417763,
            "unit": "ns",
            "range": "± 44026.46735844993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315196.8060825893,
            "unit": "ns",
            "range": "± 12876.510124113925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2918869.3905683877,
            "unit": "ns",
            "range": "± 129585.63900938061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865735.304296875,
            "unit": "ns",
            "range": "± 15549.776410214294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798609.3771484375,
            "unit": "ns",
            "range": "± 7728.129641331502"
          }
        ]
      }
    ]
  }
}