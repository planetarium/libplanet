window.BENCHMARK_DATA = {
  "lastUpdate": 1684228987277,
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
          "id": "329dd0a8838dd9ffe6ccf309df4f80c318524a70",
          "message": "Merge pull request #3167 from greymistcube/release/1.2.0\n\n🚀 Release 1.2.0",
          "timestamp": "2023-05-16T17:54:33+09:00",
          "tree_id": "2085a9782b57ad4f6a8e3a8d2d33efcec83c8ad6",
          "url": "https://github.com/planetarium/libplanet/commit/329dd0a8838dd9ffe6ccf309df4f80c318524a70"
        },
        "date": 1684228933280,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9067299.076086957,
            "unit": "ns",
            "range": "± 578453.5086607559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27403622.908602152,
            "unit": "ns",
            "range": "± 7736944.4330831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58499337.77906977,
            "unit": "ns",
            "range": "± 2153064.426348434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116169300.21052632,
            "unit": "ns",
            "range": "± 8202531.281583148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227402282.85051546,
            "unit": "ns",
            "range": "± 15532918.336978309"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82417.33333333333,
            "unit": "ns",
            "range": "± 10319.436253219923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346748.9574468085,
            "unit": "ns",
            "range": "± 39988.33842910643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337598.6770833333,
            "unit": "ns",
            "range": "± 28520.648710602196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321203.28651685396,
            "unit": "ns",
            "range": "± 19208.908776843335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4268715.088235294,
            "unit": "ns",
            "range": "± 83578.62589955253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3763846.722222222,
            "unit": "ns",
            "range": "± 79891.17395764106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20265.978260869564,
            "unit": "ns",
            "range": "± 3072.756368933098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104553.27319587629,
            "unit": "ns",
            "range": "± 14119.10996258348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121579.47126436782,
            "unit": "ns",
            "range": "± 15845.822548192813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131338.48958333334,
            "unit": "ns",
            "range": "± 20544.991876364675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9406.70652173913,
            "unit": "ns",
            "range": "± 2057.592856585939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27630.333333333332,
            "unit": "ns",
            "range": "± 3570.064097382608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707853.8263157895,
            "unit": "ns",
            "range": "± 229703.7751819023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3093522.842465753,
            "unit": "ns",
            "range": "± 152267.76427848148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2700975.9631578946,
            "unit": "ns",
            "range": "± 281805.75348979904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6863880.828571429,
            "unit": "ns",
            "range": "± 330693.6113616972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3598817.3711340204,
            "unit": "ns",
            "range": "± 276989.1345828659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3810391.2789473683,
            "unit": "ns",
            "range": "± 303331.8868714659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4980943.217171717,
            "unit": "ns",
            "range": "± 459353.33199143497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4985573.170103093,
            "unit": "ns",
            "range": "± 519676.5727485126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8813814.578947369,
            "unit": "ns",
            "range": "± 939292.2987429983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7790599.444562816,
            "unit": "ns",
            "range": "± 567688.8112374077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2252707.3328683036,
            "unit": "ns",
            "range": "± 64293.79374550701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1433573.7207782452,
            "unit": "ns",
            "range": "± 19693.350687686503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3345762.6891324627,
            "unit": "ns",
            "range": "± 158259.05427882177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1038666.5841077303,
            "unit": "ns",
            "range": "± 59201.57383967773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 859752.6114941406,
            "unit": "ns",
            "range": "± 75785.43834143018"
          }
        ]
      }
    ]
  }
}