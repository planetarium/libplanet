window.BENCHMARK_DATA = {
  "lastUpdate": 1731490098443,
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
          "id": "d34708daec7053fbd74005881a1e5c2a12d01283",
          "message": "Release 5.4.0",
          "timestamp": "2024-11-13T14:48:41+09:00",
          "tree_id": "c5e56f2022237909df2680d547693f3494da9ec4",
          "url": "https://github.com/planetarium/libplanet/commit/d34708daec7053fbd74005881a1e5c2a12d01283"
        },
        "date": 1731490085524,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10766827.307692308,
            "unit": "ns",
            "range": "± 140651.7883056028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26133253.35714286,
            "unit": "ns",
            "range": "± 124097.00714150211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66302429.692307696,
            "unit": "ns",
            "range": "± 74936.07276581888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132626888.66666667,
            "unit": "ns",
            "range": "± 207335.9575942271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273319438.88461536,
            "unit": "ns",
            "range": "± 200933.57055983224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13528.138888888889,
            "unit": "ns",
            "range": "± 454.43780984406766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53925.62195121951,
            "unit": "ns",
            "range": "± 2800.8591346855883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106051.95652173914,
            "unit": "ns",
            "range": "± 3289.205091112588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 95238.0294117647,
            "unit": "ns",
            "range": "± 3045.7434230592594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2847769.0204081633,
            "unit": "ns",
            "range": "± 174983.35846217093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2744793.6075949366,
            "unit": "ns",
            "range": "± 142058.37169830865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5452.094736842106,
            "unit": "ns",
            "range": "± 971.8302219478223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26660.58695652174,
            "unit": "ns",
            "range": "± 1869.515440258908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23299.602150537634,
            "unit": "ns",
            "range": "± 1834.7893205665032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31932.09677419355,
            "unit": "ns",
            "range": "± 4756.728550317173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1257.9462365591398,
            "unit": "ns",
            "range": "± 277.3314359010595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5472.255102040816,
            "unit": "ns",
            "range": "± 1156.756889438036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 674145.2666666667,
            "unit": "ns",
            "range": "± 42686.89975445852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1288974.4222222222,
            "unit": "ns",
            "range": "± 48452.76320035313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1045944.7816091954,
            "unit": "ns",
            "range": "± 53638.24870530991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8482851.59,
            "unit": "ns",
            "range": "± 1235052.3763464086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2132143.5272727273,
            "unit": "ns",
            "range": "± 90217.10532681798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2257171.0476190476,
            "unit": "ns",
            "range": "± 82148.41332611164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2509795.75,
            "unit": "ns",
            "range": "± 20946.049595546436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2271997.5,
            "unit": "ns",
            "range": "± 89671.37990178005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2832019.814814815,
            "unit": "ns",
            "range": "± 90948.83108272539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3027704.0735677085,
            "unit": "ns",
            "range": "± 63751.85931865062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 914506.6384626116,
            "unit": "ns",
            "range": "± 6421.263562089011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617841.7203125,
            "unit": "ns",
            "range": "± 5644.707732585743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1611802.4208233173,
            "unit": "ns",
            "range": "± 2532.4840251034175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467108.1659109933,
            "unit": "ns",
            "range": "± 691.8702933532531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426151.0870535714,
            "unit": "ns",
            "range": "± 497.1155876479867"
          }
        ]
      }
    ]
  }
}