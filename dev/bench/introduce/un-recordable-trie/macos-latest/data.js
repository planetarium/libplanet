window.BENCHMARK_DATA = {
  "lastUpdate": 1692945661473,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0bfdbd8be5c64da975565afcff60ddecc559e7b2",
          "message": "Merge pull request #3377 from greymistcube/fix/node-equality\n\nFix node equality for `INode`",
          "timestamp": "2023-08-23T11:46:34+09:00",
          "tree_id": "f7e004fb379004cb8ba6f2d1360b650926475e31",
          "url": "https://github.com/planetarium/libplanet/commit/0bfdbd8be5c64da975565afcff60ddecc559e7b2"
        },
        "date": 1692945612685,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8391108.8,
            "unit": "ns",
            "range": "± 73393.80156116727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21920526.274193548,
            "unit": "ns",
            "range": "± 3997436.16375197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51034390.64285714,
            "unit": "ns",
            "range": "± 3830854.974458444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136916402.76767677,
            "unit": "ns",
            "range": "± 30512239.1639978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265909736.08762887,
            "unit": "ns",
            "range": "± 48809765.826196015"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67963.39784946236,
            "unit": "ns",
            "range": "± 10288.804042913518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322839.7582417582,
            "unit": "ns",
            "range": "± 23357.7515633774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315205.7528089888,
            "unit": "ns",
            "range": "± 24716.067351513786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310554.64835164836,
            "unit": "ns",
            "range": "± 39710.89778088451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4520578.8977272725,
            "unit": "ns",
            "range": "± 743883.2048441528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3827552.5430107526,
            "unit": "ns",
            "range": "± 218129.73188413808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17872.913978494624,
            "unit": "ns",
            "range": "± 1383.3519676614887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90574.88775510204,
            "unit": "ns",
            "range": "± 11981.993053050635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87546.39175257731,
            "unit": "ns",
            "range": "± 15642.135237314353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100383.25,
            "unit": "ns",
            "range": "± 19955.95113876138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5788.797872340426,
            "unit": "ns",
            "range": "± 870.4281060129892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17378.46153846154,
            "unit": "ns",
            "range": "± 1686.3771379149007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1582784.670212766,
            "unit": "ns",
            "range": "± 138841.90443062328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3035606.125,
            "unit": "ns",
            "range": "± 222759.53775152154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2014172.84375,
            "unit": "ns",
            "range": "± 218677.1429626853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6465016.744680851,
            "unit": "ns",
            "range": "± 1231212.4885093977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3362563.6621621624,
            "unit": "ns",
            "range": "± 112861.1317284588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3323796.6907216497,
            "unit": "ns",
            "range": "± 239945.72087537494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4299022.242857143,
            "unit": "ns",
            "range": "± 199394.1686997438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3770799.3294117646,
            "unit": "ns",
            "range": "± 283755.3693739677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8190894.426315789,
            "unit": "ns",
            "range": "± 1935108.881397871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5679922.032291667,
            "unit": "ns",
            "range": "± 63494.34821208905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1722442.1147460938,
            "unit": "ns",
            "range": "± 6203.519374902498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1015711.6466145833,
            "unit": "ns",
            "range": "± 8915.857004932965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593794.9639423075,
            "unit": "ns",
            "range": "± 31492.284411225726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848866.1579427083,
            "unit": "ns",
            "range": "± 9917.647917241962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 707322.9483723958,
            "unit": "ns",
            "range": "± 9443.109106879616"
          }
        ]
      }
    ]
  }
}