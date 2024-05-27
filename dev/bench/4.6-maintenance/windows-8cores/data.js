window.BENCHMARK_DATA = {
  "lastUpdate": 1716786844719,
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
          "id": "acefa767a052bbf8b7b8bace776de53727691e83",
          "message": "Merge pull request #3805 from greymistcube/release/4.6.0\n\n🚀 Release 4.6.0",
          "timestamp": "2024-05-27T13:54:48+09:00",
          "tree_id": "26b04820a6d9dd8d731598d5a003c296450a4cdc",
          "url": "https://github.com/planetarium/libplanet/commit/acefa767a052bbf8b7b8bace776de53727691e83"
        },
        "date": 1716786588888,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009524,
            "unit": "ns",
            "range": "± 82379.67793924506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1809460.3448275863,
            "unit": "ns",
            "range": "± 78326.36834953076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596201.0416666667,
            "unit": "ns",
            "range": "± 114827.82029932024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6993274.193548387,
            "unit": "ns",
            "range": "± 164986.445842766"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36374.73684210526,
            "unit": "ns",
            "range": "± 5016.419177678577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5211064.285714285,
            "unit": "ns",
            "range": "± 40945.24687626443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13347260,
            "unit": "ns",
            "range": "± 127086.99944751008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33756806.666666664,
            "unit": "ns",
            "range": "± 392523.7162382979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66934321.428571425,
            "unit": "ns",
            "range": "± 822600.6753242766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136436720,
            "unit": "ns",
            "range": "± 1907412.0141475166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3332059.8772321427,
            "unit": "ns",
            "range": "± 26710.077198203002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081041.7447916667,
            "unit": "ns",
            "range": "± 3651.6462062383453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753727.98828125,
            "unit": "ns",
            "range": "± 1843.3853205513599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2009205.3013392857,
            "unit": "ns",
            "range": "± 4659.114726491391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618777.783203125,
            "unit": "ns",
            "range": "± 1432.1065776040446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553342.9966517857,
            "unit": "ns",
            "range": "± 446.0879291807978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2248564.0625,
            "unit": "ns",
            "range": "± 97112.67938595785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2317025.641025641,
            "unit": "ns",
            "range": "± 80210.38362347882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2926712.5,
            "unit": "ns",
            "range": "± 52331.327456250656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2953769.4444444445,
            "unit": "ns",
            "range": "± 97445.2251104455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7884225.806451613,
            "unit": "ns",
            "range": "± 154054.2328050784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183062.29508196723,
            "unit": "ns",
            "range": "± 7340.348854889352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176888.7323943662,
            "unit": "ns",
            "range": "± 7510.479332159349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151344.44444444444,
            "unit": "ns",
            "range": "± 5025.686545391113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2845646.6666666665,
            "unit": "ns",
            "range": "± 44555.773502218006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2621110,
            "unit": "ns",
            "range": "± 30105.523935460275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12418.556701030928,
            "unit": "ns",
            "range": "± 1770.6125291893584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57992.47311827957,
            "unit": "ns",
            "range": "± 4582.415267822146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49119.354838709674,
            "unit": "ns",
            "range": "± 2783.1893678841734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54959.52380952381,
            "unit": "ns",
            "range": "± 8067.189520425463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2721.4285714285716,
            "unit": "ns",
            "range": "± 568.095026173339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10846.666666666666,
            "unit": "ns",
            "range": "± 1201.889897554138"
          }
        ]
      }
    ]
  }
}