window.BENCHMARK_DATA = {
  "lastUpdate": 1678782071471,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "817a98f02924626bbd45d526378b982a9c85b128",
          "message": "Merge pull request #2911 from colibrishin/benchmark/fix/0.46-maintenance\n\nci/bench: cherrypick of bench pr update to 0.46-maintenance",
          "timestamp": "2023-03-10T12:04:29+09:00",
          "tree_id": "03862efdee3eb379f92abe122d993e0ea57039ee",
          "url": "https://github.com/planetarium/libplanet/commit/817a98f02924626bbd45d526378b982a9c85b128"
        },
        "date": 1678418617120,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 150273.88888888888,
            "unit": "ns",
            "range": "± 3135.5034146686385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 120984.6170212766,
            "unit": "ns",
            "range": "± 15136.336603744568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257993.0625,
            "unit": "ns",
            "range": "± 31016.962914818247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251460.97701149425,
            "unit": "ns",
            "range": "± 26438.774956217465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3780916.9264705884,
            "unit": "ns",
            "range": "± 180958.941188352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10843639.988372093,
            "unit": "ns",
            "range": "± 1012081.1239692724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25083.505617977527,
            "unit": "ns",
            "range": "± 3394.702216568138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78140.87634408602,
            "unit": "ns",
            "range": "± 16008.987946934263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58064.9,
            "unit": "ns",
            "range": "± 7761.747607858034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126827.48958333333,
            "unit": "ns",
            "range": "± 24715.469717309817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7453.18,
            "unit": "ns",
            "range": "± 1879.3403306436646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30552.510869565216,
            "unit": "ns",
            "range": "± 6305.0235866689645"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 7805565.670026882,
            "unit": "ns",
            "range": "± 1441166.0469507352"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 10741144.765957447,
            "unit": "ns",
            "range": "± 4372769.5648049135"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 38282997.90860215,
            "unit": "ns",
            "range": "± 7032346.044410875"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 14193980.208333334,
            "unit": "ns",
            "range": "± 5173170.942973357"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38603189.00526316,
            "unit": "ns",
            "range": "± 9231753.260921985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7821721.772054036,
            "unit": "ns",
            "range": "± 588775.1449136307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2124942.351936503,
            "unit": "ns",
            "range": "± 143464.24890230762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367947.7422991071,
            "unit": "ns",
            "range": "± 42761.65111073073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616933.6537873643,
            "unit": "ns",
            "range": "± 59298.605505052015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814318.5039813702,
            "unit": "ns",
            "range": "± 6567.095042279956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744889.8211495535,
            "unit": "ns",
            "range": "± 8691.22868514484"
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
          "id": "0ce281b8b267050a46c1aefca6c8f04e4e082817",
          "message": "Merge pull request #2927 from greymistcube/refactor/validator\n\n♻️🚀 Updated `Validator` bencoding and release 0.46.3",
          "timestamp": "2023-03-14T16:45:09+09:00",
          "tree_id": "01f6ba45b937da56e7e2ab5e83cb6dc8ec80f2e4",
          "url": "https://github.com/planetarium/libplanet/commit/0ce281b8b267050a46c1aefca6c8f04e4e082817"
        },
        "date": 1678781143659,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 149302.08241758242,
            "unit": "ns",
            "range": "± 12101.031024086737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 144860.5,
            "unit": "ns",
            "range": "± 23049.040762143337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315986.93434343435,
            "unit": "ns",
            "range": "± 68642.70080778416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266702.1632653061,
            "unit": "ns",
            "range": "± 39846.61898835291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4132037.984848485,
            "unit": "ns",
            "range": "± 406128.2515503874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11229740.241935484,
            "unit": "ns",
            "range": "± 1081345.0092018344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31453.22680412371,
            "unit": "ns",
            "range": "± 6583.766803511806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82709.32978723405,
            "unit": "ns",
            "range": "± 19040.417066108643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71926.09139784946,
            "unit": "ns",
            "range": "± 16896.853276788446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146261.17021276595,
            "unit": "ns",
            "range": "± 32711.925157230064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8303.673913043478,
            "unit": "ns",
            "range": "± 1218.0240673987282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30746.82967032967,
            "unit": "ns",
            "range": "± 3841.706817013457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5921127.841579861,
            "unit": "ns",
            "range": "± 388456.02695995197"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6917384.215789474,
            "unit": "ns",
            "range": "± 617322.5795181562"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31860198.596774194,
            "unit": "ns",
            "range": "± 1922852.130798058"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8685835.872340426,
            "unit": "ns",
            "range": "± 1238462.6900589662"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35339969.56989247,
            "unit": "ns",
            "range": "± 1998601.909088584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7775840.711616848,
            "unit": "ns",
            "range": "± 298797.488190005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2354712.4231047453,
            "unit": "ns",
            "range": "± 93781.50517908134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1461448.1188964844,
            "unit": "ns",
            "range": "± 51488.943301453815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032395.6301757814,
            "unit": "ns",
            "range": "± 99841.93078347808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 888377.9825334821,
            "unit": "ns",
            "range": "± 28863.127336788722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 817090.814453125,
            "unit": "ns",
            "range": "± 13071.040082307296"
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
          "id": "b3b2e8dcb46ebab9ab9d756206a91ff196877190",
          "message": "Merge pull request #2928 from greymistcube/prepare/0.46.4\n\n🔧 Prepare 0.46.4",
          "timestamp": "2023-03-14T16:58:53+09:00",
          "tree_id": "d4e7792b6442bf1cbf3b9a276a46e7b3aeb4333d",
          "url": "https://github.com/planetarium/libplanet/commit/b3b2e8dcb46ebab9ab9d756206a91ff196877190"
        },
        "date": 1678782018303,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 148795.47674418605,
            "unit": "ns",
            "range": "± 12649.269222999541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 150463.32222222222,
            "unit": "ns",
            "range": "± 22424.843315914623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317737.3541666667,
            "unit": "ns",
            "range": "± 47049.241253679415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290767.06043956045,
            "unit": "ns",
            "range": "± 35690.79973644275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4210768.822916667,
            "unit": "ns",
            "range": "± 331606.7729475282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11334342.331578948,
            "unit": "ns",
            "range": "± 650425.4142969628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 36725.89473684211,
            "unit": "ns",
            "range": "± 6704.974533839789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79915.61538461539,
            "unit": "ns",
            "range": "± 12712.593483776656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77457.50574712643,
            "unit": "ns",
            "range": "± 12694.26960251143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 162608.26923076922,
            "unit": "ns",
            "range": "± 33020.35064793862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11344.604166666666,
            "unit": "ns",
            "range": "± 1333.6810593175776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 36112.307692307695,
            "unit": "ns",
            "range": "± 4256.929315030072"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5781526.215332031,
            "unit": "ns",
            "range": "± 403051.2932159245"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6464702.929292929,
            "unit": "ns",
            "range": "± 455809.78853225766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29513803.918181818,
            "unit": "ns",
            "range": "± 1257786.99201329"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8038114.712765957,
            "unit": "ns",
            "range": "± 538443.4395188403"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 41564171.8367347,
            "unit": "ns",
            "range": "± 3440301.96480519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7769255.9033203125,
            "unit": "ns",
            "range": "± 144076.07925956653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2275207.8518804507,
            "unit": "ns",
            "range": "± 80617.96776028996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1474666.5892903646,
            "unit": "ns",
            "range": "± 61535.70847225825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3024522.0788901416,
            "unit": "ns",
            "range": "± 211635.47979530008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 874812.5762845553,
            "unit": "ns",
            "range": "± 23238.828971102306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809658.8664700255,
            "unit": "ns",
            "range": "± 31703.386880216673"
          }
        ]
      }
    ]
  }
}