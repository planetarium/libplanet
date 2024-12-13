window.BENCHMARK_DATA = {
  "lastUpdate": 1734063551145,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "3e7b2c11de7622c9cab18e0d2e35b2d9c4133414",
          "message": "release: 5.4.2",
          "timestamp": "2024-12-13T13:09:48+09:00",
          "tree_id": "81a18e9d75f2b96395fd766d8ef3fc5cc02ee6ef",
          "url": "https://github.com/planetarium/libplanet/commit/3e7b2c11de7622c9cab18e0d2e35b2d9c4133414"
        },
        "date": 1734063523933,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10658802.8,
            "unit": "ns",
            "range": "± 54457.65541120656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27541818.733333334,
            "unit": "ns",
            "range": "± 67267.724384907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70704823.1,
            "unit": "ns",
            "range": "± 455828.5263611119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141016495.66666666,
            "unit": "ns",
            "range": "± 1280847.895644057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297445967.3666667,
            "unit": "ns",
            "range": "± 1848644.71018867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 106930.97272727273,
            "unit": "ns",
            "range": "± 4520.801522077717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193349.4,
            "unit": "ns",
            "range": "± 8889.681569404238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165633.4,
            "unit": "ns",
            "range": "± 2904.5907702905656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2886064.3,
            "unit": "ns",
            "range": "± 37131.87199351599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805943.066666667,
            "unit": "ns",
            "range": "± 37391.21362311638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13125.662921348314,
            "unit": "ns",
            "range": "± 1004.5628961690505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66555.11956521739,
            "unit": "ns",
            "range": "± 6117.625253624876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50250.5,
            "unit": "ns",
            "range": "± 1487.4036335055516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47714.267441860466,
            "unit": "ns",
            "range": "± 5150.594794720128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2995.355670103093,
            "unit": "ns",
            "range": "± 590.6926899428247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12257.978494623656,
            "unit": "ns",
            "range": "± 852.5987508595555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754813.677283654,
            "unit": "ns",
            "range": "± 5257.905496691793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201938.8193359375,
            "unit": "ns",
            "range": "± 1180.5433648134601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 796267.3796037947,
            "unit": "ns",
            "range": "± 2047.0463114904478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933897.8735677083,
            "unit": "ns",
            "range": "± 4649.749348662831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 656804.6983924279,
            "unit": "ns",
            "range": "± 1068.0426168434578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575405.2734375,
            "unit": "ns",
            "range": "± 2167.1624230678412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2379181.1333333333,
            "unit": "ns",
            "range": "± 43903.58900536927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2492869.0857142857,
            "unit": "ns",
            "range": "± 81285.6753151108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3086270.933333333,
            "unit": "ns",
            "range": "± 45426.79472430131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2524589.4,
            "unit": "ns",
            "range": "± 40267.63094915248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3247799,
            "unit": "ns",
            "range": "± 32566.617291842475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013000.8478260869,
            "unit": "ns",
            "range": "± 85388.61567452509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1930509.105263158,
            "unit": "ns",
            "range": "± 65850.40145152084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1640819.1235955057,
            "unit": "ns",
            "range": "± 90022.26365509158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7833691.8,
            "unit": "ns",
            "range": "± 204392.6361482081"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30942.363636363636,
            "unit": "ns",
            "range": "± 763.8781095395824"
          }
        ]
      }
    ]
  }
}