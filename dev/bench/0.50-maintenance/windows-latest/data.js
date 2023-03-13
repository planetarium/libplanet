window.BENCHMARK_DATA = {
  "lastUpdate": 1678673280936,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "209fdb1c17f0cb26789b857f271544b8935dc5e2",
          "message": "Merge pull request #2905 from colibrishin/0.50-maintenance-bench-failing\n\nci/bench: cherrypick of bench pr update to 0.50-maintenance",
          "timestamp": "2023-03-13T10:51:25+09:00",
          "tree_id": "615717a9642490f590a5330c4a347ecae47b95d4",
          "url": "https://github.com/planetarium/libplanet/commit/209fdb1c17f0cb26789b857f271544b8935dc5e2"
        },
        "date": 1678673236771,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 97228.125,
            "unit": "ns",
            "range": "± 4463.732822905703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4720899.832589285,
            "unit": "ns",
            "range": "± 10330.493781376977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1486738.4635416667,
            "unit": "ns",
            "range": "± 4880.046849833662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174159.1341145833,
            "unit": "ns",
            "range": "± 4103.476800342514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639362.8645833335,
            "unit": "ns",
            "range": "± 7433.28691854573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829200.4807692308,
            "unit": "ns",
            "range": "± 1402.921784806669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761671.7692057291,
            "unit": "ns",
            "range": "± 640.6131683520128"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4532509.401041667,
            "unit": "ns",
            "range": "± 44169.86568681743"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5111835.416666667,
            "unit": "ns",
            "range": "± 201176.03648332928"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24596816,
            "unit": "ns",
            "range": "± 647211.6762698275"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5729966,
            "unit": "ns",
            "range": "± 435122.84605103824"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26993720,
            "unit": "ns",
            "range": "± 616606.1206313152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 85980,
            "unit": "ns",
            "range": "± 5657.586562686046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179914.86486486485,
            "unit": "ns",
            "range": "± 9017.998478422516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169500,
            "unit": "ns",
            "range": "± 10419.71247987512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3515300,
            "unit": "ns",
            "range": "± 47406.81142231324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8867420,
            "unit": "ns",
            "range": "± 146823.41288578117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21212.36559139785,
            "unit": "ns",
            "range": "± 2250.4547356176818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50695.555555555555,
            "unit": "ns",
            "range": "± 4655.597358722274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41026.80412371134,
            "unit": "ns",
            "range": "± 3335.0260950977304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105612.24489795919,
            "unit": "ns",
            "range": "± 18654.665624118115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5830.412371134021,
            "unit": "ns",
            "range": "± 952.4791309238019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18759.79381443299,
            "unit": "ns",
            "range": "± 1950.6761538104356"
          }
        ]
      }
    ]
  }
}