window.BENCHMARK_DATA = {
  "lastUpdate": 1698026015379,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "8ba410942864b26987a6a6745a77f65b18f05d6b",
          "message": "add conditional exports to support cjs",
          "timestamp": "2023-10-23T10:34:47+09:00",
          "tree_id": "7a258ff201260e1e5d6b8bef08db48450bc33a94",
          "url": "https://github.com/planetarium/libplanet/commit/8ba410942864b26987a6a6745a77f65b18f05d6b"
        },
        "date": 1698025948883,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9024103.53125,
            "unit": "ns",
            "range": "± 948590.7793150562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19479117.423076924,
            "unit": "ns",
            "range": "± 222869.23671608482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58281688.823529415,
            "unit": "ns",
            "range": "± 2352843.579809799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94475553.11764705,
            "unit": "ns",
            "range": "± 3817451.3603296406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207212058.96875,
            "unit": "ns",
            "range": "± 16917596.80613492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50033.86842105263,
            "unit": "ns",
            "range": "± 12058.884951674245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 228199.04166666666,
            "unit": "ns",
            "range": "± 18680.82233280496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210987.6947368421,
            "unit": "ns",
            "range": "± 14518.204410306396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198673.54545454544,
            "unit": "ns",
            "range": "± 17461.87552125635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3804915.388888889,
            "unit": "ns",
            "range": "± 78951.61510540258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3402715.238095238,
            "unit": "ns",
            "range": "± 66155.50609050221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14397.309278350516,
            "unit": "ns",
            "range": "± 3002.9168020471666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62529.515789473684,
            "unit": "ns",
            "range": "± 7245.494583742777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56142.043956043955,
            "unit": "ns",
            "range": "± 7636.50130755365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60200.663265306124,
            "unit": "ns",
            "range": "± 11479.010980327168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3856.65625,
            "unit": "ns",
            "range": "± 1083.70559051243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12994.564516129032,
            "unit": "ns",
            "range": "± 1931.6761746262007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1402784.8072289156,
            "unit": "ns",
            "range": "± 154740.65580610625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2672364.0736842104,
            "unit": "ns",
            "range": "± 163286.24839052415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1581762.38,
            "unit": "ns",
            "range": "± 186740.28511495245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4741330.226804123,
            "unit": "ns",
            "range": "± 327205.4826433137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3458489.782608696,
            "unit": "ns",
            "range": "± 203286.4249498114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3749719.785714286,
            "unit": "ns",
            "range": "± 134197.6140383543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4535792.833333333,
            "unit": "ns",
            "range": "± 116260.72580644621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4007528.074626866,
            "unit": "ns",
            "range": "± 189415.43807976396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6250395.22631579,
            "unit": "ns",
            "range": "± 569612.6984299487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4300017.859188988,
            "unit": "ns",
            "range": "± 98875.78620684815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1322135.976356908,
            "unit": "ns",
            "range": "± 26434.106586324127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 860207.8095703125,
            "unit": "ns",
            "range": "± 13852.185272783378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1984015.2603236607,
            "unit": "ns",
            "range": "± 20596.794801321554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 698885.1907894737,
            "unit": "ns",
            "range": "± 30090.779194913684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 662311.9852410082,
            "unit": "ns",
            "range": "± 27460.754902494322"
          }
        ]
      }
    ]
  }
}