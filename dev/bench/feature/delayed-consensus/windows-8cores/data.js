window.BENCHMARK_DATA = {
  "lastUpdate": 1734058854989,
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
          "id": "e8bab4f85bdad8168f7881cf95d35cda7d6f1f13",
          "message": "chore: rebuild connection via seed peer",
          "timestamp": "2024-12-11T14:55:49+09:00",
          "tree_id": "18c9f91fcd2649c219d65b8127e518443705f1f3",
          "url": "https://github.com/planetarium/libplanet/commit/e8bab4f85bdad8168f7881cf95d35cda7d6f1f13"
        },
        "date": 1733897069323,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1182076.7676767677,
            "unit": "ns",
            "range": "± 293412.8625744607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1836315.0943396227,
            "unit": "ns",
            "range": "± 75844.54596340317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1508850.5747126436,
            "unit": "ns",
            "range": "± 100734.58780328842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6723907.5,
            "unit": "ns",
            "range": "± 235158.27663621117"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28473.91304347826,
            "unit": "ns",
            "range": "± 933.9128635557902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9485580,
            "unit": "ns",
            "range": "± 80981.62225379991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25032216.666666668,
            "unit": "ns",
            "range": "± 647979.6733705844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59199320,
            "unit": "ns",
            "range": "± 271942.7649866262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117669230.76923077,
            "unit": "ns",
            "range": "± 547208.8760010741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242869905.88235295,
            "unit": "ns",
            "range": "± 4878513.579650899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3311565.0240384615,
            "unit": "ns",
            "range": "± 8675.297112726705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067900.9486607143,
            "unit": "ns",
            "range": "± 1578.7803765789115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737206.5559895834,
            "unit": "ns",
            "range": "± 2107.2889106078233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938384.2354910714,
            "unit": "ns",
            "range": "± 3065.915182449826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617301.73828125,
            "unit": "ns",
            "range": "± 1127.6310005246412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574984.31640625,
            "unit": "ns",
            "range": "± 899.8142238401291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2140542.8571428573,
            "unit": "ns",
            "range": "± 34718.24424587861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2270531.5789473685,
            "unit": "ns",
            "range": "± 30971.098581878254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2755680,
            "unit": "ns",
            "range": "± 42891.910659237365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2388373.6842105263,
            "unit": "ns",
            "range": "± 51216.77071369476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2974960,
            "unit": "ns",
            "range": "± 52589.023841210714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91374.15730337078,
            "unit": "ns",
            "range": "± 6009.320943521589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162180,
            "unit": "ns",
            "range": "± 4246.518936366948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144840.9090909091,
            "unit": "ns",
            "range": "± 2424.018523210126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2733733.3333333335,
            "unit": "ns",
            "range": "± 43760.887080762404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2557680,
            "unit": "ns",
            "range": "± 44462.121920959704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10803.191489361701,
            "unit": "ns",
            "range": "± 1638.7414609512903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52207.52688172043,
            "unit": "ns",
            "range": "± 4420.7572772276035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43360,
            "unit": "ns",
            "range": "± 1319.2460939530033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49449.38271604938,
            "unit": "ns",
            "range": "± 4797.163835455021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2441.7582417582416,
            "unit": "ns",
            "range": "± 392.7300271648124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9918.08510638298,
            "unit": "ns",
            "range": "± 1736.2029244387184"
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
          "id": "9af4ea2da47c0391dbf2c0d261a4b107f23c870e",
          "message": "logs: ReceiveMessage",
          "timestamp": "2024-12-12T10:48:12+09:00",
          "tree_id": "37ae023bde8a5c8bb388de481e61a2c8f4dd94dd",
          "url": "https://github.com/planetarium/libplanet/commit/9af4ea2da47c0391dbf2c0d261a4b107f23c870e"
        },
        "date": 1733968652682,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953684.0425531915,
            "unit": "ns",
            "range": "± 87914.54832471105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1717050.9803921569,
            "unit": "ns",
            "range": "± 69883.71018355858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1477438.9473684211,
            "unit": "ns",
            "range": "± 123918.54676731296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6632897.916666667,
            "unit": "ns",
            "range": "± 259045.29423182446"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29480,
            "unit": "ns",
            "range": "± 1372.4115685586135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10588126.666666666,
            "unit": "ns",
            "range": "± 96841.13991972823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25243646.666666668,
            "unit": "ns",
            "range": "± 192523.9571981578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60888147.368421055,
            "unit": "ns",
            "range": "± 1275555.2805514508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124759475,
            "unit": "ns",
            "range": "± 3232229.555484546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233902980,
            "unit": "ns",
            "range": "± 2026623.944325707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3368617.6041666665,
            "unit": "ns",
            "range": "± 7060.839865405466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066700.46875,
            "unit": "ns",
            "range": "± 1458.9490394070333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722035.2614182692,
            "unit": "ns",
            "range": "± 927.5885588716666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919106.2049278845,
            "unit": "ns",
            "range": "± 6096.023621171419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613350.4657451923,
            "unit": "ns",
            "range": "± 673.3270519507869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564031.4313616072,
            "unit": "ns",
            "range": "± 1877.3252679569484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2264200,
            "unit": "ns",
            "range": "± 45109.93588766752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291536.3636363638,
            "unit": "ns",
            "range": "± 72193.71864202339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2845933.3333333335,
            "unit": "ns",
            "range": "± 67882.66517958806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2303439.1304347827,
            "unit": "ns",
            "range": "± 57723.988546833294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3024588.2352941176,
            "unit": "ns",
            "range": "± 59575.03548417891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101627.08333333333,
            "unit": "ns",
            "range": "± 10706.746315602451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169682.45614035087,
            "unit": "ns",
            "range": "± 6766.754940965254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146851.51515151514,
            "unit": "ns",
            "range": "± 4491.389067713435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2633726.6666666665,
            "unit": "ns",
            "range": "± 36856.119217974156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2465978.5714285714,
            "unit": "ns",
            "range": "± 31624.848520681393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9829.545454545454,
            "unit": "ns",
            "range": "± 1039.5798323338104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49805.555555555555,
            "unit": "ns",
            "range": "± 3142.7859647889495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43600,
            "unit": "ns",
            "range": "± 1045.071247831208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50071.57894736842,
            "unit": "ns",
            "range": "± 9143.346181529865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2431.9148936170213,
            "unit": "ns",
            "range": "± 432.59973452769185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9393.333333333334,
            "unit": "ns",
            "range": "± 1063.5746383004605"
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
          "id": "1d57bcebcfcccdbb0d3625ed69001e7995ad8aa4",
          "message": "logs: frames",
          "timestamp": "2024-12-12T11:19:26+09:00",
          "tree_id": "d4d1c291bc792c56419bc282ddcfa3c4ec54d0bc",
          "url": "https://github.com/planetarium/libplanet/commit/1d57bcebcfcccdbb0d3625ed69001e7995ad8aa4"
        },
        "date": 1733970499451,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948179.7872340425,
            "unit": "ns",
            "range": "± 87454.49886653775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1741618.75,
            "unit": "ns",
            "range": "± 68323.56578046441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1472485.8695652173,
            "unit": "ns",
            "range": "± 97773.65606396575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6652154.545454546,
            "unit": "ns",
            "range": "± 240913.36612744912"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28981.666666666668,
            "unit": "ns",
            "range": "± 1302.7339786806203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9746064.285714285,
            "unit": "ns",
            "range": "± 55660.83566003682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24414492.307692308,
            "unit": "ns",
            "range": "± 203596.90346997938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59976820,
            "unit": "ns",
            "range": "± 925066.6023898727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117713316.66666667,
            "unit": "ns",
            "range": "± 568201.0428990035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232370660,
            "unit": "ns",
            "range": "± 1753115.15056566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3343747.626201923,
            "unit": "ns",
            "range": "± 6912.121211956703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058509.5963541667,
            "unit": "ns",
            "range": "± 2020.5367131850135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 719312.4549278846,
            "unit": "ns",
            "range": "± 1040.954714495325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911952.7604166667,
            "unit": "ns",
            "range": "± 3842.427488616054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616791.1508413461,
            "unit": "ns",
            "range": "± 816.8418601045078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566803.3428485577,
            "unit": "ns",
            "range": "± 653.991213820491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2158505.263157895,
            "unit": "ns",
            "range": "± 41173.64952496534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2363850,
            "unit": "ns",
            "range": "± 41873.31688159736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2726473.3333333335,
            "unit": "ns",
            "range": "± 38024.04251948771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2375090.476190476,
            "unit": "ns",
            "range": "± 54981.62333691053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2926135.714285714,
            "unit": "ns",
            "range": "± 38251.769333494325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91840.74074074074,
            "unit": "ns",
            "range": "± 4836.082551450549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164892.1052631579,
            "unit": "ns",
            "range": "± 6623.172183662152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147705.26315789475,
            "unit": "ns",
            "range": "± 3269.297186486302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2564264.285714286,
            "unit": "ns",
            "range": "± 26331.017309011677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2534118.918918919,
            "unit": "ns",
            "range": "± 84815.43307492857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9791.111111111111,
            "unit": "ns",
            "range": "± 1170.3878589273704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51782.79569892473,
            "unit": "ns",
            "range": "± 3763.630984311328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43207.142857142855,
            "unit": "ns",
            "range": "± 701.0588537943989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50923.11827956989,
            "unit": "ns",
            "range": "± 9692.950596056755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2796.907216494845,
            "unit": "ns",
            "range": "± 341.0930983151271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9954.255319148937,
            "unit": "ns",
            "range": "± 1347.2125658380894"
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
          "id": "87973e47176007bcc71d1faab68416d715c2e1af",
          "message": "feat: force reply Pong",
          "timestamp": "2024-12-12T14:41:22+09:00",
          "tree_id": "dbd6ad137bbecd6caaf254e3b46ec6176e2974da",
          "url": "https://github.com/planetarium/libplanet/commit/87973e47176007bcc71d1faab68416d715c2e1af"
        },
        "date": 1733982691144,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956886.1702127659,
            "unit": "ns",
            "range": "± 94401.7992368446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1751643.4782608696,
            "unit": "ns",
            "range": "± 82282.10526321817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1421842.372881356,
            "unit": "ns",
            "range": "± 61594.15333704034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6582526.595744681,
            "unit": "ns",
            "range": "± 222241.89740476964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28620.37037037037,
            "unit": "ns",
            "range": "± 945.9705268115316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9552476.470588235,
            "unit": "ns",
            "range": "± 182539.53520200687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23333766.666666668,
            "unit": "ns",
            "range": "± 153763.82942062558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59429478.571428575,
            "unit": "ns",
            "range": "± 119703.85366569275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118391385.71428572,
            "unit": "ns",
            "range": "± 416544.1427473718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238549514.2857143,
            "unit": "ns",
            "range": "± 1541908.4092359466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350085.4947916665,
            "unit": "ns",
            "range": "± 7208.393363385572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058911.3411458333,
            "unit": "ns",
            "range": "± 2540.3031464860446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 717096.4388020834,
            "unit": "ns",
            "range": "± 1058.9305942975266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929713.2682291667,
            "unit": "ns",
            "range": "± 2382.270646852524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613469.1336495535,
            "unit": "ns",
            "range": "± 752.3347738092103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556481.69921875,
            "unit": "ns",
            "range": "± 1049.7332661024695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182568,
            "unit": "ns",
            "range": "± 35725.88603986377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2265180,
            "unit": "ns",
            "range": "± 33820.15882365343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2713546.153846154,
            "unit": "ns",
            "range": "± 36521.87963820718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2312095.4545454546,
            "unit": "ns",
            "range": "± 71731.50062432948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2927263.3333333335,
            "unit": "ns",
            "range": "± 45178.2322215762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89680,
            "unit": "ns",
            "range": "± 4519.985649343399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162601.33333333334,
            "unit": "ns",
            "range": "± 7768.0129521792915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146813.33333333334,
            "unit": "ns",
            "range": "± 4314.029505544978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2581891.6666666665,
            "unit": "ns",
            "range": "± 16815.43978465967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2479323.076923077,
            "unit": "ns",
            "range": "± 30324.526757674605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10492.553191489362,
            "unit": "ns",
            "range": "± 1551.9144861779787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50605.61797752809,
            "unit": "ns",
            "range": "± 3479.203133378317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43015.15151515151,
            "unit": "ns",
            "range": "± 877.5396045625278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50516.49484536082,
            "unit": "ns",
            "range": "± 9880.649021491992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2638.7755102040815,
            "unit": "ns",
            "range": "± 610.835603621628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9643.548387096775,
            "unit": "ns",
            "range": "± 1122.2847863421205"
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
          "id": "1f4e1c99d1172dc8b13aaa7897bf9f0488bef421",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-12-12T19:32:15+09:00",
          "tree_id": "d172abcbeb7bc6aaa678a15c2dbafdba9893de9d",
          "url": "https://github.com/planetarium/libplanet/commit/1f4e1c99d1172dc8b13aaa7897bf9f0488bef421"
        },
        "date": 1734000182942,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002238.2978723404,
            "unit": "ns",
            "range": "± 88707.54547967494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1829966.1764705882,
            "unit": "ns",
            "range": "± 86882.8575062193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1542732.2580645161,
            "unit": "ns",
            "range": "± 86643.71594826702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6660034.2105263155,
            "unit": "ns",
            "range": "± 218770.42425277294"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29353.164556962027,
            "unit": "ns",
            "range": "± 1529.272949680704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9939638.461538462,
            "unit": "ns",
            "range": "± 88617.16856288382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23814160,
            "unit": "ns",
            "range": "± 211991.44794071294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61079635.71428572,
            "unit": "ns",
            "range": "± 572085.2795588365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117980792.85714285,
            "unit": "ns",
            "range": "± 804441.4186868432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239753040,
            "unit": "ns",
            "range": "± 1380379.4394503066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3279874.579326923,
            "unit": "ns",
            "range": "± 3091.1839938812395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068455.6477864583,
            "unit": "ns",
            "range": "± 3118.1681819025803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739403.22265625,
            "unit": "ns",
            "range": "± 1498.295269634935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959455.3292410714,
            "unit": "ns",
            "range": "± 3590.4946964878286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632812.5390625,
            "unit": "ns",
            "range": "± 1672.788285412081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562623.59375,
            "unit": "ns",
            "range": "± 845.3187935118673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2271350,
            "unit": "ns",
            "range": "± 44094.74065969947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2308600,
            "unit": "ns",
            "range": "± 47612.07212214887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2777957.1428571427,
            "unit": "ns",
            "range": "± 75897.64759235235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2395231.25,
            "unit": "ns",
            "range": "± 46540.54460002232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2999300,
            "unit": "ns",
            "range": "± 45482.700007805164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98763.63636363637,
            "unit": "ns",
            "range": "± 7165.693841775881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166616.66666666666,
            "unit": "ns",
            "range": "± 6758.714817825987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144453.33333333334,
            "unit": "ns",
            "range": "± 5438.189872642282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2633675,
            "unit": "ns",
            "range": "± 27813.34293921796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2560996.6666666665,
            "unit": "ns",
            "range": "± 43382.87790405445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11577.894736842105,
            "unit": "ns",
            "range": "± 2033.0868966247665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53654.02298850575,
            "unit": "ns",
            "range": "± 3804.3978406178735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44302.22222222222,
            "unit": "ns",
            "range": "± 1690.1437390310502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59965.30612244898,
            "unit": "ns",
            "range": "± 13173.771990664784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2731.958762886598,
            "unit": "ns",
            "range": "± 646.7138715190207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11098.958333333334,
            "unit": "ns",
            "range": "± 1736.814676152365"
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
          "id": "c1a205dcda815dbc48f332674fd5610c1ca40e1b",
          "message": "refactor: apply suggestions from the review",
          "timestamp": "2024-12-12T19:35:52+09:00",
          "tree_id": "7bdfe41bb32daef4440e476c233e8ed9384441a0",
          "url": "https://github.com/planetarium/libplanet/commit/c1a205dcda815dbc48f332674fd5610c1ca40e1b"
        },
        "date": 1734000387464,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966909.595959596,
            "unit": "ns",
            "range": "± 96285.11118843753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1715028.5714285714,
            "unit": "ns",
            "range": "± 67075.5109310892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1530895.8333333333,
            "unit": "ns",
            "range": "± 120564.4260325632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6506384.2105263155,
            "unit": "ns",
            "range": "± 179737.73465098525"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34183.333333333336,
            "unit": "ns",
            "range": "± 3695.8203039782993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10220820,
            "unit": "ns",
            "range": "± 186806.60052578442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23649433.333333332,
            "unit": "ns",
            "range": "± 313807.4971030731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59681220,
            "unit": "ns",
            "range": "± 565622.7064041896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119303006.66666667,
            "unit": "ns",
            "range": "± 1150162.9123530202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239975173.33333334,
            "unit": "ns",
            "range": "± 1265139.1552296681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3232780.859375,
            "unit": "ns",
            "range": "± 5919.754064230874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1039330.4817708334,
            "unit": "ns",
            "range": "± 2147.163816176359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740117.3958333334,
            "unit": "ns",
            "range": "± 1904.7154058253047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930121.7075892857,
            "unit": "ns",
            "range": "± 2840.5175197485487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629419.0559895834,
            "unit": "ns",
            "range": "± 1796.1951318947881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563563.53515625,
            "unit": "ns",
            "range": "± 1089.1725421157334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2188459.090909091,
            "unit": "ns",
            "range": "± 53639.800957435014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2323334.375,
            "unit": "ns",
            "range": "± 71918.43323033708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2773286.6666666665,
            "unit": "ns",
            "range": "± 42930.706071639725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2363169.4444444445,
            "unit": "ns",
            "range": "± 78598.32720664314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2992882.3529411764,
            "unit": "ns",
            "range": "± 57665.037450067146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93083.908045977,
            "unit": "ns",
            "range": "± 6764.302221928413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164094.20289855072,
            "unit": "ns",
            "range": "± 7924.828520281925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147472.72727272726,
            "unit": "ns",
            "range": "± 3492.0565394132545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2596273.3333333335,
            "unit": "ns",
            "range": "± 46652.016748117836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2501184.6153846155,
            "unit": "ns",
            "range": "± 21245.032601914507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11355.670103092783,
            "unit": "ns",
            "range": "± 2038.7378178751587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50696.55172413793,
            "unit": "ns",
            "range": "± 3042.9273037294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44917.391304347824,
            "unit": "ns",
            "range": "± 1121.9512928631582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51148.45360824742,
            "unit": "ns",
            "range": "± 9541.8061860476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2428.865979381443,
            "unit": "ns",
            "range": "± 383.77477197097585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9845.161290322581,
            "unit": "ns",
            "range": "± 1418.5507093533924"
          }
        ]
      },
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
          "id": "b17d8aaa556ee4710c1660d5233b29ca4c388c8a",
          "message": "test: Fix query test failure for validator power",
          "timestamp": "2024-12-12T20:17:19+09:00",
          "tree_id": "9aff13e18a69500bd3bb46426299fc7cd1dbb0cd",
          "url": "https://github.com/planetarium/libplanet/commit/b17d8aaa556ee4710c1660d5233b29ca4c388c8a"
        },
        "date": 1734002853537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013870.2127659575,
            "unit": "ns",
            "range": "± 104772.83961210724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1793268,
            "unit": "ns",
            "range": "± 71522.19989311724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1551060,
            "unit": "ns",
            "range": "± 128329.45251569775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6706848.780487805,
            "unit": "ns",
            "range": "± 187825.92622152995"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33882.82828282828,
            "unit": "ns",
            "range": "± 3861.876471143994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9831126.666666666,
            "unit": "ns",
            "range": "± 180049.45934249237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23907135.714285713,
            "unit": "ns",
            "range": "± 312910.5416695195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60406693.333333336,
            "unit": "ns",
            "range": "± 608398.6938403687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118869286.66666667,
            "unit": "ns",
            "range": "± 1082205.1408824397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236263107.69230768,
            "unit": "ns",
            "range": "± 1936318.0203079323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3349798.604910714,
            "unit": "ns",
            "range": "± 9232.391820789899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1086525.5338541667,
            "unit": "ns",
            "range": "± 3003.491198107157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758780.9700520834,
            "unit": "ns",
            "range": "± 2629.690826822332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1991146.6238839286,
            "unit": "ns",
            "range": "± 6592.087208896658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614673.876953125,
            "unit": "ns",
            "range": "± 1422.0154604698153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578100.2092633928,
            "unit": "ns",
            "range": "± 577.1979929096889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186220,
            "unit": "ns",
            "range": "± 34312.24687650585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2281707.1428571427,
            "unit": "ns",
            "range": "± 28728.101072099966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2772306.6666666665,
            "unit": "ns",
            "range": "± 45574.075755328064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2365405,
            "unit": "ns",
            "range": "± 54092.303908275746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3092485.714285714,
            "unit": "ns",
            "range": "± 70986.47959797898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102798.86363636363,
            "unit": "ns",
            "range": "± 8419.278565732226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173548.57142857142,
            "unit": "ns",
            "range": "± 7904.057715147912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152732,
            "unit": "ns",
            "range": "± 3941.0996773320344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2704926.6666666665,
            "unit": "ns",
            "range": "± 49922.18897825848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2458030.769230769,
            "unit": "ns",
            "range": "± 22989.540542580973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11755.913978494624,
            "unit": "ns",
            "range": "± 1734.1494823983535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58953.60824742268,
            "unit": "ns",
            "range": "± 6721.034485350049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45010.90909090909,
            "unit": "ns",
            "range": "± 1893.3287096258805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59675.510204081635,
            "unit": "ns",
            "range": "± 12810.498764801767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3161.6161616161617,
            "unit": "ns",
            "range": "± 607.2196708899745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12159.34065934066,
            "unit": "ns",
            "range": "± 1576.774346004316"
          }
        ]
      },
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
          "id": "b17d8aaa556ee4710c1660d5233b29ca4c388c8a",
          "message": "test: Fix query test failure for validator power",
          "timestamp": "2024-12-12T20:17:19+09:00",
          "tree_id": "9aff13e18a69500bd3bb46426299fc7cd1dbb0cd",
          "url": "https://github.com/planetarium/libplanet/commit/b17d8aaa556ee4710c1660d5233b29ca4c388c8a"
        },
        "date": 1734058665891,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976386,
            "unit": "ns",
            "range": "± 116923.5984856277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1726609.3023255814,
            "unit": "ns",
            "range": "± 62802.98299691811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1439483.1460674158,
            "unit": "ns",
            "range": "± 104489.27982851012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6578855.263157895,
            "unit": "ns",
            "range": "± 202686.20227625789"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31420,
            "unit": "ns",
            "range": "± 4037.6760992962627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9765684.615384616,
            "unit": "ns",
            "range": "± 69422.25683157919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23275800,
            "unit": "ns",
            "range": "± 206759.573970763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58283440,
            "unit": "ns",
            "range": "± 360567.78795988654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117607660,
            "unit": "ns",
            "range": "± 659908.6536353779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235555326.66666666,
            "unit": "ns",
            "range": "± 1057451.3804876506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3310056.3895089286,
            "unit": "ns",
            "range": "± 3553.6221289468626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057738.251201923,
            "unit": "ns",
            "range": "± 1122.1057136669901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734612.5751201923,
            "unit": "ns",
            "range": "± 1026.444310084576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1895333.5336538462,
            "unit": "ns",
            "range": "± 1851.6732791595127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613590.9737723215,
            "unit": "ns",
            "range": "± 1593.262342739812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562370.2373798077,
            "unit": "ns",
            "range": "± 779.5641836921774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2221403.5714285714,
            "unit": "ns",
            "range": "± 63620.70174460661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2315071.4285714286,
            "unit": "ns",
            "range": "± 54630.02968017812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2709904.347826087,
            "unit": "ns",
            "range": "± 66451.55773713434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2250200,
            "unit": "ns",
            "range": "± 49553.73017153243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2938933.3333333335,
            "unit": "ns",
            "range": "± 43242.36789252389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87848.78048780488,
            "unit": "ns",
            "range": "± 4762.540143440912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157045.83333333334,
            "unit": "ns",
            "range": "± 5925.284506154387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146296,
            "unit": "ns",
            "range": "± 3840.8419215930594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2619307.1428571427,
            "unit": "ns",
            "range": "± 35206.71842103467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2525200,
            "unit": "ns",
            "range": "± 29437.68236218916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9754.838709677419,
            "unit": "ns",
            "range": "± 1148.9613579070162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49122.72727272727,
            "unit": "ns",
            "range": "± 3006.3812314264032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44656.75675675676,
            "unit": "ns",
            "range": "± 1509.6983768916189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46501.041666666664,
            "unit": "ns",
            "range": "± 7975.072938675419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2271.4285714285716,
            "unit": "ns",
            "range": "± 269.7841825508663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9039.772727272728,
            "unit": "ns",
            "range": "± 656.2764648592153"
          }
        ]
      }
    ]
  }
}