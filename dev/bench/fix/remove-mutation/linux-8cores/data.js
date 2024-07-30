window.BENCHMARK_DATA = {
  "lastUpdate": 1722311379783,
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
          "id": "513f6a325917eadcdceb8080eb3d89459e4ab67f",
          "message": "chore: Remove explorer mutation.",
          "timestamp": "2024-07-30T12:37:13+09:00",
          "tree_id": "ef65c932dda86ecaf60ea63bfcb0eb63809425ec",
          "url": "https://github.com/planetarium/libplanet/commit/513f6a325917eadcdceb8080eb3d89459e4ab67f"
        },
        "date": 1722311354339,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014101.2631578947,
            "unit": "ns",
            "range": "± 49259.897147508935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1934042.25,
            "unit": "ns",
            "range": "± 71487.77588183811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1673595.8266666667,
            "unit": "ns",
            "range": "± 84488.36010592505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8297121.352941177,
            "unit": "ns",
            "range": "± 169821.34527494668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200561.83582089553,
            "unit": "ns",
            "range": "± 9533.952655127492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193780.5,
            "unit": "ns",
            "range": "± 8328.043906529967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165053.53846153847,
            "unit": "ns",
            "range": "± 2182.805366777068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3058375.9,
            "unit": "ns",
            "range": "± 44987.77728418496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2798335.6,
            "unit": "ns",
            "range": "± 30968.558557257482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12461.788732394367,
            "unit": "ns",
            "range": "± 622.6484886696956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59669.19565217391,
            "unit": "ns",
            "range": "± 3355.8689175932964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50203,
            "unit": "ns",
            "range": "± 296.58837918345125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52613.31958762887,
            "unit": "ns",
            "range": "± 6933.951722542481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3478.5157894736844,
            "unit": "ns",
            "range": "± 393.13312842208285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11907.1797752809,
            "unit": "ns",
            "range": "± 784.4601293796343"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32337.071428571428,
            "unit": "ns",
            "range": "± 277.45920401044526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10241603.966666667,
            "unit": "ns",
            "range": "± 55255.549771515085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27332419.42857143,
            "unit": "ns",
            "range": "± 165217.62919472388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69212271.4,
            "unit": "ns",
            "range": "± 465450.9345853761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137927989.2857143,
            "unit": "ns",
            "range": "± 631342.8407594559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288363624.53333336,
            "unit": "ns",
            "range": "± 1397929.1484477962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3713738.984675481,
            "unit": "ns",
            "range": "± 5225.9324789853235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202699.842998798,
            "unit": "ns",
            "range": "± 1288.850551449072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774347.7038411458,
            "unit": "ns",
            "range": "± 1600.8531256086965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967970.5650111607,
            "unit": "ns",
            "range": "± 1849.674645322161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608907.3109654018,
            "unit": "ns",
            "range": "± 1539.2673900902037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578548.6741768973,
            "unit": "ns",
            "range": "± 1097.3692013461236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2375243.4,
            "unit": "ns",
            "range": "± 36956.13705036978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2543742.1333333333,
            "unit": "ns",
            "range": "± 43809.05323734332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3029365.8,
            "unit": "ns",
            "range": "± 21925.90258510305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2609847.7333333334,
            "unit": "ns",
            "range": "± 77030.53630639329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3204541.7,
            "unit": "ns",
            "range": "± 39449.2702887428"
          }
        ]
      }
    ]
  }
}