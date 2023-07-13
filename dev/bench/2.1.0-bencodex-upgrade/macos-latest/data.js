window.BENCHMARK_DATA = {
  "lastUpdate": 1689233182940,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "c36ff21ec0d4c6950d939d947c0c4b66abf52dde",
          "message": "upgrade bencodex to 0.11.0-dev.20230713023748",
          "timestamp": "2023-07-13T16:04:43+09:00",
          "tree_id": "ed6ad96f66b3a43c2b3855d8a84bec52fa144294",
          "url": "https://github.com/planetarium/libplanet/commit/c36ff21ec0d4c6950d939d947c0c4b66abf52dde"
        },
        "date": 1689233107558,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10036477.401098901,
            "unit": "ns",
            "range": "± 790909.8355197577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20948097.75,
            "unit": "ns",
            "range": "± 395179.77182872104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59424929.92929293,
            "unit": "ns",
            "range": "± 4264804.8780444525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120675514.5263158,
            "unit": "ns",
            "range": "± 5875108.063208629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239668862.6111111,
            "unit": "ns",
            "range": "± 4981308.562334717"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 88728.59302325582,
            "unit": "ns",
            "range": "± 12900.935355627063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392806.57446808513,
            "unit": "ns",
            "range": "± 64084.67635224363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370376.7311827957,
            "unit": "ns",
            "range": "± 52192.65311806863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 345147.13636363635,
            "unit": "ns",
            "range": "± 22676.19028047621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4713275.908163265,
            "unit": "ns",
            "range": "± 353968.0538333055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3959775.16,
            "unit": "ns",
            "range": "± 98452.5192786181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18352.397727272728,
            "unit": "ns",
            "range": "± 1519.2720885592666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99743.29787234042,
            "unit": "ns",
            "range": "± 15931.46717610893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113920.60638297872,
            "unit": "ns",
            "range": "± 16889.10949508434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129793.64210526316,
            "unit": "ns",
            "range": "± 32599.424526612325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7005.239583333333,
            "unit": "ns",
            "range": "± 1126.016128189549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20301.01020408163,
            "unit": "ns",
            "range": "± 5182.855878929152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1829448.0543478262,
            "unit": "ns",
            "range": "± 244350.9911144242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3564257.466666667,
            "unit": "ns",
            "range": "± 436206.4639401799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3141950.3333333335,
            "unit": "ns",
            "range": "± 574923.4355216288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8463714.282608695,
            "unit": "ns",
            "range": "± 1627074.946513439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3634136.0721649486,
            "unit": "ns",
            "range": "± 289726.19222384086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4085600.5404040404,
            "unit": "ns",
            "range": "± 560212.1512662553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5083430.04040404,
            "unit": "ns",
            "range": "± 477104.04965006135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5117430.223404256,
            "unit": "ns",
            "range": "± 443937.7103347208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8445632.302083334,
            "unit": "ns",
            "range": "± 673684.3533958008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7184216.180220171,
            "unit": "ns",
            "range": "± 395291.9541202386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2218698.3313802085,
            "unit": "ns",
            "range": "± 51724.46136579842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378771.1960100445,
            "unit": "ns",
            "range": "± 23408.677055395397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2988411.826622596,
            "unit": "ns",
            "range": "± 31236.05188986058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887029.784378986,
            "unit": "ns",
            "range": "± 35101.55514299578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880867.7029622396,
            "unit": "ns",
            "range": "± 22308.376457447474"
          }
        ]
      }
    ]
  }
}