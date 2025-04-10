window.BENCHMARK_DATA = {
  "lastUpdate": 1744266260594,
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
          "id": "96d0939b259534eaeb8b570aeaf1edeb2e2035a6",
          "message": "fix: Remove temporary code",
          "timestamp": "2025-04-10T11:23:14+09:00",
          "tree_id": "682eb97e99da8be6985b7bc58f61596655809c6b",
          "url": "https://github.com/planetarium/libplanet/commit/96d0939b259534eaeb8b570aeaf1edeb2e2035a6"
        },
        "date": 1744252290938,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2918774.285714286,
            "unit": "ns",
            "range": "± 93009.07401291281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5005142.307692308,
            "unit": "ns",
            "range": "± 136976.62916885322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4052437.5,
            "unit": "ns",
            "range": "± 102717.6281915833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10706569.387755102,
            "unit": "ns",
            "range": "± 4182324.6236278387"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21258.333333333332,
            "unit": "ns",
            "range": "± 1607.0783438317035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4016225,
            "unit": "ns",
            "range": "± 6082.781211972635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10178614.285714285,
            "unit": "ns",
            "range": "± 169055.9664141428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 22815546.666666668,
            "unit": "ns",
            "range": "± 229741.92622737947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41804603.03030303,
            "unit": "ns",
            "range": "± 1308469.2412521704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82354635.71428572,
            "unit": "ns",
            "range": "± 56214.1455937486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4091422.8645833335,
            "unit": "ns",
            "range": "± 9761.402602649854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917963.5677083334,
            "unit": "ns",
            "range": "± 4797.203172944319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736227.4088541666,
            "unit": "ns",
            "range": "± 6703.223681075492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1662188.5807291667,
            "unit": "ns",
            "range": "± 5626.5511684556095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 435629.5670572917,
            "unit": "ns",
            "range": "± 1432.506823896375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 410211.44080528844,
            "unit": "ns",
            "range": "± 350.07191122759093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3097496.296296296,
            "unit": "ns",
            "range": "± 86759.50172517785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3246385.714285714,
            "unit": "ns",
            "range": "± 100449.64832561386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4000921.4285714286,
            "unit": "ns",
            "range": "± 41368.60903132729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3349415.625,
            "unit": "ns",
            "range": "± 103907.11456710407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3381023,
            "unit": "ns",
            "range": "± 671607.0277838722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239154.54545454544,
            "unit": "ns",
            "range": "± 41306.99469533783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376025,
            "unit": "ns",
            "range": "± 94966.09921440388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161073.07692307694,
            "unit": "ns",
            "range": "± 4334.379558119726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1447748.2758620689,
            "unit": "ns",
            "range": "± 36859.798277582035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1265308.8235294118,
            "unit": "ns",
            "range": "± 37648.62360272996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18470.70707070707,
            "unit": "ns",
            "range": "± 5942.191798696882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75861.22448979592,
            "unit": "ns",
            "range": "± 21363.91906136196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34278.94736842105,
            "unit": "ns",
            "range": "± 2603.1425003623954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60947.47474747475,
            "unit": "ns",
            "range": "± 32536.60840369156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3841.4141414141413,
            "unit": "ns",
            "range": "± 1307.202192330901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19929.591836734693,
            "unit": "ns",
            "range": "± 4353.1232817268165"
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
          "id": "2e3287cdda36d54de0f7780e3c1876179714bf59",
          "message": "fix: Remove temporary code",
          "timestamp": "2025-04-10T11:25:01+09:00",
          "tree_id": "682eb97e99da8be6985b7bc58f61596655809c6b",
          "url": "https://github.com/planetarium/libplanet/commit/2e3287cdda36d54de0f7780e3c1876179714bf59"
        },
        "date": 1744252519475,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2900995.8333333335,
            "unit": "ns",
            "range": "± 74475.99250862608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5165557.377049181,
            "unit": "ns",
            "range": "± 231330.13167262092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3931410.101010101,
            "unit": "ns",
            "range": "± 542220.1397005911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12500223,
            "unit": "ns",
            "range": "± 6006505.019750998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21575.287356321838,
            "unit": "ns",
            "range": "± 1205.4352095293889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4020450,
            "unit": "ns",
            "range": "± 9536.549125903417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10287310,
            "unit": "ns",
            "range": "± 82924.4906095729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21000871.05263158,
            "unit": "ns",
            "range": "± 642401.294093432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41401473.333333336,
            "unit": "ns",
            "range": "± 599510.6009627075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82458885.71428572,
            "unit": "ns",
            "range": "± 172919.0689183943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4212662.552083333,
            "unit": "ns",
            "range": "± 4602.175592292374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922424.8893229166,
            "unit": "ns",
            "range": "± 8389.4065362211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724593.1640625,
            "unit": "ns",
            "range": "± 5045.603190910671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1648142.5030048077,
            "unit": "ns",
            "range": "± 4913.736696369035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 440171.4290364583,
            "unit": "ns",
            "range": "± 2050.0907828724285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 397676.20192307694,
            "unit": "ns",
            "range": "± 1253.8230628410254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3087727.5862068967,
            "unit": "ns",
            "range": "± 88427.34667733783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3182350,
            "unit": "ns",
            "range": "± 92754.9152894057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4050192.8571428573,
            "unit": "ns",
            "range": "± 19023.890416878632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3120766.6666666665,
            "unit": "ns",
            "range": "± 22068.708135907702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4478021.428571428,
            "unit": "ns",
            "range": "± 73786.01262665344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221644.79166666666,
            "unit": "ns",
            "range": "± 41191.2864311237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343913.2653061224,
            "unit": "ns",
            "range": "± 93030.97105155289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160768.18181818182,
            "unit": "ns",
            "range": "± 5055.3470791736045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1455051.4285714286,
            "unit": "ns",
            "range": "± 43897.53022282536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1272920,
            "unit": "ns",
            "range": "± 41250.082352858975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19180.61224489796,
            "unit": "ns",
            "range": "± 5146.045587468317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85985,
            "unit": "ns",
            "range": "± 17841.1530575869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42350.52631578947,
            "unit": "ns",
            "range": "± 16433.210235867336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59452.52525252525,
            "unit": "ns",
            "range": "± 29892.393215155214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3252.577319587629,
            "unit": "ns",
            "range": "± 1161.185886596216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18120.20202020202,
            "unit": "ns",
            "range": "± 5744.722152709615"
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
          "id": "63bc4b191e95b56d054b34fb3528de1e5bf484b8",
          "message": "fix: Remove temporary code",
          "timestamp": "2025-04-10T11:29:19+09:00",
          "tree_id": "bd8e79b028c3504db709b880689107ae7ab4e4f2",
          "url": "https://github.com/planetarium/libplanet/commit/63bc4b191e95b56d054b34fb3528de1e5bf484b8"
        },
        "date": 1744252697419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2969815.909090909,
            "unit": "ns",
            "range": "± 111254.6146274325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4998836,
            "unit": "ns",
            "range": "± 461313.09478290536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4457436.666666667,
            "unit": "ns",
            "range": "± 115975.0849679936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11479689,
            "unit": "ns",
            "range": "± 5027823.308529941"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22708.045977011494,
            "unit": "ns",
            "range": "± 1532.9875369875674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4014535.714285714,
            "unit": "ns",
            "range": "± 10605.412779320766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10002425,
            "unit": "ns",
            "range": "± 15607.98892176113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 22879540,
            "unit": "ns",
            "range": "± 132939.50718815145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41400854.54545455,
            "unit": "ns",
            "range": "± 360782.32884499506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82862485.71428572,
            "unit": "ns",
            "range": "± 60028.042897182095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4091060.7291666665,
            "unit": "ns",
            "range": "± 14337.348973390266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 916626.19140625,
            "unit": "ns",
            "range": "± 7403.516202379831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 717461.8619791666,
            "unit": "ns",
            "range": "± 5008.551295027329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635366.5234375,
            "unit": "ns",
            "range": "± 5501.995722749863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 445329.765625,
            "unit": "ns",
            "range": "± 1525.9902897739928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426619.2068917411,
            "unit": "ns",
            "range": "± 1304.8880595195135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2999184.6153846155,
            "unit": "ns",
            "range": "± 39573.57801517418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3101466.6666666665,
            "unit": "ns",
            "range": "± 20849.867378402425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4007955,
            "unit": "ns",
            "range": "± 92093.22207758603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3314946.875,
            "unit": "ns",
            "range": "± 101864.14097083334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4398656.25,
            "unit": "ns",
            "range": "± 85027.7599277632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246761,
            "unit": "ns",
            "range": "± 40227.79554416864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348397,
            "unit": "ns",
            "range": "± 96634.3043581723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165872.54901960783,
            "unit": "ns",
            "range": "± 6637.8935945485755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1498092.857142857,
            "unit": "ns",
            "range": "± 22797.788836292344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1281937.2549019607,
            "unit": "ns",
            "range": "± 47563.92313838005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24504.081632653062,
            "unit": "ns",
            "range": "± 4493.682125475031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90479,
            "unit": "ns",
            "range": "± 20728.6523752252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54039,
            "unit": "ns",
            "range": "± 24780.01351284881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67095.95959595959,
            "unit": "ns",
            "range": "± 31583.261903865256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4553.6082474226805,
            "unit": "ns",
            "range": "± 1363.746513566434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22730.80808080808,
            "unit": "ns",
            "range": "± 4794.335023747719"
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
          "id": "7902515c01f8ecd6c9b5b2957255c0122e5237ad",
          "message": "chore: Bump packages",
          "timestamp": "2025-04-10T15:08:36+09:00",
          "tree_id": "851063420637a127bb269ca7f71f3b284e9b112f",
          "url": "https://github.com/planetarium/libplanet/commit/7902515c01f8ecd6c9b5b2957255c0122e5237ad"
        },
        "date": 1744266018200,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2990946.6666666665,
            "unit": "ns",
            "range": "± 34805.395038837356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5100795,
            "unit": "ns",
            "range": "± 108204.4724973097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4160596.5517241377,
            "unit": "ns",
            "range": "± 179872.22459535894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11100322,
            "unit": "ns",
            "range": "± 4397728.650376168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21496.875,
            "unit": "ns",
            "range": "± 1007.900339933515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4036764.285714286,
            "unit": "ns",
            "range": "± 22787.770240360784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10058107.692307692,
            "unit": "ns",
            "range": "± 123975.06107774566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21141632.75862069,
            "unit": "ns",
            "range": "± 920737.8142512973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41910294.11764706,
            "unit": "ns",
            "range": "± 1317022.974176914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82325815.38461539,
            "unit": "ns",
            "range": "± 72870.37402303085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4088650.5208333335,
            "unit": "ns",
            "range": "± 7122.589659181448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 903512.7328725961,
            "unit": "ns",
            "range": "± 4706.809747030861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 714461.9661458334,
            "unit": "ns",
            "range": "± 5497.321953419839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1711813.1911057692,
            "unit": "ns",
            "range": "± 7915.2379990612535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 436137.0540364583,
            "unit": "ns",
            "range": "± 2467.2040867067453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 391688.12430245534,
            "unit": "ns",
            "range": "± 936.8985636797797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2941207.6923076925,
            "unit": "ns",
            "range": "± 41420.736786028276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3232430.303030303,
            "unit": "ns",
            "range": "± 95717.72786704823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3993311.7647058824,
            "unit": "ns",
            "range": "± 127680.72815521531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3272625.925925926,
            "unit": "ns",
            "range": "± 90508.54015205328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3254206.0606060605,
            "unit": "ns",
            "range": "± 549325.6899475608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226475.75757575757,
            "unit": "ns",
            "range": "± 41184.1833393402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381138,
            "unit": "ns",
            "range": "± 73007.6407790391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161174.1935483871,
            "unit": "ns",
            "range": "± 4806.798500869054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1426785.3658536586,
            "unit": "ns",
            "range": "± 47233.94203840926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1231828.3783783785,
            "unit": "ns",
            "range": "± 41198.328816801506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18642.708333333332,
            "unit": "ns",
            "range": "± 4791.983322870254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79935.71428571429,
            "unit": "ns",
            "range": "± 18484.282819200915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 32201.315789473683,
            "unit": "ns",
            "range": "± 2299.651766162441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48805.102040816324,
            "unit": "ns",
            "range": "± 23950.271171006352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2734.020618556701,
            "unit": "ns",
            "range": "± 904.2592039364486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19575.757575757576,
            "unit": "ns",
            "range": "± 4420.13230269003"
          }
        ]
      }
    ]
  }
}