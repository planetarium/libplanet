window.BENCHMARK_DATA = {
  "lastUpdate": 1722417128089,
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
          "id": "583571d54d82fb099953049b20316af6d93d6d6a",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-main",
          "timestamp": "2024-07-30T17:49:46+09:00",
          "tree_id": "9413af4ceb1933084d79bd200c2c04dd2ebae8e7",
          "url": "https://github.com/planetarium/libplanet/commit/583571d54d82fb099953049b20316af6d93d6d6a"
        },
        "date": 1722329944953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1054576.923076923,
            "unit": "ns",
            "range": "± 71815.04651521788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1883786.440677966,
            "unit": "ns",
            "range": "± 83191.8751371607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1633956.1797752809,
            "unit": "ns",
            "range": "± 90070.5026317215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6864520.512820513,
            "unit": "ns",
            "range": "± 234114.55718075417"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30500,
            "unit": "ns",
            "range": "± 657.0134448142342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9892357.142857144,
            "unit": "ns",
            "range": "± 109420.15504316529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23753500,
            "unit": "ns",
            "range": "± 196659.36830687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60863520,
            "unit": "ns",
            "range": "± 638528.0172843968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124898606.66666667,
            "unit": "ns",
            "range": "± 1406752.542187993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242228642.85714287,
            "unit": "ns",
            "range": "± 3397271.138545054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3257865.8954326925,
            "unit": "ns",
            "range": "± 4373.742885751681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060962.9166666667,
            "unit": "ns",
            "range": "± 6326.846516466752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731564.0973772322,
            "unit": "ns",
            "range": "± 1317.8416070647481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938390.6380208333,
            "unit": "ns",
            "range": "± 13996.756216486547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619669.2317708334,
            "unit": "ns",
            "range": "± 1404.4895414969162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576784.8911830357,
            "unit": "ns",
            "range": "± 2314.081564786082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2123607.407407407,
            "unit": "ns",
            "range": "± 31684.319416173308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2239196.875,
            "unit": "ns",
            "range": "± 68927.87480695474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2687542.8571428573,
            "unit": "ns",
            "range": "± 61680.422918690914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2227046.6666666665,
            "unit": "ns",
            "range": "± 30220.496040806163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2933266.6666666665,
            "unit": "ns",
            "range": "± 48672.32517658509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182341.02564102566,
            "unit": "ns",
            "range": "± 6056.041696161034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177457.62711864407,
            "unit": "ns",
            "range": "± 6904.751072689271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141379.41176470587,
            "unit": "ns",
            "range": "± 2193.104165869223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2721828.5714285714,
            "unit": "ns",
            "range": "± 35710.03798915388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2558866.6666666665,
            "unit": "ns",
            "range": "± 39511.00509743487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9885.106382978724,
            "unit": "ns",
            "range": "± 1200.981448721783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53242.10526315789,
            "unit": "ns",
            "range": "± 4409.867536664729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43581.25,
            "unit": "ns",
            "range": "± 570.0511672940713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50392.307692307695,
            "unit": "ns",
            "range": "± 8291.055833704586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2218.556701030928,
            "unit": "ns",
            "range": "± 318.63311481336984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10471.717171717171,
            "unit": "ns",
            "range": "± 1480.557010739222"
          }
        ]
      },
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
          "id": "eb924d42a2062ee5630ad69a2d6b17c782aa7065",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-main",
          "timestamp": "2024-07-31T17:55:15+09:00",
          "tree_id": "8a78ecb9c02c33f9fe134eedf74921fd8797ae20",
          "url": "https://github.com/planetarium/libplanet/commit/eb924d42a2062ee5630ad69a2d6b17c782aa7065"
        },
        "date": 1722416702069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958702.4390243902,
            "unit": "ns",
            "range": "± 50545.85248914356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1721748.780487805,
            "unit": "ns",
            "range": "± 52114.44675879818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1535203.1914893617,
            "unit": "ns",
            "range": "± 125667.58716082343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6649934.782608695,
            "unit": "ns",
            "range": "± 164197.07285812945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30822.727272727272,
            "unit": "ns",
            "range": "± 743.8201383858858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9819420,
            "unit": "ns",
            "range": "± 217367.6127039895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23323893.333333332,
            "unit": "ns",
            "range": "± 230876.05972118667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61754993.333333336,
            "unit": "ns",
            "range": "± 465746.748269711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119974214.28571428,
            "unit": "ns",
            "range": "± 747804.3479795653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246975261.53846154,
            "unit": "ns",
            "range": "± 888363.9443179257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3297124.609375,
            "unit": "ns",
            "range": "± 3836.266394536948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052464.4270833333,
            "unit": "ns",
            "range": "± 2793.770934908633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733654.0690104166,
            "unit": "ns",
            "range": "± 3093.9666213490996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926081.9661458333,
            "unit": "ns",
            "range": "± 4780.435845744205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613980.3013392857,
            "unit": "ns",
            "range": "± 937.1346337291955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573424.9348958334,
            "unit": "ns",
            "range": "± 952.8476203670858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2116092.3076923075,
            "unit": "ns",
            "range": "± 23368.299807590538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2196420,
            "unit": "ns",
            "range": "± 25165.883936109105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2654867.8571428573,
            "unit": "ns",
            "range": "± 74203.24967213202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2218566.6666666665,
            "unit": "ns",
            "range": "± 28864.923514948197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2974352.380952381,
            "unit": "ns",
            "range": "± 64493.67115498713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169298.24561403508,
            "unit": "ns",
            "range": "± 5813.791829657861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163264.1791044776,
            "unit": "ns",
            "range": "± 7666.864980818576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145253.84615384616,
            "unit": "ns",
            "range": "± 1631.2650431568873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2766492.8571428573,
            "unit": "ns",
            "range": "± 39684.41787374513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2521080,
            "unit": "ns",
            "range": "± 46736.987493846886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9803.260869565218,
            "unit": "ns",
            "range": "± 1055.9565307982612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50684.09090909091,
            "unit": "ns",
            "range": "± 3060.27143126551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44837.5,
            "unit": "ns",
            "range": "± 1157.5132640802606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52498.94736842105,
            "unit": "ns",
            "range": "± 9618.173121717457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2438.7755102040815,
            "unit": "ns",
            "range": "± 429.48846414934815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9392.47311827957,
            "unit": "ns",
            "range": "± 1130.5285950212947"
          }
        ]
      }
    ]
  }
}