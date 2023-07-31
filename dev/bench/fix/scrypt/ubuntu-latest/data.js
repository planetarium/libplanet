window.BENCHMARK_DATA = {
  "lastUpdate": 1690775080298,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "8b36a4b4c6b388a0ed70890fe17a32959a6524fa",
          "message": "Use @noble/hashes/scrypt instead of scrypt-js",
          "timestamp": "2023-07-31T12:29:40+09:00",
          "tree_id": "c4ed2918319de0bffb1c1319964c0b7dad95ce9a",
          "url": "https://github.com/planetarium/libplanet/commit/8b36a4b4c6b388a0ed70890fe17a32959a6524fa"
        },
        "date": 1690775053482,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288700.96,
            "unit": "ns",
            "range": "± 9684.49106679629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274241.5128205128,
            "unit": "ns",
            "range": "± 9114.437840654084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238184.76923076922,
            "unit": "ns",
            "range": "± 6296.420585111463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4356786.75,
            "unit": "ns",
            "range": "± 73209.54510854442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4009289.6,
            "unit": "ns",
            "range": "± 66169.11655836343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18888.304347826088,
            "unit": "ns",
            "range": "± 1158.0242717865729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86961.60294117648,
            "unit": "ns",
            "range": "± 4159.5135986440355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75706.88888888889,
            "unit": "ns",
            "range": "± 1579.8842432982935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83088.9493670886,
            "unit": "ns",
            "range": "± 5207.959854257451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4867.593023255814,
            "unit": "ns",
            "range": "± 495.05905477574925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18467.610526315788,
            "unit": "ns",
            "range": "± 1272.0880831834638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442486.25,
            "unit": "ns",
            "range": "± 79457.74449733297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2815765.8771929825,
            "unit": "ns",
            "range": "± 113268.15154488645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1854716.21686747,
            "unit": "ns",
            "range": "± 96392.70683398025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4862488.72,
            "unit": "ns",
            "range": "± 112182.43213382387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6089433.046354166,
            "unit": "ns",
            "range": "± 35316.72104903172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1935725.0744791667,
            "unit": "ns",
            "range": "± 7799.3945698219195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393756.418359375,
            "unit": "ns",
            "range": "± 4005.2729219941143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2651118.6088541667,
            "unit": "ns",
            "range": "± 6449.323412999079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837885.7119140625,
            "unit": "ns",
            "range": "± 2177.0267711887423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775047.6579241072,
            "unit": "ns",
            "range": "± 1313.342448738486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3422195.111111111,
            "unit": "ns",
            "range": "± 95674.64837479689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3557143.447368421,
            "unit": "ns",
            "range": "± 121650.70266417018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4343848.105263158,
            "unit": "ns",
            "range": "± 94503.24660730782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4031553.4166666665,
            "unit": "ns",
            "range": "± 159012.40405032953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6691846.48,
            "unit": "ns",
            "range": "± 269998.28510606114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7865258.428571428,
            "unit": "ns",
            "range": "± 81942.64040517261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22287608.066666666,
            "unit": "ns",
            "range": "± 288015.90179672535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54861403.666666664,
            "unit": "ns",
            "range": "± 868430.2275165943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107674710.33333333,
            "unit": "ns",
            "range": "± 1461620.6767353767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212268352.46666667,
            "unit": "ns",
            "range": "± 3382977.1032851874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48106.4,
            "unit": "ns",
            "range": "± 2694.429942419498"
          }
        ]
      }
    ]
  }
}