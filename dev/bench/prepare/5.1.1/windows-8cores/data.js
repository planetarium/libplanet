window.BENCHMARK_DATA = {
  "lastUpdate": 1720689594694,
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
          "id": "48f1ba1f05a55879e3053e45c3e42173b0313d1a",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T17:53:17+09:00",
          "tree_id": "778cbdea0edb67bbd929081380c5f93ec173bb0d",
          "url": "https://github.com/planetarium/libplanet/commit/48f1ba1f05a55879e3053e45c3e42173b0313d1a"
        },
        "date": 1720689088269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992041.1111111111,
            "unit": "ns",
            "range": "± 76594.27017388874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1766205.1282051282,
            "unit": "ns",
            "range": "± 61842.34602991004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1601155.4347826086,
            "unit": "ns",
            "range": "± 113315.73352647923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6646596,
            "unit": "ns",
            "range": "± 151766.2717250883"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30028.571428571428,
            "unit": "ns",
            "range": "± 710.0301804450689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9457772.222222222,
            "unit": "ns",
            "range": "± 202331.99510168945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23599762.5,
            "unit": "ns",
            "range": "± 451746.10254729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57477586.666666664,
            "unit": "ns",
            "range": "± 1065193.5483863058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117333520,
            "unit": "ns",
            "range": "± 1967841.5409492997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233486984.6153846,
            "unit": "ns",
            "range": "± 2336960.2153389184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3295333.5677083335,
            "unit": "ns",
            "range": "± 7689.759533182826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057694.9088541667,
            "unit": "ns",
            "range": "± 11090.721240072975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736380.7161458334,
            "unit": "ns",
            "range": "± 4029.6385476456107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940116.2369791667,
            "unit": "ns",
            "range": "± 7044.6085166925295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617993.41796875,
            "unit": "ns",
            "range": "± 5188.102793746709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567957.4894831731,
            "unit": "ns",
            "range": "± 2017.7031844575229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166627.777777778,
            "unit": "ns",
            "range": "± 65840.71519795162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2257861.5384615385,
            "unit": "ns",
            "range": "± 48749.73909200398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2652244.4444444445,
            "unit": "ns",
            "range": "± 72050.80116638502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2201626.5306122447,
            "unit": "ns",
            "range": "± 85570.79373124873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2962088.095238095,
            "unit": "ns",
            "range": "± 65570.12640059859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171229.7619047619,
            "unit": "ns",
            "range": "± 8813.034975806933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172137.6811594203,
            "unit": "ns",
            "range": "± 8246.658885827559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141579.16666666666,
            "unit": "ns",
            "range": "± 5395.465327410675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2730713.888888889,
            "unit": "ns",
            "range": "± 89331.42193228788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2444288.3720930233,
            "unit": "ns",
            "range": "± 89843.79091698235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10937.777777777777,
            "unit": "ns",
            "range": "± 1242.738709715047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54980.41237113402,
            "unit": "ns",
            "range": "± 4794.08574824356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46053.52112676056,
            "unit": "ns",
            "range": "± 2261.973284288079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55902.0618556701,
            "unit": "ns",
            "range": "± 11641.949823997154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2461.4583333333335,
            "unit": "ns",
            "range": "± 525.8316303806495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10290.526315789473,
            "unit": "ns",
            "range": "± 1311.4936818344192"
          }
        ]
      }
    ]
  }
}