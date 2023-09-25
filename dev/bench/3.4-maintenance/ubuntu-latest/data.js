window.BENCHMARK_DATA = {
  "lastUpdate": 1695642656938,
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
          "id": "07fbdfd07601ecaf5ff93e4a6c941e4a7a32be1b",
          "message": "Merge pull request #3434 from greymistcube/release/3.4.0\n\n🚀 Release 3.4.0",
          "timestamp": "2023-09-25T17:53:38+09:00",
          "tree_id": "260dfc4ebefa249cd7442ff61da7dfb4918da96d",
          "url": "https://github.com/planetarium/libplanet/commit/07fbdfd07601ecaf5ff93e4a6c941e4a7a32be1b"
        },
        "date": 1695642617610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326972.60869565216,
            "unit": "ns",
            "range": "± 12493.89440305101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316579.74074074073,
            "unit": "ns",
            "range": "± 13197.107962467608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281103.2236842105,
            "unit": "ns",
            "range": "± 14289.688653103383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5293063.9,
            "unit": "ns",
            "range": "± 117352.22866266638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5077074.388888889,
            "unit": "ns",
            "range": "± 105210.15962133007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24021.16304347826,
            "unit": "ns",
            "range": "± 1984.2136387832566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102593.82105263158,
            "unit": "ns",
            "range": "± 6059.350491804447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86134.59340659341,
            "unit": "ns",
            "range": "± 5087.211159101751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102009.35714285714,
            "unit": "ns",
            "range": "± 14248.608006709497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7341.927835051546,
            "unit": "ns",
            "range": "± 853.4653411170091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23954.572916666668,
            "unit": "ns",
            "range": "± 1602.9940128252222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4187641.8170731706,
            "unit": "ns",
            "range": "± 220012.80998862218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4377997.923076923,
            "unit": "ns",
            "range": "± 178202.0523269117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5177589.875,
            "unit": "ns",
            "range": "± 99439.73313176513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5225281.166666667,
            "unit": "ns",
            "range": "± 190115.20461781585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12876149.942307692,
            "unit": "ns",
            "range": "± 527222.0413767498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1647817.0975609757,
            "unit": "ns",
            "range": "± 83991.90997353679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3196785.5714285714,
            "unit": "ns",
            "range": "± 83678.4009351803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2490351.193548387,
            "unit": "ns",
            "range": "± 142662.0845514702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10796612.138888888,
            "unit": "ns",
            "range": "± 352885.24880574766"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57711.943181818184,
            "unit": "ns",
            "range": "± 3177.819194953521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9580609.733333332,
            "unit": "ns",
            "range": "± 277454.8576170649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27014018,
            "unit": "ns",
            "range": "± 262330.4926207906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67310941.16666667,
            "unit": "ns",
            "range": "± 1422488.3847411757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132614299.93333334,
            "unit": "ns",
            "range": "± 2112805.9196847505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261072724.53333333,
            "unit": "ns",
            "range": "± 2911091.187559324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6001028.2765625,
            "unit": "ns",
            "range": "± 97143.560773571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925230.0867745536,
            "unit": "ns",
            "range": "± 33465.08509428109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292086.2875651042,
            "unit": "ns",
            "range": "± 37610.9358110241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3072562.525948661,
            "unit": "ns",
            "range": "± 24027.976223816313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974660.728125,
            "unit": "ns",
            "range": "± 8470.108520024494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894718.9076450893,
            "unit": "ns",
            "range": "± 10728.121920777934"
          }
        ]
      }
    ]
  }
}