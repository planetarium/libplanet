window.BENCHMARK_DATA = {
  "lastUpdate": 1721196628448,
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
      }
    ]
  }
}