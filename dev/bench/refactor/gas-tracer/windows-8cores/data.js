window.BENCHMARK_DATA = {
  "lastUpdate": 1729838602301,
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
          "id": "a50194312c8ae642100951cc0400ea684485dfb4",
          "message": "refactor: Refactor GasTracer",
          "timestamp": "2024-10-25T15:01:52+09:00",
          "tree_id": "c0767e988107193ca2cff5208a057ccbec773e0f",
          "url": "https://github.com/planetarium/libplanet/commit/a50194312c8ae642100951cc0400ea684485dfb4"
        },
        "date": 1729838300255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 954467.3913043478,
            "unit": "ns",
            "range": "± 89079.4029161015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1753709.2307692308,
            "unit": "ns",
            "range": "± 81691.81362573327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1472943.3333333333,
            "unit": "ns",
            "range": "± 81702.90802520607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6608316.666666667,
            "unit": "ns",
            "range": "± 207136.3294638095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29030.434782608696,
            "unit": "ns",
            "range": "± 1124.844594741354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10045220,
            "unit": "ns",
            "range": "± 70994.8609810195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24308886.666666668,
            "unit": "ns",
            "range": "± 196001.5118989307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62049426.666666664,
            "unit": "ns",
            "range": "± 282455.820734264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121093946.66666667,
            "unit": "ns",
            "range": "± 660109.1098844046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243008813.33333334,
            "unit": "ns",
            "range": "± 1436248.1320970904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3380910.6770833335,
            "unit": "ns",
            "range": "± 3600.0285515838787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1038409.8106971154,
            "unit": "ns",
            "range": "± 1443.6427774923677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737748.7932477678,
            "unit": "ns",
            "range": "± 2896.6899196025483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936658.1580528845,
            "unit": "ns",
            "range": "± 5489.364211873139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617807.4609375,
            "unit": "ns",
            "range": "± 791.8439447875076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570462.8255208334,
            "unit": "ns",
            "range": "± 1980.4590894876053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2091635.294117647,
            "unit": "ns",
            "range": "± 28269.41680457148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2217342.8571428573,
            "unit": "ns",
            "range": "± 25582.07648652934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2702680,
            "unit": "ns",
            "range": "± 61663.75374817681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2240981.8181818184,
            "unit": "ns",
            "range": "± 48745.46754376868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2921033.3333333335,
            "unit": "ns",
            "range": "± 41905.80707571048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89531.50684931508,
            "unit": "ns",
            "range": "± 4396.806818347732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161221.568627451,
            "unit": "ns",
            "range": "± 6525.344856036046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144186.95652173914,
            "unit": "ns",
            "range": "± 3413.64965287435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2602856.6666666665,
            "unit": "ns",
            "range": "± 33419.5936255251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2487133.3333333335,
            "unit": "ns",
            "range": "± 50604.66149186142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10189.36170212766,
            "unit": "ns",
            "range": "± 1400.4966926217226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51024.7311827957,
            "unit": "ns",
            "range": "± 4052.2043360743387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43745,
            "unit": "ns",
            "range": "± 1531.8750032692046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50192.92929292929,
            "unit": "ns",
            "range": "± 10833.717704041761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2083.157894736842,
            "unit": "ns",
            "range": "± 321.45038053244997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9707.777777777777,
            "unit": "ns",
            "range": "± 945.150576883795"
          }
        ]
      }
    ]
  }
}