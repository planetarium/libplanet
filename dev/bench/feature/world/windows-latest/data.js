window.BENCHMARK_DATA = {
  "lastUpdate": 1690880834522,
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
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "744559b0b2215a7fb7f759339f5ee24d19a1f3d3",
          "message": "Merge pull request #3346 from limebell/feature/world-state\n\nchore: update docstring and minor refactoring",
          "timestamp": "2023-08-01T17:51:56+09:00",
          "tree_id": "adbffacf7e50247cc7ef38db738dc495d40ca7a1",
          "url": "https://github.com/planetarium/libplanet/commit/744559b0b2215a7fb7f759339f5ee24d19a1f3d3"
        },
        "date": 1690880764167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1252885.1063829786,
            "unit": "ns",
            "range": "± 70854.93579372327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2369083.7209302327,
            "unit": "ns",
            "range": "± 86563.00191254196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1778435.7142857143,
            "unit": "ns",
            "range": "± 31097.47966890953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4330400,
            "unit": "ns",
            "range": "± 95268.17321428079"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43530.645161290326,
            "unit": "ns",
            "range": "± 1984.8474120381552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6718469.230769231,
            "unit": "ns",
            "range": "± 16050.149771647231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17492560,
            "unit": "ns",
            "range": "± 89242.0288557231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45097540,
            "unit": "ns",
            "range": "± 335600.3252169376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90121126.66666667,
            "unit": "ns",
            "range": "± 988872.4361374327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177642235.7142857,
            "unit": "ns",
            "range": "± 1066790.030964311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4969453.098958333,
            "unit": "ns",
            "range": "± 8832.36617301611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532629.47265625,
            "unit": "ns",
            "range": "± 1593.1975340294655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157933.1901041667,
            "unit": "ns",
            "range": "± 1344.5611323561345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2540219.559151786,
            "unit": "ns",
            "range": "± 2935.984261704588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816644.9846540178,
            "unit": "ns",
            "range": "± 1506.4270955762584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735728.7876674107,
            "unit": "ns",
            "range": "± 767.5321102843147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2908785.714285714,
            "unit": "ns",
            "range": "± 36673.22885001693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3038671.4285714286,
            "unit": "ns",
            "range": "± 38345.09826361853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3917007.1428571427,
            "unit": "ns",
            "range": "± 56749.780945503546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3413670,
            "unit": "ns",
            "range": "± 100374.80501977885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5941740,
            "unit": "ns",
            "range": "± 225162.80412989255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249444.18604651163,
            "unit": "ns",
            "range": "± 7162.445124050778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240311.11111111112,
            "unit": "ns",
            "range": "± 4991.862659414572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218804.83870967742,
            "unit": "ns",
            "range": "± 9938.85284503188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3885884.6153846155,
            "unit": "ns",
            "range": "± 21426.65186762529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3496946.153846154,
            "unit": "ns",
            "range": "± 31475.906536709823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18441.23711340206,
            "unit": "ns",
            "range": "± 1796.5100761221036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81878.72340425532,
            "unit": "ns",
            "range": "± 5218.899120523315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67042.30769230769,
            "unit": "ns",
            "range": "± 2746.073571543892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80839.6551724138,
            "unit": "ns",
            "range": "± 3195.223389778375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4569.662921348315,
            "unit": "ns",
            "range": "± 677.294835487273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17214.736842105263,
            "unit": "ns",
            "range": "± 1977.3164934116091"
          }
        ]
      }
    ]
  }
}