window.BENCHMARK_DATA = {
  "lastUpdate": 1695085919372,
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
          "id": "2dbe34b4f8b633e133ec730a39d49794678ee4b6",
          "message": "Merge pull request #3423 from greymistcube/merge/3.3.1-to-main\n\n🔀 Merge 3.3.1 to main",
          "timestamp": "2023-09-13T12:11:35+09:00",
          "tree_id": "fe99df5707bc1adf87c21c65175db244cdd28918",
          "url": "https://github.com/planetarium/libplanet/commit/2dbe34b4f8b633e133ec730a39d49794678ee4b6"
        },
        "date": 1695085887704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383089.125,
            "unit": "ns",
            "range": "± 24440.952297610675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355808.9655172414,
            "unit": "ns",
            "range": "± 23533.340576400195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327603.23333333334,
            "unit": "ns",
            "range": "± 29009.03781642596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5420409.5,
            "unit": "ns",
            "range": "± 193616.26380792246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5085630.066666666,
            "unit": "ns",
            "range": "± 143296.25754718747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26161.872340425532,
            "unit": "ns",
            "range": "± 5822.231186025491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111538.90721649484,
            "unit": "ns",
            "range": "± 18972.07795852152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116897.78571428571,
            "unit": "ns",
            "range": "± 24696.253548357137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114534.47368421052,
            "unit": "ns",
            "range": "± 24018.3724393419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7217.090909090909,
            "unit": "ns",
            "range": "± 1197.8059409187758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25042.051020408162,
            "unit": "ns",
            "range": "± 8634.994211845611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4551062.765625,
            "unit": "ns",
            "range": "± 210590.15584333186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4763438.340909091,
            "unit": "ns",
            "range": "± 156493.41460488053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5688124.958762887,
            "unit": "ns",
            "range": "± 327516.84356294683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5076725.551020408,
            "unit": "ns",
            "range": "± 199463.95025606145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8221527.096153846,
            "unit": "ns",
            "range": "± 336229.2230281714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1633410.6701030927,
            "unit": "ns",
            "range": "± 250087.38655833396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3094880.618556701,
            "unit": "ns",
            "range": "± 392998.58491834515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2038658.7789473685,
            "unit": "ns",
            "range": "± 244720.87014880189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5999021.278350515,
            "unit": "ns",
            "range": "± 637742.1273853846"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69298.37634408602,
            "unit": "ns",
            "range": "± 14667.128510286544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10808231.470588235,
            "unit": "ns",
            "range": "± 219200.4307717362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27710598.17857143,
            "unit": "ns",
            "range": "± 769763.8591020675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70989307.27272727,
            "unit": "ns",
            "range": "± 1701794.6800166492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141319552.26666668,
            "unit": "ns",
            "range": "± 2195262.556030647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284108329.93333334,
            "unit": "ns",
            "range": "± 3736588.7333750683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5719655.18445122,
            "unit": "ns",
            "range": "± 191685.65270457225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910407.3283361488,
            "unit": "ns",
            "range": "± 64002.173138291175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315152.5919846755,
            "unit": "ns",
            "range": "± 53643.28830447437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3101424.511827257,
            "unit": "ns",
            "range": "± 102839.81608786792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1034157.1740722656,
            "unit": "ns",
            "range": "± 36214.791325966755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 957976.5533088235,
            "unit": "ns",
            "range": "± 19269.205060664044"
          }
        ]
      }
    ]
  }
}