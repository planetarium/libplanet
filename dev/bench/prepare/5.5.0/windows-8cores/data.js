window.BENCHMARK_DATA = {
  "lastUpdate": 1731483278020,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "3c035d5dca56c4b8435bd3fd60228ed8d59a6810",
          "message": "Prepare 5.5.0",
          "timestamp": "2024-11-13T16:14:39+09:00",
          "tree_id": "a1c568e451c39ae91e9e709792c0f94ec87d9ef8",
          "url": "https://github.com/planetarium/libplanet/commit/3c035d5dca56c4b8435bd3fd60228ed8d59a6810"
        },
        "date": 1731482813344,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960515.0537634408,
            "unit": "ns",
            "range": "± 97385.14410658395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1740921.31147541,
            "unit": "ns",
            "range": "± 78205.04057658112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1493500,
            "unit": "ns",
            "range": "± 111253.45185409102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6811945.454545454,
            "unit": "ns",
            "range": "± 284154.3684651797"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33624.242424242424,
            "unit": "ns",
            "range": "± 4617.780430455317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9711086.666666666,
            "unit": "ns",
            "range": "± 85416.05625798153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24033293.333333332,
            "unit": "ns",
            "range": "± 225506.81797316228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59427400,
            "unit": "ns",
            "range": "± 612814.0594246932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118309421.42857143,
            "unit": "ns",
            "range": "± 730846.305192266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236574915.3846154,
            "unit": "ns",
            "range": "± 1112637.9531292242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3292159.598214286,
            "unit": "ns",
            "range": "± 7082.325742732606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072594.9739583333,
            "unit": "ns",
            "range": "± 6306.550496345919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738822.6041666666,
            "unit": "ns",
            "range": "± 2409.5661431353656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930771.3932291667,
            "unit": "ns",
            "range": "± 3891.900478825935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617204.0364583334,
            "unit": "ns",
            "range": "± 1762.1114121456596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563001.513671875,
            "unit": "ns",
            "range": "± 1525.9059965143292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2199667.6470588236,
            "unit": "ns",
            "range": "± 44342.25179349429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2288590.625,
            "unit": "ns",
            "range": "± 68052.4909329366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2771289.4736842103,
            "unit": "ns",
            "range": "± 61159.317403509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2357789.4736842103,
            "unit": "ns",
            "range": "± 50618.6603134637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2971223.3333333335,
            "unit": "ns",
            "range": "± 42865.59503955635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95909.78260869565,
            "unit": "ns",
            "range": "± 9197.599540905174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169429.67032967033,
            "unit": "ns",
            "range": "± 11810.875350996494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147010,
            "unit": "ns",
            "range": "± 4394.538146067386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2600042.8571428573,
            "unit": "ns",
            "range": "± 34301.26066949265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2511080,
            "unit": "ns",
            "range": "± 36525.20069368936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10447.368421052632,
            "unit": "ns",
            "range": "± 1484.3038417847076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52265.625,
            "unit": "ns",
            "range": "± 4493.054947711846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44314.92537313433,
            "unit": "ns",
            "range": "± 2097.924929423826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50925.26315789474,
            "unit": "ns",
            "range": "± 9820.527441971832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2282.2916666666665,
            "unit": "ns",
            "range": "± 355.1114848419673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9935.78947368421,
            "unit": "ns",
            "range": "± 1514.6740250019732"
          }
        ]
      }
    ]
  }
}