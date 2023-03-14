window.BENCHMARK_DATA = {
  "lastUpdate": 1678781199058,
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
      }
    ]
  }
}