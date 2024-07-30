window.BENCHMARK_DATA = {
  "lastUpdate": 1722311330314,
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
        "date": 1722311317580,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10906648.357142856,
            "unit": "ns",
            "range": "± 72080.66289993042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26515312.07142857,
            "unit": "ns",
            "range": "± 264278.5512832608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67209670.76666667,
            "unit": "ns",
            "range": "± 116363.96035559331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135525524.2142857,
            "unit": "ns",
            "range": "± 225243.55507732875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273265098,
            "unit": "ns",
            "range": "± 457211.192550386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14218.307692307691,
            "unit": "ns",
            "range": "± 219.88572206769308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110062.5294117647,
            "unit": "ns",
            "range": "± 3899.9213958896203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106755.1320754717,
            "unit": "ns",
            "range": "± 4445.313288421932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91214.86666666667,
            "unit": "ns",
            "range": "± 2728.0545010903907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3059279.625,
            "unit": "ns",
            "range": "± 140500.52778463825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2813840.48,
            "unit": "ns",
            "range": "± 174986.67039107616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5168.365591397849,
            "unit": "ns",
            "range": "± 718.7074416125562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26668.366666666665,
            "unit": "ns",
            "range": "± 1938.8382972018655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23519.84375,
            "unit": "ns",
            "range": "± 2297.9566590577583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29531.33695652174,
            "unit": "ns",
            "range": "± 5585.788224951231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1210.0851063829787,
            "unit": "ns",
            "range": "± 301.1477117494404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4595.1648351648355,
            "unit": "ns",
            "range": "± 572.4899273977813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676795.7419354839,
            "unit": "ns",
            "range": "± 30542.27533939999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1279778.9777777777,
            "unit": "ns",
            "range": "± 46612.203801681535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1066260.0666666667,
            "unit": "ns",
            "range": "± 47590.98654437274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9347444.14,
            "unit": "ns",
            "range": "± 1285108.6568876875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2191035,
            "unit": "ns",
            "range": "± 26151.30889012377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316320.35483871,
            "unit": "ns",
            "range": "± 69404.02813744478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2568538.5714285714,
            "unit": "ns",
            "range": "± 38866.148633610326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2326008.7258064514,
            "unit": "ns",
            "range": "± 67063.48531141205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3132508.28,
            "unit": "ns",
            "range": "± 344268.19472902425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3008511.013802083,
            "unit": "ns",
            "range": "± 31647.303750140654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922354.1506510417,
            "unit": "ns",
            "range": "± 7214.256889400596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612946.717578125,
            "unit": "ns",
            "range": "± 5135.362428388599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636085.152064732,
            "unit": "ns",
            "range": "± 23024.23967520256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462396.21153041295,
            "unit": "ns",
            "range": "± 429.400480666647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419969.56675502233,
            "unit": "ns",
            "range": "± 389.0529911911854"
          }
        ]
      }
    ]
  }
}