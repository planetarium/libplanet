window.BENCHMARK_DATA = {
  "lastUpdate": 1696598148304,
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
        "date": 1696598069868,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1679370,
            "unit": "ns",
            "range": "± 137668.97752848087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3249586.3157894737,
            "unit": "ns",
            "range": "± 211153.81436618327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2567938.144329897,
            "unit": "ns",
            "range": "± 206918.49816780668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11359386.666666666,
            "unit": "ns",
            "range": "± 763821.4479278561"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69006.3829787234,
            "unit": "ns",
            "range": "± 9118.429978406646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9832538.461538462,
            "unit": "ns",
            "range": "± 507487.92045780696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26207286.046511628,
            "unit": "ns",
            "range": "± 961740.3445196914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65262426.47058824,
            "unit": "ns",
            "range": "± 1948851.7855407442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130390986.66666667,
            "unit": "ns",
            "range": "± 1551453.9046910007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265845140,
            "unit": "ns",
            "range": "± 3675661.290901077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5739920.833333333,
            "unit": "ns",
            "range": "± 133616.55131795802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1785746.0677083333,
            "unit": "ns",
            "range": "± 20835.064523405552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1265085.7552083333,
            "unit": "ns",
            "range": "± 8032.809184751398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3251465.652901786,
            "unit": "ns",
            "range": "± 25065.999681502024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1051968.7622070312,
            "unit": "ns",
            "range": "± 20537.56012015618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 968605.859375,
            "unit": "ns",
            "range": "± 19531.849065490995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4152904.6511627906,
            "unit": "ns",
            "range": "± 151697.85909511737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4261366.666666667,
            "unit": "ns",
            "range": "± 147317.41479456658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5289492.5,
            "unit": "ns",
            "range": "± 187464.14958120693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5179469.696969697,
            "unit": "ns",
            "range": "± 238158.42882720995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13957612.5,
            "unit": "ns",
            "range": "± 872945.7483126465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326842.22222222225,
            "unit": "ns",
            "range": "± 23472.49036627785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317709.8901098901,
            "unit": "ns",
            "range": "± 22872.95858502425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294193.8775510204,
            "unit": "ns",
            "range": "± 28110.87332763932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4992816.666666667,
            "unit": "ns",
            "range": "± 148980.5682384239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4598150,
            "unit": "ns",
            "range": "± 156811.5959411855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32522.916666666668,
            "unit": "ns",
            "range": "± 4649.809937636199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116773.91304347826,
            "unit": "ns",
            "range": "± 13246.147020679424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130787.01298701299,
            "unit": "ns",
            "range": "± 6701.793763207426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127546.73913043478,
            "unit": "ns",
            "range": "± 11612.464420148775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10834.736842105263,
            "unit": "ns",
            "range": "± 1130.7847417341893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29637.63440860215,
            "unit": "ns",
            "range": "± 2421.4581475925434"
          }
        ]
      }
    ]
  }
}