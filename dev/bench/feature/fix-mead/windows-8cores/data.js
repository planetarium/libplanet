window.BENCHMARK_DATA = {
  "lastUpdate": 1722585551956,
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
          "id": "cc643bea29081c37b4edfbd68fcba0731dce23df",
          "message": "chore: Update project targetframework to a previous version",
          "timestamp": "2024-08-02T16:44:00+09:00",
          "tree_id": "38afe68056870734931cb456e83a6f804bcb8004",
          "url": "https://github.com/planetarium/libplanet/commit/cc643bea29081c37b4edfbd68fcba0731dce23df"
        },
        "date": 1722585245008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982097.9591836735,
            "unit": "ns",
            "range": "± 82514.11123252289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1725672.972972973,
            "unit": "ns",
            "range": "± 57052.172266797694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1495171.978021978,
            "unit": "ns",
            "range": "± 88039.57923343065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6904385.185185186,
            "unit": "ns",
            "range": "± 170970.70982549503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29796,
            "unit": "ns",
            "range": "± 327.21043178154736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9663007.142857144,
            "unit": "ns",
            "range": "± 94824.91123754764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23831440,
            "unit": "ns",
            "range": "± 343034.0753586192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61490728.571428575,
            "unit": "ns",
            "range": "± 389123.5703051576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117973050,
            "unit": "ns",
            "range": "± 624733.7522127696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240488860,
            "unit": "ns",
            "range": "± 960864.4016122745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3285608.4635416665,
            "unit": "ns",
            "range": "± 3406.1769287484394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073507.96875,
            "unit": "ns",
            "range": "± 2364.591822262269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737795.68359375,
            "unit": "ns",
            "range": "± 1413.4977682956646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1883622.9947916667,
            "unit": "ns",
            "range": "± 2403.7108983539174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632512.9743303572,
            "unit": "ns",
            "range": "± 1021.2027624728717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568389.94140625,
            "unit": "ns",
            "range": "± 1333.0095131791873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2147678.125,
            "unit": "ns",
            "range": "± 62610.592396510154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2252635.135135135,
            "unit": "ns",
            "range": "± 44768.92037151701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2767761.111111111,
            "unit": "ns",
            "range": "± 58717.59069917923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2364133.3333333335,
            "unit": "ns",
            "range": "± 38890.71991154311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2933345.8333333335,
            "unit": "ns",
            "range": "± 76062.81716973873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175760.29411764705,
            "unit": "ns",
            "range": "± 8049.476477013566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166105,
            "unit": "ns",
            "range": "± 7428.927084520257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142518.75,
            "unit": "ns",
            "range": "± 2690.7790074003974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2725093.3333333335,
            "unit": "ns",
            "range": "± 29152.05130412087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2528033.3333333335,
            "unit": "ns",
            "range": "± 27948.592263722505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9915.384615384615,
            "unit": "ns",
            "range": "± 886.1807035341265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50598.92473118279,
            "unit": "ns",
            "range": "± 3716.546276118984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43887.096774193546,
            "unit": "ns",
            "range": "± 1190.4458367866137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51351.51515151515,
            "unit": "ns",
            "range": "± 10352.524720523676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2435.0515463917527,
            "unit": "ns",
            "range": "± 400.01073868746585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9706.315789473685,
            "unit": "ns",
            "range": "± 823.6931010686203"
          }
        ]
      }
    ]
  }
}