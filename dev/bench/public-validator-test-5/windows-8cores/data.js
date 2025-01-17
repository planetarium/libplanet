window.BENCHMARK_DATA = {
  "lastUpdate": 1737091911928,
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
        "date": 1737091705374,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1007816.6666666666,
            "unit": "ns",
            "range": "± 102116.63781822355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1777673.6842105263,
            "unit": "ns",
            "range": "± 77230.81251842194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545025.2525252525,
            "unit": "ns",
            "range": "± 126051.37140608167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6733978.048780488,
            "unit": "ns",
            "range": "± 242298.6767526756"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30652.68817204301,
            "unit": "ns",
            "range": "± 3484.643060688147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9995506.666666666,
            "unit": "ns",
            "range": "± 84432.79209496973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24586820,
            "unit": "ns",
            "range": "± 392355.59527405386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59857457.14285714,
            "unit": "ns",
            "range": "± 600349.5119374351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121480830.76923077,
            "unit": "ns",
            "range": "± 1003381.7521965534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238568686.66666666,
            "unit": "ns",
            "range": "± 2970761.0566189615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3336847.0252403845,
            "unit": "ns",
            "range": "± 9375.935681304823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073372.16796875,
            "unit": "ns",
            "range": "± 2106.234914259359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746039.7321428572,
            "unit": "ns",
            "range": "± 3311.7947670888157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975111.8229166667,
            "unit": "ns",
            "range": "± 17115.410099287492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619521.1983816965,
            "unit": "ns",
            "range": "± 1826.6495437959452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560423.88671875,
            "unit": "ns",
            "range": "± 1121.4930018277164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2218250,
            "unit": "ns",
            "range": "± 87031.3394275487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2295500,
            "unit": "ns",
            "range": "± 26206.83997620586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2772644.4444444445,
            "unit": "ns",
            "range": "± 56368.65234614238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2394214.285714286,
            "unit": "ns",
            "range": "± 42400.178830226236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2990820,
            "unit": "ns",
            "range": "± 55642.779020667695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100551.57894736843,
            "unit": "ns",
            "range": "± 9467.760111185557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168952.05479452055,
            "unit": "ns",
            "range": "± 7889.657603981745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148902.1739130435,
            "unit": "ns",
            "range": "± 5161.28705440523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2599400,
            "unit": "ns",
            "range": "± 41357.06883783162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2527591.1764705884,
            "unit": "ns",
            "range": "± 51806.60019273038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11424.731182795698,
            "unit": "ns",
            "range": "± 1981.0875314802802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54198.94736842105,
            "unit": "ns",
            "range": "± 4615.826030518151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45070.65217391304,
            "unit": "ns",
            "range": "± 3332.7063234145144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57734.782608695656,
            "unit": "ns",
            "range": "± 10576.019263820637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2543.877551020408,
            "unit": "ns",
            "range": "± 596.2194169088216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10805.263157894737,
            "unit": "ns",
            "range": "± 1599.958006167837"
          }
        ]
      }
    ]
  }
}