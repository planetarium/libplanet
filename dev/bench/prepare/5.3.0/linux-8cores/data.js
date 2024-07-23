window.BENCHMARK_DATA = {
  "lastUpdate": 1721726129086,
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
          "id": "465171f774506f2ff13ccdacfe2262db6385f6ab",
          "message": "Prepare 5.3.",
          "timestamp": "2024-07-23T17:32:08+09:00",
          "tree_id": "7a6d3f72a275c5a24f37cd9fa89e57ad8ebff2ee",
          "url": "https://github.com/planetarium/libplanet/commit/465171f774506f2ff13ccdacfe2262db6385f6ab"
        },
        "date": 1721724138396,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210374.39583333334,
            "unit": "ns",
            "range": "± 17805.22099153662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197392.06382978722,
            "unit": "ns",
            "range": "± 12192.598075880629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169039.58823529413,
            "unit": "ns",
            "range": "± 2906.241044261976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3083476.9166666665,
            "unit": "ns",
            "range": "± 33796.25593964336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2851896.2666666666,
            "unit": "ns",
            "range": "± 52106.529775158924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16504.11111111111,
            "unit": "ns",
            "range": "± 3224.9176413748605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71758.52,
            "unit": "ns",
            "range": "± 14852.245369463415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51432.38888888889,
            "unit": "ns",
            "range": "± 1084.3772888506855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64893.76530612245,
            "unit": "ns",
            "range": "± 14806.468839005247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2965.7525773195875,
            "unit": "ns",
            "range": "± 364.6131806142823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12106.766666666666,
            "unit": "ns",
            "range": "± 735.4510471109746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1088649.0625,
            "unit": "ns",
            "range": "± 49635.71197372804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2077773.8275862068,
            "unit": "ns",
            "range": "± 59288.87308284327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1764948.5625,
            "unit": "ns",
            "range": "± 106439.24097573596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8420243.9,
            "unit": "ns",
            "range": "± 250142.05883438204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3761004.0700334823,
            "unit": "ns",
            "range": "± 8300.975862855581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1189064.8626302083,
            "unit": "ns",
            "range": "± 2701.479134388621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770074.720842634,
            "unit": "ns",
            "range": "± 1820.9570364438612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931151.882877604,
            "unit": "ns",
            "range": "± 1543.7396244944084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616032.0466657366,
            "unit": "ns",
            "range": "± 649.759068420082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580837.3855329241,
            "unit": "ns",
            "range": "± 739.7184242794458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2486544.730769231,
            "unit": "ns",
            "range": "± 41188.31272370405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2620807.227272727,
            "unit": "ns",
            "range": "± 63656.01043475546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3105019.8157894737,
            "unit": "ns",
            "range": "± 68037.47924412497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2649310,
            "unit": "ns",
            "range": "± 66418.88418276336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3423282.8684210526,
            "unit": "ns",
            "range": "± 66900.53526626137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32592.666666666668,
            "unit": "ns",
            "range": "± 427.73434122907025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10647220.352941176,
            "unit": "ns",
            "range": "± 216176.58646605938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27126540.666666668,
            "unit": "ns",
            "range": "± 150435.87201370494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71749896.85714285,
            "unit": "ns",
            "range": "± 898230.8604180568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137962182.26666668,
            "unit": "ns",
            "range": "± 775394.0501997739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285459906.06666666,
            "unit": "ns",
            "range": "± 1814797.3536670487"
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
          "id": "18e103e5388a86b2bde5c71d711f10ad2fefa365",
          "message": "Prepare 5.3.0",
          "timestamp": "2024-07-23T18:05:55+09:00",
          "tree_id": "06964644adf84a6643248469a906bd69e944df2b",
          "url": "https://github.com/planetarium/libplanet/commit/18e103e5388a86b2bde5c71d711f10ad2fefa365"
        },
        "date": 1721726102054,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203897.74324324325,
            "unit": "ns",
            "range": "± 10183.746141487856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212656.05,
            "unit": "ns",
            "range": "± 21118.584014446908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180185.05208333334,
            "unit": "ns",
            "range": "± 11312.437411860396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3117582.714285714,
            "unit": "ns",
            "range": "± 39075.5983888993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2862627.2,
            "unit": "ns",
            "range": "± 42463.7446555462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19696.407216494845,
            "unit": "ns",
            "range": "± 4370.0660942810555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67120.5617977528,
            "unit": "ns",
            "range": "± 12632.531117349236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51224.230769230766,
            "unit": "ns",
            "range": "± 787.1271767050687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60000.316326530614,
            "unit": "ns",
            "range": "± 10750.279935311719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2939.71875,
            "unit": "ns",
            "range": "± 397.12767940550305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12704.827586206897,
            "unit": "ns",
            "range": "± 1231.35682591137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1043494.9891304348,
            "unit": "ns",
            "range": "± 67053.18588418943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2032209.6764705882,
            "unit": "ns",
            "range": "± 97313.10723300088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1709224.4268292682,
            "unit": "ns",
            "range": "± 89496.0585576749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8487519.620689655,
            "unit": "ns",
            "range": "± 244443.42814536483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3789308.3024553573,
            "unit": "ns",
            "range": "± 6471.206751497284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215110.287109375,
            "unit": "ns",
            "range": "± 2337.2566707392257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766802.1508789062,
            "unit": "ns",
            "range": "± 2640.525352333225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949319.3740885416,
            "unit": "ns",
            "range": "± 1645.8846970130646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643088.7391075721,
            "unit": "ns",
            "range": "± 497.91616631335296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583165.980078125,
            "unit": "ns",
            "range": "± 729.8066075416352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2442788.027027027,
            "unit": "ns",
            "range": "± 82237.98371781419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2567513.3333333335,
            "unit": "ns",
            "range": "± 64113.771487924474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3068656.8,
            "unit": "ns",
            "range": "± 31943.8307260908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2626919.073170732,
            "unit": "ns",
            "range": "± 93839.2854023277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3305975.6,
            "unit": "ns",
            "range": "± 42053.0167472306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32466.0625,
            "unit": "ns",
            "range": "± 614.0415261473229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10674971.066666666,
            "unit": "ns",
            "range": "± 118553.74817685418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27436459.92857143,
            "unit": "ns",
            "range": "± 123440.2016016502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69290791.26666667,
            "unit": "ns",
            "range": "± 556016.4882742066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138850232.16666666,
            "unit": "ns",
            "range": "± 691129.6393175727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285141628.6333333,
            "unit": "ns",
            "range": "± 1923122.224055933"
          }
        ]
      }
    ]
  }
}