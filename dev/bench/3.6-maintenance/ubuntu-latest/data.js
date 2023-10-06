window.BENCHMARK_DATA = {
  "lastUpdate": 1696597815415,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b13ef3155389100c218a045fbdc3051e23e3c669",
          "message": "Merge pull request #3451 from greymistcube/release/3.6.0\n\n🚀 Release 3.6.0",
          "timestamp": "2023-10-06T18:26:22+09:00",
          "tree_id": "45b24eea1bbbdcc0b75e430f611660d011258ba1",
          "url": "https://github.com/planetarium/libplanet/commit/b13ef3155389100c218a045fbdc3051e23e3c669"
        },
        "date": 1696597786720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50058.58064516129,
            "unit": "ns",
            "range": "± 3605.203559116294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7920333.866666666,
            "unit": "ns",
            "range": "± 78623.85169351479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22247895.92857143,
            "unit": "ns",
            "range": "± 340134.6262895743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55526156.93333333,
            "unit": "ns",
            "range": "± 739373.6199287173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111210094.66666667,
            "unit": "ns",
            "range": "± 1494073.6039903823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228425274.06666666,
            "unit": "ns",
            "range": "± 3315840.6506604124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280342.0909090909,
            "unit": "ns",
            "range": "± 8878.797558522623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270065.28301886795,
            "unit": "ns",
            "range": "± 11264.79670576465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240450.62686567163,
            "unit": "ns",
            "range": "± 11386.514419759389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4465295.533333333,
            "unit": "ns",
            "range": "± 50056.468164701844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4094858.466666667,
            "unit": "ns",
            "range": "± 70584.35485175234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20283.16304347826,
            "unit": "ns",
            "range": "± 1351.612673541702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87101.8125,
            "unit": "ns",
            "range": "± 6235.509309063779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70277,
            "unit": "ns",
            "range": "± 910.669084694425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77365.79591836735,
            "unit": "ns",
            "range": "± 8424.585093897093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5601.208333333333,
            "unit": "ns",
            "range": "± 615.6851197378954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19876.389473684212,
            "unit": "ns",
            "range": "± 1628.0522842690125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1438813.268041237,
            "unit": "ns",
            "range": "± 92591.47385980835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773530.727272727,
            "unit": "ns",
            "range": "± 83794.57920536713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2121822.21875,
            "unit": "ns",
            "range": "± 98109.15894180752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8925976.105263159,
            "unit": "ns",
            "range": "± 196698.02497367343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5010745.815625,
            "unit": "ns",
            "range": "± 42878.53541526369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1588285.7861328125,
            "unit": "ns",
            "range": "± 2554.176286478477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1083754.0457589286,
            "unit": "ns",
            "range": "± 1571.6365694511271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2708373.7625,
            "unit": "ns",
            "range": "± 9651.860455924103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842623.7315150669,
            "unit": "ns",
            "range": "± 2192.4731817750035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753436.8973911831,
            "unit": "ns",
            "range": "± 1175.5553358859681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3522392.5,
            "unit": "ns",
            "range": "± 82477.92975540848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3562896.8666666667,
            "unit": "ns",
            "range": "± 135060.6506884626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4513051.413793104,
            "unit": "ns",
            "range": "± 129434.886744405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4504983.612903226,
            "unit": "ns",
            "range": "± 132468.2487546047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10834653.823529411,
            "unit": "ns",
            "range": "± 237736.51197293785"
          }
        ]
      }
    ]
  }
}