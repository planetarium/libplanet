window.BENCHMARK_DATA = {
  "lastUpdate": 1733191913895,
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
          "id": "2d3e294dfbcacf5b2472b2cd0fee4d0bb9ec6c18",
          "message": "timeout 3",
          "timestamp": "2024-11-28T17:50:09+09:00",
          "tree_id": "7be3901dd8475bfc75dbd4bbba88c66d252776b2",
          "url": "https://github.com/planetarium/libplanet/commit/2d3e294dfbcacf5b2472b2cd0fee4d0bb9ec6c18"
        },
        "date": 1732784368052,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976865.9574468085,
            "unit": "ns",
            "range": "± 97643.91700238198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1749950.8196721312,
            "unit": "ns",
            "range": "± 77873.09895582432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1469688.1720430108,
            "unit": "ns",
            "range": "± 107251.49522567967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6711442.372881356,
            "unit": "ns",
            "range": "± 296892.984437264"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30592.708333333332,
            "unit": "ns",
            "range": "± 3543.303388578061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9749073.076923076,
            "unit": "ns",
            "range": "± 32662.622721957327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23483715.384615384,
            "unit": "ns",
            "range": "± 89913.56818406076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58784980,
            "unit": "ns",
            "range": "± 460545.1136580278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119984820,
            "unit": "ns",
            "range": "± 628229.6090716241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237656513.33333334,
            "unit": "ns",
            "range": "± 1182995.743783351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3258683.370535714,
            "unit": "ns",
            "range": "± 5555.712553492064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1035447.4308894231,
            "unit": "ns",
            "range": "± 1147.7018553774026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729957.2591145834,
            "unit": "ns",
            "range": "± 1234.5376080634658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952120.9635416667,
            "unit": "ns",
            "range": "± 5161.135012789829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625712.7734375,
            "unit": "ns",
            "range": "± 1228.895418276837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555273.5072544643,
            "unit": "ns",
            "range": "± 2177.608541481327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2167600,
            "unit": "ns",
            "range": "± 23063.359933638712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2293864.285714286,
            "unit": "ns",
            "range": "± 54730.90544273875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2784573.3333333335,
            "unit": "ns",
            "range": "± 79894.37826381101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2298393.3333333335,
            "unit": "ns",
            "range": "± 30036.89318789399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2960026.6666666665,
            "unit": "ns",
            "range": "± 54499.92747920033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89387.20930232559,
            "unit": "ns",
            "range": "± 4619.212983936904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162340.9638554217,
            "unit": "ns",
            "range": "± 8597.518589041929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148156.52173913043,
            "unit": "ns",
            "range": "± 3707.7101591826085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2591314.285714286,
            "unit": "ns",
            "range": "± 26798.61813724607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2463480,
            "unit": "ns",
            "range": "± 32313.977515266404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10186.59793814433,
            "unit": "ns",
            "range": "± 1673.0479213337073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50860.63829787234,
            "unit": "ns",
            "range": "± 4377.219082936434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43820,
            "unit": "ns",
            "range": "± 1383.0486359531124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52732.989690721646,
            "unit": "ns",
            "range": "± 9325.588918506755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2509.6774193548385,
            "unit": "ns",
            "range": "± 359.6690858725536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10216.304347826086,
            "unit": "ns",
            "range": "± 868.7843184984413"
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
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "c2a71cdfe40b93d4b13f98e1cb84202865647682",
          "message": "chore: increase timeout to 5",
          "timestamp": "2024-11-29T10:56:45+09:00",
          "tree_id": "7e98b53e32f9bf4ba868ba455b08a28621070e95",
          "url": "https://github.com/planetarium/libplanet/commit/c2a71cdfe40b93d4b13f98e1cb84202865647682"
        },
        "date": 1732846056413,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997682.2916666666,
            "unit": "ns",
            "range": "± 102383.54410825338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1790017.5438596492,
            "unit": "ns",
            "range": "± 74126.04642192488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1501910.8695652173,
            "unit": "ns",
            "range": "± 86779.2075877927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6468429.62962963,
            "unit": "ns",
            "range": "± 170207.59002965674"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34797.916666666664,
            "unit": "ns",
            "range": "± 4772.001216893714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9918115.384615384,
            "unit": "ns",
            "range": "± 100995.89798727674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24008714.285714287,
            "unit": "ns",
            "range": "± 206406.74130740706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61764628.571428575,
            "unit": "ns",
            "range": "± 347648.4396375419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118024180,
            "unit": "ns",
            "range": "± 492878.80747415265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237711935.7142857,
            "unit": "ns",
            "range": "± 1665786.287708805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3334239.3136160714,
            "unit": "ns",
            "range": "± 5922.496686274142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064357.2526041667,
            "unit": "ns",
            "range": "± 3196.2312754158534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736502.0638020834,
            "unit": "ns",
            "range": "± 1404.5975625826668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933401.8098958333,
            "unit": "ns",
            "range": "± 3056.9724193660877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619713.18359375,
            "unit": "ns",
            "range": "± 499.0026381326682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576061.0286458334,
            "unit": "ns",
            "range": "± 1580.822337421844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2106357.1428571427,
            "unit": "ns",
            "range": "± 34943.57461098402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2211758.8235294116,
            "unit": "ns",
            "range": "± 43380.944244327045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2684204.5454545454,
            "unit": "ns",
            "range": "± 42546.00565743625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2322125,
            "unit": "ns",
            "range": "± 44613.577903294565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2877492.8571428573,
            "unit": "ns",
            "range": "± 39342.841481318756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98571.42857142857,
            "unit": "ns",
            "range": "± 8906.617835623198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165042.85714285713,
            "unit": "ns",
            "range": "± 7595.896903564796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148559.18367346938,
            "unit": "ns",
            "range": "± 5498.519435847668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2673186.6666666665,
            "unit": "ns",
            "range": "± 49047.51146543911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2434850,
            "unit": "ns",
            "range": "± 33326.19090145167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12191.489361702128,
            "unit": "ns",
            "range": "± 1487.1246395087385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52706.593406593405,
            "unit": "ns",
            "range": "± 3340.419208482745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44176.74418604651,
            "unit": "ns",
            "range": "± 1421.2397688708809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57146.46464646464,
            "unit": "ns",
            "range": "± 14378.224132710966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2682.6530612244896,
            "unit": "ns",
            "range": "± 452.20547975269756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10773.333333333334,
            "unit": "ns",
            "range": "± 1207.4487915724058"
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
          "id": "f3c6dbf3e15df378ce7c300b117fe4b2ca82c20a",
          "message": "fix: Change graphtype of validatorPower",
          "timestamp": "2024-12-03T10:51:01+09:00",
          "tree_id": "c24f7aa510eb278b0a4d5d6104653f8dc35b36da",
          "url": "https://github.com/planetarium/libplanet/commit/f3c6dbf3e15df378ce7c300b117fe4b2ca82c20a"
        },
        "date": 1733191490192,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993230.5263157894,
            "unit": "ns",
            "range": "± 77099.18187286248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1815944.4444444445,
            "unit": "ns",
            "range": "± 85490.20022726744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1495322.3404255318,
            "unit": "ns",
            "range": "± 132519.25496469933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6454824.324324325,
            "unit": "ns",
            "range": "± 214970.48816240055"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28975,
            "unit": "ns",
            "range": "± 1159.5018087284059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10209385.714285715,
            "unit": "ns",
            "range": "± 90160.6076112798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24075440,
            "unit": "ns",
            "range": "± 320390.3931144003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59672478.571428575,
            "unit": "ns",
            "range": "± 294897.3541853071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117371607.14285715,
            "unit": "ns",
            "range": "± 552498.5199622164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238896640,
            "unit": "ns",
            "range": "± 1045747.0260877764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3355314.453125,
            "unit": "ns",
            "range": "± 9220.33356225428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069165.625,
            "unit": "ns",
            "range": "± 2202.5731619443573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733898.7760416666,
            "unit": "ns",
            "range": "± 1147.1982565655344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935719.53125,
            "unit": "ns",
            "range": "± 1345.0105984824472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615601.58203125,
            "unit": "ns",
            "range": "± 1204.6544267921922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569712.1809895834,
            "unit": "ns",
            "range": "± 2083.99791152786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2174150,
            "unit": "ns",
            "range": "± 32614.50159493035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2305575,
            "unit": "ns",
            "range": "± 51667.253958178844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2692773.6842105263,
            "unit": "ns",
            "range": "± 40540.44403233864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2319042.8571428573,
            "unit": "ns",
            "range": "± 30945.155313273794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2952411.7647058824,
            "unit": "ns",
            "range": "± 41101.80778191121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92462.33766233767,
            "unit": "ns",
            "range": "± 4330.644748431291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164004.9180327869,
            "unit": "ns",
            "range": "± 7275.860229313282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143763.88888888888,
            "unit": "ns",
            "range": "± 4737.700031376151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2629100,
            "unit": "ns",
            "range": "± 47451.56929513953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2535006.6666666665,
            "unit": "ns",
            "range": "± 39127.56548716494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10789.690721649484,
            "unit": "ns",
            "range": "± 1684.6416864377566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50602.5974025974,
            "unit": "ns",
            "range": "± 2582.6839378105765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43567.1875,
            "unit": "ns",
            "range": "± 1703.2233388676577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50298.969072164946,
            "unit": "ns",
            "range": "± 9698.29769046009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2450,
            "unit": "ns",
            "range": "± 330.33878267652165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9490.217391304348,
            "unit": "ns",
            "range": "± 1158.8228000397735"
          }
        ]
      }
    ]
  }
}