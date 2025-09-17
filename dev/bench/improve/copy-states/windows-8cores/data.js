window.BENCHMARK_DATA = {
  "lastUpdate": 1758097700129,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "06028744d9f9f246a52652881c9ce548d352e596",
          "message": "prepare: 5.5.4",
          "timestamp": "2025-09-17T17:16:56+09:00",
          "tree_id": "b1baf97d4dca571c1bf696e880dac1729f6e7822",
          "url": "https://github.com/planetarium/libplanet/commit/06028744d9f9f246a52652881c9ce548d352e596"
        },
        "date": 1758097627422,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012171.4285714285,
            "unit": "ns",
            "range": "± 92528.47235244018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1819422.2222222222,
            "unit": "ns",
            "range": "± 88748.778562866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1521943.2098765431,
            "unit": "ns",
            "range": "± 79037.04026953375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6692294.366197183,
            "unit": "ns",
            "range": "± 327137.907087395"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31537.777777777777,
            "unit": "ns",
            "range": "± 2594.2277228786816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10040366.666666666,
            "unit": "ns",
            "range": "± 154378.87377056055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25532236.666666668,
            "unit": "ns",
            "range": "± 399619.8262396518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65609753.333333336,
            "unit": "ns",
            "range": "± 459526.53718904237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128542813.33333333,
            "unit": "ns",
            "range": "± 1167724.683712895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257216380,
            "unit": "ns",
            "range": "± 2198885.7341195075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3400726.5174278845,
            "unit": "ns",
            "range": "± 3149.4707360794764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1107109.2397836538,
            "unit": "ns",
            "range": "± 891.7964878276589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 793603.5086495535,
            "unit": "ns",
            "range": "± 1373.8613031102202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922766.5201822917,
            "unit": "ns",
            "range": "± 1493.2279907793504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 597504.8409598215,
            "unit": "ns",
            "range": "± 474.131935712229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 606870.0495793269,
            "unit": "ns",
            "range": "± 596.3724765565827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2225693.3333333335,
            "unit": "ns",
            "range": "± 35930.915193836445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283568.1818181816,
            "unit": "ns",
            "range": "± 116947.99083271422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2679795,
            "unit": "ns",
            "range": "± 93786.24345573536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2377764.285714286,
            "unit": "ns",
            "range": "± 31820.2307960217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2967439.1304347827,
            "unit": "ns",
            "range": "± 73266.52304572318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104774.24242424243,
            "unit": "ns",
            "range": "± 4881.02481692147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175729.16666666666,
            "unit": "ns",
            "range": "± 6917.045191727257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173980,
            "unit": "ns",
            "range": "± 10668.323734923464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2766193.3333333335,
            "unit": "ns",
            "range": "± 35879.74889756589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2630240,
            "unit": "ns",
            "range": "± 24151.095804775163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14447.368421052632,
            "unit": "ns",
            "range": "± 1434.4427419186954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60691.30434782609,
            "unit": "ns",
            "range": "± 3939.3381542040415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63065,
            "unit": "ns",
            "range": "± 8452.689190160405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73228.125,
            "unit": "ns",
            "range": "± 11946.201361674941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5194.949494949495,
            "unit": "ns",
            "range": "± 986.270416345287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13411.95652173913,
            "unit": "ns",
            "range": "± 1232.6904722137954"
          }
        ]
      }
    ]
  }
}