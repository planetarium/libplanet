window.BENCHMARK_DATA = {
  "lastUpdate": 1723121328687,
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
          "id": "29be97f6977e2f8c58397246c85b77a815d1c924",
          "message": "Merge pull request #3892 from planetarium/release/5.2.0\n\n🚀 Release 5.2.0",
          "timestamp": "2024-07-23T17:26:04+09:00",
          "tree_id": "4319024302f9589db25f93310ff36acc24e6623a",
          "url": "https://github.com/planetarium/libplanet/commit/29be97f6977e2f8c58397246c85b77a815d1c924"
        },
        "date": 1721723841556,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006011.6161616162,
            "unit": "ns",
            "range": "± 109697.11519942379"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1759688.6363636365,
            "unit": "ns",
            "range": "± 60644.48139508366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1519453.0120481928,
            "unit": "ns",
            "range": "± 66405.71224575269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6750495,
            "unit": "ns",
            "range": "± 154998.39549254422"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30069.23076923077,
            "unit": "ns",
            "range": "± 1061.5663318526435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9453642.857142856,
            "unit": "ns",
            "range": "± 40914.01329027114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23546128.57142857,
            "unit": "ns",
            "range": "± 252769.54365152895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59096353.333333336,
            "unit": "ns",
            "range": "± 410481.1407998922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119364057.14285715,
            "unit": "ns",
            "range": "± 1748038.9978550186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234927076.92307693,
            "unit": "ns",
            "range": "± 626435.7803662535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3263300.4464285714,
            "unit": "ns",
            "range": "± 4630.262963646808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056924.7526041667,
            "unit": "ns",
            "range": "± 1390.635591404373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737892.79296875,
            "unit": "ns",
            "range": "± 1536.3655256541017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963059.654017857,
            "unit": "ns",
            "range": "± 3805.4231206592835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620787.34375,
            "unit": "ns",
            "range": "± 1077.0348492352905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555530.859375,
            "unit": "ns",
            "range": "± 661.131924340641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2170746.6666666665,
            "unit": "ns",
            "range": "± 33602.22923443933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2192918.867924528,
            "unit": "ns",
            "range": "± 88191.5312012261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2727804.761904762,
            "unit": "ns",
            "range": "± 62634.682694099094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2229836.6666666665,
            "unit": "ns",
            "range": "± 29027.15149320587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2866085.714285714,
            "unit": "ns",
            "range": "± 49567.18606160667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173493.33333333334,
            "unit": "ns",
            "range": "± 7771.282787171761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164541.50943396226,
            "unit": "ns",
            "range": "± 6661.382218609685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145213.88888888888,
            "unit": "ns",
            "range": "± 4813.205215284763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2692380,
            "unit": "ns",
            "range": "± 23790.67044032177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2520286.6666666665,
            "unit": "ns",
            "range": "± 31592.197650384383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10350,
            "unit": "ns",
            "range": "± 766.5417189537382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51759.13978494624,
            "unit": "ns",
            "range": "± 3790.3262610269308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43507.692307692305,
            "unit": "ns",
            "range": "± 842.8157933608396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53018.47826086957,
            "unit": "ns",
            "range": "± 8104.034124276273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2611.5789473684213,
            "unit": "ns",
            "range": "± 395.6850127807543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9883.695652173914,
            "unit": "ns",
            "range": "± 991.6438981006385"
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
          "id": "eee04f556662285122b7817386ed2c07488c1b9e",
          "message": "Merge pull request #3893 from planetarium/prepare/5.2.1\n\n🔧 Prepare 5.2.1",
          "timestamp": "2024-07-23T22:39:17+09:00",
          "tree_id": "6169e6940dd919f784390a0d283f591f1994f863",
          "url": "https://github.com/planetarium/libplanet/commit/eee04f556662285122b7817386ed2c07488c1b9e"
        },
        "date": 1721742920468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 949012.2448979592,
            "unit": "ns",
            "range": "± 70741.25972795629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1732523.4375,
            "unit": "ns",
            "range": "± 79593.39476101854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1497978.494623656,
            "unit": "ns",
            "range": "± 101650.27518671702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7059909.375,
            "unit": "ns",
            "range": "± 326889.1874368059"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30613.333333333332,
            "unit": "ns",
            "range": "± 571.797499952895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9770885.714285715,
            "unit": "ns",
            "range": "± 62891.63888593015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23097252.63157895,
            "unit": "ns",
            "range": "± 495176.2989845368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58701628.571428575,
            "unit": "ns",
            "range": "± 262491.8003952224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116372241.66666667,
            "unit": "ns",
            "range": "± 562710.7580249108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233560176.92307693,
            "unit": "ns",
            "range": "± 1318496.1484925707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3319418.9583333335,
            "unit": "ns",
            "range": "± 5664.06232271141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068367.157451923,
            "unit": "ns",
            "range": "± 6961.823146136735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739795.8919270834,
            "unit": "ns",
            "range": "± 955.876607123977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1898038.3333333333,
            "unit": "ns",
            "range": "± 3120.1422356635785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604537.744140625,
            "unit": "ns",
            "range": "± 571.03404732874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578456.3406808035,
            "unit": "ns",
            "range": "± 664.10354359194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121178.5714285714,
            "unit": "ns",
            "range": "± 30737.078049693777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2178468.4210526315,
            "unit": "ns",
            "range": "± 43130.75794258379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2621222.727272727,
            "unit": "ns",
            "range": "± 63523.15612149922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2229850,
            "unit": "ns",
            "range": "± 42723.420587151806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2969821.4285714286,
            "unit": "ns",
            "range": "± 40873.88066821061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170325.92592592593,
            "unit": "ns",
            "range": "± 7150.331439347599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159840.38461538462,
            "unit": "ns",
            "range": "± 6375.973885331192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142817.64705882352,
            "unit": "ns",
            "range": "± 3841.5961477707215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2641064.285714286,
            "unit": "ns",
            "range": "± 29724.778763305752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2403540,
            "unit": "ns",
            "range": "± 29263.526786769908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9287.912087912087,
            "unit": "ns",
            "range": "± 796.0786065088972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48252.17391304348,
            "unit": "ns",
            "range": "± 2924.262967567694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42655.555555555555,
            "unit": "ns",
            "range": "± 1411.8770574652829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 43413.18681318681,
            "unit": "ns",
            "range": "± 5099.329123439426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2154.639175257732,
            "unit": "ns",
            "range": "± 307.2121344163445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9092.222222222223,
            "unit": "ns",
            "range": "± 870.6484446131892"
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
          "id": "ab547a08597479dcbda1af84a588c5214396f320",
          "message": "Merge pull request #3907 from planetarium/release/5.2.1\n\n🚀 Release 5.2.1",
          "timestamp": "2024-07-31T11:06:51+09:00",
          "tree_id": "26877b6a16528547babb7bfadd8a08aca9060b6f",
          "url": "https://github.com/planetarium/libplanet/commit/ab547a08597479dcbda1af84a588c5214396f320"
        },
        "date": 1722392293061,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1060256.9767441861,
            "unit": "ns",
            "range": "± 58338.87119176086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1916576.3157894737,
            "unit": "ns",
            "range": "± 51077.37339122119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1647387.3563218392,
            "unit": "ns",
            "range": "± 92633.43462471614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7120850,
            "unit": "ns",
            "range": "± 184268.2071707245"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38565.30612244898,
            "unit": "ns",
            "range": "± 7176.021096074226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10364446.666666666,
            "unit": "ns",
            "range": "± 111783.56553541099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25616526.666666668,
            "unit": "ns",
            "range": "± 135253.35732123867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63211236.666666664,
            "unit": "ns",
            "range": "± 275593.56945293467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125231866.66666667,
            "unit": "ns",
            "range": "± 506554.1667082838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257560780,
            "unit": "ns",
            "range": "± 1532226.265088995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3380233.8341346155,
            "unit": "ns",
            "range": "± 4294.166921656318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1113667.857142857,
            "unit": "ns",
            "range": "± 1659.0273412024635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736118.3668870192,
            "unit": "ns",
            "range": "± 714.039404944582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2051093.8058035714,
            "unit": "ns",
            "range": "± 8174.635595207012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618941.8033854166,
            "unit": "ns",
            "range": "± 1145.8182851092233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569312.6627604166,
            "unit": "ns",
            "range": "± 953.3854892283279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2315744,
            "unit": "ns",
            "range": "± 54673.7755540381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2347525,
            "unit": "ns",
            "range": "± 63728.62323442143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2864407.1428571427,
            "unit": "ns",
            "range": "± 35794.62173364799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2472205.263157895,
            "unit": "ns",
            "range": "± 53425.89336521519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3112057.8947368423,
            "unit": "ns",
            "range": "± 59649.078560355105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193649.41176470587,
            "unit": "ns",
            "range": "± 10451.44810574127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183428.72340425532,
            "unit": "ns",
            "range": "± 10752.102793491697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165139,
            "unit": "ns",
            "range": "± 19161.788022051078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2852753.3333333335,
            "unit": "ns",
            "range": "± 41851.623396857394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2609273.3333333335,
            "unit": "ns",
            "range": "± 47969.818884476976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14931.958762886597,
            "unit": "ns",
            "range": "± 2649.982169427143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66816.32653061225,
            "unit": "ns",
            "range": "± 10233.215514615493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54460.204081632655,
            "unit": "ns",
            "range": "± 10065.647815083874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73960.41666666667,
            "unit": "ns",
            "range": "± 14837.558879706994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4116.666666666667,
            "unit": "ns",
            "range": "± 1072.004189570237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13886.315789473685,
            "unit": "ns",
            "range": "± 2265.354724292798"
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
          "id": "94fd763206ee1211320be311b42c53a4a7a95895",
          "message": "Merge pull request #3914 from riemannulus/5.2-maintenance\n\n🚀  Release 5.2.2",
          "timestamp": "2024-08-08T21:33:26+09:00",
          "tree_id": "94b66acc3ef27a3441fca23afd7882df4aa7eb58",
          "url": "https://github.com/planetarium/libplanet/commit/94fd763206ee1211320be311b42c53a4a7a95895"
        },
        "date": 1723121076195,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979417.5257731959,
            "unit": "ns",
            "range": "± 80048.9368687332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1719004.255319149,
            "unit": "ns",
            "range": "± 66884.86849559119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1569292.7835051545,
            "unit": "ns",
            "range": "± 118027.84739153607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6723741.666666667,
            "unit": "ns",
            "range": "± 168134.78526019756"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30234.375,
            "unit": "ns",
            "range": "± 1394.344444020712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9477435.714285715,
            "unit": "ns",
            "range": "± 132162.81687689305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23418826.666666668,
            "unit": "ns",
            "range": "± 159335.36270873394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56887771.428571425,
            "unit": "ns",
            "range": "± 175706.92131444963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116436692.3076923,
            "unit": "ns",
            "range": "± 967517.4274584915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239024180,
            "unit": "ns",
            "range": "± 1790802.1591294939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3324973.28125,
            "unit": "ns",
            "range": "± 9306.08714345032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060506.7661830357,
            "unit": "ns",
            "range": "± 2904.8418929527147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730938.3984375,
            "unit": "ns",
            "range": "± 2812.0626506027725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943442.1614583333,
            "unit": "ns",
            "range": "± 12672.621521480485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628617.12890625,
            "unit": "ns",
            "range": "± 2429.3236726128403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566823.2161458334,
            "unit": "ns",
            "range": "± 2561.0117865935767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2101977.419354839,
            "unit": "ns",
            "range": "± 56823.72573539695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2188207.1428571427,
            "unit": "ns",
            "range": "± 31509.667973880267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2671783.3333333335,
            "unit": "ns",
            "range": "± 64537.49556136598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2210485.714285714,
            "unit": "ns",
            "range": "± 34898.817637958346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2878778.5714285714,
            "unit": "ns",
            "range": "± 24156.737508052844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167965.9090909091,
            "unit": "ns",
            "range": "± 5132.021822980037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162200,
            "unit": "ns",
            "range": "± 3260.6966827877222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146235.7142857143,
            "unit": "ns",
            "range": "± 2439.2959712107167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2740493.3333333335,
            "unit": "ns",
            "range": "± 33952.287250254725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2515835.714285714,
            "unit": "ns",
            "range": "± 36439.67844033705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9409.677419354839,
            "unit": "ns",
            "range": "± 913.4340979689766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50352.17391304348,
            "unit": "ns",
            "range": "± 3056.5181030834456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44800,
            "unit": "ns",
            "range": "± 989.9494936611666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50701.030927835054,
            "unit": "ns",
            "range": "± 10440.501014133222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2486.1702127659573,
            "unit": "ns",
            "range": "± 429.9540019983101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10027.659574468085,
            "unit": "ns",
            "range": "± 1162.2331355450838"
          }
        ]
      }
    ]
  }
}