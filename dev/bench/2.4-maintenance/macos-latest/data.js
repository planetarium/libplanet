window.BENCHMARK_DATA = {
  "lastUpdate": 1689324060314,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "720e0364ffcdaeac1460d530348447674b3391f3",
          "message": "Merge pull request #3263 from OnedgeLee/release/2.4.0\n\n🚀 Release 2.4.0",
          "timestamp": "2023-07-03T21:07:47+09:00",
          "tree_id": "efacc58e9495f8c48ca6222d9dfa58cf21baa28b",
          "url": "https://github.com/planetarium/libplanet/commit/720e0364ffcdaeac1460d530348447674b3391f3"
        },
        "date": 1688387394027,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8519380.9,
            "unit": "ns",
            "range": "± 100540.21974300347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19492997.576923076,
            "unit": "ns",
            "range": "± 212462.92700981253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48399638.11111111,
            "unit": "ns",
            "range": "± 1338070.987343788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92571545.66666667,
            "unit": "ns",
            "range": "± 1711015.1950324974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195180512.80769232,
            "unit": "ns",
            "range": "± 2172998.926248215"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60090.354166666664,
            "unit": "ns",
            "range": "± 9115.051666544296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301129.5287356322,
            "unit": "ns",
            "range": "± 16482.561517625352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290725.64444444445,
            "unit": "ns",
            "range": "± 16149.820499445023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285497.6632653061,
            "unit": "ns",
            "range": "± 20203.44426372393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4092166.111111111,
            "unit": "ns",
            "range": "± 85717.36087393739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3685752.565217391,
            "unit": "ns",
            "range": "± 92274.09071093383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16956.088888888888,
            "unit": "ns",
            "range": "± 2229.9910560330763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84134.5,
            "unit": "ns",
            "range": "± 8431.472612838912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87788.73469387754,
            "unit": "ns",
            "range": "± 10274.026374019177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104250.7741935484,
            "unit": "ns",
            "range": "± 13972.243512958603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5321.252747252747,
            "unit": "ns",
            "range": "± 1020.9459730335782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16648.41489361702,
            "unit": "ns",
            "range": "± 1821.0005264716988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1540880.6315789474,
            "unit": "ns",
            "range": "± 186703.3254356347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2875507.222222222,
            "unit": "ns",
            "range": "± 275735.6842412992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2046172.1630434783,
            "unit": "ns",
            "range": "± 220836.35070262878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5831889.830985916,
            "unit": "ns",
            "range": "± 283948.11453266727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3225062.880952381,
            "unit": "ns",
            "range": "± 108305.20948671439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3284589.046875,
            "unit": "ns",
            "range": "± 150656.89404225114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4327787,
            "unit": "ns",
            "range": "± 204990.16024020655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3798552.4505494507,
            "unit": "ns",
            "range": "± 241097.10281868052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6970142.743589744,
            "unit": "ns",
            "range": "± 215248.73162322285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6303209.626302083,
            "unit": "ns",
            "range": "± 107788.22186083751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1920288.067578125,
            "unit": "ns",
            "range": "± 17203.931622656444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1240699.0071149555,
            "unit": "ns",
            "range": "± 13521.88138220755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630383.905949519,
            "unit": "ns",
            "range": "± 24486.444498388897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 771901.4920372596,
            "unit": "ns",
            "range": "± 3996.793232046036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 705740.112109375,
            "unit": "ns",
            "range": "± 7330.929401609103"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37086a72265685660e5a23d42ee195af04bd0226",
          "message": "Merge pull request #3264 from OnedgeLee/prepare/2.4.1\n\n🔧 Prepare 2.4.1",
          "timestamp": "2023-07-03T21:30:42+09:00",
          "tree_id": "a3832bd7cdeea67403d08adccdbf0f97b8f9efda",
          "url": "https://github.com/planetarium/libplanet/commit/37086a72265685660e5a23d42ee195af04bd0226"
        },
        "date": 1688388491017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8798227.02631579,
            "unit": "ns",
            "range": "± 442612.4079000188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21523805.23880597,
            "unit": "ns",
            "range": "± 1013290.1701922381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57073222.05050505,
            "unit": "ns",
            "range": "± 4213678.561259512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108483958.13333334,
            "unit": "ns",
            "range": "± 1927428.6556975283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214407456.73333332,
            "unit": "ns",
            "range": "± 2465341.494561481"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69449.36263736263,
            "unit": "ns",
            "range": "± 9169.695523257857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349132.1304347826,
            "unit": "ns",
            "range": "± 29969.44882827697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357289.97872340423,
            "unit": "ns",
            "range": "± 51380.0296801688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305721.170212766,
            "unit": "ns",
            "range": "± 31020.276137868932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4365230.686868687,
            "unit": "ns",
            "range": "± 334411.74603356456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4080691.8402061854,
            "unit": "ns",
            "range": "± 298132.6310512825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20020.844086021505,
            "unit": "ns",
            "range": "± 3445.346109623896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118928.19791666667,
            "unit": "ns",
            "range": "± 21253.186704521722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111783.04545454546,
            "unit": "ns",
            "range": "± 11845.837819803313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117106.96315789473,
            "unit": "ns",
            "range": "± 16951.85838040066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7340.821052631579,
            "unit": "ns",
            "range": "± 1044.6222668520595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22089.068965517243,
            "unit": "ns",
            "range": "± 4045.1696511785954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1677400.8469387756,
            "unit": "ns",
            "range": "± 183127.9227590466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3136884.795698925,
            "unit": "ns",
            "range": "± 188613.7886813986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2168370.9343434344,
            "unit": "ns",
            "range": "± 209514.2297446479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5904035.876923077,
            "unit": "ns",
            "range": "± 243385.49137842187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3477276.224489796,
            "unit": "ns",
            "range": "± 280355.215251458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3748715.1,
            "unit": "ns",
            "range": "± 344368.12164480565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4498512.777777778,
            "unit": "ns",
            "range": "± 186993.3539036319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4183258.2216494847,
            "unit": "ns",
            "range": "± 350077.8893967069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7472579.838709678,
            "unit": "ns",
            "range": "± 339505.7194492008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7232456.943229167,
            "unit": "ns",
            "range": "± 211209.79865455054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2294867.8938802085,
            "unit": "ns",
            "range": "± 89072.85250399871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378485.4823069852,
            "unit": "ns",
            "range": "± 28049.889657388318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2872160.5248046876,
            "unit": "ns",
            "range": "± 128329.54365096074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830455.2907226563,
            "unit": "ns",
            "range": "± 18446.636497098716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746167.0348510742,
            "unit": "ns",
            "range": "± 12744.310150089066"
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
          "id": "65c0ba956f666688c1ec9d0d81756d8a9a7af778",
          "message": "Merge pull request #3298 from greymistcube/chore/rocksdb-optimization\n\n⚡ `RocksDBStore` Concat optimization",
          "timestamp": "2023-07-14T16:34:29+09:00",
          "tree_id": "75da47c8ef65a8990e003614dab5a1d38ddb5f49",
          "url": "https://github.com/planetarium/libplanet/commit/65c0ba956f666688c1ec9d0d81756d8a9a7af778"
        },
        "date": 1689321072936,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8424374.131578946,
            "unit": "ns",
            "range": "± 182206.11501971865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21175947.375,
            "unit": "ns",
            "range": "± 512762.6862456908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50361001.5,
            "unit": "ns",
            "range": "± 1503647.2494368772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104057881.72222222,
            "unit": "ns",
            "range": "± 3406513.510043052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214178356.55,
            "unit": "ns",
            "range": "± 4647791.73864297"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62865.13684210526,
            "unit": "ns",
            "range": "± 10144.62420432775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319875.6923076923,
            "unit": "ns",
            "range": "± 12501.282567986596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330545.77173913043,
            "unit": "ns",
            "range": "± 29201.08865730009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302292.5268817204,
            "unit": "ns",
            "range": "± 26300.79682608056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4136260.6315789474,
            "unit": "ns",
            "range": "± 140147.04912383048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3854774.1842105263,
            "unit": "ns",
            "range": "± 131579.16526128686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20384.154639175256,
            "unit": "ns",
            "range": "± 3930.8609487940807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90400.1052631579,
            "unit": "ns",
            "range": "± 11120.303322697711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93618.73684210527,
            "unit": "ns",
            "range": "± 8659.941670004686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123417.27083333333,
            "unit": "ns",
            "range": "± 11660.067462546705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6384.651515151515,
            "unit": "ns",
            "range": "± 1283.487336172441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20718.5,
            "unit": "ns",
            "range": "± 4818.826753838029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1548323.6684210526,
            "unit": "ns",
            "range": "± 164540.74098420402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3002322.8651685393,
            "unit": "ns",
            "range": "± 241203.28521687558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1990706.797979798,
            "unit": "ns",
            "range": "± 176716.00868030475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5971987.652173913,
            "unit": "ns",
            "range": "± 365900.451660865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3295412.0555555555,
            "unit": "ns",
            "range": "± 151272.6365121851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3456532.073770492,
            "unit": "ns",
            "range": "± 129642.19602409021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4692878.12,
            "unit": "ns",
            "range": "± 187748.86060608536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4108342.09375,
            "unit": "ns",
            "range": "± 244001.21570592647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7495910.177083333,
            "unit": "ns",
            "range": "± 480300.2848614383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6363288.094270834,
            "unit": "ns",
            "range": "± 112084.7602824483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905591.7671875,
            "unit": "ns",
            "range": "± 12399.189902707338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1281737.0703125,
            "unit": "ns",
            "range": "± 16734.56780096392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2491670.5517578125,
            "unit": "ns",
            "range": "± 48125.05192814017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 871339.1311197917,
            "unit": "ns",
            "range": "± 13596.349453202343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778438.8856724331,
            "unit": "ns",
            "range": "± 5494.484301520404"
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
          "id": "b914d88509225b995a693d4b9d3a4e33cdfa6c55",
          "message": "Merge pull request #3297 from greymistcube/chore/optimization\n\n⚡ Faster `Hex` for netstandard2.1 and up",
          "timestamp": "2023-07-14T16:50:04+09:00",
          "tree_id": "131e2ac4e3ab8806b23bbe508d3fb4215ff40af3",
          "url": "https://github.com/planetarium/libplanet/commit/b914d88509225b995a693d4b9d3a4e33cdfa6c55"
        },
        "date": 1689321851568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8001616.633333334,
            "unit": "ns",
            "range": "± 129788.36336065762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19097499.529411763,
            "unit": "ns",
            "range": "± 363928.17133417923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49184337.615384616,
            "unit": "ns",
            "range": "± 1720890.380963841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94341930.55,
            "unit": "ns",
            "range": "± 2107043.408233829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197122128.2,
            "unit": "ns",
            "range": "± 2890090.5580484895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55030.87912087912,
            "unit": "ns",
            "range": "± 5460.950907905987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310083.202247191,
            "unit": "ns",
            "range": "± 20109.187559410257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298666.0989010989,
            "unit": "ns",
            "range": "± 20901.107043011936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283255.4166666667,
            "unit": "ns",
            "range": "± 9394.853549759495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4058116.810810811,
            "unit": "ns",
            "range": "± 137459.89383853786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3681966.024390244,
            "unit": "ns",
            "range": "± 128717.75558727083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17781,
            "unit": "ns",
            "range": "± 1591.4377878378216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82977.63917525773,
            "unit": "ns",
            "range": "± 7253.467635071701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78088.11904761905,
            "unit": "ns",
            "range": "± 6216.633595666174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98694.82258064517,
            "unit": "ns",
            "range": "± 11652.56886975468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5114.268292682927,
            "unit": "ns",
            "range": "± 601.189998906089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17734.1125,
            "unit": "ns",
            "range": "± 1618.5339279085686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1522731.0760869565,
            "unit": "ns",
            "range": "± 163891.57589070647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2827695.027027027,
            "unit": "ns",
            "range": "± 141626.35874016976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2042625.391304348,
            "unit": "ns",
            "range": "± 213624.2814948125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5887070.55882353,
            "unit": "ns",
            "range": "± 278768.6621353944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3144961,
            "unit": "ns",
            "range": "± 149010.53559566673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3319784.285714286,
            "unit": "ns",
            "range": "± 115552.39000019792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4269682.992957747,
            "unit": "ns",
            "range": "± 209350.6221025165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3719173.3882352943,
            "unit": "ns",
            "range": "± 217722.80188284488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7229717.561797753,
            "unit": "ns",
            "range": "± 396192.74835956236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6471963.4296875,
            "unit": "ns",
            "range": "± 29378.40675832926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910764.503515625,
            "unit": "ns",
            "range": "± 12180.745169371667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1243933.242466518,
            "unit": "ns",
            "range": "± 7093.445797402369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605421.7698102677,
            "unit": "ns",
            "range": "± 19832.71190684226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857536.7107421875,
            "unit": "ns",
            "range": "± 5143.807282536279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754591.7811848958,
            "unit": "ns",
            "range": "± 7021.260136710465"
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
          "id": "ec6313b2e9cdf179e04316d728f6157f628e56a1",
          "message": "Merge pull request #3302 from greymistcube/bump/bencodex-to-0.11.0\n\n⬆️ Bump Bencodex to 0.11.0",
          "timestamp": "2023-07-14T17:03:05+09:00",
          "tree_id": "56464697796c2a6fcb34286edce2ff533972e4d4",
          "url": "https://github.com/planetarium/libplanet/commit/ec6313b2e9cdf179e04316d728f6157f628e56a1"
        },
        "date": 1689322818186,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8703742.511494253,
            "unit": "ns",
            "range": "± 474772.5535253328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21115720.97368421,
            "unit": "ns",
            "range": "± 453890.56168620504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51893480.56410257,
            "unit": "ns",
            "range": "± 1781787.5834777157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101195772.3,
            "unit": "ns",
            "range": "± 1327730.0667239344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206243559.53333333,
            "unit": "ns",
            "range": "± 2165251.2440882125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68602.37362637362,
            "unit": "ns",
            "range": "± 9323.727983124387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320762.57608695654,
            "unit": "ns",
            "range": "± 22504.751120954996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314178.5376344086,
            "unit": "ns",
            "range": "± 26955.373010637228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312268.47777777776,
            "unit": "ns",
            "range": "± 18124.70347962194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4360677,
            "unit": "ns",
            "range": "± 82000.7925026266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3871390.814814815,
            "unit": "ns",
            "range": "± 106380.06378078014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17246.83870967742,
            "unit": "ns",
            "range": "± 2119.0931730050424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87145.4947368421,
            "unit": "ns",
            "range": "± 8434.424601537119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113456.28378378379,
            "unit": "ns",
            "range": "± 5683.116780695352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115277.66326530612,
            "unit": "ns",
            "range": "± 17909.88432543296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6826.967391304348,
            "unit": "ns",
            "range": "± 1063.6879184873624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21834.597826086956,
            "unit": "ns",
            "range": "± 3728.057258732869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1565057.3829787234,
            "unit": "ns",
            "range": "± 121134.7759735781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2996254,
            "unit": "ns",
            "range": "± 167341.65466884716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2032176.2157894736,
            "unit": "ns",
            "range": "± 163292.8835999163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5754683.944444444,
            "unit": "ns",
            "range": "± 241920.34190675218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3363381.2321428573,
            "unit": "ns",
            "range": "± 144749.59290619357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3569767.6210526316,
            "unit": "ns",
            "range": "± 242401.76405549646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4531992.926229509,
            "unit": "ns",
            "range": "± 201951.72545391953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4017976.5824742266,
            "unit": "ns",
            "range": "± 254155.70535769628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7296549.986666666,
            "unit": "ns",
            "range": "± 367508.2243741791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7467650.298125,
            "unit": "ns",
            "range": "± 194934.0501580663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2220514.3036458334,
            "unit": "ns",
            "range": "± 39899.876691634185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1394192.8020833333,
            "unit": "ns",
            "range": "± 23296.211270181102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3101457.118100649,
            "unit": "ns",
            "range": "± 157657.22929534348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866754.1490234375,
            "unit": "ns",
            "range": "± 8878.565987332066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783957.5827473958,
            "unit": "ns",
            "range": "± 10142.004208581324"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "486af198bfe709e115b0c35089053641ed291098",
          "message": "Merge pull request #3306 from greymistcube/prepare/2.4.2\n\n🔧 Prepare 2.4.2",
          "timestamp": "2023-07-14T17:24:19+09:00",
          "tree_id": "517c6b292d84287d60461f4e3faf83a43b97c6a6",
          "url": "https://github.com/planetarium/libplanet/commit/486af198bfe709e115b0c35089053641ed291098"
        },
        "date": 1689323916422,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7726758.25,
            "unit": "ns",
            "range": "± 111949.92777708905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20642438.944444444,
            "unit": "ns",
            "range": "± 409758.23120260914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48786332.30555555,
            "unit": "ns",
            "range": "± 1562314.3591297371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94263449.66666667,
            "unit": "ns",
            "range": "± 795103.7974625584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195588806.26923078,
            "unit": "ns",
            "range": "± 1621939.9257017893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63716.46875,
            "unit": "ns",
            "range": "± 7687.859220126682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328743.9680851064,
            "unit": "ns",
            "range": "± 12344.693890671979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290427.6901408451,
            "unit": "ns",
            "range": "± 14113.655538005483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301616.96774193546,
            "unit": "ns",
            "range": "± 13601.249067180079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4282920.147058823,
            "unit": "ns",
            "range": "± 137136.3579647141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3816336.6,
            "unit": "ns",
            "range": "± 74190.66538347061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18794.988372093023,
            "unit": "ns",
            "range": "± 1527.1525405853022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91907.1875,
            "unit": "ns",
            "range": "± 7694.424298853649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96150.95918367348,
            "unit": "ns",
            "range": "± 8460.515522445032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109097,
            "unit": "ns",
            "range": "± 10959.94434098307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5499.641304347826,
            "unit": "ns",
            "range": "± 692.0662259728804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17896.31868131868,
            "unit": "ns",
            "range": "± 1728.0605498594266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1562555.18,
            "unit": "ns",
            "range": "± 155596.29789306648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3037597.510638298,
            "unit": "ns",
            "range": "± 175910.44616163315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2107480.1224489794,
            "unit": "ns",
            "range": "± 181600.6648216784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5959768.679487179,
            "unit": "ns",
            "range": "± 305635.771070794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3173104.4509803923,
            "unit": "ns",
            "range": "± 127542.20463616171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3481982.625,
            "unit": "ns",
            "range": "± 88802.48779114659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4272496.009803922,
            "unit": "ns",
            "range": "± 152586.92218815774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3939978.217391304,
            "unit": "ns",
            "range": "± 151601.06290519543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7033116.529411765,
            "unit": "ns",
            "range": "± 219173.4770342593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6377758.419471154,
            "unit": "ns",
            "range": "± 27382.49253352747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017416.3515625,
            "unit": "ns",
            "range": "± 8377.26117973459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1281492.787109375,
            "unit": "ns",
            "range": "± 3520.8061324670557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2452643.243840144,
            "unit": "ns",
            "range": "± 8719.152919149969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839540.0063151042,
            "unit": "ns",
            "range": "± 2554.577362920478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765569.4912109375,
            "unit": "ns",
            "range": "± 1505.0634200061968"
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
          "id": "1d74e3706ce2ef6607e142969c5dfa3ec41f1076",
          "message": "Merge pull request #3305 from greymistcube/release/2.4.1\n\n🚀 Release 2.4.1",
          "timestamp": "2023-07-14T17:21:46+09:00",
          "tree_id": "9681d8a9488eec9cce736a5b57461ef0d7d77eca",
          "url": "https://github.com/planetarium/libplanet/commit/1d74e3706ce2ef6607e142969c5dfa3ec41f1076"
        },
        "date": 1689323991049,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8344781.533333333,
            "unit": "ns",
            "range": "± 226587.03362493435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20320869.416666668,
            "unit": "ns",
            "range": "± 517270.5059235714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51440136.14705882,
            "unit": "ns",
            "range": "± 1004492.6711428723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101049837.64285715,
            "unit": "ns",
            "range": "± 1728217.9624721755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211068387.2,
            "unit": "ns",
            "range": "± 3676244.7963661463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63754.596774193546,
            "unit": "ns",
            "range": "± 8801.790524443599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315939.5578947368,
            "unit": "ns",
            "range": "± 20257.499377675078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316021.34065934067,
            "unit": "ns",
            "range": "± 28145.965078979014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306059.45081967214,
            "unit": "ns",
            "range": "± 13696.199142373078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4367845.578947368,
            "unit": "ns",
            "range": "± 149704.3488750016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3762454.4782608696,
            "unit": "ns",
            "range": "± 90783.57517538349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17003.87634408602,
            "unit": "ns",
            "range": "± 1766.8244475795411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83629.37634408602,
            "unit": "ns",
            "range": "± 6962.993404442079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100570.60638297872,
            "unit": "ns",
            "range": "± 16164.405677534693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119751.57368421053,
            "unit": "ns",
            "range": "± 18432.972162094626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6427.239583333333,
            "unit": "ns",
            "range": "± 947.9022184169764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18796.913978494624,
            "unit": "ns",
            "range": "± 3609.71701183948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1604174.0104166667,
            "unit": "ns",
            "range": "± 171284.42079833458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3093668.1616161615,
            "unit": "ns",
            "range": "± 225431.20906417744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2113075.101010101,
            "unit": "ns",
            "range": "± 209692.0352124532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6044762.563380281,
            "unit": "ns",
            "range": "± 294307.31704086525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3451506.5135135134,
            "unit": "ns",
            "range": "± 170456.65453629347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3466256.037037037,
            "unit": "ns",
            "range": "± 143444.4897229446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4570282.125,
            "unit": "ns",
            "range": "± 75444.02216025247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3960522.3333333335,
            "unit": "ns",
            "range": "± 107843.05171013034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7230819.666666667,
            "unit": "ns",
            "range": "± 337516.5643012814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8088454.871426197,
            "unit": "ns",
            "range": "± 459720.75445035484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2368125.8956473214,
            "unit": "ns",
            "range": "± 41552.24968823982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1496855.357541454,
            "unit": "ns",
            "range": "± 59243.61214586104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3207095.6623114226,
            "unit": "ns",
            "range": "± 138291.4170115046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1063828.6569234913,
            "unit": "ns",
            "range": "± 30876.943946458847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 851224.9130859375,
            "unit": "ns",
            "range": "± 20576.93846125576"
          }
        ]
      }
    ]
  }
}