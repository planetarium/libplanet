window.BENCHMARK_DATA = {
  "lastUpdate": 1720694939223,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "47aad3fd44f64470dfb29e066e70a5ea8fa9ec57",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-11T19:34:24+09:00",
          "tree_id": "e1ce2f2894f4cd42bcca2e3a3c33fb811626d035",
          "url": "https://github.com/planetarium/libplanet/commit/47aad3fd44f64470dfb29e066e70a5ea8fa9ec57"
        },
        "date": 1720694706638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962532.584269663,
            "unit": "ns",
            "range": "± 53831.33755976097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1788630.8641975308,
            "unit": "ns",
            "range": "± 91988.36290799954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545255.9139784947,
            "unit": "ns",
            "range": "± 131445.1774152694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6515646.153846154,
            "unit": "ns",
            "range": "± 145633.9005335481"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32331.666666666668,
            "unit": "ns",
            "range": "± 1444.509378520184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10226150,
            "unit": "ns",
            "range": "± 60596.30288290634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24219646.153846152,
            "unit": "ns",
            "range": "± 92977.37731463334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61518164.28571428,
            "unit": "ns",
            "range": "± 344289.5105691024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120873253.33333333,
            "unit": "ns",
            "range": "± 1164432.9894641344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247841642.30769232,
            "unit": "ns",
            "range": "± 1370870.8099000056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3259924.3389423075,
            "unit": "ns",
            "range": "± 1975.6464637177905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078652.3567708333,
            "unit": "ns",
            "range": "± 3618.8109868041147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742158.8099888393,
            "unit": "ns",
            "range": "± 3023.1554163854275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947797.935267857,
            "unit": "ns",
            "range": "± 2987.850561985066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642466.064453125,
            "unit": "ns",
            "range": "± 1220.091556675281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555266.1539713541,
            "unit": "ns",
            "range": "± 844.484253478449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141800,
            "unit": "ns",
            "range": "± 45801.273635857186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2186700,
            "unit": "ns",
            "range": "± 63696.76005401931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2727189.285714286,
            "unit": "ns",
            "range": "± 76204.58982621724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2211892.3076923075,
            "unit": "ns",
            "range": "± 26649.279588088353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2878900,
            "unit": "ns",
            "range": "± 38356.92696441995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181448.86363636365,
            "unit": "ns",
            "range": "± 9374.341286506688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163826.66666666666,
            "unit": "ns",
            "range": "± 8201.175481556244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144593.75,
            "unit": "ns",
            "range": "± 2782.916635474372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2778092.8571428573,
            "unit": "ns",
            "range": "± 29384.72822313068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2427153.3333333335,
            "unit": "ns",
            "range": "± 29546.95697811649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10896.875,
            "unit": "ns",
            "range": "± 1123.2896355184437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57657.77777777778,
            "unit": "ns",
            "range": "± 3759.7805870053076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44197.82608695652,
            "unit": "ns",
            "range": "± 1303.9238441352118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44080.681818181816,
            "unit": "ns",
            "range": "± 5366.303078021485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2338.7755102040815,
            "unit": "ns",
            "range": "± 276.4400544855318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9078.651685393259,
            "unit": "ns",
            "range": "± 896.7709637299664"
          }
        ]
      }
    ]
  }
}