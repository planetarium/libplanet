window.BENCHMARK_DATA = {
  "lastUpdate": 1710822179890,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bad0ed71b73360b295dab729bb5ff4e9d30e5bc3",
          "message": "Merge pull request #3684 from s2quake/chore/remove-unused-field\n\nRemoved unused field in NullBlockPolicy",
          "timestamp": "2024-03-14T16:56:42+09:00",
          "tree_id": "5156e3d39cee3ea16e56a57e59dc0997b9442757",
          "url": "https://github.com/planetarium/libplanet/commit/bad0ed71b73360b295dab729bb5ff4e9d30e5bc3"
        },
        "date": 1710822169182,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5802071.5,
            "unit": "ns",
            "range": "± 49061.44607452044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14346663.166666666,
            "unit": "ns",
            "range": "± 109545.96398509733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36384785.692307696,
            "unit": "ns",
            "range": "± 162937.1601238673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73315957.93333334,
            "unit": "ns",
            "range": "± 165780.63222199332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145574908,
            "unit": "ns",
            "range": "± 344063.12505701627"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17508.67777777778,
            "unit": "ns",
            "range": "± 1471.4115963990084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108658.91071428571,
            "unit": "ns",
            "range": "± 4254.306089243465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105764.53571428571,
            "unit": "ns",
            "range": "± 4173.998679985354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90992.34615384616,
            "unit": "ns",
            "range": "± 2418.247513259264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3171984.625,
            "unit": "ns",
            "range": "± 59601.23198041575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2794636.785714286,
            "unit": "ns",
            "range": "± 48695.00402810028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4909.544444444445,
            "unit": "ns",
            "range": "± 423.8093211564914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27492.28888888889,
            "unit": "ns",
            "range": "± 2378.251308502113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21739.194444444445,
            "unit": "ns",
            "range": "± 878.0761082045719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28361.021505376346,
            "unit": "ns",
            "range": "± 4878.408589806486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1278.5054945054944,
            "unit": "ns",
            "range": "± 338.97287251756336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4730.869565217391,
            "unit": "ns",
            "range": "± 630.7335902904553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681896.7578947368,
            "unit": "ns",
            "range": "± 63241.895163293586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1246094.9661016949,
            "unit": "ns",
            "range": "± 53329.674717891095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1076339.4731182796,
            "unit": "ns",
            "range": "± 75371.94540015642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8217764.94,
            "unit": "ns",
            "range": "± 1992130.3634121951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2215004.4318181816,
            "unit": "ns",
            "range": "± 82095.61195575919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2309043.0324675324,
            "unit": "ns",
            "range": "± 117467.26774528169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2671440.714285714,
            "unit": "ns",
            "range": "± 46021.0364765248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2962383.1666666665,
            "unit": "ns",
            "range": "± 124109.59882324185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10142669.887755102,
            "unit": "ns",
            "range": "± 894593.0206767078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3054757.0072916667,
            "unit": "ns",
            "range": "± 34963.045687648744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921116.6279296875,
            "unit": "ns",
            "range": "± 5760.542852754979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615353.5721354167,
            "unit": "ns",
            "range": "± 5152.838594711937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1632112.522265625,
            "unit": "ns",
            "range": "± 17356.233188307342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467961.7446940104,
            "unit": "ns",
            "range": "± 691.3896784331039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428089.9373046875,
            "unit": "ns",
            "range": "± 1050.250167455231"
          }
        ]
      }
    ]
  }
}