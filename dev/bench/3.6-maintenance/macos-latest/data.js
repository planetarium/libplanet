window.BENCHMARK_DATA = {
  "lastUpdate": 1700540951570,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b13ef3155389100c218a045fbdc3051e23e3c669",
          "message": "Merge pull request #3451 from greymistcube/release/3.6.0\n\n🚀 Release 3.6.0",
          "timestamp": "2023-10-06T18:26:22+09:00",
          "tree_id": "45b24eea1bbbdcc0b75e430f611660d011258ba1",
          "url": "https://github.com/planetarium/libplanet/commit/b13ef3155389100c218a045fbdc3051e23e3c669"
        },
        "date": 1696597938806,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7599950.346153846,
            "unit": "ns",
            "range": "± 73385.29332893858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19106718.353535354,
            "unit": "ns",
            "range": "± 1149229.9960710718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48143189.75454546,
            "unit": "ns",
            "range": "± 2028699.2659099211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91076553,
            "unit": "ns",
            "range": "± 1590954.094596384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186322447.85714287,
            "unit": "ns",
            "range": "± 2868180.208308259"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36938.77011494253,
            "unit": "ns",
            "range": "± 4947.2562508581095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218806.087628866,
            "unit": "ns",
            "range": "± 19024.801565299233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213497.83695652173,
            "unit": "ns",
            "range": "± 14224.964796323442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192213.53191489363,
            "unit": "ns",
            "range": "± 13843.402121978486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3645618.652173913,
            "unit": "ns",
            "range": "± 88413.3132902756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3401493.925,
            "unit": "ns",
            "range": "± 119913.25435088432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16472.072164948455,
            "unit": "ns",
            "range": "± 2772.9249420641204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72483.55208333333,
            "unit": "ns",
            "range": "± 12633.497009616758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74550.73711340207,
            "unit": "ns",
            "range": "± 9735.742490916733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74190.76373626373,
            "unit": "ns",
            "range": "± 11357.601160882095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5944.75,
            "unit": "ns",
            "range": "± 1309.6279825322836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16327.005376344086,
            "unit": "ns",
            "range": "± 3150.5058621546445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1168864.2577319588,
            "unit": "ns",
            "range": "± 116893.33756483928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2280880.10989011,
            "unit": "ns",
            "range": "± 127636.61053200568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612200.91,
            "unit": "ns",
            "range": "± 128575.63101910688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8004858.781609195,
            "unit": "ns",
            "range": "± 1206937.0621534172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2822630.729508197,
            "unit": "ns",
            "range": "± 124125.75909111874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2939275.5,
            "unit": "ns",
            "range": "± 106688.07222242131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3525729.3139534886,
            "unit": "ns",
            "range": "± 115467.87327862401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3505266.303030303,
            "unit": "ns",
            "range": "± 163973.05316835723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10886096.641304348,
            "unit": "ns",
            "range": "± 970153.1869841748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4704964.5071134865,
            "unit": "ns",
            "range": "± 395517.9763397973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516806.8472975127,
            "unit": "ns",
            "range": "± 125434.98843700955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 915399.5666454082,
            "unit": "ns",
            "range": "± 71805.07254729248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2278685.101859715,
            "unit": "ns",
            "range": "± 211912.92182779772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 677451.7055951287,
            "unit": "ns",
            "range": "± 13085.503292651369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 603537.9355024858,
            "unit": "ns",
            "range": "± 14523.471589531688"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e8b368b41ed36df78caf7ddb972fdd3405cb944",
          "message": "Merge pull request #3453 from greymistcube/prepare/3.6.1\n\n🔧 Prepare 3.6.1",
          "timestamp": "2023-10-10T14:52:08+09:00",
          "tree_id": "3755ab0ad6784245232eca019359e9709e05e21e",
          "url": "https://github.com/planetarium/libplanet/commit/9e8b368b41ed36df78caf7ddb972fdd3405cb944"
        },
        "date": 1696917980434,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7582148.566666666,
            "unit": "ns",
            "range": "± 110583.16629478899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18610394.85714286,
            "unit": "ns",
            "range": "± 318572.74823442113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47856521.666666664,
            "unit": "ns",
            "range": "± 1086744.3945989069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92851673.13333334,
            "unit": "ns",
            "range": "± 937944.2673990257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194117016.35714287,
            "unit": "ns",
            "range": "± 2847735.4368016054"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54030.83529411765,
            "unit": "ns",
            "range": "± 5197.9453652542425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287027.8505747126,
            "unit": "ns",
            "range": "± 14731.490989704269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279705.62637362635,
            "unit": "ns",
            "range": "± 18489.978943950726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269565.6323529412,
            "unit": "ns",
            "range": "± 12848.389329225494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3793114.1666666665,
            "unit": "ns",
            "range": "± 58647.02197172091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3400567.1428571427,
            "unit": "ns",
            "range": "± 59924.33953919552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18005.46511627907,
            "unit": "ns",
            "range": "± 2316.4641193888297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79239.40697674418,
            "unit": "ns",
            "range": "± 7074.4829707201625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71272.1046511628,
            "unit": "ns",
            "range": "± 6353.017932269892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82152.5425531915,
            "unit": "ns",
            "range": "± 9225.207714145925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4686.75,
            "unit": "ns",
            "range": "± 482.1367967751452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17604.862068965518,
            "unit": "ns",
            "range": "± 2781.3753631946847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1477816.2311827957,
            "unit": "ns",
            "range": "± 176414.5316414266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2687624.032967033,
            "unit": "ns",
            "range": "± 166703.02201556254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2315475.1627906975,
            "unit": "ns",
            "range": "± 334206.48316226725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10169629,
            "unit": "ns",
            "range": "± 452294.9710380277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3067535.5,
            "unit": "ns",
            "range": "± 101662.41947052018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3340306.1875,
            "unit": "ns",
            "range": "± 64028.134921265926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4333969.259036144,
            "unit": "ns",
            "range": "± 246300.73536765692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3915126.3333333335,
            "unit": "ns",
            "range": "± 240534.34365567256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14436409.902173912,
            "unit": "ns",
            "range": "± 1541431.8654199203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5261777.136979166,
            "unit": "ns",
            "range": "± 47158.62913256729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1578499.6820591518,
            "unit": "ns",
            "range": "± 10363.274250460227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 946916.6593098958,
            "unit": "ns",
            "range": "± 7129.20977155755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2303905.6240985575,
            "unit": "ns",
            "range": "± 15644.818397648773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 748051.8193359375,
            "unit": "ns",
            "range": "± 5033.381143725472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733010.2309244792,
            "unit": "ns",
            "range": "± 5370.1577828564405"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f06d408370bd41f1c8166ba076a4ee031adc442",
          "message": "Merge pull request #3495 from greymistcube/refactor/hash-node-caching\n\n✨ ♻️ `HashNode` caching",
          "timestamp": "2023-11-20T17:12:44+09:00",
          "tree_id": "3b29e4f3c11f13950463ba44b5d3b76ea6a30ea0",
          "url": "https://github.com/planetarium/libplanet/commit/7f06d408370bd41f1c8166ba076a4ee031adc442"
        },
        "date": 1700468779281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9272949.914893618,
            "unit": "ns",
            "range": "± 1318209.35854674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20237087.785714287,
            "unit": "ns",
            "range": "± 238678.28296657748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50104509.9375,
            "unit": "ns",
            "range": "± 1558346.0653037475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99787925.62121212,
            "unit": "ns",
            "range": "± 3081826.0966266897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200801662.39285713,
            "unit": "ns",
            "range": "± 5576183.620104334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48288.815217391304,
            "unit": "ns",
            "range": "± 8513.59136771722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241942.9842105263,
            "unit": "ns",
            "range": "± 17568.99169890627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245624.64044943822,
            "unit": "ns",
            "range": "± 22506.31165728203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213647.94736842104,
            "unit": "ns",
            "range": "± 17664.395316609505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3822500.0789473685,
            "unit": "ns",
            "range": "± 80793.7869856311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3580886.2325581396,
            "unit": "ns",
            "range": "± 131372.36451288578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19264.144444444446,
            "unit": "ns",
            "range": "± 4038.0439427271917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81910.8894736842,
            "unit": "ns",
            "range": "± 13562.663217799904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75127.31914893616,
            "unit": "ns",
            "range": "± 13213.107751426694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73512.04639175258,
            "unit": "ns",
            "range": "± 12068.879509939172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4646.214285714285,
            "unit": "ns",
            "range": "± 1075.9093995697194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17170.114583333332,
            "unit": "ns",
            "range": "± 4963.112389089377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062272.02247191,
            "unit": "ns",
            "range": "± 65862.93460043598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2369027.1627906975,
            "unit": "ns",
            "range": "± 191686.22288040302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1607827.9569892474,
            "unit": "ns",
            "range": "± 122262.17084546616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7037340.348837209,
            "unit": "ns",
            "range": "± 583452.7200877954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3056874.6,
            "unit": "ns",
            "range": "± 98400.77856793854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3155774.4482758623,
            "unit": "ns",
            "range": "± 197510.98764206318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3685132.156716418,
            "unit": "ns",
            "range": "± 174254.49749750405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3569180.989010989,
            "unit": "ns",
            "range": "± 255838.06067990634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14081018.731958764,
            "unit": "ns",
            "range": "± 2044331.5571286352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4480557.1125710225,
            "unit": "ns",
            "range": "± 101902.02920730009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1398550.3659319195,
            "unit": "ns",
            "range": "± 10515.874063228668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 869367.3221905048,
            "unit": "ns",
            "range": "± 9140.00304323741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920137.6924479166,
            "unit": "ns",
            "range": "± 19201.378985940253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608710.0998883928,
            "unit": "ns",
            "range": "± 9240.896868247286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557837.9376953125,
            "unit": "ns",
            "range": "± 6527.3024634448675"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06bc830559704f01344052cc9295020489b5a181",
          "message": "Merge pull request #3498 from greymistcube/chore/yarn-build-fix-workaround\n\n🐛 Temporary workaround to `yarn build` fail",
          "timestamp": "2023-11-20T17:54:39+09:00",
          "tree_id": "df46edf8e34f5eb1938dcefa05ebda9b68e761dd",
          "url": "https://github.com/planetarium/libplanet/commit/06bc830559704f01344052cc9295020489b5a181"
        },
        "date": 1700471587706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9168171.326530613,
            "unit": "ns",
            "range": "± 573727.2313695145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21942815.83076923,
            "unit": "ns",
            "range": "± 1023324.4688634711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56254887.42,
            "unit": "ns",
            "range": "± 2243275.199942061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112798344.08490565,
            "unit": "ns",
            "range": "± 4633904.224203174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213977625.94871795,
            "unit": "ns",
            "range": "± 6742459.961944851"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68672.24468085106,
            "unit": "ns",
            "range": "± 9840.005707376798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336633.1935483871,
            "unit": "ns",
            "range": "± 34611.45559488816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309408.3157894737,
            "unit": "ns",
            "range": "± 38598.054740219784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292295.72222222225,
            "unit": "ns",
            "range": "± 11071.816940258084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4057185.6964285714,
            "unit": "ns",
            "range": "± 167335.86468036176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3720964.6923076925,
            "unit": "ns",
            "range": "± 42773.48333057256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23000.604166666668,
            "unit": "ns",
            "range": "± 4973.841572570954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107727.05263157895,
            "unit": "ns",
            "range": "± 18288.35713999973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122617.33695652174,
            "unit": "ns",
            "range": "± 19509.050572691896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111799.92631578947,
            "unit": "ns",
            "range": "± 24411.773821924755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4910.6720430107525,
            "unit": "ns",
            "range": "± 626.0557799786644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16966.962365591397,
            "unit": "ns",
            "range": "± 1533.557398587972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407542.8645833333,
            "unit": "ns",
            "range": "± 117662.35001747204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2777515.1285714284,
            "unit": "ns",
            "range": "± 129916.04235499991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2215417,
            "unit": "ns",
            "range": "± 203915.49328992504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9063189.197530864,
            "unit": "ns",
            "range": "± 472788.49742150615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3415009.4791666665,
            "unit": "ns",
            "range": "± 355421.3078627726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3639123.957894737,
            "unit": "ns",
            "range": "± 359159.750690411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4339535.691358024,
            "unit": "ns",
            "range": "± 220176.58187887754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4378932.6122448975,
            "unit": "ns",
            "range": "± 433446.4990997297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18564118.05319149,
            "unit": "ns",
            "range": "± 2645268.0171762854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5788577.061604817,
            "unit": "ns",
            "range": "± 330824.4401762732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1689966.431919643,
            "unit": "ns",
            "range": "± 40081.33961045888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062222.3083496094,
            "unit": "ns",
            "range": "± 20065.165916028607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3002007.5837890627,
            "unit": "ns",
            "range": "± 67958.15646996512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847517.042578125,
            "unit": "ns",
            "range": "± 15482.067964145399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773300.5520019531,
            "unit": "ns",
            "range": "± 17203.339228815024"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "83f829b962629a185c33bb1dabd673e5aa53ecc7",
          "message": "Merge pull request #3497 from greymistcube/release/3.6.1\n\n🚀 Release 3.6.1",
          "timestamp": "2023-11-20T18:45:56+09:00",
          "tree_id": "0f121f06ff347e4e00129374b3f23d10cb7186fd",
          "url": "https://github.com/planetarium/libplanet/commit/83f829b962629a185c33bb1dabd673e5aa53ecc7"
        },
        "date": 1700474662820,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8041176,
            "unit": "ns",
            "range": "± 153195.5033917989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20346878.65,
            "unit": "ns",
            "range": "± 458312.8090960394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50330846.868421055,
            "unit": "ns",
            "range": "± 1001957.5679957827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112604193.66666667,
            "unit": "ns",
            "range": "± 2269422.68451809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216648528.75,
            "unit": "ns",
            "range": "± 2587078.611000205"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70342.28571428571,
            "unit": "ns",
            "range": "± 11444.89036138516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304001.5894736842,
            "unit": "ns",
            "range": "± 18763.58437125846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317192.0714285714,
            "unit": "ns",
            "range": "± 35742.98742735362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303838.46470588236,
            "unit": "ns",
            "range": "± 20740.420427528567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242081.90625,
            "unit": "ns",
            "range": "± 311052.6665468855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3705626.238095238,
            "unit": "ns",
            "range": "± 197888.89313235204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22589.072916666668,
            "unit": "ns",
            "range": "± 5890.275604748079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115916.44736842105,
            "unit": "ns",
            "range": "± 22749.105593532928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112130.4247311828,
            "unit": "ns",
            "range": "± 14964.477513240246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116698.91489361702,
            "unit": "ns",
            "range": "± 19199.049051500606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8313.704081632653,
            "unit": "ns",
            "range": "± 1397.945172509993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23213.077777777777,
            "unit": "ns",
            "range": "± 3625.1734773764483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435049.96,
            "unit": "ns",
            "range": "± 179782.6423393077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2801505.211340206,
            "unit": "ns",
            "range": "± 188143.369521809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2141697.387755102,
            "unit": "ns",
            "range": "± 182118.63824796025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8400218.285714285,
            "unit": "ns",
            "range": "± 239652.50898530646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3272926.49,
            "unit": "ns",
            "range": "± 221227.05652354233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3403113.24,
            "unit": "ns",
            "range": "± 220133.3170656722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4418557.505494505,
            "unit": "ns",
            "range": "± 247045.1747747261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4270376.414141414,
            "unit": "ns",
            "range": "± 339288.852503953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18184676.68,
            "unit": "ns",
            "range": "± 2453132.7353235907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5349030.705357143,
            "unit": "ns",
            "range": "± 97079.7306241006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1751052.081278238,
            "unit": "ns",
            "range": "± 92577.66422228687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091952.3994791666,
            "unit": "ns",
            "range": "± 18405.198586657923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2871075.504206731,
            "unit": "ns",
            "range": "± 40190.84540874237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811879.9322916666,
            "unit": "ns",
            "range": "± 10429.01113534905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 840049.089704241,
            "unit": "ns",
            "range": "± 14324.616059029375"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1da500876fda9bba8003f4a72e6ed4c21c53ada5",
          "message": "Merge pull request #3499 from greymistcube/prepare/3.6.2\n\n🔧 Prepare 3.6.2",
          "timestamp": "2023-11-20T18:57:08+09:00",
          "tree_id": "1a049c226a0684bcc3f69f0003f0d7a1bb370460",
          "url": "https://github.com/planetarium/libplanet/commit/1da500876fda9bba8003f4a72e6ed4c21c53ada5"
        },
        "date": 1700475203495,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9496181.833333334,
            "unit": "ns",
            "range": "± 54738.15884709401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24301735.898876406,
            "unit": "ns",
            "range": "± 1952505.2434243762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51488492.39285714,
            "unit": "ns",
            "range": "± 1461582.504251555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103582178.53448276,
            "unit": "ns",
            "range": "± 4279492.865266977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212975870.74117646,
            "unit": "ns",
            "range": "± 15671591.83192768"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65286.895833333336,
            "unit": "ns",
            "range": "± 18671.88675070467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250130.8924731183,
            "unit": "ns",
            "range": "± 22108.383603364804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242377.00537634408,
            "unit": "ns",
            "range": "± 32530.165868415133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230390.88775510204,
            "unit": "ns",
            "range": "± 34302.60233429523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4065101.488095238,
            "unit": "ns",
            "range": "± 276261.27366882307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3796831.2967032967,
            "unit": "ns",
            "range": "± 211418.63173179494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18273.355670103094,
            "unit": "ns",
            "range": "± 3577.0931197391583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78316.91111111111,
            "unit": "ns",
            "range": "± 14652.894699364413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76002.47959183673,
            "unit": "ns",
            "range": "± 15736.207163623847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73171.3085106383,
            "unit": "ns",
            "range": "± 9334.996075327423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5432.121052631579,
            "unit": "ns",
            "range": "± 1515.7852622499665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14921,
            "unit": "ns",
            "range": "± 2060.788819394053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1821885.303030303,
            "unit": "ns",
            "range": "± 539291.3361176313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3562426.625,
            "unit": "ns",
            "range": "± 958243.1857760848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2399246.1666666665,
            "unit": "ns",
            "range": "± 652256.6089257988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10486527.731958764,
            "unit": "ns",
            "range": "± 2463915.045993822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2975325.382352941,
            "unit": "ns",
            "range": "± 141943.44029341135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3233209.8842105265,
            "unit": "ns",
            "range": "± 239893.3123363367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3667898.5625,
            "unit": "ns",
            "range": "± 172363.20533773978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3539578.0588235296,
            "unit": "ns",
            "range": "± 71043.77762203263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14110673.360215053,
            "unit": "ns",
            "range": "± 2000695.7028765758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4471691.124441965,
            "unit": "ns",
            "range": "± 73800.92354258065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1362567.0383029515,
            "unit": "ns",
            "range": "± 56702.7473351152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 852026.0408854167,
            "unit": "ns",
            "range": "± 15006.673067151394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948311.8685661764,
            "unit": "ns",
            "range": "± 38981.44140748396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612108.558203125,
            "unit": "ns",
            "range": "± 6629.732236825377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568208.7689302885,
            "unit": "ns",
            "range": "± 5611.796099975941"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a979efb24353156624445e79f7bb50b6ee799f31",
          "message": "Merge pull request #3501 from greymistcube/fix/release\n\n🔧 Fix release",
          "timestamp": "2023-11-20T20:56:40+09:00",
          "tree_id": "69a7248c31c7f108ea18b3dde4f848df24bca099",
          "url": "https://github.com/planetarium/libplanet/commit/a979efb24353156624445e79f7bb50b6ee799f31"
        },
        "date": 1700482572402,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9321975.417582417,
            "unit": "ns",
            "range": "± 1358875.7064921563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19844410.153846152,
            "unit": "ns",
            "range": "± 233977.34959245028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47986610.55555555,
            "unit": "ns",
            "range": "± 1016373.4792354786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99176880.09523809,
            "unit": "ns",
            "range": "± 2233776.171720947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207989663.26666668,
            "unit": "ns",
            "range": "± 3097578.6030812254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54895.75,
            "unit": "ns",
            "range": "± 11374.319542865778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255225.38202247192,
            "unit": "ns",
            "range": "± 25502.739088409533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248895.42857142858,
            "unit": "ns",
            "range": "± 13542.649601750772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244615.53968253967,
            "unit": "ns",
            "range": "± 11006.527466250896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3906491.4210526315,
            "unit": "ns",
            "range": "± 86736.46160468938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3471788.1923076925,
            "unit": "ns",
            "range": "± 41609.23373360096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16798.287234042553,
            "unit": "ns",
            "range": "± 2769.826560395792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76791.1105263158,
            "unit": "ns",
            "range": "± 12098.564886140146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79498.66315789474,
            "unit": "ns",
            "range": "± 11713.241174905457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77109.86666666667,
            "unit": "ns",
            "range": "± 9876.290479126761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6268.063829787234,
            "unit": "ns",
            "range": "± 1874.0055459375055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18160.396907216495,
            "unit": "ns",
            "range": "± 5124.49964729187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1121861.9680851065,
            "unit": "ns",
            "range": "± 96440.10492834591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2332162.9886363638,
            "unit": "ns",
            "range": "± 160180.60651483262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1643356.456521739,
            "unit": "ns",
            "range": "± 197973.41569330165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7149003.886363637,
            "unit": "ns",
            "range": "± 648969.0406481498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3145750.1923076925,
            "unit": "ns",
            "range": "± 52266.03210082149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3155976.339285714,
            "unit": "ns",
            "range": "± 125528.29989691592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3742973.4444444445,
            "unit": "ns",
            "range": "± 123526.58988838788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3637705.3695652173,
            "unit": "ns",
            "range": "± 172959.9671992229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14742859.36516854,
            "unit": "ns",
            "range": "± 3141446.6956271343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4485722.328304598,
            "unit": "ns",
            "range": "± 231331.16255041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1340522.781640625,
            "unit": "ns",
            "range": "± 10338.049387223307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 863641.7948467548,
            "unit": "ns",
            "range": "± 4732.605723507208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2073948.3319196429,
            "unit": "ns",
            "range": "± 66385.24352916647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630817.019670759,
            "unit": "ns",
            "range": "± 5769.50568749428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 602784.2276785715,
            "unit": "ns",
            "range": "± 7215.083758672556"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a27f4c51533ea4fb42c312f89fa912ad45c8a5d",
          "message": "Merge pull request #3502 from greymistcube/revert/prepare/3.6.1\n\n⏪ Revert \"Prepare 3.6.2\"",
          "timestamp": "2023-11-20T21:07:48+09:00",
          "tree_id": "05387f165cf02d173e9e04590549dee77618644e",
          "url": "https://github.com/planetarium/libplanet/commit/1a27f4c51533ea4fb42c312f89fa912ad45c8a5d"
        },
        "date": 1700483712300,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10132452.708333334,
            "unit": "ns",
            "range": "± 259650.92137496403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31363728.930107526,
            "unit": "ns",
            "range": "± 5944965.136072604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 81197104.02083333,
            "unit": "ns",
            "range": "± 12822681.899591086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 177082163.1827957,
            "unit": "ns",
            "range": "± 22923926.38942087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 410780883.7526316,
            "unit": "ns",
            "range": "± 83610368.07051046"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 91200.29896907216,
            "unit": "ns",
            "range": "± 24575.86221960014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360218.44086021505,
            "unit": "ns",
            "range": "± 80165.35630406614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 390687.1288659794,
            "unit": "ns",
            "range": "± 100080.6755094275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 369656.3367346939,
            "unit": "ns",
            "range": "± 87411.79158215405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5821383.03125,
            "unit": "ns",
            "range": "± 1047798.9130958379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5953068.0612244895,
            "unit": "ns",
            "range": "± 1223969.7957614437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29496.947368421053,
            "unit": "ns",
            "range": "± 5123.3043139115925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128428.33333333333,
            "unit": "ns",
            "range": "± 26602.7734856692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112235.37634408602,
            "unit": "ns",
            "range": "± 19192.991083655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102104.47894736842,
            "unit": "ns",
            "range": "± 18777.118333611408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6825.244680851064,
            "unit": "ns",
            "range": "± 1359.256918170755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22284.166666666668,
            "unit": "ns",
            "range": "± 3677.894137934788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1764922.2626262626,
            "unit": "ns",
            "range": "± 434569.78177183005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4364687.46875,
            "unit": "ns",
            "range": "± 1047317.4561708133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2153676.138554217,
            "unit": "ns",
            "range": "± 255904.91677853462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12011250.463157894,
            "unit": "ns",
            "range": "± 3283547.0401191562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4648290.967391305,
            "unit": "ns",
            "range": "± 996983.3819823784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5077425.331578948,
            "unit": "ns",
            "range": "± 1174946.3831821708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6136491.580808081,
            "unit": "ns",
            "range": "± 1433313.589588003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6370059.455555555,
            "unit": "ns",
            "range": "± 1620973.5104344685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23124634.758241758,
            "unit": "ns",
            "range": "± 4982248.9892719425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5809887.280330882,
            "unit": "ns",
            "range": "± 312100.00982298853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1673185.5850423176,
            "unit": "ns",
            "range": "± 43475.670240865635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1104571.6882752094,
            "unit": "ns",
            "range": "± 157235.58550157334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2061368.198404948,
            "unit": "ns",
            "range": "± 52025.07800856124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 727398.0843652344,
            "unit": "ns",
            "range": "± 84615.1971847025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579567.0537109375,
            "unit": "ns",
            "range": "± 9947.776730415988"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f66f7ca4ef89f57045b849e6a63e92a61deec7c",
          "message": "Merge pull request #3504 from greymistcube/prepare/3.6.2\n\n🔧 Prepare 3.6.2",
          "timestamp": "2023-11-20T23:22:43+09:00",
          "tree_id": "69a7248c31c7f108ea18b3dde4f848df24bca099",
          "url": "https://github.com/planetarium/libplanet/commit/1f66f7ca4ef89f57045b849e6a63e92a61deec7c"
        },
        "date": 1700491778618,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14082323.752747253,
            "unit": "ns",
            "range": "± 2395620.8108777963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27260098.48989899,
            "unit": "ns",
            "range": "± 3416325.764179625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 77174773.28723404,
            "unit": "ns",
            "range": "± 11105775.571340766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104122342.06521739,
            "unit": "ns",
            "range": "± 9439562.24195108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269367302.87234044,
            "unit": "ns",
            "range": "± 37289152.10338159"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69971.88421052632,
            "unit": "ns",
            "range": "± 19810.18898105653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270167.86363636365,
            "unit": "ns",
            "range": "± 28131.98555748383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254685.23863636365,
            "unit": "ns",
            "range": "± 19783.837444599874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235933.22988505746,
            "unit": "ns",
            "range": "± 19289.546205315546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4207646.730769231,
            "unit": "ns",
            "range": "± 321971.8568040476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3966545.8,
            "unit": "ns",
            "range": "± 148721.96711047462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18403.440860215054,
            "unit": "ns",
            "range": "± 3909.109982832091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82416.73958333333,
            "unit": "ns",
            "range": "± 12244.025163529905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86019.54347826086,
            "unit": "ns",
            "range": "± 14491.18871606751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78801.16129032258,
            "unit": "ns",
            "range": "± 12657.267428919284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5621.757894736842,
            "unit": "ns",
            "range": "± 1447.1766843254127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18110.711340206184,
            "unit": "ns",
            "range": "± 4974.061555038052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1963660.0106382978,
            "unit": "ns",
            "range": "± 567689.6204442952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3791729.5206185565,
            "unit": "ns",
            "range": "± 1001534.2328060253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2564797.647368421,
            "unit": "ns",
            "range": "± 667953.746342482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11160672.021276595,
            "unit": "ns",
            "range": "± 3101088.1478994093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3399740.6516853934,
            "unit": "ns",
            "range": "± 222110.2744463629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3259119.957894737,
            "unit": "ns",
            "range": "± 309808.15669879416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3835443.5967741935,
            "unit": "ns",
            "range": "± 287059.1748079761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3785564.5319148935,
            "unit": "ns",
            "range": "± 299829.3489474499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15198355.74742268,
            "unit": "ns",
            "range": "± 2552822.521107764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6217571.138392857,
            "unit": "ns",
            "range": "± 1033106.8158589731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1595986.9965015454,
            "unit": "ns",
            "range": "± 194941.54763917386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 890937.9774902344,
            "unit": "ns",
            "range": "± 55624.83161202243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2016648.4074707031,
            "unit": "ns",
            "range": "± 39210.091100474674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625558.415625,
            "unit": "ns",
            "range": "± 7808.0156439690245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 660511.2409319197,
            "unit": "ns",
            "range": "± 48992.529495348186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c305b8c6f6f47d6b3d18a35c61469a712f098ce3",
          "message": "Merge pull request #3506 from greymistcube/refactor/more-relaxed-consensus-timeout\n\n🔧 Changed default ContextTimeoutOption values",
          "timestamp": "2023-11-21T11:10:29+09:00",
          "tree_id": "908ad05338b32cbef2dc639356fde4e5274669a1",
          "url": "https://github.com/planetarium/libplanet/commit/c305b8c6f6f47d6b3d18a35c61469a712f098ce3"
        },
        "date": 1700533663519,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7747964.954545454,
            "unit": "ns",
            "range": "± 158111.2528234553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19536125.611111112,
            "unit": "ns",
            "range": "± 639704.2040049572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49574995.13559322,
            "unit": "ns",
            "range": "± 2181335.600946012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99195387.28767124,
            "unit": "ns",
            "range": "± 4922175.177733973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200296206.81578946,
            "unit": "ns",
            "range": "± 10192338.832038732"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53651.5206185567,
            "unit": "ns",
            "range": "± 15376.68271955638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226867.35416666666,
            "unit": "ns",
            "range": "± 24068.006907611285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218311.3510638298,
            "unit": "ns",
            "range": "± 14675.695437503251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234748.75510204083,
            "unit": "ns",
            "range": "± 23096.41720957578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4340698,
            "unit": "ns",
            "range": "± 274533.971082633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3486477.52,
            "unit": "ns",
            "range": "± 83464.17472091444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12741.647727272728,
            "unit": "ns",
            "range": "± 1512.68046355546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65895.61458333333,
            "unit": "ns",
            "range": "± 8703.570853233676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67962.74489795919,
            "unit": "ns",
            "range": "± 15931.316342938773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67417.30208333333,
            "unit": "ns",
            "range": "± 14782.076177174338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3409.887640449438,
            "unit": "ns",
            "range": "± 519.4541592821311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11992.677777777777,
            "unit": "ns",
            "range": "± 1251.4200188368284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1211816.4791666667,
            "unit": "ns",
            "range": "± 133033.59001268333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2758932.654761905,
            "unit": "ns",
            "range": "± 364183.16108632914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1797574.206521739,
            "unit": "ns",
            "range": "± 211627.5461956242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9516473.314606741,
            "unit": "ns",
            "range": "± 3119510.3688511746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2887116.4444444445,
            "unit": "ns",
            "range": "± 78462.10954797194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2984480.3333333335,
            "unit": "ns",
            "range": "± 76655.07772152315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3566118.25,
            "unit": "ns",
            "range": "± 109228.78988027688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3377819.3028169014,
            "unit": "ns",
            "range": "± 165582.71923427793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12770455.09375,
            "unit": "ns",
            "range": "± 2056668.4296967715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4268346.82319079,
            "unit": "ns",
            "range": "± 91923.44692955172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1285217.6407552084,
            "unit": "ns",
            "range": "± 20179.54407162555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 856716.4884765625,
            "unit": "ns",
            "range": "± 13813.527301565111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2058714.2071814905,
            "unit": "ns",
            "range": "± 83757.96403531691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641198.1506696428,
            "unit": "ns",
            "range": "± 13337.809557770614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 637020.7950470754,
            "unit": "ns",
            "range": "± 21783.329073087414"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f043a08169578303cd2bb49c738127459c56051a",
          "message": "Merge pull request #3507 from greymistcube/release/3.6.2\n\n🚀 Release 3.6.2",
          "timestamp": "2023-11-21T11:18:52+09:00",
          "tree_id": "b3f337e651b4db2e3f6f4aee02b43a29cc8f980a",
          "url": "https://github.com/planetarium/libplanet/commit/f043a08169578303cd2bb49c738127459c56051a"
        },
        "date": 1700534355131,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8748287.949494949,
            "unit": "ns",
            "range": "± 926627.7233170077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19987307.25882353,
            "unit": "ns",
            "range": "± 1076180.0443359523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53648472.14893617,
            "unit": "ns",
            "range": "± 5097646.04066757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118710170.29545455,
            "unit": "ns",
            "range": "± 7862309.160449777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232131575.01075268,
            "unit": "ns",
            "range": "± 20288006.33162839"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52114.13736263736,
            "unit": "ns",
            "range": "± 9748.57730761717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277200.4659090909,
            "unit": "ns",
            "range": "± 28383.16864644639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258974.414893617,
            "unit": "ns",
            "range": "± 23146.83219340075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247655.32258064515,
            "unit": "ns",
            "range": "± 14577.596331626628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4472825.192307692,
            "unit": "ns",
            "range": "± 121746.08697507092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4046637.25,
            "unit": "ns",
            "range": "± 37920.4824387344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17237.678947368422,
            "unit": "ns",
            "range": "± 1998.6054924485945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78579.31818181818,
            "unit": "ns",
            "range": "± 9779.262156951223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75748.16666666667,
            "unit": "ns",
            "range": "± 7312.746309182081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77215.58064516129,
            "unit": "ns",
            "range": "± 9807.46563274363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4860.645833333333,
            "unit": "ns",
            "range": "± 1021.7810454420074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18119.878787878788,
            "unit": "ns",
            "range": "± 3844.994459465575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437894.8953488371,
            "unit": "ns",
            "range": "± 136703.59918634433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3032896.9438202246,
            "unit": "ns",
            "range": "± 388577.04689594294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2032360.788888889,
            "unit": "ns",
            "range": "± 261786.8164257431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7757091.966666667,
            "unit": "ns",
            "range": "± 670092.1876460706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3287674.744680851,
            "unit": "ns",
            "range": "± 218983.47625279104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3296235.9827586208,
            "unit": "ns",
            "range": "± 209624.46722445433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4489379.379120879,
            "unit": "ns",
            "range": "± 251824.631057269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4199038.44680851,
            "unit": "ns",
            "range": "± 434183.35740234127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15487577.55263158,
            "unit": "ns",
            "range": "± 2637111.8332472173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4414135.972995924,
            "unit": "ns",
            "range": "± 89421.76872188217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1348112.8325639204,
            "unit": "ns",
            "range": "± 68841.7243876424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 854114.529703776,
            "unit": "ns",
            "range": "± 18178.488028787622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981498.3338216145,
            "unit": "ns",
            "range": "± 24158.349213368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 718094.2074707032,
            "unit": "ns",
            "range": "± 74084.98252728554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 607303.2025299072,
            "unit": "ns",
            "range": "± 28093.06794135352"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c266590403b5b01de3d1f4e5d64953e25a4f967",
          "message": "Merge pull request #3508 from greymistcube/prepare/3.6.3\n\n🔧 Prepare 3.6.3",
          "timestamp": "2023-11-21T13:07:02+09:00",
          "tree_id": "bd6e4b1ea8d66955ebd09d534ee5832113ea0f64",
          "url": "https://github.com/planetarium/libplanet/commit/1c266590403b5b01de3d1f4e5d64953e25a4f967"
        },
        "date": 1700540861070,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7747920.8,
            "unit": "ns",
            "range": "± 142805.76698799166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18898728.55882353,
            "unit": "ns",
            "range": "± 382538.11260733724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47818383.25373134,
            "unit": "ns",
            "range": "± 2249232.7094254014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92622454.38461539,
            "unit": "ns",
            "range": "± 1019682.9415054743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187798437.57142857,
            "unit": "ns",
            "range": "± 2094927.2994351585"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35299.2,
            "unit": "ns",
            "range": "± 2730.774623226373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312831.021978022,
            "unit": "ns",
            "range": "± 36265.92514376056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276996.47872340423,
            "unit": "ns",
            "range": "± 30261.447009205298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208899.88541666666,
            "unit": "ns",
            "range": "± 29393.446149518215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3749593.6666666665,
            "unit": "ns",
            "range": "± 93722.0213882599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4202829.6122448975,
            "unit": "ns",
            "range": "± 267132.1798559188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17930.136842105265,
            "unit": "ns",
            "range": "± 3052.2478727684797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74963.43103448275,
            "unit": "ns",
            "range": "± 5543.566253698239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80659.27368421052,
            "unit": "ns",
            "range": "± 8635.395752172595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83441.14893617021,
            "unit": "ns",
            "range": "± 13101.680293581197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6093.156565656565,
            "unit": "ns",
            "range": "± 1227.5789941880555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19185.936170212764,
            "unit": "ns",
            "range": "± 3604.012348291087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1041528.6947368421,
            "unit": "ns",
            "range": "± 73726.63852916445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2278861.3125,
            "unit": "ns",
            "range": "± 166388.0874384887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1504407.141304348,
            "unit": "ns",
            "range": "± 104260.39649717935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6101164.564102564,
            "unit": "ns",
            "range": "± 212808.61468091526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2885079.8076923075,
            "unit": "ns",
            "range": "± 73620.7675249419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3008625.688311688,
            "unit": "ns",
            "range": "± 153320.3844981636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3558365.78125,
            "unit": "ns",
            "range": "± 107463.21260356791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3444356.9,
            "unit": "ns",
            "range": "± 101898.66665174499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14777261.114583334,
            "unit": "ns",
            "range": "± 3189030.4652713826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4497353.260099085,
            "unit": "ns",
            "range": "± 228660.3235634181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502750.9075195312,
            "unit": "ns",
            "range": "± 141371.70491557763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1078323.7772460938,
            "unit": "ns",
            "range": "± 37650.89263801379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2868817.1330955615,
            "unit": "ns",
            "range": "± 131991.74949751928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822916.5674438477,
            "unit": "ns",
            "range": "± 25105.878334342386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731329.4828082074,
            "unit": "ns",
            "range": "± 61871.88488263374"
          }
        ]
      }
    ]
  }
}