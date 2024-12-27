window.BENCHMARK_DATA = {
  "lastUpdate": 1735265279382,
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
          "id": "c655e2e08574bfcfd4fa53ac88af3760e024d06c",
          "message": "test: Add test code for evidence query",
          "timestamp": "2024-12-26T11:28:57+09:00",
          "tree_id": "b1b16f957f28dc3a3de7787113cfe5f954b6ff6b",
          "url": "https://github.com/planetarium/libplanet/commit/c655e2e08574bfcfd4fa53ac88af3760e024d06c"
        },
        "date": 1735180635576,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10841688.366666667,
            "unit": "ns",
            "range": "± 97703.2978818062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27758721.866666667,
            "unit": "ns",
            "range": "± 145240.17502146802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72607757.78571428,
            "unit": "ns",
            "range": "± 234770.38436054217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142788603,
            "unit": "ns",
            "range": "± 615571.1753472774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 301795331.71428573,
            "unit": "ns",
            "range": "± 1436336.7170232418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107231.44303797468,
            "unit": "ns",
            "range": "± 5562.817914272833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193109.42105263157,
            "unit": "ns",
            "range": "± 7303.934504643392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165633.5625,
            "unit": "ns",
            "range": "± 3030.537223414357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2942283.7333333334,
            "unit": "ns",
            "range": "± 34778.21746945034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2834241.6,
            "unit": "ns",
            "range": "± 43187.46840197314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12977.366666666667,
            "unit": "ns",
            "range": "± 849.6357210163462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61495.4,
            "unit": "ns",
            "range": "± 3862.0371867009094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50636.642857142855,
            "unit": "ns",
            "range": "± 737.4579630411129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55533.798969072166,
            "unit": "ns",
            "range": "± 9835.170008025778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2530.5425531914893,
            "unit": "ns",
            "range": "± 382.6490830387554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12651.376344086022,
            "unit": "ns",
            "range": "± 1207.2423202775399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3697032.0848214286,
            "unit": "ns",
            "range": "± 4905.159461115081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226265.4395833334,
            "unit": "ns",
            "range": "± 1130.0525352176464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759363.7920572917,
            "unit": "ns",
            "range": "± 1140.062134793024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926401.7592447917,
            "unit": "ns",
            "range": "± 1957.822707654568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625489.4727213542,
            "unit": "ns",
            "range": "± 1910.1073264531394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569809.8892299107,
            "unit": "ns",
            "range": "± 548.8923188206663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2400742.2666666666,
            "unit": "ns",
            "range": "± 43845.862556829474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2546846.4,
            "unit": "ns",
            "range": "± 67582.87753935903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3113169.5,
            "unit": "ns",
            "range": "± 50413.17656790402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2713562.1875,
            "unit": "ns",
            "range": "± 52040.30331479471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3301248.529411765,
            "unit": "ns",
            "range": "± 66084.15625938418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003141.5978260869,
            "unit": "ns",
            "range": "± 69390.54669600568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1960075.1323529412,
            "unit": "ns",
            "range": "± 93924.10549121832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574681.524590164,
            "unit": "ns",
            "range": "± 70895.05873510193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7777309.966666667,
            "unit": "ns",
            "range": "± 228761.05050429024"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30631.5625,
            "unit": "ns",
            "range": "± 596.5649412818915"
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
          "id": "344a3cca1fa970db5a68907dfd7f3d40d68df274",
          "message": "chore: Changes",
          "timestamp": "2024-12-26T11:59:27+09:00",
          "tree_id": "7b9007158a6b3706a199a411ccf87c03427f47e7",
          "url": "https://github.com/planetarium/libplanet/commit/344a3cca1fa970db5a68907dfd7f3d40d68df274"
        },
        "date": 1735182583623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10676823.214285715,
            "unit": "ns",
            "range": "± 43940.24101712298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27466225.6,
            "unit": "ns",
            "range": "± 503666.1813831799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72034777.2,
            "unit": "ns",
            "range": "± 310860.12339249946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140619777.7857143,
            "unit": "ns",
            "range": "± 851339.1113387126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296814823.4,
            "unit": "ns",
            "range": "± 1306984.3363169385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108135.38202247191,
            "unit": "ns",
            "range": "± 6157.198334443446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196553.4358974359,
            "unit": "ns",
            "range": "± 6810.114249736706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164489.07692307694,
            "unit": "ns",
            "range": "± 2247.8007200201437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2818587.769230769,
            "unit": "ns",
            "range": "± 38576.27307070554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2792520.4,
            "unit": "ns",
            "range": "± 40177.44471502104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12706.58695652174,
            "unit": "ns",
            "range": "± 961.0454889941007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59718.27906976744,
            "unit": "ns",
            "range": "± 3240.4910762601207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50304.333333333336,
            "unit": "ns",
            "range": "± 1023.0401780391388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62556.119047619046,
            "unit": "ns",
            "range": "± 3321.8966164279145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2517.967391304348,
            "unit": "ns",
            "range": "± 309.29989895959653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15275.59375,
            "unit": "ns",
            "range": "± 1893.7831175669453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3715167.3590959823,
            "unit": "ns",
            "range": "± 5030.380562073928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202127.3842075893,
            "unit": "ns",
            "range": "± 1740.5141058571726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753243.0654296875,
            "unit": "ns",
            "range": "± 1376.8715427963562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927096.0208333333,
            "unit": "ns",
            "range": "± 2044.8198975597647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626704.4300362723,
            "unit": "ns",
            "range": "± 1267.9642124014222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578897.9882114956,
            "unit": "ns",
            "range": "± 1405.271745028387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2404141.7666666666,
            "unit": "ns",
            "range": "± 44314.26233564518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2535854.1153846155,
            "unit": "ns",
            "range": "± 19717.778346534807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3015737,
            "unit": "ns",
            "range": "± 30170.969018884058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2586098.9375,
            "unit": "ns",
            "range": "± 48446.9595454228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3245217.8571428573,
            "unit": "ns",
            "range": "± 40004.78595379297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972809.2790697674,
            "unit": "ns",
            "range": "± 44913.49833530362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1898780.1851851852,
            "unit": "ns",
            "range": "± 49606.3969308837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574798.3313253012,
            "unit": "ns",
            "range": "± 83533.06178128853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7761344.29787234,
            "unit": "ns",
            "range": "± 298689.48059116903"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33724.42,
            "unit": "ns",
            "range": "± 5094.243731463538"
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
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "3fb22a1b7828a5ea39243a2f0c2dcd19e3b1b67e",
          "message": "chore: Changes",
          "timestamp": "2024-12-27T10:58:27+09:00",
          "tree_id": "16cda9125d3440d815d32cd7101ebb6ac4f3f923",
          "url": "https://github.com/planetarium/libplanet/commit/3fb22a1b7828a5ea39243a2f0c2dcd19e3b1b67e"
        },
        "date": 1735265252696,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11144974.214285715,
            "unit": "ns",
            "range": "± 29295.049485768515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28362096.3,
            "unit": "ns",
            "range": "± 117659.12204584906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75336122.78571428,
            "unit": "ns",
            "range": "± 264020.7159631982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144103052.8,
            "unit": "ns",
            "range": "± 510477.31364705553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295646697.6333333,
            "unit": "ns",
            "range": "± 1475826.0896010008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 119169.41379310345,
            "unit": "ns",
            "range": "± 6450.02488647033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232518.85714285713,
            "unit": "ns",
            "range": "± 8883.660151554184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177911.625,
            "unit": "ns",
            "range": "± 6983.254035205419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3019476.3571428573,
            "unit": "ns",
            "range": "± 28762.8673970642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2820262.3666666667,
            "unit": "ns",
            "range": "± 42331.93249759515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14653.252747252747,
            "unit": "ns",
            "range": "± 1088.5448655420334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65916.08510638298,
            "unit": "ns",
            "range": "± 3933.782591418848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53919.530303030304,
            "unit": "ns",
            "range": "± 4213.7565465705575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75846.43298969071,
            "unit": "ns",
            "range": "± 8620.232893831835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3065.71875,
            "unit": "ns",
            "range": "± 403.8089100741379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13757.58695652174,
            "unit": "ns",
            "range": "± 1085.495604155625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3704245.1169084823,
            "unit": "ns",
            "range": "± 4405.506461031034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1235209.143780048,
            "unit": "ns",
            "range": "± 3376.6542498424474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780010.0477818081,
            "unit": "ns",
            "range": "± 1232.0567549972666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946753.2926432292,
            "unit": "ns",
            "range": "± 3576.749880207455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634108.8202427456,
            "unit": "ns",
            "range": "± 664.4881299143701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570996.9009114583,
            "unit": "ns",
            "range": "± 1883.945296161123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2480038.285714286,
            "unit": "ns",
            "range": "± 39192.45528489178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2666388.8571428573,
            "unit": "ns",
            "range": "± 27692.422431630428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3120665.346153846,
            "unit": "ns",
            "range": "± 40896.188053505575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2656910.6,
            "unit": "ns",
            "range": "± 93514.18785096538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3286748.6153846155,
            "unit": "ns",
            "range": "± 30048.46477092871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1032986.9782608695,
            "unit": "ns",
            "range": "± 76226.01943252051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1987493.081632653,
            "unit": "ns",
            "range": "± 78108.60184913395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1624620.5492957747,
            "unit": "ns",
            "range": "± 79006.64122099189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7728005.625,
            "unit": "ns",
            "range": "± 196103.46597801987"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31290.029411764706,
            "unit": "ns",
            "range": "± 1010.874156220642"
          }
        ]
      }
    ]
  }
}