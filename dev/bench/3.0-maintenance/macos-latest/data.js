window.BENCHMARK_DATA = {
  "lastUpdate": 1689753218615,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3057b13bde32b53348fce9975f6d496c22c86c20",
          "message": "Merge pull request #3316 from OnedgeLee/release/2.6.0\n\n🚀 Release 3.0.0",
          "timestamp": "2023-07-19T16:32:06+09:00",
          "tree_id": "3b62a9dc282845b24f541286df67c4900303950b",
          "url": "https://github.com/planetarium/libplanet/commit/3057b13bde32b53348fce9975f6d496c22c86c20"
        },
        "date": 1689753170812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8312089.6875,
            "unit": "ns",
            "range": "± 255806.7850443727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20284215.7,
            "unit": "ns",
            "range": "± 807806.601301358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49656290.68181818,
            "unit": "ns",
            "range": "± 925989.3717276717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100719467.96666667,
            "unit": "ns",
            "range": "± 1807164.760064144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204066701.14285713,
            "unit": "ns",
            "range": "± 2843098.1175776394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54893.02173913043,
            "unit": "ns",
            "range": "± 5570.319204810283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311754.4683544304,
            "unit": "ns",
            "range": "± 16116.391773304977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293646.06315789477,
            "unit": "ns",
            "range": "± 16766.155255746573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299290.5689655172,
            "unit": "ns",
            "range": "± 15904.314555602845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4190409.616438356,
            "unit": "ns",
            "range": "± 206986.10449574402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3605286.653846154,
            "unit": "ns",
            "range": "± 98654.36017082764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16257.634146341463,
            "unit": "ns",
            "range": "± 1338.2382076077167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80313.05319148937,
            "unit": "ns",
            "range": "± 6634.382690598446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81592.02222222222,
            "unit": "ns",
            "range": "± 9159.78351515168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90504.60869565218,
            "unit": "ns",
            "range": "± 10473.45243618886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5011.894736842105,
            "unit": "ns",
            "range": "± 746.7960568347421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16097.93023255814,
            "unit": "ns",
            "range": "± 1380.4577569069802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552362.59375,
            "unit": "ns",
            "range": "± 203916.05956391795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2670102.850877193,
            "unit": "ns",
            "range": "± 113363.60078675594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2002632.2083333333,
            "unit": "ns",
            "range": "± 182027.51646535643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5724017.956043956,
            "unit": "ns",
            "range": "± 320935.81977200886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3342923.641025641,
            "unit": "ns",
            "range": "± 116455.13455731563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3519749.255319149,
            "unit": "ns",
            "range": "± 226034.4105222204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4386803.127272727,
            "unit": "ns",
            "range": "± 185341.02291562283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3894587.9791666665,
            "unit": "ns",
            "range": "± 258976.51073643847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7387806.584905661,
            "unit": "ns",
            "range": "± 280864.5287597559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6308546.804166666,
            "unit": "ns",
            "range": "± 49767.63482983064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1923912.140625,
            "unit": "ns",
            "range": "± 15162.78022096051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1267376.2037760417,
            "unit": "ns",
            "range": "± 10944.486918649853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2857621.153846154,
            "unit": "ns",
            "range": "± 29287.069296124613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854009.775390625,
            "unit": "ns",
            "range": "± 3316.4064274454418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794707.15859375,
            "unit": "ns",
            "range": "± 4080.801081983647"
          }
        ]
      }
    ]
  }
}