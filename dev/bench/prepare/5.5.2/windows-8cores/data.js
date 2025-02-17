window.BENCHMARK_DATA = {
  "lastUpdate": 1739774921570,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "lime_bell@naver.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "lime_bell@naver.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "cb0ff06e16a83e5306c74d8ae03d2ab3a6894db6",
          "message": "prepare: 5.5.2",
          "timestamp": "2025-02-17T15:38:38+09:00",
          "tree_id": "2e2d668e1ee286aa02c9f861aa68bbb6be813dd4",
          "url": "https://github.com/planetarium/libplanet/commit/cb0ff06e16a83e5306c74d8ae03d2ab3a6894db6"
        },
        "date": 1739774854748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 931710.3092783506,
            "unit": "ns",
            "range": "± 117987.79817257242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1660960.975609756,
            "unit": "ns",
            "range": "± 87061.27685390042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1387402.1505376345,
            "unit": "ns",
            "range": "± 114043.93506784877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6369169.3877551025,
            "unit": "ns",
            "range": "± 253606.34702566237"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30005.102040816328,
            "unit": "ns",
            "range": "± 4277.714305584465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9151046.666666666,
            "unit": "ns",
            "range": "± 129114.75442227279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22711669.230769232,
            "unit": "ns",
            "range": "± 270204.1801570786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56302100,
            "unit": "ns",
            "range": "± 1304200.9308384962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112861920,
            "unit": "ns",
            "range": "± 2053547.108993885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224261361.53846154,
            "unit": "ns",
            "range": "± 2217111.543404489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3152153.2942708335,
            "unit": "ns",
            "range": "± 13753.85597713997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1007689.7395833334,
            "unit": "ns",
            "range": "± 9894.222825503308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 693167.0549665178,
            "unit": "ns",
            "range": "± 5100.05439030327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1851401.4090401786,
            "unit": "ns",
            "range": "± 10382.54318586372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 577236.1197916666,
            "unit": "ns",
            "range": "± 4559.3070039603335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 513984.7981770833,
            "unit": "ns",
            "range": "± 4575.7270327127735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2012391.975308642,
            "unit": "ns",
            "range": "± 105494.06602292557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2101081.25,
            "unit": "ns",
            "range": "± 82638.09758744655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2520448.888888889,
            "unit": "ns",
            "range": "± 95890.37211652932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2149370.2702702703,
            "unit": "ns",
            "range": "± 72395.25331610287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2800688.4615384615,
            "unit": "ns",
            "range": "± 75714.94609083772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 83068.53932584269,
            "unit": "ns",
            "range": "± 5919.52845760266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 151663.04347826086,
            "unit": "ns",
            "range": "± 9347.758941524868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139241.66666666666,
            "unit": "ns",
            "range": "± 6126.527251077243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2359233.3333333335,
            "unit": "ns",
            "range": "± 85534.68250112995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2341055.263157895,
            "unit": "ns",
            "range": "± 79768.34601271705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9608.510638297872,
            "unit": "ns",
            "range": "± 1218.2006450965157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56707.86516853933,
            "unit": "ns",
            "range": "± 5545.498270897123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40838.541666666664,
            "unit": "ns",
            "range": "± 2384.8808771604536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44593.617021276594,
            "unit": "ns",
            "range": "± 7492.588574763391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2209.278350515464,
            "unit": "ns",
            "range": "± 386.5128485970215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9162.36559139785,
            "unit": "ns",
            "range": "± 1376.8200585355326"
          }
        ]
      }
    ]
  }
}