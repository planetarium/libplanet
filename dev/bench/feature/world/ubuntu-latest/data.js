window.BENCHMARK_DATA = {
  "lastUpdate": 1690862805631,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "49b0c5195840094a706c93fb185b65ce8b048450",
          "message": "test: Add WorldTest",
          "timestamp": "2023-07-31T16:14:07+09:00",
          "tree_id": "a7c1fc9eeeed6b956489c883189164715dab2a5d",
          "url": "https://github.com/planetarium/libplanet/commit/49b0c5195840094a706c93fb185b65ce8b048450"
        },
        "date": 1690862777233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282986.23333333334,
            "unit": "ns",
            "range": "± 8465.967829404135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262202.9655172414,
            "unit": "ns",
            "range": "± 7068.9470800252175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237705.16666666666,
            "unit": "ns",
            "range": "± 3145.9453502975575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4278078.466666667,
            "unit": "ns",
            "range": "± 37391.34129689589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3964615,
            "unit": "ns",
            "range": "± 12091.968836104952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20264.76923076923,
            "unit": "ns",
            "range": "± 1872.306528067115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90846.6530612245,
            "unit": "ns",
            "range": "± 6281.27813032965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72070.29629629629,
            "unit": "ns",
            "range": "± 2011.0423974189416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91406.95918367348,
            "unit": "ns",
            "range": "± 10626.266848349775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4794.845360824742,
            "unit": "ns",
            "range": "± 714.4886187017228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21548.90425531915,
            "unit": "ns",
            "range": "± 1783.474288887138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334929.597826087,
            "unit": "ns",
            "range": "± 77536.23829462218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2565288.810810811,
            "unit": "ns",
            "range": "± 83060.94131748415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1736699.375,
            "unit": "ns",
            "range": "± 106916.26253792706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4703878.407407408,
            "unit": "ns",
            "range": "± 125744.24773271379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6055713.803645833,
            "unit": "ns",
            "range": "± 22394.752270217843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895173.2615792411,
            "unit": "ns",
            "range": "± 2559.4063408904763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376871.8120814732,
            "unit": "ns",
            "range": "± 603.2087642989067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592842.024939904,
            "unit": "ns",
            "range": "± 985.7494884280196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815801.1903645833,
            "unit": "ns",
            "range": "± 581.6230706381998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750240.4936197917,
            "unit": "ns",
            "range": "± 2499.053077758355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230539.8484848486,
            "unit": "ns",
            "range": "± 99713.85276195368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3432397.4545454546,
            "unit": "ns",
            "range": "± 80457.43020453042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4287087.666666667,
            "unit": "ns",
            "range": "± 78707.30467703623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3840665.2666666666,
            "unit": "ns",
            "range": "± 114633.40449598551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6325792.5,
            "unit": "ns",
            "range": "± 101362.70562643721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7543844.928571428,
            "unit": "ns",
            "range": "± 32559.1666035478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19389128.785714287,
            "unit": "ns",
            "range": "± 133916.13799641037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49901331,
            "unit": "ns",
            "range": "± 342751.7663718161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99802109.46666667,
            "unit": "ns",
            "range": "± 590212.3797312125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200261239.06666666,
            "unit": "ns",
            "range": "± 1359058.3417340042"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47567.930555555555,
            "unit": "ns",
            "range": "± 2356.682917872329"
          }
        ]
      }
    ]
  }
}