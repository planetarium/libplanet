window.BENCHMARK_DATA = {
  "lastUpdate": 1698647006258,
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
      }
    ]
  }
}