window.BENCHMARK_DATA = {
  "lastUpdate": 1698644980596,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "a381be89165f734ede0b4e80f1913b9bb346623f",
          "message": "WebCrypto Export",
          "timestamp": "2023-10-30T14:25:11+09:00",
          "tree_id": "f5448df3776d0350106e7cc9f5afdd6618627f63",
          "url": "https://github.com/planetarium/libplanet/commit/a381be89165f734ede0b4e80f1913b9bb346623f"
        },
        "date": 1698644906973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1493289.7849462365,
            "unit": "ns",
            "range": "± 138259.31695925668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2836780.6666666665,
            "unit": "ns",
            "range": "± 142473.00358155416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2161842.5531914895,
            "unit": "ns",
            "range": "± 126945.64452701349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9945541.42857143,
            "unit": "ns",
            "range": "± 479979.3623259226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58358.06451612903,
            "unit": "ns",
            "range": "± 5316.735729926718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8855184.126984127,
            "unit": "ns",
            "range": "± 404187.5423876927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23866839.13043478,
            "unit": "ns",
            "range": "± 1151316.202952771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59618960,
            "unit": "ns",
            "range": "± 1921480.4251501742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119714100,
            "unit": "ns",
            "range": "± 3082328.435932245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241534583.33333334,
            "unit": "ns",
            "range": "± 6270768.528287607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5286152.399553572,
            "unit": "ns",
            "range": "± 67610.01968787088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1757996.665736607,
            "unit": "ns",
            "range": "± 25272.782338874178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320463.4244791667,
            "unit": "ns",
            "range": "± 9464.141065711285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3198810.15625,
            "unit": "ns",
            "range": "± 65351.38823742413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999128.1380208334,
            "unit": "ns",
            "range": "± 9758.191218752772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917253.0301339285,
            "unit": "ns",
            "range": "± 30077.15985915957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3678993.4782608696,
            "unit": "ns",
            "range": "± 141182.86707855784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3941512.5,
            "unit": "ns",
            "range": "± 182047.02035201679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4584677.777777778,
            "unit": "ns",
            "range": "± 226612.9089110614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4442950,
            "unit": "ns",
            "range": "± 208297.40221431176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11561439.08045977,
            "unit": "ns",
            "range": "± 959516.8384862662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288900,
            "unit": "ns",
            "range": "± 14505.432346799165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277605.3333333333,
            "unit": "ns",
            "range": "± 13873.82226151626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264868.0412371134,
            "unit": "ns",
            "range": "± 16718.724198682597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4712975.714285715,
            "unit": "ns",
            "range": "± 153348.64993528568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4243692.307692308,
            "unit": "ns",
            "range": "± 196723.15041360495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23189.247311827956,
            "unit": "ns",
            "range": "± 1711.753637139118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97944.08602150538,
            "unit": "ns",
            "range": "± 8229.605389208227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84680.92783505155,
            "unit": "ns",
            "range": "± 9423.898706930586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99219.14893617021,
            "unit": "ns",
            "range": "± 12554.603547529648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5995.833333333333,
            "unit": "ns",
            "range": "± 897.1201488114671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21517.391304347828,
            "unit": "ns",
            "range": "± 1619.4971879881657"
          }
        ]
      }
    ]
  }
}