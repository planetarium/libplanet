window.BENCHMARK_DATA = {
  "lastUpdate": 1690775316316,
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
        "date": 1690775248664,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1438821.875,
            "unit": "ns",
            "range": "± 98448.0634682973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2615043.75,
            "unit": "ns",
            "range": "± 80770.17150432893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1827275,
            "unit": "ns",
            "range": "± 117828.15373725972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4916233.823529412,
            "unit": "ns",
            "range": "± 233502.74990249707"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49005.26315789474,
            "unit": "ns",
            "range": "± 3724.255413832141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7743864.285714285,
            "unit": "ns",
            "range": "± 133062.59144386993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20969053.333333332,
            "unit": "ns",
            "range": "± 260607.48500013433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52647676.92307692,
            "unit": "ns",
            "range": "± 294566.09092541004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105681300,
            "unit": "ns",
            "range": "± 734976.8012211905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211340273.33333334,
            "unit": "ns",
            "range": "± 1153661.3742259697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4944077.447916667,
            "unit": "ns",
            "range": "± 20537.47222952467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1571567.3307291667,
            "unit": "ns",
            "range": "± 4831.223837192326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1210899.693080357,
            "unit": "ns",
            "range": "± 5583.910104422256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670102.2395833335,
            "unit": "ns",
            "range": "± 6205.181908704412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864269.0690104166,
            "unit": "ns",
            "range": "± 2679.65517391528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791483.3528645834,
            "unit": "ns",
            "range": "± 1957.2393167384437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3430620,
            "unit": "ns",
            "range": "± 61781.957606685515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3676170,
            "unit": "ns",
            "range": "± 109458.31248659827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4388691.304347826,
            "unit": "ns",
            "range": "± 108734.45934119204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4024041.935483871,
            "unit": "ns",
            "range": "± 106513.88884145125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6437072.7272727275,
            "unit": "ns",
            "range": "± 185976.82865199778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277415.55555555556,
            "unit": "ns",
            "range": "± 10448.574403750355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258974,
            "unit": "ns",
            "range": "± 10258.790357144293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258115.87301587302,
            "unit": "ns",
            "range": "± 11786.216749828483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4266192.857142857,
            "unit": "ns",
            "range": "± 30627.82707292163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3977220,
            "unit": "ns",
            "range": "± 63351.23406172019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24153.763440860213,
            "unit": "ns",
            "range": "± 2001.9316291470439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97774.22680412371,
            "unit": "ns",
            "range": "± 8310.162934003803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86553.0612244898,
            "unit": "ns",
            "range": "± 7917.346271042738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104330.85106382979,
            "unit": "ns",
            "range": "± 14848.858806994313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6714.285714285715,
            "unit": "ns",
            "range": "± 1171.922378767327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23884.94623655914,
            "unit": "ns",
            "range": "± 1967.5600778938244"
          }
        ]
      }
    ]
  }
}