window.BENCHMARK_DATA = {
  "lastUpdate": 1732239582092,
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
          "id": "debacb02bcf55b6ea5fcbcf1700790695a77d335",
          "message": "Prepare 5.4.2",
          "timestamp": "2024-11-22T10:30:16+09:00",
          "tree_id": "aa9bcb4db8fdd915feab73d8f0255ce4140d0672",
          "url": "https://github.com/planetarium/libplanet/commit/debacb02bcf55b6ea5fcbcf1700790695a77d335"
        },
        "date": 1732239555532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10950308.653846154,
            "unit": "ns",
            "range": "± 74088.90742192355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28093679.066666666,
            "unit": "ns",
            "range": "± 188725.29887888324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71406363.26666667,
            "unit": "ns",
            "range": "± 595552.1387197246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144342082.86666667,
            "unit": "ns",
            "range": "± 913301.7248451487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299459997.46666664,
            "unit": "ns",
            "range": "± 1985637.435615859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117505.46842105263,
            "unit": "ns",
            "range": "± 12314.86927777877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193235.15094339623,
            "unit": "ns",
            "range": "± 7938.144053570675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169520.62857142856,
            "unit": "ns",
            "range": "± 5443.866770670156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2950122.066666667,
            "unit": "ns",
            "range": "± 41353.25927985201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2818658.2666666666,
            "unit": "ns",
            "range": "± 46581.61616294975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18682.815217391304,
            "unit": "ns",
            "range": "± 1592.0632057787336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64439.916666666664,
            "unit": "ns",
            "range": "± 5065.971310548279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51272.746268656716,
            "unit": "ns",
            "range": "± 2423.789797012006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62493.926315789475,
            "unit": "ns",
            "range": "± 12804.162272265723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2795.8958333333335,
            "unit": "ns",
            "range": "± 487.0768118213338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13028.005747126437,
            "unit": "ns",
            "range": "± 1063.0247636919846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3786068.504206731,
            "unit": "ns",
            "range": "± 9079.483729087362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220292.4395926339,
            "unit": "ns",
            "range": "± 1913.8067348169948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779546.2047293527,
            "unit": "ns",
            "range": "± 1894.4357169010061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909064.9586838942,
            "unit": "ns",
            "range": "± 1276.5970458560453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629839.8669921875,
            "unit": "ns",
            "range": "± 503.7653367128364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568372.0590122768,
            "unit": "ns",
            "range": "± 734.9150973230344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2440524.2333333334,
            "unit": "ns",
            "range": "± 35304.529014331994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2546410.611111111,
            "unit": "ns",
            "range": "± 53445.187136133594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3126539.285714286,
            "unit": "ns",
            "range": "± 42952.946828573266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2617067.1875,
            "unit": "ns",
            "range": "± 48284.70516663809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3439012.7666666666,
            "unit": "ns",
            "range": "± 57619.551889300645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004829.2168674698,
            "unit": "ns",
            "range": "± 51644.98643224279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2012806.9507042253,
            "unit": "ns",
            "range": "± 97063.09098442673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1621829.0294117648,
            "unit": "ns",
            "range": "± 76260.37887004041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7647239.666666667,
            "unit": "ns",
            "range": "± 178108.34541125057"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31064.564516129034,
            "unit": "ns",
            "range": "± 934.9150027492292"
          }
        ]
      }
    ]
  }
}