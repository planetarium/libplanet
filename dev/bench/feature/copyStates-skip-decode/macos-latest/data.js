window.BENCHMARK_DATA = {
  "lastUpdate": 1698984172344,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "0d95a809c7915f9fa05077be7fae2cea78d63196",
          "message": "no fingerprint check",
          "timestamp": "2023-11-03T12:43:51+09:00",
          "tree_id": "089f1c7afd2aa770e71acd3f82f294b0ce086dfc",
          "url": "https://github.com/planetarium/libplanet/commit/0d95a809c7915f9fa05077be7fae2cea78d63196"
        },
        "date": 1698984120167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8293645.78313253,
            "unit": "ns",
            "range": "± 715402.8258223551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20336775.388888888,
            "unit": "ns",
            "range": "± 342024.0781102886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49597563.32716049,
            "unit": "ns",
            "range": "± 2568715.441993404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103162568.41666667,
            "unit": "ns",
            "range": "± 4538958.074027428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206720045.9,
            "unit": "ns",
            "range": "± 10737976.628705997"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54634.46666666667,
            "unit": "ns",
            "range": "± 10717.64785369114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248204.51030927835,
            "unit": "ns",
            "range": "± 18741.718054525027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253315.0287356322,
            "unit": "ns",
            "range": "± 24424.721790726646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238161.28,
            "unit": "ns",
            "range": "± 25730.277671885375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3933470.370967742,
            "unit": "ns",
            "range": "± 119581.99530942271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3599012.3,
            "unit": "ns",
            "range": "± 81990.82815785267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15511.09793814433,
            "unit": "ns",
            "range": "± 3541.0470663697347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76758.14516129032,
            "unit": "ns",
            "range": "± 14820.776924455078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82695.11224489796,
            "unit": "ns",
            "range": "± 14938.49949725672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90412.04166666667,
            "unit": "ns",
            "range": "± 20257.51438793005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6017.188172043011,
            "unit": "ns",
            "range": "± 1405.686324544261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15296.802083333334,
            "unit": "ns",
            "range": "± 4153.3387967292865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1257199.6489361702,
            "unit": "ns",
            "range": "± 132185.02777131117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2516964.604651163,
            "unit": "ns",
            "range": "± 136848.54389255462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1911229.0232558139,
            "unit": "ns",
            "range": "± 123234.70839127184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5611417.439560439,
            "unit": "ns",
            "range": "± 764760.9138791782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3034976.7974683545,
            "unit": "ns",
            "range": "± 157613.67144336144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3146079.371794872,
            "unit": "ns",
            "range": "± 86500.25760995393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3881289.7985074627,
            "unit": "ns",
            "range": "± 179157.89228659787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3791173.294871795,
            "unit": "ns",
            "range": "± 193910.2902646706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6159628.142857143,
            "unit": "ns",
            "range": "± 263026.8771023862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5440675.50546875,
            "unit": "ns",
            "range": "± 242989.14256757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1626512.4174316407,
            "unit": "ns",
            "range": "± 84723.82141515455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092523.2587239584,
            "unit": "ns",
            "range": "± 15120.639881451078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2054466.6240234375,
            "unit": "ns",
            "range": "± 61594.538163648576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 652549.2671274039,
            "unit": "ns",
            "range": "± 6653.195268157221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 614343.5980776434,
            "unit": "ns",
            "range": "± 30548.372845649348"
          }
        ]
      }
    ]
  }
}