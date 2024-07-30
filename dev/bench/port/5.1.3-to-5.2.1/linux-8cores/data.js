window.BENCHMARK_DATA = {
  "lastUpdate": 1722329506407,
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
      },
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
          "id": "cd73440f685a906e6fb1cd683e65323381231f66",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-5.2.1",
          "timestamp": "2024-07-30T17:38:54+09:00",
          "tree_id": "f1286f61ec1d31e86157086eb19a9aa7d15be065",
          "url": "https://github.com/planetarium/libplanet/commit/cd73440f685a906e6fb1cd683e65323381231f66"
        },
        "date": 1722329398635,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1147000.7023809524,
            "unit": "ns",
            "range": "± 61619.23284263749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2114613.1078431373,
            "unit": "ns",
            "range": "± 86278.35285842641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1848384.5211267606,
            "unit": "ns",
            "range": "± 86257.8545923888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8720080.888888888,
            "unit": "ns",
            "range": "± 237175.94170610872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224062.48387096773,
            "unit": "ns",
            "range": "± 12707.723168294926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212591.95945945947,
            "unit": "ns",
            "range": "± 10239.730314619725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187570.64285714287,
            "unit": "ns",
            "range": "± 12547.787643541895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3216088.2666666666,
            "unit": "ns",
            "range": "± 37312.352021179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2982211.5384615385,
            "unit": "ns",
            "range": "± 27518.410302969252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19665.98969072165,
            "unit": "ns",
            "range": "± 4498.16168815765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99987.78571428571,
            "unit": "ns",
            "range": "± 4241.6728248707195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58758.354166666664,
            "unit": "ns",
            "range": "± 5600.666334377999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72388.71428571429,
            "unit": "ns",
            "range": "± 11010.120725575747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3780.516129032258,
            "unit": "ns",
            "range": "± 571.299464853044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15665.375,
            "unit": "ns",
            "range": "± 1737.558142912058"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45278.87368421053,
            "unit": "ns",
            "range": "± 7428.192877859534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11218324.733333332,
            "unit": "ns",
            "range": "± 71055.34132679025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27556960.64285714,
            "unit": "ns",
            "range": "± 93479.96094647743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70355238.96153846,
            "unit": "ns",
            "range": "± 225762.0991256118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141094079.35714287,
            "unit": "ns",
            "range": "± 560206.1971762796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292642196.8076923,
            "unit": "ns",
            "range": "± 514252.85769849067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733847.208233173,
            "unit": "ns",
            "range": "± 15576.643146190936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207587.2751302083,
            "unit": "ns",
            "range": "± 2022.5104281592116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772329.8474609375,
            "unit": "ns",
            "range": "± 1343.9909480343756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959409.3734375,
            "unit": "ns",
            "range": "± 7874.708139436838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621953.4319411058,
            "unit": "ns",
            "range": "± 615.0103931598607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564288.098828125,
            "unit": "ns",
            "range": "± 267.36200717120255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2543190.533333333,
            "unit": "ns",
            "range": "± 29395.600788132197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2675485.8,
            "unit": "ns",
            "range": "± 40348.241369358344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3170979,
            "unit": "ns",
            "range": "± 46758.39240960674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2724377.6333333333,
            "unit": "ns",
            "range": "± 47973.4642229679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3367959.0714285714,
            "unit": "ns",
            "range": "± 55359.99088166094"
          }
        ]
      },
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
          "id": "2ea68031fbd29cdfeb30980dbcd0332990a3ea74",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-5.2.1",
          "timestamp": "2024-07-30T17:41:36+09:00",
          "tree_id": "f1286f61ec1d31e86157086eb19a9aa7d15be065",
          "url": "https://github.com/planetarium/libplanet/commit/2ea68031fbd29cdfeb30980dbcd0332990a3ea74"
        },
        "date": 1722329480347,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1077214.2840909092,
            "unit": "ns",
            "range": "± 82072.3338394912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2068071.5,
            "unit": "ns",
            "range": "± 60177.93314532211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1757781.1875,
            "unit": "ns",
            "range": "± 76927.80695053158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8618483.131578946,
            "unit": "ns",
            "range": "± 277143.3826673109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226287.15,
            "unit": "ns",
            "range": "± 19387.093323206733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210821.05555555556,
            "unit": "ns",
            "range": "± 19861.354891521984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168411.43859649124,
            "unit": "ns",
            "range": "± 7302.599546975289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3173651.933333333,
            "unit": "ns",
            "range": "± 45065.51539301527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2801873.923076923,
            "unit": "ns",
            "range": "± 25586.453243404467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18341.67,
            "unit": "ns",
            "range": "± 5140.476861609968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76785.6,
            "unit": "ns",
            "range": "± 18204.10145982482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55797.298969072166,
            "unit": "ns",
            "range": "± 5628.013868817586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65850.54210526316,
            "unit": "ns",
            "range": "± 10798.418241059502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3545.5052631578947,
            "unit": "ns",
            "range": "± 636.3329429895223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16303.23,
            "unit": "ns",
            "range": "± 4107.611330877784"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32368.905405405407,
            "unit": "ns",
            "range": "± 1102.1482169799995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10850889.714285715,
            "unit": "ns",
            "range": "± 103975.73088146659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28000662.466666665,
            "unit": "ns",
            "range": "± 162941.03445456523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70268408.28571428,
            "unit": "ns",
            "range": "± 703398.8677246884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140173543.2142857,
            "unit": "ns",
            "range": "± 689441.9444272056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288089030.14285713,
            "unit": "ns",
            "range": "± 1143460.165557147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3816870.6775841345,
            "unit": "ns",
            "range": "± 11484.688125388164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195363.57265625,
            "unit": "ns",
            "range": "± 2110.5690190142163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768876.7986328125,
            "unit": "ns",
            "range": "± 1680.813834255031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934770.3233816964,
            "unit": "ns",
            "range": "± 3216.7967677556126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614327.5988932292,
            "unit": "ns",
            "range": "± 819.1942113747683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563604.9205729166,
            "unit": "ns",
            "range": "± 916.4055275846524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2541282.8571428573,
            "unit": "ns",
            "range": "± 40763.9092672336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2621621.44,
            "unit": "ns",
            "range": "± 68348.69614098965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3247213.487179487,
            "unit": "ns",
            "range": "± 106891.98193229605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2693777.4615384615,
            "unit": "ns",
            "range": "± 44166.63570806849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3317786,
            "unit": "ns",
            "range": "± 57206.68067255282"
          }
        ]
      }
    ]
  }
}