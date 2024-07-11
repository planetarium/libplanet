window.BENCHMARK_DATA = {
  "lastUpdate": 1720688913788,
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
          "id": "cf3de69ec4b049161de30270cdf1e4b69413655d",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T13:46:38+09:00",
          "tree_id": "7bf03099fdc240cac41d733e2dfddd3315502ca9",
          "url": "https://github.com/planetarium/libplanet/commit/cf3de69ec4b049161de30270cdf1e4b69413655d"
        },
        "date": 1720673752288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3655259.836237981,
            "unit": "ns",
            "range": "± 3519.991863814423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199577.756640625,
            "unit": "ns",
            "range": "± 2536.2150622636277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758862.5405970982,
            "unit": "ns",
            "range": "± 744.1538808894488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2000824.5630208333,
            "unit": "ns",
            "range": "± 1815.6476571872834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618767.3420758928,
            "unit": "ns",
            "range": "± 458.12340301312645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586511.1123744419,
            "unit": "ns",
            "range": "± 705.9900537662709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2463679.3,
            "unit": "ns",
            "range": "± 43317.27632777877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2581786.5384615385,
            "unit": "ns",
            "range": "± 61741.64380852248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3039887.8181818184,
            "unit": "ns",
            "range": "± 71008.53805714483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2638639.1875,
            "unit": "ns",
            "range": "± 48270.36003210631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3324051.1666666665,
            "unit": "ns",
            "range": "± 52834.500612311844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015853.421686747,
            "unit": "ns",
            "range": "± 53918.45861658422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1956557.8333333333,
            "unit": "ns",
            "range": "± 70648.24225832555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1744282.6948051949,
            "unit": "ns",
            "range": "± 88951.95395742092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8375960.382352941,
            "unit": "ns",
            "range": "± 262418.2710509976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204685.81818181818,
            "unit": "ns",
            "range": "± 8619.946272692641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196116.156626506,
            "unit": "ns",
            "range": "± 10377.352880991975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170121.82352941178,
            "unit": "ns",
            "range": "± 3438.640578689748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3141446.8571428573,
            "unit": "ns",
            "range": "± 38741.87862211034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2851428.653846154,
            "unit": "ns",
            "range": "± 26502.58631984859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13195.445054945056,
            "unit": "ns",
            "range": "± 831.1405999874491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59929.425287356324,
            "unit": "ns",
            "range": "± 3239.532652312618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52076.57777777778,
            "unit": "ns",
            "range": "± 1973.0269832842316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56650.36734693877,
            "unit": "ns",
            "range": "± 8550.218319257352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2943.0208333333335,
            "unit": "ns",
            "range": "± 329.432461864074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12059.01052631579,
            "unit": "ns",
            "range": "± 1236.0261951945706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10597009.357142856,
            "unit": "ns",
            "range": "± 91522.40081288813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27637189.1,
            "unit": "ns",
            "range": "± 173092.2484774273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69093373.36666666,
            "unit": "ns",
            "range": "± 443696.95366494503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140337722.57142857,
            "unit": "ns",
            "range": "± 537486.468795364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287310315.6,
            "unit": "ns",
            "range": "± 636108.7044985539"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32325.071428571428,
            "unit": "ns",
            "range": "± 374.5416612927807"
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
          "id": "48f1ba1f05a55879e3053e45c3e42173b0313d1a",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T17:53:17+09:00",
          "tree_id": "778cbdea0edb67bbd929081380c5f93ec173bb0d",
          "url": "https://github.com/planetarium/libplanet/commit/48f1ba1f05a55879e3053e45c3e42173b0313d1a"
        },
        "date": 1720688888385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3707453.28515625,
            "unit": "ns",
            "range": "± 8622.454897404124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211452.54453125,
            "unit": "ns",
            "range": "± 4874.589013353394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763847.80078125,
            "unit": "ns",
            "range": "± 1042.7180235823753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928523.7569754464,
            "unit": "ns",
            "range": "± 2688.6001348509667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631006.4103816106,
            "unit": "ns",
            "range": "± 956.3959094418454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571082.4989583333,
            "unit": "ns",
            "range": "± 1124.2849757593044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2470052.3181818184,
            "unit": "ns",
            "range": "± 77499.18158174904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2546632.222222222,
            "unit": "ns",
            "range": "± 51823.29160522953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3109248.6875,
            "unit": "ns",
            "range": "± 59075.68508302859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2732255.375,
            "unit": "ns",
            "range": "± 63396.825279046556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3310687.285714286,
            "unit": "ns",
            "range": "± 33549.572360403254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1147118.2210526315,
            "unit": "ns",
            "range": "± 82649.11044702576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2016366.537037037,
            "unit": "ns",
            "range": "± 84646.5565205202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1774326.9516129033,
            "unit": "ns",
            "range": "± 80430.23728111201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8451505.818181818,
            "unit": "ns",
            "range": "± 201012.86204296345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210254.8409090909,
            "unit": "ns",
            "range": "± 11061.288391094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202170.7373737374,
            "unit": "ns",
            "range": "± 14617.034571520226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168023.94,
            "unit": "ns",
            "range": "± 4467.044418852358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3129257.6666666665,
            "unit": "ns",
            "range": "± 45548.08791135971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807271.9615384615,
            "unit": "ns",
            "range": "± 29894.791958955506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16065.285714285714,
            "unit": "ns",
            "range": "± 4808.43882759913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75220.82,
            "unit": "ns",
            "range": "± 15353.812215968785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51412.3870967742,
            "unit": "ns",
            "range": "± 1420.1100351127575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66303.82653061225,
            "unit": "ns",
            "range": "± 11582.945798083956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3129.1382978723404,
            "unit": "ns",
            "range": "± 548.6858562420597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17057,
            "unit": "ns",
            "range": "± 4053.129642509588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10778730.266666668,
            "unit": "ns",
            "range": "± 111712.06825487099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28006248.07142857,
            "unit": "ns",
            "range": "± 119741.51987347535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69395588.73333333,
            "unit": "ns",
            "range": "± 436833.9085112436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139905192.23333332,
            "unit": "ns",
            "range": "± 986636.9923815856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291583496.4,
            "unit": "ns",
            "range": "± 1572519.3354215669"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33277.692307692305,
            "unit": "ns",
            "range": "± 907.333225192631"
          }
        ]
      }
    ]
  }
}