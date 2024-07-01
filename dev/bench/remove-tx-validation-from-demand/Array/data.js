window.BENCHMARK_DATA = {
  "lastUpdate": 1719810749386,
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
          "id": "9e889f1153956a905c2f4888251749db7553d892",
          "message": "Remove tx validation from tx demand",
          "timestamp": "2024-07-01T14:02:42+09:00",
          "tree_id": "7950f33d393584a31bc1f73e4370c1669602ff13",
          "url": "https://github.com/planetarium/libplanet/commit/9e889f1153956a905c2f4888251749db7553d892"
        },
        "date": 1719810701523,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5737044,
            "unit": "ns",
            "range": "± 87907.89685151807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14348730.461538462,
            "unit": "ns",
            "range": "± 89437.10538940702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35884458.692307696,
            "unit": "ns",
            "range": "± 199713.1047779892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73742424.53333333,
            "unit": "ns",
            "range": "± 194828.87328036173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146115417.07692307,
            "unit": "ns",
            "range": "± 263841.53962667997"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15215.521739130434,
            "unit": "ns",
            "range": "± 945.7870898370503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111116.59016393442,
            "unit": "ns",
            "range": "± 4760.011093744248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104128.32857142857,
            "unit": "ns",
            "range": "± 4696.560532187909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91572.2,
            "unit": "ns",
            "range": "± 2685.276125915879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3094333.0447761193,
            "unit": "ns",
            "range": "± 146872.4681532838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2832145.9375,
            "unit": "ns",
            "range": "± 54502.61116003984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4830.902173913043,
            "unit": "ns",
            "range": "± 659.3208303685387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26728.63529411765,
            "unit": "ns",
            "range": "± 1601.9900633353536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22983.064516129034,
            "unit": "ns",
            "range": "± 1304.0741327158182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30223.526315789473,
            "unit": "ns",
            "range": "± 5119.5801187582965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1106.9473684210527,
            "unit": "ns",
            "range": "± 261.3494997703939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4746.044943820225,
            "unit": "ns",
            "range": "± 468.85178676965614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 722840.8265306122,
            "unit": "ns",
            "range": "± 71033.99310509114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1293228.4,
            "unit": "ns",
            "range": "± 45763.37345228533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1075371.8777777778,
            "unit": "ns",
            "range": "± 60137.962088463166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11123567.64,
            "unit": "ns",
            "range": "± 2231318.9763749647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2215542.590909091,
            "unit": "ns",
            "range": "± 102968.4433518687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2274283.470588235,
            "unit": "ns",
            "range": "± 73259.09086549262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2596009.923076923,
            "unit": "ns",
            "range": "± 41828.95499224896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2318117.0625,
            "unit": "ns",
            "range": "± 43235.59699902963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3089883.2210526317,
            "unit": "ns",
            "range": "± 213644.95742734362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3007523.063648897,
            "unit": "ns",
            "range": "± 59032.76186814337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 916952.8701171875,
            "unit": "ns",
            "range": "± 3658.836259536802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614235.7333984375,
            "unit": "ns",
            "range": "± 5853.273840985509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1627212.9133649555,
            "unit": "ns",
            "range": "± 4119.847390535506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458483.4798502604,
            "unit": "ns",
            "range": "± 744.8102226727924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 414430.93296595983,
            "unit": "ns",
            "range": "± 775.9228852761402"
          }
        ]
      }
    ]
  }
}