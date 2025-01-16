window.BENCHMARK_DATA = {
  "lastUpdate": 1736995574927,
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
          "id": "7696284b6c1d71e81f6ec55c381a9001255f9da4",
          "message": "docs: update docs and workflows required for Libplanet.Node",
          "timestamp": "2025-01-16T11:31:02+09:00",
          "tree_id": "37c19a5175dffd6e72760d54aed179d03f9dab44",
          "url": "https://github.com/planetarium/libplanet/commit/7696284b6c1d71e81f6ec55c381a9001255f9da4"
        },
        "date": 1736995350854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3104000,
            "unit": "ns",
            "range": "± 71397.00273821024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1561281.8181818181,
            "unit": "ns",
            "range": "± 150301.00950667358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4264223.076923077,
            "unit": "ns",
            "range": "± 116712.59506220333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6027384.2465753425,
            "unit": "ns",
            "range": "± 267746.67090947187"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23055.434782608696,
            "unit": "ns",
            "range": "± 2563.0666783948004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9339366.666666666,
            "unit": "ns",
            "range": "± 76336.66659388963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22315546.666666668,
            "unit": "ns",
            "range": "± 274601.59677682316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46598076,
            "unit": "ns",
            "range": "± 250642.524790454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93579730.76923077,
            "unit": "ns",
            "range": "± 133448.52556082804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184251360,
            "unit": "ns",
            "range": "± 502151.90473458474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4086590.5208333335,
            "unit": "ns",
            "range": "± 9374.578905473458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 904796.9466145834,
            "unit": "ns",
            "range": "± 4628.232523165671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724473.80859375,
            "unit": "ns",
            "range": "± 6409.660752392341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635161.0677083333,
            "unit": "ns",
            "range": "± 32756.340749481813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 438510.8138020833,
            "unit": "ns",
            "range": "± 1976.0627392955394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 406515.29715401784,
            "unit": "ns",
            "range": "± 875.7228425695214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2202842.1052631577,
            "unit": "ns",
            "range": "± 36582.13461649573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2780541.1764705884,
            "unit": "ns",
            "range": "± 37117.82016133776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2169346.5517241377,
            "unit": "ns",
            "range": "± 95174.11046965588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2932543.3333333335,
            "unit": "ns",
            "range": "± 37895.63613524964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2508748,
            "unit": "ns",
            "range": "± 100542.46232618458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101325.26315789473,
            "unit": "ns",
            "range": "± 37789.64726071925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178894.73684210525,
            "unit": "ns",
            "range": "± 80505.34588886214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 113453.125,
            "unit": "ns",
            "range": "± 5214.20431008429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2189450,
            "unit": "ns",
            "range": "± 75270.67997007795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2142817.6470588236,
            "unit": "ns",
            "range": "± 42813.87385086343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10964.772727272728,
            "unit": "ns",
            "range": "± 3842.8329998836502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52212.64367816092,
            "unit": "ns",
            "range": "± 13100.291179061998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36811.11111111111,
            "unit": "ns",
            "range": "± 1015.7730414786917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61882.65306122449,
            "unit": "ns",
            "range": "± 23370.145840367415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2932.6530612244896,
            "unit": "ns",
            "range": "± 811.6135780296426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10024.70588235294,
            "unit": "ns",
            "range": "± 3581.330754341016"
          }
        ]
      }
    ]
  }
}