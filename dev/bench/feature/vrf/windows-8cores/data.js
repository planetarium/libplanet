window.BENCHMARK_DATA = {
  "lastUpdate": 1711114740977,
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
          "id": "bad0ed71b73360b295dab729bb5ff4e9d30e5bc3",
          "message": "Merge pull request #3684 from s2quake/chore/remove-unused-field\n\nRemoved unused field in NullBlockPolicy",
          "timestamp": "2024-03-14T16:56:42+09:00",
          "tree_id": "5156e3d39cee3ea16e56a57e59dc0997b9442757",
          "url": "https://github.com/planetarium/libplanet/commit/bad0ed71b73360b295dab729bb5ff4e9d30e5bc3"
        },
        "date": 1710822199945,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 947300,
            "unit": "ns",
            "range": "± 106965.35453457381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1664350,
            "unit": "ns",
            "range": "± 54537.45389684983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1526347,
            "unit": "ns",
            "range": "± 149308.2747204588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6795634.2105263155,
            "unit": "ns",
            "range": "± 233808.0863238929"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38825,
            "unit": "ns",
            "range": "± 5394.578174816871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4984613.333333333,
            "unit": "ns",
            "range": "± 21109.370521394612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12677566.666666666,
            "unit": "ns",
            "range": "± 72002.27840310399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32960953.333333332,
            "unit": "ns",
            "range": "± 317026.1748244292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64277778.571428575,
            "unit": "ns",
            "range": "± 382021.9509975259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130583643.33333333,
            "unit": "ns",
            "range": "± 1111409.5197840743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3442461.3839285714,
            "unit": "ns",
            "range": "± 7262.524009746145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076209.4791666667,
            "unit": "ns",
            "range": "± 2126.6692609439465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736409.5102163461,
            "unit": "ns",
            "range": "± 837.8769747706497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1901088.5323660714,
            "unit": "ns",
            "range": "± 4171.441644010399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621490.625,
            "unit": "ns",
            "range": "± 1209.8837122054265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552885.7161458334,
            "unit": "ns",
            "range": "± 1050.751915418073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2175642.8571428573,
            "unit": "ns",
            "range": "± 26363.470398044552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2319820,
            "unit": "ns",
            "range": "± 52931.30205126363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2823019.230769231,
            "unit": "ns",
            "range": "± 76209.84198503902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3035575,
            "unit": "ns",
            "range": "± 59468.193179211354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7807491.891891892,
            "unit": "ns",
            "range": "± 253386.9168971726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171723.7288135593,
            "unit": "ns",
            "range": "± 7174.291722413677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173612.22222222222,
            "unit": "ns",
            "range": "± 10282.381875261883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146483.33333333334,
            "unit": "ns",
            "range": "± 4387.999570406207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2977326.6666666665,
            "unit": "ns",
            "range": "± 47967.04920592687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2477572.222222222,
            "unit": "ns",
            "range": "± 52071.89097839025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11560.227272727272,
            "unit": "ns",
            "range": "± 1168.2622690828425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57736.17021276596,
            "unit": "ns",
            "range": "± 5159.7616237309685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46650,
            "unit": "ns",
            "range": "± 1397.9665034712334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60672.63157894737,
            "unit": "ns",
            "range": "± 12081.420957934624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2702.1052631578946,
            "unit": "ns",
            "range": "± 470.1694912517394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11379.38144329897,
            "unit": "ns",
            "range": "± 1904.3775308663799"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6835ee94b15a704269243415eb52bee4a70f127c",
          "message": "Merge pull request #3700 from OnedgeLee/feature/vrf\n\nIntroduce `ConsensusCryptoBackend`, `Proof`, `Lot`",
          "timestamp": "2024-03-22T22:22:17+09:00",
          "tree_id": "fcd4ab4fd9fb678d1537eef33455434f6ba550ba",
          "url": "https://github.com/planetarium/libplanet/commit/6835ee94b15a704269243415eb52bee4a70f127c"
        },
        "date": 1711114393826,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973715.625,
            "unit": "ns",
            "range": "± 92857.11074789787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1738978.2608695652,
            "unit": "ns",
            "range": "± 65677.92429066586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1603279.5918367347,
            "unit": "ns",
            "range": "± 183983.04043264966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7022408.620689655,
            "unit": "ns",
            "range": "± 307941.4537854032"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40417.02127659575,
            "unit": "ns",
            "range": "± 4622.377508111971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5047050,
            "unit": "ns",
            "range": "± 38422.42648692111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13608460,
            "unit": "ns",
            "range": "± 125365.293670708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32726953.333333332,
            "unit": "ns",
            "range": "± 358761.60780955263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64635326.666666664,
            "unit": "ns",
            "range": "± 700007.3810495212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132217593.33333333,
            "unit": "ns",
            "range": "± 788749.8303976875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3310775.1302083335,
            "unit": "ns",
            "range": "± 4283.247550485632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059329.7916666667,
            "unit": "ns",
            "range": "± 6404.86812682825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740287.3186383928,
            "unit": "ns",
            "range": "± 1556.0570390031044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914938.203125,
            "unit": "ns",
            "range": "± 2778.9695183634335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629348.5142299107,
            "unit": "ns",
            "range": "± 1353.3262282041505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559094.7330729166,
            "unit": "ns",
            "range": "± 988.0481581422905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2158909.090909091,
            "unit": "ns",
            "range": "± 45688.196965861345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2272093.9393939395,
            "unit": "ns",
            "range": "± 71644.90970837504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2823196.4285714286,
            "unit": "ns",
            "range": "± 55014.47272304542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2938412.121212121,
            "unit": "ns",
            "range": "± 313321.0576352944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7881426.470588235,
            "unit": "ns",
            "range": "± 239148.52150636623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173332.46753246753,
            "unit": "ns",
            "range": "± 8234.018676685822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165389.04109589042,
            "unit": "ns",
            "range": "± 8177.0267899333485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141400,
            "unit": "ns",
            "range": "± 3474.713853490149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2838533.3333333335,
            "unit": "ns",
            "range": "± 41086.92295725294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2494880,
            "unit": "ns",
            "range": "± 32387.1050177161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10567.741935483871,
            "unit": "ns",
            "range": "± 994.6772789204351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56828.57142857143,
            "unit": "ns",
            "range": "± 6117.441686154854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45307.40740740741,
            "unit": "ns",
            "range": "± 1275.1850321019558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58387.62886597938,
            "unit": "ns",
            "range": "± 11848.446256541745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2728.865979381443,
            "unit": "ns",
            "range": "± 527.3674325692741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10687.912087912087,
            "unit": "ns",
            "range": "± 1119.2095588539426"
          }
        ]
      }
    ]
  }
}