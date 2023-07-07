window.BENCHMARK_DATA = {
  "lastUpdate": 1688710700410,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "4b03a2c3b9a0cec0213d3552868c5dacaa04105c",
          "message": "Remove unused using",
          "timestamp": "2023-07-07T15:01:46+09:00",
          "tree_id": "9bac88ba713d96d76306b1cfb700e32e50c08e00",
          "url": "https://github.com/planetarium/libplanet/commit/4b03a2c3b9a0cec0213d3552868c5dacaa04105c"
        },
        "date": 1688710660490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1188603.0303030303,
            "unit": "ns",
            "range": "± 149287.65374990704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1994764.1791044776,
            "unit": "ns",
            "range": "± 94207.26135156129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1884326.530612245,
            "unit": "ns",
            "range": "± 199331.55436914825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3944675.925925926,
            "unit": "ns",
            "range": "± 142512.98111702784"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34497.84946236559,
            "unit": "ns",
            "range": "± 2122.292571654718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5175492.307692308,
            "unit": "ns",
            "range": "± 40919.34060926979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13519550,
            "unit": "ns",
            "range": "± 73876.50558143013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33566386.666666664,
            "unit": "ns",
            "range": "± 365719.1054555915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65394653.333333336,
            "unit": "ns",
            "range": "± 660363.2072759728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134318992.85714287,
            "unit": "ns",
            "range": "± 1432272.3803395487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3643740.4296875,
            "unit": "ns",
            "range": "± 8807.092329174937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1139519.0625,
            "unit": "ns",
            "range": "± 2329.6822108652505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 816331.34765625,
            "unit": "ns",
            "range": "± 1530.08122005071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1999360.15625,
            "unit": "ns",
            "range": "± 4925.477688689144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638061.30859375,
            "unit": "ns",
            "range": "± 1414.2692549409674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 593545.7310267857,
            "unit": "ns",
            "range": "± 2693.826786434073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2381560,
            "unit": "ns",
            "range": "± 94961.54753480002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2445117.8571428573,
            "unit": "ns",
            "range": "± 64865.028262804226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2982346.153846154,
            "unit": "ns",
            "range": "± 48148.40972425111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3015658.695652174,
            "unit": "ns",
            "range": "± 103334.85499113379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4830428.571428572,
            "unit": "ns",
            "range": "± 207830.69833119254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188169.23076923078,
            "unit": "ns",
            "range": "± 8075.733772329202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188555.4347826087,
            "unit": "ns",
            "range": "± 11256.776851462058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152134.73684210525,
            "unit": "ns",
            "range": "± 10511.430135516337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2851340,
            "unit": "ns",
            "range": "± 43548.11460573564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2588391.1764705884,
            "unit": "ns",
            "range": "± 50713.7685794441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13976.288659793814,
            "unit": "ns",
            "range": "± 2468.795809527571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62638.46153846154,
            "unit": "ns",
            "range": "± 6093.580761401829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52980.434782608696,
            "unit": "ns",
            "range": "± 5982.138967131538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77871.13402061856,
            "unit": "ns",
            "range": "± 15922.265324871378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3631.958762886598,
            "unit": "ns",
            "range": "± 867.7732988988465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12021.739130434782,
            "unit": "ns",
            "range": "± 1752.4755543407368"
          }
        ]
      }
    ]
  }
}