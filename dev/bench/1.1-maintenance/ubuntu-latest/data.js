window.BENCHMARK_DATA = {
  "lastUpdate": 1683611974760,
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
          "id": "33fadb3ef33986e09fc384dc3d85cf603b338e25",
          "message": "Merge pull request #3141 from greymistcube/release/1.1.0\n\n🚀 Release 1.1.0",
          "timestamp": "2023-05-09T14:35:05+09:00",
          "tree_id": "b784bed2b52d9cdfbb1a2fe74471a840c90f84bd",
          "url": "https://github.com/planetarium/libplanet/commit/33fadb3ef33986e09fc384dc3d85cf603b338e25"
        },
        "date": 1683611948711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337255.7878787879,
            "unit": "ns",
            "range": "± 10452.381004936076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320982.5471698113,
            "unit": "ns",
            "range": "± 13344.16761182727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267500.625,
            "unit": "ns",
            "range": "± 8931.087037773288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5045294.6,
            "unit": "ns",
            "range": "± 92147.64129823711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4490255.111111111,
            "unit": "ns",
            "range": "± 147138.93302003047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23867.655913978495,
            "unit": "ns",
            "range": "± 1833.1571927582709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102093.82954545454,
            "unit": "ns",
            "range": "± 6394.491803918541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92854.1052631579,
            "unit": "ns",
            "range": "± 6600.799712145917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111976.27083333333,
            "unit": "ns",
            "range": "± 15423.939508015772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7001.416666666667,
            "unit": "ns",
            "range": "± 988.0317666602753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24214.5,
            "unit": "ns",
            "range": "± 3052.618051512677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3992336.025,
            "unit": "ns",
            "range": "± 140803.43654068257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4162883.074626866,
            "unit": "ns",
            "range": "± 196213.48399378467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5013385.470588235,
            "unit": "ns",
            "range": "± 161016.9363746212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5204311.42,
            "unit": "ns",
            "range": "± 209514.8737215931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8123339.724137931,
            "unit": "ns",
            "range": "± 238012.42706690406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7076420.641145834,
            "unit": "ns",
            "range": "± 81617.17294604852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2171551.8739583334,
            "unit": "ns",
            "range": "± 19248.823817375756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1591245.662890625,
            "unit": "ns",
            "range": "± 10291.292857530114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032187.818489583,
            "unit": "ns",
            "range": "± 15767.607094921084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955747.7905598958,
            "unit": "ns",
            "range": "± 9404.178232715783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888292.8843470982,
            "unit": "ns",
            "range": "± 4314.9903911791935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54442.032258064515,
            "unit": "ns",
            "range": "± 3902.0733018865667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10125485.666666666,
            "unit": "ns",
            "range": "± 353525.1263416962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25213491.333333332,
            "unit": "ns",
            "range": "± 423518.96778229537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66514752.421052635,
            "unit": "ns",
            "range": "± 1436541.368296256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124881551.21428572,
            "unit": "ns",
            "range": "± 1481535.4000889743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250488347.14285713,
            "unit": "ns",
            "range": "± 2050117.4588988367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1675311.101010101,
            "unit": "ns",
            "range": "± 150197.29102298335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3064548.6964285714,
            "unit": "ns",
            "range": "± 131820.44239466183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2647448.373493976,
            "unit": "ns",
            "range": "± 123786.69329888007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6727414.52,
            "unit": "ns",
            "range": "± 427691.35548731324"
          }
        ]
      }
    ]
  }
}