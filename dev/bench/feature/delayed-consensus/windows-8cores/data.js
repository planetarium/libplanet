window.BENCHMARK_DATA = {
  "lastUpdate": 1733722204774,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "611edf443e1eb2c1703d360689f141598fedf0b1",
          "message": "test: add unit test for delayed consensus",
          "timestamp": "2024-12-07T15:02:44+09:00",
          "tree_id": "67ef8e106f212a77f0d1174f03d314824b774db5",
          "url": "https://github.com/planetarium/libplanet/commit/611edf443e1eb2c1703d360689f141598fedf0b1"
        },
        "date": 1733551995520,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012769.387755102,
            "unit": "ns",
            "range": "± 124335.43954744496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1750583.6734693877,
            "unit": "ns",
            "range": "± 69870.00532816512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1467259.3406593406,
            "unit": "ns",
            "range": "± 83764.72205996186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6716467.5,
            "unit": "ns",
            "range": "± 223269.3870038544"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30981,
            "unit": "ns",
            "range": "± 4654.913663229557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9661907.692307692,
            "unit": "ns",
            "range": "± 52875.75785963516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23860826.666666668,
            "unit": "ns",
            "range": "± 284163.35962326487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59057128.571428575,
            "unit": "ns",
            "range": "± 453660.2599176739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119670240,
            "unit": "ns",
            "range": "± 988092.6437189119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236315753.33333334,
            "unit": "ns",
            "range": "± 907188.0911181908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3285354.073660714,
            "unit": "ns",
            "range": "± 6116.284422841357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052857.8683035714,
            "unit": "ns",
            "range": "± 2005.7323855667855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729931.3932291666,
            "unit": "ns",
            "range": "± 1621.3987873519582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1995969.375,
            "unit": "ns",
            "range": "± 3061.286173414681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626449.2903645834,
            "unit": "ns",
            "range": "± 1223.524163548809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561634.6875,
            "unit": "ns",
            "range": "± 1023.6029366302403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2197652.9411764704,
            "unit": "ns",
            "range": "± 63270.339813993836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2274378.5714285714,
            "unit": "ns",
            "range": "± 38727.01657998991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2749029.411764706,
            "unit": "ns",
            "range": "± 56339.06021476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2282193.3333333335,
            "unit": "ns",
            "range": "± 40868.96249280248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3051080,
            "unit": "ns",
            "range": "± 67153.60710615938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93913.95348837209,
            "unit": "ns",
            "range": "± 6478.328811201737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163706.4935064935,
            "unit": "ns",
            "range": "± 7026.778434979958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144823.5294117647,
            "unit": "ns",
            "range": "± 4289.526273450704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2583276.6666666665,
            "unit": "ns",
            "range": "± 39363.062211503144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2496309.523809524,
            "unit": "ns",
            "range": "± 58057.22095279711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10427.659574468085,
            "unit": "ns",
            "range": "± 1357.6865408036522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52241.05263157895,
            "unit": "ns",
            "range": "± 5457.582949084385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43845,
            "unit": "ns",
            "range": "± 1396.139365609726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53526.80412371134,
            "unit": "ns",
            "range": "± 9367.558329414493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2483.505154639175,
            "unit": "ns",
            "range": "± 499.0992746044145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10214.583333333334,
            "unit": "ns",
            "range": "± 1627.2016124989855"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "842da15cd149225a24bb4c8280524d97d16dfe45",
          "message": "chore: add logging",
          "timestamp": "2024-12-09T14:14:16+09:00",
          "tree_id": "7e1b1e7376fbd4b87456ff2648c111f2a1d790b9",
          "url": "https://github.com/planetarium/libplanet/commit/842da15cd149225a24bb4c8280524d97d16dfe45"
        },
        "date": 1733721972506,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061151.030927835,
            "unit": "ns",
            "range": "± 128640.63761020251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1901415.671641791,
            "unit": "ns",
            "range": "± 86219.22121394413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642623.1578947369,
            "unit": "ns",
            "range": "± 134280.6868550427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6823670.731707317,
            "unit": "ns",
            "range": "± 241644.71776132667"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28891.666666666668,
            "unit": "ns",
            "range": "± 935.7579051992333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10557220,
            "unit": "ns",
            "range": "± 96730.06771423247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25473550,
            "unit": "ns",
            "range": "± 718216.0190360558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64706413.333333336,
            "unit": "ns",
            "range": "± 1042308.5256615081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124849253.33333333,
            "unit": "ns",
            "range": "± 1967304.0108834463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239614400,
            "unit": "ns",
            "range": "± 1994802.6155487164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3319146.97265625,
            "unit": "ns",
            "range": "± 11395.40838116099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052658.0729166667,
            "unit": "ns",
            "range": "± 2721.9644768370654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728097.9427083334,
            "unit": "ns",
            "range": "± 1457.5607526188642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932777.4739583333,
            "unit": "ns",
            "range": "± 5099.730274893221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638447.4088541666,
            "unit": "ns",
            "range": "± 2686.369462308109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572251.8345424107,
            "unit": "ns",
            "range": "± 1450.8652608147916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2188473.529411765,
            "unit": "ns",
            "range": "± 66941.93009876242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2312835.714285714,
            "unit": "ns",
            "range": "± 26951.82617311736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2774646.153846154,
            "unit": "ns",
            "range": "± 46093.23188539751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2348200,
            "unit": "ns",
            "range": "± 39949.598053239344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3128622.222222222,
            "unit": "ns",
            "range": "± 62898.15816582864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104426.96629213484,
            "unit": "ns",
            "range": "± 6301.88940003032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179954.05405405405,
            "unit": "ns",
            "range": "± 6001.323677813578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151594.23076923078,
            "unit": "ns",
            "range": "± 6258.121420235248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2648644.4444444445,
            "unit": "ns",
            "range": "± 53402.15045485167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2414275,
            "unit": "ns",
            "range": "± 15912.209434610553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11177.906976744185,
            "unit": "ns",
            "range": "± 1388.6431094282348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56545.36082474227,
            "unit": "ns",
            "range": "± 5884.248405321843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48887.5,
            "unit": "ns",
            "range": "± 2494.062569637302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62904.12371134021,
            "unit": "ns",
            "range": "± 12187.458696731494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2966.6666666666665,
            "unit": "ns",
            "range": "± 491.54250588094544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11393.684210526315,
            "unit": "ns",
            "range": "± 1787.2366954600902"
          }
        ]
      }
    ]
  }
}