window.BENCHMARK_DATA = {
  "lastUpdate": 1698647704279,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d56d40c30e4db85f0457a8bf11671ba68e697bb",
          "message": "Merge pull request #3465 from OnedgeLee/prepare/4.0.0\n\n🔧 Prepare 4.0.0",
          "timestamp": "2023-10-30T15:01:50+09:00",
          "tree_id": "36a091534bd95b64bbd71255b59a5ba272bccca5",
          "url": "https://github.com/planetarium/libplanet/commit/6d56d40c30e4db85f0457a8bf11671ba68e697bb"
        },
        "date": 1698646854317,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48700.8313253012,
            "unit": "ns",
            "range": "± 2488.5008995978765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5167262.314732143,
            "unit": "ns",
            "range": "± 27941.860186903155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1612533.2713541666,
            "unit": "ns",
            "range": "± 5448.618670346911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1131264.370703125,
            "unit": "ns",
            "range": "± 2564.0134310320836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613869.6479166667,
            "unit": "ns",
            "range": "± 5714.002517904665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825712.0377604166,
            "unit": "ns",
            "range": "± 2377.664567438122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736887.6233258928,
            "unit": "ns",
            "range": "± 1102.080145598872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8018092.666666667,
            "unit": "ns",
            "range": "± 45341.11310004988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21786578.666666668,
            "unit": "ns",
            "range": "± 271494.221497482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54567723.941176474,
            "unit": "ns",
            "range": "± 1064483.2801554159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109770387.26666667,
            "unit": "ns",
            "range": "± 1228957.3636178914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215108210.66666666,
            "unit": "ns",
            "range": "± 3072991.5889535225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3351489.6842105263,
            "unit": "ns",
            "range": "± 105202.69179941893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3517822.512820513,
            "unit": "ns",
            "range": "± 121634.41670169537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4285676.714285715,
            "unit": "ns",
            "range": "± 139632.07121123534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4295659.025,
            "unit": "ns",
            "range": "± 151195.79128477792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10458481.945945946,
            "unit": "ns",
            "range": "± 334088.8438625891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268604.5348837209,
            "unit": "ns",
            "range": "± 9081.626415458006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257970.25,
            "unit": "ns",
            "range": "± 9582.509376948312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227772.625,
            "unit": "ns",
            "range": "± 4372.244669503298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4345792.6,
            "unit": "ns",
            "range": "± 59387.07868094829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3926913,
            "unit": "ns",
            "range": "± 73301.90072374853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18643.44210526316,
            "unit": "ns",
            "range": "± 1385.5037544256008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83319.96907216495,
            "unit": "ns",
            "range": "± 4914.801556806084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71289.73076923077,
            "unit": "ns",
            "range": "± 1940.7112625569482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81391.98969072165,
            "unit": "ns",
            "range": "± 10008.018738632001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4860.917525773196,
            "unit": "ns",
            "range": "± 468.71107994209075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18396.494505494506,
            "unit": "ns",
            "range": "± 1093.0391512112392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357186.9879518072,
            "unit": "ns",
            "range": "± 71966.8525185497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2663688.1960784313,
            "unit": "ns",
            "range": "± 108009.10877403249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1997457.7692307692,
            "unit": "ns",
            "range": "± 66025.19279362913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9323680.855555555,
            "unit": "ns",
            "range": "± 543272.7369104697"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "a48f1d49507f0c4dda2dcd2f556edac891741821",
          "message": "Add composite action concat_files",
          "timestamp": "2023-10-30T15:07:16+09:00",
          "tree_id": "5591ecb16689f52cc4ee99ff55a9ff64db3f1fb1",
          "url": "https://github.com/planetarium/libplanet/commit/a48f1d49507f0c4dda2dcd2f556edac891741821"
        },
        "date": 1698646879955,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50484.591397849465,
            "unit": "ns",
            "range": "± 3128.1672514379215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5361803.7890625,
            "unit": "ns",
            "range": "± 11434.076831274266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1622948.2520833334,
            "unit": "ns",
            "range": "± 3922.4563198534074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156525.3246372768,
            "unit": "ns",
            "range": "± 618.597008248729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611158.624441964,
            "unit": "ns",
            "range": "± 1403.0854633819868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827542.3510366586,
            "unit": "ns",
            "range": "± 846.9785168244059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758607.9761117789,
            "unit": "ns",
            "range": "± 157.5659338733743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8021738.428571428,
            "unit": "ns",
            "range": "± 82279.5954663724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22453384.785714287,
            "unit": "ns",
            "range": "± 218592.22105772785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56901947.416666664,
            "unit": "ns",
            "range": "± 227019.12062701932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113560424.35714285,
            "unit": "ns",
            "range": "± 1010561.5435961721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228566037.4,
            "unit": "ns",
            "range": "± 1926122.001768461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3500558.9565217393,
            "unit": "ns",
            "range": "± 133473.89616033647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3707497.111111111,
            "unit": "ns",
            "range": "± 79327.40391336393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4476767.708333333,
            "unit": "ns",
            "range": "± 94242.33282963713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4441976.947368421,
            "unit": "ns",
            "range": "± 90432.21881637447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10670604.088235294,
            "unit": "ns",
            "range": "± 293610.79524208396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280066.40625,
            "unit": "ns",
            "range": "± 8617.024367997885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263413.23333333334,
            "unit": "ns",
            "range": "± 7802.739716382264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236390.16216216216,
            "unit": "ns",
            "range": "± 8018.149476564311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4378932.466666667,
            "unit": "ns",
            "range": "± 59112.67880783357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4069877.3333333335,
            "unit": "ns",
            "range": "± 59473.32904236111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20011.635416666668,
            "unit": "ns",
            "range": "± 1696.2739979750147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86960.44086021505,
            "unit": "ns",
            "range": "± 5721.031792510945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76196.45833333333,
            "unit": "ns",
            "range": "± 1942.9036311478592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87803.07142857143,
            "unit": "ns",
            "range": "± 10067.411340455807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5389.729166666667,
            "unit": "ns",
            "range": "± 682.5315644008772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20349.266666666666,
            "unit": "ns",
            "range": "± 1562.9329444234147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1392799.3,
            "unit": "ns",
            "range": "± 75329.68292829546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2703950.2285714285,
            "unit": "ns",
            "range": "± 81095.10067854819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2079217.3125,
            "unit": "ns",
            "range": "± 95982.32780807282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9333653.609375,
            "unit": "ns",
            "range": "± 428453.97686008905"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "b1cf3d9c80e68ec7c295ef4e5e09d0d386111a12",
          "message": "Add composite action ulimit",
          "timestamp": "2023-10-30T15:07:21+09:00",
          "tree_id": "37e3af5bb831e4144ee928c604da5e75f4539f08",
          "url": "https://github.com/planetarium/libplanet/commit/b1cf3d9c80e68ec7c295ef4e5e09d0d386111a12"
        },
        "date": 1698646889129,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51030.967741935485,
            "unit": "ns",
            "range": "± 2988.0561059702954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5201207.961538462,
            "unit": "ns",
            "range": "± 11649.022865189992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1632009.5205729166,
            "unit": "ns",
            "range": "± 5664.868334669297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149170.3310546875,
            "unit": "ns",
            "range": "± 2444.218206237742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629629.956770833,
            "unit": "ns",
            "range": "± 4418.789839267597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823503.8956473215,
            "unit": "ns",
            "range": "± 1092.5427015334371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751423.120703125,
            "unit": "ns",
            "range": "± 879.6538306259503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8189840.05882353,
            "unit": "ns",
            "range": "± 136461.54623714997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21972207.533333335,
            "unit": "ns",
            "range": "± 345728.4676695337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54654346,
            "unit": "ns",
            "range": "± 794220.1738406225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110888234.33333333,
            "unit": "ns",
            "range": "± 1918871.002740364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221991472.26666668,
            "unit": "ns",
            "range": "± 3090983.0091187004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3424004.880952381,
            "unit": "ns",
            "range": "± 119335.95545415561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3559784,
            "unit": "ns",
            "range": "± 43334.18334504319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4312525,
            "unit": "ns",
            "range": "± 65198.95724242835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4575236.043478261,
            "unit": "ns",
            "range": "± 113542.8552267534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10541477.95,
            "unit": "ns",
            "range": "± 296377.86593304004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273106.9210526316,
            "unit": "ns",
            "range": "± 8916.232216555647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262264.13333333336,
            "unit": "ns",
            "range": "± 6685.792253022428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231979.61904761905,
            "unit": "ns",
            "range": "± 5364.388730099548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4415424.333333333,
            "unit": "ns",
            "range": "± 58911.073387493685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4153412.4,
            "unit": "ns",
            "range": "± 55262.877312247976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19341.236559139787,
            "unit": "ns",
            "range": "± 1466.2340580537366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85907.95555555556,
            "unit": "ns",
            "range": "± 4773.816309338459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73047.76666666666,
            "unit": "ns",
            "range": "± 2167.2785204162087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85591.98958333333,
            "unit": "ns",
            "range": "± 9360.311983661084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4919.4838709677415,
            "unit": "ns",
            "range": "± 591.3130858503779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18600.329411764706,
            "unit": "ns",
            "range": "± 1029.7076490815396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1341968.5076923077,
            "unit": "ns",
            "range": "± 57108.35348788823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2602489.0833333335,
            "unit": "ns",
            "range": "± 85881.3377377264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2041220.9552238807,
            "unit": "ns",
            "range": "± 90155.60390529402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9319924.666666666,
            "unit": "ns",
            "range": "± 533284.2150051572"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f795413e96b97bbafadb36021d87a6c60f43a8a4",
          "message": "Add composite action netcore_test_base",
          "timestamp": "2023-10-30T15:07:18+09:00",
          "tree_id": "7248fb19f55fa82e2171fa9a271971459c665e42",
          "url": "https://github.com/planetarium/libplanet/commit/f795413e96b97bbafadb36021d87a6c60f43a8a4"
        },
        "date": 1698646891731,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50303.108695652176,
            "unit": "ns",
            "range": "± 3065.17769040715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5246590.998325893,
            "unit": "ns",
            "range": "± 31631.375431343815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1667478.148716518,
            "unit": "ns",
            "range": "± 6371.996438415526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1137783.5329427083,
            "unit": "ns",
            "range": "± 4465.265127286092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567882.751822917,
            "unit": "ns",
            "range": "± 12787.95839695695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814569.3923688616,
            "unit": "ns",
            "range": "± 2918.485138195382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747344.774609375,
            "unit": "ns",
            "range": "± 1898.5587697737421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8129012.866666666,
            "unit": "ns",
            "range": "± 143978.032536151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22583554.066666666,
            "unit": "ns",
            "range": "± 287059.96340174216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55834425.05263158,
            "unit": "ns",
            "range": "± 1198306.5315635817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107321270.32,
            "unit": "ns",
            "range": "± 2792938.9297305886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211800479.53333333,
            "unit": "ns",
            "range": "± 3758912.696504191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3256571.4,
            "unit": "ns",
            "range": "± 74519.30025266856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3474544.4615384615,
            "unit": "ns",
            "range": "± 43737.58268281293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4153654.4782608696,
            "unit": "ns",
            "range": "± 104811.91969248778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4041510.194915254,
            "unit": "ns",
            "range": "± 173612.5937447148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10830063.691358024,
            "unit": "ns",
            "range": "± 569157.5948865929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267255.8360655738,
            "unit": "ns",
            "range": "± 11943.699713210488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266074.1923076923,
            "unit": "ns",
            "range": "± 7049.951279373388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228945.35294117648,
            "unit": "ns",
            "range": "± 6629.238869800203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4265328.285714285,
            "unit": "ns",
            "range": "± 100736.294271798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3926896.3529411764,
            "unit": "ns",
            "range": "± 80074.77628905776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18645,
            "unit": "ns",
            "range": "± 1460.0938252367976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81293.94623655915,
            "unit": "ns",
            "range": "± 4886.306305615262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72760.23076923077,
            "unit": "ns",
            "range": "± 2533.643034109481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86312.83673469388,
            "unit": "ns",
            "range": "± 13515.23597262549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5114.666666666667,
            "unit": "ns",
            "range": "± 562.7110816427103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17167.65263157895,
            "unit": "ns",
            "range": "± 1478.9178891109416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349227.83,
            "unit": "ns",
            "range": "± 92139.18805083852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2572149.5,
            "unit": "ns",
            "range": "± 91222.47550736774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1970437.642857143,
            "unit": "ns",
            "range": "± 94745.8958612549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9538309.563829787,
            "unit": "ns",
            "range": "± 615654.2139306363"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "b4e68ad4036d61a9c11148a9aac5a071c309018d",
          "message": "Add composite action netcore_build_base",
          "timestamp": "2023-10-30T15:07:15+09:00",
          "tree_id": "bd3a28705c00cb6c075306eb8b84cc3bf2e74113",
          "url": "https://github.com/planetarium/libplanet/commit/b4e68ad4036d61a9c11148a9aac5a071c309018d"
        },
        "date": 1698646974754,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54396.094736842104,
            "unit": "ns",
            "range": "± 7969.5747131168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5217424.669642857,
            "unit": "ns",
            "range": "± 72026.4410477995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1684595.8639787945,
            "unit": "ns",
            "range": "± 17566.106832372294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173725.5724954044,
            "unit": "ns",
            "range": "± 23570.84250659889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2724531.8429129464,
            "unit": "ns",
            "range": "± 34564.515562267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863748.5820963542,
            "unit": "ns",
            "range": "± 13068.187748730777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 807435.8386067708,
            "unit": "ns",
            "range": "± 13201.149855369891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8520194.875,
            "unit": "ns",
            "range": "± 247016.58359762395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20923540.512820512,
            "unit": "ns",
            "range": "± 725701.7655281523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51540387.06666667,
            "unit": "ns",
            "range": "± 688984.8572502951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104582936.24324325,
            "unit": "ns",
            "range": "± 3335088.1085671266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212413899.14285713,
            "unit": "ns",
            "range": "± 2952791.851395892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3261206.4864864866,
            "unit": "ns",
            "range": "± 162172.51438862862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3420294.6739130435,
            "unit": "ns",
            "range": "± 192064.90556048608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4271448.150943397,
            "unit": "ns",
            "range": "± 168273.94457520705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4188685.0918367347,
            "unit": "ns",
            "range": "± 287501.6355265389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12034768.975,
            "unit": "ns",
            "range": "± 623877.7892690522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285725.48421052634,
            "unit": "ns",
            "range": "± 28284.530558075476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279503.28089887643,
            "unit": "ns",
            "range": "± 27383.38952930008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241074.36559139786,
            "unit": "ns",
            "range": "± 19917.694080774636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4216063.391304348,
            "unit": "ns",
            "range": "± 201999.49419019502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3778588.93877551,
            "unit": "ns",
            "range": "± 137829.561292714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16909,
            "unit": "ns",
            "range": "± 1582.8229425720576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85785.86597938144,
            "unit": "ns",
            "range": "± 11395.638260635866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79307.52577319587,
            "unit": "ns",
            "range": "± 11722.212593417093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86380.95918367348,
            "unit": "ns",
            "range": "± 16745.86814827926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7969.737373737374,
            "unit": "ns",
            "range": "± 5371.012082230545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15513.8875,
            "unit": "ns",
            "range": "± 1448.7532046359856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354068.4226804124,
            "unit": "ns",
            "range": "± 144834.34934570044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2617247.2045454546,
            "unit": "ns",
            "range": "± 144149.7339408646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2048769.081632653,
            "unit": "ns",
            "range": "± 180267.8779200196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10330760.892473118,
            "unit": "ns",
            "range": "± 1091155.2712345102"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "05d827971b5b36003e822abe7b362f39382a12cc",
          "message": "Add composite action macos_netcore_test_base",
          "timestamp": "2023-10-30T15:07:20+09:00",
          "tree_id": "f76f6128e625e75c530386bbfd01f3cbfe6cd056",
          "url": "https://github.com/planetarium/libplanet/commit/05d827971b5b36003e822abe7b362f39382a12cc"
        },
        "date": 1698647095442,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61112.22340425532,
            "unit": "ns",
            "range": "± 5929.336946655439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6731249.6921875,
            "unit": "ns",
            "range": "± 90622.38524998025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888581.2307291667,
            "unit": "ns",
            "range": "± 33811.79084929119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341200.3239583333,
            "unit": "ns",
            "range": "± 13443.67222542891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3072496.4109933036,
            "unit": "ns",
            "range": "± 30132.057607858456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967524.2525809152,
            "unit": "ns",
            "range": "± 8522.677904939812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889079.0220703125,
            "unit": "ns",
            "range": "± 7737.567207130314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9856453.013888888,
            "unit": "ns",
            "range": "± 483000.259585312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27221240.972972974,
            "unit": "ns",
            "range": "± 918095.8162937778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67314068.8,
            "unit": "ns",
            "range": "± 1243557.1984618043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135944131.07142857,
            "unit": "ns",
            "range": "± 2346137.3551184563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268527267.85714287,
            "unit": "ns",
            "range": "± 2271626.817344713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4118960.75,
            "unit": "ns",
            "range": "± 170429.16795679505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4489021.4,
            "unit": "ns",
            "range": "± 103177.54168340888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5310244.428571428,
            "unit": "ns",
            "range": "± 90821.6408010899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5140494.521739131,
            "unit": "ns",
            "range": "± 197983.32752192815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12601256.852941176,
            "unit": "ns",
            "range": "± 323032.5117578005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329769.71428571426,
            "unit": "ns",
            "range": "± 7840.69746350959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311451.93617021275,
            "unit": "ns",
            "range": "± 12090.489836885732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293073.2948717949,
            "unit": "ns",
            "range": "± 15116.07503779619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5180215.9,
            "unit": "ns",
            "range": "± 118142.90571787693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4789191,
            "unit": "ns",
            "range": "± 124039.19278160852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24705.505263157895,
            "unit": "ns",
            "range": "± 2079.665848126958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101564.60606060606,
            "unit": "ns",
            "range": "± 7377.527292763687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91987.63265306123,
            "unit": "ns",
            "range": "± 8229.990357609508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100766.26530612246,
            "unit": "ns",
            "range": "± 12957.504363531925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6083.577319587629,
            "unit": "ns",
            "range": "± 838.1070292014662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24296.063157894736,
            "unit": "ns",
            "range": "± 2388.9197986703707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1605532.5294117648,
            "unit": "ns",
            "range": "± 75916.41672033683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3135788.775280899,
            "unit": "ns",
            "range": "± 173288.8232255062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2425131.6363636362,
            "unit": "ns",
            "range": "± 133270.2734361692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10954090.808988765,
            "unit": "ns",
            "range": "± 685210.7171599558"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "6805df44072ed56c11b9c5bcb8a55d96eddbf457",
          "message": "Add workflow planetarium/libplanet/main",
          "timestamp": "2023-10-30T15:07:14+09:00",
          "tree_id": "7ae5df3fe1f21eca0c8d593ce9aebf2fec13aae6",
          "url": "https://github.com/planetarium/libplanet/commit/6805df44072ed56c11b9c5bcb8a55d96eddbf457"
        },
        "date": 1698647147409,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66170.79591836735,
            "unit": "ns",
            "range": "± 21027.46217558244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5590264.030729166,
            "unit": "ns",
            "range": "± 85507.30533847271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1787137.8391927083,
            "unit": "ns",
            "range": "± 13541.23510768909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1228625.123828125,
            "unit": "ns",
            "range": "± 18162.87628118396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2922261.638802083,
            "unit": "ns",
            "range": "± 40551.41403876108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 954417.9065987723,
            "unit": "ns",
            "range": "± 11226.67639977049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 871416.4098074777,
            "unit": "ns",
            "range": "± 11247.923841581593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8990032.04,
            "unit": "ns",
            "range": "± 360717.31906034116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29224851.375,
            "unit": "ns",
            "range": "± 549104.1560218942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55958575.4,
            "unit": "ns",
            "range": "± 921143.2883447302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111127325.29411764,
            "unit": "ns",
            "range": "± 2155793.164269846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223629823.2222222,
            "unit": "ns",
            "range": "± 6216196.586340572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3506186.4479166665,
            "unit": "ns",
            "range": "± 254774.95887873363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3727064.1666666665,
            "unit": "ns",
            "range": "± 314505.7936387339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4625112.07,
            "unit": "ns",
            "range": "± 314147.4453838469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4403347.677083333,
            "unit": "ns",
            "range": "± 281431.58815402124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12741532.47368421,
            "unit": "ns",
            "range": "± 1138053.0487932137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331990.59793814435,
            "unit": "ns",
            "range": "± 51463.014431413874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305037.1030927835,
            "unit": "ns",
            "range": "± 46526.50612251502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279718.125,
            "unit": "ns",
            "range": "± 47630.13880997928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4481735.415730337,
            "unit": "ns",
            "range": "± 246912.03142952497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4152906.0918367347,
            "unit": "ns",
            "range": "± 249685.1060739848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25853.717171717173,
            "unit": "ns",
            "range": "± 9784.078043642632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101925.6875,
            "unit": "ns",
            "range": "± 24834.72533213058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94070.70103092784,
            "unit": "ns",
            "range": "± 21826.23378297937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102906.66666666667,
            "unit": "ns",
            "range": "± 25434.853088481817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4520.663043478261,
            "unit": "ns",
            "range": "± 540.3572541714327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24082.070707070707,
            "unit": "ns",
            "range": "± 9929.62347997814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407957.6288659794,
            "unit": "ns",
            "range": "± 152446.2960419942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2785693.776595745,
            "unit": "ns",
            "range": "± 230083.43869314785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2151714.31,
            "unit": "ns",
            "range": "± 225402.3437906472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11233569.360824741,
            "unit": "ns",
            "range": "± 1719274.9260381914"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "0473b10223a809d22bfc053b0a44e4b8516d26f7",
          "message": "Add composite action linux_netcore_test_base",
          "timestamp": "2023-10-30T15:07:17+09:00",
          "tree_id": "4340a8daeb58643c671280dc6da1da9dadcd714e",
          "url": "https://github.com/planetarium/libplanet/commit/0473b10223a809d22bfc053b0a44e4b8516d26f7"
        },
        "date": 1698647221343,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62070.2,
            "unit": "ns",
            "range": "± 11396.08062548137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6237094.148958334,
            "unit": "ns",
            "range": "± 110742.63531246435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1930882.466430664,
            "unit": "ns",
            "range": "± 35545.721954794186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1395624.2342354911,
            "unit": "ns",
            "range": "± 24252.129178243384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3200909.572265625,
            "unit": "ns",
            "range": "± 62310.91663036985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1018906.6094898897,
            "unit": "ns",
            "range": "± 20526.12522634368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929072.7906668527,
            "unit": "ns",
            "range": "± 10505.17518682556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9487806.936170213,
            "unit": "ns",
            "range": "± 903047.3863088487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26175932.540816326,
            "unit": "ns",
            "range": "± 2136958.4705591393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67756484.27906977,
            "unit": "ns",
            "range": "± 3654801.031409046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133038076.17142858,
            "unit": "ns",
            "range": "± 6464695.585836575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267380050.32142857,
            "unit": "ns",
            "range": "± 11374390.754041491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3783153.2783505153,
            "unit": "ns",
            "range": "± 468595.645661804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3925521.147368421,
            "unit": "ns",
            "range": "± 423491.63552248577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5379166.85106383,
            "unit": "ns",
            "range": "± 430542.2148998392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5287226.431578947,
            "unit": "ns",
            "range": "± 538379.2029144919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14682564.978723405,
            "unit": "ns",
            "range": "± 1460476.3924856184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370833.125,
            "unit": "ns",
            "range": "± 50100.216930773124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335221.24468085106,
            "unit": "ns",
            "range": "± 40683.92006986686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301052.93684210523,
            "unit": "ns",
            "range": "± 41474.988694241474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5184358.768421053,
            "unit": "ns",
            "range": "± 357574.9935820769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4823957.018518519,
            "unit": "ns",
            "range": "± 202392.70785902606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32479.438775510203,
            "unit": "ns",
            "range": "± 12441.538251487362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111594.98947368421,
            "unit": "ns",
            "range": "± 19021.858337351558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120621.5425531915,
            "unit": "ns",
            "range": "± 24644.148044779486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135180.53608247422,
            "unit": "ns",
            "range": "± 28628.37057086825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7941.888888888889,
            "unit": "ns",
            "range": "± 1381.8885537553308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29453.262626262625,
            "unit": "ns",
            "range": "± 11530.164597463878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1675336.731958763,
            "unit": "ns",
            "range": "± 257215.63560223306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3072355.276595745,
            "unit": "ns",
            "range": "± 316917.23002577975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2459432.494949495,
            "unit": "ns",
            "range": "± 260202.1913814361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12435617.06122449,
            "unit": "ns",
            "range": "± 1361764.4563834132"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "c83d28be25e905472c248ca0c16f2a7693cbbd40",
          "message": "Add composite action codecov",
          "timestamp": "2023-10-30T15:07:19+09:00",
          "tree_id": "a966d282738fbf8351070820904c8bd55e1b0b6d",
          "url": "https://github.com/planetarium/libplanet/commit/c83d28be25e905472c248ca0c16f2a7693cbbd40"
        },
        "date": 1698647334219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64931.64367816092,
            "unit": "ns",
            "range": "± 14269.81600081584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6886426.64921875,
            "unit": "ns",
            "range": "± 156246.80980283936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2158904.8002604167,
            "unit": "ns",
            "range": "± 31999.83325437354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1541696.4383616727,
            "unit": "ns",
            "range": "± 49100.10620100991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3393589.55078125,
            "unit": "ns",
            "range": "± 75196.85293833206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1071151.1773792615,
            "unit": "ns",
            "range": "± 25455.692535744798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 999604.6847265625,
            "unit": "ns",
            "range": "± 40064.9030230025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11207562.541666666,
            "unit": "ns",
            "range": "± 1137018.0874755725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28688411.80263158,
            "unit": "ns",
            "range": "± 1452871.2642724088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72518717.42708333,
            "unit": "ns",
            "range": "± 5064780.69351438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146168164.7857143,
            "unit": "ns",
            "range": "± 6271414.956643972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293686708.60714287,
            "unit": "ns",
            "range": "± 8253721.975052306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4336183.155555556,
            "unit": "ns",
            "range": "± 349701.6330452181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4720668.1875,
            "unit": "ns",
            "range": "± 358856.38611048885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5555068.550561798,
            "unit": "ns",
            "range": "± 356937.6742429021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5705848.255102041,
            "unit": "ns",
            "range": "± 430741.34589018126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15905175.1827957,
            "unit": "ns",
            "range": "± 1537420.2330011406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375420.6701030928,
            "unit": "ns",
            "range": "± 78764.82344556399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345961.47872340423,
            "unit": "ns",
            "range": "± 52637.53451647085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306645.69662921346,
            "unit": "ns",
            "range": "± 52572.947384693376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5398117.315217392,
            "unit": "ns",
            "range": "± 372217.16321990173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4949265.704545454,
            "unit": "ns",
            "range": "± 363684.1207788296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19176.31868131868,
            "unit": "ns",
            "range": "± 1657.7146643572014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92267.5172413793,
            "unit": "ns",
            "range": "± 6829.886082781253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99869.62365591398,
            "unit": "ns",
            "range": "± 20984.76475555435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110685.2183908046,
            "unit": "ns",
            "range": "± 19390.141990332082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6319.1578947368425,
            "unit": "ns",
            "range": "± 1162.3881901461598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18624.977272727272,
            "unit": "ns",
            "range": "± 1832.9956636407546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1816923.4742268042,
            "unit": "ns",
            "range": "± 233472.59368321713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3389665.585106383,
            "unit": "ns",
            "range": "± 299957.0141952927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2713643.347826087,
            "unit": "ns",
            "range": "± 289066.909185302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13030405.612903226,
            "unit": "ns",
            "range": "± 995123.8078098737"
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
          "id": "fa3a07543ea88f1ec667b48daa0cdcadaa829f96",
          "message": "Add workflow planetarium/libplanet/docs",
          "timestamp": "2023-10-30T15:13:12+09:00",
          "tree_id": "823c2184923fdc2b7d69ff4b0ad9443903842de1",
          "url": "https://github.com/planetarium/libplanet/commit/fa3a07543ea88f1ec667b48daa0cdcadaa829f96"
        },
        "date": 1698647591119,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53513.47311827957,
            "unit": "ns",
            "range": "± 4302.505047849394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5315675.085416666,
            "unit": "ns",
            "range": "± 31897.083991411433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1668421.978515625,
            "unit": "ns",
            "range": "± 8951.221465192275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147232.8989583333,
            "unit": "ns",
            "range": "± 1339.4069500071018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610522.897879464,
            "unit": "ns",
            "range": "± 2751.661914436932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854502.9647786458,
            "unit": "ns",
            "range": "± 931.4160581253999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754137.7545823317,
            "unit": "ns",
            "range": "± 389.62263731645197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9045952.533333333,
            "unit": "ns",
            "range": "± 106388.97816762967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23282004,
            "unit": "ns",
            "range": "± 165150.1593161292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58704966.307692304,
            "unit": "ns",
            "range": "± 213810.48089736878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118224317.13333334,
            "unit": "ns",
            "range": "± 501141.9256764447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232788193.92857143,
            "unit": "ns",
            "range": "± 581081.0935137611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3722374.705882353,
            "unit": "ns",
            "range": "± 68490.35485815202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3847123.086956522,
            "unit": "ns",
            "range": "± 87646.91050039825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4646934.352941177,
            "unit": "ns",
            "range": "± 90025.75484683618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4544429.03125,
            "unit": "ns",
            "range": "± 140507.61321067368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11054733.744186046,
            "unit": "ns",
            "range": "± 248638.52192960322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294494.5833333333,
            "unit": "ns",
            "range": "± 7558.518090994031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284369.4666666667,
            "unit": "ns",
            "range": "± 10820.199762061193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268008,
            "unit": "ns",
            "range": "± 15201.340022992172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4685673.8,
            "unit": "ns",
            "range": "± 57697.685788203715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4346613.642857143,
            "unit": "ns",
            "range": "± 19749.41930054631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26648.127659574468,
            "unit": "ns",
            "range": "± 2667.6414101608966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103838.206185567,
            "unit": "ns",
            "range": "± 8872.009433862471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91223.29787234042,
            "unit": "ns",
            "range": "± 6665.934641256303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104418.71875,
            "unit": "ns",
            "range": "± 12303.385871764709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6467.452631578947,
            "unit": "ns",
            "range": "± 869.8139415674646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24331.659574468085,
            "unit": "ns",
            "range": "± 2705.1429813470118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1493315.5294117648,
            "unit": "ns",
            "range": "± 71428.72930232898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2879826.4423076925,
            "unit": "ns",
            "range": "± 113766.11013027157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2223443.7027027025,
            "unit": "ns",
            "range": "± 109880.36591111135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9337748.081081081,
            "unit": "ns",
            "range": "± 311598.1112780958"
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
          "id": "0c483bd24b4ce1c11fd097b7481d6c79a46042a2",
          "message": "Fix workflow planetarium/libplanet/main\n\n- update codecov token",
          "timestamp": "2023-10-30T15:20:50+09:00",
          "tree_id": "79a7e598202dccf3d34cba3eddc47c05641255ef",
          "url": "https://github.com/planetarium/libplanet/commit/0c483bd24b4ce1c11fd097b7481d6c79a46042a2"
        },
        "date": 1698647673827,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48629.97647058823,
            "unit": "ns",
            "range": "± 2131.1026319751013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5190512.3984375,
            "unit": "ns",
            "range": "± 26085.469570584606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1639603.3322916667,
            "unit": "ns",
            "range": "± 10062.437251343388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1135412.8452845982,
            "unit": "ns",
            "range": "± 2951.051626288596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576361.98046875,
            "unit": "ns",
            "range": "± 9571.15810092663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811851.728891226,
            "unit": "ns",
            "range": "± 1720.8822159908325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746386.5581380208,
            "unit": "ns",
            "range": "± 2162.791346611667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7806960.153846154,
            "unit": "ns",
            "range": "± 71831.69298418601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21544383.266666666,
            "unit": "ns",
            "range": "± 332208.6340385827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53416782.63636363,
            "unit": "ns",
            "range": "± 1286414.446285657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106128363.53333333,
            "unit": "ns",
            "range": "± 1976791.6242243159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211962120.2,
            "unit": "ns",
            "range": "± 2251353.5826855744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3370315.285714286,
            "unit": "ns",
            "range": "± 47826.5909806999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3464765.4615384615,
            "unit": "ns",
            "range": "± 121167.02078358967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4185402.2258064514,
            "unit": "ns",
            "range": "± 124203.94069854352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4189688.0169491526,
            "unit": "ns",
            "range": "± 175202.81613983063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10453531,
            "unit": "ns",
            "range": "± 384358.154786776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271917.13333333336,
            "unit": "ns",
            "range": "± 7952.903680236951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255768.375,
            "unit": "ns",
            "range": "± 8904.338987509807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221632.95,
            "unit": "ns",
            "range": "± 4954.397626298649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4246622.428571428,
            "unit": "ns",
            "range": "± 60800.91242953297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3826943.1666666665,
            "unit": "ns",
            "range": "± 79597.58103274688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19642.46153846154,
            "unit": "ns",
            "range": "± 1451.4048467122566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85526.07608695653,
            "unit": "ns",
            "range": "± 4856.272885125639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71789.46153846153,
            "unit": "ns",
            "range": "± 1077.449505033733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84228.64285714286,
            "unit": "ns",
            "range": "± 9957.657534388545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5376.884210526316,
            "unit": "ns",
            "range": "± 614.4331562273024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18227.052631578947,
            "unit": "ns",
            "range": "± 1653.671591109614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1351340.1354166667,
            "unit": "ns",
            "range": "± 95827.97667439184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2619203.9411764704,
            "unit": "ns",
            "range": "± 83086.89557359235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1971782.7887323943,
            "unit": "ns",
            "range": "± 93496.14478024756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9317736.788888888,
            "unit": "ns",
            "range": "± 563428.2516362852"
          }
        ]
      }
    ]
  }
}