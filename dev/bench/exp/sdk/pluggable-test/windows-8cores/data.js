window.BENCHMARK_DATA = {
  "lastUpdate": 1724405294757,
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
          "id": "c0d5e06cb475cde26e76fcb5520035b3c9411766",
          "message": "WIP",
          "timestamp": "2024-08-23T18:11:19+09:00",
          "tree_id": "fabe29fc9556d6e076bc96ff80a1b98a9ccde45b",
          "url": "https://github.com/planetarium/libplanet/commit/c0d5e06cb475cde26e76fcb5520035b3c9411766"
        },
        "date": 1724404977419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038888.4210526316,
            "unit": "ns",
            "range": "± 108666.00778293276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1833052.9411764706,
            "unit": "ns",
            "range": "± 74721.82908077445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1553661.9047619049,
            "unit": "ns",
            "range": "± 78304.83821510927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6719477.2727272725,
            "unit": "ns",
            "range": "± 147873.53406854815"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31723.333333333332,
            "unit": "ns",
            "range": "± 1298.5476459108324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9865853.333333334,
            "unit": "ns",
            "range": "± 147907.85194392712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24804186.666666668,
            "unit": "ns",
            "range": "± 351412.41718582023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58787873.333333336,
            "unit": "ns",
            "range": "± 377085.65617806005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117980620,
            "unit": "ns",
            "range": "± 1390881.1673591263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238246973.33333334,
            "unit": "ns",
            "range": "± 2679753.6612443277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3281282.5334821427,
            "unit": "ns",
            "range": "± 5843.472196171042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1089084.2447916667,
            "unit": "ns",
            "range": "± 3138.717366271898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745307.7018229166,
            "unit": "ns",
            "range": "± 2365.6455026287513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941860.7979910714,
            "unit": "ns",
            "range": "± 3968.884551904895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616808.4123883928,
            "unit": "ns",
            "range": "± 1380.205787200235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570442.8850446428,
            "unit": "ns",
            "range": "± 1114.5181264638045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2155269.565217391,
            "unit": "ns",
            "range": "± 49186.291833678886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2222331.25,
            "unit": "ns",
            "range": "± 41463.60201027724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2687172.727272727,
            "unit": "ns",
            "range": "± 75163.6517570464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2272671.7391304346,
            "unit": "ns",
            "range": "± 86173.9962402773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2978117.6470588236,
            "unit": "ns",
            "range": "± 61137.33756157236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181110.29411764705,
            "unit": "ns",
            "range": "± 7759.9072872189345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171196.7213114754,
            "unit": "ns",
            "range": "± 7288.277510567105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144971.05263157896,
            "unit": "ns",
            "range": "± 3218.277480504201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2698846.6666666665,
            "unit": "ns",
            "range": "± 41045.564692818894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2430578.5714285714,
            "unit": "ns",
            "range": "± 21369.647006602925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10746.153846153846,
            "unit": "ns",
            "range": "± 1244.4818370450582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55477.17391304348,
            "unit": "ns",
            "range": "± 4258.929939921311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45806.57894736842,
            "unit": "ns",
            "range": "± 2148.632776213177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59600,
            "unit": "ns",
            "range": "± 12298.61448974424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2620.618556701031,
            "unit": "ns",
            "range": "± 588.0650021344538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10363.04347826087,
            "unit": "ns",
            "range": "± 1042.895103014232"
          }
        ]
      }
    ]
  }
}