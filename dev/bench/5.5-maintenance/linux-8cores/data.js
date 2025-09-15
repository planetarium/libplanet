window.BENCHMARK_DATA = {
  "lastUpdate": 1757930486926,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "79e20a5451de75539aeea33f19e0b51f59f33164",
          "message": "prepare: 5.5.1",
          "timestamp": "2025-01-15T12:02:42+09:00",
          "tree_id": "860edf44725926acf94cf81d1be19f20d09ce560",
          "url": "https://github.com/planetarium/libplanet/commit/79e20a5451de75539aeea33f19e0b51f59f33164"
        },
        "date": 1736910644264,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10830616.733333332,
            "unit": "ns",
            "range": "± 78670.65140596012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28078417.214285713,
            "unit": "ns",
            "range": "± 103210.00294334814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71364233.53333333,
            "unit": "ns",
            "range": "± 347842.6434530555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144181665.86666667,
            "unit": "ns",
            "range": "± 1001383.2334105136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292009790.46666664,
            "unit": "ns",
            "range": "± 1674362.7479520536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109138.70289855072,
            "unit": "ns",
            "range": "± 5104.645702920469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195117.25,
            "unit": "ns",
            "range": "± 5875.496701034813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164392.5,
            "unit": "ns",
            "range": "± 1782.5939475433495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2837696.230769231,
            "unit": "ns",
            "range": "± 18133.25216811115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2844284.6333333333,
            "unit": "ns",
            "range": "± 45705.297046664185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12826.189473684211,
            "unit": "ns",
            "range": "± 791.2213867602047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59593.1724137931,
            "unit": "ns",
            "range": "± 3093.115240098965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50118.46153846154,
            "unit": "ns",
            "range": "± 708.2775603985365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49645.48947368421,
            "unit": "ns",
            "range": "± 7235.78243867849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2552.7291666666665,
            "unit": "ns",
            "range": "± 277.1990156877286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11996.261904761905,
            "unit": "ns",
            "range": "± 656.6217964639225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750475.1553485575,
            "unit": "ns",
            "range": "± 6661.354116771386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204292.0299479167,
            "unit": "ns",
            "range": "± 2574.382076402296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758890.7190755209,
            "unit": "ns",
            "range": "± 1078.1065883856345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968858.33515625,
            "unit": "ns",
            "range": "± 1996.135654926233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617862.8459821428,
            "unit": "ns",
            "range": "± 702.1534347710392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574739.0728236607,
            "unit": "ns",
            "range": "± 756.8379261605111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2420985.6666666665,
            "unit": "ns",
            "range": "± 66494.04838549318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2528826.066666667,
            "unit": "ns",
            "range": "± 45275.9063622564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3021000.3076923075,
            "unit": "ns",
            "range": "± 21024.363194417314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2575920.3333333335,
            "unit": "ns",
            "range": "± 34368.47346181145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3217258.25,
            "unit": "ns",
            "range": "± 62497.792434079885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006875.7717391305,
            "unit": "ns",
            "range": "± 75883.36163519125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1975644.851851852,
            "unit": "ns",
            "range": "± 82034.22100618038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1542886.3205128205,
            "unit": "ns",
            "range": "± 77107.28638275064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7567902.518518519,
            "unit": "ns",
            "range": "± 205246.96751275603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30649.76923076923,
            "unit": "ns",
            "range": "± 832.3613305622653"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ad43b37f2cb99d5b640b76f5844ff04fa8944a5",
          "message": "Merge pull request #4032 from planetarium/feature/nonce-command\n\nIntroduce tx nonce command",
          "timestamp": "2025-02-13T17:14:37+09:00",
          "tree_id": "2d09e898a704c2bf5e1b2d4bac3330249e705cec",
          "url": "https://github.com/planetarium/libplanet/commit/7ad43b37f2cb99d5b640b76f5844ff04fa8944a5"
        },
        "date": 1739434979727,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31188.5,
            "unit": "ns",
            "range": "± 1065.6699453547672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3911362.41796875,
            "unit": "ns",
            "range": "± 10463.00965636661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1241298.07421875,
            "unit": "ns",
            "range": "± 3995.6639050196222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779398.7767857143,
            "unit": "ns",
            "range": "± 2290.3143903015994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1990678.224888393,
            "unit": "ns",
            "range": "± 8479.525927184584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633787.3733956473,
            "unit": "ns",
            "range": "± 2452.9774150512853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594034.7225864956,
            "unit": "ns",
            "range": "± 529.9258573516073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2448457.033333333,
            "unit": "ns",
            "range": "± 44067.069283839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2580107.9310344825,
            "unit": "ns",
            "range": "± 71921.55004285226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3015523,
            "unit": "ns",
            "range": "± 96388.69005896793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2672996.3714285716,
            "unit": "ns",
            "range": "± 82362.33061728477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3250534.25,
            "unit": "ns",
            "range": "± 63288.23219788441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11631369.866666667,
            "unit": "ns",
            "range": "± 216475.29096572485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28325539.833333332,
            "unit": "ns",
            "range": "± 308070.94067291584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68831193.36666666,
            "unit": "ns",
            "range": "± 413094.24597349396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140165631.07142857,
            "unit": "ns",
            "range": "± 700250.2020980912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287704847.26666665,
            "unit": "ns",
            "range": "± 3488283.1840576464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102799.9,
            "unit": "ns",
            "range": "± 6324.482299815073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200454.58139534883,
            "unit": "ns",
            "range": "± 9924.178969703671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168842.19444444444,
            "unit": "ns",
            "range": "± 4907.345618382097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2986526.8666666667,
            "unit": "ns",
            "range": "± 47903.75838053787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2796727.6428571427,
            "unit": "ns",
            "range": "± 46460.385466226275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13172.639175257733,
            "unit": "ns",
            "range": "± 3056.56397223516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56441.58208955224,
            "unit": "ns",
            "range": "± 2678.953810664595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50019.1875,
            "unit": "ns",
            "range": "± 702.7536523087826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55991.36734693877,
            "unit": "ns",
            "range": "± 11355.80690967624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2612.326530612245,
            "unit": "ns",
            "range": "± 412.70803003062207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11070.666666666666,
            "unit": "ns",
            "range": "± 1065.9714670380845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1046172.6914893617,
            "unit": "ns",
            "range": "± 88397.62646320618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1937382.534883721,
            "unit": "ns",
            "range": "± 70424.49236064614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1644258.7349397591,
            "unit": "ns",
            "range": "± 79432.18468484255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8061749.591836735,
            "unit": "ns",
            "range": "± 315996.16452385666"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43a58ed17be69dd63aa48fbf0cfb0b4f5a54882f",
          "message": "Merge pull request #4033 from planetarium/release/5.5.1\n\n🚀 Release 5.5.1",
          "timestamp": "2025-02-17T15:15:52+09:00",
          "tree_id": "b045a2baf8742693d6e215fc173f5320169ddadb",
          "url": "https://github.com/planetarium/libplanet/commit/43a58ed17be69dd63aa48fbf0cfb0b4f5a54882f"
        },
        "date": 1739773436228,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963950.9655172414,
            "unit": "ns",
            "range": "± 50510.99714762752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1887271.7435897435,
            "unit": "ns",
            "range": "± 55920.71033013852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1552217.1518987343,
            "unit": "ns",
            "range": "± 71418.6451433016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7794877.647058823,
            "unit": "ns",
            "range": "± 219420.22976528495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2400577.7333333334,
            "unit": "ns",
            "range": "± 32543.094346390837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2485881.523809524,
            "unit": "ns",
            "range": "± 47647.28682483098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2973260.9285714286,
            "unit": "ns",
            "range": "± 39864.89157423202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2684512.7666666666,
            "unit": "ns",
            "range": "± 32720.359770259834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3212957.205882353,
            "unit": "ns",
            "range": "± 62141.27727984506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3769306.1847098214,
            "unit": "ns",
            "range": "± 4123.325748781965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207167.4459635417,
            "unit": "ns",
            "range": "± 1367.2007885376738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780263.3928571428,
            "unit": "ns",
            "range": "± 1064.7917623141577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981300.5653645834,
            "unit": "ns",
            "range": "± 4740.584061202301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 637264.1838030134,
            "unit": "ns",
            "range": "± 531.0989449820723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588549.5466145833,
            "unit": "ns",
            "range": "± 643.1533260192504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11350086.233333332,
            "unit": "ns",
            "range": "± 123611.33105623949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27467189.35714286,
            "unit": "ns",
            "range": "± 144476.12386752944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69022576.26666667,
            "unit": "ns",
            "range": "± 428577.93722453574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139103329.34615386,
            "unit": "ns",
            "range": "± 617080.5340300467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275924975.64285713,
            "unit": "ns",
            "range": "± 1377185.245842786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30383.672413793105,
            "unit": "ns",
            "range": "± 890.1484253829934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102370.76041666667,
            "unit": "ns",
            "range": "± 9194.208016314336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185407.9659090909,
            "unit": "ns",
            "range": "± 10158.919550602124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166421.44444444444,
            "unit": "ns",
            "range": "± 3327.854408972884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2932046.033333333,
            "unit": "ns",
            "range": "± 35126.84239980805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2646450.5555555555,
            "unit": "ns",
            "range": "± 56009.4466015723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11190.454545454546,
            "unit": "ns",
            "range": "± 726.6893897495021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54602.756097560974,
            "unit": "ns",
            "range": "± 2760.8990017387214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50520.375,
            "unit": "ns",
            "range": "± 960.3705448072287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51041.67010309279,
            "unit": "ns",
            "range": "± 8618.808747348306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2487.9583333333335,
            "unit": "ns",
            "range": "± 320.4261937077477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10040.375,
            "unit": "ns",
            "range": "± 758.7600185859807"
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
          "id": "2f8dac93d6ff24f8d9e6d2343460ac95f9a1b8e4",
          "message": "Merge pull request #4034 from planetarium/prepare/5.5.2\n\nPrepare 5.5.2",
          "timestamp": "2025-02-18T09:27:55+09:00",
          "tree_id": "2e2d668e1ee286aa02c9f861aa68bbb6be813dd4",
          "url": "https://github.com/planetarium/libplanet/commit/2f8dac93d6ff24f8d9e6d2343460ac95f9a1b8e4"
        },
        "date": 1739839046628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003378.2903225806,
            "unit": "ns",
            "range": "± 71439.81963491472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1931565.326923077,
            "unit": "ns",
            "range": "± 78974.22232272541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1600111.3974358975,
            "unit": "ns",
            "range": "± 81221.57991226156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7853134.545454546,
            "unit": "ns",
            "range": "± 168184.9395405538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2449374.375,
            "unit": "ns",
            "range": "± 25990.80852115481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2521987.4444444445,
            "unit": "ns",
            "range": "± 39377.18183269299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2983141.846153846,
            "unit": "ns",
            "range": "± 24939.230467432077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2540555.2916666665,
            "unit": "ns",
            "range": "± 63868.86876281485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3178844.785714286,
            "unit": "ns",
            "range": "± 55975.677405360715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3780012.9542410714,
            "unit": "ns",
            "range": "± 17798.75454748231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1238691.6063058036,
            "unit": "ns",
            "range": "± 3984.886669312365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783705.3247395833,
            "unit": "ns",
            "range": "± 2602.7909250087414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2011280.38828125,
            "unit": "ns",
            "range": "± 6633.966277243556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632115.9147600447,
            "unit": "ns",
            "range": "± 1391.5294711468293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587685.6120442708,
            "unit": "ns",
            "range": "± 849.0219904389927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11296858.133333333,
            "unit": "ns",
            "range": "± 161205.55384258705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27529104.266666666,
            "unit": "ns",
            "range": "± 191467.94466939842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70516792.5,
            "unit": "ns",
            "range": "± 292301.38626066945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139622680.06666666,
            "unit": "ns",
            "range": "± 470970.6418727888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281240361.1666667,
            "unit": "ns",
            "range": "± 1121825.558664834"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35196.134020618556,
            "unit": "ns",
            "range": "± 6154.773907011914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 106981.27659574468,
            "unit": "ns",
            "range": "± 10831.697056646904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190734.75510204083,
            "unit": "ns",
            "range": "± 12052.275943735389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174864.4534883721,
            "unit": "ns",
            "range": "± 6471.468016107276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2952204.923076923,
            "unit": "ns",
            "range": "± 46800.05124723251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2878666.076923077,
            "unit": "ns",
            "range": "± 37370.69286990707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13778.917525773197,
            "unit": "ns",
            "range": "± 3238.2418669643075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56927.62359550562,
            "unit": "ns",
            "range": "± 3999.138497625073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50874.875,
            "unit": "ns",
            "range": "± 862.2100188855768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57503.10824742268,
            "unit": "ns",
            "range": "± 9861.317823695332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3294.2368421052633,
            "unit": "ns",
            "range": "± 569.1824336512466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11671.247311827958,
            "unit": "ns",
            "range": "± 1142.2405961426823"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "35055316+sky1045@users.noreply.github.com",
            "name": "Robert",
            "username": "sky1045"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17b33343e723e1c9153e928e6387797b0c672584",
          "message": "Merge pull request #4042 from planetarium/prepare/5.5.2\n\nDecrease HashNodeCache size & ActivitySource as singleton",
          "timestamp": "2025-09-15T18:52:17+09:00",
          "tree_id": "17d589884225dde825743dcc01cd57a12aefd454",
          "url": "https://github.com/planetarium/libplanet/commit/17b33343e723e1c9153e928e6387797b0c672584"
        },
        "date": 1757930459797,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061755.7407407407,
            "unit": "ns",
            "range": "± 55619.201614365564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2086365.8055555555,
            "unit": "ns",
            "range": "± 102822.96410652534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1719976.8292682928,
            "unit": "ns",
            "range": "± 77367.30286903991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8120400.805555556,
            "unit": "ns",
            "range": "± 266834.79564541904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108439.03571428571,
            "unit": "ns",
            "range": "± 6383.185076558621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201214.62626262626,
            "unit": "ns",
            "range": "± 15443.566906899281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178752.838028169,
            "unit": "ns",
            "range": "± 8676.191270933283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2940407.533333333,
            "unit": "ns",
            "range": "± 50678.19153367462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2885646.3333333335,
            "unit": "ns",
            "range": "± 49484.30855428049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12637.37113402062,
            "unit": "ns",
            "range": "± 1518.869455655996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60709.532608695656,
            "unit": "ns",
            "range": "± 3926.493227405219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50853.958333333336,
            "unit": "ns",
            "range": "± 1312.601746918879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63821.183673469386,
            "unit": "ns",
            "range": "± 11336.388422278129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2943.994845360825,
            "unit": "ns",
            "range": "± 311.1871798623024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11897.228260869566,
            "unit": "ns",
            "range": "± 961.3380110555489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3882686.359375,
            "unit": "ns",
            "range": "± 9470.503813200161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1231018.469951923,
            "unit": "ns",
            "range": "± 3396.002784686257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 804514.5599609375,
            "unit": "ns",
            "range": "± 2551.911684087685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1993332.2584134615,
            "unit": "ns",
            "range": "± 1916.5091825211646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643279.52734375,
            "unit": "ns",
            "range": "± 855.689916167535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584147.2641601562,
            "unit": "ns",
            "range": "± 1227.0142767300079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11514727.733333332,
            "unit": "ns",
            "range": "± 129198.047622614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28119727.14285714,
            "unit": "ns",
            "range": "± 182495.83394975483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69801980,
            "unit": "ns",
            "range": "± 415280.3954053213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141964068.57142857,
            "unit": "ns",
            "range": "± 575074.3822925417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286538678.71428573,
            "unit": "ns",
            "range": "± 1493494.3551627856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32175.18604651163,
            "unit": "ns",
            "range": "± 1196.0755521568572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2449277.2,
            "unit": "ns",
            "range": "± 29360.43563368909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2551799.230769231,
            "unit": "ns",
            "range": "± 26496.822099243796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3102483.7352941176,
            "unit": "ns",
            "range": "± 60383.778098436145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2627874,
            "unit": "ns",
            "range": "± 53397.33997705316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3234627.7333333334,
            "unit": "ns",
            "range": "± 39759.782385626575"
          }
        ]
      }
    ]
  }
}