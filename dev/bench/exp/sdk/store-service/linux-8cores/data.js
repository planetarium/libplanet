window.BENCHMARK_DATA = {
  "lastUpdate": 1725005052180,
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
          "id": "e1eb5cd0c5fe0ec219d47ccea9bf706c46999198",
          "message": "feat: Add IStoreService",
          "timestamp": "2024-08-30T16:54:37+09:00",
          "tree_id": "a89562dce658f987a8d715b4193ee2ef965bdfa9",
          "url": "https://github.com/planetarium/libplanet/commit/e1eb5cd0c5fe0ec219d47ccea9bf706c46999198"
        },
        "date": 1725005026053,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198680.9347826087,
            "unit": "ns",
            "range": "± 7293.698396263187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192664.35593220338,
            "unit": "ns",
            "range": "± 8463.785400290019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164554.84615384616,
            "unit": "ns",
            "range": "± 2631.6485595583695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3048586.5714285714,
            "unit": "ns",
            "range": "± 15853.133869822253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2798476.466666667,
            "unit": "ns",
            "range": "± 33287.290654599834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12597.053333333333,
            "unit": "ns",
            "range": "± 643.2875002111638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59908.92957746479,
            "unit": "ns",
            "range": "± 2887.63424338008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62810.625,
            "unit": "ns",
            "range": "± 1203.1258108222376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49181.505494505494,
            "unit": "ns",
            "range": "± 5325.9122460614435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2769.453608247423,
            "unit": "ns",
            "range": "± 317.35488877525313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11933.263440860215,
            "unit": "ns",
            "range": "± 770.2417943038275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2395290.1428571427,
            "unit": "ns",
            "range": "± 39565.084978098756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2612700.8947368423,
            "unit": "ns",
            "range": "± 54509.14600107107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3040807.6,
            "unit": "ns",
            "range": "± 41905.911348775466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2548185.074074074,
            "unit": "ns",
            "range": "± 71157.97782557533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3232500.933333333,
            "unit": "ns",
            "range": "± 44239.40030507174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10147868.846153846,
            "unit": "ns",
            "range": "± 34064.9643838704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26934350,
            "unit": "ns",
            "range": "± 62085.240815886886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68795788.66666667,
            "unit": "ns",
            "range": "± 302927.4636011227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137504713.35714287,
            "unit": "ns",
            "range": "± 519719.3583046464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280623021.5,
            "unit": "ns",
            "range": "± 762152.669405723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015531.175,
            "unit": "ns",
            "range": "± 43242.15495039299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1895416.280487805,
            "unit": "ns",
            "range": "± 61645.81117663722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1663123.6764705882,
            "unit": "ns",
            "range": "± 79093.73070423889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8369982.04,
            "unit": "ns",
            "range": "± 219618.38107242604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3786747.6643415177,
            "unit": "ns",
            "range": "± 4478.615239114664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218300.6608072917,
            "unit": "ns",
            "range": "± 1024.1607841673356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761357.5604166667,
            "unit": "ns",
            "range": "± 1898.0446507530983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936004.2263020833,
            "unit": "ns",
            "range": "± 4500.237921644126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612870.6588541666,
            "unit": "ns",
            "range": "± 1002.597450920401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569613.2557896206,
            "unit": "ns",
            "range": "± 575.407767224736"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31837.153846153848,
            "unit": "ns",
            "range": "± 400.7361655241193"
          }
        ]
      }
    ]
  }
}