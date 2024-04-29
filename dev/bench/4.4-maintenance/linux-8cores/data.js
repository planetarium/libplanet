window.BENCHMARK_DATA = {
  "lastUpdate": 1714394053601,
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
          "id": "980e86faec3eca09b3c0b2b239b354038e8402df",
          "message": "Merge pull request #3759 from greymistcube/prepare/4.4.2\n\n🔧 Prepare 4.4.2",
          "timestamp": "2024-04-19T14:11:39+09:00",
          "tree_id": "dbde54531bdc4ccc2cbd9936f214caa5716598bd",
          "url": "https://github.com/planetarium/libplanet/commit/980e86faec3eca09b3c0b2b239b354038e8402df"
        },
        "date": 1713504083146,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2348685.4,
            "unit": "ns",
            "range": "± 31957.8844257787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2533213.5625,
            "unit": "ns",
            "range": "± 43497.53984072931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3092464.1428571427,
            "unit": "ns",
            "range": "± 42969.20206131031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3150976.9534883723,
            "unit": "ns",
            "range": "± 110729.271003211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8915482.42857143,
            "unit": "ns",
            "range": "± 221518.469626321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197332.42222222223,
            "unit": "ns",
            "range": "± 7007.501897281517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192219.96666666667,
            "unit": "ns",
            "range": "± 8261.815738925361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170829.85714285713,
            "unit": "ns",
            "range": "± 3005.67766855542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3306973.0714285714,
            "unit": "ns",
            "range": "± 28911.500840334444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2772567.066666667,
            "unit": "ns",
            "range": "± 28376.157525708262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12397.260869565218,
            "unit": "ns",
            "range": "± 974.7420382282409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70153.02127659574,
            "unit": "ns",
            "range": "± 4581.422148500206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52472,
            "unit": "ns",
            "range": "± 1794.9441959756482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58202.77551020408,
            "unit": "ns",
            "range": "± 9913.941059464096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2823.4,
            "unit": "ns",
            "range": "± 395.0273192814939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11940.454022988506,
            "unit": "ns",
            "range": "± 737.4496578489506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5703756.866666666,
            "unit": "ns",
            "range": "± 24073.439287393263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14631529.8,
            "unit": "ns",
            "range": "± 81197.94230784774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37493391.35714286,
            "unit": "ns",
            "range": "± 124268.90572377997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77049141.13333334,
            "unit": "ns",
            "range": "± 342253.4682259557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152273102.73333332,
            "unit": "ns",
            "range": "± 597852.6453298704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987132,
            "unit": "ns",
            "range": "± 79752.53606197865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1867271.1612903227,
            "unit": "ns",
            "range": "± 56952.02759872954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1636499.7828282828,
            "unit": "ns",
            "range": "± 158043.87153256158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7956995.863636363,
            "unit": "ns",
            "range": "± 336756.2696140694"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36095.333333333336,
            "unit": "ns",
            "range": "± 1631.9320834520045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746361.283761161,
            "unit": "ns",
            "range": "± 4514.6341982235135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1234980.18125,
            "unit": "ns",
            "range": "± 1595.5596572202826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765099.3630859375,
            "unit": "ns",
            "range": "± 1661.3954477088369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958597.0296223958,
            "unit": "ns",
            "range": "± 1394.2885425495585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619341.2970703125,
            "unit": "ns",
            "range": "± 960.7016435653213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575734.7294170673,
            "unit": "ns",
            "range": "± 537.9494434433676"
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
          "id": "51e2e17b4380e9fd066b30028a75330d7e22f595",
          "message": "Merge pull request #3763 from greymistcube/feature/raw-state-query\n\n✨ Added `RawStateQuery`",
          "timestamp": "2024-04-29T18:18:54+09:00",
          "tree_id": "47f16d1c6892b647e7e0e5dd599f8fef085d0951",
          "url": "https://github.com/planetarium/libplanet/commit/51e2e17b4380e9fd066b30028a75330d7e22f595"
        },
        "date": 1714382931843,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2402687.3571428573,
            "unit": "ns",
            "range": "± 36637.544072056306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2578782.5714285714,
            "unit": "ns",
            "range": "± 92842.92807699145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3143386.0588235296,
            "unit": "ns",
            "range": "± 61679.35191017188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3226250.2333333334,
            "unit": "ns",
            "range": "± 141845.09129320807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8972982.214285715,
            "unit": "ns",
            "range": "± 256388.0693725471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229750.66,
            "unit": "ns",
            "range": "± 18078.98259362529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218385.57142857142,
            "unit": "ns",
            "range": "± 17161.15378693895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169655.92105263157,
            "unit": "ns",
            "range": "± 5757.376089812512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3227528.1333333333,
            "unit": "ns",
            "range": "± 55489.47274144718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2902470.285714286,
            "unit": "ns",
            "range": "± 49686.41992525735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12858.318681318682,
            "unit": "ns",
            "range": "± 950.44537956477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60764.37234042553,
            "unit": "ns",
            "range": "± 4625.461876929227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52604.38888888889,
            "unit": "ns",
            "range": "± 1982.2710027346986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64880.572164948455,
            "unit": "ns",
            "range": "± 13146.714608004591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3369.409090909091,
            "unit": "ns",
            "range": "± 427.9019824481678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12517,
            "unit": "ns",
            "range": "± 1267.8778460711976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6067426.7,
            "unit": "ns",
            "range": "± 169766.64227294782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14914901.142857144,
            "unit": "ns",
            "range": "± 91590.29664897507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37369143.4,
            "unit": "ns",
            "range": "± 432600.87186158093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77470879.13333334,
            "unit": "ns",
            "range": "± 386863.8637717531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153628452.57142857,
            "unit": "ns",
            "range": "± 543945.9336378818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003555.2121212122,
            "unit": "ns",
            "range": "± 112261.26979445187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1864053.8103448276,
            "unit": "ns",
            "range": "± 80660.42240841386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612935.396551724,
            "unit": "ns",
            "range": "± 87965.01090999847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7781033.263157895,
            "unit": "ns",
            "range": "± 123804.86273201696"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39562.113402061856,
            "unit": "ns",
            "range": "± 5299.549711367563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3833363.4123883927,
            "unit": "ns",
            "range": "± 18440.720309828153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203002.4952566964,
            "unit": "ns",
            "range": "± 1664.3986310364335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763716.201171875,
            "unit": "ns",
            "range": "± 809.8364741897507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954860.9065504808,
            "unit": "ns",
            "range": "± 1283.731350273864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620852.6277204241,
            "unit": "ns",
            "range": "± 472.34746392055933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572287.3764322917,
            "unit": "ns",
            "range": "± 672.1057425052602"
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
          "id": "001085a1bdb136bb4f3e2447ccead27d8646812a",
          "message": "Merge pull request #3770 from greymistcube/release/4.4.2\n\n🚀 Release 4.4.2",
          "timestamp": "2024-04-29T21:24:36+09:00",
          "tree_id": "4b5ed6a261cd3e35dd06354ec30d506d17dc9e74",
          "url": "https://github.com/planetarium/libplanet/commit/001085a1bdb136bb4f3e2447ccead27d8646812a"
        },
        "date": 1714394029984,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2384013.3055555555,
            "unit": "ns",
            "range": "± 77944.43205178544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2471677.5,
            "unit": "ns",
            "range": "± 78311.85740997337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3178965.7,
            "unit": "ns",
            "range": "± 47588.18704438559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3199484.6923076925,
            "unit": "ns",
            "range": "± 77655.76461217504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8795574.06,
            "unit": "ns",
            "range": "± 218012.5501582573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201504.76470588235,
            "unit": "ns",
            "range": "± 6253.808892469405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191858.64102564103,
            "unit": "ns",
            "range": "± 6634.478639283926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170589.61538461538,
            "unit": "ns",
            "range": "± 2645.482896639148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3101629.6428571427,
            "unit": "ns",
            "range": "± 39143.80895710495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2710555.214285714,
            "unit": "ns",
            "range": "± 23851.011490173652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12753.045454545454,
            "unit": "ns",
            "range": "± 681.4341352388773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64788.20202020202,
            "unit": "ns",
            "range": "± 6633.2544894671955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52330.5,
            "unit": "ns",
            "range": "± 663.3240672415092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58159.72448979592,
            "unit": "ns",
            "range": "± 9200.082213640515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3135.564516129032,
            "unit": "ns",
            "range": "± 293.81544808188147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11971.227272727272,
            "unit": "ns",
            "range": "± 571.3644544947996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5959514.7,
            "unit": "ns",
            "range": "± 19308.64626903857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14606931.07142857,
            "unit": "ns",
            "range": "± 65289.83159781796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37874365.692307696,
            "unit": "ns",
            "range": "± 103608.37138907955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76359387.35714285,
            "unit": "ns",
            "range": "± 329438.0267394431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152332721.73076922,
            "unit": "ns",
            "range": "± 365387.3411767194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966739.945652174,
            "unit": "ns",
            "range": "± 72538.39045354137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1862248.1956521738,
            "unit": "ns",
            "range": "± 71019.21098833268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1645973.26,
            "unit": "ns",
            "range": "± 160949.7665346489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7696304.259259259,
            "unit": "ns",
            "range": "± 215184.0503414537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36555.67441860465,
            "unit": "ns",
            "range": "± 1524.1406561759586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3723123.0865384615,
            "unit": "ns",
            "range": "± 3134.7315311716225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200198.132533482,
            "unit": "ns",
            "range": "± 2253.161190538632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769477.4633789062,
            "unit": "ns",
            "range": "± 1022.7194935437456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965059.4760416667,
            "unit": "ns",
            "range": "± 2119.1497716021477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616153.6559709822,
            "unit": "ns",
            "range": "± 605.637909084976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580950.241015625,
            "unit": "ns",
            "range": "± 1376.9654423664665"
          }
        ]
      }
    ]
  }
}