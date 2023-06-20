window.BENCHMARK_DATA = {
  "lastUpdate": 1687250215249,
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
          "id": "278c0421ae8276ff3ea9dac2efaba18de37a6531",
          "message": "Merge pull request #3224 from greymistcube/release/2.1.0\n\n🚀 Release 2.1.0",
          "timestamp": "2023-06-20T17:11:44+09:00",
          "tree_id": "3c8b47900f776e7c6b705a66d3eb009253049fe9",
          "url": "https://github.com/planetarium/libplanet/commit/278c0421ae8276ff3ea9dac2efaba18de37a6531"
        },
        "date": 1687250142976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8574401.833333334,
            "unit": "ns",
            "range": "± 122089.87994493933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23998186.641791046,
            "unit": "ns",
            "range": "± 1096737.584654538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59230440.766666666,
            "unit": "ns",
            "range": "± 969082.2822330757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114856618.93333334,
            "unit": "ns",
            "range": "± 940161.0685128424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241350470.42307693,
            "unit": "ns",
            "range": "± 3168288.943651722"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78833.30526315789,
            "unit": "ns",
            "range": "± 16651.931809261383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 395856.32258064515,
            "unit": "ns",
            "range": "± 28853.85599623268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376153.6956521739,
            "unit": "ns",
            "range": "± 32976.29032949833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 340308.1235955056,
            "unit": "ns",
            "range": "± 20446.28421444181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4909840.5813953485,
            "unit": "ns",
            "range": "± 180621.5703276608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4585006.447368421,
            "unit": "ns",
            "range": "± 99050.5626286526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20138.351648351647,
            "unit": "ns",
            "range": "± 1444.9274904808383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101437.66853932584,
            "unit": "ns",
            "range": "± 8031.399313767234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101098.30526315789,
            "unit": "ns",
            "range": "± 13969.827943375869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121644.96391752578,
            "unit": "ns",
            "range": "± 17069.823137302526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6661.876288659794,
            "unit": "ns",
            "range": "± 1020.9203798710663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19542.935483870966,
            "unit": "ns",
            "range": "± 1709.8360893121203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2138936.7023809524,
            "unit": "ns",
            "range": "± 413663.5426767146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4026022.6,
            "unit": "ns",
            "range": "± 845990.606326186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3286858.1379310344,
            "unit": "ns",
            "range": "± 439212.78630107397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16536359.99484536,
            "unit": "ns",
            "range": "± 3962088.158131207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4136003.9438202246,
            "unit": "ns",
            "range": "± 502607.49903155863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4213093.357142857,
            "unit": "ns",
            "range": "± 362163.97984321875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5292116.910958904,
            "unit": "ns",
            "range": "± 261234.7148398158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5221827.764044944,
            "unit": "ns",
            "range": "± 325264.09499188024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9378294.629629629,
            "unit": "ns",
            "range": "± 385057.0613622799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7251850.756610577,
            "unit": "ns",
            "range": "± 67225.61888785775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2250477.2622070312,
            "unit": "ns",
            "range": "± 34031.83046083989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1521011.9278846155,
            "unit": "ns",
            "range": "± 16193.564464667013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3227472.5868389425,
            "unit": "ns",
            "range": "± 36796.9895603068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1031940.153515625,
            "unit": "ns",
            "range": "± 7187.999013732713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894812.4790414664,
            "unit": "ns",
            "range": "± 8552.680753543793"
          }
        ]
      }
    ]
  }
}