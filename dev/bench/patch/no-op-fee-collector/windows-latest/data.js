window.BENCHMARK_DATA = {
  "lastUpdate": 1708406463246,
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "94e15d88dbeabdb0d3254ec0f3b491e4baf48109",
          "message": "Disabled fee processing",
          "timestamp": "2024-02-20T14:07:19+09:00",
          "tree_id": "c6e224f14fddc85f3600523f2efe6f98c6385f1a",
          "url": "https://github.com/planetarium/libplanet/commit/94e15d88dbeabdb0d3254ec0f3b491e4baf48109"
        },
        "date": 1708406407277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965297.8494623656,
            "unit": "ns",
            "range": "± 109303.61680886331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1736364.5161290322,
            "unit": "ns",
            "range": "± 70857.06253026419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545513.1313131314,
            "unit": "ns",
            "range": "± 169655.3887981696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6757167.857142857,
            "unit": "ns",
            "range": "± 169265.8593774706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34244.77611940299,
            "unit": "ns",
            "range": "± 1627.9084538040004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5174857.142857143,
            "unit": "ns",
            "range": "± 49254.557997372016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13218083.333333334,
            "unit": "ns",
            "range": "± 278092.77387654816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32904400,
            "unit": "ns",
            "range": "± 257131.66860579426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65816386.666666664,
            "unit": "ns",
            "range": "± 848872.6405118284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134467533.33333334,
            "unit": "ns",
            "range": "± 1359889.6886284915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3420944.5833333335,
            "unit": "ns",
            "range": "± 7307.2384473797465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054281.919642857,
            "unit": "ns",
            "range": "± 2667.8379053598783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737743.3528645834,
            "unit": "ns",
            "range": "± 2175.3911919245643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953409.9330357143,
            "unit": "ns",
            "range": "± 6112.993529944146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630230.76171875,
            "unit": "ns",
            "range": "± 1463.473761906673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575649.658203125,
            "unit": "ns",
            "range": "± 2133.918384868133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2124371.111111111,
            "unit": "ns",
            "range": "± 63846.69715321018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2328116.6666666665,
            "unit": "ns",
            "range": "± 94063.42643179864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2839845.8333333335,
            "unit": "ns",
            "range": "± 100440.73929401892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2825604.761904762,
            "unit": "ns",
            "range": "± 151387.38301485765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7927797.674418605,
            "unit": "ns",
            "range": "± 283682.55102555687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174720,
            "unit": "ns",
            "range": "± 7762.421428953595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165506.25,
            "unit": "ns",
            "range": "± 7611.938387339866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145228.57142857142,
            "unit": "ns",
            "range": "± 3422.7390869218843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2911673.3333333335,
            "unit": "ns",
            "range": "± 51081.84562426217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2480135.714285714,
            "unit": "ns",
            "range": "± 37046.51145504811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11031.182795698925,
            "unit": "ns",
            "range": "± 1437.6897602255212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54689.24731182796,
            "unit": "ns",
            "range": "± 5297.404252896585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45186.95652173913,
            "unit": "ns",
            "range": "± 1639.3235319826522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54938.709677419356,
            "unit": "ns",
            "range": "± 9449.994619944002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2466.326530612245,
            "unit": "ns",
            "range": "± 531.859968693997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10132.978723404256,
            "unit": "ns",
            "range": "± 1435.8983024665467"
          }
        ]
      }
    ]
  }
}