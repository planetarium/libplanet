window.BENCHMARK_DATA = {
  "lastUpdate": 1680255045236,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jc@planetariumhq.com",
            "name": "jckim.xyz",
            "username": "jckdotim"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32e4e89cde330e21c89b2a64116d5754661f8125",
          "message": "fix: errata of planet cli",
          "timestamp": "2023-03-31T18:13:36+09:00",
          "tree_id": "a02e4b3f84fd0e863ac5acdf2b8c9cc5fe5709ed",
          "url": "https://github.com/planetarium/libplanet/commit/32e4e89cde330e21c89b2a64116d5754661f8125"
        },
        "date": 1680255022257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3745054.662921348,
            "unit": "ns",
            "range": "± 206771.53289549617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4048046.8928571427,
            "unit": "ns",
            "range": "± 215587.963790928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4775548.66,
            "unit": "ns",
            "range": "± 192302.03879044985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5117514.570707071,
            "unit": "ns",
            "range": "± 348892.27287394606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8798642.095238095,
            "unit": "ns",
            "range": "± 201878.90035982084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10211786.463414634,
            "unit": "ns",
            "range": "± 538470.4601957633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24265999.266666666,
            "unit": "ns",
            "range": "± 909589.6405167202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59618022.166666664,
            "unit": "ns",
            "range": "± 2164869.942046414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123452592.28,
            "unit": "ns",
            "range": "± 4985085.9405722935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237284742.2,
            "unit": "ns",
            "range": "± 7669549.09853155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1637826.3404255318,
            "unit": "ns",
            "range": "± 107568.55144326939"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3119984.7321428573,
            "unit": "ns",
            "range": "± 132489.24470646883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2690476.1979166665,
            "unit": "ns",
            "range": "± 158211.63778410494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7005906.838383839,
            "unit": "ns",
            "range": "± 465440.73970602965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55635.64893617021,
            "unit": "ns",
            "range": "± 5028.665236245565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6573294.588727678,
            "unit": "ns",
            "range": "± 110699.29456088983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2112543.30859375,
            "unit": "ns",
            "range": "± 40991.175807600615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1554040.1693638393,
            "unit": "ns",
            "range": "± 16464.170620534373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2990233.1723958333,
            "unit": "ns",
            "range": "± 38910.57977363922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 965451.6600585937,
            "unit": "ns",
            "range": "± 16318.657990405582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889487.7243815104,
            "unit": "ns",
            "range": "± 11609.783376142137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385450.63636363635,
            "unit": "ns",
            "range": "± 22893.828667798247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307690.597826087,
            "unit": "ns",
            "range": "± 17374.61639077504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271169.387755102,
            "unit": "ns",
            "range": "± 19852.399743739028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6426769.79032258,
            "unit": "ns",
            "range": "± 290068.05427649285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4567497.415384616,
            "unit": "ns",
            "range": "± 212705.57414357204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23772.757894736842,
            "unit": "ns",
            "range": "± 2717.4138860312605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100902.63917525773,
            "unit": "ns",
            "range": "± 8071.444888444655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97741.18556701031,
            "unit": "ns",
            "range": "± 11016.09437872786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 213641.42708333334,
            "unit": "ns",
            "range": "± 21137.131045051494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7312.083333333333,
            "unit": "ns",
            "range": "± 988.4833855501935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21367.521276595744,
            "unit": "ns",
            "range": "± 1742.1797478262654"
          }
        ]
      }
    ]
  }
}