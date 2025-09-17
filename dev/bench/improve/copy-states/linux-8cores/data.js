window.BENCHMARK_DATA = {
  "lastUpdate": 1758097533940,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "06028744d9f9f246a52652881c9ce548d352e596",
          "message": "prepare: 5.5.4",
          "timestamp": "2025-09-17T17:16:56+09:00",
          "tree_id": "b1baf97d4dca571c1bf696e880dac1729f6e7822",
          "url": "https://github.com/planetarium/libplanet/commit/06028744d9f9f246a52652881c9ce548d352e596"
        },
        "date": 1758097506968,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012669.3111111111,
            "unit": "ns",
            "range": "± 60803.549814438906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2005535.3333333333,
            "unit": "ns",
            "range": "± 89426.59783700017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1604198.7272727273,
            "unit": "ns",
            "range": "± 81386.1339201225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7991585.897435897,
            "unit": "ns",
            "range": "± 245884.9023707717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110410.13402061856,
            "unit": "ns",
            "range": "± 11315.701414985348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198215.0909090909,
            "unit": "ns",
            "range": "± 15674.100319258576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167627.38235294117,
            "unit": "ns",
            "range": "± 6765.785617789138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2955965.8,
            "unit": "ns",
            "range": "± 48413.389883673415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2960724,
            "unit": "ns",
            "range": "± 37515.24694421875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16335.76923076923,
            "unit": "ns",
            "range": "± 1303.5194673304277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59815.734042553195,
            "unit": "ns",
            "range": "± 4505.760669196264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50364.72222222222,
            "unit": "ns",
            "range": "± 1286.0353606017018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59785.86842105263,
            "unit": "ns",
            "range": "± 9255.552727902972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2649.6082474226805,
            "unit": "ns",
            "range": "± 358.03990573389746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10936.989361702128,
            "unit": "ns",
            "range": "± 1236.369142206157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3930039.887276786,
            "unit": "ns",
            "range": "± 12448.518149553667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1246591.4614955357,
            "unit": "ns",
            "range": "± 3332.935487962405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783449.3295898438,
            "unit": "ns",
            "range": "± 1836.633370730162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2014351.6424278845,
            "unit": "ns",
            "range": "± 2676.8592876642633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 637380.5059291294,
            "unit": "ns",
            "range": "± 1127.6310884590848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583275.8423549107,
            "unit": "ns",
            "range": "± 1990.3488688159368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11696116.833333334,
            "unit": "ns",
            "range": "± 178747.40523577904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29046815,
            "unit": "ns",
            "range": "± 601674.5424703801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69758669.14285715,
            "unit": "ns",
            "range": "± 527493.0513928934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140915062.7142857,
            "unit": "ns",
            "range": "± 439268.04338693817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283469577.8333333,
            "unit": "ns",
            "range": "± 1267208.506083502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31530.69230769231,
            "unit": "ns",
            "range": "± 380.70053511375244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2466600.277777778,
            "unit": "ns",
            "range": "± 51812.907012017255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2510169.214285714,
            "unit": "ns",
            "range": "± 32436.29778072369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3036955.947368421,
            "unit": "ns",
            "range": "± 67495.52407750514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2615956.714285714,
            "unit": "ns",
            "range": "± 31305.17835556326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3324969.9411764704,
            "unit": "ns",
            "range": "± 64101.09058595511"
          }
        ]
      }
    ]
  }
}