window.BENCHMARK_DATA = {
  "lastUpdate": 1720000357756,
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
          "id": "fc6753889dd22b752b6c4d96ab7e3fd1d1f88ce8",
          "message": "feat: remove feecollector",
          "timestamp": "2024-07-03T18:42:32+09:00",
          "tree_id": "30e6bcd4736388bfd88c89a2a5761353d1af500c",
          "url": "https://github.com/planetarium/libplanet/commit/fc6753889dd22b752b6c4d96ab7e3fd1d1f88ce8"
        },
        "date": 1720000345519,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10844264.57142857,
            "unit": "ns",
            "range": "± 163483.7385767556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26564756.35714286,
            "unit": "ns",
            "range": "± 231491.50954412232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67931017.57142857,
            "unit": "ns",
            "range": "± 117743.89658375196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136438510.15384614,
            "unit": "ns",
            "range": "± 124203.91424377236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273615211.84615386,
            "unit": "ns",
            "range": "± 430919.90114556986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15625.0625,
            "unit": "ns",
            "range": "± 1122.878048517338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110329.83018867925,
            "unit": "ns",
            "range": "± 3765.170604653664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105581.82142857143,
            "unit": "ns",
            "range": "± 4537.950563083186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91597.11111111111,
            "unit": "ns",
            "range": "± 3026.829196915741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3104275.75,
            "unit": "ns",
            "range": "± 138491.34133609955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2703535.47,
            "unit": "ns",
            "range": "± 180509.2751974599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4991.967391304348,
            "unit": "ns",
            "range": "± 555.9621587859297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27147.23404255319,
            "unit": "ns",
            "range": "± 1844.9373983349353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22830.36170212766,
            "unit": "ns",
            "range": "± 1355.1565227301776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31190.39175257732,
            "unit": "ns",
            "range": "± 5882.954606949748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1117.3777777777777,
            "unit": "ns",
            "range": "± 175.51878658549475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4841.611111111111,
            "unit": "ns",
            "range": "± 318.22480550932573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 686868.7315789474,
            "unit": "ns",
            "range": "± 41025.28822138765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1261270.3703703703,
            "unit": "ns",
            "range": "± 32414.859853454374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1056951.177419355,
            "unit": "ns",
            "range": "± 47212.78302432968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9373473.59,
            "unit": "ns",
            "range": "± 1206865.900305323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2164769.785714286,
            "unit": "ns",
            "range": "± 58390.24327323818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2277073.88,
            "unit": "ns",
            "range": "± 90289.32483482288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2562322.1923076925,
            "unit": "ns",
            "range": "± 21467.348246366368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2296958.6,
            "unit": "ns",
            "range": "± 50750.04473982991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3148441.7282608696,
            "unit": "ns",
            "range": "± 265808.9528588425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3023202.9483816964,
            "unit": "ns",
            "range": "± 40405.959876431654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913852.0013521635,
            "unit": "ns",
            "range": "± 2645.1402014864207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 608432.9120442708,
            "unit": "ns",
            "range": "± 3112.3552100819256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1603850.8411458333,
            "unit": "ns",
            "range": "± 26135.821490203238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459535.5752929688,
            "unit": "ns",
            "range": "± 641.5026029143372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 414790.19231770834,
            "unit": "ns",
            "range": "± 1822.6650335794052"
          }
        ]
      }
    ]
  }
}