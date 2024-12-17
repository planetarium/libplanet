window.BENCHMARK_DATA = {
  "lastUpdate": 1734397006010,
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
          "id": "34bcf8c202e85461878a7c18bcc81344f76f0717",
          "message": "Merge branch '5.3-maintenance' into port/5.4.2-to-main",
          "timestamp": "2024-11-22T10:44:54+09:00",
          "tree_id": "b35a52e65dc24a7774ef4ccd7d8d68f3323031b8",
          "url": "https://github.com/planetarium/libplanet/commit/34bcf8c202e85461878a7c18bcc81344f76f0717"
        },
        "date": 1732240391943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10572425.153846154,
            "unit": "ns",
            "range": "± 26169.739187485717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28002418.433333334,
            "unit": "ns",
            "range": "± 119568.92334039371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70663937.92857143,
            "unit": "ns",
            "range": "± 199723.7322975893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142003127.07142857,
            "unit": "ns",
            "range": "± 507134.96093332063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292351091.4,
            "unit": "ns",
            "range": "± 995653.2233130598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111192.28235294118,
            "unit": "ns",
            "range": "± 5997.763334324373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191783.90384615384,
            "unit": "ns",
            "range": "± 6798.997386465257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162857.8,
            "unit": "ns",
            "range": "± 4306.607597634129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2884965.066666667,
            "unit": "ns",
            "range": "± 24584.85117612838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2809627.933333333,
            "unit": "ns",
            "range": "± 43482.75321396596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12769.608108108108,
            "unit": "ns",
            "range": "± 650.5522747059907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59825.13483146067,
            "unit": "ns",
            "range": "± 3357.742982445104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60840.5,
            "unit": "ns",
            "range": "± 764.8438343276953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55483.49494949495,
            "unit": "ns",
            "range": "± 12565.791384949707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2395.0315789473684,
            "unit": "ns",
            "range": "± 269.8992504160394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12259.252688172042,
            "unit": "ns",
            "range": "± 860.6856803421072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3812382.3197115385,
            "unit": "ns",
            "range": "± 5291.446567098213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217326.958984375,
            "unit": "ns",
            "range": "± 1382.3982250998533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748728.8648158482,
            "unit": "ns",
            "range": "± 1130.5841067064714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955771.5588942308,
            "unit": "ns",
            "range": "± 1571.4374525471956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634290.1089242789,
            "unit": "ns",
            "range": "± 884.1556212575985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586099.3302873884,
            "unit": "ns",
            "range": "± 536.8140496809624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2435493.230769231,
            "unit": "ns",
            "range": "± 65964.8539418122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2543897.2333333334,
            "unit": "ns",
            "range": "± 37160.73576172007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3040094.433333333,
            "unit": "ns",
            "range": "± 44193.653612686234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2594469.9655172415,
            "unit": "ns",
            "range": "± 73177.09503930602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3274103.5,
            "unit": "ns",
            "range": "± 61636.17951063049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997693.5,
            "unit": "ns",
            "range": "± 67505.29346851003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1916918.7571428572,
            "unit": "ns",
            "range": "± 58606.8886732724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1570932.9923076923,
            "unit": "ns",
            "range": "± 73056.76637556474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7591278.222222222,
            "unit": "ns",
            "range": "± 204930.2677395286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30942.619047619046,
            "unit": "ns",
            "range": "± 731.0280758076585"
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
          "id": "e3907087caea5ec63a7917f9c21501807ca66be6",
          "message": "Merge tag '5.4.2' into port/5.4.2-to-main",
          "timestamp": "2024-12-17T09:36:02+09:00",
          "tree_id": "4b8563b19539133165ce73d22e42fd051eda60b0",
          "url": "https://github.com/planetarium/libplanet/commit/e3907087caea5ec63a7917f9c21501807ca66be6"
        },
        "date": 1734396241690,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10919455,
            "unit": "ns",
            "range": "± 69628.95367258122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27668819.933333334,
            "unit": "ns",
            "range": "± 87413.14502690792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70048832.13333334,
            "unit": "ns",
            "range": "± 297907.6907691534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141117272.86666667,
            "unit": "ns",
            "range": "± 534087.0333440672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295189302.1333333,
            "unit": "ns",
            "range": "± 1419052.2871399503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108344.01960784313,
            "unit": "ns",
            "range": "± 4076.422188587419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192722.15789473685,
            "unit": "ns",
            "range": "± 6532.7026422632525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165879.21739130435,
            "unit": "ns",
            "range": "± 4173.296984797531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2880969.8571428573,
            "unit": "ns",
            "range": "± 27172.801947357762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2816788.785714286,
            "unit": "ns",
            "range": "± 18978.519542563707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12460.467391304348,
            "unit": "ns",
            "range": "± 961.7632667879194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63557.89175257732,
            "unit": "ns",
            "range": "± 4992.698918497349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49386.857142857145,
            "unit": "ns",
            "range": "± 947.1222352850916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50262.98453608248,
            "unit": "ns",
            "range": "± 7057.831883673332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2614.878947368421,
            "unit": "ns",
            "range": "± 257.5813103991928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12079.362637362638,
            "unit": "ns",
            "range": "± 819.5253574340525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3773564.461263021,
            "unit": "ns",
            "range": "± 4784.237814940658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220941.35,
            "unit": "ns",
            "range": "± 2545.0247469097103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762347.3514973958,
            "unit": "ns",
            "range": "± 2489.089435330501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964139.365625,
            "unit": "ns",
            "range": "± 3019.8762328533135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627405.7201450893,
            "unit": "ns",
            "range": "± 1351.2701828674135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566434.7184244791,
            "unit": "ns",
            "range": "± 418.4321629025307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2377733.714285714,
            "unit": "ns",
            "range": "± 26024.509017547203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2500861.576923077,
            "unit": "ns",
            "range": "± 66813.08990904287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3065338.2,
            "unit": "ns",
            "range": "± 47190.49870047995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2510291.4285714286,
            "unit": "ns",
            "range": "± 14708.039234034226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3293329.8333333335,
            "unit": "ns",
            "range": "± 49401.838319371614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004823.676056338,
            "unit": "ns",
            "range": "± 47506.62723866599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1913837.9795918367,
            "unit": "ns",
            "range": "± 75859.23328482879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1573826.103174603,
            "unit": "ns",
            "range": "± 64443.11026177242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7584167.62,
            "unit": "ns",
            "range": "± 192380.5965909591"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30768.214285714286,
            "unit": "ns",
            "range": "± 709.6534466101847"
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
        "date": 1734396979235,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10561957.23076923,
            "unit": "ns",
            "range": "± 44915.77777194751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27481897.966666665,
            "unit": "ns",
            "range": "± 189259.28874576377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71450641,
            "unit": "ns",
            "range": "± 260901.2305123476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140786566.93333334,
            "unit": "ns",
            "range": "± 463559.40696242196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295066584.43333334,
            "unit": "ns",
            "range": "± 1413653.0431757527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107913.91176470589,
            "unit": "ns",
            "range": "± 4858.8620488761335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197887.05555555556,
            "unit": "ns",
            "range": "± 6131.478991197544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167636.1923076923,
            "unit": "ns",
            "range": "± 4285.892381002872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2884056.8666666667,
            "unit": "ns",
            "range": "± 36697.09584629799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2772171.933333333,
            "unit": "ns",
            "range": "± 40154.09623378891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13168.454022988506,
            "unit": "ns",
            "range": "± 1148.3281569312273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66391.59782608696,
            "unit": "ns",
            "range": "± 4186.053133499231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49596.58823529412,
            "unit": "ns",
            "range": "± 930.836052886297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49616.32989690721,
            "unit": "ns",
            "range": "± 6565.510837452104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2854.6458333333335,
            "unit": "ns",
            "range": "± 409.1483318506142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11991.82584269663,
            "unit": "ns",
            "range": "± 747.2787719951409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3742279.4235491073,
            "unit": "ns",
            "range": "± 3025.9397662180663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214996.8475260416,
            "unit": "ns",
            "range": "± 2035.2157779957688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 802182.9718889509,
            "unit": "ns",
            "range": "± 1341.8920786966582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935011.4289899555,
            "unit": "ns",
            "range": "± 2270.3828214833325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628650.5726841518,
            "unit": "ns",
            "range": "± 441.278619105003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572471.5052315848,
            "unit": "ns",
            "range": "± 355.5866380963184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2353118.3333333335,
            "unit": "ns",
            "range": "± 47963.21269841024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2553054.1666666665,
            "unit": "ns",
            "range": "± 32334.258721371763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3026989.8076923075,
            "unit": "ns",
            "range": "± 28739.193642668008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2531912.3529411764,
            "unit": "ns",
            "range": "± 51802.64009794913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3209465.0714285714,
            "unit": "ns",
            "range": "± 46195.37677244717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986375.4450549451,
            "unit": "ns",
            "range": "± 55017.23148339026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1896022.423076923,
            "unit": "ns",
            "range": "± 50143.955506659484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1557329.634920635,
            "unit": "ns",
            "range": "± 68238.46770707655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7626030.595238095,
            "unit": "ns",
            "range": "± 177458.04985655192"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30462,
            "unit": "ns",
            "range": "± 908.6658718509608"
          }
        ]
      }
    ]
  }
}