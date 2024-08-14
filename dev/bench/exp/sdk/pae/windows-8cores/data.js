window.BENCHMARK_DATA = {
  "lastUpdate": 1723627249119,
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
          "id": "55ea7ecf677b8a31b7b0626cce857079688b2994",
          "message": "feat: Add a feature that allows you to optionally set whether to start or not for all services.",
          "timestamp": "2024-08-14T15:17:07+09:00",
          "tree_id": "4806c0c503abd755893653acad477caaecd9ba9e",
          "url": "https://github.com/planetarium/libplanet/commit/55ea7ecf677b8a31b7b0626cce857079688b2994"
        },
        "date": 1723617924528,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009184.2696629213,
            "unit": "ns",
            "range": "± 61736.43557104154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1892908.9285714286,
            "unit": "ns",
            "range": "± 81465.27040688893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1643711.111111111,
            "unit": "ns",
            "range": "± 94871.73090333209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7034315.151515151,
            "unit": "ns",
            "range": "± 183228.6347047251"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36986.868686868685,
            "unit": "ns",
            "range": "± 4580.7192747883655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10388226.666666666,
            "unit": "ns",
            "range": "± 162187.89133359524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25072720,
            "unit": "ns",
            "range": "± 282173.35654320224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62451213.333333336,
            "unit": "ns",
            "range": "± 603506.6242584331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124528114.28571428,
            "unit": "ns",
            "range": "± 1828268.2642145453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251805928.57142857,
            "unit": "ns",
            "range": "± 1514207.504542619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3395452.1875,
            "unit": "ns",
            "range": "± 15107.295486271805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1108139.375,
            "unit": "ns",
            "range": "± 5392.059575445075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760499.8111979166,
            "unit": "ns",
            "range": "± 1198.4311324251364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948310.5794270833,
            "unit": "ns",
            "range": "± 3038.4528571589535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642381.6964285715,
            "unit": "ns",
            "range": "± 1397.1976165299097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573085.68359375,
            "unit": "ns",
            "range": "± 1924.9872432986715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2327861.111111111,
            "unit": "ns",
            "range": "± 47058.11349546042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2319507.1428571427,
            "unit": "ns",
            "range": "± 63514.73394867862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2747210,
            "unit": "ns",
            "range": "± 50718.95672653935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2309796,
            "unit": "ns",
            "range": "± 49151.784301284526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3020100,
            "unit": "ns",
            "range": "± 52026.41340999486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188286.36363636365,
            "unit": "ns",
            "range": "± 9915.866558872964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174773.2142857143,
            "unit": "ns",
            "range": "± 7205.389171785457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151716.66666666666,
            "unit": "ns",
            "range": "± 3818.6802485387166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2839163.1578947366,
            "unit": "ns",
            "range": "± 62540.61978272215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2504865,
            "unit": "ns",
            "range": "± 56852.46164183959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12898.901098901099,
            "unit": "ns",
            "range": "± 1355.8510656897802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60946.93877551021,
            "unit": "ns",
            "range": "± 6176.2131673863405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49288.63636363636,
            "unit": "ns",
            "range": "± 1826.830513528434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66479.79797979798,
            "unit": "ns",
            "range": "± 15089.048466760281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3141.237113402062,
            "unit": "ns",
            "range": "± 582.3359170400829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12006.521739130434,
            "unit": "ns",
            "range": "± 1420.5558692090203"
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
          "id": "61b99e1d12bb7ab31a50f3495b011f695f69e581",
          "message": "WIP",
          "timestamp": "2024-08-14T17:51:23+09:00",
          "tree_id": "ace2c4ed9191b0025ea04f67f54d95e6ade2d225",
          "url": "https://github.com/planetarium/libplanet/commit/61b99e1d12bb7ab31a50f3495b011f695f69e581"
        },
        "date": 1723626073121,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 935813.0434782609,
            "unit": "ns",
            "range": "± 54730.5652542803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1724284.7826086956,
            "unit": "ns",
            "range": "± 54980.85714295398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1496433.3333333333,
            "unit": "ns",
            "range": "± 101170.59460872585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6760657.692307692,
            "unit": "ns",
            "range": "± 180505.42135476577"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29538.46153846154,
            "unit": "ns",
            "range": "± 272.453242283459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9893323.076923076,
            "unit": "ns",
            "range": "± 64627.61476136645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24349586.666666668,
            "unit": "ns",
            "range": "± 177939.26277832905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60204300,
            "unit": "ns",
            "range": "± 305225.20725336095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126509080,
            "unit": "ns",
            "range": "± 874864.9881144926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240056133.33333334,
            "unit": "ns",
            "range": "± 844888.4750297491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3273331.505408654,
            "unit": "ns",
            "range": "± 2584.7747301522018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050585.2994791667,
            "unit": "ns",
            "range": "± 1909.688638812726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 720981.0337611607,
            "unit": "ns",
            "range": "± 828.1107980679772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1898129.1666666667,
            "unit": "ns",
            "range": "± 5362.996117703253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604034.47265625,
            "unit": "ns",
            "range": "± 418.11200025237923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571359.5052083334,
            "unit": "ns",
            "range": "± 1694.56470852353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2219351.8518518517,
            "unit": "ns",
            "range": "± 59209.915816982306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2224486.8421052634,
            "unit": "ns",
            "range": "± 69022.10543301926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2600968.9655172415,
            "unit": "ns",
            "range": "± 75904.8375244023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2250804.347826087,
            "unit": "ns",
            "range": "± 54880.137806784885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2810507.6923076925,
            "unit": "ns",
            "range": "± 27148.034352983446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170104.8780487805,
            "unit": "ns",
            "range": "± 6112.444323652862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159785.84905660377,
            "unit": "ns",
            "range": "± 6235.786741420063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145169.23076923078,
            "unit": "ns",
            "range": "± 1999.3268097806554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2837520,
            "unit": "ns",
            "range": "± 32513.78169330661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2381193.3333333335,
            "unit": "ns",
            "range": "± 38979.87514944945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9590.80459770115,
            "unit": "ns",
            "range": "± 860.4531234489383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49185.555555555555,
            "unit": "ns",
            "range": "± 3147.803268666454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43807.692307692305,
            "unit": "ns",
            "range": "± 558.9596563580393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45767.02127659575,
            "unit": "ns",
            "range": "± 7120.036672278885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2419.3548387096776,
            "unit": "ns",
            "range": "± 319.39414947819193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8855.056179775282,
            "unit": "ns",
            "range": "± 584.0709864926632"
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
          "id": "ff64ab6dc8fded54c56046a8ea97027e800e802a",
          "message": "WIP",
          "timestamp": "2024-08-14T18:05:34+09:00",
          "tree_id": "57f8a4bbae83c3ce0d0c30a968ffb67cb8de9bef",
          "url": "https://github.com/planetarium/libplanet/commit/ff64ab6dc8fded54c56046a8ea97027e800e802a"
        },
        "date": 1723627078120,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1031805.2083333334,
            "unit": "ns",
            "range": "± 112659.93111062546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1719791.8918918918,
            "unit": "ns",
            "range": "± 57207.382868425775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1530896.8421052631,
            "unit": "ns",
            "range": "± 104709.40177323548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6846931.818181818,
            "unit": "ns",
            "range": "± 251858.9396382171"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32646,
            "unit": "ns",
            "range": "± 5060.311404958346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9589953.333333334,
            "unit": "ns",
            "range": "± 82088.3310540426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24161714.285714287,
            "unit": "ns",
            "range": "± 82396.35780918827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57693250,
            "unit": "ns",
            "range": "± 219319.52717439458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118246600,
            "unit": "ns",
            "range": "± 550196.723259703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239581726.66666666,
            "unit": "ns",
            "range": "± 1168586.0469978647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3277575.2083333335,
            "unit": "ns",
            "range": "± 3302.092689953602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056229.8046875,
            "unit": "ns",
            "range": "± 1476.6633670462072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749869.921875,
            "unit": "ns",
            "range": "± 1258.063679267991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1992795.0892857143,
            "unit": "ns",
            "range": "± 2164.8369155117475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624800.9137834822,
            "unit": "ns",
            "range": "± 823.5640628150063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569081.0477120535,
            "unit": "ns",
            "range": "± 1071.0643668791265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2098968.4210526315,
            "unit": "ns",
            "range": "± 32728.12335713021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2207659.2592592593,
            "unit": "ns",
            "range": "± 60838.76079289267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2591931.25,
            "unit": "ns",
            "range": "± 37531.155391221306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2165371.4285714286,
            "unit": "ns",
            "range": "± 25053.09526620578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2834510,
            "unit": "ns",
            "range": "± 64073.46852185429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166856,
            "unit": "ns",
            "range": "± 5853.767668635932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157475.55555555556,
            "unit": "ns",
            "range": "± 5966.122372329968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142772,
            "unit": "ns",
            "range": "± 3720.721256244099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752478.5714285714,
            "unit": "ns",
            "range": "± 24904.808882914673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2490080,
            "unit": "ns",
            "range": "± 24987.7455680065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9280.232558139534,
            "unit": "ns",
            "range": "± 550.682948697633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49650,
            "unit": "ns",
            "range": "± 2555.9581526155857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43269.230769230766,
            "unit": "ns",
            "range": "± 1426.1013926738292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46393.93939393939,
            "unit": "ns",
            "range": "± 8071.173424308823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2168.3673469387754,
            "unit": "ns",
            "range": "± 401.18302858912193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8922.47191011236,
            "unit": "ns",
            "range": "± 578.3504774530525"
          }
        ]
      }
    ]
  }
}