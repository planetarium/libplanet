window.BENCHMARK_DATA = {
  "lastUpdate": 1721191398775,
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
      }
    ]
  }
}