window.BENCHMARK_DATA = {
  "lastUpdate": 1722330265201,
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
          "id": "210708fbd38c9f1ba564240becc80e38a099d224",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-5.2.1",
          "timestamp": "2024-07-30T17:37:26+09:00",
          "tree_id": "2da14b4d3ce21e018af2e714e4d069176d30fb52",
          "url": "https://github.com/planetarium/libplanet/commit/210708fbd38c9f1ba564240becc80e38a099d224"
        },
        "date": 1722329175882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10813609.307692308,
            "unit": "ns",
            "range": "± 123350.07503063831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26500417.07142857,
            "unit": "ns",
            "range": "± 101756.85624487748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67501255.85714285,
            "unit": "ns",
            "range": "± 195203.8329886942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135328186.46666667,
            "unit": "ns",
            "range": "± 315462.75764385675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271938256.2692308,
            "unit": "ns",
            "range": "± 219873.72895981075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13810.954545454546,
            "unit": "ns",
            "range": "± 435.02371278105994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109619.73809523809,
            "unit": "ns",
            "range": "± 3939.079699746171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105720.58490566038,
            "unit": "ns",
            "range": "± 4373.079932223276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92984.15,
            "unit": "ns",
            "range": "± 3258.525421972495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3017741.7422680412,
            "unit": "ns",
            "range": "± 188013.9713873944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2800606.1938775512,
            "unit": "ns",
            "range": "± 164872.04429806728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4929.581395348837,
            "unit": "ns",
            "range": "± 434.0896211373944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26140.494252873563,
            "unit": "ns",
            "range": "± 1462.1679736289266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22504.3661971831,
            "unit": "ns",
            "range": "± 1098.4436813632099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30099.884210526317,
            "unit": "ns",
            "range": "± 4985.003264821394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1165.2307692307693,
            "unit": "ns",
            "range": "± 198.49215360496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4779.829787234043,
            "unit": "ns",
            "range": "± 515.9373896810755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 690666.7555555556,
            "unit": "ns",
            "range": "± 49722.320421033604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1284612.5238095238,
            "unit": "ns",
            "range": "± 44262.61522766252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1076812.536231884,
            "unit": "ns",
            "range": "± 51882.36594609107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9506448.81,
            "unit": "ns",
            "range": "± 1435902.809386603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2171347.4137931033,
            "unit": "ns",
            "range": "± 62061.00034788194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2320121.896551724,
            "unit": "ns",
            "range": "± 67953.77247508823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2597819.794117647,
            "unit": "ns",
            "range": "± 70444.48340124618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2305109.476190476,
            "unit": "ns",
            "range": "± 54435.75433538057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2990129.1875,
            "unit": "ns",
            "range": "± 130913.44384864945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2992254.358816964,
            "unit": "ns",
            "range": "± 48087.19426320232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925456.9504557292,
            "unit": "ns",
            "range": "± 6731.808853156881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616624.8921875,
            "unit": "ns",
            "range": "± 4375.491071913928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1642148.6240234375,
            "unit": "ns",
            "range": "± 10099.524618251362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 473017.58619791665,
            "unit": "ns",
            "range": "± 678.5800904888499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429911.89251302084,
            "unit": "ns",
            "range": "± 1169.5028294837055"
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
          "id": "cd73440f685a906e6fb1cd683e65323381231f66",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-5.2.1",
          "timestamp": "2024-07-30T17:38:54+09:00",
          "tree_id": "f1286f61ec1d31e86157086eb19a9aa7d15be065",
          "url": "https://github.com/planetarium/libplanet/commit/cd73440f685a906e6fb1cd683e65323381231f66"
        },
        "date": 1722329665693,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10841479.583333334,
            "unit": "ns",
            "range": "± 81548.52826547608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26800023.633333333,
            "unit": "ns",
            "range": "± 139754.52369620235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67469572.53333333,
            "unit": "ns",
            "range": "± 68391.38531681005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135915546.5,
            "unit": "ns",
            "range": "± 163471.19669786887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272376220.5,
            "unit": "ns",
            "range": "± 342325.6895119145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13989.85,
            "unit": "ns",
            "range": "± 313.6290593074967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111270.82142857143,
            "unit": "ns",
            "range": "± 4635.107589639368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106343.79310344828,
            "unit": "ns",
            "range": "± 4616.700928716821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90467.5,
            "unit": "ns",
            "range": "± 1935.8539383404511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3049730.224719101,
            "unit": "ns",
            "range": "± 167404.91439272414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2783907.2021276597,
            "unit": "ns",
            "range": "± 157787.2182319874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5487.784946236559,
            "unit": "ns",
            "range": "± 681.733593406997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26248.3,
            "unit": "ns",
            "range": "± 1573.6036467543697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22467.662790697676,
            "unit": "ns",
            "range": "± 1221.5001154363201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29575.91935483871,
            "unit": "ns",
            "range": "± 5417.596339149784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1218.0537634408602,
            "unit": "ns",
            "range": "± 170.39489719800105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4832.252747252747,
            "unit": "ns",
            "range": "± 598.9600912953974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 688049.5731707317,
            "unit": "ns",
            "range": "± 33324.07993479719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1285049.4615384615,
            "unit": "ns",
            "range": "± 44687.42541420122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1077285.9571428571,
            "unit": "ns",
            "range": "± 52250.63261150514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9510219.93,
            "unit": "ns",
            "range": "± 1504331.7850039923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2184428.3777777776,
            "unit": "ns",
            "range": "± 77453.0953194163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2280936.3214285714,
            "unit": "ns",
            "range": "± 65272.98362464541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2591705.6875,
            "unit": "ns",
            "range": "± 48504.76133634546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2298358.6052631577,
            "unit": "ns",
            "range": "± 41947.936952177515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2914249.1285714284,
            "unit": "ns",
            "range": "± 139933.79556133188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3041127.2993489583,
            "unit": "ns",
            "range": "± 46862.107211679475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917519.7513020834,
            "unit": "ns",
            "range": "± 4947.687078180968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614222.5266276042,
            "unit": "ns",
            "range": "± 4158.6772654569695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1631496.447544643,
            "unit": "ns",
            "range": "± 9845.661599636547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 454779.8546223958,
            "unit": "ns",
            "range": "± 631.7692405055025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418984.6095703125,
            "unit": "ns",
            "range": "± 919.0430682362486"
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
          "id": "2ea68031fbd29cdfeb30980dbcd0332990a3ea74",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-5.2.1",
          "timestamp": "2024-07-30T17:41:36+09:00",
          "tree_id": "f1286f61ec1d31e86157086eb19a9aa7d15be065",
          "url": "https://github.com/planetarium/libplanet/commit/2ea68031fbd29cdfeb30980dbcd0332990a3ea74"
        },
        "date": 1722330208039,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10812306.083333334,
            "unit": "ns",
            "range": "± 78848.83828562361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26352753.285714287,
            "unit": "ns",
            "range": "± 151934.379456005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67603324.6,
            "unit": "ns",
            "range": "± 133946.72362803697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135665902.2857143,
            "unit": "ns",
            "range": "± 151696.67838076825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272551978,
            "unit": "ns",
            "range": "± 399221.40348612145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14131.285714285714,
            "unit": "ns",
            "range": "± 243.60290151468564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110169.73684210527,
            "unit": "ns",
            "range": "± 3338.938402936774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104773.3396226415,
            "unit": "ns",
            "range": "± 4364.336943839396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90684.5625,
            "unit": "ns",
            "range": "± 2742.3061632031418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3004365.095744681,
            "unit": "ns",
            "range": "± 171031.92673431794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2770458.1875,
            "unit": "ns",
            "range": "± 144800.43657472247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4999.693548387097,
            "unit": "ns",
            "range": "± 530.2454570673218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26860.637362637364,
            "unit": "ns",
            "range": "± 1651.9800073883293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22325.51282051282,
            "unit": "ns",
            "range": "± 777.5580151580796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29902.126315789475,
            "unit": "ns",
            "range": "± 5678.107244275297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1151.4130434782608,
            "unit": "ns",
            "range": "± 253.69533307847882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5277.054347826087,
            "unit": "ns",
            "range": "± 704.7783279296763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 684862.6849315069,
            "unit": "ns",
            "range": "± 26008.392695583603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1297723.2,
            "unit": "ns",
            "range": "± 37862.51395227484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1086474.4696969697,
            "unit": "ns",
            "range": "± 50822.11018784267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9662933.76,
            "unit": "ns",
            "range": "± 1440029.8297111245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2256863.466666667,
            "unit": "ns",
            "range": "± 39872.47136786172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2255484.153846154,
            "unit": "ns",
            "range": "± 28776.02944247797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2555436.230769231,
            "unit": "ns",
            "range": "± 27368.11891341775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2307607.9166666665,
            "unit": "ns",
            "range": "± 35428.65171647052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3208800.46,
            "unit": "ns",
            "range": "± 295299.7705155111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3017212.03125,
            "unit": "ns",
            "range": "± 60922.26461964895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922205.27578125,
            "unit": "ns",
            "range": "± 4099.617563823168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616165.9427083334,
            "unit": "ns",
            "range": "± 5466.455433386933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1628881.7266927084,
            "unit": "ns",
            "range": "± 12731.473843547938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465286.87897135416,
            "unit": "ns",
            "range": "± 774.2291767835766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421508.2675030048,
            "unit": "ns",
            "range": "± 455.71978691020115"
          }
        ]
      }
    ]
  }
}