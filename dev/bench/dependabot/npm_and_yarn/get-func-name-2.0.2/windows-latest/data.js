window.BENCHMARK_DATA = {
  "lastUpdate": 1695856956269,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e62dcbe4330bc0e15798b4f65b0789d714d781a7",
          "message": "Bump get-func-name from 2.0.0 to 2.0.2\n\nBumps [get-func-name](https://github.com/chaijs/get-func-name) from 2.0.0 to 2.0.2.\n- [Release notes](https://github.com/chaijs/get-func-name/releases)\n- [Commits](https://github.com/chaijs/get-func-name/commits/v2.0.2)\n\n---\nupdated-dependencies:\n- dependency-name: get-func-name\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-09-27T23:04:56Z",
          "tree_id": "936560849fc042d8841fb317d7b814274a9370e6",
          "url": "https://github.com/planetarium/libplanet/commit/e62dcbe4330bc0e15798b4f65b0789d714d781a7"
        },
        "date": 1695856892856,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1290420,
            "unit": "ns",
            "range": "± 137366.99940397812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2443878.846153846,
            "unit": "ns",
            "range": "± 100719.86259031117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1972435.3535353534,
            "unit": "ns",
            "range": "± 162957.09671575154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9021752.222222222,
            "unit": "ns",
            "range": "± 703645.5715687157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47212.63736263736,
            "unit": "ns",
            "range": "± 2702.864667621635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7189766.666666667,
            "unit": "ns",
            "range": "± 38062.02957329121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20273916.666666668,
            "unit": "ns",
            "range": "± 276814.47285312304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50372945,
            "unit": "ns",
            "range": "± 1128821.9301438488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99804250,
            "unit": "ns",
            "range": "± 1948694.8644327738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199267428.57142857,
            "unit": "ns",
            "range": "± 1808451.0365029436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4549237.834821428,
            "unit": "ns",
            "range": "± 20768.35333246697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1400466.7317708333,
            "unit": "ns",
            "range": "± 7232.927487213192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1056752.3716517857,
            "unit": "ns",
            "range": "± 3212.330933883857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637532.6041666665,
            "unit": "ns",
            "range": "± 7594.406930707206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836926.1588541666,
            "unit": "ns",
            "range": "± 7679.853205855579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762887.0954241072,
            "unit": "ns",
            "range": "± 3927.1354133057775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3093769.4444444445,
            "unit": "ns",
            "range": "± 102682.48652853386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3341213.3333333335,
            "unit": "ns",
            "range": "± 53871.7904800259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3927777.777777778,
            "unit": "ns",
            "range": "± 65837.69307976519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3955044,
            "unit": "ns",
            "range": "± 100883.31163610097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10342797.752808988,
            "unit": "ns",
            "range": "± 710817.0994415716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247817.94871794872,
            "unit": "ns",
            "range": "± 7066.74464601897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237396.9696969697,
            "unit": "ns",
            "range": "± 6556.413122302699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202415.21739130435,
            "unit": "ns",
            "range": "± 7750.733797269473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4001563.6363636362,
            "unit": "ns",
            "range": "± 96255.32166094481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4037081.25,
            "unit": "ns",
            "range": "± 75873.58098618165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18284.042553191488,
            "unit": "ns",
            "range": "± 1145.4729212091913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80114.89361702128,
            "unit": "ns",
            "range": "± 6037.641023474807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68354.54545454546,
            "unit": "ns",
            "range": "± 1670.108999216539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76153.26086956522,
            "unit": "ns",
            "range": "± 10946.588119029726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4851.063829787234,
            "unit": "ns",
            "range": "± 497.4655509445586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17738.947368421053,
            "unit": "ns",
            "range": "± 1276.1556912321778"
          }
        ]
      }
    ]
  }
}