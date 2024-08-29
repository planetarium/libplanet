window.BENCHMARK_DATA = {
  "lastUpdate": 1724919809276,
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
          "id": "516f7d1c1e9ebd1a9e6b7c00c720d11e658791e6",
          "message": "refactor: Refactor to minimal, executable version",
          "timestamp": "2024-07-26T10:46:52+09:00",
          "tree_id": "19296bc6afde9a07c03e576a480fd2a29c1db16d",
          "url": "https://github.com/planetarium/libplanet/commit/516f7d1c1e9ebd1a9e6b7c00c720d11e658791e6"
        },
        "date": 1721959001296,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1019489.2133333334,
            "unit": "ns",
            "range": "± 49945.48155557956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2033290.9074074074,
            "unit": "ns",
            "range": "± 85459.19974351845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1761820.0795454546,
            "unit": "ns",
            "range": "± 95678.57705914405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8297122.161290322,
            "unit": "ns",
            "range": "± 209473.33127379193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227789.8,
            "unit": "ns",
            "range": "± 21716.42603997017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206636.27835051547,
            "unit": "ns",
            "range": "± 13308.880429483812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181410.67346938775,
            "unit": "ns",
            "range": "± 11008.120895503034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3121118.8571428573,
            "unit": "ns",
            "range": "± 26400.21230933611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2826432.6428571427,
            "unit": "ns",
            "range": "± 27176.05193097307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18441.909090909092,
            "unit": "ns",
            "range": "± 3897.841176675877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70751.07,
            "unit": "ns",
            "range": "± 8054.859558688907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53865.65789473684,
            "unit": "ns",
            "range": "± 2337.421960419777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78926.30612244898,
            "unit": "ns",
            "range": "± 12300.347526234682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3342.7395833333335,
            "unit": "ns",
            "range": "± 471.69266856138586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20217.583333333332,
            "unit": "ns",
            "range": "± 2790.660908955427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32419.82,
            "unit": "ns",
            "range": "± 1244.6787379947993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10906541.5,
            "unit": "ns",
            "range": "± 87792.60215372976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27950535.933333334,
            "unit": "ns",
            "range": "± 249303.52230348415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69746989.5,
            "unit": "ns",
            "range": "± 434949.11000094644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142006531,
            "unit": "ns",
            "range": "± 1036417.6669279758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285996442.28571427,
            "unit": "ns",
            "range": "± 1075458.0288152313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748252.4425223214,
            "unit": "ns",
            "range": "± 9006.176302506039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206634.5643136161,
            "unit": "ns",
            "range": "± 1873.1364647107637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765883.2055989583,
            "unit": "ns",
            "range": "± 3299.1442361680456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1979631.6572916666,
            "unit": "ns",
            "range": "± 4921.098556434709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636437.9072963169,
            "unit": "ns",
            "range": "± 1017.8304631845431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568422.3724190848,
            "unit": "ns",
            "range": "± 540.7680353501759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2510137.272727273,
            "unit": "ns",
            "range": "± 60710.150573721876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2552894.081081081,
            "unit": "ns",
            "range": "± 82122.09098158477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3111273.6,
            "unit": "ns",
            "range": "± 52064.122958136926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2651037.736842105,
            "unit": "ns",
            "range": "± 84323.19347819619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3258000.214285714,
            "unit": "ns",
            "range": "± 46871.413564836446"
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
          "id": "f3c695b80e941bd047e79cb3c3de3118b54459f5",
          "message": "feat: solo propose mode",
          "timestamp": "2024-07-29T18:01:54+09:00",
          "tree_id": "2b993509ac0528dbd74f9dad6849b1231665f32a",
          "url": "https://github.com/planetarium/libplanet/commit/f3c695b80e941bd047e79cb3c3de3118b54459f5"
        },
        "date": 1722244219271,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006466.7321428572,
            "unit": "ns",
            "range": "± 42905.54183085998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1922127.611111111,
            "unit": "ns",
            "range": "± 63477.70898839902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686255.5375,
            "unit": "ns",
            "range": "± 85092.04150881454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8223814.833333333,
            "unit": "ns",
            "range": "± 168059.4969268149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202160,
            "unit": "ns",
            "range": "± 6919.989160864812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195549.56666666668,
            "unit": "ns",
            "range": "± 5607.303240715035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166090.76470588235,
            "unit": "ns",
            "range": "± 2790.4273088859472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3009953.466666667,
            "unit": "ns",
            "range": "± 45835.69500613292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2691477.8571428573,
            "unit": "ns",
            "range": "± 18881.010557444475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13045.238461538462,
            "unit": "ns",
            "range": "± 619.307811111604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60319.15,
            "unit": "ns",
            "range": "± 3054.8742048724257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59271.648148148146,
            "unit": "ns",
            "range": "± 3128.926617512431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50816.26530612245,
            "unit": "ns",
            "range": "± 8580.761066804509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3354.5813953488373,
            "unit": "ns",
            "range": "± 194.8354035418723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12114.771428571428,
            "unit": "ns",
            "range": "± 600.4429988133897"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32080.6,
            "unit": "ns",
            "range": "± 575.5881215889411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10423744.566666666,
            "unit": "ns",
            "range": "± 60566.267871842734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27088687.714285713,
            "unit": "ns",
            "range": "± 86127.63382635954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71595368.88461539,
            "unit": "ns",
            "range": "± 206590.36402647087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135038697.6,
            "unit": "ns",
            "range": "± 463212.1722286975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287682733.64285713,
            "unit": "ns",
            "range": "± 1138327.906310534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3773436.7371651786,
            "unit": "ns",
            "range": "± 4829.229972087279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213192.732421875,
            "unit": "ns",
            "range": "± 3534.0789035345356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755623.8178013393,
            "unit": "ns",
            "range": "± 838.101626164943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952995.4879807692,
            "unit": "ns",
            "range": "± 3320.277020616378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619299.6910574777,
            "unit": "ns",
            "range": "± 1401.2307492161206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570388.8501953125,
            "unit": "ns",
            "range": "± 1905.6998667615123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380892.7333333334,
            "unit": "ns",
            "range": "± 32927.90631378684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2500877.5,
            "unit": "ns",
            "range": "± 34643.9846005046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3012026.033333333,
            "unit": "ns",
            "range": "± 43779.429592098655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2474145.088235294,
            "unit": "ns",
            "range": "± 41849.797884904445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3198528.4285714286,
            "unit": "ns",
            "range": "± 18195.15234981469"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e26f3a070a2d157c124f2366e0876c7931ebac7",
          "message": "Merge pull request #3900 from s2quake/exp/sdk/net8\n\nBump dotnet to 8 in Libplanet SDK",
          "timestamp": "2024-08-05T16:32:45+09:00",
          "tree_id": "0c2026fc6b7dfaa4fefebb91d4094e458dfdb863",
          "url": "https://github.com/planetarium/libplanet/commit/7e26f3a070a2d157c124f2366e0876c7931ebac7"
        },
        "date": 1722843801408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35875.77,
            "unit": "ns",
            "range": "± 5235.212032704476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3705095.0329241073,
            "unit": "ns",
            "range": "± 9857.604937148526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211226.2041015625,
            "unit": "ns",
            "range": "± 1336.2124992591841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 790319.0006975447,
            "unit": "ns",
            "range": "± 949.9756837747877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918780.1328125,
            "unit": "ns",
            "range": "± 1758.3894804124193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618452.6946149553,
            "unit": "ns",
            "range": "± 760.5910636249289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566827.8076869419,
            "unit": "ns",
            "range": "± 1528.6189787654473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411179.5,
            "unit": "ns",
            "range": "± 29169.46947316927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2553382.3571428573,
            "unit": "ns",
            "range": "± 30757.877864821116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3020245.653846154,
            "unit": "ns",
            "range": "± 25107.42384848936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2513114.5,
            "unit": "ns",
            "range": "± 66985.50609333818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3219710.9615384615,
            "unit": "ns",
            "range": "± 32318.387252500153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209533,
            "unit": "ns",
            "range": "± 4757.82018863349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191931.64285714287,
            "unit": "ns",
            "range": "± 7426.513187559825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167216.58333333334,
            "unit": "ns",
            "range": "± 1775.800483179517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3045753.153846154,
            "unit": "ns",
            "range": "± 36563.55014411245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2765491.4615384615,
            "unit": "ns",
            "range": "± 27826.280604299795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12554.516483516483,
            "unit": "ns",
            "range": "± 1008.1492984963128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59597.83734939759,
            "unit": "ns",
            "range": "± 3093.4800605155874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50680,
            "unit": "ns",
            "range": "± 485.17756824411487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52908.135416666664,
            "unit": "ns",
            "range": "± 7188.414364531731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2794.582474226804,
            "unit": "ns",
            "range": "± 329.43447976871073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11998.442105263159,
            "unit": "ns",
            "range": "± 836.9343083576864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011385.2631578947,
            "unit": "ns",
            "range": "± 45962.403002415915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1948222.34,
            "unit": "ns",
            "range": "± 77715.77875945247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1668190.3684210526,
            "unit": "ns",
            "range": "± 84364.13626967993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8488555.205882354,
            "unit": "ns",
            "range": "± 274093.508049858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10411415.285714285,
            "unit": "ns",
            "range": "± 80433.93045745784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27119181,
            "unit": "ns",
            "range": "± 137272.28787913252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69618581.6,
            "unit": "ns",
            "range": "± 695454.8977535495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138359314.3,
            "unit": "ns",
            "range": "± 749516.8996967503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286935934.2,
            "unit": "ns",
            "range": "± 1839210.6757383025"
          }
        ]
      },
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
          "id": "5c67f7fd74595929b3b6f9885e46ba3a8d78f799",
          "message": "Merge pull request #3909 from s2quake/exp/sdk/seed\n\nAdd Seed Service to SDK",
          "timestamp": "2024-08-12T15:08:11+09:00",
          "tree_id": "5035a7c3c10989261e6e785ca4fc495d3d6b3bad",
          "url": "https://github.com/planetarium/libplanet/commit/5c67f7fd74595929b3b6f9885e46ba3a8d78f799"
        },
        "date": 1723443559905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209532.55479452055,
            "unit": "ns",
            "range": "± 10433.956938086565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204573.6224489796,
            "unit": "ns",
            "range": "± 16805.94881990984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176638.19791666666,
            "unit": "ns",
            "range": "± 11474.600883433848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3153088.433333333,
            "unit": "ns",
            "range": "± 33516.8178051102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2851897.533333333,
            "unit": "ns",
            "range": "± 33733.14759119765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16856.34,
            "unit": "ns",
            "range": "± 3879.6446122777475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66257.70408163265,
            "unit": "ns",
            "range": "± 7190.815413319742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52891.794117647056,
            "unit": "ns",
            "range": "± 2525.6765404205175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66825.93684210526,
            "unit": "ns",
            "range": "± 9769.57310508208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3265.642105263158,
            "unit": "ns",
            "range": "± 442.3937284526581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14199.258064516129,
            "unit": "ns",
            "range": "± 1946.0281338912378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2464678.8214285714,
            "unit": "ns",
            "range": "± 57748.03788813863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2585026,
            "unit": "ns",
            "range": "± 64307.138601331884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3152640.9285714286,
            "unit": "ns",
            "range": "± 43911.31680087507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2635355.28,
            "unit": "ns",
            "range": "± 70146.63161580414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3300603.5,
            "unit": "ns",
            "range": "± 40715.51215621458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10790832.846153846,
            "unit": "ns",
            "range": "± 36077.9178765584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27154487,
            "unit": "ns",
            "range": "± 249241.6686345088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70112855.16666667,
            "unit": "ns",
            "range": "± 354586.53087477747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139262326.66666666,
            "unit": "ns",
            "range": "± 572856.0492692565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288754403.56666666,
            "unit": "ns",
            "range": "± 2660383.5096551795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1077874.940860215,
            "unit": "ns",
            "range": "± 84434.25199339403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2112026.1666666665,
            "unit": "ns",
            "range": "± 57704.40998212022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1760270.45,
            "unit": "ns",
            "range": "± 88477.15128976463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8554049.962962963,
            "unit": "ns",
            "range": "± 236674.40735509022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3745495.135091146,
            "unit": "ns",
            "range": "± 7842.246455171989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1224983.5525948661,
            "unit": "ns",
            "range": "± 1518.6942199957862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762230.2531901042,
            "unit": "ns",
            "range": "± 1784.8365849840616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936746.2282151442,
            "unit": "ns",
            "range": "± 1539.7791876169454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608944.9640764509,
            "unit": "ns",
            "range": "± 357.68267776938535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569915.859765625,
            "unit": "ns",
            "range": "± 788.9227962501782"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42568.857142857145,
            "unit": "ns",
            "range": "± 5579.028055247357"
          }
        ]
      },
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
          "id": "e40cc5f8e3e48342b19abdf96f52b3df0f048f92",
          "message": "Merge pull request #3911 from s2quake/exp/sdk/swarm\n\nAdd Node Service(swarm) to SDK",
          "timestamp": "2024-08-14T14:58:53+09:00",
          "tree_id": "e0bf2c513e5ee8a226c11682fb658225dcf6434f",
          "url": "https://github.com/planetarium/libplanet/commit/e40cc5f8e3e48342b19abdf96f52b3df0f048f92"
        },
        "date": 1723615683783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205316.79710144928,
            "unit": "ns",
            "range": "± 9322.624541435729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190567.375,
            "unit": "ns",
            "range": "± 8213.942029063644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173057.70634920636,
            "unit": "ns",
            "range": "± 7681.178148373842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3159735.3125,
            "unit": "ns",
            "range": "± 53353.64934062618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2821285.6,
            "unit": "ns",
            "range": "± 38064.34938326713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13744.427083333334,
            "unit": "ns",
            "range": "± 1748.976113976052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60667.683673469386,
            "unit": "ns",
            "range": "± 4301.138104832731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50175.25,
            "unit": "ns",
            "range": "± 479.52175512312647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61247.316326530614,
            "unit": "ns",
            "range": "± 8829.323885507578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2868.415789473684,
            "unit": "ns",
            "range": "± 304.7168082969474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11735.703296703297,
            "unit": "ns",
            "range": "± 960.5064693460829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2452002.5789473685,
            "unit": "ns",
            "range": "± 50020.43123821815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2549062.8235294116,
            "unit": "ns",
            "range": "± 50260.82955472792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3122749.470588235,
            "unit": "ns",
            "range": "± 56096.09257350021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2605897.6086956523,
            "unit": "ns",
            "range": "± 64104.01721402712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3289356.911764706,
            "unit": "ns",
            "range": "± 67401.25566714135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10326412.966666667,
            "unit": "ns",
            "range": "± 69563.52436428845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28821214.333333332,
            "unit": "ns",
            "range": "± 117782.38117129807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68748730.06666666,
            "unit": "ns",
            "range": "± 378739.41753862274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136512523.66666666,
            "unit": "ns",
            "range": "± 915124.9647474902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286565359.6666667,
            "unit": "ns",
            "range": "± 2031363.7778958345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1040324.206185567,
            "unit": "ns",
            "range": "± 78478.41442462301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1984162.8333333333,
            "unit": "ns",
            "range": "± 65018.063972362994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1713803.3647058823,
            "unit": "ns",
            "range": "± 91547.23471817146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8541929,
            "unit": "ns",
            "range": "± 207141.69292298448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3736809.669921875,
            "unit": "ns",
            "range": "± 4478.1451242398425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197159.368861607,
            "unit": "ns",
            "range": "± 1079.658389621998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764955.0498046875,
            "unit": "ns",
            "range": "± 2958.3546702749636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929222.1205729167,
            "unit": "ns",
            "range": "± 2994.260051443153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619140.619516226,
            "unit": "ns",
            "range": "± 355.1262443297649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586117.4874441965,
            "unit": "ns",
            "range": "± 374.42685572842737"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32507.266666666666,
            "unit": "ns",
            "range": "± 405.5198544842809"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e95641a8c153e01cd335a22203f0fc5c480eb2bc",
          "message": "Merge pull request #3919 from s2quake/exp/sdk/json-schema\n\nAdd json schema builder for appsettings.json",
          "timestamp": "2024-08-21T09:54:55+09:00",
          "tree_id": "b46abbf451b0b38f56a8f1aba6691e4b53efc694",
          "url": "https://github.com/planetarium/libplanet/commit/e95641a8c153e01cd335a22203f0fc5c480eb2bc"
        },
        "date": 1724202287920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208387.70408163266,
            "unit": "ns",
            "range": "± 8202.028857188303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194898.84126984127,
            "unit": "ns",
            "range": "± 8937.369774745106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169072.57142857142,
            "unit": "ns",
            "range": "± 2731.4815778053694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3127785.533333333,
            "unit": "ns",
            "range": "± 43846.94404055131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2841770.3571428573,
            "unit": "ns",
            "range": "± 29726.256600487424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13072.443181818182,
            "unit": "ns",
            "range": "± 1236.5831061209685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66437.05434782608,
            "unit": "ns",
            "range": "± 4742.015464688355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51510.379310344826,
            "unit": "ns",
            "range": "± 1454.910341218737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56983.5918367347,
            "unit": "ns",
            "range": "± 10056.753943399282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2816.223404255319,
            "unit": "ns",
            "range": "± 353.43684031452096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12437.933333333332,
            "unit": "ns",
            "range": "± 1001.6242965606785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2444642.714285714,
            "unit": "ns",
            "range": "± 39825.421653431695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2506892.2666666666,
            "unit": "ns",
            "range": "± 42410.93384033796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3132077.933333333,
            "unit": "ns",
            "range": "± 42756.966871688484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2642135.5,
            "unit": "ns",
            "range": "± 34594.65307951949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3259890.1333333333,
            "unit": "ns",
            "range": "± 57945.11153159966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10184284.533333333,
            "unit": "ns",
            "range": "± 65122.005192305514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27061032.766666666,
            "unit": "ns",
            "range": "± 100975.82343134467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68254922.63333334,
            "unit": "ns",
            "range": "± 378744.0770931261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138161627.13333333,
            "unit": "ns",
            "range": "± 1086013.5961102268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284197775.6666667,
            "unit": "ns",
            "range": "± 1742557.759622564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033525.0729166666,
            "unit": "ns",
            "range": "± 71361.24131188846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1981918.2428571428,
            "unit": "ns",
            "range": "± 96127.22035409835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1696287.3975903615,
            "unit": "ns",
            "range": "± 86771.91885851538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8494667.17857143,
            "unit": "ns",
            "range": "± 243490.0055837799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3831923.0440848214,
            "unit": "ns",
            "range": "± 9492.815391424087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219358.04921875,
            "unit": "ns",
            "range": "± 2246.8804804512247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765759.01796875,
            "unit": "ns",
            "range": "± 1135.288561459986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947162.430889423,
            "unit": "ns",
            "range": "± 1914.1257004833064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630129.5415414664,
            "unit": "ns",
            "range": "± 374.3277465273649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576165.6940569197,
            "unit": "ns",
            "range": "± 1199.7602589294984"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32304.69512195122,
            "unit": "ns",
            "range": "± 818.4009170178206"
          }
        ]
      },
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
          "id": "9b88690046d6c5c70ae5d7bbf9c2582ef7aadc01",
          "message": "Merge pull request #3928 from planetarium/exp/sdk/swarm-service\n\nSplit Node into Swarm and Validator services",
          "timestamp": "2024-08-22T17:03:17+09:00",
          "tree_id": "c0ec8431e6c30333c5291c1dfc6bb59c02866ebe",
          "url": "https://github.com/planetarium/libplanet/commit/9b88690046d6c5c70ae5d7bbf9c2582ef7aadc01"
        },
        "date": 1724314363112,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202165.5909090909,
            "unit": "ns",
            "range": "± 7099.310684907772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196126.80555555556,
            "unit": "ns",
            "range": "± 6366.456434512034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175637.23076923078,
            "unit": "ns",
            "range": "± 2070.1220637861816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3118516.033333333,
            "unit": "ns",
            "range": "± 53719.15655899228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2902903,
            "unit": "ns",
            "range": "± 56317.952210640615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13270.933333333332,
            "unit": "ns",
            "range": "± 1018.3257028469093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62611.757894736846,
            "unit": "ns",
            "range": "± 5397.363427885542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51643.11538461538,
            "unit": "ns",
            "range": "± 696.609591576891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55882.25263157895,
            "unit": "ns",
            "range": "± 8147.127469196005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2781.603092783505,
            "unit": "ns",
            "range": "± 421.12204991882703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12415.478723404256,
            "unit": "ns",
            "range": "± 913.9231630337067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2482407.203703704,
            "unit": "ns",
            "range": "± 67654.4141881341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2489118.5,
            "unit": "ns",
            "range": "± 32216.968304462935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3096802.9285714286,
            "unit": "ns",
            "range": "± 34145.16739421731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2589933.5,
            "unit": "ns",
            "range": "± 38190.78828504765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3332794.272727273,
            "unit": "ns",
            "range": "± 79106.98311730815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10536193.233333332,
            "unit": "ns",
            "range": "± 86970.94555200331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27455435.933333334,
            "unit": "ns",
            "range": "± 211657.496190853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69324898.46666667,
            "unit": "ns",
            "range": "± 493964.74450191087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137845460.7,
            "unit": "ns",
            "range": "± 668800.0986804864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284296861.5714286,
            "unit": "ns",
            "range": "± 978888.9836575493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022081.1071428572,
            "unit": "ns",
            "range": "± 54779.33807515602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1949610.5294117648,
            "unit": "ns",
            "range": "± 37659.94070812786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702749.2837837837,
            "unit": "ns",
            "range": "± 85097.26920562128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8775267.972222222,
            "unit": "ns",
            "range": "± 291614.039153564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3738549.591045673,
            "unit": "ns",
            "range": "± 4572.890487925764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200898.0126302084,
            "unit": "ns",
            "range": "± 2048.7374489789877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775469.0329241072,
            "unit": "ns",
            "range": "± 923.8454367848308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962762.2177083334,
            "unit": "ns",
            "range": "± 2808.8359072664107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628992.0891276042,
            "unit": "ns",
            "range": "± 649.1444355604883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583595.5811197917,
            "unit": "ns",
            "range": "± 476.7338431398408"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32368.066666666666,
            "unit": "ns",
            "range": "± 452.859086671508"
          }
        ]
      },
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
          "id": "1538d48f96d9a5e781362b6786d39cea23c0e15d",
          "message": "Merge pull request #3939 from planetarium/refactor/option-schema\n\nImprove option schema builder",
          "timestamp": "2024-08-29T15:23:17+09:00",
          "tree_id": "38da343c71b1c956e231e869b7431cef115e8b0e",
          "url": "https://github.com/planetarium/libplanet/commit/1538d48f96d9a5e781362b6786d39cea23c0e15d"
        },
        "date": 1724913147344,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203785.48076923078,
            "unit": "ns",
            "range": "± 8039.497563781851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191024.27659574468,
            "unit": "ns",
            "range": "± 7446.083726135118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177437.9411764706,
            "unit": "ns",
            "range": "± 3613.9367293608675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3148384,
            "unit": "ns",
            "range": "± 69766.79804494718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2899374.8571428573,
            "unit": "ns",
            "range": "± 45430.8532825218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13718.380434782608,
            "unit": "ns",
            "range": "± 1298.0062974363507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73297.35869565218,
            "unit": "ns",
            "range": "± 6835.5528239042305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52047.041666666664,
            "unit": "ns",
            "range": "± 1354.146899075341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62211.447916666664,
            "unit": "ns",
            "range": "± 11584.98347123714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2978.8125,
            "unit": "ns",
            "range": "± 431.9967424950283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12226.988764044943,
            "unit": "ns",
            "range": "± 861.6454197741512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2445449.722222222,
            "unit": "ns",
            "range": "± 49331.42874095766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2549321.9411764704,
            "unit": "ns",
            "range": "± 49139.380417429194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3078779.9285714286,
            "unit": "ns",
            "range": "± 40715.23927647557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2598693.7021276597,
            "unit": "ns",
            "range": "± 100304.7505921037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3381677.934782609,
            "unit": "ns",
            "range": "± 83308.45733222467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10287694.961538462,
            "unit": "ns",
            "range": "± 58699.070849567666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27195476.07142857,
            "unit": "ns",
            "range": "± 127567.71861519988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69370190.35714285,
            "unit": "ns",
            "range": "± 328109.3658339823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140894408.06666666,
            "unit": "ns",
            "range": "± 589915.0651872894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285720822,
            "unit": "ns",
            "range": "± 996633.8828445049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1023562.9195402298,
            "unit": "ns",
            "range": "± 53708.50127269021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1991321.3035714286,
            "unit": "ns",
            "range": "± 82710.48843414758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1721658.5617977527,
            "unit": "ns",
            "range": "± 109490.66134710416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8454884.666666666,
            "unit": "ns",
            "range": "± 234557.93805598846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3716926.121651786,
            "unit": "ns",
            "range": "± 5927.411277911079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222212.6196614583,
            "unit": "ns",
            "range": "± 3000.6167749301967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766615.5743489583,
            "unit": "ns",
            "range": "± 1182.7091997743237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918564.8583984375,
            "unit": "ns",
            "range": "± 2287.898779082616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616594.8834402902,
            "unit": "ns",
            "range": "± 452.50273505389964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582319.9521484375,
            "unit": "ns",
            "range": "± 631.3059933339098"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31971.866666666665,
            "unit": "ns",
            "range": "± 379.4490115693443"
          }
        ]
      },
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
          "id": "8a8b57a4435d0f60a7fd99aa0ed533e528e02b38",
          "message": "Merge pull request #3933 from planetarium/exp/sdk/bound-peer\n\nRemove BoundPeerUtility",
          "timestamp": "2024-08-29T15:23:34+09:00",
          "tree_id": "7ca027a4d7ee4a87500d867b7753c576a6f0e3d4",
          "url": "https://github.com/planetarium/libplanet/commit/8a8b57a4435d0f60a7fd99aa0ed533e528e02b38"
        },
        "date": 1724913241218,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209696.44736842104,
            "unit": "ns",
            "range": "± 7159.948421780737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200966.30555555556,
            "unit": "ns",
            "range": "± 9832.712991771918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181360.38095238095,
            "unit": "ns",
            "range": "± 6506.639450338517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3068846.6428571427,
            "unit": "ns",
            "range": "± 36139.640219160035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2845819.2666666666,
            "unit": "ns",
            "range": "± 43648.805603797395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14663.183673469388,
            "unit": "ns",
            "range": "± 3514.636437172968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62147.22340425532,
            "unit": "ns",
            "range": "± 4709.778629033441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51096.769230769234,
            "unit": "ns",
            "range": "± 416.8685152111622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60313.0306122449,
            "unit": "ns",
            "range": "± 10536.794432436476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2987,
            "unit": "ns",
            "range": "± 300.79612577018094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12358.934782608696,
            "unit": "ns",
            "range": "± 1010.137541547095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2487284.3076923075,
            "unit": "ns",
            "range": "± 66568.25364196915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554177.28,
            "unit": "ns",
            "range": "± 52537.29286065915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3109455.6,
            "unit": "ns",
            "range": "± 57932.918245156616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2712910.727272727,
            "unit": "ns",
            "range": "± 66077.12406558884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3324075.4285714286,
            "unit": "ns",
            "range": "± 36507.15242348311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10470934.333333334,
            "unit": "ns",
            "range": "± 131619.77615555382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27473743.366666667,
            "unit": "ns",
            "range": "± 146756.48070473105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71396292.2,
            "unit": "ns",
            "range": "± 392561.2097206171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139544734.33333334,
            "unit": "ns",
            "range": "± 906905.7301067867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289683990.5,
            "unit": "ns",
            "range": "± 1692199.2028907659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018289.661971831,
            "unit": "ns",
            "range": "± 49630.05959063338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2005507.5625,
            "unit": "ns",
            "range": "± 36523.05379522866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1709360.310810811,
            "unit": "ns",
            "range": "± 81326.13030088879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8484149.078947369,
            "unit": "ns",
            "range": "± 284836.8780695347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3763900.0133928573,
            "unit": "ns",
            "range": "± 3932.9316790417083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208393.8205729167,
            "unit": "ns",
            "range": "± 3053.793803770337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 844032.2520228794,
            "unit": "ns",
            "range": "± 510.3691836840112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937136.6645833333,
            "unit": "ns",
            "range": "± 1956.0842437477231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 665387.5083007812,
            "unit": "ns",
            "range": "± 470.937052645638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572247.6803850447,
            "unit": "ns",
            "range": "± 709.9450837748606"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32652.916666666668,
            "unit": "ns",
            "range": "± 410.09166565833084"
          }
        ]
      },
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
          "id": "652ba8fbd7cec41f3bf23b5af4a1e29e4b690686",
          "message": "Merge pull request #3927 from s2quake/exp/sdk/swagger\n\nAdd Swagger and Explorer(GQL) service to sdk",
          "timestamp": "2024-08-29T17:13:51+09:00",
          "tree_id": "6405f21e56c8247b21309d1c6115622eaa5e6fca",
          "url": "https://github.com/planetarium/libplanet/commit/652ba8fbd7cec41f3bf23b5af4a1e29e4b690686"
        },
        "date": 1724919781965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202768.55263157896,
            "unit": "ns",
            "range": "± 8683.919587213655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195548.36046511628,
            "unit": "ns",
            "range": "± 6773.34656183582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165402.8,
            "unit": "ns",
            "range": "± 2901.5162834037556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3042284.5789473685,
            "unit": "ns",
            "range": "± 63531.203107270914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2768809.3571428573,
            "unit": "ns",
            "range": "± 29112.94922527442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12742.5,
            "unit": "ns",
            "range": "± 587.5003662363699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60469.34090909091,
            "unit": "ns",
            "range": "± 3180.9734138242397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50536.857142857145,
            "unit": "ns",
            "range": "± 353.11048764305554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49609.45360824742,
            "unit": "ns",
            "range": "± 6409.667896396522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2585.3333333333335,
            "unit": "ns",
            "range": "± 171.028262771586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13193.62,
            "unit": "ns",
            "range": "± 2089.6850677612265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2387645.772727273,
            "unit": "ns",
            "range": "± 55885.98579862381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2498817.8666666667,
            "unit": "ns",
            "range": "± 43483.73935469058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3058558.263157895,
            "unit": "ns",
            "range": "± 67386.75822926284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2541306.8333333335,
            "unit": "ns",
            "range": "± 75747.06631867043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3218894.846153846,
            "unit": "ns",
            "range": "± 31381.682862900965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10275061.733333332,
            "unit": "ns",
            "range": "± 62841.995292577885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26395625.233333334,
            "unit": "ns",
            "range": "± 248629.11583735858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67958551.92857143,
            "unit": "ns",
            "range": "± 197722.84630598623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137605663.46666667,
            "unit": "ns",
            "range": "± 632748.4248184792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281706034.93333334,
            "unit": "ns",
            "range": "± 1108169.3690594586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1046370.4479166666,
            "unit": "ns",
            "range": "± 93984.78719450961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1920553.142857143,
            "unit": "ns",
            "range": "± 22221.08912932502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1660567.079710145,
            "unit": "ns",
            "range": "± 79186.21199452179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8461156.976190476,
            "unit": "ns",
            "range": "± 306528.9292319086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3772714.5563616073,
            "unit": "ns",
            "range": "± 7298.232541049287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1188704.6294642857,
            "unit": "ns",
            "range": "± 1255.772726201328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759534.9720552885,
            "unit": "ns",
            "range": "± 850.5068185824243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903646.56796875,
            "unit": "ns",
            "range": "± 4388.245170392231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634889.0360677083,
            "unit": "ns",
            "range": "± 1345.4474065704107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569125.7170061384,
            "unit": "ns",
            "range": "± 1166.5421553918732"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32508,
            "unit": "ns",
            "range": "± 715.6585157120057"
          }
        ]
      }
    ]
  }
}