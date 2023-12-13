window.BENCHMARK_DATA = {
  "lastUpdate": 1702442749545,
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
      }
    ]
  }
}