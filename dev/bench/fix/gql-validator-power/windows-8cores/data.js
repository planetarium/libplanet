window.BENCHMARK_DATA = {
  "lastUpdate": 1733364850585,
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
          "id": "3f32c794d9a34501de239bba5a00a36f2ce7dc1b",
          "message": "test: Fix test failures",
          "timestamp": "2024-12-05T10:43:38+09:00",
          "tree_id": "1e361d07c6dc123b08f1535eb27b948225e1e89a",
          "url": "https://github.com/planetarium/libplanet/commit/3f32c794d9a34501de239bba5a00a36f2ce7dc1b"
        },
        "date": 1733363636083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009478.7878787878,
            "unit": "ns",
            "range": "± 97975.63761396355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1793035.593220339,
            "unit": "ns",
            "range": "± 77556.69953211286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1553570.2127659575,
            "unit": "ns",
            "range": "± 141133.98791233907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6621878.048780488,
            "unit": "ns",
            "range": "± 236487.50761107355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31346.464646464647,
            "unit": "ns",
            "range": "± 4730.714083633074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9869540,
            "unit": "ns",
            "range": "± 184006.41991905763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23810540,
            "unit": "ns",
            "range": "± 299093.67333424394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59460320,
            "unit": "ns",
            "range": "± 398342.31187330757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118228269.23076923,
            "unit": "ns",
            "range": "± 706834.0898973575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234203500,
            "unit": "ns",
            "range": "± 649954.5253323497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3339217.159598214,
            "unit": "ns",
            "range": "± 3314.040521566149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1084859.3880208333,
            "unit": "ns",
            "range": "± 2198.8192219215066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741438.5416666666,
            "unit": "ns",
            "range": "± 1186.228843996842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924968.8541666667,
            "unit": "ns",
            "range": "± 2870.780418499431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622949.4977678572,
            "unit": "ns",
            "range": "± 1006.0345574329494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565971.26953125,
            "unit": "ns",
            "range": "± 1392.0889106889192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2217694.736842105,
            "unit": "ns",
            "range": "± 47110.042261404786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2294188.2352941176,
            "unit": "ns",
            "range": "± 45677.673462438695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2736965.217391304,
            "unit": "ns",
            "range": "± 68696.9868910212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2335735.714285714,
            "unit": "ns",
            "range": "± 61739.069893567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2973000,
            "unit": "ns",
            "range": "± 49191.477194443236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95798.82352941176,
            "unit": "ns",
            "range": "± 5581.676956530074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166122.80701754385,
            "unit": "ns",
            "range": "± 7208.6757636659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145336.73469387754,
            "unit": "ns",
            "range": "± 5750.604818826706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2637180,
            "unit": "ns",
            "range": "± 47012.113940375595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2522627.777777778,
            "unit": "ns",
            "range": "± 50661.55063179867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11935.416666666666,
            "unit": "ns",
            "range": "± 1945.9528401634893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55811.11111111111,
            "unit": "ns",
            "range": "± 6810.194772138834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44246.3768115942,
            "unit": "ns",
            "range": "± 2076.3783310302674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60476.767676767675,
            "unit": "ns",
            "range": "± 13698.583483173552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2717.5257731958764,
            "unit": "ns",
            "range": "± 522.0173826285127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10524.21052631579,
            "unit": "ns",
            "range": "± 1658.1658535141648"
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
          "id": "f7c4fb40c8ca05aa3d0e2c4578ae707817b186b4",
          "message": "test: Fix test failures",
          "timestamp": "2024-12-05T10:55:14+09:00",
          "tree_id": "1e361d07c6dc123b08f1535eb27b948225e1e89a",
          "url": "https://github.com/planetarium/libplanet/commit/f7c4fb40c8ca05aa3d0e2c4578ae707817b186b4"
        },
        "date": 1733364236727,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956408.4210526316,
            "unit": "ns",
            "range": "± 97814.2265064488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1706360,
            "unit": "ns",
            "range": "± 69468.18509750158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1445283.3333333333,
            "unit": "ns",
            "range": "± 107788.28833431215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6620056.818181818,
            "unit": "ns",
            "range": "± 243651.42027822058"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28468.96551724138,
            "unit": "ns",
            "range": "± 715.1940037879144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9559492.857142856,
            "unit": "ns",
            "range": "± 47996.40153636062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23424793.333333332,
            "unit": "ns",
            "range": "± 130335.43793210035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57983623.07692308,
            "unit": "ns",
            "range": "± 174543.02790356192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119475064.28571428,
            "unit": "ns",
            "range": "± 412050.4181382566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234519993.33333334,
            "unit": "ns",
            "range": "± 1056837.2252464741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3187155.9895833335,
            "unit": "ns",
            "range": "± 46813.59189088359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1013717.1456473215,
            "unit": "ns",
            "range": "± 14908.609721826166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 719458.30078125,
            "unit": "ns",
            "range": "± 10030.172742476161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916580.8072916667,
            "unit": "ns",
            "range": "± 23231.468586237814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623856.2044270834,
            "unit": "ns",
            "range": "± 3115.277144878488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 544246.7643229166,
            "unit": "ns",
            "range": "± 5914.908649450277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2153663.6363636362,
            "unit": "ns",
            "range": "± 23092.537352687803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2253907.8947368423,
            "unit": "ns",
            "range": "± 24225.384202651603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2718564.285714286,
            "unit": "ns",
            "range": "± 41896.21989819895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2318450,
            "unit": "ns",
            "range": "± 59310.392080103906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2940886.6666666665,
            "unit": "ns",
            "range": "± 46412.11151453999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86797.53086419753,
            "unit": "ns",
            "range": "± 3910.6257590263594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160765.38461538462,
            "unit": "ns",
            "range": "± 5912.263247853189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146200,
            "unit": "ns",
            "range": "± 3849.5714047150755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2557840,
            "unit": "ns",
            "range": "± 34103.849803630255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2457571.4285714286,
            "unit": "ns",
            "range": "± 36782.42533040492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9529.347826086956,
            "unit": "ns",
            "range": "± 1209.2626073404012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48859.13978494624,
            "unit": "ns",
            "range": "± 3253.8350803702047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41975,
            "unit": "ns",
            "range": "± 507.93700396801177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 43807.608695652176,
            "unit": "ns",
            "range": "± 6445.15720224742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2015.5555555555557,
            "unit": "ns",
            "range": "± 230.73459197762512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8548.275862068966,
            "unit": "ns",
            "range": "± 740.4998420246236"
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
          "id": "a1686d21a9ebc600ff4f9f40ffa760133576e6fb",
          "message": "chore: Changes",
          "timestamp": "2024-12-05T11:03:36+09:00",
          "tree_id": "ef4903aa61c1d279ae3528979417cb5d7e89f5b0",
          "url": "https://github.com/planetarium/libplanet/commit/a1686d21a9ebc600ff4f9f40ffa760133576e6fb"
        },
        "date": 1733364779030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996674.7474747475,
            "unit": "ns",
            "range": "± 95210.92625456338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1806480.9523809524,
            "unit": "ns",
            "range": "± 82615.39506837784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1532594.4444444445,
            "unit": "ns",
            "range": "± 86446.44813845913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6598911.764705882,
            "unit": "ns",
            "range": "± 171294.6986826838"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30818.75,
            "unit": "ns",
            "range": "± 3652.3478389718175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9745342.857142856,
            "unit": "ns",
            "range": "± 91005.90609985127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24090240,
            "unit": "ns",
            "range": "± 270285.68695258093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59443493.333333336,
            "unit": "ns",
            "range": "± 405641.74987061584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120228635.71428572,
            "unit": "ns",
            "range": "± 762713.0659258866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238736040,
            "unit": "ns",
            "range": "± 1002111.6303657421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3264829.921875,
            "unit": "ns",
            "range": "± 4269.721830004296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070430.287388393,
            "unit": "ns",
            "range": "± 2906.1935537599893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739310.8854166666,
            "unit": "ns",
            "range": "± 2023.9455193504116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953161.4973958333,
            "unit": "ns",
            "range": "± 5946.421057178272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629407.6106770834,
            "unit": "ns",
            "range": "± 3154.4472135525284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565290.0716145834,
            "unit": "ns",
            "range": "± 1763.4894258386414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2165720,
            "unit": "ns",
            "range": "± 9485.116160144196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2250500,
            "unit": "ns",
            "range": "± 26070.319109315453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2837740,
            "unit": "ns",
            "range": "± 46067.97462136018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2374524.1379310344,
            "unit": "ns",
            "range": "± 68499.80529259301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3013264.285714286,
            "unit": "ns",
            "range": "± 27481.67521326661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98713.04347826086,
            "unit": "ns",
            "range": "± 8714.081283386877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169732.75862068965,
            "unit": "ns",
            "range": "± 6829.480418217709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146286.36363636365,
            "unit": "ns",
            "range": "± 3488.797780999919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2625242.8571428573,
            "unit": "ns",
            "range": "± 37515.7549321864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2570253.3333333335,
            "unit": "ns",
            "range": "± 45588.295281427956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10484.09090909091,
            "unit": "ns",
            "range": "± 1030.1083933185726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53260.63829787234,
            "unit": "ns",
            "range": "± 4432.315787949782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44011.11111111111,
            "unit": "ns",
            "range": "± 941.768604581382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56736.55913978495,
            "unit": "ns",
            "range": "± 10645.03134704716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2736.082474226804,
            "unit": "ns",
            "range": "± 553.8098287864536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10251.136363636364,
            "unit": "ns",
            "range": "± 975.6806428454989"
          }
        ]
      }
    ]
  }
}