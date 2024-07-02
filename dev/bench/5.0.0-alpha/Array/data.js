window.BENCHMARK_DATA = {
  "lastUpdate": 1719884823572,
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
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d400bc7958ab39576ac40edb6563289d452b22e",
          "message": "Merge pull request #3856 from OnedgeLee/chore/reduce-cache-size\n\nReduce cache size",
          "timestamp": "2024-07-02T10:21:38+09:00",
          "tree_id": "ef1c4af39266ff021274f1bf49a1c0269d14b60f",
          "url": "https://github.com/planetarium/libplanet/commit/0d400bc7958ab39576ac40edb6563289d452b22e"
        },
        "date": 1719884768105,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5721062.357142857,
            "unit": "ns",
            "range": "± 46836.95322746633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14405212.166666666,
            "unit": "ns",
            "range": "± 72896.23399030774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36289124.615384616,
            "unit": "ns",
            "range": "± 324486.59166328644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72658011.4,
            "unit": "ns",
            "range": "± 193288.4493872897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146234453.26666668,
            "unit": "ns",
            "range": "± 309680.87797151686"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15358.364583333334,
            "unit": "ns",
            "range": "± 1136.2069086940262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110294.44776119402,
            "unit": "ns",
            "range": "± 5194.007106923826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105147.15384615384,
            "unit": "ns",
            "range": "± 4180.674482928746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91409.96153846153,
            "unit": "ns",
            "range": "± 2464.8232144438957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3144601.6756756757,
            "unit": "ns",
            "range": "± 103880.74828166455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2732569.1515151514,
            "unit": "ns",
            "range": "± 175218.96840538768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5049.191489361702,
            "unit": "ns",
            "range": "± 912.6742817993575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26658.727272727272,
            "unit": "ns",
            "range": "± 1605.656629582182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22865.295454545456,
            "unit": "ns",
            "range": "± 857.9748621987155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28015.070588235296,
            "unit": "ns",
            "range": "± 3976.6543361529048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1154.5729166666667,
            "unit": "ns",
            "range": "± 215.79589502908414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4515.16091954023,
            "unit": "ns",
            "range": "± 414.2107337374668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 726420.7857142857,
            "unit": "ns",
            "range": "± 72806.60397488452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1264968.2631578948,
            "unit": "ns",
            "range": "± 36714.83610751721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1094275.8085106383,
            "unit": "ns",
            "range": "± 73914.17039927053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10971519.52,
            "unit": "ns",
            "range": "± 1964440.0202240506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2209751.1228070175,
            "unit": "ns",
            "range": "± 95537.06236083576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2523006,
            "unit": "ns",
            "range": "± 36775.30407177388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2639459.6666666665,
            "unit": "ns",
            "range": "± 73707.11301861213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2464733.5074626864,
            "unit": "ns",
            "range": "± 116182.10069233572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3264815.32,
            "unit": "ns",
            "range": "± 332097.4592714358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3056658.9165039062,
            "unit": "ns",
            "range": "± 59643.94923063169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918139.9806941106,
            "unit": "ns",
            "range": "± 2755.2425346927607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616004.980859375,
            "unit": "ns",
            "range": "± 7855.350898195915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1619972.973763021,
            "unit": "ns",
            "range": "± 3135.3112265453215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462152.0803059896,
            "unit": "ns",
            "range": "± 672.1689377468642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 427949.25624302455,
            "unit": "ns",
            "range": "± 570.8155413806753"
          }
        ]
      }
    ]
  }
}