window.BENCHMARK_DATA = {
  "lastUpdate": 1719883621128,
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
          "id": "aa6c4a2f17b00e49bbbec0a52403a71f515b7ff9",
          "message": "Merge pull request #3825 from greymistcube/chore/fix-javascript-ci\n\n👷 Updated javascript ci version parsing",
          "timestamp": "2024-06-13T16:43:39+09:00",
          "tree_id": "6dbc8b89f1ed7f6ea5506c8543a0ecca4ea0cf98",
          "url": "https://github.com/planetarium/libplanet/commit/aa6c4a2f17b00e49bbbec0a52403a71f515b7ff9"
        },
        "date": 1719883577577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5710044.071428572,
            "unit": "ns",
            "range": "± 89075.72919493777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14267868.083333334,
            "unit": "ns",
            "range": "± 33058.43332222047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36406608.692307696,
            "unit": "ns",
            "range": "± 200757.99282526903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74282994.73333333,
            "unit": "ns",
            "range": "± 239240.97348712376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145673013.33333334,
            "unit": "ns",
            "range": "± 281664.0815664409"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15159.572916666666,
            "unit": "ns",
            "range": "± 1066.4789705508463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108818.35,
            "unit": "ns",
            "range": "± 4430.801736476831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106214.28301886792,
            "unit": "ns",
            "range": "± 4325.7066135859795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90141.61538461539,
            "unit": "ns",
            "range": "± 4191.552921845866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3145060.870967742,
            "unit": "ns",
            "range": "± 92563.37017875625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2770934.702247191,
            "unit": "ns",
            "range": "± 152870.72847300666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5292.471910112359,
            "unit": "ns",
            "range": "± 483.04303144204346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26629.9012345679,
            "unit": "ns",
            "range": "± 1399.8818307712463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22803.197916666668,
            "unit": "ns",
            "range": "± 1386.3242889385142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28893.80412371134,
            "unit": "ns",
            "range": "± 5349.063679045411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1277.787234042553,
            "unit": "ns",
            "range": "± 208.51991845964682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5587.460674157303,
            "unit": "ns",
            "range": "± 424.18566518629586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 715157.84,
            "unit": "ns",
            "range": "± 70333.45078242672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1276092.9814814816,
            "unit": "ns",
            "range": "± 50877.20104088242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1085908.2117647058,
            "unit": "ns",
            "range": "± 58094.30313396735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11136262.43,
            "unit": "ns",
            "range": "± 2307856.3231116845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2246138.8048780486,
            "unit": "ns",
            "range": "± 80305.48569967669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2331635.109375,
            "unit": "ns",
            "range": "± 106712.97603698618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2583167,
            "unit": "ns",
            "range": "± 26581.43440762117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2443019.285714286,
            "unit": "ns",
            "range": "± 87574.35244221035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4005712.1770833335,
            "unit": "ns",
            "range": "± 988911.4704256658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3114577.3970052083,
            "unit": "ns",
            "range": "± 37861.92181986786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 934474.9381975447,
            "unit": "ns",
            "range": "± 3604.5587667986456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 624019.4405691965,
            "unit": "ns",
            "range": "± 6292.721284171973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636442.9598858173,
            "unit": "ns",
            "range": "± 3845.686803548311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468222.8757324219,
            "unit": "ns",
            "range": "± 820.6702533696399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422057.0925292969,
            "unit": "ns",
            "range": "± 822.9866820374289"
          }
        ]
      }
    ]
  }
}