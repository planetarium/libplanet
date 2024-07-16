window.BENCHMARK_DATA = {
  "lastUpdate": 1721105738728,
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
          "id": "75b3ae438f440fc85a9245fdb02a3d32ae3252fc",
          "message": "fix: Fix the ci running error when github releasing",
          "timestamp": "2024-07-11T13:36:29+09:00",
          "tree_id": "a8735697867f1301214b2128eb787916f57d5be7",
          "url": "https://github.com/planetarium/libplanet/commit/75b3ae438f440fc85a9245fdb02a3d32ae3252fc"
        },
        "date": 1720673734113,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001932.9896907216,
            "unit": "ns",
            "range": "± 97870.55941570806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1711012,
            "unit": "ns",
            "range": "± 68699.6885000216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1496652.3255813953,
            "unit": "ns",
            "range": "± 81054.87861609085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6764834.375,
            "unit": "ns",
            "range": "± 205691.40620525094"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29954.347826086956,
            "unit": "ns",
            "range": "± 977.9130890124314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9581440,
            "unit": "ns",
            "range": "± 75468.40209177423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23499233.333333332,
            "unit": "ns",
            "range": "± 251834.68122295363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58328876.666666664,
            "unit": "ns",
            "range": "± 329288.87983190746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116761607.6923077,
            "unit": "ns",
            "range": "± 497029.0207180034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233061440,
            "unit": "ns",
            "range": "± 4248389.622265292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3277301.640625,
            "unit": "ns",
            "range": "± 9544.089143879637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078445.99609375,
            "unit": "ns",
            "range": "± 1202.1109201452514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745654.6316964285,
            "unit": "ns",
            "range": "± 1870.4329585640833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939705.8072916667,
            "unit": "ns",
            "range": "± 4614.5483748903625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603094.4921875,
            "unit": "ns",
            "range": "± 985.3836025757696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 545022.8841145834,
            "unit": "ns",
            "range": "± 1002.4303940672999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2129747.3684210526,
            "unit": "ns",
            "range": "± 69665.30210378728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2282721.4285714286,
            "unit": "ns",
            "range": "± 64850.239767356274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2688884.6153846155,
            "unit": "ns",
            "range": "± 32543.812677523565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2309418.1818181816,
            "unit": "ns",
            "range": "± 55819.553122741054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2932053.3333333335,
            "unit": "ns",
            "range": "± 45952.67544934006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170410.52631578947,
            "unit": "ns",
            "range": "± 7278.900137936027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164351.7857142857,
            "unit": "ns",
            "range": "± 7007.917368530814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146552.77777777778,
            "unit": "ns",
            "range": "± 4891.770705472675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2684393.3333333335,
            "unit": "ns",
            "range": "± 38319.828262862015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2430807.6923076925,
            "unit": "ns",
            "range": "± 18766.34672041336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9915.116279069767,
            "unit": "ns",
            "range": "± 666.9539964487303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49550,
            "unit": "ns",
            "range": "± 2672.5512381396784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43185.18518518518,
            "unit": "ns",
            "range": "± 1130.589942566985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46927.52808988764,
            "unit": "ns",
            "range": "± 6526.375731128349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2140.2061855670104,
            "unit": "ns",
            "range": "± 352.56789943405255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9304.301075268817,
            "unit": "ns",
            "range": "± 1030.2926956953438"
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
          "id": "1715ccfb96803c319afff76dff631edd0f6b7b58",
          "message": "Merge pull request #3874 from planetarium/prepare/5.1.1\n\n🔧Prepare 5.1.1",
          "timestamp": "2024-07-12T15:13:54+09:00",
          "tree_id": "f4265a0ab88d83def888e04ed52141f2d5f9bd4a",
          "url": "https://github.com/planetarium/libplanet/commit/1715ccfb96803c319afff76dff631edd0f6b7b58"
        },
        "date": 1720765649904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970139.3617021276,
            "unit": "ns",
            "range": "± 67555.53862999092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1776380.357142857,
            "unit": "ns",
            "range": "± 76060.28809651376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1576059.375,
            "unit": "ns",
            "range": "± 127849.94376889856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6765492.592592592,
            "unit": "ns",
            "range": "± 185264.16467371857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30006.666666666668,
            "unit": "ns",
            "range": "± 371.2270515594517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9909578.57142857,
            "unit": "ns",
            "range": "± 92212.44016334847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23478250,
            "unit": "ns",
            "range": "± 148061.6978277514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58661940,
            "unit": "ns",
            "range": "± 712565.7752095591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118471650,
            "unit": "ns",
            "range": "± 685514.8461052971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238237700,
            "unit": "ns",
            "range": "± 1300474.5861533664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3328709.4010416665,
            "unit": "ns",
            "range": "± 6330.900001719778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051372.5,
            "unit": "ns",
            "range": "± 3501.128863400014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735438.9508928572,
            "unit": "ns",
            "range": "± 3854.326134203302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1893319.7866586538,
            "unit": "ns",
            "range": "± 1813.5444216918738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605949.16015625,
            "unit": "ns",
            "range": "± 3289.091262158316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567943.671875,
            "unit": "ns",
            "range": "± 1931.6609338102999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2129863.1578947366,
            "unit": "ns",
            "range": "± 86894.73852142469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2306578.5714285714,
            "unit": "ns",
            "range": "± 18888.831806995557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2733170,
            "unit": "ns",
            "range": "± 80846.7181002804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2311084.6153846155,
            "unit": "ns",
            "range": "± 24499.21244155433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2988176.923076923,
            "unit": "ns",
            "range": "± 43601.551078032266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177335,
            "unit": "ns",
            "range": "± 7913.490412483898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167261.19402985074,
            "unit": "ns",
            "range": "± 7940.612052279868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144933.33333333334,
            "unit": "ns",
            "range": "± 3376.1417821728596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2721993.3333333335,
            "unit": "ns",
            "range": "± 38637.40723826119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2481564.285714286,
            "unit": "ns",
            "range": "± 37397.68826962554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10404.545454545454,
            "unit": "ns",
            "range": "± 1089.6492202527802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52002.22222222222,
            "unit": "ns",
            "range": "± 3593.0012423586095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44218.51851851852,
            "unit": "ns",
            "range": "± 1734.9975883920029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52497.8021978022,
            "unit": "ns",
            "range": "± 7354.846898051168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2535.0515463917527,
            "unit": "ns",
            "range": "± 586.3092964172513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9861.95652173913,
            "unit": "ns",
            "range": "± 1477.21466379265"
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
          "id": "4af3e101a46f0093686eae7f651451d1cc718dd9",
          "message": "Merge pull request #3879 from planetarium/prepare/5.1.2\n\n🔧 Prepare 5.1.2",
          "timestamp": "2024-07-15T18:06:43+09:00",
          "tree_id": "b98ac14d02e74eef1d4802753356bee3fcc4ff10",
          "url": "https://github.com/planetarium/libplanet/commit/4af3e101a46f0093686eae7f651451d1cc718dd9"
        },
        "date": 1721035243868,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 945523.8095238095,
            "unit": "ns",
            "range": "± 49000.648186142156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1760511.8644067796,
            "unit": "ns",
            "range": "± 77377.79482946612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1492565.060240964,
            "unit": "ns",
            "range": "± 79052.0674877115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6757246.428571428,
            "unit": "ns",
            "range": "± 192292.13786077886"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37652.083333333336,
            "unit": "ns",
            "range": "± 4201.127146165134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9599013.333333334,
            "unit": "ns",
            "range": "± 76538.80310634848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23911473.333333332,
            "unit": "ns",
            "range": "± 255298.61917445017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58743923.333333336,
            "unit": "ns",
            "range": "± 304890.91601204954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117928100,
            "unit": "ns",
            "range": "± 584218.2824411279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236157653.33333334,
            "unit": "ns",
            "range": "± 1456586.0520245212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3308876.8136160714,
            "unit": "ns",
            "range": "± 5865.997422658625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063052.9947916667,
            "unit": "ns",
            "range": "± 3629.492064129351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729926.9596354166,
            "unit": "ns",
            "range": "± 1690.5226334601762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1985009.7135416667,
            "unit": "ns",
            "range": "± 5227.711078357356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610338.3528645834,
            "unit": "ns",
            "range": "± 2320.8401382449583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556833.0013020834,
            "unit": "ns",
            "range": "± 1503.0409829799112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2201866.6666666665,
            "unit": "ns",
            "range": "± 19381.274713594292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2280273.3333333335,
            "unit": "ns",
            "range": "± 41283.17655736616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2750127.272727273,
            "unit": "ns",
            "range": "± 66474.98764711418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2270113.6363636362,
            "unit": "ns",
            "range": "± 75048.93470544957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2954616.6666666665,
            "unit": "ns",
            "range": "± 17516.94417794763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173345.45454545456,
            "unit": "ns",
            "range": "± 7039.539604627411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160331.0344827586,
            "unit": "ns",
            "range": "± 6941.692166838065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144534.4827586207,
            "unit": "ns",
            "range": "± 4142.228166964263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2744286.6666666665,
            "unit": "ns",
            "range": "± 50333.71302285047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2547220,
            "unit": "ns",
            "range": "± 45409.11173510696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11010.309278350516,
            "unit": "ns",
            "range": "± 2100.8671094773817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50089.36170212766,
            "unit": "ns",
            "range": "± 3841.3838256182894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44806.25,
            "unit": "ns",
            "range": "± 1401.137210936519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57339.795918367345,
            "unit": "ns",
            "range": "± 12818.667844934047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2657.7319587628867,
            "unit": "ns",
            "range": "± 386.17651715957345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9385.869565217392,
            "unit": "ns",
            "range": "± 751.9325317143542"
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
          "id": "13c88d911e399b8348ecd0c6fce3115ed66ce57a",
          "message": "Merge pull request #3881 from planetarium/port/pyroscope-from-main-to-5.1.2\n\n🔀 Port pyroscope from main to 5.1.2",
          "timestamp": "2024-07-16T13:39:56+09:00",
          "tree_id": "272a3b19eeaa7372178068c34217aabc55588989",
          "url": "https://github.com/planetarium/libplanet/commit/13c88d911e399b8348ecd0c6fce3115ed66ce57a"
        },
        "date": 1721105412419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006521.7391304348,
            "unit": "ns",
            "range": "± 74532.1802702919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1824604,
            "unit": "ns",
            "range": "± 72442.69222732447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1571185.8585858585,
            "unit": "ns",
            "range": "± 137283.95198073657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7114796.511627907,
            "unit": "ns",
            "range": "± 384802.0766874604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30968.88888888889,
            "unit": "ns",
            "range": "± 1179.141101553897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9622685.714285715,
            "unit": "ns",
            "range": "± 65721.5320897176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23297246.666666668,
            "unit": "ns",
            "range": "± 132679.1988577102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59411813.333333336,
            "unit": "ns",
            "range": "± 311604.67369195004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125012126.66666667,
            "unit": "ns",
            "range": "± 1289150.9223774641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239438172.2222222,
            "unit": "ns",
            "range": "± 4820634.158893297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3362412.03125,
            "unit": "ns",
            "range": "± 9175.726936026002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062942.787388393,
            "unit": "ns",
            "range": "± 1397.9839805513168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736755.693359375,
            "unit": "ns",
            "range": "± 1012.0864354554423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919022.3958333333,
            "unit": "ns",
            "range": "± 2970.808770790232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616502.890625,
            "unit": "ns",
            "range": "± 1141.0526859646827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558894.6847098215,
            "unit": "ns",
            "range": "± 341.7723521299934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186020,
            "unit": "ns",
            "range": "± 57546.35812397978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2245847.222222222,
            "unit": "ns",
            "range": "± 74758.57327275432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2793084.210526316,
            "unit": "ns",
            "range": "± 60574.07093943281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2267246.6666666665,
            "unit": "ns",
            "range": "± 40619.943494837724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2969600,
            "unit": "ns",
            "range": "± 65155.634189735785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177128.57142857142,
            "unit": "ns",
            "range": "± 11692.792516135605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170888.98305084746,
            "unit": "ns",
            "range": "± 6837.876685687837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146621.875,
            "unit": "ns",
            "range": "± 4249.382070827589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2702664.705882353,
            "unit": "ns",
            "range": "± 52088.19373399876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2473086.6666666665,
            "unit": "ns",
            "range": "± 37999.884711604565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11917.241379310344,
            "unit": "ns",
            "range": "± 942.8071514257149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56451.57894736842,
            "unit": "ns",
            "range": "± 5513.539681622748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45581.57894736842,
            "unit": "ns",
            "range": "± 997.8046076701186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56200,
            "unit": "ns",
            "range": "± 2451.558860209239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3319.387755102041,
            "unit": "ns",
            "range": "± 573.0472288096811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11436.559139784946,
            "unit": "ns",
            "range": "± 1347.7666668649645"
          }
        ]
      }
    ]
  }
}