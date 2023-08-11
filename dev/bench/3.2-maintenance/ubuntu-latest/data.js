window.BENCHMARK_DATA = {
  "lastUpdate": 1691726378992,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97b3d2e597c067f06b4f45c8a7b8ccb2ac4ae3f3",
          "message": "Merge pull request #3372 from greymistcube/release/3.2.0\n\n🚀 Release 3.2.0",
          "timestamp": "2023-08-11T10:15:50+09:00",
          "tree_id": "1371cd3f03bb4071f0170747f91bc7ad2a1abe94",
          "url": "https://github.com/planetarium/libplanet/commit/97b3d2e597c067f06b4f45c8a7b8ccb2ac4ae3f3"
        },
        "date": 1691723533026,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4278877.181818182,
            "unit": "ns",
            "range": "± 94606.5522756705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4590924.05882353,
            "unit": "ns",
            "range": "± 92458.56572708028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5484825.666666667,
            "unit": "ns",
            "range": "± 160496.84668775473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4906101.823529412,
            "unit": "ns",
            "range": "± 91866.9563181148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7705077.842105263,
            "unit": "ns",
            "range": "± 168488.87635893328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10027351.76923077,
            "unit": "ns",
            "range": "± 129383.02967877577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27695652.133333333,
            "unit": "ns",
            "range": "± 250911.4530383938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69050703.66666667,
            "unit": "ns",
            "range": "± 701233.5990353681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137551748.4,
            "unit": "ns",
            "range": "± 666724.028124595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274250080.26666665,
            "unit": "ns",
            "range": "± 1978836.4159067413"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58175.91358024691,
            "unit": "ns",
            "range": "± 2900.1609403511166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6306018.939732143,
            "unit": "ns",
            "range": "± 9862.629338828963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1995263.0282451923,
            "unit": "ns",
            "range": "± 2053.405054279525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344361.4055524555,
            "unit": "ns",
            "range": "± 1044.6479176805576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3227711.3005022323,
            "unit": "ns",
            "range": "± 2064.7475361367547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1035920.9739583334,
            "unit": "ns",
            "range": "± 657.8747930032412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 945186.1160714285,
            "unit": "ns",
            "range": "± 480.8363621244067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336286.6,
            "unit": "ns",
            "range": "± 7294.2934104609985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325715.04,
            "unit": "ns",
            "range": "± 8624.248467161258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281626.35294117645,
            "unit": "ns",
            "range": "± 5495.351830651706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5458316,
            "unit": "ns",
            "range": "± 63990.89440135771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5085687.214285715,
            "unit": "ns",
            "range": "± 41296.783343125055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23610.45,
            "unit": "ns",
            "range": "± 1257.173702790247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103487.24528301887,
            "unit": "ns",
            "range": "± 4257.089552488885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85404.3125,
            "unit": "ns",
            "range": "± 1516.216594850485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98138.87755102041,
            "unit": "ns",
            "range": "± 13621.450458868481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5854.742268041237,
            "unit": "ns",
            "range": "± 591.2476088455967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21701.074468085106,
            "unit": "ns",
            "range": "± 1473.4975452644135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1764700.5783132531,
            "unit": "ns",
            "range": "± 92199.89433729205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3325108.5454545454,
            "unit": "ns",
            "range": "± 103653.9977337738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2189454.606060606,
            "unit": "ns",
            "range": "± 98996.79170432806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5915220.157894737,
            "unit": "ns",
            "range": "± 246387.15050576325"
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
          "id": "5ea86df31c3e647c4fc061b1048f707f2cc2e940",
          "message": "Merge pull request #3376 from greymistcube/prepare/3.2.1\n\n🔧 Prepare 3.2.1",
          "timestamp": "2023-08-11T12:38:43+09:00",
          "tree_id": "b4396921fa9482f449cd092c685901864dc9aece",
          "url": "https://github.com/planetarium/libplanet/commit/5ea86df31c3e647c4fc061b1048f707f2cc2e940"
        },
        "date": 1691726347624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4373042.742424242,
            "unit": "ns",
            "range": "± 205870.7897210743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4713019.092592592,
            "unit": "ns",
            "range": "± 194612.00057543317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5843817.479166667,
            "unit": "ns",
            "range": "± 229705.4013946383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5212523.098591549,
            "unit": "ns",
            "range": "± 255728.46022636446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8246125.27027027,
            "unit": "ns",
            "range": "± 279828.6568916026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11113803.481481481,
            "unit": "ns",
            "range": "± 463882.24500042223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28860245.931818184,
            "unit": "ns",
            "range": "± 1556634.6483283322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72406967.06666666,
            "unit": "ns",
            "range": "± 1297616.739668396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146100171.23076922,
            "unit": "ns",
            "range": "± 1737366.593155004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295762550.6666667,
            "unit": "ns",
            "range": "± 6200851.91847364"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77930.11578947368,
            "unit": "ns",
            "range": "± 13764.277034953953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6706873.046112805,
            "unit": "ns",
            "range": "± 232341.65528016907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984706.5015625,
            "unit": "ns",
            "range": "± 26914.601078836633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373448.3130580357,
            "unit": "ns",
            "range": "± 15346.094161937543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3429178.3025841345,
            "unit": "ns",
            "range": "± 40271.93166498741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1108964.2250279018,
            "unit": "ns",
            "range": "± 17640.778471416677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 987420.473828125,
            "unit": "ns",
            "range": "± 12230.55371865796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374255.2365591398,
            "unit": "ns",
            "range": "± 27326.775587085092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361184.1034482759,
            "unit": "ns",
            "range": "± 22074.170674739882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332519.68888888886,
            "unit": "ns",
            "range": "± 21803.24179465189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5701699.197530864,
            "unit": "ns",
            "range": "± 299432.40978718473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5521868.4375,
            "unit": "ns",
            "range": "± 214466.16402176072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29783.935483870966,
            "unit": "ns",
            "range": "± 5208.1188768040665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131851.27659574468,
            "unit": "ns",
            "range": "± 14434.136087391544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 141082.131147541,
            "unit": "ns",
            "range": "± 6306.104361319038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134385.20430107528,
            "unit": "ns",
            "range": "± 18337.57020825251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9498.89010989011,
            "unit": "ns",
            "range": "± 994.8259976336391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28463.79120879121,
            "unit": "ns",
            "range": "± 3390.5143776145155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1800443.092783505,
            "unit": "ns",
            "range": "± 142238.27768843572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3569835.0361445784,
            "unit": "ns",
            "range": "± 188267.30614140784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2327151,
            "unit": "ns",
            "range": "± 174225.66107956236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6412996.852631579,
            "unit": "ns",
            "range": "± 373419.72177504573"
          }
        ]
      }
    ]
  }
}