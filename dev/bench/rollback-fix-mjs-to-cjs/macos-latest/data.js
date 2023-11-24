window.BENCHMARK_DATA = {
  "lastUpdate": 1698646806307,
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
        "date": 1698372175158,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8084267.033333333,
            "unit": "ns",
            "range": "± 149300.73936180276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19831182.26190476,
            "unit": "ns",
            "range": "± 456254.93366054737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51806792.093023255,
            "unit": "ns",
            "range": "± 1909251.3261656456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99604585.5925926,
            "unit": "ns",
            "range": "± 2768148.4322657916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199746987.75,
            "unit": "ns",
            "range": "± 3775432.6434287326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44418.137931034486,
            "unit": "ns",
            "range": "± 8655.229660102954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221751.52083333334,
            "unit": "ns",
            "range": "± 15637.737307033009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218018.1052631579,
            "unit": "ns",
            "range": "± 17149.68521792479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205887.8673469388,
            "unit": "ns",
            "range": "± 20308.810485420785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3732481.827586207,
            "unit": "ns",
            "range": "± 107033.95809410507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3411541.1818181816,
            "unit": "ns",
            "range": "± 74069.14185159725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14548.5,
            "unit": "ns",
            "range": "± 2627.0348199167333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72890.36842105263,
            "unit": "ns",
            "range": "± 15133.143968218303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60727.762886597935,
            "unit": "ns",
            "range": "± 12374.112844271902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60151.084210526315,
            "unit": "ns",
            "range": "± 11295.787004749289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4724.468085106383,
            "unit": "ns",
            "range": "± 1231.307308165809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13132.033707865168,
            "unit": "ns",
            "range": "± 1982.447370902018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1116077.4838709678,
            "unit": "ns",
            "range": "± 96392.52150154786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2298133.2065217393,
            "unit": "ns",
            "range": "± 142147.23515638718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1724970.5483870967,
            "unit": "ns",
            "range": "± 137776.47254430037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8274697.674157304,
            "unit": "ns",
            "range": "± 1398679.52938428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3012434.252873563,
            "unit": "ns",
            "range": "± 159142.71191644736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3107086.3666666667,
            "unit": "ns",
            "range": "± 88387.16737583002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3675867.375,
            "unit": "ns",
            "range": "± 95219.56904659083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3594619.465116279,
            "unit": "ns",
            "range": "± 193930.82732020394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11254664.155913979,
            "unit": "ns",
            "range": "± 1171976.6714570443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4672549.346047794,
            "unit": "ns",
            "range": "± 94809.57033093386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1403368.439453125,
            "unit": "ns",
            "range": "± 26211.510134980646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 869617.7633634869,
            "unit": "ns",
            "range": "± 18196.34606914326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2354517.5613606772,
            "unit": "ns",
            "range": "± 290838.95882921125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 683116.2560346555,
            "unit": "ns",
            "range": "± 23909.91482050775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 611517.053157552,
            "unit": "ns",
            "range": "± 16071.525159934608"
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
        "date": 1698376060314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8048745,
            "unit": "ns",
            "range": "± 107725.31862583866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18740524.315789472,
            "unit": "ns",
            "range": "± 406515.3217461049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45955985.428571425,
            "unit": "ns",
            "range": "± 801820.7327896558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107131411.67171717,
            "unit": "ns",
            "range": "± 9399795.090344373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226579369.30769232,
            "unit": "ns",
            "range": "± 22786847.646592952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55405.3085106383,
            "unit": "ns",
            "range": "± 12300.923444902262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237537.54945054944,
            "unit": "ns",
            "range": "± 21515.709531132896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241090.3556701031,
            "unit": "ns",
            "range": "± 25126.466697650085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223173.8947368421,
            "unit": "ns",
            "range": "± 32209.513237377578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4113871.1276595746,
            "unit": "ns",
            "range": "± 264246.2935983335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3478096.5576923075,
            "unit": "ns",
            "range": "± 141876.84282868655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16979.31818181818,
            "unit": "ns",
            "range": "± 4373.27050214964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89108.11458333333,
            "unit": "ns",
            "range": "± 17233.8985563305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73229.375,
            "unit": "ns",
            "range": "± 17440.015043601674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76698.23157894737,
            "unit": "ns",
            "range": "± 12802.126506746325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6007.29,
            "unit": "ns",
            "range": "± 1900.8840702115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14863.537634408602,
            "unit": "ns",
            "range": "± 3093.796319140794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1745009.3163265307,
            "unit": "ns",
            "range": "± 479388.168956941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3530948.0353535353,
            "unit": "ns",
            "range": "± 890469.3532309447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2598820.2916666665,
            "unit": "ns",
            "range": "± 731011.4060941639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10675022.691489361,
            "unit": "ns",
            "range": "± 2358391.285032984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2974345.4791666665,
            "unit": "ns",
            "range": "± 115549.05047889415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3059630.53125,
            "unit": "ns",
            "range": "± 189338.0370643693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3952517.5604395606,
            "unit": "ns",
            "range": "± 260414.5534578455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3589782.013157895,
            "unit": "ns",
            "range": "± 181408.60941138698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12366767.655555556,
            "unit": "ns",
            "range": "± 1744159.154619759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4813647.681451613,
            "unit": "ns",
            "range": "± 216682.33724088458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1419266.3100260417,
            "unit": "ns",
            "range": "± 15609.868810605663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 873601.7846392463,
            "unit": "ns",
            "range": "± 40745.018526816275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947578.0393229167,
            "unit": "ns",
            "range": "± 26118.611746260558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633515.3830378606,
            "unit": "ns",
            "range": "± 10470.11412563053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 604097.9086445847,
            "unit": "ns",
            "range": "± 28943.6866427129"
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
        "date": 1698511998765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8199464.466666667,
            "unit": "ns",
            "range": "± 139633.8307706812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20466168.85714286,
            "unit": "ns",
            "range": "± 654767.6227902242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53240998.125,
            "unit": "ns",
            "range": "± 1623215.3845096338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101311692.13636364,
            "unit": "ns",
            "range": "± 2487299.673767509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222140246.87313432,
            "unit": "ns",
            "range": "± 10432005.647268219"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72437.22680412371,
            "unit": "ns",
            "range": "± 9311.247336896242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333421.0104166667,
            "unit": "ns",
            "range": "± 45580.135289167774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291578.5879120879,
            "unit": "ns",
            "range": "± 22328.885353902933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298090.79545454547,
            "unit": "ns",
            "range": "± 17811.775799456213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4613480.788888888,
            "unit": "ns",
            "range": "± 892140.0809840548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3802541.887755102,
            "unit": "ns",
            "range": "± 151771.04583588184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17620.7,
            "unit": "ns",
            "range": "± 1476.8070264115167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85006.92708333333,
            "unit": "ns",
            "range": "± 9951.986654083106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73905.65789473684,
            "unit": "ns",
            "range": "± 2509.5578406317973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85145.17708333333,
            "unit": "ns",
            "range": "± 10389.833023322462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4606.655555555555,
            "unit": "ns",
            "range": "± 751.2712807823414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19114.337078651686,
            "unit": "ns",
            "range": "± 3372.5911165796956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466582.768041237,
            "unit": "ns",
            "range": "± 148135.30108545162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2814837.72,
            "unit": "ns",
            "range": "± 102158.60948750234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2397193.1030927836,
            "unit": "ns",
            "range": "± 236107.5940616324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11035235.036144579,
            "unit": "ns",
            "range": "± 1740688.1412345162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3330687.4457831327,
            "unit": "ns",
            "range": "± 176465.1664338964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3695111.6288659796,
            "unit": "ns",
            "range": "± 304945.8671865085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4607170.193877551,
            "unit": "ns",
            "range": "± 379407.50872474123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4657101.863636363,
            "unit": "ns",
            "range": "± 492262.68297941383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15981621.422222223,
            "unit": "ns",
            "range": "± 1880069.404668277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6331312.706597222,
            "unit": "ns",
            "range": "± 210003.3388525047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2000636.6247051887,
            "unit": "ns",
            "range": "± 82630.86316695667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068005.7785993305,
            "unit": "ns",
            "range": "± 12513.74482073883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3041704.662860577,
            "unit": "ns",
            "range": "± 41324.788727070976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806006.063671875,
            "unit": "ns",
            "range": "± 13428.794143954861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 865032.2197265625,
            "unit": "ns",
            "range": "± 12928.42010409659"
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
        "date": 1698646746678,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10341738.146153847,
            "unit": "ns",
            "range": "± 479008.3406871505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25346072.35714286,
            "unit": "ns",
            "range": "± 444841.63315129216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70957621.93529412,
            "unit": "ns",
            "range": "± 4098562.3971449123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137822908.4673913,
            "unit": "ns",
            "range": "± 8470177.909611428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285795662.52469134,
            "unit": "ns",
            "range": "± 14969066.027972342"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60844.7311827957,
            "unit": "ns",
            "range": "± 12768.874357235445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326389.4175824176,
            "unit": "ns",
            "range": "± 23573.878020699067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314811.3076923077,
            "unit": "ns",
            "range": "± 29920.582544719695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297631.9,
            "unit": "ns",
            "range": "± 17476.40647298491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5060974.051020408,
            "unit": "ns",
            "range": "± 355167.25093001314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4894466.303030303,
            "unit": "ns",
            "range": "± 153361.96373703715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22055.686813186814,
            "unit": "ns",
            "range": "± 3374.404651727761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90960.83684210526,
            "unit": "ns",
            "range": "± 15297.004550057483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65572.78571428571,
            "unit": "ns",
            "range": "± 6489.360676070253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67644.57368421053,
            "unit": "ns",
            "range": "± 9183.89641529418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3650.1264367816093,
            "unit": "ns",
            "range": "± 765.0346975654218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13295.021978021978,
            "unit": "ns",
            "range": "± 2408.7605986759713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1746051.5714285714,
            "unit": "ns",
            "range": "± 29439.685587561995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3527320.9764705882,
            "unit": "ns",
            "range": "± 249818.23125009917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2409973.5494505493,
            "unit": "ns",
            "range": "± 263772.2684355353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11483249.294117646,
            "unit": "ns",
            "range": "± 1319852.7793750765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3950458.9615384615,
            "unit": "ns",
            "range": "± 61458.417066088114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4725466.615384615,
            "unit": "ns",
            "range": "± 510899.8869973509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5011718.551020408,
            "unit": "ns",
            "range": "± 198711.19487557202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5137038.25,
            "unit": "ns",
            "range": "± 182344.7115758488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14383689.435294118,
            "unit": "ns",
            "range": "± 1371546.7521494313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4466976.689070554,
            "unit": "ns",
            "range": "± 299886.0175165617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1374828.9845543685,
            "unit": "ns",
            "range": "± 86349.81900066439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 929773.0260925293,
            "unit": "ns",
            "range": "± 90365.25484357767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2703715.56796875,
            "unit": "ns",
            "range": "± 485881.92489225656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 690505.5751855469,
            "unit": "ns",
            "range": "± 45499.67125584134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 653066.5083406409,
            "unit": "ns",
            "range": "± 46757.80276020942"
          }
        ]
      }
    ]
  }
}