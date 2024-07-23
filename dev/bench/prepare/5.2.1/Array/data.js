window.BENCHMARK_DATA = {
  "lastUpdate": 1721724789156,
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
          "id": "73c93ef8e54624a73165cddb88c0fbcbf41a2a66",
          "message": "Prepare 5.2.1",
          "timestamp": "2024-07-23T17:28:54+09:00",
          "tree_id": "6169e6940dd919f784390a0d283f591f1994f863",
          "url": "https://github.com/planetarium/libplanet/commit/73c93ef8e54624a73165cddb88c0fbcbf41a2a66"
        },
        "date": 1721724732660,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10969669.4375,
            "unit": "ns",
            "range": "± 211968.34506500218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26597809.766666666,
            "unit": "ns",
            "range": "± 113744.64632893821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67398372.35714285,
            "unit": "ns",
            "range": "± 138813.26476496688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135693509.2142857,
            "unit": "ns",
            "range": "± 267479.265670668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273525901.85714287,
            "unit": "ns",
            "range": "± 446970.93634315644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14131.692307692309,
            "unit": "ns",
            "range": "± 221.74699720454115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110702.56521739131,
            "unit": "ns",
            "range": "± 3898.593157379118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104904.80357142857,
            "unit": "ns",
            "range": "± 4379.351981617383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90738.43333333333,
            "unit": "ns",
            "range": "± 2708.0946563619395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3071374.7435897435,
            "unit": "ns",
            "range": "± 107584.6266660804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2655550.33,
            "unit": "ns",
            "range": "± 179999.17393402226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5200.739130434783,
            "unit": "ns",
            "range": "± 458.13498825452285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27108.5,
            "unit": "ns",
            "range": "± 2113.6941142252913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23002.824175824175,
            "unit": "ns",
            "range": "± 2035.6838577594433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30084.115789473683,
            "unit": "ns",
            "range": "± 6159.881961882265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1267,
            "unit": "ns",
            "range": "± 243.77138749595312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5342.744897959184,
            "unit": "ns",
            "range": "± 1026.4808393893647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678316.5294117647,
            "unit": "ns",
            "range": "± 32426.965094929543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1267450.2368421052,
            "unit": "ns",
            "range": "± 40699.61088361318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1070384.9726027397,
            "unit": "ns",
            "range": "± 52255.78626173921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9387035.39,
            "unit": "ns",
            "range": "± 1360509.8835751154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2189726.535714286,
            "unit": "ns",
            "range": "± 89493.09218745003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2326064.2,
            "unit": "ns",
            "range": "± 30929.24808147968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2573295.5263157897,
            "unit": "ns",
            "range": "± 55366.47245136358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2362707.2586206896,
            "unit": "ns",
            "range": "± 103580.99826867593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2922325.2545454544,
            "unit": "ns",
            "range": "± 116884.72324747025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3031601.7330729165,
            "unit": "ns",
            "range": "± 43633.20436496789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922498.434765625,
            "unit": "ns",
            "range": "± 6557.692055729978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614902.5610026042,
            "unit": "ns",
            "range": "± 7214.489261715758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1684561.2463541667,
            "unit": "ns",
            "range": "± 18878.53520184601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463509.4536783854,
            "unit": "ns",
            "range": "± 855.4454067257655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420871.9176548549,
            "unit": "ns",
            "range": "± 407.99180549683894"
          }
        ]
      }
    ]
  }
}