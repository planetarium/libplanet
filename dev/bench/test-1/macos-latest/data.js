window.BENCHMARK_DATA = {
  "lastUpdate": 1702439088245,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "322aa27dda1141672d71f71da287cc837ed67534",
          "message": "fix",
          "timestamp": "2023-12-13T12:25:55+09:00",
          "tree_id": "7ec0f9e4d19c79a808eb486058fce582c01f0188",
          "url": "https://github.com/planetarium/libplanet/commit/322aa27dda1141672d71f71da287cc837ed67534"
        },
        "date": 1702439032017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9019042.875,
            "unit": "ns",
            "range": "± 413324.9439257474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22611844.896551725,
            "unit": "ns",
            "range": "± 987501.12800305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54872421.53333333,
            "unit": "ns",
            "range": "± 1981232.7011001555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112614196.96153846,
            "unit": "ns",
            "range": "± 1423776.3726428163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225501956.35714287,
            "unit": "ns",
            "range": "± 3383158.3636581334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75196.97619047618,
            "unit": "ns",
            "range": "± 5899.103999712692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321241.8793103448,
            "unit": "ns",
            "range": "± 17458.8361484028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302897.2971014493,
            "unit": "ns",
            "range": "± 14632.779279030181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318905.9606741573,
            "unit": "ns",
            "range": "± 19128.887506890638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4146923.074074074,
            "unit": "ns",
            "range": "± 115086.58535004315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3906427.3372093025,
            "unit": "ns",
            "range": "± 143182.6992478541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25999.880952380954,
            "unit": "ns",
            "range": "± 2642.997843380646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115401.94210526315,
            "unit": "ns",
            "range": "± 16373.972565926017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121158.21111111112,
            "unit": "ns",
            "range": "± 18690.856233802777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122289.36559139784,
            "unit": "ns",
            "range": "± 17959.064394619993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9160.574468085106,
            "unit": "ns",
            "range": "± 1042.0667686424194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24668.93820224719,
            "unit": "ns",
            "range": "± 3089.641068279086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1431528.1224489796,
            "unit": "ns",
            "range": "± 139587.5803820592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2736761.3164556962,
            "unit": "ns",
            "range": "± 130114.72441691942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2204178.673469388,
            "unit": "ns",
            "range": "± 183655.52390735786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9059762.755555555,
            "unit": "ns",
            "range": "± 339431.1634503148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3393679.206185567,
            "unit": "ns",
            "range": "± 251917.38707742142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3534725.767676768,
            "unit": "ns",
            "range": "± 278383.00111558347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4477768.459183673,
            "unit": "ns",
            "range": "± 277543.5638744712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4282740.43,
            "unit": "ns",
            "range": "± 342019.9322622762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20056561.358585857,
            "unit": "ns",
            "range": "± 3395527.093879595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6242866.647135417,
            "unit": "ns",
            "range": "± 207075.21857402436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1892425.6548549107,
            "unit": "ns",
            "range": "± 32836.94936995737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1116034.6764705882,
            "unit": "ns",
            "range": "± 35511.76930955135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2640794.7701171874,
            "unit": "ns",
            "range": "± 49329.78261766494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787015.0310546875,
            "unit": "ns",
            "range": "± 5501.658326985743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723286.9181780134,
            "unit": "ns",
            "range": "± 12050.254749050959"
          }
        ]
      }
    ]
  }
}