window.BENCHMARK_DATA = {
  "lastUpdate": 1722322815898,
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
          "id": "63db1a52a6c684fd971318fc1853763d439dc09f",
          "message": "Merge pull request #3880 from planetarium/fix/currency-dotnet6\n\nFix an issue where currency does not work correctly in dotnet6",
          "timestamp": "2024-07-17T14:38:26+09:00",
          "tree_id": "a89426d116c187bbcf064240180c86d8c1973a2c",
          "url": "https://github.com/planetarium/libplanet/commit/63db1a52a6c684fd971318fc1853763d439dc09f"
        },
        "date": 1721195271405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1021555.3191489362,
            "unit": "ns",
            "range": "± 88073.5172101581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1806620,
            "unit": "ns",
            "range": "± 59042.187310032314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1565865.5555555555,
            "unit": "ns",
            "range": "± 85192.49473868134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7257407.692307692,
            "unit": "ns",
            "range": "± 353931.46330791316"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30340,
            "unit": "ns",
            "range": "± 404.96913462633177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9999735.714285715,
            "unit": "ns",
            "range": "± 85292.90354774187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24584173.333333332,
            "unit": "ns",
            "range": "± 273743.50211901095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58976433.333333336,
            "unit": "ns",
            "range": "± 324188.9785441877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118909878.57142857,
            "unit": "ns",
            "range": "± 1774889.1867591976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236343714.2857143,
            "unit": "ns",
            "range": "± 1683790.4889116848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3343136.7447916665,
            "unit": "ns",
            "range": "± 7235.071854916377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069963.2552083333,
            "unit": "ns",
            "range": "± 3586.6172937785655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738411.34765625,
            "unit": "ns",
            "range": "± 1369.0680103686807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954507.890625,
            "unit": "ns",
            "range": "± 5591.153890839948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618353.6067708334,
            "unit": "ns",
            "range": "± 1304.752587471446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569299.58984375,
            "unit": "ns",
            "range": "± 1369.1215434885482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2139722.222222222,
            "unit": "ns",
            "range": "± 51169.359321114556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2304533.3333333335,
            "unit": "ns",
            "range": "± 28058.657047230856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2759128.5714285714,
            "unit": "ns",
            "range": "± 78313.15038874073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2335642.8571428573,
            "unit": "ns",
            "range": "± 76316.57473859747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3011400,
            "unit": "ns",
            "range": "± 45891.62699852151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185224.61538461538,
            "unit": "ns",
            "range": "± 8597.729183649868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174455.55555555556,
            "unit": "ns",
            "range": "± 7335.997229137423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146133.33333333334,
            "unit": "ns",
            "range": "± 2986.833853864027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2814546.6666666665,
            "unit": "ns",
            "range": "± 33400.33931963367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2475550,
            "unit": "ns",
            "range": "± 37972.81922638876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12200,
            "unit": "ns",
            "range": "± 1594.2660413263263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56471.57894736842,
            "unit": "ns",
            "range": "± 5418.480260319028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46985.24590163935,
            "unit": "ns",
            "range": "± 2011.6192537003426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61526.26262626263,
            "unit": "ns",
            "range": "± 13581.9251577804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2847.9591836734694,
            "unit": "ns",
            "range": "± 535.3926378531629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11043.010752688173,
            "unit": "ns",
            "range": "± 1369.0998192610043"
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
          "id": "5ecafb7fb65b7eceddeb4b2f0631147b047df142",
          "message": "Merge pull request #3884 from planetarium/release/5.1.2\n\n🚀 Release 5.1.2",
          "timestamp": "2024-07-17T17:37:06+09:00",
          "tree_id": "dc88da6b94c65988531bcacfcd575558ae310fa5",
          "url": "https://github.com/planetarium/libplanet/commit/5ecafb7fb65b7eceddeb4b2f0631147b047df142"
        },
        "date": 1721205905457,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989517.5257731959,
            "unit": "ns",
            "range": "± 73375.72545114017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1768829.1666666667,
            "unit": "ns",
            "range": "± 69436.56513692324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1510544.8275862068,
            "unit": "ns",
            "range": "± 82039.65966420609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6835642.857142857,
            "unit": "ns",
            "range": "± 120719.18281243085"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30418.18181818182,
            "unit": "ns",
            "range": "± 668.7845148272553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9704340,
            "unit": "ns",
            "range": "± 81681.73252674939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23643180,
            "unit": "ns",
            "range": "± 267327.19171190093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58815133.333333336,
            "unit": "ns",
            "range": "± 360187.73411864514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117150940,
            "unit": "ns",
            "range": "± 932733.3578559002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240501678.57142857,
            "unit": "ns",
            "range": "± 2030363.9338148872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3365803.5677083335,
            "unit": "ns",
            "range": "± 8817.162687087854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072710.4557291667,
            "unit": "ns",
            "range": "± 2907.014095212674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734249.08203125,
            "unit": "ns",
            "range": "± 1969.936092728797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968254.7395833333,
            "unit": "ns",
            "range": "± 4399.853641668506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608220.37109375,
            "unit": "ns",
            "range": "± 1314.332784645017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572429.9153645834,
            "unit": "ns",
            "range": "± 1511.4134540200164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2140026.6666666665,
            "unit": "ns",
            "range": "± 23429.238956808607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2258028.5714285714,
            "unit": "ns",
            "range": "± 36253.705229357496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2755005.882352941,
            "unit": "ns",
            "range": "± 54439.12277246295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2308181.25,
            "unit": "ns",
            "range": "± 44569.948302266035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2950090,
            "unit": "ns",
            "range": "± 41797.86050573813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176700,
            "unit": "ns",
            "range": "± 6471.623039230944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168685.1851851852,
            "unit": "ns",
            "range": "± 7025.006745646595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153352.5641025641,
            "unit": "ns",
            "range": "± 5242.964568151113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2731106.6666666665,
            "unit": "ns",
            "range": "± 36148.47293092884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2431186.6666666665,
            "unit": "ns",
            "range": "± 45363.10437012924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11158.888888888889,
            "unit": "ns",
            "range": "± 1206.8060217087332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55940.20618556701,
            "unit": "ns",
            "range": "± 4790.912834771471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46370.27027027027,
            "unit": "ns",
            "range": "± 2311.717011745103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61037.37373737374,
            "unit": "ns",
            "range": "± 15725.694468027546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2722.680412371134,
            "unit": "ns",
            "range": "± 646.3850043767736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10236.458333333334,
            "unit": "ns",
            "range": "± 1096.657101488708"
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
          "id": "5bbd8050001c664d6dc740fabd37e3a5cc537317",
          "message": "Merge pull request #3886 from planetarium/prepare/5.1.3\n\n🔧 Prepare 5.1.3",
          "timestamp": "2024-07-18T09:23:00+09:00",
          "tree_id": "46788e99e92a5fb3224654f1c5f3217525742742",
          "url": "https://github.com/planetarium/libplanet/commit/5bbd8050001c664d6dc740fabd37e3a5cc537317"
        },
        "date": 1721262751078,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988387.5,
            "unit": "ns",
            "range": "± 82771.1152897905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1790461.7021276595,
            "unit": "ns",
            "range": "± 68934.92694970756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1520983.8709677418,
            "unit": "ns",
            "range": "± 125398.43568326224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7317697.894736842,
            "unit": "ns",
            "range": "± 446765.20297720743"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30342.85714285714,
            "unit": "ns",
            "range": "± 1356.5075679681581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9631466.666666666,
            "unit": "ns",
            "range": "± 86512.61399907173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23880833.333333332,
            "unit": "ns",
            "range": "± 129430.47039498338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57086993.333333336,
            "unit": "ns",
            "range": "± 246247.02018985114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117280960,
            "unit": "ns",
            "range": "± 595045.2261323143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227963063.33333334,
            "unit": "ns",
            "range": "± 1124934.3687945702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3390881.7447916665,
            "unit": "ns",
            "range": "± 17129.484937556004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058680.625,
            "unit": "ns",
            "range": "± 1745.1784941565684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735626.9986979166,
            "unit": "ns",
            "range": "± 1277.856118498469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1893003.9341517857,
            "unit": "ns",
            "range": "± 8109.453300791547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619751.54296875,
            "unit": "ns",
            "range": "± 2875.1237009103775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555973.515625,
            "unit": "ns",
            "range": "± 1145.1638744497418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2101992.8571428573,
            "unit": "ns",
            "range": "± 18406.24744631412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2286864.705882353,
            "unit": "ns",
            "range": "± 44101.16128256248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2635385.714285714,
            "unit": "ns",
            "range": "± 48906.19884753144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2242781.081081081,
            "unit": "ns",
            "range": "± 73178.99606762493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2893828.5714285714,
            "unit": "ns",
            "range": "± 34444.39060218723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177938,
            "unit": "ns",
            "range": "± 7196.424565755709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164934.44444444444,
            "unit": "ns",
            "range": "± 8795.033852942637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149993.75,
            "unit": "ns",
            "range": "± 2807.245090831935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2750505.882352941,
            "unit": "ns",
            "range": "± 56457.12389269661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2563260,
            "unit": "ns",
            "range": "± 46271.77170957318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11817.582417582418,
            "unit": "ns",
            "range": "± 1583.7784221140564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52705.813953488374,
            "unit": "ns",
            "range": "± 3250.36123426532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44800,
            "unit": "ns",
            "range": "± 1215.236602477065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61613.26530612245,
            "unit": "ns",
            "range": "± 13877.666087349837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2488.5057471264367,
            "unit": "ns",
            "range": "± 269.11797679029684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9850,
            "unit": "ns",
            "range": "± 1337.7121081198773"
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
          "id": "3a5e29d89fa373c82534046310cc1ed1d5a92e52",
          "message": "Merge pull request #3898 from planetarium/fix/remove-mutation\n\nRemove mutation from explorer",
          "timestamp": "2024-07-30T15:14:59+09:00",
          "tree_id": "f4c424b6d4492de8daf5c8e06228c9451c7c6681",
          "url": "https://github.com/planetarium/libplanet/commit/3a5e29d89fa373c82534046310cc1ed1d5a92e52"
        },
        "date": 1722320770548,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1020350,
            "unit": "ns",
            "range": "± 70500.82611939014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1869976.7123287672,
            "unit": "ns",
            "range": "± 92810.1744310934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1608694.6236559139,
            "unit": "ns",
            "range": "± 102604.01547951167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7654037.894736842,
            "unit": "ns",
            "range": "± 484219.79012061964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30397.402597402597,
            "unit": "ns",
            "range": "± 1532.7970671098417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9615307.692307692,
            "unit": "ns",
            "range": "± 83893.73696864446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24135385.714285713,
            "unit": "ns",
            "range": "± 343778.3294220562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59293846.15384615,
            "unit": "ns",
            "range": "± 542964.0298328312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119416564.28571428,
            "unit": "ns",
            "range": "± 1623930.8765163918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237250033.33333334,
            "unit": "ns",
            "range": "± 2480447.104762327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3394768.3854166665,
            "unit": "ns",
            "range": "± 18278.476907507044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1102006.1848958333,
            "unit": "ns",
            "range": "± 4546.12057624033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762568.4375,
            "unit": "ns",
            "range": "± 5129.001414978684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944002.5390625,
            "unit": "ns",
            "range": "± 8953.1577967117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636874.6319110577,
            "unit": "ns",
            "range": "± 1627.1996786551044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574685.6166294643,
            "unit": "ns",
            "range": "± 1519.6395396368075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2199068.9655172415,
            "unit": "ns",
            "range": "± 64336.321131603174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291755.882352941,
            "unit": "ns",
            "range": "± 73242.74787215816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2717178.5714285714,
            "unit": "ns",
            "range": "± 26634.22981432348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2368436,
            "unit": "ns",
            "range": "± 60588.41253353097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3307534.4827586208,
            "unit": "ns",
            "range": "± 179116.57813992247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183937.14285714287,
            "unit": "ns",
            "range": "± 8960.867767058966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171736.5671641791,
            "unit": "ns",
            "range": "± 8167.988059869958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148152.1739130435,
            "unit": "ns",
            "range": "± 3698.8781548927886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2846200,
            "unit": "ns",
            "range": "± 65817.2545765926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2616511.111111111,
            "unit": "ns",
            "range": "± 53873.49985779748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11739.130434782608,
            "unit": "ns",
            "range": "± 1539.655771556656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60071.71717171717,
            "unit": "ns",
            "range": "± 7661.326687530657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45084.61538461538,
            "unit": "ns",
            "range": "± 1419.6994606973876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63198.936170212764,
            "unit": "ns",
            "range": "± 12646.949095997112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2800,
            "unit": "ns",
            "range": "± 604.9441683399474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12265.95744680851,
            "unit": "ns",
            "range": "± 1734.1945663242864"
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
          "id": "4aadf2c9919f93a283ec0f9883089a3dfd56f36c",
          "message": "Merge pull request #3899 from planetarium/release/5.1.3\n\n🚀 Release 5.1.3",
          "timestamp": "2024-07-30T15:45:40+09:00",
          "tree_id": "6390d9a3eae9dcd8e92fcfd6c15a159ff2e46ca0",
          "url": "https://github.com/planetarium/libplanet/commit/4aadf2c9919f93a283ec0f9883089a3dfd56f36c"
        },
        "date": 1722322529740,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974379.381443299,
            "unit": "ns",
            "range": "± 95099.8213919462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1749685.7142857143,
            "unit": "ns",
            "range": "± 68887.52910844363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1490680.8988764044,
            "unit": "ns",
            "range": "± 82624.66596879873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6753975,
            "unit": "ns",
            "range": "± 223175.67631800738"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30246.153846153848,
            "unit": "ns",
            "range": "± 457.5576186219331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9493857.142857144,
            "unit": "ns",
            "range": "± 79435.61218695607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23732376.923076924,
            "unit": "ns",
            "range": "± 174968.4693206472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58320250,
            "unit": "ns",
            "range": "± 318781.72843595565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115318013.33333333,
            "unit": "ns",
            "range": "± 669270.4544786774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234188440,
            "unit": "ns",
            "range": "± 2354422.587630109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3347626.6741071427,
            "unit": "ns",
            "range": "± 3288.2236106888886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069960.2083333333,
            "unit": "ns",
            "range": "± 5772.335080460619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745293.4870793269,
            "unit": "ns",
            "range": "± 1680.5879399633202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938242.7083333333,
            "unit": "ns",
            "range": "± 8729.838563448806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612612.0572916666,
            "unit": "ns",
            "range": "± 2984.9874819763645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553580.4036458334,
            "unit": "ns",
            "range": "± 1096.749271219706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2126343.75,
            "unit": "ns",
            "range": "± 26758.898052797314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2212473.3333333335,
            "unit": "ns",
            "range": "± 36024.4850596025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2688273.076923077,
            "unit": "ns",
            "range": "± 71650.26340603255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2241500,
            "unit": "ns",
            "range": "± 25991.004360976658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2887006.6666666665,
            "unit": "ns",
            "range": "± 44996.75332203213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165348,
            "unit": "ns",
            "range": "± 6338.101177057072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164065.9090909091,
            "unit": "ns",
            "range": "± 5307.473589055351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141300,
            "unit": "ns",
            "range": "± 3094.7985035827096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2705042.8571428573,
            "unit": "ns",
            "range": "± 34869.773427728185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2541886.3636363638,
            "unit": "ns",
            "range": "± 86794.5531752307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10325,
            "unit": "ns",
            "range": "± 1842.5954235091442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57313.541666666664,
            "unit": "ns",
            "range": "± 4452.973454638967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48250,
            "unit": "ns",
            "range": "± 4328.369779286026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52607.291666666664,
            "unit": "ns",
            "range": "± 12146.060611457238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2545.360824742268,
            "unit": "ns",
            "range": "± 461.4335945716488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9337.234042553191,
            "unit": "ns",
            "range": "± 875.2245847023225"
          }
        ]
      }
    ]
  }
}