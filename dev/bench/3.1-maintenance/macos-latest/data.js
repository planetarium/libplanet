window.BENCHMARK_DATA = {
  "lastUpdate": 1690509116431,
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
          "id": "a987187212c0fd2aea272fe3a12bb3c27697fde3",
          "message": "Merge pull request #3336 from greymistcube/release/3.1.0\n\n🚀 Release 3.1.0",
          "timestamp": "2023-07-27T18:11:36+09:00",
          "tree_id": "9f3dede0500307e4f6c807fbded5e335a1915001",
          "url": "https://github.com/planetarium/libplanet/commit/a987187212c0fd2aea272fe3a12bb3c27697fde3"
        },
        "date": 1690509048402,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8583366.57142857,
            "unit": "ns",
            "range": "± 79560.32005457755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21438703.566666666,
            "unit": "ns",
            "range": "± 274609.94122793427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52731801.766666666,
            "unit": "ns",
            "range": "± 465600.84786273236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106380173.91666667,
            "unit": "ns",
            "range": "± 278832.62723246013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217314814.63333333,
            "unit": "ns",
            "range": "± 2623061.1640420617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60095.24731182796,
            "unit": "ns",
            "range": "± 11947.810133765928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317338.52857142856,
            "unit": "ns",
            "range": "± 15313.124445448111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310665.72164948453,
            "unit": "ns",
            "range": "± 21877.978250468295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309429.78571428574,
            "unit": "ns",
            "range": "± 18561.05865548544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4047173.1363636362,
            "unit": "ns",
            "range": "± 95879.68215551417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3766292.1739130435,
            "unit": "ns",
            "range": "± 93480.13433960285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20287.815789473683,
            "unit": "ns",
            "range": "± 2861.6205617869145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87369.58888888889,
            "unit": "ns",
            "range": "± 6337.512869289852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91203.47474747474,
            "unit": "ns",
            "range": "± 14749.234944768777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108582.6530612245,
            "unit": "ns",
            "range": "± 18948.64070545901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5715.333333333333,
            "unit": "ns",
            "range": "± 1016.3833577073968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20477.367346938776,
            "unit": "ns",
            "range": "± 4483.093368682483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1464567,
            "unit": "ns",
            "range": "± 145708.525108445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773628.593023256,
            "unit": "ns",
            "range": "± 140893.31216085437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1984382.297979798,
            "unit": "ns",
            "range": "± 179850.3590395433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5760218.02247191,
            "unit": "ns",
            "range": "± 316738.21965203446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3376967.6296296297,
            "unit": "ns",
            "range": "± 91968.0905854551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3667676.8181818184,
            "unit": "ns",
            "range": "± 116221.49661340279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4584146.934782608,
            "unit": "ns",
            "range": "± 167168.17475244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3899923.275,
            "unit": "ns",
            "range": "± 203797.9558938354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7068366.714285715,
            "unit": "ns",
            "range": "± 228174.78314474467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6198461.865885417,
            "unit": "ns",
            "range": "± 51611.34387791149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924498.4001302083,
            "unit": "ns",
            "range": "± 14364.503912236192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1284098.1307198661,
            "unit": "ns",
            "range": "± 19876.592729319054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624402.8795072115,
            "unit": "ns",
            "range": "± 41387.62516991345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 871318.515234375,
            "unit": "ns",
            "range": "± 7625.782080871088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713612.5549665178,
            "unit": "ns",
            "range": "± 1725.3144337356864"
          }
        ]
      }
    ]
  }
}