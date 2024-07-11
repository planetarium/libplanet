window.BENCHMARK_DATA = {
  "lastUpdate": 1720677579332,
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
          "id": "0aed441cf58de2985591b89fab2711052c49a4bf",
          "message": "add tracing example",
          "timestamp": "2024-07-11T12:35:53+09:00",
          "tree_id": "9bcc60c7c037fb69c211b1c487672d2bbc1a8b2d",
          "url": "https://github.com/planetarium/libplanet/commit/0aed441cf58de2985591b89fab2711052c49a4bf"
        },
        "date": 1720669551959,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045084.693877551,
            "unit": "ns",
            "range": "± 95619.61295604624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1839245.0980392157,
            "unit": "ns",
            "range": "± 72131.6166842959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1670580.612244898,
            "unit": "ns",
            "range": "± 174883.4561314685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6855284,
            "unit": "ns",
            "range": "± 110199.34845542419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37225.77319587629,
            "unit": "ns",
            "range": "± 5491.210369583745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4966192.307692308,
            "unit": "ns",
            "range": "± 25417.69270732697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12997500,
            "unit": "ns",
            "range": "± 158873.1839280266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32824669.230769232,
            "unit": "ns",
            "range": "± 186212.4565499284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64681892.307692304,
            "unit": "ns",
            "range": "± 392472.2186803767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129114264.28571428,
            "unit": "ns",
            "range": "± 704871.4641224073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3296647.684151786,
            "unit": "ns",
            "range": "± 6059.612058775196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1101694.614955357,
            "unit": "ns",
            "range": "± 2393.8235753640483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750913.3161272322,
            "unit": "ns",
            "range": "± 1500.5834269440863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976121.953125,
            "unit": "ns",
            "range": "± 3771.553087614797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621941.9791666666,
            "unit": "ns",
            "range": "± 1017.9232572596446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572065.3971354166,
            "unit": "ns",
            "range": "± 1846.3103844809434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2225220,
            "unit": "ns",
            "range": "± 50192.48842941384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2251628,
            "unit": "ns",
            "range": "± 59050.94213191409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2766515.0943396227,
            "unit": "ns",
            "range": "± 114295.10285664105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2302303.846153846,
            "unit": "ns",
            "range": "± 59997.716495008244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3014942.8571428573,
            "unit": "ns",
            "range": "± 50721.073063838594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182826.7857142857,
            "unit": "ns",
            "range": "± 7856.404245094422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174532.87671232875,
            "unit": "ns",
            "range": "± 8670.592937473586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147808.82352941178,
            "unit": "ns",
            "range": "± 4747.973580321356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2825484.6153846155,
            "unit": "ns",
            "range": "± 33330.237676766475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555033.3333333335,
            "unit": "ns",
            "range": "± 25652.281064449686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13041.052631578947,
            "unit": "ns",
            "range": "± 1752.5358366956657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59634.782608695656,
            "unit": "ns",
            "range": "± 6996.976345122208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46989.01098901099,
            "unit": "ns",
            "range": "± 2643.081137588837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67291.9191919192,
            "unit": "ns",
            "range": "± 14726.767776272585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3017.8947368421054,
            "unit": "ns",
            "range": "± 531.7532117096181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11401.098901098901,
            "unit": "ns",
            "range": "± 1581.033031174696"
          }
        ]
      },
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
          "id": "166b45e9cb25bd7b903e8a689bdae2c3d9d0b9f9",
          "message": "Revert \"Added cached migration\"\n\nThis reverts commit 0008aa83d582df1c830f8aa758a253dd8db443b0.",
          "timestamp": "2024-07-11T14:32:59+09:00",
          "tree_id": "9b1a8fcb7d9de0e39e543216925491d449429c82",
          "url": "https://github.com/planetarium/libplanet/commit/166b45e9cb25bd7b903e8a689bdae2c3d9d0b9f9"
        },
        "date": 1720677082823,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981942.2680412371,
            "unit": "ns",
            "range": "± 73467.88107036348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1742500,
            "unit": "ns",
            "range": "± 66450.77710439343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1587884.5360824743,
            "unit": "ns",
            "range": "± 155033.37902704356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6797817.142857143,
            "unit": "ns",
            "range": "± 199727.22057510205"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34350,
            "unit": "ns",
            "range": "± 521.3618530523515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4860330.769230769,
            "unit": "ns",
            "range": "± 22562.039824130286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13033940,
            "unit": "ns",
            "range": "± 145358.15766581523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32151053.333333332,
            "unit": "ns",
            "range": "± 295552.2164807205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63729153.333333336,
            "unit": "ns",
            "range": "± 521951.73540782306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 125983192.85714285,
            "unit": "ns",
            "range": "± 657837.6143609696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3304033.984375,
            "unit": "ns",
            "range": "± 6537.209520274766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071754.1713169643,
            "unit": "ns",
            "range": "± 1885.0763176923347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725544.3815104166,
            "unit": "ns",
            "range": "± 2847.4933258141737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953159.068080357,
            "unit": "ns",
            "range": "± 2534.0895743370024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600839.4401041666,
            "unit": "ns",
            "range": "± 1027.1874150793653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555689.5247395834,
            "unit": "ns",
            "range": "± 1641.2246050457709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2137328.5714285714,
            "unit": "ns",
            "range": "± 60456.54917892964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2503648.7804878047,
            "unit": "ns",
            "range": "± 90079.06283357754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2685960.8695652173,
            "unit": "ns",
            "range": "± 62379.0009766576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2241042.8571428573,
            "unit": "ns",
            "range": "± 47616.02926941981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2987994.117647059,
            "unit": "ns",
            "range": "± 61261.68736033389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171495.16129032258,
            "unit": "ns",
            "range": "± 6766.344568969126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165083.87096774194,
            "unit": "ns",
            "range": "± 5539.284251224577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141778.94736842104,
            "unit": "ns",
            "range": "± 2415.8225991180225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2749478.5714285714,
            "unit": "ns",
            "range": "± 36959.753132946535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2461940,
            "unit": "ns",
            "range": "± 27285.705310394933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10524.21052631579,
            "unit": "ns",
            "range": "± 1337.4885793486303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50017.77777777778,
            "unit": "ns",
            "range": "± 3405.731381391852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45423.529411764706,
            "unit": "ns",
            "range": "± 848.1814456269851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50434.408602150535,
            "unit": "ns",
            "range": "± 7568.908005547891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2215.5555555555557,
            "unit": "ns",
            "range": "± 257.4337969269957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9724.742268041236,
            "unit": "ns",
            "range": "± 1299.281125584055"
          }
        ]
      }
    ]
  }
}