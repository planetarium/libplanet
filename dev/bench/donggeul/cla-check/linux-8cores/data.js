window.BENCHMARK_DATA = {
  "lastUpdate": 1792977126400,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "344717678+planetarium-donggeul[bot]@users.noreply.github.com",
            "name": "planetarium-donggeul[bot]",
            "username": "planetarium-donggeul[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6feb7fdf59ffa602b3d136425e645b30b5bb701d",
          "message": "chore: CLA 허용 목록 확인용 빈 커밋(바로 닫음)",
          "timestamp": "2026-10-26T01:02:45Z",
          "tree_id": "66993aba53577b7e908b320e28b89370b848eaf7",
          "url": "https://github.com/planetarium/libplanet/commit/6feb7fdf59ffa602b3d136425e645b30b5bb701d"
        },
        "date": 1792977107620,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15361.765306122448,
            "unit": "ns",
            "range": "± 2245.006490018954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2466633.305859375,
            "unit": "ns",
            "range": "± 54944.7451391767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 573843.2317243303,
            "unit": "ns",
            "range": "± 4149.144971013875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 461894.46023995534,
            "unit": "ns",
            "range": "± 7360.0280839040715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 973230.0671289063,
            "unit": "ns",
            "range": "± 145036.2493035227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 269033.5418526786,
            "unit": "ns",
            "range": "± 3808.1189145938583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 250553.56198120117,
            "unit": "ns",
            "range": "± 4705.792531674145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5899097.038461538,
            "unit": "ns",
            "range": "± 43370.42495106426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13130514.484848484,
            "unit": "ns",
            "range": "± 612926.4658707059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 29702563.75,
            "unit": "ns",
            "range": "± 293657.6390428146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 57734658.692307696,
            "unit": "ns",
            "range": "± 195880.50826051438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 119822866.3235294,
            "unit": "ns",
            "range": "± 2354098.719120341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112099.08,
            "unit": "ns",
            "range": "± 38793.17950184314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169076.6649484536,
            "unit": "ns",
            "range": "± 70052.47144532096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 97372.10344827586,
            "unit": "ns",
            "range": "± 9361.558326642393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1537108.8169014084,
            "unit": "ns",
            "range": "± 74979.98274326477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1423832.3717948718,
            "unit": "ns",
            "range": "± 73173.54836053574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14605.65306122449,
            "unit": "ns",
            "range": "± 5721.1107495214155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64455.84375,
            "unit": "ns",
            "range": "± 16499.56439892509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34874.58045977011,
            "unit": "ns",
            "range": "± 5936.879146915394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72893.19696969698,
            "unit": "ns",
            "range": "± 30361.74200974673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4410.823232323232,
            "unit": "ns",
            "range": "± 1312.3257033212483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21761.2,
            "unit": "ns",
            "range": "± 7742.171550878494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399289.0505050505,
            "unit": "ns",
            "range": "± 546764.7986399481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2956533.0588235296,
            "unit": "ns",
            "range": "± 56975.53224462957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2619234.5306122447,
            "unit": "ns",
            "range": "± 254881.43851855453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4720119.8977272725,
            "unit": "ns",
            "range": "± 595327.5578970518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 1685856.8409090908,
            "unit": "ns",
            "range": "± 62967.41694512761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 1795489.5,
            "unit": "ns",
            "range": "± 45985.173331556914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2123005.06,
            "unit": "ns",
            "range": "± 753570.2512933547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 1747835.867816092,
            "unit": "ns",
            "range": "± 358931.65863356856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3482268.8333333335,
            "unit": "ns",
            "range": "± 60927.47720934487"
          }
        ]
      }
    ]
  }
}