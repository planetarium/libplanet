window.BENCHMARK_DATA = {
  "lastUpdate": 1690424681978,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "52ecff8d3e35000080b64691dfce76eec36c2e7f",
          "message": "Bump bencodex",
          "timestamp": "2023-07-27T11:02:44+09:00",
          "tree_id": "ea1d59518f86681b0a1cc6c63dd9ebec900ba23f",
          "url": "https://github.com/planetarium/libplanet/commit/52ecff8d3e35000080b64691dfce76eec36c2e7f"
        },
        "date": 1690424620706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8582576.767441861,
            "unit": "ns",
            "range": "± 288293.8219184955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20497413.933333334,
            "unit": "ns",
            "range": "± 395635.09844839503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50220376.56666667,
            "unit": "ns",
            "range": "± 927520.1366164869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101269443.43333334,
            "unit": "ns",
            "range": "± 1865941.0594256823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215236202.2857143,
            "unit": "ns",
            "range": "± 2466045.025120063"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65841.81182795699,
            "unit": "ns",
            "range": "± 11509.642202517301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340078.31395348837,
            "unit": "ns",
            "range": "± 26423.094499837305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322335.39130434784,
            "unit": "ns",
            "range": "± 29374.8930480004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299276.74725274724,
            "unit": "ns",
            "range": "± 17397.840813409643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4197150.090909091,
            "unit": "ns",
            "range": "± 99799.5387950547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3892961.98,
            "unit": "ns",
            "range": "± 95024.37927803931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20871.380434782608,
            "unit": "ns",
            "range": "± 4732.900399790625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113274.17525773196,
            "unit": "ns",
            "range": "± 16205.879125471143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122395.35106382979,
            "unit": "ns",
            "range": "± 12857.048624277732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119557.21578947369,
            "unit": "ns",
            "range": "± 18040.18590486791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5331.447916666667,
            "unit": "ns",
            "range": "± 1108.1548045931952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19558.852941176472,
            "unit": "ns",
            "range": "± 2842.399764559628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1793420.4175257732,
            "unit": "ns",
            "range": "± 317922.0238891354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3399646.43877551,
            "unit": "ns",
            "range": "± 477921.3971702364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2365457.1666666665,
            "unit": "ns",
            "range": "± 340359.07004619227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7148466.888888889,
            "unit": "ns",
            "range": "± 890207.7489229048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3337127.3421052634,
            "unit": "ns",
            "range": "± 161032.1427848948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3473496.5833333335,
            "unit": "ns",
            "range": "± 185197.84809922424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4452291.316326531,
            "unit": "ns",
            "range": "± 173768.6471745159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4775106.752688172,
            "unit": "ns",
            "range": "± 1068777.4309066741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7235225.843137255,
            "unit": "ns",
            "range": "± 294520.4924959465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6633061.454733456,
            "unit": "ns",
            "range": "± 130300.47746762948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1993655.9287860577,
            "unit": "ns",
            "range": "± 21094.24856895026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1454532.1873828126,
            "unit": "ns",
            "range": "± 88354.49411260261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3371660.5644333963,
            "unit": "ns",
            "range": "± 249856.56583369273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 954862.4835258152,
            "unit": "ns",
            "range": "± 23355.258934104586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888860.7693504051,
            "unit": "ns",
            "range": "± 24414.98003662363"
          }
        ]
      }
    ]
  }
}