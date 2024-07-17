window.BENCHMARK_DATA = {
  "lastUpdate": 1721191282498,
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
        "date": 1721191253578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203212.64788732395,
            "unit": "ns",
            "range": "± 9907.120606770799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192953.35294117648,
            "unit": "ns",
            "range": "± 4952.625822563666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165913.94444444444,
            "unit": "ns",
            "range": "± 3533.274975933172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2980050.2666666666,
            "unit": "ns",
            "range": "± 17608.078699711623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2872583.6,
            "unit": "ns",
            "range": "± 29484.86410443743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12409.270588235295,
            "unit": "ns",
            "range": "± 686.046600323277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59574.5,
            "unit": "ns",
            "range": "± 3032.3952710687304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50317.25,
            "unit": "ns",
            "range": "± 961.5330467539844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54470.44329896907,
            "unit": "ns",
            "range": "± 7448.889055827207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3241.987804878049,
            "unit": "ns",
            "range": "± 179.0364811367728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12473.4375,
            "unit": "ns",
            "range": "± 233.0031383908809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004767.0963855422,
            "unit": "ns",
            "range": "± 50484.6603465614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1928670.2,
            "unit": "ns",
            "range": "± 72477.34048326602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1661178.0147058824,
            "unit": "ns",
            "range": "± 71063.02676266627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8406709.444444444,
            "unit": "ns",
            "range": "± 244276.59369943084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3687979.679387019,
            "unit": "ns",
            "range": "± 6343.759748829827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214398.2381417411,
            "unit": "ns",
            "range": "± 3171.3126719910206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769874.9095552885,
            "unit": "ns",
            "range": "± 1053.95278497931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957582.6203125,
            "unit": "ns",
            "range": "± 3186.161432274941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618787.0813337053,
            "unit": "ns",
            "range": "± 859.6736085791027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586100.2868489583,
            "unit": "ns",
            "range": "± 1364.0265731203963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2393049.1666666665,
            "unit": "ns",
            "range": "± 61076.815773372575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2562910.3333333335,
            "unit": "ns",
            "range": "± 33191.25490174153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2999620.214285714,
            "unit": "ns",
            "range": "± 43953.92905764393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2562642.6,
            "unit": "ns",
            "range": "± 38226.28345374049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3274183.8571428573,
            "unit": "ns",
            "range": "± 48477.04460813964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31607.866666666665,
            "unit": "ns",
            "range": "± 287.61652710973806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10506805.423076924,
            "unit": "ns",
            "range": "± 93869.03752343965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27146725.5,
            "unit": "ns",
            "range": "± 96823.69391758482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68322773.5,
            "unit": "ns",
            "range": "± 167104.2629010173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137449354.66666666,
            "unit": "ns",
            "range": "± 398808.7029783052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286648726.15384614,
            "unit": "ns",
            "range": "± 906860.6441343718"
          }
        ]
      }
    ]
  }
}