window.BENCHMARK_DATA = {
  "lastUpdate": 1713424500357,
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
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713346751449,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201591.14,
            "unit": "ns",
            "range": "± 8020.676219672275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192765.0873015873,
            "unit": "ns",
            "range": "± 8743.842269470815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164007.67647058822,
            "unit": "ns",
            "range": "± 2965.093553230954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3219462,
            "unit": "ns",
            "range": "± 32691.195200754686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2833047.8,
            "unit": "ns",
            "range": "± 36161.13747262779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12408.095744680852,
            "unit": "ns",
            "range": "± 1238.4284532201036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60372.63917525773,
            "unit": "ns",
            "range": "± 4927.157330351108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50496.666666666664,
            "unit": "ns",
            "range": "± 1699.4150748099266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64427.03296703297,
            "unit": "ns",
            "range": "± 8201.011950363942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5947.121212121212,
            "unit": "ns",
            "range": "± 1182.929115069939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14830.636363636364,
            "unit": "ns",
            "range": "± 3099.742143504071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5757355.3,
            "unit": "ns",
            "range": "± 28082.69128637272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14692297.266666668,
            "unit": "ns",
            "range": "± 89543.12129476793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37680291.85714286,
            "unit": "ns",
            "range": "± 213495.2274803844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77370683.03333333,
            "unit": "ns",
            "range": "± 842038.0220000984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152274559.4,
            "unit": "ns",
            "range": "± 748439.5118109604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3667641.869698661,
            "unit": "ns",
            "range": "± 4504.987953064696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190731.603515625,
            "unit": "ns",
            "range": "± 1703.8289049285518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779855.74921875,
            "unit": "ns",
            "range": "± 913.5435111397516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952921.8228236607,
            "unit": "ns",
            "range": "± 3499.7966567590965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622773.4208984375,
            "unit": "ns",
            "range": "± 1556.3419166089382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581812.4937918527,
            "unit": "ns",
            "range": "± 534.6736364208307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779659.7626262626,
            "unit": "ns",
            "range": "± 255983.34831915423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3037928.670212766,
            "unit": "ns",
            "range": "± 269091.60759969644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2351243.85,
            "unit": "ns",
            "range": "± 286318.63598147157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9202908.225,
            "unit": "ns",
            "range": "± 326971.4393742771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2649411.82,
            "unit": "ns",
            "range": "± 100646.33945606623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2868798.9615384615,
            "unit": "ns",
            "range": "± 115427.7210965098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3903710.1511627906,
            "unit": "ns",
            "range": "± 142005.44202229308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3798546.47,
            "unit": "ns",
            "range": "± 460180.98562620796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9788866.4,
            "unit": "ns",
            "range": "± 224086.00082637445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 192832.86,
            "unit": "ns",
            "range": "± 7782.506167379897"
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
          "id": "da8689a5319160fa420fb426fca8f9afb012a131",
          "message": "Merge pull request #3749 from greymistcube/prepare/4.4.1\n\n🔧 Prepare 4.4.1",
          "timestamp": "2024-04-18T12:45:53+09:00",
          "tree_id": "489eff0480f42ea9f76802245a90e0bab67cdb6c",
          "url": "https://github.com/planetarium/libplanet/commit/da8689a5319160fa420fb426fca8f9afb012a131"
        },
        "date": 1713412456594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204945.7341772152,
            "unit": "ns",
            "range": "± 10138.64264382573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198602.19642857142,
            "unit": "ns",
            "range": "± 7738.766577597006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167370.55555555556,
            "unit": "ns",
            "range": "± 3356.503033572156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3090984.3,
            "unit": "ns",
            "range": "± 28412.51731744806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2815120.8571428573,
            "unit": "ns",
            "range": "± 46054.252523697345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12117.861538461539,
            "unit": "ns",
            "range": "± 578.5724046338938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59093.409638554214,
            "unit": "ns",
            "range": "± 3147.643191249313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51607.529411764706,
            "unit": "ns",
            "range": "± 1048.8739269835446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56350.357142857145,
            "unit": "ns",
            "range": "± 8737.110827579221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2468.5,
            "unit": "ns",
            "range": "± 239.07908421825255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13155.91237113402,
            "unit": "ns",
            "range": "± 2379.9833803366555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5759576.433333334,
            "unit": "ns",
            "range": "± 27690.395404148625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14783857.5,
            "unit": "ns",
            "range": "± 191772.2424515201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37621671.03333333,
            "unit": "ns",
            "range": "± 115171.79130813156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75490513.35714285,
            "unit": "ns",
            "range": "± 208824.80511989622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154381118.13333333,
            "unit": "ns",
            "range": "± 545758.1046803306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3697093.084735577,
            "unit": "ns",
            "range": "± 6542.411729807344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1188511.0394810268,
            "unit": "ns",
            "range": "± 1896.3734244564248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758256.4910807292,
            "unit": "ns",
            "range": "± 1720.605827292061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954154.416015625,
            "unit": "ns",
            "range": "± 2563.123938121894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622120.7811802456,
            "unit": "ns",
            "range": "± 521.3005072315393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568253.9841657366,
            "unit": "ns",
            "range": "± 713.5852191800376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1800083.0404040404,
            "unit": "ns",
            "range": "± 259208.6599770941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3254565.902777778,
            "unit": "ns",
            "range": "± 160661.3238712004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2349293.34,
            "unit": "ns",
            "range": "± 285264.74673786556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8573996.590909092,
            "unit": "ns",
            "range": "± 161482.9529598533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2675331.34375,
            "unit": "ns",
            "range": "± 83195.11609816829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2885154.3723404254,
            "unit": "ns",
            "range": "± 164364.02961332764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3793929.4318181816,
            "unit": "ns",
            "range": "± 119901.30671852245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3516228.6,
            "unit": "ns",
            "range": "± 251171.1383603666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9674514.666666666,
            "unit": "ns",
            "range": "± 146780.93698702115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 194681.825,
            "unit": "ns",
            "range": "± 6861.838061625644"
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
          "id": "90e70576ece55b54c5bef2dfc9125de483ca9f70",
          "message": "Merge pull request #3757 from greymistcube/port/4.3.1-to-4.4\n\n🔀 Port 4.3.1 to 4.4",
          "timestamp": "2024-04-18T15:51:15+09:00",
          "tree_id": "3b40adf1bdb746bb2eda7f4b514d5412ad17a0d3",
          "url": "https://github.com/planetarium/libplanet/commit/90e70576ece55b54c5bef2dfc9125de483ca9f70"
        },
        "date": 1713423644209,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199405.9193548387,
            "unit": "ns",
            "range": "± 8707.179886941218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195234.2105263158,
            "unit": "ns",
            "range": "± 9833.226905840951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165614.11538461538,
            "unit": "ns",
            "range": "± 1965.2709965151346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3094649.4285714286,
            "unit": "ns",
            "range": "± 20924.24760053158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2880966.8,
            "unit": "ns",
            "range": "± 38826.23523966384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14702.03,
            "unit": "ns",
            "range": "± 2404.514678157475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60409.833333333336,
            "unit": "ns",
            "range": "± 3205.9364770343027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52005.21212121212,
            "unit": "ns",
            "range": "± 1373.8168035980943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63039.68085106383,
            "unit": "ns",
            "range": "± 6569.098095183653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2926.185567010309,
            "unit": "ns",
            "range": "± 290.4222260310877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12164.967741935483,
            "unit": "ns",
            "range": "± 883.5721649572474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5816074,
            "unit": "ns",
            "range": "± 41476.458468351935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14844753.285714285,
            "unit": "ns",
            "range": "± 91155.55671672005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37124985.21428572,
            "unit": "ns",
            "range": "± 154993.25873587513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76954158.78571428,
            "unit": "ns",
            "range": "± 227944.99631318907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149550422.41666666,
            "unit": "ns",
            "range": "± 436634.8993804691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3669462.9991629464,
            "unit": "ns",
            "range": "± 4238.5296734059075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202344.4919270833,
            "unit": "ns",
            "range": "± 1585.2433258845117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757780.130719866,
            "unit": "ns",
            "range": "± 1636.8993401753046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1897831.0106026786,
            "unit": "ns",
            "range": "± 2068.040141863376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636356.1065848215,
            "unit": "ns",
            "range": "± 427.5586704670355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568065.9409179688,
            "unit": "ns",
            "range": "± 873.0966321989742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979000.2391304348,
            "unit": "ns",
            "range": "± 80878.58084113651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1876229.6515151516,
            "unit": "ns",
            "range": "± 58892.890571104384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1568354.611111111,
            "unit": "ns",
            "range": "± 97955.94909564753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7728426.344827586,
            "unit": "ns",
            "range": "± 220345.98770574355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2377837.066666667,
            "unit": "ns",
            "range": "± 58581.19071848406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2491630.2666666666,
            "unit": "ns",
            "range": "± 43384.01024647983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3153104.1,
            "unit": "ns",
            "range": "± 55896.597240925905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3154059.9056603773,
            "unit": "ns",
            "range": "± 127657.06920921803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8949475.684210526,
            "unit": "ns",
            "range": "± 178521.77807765035"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36622.51685393258,
            "unit": "ns",
            "range": "± 2292.672280194404"
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
          "id": "01ff04787bdd1c89b75d7d821718b9a2bd40f994",
          "message": "Merge pull request #3758 from greymistcube/release/4.4.1\n\n🚀 Release 4.4.1",
          "timestamp": "2024-04-18T16:05:22+09:00",
          "tree_id": "6ffc1104a7fa6713ef80a0c59ec9b8066316b36b",
          "url": "https://github.com/planetarium/libplanet/commit/01ff04787bdd1c89b75d7d821718b9a2bd40f994"
        },
        "date": 1713424477111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203593.77272727274,
            "unit": "ns",
            "range": "± 7273.9754488771005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196430.8431372549,
            "unit": "ns",
            "range": "± 7721.556074710716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168653.57142857142,
            "unit": "ns",
            "range": "± 3925.319905070523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3132930.0714285714,
            "unit": "ns",
            "range": "± 36996.503738584826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2902065.8,
            "unit": "ns",
            "range": "± 45843.125506136996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12425.85393258427,
            "unit": "ns",
            "range": "± 712.2418439904735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60185.26136363636,
            "unit": "ns",
            "range": "± 3319.1863045040595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51816.42105263158,
            "unit": "ns",
            "range": "± 1128.2220681619906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57906.778350515466,
            "unit": "ns",
            "range": "± 9834.448777916528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6519.94623655914,
            "unit": "ns",
            "range": "± 647.952433264762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14787.876288659794,
            "unit": "ns",
            "range": "± 1652.8448597401439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5750394.566666666,
            "unit": "ns",
            "range": "± 32151.40255653524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14686226.142857144,
            "unit": "ns",
            "range": "± 78038.83679381611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37889616.384615384,
            "unit": "ns",
            "range": "± 297372.5368398866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76459006.07142857,
            "unit": "ns",
            "range": "± 407146.37099856633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151891025.46666667,
            "unit": "ns",
            "range": "± 633419.3106628123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3730944.349609375,
            "unit": "ns",
            "range": "± 4427.376941215119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222949.408984375,
            "unit": "ns",
            "range": "± 1243.2835545746002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763634.0577473958,
            "unit": "ns",
            "range": "± 2106.845920238192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947282.9872395834,
            "unit": "ns",
            "range": "± 2393.370322815729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617965.553109976,
            "unit": "ns",
            "range": "± 444.3721981760641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575400.1196289062,
            "unit": "ns",
            "range": "± 857.7936949681738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968799.3804347826,
            "unit": "ns",
            "range": "± 69887.56195487532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1856365.7666666666,
            "unit": "ns",
            "range": "± 53795.53217679938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1604251.1382978724,
            "unit": "ns",
            "range": "± 91436.75342929858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7699735.74,
            "unit": "ns",
            "range": "± 203724.865346272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2390892.4137931033,
            "unit": "ns",
            "range": "± 68367.30663091473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2502306.3333333335,
            "unit": "ns",
            "range": "± 40520.94828192779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3104705.285714286,
            "unit": "ns",
            "range": "± 33362.46991739387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3157688.3636363638,
            "unit": "ns",
            "range": "± 110319.57015344757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8900864.961538462,
            "unit": "ns",
            "range": "± 130836.25123069892"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39745.04081632653,
            "unit": "ns",
            "range": "± 5404.728092702612"
          }
        ]
      }
    ]
  }
}