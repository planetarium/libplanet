window.BENCHMARK_DATA = {
  "lastUpdate": 1698646152901,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "330ff7bca7b03ca2c22a8f58155b38dfb937453f",
          "message": "Revert \"fix import mjs to require cjs (#3459)\"\n\nThis reverts commit a5937c2b2a851d33743b66c34d0f38cb4551f544.",
          "timestamp": "2023-10-27T10:47:58+09:00",
          "tree_id": "6f4b6dc9eae1d4afbeef25aec0647e33718abf4f",
          "url": "https://github.com/planetarium/libplanet/commit/330ff7bca7b03ca2c22a8f58155b38dfb937453f"
        },
        "date": 1698372327720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53974.25,
            "unit": "ns",
            "range": "± 3746.8443097637773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5659782.779166667,
            "unit": "ns",
            "range": "± 73623.55568887101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1765121.2518229166,
            "unit": "ns",
            "range": "± 30000.3152746151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1193509.9529947916,
            "unit": "ns",
            "range": "± 15399.534027582436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2894050.05,
            "unit": "ns",
            "range": "± 43544.08670086105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 950147.3958984375,
            "unit": "ns",
            "range": "± 11598.772860059333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838683.5619140625,
            "unit": "ns",
            "range": "± 8635.789756397287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8780977.9375,
            "unit": "ns",
            "range": "± 506288.2806740551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24365653.96226415,
            "unit": "ns",
            "range": "± 1005035.5686556372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61010320.234042555,
            "unit": "ns",
            "range": "± 2352743.559485756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121903467,
            "unit": "ns",
            "range": "± 4104355.812813603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244509375,
            "unit": "ns",
            "range": "± 6172310.478107722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3820523.26,
            "unit": "ns",
            "range": "± 232176.2949809111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3984429.5,
            "unit": "ns",
            "range": "± 278124.3639000693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4698309.5,
            "unit": "ns",
            "range": "± 365591.6679612058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4625906.5051546395,
            "unit": "ns",
            "range": "± 297418.3274046676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12339868.333333334,
            "unit": "ns",
            "range": "± 821502.0008715878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299895.8829787234,
            "unit": "ns",
            "range": "± 22281.798920087018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294794.74226804124,
            "unit": "ns",
            "range": "± 18940.482356075285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261351.0202020202,
            "unit": "ns",
            "range": "± 17407.31666949966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4846965.57,
            "unit": "ns",
            "range": "± 291595.81437883794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4453610.38,
            "unit": "ns",
            "range": "± 280779.92324406863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22046.195652173912,
            "unit": "ns",
            "range": "± 2159.030405290741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96864.76041666667,
            "unit": "ns",
            "range": "± 8158.3580607410695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85143.36956521739,
            "unit": "ns",
            "range": "± 6665.866438686287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93180.35416666667,
            "unit": "ns",
            "range": "± 9678.944510723608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5669.673913043478,
            "unit": "ns",
            "range": "± 533.0195986066605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21519.73404255319,
            "unit": "ns",
            "range": "± 2366.3334197101735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577823.576923077,
            "unit": "ns",
            "range": "± 80644.68671228489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3131564.25,
            "unit": "ns",
            "range": "± 133096.23775070018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2357873.887755102,
            "unit": "ns",
            "range": "± 168687.18738711276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10393081.117021276,
            "unit": "ns",
            "range": "± 652326.0636550032"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "ad29ab2ad6fb597e700de5cc0ca8d74574b1eb54",
          "message": "DONT MERGE",
          "timestamp": "2023-10-27T11:48:49+09:00",
          "tree_id": "ae9d94ee419359e5fe7040c6f1414c48accd2ac4",
          "url": "https://github.com/planetarium/libplanet/commit/ad29ab2ad6fb597e700de5cc0ca8d74574b1eb54"
        },
        "date": 1698376098210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70496.46391752578,
            "unit": "ns",
            "range": "± 20349.59506408228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5967660.2875,
            "unit": "ns",
            "range": "± 133619.14969359964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1987071.7111979167,
            "unit": "ns",
            "range": "± 33757.13927921561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364943.1580078125,
            "unit": "ns",
            "range": "± 25257.630463643414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3222432.8097098214,
            "unit": "ns",
            "range": "± 38008.95310991713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1046073.9299665178,
            "unit": "ns",
            "range": "± 13518.87197685569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 969253.1975260417,
            "unit": "ns",
            "range": "± 15203.909353687906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9997445.010204082,
            "unit": "ns",
            "range": "± 677849.1547548663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25835994.6875,
            "unit": "ns",
            "range": "± 2150572.7074843226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68441680.78787878,
            "unit": "ns",
            "range": "± 2166252.142853654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137490107,
            "unit": "ns",
            "range": "± 6035510.421374124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268451318.85,
            "unit": "ns",
            "range": "± 5887606.839915048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3806361.2653061226,
            "unit": "ns",
            "range": "± 439965.1392073506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4000911.7731958763,
            "unit": "ns",
            "range": "± 396554.5922294965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5265409.479166667,
            "unit": "ns",
            "range": "± 468673.3845685573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5122956.760416667,
            "unit": "ns",
            "range": "± 399270.87326042465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14365205.01111111,
            "unit": "ns",
            "range": "± 926677.1511629572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352395.6224489796,
            "unit": "ns",
            "range": "± 37075.8012468119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355997.3939393939,
            "unit": "ns",
            "range": "± 44667.67661657388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297146.56701030926,
            "unit": "ns",
            "range": "± 41709.60960066318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5204452.916666667,
            "unit": "ns",
            "range": "± 362722.7458453245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4702175.89,
            "unit": "ns",
            "range": "± 382874.3141259704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28862.19,
            "unit": "ns",
            "range": "± 11939.139377892669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118497.73684210527,
            "unit": "ns",
            "range": "± 15870.830262379008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122988.56701030929,
            "unit": "ns",
            "range": "± 20011.59627925519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125823.04210526316,
            "unit": "ns",
            "range": "± 16433.572297130555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6539.357142857143,
            "unit": "ns",
            "range": "± 1043.063671459921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26849.696969696968,
            "unit": "ns",
            "range": "± 9902.35568289187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664760.9591836734,
            "unit": "ns",
            "range": "± 230220.78115295916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3190685.8080808083,
            "unit": "ns",
            "range": "± 354144.07846013905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2584093.898989899,
            "unit": "ns",
            "range": "± 265889.5111666473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12020479.161290323,
            "unit": "ns",
            "range": "± 906835.6602512447"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "4cd5ca276d7cd87bd7bbb5c9e971e40f77513f71",
          "message": "Use Nodejs 18",
          "timestamp": "2023-10-29T01:35:10+09:00",
          "tree_id": "fa91feb02bfadb20459d350cf33181b7117c421b",
          "url": "https://github.com/planetarium/libplanet/commit/4cd5ca276d7cd87bd7bbb5c9e971e40f77513f71"
        },
        "date": 1698511697006,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46126.582278481015,
            "unit": "ns",
            "range": "± 2306.496336201879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4895608.274088542,
            "unit": "ns",
            "range": "± 4139.205068143037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1587292.1400240385,
            "unit": "ns",
            "range": "± 2410.9350265421526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1052008.0119791667,
            "unit": "ns",
            "range": "± 2178.7724368354798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2570196.7114583333,
            "unit": "ns",
            "range": "± 13970.913573330356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798799.0968191965,
            "unit": "ns",
            "range": "± 918.9768713979526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744614.4973493303,
            "unit": "ns",
            "range": "± 679.4925921202992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7627445.928571428,
            "unit": "ns",
            "range": "± 12362.204187729665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19510725.35714286,
            "unit": "ns",
            "range": "± 129869.30110491095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50227286.733333334,
            "unit": "ns",
            "range": "± 553621.9201623157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97624553.06666666,
            "unit": "ns",
            "range": "± 835250.3242082123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196390585.06666666,
            "unit": "ns",
            "range": "± 1608488.3347794274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3099391.285714286,
            "unit": "ns",
            "range": "± 35712.34388496843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3293579.063829787,
            "unit": "ns",
            "range": "± 127562.47493720296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4067851.066666667,
            "unit": "ns",
            "range": "± 38923.77400852423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3857372.9375,
            "unit": "ns",
            "range": "± 113383.70752589875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9562977.405405406,
            "unit": "ns",
            "range": "± 319084.14174821065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265568.625,
            "unit": "ns",
            "range": "± 8211.511399720635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255453.54545454544,
            "unit": "ns",
            "range": "± 8179.194374930555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220199.8260869565,
            "unit": "ns",
            "range": "± 5547.392521406906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4080704.714285714,
            "unit": "ns",
            "range": "± 31612.333005742144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3734264.1666666665,
            "unit": "ns",
            "range": "± 14959.607036849922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18915.263157894737,
            "unit": "ns",
            "range": "± 1694.40684538005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83419.12328767123,
            "unit": "ns",
            "range": "± 4168.587070596534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68781.81818181818,
            "unit": "ns",
            "range": "± 1612.9347294786737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71951.56989247311,
            "unit": "ns",
            "range": "± 5568.791214941122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4612.360824742268,
            "unit": "ns",
            "range": "± 392.6960812120648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16503.370786516854,
            "unit": "ns",
            "range": "± 938.3798220872561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1246140.87012987,
            "unit": "ns",
            "range": "± 56187.10987625248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2416609.621621622,
            "unit": "ns",
            "range": "± 82044.73830930136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1877876.8,
            "unit": "ns",
            "range": "± 102174.32601770875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8242280.626666667,
            "unit": "ns",
            "range": "± 414344.8541833362"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "44fba85390f4e4c25acf3d0f98bf7636c0466db5",
          "message": "Merge branch 'rollback-fix-mjs-to-cjs' of https://github.com/planetarium/libplanet into rollback-fix-mjs-to-cjs",
          "timestamp": "2023-10-30T14:54:32+09:00",
          "tree_id": "401324707c4dd3a6101d18bc198da84c8eec3b6b",
          "url": "https://github.com/planetarium/libplanet/commit/44fba85390f4e4c25acf3d0f98bf7636c0466db5"
        },
        "date": 1698646123475,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49759.77173913043,
            "unit": "ns",
            "range": "± 2902.144012691537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5063125.003605769,
            "unit": "ns",
            "range": "± 17906.093386830507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1607374.5740885416,
            "unit": "ns",
            "range": "± 1372.4488751515346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092096.6263020833,
            "unit": "ns",
            "range": "± 1198.3533540988144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596150.595145089,
            "unit": "ns",
            "range": "± 4080.3063891506204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857234.6119791666,
            "unit": "ns",
            "range": "± 5851.320215643311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742915.0739933894,
            "unit": "ns",
            "range": "± 520.2767704718706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8291089.05882353,
            "unit": "ns",
            "range": "± 145255.3719963872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22445996.066666666,
            "unit": "ns",
            "range": "± 249994.14246179754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56931768.5,
            "unit": "ns",
            "range": "± 270768.3122187818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114129077.07142857,
            "unit": "ns",
            "range": "± 567882.469579004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227725191.4,
            "unit": "ns",
            "range": "± 1600621.3209419558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3779173,
            "unit": "ns",
            "range": "± 76940.51298405802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3795129.5,
            "unit": "ns",
            "range": "± 80189.37828170188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4394256.315789473,
            "unit": "ns",
            "range": "± 94570.29674565584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4419582.291666667,
            "unit": "ns",
            "range": "± 113784.14508008963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10735010.9,
            "unit": "ns",
            "range": "± 329477.7548894848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271539.4,
            "unit": "ns",
            "range": "± 4383.537935112622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264736.76923076925,
            "unit": "ns",
            "range": "± 8944.2682012488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232710.62162162163,
            "unit": "ns",
            "range": "± 7727.001068947741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4424766.066666666,
            "unit": "ns",
            "range": "± 64959.16132734767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4094918.8666666667,
            "unit": "ns",
            "range": "± 61489.42766137777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21703.59375,
            "unit": "ns",
            "range": "± 1812.7577280464438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90829.95833333333,
            "unit": "ns",
            "range": "± 7366.054423276187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75225.32727272727,
            "unit": "ns",
            "range": "± 3206.207197704602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83814.75531914894,
            "unit": "ns",
            "range": "± 7629.02220610269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5631.106382978724,
            "unit": "ns",
            "range": "± 683.19827358834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20763.96875,
            "unit": "ns",
            "range": "± 1866.2538015084488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1426244.34375,
            "unit": "ns",
            "range": "± 87979.69507165642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2717235.4857142856,
            "unit": "ns",
            "range": "± 87357.38373263067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2183740.215909091,
            "unit": "ns",
            "range": "± 118429.23698077851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9018948.5,
            "unit": "ns",
            "range": "± 240825.72070882347"
          }
        ]
      }
    ]
  }
}