window.BENCHMARK_DATA = {
  "lastUpdate": 1687488585120,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c59018e3f7b058437f3ded9b3e3cc54e59ec2c53",
          "message": "Merge pull request #3240 from greymistcube/release/2.2.0\n\n🚀 Release 2.2.0",
          "timestamp": "2023-06-23T11:31:50+09:00",
          "tree_id": "14e032a1fe636bb468fbd87eec710f1cc0784d9b",
          "url": "https://github.com/planetarium/libplanet/commit/c59018e3f7b058437f3ded9b3e3cc54e59ec2c53"
        },
        "date": 1687488521037,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1355814.2857142857,
            "unit": "ns",
            "range": "± 104172.64318250194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2458102.564102564,
            "unit": "ns",
            "range": "± 85544.54821959414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2143937.373737374,
            "unit": "ns",
            "range": "± 139126.89669819095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4999297.777777778,
            "unit": "ns",
            "range": "± 185558.29945046784"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43256.6265060241,
            "unit": "ns",
            "range": "± 2309.745671306287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6844180,
            "unit": "ns",
            "range": "± 28564.218375943205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17494746.666666668,
            "unit": "ns",
            "range": "± 118250.88865064258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45117046.666666664,
            "unit": "ns",
            "range": "± 461622.33151395625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89780000,
            "unit": "ns",
            "range": "± 302858.059634731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179055721.42857143,
            "unit": "ns",
            "range": "± 530040.2734024759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4887234.375,
            "unit": "ns",
            "range": "± 11044.696448360102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507352.734375,
            "unit": "ns",
            "range": "± 1656.2967841848877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1180588.2161458333,
            "unit": "ns",
            "range": "± 1256.198116153795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2566973.2572115385,
            "unit": "ns",
            "range": "± 6709.987796094657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821453.9518229166,
            "unit": "ns",
            "range": "± 8558.241814448447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737771.3020833334,
            "unit": "ns",
            "range": "± 947.2777520356226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3017404.347826087,
            "unit": "ns",
            "range": "± 75120.14303319759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3182793.3333333335,
            "unit": "ns",
            "range": "± 36299.26143811167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4004500,
            "unit": "ns",
            "range": "± 73550.81819492464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3920102.8571428573,
            "unit": "ns",
            "range": "± 108244.03389540498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6401109.090909091,
            "unit": "ns",
            "range": "± 202891.96688699315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258167.74193548388,
            "unit": "ns",
            "range": "± 7031.376683446572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244458.33333333334,
            "unit": "ns",
            "range": "± 9112.134377180872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212857.14285714287,
            "unit": "ns",
            "range": "± 6824.535567662148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3842540,
            "unit": "ns",
            "range": "± 36360.17837454282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3439653.3333333335,
            "unit": "ns",
            "range": "± 27887.756316723513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18066.315789473683,
            "unit": "ns",
            "range": "± 1548.3423206026882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82471.05263157895,
            "unit": "ns",
            "range": "± 4139.30157681941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68650.94339622642,
            "unit": "ns",
            "range": "± 2869.1075161175277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89516.16161616161,
            "unit": "ns",
            "range": "± 13920.266440321178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4441.237113402062,
            "unit": "ns",
            "range": "± 852.6615899297803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16391.666666666668,
            "unit": "ns",
            "range": "± 1739.0660933940903"
          }
        ]
      }
    ]
  }
}