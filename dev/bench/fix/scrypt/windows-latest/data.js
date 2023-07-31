window.BENCHMARK_DATA = {
  "lastUpdate": 1690798062536,
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
          "id": "8b36a4b4c6b388a0ed70890fe17a32959a6524fa",
          "message": "Use @noble/hashes/scrypt instead of scrypt-js",
          "timestamp": "2023-07-31T12:29:40+09:00",
          "tree_id": "c4ed2918319de0bffb1c1319964c0b7dad95ce9a",
          "url": "https://github.com/planetarium/libplanet/commit/8b36a4b4c6b388a0ed70890fe17a32959a6524fa"
        },
        "date": 1690775248664,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1438821.875,
            "unit": "ns",
            "range": "± 98448.0634682973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2615043.75,
            "unit": "ns",
            "range": "± 80770.17150432893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1827275,
            "unit": "ns",
            "range": "± 117828.15373725972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4916233.823529412,
            "unit": "ns",
            "range": "± 233502.74990249707"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49005.26315789474,
            "unit": "ns",
            "range": "± 3724.255413832141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7743864.285714285,
            "unit": "ns",
            "range": "± 133062.59144386993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20969053.333333332,
            "unit": "ns",
            "range": "± 260607.48500013433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52647676.92307692,
            "unit": "ns",
            "range": "± 294566.09092541004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105681300,
            "unit": "ns",
            "range": "± 734976.8012211905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211340273.33333334,
            "unit": "ns",
            "range": "± 1153661.3742259697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4944077.447916667,
            "unit": "ns",
            "range": "± 20537.47222952467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1571567.3307291667,
            "unit": "ns",
            "range": "± 4831.223837192326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1210899.693080357,
            "unit": "ns",
            "range": "± 5583.910104422256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670102.2395833335,
            "unit": "ns",
            "range": "± 6205.181908704412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864269.0690104166,
            "unit": "ns",
            "range": "± 2679.65517391528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791483.3528645834,
            "unit": "ns",
            "range": "± 1957.2393167384437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3430620,
            "unit": "ns",
            "range": "± 61781.957606685515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3676170,
            "unit": "ns",
            "range": "± 109458.31248659827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4388691.304347826,
            "unit": "ns",
            "range": "± 108734.45934119204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4024041.935483871,
            "unit": "ns",
            "range": "± 106513.88884145125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6437072.7272727275,
            "unit": "ns",
            "range": "± 185976.82865199778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277415.55555555556,
            "unit": "ns",
            "range": "± 10448.574403750355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258974,
            "unit": "ns",
            "range": "± 10258.790357144293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258115.87301587302,
            "unit": "ns",
            "range": "± 11786.216749828483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4266192.857142857,
            "unit": "ns",
            "range": "± 30627.82707292163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3977220,
            "unit": "ns",
            "range": "± 63351.23406172019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24153.763440860213,
            "unit": "ns",
            "range": "± 2001.9316291470439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97774.22680412371,
            "unit": "ns",
            "range": "± 8310.162934003803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86553.0612244898,
            "unit": "ns",
            "range": "± 7917.346271042738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104330.85106382979,
            "unit": "ns",
            "range": "± 14848.858806994313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6714.285714285715,
            "unit": "ns",
            "range": "± 1171.922378767327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23884.94623655914,
            "unit": "ns",
            "range": "± 1967.5600778938244"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac3aca902f3f71cbb3fa22ac005d8ad6a6712bb5",
          "message": "Merge branch 'main' into fix/scrypt",
          "timestamp": "2023-07-31T13:17:28+09:00",
          "tree_id": "0874d36bad6c9de9057cad90ff4491eea015c87f",
          "url": "https://github.com/planetarium/libplanet/commit/ac3aca902f3f71cbb3fa22ac005d8ad6a6712bb5"
        },
        "date": 1690778076805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484266.6666666667,
            "unit": "ns",
            "range": "± 30597.596983692536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2532380.9523809524,
            "unit": "ns",
            "range": "± 91047.26255403314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1794113.75,
            "unit": "ns",
            "range": "± 93206.75227312556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4798981.632653061,
            "unit": "ns",
            "range": "± 190379.8983539988"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45437.89473684211,
            "unit": "ns",
            "range": "± 2921.8610706981544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7227869.230769231,
            "unit": "ns",
            "range": "± 84628.09211106543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20283281.818181816,
            "unit": "ns",
            "range": "± 468361.34669958736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50604200,
            "unit": "ns",
            "range": "± 598889.8048333544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103103545.45454545,
            "unit": "ns",
            "range": "± 2422619.349013883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201998886.66666666,
            "unit": "ns",
            "range": "± 3505397.445545668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4894189.676339285,
            "unit": "ns",
            "range": "± 22584.094718303044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1563437.9356971155,
            "unit": "ns",
            "range": "± 5508.8933067495955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1206856.919642857,
            "unit": "ns",
            "range": "± 4967.333115436698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664043.2291666665,
            "unit": "ns",
            "range": "± 8899.57666589396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845090.1715959822,
            "unit": "ns",
            "range": "± 3057.5173224643745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783003.5677083334,
            "unit": "ns",
            "range": "± 1333.693477311232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3215637.3333333335,
            "unit": "ns",
            "range": "± 162491.40415795916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3386333.9285714286,
            "unit": "ns",
            "range": "± 145090.55263622684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4138197.9166666665,
            "unit": "ns",
            "range": "± 163272.1699645383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3769262.0689655175,
            "unit": "ns",
            "range": "± 109635.17232098564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6139448.275862069,
            "unit": "ns",
            "range": "± 176069.45995562105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265153.7037037037,
            "unit": "ns",
            "range": "± 9455.45091793593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260260.3448275862,
            "unit": "ns",
            "range": "± 11416.730408148438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220781.1475409836,
            "unit": "ns",
            "range": "± 9912.408738270206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4142477.777777778,
            "unit": "ns",
            "range": "± 85632.18578215825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3718685.714285714,
            "unit": "ns",
            "range": "± 60934.010424176304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20392.47311827957,
            "unit": "ns",
            "range": "± 1617.1120634946587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90387.62886597938,
            "unit": "ns",
            "range": "± 7078.139140632804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76728.125,
            "unit": "ns",
            "range": "± 4782.659535952994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95148.45360824742,
            "unit": "ns",
            "range": "± 16000.638746378103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4718.085106382979,
            "unit": "ns",
            "range": "± 784.5569622963159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19970.526315789473,
            "unit": "ns",
            "range": "± 1745.5642070390466"
          }
        ]
      },
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
          "id": "39759bf5cc67fefc7d2450be0131a9f86b89606c",
          "message": "Fix Wrong Test Object",
          "timestamp": "2023-07-31T13:18:27+09:00",
          "tree_id": "7c6138a7d289091af8a013c4b8572d03bac8501a",
          "url": "https://github.com/planetarium/libplanet/commit/39759bf5cc67fefc7d2450be0131a9f86b89606c"
        },
        "date": 1690778361795,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1637369.696969697,
            "unit": "ns",
            "range": "± 100368.07104154742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3075017.6470588236,
            "unit": "ns",
            "range": "± 124181.29924571147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2072378.2608695652,
            "unit": "ns",
            "range": "± 124954.40999485359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5479088.888888889,
            "unit": "ns",
            "range": "± 150582.92970303347"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56515.05376344086,
            "unit": "ns",
            "range": "± 4213.04769982386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8989002.564102564,
            "unit": "ns",
            "range": "± 308770.0715718988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24161861.53846154,
            "unit": "ns",
            "range": "± 199578.31603350406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61232228.571428575,
            "unit": "ns",
            "range": "± 1006573.545349669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123103081.25,
            "unit": "ns",
            "range": "± 2321938.450725672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243311180,
            "unit": "ns",
            "range": "± 3605743.736080771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5778057.979910715,
            "unit": "ns",
            "range": "± 45880.34308041543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1915905.4161658655,
            "unit": "ns",
            "range": "± 7302.290014292199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1440025.9375,
            "unit": "ns",
            "range": "± 9576.964266360807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3146143.526785714,
            "unit": "ns",
            "range": "± 26110.61429404172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1006780.3936298077,
            "unit": "ns",
            "range": "± 7436.390909173882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924983.8444010416,
            "unit": "ns",
            "range": "± 9685.520161103897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3927218.9655172415,
            "unit": "ns",
            "range": "± 157537.3489070622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4146570.212765957,
            "unit": "ns",
            "range": "± 155532.35217051426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4962841.379310345,
            "unit": "ns",
            "range": "± 133681.16791520195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4524938.70967742,
            "unit": "ns",
            "range": "± 137646.1881719925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7495197.826086956,
            "unit": "ns",
            "range": "± 282747.51790963253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321633.3333333333,
            "unit": "ns",
            "range": "± 9576.131726880885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300117.3076923077,
            "unit": "ns",
            "range": "± 11861.566228524172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280755.55555555556,
            "unit": "ns",
            "range": "± 13882.37192958164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4996128.571428572,
            "unit": "ns",
            "range": "± 59600.19912939668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4582746.666666667,
            "unit": "ns",
            "range": "± 80270.85280177239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24593.548387096773,
            "unit": "ns",
            "range": "± 2278.9588799356584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103480,
            "unit": "ns",
            "range": "± 6853.13408657022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92061.22448979592,
            "unit": "ns",
            "range": "± 7010.737459232135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109418.08510638298,
            "unit": "ns",
            "range": "± 15879.837508756409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5997.916666666667,
            "unit": "ns",
            "range": "± 1086.7604361652277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23904.123711340206,
            "unit": "ns",
            "range": "± 2129.3542412046154"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3150b9d9e76a8fa7d1e755f58624771bea6aac10",
          "message": "Update @planetarium/account-web3-secret-storage/src/Web3Account.ts",
          "timestamp": "2023-07-31T13:29:40+09:00",
          "tree_id": "696aa64766922f1ddad28e9cdd0ed350e9125bbe",
          "url": "https://github.com/planetarium/libplanet/commit/3150b9d9e76a8fa7d1e755f58624771bea6aac10"
        },
        "date": 1690778626259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1308290.8163265307,
            "unit": "ns",
            "range": "± 99807.42471476117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2413434.1463414636,
            "unit": "ns",
            "range": "± 85203.16194178506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1713416.1616161617,
            "unit": "ns",
            "range": "± 127585.4677181989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4511349.180327869,
            "unit": "ns",
            "range": "± 202213.20977535142"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42267.1875,
            "unit": "ns",
            "range": "± 1957.4079627251142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6862578.571428572,
            "unit": "ns",
            "range": "± 33051.19987514543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17508000,
            "unit": "ns",
            "range": "± 87080.03707591572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44908073.333333336,
            "unit": "ns",
            "range": "± 373286.2717361391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88918478.57142857,
            "unit": "ns",
            "range": "± 549553.84761511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179469800,
            "unit": "ns",
            "range": "± 880007.3408784724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4862669.981971154,
            "unit": "ns",
            "range": "± 6871.324726829605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515315.64453125,
            "unit": "ns",
            "range": "± 3536.2049964029475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161436.1783854167,
            "unit": "ns",
            "range": "± 2087.2519933539406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549716.8489583335,
            "unit": "ns",
            "range": "± 2342.096951774289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805723.0259486607,
            "unit": "ns",
            "range": "± 930.6542078913735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741841.4192708334,
            "unit": "ns",
            "range": "± 1109.9973974275129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2980185.714285714,
            "unit": "ns",
            "range": "± 75501.10724861719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3095018.75,
            "unit": "ns",
            "range": "± 50012.774618091324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3918629.411764706,
            "unit": "ns",
            "range": "± 56479.37416333818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3491377.419354839,
            "unit": "ns",
            "range": "± 105096.25971675497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6068389.583333333,
            "unit": "ns",
            "range": "± 230612.706778014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251843.24324324325,
            "unit": "ns",
            "range": "± 12644.963056772664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233671.05263157896,
            "unit": "ns",
            "range": "± 7607.283419472557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212675.7142857143,
            "unit": "ns",
            "range": "± 10360.773790618763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3831953.3333333335,
            "unit": "ns",
            "range": "± 58793.60833417508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3474061.5384615385,
            "unit": "ns",
            "range": "± 32917.84061522309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15740.217391304348,
            "unit": "ns",
            "range": "± 1064.828292674942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77753.96825396825,
            "unit": "ns",
            "range": "± 3524.6516824853634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66719.69696969698,
            "unit": "ns",
            "range": "± 3086.607283433466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83158.58585858585,
            "unit": "ns",
            "range": "± 15416.265000032483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3819.5876288659792,
            "unit": "ns",
            "range": "± 864.0552614534333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15673.958333333334,
            "unit": "ns",
            "range": "± 2016.3669670013035"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fed8bcc083a27d054ad48147c38c3c20e1020bd5",
          "message": "Update Web3Account.ts",
          "timestamp": "2023-07-31T13:31:01+09:00",
          "tree_id": "d8e2fe6ccbed1438294efe071b5c6627b80c49db",
          "url": "https://github.com/planetarium/libplanet/commit/fed8bcc083a27d054ad48147c38c3c20e1020bd5"
        },
        "date": 1690779300039,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1539279.1666666667,
            "unit": "ns",
            "range": "± 188008.19966254363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3154087.234042553,
            "unit": "ns",
            "range": "± 406922.2541352916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1989390.5263157894,
            "unit": "ns",
            "range": "± 267873.88787060144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6349819.14893617,
            "unit": "ns",
            "range": "± 581935.8546989644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64498.936170212764,
            "unit": "ns",
            "range": "± 13882.908922355557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9331050.505050505,
            "unit": "ns",
            "range": "± 732301.0559919227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25657964.285714287,
            "unit": "ns",
            "range": "± 432028.36375394627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64235850,
            "unit": "ns",
            "range": "± 1243902.653211523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129284686.20689656,
            "unit": "ns",
            "range": "± 3752638.4390304205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265534458.82352942,
            "unit": "ns",
            "range": "± 5221495.138734071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6145837.934027778,
            "unit": "ns",
            "range": "± 231580.71141051163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1992774.6875,
            "unit": "ns",
            "range": "± 21188.84949908706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1499929.6746926229,
            "unit": "ns",
            "range": "± 67698.71025859933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3413602.3015202703,
            "unit": "ns",
            "range": "± 171250.70426906494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1087421.2999131945,
            "unit": "ns",
            "range": "± 22197.035502958366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 967273.53515625,
            "unit": "ns",
            "range": "± 6904.6791643372035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4142265.11627907,
            "unit": "ns",
            "range": "± 224963.84834663433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4096024.7422680412,
            "unit": "ns",
            "range": "± 287623.8088599585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5262182.474226804,
            "unit": "ns",
            "range": "± 463261.91453699395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4877893.333333333,
            "unit": "ns",
            "range": "± 217903.30686165122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8103054.901960785,
            "unit": "ns",
            "range": "± 293211.6295877266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364969.5652173913,
            "unit": "ns",
            "range": "± 30364.582242374774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314196.9696969697,
            "unit": "ns",
            "range": "± 56007.511257457016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334653.16455696203,
            "unit": "ns",
            "range": "± 17396.49858259162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4930107.291666667,
            "unit": "ns",
            "range": "± 522487.22497498576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4230825.806451613,
            "unit": "ns",
            "range": "± 455747.9945585932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30992.85714285714,
            "unit": "ns",
            "range": "± 9229.859656481809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127898.93617021276,
            "unit": "ns",
            "range": "± 27807.202960573104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138001.08695652173,
            "unit": "ns",
            "range": "± 24376.477107411967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149348.42105263157,
            "unit": "ns",
            "range": "± 23614.712611753763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8811.494252873563,
            "unit": "ns",
            "range": "± 1462.9871708856126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29675,
            "unit": "ns",
            "range": "± 7421.56976671363"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fed8bcc083a27d054ad48147c38c3c20e1020bd5",
          "message": "Update Web3Account.ts",
          "timestamp": "2023-07-31T13:31:01+09:00",
          "tree_id": "d8e2fe6ccbed1438294efe071b5c6627b80c49db",
          "url": "https://github.com/planetarium/libplanet/commit/fed8bcc083a27d054ad48147c38c3c20e1020bd5"
        },
        "date": 1690798001785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1402028.2828282828,
            "unit": "ns",
            "range": "± 106285.89769608217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2616637.8048780486,
            "unit": "ns",
            "range": "± 137569.7871297489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1789472.1649484537,
            "unit": "ns",
            "range": "± 117493.50225142596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4862024.324324325,
            "unit": "ns",
            "range": "± 241516.18500506386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47387.20930232558,
            "unit": "ns",
            "range": "± 2560.0572839008164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7458691.666666667,
            "unit": "ns",
            "range": "± 188383.3762551127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20065200,
            "unit": "ns",
            "range": "± 293674.7934122271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50916385,
            "unit": "ns",
            "range": "± 1118166.4292257072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100118828.57142857,
            "unit": "ns",
            "range": "± 1631092.831121596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199130093.33333334,
            "unit": "ns",
            "range": "± 3259014.7129520746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4896216.510416667,
            "unit": "ns",
            "range": "± 22555.840350416074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566754.82421875,
            "unit": "ns",
            "range": "± 6219.368130625492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1208331.5755208333,
            "unit": "ns",
            "range": "± 6840.644463533818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2694950.1822916665,
            "unit": "ns",
            "range": "± 6475.555619732701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861035.1302083334,
            "unit": "ns",
            "range": "± 3673.5456692799908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776234.2317708334,
            "unit": "ns",
            "range": "± 2117.529122232818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3221045.238095238,
            "unit": "ns",
            "range": "± 115150.8198765194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3463550,
            "unit": "ns",
            "range": "± 122753.24216304212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4171477.906976744,
            "unit": "ns",
            "range": "± 138301.1368020995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3989027.777777778,
            "unit": "ns",
            "range": "± 83561.59268014121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6387817.021276596,
            "unit": "ns",
            "range": "± 248293.53448931203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272468.4210526316,
            "unit": "ns",
            "range": "± 5957.166797841902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258610,
            "unit": "ns",
            "range": "± 9116.308294648494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236562,
            "unit": "ns",
            "range": "± 17853.691466749922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4150930.769230769,
            "unit": "ns",
            "range": "± 47478.07186156898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3863820,
            "unit": "ns",
            "range": "± 60563.180705300285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23402.061855670105,
            "unit": "ns",
            "range": "± 2185.7006590871542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90078.26086956522,
            "unit": "ns",
            "range": "± 6245.030131055625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71566.21621621621,
            "unit": "ns",
            "range": "± 3517.511068496261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101120.40816326531,
            "unit": "ns",
            "range": "± 17048.172857225185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4827.835051546392,
            "unit": "ns",
            "range": "± 1109.217279214758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21091.836734693876,
            "unit": "ns",
            "range": "± 2583.08029455555"
          }
        ]
      }
    ]
  }
}