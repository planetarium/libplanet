window.BENCHMARK_DATA = {
  "lastUpdate": 1723617992995,
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
          "id": "55ea7ecf677b8a31b7b0626cce857079688b2994",
          "message": "feat: Add a feature that allows you to optionally set whether to start or not for all services.",
          "timestamp": "2024-08-14T15:17:07+09:00",
          "tree_id": "4806c0c503abd755893653acad477caaecd9ba9e",
          "url": "https://github.com/planetarium/libplanet/commit/55ea7ecf677b8a31b7b0626cce857079688b2994"
        },
        "date": 1723617924528,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009184.2696629213,
            "unit": "ns",
            "range": "± 61736.43557104154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1892908.9285714286,
            "unit": "ns",
            "range": "± 81465.27040688893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1643711.111111111,
            "unit": "ns",
            "range": "± 94871.73090333209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7034315.151515151,
            "unit": "ns",
            "range": "± 183228.6347047251"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36986.868686868685,
            "unit": "ns",
            "range": "± 4580.7192747883655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10388226.666666666,
            "unit": "ns",
            "range": "± 162187.89133359524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25072720,
            "unit": "ns",
            "range": "± 282173.35654320224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62451213.333333336,
            "unit": "ns",
            "range": "± 603506.6242584331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124528114.28571428,
            "unit": "ns",
            "range": "± 1828268.2642145453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251805928.57142857,
            "unit": "ns",
            "range": "± 1514207.504542619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3395452.1875,
            "unit": "ns",
            "range": "± 15107.295486271805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1108139.375,
            "unit": "ns",
            "range": "± 5392.059575445075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760499.8111979166,
            "unit": "ns",
            "range": "± 1198.4311324251364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948310.5794270833,
            "unit": "ns",
            "range": "± 3038.4528571589535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642381.6964285715,
            "unit": "ns",
            "range": "± 1397.1976165299097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573085.68359375,
            "unit": "ns",
            "range": "± 1924.9872432986715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2327861.111111111,
            "unit": "ns",
            "range": "± 47058.11349546042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2319507.1428571427,
            "unit": "ns",
            "range": "± 63514.73394867862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2747210,
            "unit": "ns",
            "range": "± 50718.95672653935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2309796,
            "unit": "ns",
            "range": "± 49151.784301284526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3020100,
            "unit": "ns",
            "range": "± 52026.41340999486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188286.36363636365,
            "unit": "ns",
            "range": "± 9915.866558872964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174773.2142857143,
            "unit": "ns",
            "range": "± 7205.389171785457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151716.66666666666,
            "unit": "ns",
            "range": "± 3818.6802485387166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2839163.1578947366,
            "unit": "ns",
            "range": "± 62540.61978272215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2504865,
            "unit": "ns",
            "range": "± 56852.46164183959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12898.901098901099,
            "unit": "ns",
            "range": "± 1355.8510656897802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60946.93877551021,
            "unit": "ns",
            "range": "± 6176.2131673863405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49288.63636363636,
            "unit": "ns",
            "range": "± 1826.830513528434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66479.79797979798,
            "unit": "ns",
            "range": "± 15089.048466760281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3141.237113402062,
            "unit": "ns",
            "range": "± 582.3359170400829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12006.521739130434,
            "unit": "ns",
            "range": "± 1420.5558692090203"
          }
        ]
      }
    ]
  }
}