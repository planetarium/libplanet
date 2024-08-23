window.BENCHMARK_DATA = {
  "lastUpdate": 1724400597337,
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
          "id": "7777ff6fef78a7cbd24368cc877213495e2a514f",
          "message": "refactor: Remote BoundPeerUtility",
          "timestamp": "2024-08-23T16:58:37+09:00",
          "tree_id": "9847c174830a5033754c6a123c8bbbd170eb3cef",
          "url": "https://github.com/planetarium/libplanet/commit/7777ff6fef78a7cbd24368cc877213495e2a514f"
        },
        "date": 1724400529803,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968400,
            "unit": "ns",
            "range": "± 56490.80863887644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1791452.8301886793,
            "unit": "ns",
            "range": "± 74349.66402017509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1546855.8139534884,
            "unit": "ns",
            "range": "± 83612.67087293741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6873241.666666667,
            "unit": "ns",
            "range": "± 226181.12511247012"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33502.020202020205,
            "unit": "ns",
            "range": "± 4375.417876206164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9740021.42857143,
            "unit": "ns",
            "range": "± 101600.96288589326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24072733.333333332,
            "unit": "ns",
            "range": "± 305872.78323481075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59883446.666666664,
            "unit": "ns",
            "range": "± 625260.0771640855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117629246.66666667,
            "unit": "ns",
            "range": "± 440760.2699016888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236827569.23076922,
            "unit": "ns",
            "range": "± 647090.9072979563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3354955.9114583335,
            "unit": "ns",
            "range": "± 8569.189454406172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074557.2526041667,
            "unit": "ns",
            "range": "± 2263.3096029133244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747053.0794270834,
            "unit": "ns",
            "range": "± 1059.7359004309776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943444.1796875,
            "unit": "ns",
            "range": "± 3012.2154460531765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618052.2391183035,
            "unit": "ns",
            "range": "± 1882.0306105366374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554079.98046875,
            "unit": "ns",
            "range": "± 727.7846156066818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2128568.5714285714,
            "unit": "ns",
            "range": "± 63997.71490143255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2179278.5714285714,
            "unit": "ns",
            "range": "± 32620.337652627517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2710554.1666666665,
            "unit": "ns",
            "range": "± 68939.07189727732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2274671.4285714286,
            "unit": "ns",
            "range": "± 35911.18164350718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2884253.846153846,
            "unit": "ns",
            "range": "± 28521.47189354643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175052.3076923077,
            "unit": "ns",
            "range": "± 7854.718082391382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167740.22988505746,
            "unit": "ns",
            "range": "± 8915.174674756638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141770.58823529413,
            "unit": "ns",
            "range": "± 2291.2236648465687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2772206.6666666665,
            "unit": "ns",
            "range": "± 43581.36014835875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2421428.5714285714,
            "unit": "ns",
            "range": "± 41115.342982534254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10081.052631578947,
            "unit": "ns",
            "range": "± 1098.673739816398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51595.87628865979,
            "unit": "ns",
            "range": "± 4848.64494656697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44321.875,
            "unit": "ns",
            "range": "± 2035.5155152192804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54529.8969072165,
            "unit": "ns",
            "range": "± 11576.52226264842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2710.4166666666665,
            "unit": "ns",
            "range": "± 582.639938766314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10596.938775510203,
            "unit": "ns",
            "range": "± 1816.2186889551117"
          }
        ]
      }
    ]
  }
}