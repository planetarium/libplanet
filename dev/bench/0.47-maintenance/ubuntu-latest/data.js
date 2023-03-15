window.BENCHMARK_DATA = {
  "lastUpdate": 1678843363345,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c69a2b5739e671425ebdf5609da2f2aa9e466bf",
          "message": "Merge pull request #2910 from colibrishin/benchmark/fix/0.47-maintenance\n\nci/bench: missing cherry pick in 2909",
          "timestamp": "2023-03-10T11:34:30+09:00",
          "tree_id": "31e4b557c4ea549ee4b7a3ea7aa4be393e583997",
          "url": "https://github.com/planetarium/libplanet/commit/5c69a2b5739e671425ebdf5609da2f2aa9e466bf"
        },
        "date": 1678416713258,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121572.48387096774,
            "unit": "ns",
            "range": "± 14930.884182453685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275223.10752688174,
            "unit": "ns",
            "range": "± 29493.760687077072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256155.92708333334,
            "unit": "ns",
            "range": "± 25971.213861441527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5205846.736842105,
            "unit": "ns",
            "range": "± 173879.42919855518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13272997.965517242,
            "unit": "ns",
            "range": "± 381615.68913843925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29023.81443298969,
            "unit": "ns",
            "range": "± 9930.290675640174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69800.1170212766,
            "unit": "ns",
            "range": "± 10887.634798352112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62649.12765957447,
            "unit": "ns",
            "range": "± 13599.915459283446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140849.12765957447,
            "unit": "ns",
            "range": "± 19926.417915703507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7725.349397590361,
            "unit": "ns",
            "range": "± 1099.398221575463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23218.48275862069,
            "unit": "ns",
            "range": "± 3593.912630656497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7650255.727604167,
            "unit": "ns",
            "range": "± 75775.58399776937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2383339.384207589,
            "unit": "ns",
            "range": "± 21074.114545621618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1757487.6694010417,
            "unit": "ns",
            "range": "± 24501.023651812746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3421657.0518229166,
            "unit": "ns",
            "range": "± 50631.57546424503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1103096.976171875,
            "unit": "ns",
            "range": "± 14993.042740917495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1010240.5330729167,
            "unit": "ns",
            "range": "± 13161.578986058463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 157341.15625,
            "unit": "ns",
            "range": "± 19153.94126177533"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6681972.839750744,
            "unit": "ns",
            "range": "± 354926.5853644101"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7224620.375,
            "unit": "ns",
            "range": "± 422208.420123054"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 36126919.518518515,
            "unit": "ns",
            "range": "± 1513343.9000958975"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8626448.02247191,
            "unit": "ns",
            "range": "± 461419.9621975226"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 41441747.01960784,
            "unit": "ns",
            "range": "± 1667704.6613443578"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52939420ad5a4cad7ecdb67a3942742a2e6e5dac",
          "message": "Merge pull request #2929 from greymistcube/port/0.46.3-to-0.47.1\n\n🚀🔀 Port 0.46.3 to 0.47.1 and release 0.47.1",
          "timestamp": "2023-03-14T17:18:47+09:00",
          "tree_id": "6218ba1cf7c2488a66174c10c4596de0d553d1d8",
          "url": "https://github.com/planetarium/libplanet/commit/52939420ad5a4cad7ecdb67a3942742a2e6e5dac"
        },
        "date": 1678782626849,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93587.29896907216,
            "unit": "ns",
            "range": "± 8054.480219579853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204600.31666666668,
            "unit": "ns",
            "range": "± 8524.464835315532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197643.23076923078,
            "unit": "ns",
            "range": "± 4882.807530982087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3870681.4615384615,
            "unit": "ns",
            "range": "± 24654.169649423686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9536453.285714285,
            "unit": "ns",
            "range": "± 22965.300203797673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18945.518072289156,
            "unit": "ns",
            "range": "± 1207.848594952176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52727.96808510638,
            "unit": "ns",
            "range": "± 5435.074207785187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40996.52830188679,
            "unit": "ns",
            "range": "± 1708.2722671186452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90705.0947368421,
            "unit": "ns",
            "range": "± 11408.279417956219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4665.53125,
            "unit": "ns",
            "range": "± 571.3598912497686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17633.505617977527,
            "unit": "ns",
            "range": "± 1281.0378615829386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5940404.519230769,
            "unit": "ns",
            "range": "± 12746.039529567872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1833563.4559795673,
            "unit": "ns",
            "range": "± 2085.205754930552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356036.626674107,
            "unit": "ns",
            "range": "± 2215.469470146297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620362.981670673,
            "unit": "ns",
            "range": "± 1674.624448590367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814157.7871791294,
            "unit": "ns",
            "range": "± 880.2856016065662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779671.2573242188,
            "unit": "ns",
            "range": "± 837.9813866198058"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108179.5625,
            "unit": "ns",
            "range": "± 2128.4167188703127"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4457557.945012019,
            "unit": "ns",
            "range": "± 40161.019819339446"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6030185,
            "unit": "ns",
            "range": "± 45335.35319406665"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26478014.133333333,
            "unit": "ns",
            "range": "± 396935.3424832144"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6768403.857142857,
            "unit": "ns",
            "range": "± 64387.340797834506"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28983640.266666666,
            "unit": "ns",
            "range": "± 454550.43675945303"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdf2b0c740f307b4ab213231cd114c6c1ce413a8",
          "message": "Merge pull request #2930 from greymistcube/prepare/0.47.2\n\n🔧 Prepare 0.47.2",
          "timestamp": "2023-03-15T10:11:54+09:00",
          "tree_id": "8dbcdc2786a763fbd504de7e19f1d806760b87d8",
          "url": "https://github.com/planetarium/libplanet/commit/bdf2b0c740f307b4ab213231cd114c6c1ce413a8"
        },
        "date": 1678843343162,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92992.57142857143,
            "unit": "ns",
            "range": "± 9692.976530489412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203411.15476190476,
            "unit": "ns",
            "range": "± 10218.286119341346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192854.6607142857,
            "unit": "ns",
            "range": "± 8299.606696654717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3902071.7333333334,
            "unit": "ns",
            "range": "± 34198.29628268191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9548501.923076924,
            "unit": "ns",
            "range": "± 58799.06299630624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18236.21978021978,
            "unit": "ns",
            "range": "± 1183.9483078261464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52175.04109589041,
            "unit": "ns",
            "range": "± 2029.259398554311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41457.70175438596,
            "unit": "ns",
            "range": "± 1791.0114357626478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85474.1836734694,
            "unit": "ns",
            "range": "± 14465.46941188299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4871.103092783505,
            "unit": "ns",
            "range": "± 491.5515928443677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17151.64367816092,
            "unit": "ns",
            "range": "± 1280.3495705162702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6211367.267299107,
            "unit": "ns",
            "range": "± 15507.523574081479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836122.7418870192,
            "unit": "ns",
            "range": "± 3297.213408721657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376778.785435268,
            "unit": "ns",
            "range": "± 1837.6613943737732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2523030.3401227677,
            "unit": "ns",
            "range": "± 1963.9138150504675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813469.7553710938,
            "unit": "ns",
            "range": "± 645.2391186289434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723343.834123884,
            "unit": "ns",
            "range": "± 477.46117235945565"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106270,
            "unit": "ns",
            "range": "± 3400.4219917860523"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4655914.488581731,
            "unit": "ns",
            "range": "± 21104.897251713523"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6128807.846153846,
            "unit": "ns",
            "range": "± 72966.38074808396"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25896287.692307692,
            "unit": "ns",
            "range": "± 297281.5551188762"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6531894.21875,
            "unit": "ns",
            "range": "± 197101.6489686893"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28873153.92857143,
            "unit": "ns",
            "range": "± 401460.25066355034"
          }
        ]
      }
    ]
  }
}