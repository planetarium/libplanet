window.BENCHMARK_DATA = {
  "lastUpdate": 1721007966484,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b596b218868c91141683cb0607890e04dc346ea",
          "message": "Merge pull request #3876 from planetarium/release/5.1.1\n\n🚀 Release 5.1.1",
          "timestamp": "2024-07-15T10:03:11+09:00",
          "tree_id": "e043f8efbe096b33ba463bb49704cfd97c2b42f8",
          "url": "https://github.com/planetarium/libplanet/commit/0b596b218868c91141683cb0607890e04dc346ea"
        },
        "date": 1721007940880,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245020.55128205128,
            "unit": "ns",
            "range": "± 7959.7689927757065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242386.225,
            "unit": "ns",
            "range": "± 8485.319746744206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195049.8,
            "unit": "ns",
            "range": "± 11646.334806897125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3175498.8666666667,
            "unit": "ns",
            "range": "± 45642.08555530844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2861314.933333333,
            "unit": "ns",
            "range": "± 40474.39466143408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20395.89393939394,
            "unit": "ns",
            "range": "± 2795.7339032021478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95207.98333333334,
            "unit": "ns",
            "range": "± 4250.2534141464175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68069.81,
            "unit": "ns",
            "range": "± 9030.70597226345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81449.44329896907,
            "unit": "ns",
            "range": "± 10797.4809581227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4366.864583333333,
            "unit": "ns",
            "range": "± 767.5840309876131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19605.09,
            "unit": "ns",
            "range": "± 5519.977801695593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1099147.71875,
            "unit": "ns",
            "range": "± 50535.101192367445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2064160.5135135136,
            "unit": "ns",
            "range": "± 69738.76123418724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1841466.8623188406,
            "unit": "ns",
            "range": "± 85142.85426045331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8615203.794117646,
            "unit": "ns",
            "range": "± 277167.18587794947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3743330.7643229165,
            "unit": "ns",
            "range": "± 6894.815504323724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205137.7337740385,
            "unit": "ns",
            "range": "± 1119.7052969749047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773135.1728515625,
            "unit": "ns",
            "range": "± 1343.1817722927353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946808.504296875,
            "unit": "ns",
            "range": "± 4815.796789593617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626109.6045619419,
            "unit": "ns",
            "range": "± 791.0530679536297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576202.5925130208,
            "unit": "ns",
            "range": "± 1152.115790643282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2632717.7352941176,
            "unit": "ns",
            "range": "± 51786.23303003585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2658704.0714285714,
            "unit": "ns",
            "range": "± 45205.19443385016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3247135.214285714,
            "unit": "ns",
            "range": "± 35996.67210511074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2729125.6071428573,
            "unit": "ns",
            "range": "± 68579.89193598265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3388377.5384615385,
            "unit": "ns",
            "range": "± 43562.39953142959"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48460.99,
            "unit": "ns",
            "range": "± 8789.196121059336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11151838.666666666,
            "unit": "ns",
            "range": "± 76409.64787686609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28208903.7,
            "unit": "ns",
            "range": "± 163757.30576601112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72216861.53333333,
            "unit": "ns",
            "range": "± 419021.8256195641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142121619.43333334,
            "unit": "ns",
            "range": "± 682350.9856751004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 307822035.6,
            "unit": "ns",
            "range": "± 1129019.151463264"
          }
        ]
      }
    ]
  }
}