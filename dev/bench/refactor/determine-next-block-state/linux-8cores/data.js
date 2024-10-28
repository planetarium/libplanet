window.BENCHMARK_DATA = {
  "lastUpdate": 1730105645986,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "de936b06196be9c33f60fc2577bb31097dd42c96",
          "message": "feat: execute states by condition",
          "timestamp": "2024-10-28T17:35:07+09:00",
          "tree_id": "533fa0dd1d522a54577c03fd8e0ff0df08b480e0",
          "url": "https://github.com/planetarium/libplanet/commit/de936b06196be9c33f60fc2577bb31097dd42c96"
        },
        "date": 1730105030960,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10880746.7,
            "unit": "ns",
            "range": "± 72024.38219916522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28278440.14285714,
            "unit": "ns",
            "range": "± 77857.60221945342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72394794.96666667,
            "unit": "ns",
            "range": "± 647812.981836013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143599438.06666666,
            "unit": "ns",
            "range": "± 680372.8365645735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300390124.71428573,
            "unit": "ns",
            "range": "± 1500346.4693957772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117943.22222222222,
            "unit": "ns",
            "range": "± 13806.27071264828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191676.94736842104,
            "unit": "ns",
            "range": "± 8325.161011787126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175153.05263157896,
            "unit": "ns",
            "range": "± 3488.6572946189835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3095713.933333333,
            "unit": "ns",
            "range": "± 42685.7913537425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785664.4,
            "unit": "ns",
            "range": "± 29280.396291229197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14645.551020408164,
            "unit": "ns",
            "range": "± 2565.8917146256413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71083.28571428571,
            "unit": "ns",
            "range": "± 6191.655717156233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49754.55882352941,
            "unit": "ns",
            "range": "± 878.2002526892882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60787.02040816326,
            "unit": "ns",
            "range": "± 11638.331518770907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2870.244680851064,
            "unit": "ns",
            "range": "± 410.61272563727664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13256.04255319149,
            "unit": "ns",
            "range": "± 1559.1165192987985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3786340.9197716345,
            "unit": "ns",
            "range": "± 6386.537814767433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205836.8865885416,
            "unit": "ns",
            "range": "± 2370.5280968960765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 785377.6737583706,
            "unit": "ns",
            "range": "± 1218.2896224793099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933196.8231026786,
            "unit": "ns",
            "range": "± 2226.5906986931464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633521.0754743303,
            "unit": "ns",
            "range": "± 815.3117805702886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578099.8812779018,
            "unit": "ns",
            "range": "± 633.397895206997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2415582.1333333333,
            "unit": "ns",
            "range": "± 35735.98086336328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2657540.8,
            "unit": "ns",
            "range": "± 47730.399711295104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3046045.966666667,
            "unit": "ns",
            "range": "± 48483.15094496624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2640576.466666667,
            "unit": "ns",
            "range": "± 46666.4995364014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3279322.076923077,
            "unit": "ns",
            "range": "± 30584.05808985442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992047.5444444445,
            "unit": "ns",
            "range": "± 56168.900076878104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1980622.5774647887,
            "unit": "ns",
            "range": "± 95783.5872941351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1597825.8977272727,
            "unit": "ns",
            "range": "± 87683.28522363945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7779580.310344827,
            "unit": "ns",
            "range": "± 225594.39436853788"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30545.347826086956,
            "unit": "ns",
            "range": "± 778.7992277565189"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "89bac0812464be1baa837fd089c9c2a391a9c632",
          "message": "feat: execute states by condition",
          "timestamp": "2024-10-28T17:43:11+09:00",
          "tree_id": "cf6f8daf6f072698a7ea7449249c868667161f81",
          "url": "https://github.com/planetarium/libplanet/commit/89bac0812464be1baa837fd089c9c2a391a9c632"
        },
        "date": 1730105619255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10991936.866666667,
            "unit": "ns",
            "range": "± 93470.7647066081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27899827.633333333,
            "unit": "ns",
            "range": "± 105873.06559195353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71155879.6,
            "unit": "ns",
            "range": "± 422827.5045150209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141962216.2142857,
            "unit": "ns",
            "range": "± 437552.42811900284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295079523.93333334,
            "unit": "ns",
            "range": "± 1068149.4404691872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 116638.82608695653,
            "unit": "ns",
            "range": "± 9915.435582091626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198990.68055555556,
            "unit": "ns",
            "range": "± 9821.438078956235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170156.125,
            "unit": "ns",
            "range": "± 4366.940206403604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2962428.5,
            "unit": "ns",
            "range": "± 21800.454207806466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2861634.846153846,
            "unit": "ns",
            "range": "± 35732.05504596247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14856.04255319149,
            "unit": "ns",
            "range": "± 1918.3097730206478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66046.19387755102,
            "unit": "ns",
            "range": "± 5998.768192554482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51505.40625,
            "unit": "ns",
            "range": "± 1561.8514005432887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60794.40206185567,
            "unit": "ns",
            "range": "± 10928.472270156475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2972.7291666666665,
            "unit": "ns",
            "range": "± 504.84502007868286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16943.3,
            "unit": "ns",
            "range": "± 1781.7065197365998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3704642.7971540177,
            "unit": "ns",
            "range": "± 4066.229729670368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205555.6688058036,
            "unit": "ns",
            "range": "± 970.6848673956976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772129.8254045759,
            "unit": "ns",
            "range": "± 1109.0433009617793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949357.1527622768,
            "unit": "ns",
            "range": "± 2196.628174893073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623908.6712740385,
            "unit": "ns",
            "range": "± 522.3607868374371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575134.3968331473,
            "unit": "ns",
            "range": "± 670.058247471772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2544132.3333333335,
            "unit": "ns",
            "range": "± 30331.95339587485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2575956.269230769,
            "unit": "ns",
            "range": "± 67809.79003687164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3065075.7333333334,
            "unit": "ns",
            "range": "± 52634.49729769395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2628448.4285714286,
            "unit": "ns",
            "range": "± 33449.80878343479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3333012.214285714,
            "unit": "ns",
            "range": "± 57914.28550244095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018001.2708333334,
            "unit": "ns",
            "range": "± 76179.16234101362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1933150.7857142857,
            "unit": "ns",
            "range": "± 54110.17122586507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1634599.9180327868,
            "unit": "ns",
            "range": "± 71666.7740026239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7656678.2272727275,
            "unit": "ns",
            "range": "± 109640.44437199598"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33172.31318681319,
            "unit": "ns",
            "range": "± 3242.6794747282956"
          }
        ]
      }
    ]
  }
}