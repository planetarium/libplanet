window.BENCHMARK_DATA = {
  "lastUpdate": 1700181754663,
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
      },
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
          "id": "e1c134eb179d05060b8275c62ab87dd03e5faf60",
          "message": "Use longer timeout for KMS test",
          "timestamp": "2023-11-17T09:23:34+09:00",
          "tree_id": "36d60f8fa4c10a68909ab13bc15530f3f97cceed",
          "url": "https://github.com/planetarium/libplanet/commit/e1c134eb179d05060b8275c62ab87dd03e5faf60"
        },
        "date": 1700181695089,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7852909.136363637,
            "unit": "ns",
            "range": "± 182866.60184499974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19011637.32142857,
            "unit": "ns",
            "range": "± 527171.5154337768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47157263.4,
            "unit": "ns",
            "range": "± 1400445.4254799362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94378617.0625,
            "unit": "ns",
            "range": "± 1846083.425449293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194702855.86,
            "unit": "ns",
            "range": "± 5191890.662048082"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49566.83870967742,
            "unit": "ns",
            "range": "± 13236.533052330653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223053.69791666666,
            "unit": "ns",
            "range": "± 20306.91518987652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216552.83333333334,
            "unit": "ns",
            "range": "± 18184.754381894316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207305.1489361702,
            "unit": "ns",
            "range": "± 20949.028664811278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3715048.5384615385,
            "unit": "ns",
            "range": "± 45541.82263153907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3483295.3076923075,
            "unit": "ns",
            "range": "± 55209.456504878784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14221.72340425532,
            "unit": "ns",
            "range": "± 2359.3116736052048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64659.833333333336,
            "unit": "ns",
            "range": "± 10825.222182008787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52283.04651162791,
            "unit": "ns",
            "range": "± 4009.087274465574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64222.34693877551,
            "unit": "ns",
            "range": "± 11666.99884651482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3925.430107526882,
            "unit": "ns",
            "range": "± 1065.8799834332588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12827.81914893617,
            "unit": "ns",
            "range": "± 2185.7341374534494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423934.9318181819,
            "unit": "ns",
            "range": "± 198787.01389746554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2755157.8604651163,
            "unit": "ns",
            "range": "± 320669.3925971351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2141735.38172043,
            "unit": "ns",
            "range": "± 225468.97622066925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10380200.346938776,
            "unit": "ns",
            "range": "± 1969864.1668376506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2899521.704918033,
            "unit": "ns",
            "range": "± 130294.15622561437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3054131.395348837,
            "unit": "ns",
            "range": "± 95127.69051051217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3621517.3513513515,
            "unit": "ns",
            "range": "± 122992.76818966413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3567975.9784946237,
            "unit": "ns",
            "range": "± 201513.9024957453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11093761.688172042,
            "unit": "ns",
            "range": "± 1120712.669814798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5555567.981702303,
            "unit": "ns",
            "range": "± 569376.1054972255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1318353.7419433594,
            "unit": "ns",
            "range": "± 24910.964559223503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 861002.6843261719,
            "unit": "ns",
            "range": "± 16304.849188214488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1983408.7268066406,
            "unit": "ns",
            "range": "± 33063.29810857038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616223.60546875,
            "unit": "ns",
            "range": "± 9953.288185827972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556045.1479817708,
            "unit": "ns",
            "range": "± 5641.546720173832"
          }
        ]
      }
    ]
  }
}