window.BENCHMARK_DATA = {
  "lastUpdate": 1721197599088,
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
          "id": "ab3745fab1c78d8098cbecc1c3a3fdb39c63ac37",
          "message": "WIP",
          "timestamp": "2024-07-17T13:32:57+09:00",
          "tree_id": "020e5cff39f83f49989c56e5864a833fff8a016b",
          "url": "https://github.com/planetarium/libplanet/commit/ab3745fab1c78d8098cbecc1c3a3fdb39c63ac37"
        },
        "date": 1721191328676,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 941970,
            "unit": "ns",
            "range": "± 60516.014130906995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1712620.9302325582,
            "unit": "ns",
            "range": "± 61001.930329096715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1502911.2359550563,
            "unit": "ns",
            "range": "± 87908.26111531664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6662664,
            "unit": "ns",
            "range": "± 176715.55270169818"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30239.436619718308,
            "unit": "ns",
            "range": "± 1410.3169728052967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9406926.666666666,
            "unit": "ns",
            "range": "± 54480.133556930195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22826193.333333332,
            "unit": "ns",
            "range": "± 156141.07845455784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57537046.666666664,
            "unit": "ns",
            "range": "± 321319.06676490064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116853276.92307693,
            "unit": "ns",
            "range": "± 249995.40047050916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229278986.66666666,
            "unit": "ns",
            "range": "± 1680068.8437708507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3268181.875,
            "unit": "ns",
            "range": "± 2932.691312771812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1042309.8707932692,
            "unit": "ns",
            "range": "± 1632.5257490139618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737198.90625,
            "unit": "ns",
            "range": "± 2233.830560806122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909327.8645833333,
            "unit": "ns",
            "range": "± 3036.582449074754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617149.7591145834,
            "unit": "ns",
            "range": "± 1786.094273931353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572119.4963727678,
            "unit": "ns",
            "range": "± 951.4046162417026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2118963.6363636362,
            "unit": "ns",
            "range": "± 42200.49136990554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2258251.3513513515,
            "unit": "ns",
            "range": "± 74929.7508841953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2679683.3333333335,
            "unit": "ns",
            "range": "± 68044.97021098982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2280862.5,
            "unit": "ns",
            "range": "± 58363.46245726002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2913346.153846154,
            "unit": "ns",
            "range": "± 45338.36887568511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172378.94736842104,
            "unit": "ns",
            "range": "± 5917.731390318917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158552.63157894736,
            "unit": "ns",
            "range": "± 6309.491298918465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141800,
            "unit": "ns",
            "range": "± 2179.831797792359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2681521.4285714286,
            "unit": "ns",
            "range": "± 34069.07414631065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2460640,
            "unit": "ns",
            "range": "± 29088.554450161322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9832.967032967033,
            "unit": "ns",
            "range": "± 746.4069406987861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50171.62162162162,
            "unit": "ns",
            "range": "± 2408.3485087918802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43800,
            "unit": "ns",
            "range": "± 824.2028541734045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45219.565217391304,
            "unit": "ns",
            "range": "± 6516.525723205154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2048.4210526315787,
            "unit": "ns",
            "range": "± 364.9142009022899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9186.813186813188,
            "unit": "ns",
            "range": "± 1038.9320148016095"
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
          "id": "e6cfa1de04ae4667f0f352a2ba916758192fb277",
          "message": "fix: Change evidence query name from evidence to committedEvidence",
          "timestamp": "2024-07-17T14:50:00+09:00",
          "tree_id": "58b18bcdc000d55ea8bef584b7d5983c89ea3940",
          "url": "https://github.com/planetarium/libplanet/commit/e6cfa1de04ae4667f0f352a2ba916758192fb277"
        },
        "date": 1721196353723,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993075.8241758242,
            "unit": "ns",
            "range": "± 108405.53628816335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1701253.6585365853,
            "unit": "ns",
            "range": "± 61356.41408019612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545746.3917525774,
            "unit": "ns",
            "range": "± 103079.5203369059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6942207.547169811,
            "unit": "ns",
            "range": "± 289644.5751985437"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30595.945945945947,
            "unit": "ns",
            "range": "± 1397.3986780912899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9559976.923076924,
            "unit": "ns",
            "range": "± 83398.71255846972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23571278.57142857,
            "unit": "ns",
            "range": "± 130908.53635309613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59209780,
            "unit": "ns",
            "range": "± 639521.6507001821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117506293.33333333,
            "unit": "ns",
            "range": "± 1121644.9345662356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236539030.76923078,
            "unit": "ns",
            "range": "± 1870988.9271829019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3246937.081473214,
            "unit": "ns",
            "range": "± 16781.24170632604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1104169.7395833333,
            "unit": "ns",
            "range": "± 10397.280466509388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749184.78515625,
            "unit": "ns",
            "range": "± 3876.5670303122324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943274.296875,
            "unit": "ns",
            "range": "± 17964.38435672545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622349.0443638393,
            "unit": "ns",
            "range": "± 2599.3486150439517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568199.8567708334,
            "unit": "ns",
            "range": "± 2709.2743049213627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2176096.4285714286,
            "unit": "ns",
            "range": "± 57472.843713794646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2213111.7647058824,
            "unit": "ns",
            "range": "± 116742.00330701222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2683507.1428571427,
            "unit": "ns",
            "range": "± 44345.48740004165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2229256.5217391304,
            "unit": "ns",
            "range": "± 40317.00324910251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3009685.185185185,
            "unit": "ns",
            "range": "± 82178.90756759212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173161.36363636365,
            "unit": "ns",
            "range": "± 11331.366615880455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164004.2857142857,
            "unit": "ns",
            "range": "± 7817.639580643024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142528.57142857142,
            "unit": "ns",
            "range": "± 2352.225974043955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2734771.4285714286,
            "unit": "ns",
            "range": "± 34219.94871576944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2563706.6666666665,
            "unit": "ns",
            "range": "± 43825.310147491364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9961.797752808989,
            "unit": "ns",
            "range": "± 1048.7552814882213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52001.063829787236,
            "unit": "ns",
            "range": "± 4586.22281581609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44203.125,
            "unit": "ns",
            "range": "± 1353.9629706186397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56077.551020408166,
            "unit": "ns",
            "range": "± 8326.20420208968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2280.4597701149423,
            "unit": "ns",
            "range": "± 609.2005971342968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9072.631578947368,
            "unit": "ns",
            "range": "± 1193.817594077224"
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
          "id": "3ab23afbf49efb8ee99d2e1d5f614d6bf4ff3c17",
          "message": "Changelog",
          "timestamp": "2024-07-17T14:59:17+09:00",
          "tree_id": "f60f63292b146abc9a4f45f1c0f90629c5e720a7",
          "url": "https://github.com/planetarium/libplanet/commit/3ab23afbf49efb8ee99d2e1d5f614d6bf4ff3c17"
        },
        "date": 1721197528797,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 939483.3333333334,
            "unit": "ns",
            "range": "± 38949.57699414204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1735657.142857143,
            "unit": "ns",
            "range": "± 56196.55257227443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1519369.4117647058,
            "unit": "ns",
            "range": "± 81850.76144092603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6794354.054054054,
            "unit": "ns",
            "range": "± 226462.34368677746"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30015,
            "unit": "ns",
            "range": "± 686.1601777090275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9971841.176470589,
            "unit": "ns",
            "range": "± 195439.35459249097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23383100,
            "unit": "ns",
            "range": "± 258773.6011780697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58841740,
            "unit": "ns",
            "range": "± 387304.294911821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117753320,
            "unit": "ns",
            "range": "± 266375.2782394471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237707871.42857143,
            "unit": "ns",
            "range": "± 1582955.9143618583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3311141.9270833335,
            "unit": "ns",
            "range": "± 17578.69225130532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051047.2395833333,
            "unit": "ns",
            "range": "± 2561.169234642974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 726630.2734375,
            "unit": "ns",
            "range": "± 1896.3224604778172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927567.4386160714,
            "unit": "ns",
            "range": "± 14741.349571833058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622240.3170072115,
            "unit": "ns",
            "range": "± 1057.994961534708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558727.4483816965,
            "unit": "ns",
            "range": "± 2804.571746200234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120941.1764705884,
            "unit": "ns",
            "range": "± 35534.315436341414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2191054.1666666665,
            "unit": "ns",
            "range": "± 84555.80294726517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2730882.6086956523,
            "unit": "ns",
            "range": "± 54585.38475864224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2248111.7647058824,
            "unit": "ns",
            "range": "± 40968.46168629201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2894513.3333333335,
            "unit": "ns",
            "range": "± 32467.013296282006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172533.33333333334,
            "unit": "ns",
            "range": "± 8000.67945832551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167074.46808510637,
            "unit": "ns",
            "range": "± 5049.08377762981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143443.47826086957,
            "unit": "ns",
            "range": "± 3029.3752861779817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2707273.3333333335,
            "unit": "ns",
            "range": "± 27700.63090221868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2551373.6842105263,
            "unit": "ns",
            "range": "± 55622.94532639947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10518.08510638298,
            "unit": "ns",
            "range": "± 1441.7703250165666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53941.836734693876,
            "unit": "ns",
            "range": "± 7322.116243433178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48174.46808510638,
            "unit": "ns",
            "range": "± 1873.0895293148328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50844.68085106383,
            "unit": "ns",
            "range": "± 8707.858482968952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2610.10101010101,
            "unit": "ns",
            "range": "± 731.8546400636145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9826.08695652174,
            "unit": "ns",
            "range": "± 936.5437470602582"
          }
        ]
      }
    ]
  }
}