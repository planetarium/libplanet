window.BENCHMARK_DATA = {
  "lastUpdate": 1721721107280,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "5fd29a4d7cf9b78d9ee06c66b354b6b621330365",
          "message": "Release 5.2.0",
          "timestamp": "2024-07-23T16:36:39+09:00",
          "tree_id": "4319024302f9589db25f93310ff36acc24e6623a",
          "url": "https://github.com/planetarium/libplanet/commit/5fd29a4d7cf9b78d9ee06c66b354b6b621330365"
        },
        "date": 1721721036547,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10905913.583333334,
            "unit": "ns",
            "range": "± 75586.05978071778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26675313.615384616,
            "unit": "ns",
            "range": "± 245532.65075835248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68055666.2,
            "unit": "ns",
            "range": "± 210654.52188703936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137533550.42857143,
            "unit": "ns",
            "range": "± 379593.61382925825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272490080.71428573,
            "unit": "ns",
            "range": "± 273343.0716025977"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14093.129032258064,
            "unit": "ns",
            "range": "± 422.4966857412797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109308.43661971831,
            "unit": "ns",
            "range": "± 4498.254123966619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105366.98148148147,
            "unit": "ns",
            "range": "± 4417.902014214186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91659.78947368421,
            "unit": "ns",
            "range": "± 2024.0873273581676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2973826.474747475,
            "unit": "ns",
            "range": "± 188667.2300151207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2802181.3469387754,
            "unit": "ns",
            "range": "± 164667.14455207842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4932.978947368421,
            "unit": "ns",
            "range": "± 512.2924276884886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26738.415730337078,
            "unit": "ns",
            "range": "± 1745.6014254599836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22488.33116883117,
            "unit": "ns",
            "range": "± 1104.681371096345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30536.583333333332,
            "unit": "ns",
            "range": "± 5136.459433186631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1099.8020833333333,
            "unit": "ns",
            "range": "± 235.40816154485768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5033,
            "unit": "ns",
            "range": "± 501.16013722768037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 680538.5352941176,
            "unit": "ns",
            "range": "± 30615.901583143677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1273757.9166666667,
            "unit": "ns",
            "range": "± 38687.59477246642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1079004.4157303371,
            "unit": "ns",
            "range": "± 59732.60906661242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9460479.02,
            "unit": "ns",
            "range": "± 1307392.3194244101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2172722.9285714286,
            "unit": "ns",
            "range": "± 20853.421506624927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2327234.942857143,
            "unit": "ns",
            "range": "± 76232.32273006096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2568182.230769231,
            "unit": "ns",
            "range": "± 22781.399847806566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2351245.285714286,
            "unit": "ns",
            "range": "± 85948.64510269808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3188598.595959596,
            "unit": "ns",
            "range": "± 227330.25769405015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3042907.37890625,
            "unit": "ns",
            "range": "± 49860.983426635525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920471.1474609375,
            "unit": "ns",
            "range": "± 4966.235724646423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 620465.0772135417,
            "unit": "ns",
            "range": "± 6856.033074026142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1646466.7852957589,
            "unit": "ns",
            "range": "± 8285.597450340989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463073.85107421875,
            "unit": "ns",
            "range": "± 776.9637348501956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428047.27891322545,
            "unit": "ns",
            "range": "± 978.3435346468402"
          }
        ]
      }
    ]
  }
}