window.BENCHMARK_DATA = {
  "lastUpdate": 1734413483945,
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
          "id": "cbd535232b827f1e7dd367a5063a2aded938fdd3",
          "message": "fix: Change graphtype of validatorPower",
          "timestamp": "2024-12-03T13:20:46+09:00",
          "tree_id": "21a688deb1323f3cf043e9fa18a7001fc535e5a7",
          "url": "https://github.com/planetarium/libplanet/commit/cbd535232b827f1e7dd367a5063a2aded938fdd3"
        },
        "date": 1733200192735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966873.1958762887,
            "unit": "ns",
            "range": "± 102328.51052234488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1769608.9285714286,
            "unit": "ns",
            "range": "± 75903.53274036414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1467925.2747252746,
            "unit": "ns",
            "range": "± 96696.54548972216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6629729.545454546,
            "unit": "ns",
            "range": "± 244737.9334788735"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31266.666666666668,
            "unit": "ns",
            "range": "± 4292.8987399933785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9636764.285714285,
            "unit": "ns",
            "range": "± 166150.6064117402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24188640,
            "unit": "ns",
            "range": "± 201701.8124431636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58564213.333333336,
            "unit": "ns",
            "range": "± 264861.4593833287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118314564.28571428,
            "unit": "ns",
            "range": "± 573576.3735708449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233442626.66666666,
            "unit": "ns",
            "range": "± 1175637.8022568168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3250466.0714285714,
            "unit": "ns",
            "range": "± 2740.165344326338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050502.7994791667,
            "unit": "ns",
            "range": "± 1581.3780302159003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 720501.66015625,
            "unit": "ns",
            "range": "± 1320.060228381546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957365.0520833333,
            "unit": "ns",
            "range": "± 3540.6190830762143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607466.6922433035,
            "unit": "ns",
            "range": "± 820.5304389624109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554597.5376674107,
            "unit": "ns",
            "range": "± 829.9344007171896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185309.090909091,
            "unit": "ns",
            "range": "± 38104.74172581861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2289826.6666666665,
            "unit": "ns",
            "range": "± 31860.4427075929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2722128.5714285714,
            "unit": "ns",
            "range": "± 33568.83693527098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2329076.923076923,
            "unit": "ns",
            "range": "± 18730.863739033935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2917620,
            "unit": "ns",
            "range": "± 49231.99018060165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93594.31818181818,
            "unit": "ns",
            "range": "± 7123.449344542524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161877.08333333334,
            "unit": "ns",
            "range": "± 4909.922198254041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145586.95652173914,
            "unit": "ns",
            "range": "± 3507.563820170514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2695500,
            "unit": "ns",
            "range": "± 33611.3076210968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2550427.777777778,
            "unit": "ns",
            "range": "± 52839.13217388122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9773.033707865168,
            "unit": "ns",
            "range": "± 783.8952917299114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50242.857142857145,
            "unit": "ns",
            "range": "± 2799.5294389173832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43464.28571428572,
            "unit": "ns",
            "range": "± 773.2122236858021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52363.26530612245,
            "unit": "ns",
            "range": "± 10052.95656111219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2223.404255319149,
            "unit": "ns",
            "range": "± 257.95954167851187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9622.58064516129,
            "unit": "ns",
            "range": "± 950.9867909586546"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f80d526b4fed53fcf98be3d097d3e17b0fd39fea",
          "message": "Merge pull request #4007 from planetarium/feature/delayed-consensus\n\nDelayed consensus step transition",
          "timestamp": "2024-12-12T21:09:39+09:00",
          "tree_id": "1f2efb8a4accea2eb651d5d0a537ef47eaec92e6",
          "url": "https://github.com/planetarium/libplanet/commit/f80d526b4fed53fcf98be3d097d3e17b0fd39fea"
        },
        "date": 1734005919731,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961032.6086956522,
            "unit": "ns",
            "range": "± 86270.23617831808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1740391.0714285714,
            "unit": "ns",
            "range": "± 66884.63684661745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1461518.2795698924,
            "unit": "ns",
            "range": "± 106125.5746604368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6652439.534883721,
            "unit": "ns",
            "range": "± 222111.44150492916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35030.927835051545,
            "unit": "ns",
            "range": "± 4077.5901999205325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9546961.538461538,
            "unit": "ns",
            "range": "± 95588.55003312843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23219806.666666668,
            "unit": "ns",
            "range": "± 185487.14420861268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59393684.615384616,
            "unit": "ns",
            "range": "± 610558.0505381312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118320514.28571428,
            "unit": "ns",
            "range": "± 725323.6899239093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238093864.2857143,
            "unit": "ns",
            "range": "± 1538790.5779725658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3306217.0572916665,
            "unit": "ns",
            "range": "± 12632.870569631237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046392.3567708334,
            "unit": "ns",
            "range": "± 2699.6843969648035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744748.8506610577,
            "unit": "ns",
            "range": "± 1155.912140399442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1984001.171875,
            "unit": "ns",
            "range": "± 5218.466396539125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620479.2340959822,
            "unit": "ns",
            "range": "± 1002.7290318588076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554241.1283052885,
            "unit": "ns",
            "range": "± 371.0328829908935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2233553.846153846,
            "unit": "ns",
            "range": "± 17990.07204842972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2287324.193548387,
            "unit": "ns",
            "range": "± 60666.17381342992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2739805.263157895,
            "unit": "ns",
            "range": "± 57868.23609319721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2365000,
            "unit": "ns",
            "range": "± 30265.16148973932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2948040,
            "unit": "ns",
            "range": "± 37217.84902052086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89150,
            "unit": "ns",
            "range": "± 4358.220337137885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163377.77777777778,
            "unit": "ns",
            "range": "± 5778.089055329031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145425,
            "unit": "ns",
            "range": "± 4038.392144295934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2640646.153846154,
            "unit": "ns",
            "range": "± 38844.72541166552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2535834.210526316,
            "unit": "ns",
            "range": "± 55792.51506109134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11149.484536082475,
            "unit": "ns",
            "range": "± 1461.5291443767187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50778.260869565216,
            "unit": "ns",
            "range": "± 3750.5260022877587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43847.142857142855,
            "unit": "ns",
            "range": "± 921.4712386707894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52076.92307692308,
            "unit": "ns",
            "range": "± 7519.442605274481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2631.25,
            "unit": "ns",
            "range": "± 554.0876806920876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10182.105263157895,
            "unit": "ns",
            "range": "± 1298.1966991380218"
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
          "id": "d176fe70fd9eb51970e4c8f704a8d7364e326408",
          "message": "temp: remove static validator from NetMQTransport",
          "timestamp": "2024-12-17T14:20:58+09:00",
          "tree_id": "4635574b8873c312aa51eb4fabaf2ef2cc9f9690",
          "url": "https://github.com/planetarium/libplanet/commit/d176fe70fd9eb51970e4c8f704a8d7364e326408"
        },
        "date": 1734413411170,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 936406.4516129033,
            "unit": "ns",
            "range": "± 81592.1335808305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1701469.387755102,
            "unit": "ns",
            "range": "± 66841.3363997211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1476858.6956521738,
            "unit": "ns",
            "range": "± 111209.2900224211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6635737.142857143,
            "unit": "ns",
            "range": "± 187490.6195076472"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30674,
            "unit": "ns",
            "range": "± 4695.056932131877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9730546.666666666,
            "unit": "ns",
            "range": "± 72956.00304945701"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23906573.333333332,
            "unit": "ns",
            "range": "± 171319.11521513073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58538730,
            "unit": "ns",
            "range": "± 780279.1974671631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118255333.33333333,
            "unit": "ns",
            "range": "± 590975.5949356317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239848026.66666666,
            "unit": "ns",
            "range": "± 1074677.67225252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3245985.1004464286,
            "unit": "ns",
            "range": "± 4423.655161723013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1044003.7806919643,
            "unit": "ns",
            "range": "± 2260.406946956058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 721671.3541666666,
            "unit": "ns",
            "range": "± 1673.2013987848356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931435.8333333333,
            "unit": "ns",
            "range": "± 5690.031067711273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604718.0208333334,
            "unit": "ns",
            "range": "± 1061.493250050941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563794.84375,
            "unit": "ns",
            "range": "± 1874.9028550186533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2170162.962962963,
            "unit": "ns",
            "range": "± 42878.78396083679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2281433.3333333335,
            "unit": "ns",
            "range": "± 73262.302122447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2751923.076923077,
            "unit": "ns",
            "range": "± 73601.00166542469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2440405.882352941,
            "unit": "ns",
            "range": "± 49346.56105784165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2946792.8571428573,
            "unit": "ns",
            "range": "± 23471.012048767872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92740.206185567,
            "unit": "ns",
            "range": "± 11353.144386338292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159508.92857142858,
            "unit": "ns",
            "range": "± 6714.794433615542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145337.5,
            "unit": "ns",
            "range": "± 3747.557175362198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2546269.230769231,
            "unit": "ns",
            "range": "± 16068.259842278327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2449078.5714285714,
            "unit": "ns",
            "range": "± 33510.8060314747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9701.098901098901,
            "unit": "ns",
            "range": "± 1113.203036836049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49394.565217391304,
            "unit": "ns",
            "range": "± 3514.002261922843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42364.10256410256,
            "unit": "ns",
            "range": "± 1452.8533050676124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48306.18556701031,
            "unit": "ns",
            "range": "± 8833.91681759604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2365.625,
            "unit": "ns",
            "range": "± 357.5731430512909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9822.916666666666,
            "unit": "ns",
            "range": "± 1331.1237173445572"
          }
        ]
      }
    ]
  }
}