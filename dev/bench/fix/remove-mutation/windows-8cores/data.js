window.BENCHMARK_DATA = {
  "lastUpdate": 1722311493661,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "513f6a325917eadcdceb8080eb3d89459e4ab67f",
          "message": "chore: Remove explorer mutation.",
          "timestamp": "2024-07-30T12:37:13+09:00",
          "tree_id": "ef65c932dda86ecaf60ea63bfcb0eb63809425ec",
          "url": "https://github.com/planetarium/libplanet/commit/513f6a325917eadcdceb8080eb3d89459e4ab67f"
        },
        "date": 1722311424557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1069551.5151515151,
            "unit": "ns",
            "range": "± 146811.31953497068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1791386.956521739,
            "unit": "ns",
            "range": "± 66046.37296356638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1573757.471264368,
            "unit": "ns",
            "range": "± 95747.34149224963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6964392.5,
            "unit": "ns",
            "range": "± 241164.30444238527"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31843.478260869564,
            "unit": "ns",
            "range": "± 3591.7580974073758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10160818.75,
            "unit": "ns",
            "range": "± 196459.6895676057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24692562.5,
            "unit": "ns",
            "range": "± 426452.75295160187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61628966.666666664,
            "unit": "ns",
            "range": "± 1056865.208777264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123808818.75,
            "unit": "ns",
            "range": "± 2430650.016413648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255737885.7142857,
            "unit": "ns",
            "range": "± 2964903.0970952217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3399235.0520833335,
            "unit": "ns",
            "range": "± 7989.7956078387015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074137.265625,
            "unit": "ns",
            "range": "± 3321.265417847011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741345.2473958334,
            "unit": "ns",
            "range": "± 1179.900521564138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965654.1015625,
            "unit": "ns",
            "range": "± 3275.9451037861186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628186.9977678572,
            "unit": "ns",
            "range": "± 958.8942799758072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 550965.3059895834,
            "unit": "ns",
            "range": "± 687.3546064801607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2230060.3773584906,
            "unit": "ns",
            "range": "± 92948.27208975026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2323089.4736842103,
            "unit": "ns",
            "range": "± 50098.52398287956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2856412.5,
            "unit": "ns",
            "range": "± 52647.594120402755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2305093.5064935065,
            "unit": "ns",
            "range": "± 111774.90695903359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3097277.272727273,
            "unit": "ns",
            "range": "± 74860.48567847605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180671.73913043478,
            "unit": "ns",
            "range": "± 6901.3255745538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172777.08333333334,
            "unit": "ns",
            "range": "± 6202.684373697916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146303.44827586206,
            "unit": "ns",
            "range": "± 4191.784716955356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2811735.294117647,
            "unit": "ns",
            "range": "± 57182.863923299505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2618553.3333333335,
            "unit": "ns",
            "range": "± 42462.38447423902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14716.129032258064,
            "unit": "ns",
            "range": "± 1658.7901774289967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64322.34042553192,
            "unit": "ns",
            "range": "± 5796.59066009614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46738.38383838384,
            "unit": "ns",
            "range": "± 2947.5589025187896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68320.40816326531,
            "unit": "ns",
            "range": "± 14010.474426161245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3027.0833333333335,
            "unit": "ns",
            "range": "± 729.5967403359007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14287.5,
            "unit": "ns",
            "range": "± 1921.9644555560992"
          }
        ]
      }
    ]
  }
}