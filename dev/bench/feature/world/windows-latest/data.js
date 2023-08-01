window.BENCHMARK_DATA = {
  "lastUpdate": 1690863085544,
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
        "date": 1690863020017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1353767.391304348,
            "unit": "ns",
            "range": "± 76337.8063820923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2543870.4545454546,
            "unit": "ns",
            "range": "± 94789.58234278078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1787282,
            "unit": "ns",
            "range": "± 114309.02328355536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4950579.310344827,
            "unit": "ns",
            "range": "± 269715.9634917992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47797.87234042553,
            "unit": "ns",
            "range": "± 2868.215837599164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7357100,
            "unit": "ns",
            "range": "± 53715.69030195353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20606753.333333332,
            "unit": "ns",
            "range": "± 333212.9067699738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51495866.666666664,
            "unit": "ns",
            "range": "± 958327.0934786506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101998965,
            "unit": "ns",
            "range": "± 2223567.2693539327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201027078.57142857,
            "unit": "ns",
            "range": "± 2845822.1202799594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4862137.779017857,
            "unit": "ns",
            "range": "± 23595.74358698717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533371.5234375,
            "unit": "ns",
            "range": "± 7308.698389596752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1202685.6770833333,
            "unit": "ns",
            "range": "± 4914.831914494134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685022.3958333335,
            "unit": "ns",
            "range": "± 9070.515203447176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843107.8515625,
            "unit": "ns",
            "range": "± 2697.2207976104837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783602.6432291666,
            "unit": "ns",
            "range": "± 2037.8416624024503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3271212.5,
            "unit": "ns",
            "range": "± 140111.08328426737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3414898.484848485,
            "unit": "ns",
            "range": "± 105412.04900654183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4059030.5555555555,
            "unit": "ns",
            "range": "± 129905.4025478198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3757852.9411764704,
            "unit": "ns",
            "range": "± 74213.34210948071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6257221.875,
            "unit": "ns",
            "range": "± 177451.06319385362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262553.8461538461,
            "unit": "ns",
            "range": "± 7873.300857757255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249948,
            "unit": "ns",
            "range": "± 12046.344741108052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221914.63414634147,
            "unit": "ns",
            "range": "± 7986.349634708268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4032886.6666666665,
            "unit": "ns",
            "range": "± 40054.6567056756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3716160,
            "unit": "ns",
            "range": "± 63842.09090739879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20487.23404255319,
            "unit": "ns",
            "range": "± 1680.4527067054892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86048.75,
            "unit": "ns",
            "range": "± 4370.5862002913545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74174.62686567164,
            "unit": "ns",
            "range": "± 3514.70259458154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88704,
            "unit": "ns",
            "range": "± 3744.5975499125148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5213.265306122449,
            "unit": "ns",
            "range": "± 860.6683755072908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19368.42105263158,
            "unit": "ns",
            "range": "± 2052.7751406998955"
          }
        ]
      }
    ]
  }
}