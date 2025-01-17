window.BENCHMARK_DATA = {
  "lastUpdate": 1737091566441,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "062b3c3c638f25bc55ee47f908b08c8972766274",
          "message": "temp: remove static validator from NetMQTransport\n\n(cherry picked from commit d176fe70fd9eb51970e4c8f704a8d7364e326408)",
          "timestamp": "2024-12-17T17:42:39+09:00",
          "tree_id": "620cbdda96fb6d454ac29d56e5a4469a5e845cff",
          "url": "https://github.com/planetarium/libplanet/commit/062b3c3c638f25bc55ee47f908b08c8972766274"
        },
        "date": 1737091541029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999695.5333333333,
            "unit": "ns",
            "range": "± 71847.26371295014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1912406.5882352942,
            "unit": "ns",
            "range": "± 91535.3797919894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574531.6232876712,
            "unit": "ns",
            "range": "± 76126.47731789388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7771357.693548387,
            "unit": "ns",
            "range": "± 227171.59845183397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3874452.477764423,
            "unit": "ns",
            "range": "± 6049.8106669284125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1233094.9458705357,
            "unit": "ns",
            "range": "± 2309.630434713628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763617.2580915178,
            "unit": "ns",
            "range": "± 579.2568964883959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946098.783954327,
            "unit": "ns",
            "range": "± 2058.5787302542135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618380.0123948317,
            "unit": "ns",
            "range": "± 452.1230109956286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565631.0365885417,
            "unit": "ns",
            "range": "± 785.3897538095782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11217376.6,
            "unit": "ns",
            "range": "± 157706.96724703428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27888808.766666666,
            "unit": "ns",
            "range": "± 176264.23171091205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69739593,
            "unit": "ns",
            "range": "± 358875.5494969172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139632659.8,
            "unit": "ns",
            "range": "± 547409.4479336547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280674443.34615386,
            "unit": "ns",
            "range": "± 1570752.014938431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99691.27647058823,
            "unit": "ns",
            "range": "± 5786.445048099728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183618.63513513515,
            "unit": "ns",
            "range": "± 9170.771730084876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171707.0652173913,
            "unit": "ns",
            "range": "± 3342.424444322998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2809275.5384615385,
            "unit": "ns",
            "range": "± 20121.455060935103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2800129.3666666667,
            "unit": "ns",
            "range": "± 49633.58972203439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15194.642857142857,
            "unit": "ns",
            "range": "± 1042.7211257242975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56794.3085106383,
            "unit": "ns",
            "range": "± 4204.358212505991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50466.75,
            "unit": "ns",
            "range": "± 890.6163034663132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51923,
            "unit": "ns",
            "range": "± 7925.405092251667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2669.326530612245,
            "unit": "ns",
            "range": "± 322.42972623664076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10721.082417582418,
            "unit": "ns",
            "range": "± 910.2891490062566"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30773.037037037036,
            "unit": "ns",
            "range": "± 846.8124159495229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2518900.5,
            "unit": "ns",
            "range": "± 46457.82861600708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2547094.066666667,
            "unit": "ns",
            "range": "± 42609.371007304195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3058826.1363636362,
            "unit": "ns",
            "range": "± 74288.6314013155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2555006.933333333,
            "unit": "ns",
            "range": "± 38915.61716525104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3204823.8666666667,
            "unit": "ns",
            "range": "± 54569.513348790366"
          }
        ]
      }
    ]
  }
}