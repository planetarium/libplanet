window.BENCHMARK_DATA = {
  "lastUpdate": 1733823023059,
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
          "id": "a73925dcf3caaf85703b7ea02ac3f2d1166e45e7",
          "message": "wip",
          "timestamp": "2024-12-10T17:41:03+09:00",
          "tree_id": "363a86ec81a63578daa0784fd34f35c32609b0f2",
          "url": "https://github.com/planetarium/libplanet/commit/a73925dcf3caaf85703b7ea02ac3f2d1166e45e7"
        },
        "date": 1733820617266,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10850289.066666666,
            "unit": "ns",
            "range": "± 99495.71037664077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29205632.866666667,
            "unit": "ns",
            "range": "± 242949.26687269702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71923727.4,
            "unit": "ns",
            "range": "± 277264.0599358566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144385322.06666666,
            "unit": "ns",
            "range": "± 886400.2214768503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300203723.64285713,
            "unit": "ns",
            "range": "± 1227383.8703535164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113428,
            "unit": "ns",
            "range": "± 8856.96540680787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194838.79166666666,
            "unit": "ns",
            "range": "± 9484.6528576024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168817.95744680852,
            "unit": "ns",
            "range": "± 6367.62764149715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3107564.28,
            "unit": "ns",
            "range": "± 81583.24061069978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2787242.1666666665,
            "unit": "ns",
            "range": "± 27246.604553539688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15011.04347826087,
            "unit": "ns",
            "range": "± 1388.795579962736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67725.0425531915,
            "unit": "ns",
            "range": "± 5049.762372594886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50038.379310344826,
            "unit": "ns",
            "range": "± 1336.0370614457709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62124.06179775281,
            "unit": "ns",
            "range": "± 8158.932365198748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3070.804347826087,
            "unit": "ns",
            "range": "± 493.6621445360396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13349.8,
            "unit": "ns",
            "range": "± 1217.0528706213383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754484.4405048075,
            "unit": "ns",
            "range": "± 7431.310200625329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223563.253155048,
            "unit": "ns",
            "range": "± 2202.230977546401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781599.0157001202,
            "unit": "ns",
            "range": "± 1028.4812932154948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941522.8362379808,
            "unit": "ns",
            "range": "± 2494.011027120019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624636.2087590144,
            "unit": "ns",
            "range": "± 475.7666669322842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583676.2410606971,
            "unit": "ns",
            "range": "± 592.0880567616624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2499624.8,
            "unit": "ns",
            "range": "± 55311.82186438894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2585106.227272727,
            "unit": "ns",
            "range": "± 62771.905010034105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3066249.3571428573,
            "unit": "ns",
            "range": "± 24917.08253883774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2656033.65625,
            "unit": "ns",
            "range": "± 81132.04926920039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3381211.1666666665,
            "unit": "ns",
            "range": "± 46063.643442937675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1016321.125,
            "unit": "ns",
            "range": "± 62714.34234335004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1975754.5094339622,
            "unit": "ns",
            "range": "± 82194.22516553343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1603827.884057971,
            "unit": "ns",
            "range": "± 73369.21968704833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7773764.815789473,
            "unit": "ns",
            "range": "± 266405.8937829952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30484.5,
            "unit": "ns",
            "range": "± 908.5011054592557"
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
          "id": "06aafad226f4675eaa37563c63a49445551e0060",
          "message": "wip: evidence",
          "timestamp": "2024-12-10T18:21:09+09:00",
          "tree_id": "816a26fa78c41eec5017845f94d0f8e07d5a5f10",
          "url": "https://github.com/planetarium/libplanet/commit/06aafad226f4675eaa37563c63a49445551e0060"
        },
        "date": 1733822996467,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11370511.9,
            "unit": "ns",
            "range": "± 59800.05876944078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28278520.133333333,
            "unit": "ns",
            "range": "± 127238.45440907212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72376927.88461539,
            "unit": "ns",
            "range": "± 484274.6574198259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143758078.53333333,
            "unit": "ns",
            "range": "± 910275.3438235729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 302321209.4285714,
            "unit": "ns",
            "range": "± 1607917.064842944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112392.06666666667,
            "unit": "ns",
            "range": "± 8021.897975212543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199309.34426229508,
            "unit": "ns",
            "range": "± 8542.3862667002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163250.75,
            "unit": "ns",
            "range": "± 3147.463412548799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2998136.8666666667,
            "unit": "ns",
            "range": "± 40394.13953403684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2837347.7,
            "unit": "ns",
            "range": "± 38292.32179320399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13656.054945054944,
            "unit": "ns",
            "range": "± 1033.6642412380163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62100.184782608696,
            "unit": "ns",
            "range": "± 4689.182552368399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50602.242424242424,
            "unit": "ns",
            "range": "± 1607.1893173779931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59105.365979381444,
            "unit": "ns",
            "range": "± 13548.42575851286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3611.938775510204,
            "unit": "ns",
            "range": "± 501.7181370016669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14461.826086956522,
            "unit": "ns",
            "range": "± 1653.5477583674754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3708167.441964286,
            "unit": "ns",
            "range": "± 11830.079042067258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218323.4326822916,
            "unit": "ns",
            "range": "± 2241.496611589325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757681.0251813616,
            "unit": "ns",
            "range": "± 928.7288600840866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921547.9384765625,
            "unit": "ns",
            "range": "± 3994.6272491345208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627276.0866536458,
            "unit": "ns",
            "range": "± 440.60420311412037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565373.2116887019,
            "unit": "ns",
            "range": "± 689.4377566413855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2492273.5,
            "unit": "ns",
            "range": "± 60064.83867078658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2621103.714285714,
            "unit": "ns",
            "range": "± 85290.54809144737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3069435.65,
            "unit": "ns",
            "range": "± 69726.98264869995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2573447.1315789474,
            "unit": "ns",
            "range": "± 54851.01421650239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3286270.3333333335,
            "unit": "ns",
            "range": "± 44457.86411016723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981251.3536585366,
            "unit": "ns",
            "range": "± 49600.11723511931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1937029.7608695652,
            "unit": "ns",
            "range": "± 74204.5342125952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1595426.4,
            "unit": "ns",
            "range": "± 86189.49211381916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7659846,
            "unit": "ns",
            "range": "± 229287.19639481528"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31027.78947368421,
            "unit": "ns",
            "range": "± 1049.496691672798"
          }
        ]
      }
    ]
  }
}