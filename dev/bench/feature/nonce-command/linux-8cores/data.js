window.BENCHMARK_DATA = {
  "lastUpdate": 1739433351327,
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "7095eb601833273e1c833fd374202908a7294020",
          "message": "docs: update CHANGES.md",
          "timestamp": "2025-02-13T16:45:27+09:00",
          "tree_id": "2d09e898a704c2bf5e1b2d4bac3330249e705cec",
          "url": "https://github.com/planetarium/libplanet/commit/7095eb601833273e1c833fd374202908a7294020"
        },
        "date": 1739433324479,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33980.47590361446,
            "unit": "ns",
            "range": "± 1829.1517558020566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3861651.7287946427,
            "unit": "ns",
            "range": "± 5796.421535511523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1284683.3082490808,
            "unit": "ns",
            "range": "± 25498.066856073066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 794368.8372628348,
            "unit": "ns",
            "range": "± 684.7614247145863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2034498.185546875,
            "unit": "ns",
            "range": "± 2196.0728271302755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 647501.6349748884,
            "unit": "ns",
            "range": "± 1496.048552633265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 603569.9243489583,
            "unit": "ns",
            "range": "± 2062.420888000084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2557945.4375,
            "unit": "ns",
            "range": "± 47917.21907340999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2639668,
            "unit": "ns",
            "range": "± 62456.448261168356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3180353.3703703703,
            "unit": "ns",
            "range": "± 87797.53025707594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2759583.222222222,
            "unit": "ns",
            "range": "± 77161.81818018413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3423171.3703703703,
            "unit": "ns",
            "range": "± 94533.46496882147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12107733.9,
            "unit": "ns",
            "range": "± 244237.4804042164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30597088.633333333,
            "unit": "ns",
            "range": "± 159343.108897062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75416441.04347827,
            "unit": "ns",
            "range": "± 1899206.3010372727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147351470.13333333,
            "unit": "ns",
            "range": "± 711032.311582439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296140315.5,
            "unit": "ns",
            "range": "± 721548.6318746249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 123155.29268292683,
            "unit": "ns",
            "range": "± 6335.35051840519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225362.92424242425,
            "unit": "ns",
            "range": "± 10544.290194312029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199829.04109589042,
            "unit": "ns",
            "range": "± 9917.3222128399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3080553.533333333,
            "unit": "ns",
            "range": "± 55848.0120363252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3022486.9,
            "unit": "ns",
            "range": "± 48204.61131142657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14669.923076923076,
            "unit": "ns",
            "range": "± 965.0194497840642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65385.73595505618,
            "unit": "ns",
            "range": "± 3910.915456137627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59596.835820895525,
            "unit": "ns",
            "range": "± 2822.5689598737663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75528.19387755102,
            "unit": "ns",
            "range": "± 12350.619449724816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4958.15625,
            "unit": "ns",
            "range": "± 658.3101625114027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14499.844444444445,
            "unit": "ns",
            "range": "± 1114.559135002817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1125910.75,
            "unit": "ns",
            "range": "± 53651.99812672404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2089920.3333333333,
            "unit": "ns",
            "range": "± 84769.9636266683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1727424.8289473683,
            "unit": "ns",
            "range": "± 83514.51093287332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8486908,
            "unit": "ns",
            "range": "± 223405.7875166174"
          }
        ]
      }
    ]
  }
}