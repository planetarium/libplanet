window.BENCHMARK_DATA = {
  "lastUpdate": 1698631876142,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "5cc181748fd4b9e80fcf580c5a15cc6aa0bbf75d",
          "message": "DONT MERGE",
          "timestamp": "2023-10-30T10:51:50+09:00",
          "tree_id": "f230a237a3484e05deb8f4db80ecb1330c00e43d",
          "url": "https://github.com/planetarium/libplanet/commit/5cc181748fd4b9e80fcf580c5a15cc6aa0bbf75d"
        },
        "date": 1698631843646,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51305.64893617021,
            "unit": "ns",
            "range": "± 12175.28001109409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4905554.255164195,
            "unit": "ns",
            "range": "± 216242.22885099714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1563902.7150998975,
            "unit": "ns",
            "range": "± 67548.06480015087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1102809.6700962612,
            "unit": "ns",
            "range": "± 47046.561003968374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2425267.228866186,
            "unit": "ns",
            "range": "± 84775.44687657505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 776111.4389973958,
            "unit": "ns",
            "range": "± 11202.31248046976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836285.3444433594,
            "unit": "ns",
            "range": "± 65989.02253958528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7532195.010204081,
            "unit": "ns",
            "range": "± 558720.0255981357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17596519.6875,
            "unit": "ns",
            "range": "± 535072.7515013767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49527541.8556701,
            "unit": "ns",
            "range": "± 4987539.387685435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98444287.83333333,
            "unit": "ns",
            "range": "± 8203232.975820215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278744024.8787879,
            "unit": "ns",
            "range": "± 8600332.443288747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4447892.814285714,
            "unit": "ns",
            "range": "± 206083.83307392953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4603859,
            "unit": "ns",
            "range": "± 219310.5089630042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4407562.070707071,
            "unit": "ns",
            "range": "± 609859.290909483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3899853.0707070706,
            "unit": "ns",
            "range": "± 494431.08963820373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12192620.87628866,
            "unit": "ns",
            "range": "± 1640739.0450371762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321156.9693877551,
            "unit": "ns",
            "range": "± 56071.22533957616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354804.5625,
            "unit": "ns",
            "range": "± 36257.545918873366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261954.9381443299,
            "unit": "ns",
            "range": "± 48732.990989552454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5139346.373737373,
            "unit": "ns",
            "range": "± 475113.0280276297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3725254.7291666665,
            "unit": "ns",
            "range": "± 417396.6509079943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33280.555555555555,
            "unit": "ns",
            "range": "± 7459.084855535977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110586.95959595959,
            "unit": "ns",
            "range": "± 32187.987857660217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88509.58762886598,
            "unit": "ns",
            "range": "± 21222.908105468923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126653.3894736842,
            "unit": "ns",
            "range": "± 13556.871650290164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5058.585365853659,
            "unit": "ns",
            "range": "± 1002.4941728991635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32474.41237113402,
            "unit": "ns",
            "range": "± 8464.395719168539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1187514.6304347827,
            "unit": "ns",
            "range": "± 152254.25221646123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2390538.0416666665,
            "unit": "ns",
            "range": "± 211619.9604609475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1850315.8229166667,
            "unit": "ns",
            "range": "± 209062.65080008382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8944007.063829787,
            "unit": "ns",
            "range": "± 1176815.1676205946"
          }
        ]
      }
    ]
  }
}