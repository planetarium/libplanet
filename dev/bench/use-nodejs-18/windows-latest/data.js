window.BENCHMARK_DATA = {
  "lastUpdate": 1698631785828,
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
        "date": 1698631709393,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1296729.797979798,
            "unit": "ns",
            "range": "± 89606.96376432366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2436821.875,
            "unit": "ns",
            "range": "± 73316.77066597449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1911901.1235955057,
            "unit": "ns",
            "range": "± 100525.48014217141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8669053.409090908,
            "unit": "ns",
            "range": "± 609484.4069269493"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53602.04081632653,
            "unit": "ns",
            "range": "± 5327.176571610986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7370652.631578947,
            "unit": "ns",
            "range": "± 118735.80555362329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20764813.333333332,
            "unit": "ns",
            "range": "± 363435.83412180137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53405613.333333336,
            "unit": "ns",
            "range": "± 573050.4563507559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105598553.33333333,
            "unit": "ns",
            "range": "± 1451059.106242583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209905353.33333334,
            "unit": "ns",
            "range": "± 2152085.8273732844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4663360.677083333,
            "unit": "ns",
            "range": "± 16264.748519023919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1473812.9427083333,
            "unit": "ns",
            "range": "± 3964.183512296118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1104474.8307291667,
            "unit": "ns",
            "range": "± 2552.0695917617777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2710267.0479910714,
            "unit": "ns",
            "range": "± 6556.802062919858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846156.6861979166,
            "unit": "ns",
            "range": "± 3073.550065638635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772446.9921875,
            "unit": "ns",
            "range": "± 2278.259571248907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3248924.242424242,
            "unit": "ns",
            "range": "± 94070.79126349153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3400003.703703704,
            "unit": "ns",
            "range": "± 95203.25415204882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4129518.1818181816,
            "unit": "ns",
            "range": "± 129378.7450050854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4021164.814814815,
            "unit": "ns",
            "range": "± 169384.30476554917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10435727.586206896,
            "unit": "ns",
            "range": "± 597898.4771661441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264258.3333333333,
            "unit": "ns",
            "range": "± 4094.887795850585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243208.33333333334,
            "unit": "ns",
            "range": "± 8037.725764231627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224745.33333333334,
            "unit": "ns",
            "range": "± 11308.479159502434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4133023.8095238097,
            "unit": "ns",
            "range": "± 95767.60884955782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3801100,
            "unit": "ns",
            "range": "± 88444.67197067328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21805.434782608696,
            "unit": "ns",
            "range": "± 1822.892528791571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87152.12765957447,
            "unit": "ns",
            "range": "± 5600.052394597526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72254.73684210527,
            "unit": "ns",
            "range": "± 4369.1804679969555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83694.84536082474,
            "unit": "ns",
            "range": "± 11107.433426295545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5270.103092783505,
            "unit": "ns",
            "range": "± 653.2235688704404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19686.956521739132,
            "unit": "ns",
            "range": "± 1411.2746472451768"
          }
        ]
      }
    ]
  }
}