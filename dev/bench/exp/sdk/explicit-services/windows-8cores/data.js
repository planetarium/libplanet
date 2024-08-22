window.BENCHMARK_DATA = {
  "lastUpdate": 1724314812579,
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
          "id": "646cd574dba89aa2e3f8323725fcf523bb6f3564",
          "message": "feat: Determining whether to run services based on option settings",
          "timestamp": "2024-08-22T17:04:29+09:00",
          "tree_id": "1d5971aba9edc54e87582b874e3b0bcdba992340",
          "url": "https://github.com/planetarium/libplanet/commit/646cd574dba89aa2e3f8323725fcf523bb6f3564"
        },
        "date": 1724314535492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980885.4166666666,
            "unit": "ns",
            "range": "± 107298.23266231435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1753656.862745098,
            "unit": "ns",
            "range": "± 70389.66189690631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1518752.7472527472,
            "unit": "ns",
            "range": "± 100197.42771222482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6706908,
            "unit": "ns",
            "range": "± 162380.59695255055"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30110.714285714286,
            "unit": "ns",
            "range": "± 725.8911691279826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9974553.333333334,
            "unit": "ns",
            "range": "± 55573.77164848626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23337333.333333332,
            "unit": "ns",
            "range": "± 142307.9139786413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58770953.333333336,
            "unit": "ns",
            "range": "± 624693.3634839995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116541730.76923077,
            "unit": "ns",
            "range": "± 812527.3948044413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243654321.42857143,
            "unit": "ns",
            "range": "± 1714686.810684757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3281260.78125,
            "unit": "ns",
            "range": "± 4906.830699984517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069281.1328125,
            "unit": "ns",
            "range": "± 2629.369394185704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725692.0182291666,
            "unit": "ns",
            "range": "± 1914.4856320217882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944602.05078125,
            "unit": "ns",
            "range": "± 4140.575148770968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632640.0948660715,
            "unit": "ns",
            "range": "± 2010.414512977894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570162.2445913461,
            "unit": "ns",
            "range": "± 764.5617273641808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2118776.923076923,
            "unit": "ns",
            "range": "± 33214.91015207261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2260523.076923077,
            "unit": "ns",
            "range": "± 24745.341441914334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2674662.8571428573,
            "unit": "ns",
            "range": "± 87027.51791214994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2217605.882352941,
            "unit": "ns",
            "range": "± 34453.56423122714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2957713.3333333335,
            "unit": "ns",
            "range": "± 52152.165640099556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177126.08695652173,
            "unit": "ns",
            "range": "± 8561.312642860203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164365.625,
            "unit": "ns",
            "range": "± 7567.290067669797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147020.83333333334,
            "unit": "ns",
            "range": "± 3215.5842212664825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2633840,
            "unit": "ns",
            "range": "± 40129.73247570221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2400700,
            "unit": "ns",
            "range": "± 30563.578123189498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10020.430107526881,
            "unit": "ns",
            "range": "± 1203.6682285003103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49908.43373493976,
            "unit": "ns",
            "range": "± 2609.747432844473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43469.444444444445,
            "unit": "ns",
            "range": "± 1442.3828389052105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50704.166666666664,
            "unit": "ns",
            "range": "± 9164.6335863432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2444.68085106383,
            "unit": "ns",
            "range": "± 442.04243003580103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9446.067415730337,
            "unit": "ns",
            "range": "± 744.5340488848898"
          }
        ]
      }
    ]
  }
}