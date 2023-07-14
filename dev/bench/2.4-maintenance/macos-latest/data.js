window.BENCHMARK_DATA = {
  "lastUpdate": 1689321142831,
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
      }
    ]
  }
}