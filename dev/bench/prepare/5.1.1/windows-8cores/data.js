window.BENCHMARK_DATA = {
  "lastUpdate": 1720761705655,
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
          "id": "8d2792f6d39c7b0bef1b8bbc957ab350ec35bdc0",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T18:19:26+09:00",
          "tree_id": "d49a20a088b47d1a0e4467a05659cd5619cc06ce",
          "url": "https://github.com/planetarium/libplanet/commit/8d2792f6d39c7b0bef1b8bbc957ab350ec35bdc0"
        },
        "date": 1720690139342,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003450.505050505,
            "unit": "ns",
            "range": "± 87802.14814644387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1786426.0869565217,
            "unit": "ns",
            "range": "± 67539.41214755067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1536287.1794871795,
            "unit": "ns",
            "range": "± 69171.74439834681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6797489.655172414,
            "unit": "ns",
            "range": "± 194901.1000936988"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33559,
            "unit": "ns",
            "range": "± 4693.45331716467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9618621.42857143,
            "unit": "ns",
            "range": "± 67593.12867411926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23834766.666666668,
            "unit": "ns",
            "range": "± 258175.70060126184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58699023.07692308,
            "unit": "ns",
            "range": "± 285889.979286456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118224446.66666667,
            "unit": "ns",
            "range": "± 755067.2154249076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238304250,
            "unit": "ns",
            "range": "± 2333186.005889141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3304503.9322916665,
            "unit": "ns",
            "range": "± 10271.42915856703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060950.9207589286,
            "unit": "ns",
            "range": "± 1558.3809107911968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739369.7566105769,
            "unit": "ns",
            "range": "± 1595.3252287506593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941212.3046875,
            "unit": "ns",
            "range": "± 3159.5535104991195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621316.0611979166,
            "unit": "ns",
            "range": "± 1168.6571169499744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 548873.9713541666,
            "unit": "ns",
            "range": "± 1308.1480408636548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2231978.5714285714,
            "unit": "ns",
            "range": "± 27992.91609761926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2302154.5454545454,
            "unit": "ns",
            "range": "± 41378.11392135112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2718170,
            "unit": "ns",
            "range": "± 78272.12103319088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2285769.0721649486,
            "unit": "ns",
            "range": "± 137942.5834366307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2964200,
            "unit": "ns",
            "range": "± 38405.54275473417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174053.84615384616,
            "unit": "ns",
            "range": "± 7170.731948814543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166747.4358974359,
            "unit": "ns",
            "range": "± 8620.539115316085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141644,
            "unit": "ns",
            "range": "± 3679.6829573574223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2709893.3333333335,
            "unit": "ns",
            "range": "± 38943.44739796537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2485192.8571428573,
            "unit": "ns",
            "range": "± 30372.8488136188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10579.12087912088,
            "unit": "ns",
            "range": "± 1512.210779217448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53531.25,
            "unit": "ns",
            "range": "± 5261.244849692994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44430.769230769234,
            "unit": "ns",
            "range": "± 552.8481035881607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51581.914893617024,
            "unit": "ns",
            "range": "± 9351.763248909096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2485.4166666666665,
            "unit": "ns",
            "range": "± 386.88476909979727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9646.067415730337,
            "unit": "ns",
            "range": "± 877.5037140267532"
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
          "id": "2fe886ea91e649a996f7f28310e32a035f71e045",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-12T14:06:44+09:00",
          "tree_id": "d49aae5a54c32de95131bf665075de50510f0082",
          "url": "https://github.com/planetarium/libplanet/commit/2fe886ea91e649a996f7f28310e32a035f71e045"
        },
        "date": 1720761450578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1034714.1414141414,
            "unit": "ns",
            "range": "± 108112.36974489712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1814801.6666666667,
            "unit": "ns",
            "range": "± 80247.59036810392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1635663,
            "unit": "ns",
            "range": "± 151712.72138252918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7204170.930232558,
            "unit": "ns",
            "range": "± 391861.2638245625"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37243.298969072166,
            "unit": "ns",
            "range": "± 4139.819521440892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9837363.333333334,
            "unit": "ns",
            "range": "± 142316.79886118587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24016286.666666668,
            "unit": "ns",
            "range": "± 298001.28683007555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60178333.333333336,
            "unit": "ns",
            "range": "± 677738.2266107792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118563264.28571428,
            "unit": "ns",
            "range": "± 1167744.9475260114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237190626.66666666,
            "unit": "ns",
            "range": "± 1062816.2188037878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3306711.8303571427,
            "unit": "ns",
            "range": "± 2985.953221457482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075630.0911458333,
            "unit": "ns",
            "range": "± 1870.7314321738238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743854.5247395834,
            "unit": "ns",
            "range": "± 2192.649101990793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940730.0520833333,
            "unit": "ns",
            "range": "± 2121.9173233644988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610051.8619791666,
            "unit": "ns",
            "range": "± 1379.6655408289184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552375.6310096154,
            "unit": "ns",
            "range": "± 680.248319238692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2149679.1666666665,
            "unit": "ns",
            "range": "± 30792.771302576093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2286546.6666666665,
            "unit": "ns",
            "range": "± 31617.058385504195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2788940,
            "unit": "ns",
            "range": "± 44229.73789528618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2265354.761904762,
            "unit": "ns",
            "range": "± 53065.87864334742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3005610,
            "unit": "ns",
            "range": "± 42966.71136722341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176841.66666666666,
            "unit": "ns",
            "range": "± 7793.745681725342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170563.9344262295,
            "unit": "ns",
            "range": "± 7514.342570198346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148298,
            "unit": "ns",
            "range": "± 5945.826524649411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2731720,
            "unit": "ns",
            "range": "± 34404.67576196169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2490369.230769231,
            "unit": "ns",
            "range": "± 36494.34624284024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12006.185567010309,
            "unit": "ns",
            "range": "± 1645.5631275866785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56171.875,
            "unit": "ns",
            "range": "± 5549.863974150983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46164.47368421053,
            "unit": "ns",
            "range": "± 2172.231046481531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59472.916666666664,
            "unit": "ns",
            "range": "± 11508.591565633105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2611.7021276595747,
            "unit": "ns",
            "range": "± 455.5172843477077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11863.829787234043,
            "unit": "ns",
            "range": "± 1647.4059807284116"
          }
        ]
      }
    ]
  }
}