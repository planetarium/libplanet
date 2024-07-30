window.BENCHMARK_DATA = {
  "lastUpdate": 1722313602314,
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
          "id": "513f6a325917eadcdceb8080eb3d89459e4ab67f",
          "message": "chore: Remove explorer mutation.",
          "timestamp": "2024-07-30T12:37:13+09:00",
          "tree_id": "ef65c932dda86ecaf60ea63bfcb0eb63809425ec",
          "url": "https://github.com/planetarium/libplanet/commit/513f6a325917eadcdceb8080eb3d89459e4ab67f"
        },
        "date": 1722311317580,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10906648.357142856,
            "unit": "ns",
            "range": "± 72080.66289993042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26515312.07142857,
            "unit": "ns",
            "range": "± 264278.5512832608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67209670.76666667,
            "unit": "ns",
            "range": "± 116363.96035559331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135525524.2142857,
            "unit": "ns",
            "range": "± 225243.55507732875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273265098,
            "unit": "ns",
            "range": "± 457211.192550386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14218.307692307691,
            "unit": "ns",
            "range": "± 219.88572206769308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110062.5294117647,
            "unit": "ns",
            "range": "± 3899.9213958896203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106755.1320754717,
            "unit": "ns",
            "range": "± 4445.313288421932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91214.86666666667,
            "unit": "ns",
            "range": "± 2728.0545010903907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3059279.625,
            "unit": "ns",
            "range": "± 140500.52778463825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2813840.48,
            "unit": "ns",
            "range": "± 174986.67039107616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5168.365591397849,
            "unit": "ns",
            "range": "± 718.7074416125562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26668.366666666665,
            "unit": "ns",
            "range": "± 1938.8382972018655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23519.84375,
            "unit": "ns",
            "range": "± 2297.9566590577583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29531.33695652174,
            "unit": "ns",
            "range": "± 5585.788224951231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1210.0851063829787,
            "unit": "ns",
            "range": "± 301.1477117494404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4595.1648351648355,
            "unit": "ns",
            "range": "± 572.4899273977813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676795.7419354839,
            "unit": "ns",
            "range": "± 30542.27533939999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1279778.9777777777,
            "unit": "ns",
            "range": "± 46612.203801681535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1066260.0666666667,
            "unit": "ns",
            "range": "± 47590.98654437274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9347444.14,
            "unit": "ns",
            "range": "± 1285108.6568876875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2191035,
            "unit": "ns",
            "range": "± 26151.30889012377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316320.35483871,
            "unit": "ns",
            "range": "± 69404.02813744478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2568538.5714285714,
            "unit": "ns",
            "range": "± 38866.148633610326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2326008.7258064514,
            "unit": "ns",
            "range": "± 67063.48531141205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3132508.28,
            "unit": "ns",
            "range": "± 344268.19472902425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3008511.013802083,
            "unit": "ns",
            "range": "± 31647.303750140654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922354.1506510417,
            "unit": "ns",
            "range": "± 7214.256889400596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612946.717578125,
            "unit": "ns",
            "range": "± 5135.362428388599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636085.152064732,
            "unit": "ns",
            "range": "± 23024.23967520256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462396.21153041295,
            "unit": "ns",
            "range": "± 429.400480666647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419969.56675502233,
            "unit": "ns",
            "range": "± 389.0529911911854"
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
          "id": "f83af1b319a8c75a26608d9a301b4c5aaa54d6fd",
          "message": "changelog",
          "timestamp": "2024-07-30T12:42:10+09:00",
          "tree_id": "1d4e45658b787684c6b41c591cd1189a3b5dc3ee",
          "url": "https://github.com/planetarium/libplanet/commit/f83af1b319a8c75a26608d9a301b4c5aaa54d6fd"
        },
        "date": 1722312397506,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10854271.142857144,
            "unit": "ns",
            "range": "± 136678.54267747942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26552401,
            "unit": "ns",
            "range": "± 204148.38012394507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67436783.66666667,
            "unit": "ns",
            "range": "± 125413.22642065347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136337860.42857143,
            "unit": "ns",
            "range": "± 279272.4627262538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273819544.28571427,
            "unit": "ns",
            "range": "± 529785.2420569081"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14126.964285714286,
            "unit": "ns",
            "range": "± 401.766883039006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109593.54761904762,
            "unit": "ns",
            "range": "± 3640.3424604540214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104801.12195121951,
            "unit": "ns",
            "range": "± 3473.4336915732392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91144.29411764706,
            "unit": "ns",
            "range": "± 2899.8217137402607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3024768.0505050505,
            "unit": "ns",
            "range": "± 177023.55488317652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2717769.5,
            "unit": "ns",
            "range": "± 181918.5458835007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4800.730337078651,
            "unit": "ns",
            "range": "± 361.27601397511677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26972.06976744186,
            "unit": "ns",
            "range": "± 1396.3886766411815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22148.153846153848,
            "unit": "ns",
            "range": "± 765.2779522040045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30331.489361702126,
            "unit": "ns",
            "range": "± 5018.172710195214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1158.561797752809,
            "unit": "ns",
            "range": "± 240.8564243701374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4898.86170212766,
            "unit": "ns",
            "range": "± 536.5479385343483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 688124.7413793104,
            "unit": "ns",
            "range": "± 37334.09151070146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1264796.3684210526,
            "unit": "ns",
            "range": "± 40281.21930199224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1094100.2258064516,
            "unit": "ns",
            "range": "± 60643.120823733465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9490566.35,
            "unit": "ns",
            "range": "± 1405472.118546621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2175403.5555555555,
            "unit": "ns",
            "range": "± 71178.99420452816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2307927.5454545454,
            "unit": "ns",
            "range": "± 71747.4181042822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2575588.4,
            "unit": "ns",
            "range": "± 39971.271910139236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2331873.586956522,
            "unit": "ns",
            "range": "± 89137.0449039196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3031633.4925373136,
            "unit": "ns",
            "range": "± 142678.7790531662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3018830.5655691964,
            "unit": "ns",
            "range": "± 47608.52814037079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924839.6783621652,
            "unit": "ns",
            "range": "± 4627.727912468841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615502.8268880208,
            "unit": "ns",
            "range": "± 5005.552390195618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630057.4305245536,
            "unit": "ns",
            "range": "± 13106.411505381768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 470663.67451171874,
            "unit": "ns",
            "range": "± 920.8572102702066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425865.6245768229,
            "unit": "ns",
            "range": "± 1277.5482390442098"
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
          "id": "0e92909236c8f883b849b0179b3e9491d3f8f1f1",
          "message": "changelog",
          "timestamp": "2024-07-30T13:18:29+09:00",
          "tree_id": "f55f248759908343516491ff0c824e9e37d8b82e",
          "url": "https://github.com/planetarium/libplanet/commit/0e92909236c8f883b849b0179b3e9491d3f8f1f1"
        },
        "date": 1722313589326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10779104,
            "unit": "ns",
            "range": "± 162891.43950071587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26610993.714285713,
            "unit": "ns",
            "range": "± 328618.19744931225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67504053.78571428,
            "unit": "ns",
            "range": "± 73327.4849511303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135837143.07142857,
            "unit": "ns",
            "range": "± 182482.45978532344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273114271.8666667,
            "unit": "ns",
            "range": "± 369877.3014672504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14176.483870967742,
            "unit": "ns",
            "range": "± 428.5173563943271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110671.26470588235,
            "unit": "ns",
            "range": "± 3481.59463037151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106802.35714285714,
            "unit": "ns",
            "range": "± 4235.964618596337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93080.07142857143,
            "unit": "ns",
            "range": "± 3393.090255589792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3045562.1379310344,
            "unit": "ns",
            "range": "± 131424.10303281754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2759285.9591836734,
            "unit": "ns",
            "range": "± 160777.17126975293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5000.784946236559,
            "unit": "ns",
            "range": "± 450.72817532498516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26922.866666666665,
            "unit": "ns",
            "range": "± 1625.0410760582038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23970.075,
            "unit": "ns",
            "range": "± 762.5252038709683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30453.478260869564,
            "unit": "ns",
            "range": "± 5235.395371109035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1320.4565217391305,
            "unit": "ns",
            "range": "± 272.1696470405661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4721.051724137931,
            "unit": "ns",
            "range": "± 455.17905392352327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 679158.619047619,
            "unit": "ns",
            "range": "± 34968.05169607526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1279222.3023255814,
            "unit": "ns",
            "range": "± 44692.77478547814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1081584.8969072164,
            "unit": "ns",
            "range": "± 62539.436763181104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9460569.303030303,
            "unit": "ns",
            "range": "± 1443762.5486374588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2180239.620689655,
            "unit": "ns",
            "range": "± 63347.24845045633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2298854.8450704226,
            "unit": "ns",
            "range": "± 109007.32710728969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2581059.0714285714,
            "unit": "ns",
            "range": "± 33777.72968065084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2322659.5833333335,
            "unit": "ns",
            "range": "± 23295.64837809973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3071724.868686869,
            "unit": "ns",
            "range": "± 263147.52274344745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3045103.1768973214,
            "unit": "ns",
            "range": "± 21571.9971907471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928050.33125,
            "unit": "ns",
            "range": "± 5770.239316412261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616246.4756510417,
            "unit": "ns",
            "range": "± 5203.580509319401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1633511.3072916667,
            "unit": "ns",
            "range": "± 15646.879967794084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 472513.7429547991,
            "unit": "ns",
            "range": "± 648.2679182703354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429207.13298688614,
            "unit": "ns",
            "range": "± 496.2872939186587"
          }
        ]
      }
    ]
  }
}