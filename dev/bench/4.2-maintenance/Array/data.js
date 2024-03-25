window.BENCHMARK_DATA = {
  "lastUpdate": 1711357037855,
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
          "id": "81ddb0a52b2ea66034848270f3d8a6630432585b",
          "message": "Merge pull request #3707 from greymistcube/release/4.2.0\n\n🚀 Release 4.2.0",
          "timestamp": "2024-03-22T20:09:24+09:00",
          "tree_id": "3c298f46a53aa9d2b54bc5e0fc9f400afb20a4cf",
          "url": "https://github.com/planetarium/libplanet/commit/81ddb0a52b2ea66034848270f3d8a6630432585b"
        },
        "date": 1711342378773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5695133.8,
            "unit": "ns",
            "range": "± 73514.3588969432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14321434.142857144,
            "unit": "ns",
            "range": "± 55615.947476154084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36398264.2,
            "unit": "ns",
            "range": "± 552014.9894620099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72777112.5,
            "unit": "ns",
            "range": "± 222748.69326504637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146468061.4,
            "unit": "ns",
            "range": "± 449997.87069016864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17486.287234042553,
            "unit": "ns",
            "range": "± 1533.7799247185646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108523.95,
            "unit": "ns",
            "range": "± 3644.502920275608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104877.52272727272,
            "unit": "ns",
            "range": "± 3840.1250735967974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91089.46,
            "unit": "ns",
            "range": "± 3676.800029584288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3213510.875,
            "unit": "ns",
            "range": "± 60937.20315196073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2817931.3653846155,
            "unit": "ns",
            "range": "± 116260.09089191875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5257.403225806452,
            "unit": "ns",
            "range": "± 906.2258820121014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27457.977272727272,
            "unit": "ns",
            "range": "± 1511.2823281371361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21713.475409836065,
            "unit": "ns",
            "range": "± 804.4967703800385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28647.684210526317,
            "unit": "ns",
            "range": "± 5445.0911979998355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 992.8191489361702,
            "unit": "ns",
            "range": "± 223.72222421536506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4665.2558139534885,
            "unit": "ns",
            "range": "± 427.98570443543366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 686918.2653061225,
            "unit": "ns",
            "range": "± 65769.32249408495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1262742.1363636365,
            "unit": "ns",
            "range": "± 60596.920328839435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1043782.45,
            "unit": "ns",
            "range": "± 62049.99864729079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8464000.8,
            "unit": "ns",
            "range": "± 1914395.3022085885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2200464.7317073173,
            "unit": "ns",
            "range": "± 79118.83802105045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2311785.627118644,
            "unit": "ns",
            "range": "± 102104.53524965586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2653166.3846153845,
            "unit": "ns",
            "range": "± 26575.96789563352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2992357.4565217393,
            "unit": "ns",
            "range": "± 114226.88047735066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10208348.131313132,
            "unit": "ns",
            "range": "± 964754.5944524732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3042586.1325334823,
            "unit": "ns",
            "range": "± 46705.751150708085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919008.2279296875,
            "unit": "ns",
            "range": "± 4326.313081731343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616148.4666666667,
            "unit": "ns",
            "range": "± 8246.082356890447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1647318.4634114583,
            "unit": "ns",
            "range": "± 13587.188074653795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466439.1981445312,
            "unit": "ns",
            "range": "± 767.1745048036153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419641.8484049479,
            "unit": "ns",
            "range": "± 1105.7435994233895"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "386de84c339214e70edc4e3d65eec1679cb9e81d",
          "message": "Merge pull request #3711 from greymistcube/prepare/4.2.1\n\n🔧 Prepare 4.2.1",
          "timestamp": "2024-03-25T17:47:50+09:00",
          "tree_id": "bff2217702bb4646576f2c265daef2bf5ec9b964",
          "url": "https://github.com/planetarium/libplanet/commit/386de84c339214e70edc4e3d65eec1679cb9e81d"
        },
        "date": 1711357003169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5808719.133333334,
            "unit": "ns",
            "range": "± 73685.00306601131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14334513.416666666,
            "unit": "ns",
            "range": "± 96829.14202811834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35918483.666666664,
            "unit": "ns",
            "range": "± 89804.48714184345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72999369.86666666,
            "unit": "ns",
            "range": "± 260740.69778993257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145766978,
            "unit": "ns",
            "range": "± 437155.65777698514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17414.206521739132,
            "unit": "ns",
            "range": "± 1353.1613821384522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109442.01923076923,
            "unit": "ns",
            "range": "± 4352.641881956762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105822.47457627118,
            "unit": "ns",
            "range": "± 4380.108101153528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93264.56,
            "unit": "ns",
            "range": "± 2414.1454851216677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3184992.403846154,
            "unit": "ns",
            "range": "± 129129.42497070559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2720813.4294117647,
            "unit": "ns",
            "range": "± 146633.52337332658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4868.659090909091,
            "unit": "ns",
            "range": "± 596.0714854599862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26997.19540229885,
            "unit": "ns",
            "range": "± 1853.5551185904974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22466.160714285714,
            "unit": "ns",
            "range": "± 961.2566921726752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29715.154639175256,
            "unit": "ns",
            "range": "± 5756.077053754085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1179.7157894736843,
            "unit": "ns",
            "range": "± 214.2410485310877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4818.824175824176,
            "unit": "ns",
            "range": "± 588.9005876000653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 672222.0842105263,
            "unit": "ns",
            "range": "± 51085.24181660412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1235768.9512195121,
            "unit": "ns",
            "range": "± 41804.246708887855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1047099.8085106383,
            "unit": "ns",
            "range": "± 77195.70449931611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8473622.89,
            "unit": "ns",
            "range": "± 1830211.7135581092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2375719.0416666665,
            "unit": "ns",
            "range": "± 60389.98783449425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316038.3333333335,
            "unit": "ns",
            "range": "± 99954.23425522113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2649772.769230769,
            "unit": "ns",
            "range": "± 25882.405452848485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3012507.0454545454,
            "unit": "ns",
            "range": "± 112553.40841448923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10070307.132653061,
            "unit": "ns",
            "range": "± 871867.2087845876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3036404.785416667,
            "unit": "ns",
            "range": "± 28907.6669188478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922495.6899739583,
            "unit": "ns",
            "range": "± 6967.280349727376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 611685.573828125,
            "unit": "ns",
            "range": "± 4706.806004758705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635886.05078125,
            "unit": "ns",
            "range": "± 15864.035493145111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466993.5085449219,
            "unit": "ns",
            "range": "± 494.64650358950394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425676.2393880208,
            "unit": "ns",
            "range": "± 949.0724545785539"
          }
        ]
      }
    ]
  }
}