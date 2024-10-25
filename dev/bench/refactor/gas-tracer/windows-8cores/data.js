window.BENCHMARK_DATA = {
  "lastUpdate": 1729839954976,
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
      },
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
          "id": "680df7e0f9b05df884b769d4084e1af840ce65b5",
          "message": "test: Remove test code for GasTracer",
          "timestamp": "2024-10-25T15:55:40+09:00",
          "tree_id": "5a70baf4dd1ff61cc4e5cca3cd162c6123893c7c",
          "url": "https://github.com/planetarium/libplanet/commit/680df7e0f9b05df884b769d4084e1af840ce65b5"
        },
        "date": 1729839882150,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966716.6666666666,
            "unit": "ns",
            "range": "± 96926.11691567386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1737511.111111111,
            "unit": "ns",
            "range": "± 69560.02814636628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1439951.6853932585,
            "unit": "ns",
            "range": "± 79701.84227419025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6726493.75,
            "unit": "ns",
            "range": "± 262307.0836449507"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32917.17171717172,
            "unit": "ns",
            "range": "± 3946.789974506545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9978428.57142857,
            "unit": "ns",
            "range": "± 76658.78873364678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24369838.46153846,
            "unit": "ns",
            "range": "± 156850.5899386501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60609178.571428575,
            "unit": "ns",
            "range": "± 370813.9180413632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123706906.66666667,
            "unit": "ns",
            "range": "± 826313.1397674739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247084600,
            "unit": "ns",
            "range": "± 2385968.5173351066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3285818.5396634615,
            "unit": "ns",
            "range": "± 5435.321140658017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061780.9765625,
            "unit": "ns",
            "range": "± 2619.7573116974754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732238.5286458334,
            "unit": "ns",
            "range": "± 1275.409913548038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982446.7075892857,
            "unit": "ns",
            "range": "± 4739.770272829559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624576.0044642857,
            "unit": "ns",
            "range": "± 1720.9594407453708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570834.0104166666,
            "unit": "ns",
            "range": "± 1808.073121628372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2129566.6666666665,
            "unit": "ns",
            "range": "± 49954.01218454162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249936.3636363638,
            "unit": "ns",
            "range": "± 54466.822976880205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2650615.789473684,
            "unit": "ns",
            "range": "± 58192.470524381366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2250604.1666666665,
            "unit": "ns",
            "range": "± 57453.939806381975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2848900,
            "unit": "ns",
            "range": "± 32329.656148290018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94524.21052631579,
            "unit": "ns",
            "range": "± 11455.814428076526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160566.12903225806,
            "unit": "ns",
            "range": "± 7054.470586923321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149844.44444444444,
            "unit": "ns",
            "range": "± 3153.9372633960093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2599916.6666666665,
            "unit": "ns",
            "range": "± 47206.66821339464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2506680,
            "unit": "ns",
            "range": "± 42100.071258847056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10714.432989690722,
            "unit": "ns",
            "range": "± 1711.6627935724794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50446.739130434784,
            "unit": "ns",
            "range": "± 3978.2223399584254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46688.541666666664,
            "unit": "ns",
            "range": "± 3726.233311667756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50460,
            "unit": "ns",
            "range": "± 8726.267511419246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2281.9148936170213,
            "unit": "ns",
            "range": "± 290.3326849458014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9860.869565217392,
            "unit": "ns",
            "range": "± 912.1832910255386"
          }
        ]
      }
    ]
  }
}