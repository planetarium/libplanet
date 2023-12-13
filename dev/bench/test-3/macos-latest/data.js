window.BENCHMARK_DATA = {
  "lastUpdate": 1702446652428,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "5ef1e1094847ca1b7887b0897cefac447dd8a958",
          "message": "test3",
          "timestamp": "2023-12-13T13:24:30+09:00",
          "tree_id": "fe73a0403a8174c1132ef7c299be91fadf3e515f",
          "url": "https://github.com/planetarium/libplanet/commit/5ef1e1094847ca1b7887b0897cefac447dd8a958"
        },
        "date": 1702442676578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9311363.42857143,
            "unit": "ns",
            "range": "± 67367.83198314972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22726574.4,
            "unit": "ns",
            "range": "± 241175.4297609937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56037868.71428572,
            "unit": "ns",
            "range": "± 270313.27722625225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113065121.53333333,
            "unit": "ns",
            "range": "± 811860.0426740407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236253762.1744186,
            "unit": "ns",
            "range": "± 8712400.834863517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38713.653846153844,
            "unit": "ns",
            "range": "± 4074.9784182743483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235258.97474747474,
            "unit": "ns",
            "range": "± 21647.55740019562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219012.7105263158,
            "unit": "ns",
            "range": "± 10993.825905862846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201625.17346938775,
            "unit": "ns",
            "range": "± 17417.75377473304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3884239.3378378376,
            "unit": "ns",
            "range": "± 193313.54057034702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3616231.5,
            "unit": "ns",
            "range": "± 171803.97741634105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14026.876344086022,
            "unit": "ns",
            "range": "± 1028.584199106571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61490.479166666664,
            "unit": "ns",
            "range": "± 5846.001145144866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59213.45054945055,
            "unit": "ns",
            "range": "± 6776.775467668539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66872.40816326531,
            "unit": "ns",
            "range": "± 12182.029795560864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3759.257894736842,
            "unit": "ns",
            "range": "± 614.6393115597713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12349.478260869566,
            "unit": "ns",
            "range": "± 1379.4910550455877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1120006.23,
            "unit": "ns",
            "range": "± 83420.2695335347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2261254.1853932585,
            "unit": "ns",
            "range": "± 121737.47888830995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1598860.6464646466,
            "unit": "ns",
            "range": "± 104155.03000338672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7242085.813186813,
            "unit": "ns",
            "range": "± 788349.4722572232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4124567.195402299,
            "unit": "ns",
            "range": "± 856114.1872280585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3866930.818681319,
            "unit": "ns",
            "range": "± 378380.51407594327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4325218.637254902,
            "unit": "ns",
            "range": "± 174897.1019267066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4047530.25,
            "unit": "ns",
            "range": "± 179904.9103151793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13562379.328282828,
            "unit": "ns",
            "range": "± 1697455.4122996002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4606272.933763587,
            "unit": "ns",
            "range": "± 176301.1555685505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1371769.6674547698,
            "unit": "ns",
            "range": "± 29468.85599936517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 933276.1644665948,
            "unit": "ns",
            "range": "± 26511.303064495398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2124390.0466844514,
            "unit": "ns",
            "range": "± 75260.79201881164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 756026.1004435221,
            "unit": "ns",
            "range": "± 118986.3982925655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585513.9613665957,
            "unit": "ns",
            "range": "± 27561.94906674766"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "96d1945486f2792d80d35a6a48fea7388806b057",
          "message": "test",
          "timestamp": "2023-12-13T14:30:16+09:00",
          "tree_id": "a7e5d3d4770aec493492262b898eb5fc8338b5bc",
          "url": "https://github.com/planetarium/libplanet/commit/96d1945486f2792d80d35a6a48fea7388806b057"
        },
        "date": 1702446597215,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7976193.777777778,
            "unit": "ns",
            "range": "± 164184.00664840708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20778463.85714286,
            "unit": "ns",
            "range": "± 314322.48471021146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52264584.35714286,
            "unit": "ns",
            "range": "± 1235560.5680600724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105350915.06666666,
            "unit": "ns",
            "range": "± 1226457.9112640633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215890770,
            "unit": "ns",
            "range": "± 4201131.581799745"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56251.84444444445,
            "unit": "ns",
            "range": "± 10911.489528655451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320907.16842105263,
            "unit": "ns",
            "range": "± 97337.8817309322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245422.05376344087,
            "unit": "ns",
            "range": "± 40412.44194669389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243209.79591836734,
            "unit": "ns",
            "range": "± 41346.91048386825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4684738.945652174,
            "unit": "ns",
            "range": "± 267937.18327886955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3507288.619047619,
            "unit": "ns",
            "range": "± 78214.99611677813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16142.302197802197,
            "unit": "ns",
            "range": "± 2772.0055644475988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95046.56989247311,
            "unit": "ns",
            "range": "± 15207.965190905039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92994.59574468085,
            "unit": "ns",
            "range": "± 19612.1075273102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65061.967741935485,
            "unit": "ns",
            "range": "± 15978.044011849519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4066.1041666666665,
            "unit": "ns",
            "range": "± 994.2049929378026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14059.465517241379,
            "unit": "ns",
            "range": "± 1311.460054878264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1530762.3723404256,
            "unit": "ns",
            "range": "± 321117.4052231473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3187563.9166666665,
            "unit": "ns",
            "range": "± 480077.64953144314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1866646.375,
            "unit": "ns",
            "range": "± 291374.07629362156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8984603.934065934,
            "unit": "ns",
            "range": "± 1760615.6222582157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3133609.9943820224,
            "unit": "ns",
            "range": "± 172170.83942510045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3406988.0934065934,
            "unit": "ns",
            "range": "± 360901.3218543872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4301098.532608695,
            "unit": "ns",
            "range": "± 811570.1060046948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3762510.2831325303,
            "unit": "ns",
            "range": "± 438922.2650424018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18691705.90526316,
            "unit": "ns",
            "range": "± 5162355.085291649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4321263.134650735,
            "unit": "ns",
            "range": "± 87374.90129402645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1390184.9503348214,
            "unit": "ns",
            "range": "± 19951.617784292186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 897874.505859375,
            "unit": "ns",
            "range": "± 16370.970985235741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2059401.126328125,
            "unit": "ns",
            "range": "± 100356.39838114486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632311.1848958334,
            "unit": "ns",
            "range": "± 4555.665917419917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578128.6545758928,
            "unit": "ns",
            "range": "± 9297.41906512962"
          }
        ]
      }
    ]
  }
}