window.BENCHMARK_DATA = {
  "lastUpdate": 1737105411960,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "1680bad8311980bd3941de6425a6470945e1db37",
          "message": "chore: fix solo proposer",
          "timestamp": "2025-01-17T18:02:05+09:00",
          "tree_id": "58b779eacc834d3e06d37e171dab2fdd1b08994c",
          "url": "https://github.com/planetarium/libplanet/commit/1680bad8311980bd3941de6425a6470945e1db37"
        },
        "date": 1737105224616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2607940.404040404,
            "unit": "ns",
            "range": "± 812749.0374910897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2662334.6938775512,
            "unit": "ns",
            "range": "± 1740729.8119959787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3124455,
            "unit": "ns",
            "range": "± 1425197.6147488665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5941748.684210527,
            "unit": "ns",
            "range": "± 329041.134406595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21943.18181818182,
            "unit": "ns",
            "range": "± 1272.9543386042442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9679888.888888888,
            "unit": "ns",
            "range": "± 203576.6480566642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19340162.12121212,
            "unit": "ns",
            "range": "± 776328.5495528397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48330667.39130435,
            "unit": "ns",
            "range": "± 1857602.1053503174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96059640.74074075,
            "unit": "ns",
            "range": "± 2673616.360670615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192434831.25,
            "unit": "ns",
            "range": "± 3533588.6971969916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4156865.234375,
            "unit": "ns",
            "range": "± 61993.582453306764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917821.7838541666,
            "unit": "ns",
            "range": "± 8672.671663585432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722329.6354166666,
            "unit": "ns",
            "range": "± 5782.123548088976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1697100.2994791667,
            "unit": "ns",
            "range": "± 10745.546674673711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 443707.5927734375,
            "unit": "ns",
            "range": "± 1243.7153801082957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 398606.5255301339,
            "unit": "ns",
            "range": "± 1587.377228498787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2500283.3333333335,
            "unit": "ns",
            "range": "± 83311.56153688565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2476412,
            "unit": "ns",
            "range": "± 569215.0834866263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5197050,
            "unit": "ns",
            "range": "± 90007.96860147831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2393590,
            "unit": "ns",
            "range": "± 536897.8938157966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2580325.301204819,
            "unit": "ns",
            "range": "± 222912.4802792285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95671.0843373494,
            "unit": "ns",
            "range": "± 17805.381004413037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 148100,
            "unit": "ns",
            "range": "± 22489.178969711353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 121463.63636363637,
            "unit": "ns",
            "range": "± 4483.462683254463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2235975.757575758,
            "unit": "ns",
            "range": "± 69176.0075383033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2168235.4838709678,
            "unit": "ns",
            "range": "± 65471.07528462268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13586.813186813188,
            "unit": "ns",
            "range": "± 4777.219293252527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58680,
            "unit": "ns",
            "range": "± 12896.416999638754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39600,
            "unit": "ns",
            "range": "± 4367.571615690098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67656.70103092784,
            "unit": "ns",
            "range": "± 25422.99609939991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3506.25,
            "unit": "ns",
            "range": "± 996.7116988007695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15865.9793814433,
            "unit": "ns",
            "range": "± 6526.977455752684"
          }
        ]
      }
    ]
  }
}