window.BENCHMARK_DATA = {
  "lastUpdate": 1698025926459,
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
          "id": "bcb549979a34e9f1afab9435f427aba162c2463a",
          "message": "Merge pull request #3418 from greymistcube/prepare/3.4.0\n\n🔧 Prepare 3.4.0",
          "timestamp": "2023-09-08T10:21:29+09:00",
          "tree_id": "d08370af5794578e62bc1c40dd2c906d7efde68b",
          "url": "https://github.com/planetarium/libplanet/commit/bcb549979a34e9f1afab9435f427aba162c2463a"
        },
        "date": 1698025858026,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1514760,
            "unit": "ns",
            "range": "± 151337.72654149221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2736521.4285714286,
            "unit": "ns",
            "range": "± 77926.4627574202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1907624.2424242424,
            "unit": "ns",
            "range": "± 178215.09481116597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4757552.94117647,
            "unit": "ns",
            "range": "± 227305.73793611777"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55050.51546391752,
            "unit": "ns",
            "range": "± 5587.096810795019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8086416.666666667,
            "unit": "ns",
            "range": "± 147984.57287678268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21818950,
            "unit": "ns",
            "range": "± 313203.49676307157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53750492.85714286,
            "unit": "ns",
            "range": "± 389677.2519846209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106904696.66666667,
            "unit": "ns",
            "range": "± 1343172.060495318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214101235.7142857,
            "unit": "ns",
            "range": "± 2378622.545025439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4697997.377232143,
            "unit": "ns",
            "range": "± 29818.183586807165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1448853.9322916667,
            "unit": "ns",
            "range": "± 5839.123794694957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082549.7786458333,
            "unit": "ns",
            "range": "± 12077.596470200058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2697075.2278645835,
            "unit": "ns",
            "range": "± 4441.215094988206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861364.7739955357,
            "unit": "ns",
            "range": "± 2656.9552803970364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768412.9732572115,
            "unit": "ns",
            "range": "± 3647.7693016034827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3490014.6341463416,
            "unit": "ns",
            "range": "± 124342.65068948713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3701158.620689655,
            "unit": "ns",
            "range": "± 102690.07991191394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4548606.666666667,
            "unit": "ns",
            "range": "± 74282.16923775629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4274686.666666667,
            "unit": "ns",
            "range": "± 67587.21208997483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6233180.645161291,
            "unit": "ns",
            "range": "± 178369.59834260776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279519.64285714284,
            "unit": "ns",
            "range": "± 11525.945745346684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274645.45454545453,
            "unit": "ns",
            "range": "± 12925.114870112158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271807.44680851063,
            "unit": "ns",
            "range": "± 15385.681371345929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4350100,
            "unit": "ns",
            "range": "± 28317.07376595729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4109064.285714286,
            "unit": "ns",
            "range": "± 27697.309148470253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30516.842105263157,
            "unit": "ns",
            "range": "± 2531.8252028492716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105540,
            "unit": "ns",
            "range": "± 8272.325048142611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99858,
            "unit": "ns",
            "range": "± 12635.321503426396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112890.8163265306,
            "unit": "ns",
            "range": "± 16102.39200220639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8514.583333333334,
            "unit": "ns",
            "range": "± 1298.4994713872554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25557.44680851064,
            "unit": "ns",
            "range": "± 2932.886917217105"
          }
        ]
      }
    ]
  }
}