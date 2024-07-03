window.BENCHMARK_DATA = {
  "lastUpdate": 1720001425750,
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
          "id": "fc6753889dd22b752b6c4d96ab7e3fd1d1f88ce8",
          "message": "feat: remove feecollector",
          "timestamp": "2024-07-03T18:42:32+09:00",
          "tree_id": "30e6bcd4736388bfd88c89a2a5761353d1af500c",
          "url": "https://github.com/planetarium/libplanet/commit/fc6753889dd22b752b6c4d96ab7e3fd1d1f88ce8"
        },
        "date": 1720000480288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994491.5789473684,
            "unit": "ns",
            "range": "± 90647.84874183698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1837602.5,
            "unit": "ns",
            "range": "± 95779.04949823218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590192,
            "unit": "ns",
            "range": "± 141351.41871137047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6871455.555555556,
            "unit": "ns",
            "range": "± 228789.19110887637"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32837.9746835443,
            "unit": "ns",
            "range": "± 1702.0578643835338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10028928.57142857,
            "unit": "ns",
            "range": "± 54725.02491226799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24229938.888888888,
            "unit": "ns",
            "range": "± 506703.6843094892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58854992.85714286,
            "unit": "ns",
            "range": "± 369555.3366792744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121005913.33333333,
            "unit": "ns",
            "range": "± 673546.2545010409"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241863021.42857143,
            "unit": "ns",
            "range": "± 2191586.0965830805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3266759.7098214286,
            "unit": "ns",
            "range": "± 6684.3197831946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088995.5636160714,
            "unit": "ns",
            "range": "± 2151.958383582355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740746.1356026785,
            "unit": "ns",
            "range": "± 1739.9487893279243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940387.6674107143,
            "unit": "ns",
            "range": "± 3265.358897314168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631720.1106770834,
            "unit": "ns",
            "range": "± 2130.0667780261233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576332.3046875,
            "unit": "ns",
            "range": "± 2117.2513163937497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2234880,
            "unit": "ns",
            "range": "± 40550.67728868938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2262884.375,
            "unit": "ns",
            "range": "± 69759.11136870661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2621957.1428571427,
            "unit": "ns",
            "range": "± 45162.55718433768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2289190,
            "unit": "ns",
            "range": "± 42480.31140590729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3103293.75,
            "unit": "ns",
            "range": "± 47255.35551659727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178544.30379746837,
            "unit": "ns",
            "range": "± 9255.251410726485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169772.22222222222,
            "unit": "ns",
            "range": "± 6597.638704717576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151773.91304347827,
            "unit": "ns",
            "range": "± 3754.1755409270436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2748626.6666666665,
            "unit": "ns",
            "range": "± 47003.48720599153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2442580,
            "unit": "ns",
            "range": "± 41491.58606616183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10798.901098901099,
            "unit": "ns",
            "range": "± 1495.7342682512162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53738.46153846154,
            "unit": "ns",
            "range": "± 4218.577149038899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44287.71929824561,
            "unit": "ns",
            "range": "± 1794.7413438231342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65003.06122448979,
            "unit": "ns",
            "range": "± 11203.087332964396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2579.569892473118,
            "unit": "ns",
            "range": "± 311.22448901387037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10555.208333333334,
            "unit": "ns",
            "range": "± 1587.3758412560992"
          }
        ]
      },
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
          "id": "821f6ea9be9ac01f81a122d24b776fa7e7f8c398",
          "message": "test: remove unused test",
          "timestamp": "2024-07-03T18:54:38+09:00",
          "tree_id": "07d0f8f57eaa6f486b6b23cd83a7e4cc91907561",
          "url": "https://github.com/planetarium/libplanet/commit/821f6ea9be9ac01f81a122d24b776fa7e7f8c398"
        },
        "date": 1720001150943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029311.7021276596,
            "unit": "ns",
            "range": "± 96110.02639379357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1782328.9473684211,
            "unit": "ns",
            "range": "± 59565.89768004498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1550241.3793103448,
            "unit": "ns",
            "range": "± 83322.03504269908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6716292.307692308,
            "unit": "ns",
            "range": "± 157380.47635733456"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35147.36842105263,
            "unit": "ns",
            "range": "± 4209.963918207516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10134685.714285715,
            "unit": "ns",
            "range": "± 119403.68411493751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25045653.333333332,
            "unit": "ns",
            "range": "± 319997.9639816181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63783880,
            "unit": "ns",
            "range": "± 1035327.1609910146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124302860,
            "unit": "ns",
            "range": "± 1398122.0612971224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253122460,
            "unit": "ns",
            "range": "± 4646970.418270996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3355827.3697916665,
            "unit": "ns",
            "range": "± 8038.189340177057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065593.8541666667,
            "unit": "ns",
            "range": "± 3200.5755774249365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735892.919921875,
            "unit": "ns",
            "range": "± 1245.602986483077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962687.0442708333,
            "unit": "ns",
            "range": "± 2665.274556371505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629099.8567708334,
            "unit": "ns",
            "range": "± 1881.0557275034548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571948.0598958334,
            "unit": "ns",
            "range": "± 1816.328228281049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2179736.8421052634,
            "unit": "ns",
            "range": "± 74922.73288709972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2276896.4285714286,
            "unit": "ns",
            "range": "± 65148.44293152458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2779972.222222222,
            "unit": "ns",
            "range": "± 45497.35358245066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2389123.529411765,
            "unit": "ns",
            "range": "± 48729.47682629792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3011065,
            "unit": "ns",
            "range": "± 68656.16294642685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181906.92307692306,
            "unit": "ns",
            "range": "± 7998.260928765416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172107.40740740742,
            "unit": "ns",
            "range": "± 6965.029950276307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140719.23076923078,
            "unit": "ns",
            "range": "± 2467.066149217605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2885580,
            "unit": "ns",
            "range": "± 46538.711996419865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2490173.3333333335,
            "unit": "ns",
            "range": "± 36709.097094913806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12149.484536082475,
            "unit": "ns",
            "range": "± 1479.9439538473102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56888.17204301075,
            "unit": "ns",
            "range": "± 4300.50172660287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45892.528735632186,
            "unit": "ns",
            "range": "± 2126.883962891846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62488.541666666664,
            "unit": "ns",
            "range": "± 13493.233156244352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2895.8333333333335,
            "unit": "ns",
            "range": "± 764.4628890743681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12756.25,
            "unit": "ns",
            "range": "± 2030.183424432902"
          }
        ]
      }
    ]
  }
}