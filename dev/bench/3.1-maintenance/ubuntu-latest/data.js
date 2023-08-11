window.BENCHMARK_DATA = {
  "lastUpdate": 1691717533628,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cfd938b2104134ff6813217bc9fb3a0c4a08b99",
          "message": "Merge pull request #3340 from greymistcube/prepare/3.1.1\n\n🔧 Prepare 3.1.1",
          "timestamp": "2023-07-28T10:37:50+09:00",
          "tree_id": "6ee5a724e33759b64b7913963c94e04ac6daa09c",
          "url": "https://github.com/planetarium/libplanet/commit/1cfd938b2104134ff6813217bc9fb3a0c4a08b99"
        },
        "date": 1690509209219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308285.4948453608,
            "unit": "ns",
            "range": "± 44667.70014043605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279452.376344086,
            "unit": "ns",
            "range": "± 31183.471497041915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242298.52747252746,
            "unit": "ns",
            "range": "± 28097.175547390947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3977097.0212765955,
            "unit": "ns",
            "range": "± 231658.78386067296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3649443.2210526317,
            "unit": "ns",
            "range": "± 251201.06422918706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26968.87,
            "unit": "ns",
            "range": "± 10478.30365700403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94110.20833333333,
            "unit": "ns",
            "range": "± 16886.12803950825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88621.6170212766,
            "unit": "ns",
            "range": "± 14837.595419414993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112206.40425531915,
            "unit": "ns",
            "range": "± 20472.168245010707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4870.707317073171,
            "unit": "ns",
            "range": "± 806.3592999938305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24126.161616161615,
            "unit": "ns",
            "range": "± 9629.580411003433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1382372.8510638298,
            "unit": "ns",
            "range": "± 187442.05574580678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2700167.9793814435,
            "unit": "ns",
            "range": "± 231956.91068233183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1749941.4845360825,
            "unit": "ns",
            "range": "± 190904.4995964995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5234887.826530612,
            "unit": "ns",
            "range": "± 506519.73653988406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5878083.1484375,
            "unit": "ns",
            "range": "± 101853.44730633617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1819521.6183035714,
            "unit": "ns",
            "range": "± 23407.122079064993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354149.430480957,
            "unit": "ns",
            "range": "± 42068.07021116209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578229.3326480263,
            "unit": "ns",
            "range": "± 56082.072764770135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832406.1469401042,
            "unit": "ns",
            "range": "± 9431.63584975913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773336.6622924805,
            "unit": "ns",
            "range": "± 14627.854585037445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3183890.4591836734,
            "unit": "ns",
            "range": "± 351276.4115071544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3320652.787234043,
            "unit": "ns",
            "range": "± 297674.07893999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4212913.107526882,
            "unit": "ns",
            "range": "± 373225.8573749268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3741284.12371134,
            "unit": "ns",
            "range": "± 417591.35978178616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6705644.958333333,
            "unit": "ns",
            "range": "± 579409.3801125586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8006018.263888889,
            "unit": "ns",
            "range": "± 394447.0683476863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20362479.108433735,
            "unit": "ns",
            "range": "± 1080347.6683615306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52893735.061855674,
            "unit": "ns",
            "range": "± 4010705.6381442393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96644734.58333333,
            "unit": "ns",
            "range": "± 2439958.319306329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194117314.625,
            "unit": "ns",
            "range": "± 3731493.1646782523"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56076.010416666664,
            "unit": "ns",
            "range": "± 12988.603654536048"
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
          "id": "a987187212c0fd2aea272fe3a12bb3c27697fde3",
          "message": "Merge pull request #3336 from greymistcube/release/3.1.0\n\n🚀 Release 3.1.0",
          "timestamp": "2023-07-27T18:11:36+09:00",
          "tree_id": "9f3dede0500307e4f6c807fbded5e335a1915001",
          "url": "https://github.com/planetarium/libplanet/commit/a987187212c0fd2aea272fe3a12bb3c27697fde3"
        },
        "date": 1690509295551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350141.53684210527,
            "unit": "ns",
            "range": "± 39149.74926710029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355821.97959183675,
            "unit": "ns",
            "range": "± 48947.16281784988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295499.08247422683,
            "unit": "ns",
            "range": "± 50123.471528373084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4765743.329896907,
            "unit": "ns",
            "range": "± 531992.2278639416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4258210.548387097,
            "unit": "ns",
            "range": "± 364022.98950399307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33071.278350515466,
            "unit": "ns",
            "range": "± 10681.724753192428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117813.41052631578,
            "unit": "ns",
            "range": "± 19130.504378517668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121621.30612244898,
            "unit": "ns",
            "range": "± 25707.05058222902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129511.75789473685,
            "unit": "ns",
            "range": "± 28326.56129505422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5521.0123456790125,
            "unit": "ns",
            "range": "± 1130.895878207043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32061.939393939392,
            "unit": "ns",
            "range": "± 11730.384764831175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1485671.7835051545,
            "unit": "ns",
            "range": "± 186663.3264291861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3112854.6363636362,
            "unit": "ns",
            "range": "± 341521.4017368385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2007211.2886597938,
            "unit": "ns",
            "range": "± 273802.3398876596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5775307.375,
            "unit": "ns",
            "range": "± 712715.0922108948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6614251.7667682925,
            "unit": "ns",
            "range": "± 237909.57726542887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2259465.5365998643,
            "unit": "ns",
            "range": "± 87014.69534499256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1511969.874375,
            "unit": "ns",
            "range": "± 40126.224027383556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3005912.400607639,
            "unit": "ns",
            "range": "± 62414.53200196911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 928679.1229580966,
            "unit": "ns",
            "range": "± 22209.765943730068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933367.5493164062,
            "unit": "ns",
            "range": "± 20577.36930309485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3845159.3092783503,
            "unit": "ns",
            "range": "± 384679.4589976656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4007009.9368421054,
            "unit": "ns",
            "range": "± 374976.7197261891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5292619.144329897,
            "unit": "ns",
            "range": "± 388089.09306049894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4578288.608247423,
            "unit": "ns",
            "range": "± 486881.2510018817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8255953.010204081,
            "unit": "ns",
            "range": "± 692645.4213525485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8698298.122448979,
            "unit": "ns",
            "range": "± 329717.01452310034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25628996.020833332,
            "unit": "ns",
            "range": "± 1425376.9257777617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68618925.33333333,
            "unit": "ns",
            "range": "± 3188490.4282135884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135324280.96296296,
            "unit": "ns",
            "range": "± 5670854.211979081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263813659.86842105,
            "unit": "ns",
            "range": "± 8876253.366132949"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65988.82978723405,
            "unit": "ns",
            "range": "± 16759.181186300008"
          }
        ]
      },
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
          "id": "e7d8fe2b4efcbda008fa422ca3ad0ed14890a669",
          "message": "Merge pull request #3360 from moreal/cherry-pick-network-bug\n\nCherry-pick #3353 to 3.1.1 version",
          "timestamp": "2023-08-09T19:58:55+09:00",
          "tree_id": "e27048bd25a04e78434e3491b575a7591c39682b",
          "url": "https://github.com/planetarium/libplanet/commit/e7d8fe2b4efcbda008fa422ca3ad0ed14890a669"
        },
        "date": 1691579515387,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3270354.1142857145,
            "unit": "ns",
            "range": "± 106496.90533359931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3400667.5714285714,
            "unit": "ns",
            "range": "± 75710.15649671543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4186021.8,
            "unit": "ns",
            "range": "± 45918.34889266568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3711371.195652174,
            "unit": "ns",
            "range": "± 123921.24404307395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6338508.382352941,
            "unit": "ns",
            "range": "± 196839.1961290438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7584830.8,
            "unit": "ns",
            "range": "± 21666.88445597501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19670009,
            "unit": "ns",
            "range": "± 122963.79548468727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49846330,
            "unit": "ns",
            "range": "± 342914.39671793976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99352081.2,
            "unit": "ns",
            "range": "± 656671.6608834716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200586011.2,
            "unit": "ns",
            "range": "± 1208558.7808550077"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46512.38271604938,
            "unit": "ns",
            "range": "± 2444.8660166147206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6163207.024479167,
            "unit": "ns",
            "range": "± 21650.261191816786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016577.8846153845,
            "unit": "ns",
            "range": "± 4796.683263517827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376967.7536057692,
            "unit": "ns",
            "range": "± 511.2468934259931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554234.2717633927,
            "unit": "ns",
            "range": "± 3295.740038900544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829853.9366536458,
            "unit": "ns",
            "range": "± 495.19791707500383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747801.7035757211,
            "unit": "ns",
            "range": "± 377.9094582315566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279448.64864864864,
            "unit": "ns",
            "range": "± 9488.285807645529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267743.75,
            "unit": "ns",
            "range": "± 10457.856788894236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226111.53846153847,
            "unit": "ns",
            "range": "± 1328.8707370912477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4210201.071428572,
            "unit": "ns",
            "range": "± 30094.569025667395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3775323.6666666665,
            "unit": "ns",
            "range": "± 45160.46374819883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18061.702127659573,
            "unit": "ns",
            "range": "± 1311.824337750182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84711.55128205128,
            "unit": "ns",
            "range": "± 4379.250059285447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71641.17647058824,
            "unit": "ns",
            "range": "± 1383.410108901827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84789.80612244898,
            "unit": "ns",
            "range": "± 11762.079387537095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4473.19587628866,
            "unit": "ns",
            "range": "± 502.6006250654203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16520.454545454544,
            "unit": "ns",
            "range": "± 1125.2748416162622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1326992.4086021506,
            "unit": "ns",
            "range": "± 75032.3651223455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2567765.5588235296,
            "unit": "ns",
            "range": "± 82874.29194622024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1703551.322580645,
            "unit": "ns",
            "range": "± 98203.13299672812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4730356.933333334,
            "unit": "ns",
            "range": "± 139991.46025701694"
          }
        ]
      },
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
          "id": "69bac89710a373b9bf4405b81353d1f99b79f3eb",
          "message": "Merge pull request #3363 from riemannulus/3.1-maintenance\n\n🚀  Release 3.1.1",
          "timestamp": "2023-08-09T20:17:25+09:00",
          "tree_id": "4275059f286345ce564096eb8fa9e68fb3c9d947",
          "url": "https://github.com/planetarium/libplanet/commit/69bac89710a373b9bf4405b81353d1f99b79f3eb"
        },
        "date": 1691581091161,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4568170.957894737,
            "unit": "ns",
            "range": "± 370146.713504826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4733479.895833333,
            "unit": "ns",
            "range": "± 385110.3308167395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6144047.105263158,
            "unit": "ns",
            "range": "± 363792.40227508027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5418851.144329897,
            "unit": "ns",
            "range": "± 351749.83755800535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9207601.075268818,
            "unit": "ns",
            "range": "± 581717.7351922127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10934265.835051546,
            "unit": "ns",
            "range": "± 736687.1577931911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29720662.172413792,
            "unit": "ns",
            "range": "± 795394.9489034662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 76198861.82857142,
            "unit": "ns",
            "range": "± 2473702.5426341174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 152199812.6551724,
            "unit": "ns",
            "range": "± 4441936.019917298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 301078633.6875,
            "unit": "ns",
            "range": "± 9249419.17510096"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65245.77659574468,
            "unit": "ns",
            "range": "± 12108.223824135412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7713584.944791666,
            "unit": "ns",
            "range": "± 118707.51104935636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2491585.3782958984,
            "unit": "ns",
            "range": "± 76322.76206616136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1844984.4700520833,
            "unit": "ns",
            "range": "± 23733.435195157435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3452143.7614397323,
            "unit": "ns",
            "range": "± 25876.53104548538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1144515.0544270833,
            "unit": "ns",
            "range": "± 21310.67055728602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1057353.1140407985,
            "unit": "ns",
            "range": "± 22254.395157503608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 409542.5106382979,
            "unit": "ns",
            "range": "± 58394.90215004037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379530.71428571426,
            "unit": "ns",
            "range": "± 36272.55463211383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342638.1182795699,
            "unit": "ns",
            "range": "± 39889.022200690284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5766148.282608695,
            "unit": "ns",
            "range": "± 393310.5573164247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5351301.71875,
            "unit": "ns",
            "range": "± 371905.1284006008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23586.585365853658,
            "unit": "ns",
            "range": "± 2892.5409477824182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121238.95555555556,
            "unit": "ns",
            "range": "± 16144.897210282474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136166.37234042553,
            "unit": "ns",
            "range": "± 19436.237104281536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139109.63829787233,
            "unit": "ns",
            "range": "± 28345.826582822803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7725.806451612903,
            "unit": "ns",
            "range": "± 1404.8753020484594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23901.188235294117,
            "unit": "ns",
            "range": "± 4113.523111970697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1864004.4270833333,
            "unit": "ns",
            "range": "± 219070.3119222706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3735106.737373737,
            "unit": "ns",
            "range": "± 349596.02243997104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2349652.565217391,
            "unit": "ns",
            "range": "± 196077.11944428174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6983832.494736842,
            "unit": "ns",
            "range": "± 553671.7307615083"
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
          "id": "9d28c1e2dc3a793fefa41a70432581312c7ca839",
          "message": "Merge pull request #3366 from greymistcube/prepare/3.1.2\n\n🔧 Prepare 3.1.2",
          "timestamp": "2023-08-10T15:03:54+09:00",
          "tree_id": "d30ecd7404f1df3761d2e07603c5ace4f72df8b9",
          "url": "https://github.com/planetarium/libplanet/commit/9d28c1e2dc3a793fefa41a70432581312c7ca839"
        },
        "date": 1691648238978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3351580,
            "unit": "ns",
            "range": "± 65200.98334023294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3498458.7333333334,
            "unit": "ns",
            "range": "± 50283.51280555752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4364886.285714285,
            "unit": "ns",
            "range": "± 54573.59735035104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3949650.5517241377,
            "unit": "ns",
            "range": "± 104024.8174577264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6371924.115384615,
            "unit": "ns",
            "range": "± 126175.01279867641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7777958.733333333,
            "unit": "ns",
            "range": "± 35280.930034037745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19869093.714285713,
            "unit": "ns",
            "range": "± 69679.21114808763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51280367.71428572,
            "unit": "ns",
            "range": "± 233771.4776325963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103053019.64285715,
            "unit": "ns",
            "range": "± 282860.3625821289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204969695,
            "unit": "ns",
            "range": "± 387804.5705357643"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46927.944444444445,
            "unit": "ns",
            "range": "± 2613.761194361215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6034180.053013393,
            "unit": "ns",
            "range": "± 12238.010461140708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891527.3864583333,
            "unit": "ns",
            "range": "± 8824.4491099192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363043.4387555805,
            "unit": "ns",
            "range": "± 770.8648443741498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2573275.838448661,
            "unit": "ns",
            "range": "± 1314.2508570967216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827325.9270182292,
            "unit": "ns",
            "range": "± 689.691069029771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732747.287109375,
            "unit": "ns",
            "range": "± 748.2923819478483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287500.9393939394,
            "unit": "ns",
            "range": "± 9111.35246869048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284240.95,
            "unit": "ns",
            "range": "± 6292.595820109787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255321.77083333334,
            "unit": "ns",
            "range": "± 10059.388009047967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4249613.428571428,
            "unit": "ns",
            "range": "± 38846.07771847616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3874198.533333333,
            "unit": "ns",
            "range": "± 31323.768339408853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18676.41935483871,
            "unit": "ns",
            "range": "± 1394.5994229494304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88319.9014084507,
            "unit": "ns",
            "range": "± 4130.105312233678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72842.26315789473,
            "unit": "ns",
            "range": "± 1583.078324801442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91146.69072164949,
            "unit": "ns",
            "range": "± 12154.927655894016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5036.852631578948,
            "unit": "ns",
            "range": "± 499.37812323569557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19662.097826086956,
            "unit": "ns",
            "range": "± 1449.3130169477267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1385427.8924731184,
            "unit": "ns",
            "range": "± 96878.97222380349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2553426.7391304346,
            "unit": "ns",
            "range": "± 64041.59648598954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1765845.0740740742,
            "unit": "ns",
            "range": "± 92986.30718145787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4803599.0344827585,
            "unit": "ns",
            "range": "± 136150.59486058672"
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
          "id": "d3ebc7aea8d3bd73c422cee6bd4bb8f0def50c24",
          "message": "Merge pull request #3367 from greymistcube/backport/bencodex-bump\n\n🔀 ⬆️ Backport Bencodex bump to 0.14.0",
          "timestamp": "2023-08-10T15:18:00+09:00",
          "tree_id": "2fd4fb29c11262bfa240ed8ebc6a274ff8869231",
          "url": "https://github.com/planetarium/libplanet/commit/d3ebc7aea8d3bd73c422cee6bd4bb8f0def50c24"
        },
        "date": 1691649112297,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3514667.230769231,
            "unit": "ns",
            "range": "± 163917.22736841612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3726944.2666666666,
            "unit": "ns",
            "range": "± 141113.8816397142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4388197.2,
            "unit": "ns",
            "range": "± 98062.1748208221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3979622.923076923,
            "unit": "ns",
            "range": "± 136487.59307551204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6387352,
            "unit": "ns",
            "range": "± 159179.02220113395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8090314.2,
            "unit": "ns",
            "range": "± 143714.8891760548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22427513.384615384,
            "unit": "ns",
            "range": "± 151938.12323911034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56580365.13333333,
            "unit": "ns",
            "range": "± 1008382.4303914992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111887006.26666667,
            "unit": "ns",
            "range": "± 1495485.8618616925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223660643.92857143,
            "unit": "ns",
            "range": "± 1985061.9808776157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48581.333333333336,
            "unit": "ns",
            "range": "± 2625.8500922229564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5007192.063701923,
            "unit": "ns",
            "range": "± 16708.073200009116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1576996.137890625,
            "unit": "ns",
            "range": "± 2237.312965665464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1083364.7646484375,
            "unit": "ns",
            "range": "± 1939.067895635708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2597144.5619791667,
            "unit": "ns",
            "range": "± 1344.483994119078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839705.7914713542,
            "unit": "ns",
            "range": "± 603.7375638780342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752312.8939034598,
            "unit": "ns",
            "range": "± 847.7982812900154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281074.76,
            "unit": "ns",
            "range": "± 7290.255106876119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272277.68333333335,
            "unit": "ns",
            "range": "± 11645.199464115654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239247.8,
            "unit": "ns",
            "range": "± 7708.391885395004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4408554.705882353,
            "unit": "ns",
            "range": "± 90313.86295979476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4066744.3125,
            "unit": "ns",
            "range": "± 79034.57216916214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20255.427083333332,
            "unit": "ns",
            "range": "± 1592.2274813989143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88875.49333333333,
            "unit": "ns",
            "range": "± 4277.442748833647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74815.17073170732,
            "unit": "ns",
            "range": "± 2699.333185274087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84626.26530612246,
            "unit": "ns",
            "range": "± 12605.111574483413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5116.357142857143,
            "unit": "ns",
            "range": "± 639.0390861349932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19896.242105263158,
            "unit": "ns",
            "range": "± 1773.6399447259396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1459773.193877551,
            "unit": "ns",
            "range": "± 96469.40495218162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2754323.2439024393,
            "unit": "ns",
            "range": "± 97249.72345764806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1839154.9529411765,
            "unit": "ns",
            "range": "± 95207.67195050961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4758635.388888889,
            "unit": "ns",
            "range": "± 158522.38530941712"
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
          "id": "419d7a510c09c90cfede35fc7973c0af5c10015d",
          "message": "Merge pull request #3369 from greymistcube/release/3.1.2\n\n🚀 Release 3.1.2",
          "timestamp": "2023-08-10T15:46:14+09:00",
          "tree_id": "d1f8a73b811677d56f1cafefd3bd3aa5a52b4c0f",
          "url": "https://github.com/planetarium/libplanet/commit/419d7a510c09c90cfede35fc7973c0af5c10015d"
        },
        "date": 1691651194102,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4011006.1354166665,
            "unit": "ns",
            "range": "± 285125.24178419786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3979858.090909091,
            "unit": "ns",
            "range": "± 326808.4486699869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5586711.87,
            "unit": "ns",
            "range": "± 388447.1355822222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4990200.680851064,
            "unit": "ns",
            "range": "± 359096.3329060076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8296174.804347826,
            "unit": "ns",
            "range": "± 465999.973067236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9817992.8989899,
            "unit": "ns",
            "range": "± 747944.8368314785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27109480.333333332,
            "unit": "ns",
            "range": "± 901416.4565856499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71496720.5625,
            "unit": "ns",
            "range": "± 2772429.531662144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135554464.80952382,
            "unit": "ns",
            "range": "± 4853127.035164196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285474994.05263156,
            "unit": "ns",
            "range": "± 9781928.113560338"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64524.729166666664,
            "unit": "ns",
            "range": "± 15783.762915683596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5794056.1239809785,
            "unit": "ns",
            "range": "± 222412.54384700823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1940980.245390625,
            "unit": "ns",
            "range": "± 50327.55936702148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1265069.9337158203,
            "unit": "ns",
            "range": "± 24101.57626442056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3142631.2182491985,
            "unit": "ns",
            "range": "± 109462.16773148919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029901.4488820044,
            "unit": "ns",
            "range": "± 29484.263947515774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 941726.167497306,
            "unit": "ns",
            "range": "± 27319.713895341778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 358347.1458333333,
            "unit": "ns",
            "range": "± 51201.217436179475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 350148.6391752577,
            "unit": "ns",
            "range": "± 50184.855210549984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319120.0412371134,
            "unit": "ns",
            "range": "± 50342.029504207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4988982.418367347,
            "unit": "ns",
            "range": "± 371143.2926902316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4547480.822916667,
            "unit": "ns",
            "range": "± 387064.41327279166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26273.57894736842,
            "unit": "ns",
            "range": "± 9941.165806221428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113643.25,
            "unit": "ns",
            "range": "± 20815.11507332567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116085.08333333333,
            "unit": "ns",
            "range": "± 25328.055272933445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128317.40425531915,
            "unit": "ns",
            "range": "± 28266.43326211679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7855.620253164557,
            "unit": "ns",
            "range": "± 1044.2689174212949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26091.46875,
            "unit": "ns",
            "range": "± 9358.517106952277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737647.9387755103,
            "unit": "ns",
            "range": "± 201872.16838200839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3513537.6363636362,
            "unit": "ns",
            "range": "± 371855.88866745454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2219466.136842105,
            "unit": "ns",
            "range": "± 221639.49391569296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6282084.46875,
            "unit": "ns",
            "range": "± 471796.853903009"
          }
        ]
      },
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
          "id": "3695e73b4d84d9c0fa5fda105e95f4d70c9135ab",
          "message": "Merge pull request #3370 from greymistcube/prepare/3.1.3\n\n🔧 Prepare 3.1.3",
          "timestamp": "2023-08-11T10:15:27+09:00",
          "tree_id": "70397303ba4a4f4f92fafbf90942603852dd6bde",
          "url": "https://github.com/planetarium/libplanet/commit/3695e73b4d84d9c0fa5fda105e95f4d70c9135ab"
        },
        "date": 1691717503699,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4180951.705882353,
            "unit": "ns",
            "range": "± 77226.04044035656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4383979.3125,
            "unit": "ns",
            "range": "± 81588.5490557907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5276519.529411765,
            "unit": "ns",
            "range": "± 103068.94805063601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4741521,
            "unit": "ns",
            "range": "± 173838.1737435417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7551833.695652174,
            "unit": "ns",
            "range": "± 190631.0955609467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9801492.214285715,
            "unit": "ns",
            "range": "± 130611.75722032577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26739233.866666667,
            "unit": "ns",
            "range": "± 234836.019213063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66834564,
            "unit": "ns",
            "range": "± 610623.6496791035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134038727.13333334,
            "unit": "ns",
            "range": "± 707853.2171890144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263580698,
            "unit": "ns",
            "range": "± 2905647.9179199063"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56517.765957446805,
            "unit": "ns",
            "range": "± 3406.0966857690837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5967467.1875,
            "unit": "ns",
            "range": "± 18934.949741893608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1945246.4142127405,
            "unit": "ns",
            "range": "± 2331.580439902654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303706.5548377405,
            "unit": "ns",
            "range": "± 1821.3481683334837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3130000.6612723214,
            "unit": "ns",
            "range": "± 9621.484335275254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999301.988141741,
            "unit": "ns",
            "range": "± 449.5801005913587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902469.4141276042,
            "unit": "ns",
            "range": "± 319.82043480958004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324054.53571428574,
            "unit": "ns",
            "range": "± 9249.859472334512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312879.3214285714,
            "unit": "ns",
            "range": "± 7341.985189476125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274045.5833333333,
            "unit": "ns",
            "range": "± 3721.315150181411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5249964.785714285,
            "unit": "ns",
            "range": "± 45615.70434565874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4859819.666666667,
            "unit": "ns",
            "range": "± 77415.6456240013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24242.957446808512,
            "unit": "ns",
            "range": "± 2330.8376265155216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99895.203125,
            "unit": "ns",
            "range": "± 4154.160428154794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84399.14,
            "unit": "ns",
            "range": "± 3396.0752678493395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95627.13402061856,
            "unit": "ns",
            "range": "± 13205.2714321378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5915.936842105263,
            "unit": "ns",
            "range": "± 676.8378103360953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21730.36144578313,
            "unit": "ns",
            "range": "± 1179.5467771441092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1739099.1411764706,
            "unit": "ns",
            "range": "± 93377.8161704671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3289922.5483870967,
            "unit": "ns",
            "range": "± 100199.5777818246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2167209.962962963,
            "unit": "ns",
            "range": "± 113117.17992246409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5638292.90625,
            "unit": "ns",
            "range": "± 174741.57606505844"
          }
        ]
      }
    ]
  }
}