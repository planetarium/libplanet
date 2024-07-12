window.BENCHMARK_DATA = {
  "lastUpdate": 1720766083857,
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
      }
    ]
  }
}