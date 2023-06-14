window.BENCHMARK_DATA = {
  "lastUpdate": 1686718784508,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac6bccfbe015e81958744776bd998b6f0ecbfa92",
          "message": "Merge pull request #3211 from OnedgeLee/release/2.0.0\n\nFix typo on changelog",
          "timestamp": "2023-06-14T13:31:43+09:00",
          "tree_id": "f119be8db572f196b39ac3a240a04648deda36bb",
          "url": "https://github.com/planetarium/libplanet/commit/ac6bccfbe015e81958744776bd998b6f0ecbfa92"
        },
        "date": 1686718756781,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1732771.1546391752,
            "unit": "ns",
            "range": "± 183245.58735309867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3356362.09375,
            "unit": "ns",
            "range": "± 316415.06885089626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2692727.1979166665,
            "unit": "ns",
            "range": "± 207625.82192718555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7267392.5051546395,
            "unit": "ns",
            "range": "± 653422.0851779454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4162237.1157894735,
            "unit": "ns",
            "range": "± 326268.38050934166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4468117.873684211,
            "unit": "ns",
            "range": "± 376210.2786717862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5690984.384615385,
            "unit": "ns",
            "range": "± 438793.6204807137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5280072.69072165,
            "unit": "ns",
            "range": "± 425491.85000230325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9212345.442105263,
            "unit": "ns",
            "range": "± 717728.2146173752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9517186.863157894,
            "unit": "ns",
            "range": "± 606773.8088894974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26055889.705263156,
            "unit": "ns",
            "range": "± 2410526.2318499903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65294157,
            "unit": "ns",
            "range": "± 4452356.778807478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146711848.84210527,
            "unit": "ns",
            "range": "± 9201355.898936749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275187480.8113208,
            "unit": "ns",
            "range": "± 11288338.393956285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7162667.823102678,
            "unit": "ns",
            "range": "± 88263.01658688187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2334490.3694196427,
            "unit": "ns",
            "range": "± 26760.13119808921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1712338.9447265626,
            "unit": "ns",
            "range": "± 37413.825130470555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3356465.5721153845,
            "unit": "ns",
            "range": "± 40784.65295466377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1112759.6825561523,
            "unit": "ns",
            "range": "± 33874.03142828802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 980928.3412760417,
            "unit": "ns",
            "range": "± 13947.416050526645"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56331.41758241758,
            "unit": "ns",
            "range": "± 11509.023136522957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362544.6494845361,
            "unit": "ns",
            "range": "± 53777.578216909875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343602.56842105265,
            "unit": "ns",
            "range": "± 49123.82984360287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292190.01086956525,
            "unit": "ns",
            "range": "± 41721.44165944817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5317332.2,
            "unit": "ns",
            "range": "± 474398.0094394795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4691238.935483871,
            "unit": "ns",
            "range": "± 343540.1685410819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22657.083333333332,
            "unit": "ns",
            "range": "± 8385.31498534842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102347.75268817204,
            "unit": "ns",
            "range": "± 17004.388177030323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98023.03225806452,
            "unit": "ns",
            "range": "± 22908.117823758657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120194.76595744681,
            "unit": "ns",
            "range": "± 24612.68951692324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6199.95652173913,
            "unit": "ns",
            "range": "± 1232.5092952688158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18208.32530120482,
            "unit": "ns",
            "range": "± 2425.5596694292635"
          }
        ]
      }
    ]
  }
}