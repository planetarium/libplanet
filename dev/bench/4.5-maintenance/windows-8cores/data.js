window.BENCHMARK_DATA = {
  "lastUpdate": 1715675903156,
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
          "id": "51b31e7a885df1342681b51dac515f443bc7bf7a",
          "message": "Merge pull request #3784 from greymistcube/release/4.5.0\n\n🚀 Release 4.5.0",
          "timestamp": "2024-05-14T17:05:00+09:00",
          "tree_id": "d0af614dc8458ab70ce6395965f553458859c58a",
          "url": "https://github.com/planetarium/libplanet/commit/51b31e7a885df1342681b51dac515f443bc7bf7a"
        },
        "date": 1715675837601,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009850.5376344086,
            "unit": "ns",
            "range": "± 96786.14325863865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1833042.0634920634,
            "unit": "ns",
            "range": "± 84009.06307019135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1567334.831460674,
            "unit": "ns",
            "range": "± 86598.64068469654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6945920,
            "unit": "ns",
            "range": "± 136420.18118054722"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36280.21978021978,
            "unit": "ns",
            "range": "± 3824.982782247952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5317496.666666667,
            "unit": "ns",
            "range": "± 99169.31312995299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14207042.857142856,
            "unit": "ns",
            "range": "± 77142.67216095037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34586700,
            "unit": "ns",
            "range": "± 110866.10080494537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68261671.42857143,
            "unit": "ns",
            "range": "± 298268.09166502295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142590514.2857143,
            "unit": "ns",
            "range": "± 993523.1349999958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3369876.7020089286,
            "unit": "ns",
            "range": "± 8928.51970832349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087051.5494791667,
            "unit": "ns",
            "range": "± 1758.6604918666892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759670.3752790178,
            "unit": "ns",
            "range": "± 1743.2142743047448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932128.8411458333,
            "unit": "ns",
            "range": "± 7925.345434769179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624565.5533854166,
            "unit": "ns",
            "range": "± 2702.050686576803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565016.9661458334,
            "unit": "ns",
            "range": "± 1850.7397989489918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2243953.846153846,
            "unit": "ns",
            "range": "± 59380.665073872195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2431576.470588235,
            "unit": "ns",
            "range": "± 50016.22802604825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2980068.4210526315,
            "unit": "ns",
            "range": "± 59590.71565112191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2963630.434782609,
            "unit": "ns",
            "range": "± 109911.03648873932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7884472,
            "unit": "ns",
            "range": "± 147790.76854346035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 191458.82352941178,
            "unit": "ns",
            "range": "± 5713.904765122021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183062.5,
            "unit": "ns",
            "range": "± 9518.620990963987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144570.83333333334,
            "unit": "ns",
            "range": "± 3026.187035035094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2768285.714285714,
            "unit": "ns",
            "range": "± 25048.68665812049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2547061.5384615385,
            "unit": "ns",
            "range": "± 28172.313195214036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12142.696629213484,
            "unit": "ns",
            "range": "± 1085.1149541585485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59977.65957446808,
            "unit": "ns",
            "range": "± 5882.805348180812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48402,
            "unit": "ns",
            "range": "± 1936.7013824794878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57979.72972972973,
            "unit": "ns",
            "range": "± 2734.2064401687376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2924.226804123711,
            "unit": "ns",
            "range": "± 555.5174671937763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11742.391304347826,
            "unit": "ns",
            "range": "± 1759.4475716218974"
          }
        ]
      }
    ]
  }
}