window.BENCHMARK_DATA = {
  "lastUpdate": 1721726932982,
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
          "id": "465171f774506f2ff13ccdacfe2262db6385f6ab",
          "message": "Prepare 5.3.",
          "timestamp": "2024-07-23T17:32:08+09:00",
          "tree_id": "7a6d3f72a275c5a24f37cd9fa89e57ad8ebff2ee",
          "url": "https://github.com/planetarium/libplanet/commit/465171f774506f2ff13ccdacfe2262db6385f6ab"
        },
        "date": 1721725755193,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10924838.8125,
            "unit": "ns",
            "range": "± 206613.2359820215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26418279.85714286,
            "unit": "ns",
            "range": "± 194338.7258650798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67420121.78571428,
            "unit": "ns",
            "range": "± 96625.2132975483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135752073.36666667,
            "unit": "ns",
            "range": "± 236872.13774851692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272437483.73333335,
            "unit": "ns",
            "range": "± 359762.27748899226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14237.3125,
            "unit": "ns",
            "range": "± 268.61067706502905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111177.41176470589,
            "unit": "ns",
            "range": "± 3410.9422950943426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107192.93617021276,
            "unit": "ns",
            "range": "± 4138.097769266828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91573.975,
            "unit": "ns",
            "range": "± 3226.634405863572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2995852.0918367347,
            "unit": "ns",
            "range": "± 184583.10761588073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2714415.9,
            "unit": "ns",
            "range": "± 164877.4743696517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5159.888888888889,
            "unit": "ns",
            "range": "± 536.81416541459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26508.7,
            "unit": "ns",
            "range": "± 1472.5346141560271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22429.515789473684,
            "unit": "ns",
            "range": "± 1360.4827980893315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30159.989583333332,
            "unit": "ns",
            "range": "± 5025.710380778951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1276.375,
            "unit": "ns",
            "range": "± 252.91905299605455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4800.144444444444,
            "unit": "ns",
            "range": "± 643.0540816564973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 705053.3369565217,
            "unit": "ns",
            "range": "± 67759.04921444553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1258602.9285714286,
            "unit": "ns",
            "range": "± 40427.79548360095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1066984.8157894737,
            "unit": "ns",
            "range": "± 52629.85891518502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9572935.79,
            "unit": "ns",
            "range": "± 1264303.602723859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2175426.6153846155,
            "unit": "ns",
            "range": "± 30266.59088703379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2292628.914893617,
            "unit": "ns",
            "range": "± 88319.34602679808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2564304.1923076925,
            "unit": "ns",
            "range": "± 28442.646347180304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2331032.1960784313,
            "unit": "ns",
            "range": "± 94425.25277742594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3030828.3924050634,
            "unit": "ns",
            "range": "± 156986.4122591031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3021034.101302083,
            "unit": "ns",
            "range": "± 53063.678754297034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 914737.2888671875,
            "unit": "ns",
            "range": "± 4170.183625166161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616541.5635416667,
            "unit": "ns",
            "range": "± 5441.099273888918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1648884.0216145834,
            "unit": "ns",
            "range": "± 22369.619448346115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464362.0998128255,
            "unit": "ns",
            "range": "± 543.3722532098468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425361.18974609376,
            "unit": "ns",
            "range": "± 1642.4306200497206"
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
          "id": "18e103e5388a86b2bde5c71d711f10ad2fefa365",
          "message": "Prepare 5.3.0",
          "timestamp": "2024-07-23T18:05:55+09:00",
          "tree_id": "06964644adf84a6643248469a906bd69e944df2b",
          "url": "https://github.com/planetarium/libplanet/commit/18e103e5388a86b2bde5c71d711f10ad2fefa365"
        },
        "date": 1721726864184,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10746077.07142857,
            "unit": "ns",
            "range": "± 99401.6493737668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26771157.214285713,
            "unit": "ns",
            "range": "± 236070.10074818507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67230836.46666667,
            "unit": "ns",
            "range": "± 121010.59004712102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136747577.7142857,
            "unit": "ns",
            "range": "± 300349.82449660735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272793339.71428573,
            "unit": "ns",
            "range": "± 1050225.068027906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14179.123076923077,
            "unit": "ns",
            "range": "± 636.3514041906285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110254.67346938775,
            "unit": "ns",
            "range": "± 4302.246198149264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105270.1836734694,
            "unit": "ns",
            "range": "± 3847.858553108195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93207.98412698413,
            "unit": "ns",
            "range": "± 4126.941562590184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3069729.7746478873,
            "unit": "ns",
            "range": "± 149157.38281562072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2776407.2578947367,
            "unit": "ns",
            "range": "± 159311.11565315686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5030.663043478261,
            "unit": "ns",
            "range": "± 636.1152752877199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26802.184782608696,
            "unit": "ns",
            "range": "± 1801.3700947410625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23073.97894736842,
            "unit": "ns",
            "range": "± 1878.0346221795974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31574.8125,
            "unit": "ns",
            "range": "± 5917.368782815729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1010.8651685393259,
            "unit": "ns",
            "range": "± 160.7055601665268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4551.3707865168535,
            "unit": "ns",
            "range": "± 473.9729178593932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 682686.8977272727,
            "unit": "ns",
            "range": "± 38852.953088266986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1288133.95,
            "unit": "ns",
            "range": "± 54554.07332689998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1076314.809859155,
            "unit": "ns",
            "range": "± 52486.38326722508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9478753.04,
            "unit": "ns",
            "range": "± 1434999.010254309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166518.3913043477,
            "unit": "ns",
            "range": "± 75902.9738484829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2300396.736111111,
            "unit": "ns",
            "range": "± 113626.5499039297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2608047.0714285714,
            "unit": "ns",
            "range": "± 43586.16643891339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2310195.6,
            "unit": "ns",
            "range": "± 43392.50097521703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2991489.7966101696,
            "unit": "ns",
            "range": "± 132480.75485971276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3029409.06875,
            "unit": "ns",
            "range": "± 33245.25066582244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924358.73984375,
            "unit": "ns",
            "range": "± 5148.429975104181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615928.151953125,
            "unit": "ns",
            "range": "± 5739.243726421631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1661767.3454427083,
            "unit": "ns",
            "range": "± 16487.961797384258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 470223.4088657924,
            "unit": "ns",
            "range": "± 695.40163553377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425648.3504557292,
            "unit": "ns",
            "range": "± 763.9154207390673"
          }
        ]
      }
    ]
  }
}