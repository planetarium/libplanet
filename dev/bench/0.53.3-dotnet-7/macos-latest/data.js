window.BENCHMARK_DATA = {
  "lastUpdate": 1681220070939,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "2a1572320c8214c064e4cad0f543a4fab9887ba7",
          "message": "test dotnet 7",
          "timestamp": "2023-04-11T22:14:37+09:00",
          "tree_id": "c95bb3c50c48f2fb94307633c06b0d737bffa9b6",
          "url": "https://github.com/planetarium/libplanet/commit/2a1572320c8214c064e4cad0f543a4fab9887ba7"
        },
        "date": 1681220016314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8486547.5,
            "unit": "ns",
            "range": "± 102594.99201804062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23150432.022727273,
            "unit": "ns",
            "range": "± 853188.1525364075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52060299.94318182,
            "unit": "ns",
            "range": "± 2843295.822499525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104449503.86666666,
            "unit": "ns",
            "range": "± 1472920.8555061056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230721506.8846154,
            "unit": "ns",
            "range": "± 3520798.378128355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72715.23404255319,
            "unit": "ns",
            "range": "± 13064.30490101887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260678.35393258426,
            "unit": "ns",
            "range": "± 37775.685351026856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312812.3052631579,
            "unit": "ns",
            "range": "± 104809.88520041882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246929.61111111112,
            "unit": "ns",
            "range": "± 27188.625701223362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13474997.810344828,
            "unit": "ns",
            "range": "± 516469.73093177896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10414192.357142856,
            "unit": "ns",
            "range": "± 140715.91369622212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24635.402173913044,
            "unit": "ns",
            "range": "± 2246.07791523667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63622.6914893617,
            "unit": "ns",
            "range": "± 5518.473292899307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60457,
            "unit": "ns",
            "range": "± 2810.8951774532857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130516.2741935484,
            "unit": "ns",
            "range": "± 15369.019502210505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8586.663265306122,
            "unit": "ns",
            "range": "± 866.1105104827035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25478.365168539327,
            "unit": "ns",
            "range": "± 3022.240823503358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1651207.8229166667,
            "unit": "ns",
            "range": "± 206396.07811897644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2872080.915730337,
            "unit": "ns",
            "range": "± 175071.1415879406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2466842.1354166665,
            "unit": "ns",
            "range": "± 170886.51052195713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6413764.717391305,
            "unit": "ns",
            "range": "± 360010.5725857862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3775120.4438202246,
            "unit": "ns",
            "range": "± 549483.611428005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5468185.1630434785,
            "unit": "ns",
            "range": "± 334470.5376507798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27452033.166666668,
            "unit": "ns",
            "range": "± 1174691.2353381966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7380293.295454546,
            "unit": "ns",
            "range": "± 688542.066004838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32593165.93478261,
            "unit": "ns",
            "range": "± 2286113.818016893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6686223.634014423,
            "unit": "ns",
            "range": "± 65877.94001285212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2013401.1090745192,
            "unit": "ns",
            "range": "± 7877.992807390585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303854.6661658655,
            "unit": "ns",
            "range": "± 7864.1666313175465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2991824.7824590774,
            "unit": "ns",
            "range": "± 109224.77672425927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 888056.0993840144,
            "unit": "ns",
            "range": "± 7676.86775855452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745449.3309895833,
            "unit": "ns",
            "range": "± 12570.187194239195"
          }
        ]
      }
    ]
  }
}