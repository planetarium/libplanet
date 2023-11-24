window.BENCHMARK_DATA = {
  "lastUpdate": 1700799437062,
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
          "id": "115a4231a838e45a141426ede38a5d933c9a432c",
          "message": "Merge pull request #3515 from greymistcube/release/3.8.0\n\n🚀 Release 3.8.0",
          "timestamp": "2023-11-24T11:30:13+09:00",
          "tree_id": "f9a64dcd90f39b126c39cd08c734efccb86d5d65",
          "url": "https://github.com/planetarium/libplanet/commit/115a4231a838e45a141426ede38a5d933c9a432c"
        },
        "date": 1700794476629,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7608926.296296297,
            "unit": "ns",
            "range": "± 205567.69586754977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18869540.692307692,
            "unit": "ns",
            "range": "± 253920.80617861435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47568145.84375,
            "unit": "ns",
            "range": "± 1471881.310064164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94996312.64444445,
            "unit": "ns",
            "range": "± 3583841.2504399912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199343499.2948718,
            "unit": "ns",
            "range": "± 10139638.182855273"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36189.681818181816,
            "unit": "ns",
            "range": "± 4482.653964367908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222562.19791666666,
            "unit": "ns",
            "range": "± 21826.175183707528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216692.74468085106,
            "unit": "ns",
            "range": "± 15211.571635157577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190735.86666666667,
            "unit": "ns",
            "range": "± 12651.285016626181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3712201.964285714,
            "unit": "ns",
            "range": "± 104366.64234020872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3449361.205882353,
            "unit": "ns",
            "range": "± 65694.40183889787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12717.644444444444,
            "unit": "ns",
            "range": "± 803.6282794213025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57789.23333333333,
            "unit": "ns",
            "range": "± 4306.063411965176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56965.05434782609,
            "unit": "ns",
            "range": "± 9446.33211958469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88753.88144329897,
            "unit": "ns",
            "range": "± 24289.703644001136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5257.375,
            "unit": "ns",
            "range": "± 1398.6007010768412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18445.694736842106,
            "unit": "ns",
            "range": "± 4328.785592252799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1054623.14,
            "unit": "ns",
            "range": "± 102431.74363961059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2320695.6157894735,
            "unit": "ns",
            "range": "± 186982.8258169924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1513540.5368421052,
            "unit": "ns",
            "range": "± 91105.00658998893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6611064.295698925,
            "unit": "ns",
            "range": "± 517425.56761141063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2927734.4137931033,
            "unit": "ns",
            "range": "± 123925.07705486346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3001735.5789473685,
            "unit": "ns",
            "range": "± 148941.8383947473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3594790.9545454546,
            "unit": "ns",
            "range": "± 84767.84148342897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3420917.6025641025,
            "unit": "ns",
            "range": "± 174302.60032845772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12483499.122448979,
            "unit": "ns",
            "range": "± 2433437.4314358993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5537455.165178572,
            "unit": "ns",
            "range": "± 543946.8531728353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869563.1249023438,
            "unit": "ns",
            "range": "± 37391.15341275621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1220001.2100260416,
            "unit": "ns",
            "range": "± 20236.805883106914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2930422.875892857,
            "unit": "ns",
            "range": "± 96045.64902509647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875793.5485587284,
            "unit": "ns",
            "range": "± 25153.770649935323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768221.6151855469,
            "unit": "ns",
            "range": "± 17182.639919541285"
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
          "id": "ca5f07bd78696bd410b3135c9c5f55a7c6722619",
          "message": "Merge pull request #3517 from greymistcube/prepare/3.9.0\n\n🔧 Prepare 3.9.0",
          "timestamp": "2023-11-24T13:03:38+09:00",
          "tree_id": "523cbc8c13e1d1c7c7efc4a98ee9d3ab351bdcda",
          "url": "https://github.com/planetarium/libplanet/commit/ca5f07bd78696bd410b3135c9c5f55a7c6722619"
        },
        "date": 1700799388257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7656826.264705882,
            "unit": "ns",
            "range": "± 99097.36618569223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18823789.083333332,
            "unit": "ns",
            "range": "± 139726.53392606726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46493613.15384615,
            "unit": "ns",
            "range": "± 687552.5339523575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92823515.61538461,
            "unit": "ns",
            "range": "± 2163982.022807733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188079469.16666666,
            "unit": "ns",
            "range": "± 2788197.869620618"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34086.806818181816,
            "unit": "ns",
            "range": "± 2855.631294248018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222225.59595959596,
            "unit": "ns",
            "range": "± 18448.33978809818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211065.64835164836,
            "unit": "ns",
            "range": "± 14645.996963428175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181728.36842105264,
            "unit": "ns",
            "range": "± 6155.867209730948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3737858.3125,
            "unit": "ns",
            "range": "± 68035.57045665524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3375244.2413793104,
            "unit": "ns",
            "range": "± 89911.74460454269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11940.552941176471,
            "unit": "ns",
            "range": "± 691.1998626591704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58686.586956521736,
            "unit": "ns",
            "range": "± 4691.739732511832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51169.35632183908,
            "unit": "ns",
            "range": "± 2843.3874695143054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59234.9375,
            "unit": "ns",
            "range": "± 9881.760894445888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3176.553191489362,
            "unit": "ns",
            "range": "± 296.2889688365414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12173.333333333334,
            "unit": "ns",
            "range": "± 801.8016230319251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030459.9387755102,
            "unit": "ns",
            "range": "± 82344.82596782551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2201752.7682926827,
            "unit": "ns",
            "range": "± 115529.17263019974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1480828.644329897,
            "unit": "ns",
            "range": "± 88692.85526126453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6301664.780487805,
            "unit": "ns",
            "range": "± 224980.0426233972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2883883.5,
            "unit": "ns",
            "range": "± 126552.499464909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3316565.6153846155,
            "unit": "ns",
            "range": "± 46556.089824602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3542569.8061224488,
            "unit": "ns",
            "range": "± 132639.44629084456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3389037.8983050846,
            "unit": "ns",
            "range": "± 141451.16360739502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12739697.42,
            "unit": "ns",
            "range": "± 2434575.069211754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4368264.868229167,
            "unit": "ns",
            "range": "± 46095.16210859367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1321866.52421875,
            "unit": "ns",
            "range": "± 17446.088846068516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 880819.4617838542,
            "unit": "ns",
            "range": "± 6059.833434691062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971842.5398995536,
            "unit": "ns",
            "range": "± 32631.92248374883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621332.2504557292,
            "unit": "ns",
            "range": "± 7138.434313621779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559248.6001953125,
            "unit": "ns",
            "range": "± 4512.02979620212"
          }
        ]
      }
    ]
  }
}