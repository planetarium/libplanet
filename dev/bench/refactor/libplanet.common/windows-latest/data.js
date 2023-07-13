window.BENCHMARK_DATA = {
  "lastUpdate": 1689237061040,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "19fdfd85ed4dfb1e1066e213fd8c9a11648ab1da",
          "message": "refactor: introduce `Libplanet.Common`",
          "timestamp": "2023-07-13T17:16:03+09:00",
          "tree_id": "96fa10e3bf972068a8a90dc531478a06c21ef329",
          "url": "https://github.com/planetarium/libplanet/commit/19fdfd85ed4dfb1e1066e213fd8c9a11648ab1da"
        },
        "date": 1689237017979,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1169817,
            "unit": "ns",
            "range": "± 159988.00463557488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2100716.6666666665,
            "unit": "ns",
            "range": "± 93489.70244511873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1516427.2727272727,
            "unit": "ns",
            "range": "± 146646.4711948933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4149501.785714286,
            "unit": "ns",
            "range": "± 162809.16602638745"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33167.10526315789,
            "unit": "ns",
            "range": "± 1680.665594966846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7031615.384615385,
            "unit": "ns",
            "range": "± 59270.14209186395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17397073.333333332,
            "unit": "ns",
            "range": "± 252607.59367238428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 42923023.07692308,
            "unit": "ns",
            "range": "± 323392.8007698124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 85254706.66666667,
            "unit": "ns",
            "range": "± 450631.5749933113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 174243828.57142857,
            "unit": "ns",
            "range": "± 858980.3861184863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4885210.336538462,
            "unit": "ns",
            "range": "± 7321.138631191285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1484914.174107143,
            "unit": "ns",
            "range": "± 3547.2000393736535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1048953.4598214286,
            "unit": "ns",
            "range": "± 2137.878858601564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633074.909855769,
            "unit": "ns",
            "range": "± 21186.776167188993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850322.3046875,
            "unit": "ns",
            "range": "± 6196.043266836807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754635.99609375,
            "unit": "ns",
            "range": "± 2143.5555708868787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2753961.290322581,
            "unit": "ns",
            "range": "± 63165.241905230105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2913861.111111111,
            "unit": "ns",
            "range": "± 62075.70462407304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3713000,
            "unit": "ns",
            "range": "± 88679.80926585585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3256491.489361702,
            "unit": "ns",
            "range": "± 124981.20350813666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5627485.714285715,
            "unit": "ns",
            "range": "± 156991.9075864073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210318.94736842104,
            "unit": "ns",
            "range": "± 13863.984373547397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188815.27777777778,
            "unit": "ns",
            "range": "± 9239.362512644615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162434.61538461538,
            "unit": "ns",
            "range": "± 2038.7276072124635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3632442.8571428573,
            "unit": "ns",
            "range": "± 34175.91851865003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3267621.4285714286,
            "unit": "ns",
            "range": "± 24377.675113842255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9066.666666666666,
            "unit": "ns",
            "range": "± 793.7961700276477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52114.705882352944,
            "unit": "ns",
            "range": "± 3013.8847689585323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41940,
            "unit": "ns",
            "range": "± 1382.825053361823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62647.47474747475,
            "unit": "ns",
            "range": "± 10980.421755350575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2733.673469387755,
            "unit": "ns",
            "range": "± 555.0042031142083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9034.04255319149,
            "unit": "ns",
            "range": "± 1195.6510074026985"
          }
        ]
      }
    ]
  }
}