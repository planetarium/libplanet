window.BENCHMARK_DATA = {
  "lastUpdate": 1680768594009,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "7013803d86b79a30979761d9fc311468d94c3f77",
          "message": "Move @planetarium/account to peerDependencies\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-06T16:54:45+09:00",
          "tree_id": "a72d7db71ac4a380392f90874db1c2c93ef29289",
          "url": "https://github.com/planetarium/libplanet/commit/7013803d86b79a30979761d9fc311468d94c3f77"
        },
        "date": 1680768517659,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322064,
            "unit": "ns",
            "range": "± 97285.38412133841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498083.673469388,
            "unit": "ns",
            "range": "± 98961.42419089955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2112898.9795918367,
            "unit": "ns",
            "range": "± 125147.93513698547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5148194.444444444,
            "unit": "ns",
            "range": "± 162161.04507458792"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42465.079365079364,
            "unit": "ns",
            "range": "± 1954.4951274631026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7006700,
            "unit": "ns",
            "range": "± 64758.07726784799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17907300,
            "unit": "ns",
            "range": "± 97908.15162102772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45566126.666666664,
            "unit": "ns",
            "range": "± 327771.2256757026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90814926.66666667,
            "unit": "ns",
            "range": "± 940348.5535136629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183482626.66666666,
            "unit": "ns",
            "range": "± 648402.8613961128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4855111.298076923,
            "unit": "ns",
            "range": "± 4482.618120651697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497299.5396205357,
            "unit": "ns",
            "range": "± 1317.5998677113816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1127709.6484375,
            "unit": "ns",
            "range": "± 912.9021545611096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581424.353966346,
            "unit": "ns",
            "range": "± 8712.37160170187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821721.4285714285,
            "unit": "ns",
            "range": "± 1647.4267041176072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734681.7057291666,
            "unit": "ns",
            "range": "± 543.9431630897891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2968684.210526316,
            "unit": "ns",
            "range": "± 51857.08205312296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3222961.5384615385,
            "unit": "ns",
            "range": "± 41991.65668045536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3973584.210526316,
            "unit": "ns",
            "range": "± 87724.44397187956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3957639.230769231,
            "unit": "ns",
            "range": "± 175573.73462013484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6887336.111111111,
            "unit": "ns",
            "range": "± 228551.76363075862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298120,
            "unit": "ns",
            "range": "± 7888.594997493708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244470.73170731709,
            "unit": "ns",
            "range": "± 8645.67070568961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225927.7108433735,
            "unit": "ns",
            "range": "± 12055.5959403235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5277315.384615385,
            "unit": "ns",
            "range": "± 24643.68905534255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3639546.6666666665,
            "unit": "ns",
            "range": "± 34046.85566909786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18323.958333333332,
            "unit": "ns",
            "range": "± 1874.0187490870587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82387.36842105263,
            "unit": "ns",
            "range": "± 6103.560908770983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77763.63636363637,
            "unit": "ns",
            "range": "± 8801.489374722787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 162621.42857142858,
            "unit": "ns",
            "range": "± 16715.547735042193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5353.191489361702,
            "unit": "ns",
            "range": "± 584.6977213083136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16929.166666666668,
            "unit": "ns",
            "range": "± 1901.296879648574"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "1bef4ea10d764a929a3c400df62c2819bc02160c",
          "message": "Move @planetarium/account to peerDependencies\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-06T16:56:20+09:00",
          "tree_id": "e13dadff5e4df1e6fb6e907b34bf8f04f3295ce4",
          "url": "https://github.com/planetarium/libplanet/commit/1bef4ea10d764a929a3c400df62c2819bc02160c"
        },
        "date": 1680768557332,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1081885.1063829786,
            "unit": "ns",
            "range": "± 120479.15891466153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1860408.6956521738,
            "unit": "ns",
            "range": "± 67210.31278700863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1672769.7916666667,
            "unit": "ns",
            "range": "± 159584.33383063218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3960695.652173913,
            "unit": "ns",
            "range": "± 149693.54317927416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34456.71641791045,
            "unit": "ns",
            "range": "± 1648.89530334495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5190220,
            "unit": "ns",
            "range": "± 19868.7191333513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13760928.57142857,
            "unit": "ns",
            "range": "± 191176.78258042267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32235442.85714286,
            "unit": "ns",
            "range": "± 151390.4819398433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65256426.666666664,
            "unit": "ns",
            "range": "± 505946.04097764456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131231500,
            "unit": "ns",
            "range": "± 617562.4203891645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3661813.5416666665,
            "unit": "ns",
            "range": "± 11940.180461426839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1134920.46875,
            "unit": "ns",
            "range": "± 5379.21639878756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 813211.5169270834,
            "unit": "ns",
            "range": "± 4789.979256521412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2026055.390625,
            "unit": "ns",
            "range": "± 4420.156828669327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632748.7932477678,
            "unit": "ns",
            "range": "± 1644.4154330709434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578534.9088541666,
            "unit": "ns",
            "range": "± 814.9790216922672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2318217.6470588236,
            "unit": "ns",
            "range": "± 45424.52855140763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2332712.328767123,
            "unit": "ns",
            "range": "± 112949.7367873642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2888741.8604651163,
            "unit": "ns",
            "range": "± 106810.30187642224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2949890.625,
            "unit": "ns",
            "range": "± 130652.73701110155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5030821.739130435,
            "unit": "ns",
            "range": "± 122661.89286194106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216340.57971014493,
            "unit": "ns",
            "range": "± 9315.31501220657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175417.3076923077,
            "unit": "ns",
            "range": "± 7237.476571233607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151108.69565217392,
            "unit": "ns",
            "range": "± 5768.027819587578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3823844.4444444445,
            "unit": "ns",
            "range": "± 79821.6926303814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2662557.1428571427,
            "unit": "ns",
            "range": "± 41318.78813260685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10982.978723404256,
            "unit": "ns",
            "range": "± 1072.8956194780214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54291.9540229885,
            "unit": "ns",
            "range": "± 2954.9414030630037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46846,
            "unit": "ns",
            "range": "± 1899.324262220968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121572.68041237113,
            "unit": "ns",
            "range": "± 16074.478381600748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3112.8865979381444,
            "unit": "ns",
            "range": "± 527.4386985764448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9247.777777777777,
            "unit": "ns",
            "range": "± 1091.4610121638143"
          }
        ]
      }
    ]
  }
}