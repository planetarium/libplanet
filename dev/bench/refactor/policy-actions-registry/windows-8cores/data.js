window.BENCHMARK_DATA = {
  "lastUpdate": 1721714812125,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8053f33d7bb292d213f39e885ef8297124d50d37",
          "message": "Merge pull request #3890 from moreal/typo\n\nfix: correct typo",
          "timestamp": "2024-07-22T19:18:38+09:00",
          "tree_id": "2ab0f141ccb89446592e1f1d7f70c2db6d7b9b69",
          "url": "https://github.com/planetarium/libplanet/commit/8053f33d7bb292d213f39e885ef8297124d50d37"
        },
        "date": 1721714253198,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008936.7346938775,
            "unit": "ns",
            "range": "± 101093.11379747432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1726934,
            "unit": "ns",
            "range": "± 64453.02231636842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1558475.5319148935,
            "unit": "ns",
            "range": "± 124223.59712650151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6832934.375,
            "unit": "ns",
            "range": "± 205878.19701476014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29980.76923076923,
            "unit": "ns",
            "range": "± 820.2532441968057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9392473.333333334,
            "unit": "ns",
            "range": "± 105280.26179588234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23229542.85714286,
            "unit": "ns",
            "range": "± 168215.33230350324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57956740,
            "unit": "ns",
            "range": "± 236543.22709753134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116036463.33333333,
            "unit": "ns",
            "range": "± 383245.2121901416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228879771.42857143,
            "unit": "ns",
            "range": "± 732502.668337037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3309124.5833333335,
            "unit": "ns",
            "range": "± 6283.09525937283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077745.01953125,
            "unit": "ns",
            "range": "± 3324.1932397115456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730838.8253348215,
            "unit": "ns",
            "range": "± 1549.6439322295944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924660.8816964286,
            "unit": "ns",
            "range": "± 2342.383121835788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625796.5625,
            "unit": "ns",
            "range": "± 2189.0173795120063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568732.2135416666,
            "unit": "ns",
            "range": "± 1833.7558936761347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2088670,
            "unit": "ns",
            "range": "± 43812.0684837818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2202601.282051282,
            "unit": "ns",
            "range": "± 62975.307908797295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2689752.1739130435,
            "unit": "ns",
            "range": "± 67830.68405673603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2256068.9655172415,
            "unit": "ns",
            "range": "± 65007.44519695019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2898081.25,
            "unit": "ns",
            "range": "± 55095.374503370665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173096.61016949153,
            "unit": "ns",
            "range": "± 6934.818847587896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167118.5185185185,
            "unit": "ns",
            "range": "± 6918.694229352331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145005.26315789475,
            "unit": "ns",
            "range": "± 3103.666950239941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2724580,
            "unit": "ns",
            "range": "± 38966.36278344989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2515780,
            "unit": "ns",
            "range": "± 55297.50256090852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10326.595744680852,
            "unit": "ns",
            "range": "± 1296.8261945636464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50012.64367816092,
            "unit": "ns",
            "range": "± 2674.287759894435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43597.95918367347,
            "unit": "ns",
            "range": "± 1700.182563226467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51396.907216494845,
            "unit": "ns",
            "range": "± 10205.31370586184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2291.3978494623657,
            "unit": "ns",
            "range": "± 340.6055713177873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9334.09090909091,
            "unit": "ns",
            "range": "± 839.5245457429527"
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
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "ec0e423fbfa7471468c273a238a16b1a401114af",
          "message": "Changelog",
          "timestamp": "2024-07-23T14:51:55+09:00",
          "tree_id": "56761a57c2aed7be3372f933d598112818fcc5cb",
          "url": "https://github.com/planetarium/libplanet/commit/ec0e423fbfa7471468c273a238a16b1a401114af"
        },
        "date": 1721714507218,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979806.25,
            "unit": "ns",
            "range": "± 95905.18542865793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1729756.25,
            "unit": "ns",
            "range": "± 67754.01976376705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1505505.6179775281,
            "unit": "ns",
            "range": "± 97158.1856369369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6792459.259259259,
            "unit": "ns",
            "range": "± 188400.3087929432"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29392.30769230769,
            "unit": "ns",
            "range": "± 394.67610868816314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9455014.285714285,
            "unit": "ns",
            "range": "± 76807.1196333623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23518066.666666668,
            "unit": "ns",
            "range": "± 156316.87902036257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59214707.14285714,
            "unit": "ns",
            "range": "± 495270.5266421974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115988657.14285715,
            "unit": "ns",
            "range": "± 521317.63787583436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235763400,
            "unit": "ns",
            "range": "± 1017387.0235629536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3337246.77734375,
            "unit": "ns",
            "range": "± 4619.693420893928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058412.9166666667,
            "unit": "ns",
            "range": "± 2102.418890709864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737699.4856770834,
            "unit": "ns",
            "range": "± 2270.8791067460556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917883.7369791667,
            "unit": "ns",
            "range": "± 2379.1477112837733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619062.0182291666,
            "unit": "ns",
            "range": "± 2904.618376843538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 547046.9401041666,
            "unit": "ns",
            "range": "± 725.6323407290282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156908.3333333335,
            "unit": "ns",
            "range": "± 54621.551063474115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2205840,
            "unit": "ns",
            "range": "± 50555.393277806514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2656757.6923076925,
            "unit": "ns",
            "range": "± 72695.0571803994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2223346.4285714286,
            "unit": "ns",
            "range": "± 46712.89362924257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2889910.5263157897,
            "unit": "ns",
            "range": "± 63005.52792975869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169961.11111111112,
            "unit": "ns",
            "range": "± 6673.69990636765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163587.80487804877,
            "unit": "ns",
            "range": "± 5857.866297635652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144958.33333333334,
            "unit": "ns",
            "range": "± 2186.9274142393283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2687606.6666666665,
            "unit": "ns",
            "range": "± 34806.8438809436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2500700,
            "unit": "ns",
            "range": "± 27642.35879949466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9342.045454545454,
            "unit": "ns",
            "range": "± 530.1748986867375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50453.260869565216,
            "unit": "ns",
            "range": "± 2914.1734389528247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44479.41176470588,
            "unit": "ns",
            "range": "± 1276.5434892150747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46728.125,
            "unit": "ns",
            "range": "± 6951.072664287903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2194.318181818182,
            "unit": "ns",
            "range": "± 231.6149969066306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9240,
            "unit": "ns",
            "range": "± 611.463523400569"
          }
        ]
      }
    ]
  }
}