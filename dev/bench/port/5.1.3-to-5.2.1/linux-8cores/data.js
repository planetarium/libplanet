window.BENCHMARK_DATA = {
  "lastUpdate": 1722329332082,
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
          "id": "210708fbd38c9f1ba564240becc80e38a099d224",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-5.2.1",
          "timestamp": "2024-07-30T17:37:26+09:00",
          "tree_id": "2da14b4d3ce21e018af2e714e4d069176d30fb52",
          "url": "https://github.com/planetarium/libplanet/commit/210708fbd38c9f1ba564240becc80e38a099d224"
        },
        "date": 1722329306291,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1078531.536585366,
            "unit": "ns",
            "range": "± 53881.79347290391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2060255.6666666667,
            "unit": "ns",
            "range": "± 45655.956491276505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1833996.9014084507,
            "unit": "ns",
            "range": "± 88846.18821587194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8619139.8,
            "unit": "ns",
            "range": "± 159244.1586182318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201214.1923076923,
            "unit": "ns",
            "range": "± 8277.964197579635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200372.44366197183,
            "unit": "ns",
            "range": "± 9540.308151488194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167132.58333333334,
            "unit": "ns",
            "range": "± 1572.9838731377747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3044863.7333333334,
            "unit": "ns",
            "range": "± 33423.805572133904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2701733.4285714286,
            "unit": "ns",
            "range": "± 32961.08199415296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12687.955056179775,
            "unit": "ns",
            "range": "± 712.496840664644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60689.1914893617,
            "unit": "ns",
            "range": "± 3691.3555026315894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50305.166666666664,
            "unit": "ns",
            "range": "± 597.1961507111733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58093.87755102041,
            "unit": "ns",
            "range": "± 12949.05824722425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2828.1979166666665,
            "unit": "ns",
            "range": "± 406.1103718213525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14888.322580645161,
            "unit": "ns",
            "range": "± 1939.3027330622813"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32515.76923076923,
            "unit": "ns",
            "range": "± 1444.410918194473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10151763.923076924,
            "unit": "ns",
            "range": "± 72601.22180154355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27202801.966666665,
            "unit": "ns",
            "range": "± 108029.27267634895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69582322.34615384,
            "unit": "ns",
            "range": "± 192678.2295896651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138204620.35714287,
            "unit": "ns",
            "range": "± 374263.4017185484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282855059.78571427,
            "unit": "ns",
            "range": "± 1203526.8253018952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3752042.1902901786,
            "unit": "ns",
            "range": "± 7524.6335726325815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212642.8077566964,
            "unit": "ns",
            "range": "± 1126.9901687927288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 787272.3529296875,
            "unit": "ns",
            "range": "± 2397.2991470752872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950129.9755208334,
            "unit": "ns",
            "range": "± 2408.8270099578854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627166.5004185268,
            "unit": "ns",
            "range": "± 585.6072257783859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579409.925920759,
            "unit": "ns",
            "range": "± 666.9600615528574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2413714.5714285714,
            "unit": "ns",
            "range": "± 26001.3064219541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2526340.3125,
            "unit": "ns",
            "range": "± 49209.42154062066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3050001.588235294,
            "unit": "ns",
            "range": "± 60242.591874498175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2571793.714285714,
            "unit": "ns",
            "range": "± 42449.79603000479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3243167.9615384615,
            "unit": "ns",
            "range": "± 35146.1675900692"
          }
        ]
      }
    ]
  }
}