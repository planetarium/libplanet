window.BENCHMARK_DATA = {
  "lastUpdate": 1724315318773,
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
          "id": "646cd574dba89aa2e3f8323725fcf523bb6f3564",
          "message": "feat: Determining whether to run services based on option settings",
          "timestamp": "2024-08-22T17:04:29+09:00",
          "tree_id": "1d5971aba9edc54e87582b874e3b0bcdba992340",
          "url": "https://github.com/planetarium/libplanet/commit/646cd574dba89aa2e3f8323725fcf523bb6f3564"
        },
        "date": 1724314418085,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203097.75,
            "unit": "ns",
            "range": "± 6776.801868454302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197516.3448275862,
            "unit": "ns",
            "range": "± 8125.406817457407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169353.5,
            "unit": "ns",
            "range": "± 2641.6050409377426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3217512.8571428573,
            "unit": "ns",
            "range": "± 49547.45686380211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835631.85,
            "unit": "ns",
            "range": "± 57203.15272713283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13820.368421052632,
            "unit": "ns",
            "range": "± 1054.6160746686955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85522.8762886598,
            "unit": "ns",
            "range": "± 14608.020297980242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51721.083333333336,
            "unit": "ns",
            "range": "± 468.9763433330733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66200.5612244898,
            "unit": "ns",
            "range": "± 12392.387203412653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2738.185567010309,
            "unit": "ns",
            "range": "± 465.35954580609206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14022.932989690722,
            "unit": "ns",
            "range": "± 3130.1579662854624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2522534.117647059,
            "unit": "ns",
            "range": "± 51659.43054259594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2579100.3157894737,
            "unit": "ns",
            "range": "± 57014.77772088043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2998818.8571428573,
            "unit": "ns",
            "range": "± 29397.016341556064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2651467.9285714286,
            "unit": "ns",
            "range": "± 44289.31032117428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3306171.347826087,
            "unit": "ns",
            "range": "± 83432.23103955181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10377491.333333334,
            "unit": "ns",
            "range": "± 39115.604560012085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26692403.714285713,
            "unit": "ns",
            "range": "± 77875.83192708227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67652456.13333334,
            "unit": "ns",
            "range": "± 387268.03461295506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138020905.46666667,
            "unit": "ns",
            "range": "± 1127610.7854540988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293048338.2,
            "unit": "ns",
            "range": "± 2211837.654837204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010249.2594936709,
            "unit": "ns",
            "range": "± 52049.13722534653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1910223.4166666667,
            "unit": "ns",
            "range": "± 62748.199011775854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1656446.8026315789,
            "unit": "ns",
            "range": "± 83507.55131156617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8396316.612903226,
            "unit": "ns",
            "range": "± 251285.5844478784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3742079.816964286,
            "unit": "ns",
            "range": "± 10748.715806607674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213851.240234375,
            "unit": "ns",
            "range": "± 2904.968204483836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772760.1201869419,
            "unit": "ns",
            "range": "± 870.7267889528163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937186.928125,
            "unit": "ns",
            "range": "± 2314.8404932457215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624204.2385253906,
            "unit": "ns",
            "range": "± 205.21673374555127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 593916.8826622596,
            "unit": "ns",
            "range": "± 281.50338585881263"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31587.19230769231,
            "unit": "ns",
            "range": "± 385.6873484692372"
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
          "id": "d5872637b3dc14a7ba25d6aa5d450ff5aa60b9e3",
          "message": "feat: Determining whether to run services based on option settings",
          "timestamp": "2024-08-22T17:17:24+09:00",
          "tree_id": "67d841575582347cda4935d7bebefbcb7d671302",
          "url": "https://github.com/planetarium/libplanet/commit/d5872637b3dc14a7ba25d6aa5d450ff5aa60b9e3"
        },
        "date": 1724315293002,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200459.11904761905,
            "unit": "ns",
            "range": "± 6120.864071802444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196768.94444444444,
            "unit": "ns",
            "range": "± 6955.24614803804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166456.41666666666,
            "unit": "ns",
            "range": "± 2218.8327995647264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3000473,
            "unit": "ns",
            "range": "± 30089.63434026358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2804751.066666667,
            "unit": "ns",
            "range": "± 25892.953049779688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16737.56989247312,
            "unit": "ns",
            "range": "± 977.841593798272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64242.61,
            "unit": "ns",
            "range": "± 9373.130000052213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49561.692307692305,
            "unit": "ns",
            "range": "± 435.6805757691799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54430.181818181816,
            "unit": "ns",
            "range": "± 5440.816779761103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2567.68085106383,
            "unit": "ns",
            "range": "± 169.6723732757674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11916.478723404256,
            "unit": "ns",
            "range": "± 772.6767428911035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2418944.785714286,
            "unit": "ns",
            "range": "± 25203.127245454074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2534487.2,
            "unit": "ns",
            "range": "± 38450.54076937206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2997236.714285714,
            "unit": "ns",
            "range": "± 28320.205351353954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2584190.722222222,
            "unit": "ns",
            "range": "± 51585.19652085054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3185068.6666666665,
            "unit": "ns",
            "range": "± 29731.635046256866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10331353.833333334,
            "unit": "ns",
            "range": "± 51209.54247942839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27230058.53846154,
            "unit": "ns",
            "range": "± 140743.15088226934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69242335,
            "unit": "ns",
            "range": "± 184215.27634129586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135979921.06666666,
            "unit": "ns",
            "range": "± 449476.46322177135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283601704.65384614,
            "unit": "ns",
            "range": "± 998491.5780632842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012390.5,
            "unit": "ns",
            "range": "± 50024.23368531313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1946755.7083333333,
            "unit": "ns",
            "range": "± 75804.56369660253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1666788.2328767122,
            "unit": "ns",
            "range": "± 82526.2388073098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8247358.764705882,
            "unit": "ns",
            "range": "± 156394.89461517334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3764223.4010416665,
            "unit": "ns",
            "range": "± 3162.6239159939532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202379.8059895833,
            "unit": "ns",
            "range": "± 2108.058167403552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769671.3090122768,
            "unit": "ns",
            "range": "± 883.4293927373411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929844.024639423,
            "unit": "ns",
            "range": "± 1508.3134578831016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617866.1559244791,
            "unit": "ns",
            "range": "± 1051.1694450188834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569763.5733119419,
            "unit": "ns",
            "range": "± 1244.8363608592183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32100.583333333332,
            "unit": "ns",
            "range": "± 654.9802222581196"
          }
        ]
      }
    ]
  }
}