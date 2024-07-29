window.BENCHMARK_DATA = {
  "lastUpdate": 1722239023704,
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
          "id": "4e7eae43dae4c3ffe18ffd8ba289bca63275183c",
          "message": "add tracing example",
          "timestamp": "2024-07-11T15:37:56+09:00",
          "tree_id": "a28ed45abb03a1a23e123f9e8ec2cb8b89e6e291",
          "url": "https://github.com/planetarium/libplanet/commit/4e7eae43dae4c3ffe18ffd8ba289bca63275183c"
        },
        "date": 1720680409953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5768107.642857143,
            "unit": "ns",
            "range": "± 49574.26625487049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14376021.166666666,
            "unit": "ns",
            "range": "± 25959.376995022376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36218794.21428572,
            "unit": "ns",
            "range": "± 76560.6319604359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73355266.86666666,
            "unit": "ns",
            "range": "± 227655.88718309882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148378017.64285713,
            "unit": "ns",
            "range": "± 277461.6643196254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15609.494736842105,
            "unit": "ns",
            "range": "± 1111.3898991581345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108631.14035087719,
            "unit": "ns",
            "range": "± 4632.56369718985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103685.18867924529,
            "unit": "ns",
            "range": "± 3896.741183133788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91246.26923076923,
            "unit": "ns",
            "range": "± 3160.3016050399074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3081624.6,
            "unit": "ns",
            "range": "± 130896.51481773541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2775685.9795918367,
            "unit": "ns",
            "range": "± 110175.5287895732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5010.912087912088,
            "unit": "ns",
            "range": "± 595.4245105310561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26718.103448275862,
            "unit": "ns",
            "range": "± 1677.0216403485297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22131.962962962964,
            "unit": "ns",
            "range": "± 916.5335167257231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29965.273684210526,
            "unit": "ns",
            "range": "± 4446.101094844415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1084.0879120879122,
            "unit": "ns",
            "range": "± 154.6356038025201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4828.891304347826,
            "unit": "ns",
            "range": "± 602.1418447859575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 726856.1818181818,
            "unit": "ns",
            "range": "± 75624.33614474876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1366716.6210526316,
            "unit": "ns",
            "range": "± 167705.30150656556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1137104.07,
            "unit": "ns",
            "range": "± 85585.05232102753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10062635.39,
            "unit": "ns",
            "range": "± 1420533.773260813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2223188.0901639345,
            "unit": "ns",
            "range": "± 100156.35678617327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2279732.3666666667,
            "unit": "ns",
            "range": "± 67729.31194429134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2579003.1666666665,
            "unit": "ns",
            "range": "± 25311.17787508599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2464434.9305555555,
            "unit": "ns",
            "range": "± 120530.41385526673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2950741.765625,
            "unit": "ns",
            "range": "± 134975.84059340612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3049882.8116319445,
            "unit": "ns",
            "range": "± 61719.50036589798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918581.5895182291,
            "unit": "ns",
            "range": "± 5605.095314221353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613065.4239583333,
            "unit": "ns",
            "range": "± 5367.3194073036875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1639503.369921875,
            "unit": "ns",
            "range": "± 16403.45474168285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461272.8555664063,
            "unit": "ns",
            "range": "± 837.7827505113534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 433226.1681640625,
            "unit": "ns",
            "range": "± 1554.5454868270572"
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
          "id": "a4a4ab41303489276416ec2ae380a6c37671ad9c",
          "message": "use cache",
          "timestamp": "2024-07-29T15:49:10+09:00",
          "tree_id": "1132a23c89566e057ba94b930032f7f43d2ce107",
          "url": "https://github.com/planetarium/libplanet/commit/a4a4ab41303489276416ec2ae380a6c37671ad9c"
        },
        "date": 1722238961922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5773285.615384615,
            "unit": "ns",
            "range": "± 54212.084526942985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14256659.416666666,
            "unit": "ns",
            "range": "± 27654.44415199952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36250295.15384615,
            "unit": "ns",
            "range": "± 154465.15206071894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72949017.57692307,
            "unit": "ns",
            "range": "± 158548.32325480538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146575146.03333333,
            "unit": "ns",
            "range": "± 397914.2849219929"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15647.216494845361,
            "unit": "ns",
            "range": "± 1272.1279681011208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108354.56666666667,
            "unit": "ns",
            "range": "± 3653.3145589541928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105130.03703703704,
            "unit": "ns",
            "range": "± 4059.5402702953384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91501.625,
            "unit": "ns",
            "range": "± 2789.1507292225315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3072859.946153846,
            "unit": "ns",
            "range": "± 142022.69922863902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2790300.796296296,
            "unit": "ns",
            "range": "± 117003.43503675914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4927.923913043478,
            "unit": "ns",
            "range": "± 605.0015753988326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26517.579545454544,
            "unit": "ns",
            "range": "± 1829.9725782857925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22695.98979591837,
            "unit": "ns",
            "range": "± 853.7123130395709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28127.340425531915,
            "unit": "ns",
            "range": "± 4684.7284002319275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1129.8947368421052,
            "unit": "ns",
            "range": "± 175.9489453079592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4829,
            "unit": "ns",
            "range": "± 530.7066258558232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 722299.5052631579,
            "unit": "ns",
            "range": "± 62541.25631590542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1292576.5192307692,
            "unit": "ns",
            "range": "± 53191.54301920869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1093878.3516483516,
            "unit": "ns",
            "range": "± 60544.182994345094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9774880.12,
            "unit": "ns",
            "range": "± 1263864.022986717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2210736.290322581,
            "unit": "ns",
            "range": "± 67397.80748767899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2306492.230769231,
            "unit": "ns",
            "range": "± 77807.26910178074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2573924,
            "unit": "ns",
            "range": "± 28557.250485169738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2503328.295774648,
            "unit": "ns",
            "range": "± 121234.83821450411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3222312.51010101,
            "unit": "ns",
            "range": "± 229028.9993944931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3042809.2688802085,
            "unit": "ns",
            "range": "± 61980.813902751564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 930203.7892578125,
            "unit": "ns",
            "range": "± 4311.097926322945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617714.7628255208,
            "unit": "ns",
            "range": "± 4424.794776362936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1611542.4474158655,
            "unit": "ns",
            "range": "± 9463.188036373078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469728.1973353795,
            "unit": "ns",
            "range": "± 644.2699056424025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425220.4942708333,
            "unit": "ns",
            "range": "± 1258.7070024575428"
          }
        ]
      }
    ]
  }
}