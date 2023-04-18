window.BENCHMARK_DATA = {
  "lastUpdate": 1681801643687,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "796b0894b2912da9b4a59a4a400736175a076266",
          "message": "Version bump",
          "timestamp": "2023-04-18T15:46:02+09:00",
          "tree_id": "13c2e25096d4f2be554b279a8e7f29bb999bbc3c",
          "url": "https://github.com/planetarium/libplanet/commit/796b0894b2912da9b4a59a4a400736175a076266"
        },
        "date": 1681801582353,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8901651.533333333,
            "unit": "ns",
            "range": "± 117038.68993924718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22109827.076923076,
            "unit": "ns",
            "range": "± 266290.8637178094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55692170.44444445,
            "unit": "ns",
            "range": "± 1117363.2070792418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112244791.26666667,
            "unit": "ns",
            "range": "± 1603664.1627018005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225243886.65,
            "unit": "ns",
            "range": "± 4971253.725619729"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66558.30107526881,
            "unit": "ns",
            "range": "± 6299.0221649439645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 450866.3728813559,
            "unit": "ns",
            "range": "± 18280.055841892285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366967.1721311475,
            "unit": "ns",
            "range": "± 16476.3155870493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316009.6,
            "unit": "ns",
            "range": "± 10289.676943422472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6473262.576923077,
            "unit": "ns",
            "range": "± 78566.70863822405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4600862.5,
            "unit": "ns",
            "range": "± 71070.51170876325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20594.926315789475,
            "unit": "ns",
            "range": "± 1545.895156515606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98418.73404255319,
            "unit": "ns",
            "range": "± 6265.322194644073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91936.5,
            "unit": "ns",
            "range": "± 5012.513994112782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 246775.90721649484,
            "unit": "ns",
            "range": "± 21890.240238746846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6071.515789473684,
            "unit": "ns",
            "range": "± 574.9068724429052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19544.425531914894,
            "unit": "ns",
            "range": "± 1533.8825797916943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1772257.9382022473,
            "unit": "ns",
            "range": "± 241323.03156138296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3482231.215909091,
            "unit": "ns",
            "range": "± 211308.79891871536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3007364.81443299,
            "unit": "ns",
            "range": "± 352696.8426296197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8003499.819148936,
            "unit": "ns",
            "range": "± 516635.8799089863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3807942.892307692,
            "unit": "ns",
            "range": "± 177232.799544406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4033284.2,
            "unit": "ns",
            "range": "± 61136.38338665447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5752816.75,
            "unit": "ns",
            "range": "± 162191.58498599278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5076293.515625,
            "unit": "ns",
            "range": "± 232146.86076247672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9400848.5,
            "unit": "ns",
            "range": "± 273530.67458683415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7148700.868389423,
            "unit": "ns",
            "range": "± 53766.511623406266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2198021.5563616073,
            "unit": "ns",
            "range": "± 12913.2907047359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1464041.8265625,
            "unit": "ns",
            "range": "± 12800.367307577822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3081716.544228831,
            "unit": "ns",
            "range": "± 93075.82412176432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045299.6596137153,
            "unit": "ns",
            "range": "± 21541.70829845118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 957425.4429036458,
            "unit": "ns",
            "range": "± 7833.840631463859"
          }
        ]
      }
    ]
  }
}