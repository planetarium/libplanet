window.BENCHMARK_DATA = {
  "lastUpdate": 1732171213413,
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
          "id": "dc8b4db138fa7492ff258154907fcb7c39adecab",
          "message": "Release 5.3.2",
          "timestamp": "2024-11-21T15:24:46+09:00",
          "tree_id": "ca52bd1bf724252aa2f667f5618ddb0eea8c1a8b",
          "url": "https://github.com/planetarium/libplanet/commit/dc8b4db138fa7492ff258154907fcb7c39adecab"
        },
        "date": 1732170885712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10349962.133333333,
            "unit": "ns",
            "range": "± 73236.58744865035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26721303.733333334,
            "unit": "ns",
            "range": "± 194260.7510631988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67206335,
            "unit": "ns",
            "range": "± 293654.888789283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139249892.07142857,
            "unit": "ns",
            "range": "± 763483.717892249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287357079.93333334,
            "unit": "ns",
            "range": "± 1520629.7579096004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200456.60655737706,
            "unit": "ns",
            "range": "± 8997.17793955173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190098.15789473685,
            "unit": "ns",
            "range": "± 6508.364935723688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165550.125,
            "unit": "ns",
            "range": "± 3238.630489883031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3074636.1666666665,
            "unit": "ns",
            "range": "± 43280.3971969275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2845245.214285714,
            "unit": "ns",
            "range": "± 28717.633313747447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12550.559139784946,
            "unit": "ns",
            "range": "± 944.1464222106468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69647.30612244898,
            "unit": "ns",
            "range": "± 9821.539410915599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50225.41176470588,
            "unit": "ns",
            "range": "± 941.9493788696616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65344.989795918365,
            "unit": "ns",
            "range": "± 8155.378305705576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2719.816326530612,
            "unit": "ns",
            "range": "± 464.3075177841757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12010.838709677419,
            "unit": "ns",
            "range": "± 1171.856445154649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746824.2371651786,
            "unit": "ns",
            "range": "± 5997.917568875543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221834.5489676339,
            "unit": "ns",
            "range": "± 1429.4620343786348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755635.2253255208,
            "unit": "ns",
            "range": "± 1007.912420610406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960719.1291666667,
            "unit": "ns",
            "range": "± 2254.8676425926965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623444.4729166667,
            "unit": "ns",
            "range": "± 334.83740705558506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556870.4010184152,
            "unit": "ns",
            "range": "± 273.48767641998404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2387399.933333333,
            "unit": "ns",
            "range": "± 43080.29776635829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2508603.6578947366,
            "unit": "ns",
            "range": "± 54045.29276887751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3008867.846153846,
            "unit": "ns",
            "range": "± 35816.87877674006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2523957.0263157897,
            "unit": "ns",
            "range": "± 54533.4040060345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3193600.6666666665,
            "unit": "ns",
            "range": "± 83065.23453981121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983633.9935064935,
            "unit": "ns",
            "range": "± 47419.08022416587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1933897.4193548388,
            "unit": "ns",
            "range": "± 58916.12809227153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1584490.012658228,
            "unit": "ns",
            "range": "± 81912.91590486997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7738299.652173913,
            "unit": "ns",
            "range": "± 169248.72094228893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30187.5,
            "unit": "ns",
            "range": "± 1186.5564917942922"
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
          "id": "1016bd4c4497c1f88460d543d17430c47f4669af",
          "message": "Release 5.3.2",
          "timestamp": "2024-11-21T15:28:55+09:00",
          "tree_id": "df07ab43c0b7d586cd6ed2c4d15f88d8b220a3fa",
          "url": "https://github.com/planetarium/libplanet/commit/1016bd4c4497c1f88460d543d17430c47f4669af"
        },
        "date": 1732171186655,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11018473.42857143,
            "unit": "ns",
            "range": "± 70433.87875241495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28157781.166666668,
            "unit": "ns",
            "range": "± 148933.01276396844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69107730.78571428,
            "unit": "ns",
            "range": "± 442533.83776878985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145885975.56666666,
            "unit": "ns",
            "range": "± 893381.0778457203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292869902.71428573,
            "unit": "ns",
            "range": "± 2181695.670507203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240210.2911392405,
            "unit": "ns",
            "range": "± 12401.568795666075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228344.21649484537,
            "unit": "ns",
            "range": "± 20598.03481384147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185614.05555555556,
            "unit": "ns",
            "range": "± 12903.444800471729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3177149.6666666665,
            "unit": "ns",
            "range": "± 54472.30024604467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2933941.227272727,
            "unit": "ns",
            "range": "± 71998.30182384384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16686.41489361702,
            "unit": "ns",
            "range": "± 3141.5307391703395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79178.83,
            "unit": "ns",
            "range": "± 14510.46593871771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61764.52040816326,
            "unit": "ns",
            "range": "± 10254.778761283842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69911.16326530612,
            "unit": "ns",
            "range": "± 11184.918760742514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3986.186813186813,
            "unit": "ns",
            "range": "± 936.1540461090782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20896.81914893617,
            "unit": "ns",
            "range": "± 3725.1216187485857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3744527.7458147323,
            "unit": "ns",
            "range": "± 21707.299485733176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211885.794140625,
            "unit": "ns",
            "range": "± 3403.1675956056824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777324.1324869791,
            "unit": "ns",
            "range": "± 1858.3992378276064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968730.9497070312,
            "unit": "ns",
            "range": "± 15830.520138687416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629054.2559344952,
            "unit": "ns",
            "range": "± 514.6207267934155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568947.9074519231,
            "unit": "ns",
            "range": "± 706.4347428340739"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2521571.8666666667,
            "unit": "ns",
            "range": "± 41518.91886988159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2579402.263157895,
            "unit": "ns",
            "range": "± 44141.50784798326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3204959.714285714,
            "unit": "ns",
            "range": "± 49074.38726045401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2788052.3333333335,
            "unit": "ns",
            "range": "± 51690.03197172637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3310734.533333333,
            "unit": "ns",
            "range": "± 43724.688525994534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1081923.576923077,
            "unit": "ns",
            "range": "± 54905.93885473575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2044212.75,
            "unit": "ns",
            "range": "± 80112.4619191339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1717197.8855421687,
            "unit": "ns",
            "range": "± 89309.73410154443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7883915.666666667,
            "unit": "ns",
            "range": "± 187338.49918931705"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36886.84020618557,
            "unit": "ns",
            "range": "± 7151.752880830741"
          }
        ]
      }
    ]
  }
}