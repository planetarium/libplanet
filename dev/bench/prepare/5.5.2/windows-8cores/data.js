window.BENCHMARK_DATA = {
  "lastUpdate": 1757926431079,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "lime_bell@naver.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "lime_bell@naver.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "cb0ff06e16a83e5306c74d8ae03d2ab3a6894db6",
          "message": "prepare: 5.5.2",
          "timestamp": "2025-02-17T15:38:38+09:00",
          "tree_id": "2e2d668e1ee286aa02c9f861aa68bbb6be813dd4",
          "url": "https://github.com/planetarium/libplanet/commit/cb0ff06e16a83e5306c74d8ae03d2ab3a6894db6"
        },
        "date": 1739774854748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 931710.3092783506,
            "unit": "ns",
            "range": "± 117987.79817257242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1660960.975609756,
            "unit": "ns",
            "range": "± 87061.27685390042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1387402.1505376345,
            "unit": "ns",
            "range": "± 114043.93506784877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6369169.3877551025,
            "unit": "ns",
            "range": "± 253606.34702566237"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30005.102040816328,
            "unit": "ns",
            "range": "± 4277.714305584465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9151046.666666666,
            "unit": "ns",
            "range": "± 129114.75442227279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22711669.230769232,
            "unit": "ns",
            "range": "± 270204.1801570786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56302100,
            "unit": "ns",
            "range": "± 1304200.9308384962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112861920,
            "unit": "ns",
            "range": "± 2053547.108993885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224261361.53846154,
            "unit": "ns",
            "range": "± 2217111.543404489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3152153.2942708335,
            "unit": "ns",
            "range": "± 13753.85597713997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1007689.7395833334,
            "unit": "ns",
            "range": "± 9894.222825503308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 693167.0549665178,
            "unit": "ns",
            "range": "± 5100.05439030327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1851401.4090401786,
            "unit": "ns",
            "range": "± 10382.54318586372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 577236.1197916666,
            "unit": "ns",
            "range": "± 4559.3070039603335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 513984.7981770833,
            "unit": "ns",
            "range": "± 4575.7270327127735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2012391.975308642,
            "unit": "ns",
            "range": "± 105494.06602292557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2101081.25,
            "unit": "ns",
            "range": "± 82638.09758744655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2520448.888888889,
            "unit": "ns",
            "range": "± 95890.37211652932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2149370.2702702703,
            "unit": "ns",
            "range": "± 72395.25331610287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2800688.4615384615,
            "unit": "ns",
            "range": "± 75714.94609083772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 83068.53932584269,
            "unit": "ns",
            "range": "± 5919.52845760266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 151663.04347826086,
            "unit": "ns",
            "range": "± 9347.758941524868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139241.66666666666,
            "unit": "ns",
            "range": "± 6126.527251077243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2359233.3333333335,
            "unit": "ns",
            "range": "± 85534.68250112995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2341055.263157895,
            "unit": "ns",
            "range": "± 79768.34601271705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9608.510638297872,
            "unit": "ns",
            "range": "± 1218.2006450965157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56707.86516853933,
            "unit": "ns",
            "range": "± 5545.498270897123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40838.541666666664,
            "unit": "ns",
            "range": "± 2384.8808771604536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44593.617021276594,
            "unit": "ns",
            "range": "± 7492.588574763391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2209.278350515464,
            "unit": "ns",
            "range": "± 386.5128485970215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9162.36559139785,
            "unit": "ns",
            "range": "± 1376.8200585355326"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "3bbbd805f99ac890709c03451e309b8821de9b24",
          "message": "Decreate HashNodeCache size & ActivitySource as singleton",
          "timestamp": "2025-09-15T17:38:16+09:00",
          "tree_id": "86c3af752c136908e76635197e662d20ca218d46",
          "url": "https://github.com/planetarium/libplanet/commit/3bbbd805f99ac890709c03451e309b8821de9b24"
        },
        "date": 1757926254669,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989247.3684210526,
            "unit": "ns",
            "range": "± 94727.22635659657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1771241.6666666667,
            "unit": "ns",
            "range": "± 67288.1129312152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1507179.569892473,
            "unit": "ns",
            "range": "± 121594.00153177232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6747657.5,
            "unit": "ns",
            "range": "± 236622.04839883695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29668.91891891892,
            "unit": "ns",
            "range": "± 1502.6848734688988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9952233.333333334,
            "unit": "ns",
            "range": "± 110132.99535864203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24195284.615384616,
            "unit": "ns",
            "range": "± 137543.9980888167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61575053.333333336,
            "unit": "ns",
            "range": "± 466502.6946280569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122199030,
            "unit": "ns",
            "range": "± 548438.4809881336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259120966.66666666,
            "unit": "ns",
            "range": "± 4331003.76878595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3320577.4832589286,
            "unit": "ns",
            "range": "± 6287.338580254473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081011.640625,
            "unit": "ns",
            "range": "± 3325.774605376775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734426.484375,
            "unit": "ns",
            "range": "± 1408.8117043289735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965355,
            "unit": "ns",
            "range": "± 3792.9998648173905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626110.0065104166,
            "unit": "ns",
            "range": "± 1018.0526646058574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569449.6028645834,
            "unit": "ns",
            "range": "± 1080.1648008833681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2178040,
            "unit": "ns",
            "range": "± 39892.27995489854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2425750,
            "unit": "ns",
            "range": "± 28541.245458243273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2790634,
            "unit": "ns",
            "range": "± 73577.72353097098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2313461.5384615385,
            "unit": "ns",
            "range": "± 19787.8977518052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2975720,
            "unit": "ns",
            "range": "± 48680.28641775114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100169.79166666667,
            "unit": "ns",
            "range": "± 11869.732580605501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171060.86956521738,
            "unit": "ns",
            "range": "± 8033.738002422041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154621.15384615384,
            "unit": "ns",
            "range": "± 6081.48384042558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2608936.6666666665,
            "unit": "ns",
            "range": "± 41303.26632996245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2511640,
            "unit": "ns",
            "range": "± 44410.645441959394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11020,
            "unit": "ns",
            "range": "± 1591.9883687678548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53907.608695652176,
            "unit": "ns",
            "range": "± 5042.113495801036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45204.545454545456,
            "unit": "ns",
            "range": "± 1695.6791251767695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57016.32653061225,
            "unit": "ns",
            "range": "± 12356.522497133872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2506.3829787234044,
            "unit": "ns",
            "range": "± 426.7427294360335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11402.083333333334,
            "unit": "ns",
            "range": "± 1886.7950641325854"
          }
        ]
      }
    ]
  }
}