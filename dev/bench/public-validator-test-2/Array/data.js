window.BENCHMARK_DATA = {
  "lastUpdate": 1734416048759,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de309156e1253938e2fa83de1eb5e8965feebb3e",
          "message": "Merge pull request #4009 from planetarium/release/5.4.2\n\nRelease/5.4.2",
          "timestamp": "2024-12-13T13:43:30+09:00",
          "tree_id": "81a18e9d75f2b96395fd766d8ef3fc5cc02ee6ef",
          "url": "https://github.com/planetarium/libplanet/commit/de309156e1253938e2fa83de1eb5e8965feebb3e"
        },
        "date": 1734416035797,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10633631.846153846,
            "unit": "ns",
            "range": "± 115348.13037557664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26220907.35714286,
            "unit": "ns",
            "range": "± 141164.09778781308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66725097.53333333,
            "unit": "ns",
            "range": "± 134229.98996438202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134088979.21428572,
            "unit": "ns",
            "range": "± 221052.2663911893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269848821,
            "unit": "ns",
            "range": "± 322233.9485772203"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12770.36,
            "unit": "ns",
            "range": "± 341.0431155538353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54646.34246575343,
            "unit": "ns",
            "range": "± 2349.5586359710323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105359.0081967213,
            "unit": "ns",
            "range": "± 4719.107647366363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92930.27272727272,
            "unit": "ns",
            "range": "± 2880.045217448062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2839478.0404040404,
            "unit": "ns",
            "range": "± 168975.7357478551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2724286.3780487804,
            "unit": "ns",
            "range": "± 144005.43897449863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5005.648351648351,
            "unit": "ns",
            "range": "± 523.9760251857665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27556.55681818182,
            "unit": "ns",
            "range": "± 2054.8460991002366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23234.612903225807,
            "unit": "ns",
            "range": "± 1403.3535380919432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29762.817204301075,
            "unit": "ns",
            "range": "± 4296.439332006661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1413.9479166666667,
            "unit": "ns",
            "range": "± 281.09475344920025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4680.340909090909,
            "unit": "ns",
            "range": "± 444.12965090495493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 669482.0056179776,
            "unit": "ns",
            "range": "± 40900.32656880171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1277193,
            "unit": "ns",
            "range": "± 48587.443775489606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1044606.0549450549,
            "unit": "ns",
            "range": "± 58042.20087992733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8726687.03,
            "unit": "ns",
            "range": "± 1270349.5247200963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2133943,
            "unit": "ns",
            "range": "± 87595.56028813508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2248690.936170213,
            "unit": "ns",
            "range": "± 77323.79868573122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2554470.0454545454,
            "unit": "ns",
            "range": "± 61076.14761643454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2274529.8125,
            "unit": "ns",
            "range": "± 89115.6090964073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2859539.159090909,
            "unit": "ns",
            "range": "± 104550.54290249603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3023957.646943934,
            "unit": "ns",
            "range": "± 58578.686805566416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919954.7255208333,
            "unit": "ns",
            "range": "± 6560.636865723875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 606868.4014423077,
            "unit": "ns",
            "range": "± 1855.223753100559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1633262.8532552083,
            "unit": "ns",
            "range": "± 5844.875381073359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460357.1354282924,
            "unit": "ns",
            "range": "± 575.702582665412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419918.8594447545,
            "unit": "ns",
            "range": "± 1012.2501732676423"
          }
        ]
      }
    ]
  }
}