window.BENCHMARK_DATA = {
  "lastUpdate": 1721095879765,
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
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "3406e0388638865dc65d0e49f17ff8048e89dd10",
          "message": "temp: fix build error due to rebase",
          "timestamp": "2024-07-16T11:02:30+09:00",
          "tree_id": "b8b3773f9ae97678a42355348a63c5c88403d520",
          "url": "https://github.com/planetarium/libplanet/commit/3406e0388638865dc65d0e49f17ff8048e89dd10"
        },
        "date": 1721095854431,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203335.24285714285,
            "unit": "ns",
            "range": "± 9535.631244824175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190475.54545454544,
            "unit": "ns",
            "range": "± 6940.733392826945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165656.38888888888,
            "unit": "ns",
            "range": "± 3515.460879146639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3054395.066666667,
            "unit": "ns",
            "range": "± 55528.303155709524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2878618.1666666665,
            "unit": "ns",
            "range": "± 59206.78929992643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12780.306818181818,
            "unit": "ns",
            "range": "± 779.3109667786562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61021.7962962963,
            "unit": "ns",
            "range": "± 3141.0906403845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51037.083333333336,
            "unit": "ns",
            "range": "± 567.5296481375677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59077.31443298969,
            "unit": "ns",
            "range": "± 9123.256753952477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2909.814432989691,
            "unit": "ns",
            "range": "± 365.63749494025575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12271.605263157895,
            "unit": "ns",
            "range": "± 1033.284429480115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022399.9269662921,
            "unit": "ns",
            "range": "± 56956.49047755815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1943501.6578947369,
            "unit": "ns",
            "range": "± 60017.6113714229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1755823.4494382022,
            "unit": "ns",
            "range": "± 97270.0101403552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8478114.884615384,
            "unit": "ns",
            "range": "± 215184.37528060944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3752633.9773995536,
            "unit": "ns",
            "range": "± 10180.200531762008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226292.542689732,
            "unit": "ns",
            "range": "± 1748.3680942725073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777369.1399739584,
            "unit": "ns",
            "range": "± 733.2573737014527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961470.5571986607,
            "unit": "ns",
            "range": "± 1691.9518862275174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619972.6164713542,
            "unit": "ns",
            "range": "± 385.5078920400601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569166.3229631697,
            "unit": "ns",
            "range": "± 714.4914491838032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2476071.6,
            "unit": "ns",
            "range": "± 36939.09382406202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2490180.875,
            "unit": "ns",
            "range": "± 47644.506193089386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3007889.5833333335,
            "unit": "ns",
            "range": "± 20772.539414325274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2614261.5185185187,
            "unit": "ns",
            "range": "± 73005.24237465647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3307870.6666666665,
            "unit": "ns",
            "range": "± 51311.807505912424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32535.2,
            "unit": "ns",
            "range": "± 309.5827145414568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10345169.466666667,
            "unit": "ns",
            "range": "± 110538.88424691277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26951111.5,
            "unit": "ns",
            "range": "± 135079.2234526518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69752895.43333334,
            "unit": "ns",
            "range": "± 430856.6711898296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140129736.56666666,
            "unit": "ns",
            "range": "± 732401.5136418847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288195664.93333334,
            "unit": "ns",
            "range": "± 2672314.144741527"
          }
        ]
      }
    ]
  }
}