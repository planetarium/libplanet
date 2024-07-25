window.BENCHMARK_DATA = {
  "lastUpdate": 1721891400360,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "4396e8a013d6602c32a4d405300212b1f1a46cfa",
          "message": "exp: node",
          "timestamp": "2024-07-25T14:46:14+09:00",
          "tree_id": "c422c889c20f6ff72b431188637e9adee2d887b3",
          "url": "https://github.com/planetarium/libplanet/commit/4396e8a013d6602c32a4d405300212b1f1a46cfa"
        },
        "date": 1721886892023,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199554.93220338982,
            "unit": "ns",
            "range": "± 8551.097948992012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192144.36,
            "unit": "ns",
            "range": "± 7730.520857283677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169104.75,
            "unit": "ns",
            "range": "± 4312.110340303982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3045174.2666666666,
            "unit": "ns",
            "range": "± 56821.27667327577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2738743.5,
            "unit": "ns",
            "range": "± 17240.486410013094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13873.61855670103,
            "unit": "ns",
            "range": "± 1940.1360156533858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59628.07865168539,
            "unit": "ns",
            "range": "± 2975.87458582545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50182.166666666664,
            "unit": "ns",
            "range": "± 477.10220619015706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50819.043956043955,
            "unit": "ns",
            "range": "± 6054.160224198615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2944.7604166666665,
            "unit": "ns",
            "range": "± 384.0183039714224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12004.9,
            "unit": "ns",
            "range": "± 683.5959415005001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013328.4558823529,
            "unit": "ns",
            "range": "± 42746.95009298039"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1946677.9186046512,
            "unit": "ns",
            "range": "± 66279.49992132257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702178.4204545454,
            "unit": "ns",
            "range": "± 93772.1620729344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8190256.875,
            "unit": "ns",
            "range": "± 207157.83380926948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3786952.3337053573,
            "unit": "ns",
            "range": "± 6113.686678296807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218619.4204799107,
            "unit": "ns",
            "range": "± 1339.2357102128396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763204.6333984375,
            "unit": "ns",
            "range": "± 1659.843799539171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2037899.0286458333,
            "unit": "ns",
            "range": "± 2540.2018814360326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631574.5597956731,
            "unit": "ns",
            "range": "± 374.84517313287637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578307.6149739583,
            "unit": "ns",
            "range": "± 707.9132194121329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2391109.6,
            "unit": "ns",
            "range": "± 41145.822005920076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2516885.1333333333,
            "unit": "ns",
            "range": "± 33130.59498164944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3059093.2,
            "unit": "ns",
            "range": "± 45890.70674392738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2595072.388888889,
            "unit": "ns",
            "range": "± 55257.021468278144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3210732.1333333333,
            "unit": "ns",
            "range": "± 51191.54390391705"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43592.6,
            "unit": "ns",
            "range": "± 794.49272225382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10480108.7,
            "unit": "ns",
            "range": "± 81522.16007074395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27104600.666666668,
            "unit": "ns",
            "range": "± 136667.22094126858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70255254.14285715,
            "unit": "ns",
            "range": "± 307059.45377592643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140116888.06666666,
            "unit": "ns",
            "range": "± 1023964.9976399491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289499383.2,
            "unit": "ns",
            "range": "± 1264701.1188580825"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "1ba0a655ecc78782cfecd63ad610cf5d82534cef",
          "message": "exp: node",
          "timestamp": "2024-07-25T15:58:33+09:00",
          "tree_id": "b3640871e27a08181086b648d1815bc201fb3353",
          "url": "https://github.com/planetarium/libplanet/commit/1ba0a655ecc78782cfecd63ad610cf5d82534cef"
        },
        "date": 1721891374347,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204951.43181818182,
            "unit": "ns",
            "range": "± 7614.2727222149315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192454.3088235294,
            "unit": "ns",
            "range": "± 8625.574002543472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170237.8524590164,
            "unit": "ns",
            "range": "± 7633.604720436398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3027107.533333333,
            "unit": "ns",
            "range": "± 33115.373203536816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2858456.285714286,
            "unit": "ns",
            "range": "± 29446.246090718676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15596.525773195875,
            "unit": "ns",
            "range": "± 1617.844019912403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60884.041666666664,
            "unit": "ns",
            "range": "± 5088.834284705386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51483.26470588235,
            "unit": "ns",
            "range": "± 1017.5457317371395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60508.83505154639,
            "unit": "ns",
            "range": "± 9667.255505787321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2891.2604166666665,
            "unit": "ns",
            "range": "± 340.1762157839488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15622.28125,
            "unit": "ns",
            "range": "± 1317.5576144648137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1123911.8831168832,
            "unit": "ns",
            "range": "± 57073.518991545134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2083920.575,
            "unit": "ns",
            "range": "± 73571.06671396118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1847562.1142857142,
            "unit": "ns",
            "range": "± 89033.43206917126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8677800.607142856,
            "unit": "ns",
            "range": "± 242209.8747281021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3768185.987079327,
            "unit": "ns",
            "range": "± 3159.9999089508146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211430.8410993305,
            "unit": "ns",
            "range": "± 2591.9428504773846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776923.2397786458,
            "unit": "ns",
            "range": "± 972.6214504719517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944751.7772042411,
            "unit": "ns",
            "range": "± 3306.6426976430585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617340.85546875,
            "unit": "ns",
            "range": "± 783.4818292491525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574915.6817103794,
            "unit": "ns",
            "range": "± 769.4788929830644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2463376.888888889,
            "unit": "ns",
            "range": "± 51751.685776337865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2572300.2647058824,
            "unit": "ns",
            "range": "± 49975.154570207946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3046023.5,
            "unit": "ns",
            "range": "± 33104.412325679055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2570460,
            "unit": "ns",
            "range": "± 28057.817369593355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3313172.076923077,
            "unit": "ns",
            "range": "± 51032.66568493416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52050.0101010101,
            "unit": "ns",
            "range": "± 11388.273384651879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10399047.933333334,
            "unit": "ns",
            "range": "± 70738.0243266526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26871134.4,
            "unit": "ns",
            "range": "± 140244.35011477035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70250848.61538461,
            "unit": "ns",
            "range": "± 335571.2847003198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137737548.43333334,
            "unit": "ns",
            "range": "± 881162.089500764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288783277.6,
            "unit": "ns",
            "range": "± 1698040.716626531"
          }
        ]
      }
    ]
  }
}