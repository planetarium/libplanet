window.BENCHMARK_DATA = {
  "lastUpdate": 1698632618796,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "5cc181748fd4b9e80fcf580c5a15cc6aa0bbf75d",
          "message": "DONT MERGE",
          "timestamp": "2023-10-30T10:51:50+09:00",
          "tree_id": "f230a237a3484e05deb8f4db80ecb1330c00e43d",
          "url": "https://github.com/planetarium/libplanet/commit/5cc181748fd4b9e80fcf580c5a15cc6aa0bbf75d"
        },
        "date": 1698631753918,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8437813.090909092,
            "unit": "ns",
            "range": "± 189504.79523595152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22177945.40909091,
            "unit": "ns",
            "range": "± 832241.1264813213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54452897.88235294,
            "unit": "ns",
            "range": "± 1725340.3429335328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107878627.68421052,
            "unit": "ns",
            "range": "± 4158830.7993260827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219442536.07692307,
            "unit": "ns",
            "range": "± 7650712.575774496"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70548.51063829787,
            "unit": "ns",
            "range": "± 8084.7333226109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315751.7419354839,
            "unit": "ns",
            "range": "± 27446.04887652645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308486.22631578945,
            "unit": "ns",
            "range": "± 26982.00291306959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303966.8275862069,
            "unit": "ns",
            "range": "± 8707.705877427376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4243045.888888889,
            "unit": "ns",
            "range": "± 140014.95721075716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3773265.052631579,
            "unit": "ns",
            "range": "± 81700.32973241886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19585.574468085106,
            "unit": "ns",
            "range": "± 2595.932784429635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89907.31720430107,
            "unit": "ns",
            "range": "± 11327.694692315357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94179.59,
            "unit": "ns",
            "range": "± 12277.255600199349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99939.6,
            "unit": "ns",
            "range": "± 10948.048651933657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6318.871134020618,
            "unit": "ns",
            "range": "± 1142.0293644027179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19515.863636363636,
            "unit": "ns",
            "range": "± 3459.3644329618983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1524986.74,
            "unit": "ns",
            "range": "± 189527.05269868174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2747369.163265306,
            "unit": "ns",
            "range": "± 108668.62808582855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2342455.18,
            "unit": "ns",
            "range": "± 224853.7548629717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10238640.228395062,
            "unit": "ns",
            "range": "± 619175.3113719693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3316355.5555555555,
            "unit": "ns",
            "range": "± 199664.2676289387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3545076.382022472,
            "unit": "ns",
            "range": "± 196105.3978835283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4416305.547169811,
            "unit": "ns",
            "range": "± 181978.6798981774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4277900.693877551,
            "unit": "ns",
            "range": "± 296118.70698593813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15539474.180851065,
            "unit": "ns",
            "range": "± 1820196.3206498781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5839866.83125,
            "unit": "ns",
            "range": "± 83256.96312635856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1824118.5055989583,
            "unit": "ns",
            "range": "± 28164.708303346946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1087097.7098958334,
            "unit": "ns",
            "range": "± 14390.504369370363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2500272.8244140623,
            "unit": "ns",
            "range": "± 55671.12904394017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810594.9723307291,
            "unit": "ns",
            "range": "± 29328.024905958544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 820941.5353515625,
            "unit": "ns",
            "range": "± 11693.229957038076"
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
          "id": "3da86109b54ecccfef8918889c1ecc7b1169a808",
          "message": "DONT MERGE",
          "timestamp": "2023-10-30T10:56:23+09:00",
          "tree_id": "21c37b93f74becf0df3b37da10da8f8884aba749",
          "url": "https://github.com/planetarium/libplanet/commit/3da86109b54ecccfef8918889c1ecc7b1169a808"
        },
        "date": 1698632561298,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8855769.85,
            "unit": "ns",
            "range": "± 197573.47947410002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22893070.120689657,
            "unit": "ns",
            "range": "± 988097.2360923829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56433267.307692304,
            "unit": "ns",
            "range": "± 1495587.277182653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108016894.45121951,
            "unit": "ns",
            "range": "± 3840846.734209463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222706314.1,
            "unit": "ns",
            "range": "± 7658982.471198992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75439.03488372093,
            "unit": "ns",
            "range": "± 7663.16472245473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312493.15934065933,
            "unit": "ns",
            "range": "± 27304.177089969944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286802.29347826086,
            "unit": "ns",
            "range": "± 19963.03457659508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279952.7173913043,
            "unit": "ns",
            "range": "± 24599.214657492794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4155498.3720930233,
            "unit": "ns",
            "range": "± 152447.6690675983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3909724.361445783,
            "unit": "ns",
            "range": "± 208727.75601618172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22250.636842105265,
            "unit": "ns",
            "range": "± 3990.1043995580994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111774.16129032258,
            "unit": "ns",
            "range": "± 16811.889782228223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99016.74489795919,
            "unit": "ns",
            "range": "± 17512.490080682546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102726.76966292135,
            "unit": "ns",
            "range": "± 13934.410389525934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7534.456043956044,
            "unit": "ns",
            "range": "± 978.2622792151842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22721.132183908045,
            "unit": "ns",
            "range": "± 3349.9545853045997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640222.5670103093,
            "unit": "ns",
            "range": "± 236253.20214099335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3120886.5212765955,
            "unit": "ns",
            "range": "± 256986.54942492128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2651474.8659793814,
            "unit": "ns",
            "range": "± 351711.12989481597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11347152.604651162,
            "unit": "ns",
            "range": "± 1101765.019542363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3363949.923076923,
            "unit": "ns",
            "range": "± 233737.77522762705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3720942.7604166665,
            "unit": "ns",
            "range": "± 321363.02312638814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4630372,
            "unit": "ns",
            "range": "± 339836.05342763563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4558847.070707071,
            "unit": "ns",
            "range": "± 392823.1335935424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16422451.1010101,
            "unit": "ns",
            "range": "± 2277823.3219264285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5788106.827566965,
            "unit": "ns",
            "range": "± 66402.57575100815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850022.8263113839,
            "unit": "ns",
            "range": "± 32587.002339352664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1102164.9904947917,
            "unit": "ns",
            "range": "± 19832.97313400618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2894240.3771484373,
            "unit": "ns",
            "range": "± 207429.79379097422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860025.5887207031,
            "unit": "ns",
            "range": "± 18790.370410133106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751346.9753639915,
            "unit": "ns",
            "range": "± 27897.58990219724"
          }
        ]
      }
    ]
  }
}