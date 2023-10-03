window.BENCHMARK_DATA = {
  "lastUpdate": 1696350899147,
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
          "id": "8dc592d3d07260489d7ac7dd1f62754bc23faae0",
          "message": "Merge pull request #3435 from greymistcube/prepare/3.5.0\n\n🔧 Prepare 3.5.0",
          "timestamp": "2023-09-25T20:32:57+09:00",
          "tree_id": "0c99da6c0667ced3d6e43cb95f5270ef67333bc0",
          "url": "https://github.com/planetarium/libplanet/commit/8dc592d3d07260489d7ac7dd1f62754bc23faae0"
        },
        "date": 1696350868852,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45935.87837837838,
            "unit": "ns",
            "range": "± 2314.4956783886046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7671935.769230769,
            "unit": "ns",
            "range": "± 44551.5909408292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19791994.8,
            "unit": "ns",
            "range": "± 127197.33504631971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51794459.53333333,
            "unit": "ns",
            "range": "± 306848.07448658335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102529571.5,
            "unit": "ns",
            "range": "± 820868.0703103505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203299979.6,
            "unit": "ns",
            "range": "± 686115.5389233757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268640.48780487804,
            "unit": "ns",
            "range": "± 8596.686684769753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259315.4655172414,
            "unit": "ns",
            "range": "± 10489.746417444934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221828.375,
            "unit": "ns",
            "range": "± 4062.3560630911384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4168581.0714285714,
            "unit": "ns",
            "range": "± 29290.047651993398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3900027.5,
            "unit": "ns",
            "range": "± 25592.051247183404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18619.91489361702,
            "unit": "ns",
            "range": "± 1190.1059287774679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87804.6,
            "unit": "ns",
            "range": "± 5531.053090063987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68962.21052631579,
            "unit": "ns",
            "range": "± 1436.8423163678272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79324.45918367348,
            "unit": "ns",
            "range": "± 10289.276114087186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4563.489583333333,
            "unit": "ns",
            "range": "± 428.9870074045715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18357.290322580644,
            "unit": "ns",
            "range": "± 1620.784428848153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1296682.5212765958,
            "unit": "ns",
            "range": "± 86843.52450893476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2517680.2,
            "unit": "ns",
            "range": "± 82433.53330401781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1982310.0487804879,
            "unit": "ns",
            "range": "± 98985.24043087476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8396815.82142857,
            "unit": "ns",
            "range": "± 224165.34808518496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4908377.104910715,
            "unit": "ns",
            "range": "± 15312.355139092833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543314.7345252405,
            "unit": "ns",
            "range": "± 1535.203017089089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1057226.9450120192,
            "unit": "ns",
            "range": "± 812.137690754485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2535966.2751116073,
            "unit": "ns",
            "range": "± 7036.809154087786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807006.3523888221,
            "unit": "ns",
            "range": "± 426.50664914435896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732820.4575570914,
            "unit": "ns",
            "range": "± 442.7162757107738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3279363.125,
            "unit": "ns",
            "range": "± 55905.50122587818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3366532.846153846,
            "unit": "ns",
            "range": "± 33641.23689225807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4234271.066666666,
            "unit": "ns",
            "range": "± 70444.97833818012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4035324.2,
            "unit": "ns",
            "range": "± 104858.19160949608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10104287.64864865,
            "unit": "ns",
            "range": "± 251867.2486720398"
          }
        ]
      }
    ]
  }
}