window.BENCHMARK_DATA = {
  "lastUpdate": 1721209157649,
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
          "id": "adefec1ee02fbc004c7e937b6c3f1b0eb35b6ba8",
          "message": "Prepare 5.1.3",
          "timestamp": "2024-07-17T18:23:14+09:00",
          "tree_id": "46788e99e92a5fb3224654f1c5f3217525742742",
          "url": "https://github.com/planetarium/libplanet/commit/adefec1ee02fbc004c7e937b6c3f1b0eb35b6ba8"
        },
        "date": 1721208811448,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995040,
            "unit": "ns",
            "range": "± 89188.88253407353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1755965.1162790698,
            "unit": "ns",
            "range": "± 60948.7953852636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1566615.2173913044,
            "unit": "ns",
            "range": "± 105434.24484325058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6812173.333333333,
            "unit": "ns",
            "range": "± 162186.62713981234"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30392.30769230769,
            "unit": "ns",
            "range": "± 485.5607384964632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9492838.461538462,
            "unit": "ns",
            "range": "± 65405.21817181381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23455733.333333332,
            "unit": "ns",
            "range": "± 182998.31250848292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58199014.28571428,
            "unit": "ns",
            "range": "± 228724.19688733906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118463100,
            "unit": "ns",
            "range": "± 679070.0620928368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238814785.7142857,
            "unit": "ns",
            "range": "± 2743904.7350746044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3308828.8541666665,
            "unit": "ns",
            "range": "± 9164.934500955062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068025.9895833333,
            "unit": "ns",
            "range": "± 1189.230181819776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728604.0755208334,
            "unit": "ns",
            "range": "± 1750.7866809675058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934705.2083333333,
            "unit": "ns",
            "range": "± 4514.979697138931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626403.1640625,
            "unit": "ns",
            "range": "± 2111.5049018682953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565559.43359375,
            "unit": "ns",
            "range": "± 1753.2048135788036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2153707.6923076925,
            "unit": "ns",
            "range": "± 58555.66871329828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249730.769230769,
            "unit": "ns",
            "range": "± 16320.814145102393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2745181.0344827585,
            "unit": "ns",
            "range": "± 76443.20535744297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2306525,
            "unit": "ns",
            "range": "± 52601.05937496336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2977060,
            "unit": "ns",
            "range": "± 43072.27812476539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182758.9552238806,
            "unit": "ns",
            "range": "± 8470.425042880413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176191.66666666666,
            "unit": "ns",
            "range": "± 6921.438582891392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145994.11764705883,
            "unit": "ns",
            "range": "± 2977.7236667115562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2761280,
            "unit": "ns",
            "range": "± 21176.442436956077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2566300,
            "unit": "ns",
            "range": "± 50599.07360812053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12698.924731182795,
            "unit": "ns",
            "range": "± 1228.5989390230957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52609.782608695656,
            "unit": "ns",
            "range": "± 3728.7142344689787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45027.02702702703,
            "unit": "ns",
            "range": "± 1530.368265165946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55952.04081632653,
            "unit": "ns",
            "range": "± 11620.424869282824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2864.285714285714,
            "unit": "ns",
            "range": "± 792.2628429827654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10148.958333333334,
            "unit": "ns",
            "range": "± 1631.724615031055"
          }
        ]
      }
    ]
  }
}