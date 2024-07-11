window.BENCHMARK_DATA = {
  "lastUpdate": 1720678362503,
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
          "id": "cf3de69ec4b049161de30270cdf1e4b69413655d",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T13:46:38+09:00",
          "tree_id": "7bf03099fdc240cac41d733e2dfddd3315502ca9",
          "url": "https://github.com/planetarium/libplanet/commit/cf3de69ec4b049161de30270cdf1e4b69413655d"
        },
        "date": 1720678350182,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10904583.533333333,
            "unit": "ns",
            "range": "± 203682.1599256571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26487506.285714287,
            "unit": "ns",
            "range": "± 289636.008602423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68128553.2,
            "unit": "ns",
            "range": "± 125430.67556861839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135484053.2857143,
            "unit": "ns",
            "range": "± 454228.38736365765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273369924.26666665,
            "unit": "ns",
            "range": "± 438899.26117463235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14231.25,
            "unit": "ns",
            "range": "± 362.830688745663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109392.76923076923,
            "unit": "ns",
            "range": "± 3403.260344384473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104714.18333333333,
            "unit": "ns",
            "range": "± 4061.3115168631984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91189.33333333333,
            "unit": "ns",
            "range": "± 1888.8200175833401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3004167.9523809524,
            "unit": "ns",
            "range": "± 159641.14346025875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2881781.9142857143,
            "unit": "ns",
            "range": "± 138505.16697647402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5157.329545454545,
            "unit": "ns",
            "range": "± 511.82665262315453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26365.68888888889,
            "unit": "ns",
            "range": "± 1600.0109051204524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22498.78787878788,
            "unit": "ns",
            "range": "± 1785.137994281419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30418.744680851065,
            "unit": "ns",
            "range": "± 4666.3321138209585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 991.1276595744681,
            "unit": "ns",
            "range": "± 173.1109398804462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4578.541176470589,
            "unit": "ns",
            "range": "± 338.68184793054246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683659.5769230769,
            "unit": "ns",
            "range": "± 34909.665456706985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1285265.02,
            "unit": "ns",
            "range": "± 48970.20195673351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1078679.4838709678,
            "unit": "ns",
            "range": "± 65934.85590826567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10907447.72,
            "unit": "ns",
            "range": "± 2082460.282494139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2205951.777777778,
            "unit": "ns",
            "range": "± 46947.11372141255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275353.4210526315,
            "unit": "ns",
            "range": "± 77142.1420827502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2586266.9166666665,
            "unit": "ns",
            "range": "± 29489.29526719926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2312291.2674418604,
            "unit": "ns",
            "range": "± 85258.09485931449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3181943.3626373624,
            "unit": "ns",
            "range": "± 275628.08882822585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3048589.168526786,
            "unit": "ns",
            "range": "± 43322.83661163817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925239.5418419471,
            "unit": "ns",
            "range": "± 4071.281420897295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618008.8053385416,
            "unit": "ns",
            "range": "± 5216.889322153228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1639350.5099051339,
            "unit": "ns",
            "range": "± 8777.489604599792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 473779.10423177085,
            "unit": "ns",
            "range": "± 723.5762486210066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421313.9485677083,
            "unit": "ns",
            "range": "± 727.9216962043705"
          }
        ]
      }
    ]
  }
}