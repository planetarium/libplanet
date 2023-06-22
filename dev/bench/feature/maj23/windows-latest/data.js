window.BENCHMARK_DATA = {
  "lastUpdate": 1687412224854,
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "a1c360c93a287f9a71a45026cb78a3dfecc5b1c0",
          "message": "WIP: fix test",
          "timestamp": "2023-06-22T14:15:49+09:00",
          "tree_id": "865718399b7119b0a6f7a9ed2dde5147e509ab27",
          "url": "https://github.com/planetarium/libplanet/commit/a1c360c93a287f9a71a45026cb78a3dfecc5b1c0"
        },
        "date": 1687412156436,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1900818.75,
            "unit": "ns",
            "range": "± 248943.03567916475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3151237.234042553,
            "unit": "ns",
            "range": "± 321912.32025514677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2550485.4166666665,
            "unit": "ns",
            "range": "± 232495.11142757238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6895644.329896907,
            "unit": "ns",
            "range": "± 777204.5456807944"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64239.69072164949,
            "unit": "ns",
            "range": "± 19516.12305962305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7847829.0322580645,
            "unit": "ns",
            "range": "± 478166.7304222962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24624082.795698926,
            "unit": "ns",
            "range": "± 1636096.9878383856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63826636.84210526,
            "unit": "ns",
            "range": "± 1382019.1923456402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128232308.06451613,
            "unit": "ns",
            "range": "± 5836736.437380233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273712676.6666667,
            "unit": "ns",
            "range": "± 8139407.280957187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5961192.301829268,
            "unit": "ns",
            "range": "± 213079.78249729148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1966350.404575893,
            "unit": "ns",
            "range": "± 34610.89948975142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1468039.3377130681,
            "unit": "ns",
            "range": "± 33556.8539517874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3201067.578125,
            "unit": "ns",
            "range": "± 58854.3318713442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048966.3628472222,
            "unit": "ns",
            "range": "± 21464.79113343542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 970676.1800130209,
            "unit": "ns",
            "range": "± 25067.950615165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3825970.8333333335,
            "unit": "ns",
            "range": "± 314097.9793217955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3907342.5531914895,
            "unit": "ns",
            "range": "± 369178.3237527563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5322413.978494624,
            "unit": "ns",
            "range": "± 367800.1012457594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5239890.322580645,
            "unit": "ns",
            "range": "± 412693.95362889837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8874584.946236558,
            "unit": "ns",
            "range": "± 601575.1877446837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324451.64835164836,
            "unit": "ns",
            "range": "± 40702.61078887354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318326.34408602153,
            "unit": "ns",
            "range": "± 44277.934925554306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305926.80412371136,
            "unit": "ns",
            "range": "± 55934.10281204406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4824098.936170213,
            "unit": "ns",
            "range": "± 393931.7637802074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4223373.711340206,
            "unit": "ns",
            "range": "± 363270.46391462814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29862.244897959183,
            "unit": "ns",
            "range": "± 9748.819810212106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111203.09278350516,
            "unit": "ns",
            "range": "± 21669.681458242947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122539.79591836735,
            "unit": "ns",
            "range": "± 36928.04298525456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129561.85567010309,
            "unit": "ns",
            "range": "± 28186.53432676589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6770.652173913043,
            "unit": "ns",
            "range": "± 1746.4902351355402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24703.061224489797,
            "unit": "ns",
            "range": "± 9162.895302583667"
          }
        ]
      }
    ]
  }
}