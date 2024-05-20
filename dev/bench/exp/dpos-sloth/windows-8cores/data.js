window.BENCHMARK_DATA = {
  "lastUpdate": 1716196079069,
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "752aea228a9adc1132cdd55dd98fc88e72cb910f",
          "message": "feat: make ActionEvaluator.CommitWorld to public",
          "timestamp": "2024-05-20T17:57:03+09:00",
          "tree_id": "927016d20e8d96cc4a85cb63a10d9504b5eaac5c",
          "url": "https://github.com/planetarium/libplanet/commit/752aea228a9adc1132cdd55dd98fc88e72cb910f"
        },
        "date": 1716196015036,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1034672,
            "unit": "ns",
            "range": "± 89676.65155626315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1776966.6666666667,
            "unit": "ns",
            "range": "± 66621.09417203566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1565217.3333333333,
            "unit": "ns",
            "range": "± 78602.2322310996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6947641.379310345,
            "unit": "ns",
            "range": "± 186126.64182762647"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36201.02040816326,
            "unit": "ns",
            "range": "± 4815.53531721363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10111350,
            "unit": "ns",
            "range": "± 39271.65297352184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25350260,
            "unit": "ns",
            "range": "± 392545.8368139955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62457646.666666664,
            "unit": "ns",
            "range": "± 841443.0579721504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121897053.33333333,
            "unit": "ns",
            "range": "± 778510.3126821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245847593.33333334,
            "unit": "ns",
            "range": "± 1023628.123369215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3326755.378605769,
            "unit": "ns",
            "range": "± 4891.030059462742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083810.546875,
            "unit": "ns",
            "range": "± 1299.8996989363918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735972.5260416666,
            "unit": "ns",
            "range": "± 1226.887065048124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947581.796875,
            "unit": "ns",
            "range": "± 3007.2805046833187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618104.052734375,
            "unit": "ns",
            "range": "± 884.7714146667396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573877.1484375,
            "unit": "ns",
            "range": "± 602.7206070384116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2112987.5,
            "unit": "ns",
            "range": "± 39864.53519943092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2213980,
            "unit": "ns",
            "range": "± 42236.06092079685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2828418.75,
            "unit": "ns",
            "range": "± 53489.141810900896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2313093.243243243,
            "unit": "ns",
            "range": "± 74215.7835134988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3016360.714285714,
            "unit": "ns",
            "range": "± 85121.72260199014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176403.0303030303,
            "unit": "ns",
            "range": "± 7599.837441519992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167179.3650793651,
            "unit": "ns",
            "range": "± 7671.546900621694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144964.70588235295,
            "unit": "ns",
            "range": "± 2797.9772105198135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2717371.4285714286,
            "unit": "ns",
            "range": "± 40113.175057414905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2325393.3333333335,
            "unit": "ns",
            "range": "± 41258.3405709278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10907.368421052632,
            "unit": "ns",
            "range": "± 1186.5596707218945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52226.666666666664,
            "unit": "ns",
            "range": "± 4077.922196192842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44818.8679245283,
            "unit": "ns",
            "range": "± 1880.881197304725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57102.083333333336,
            "unit": "ns",
            "range": "± 9319.735473619712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2785.714285714286,
            "unit": "ns",
            "range": "± 380.22549700332905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12277.083333333334,
            "unit": "ns",
            "range": "± 1259.6974713391487"
          }
        ]
      }
    ]
  }
}