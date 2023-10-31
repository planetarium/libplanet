window.BENCHMARK_DATA = {
  "lastUpdate": 1698719345947,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "01ff9fffa47ffe6a16b043f6cc4a11a213eb0774",
          "message": "Use longer timeout for KMS test",
          "timestamp": "2023-10-31T11:11:19+09:00",
          "tree_id": "60c8942383c478ab7c838a2edc9fc55c303cea77",
          "url": "https://github.com/planetarium/libplanet/commit/01ff9fffa47ffe6a16b043f6cc4a11a213eb0774"
        },
        "date": 1698719290385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7794413.560975609,
            "unit": "ns",
            "range": "± 251518.66748812588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21902153.10526316,
            "unit": "ns",
            "range": "± 3225353.748332215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52730981.63829787,
            "unit": "ns",
            "range": "± 4637808.766995692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102361709.17582418,
            "unit": "ns",
            "range": "± 5682039.5628737565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208609858.63157895,
            "unit": "ns",
            "range": "± 4603558.393891189"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52871.34444444445,
            "unit": "ns",
            "range": "± 10843.746035752134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303168.8232323232,
            "unit": "ns",
            "range": "± 69605.43006436691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283869.9791666667,
            "unit": "ns",
            "range": "± 71873.36690406174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223071.52272727274,
            "unit": "ns",
            "range": "± 17417.91382323097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3862907.8103448274,
            "unit": "ns",
            "range": "± 110127.19515149726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3584778.285714286,
            "unit": "ns",
            "range": "± 63075.15655174764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15567.358695652174,
            "unit": "ns",
            "range": "± 3343.5870176576577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68177.35714285714,
            "unit": "ns",
            "range": "± 11575.075696965276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75760.84042553192,
            "unit": "ns",
            "range": "± 20977.31086085051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59329.631868131866,
            "unit": "ns",
            "range": "± 8701.80053425572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3709.8655913978496,
            "unit": "ns",
            "range": "± 934.4579547726917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13655.583333333334,
            "unit": "ns",
            "range": "± 2362.3224819596353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1205528.1720430108,
            "unit": "ns",
            "range": "± 128875.8658869932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2296551.078313253,
            "unit": "ns",
            "range": "± 122386.6714842876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1765280.7078651686,
            "unit": "ns",
            "range": "± 140473.91582491895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9398169.811827958,
            "unit": "ns",
            "range": "± 1978054.453933295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3027693.6666666665,
            "unit": "ns",
            "range": "± 60573.54454467629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3505852.8723404254,
            "unit": "ns",
            "range": "± 466014.29867518594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4724454.659574468,
            "unit": "ns",
            "range": "± 946267.9137657399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4455891.354166667,
            "unit": "ns",
            "range": "± 857637.9309084737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14683583.255319148,
            "unit": "ns",
            "range": "± 3182209.7106135576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4415167.204492187,
            "unit": "ns",
            "range": "± 154110.44986184032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1347130.4860677083,
            "unit": "ns",
            "range": "± 16420.38596830285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 886375.4108723958,
            "unit": "ns",
            "range": "± 10431.358834011811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969850.2557444852,
            "unit": "ns",
            "range": "± 36515.79334229728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 652952.3483886719,
            "unit": "ns",
            "range": "± 14558.453766847822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581544.9204477164,
            "unit": "ns",
            "range": "± 6024.437574289612"
          }
        ]
      }
    ]
  }
}