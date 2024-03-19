window.BENCHMARK_DATA = {
  "lastUpdate": 1710822261139,
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
      }
    ]
  }
}