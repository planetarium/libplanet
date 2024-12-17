window.BENCHMARK_DATA = {
  "lastUpdate": 1734399192912,
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
          "id": "e3907087caea5ec63a7917f9c21501807ca66be6",
          "message": "Merge tag '5.4.2' into port/5.4.2-to-main",
          "timestamp": "2024-12-17T09:36:02+09:00",
          "tree_id": "4b8563b19539133165ce73d22e42fd051eda60b0",
          "url": "https://github.com/planetarium/libplanet/commit/e3907087caea5ec63a7917f9c21501807ca66be6"
        },
        "date": 1734396242117,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10800600.666666666,
            "unit": "ns",
            "range": "± 95803.64126675822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26145244.42857143,
            "unit": "ns",
            "range": "± 137062.35215108053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67336764.71428572,
            "unit": "ns",
            "range": "± 103856.32211890587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134354791.2857143,
            "unit": "ns",
            "range": "± 183326.5323394418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270563304.84615386,
            "unit": "ns",
            "range": "± 290392.4437845121"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13242.529411764706,
            "unit": "ns",
            "range": "± 429.9233536548408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53791.01190476191,
            "unit": "ns",
            "range": "± 2797.9242886750476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106546.37288135593,
            "unit": "ns",
            "range": "± 4568.1163698954815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93194.69444444444,
            "unit": "ns",
            "range": "± 3051.5892517033008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2867481.188235294,
            "unit": "ns",
            "range": "± 154110.46205250174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2715954.06,
            "unit": "ns",
            "range": "± 162429.54682487337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5062.547368421053,
            "unit": "ns",
            "range": "± 749.2551871681106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27041.03370786517,
            "unit": "ns",
            "range": "± 1841.1009209501785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22120.14285714286,
            "unit": "ns",
            "range": "± 840.3156426134047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30479.94680851064,
            "unit": "ns",
            "range": "± 5423.680491364609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1447.7105263157894,
            "unit": "ns",
            "range": "± 262.47520226282626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4874.450549450549,
            "unit": "ns",
            "range": "± 645.2932195476249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 671992.9411764706,
            "unit": "ns",
            "range": "± 34360.47861568403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1264391.6020408163,
            "unit": "ns",
            "range": "± 48499.31533032403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1024755.8676470588,
            "unit": "ns",
            "range": "± 46395.854404327925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8724317.99,
            "unit": "ns",
            "range": "± 1322571.1562312013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2128041.9830508474,
            "unit": "ns",
            "range": "± 93502.1830125928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2244867.3333333335,
            "unit": "ns",
            "range": "± 72791.46056143306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2551835.3333333335,
            "unit": "ns",
            "range": "± 47213.48901633132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2264584.403508772,
            "unit": "ns",
            "range": "± 97444.9273915894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2692170.153846154,
            "unit": "ns",
            "range": "± 32549.5828643168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3007319.929129464,
            "unit": "ns",
            "range": "± 49358.07965581301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917519.9993722098,
            "unit": "ns",
            "range": "± 5105.657888256387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614258.4249348958,
            "unit": "ns",
            "range": "± 5692.696444262096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1619467.2428850445,
            "unit": "ns",
            "range": "± 2405.332094729146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463830.4762486049,
            "unit": "ns",
            "range": "± 716.1413697207232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425473.6750139509,
            "unit": "ns",
            "range": "± 599.5234861881859"
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
          "id": "6812dcd7382a24c156cef4c93b985ab267fb6a06",
          "message": "Merge tag '5.4.2' into port/5.4.2-to-main",
          "timestamp": "2024-12-17T09:48:01+09:00",
          "tree_id": "22ad446f879011bbddb00ac942a89ac9f9fd696c",
          "url": "https://github.com/planetarium/libplanet/commit/6812dcd7382a24c156cef4c93b985ab267fb6a06"
        },
        "date": 1734397743188,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10838861.333333334,
            "unit": "ns",
            "range": "± 96030.2770071013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26331940.57142857,
            "unit": "ns",
            "range": "± 283301.2262580956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66576978.266666666,
            "unit": "ns",
            "range": "± 97566.46119182164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134747562.35714287,
            "unit": "ns",
            "range": "± 194358.28475845134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269936124.35714287,
            "unit": "ns",
            "range": "± 322823.40658623184"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12840.608108108108,
            "unit": "ns",
            "range": "± 435.4828599627331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54181.43421052631,
            "unit": "ns",
            "range": "± 2734.7136904888907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104285.55555555556,
            "unit": "ns",
            "range": "± 3475.7090352875916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90503,
            "unit": "ns",
            "range": "± 1302.5285911523135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2910852.11627907,
            "unit": "ns",
            "range": "± 107246.3245595567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2808072.882352941,
            "unit": "ns",
            "range": "± 57387.81038130219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5124.887096774193,
            "unit": "ns",
            "range": "± 720.0324272929909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26956.351648351647,
            "unit": "ns",
            "range": "± 2250.696491575818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23873.290322580644,
            "unit": "ns",
            "range": "± 1640.7168871950666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29887.88172043011,
            "unit": "ns",
            "range": "± 4668.4534373524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1289.2421052631578,
            "unit": "ns",
            "range": "± 253.22442807565804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4969.287234042553,
            "unit": "ns",
            "range": "± 662.262976424626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 685123.9175257732,
            "unit": "ns",
            "range": "± 51951.77476429264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1273073.5405405406,
            "unit": "ns",
            "range": "± 42128.38366205707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1026151.7794117647,
            "unit": "ns",
            "range": "± 48779.46774869665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8778100.69,
            "unit": "ns",
            "range": "± 1511627.848207955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2123777.724137931,
            "unit": "ns",
            "range": "± 61576.61191840416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2227994.933333333,
            "unit": "ns",
            "range": "± 37052.1719075504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2538429.769230769,
            "unit": "ns",
            "range": "± 36017.75268797746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2249240.4444444445,
            "unit": "ns",
            "range": "± 91016.00392748692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2751045.6285714284,
            "unit": "ns",
            "range": "± 81026.5207585784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3061567.3588541667,
            "unit": "ns",
            "range": "± 28346.934505000932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921963.1030273438,
            "unit": "ns",
            "range": "± 3754.6096344560083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 619928.6213541667,
            "unit": "ns",
            "range": "± 5350.733247931646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1647065.6978236607,
            "unit": "ns",
            "range": "± 10642.825093564232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466684.06169782364,
            "unit": "ns",
            "range": "± 614.7806938443532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422281.7974008414,
            "unit": "ns",
            "range": "± 1534.1401851041107"
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
          "id": "1db336102ea4f3e32eecdab38515e9d314eb3892",
          "message": "Merge tag '5.4.2' into port/5.4.2-to-main",
          "timestamp": "2024-12-17T10:25:06+09:00",
          "tree_id": "ff2c178e2678541bea0f682a9dcc1d45282bcfc4",
          "url": "https://github.com/planetarium/libplanet/commit/1db336102ea4f3e32eecdab38515e9d314eb3892"
        },
        "date": 1734399180109,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10666990.846153846,
            "unit": "ns",
            "range": "± 111304.4044088449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26168491.214285713,
            "unit": "ns",
            "range": "± 121045.42205586017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66860622.35714286,
            "unit": "ns",
            "range": "± 93949.63850391594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134082452.64285715,
            "unit": "ns",
            "range": "± 201473.81420789656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270201464.4230769,
            "unit": "ns",
            "range": "± 569553.3236277445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13353.74074074074,
            "unit": "ns",
            "range": "± 375.86368156887295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54023.362318840576,
            "unit": "ns",
            "range": "± 2491.4473762372045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105730.8431372549,
            "unit": "ns",
            "range": "± 4270.72958812683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92276.675,
            "unit": "ns",
            "range": "± 3219.872942130098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2820342.55,
            "unit": "ns",
            "range": "± 199222.1788054417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2690649.51,
            "unit": "ns",
            "range": "± 187514.74053564804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5230.621052631579,
            "unit": "ns",
            "range": "± 777.1584243726295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27671.164835164836,
            "unit": "ns",
            "range": "± 2266.0498340295276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22885.21649484536,
            "unit": "ns",
            "range": "± 1686.0688327858243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 32155.60824742268,
            "unit": "ns",
            "range": "± 5721.993374538685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1277.3936170212767,
            "unit": "ns",
            "range": "± 279.1371581805243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4769.311111111111,
            "unit": "ns",
            "range": "± 570.2836795455881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 679901.652631579,
            "unit": "ns",
            "range": "± 46888.54116600264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1268689.8301886793,
            "unit": "ns",
            "range": "± 49882.72148123492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1040035.5,
            "unit": "ns",
            "range": "± 50078.09903361936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8714943.73,
            "unit": "ns",
            "range": "± 1415575.92734658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2133531.75,
            "unit": "ns",
            "range": "± 24139.12491117424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2253360.5,
            "unit": "ns",
            "range": "± 64147.84014579423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2518808.9166666665,
            "unit": "ns",
            "range": "± 28859.317816098945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2231796.3448275863,
            "unit": "ns",
            "range": "± 53849.00825806217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2897081.4,
            "unit": "ns",
            "range": "± 122522.54056848297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3011944.9260253906,
            "unit": "ns",
            "range": "± 58308.192042935785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913851.6838541667,
            "unit": "ns",
            "range": "± 3663.759442891143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612180.383984375,
            "unit": "ns",
            "range": "± 4769.507580733652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635622.659375,
            "unit": "ns",
            "range": "± 15015.974530651858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458580.4033551897,
            "unit": "ns",
            "range": "± 872.8371806037516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 414140.6236328125,
            "unit": "ns",
            "range": "± 927.4574224504869"
          }
        ]
      }
    ]
  }
}