window.BENCHMARK_DATA = {
  "lastUpdate": 1698026247702,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "bcb549979a34e9f1afab9435f427aba162c2463a",
          "message": "Merge pull request #3418 from greymistcube/prepare/3.4.0\n\n🔧 Prepare 3.4.0",
          "timestamp": "2023-09-08T10:21:29+09:00",
          "tree_id": "d08370af5794578e62bc1c40dd2c906d7efde68b",
          "url": "https://github.com/planetarium/libplanet/commit/bcb549979a34e9f1afab9435f427aba162c2463a"
        },
        "date": 1698025858026,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1514760,
            "unit": "ns",
            "range": "± 151337.72654149221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2736521.4285714286,
            "unit": "ns",
            "range": "± 77926.4627574202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1907624.2424242424,
            "unit": "ns",
            "range": "± 178215.09481116597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4757552.94117647,
            "unit": "ns",
            "range": "± 227305.73793611777"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55050.51546391752,
            "unit": "ns",
            "range": "± 5587.096810795019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8086416.666666667,
            "unit": "ns",
            "range": "± 147984.57287678268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21818950,
            "unit": "ns",
            "range": "± 313203.49676307157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53750492.85714286,
            "unit": "ns",
            "range": "± 389677.2519846209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106904696.66666667,
            "unit": "ns",
            "range": "± 1343172.060495318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214101235.7142857,
            "unit": "ns",
            "range": "± 2378622.545025439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4697997.377232143,
            "unit": "ns",
            "range": "± 29818.183586807165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1448853.9322916667,
            "unit": "ns",
            "range": "± 5839.123794694957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082549.7786458333,
            "unit": "ns",
            "range": "± 12077.596470200058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2697075.2278645835,
            "unit": "ns",
            "range": "± 4441.215094988206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861364.7739955357,
            "unit": "ns",
            "range": "± 2656.9552803970364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768412.9732572115,
            "unit": "ns",
            "range": "± 3647.7693016034827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3490014.6341463416,
            "unit": "ns",
            "range": "± 124342.65068948713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3701158.620689655,
            "unit": "ns",
            "range": "± 102690.07991191394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4548606.666666667,
            "unit": "ns",
            "range": "± 74282.16923775629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4274686.666666667,
            "unit": "ns",
            "range": "± 67587.21208997483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6233180.645161291,
            "unit": "ns",
            "range": "± 178369.59834260776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279519.64285714284,
            "unit": "ns",
            "range": "± 11525.945745346684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274645.45454545453,
            "unit": "ns",
            "range": "± 12925.114870112158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271807.44680851063,
            "unit": "ns",
            "range": "± 15385.681371345929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4350100,
            "unit": "ns",
            "range": "± 28317.07376595729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4109064.285714286,
            "unit": "ns",
            "range": "± 27697.309148470253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30516.842105263157,
            "unit": "ns",
            "range": "± 2531.8252028492716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105540,
            "unit": "ns",
            "range": "± 8272.325048142611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99858,
            "unit": "ns",
            "range": "± 12635.321503426396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112890.8163265306,
            "unit": "ns",
            "range": "± 16102.39200220639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8514.583333333334,
            "unit": "ns",
            "range": "± 1298.4994713872554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25557.44680851064,
            "unit": "ns",
            "range": "± 2932.886917217105"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62b18225439af051a67d52760d028260f1e05e70",
          "message": "Merge branch 'main' into add-cjs-support",
          "timestamp": "2023-10-23T10:39:29+09:00",
          "tree_id": "09568e04755ba98b97acc51e92aa136ef1a5be0d",
          "url": "https://github.com/planetarium/libplanet/commit/62b18225439af051a67d52760d028260f1e05e70"
        },
        "date": 1698026145904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1274316.8421052631,
            "unit": "ns",
            "range": "± 103597.5022830344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2391775.5555555555,
            "unit": "ns",
            "range": "± 89594.97793239904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1880142.105263158,
            "unit": "ns",
            "range": "± 91151.60450320538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8827568.539325843,
            "unit": "ns",
            "range": "± 525792.4656682748"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49904.166666666664,
            "unit": "ns",
            "range": "± 3430.602729509685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7149850,
            "unit": "ns",
            "range": "± 77424.3054661976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20361113.333333332,
            "unit": "ns",
            "range": "± 314111.3129964933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50372107.14285714,
            "unit": "ns",
            "range": "± 803823.5593464773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100114060,
            "unit": "ns",
            "range": "± 932814.5258915545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196761169.23076922,
            "unit": "ns",
            "range": "± 1755607.1126463232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4605887.265625,
            "unit": "ns",
            "range": "± 21076.003532674767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1430694.0755208333,
            "unit": "ns",
            "range": "± 6416.74265196662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1053721.3541666667,
            "unit": "ns",
            "range": "± 3140.6539615614306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622967.109375,
            "unit": "ns",
            "range": "± 9355.920327697466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838645.5153245192,
            "unit": "ns",
            "range": "± 2442.047141941639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772991.8619791666,
            "unit": "ns",
            "range": "± 3268.9204127384583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3142295.1219512196,
            "unit": "ns",
            "range": "± 111222.50885324317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3323368.75,
            "unit": "ns",
            "range": "± 128538.36111937682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3968482.0512820515,
            "unit": "ns",
            "range": "± 138605.29698960372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3875993.8775510206,
            "unit": "ns",
            "range": "± 146296.04176714655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10272603.409090908,
            "unit": "ns",
            "range": "± 703180.4701969512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258044.44444444444,
            "unit": "ns",
            "range": "± 6362.813593481804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236340,
            "unit": "ns",
            "range": "± 11547.855773821086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208071.79487179487,
            "unit": "ns",
            "range": "± 6750.0857194537175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4015246.6666666665,
            "unit": "ns",
            "range": "± 70842.62101574836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3702756.5217391304,
            "unit": "ns",
            "range": "± 89724.36998480381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20117.021276595744,
            "unit": "ns",
            "range": "± 1712.4081199979496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84495.83333333333,
            "unit": "ns",
            "range": "± 7183.327431104345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69352.08333333333,
            "unit": "ns",
            "range": "± 2544.580355264334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78548.3870967742,
            "unit": "ns",
            "range": "± 7666.380769919853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4881.443298969072,
            "unit": "ns",
            "range": "± 525.4620777839284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18169.473684210527,
            "unit": "ns",
            "range": "± 1465.8577972460084"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "8ba410942864b26987a6a6745a77f65b18f05d6b",
          "message": "add conditional exports to support cjs",
          "timestamp": "2023-10-23T10:34:47+09:00",
          "tree_id": "7a258ff201260e1e5d6b8bef08db48450bc33a94",
          "url": "https://github.com/planetarium/libplanet/commit/8ba410942864b26987a6a6745a77f65b18f05d6b"
        },
        "date": 1698026162256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1769202.1276595744,
            "unit": "ns",
            "range": "± 178747.25051120887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3285827.380952381,
            "unit": "ns",
            "range": "± 278660.74997853587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2219520.8333333335,
            "unit": "ns",
            "range": "± 229662.37366445767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5904464.044943821,
            "unit": "ns",
            "range": "± 342462.7522039279"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62032.608695652176,
            "unit": "ns",
            "range": "± 10805.25013512232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9654363.541666666,
            "unit": "ns",
            "range": "± 694729.7899743834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25936915.094339624,
            "unit": "ns",
            "range": "± 1077060.2712219509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67239428,
            "unit": "ns",
            "range": "± 1754791.5504222526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134529909.52380952,
            "unit": "ns",
            "range": "± 3117162.9889861005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273581145.8333333,
            "unit": "ns",
            "range": "± 6975490.598235284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5750916.646634615,
            "unit": "ns",
            "range": "± 71858.67442562795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1797722.94921875,
            "unit": "ns",
            "range": "± 20939.145627683687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1316670.1590401786,
            "unit": "ns",
            "range": "± 17057.05311755182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3281167.8385416665,
            "unit": "ns",
            "range": "± 46680.82588753731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1103433.30078125,
            "unit": "ns",
            "range": "± 18990.380819755257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1029820.4427083334,
            "unit": "ns",
            "range": "± 19249.97729803196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3919161.290322581,
            "unit": "ns",
            "range": "± 302084.49330273335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4181626.3157894737,
            "unit": "ns",
            "range": "± 374128.53497573634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5404888.135593221,
            "unit": "ns",
            "range": "± 237314.97917233864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4764725.862068965,
            "unit": "ns",
            "range": "± 208372.71225896175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7753526.0869565215,
            "unit": "ns",
            "range": "± 365979.8381830914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325800,
            "unit": "ns",
            "range": "± 37617.31963925799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309631.52173913043,
            "unit": "ns",
            "range": "± 37065.83370744672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281215.306122449,
            "unit": "ns",
            "range": "± 32785.901395534245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4993785.555555556,
            "unit": "ns",
            "range": "± 277244.4715048886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4550141.111111111,
            "unit": "ns",
            "range": "± 355511.9618697231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25241.666666666668,
            "unit": "ns",
            "range": "± 7043.8277074279595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107265.625,
            "unit": "ns",
            "range": "± 16148.826440170098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120678.42105263157,
            "unit": "ns",
            "range": "± 18466.989889137578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121312.63157894737,
            "unit": "ns",
            "range": "± 20566.266751831812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8910,
            "unit": "ns",
            "range": "± 1484.3793391420909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22226.08695652174,
            "unit": "ns",
            "range": "± 4655.491134847234"
          }
        ]
      }
    ]
  }
}