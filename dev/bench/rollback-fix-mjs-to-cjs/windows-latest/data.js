window.BENCHMARK_DATA = {
  "lastUpdate": 1698372480787,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "330ff7bca7b03ca2c22a8f58155b38dfb937453f",
          "message": "Revert \"fix import mjs to require cjs (#3459)\"\n\nThis reverts commit a5937c2b2a851d33743b66c34d0f38cb4551f544.",
          "timestamp": "2023-10-27T10:47:58+09:00",
          "tree_id": "6f4b6dc9eae1d4afbeef25aec0647e33718abf4f",
          "url": "https://github.com/planetarium/libplanet/commit/330ff7bca7b03ca2c22a8f58155b38dfb937453f"
        },
        "date": 1698372402852,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1613076.5957446808,
            "unit": "ns",
            "range": "± 149225.6589726221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3064572.727272727,
            "unit": "ns",
            "range": "± 92477.57590602463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2395559.090909091,
            "unit": "ns",
            "range": "± 129550.58004489462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10811327.05882353,
            "unit": "ns",
            "range": "± 735299.6432275294"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64343.47826086957,
            "unit": "ns",
            "range": "± 6552.464587035735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9379343.75,
            "unit": "ns",
            "range": "± 170554.3587589208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24842671.42857143,
            "unit": "ns",
            "range": "± 243038.0009177781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63121125,
            "unit": "ns",
            "range": "± 213399.40412713945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129176846.15384616,
            "unit": "ns",
            "range": "± 3521064.7075259234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254480750,
            "unit": "ns",
            "range": "± 2486743.099765388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5636751.603618421,
            "unit": "ns",
            "range": "± 109045.93898186208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1755228.45703125,
            "unit": "ns",
            "range": "± 18846.559389374423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1294542.9236778845,
            "unit": "ns",
            "range": "± 12688.522206775742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3310420.4036458335,
            "unit": "ns",
            "range": "± 44468.78364302781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1033445.8333333334,
            "unit": "ns",
            "range": "± 23669.804407457756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 948492.05078125,
            "unit": "ns",
            "range": "± 14112.180843979997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4153820,
            "unit": "ns",
            "range": "± 123715.47557420503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4202703.703703703,
            "unit": "ns",
            "range": "± 110385.22922886391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5096365,
            "unit": "ns",
            "range": "± 106250.31157849051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4916617.647058823,
            "unit": "ns",
            "range": "± 189260.73941087976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12141600,
            "unit": "ns",
            "range": "± 450545.17931573873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316845.1612903226,
            "unit": "ns",
            "range": "± 9429.80518390765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304181.6666666667,
            "unit": "ns",
            "range": "± 11265.704543882575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295158.3333333333,
            "unit": "ns",
            "range": "± 7316.2663718038875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5019253.846153846,
            "unit": "ns",
            "range": "± 47519.357728975665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4676280.769230769,
            "unit": "ns",
            "range": "± 57687.150282296905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29527.36842105263,
            "unit": "ns",
            "range": "± 2694.693055005391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111430.61224489796,
            "unit": "ns",
            "range": "± 8098.767351330851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102862.1052631579,
            "unit": "ns",
            "range": "± 7354.578526873633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109356.98924731182,
            "unit": "ns",
            "range": "± 10506.896263774057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8509.278350515464,
            "unit": "ns",
            "range": "± 1308.7113950233331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28026.80412371134,
            "unit": "ns",
            "range": "± 2802.7336158917215"
          }
        ]
      }
    ]
  }
}