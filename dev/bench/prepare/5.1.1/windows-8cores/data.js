window.BENCHMARK_DATA = {
  "lastUpdate": 1720674308177,
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
          "id": "cf3de69ec4b049161de30270cdf1e4b69413655d",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T13:46:38+09:00",
          "tree_id": "7bf03099fdc240cac41d733e2dfddd3315502ca9",
          "url": "https://github.com/planetarium/libplanet/commit/cf3de69ec4b049161de30270cdf1e4b69413655d"
        },
        "date": 1720673970936,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1040047.1910112359,
            "unit": "ns",
            "range": "± 77189.58963294038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871505.3846153845,
            "unit": "ns",
            "range": "± 86377.37701282313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1657851.5151515151,
            "unit": "ns",
            "range": "± 126661.40252870262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6770434.2105263155,
            "unit": "ns",
            "range": "± 136088.84052199093"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34817.34693877551,
            "unit": "ns",
            "range": "± 5758.114409118291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10139906.666666666,
            "unit": "ns",
            "range": "± 172869.4324242047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24333571.42857143,
            "unit": "ns",
            "range": "± 414865.5990495299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61767093.333333336,
            "unit": "ns",
            "range": "± 871275.7267910304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125493586.66666667,
            "unit": "ns",
            "range": "± 1693580.7053470495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247608866.66666666,
            "unit": "ns",
            "range": "± 3328660.44027724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3354763.6458333335,
            "unit": "ns",
            "range": "± 11245.018346380968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1090195.7632211538,
            "unit": "ns",
            "range": "± 1500.810921889355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738938.4830729166,
            "unit": "ns",
            "range": "± 1425.2181980642085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958416.8526785714,
            "unit": "ns",
            "range": "± 3235.6547281576827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624538.7109375,
            "unit": "ns",
            "range": "± 662.4599339793274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575602.4263822115,
            "unit": "ns",
            "range": "± 808.354929520312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2254740,
            "unit": "ns",
            "range": "± 79454.1790222677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2326028.125,
            "unit": "ns",
            "range": "± 67849.8543244924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2775497.222222222,
            "unit": "ns",
            "range": "± 91619.9930960521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2316968.6274509802,
            "unit": "ns",
            "range": "± 93603.52234867249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3080400,
            "unit": "ns",
            "range": "± 47619.15880939399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182912.8205128205,
            "unit": "ns",
            "range": "± 9354.578835423066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178251.72413793104,
            "unit": "ns",
            "range": "± 7368.692458919966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145255.81395348837,
            "unit": "ns",
            "range": "± 4744.535820819436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2878966,
            "unit": "ns",
            "range": "± 76262.58191275719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2528990.7407407407,
            "unit": "ns",
            "range": "± 70075.81750811188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13258.947368421053,
            "unit": "ns",
            "range": "± 2024.766586854643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61619.58762886598,
            "unit": "ns",
            "range": "± 7552.671149655952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50158.69565217391,
            "unit": "ns",
            "range": "± 5472.25072070995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66795.78947368421,
            "unit": "ns",
            "range": "± 13191.074640376088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3508.064516129032,
            "unit": "ns",
            "range": "± 843.8167146758467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12103.225806451614,
            "unit": "ns",
            "range": "± 1941.7860230537217"
          }
        ]
      }
    ]
  }
}