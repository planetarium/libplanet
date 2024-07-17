window.BENCHMARK_DATA = {
  "lastUpdate": 1721177990098,
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
          "id": "2aa539ec15069490d113a2698b55e2015ca1f9e6",
          "message": "fix: Fix an issue where curreny does not work correctly in dotnet 6",
          "timestamp": "2024-07-15T17:48:21+09:00",
          "tree_id": "b2fe1bb6f3e68a926c89ef638055451091e64841",
          "url": "https://github.com/planetarium/libplanet/commit/2aa539ec15069490d113a2698b55e2015ca1f9e6"
        },
        "date": 1721033819835,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201182.16666666666,
            "unit": "ns",
            "range": "± 8436.787904262466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195049.28846153847,
            "unit": "ns",
            "range": "± 5596.14854719004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167848,
            "unit": "ns",
            "range": "± 4227.8310471962295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3044738.382352941,
            "unit": "ns",
            "range": "± 61375.76553482078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2811072.533333333,
            "unit": "ns",
            "range": "± 50405.85997660344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12724.42857142857,
            "unit": "ns",
            "range": "± 1276.6327158670306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61568.84848484849,
            "unit": "ns",
            "range": "± 5069.055749456167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51134.27777777778,
            "unit": "ns",
            "range": "± 789.9165857344055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63561.42857142857,
            "unit": "ns",
            "range": "± 11525.635889830479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2875.244680851064,
            "unit": "ns",
            "range": "± 283.8781991640953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15051.578947368422,
            "unit": "ns",
            "range": "± 2085.779437855753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1047413.734375,
            "unit": "ns",
            "range": "± 48510.449531229606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1993771.5614035088,
            "unit": "ns",
            "range": "± 85520.60490523773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1726308.2461538462,
            "unit": "ns",
            "range": "± 73644.8079214157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8341838.266666667,
            "unit": "ns",
            "range": "± 242514.65759650606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3815259.52734375,
            "unit": "ns",
            "range": "± 10242.3589417147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208489.2698317308,
            "unit": "ns",
            "range": "± 1820.3787809141763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777302.722280649,
            "unit": "ns",
            "range": "± 7657.489723872206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942252.515345982,
            "unit": "ns",
            "range": "± 2028.876511825105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614383.8677884615,
            "unit": "ns",
            "range": "± 925.6699452132838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572157.4862583706,
            "unit": "ns",
            "range": "± 913.6330064063216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2465399.5,
            "unit": "ns",
            "range": "± 47353.534598098726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2569829.3181818184,
            "unit": "ns",
            "range": "± 96183.88433107016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3048751.590909091,
            "unit": "ns",
            "range": "± 72294.54839349861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2642192.6428571427,
            "unit": "ns",
            "range": "± 34461.32864443216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3260668.3571428573,
            "unit": "ns",
            "range": "± 36233.53930324169"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32569.64285714286,
            "unit": "ns",
            "range": "± 391.6839104613383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10570096.42857143,
            "unit": "ns",
            "range": "± 59212.983092606264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27442801.2,
            "unit": "ns",
            "range": "± 105399.94118336661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68886746.06666666,
            "unit": "ns",
            "range": "± 482249.7070393047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139366727.03333333,
            "unit": "ns",
            "range": "± 904607.0707537584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283650396.4,
            "unit": "ns",
            "range": "± 1109805.4324490395"
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
          "id": "ea9808e6ccf719ba5399cd4ef6a316741a346114",
          "message": "fix: Fix an issue where curreny does not work correctly in dotnet 6",
          "timestamp": "2024-07-15T18:09:05+09:00",
          "tree_id": "b2fe1bb6f3e68a926c89ef638055451091e64841",
          "url": "https://github.com/planetarium/libplanet/commit/ea9808e6ccf719ba5399cd4ef6a316741a346114"
        },
        "date": 1721035031807,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202142.86363636365,
            "unit": "ns",
            "range": "± 6762.067784720778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197735.12857142856,
            "unit": "ns",
            "range": "± 5608.12112862029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163801.125,
            "unit": "ns",
            "range": "± 2979.1540158239554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3018577.4,
            "unit": "ns",
            "range": "± 44983.93950194098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2735075.4285714286,
            "unit": "ns",
            "range": "± 30420.207665589372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12943.35294117647,
            "unit": "ns",
            "range": "± 623.3598123578887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71374.0671641791,
            "unit": "ns",
            "range": "± 3204.8976025994807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50077.5,
            "unit": "ns",
            "range": "± 319.0236525856522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48371.1914893617,
            "unit": "ns",
            "range": "± 5618.628486602795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2613.4210526315787,
            "unit": "ns",
            "range": "± 197.68170090127362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12166.065789473685,
            "unit": "ns",
            "range": "± 628.3808046193287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018048.6133333333,
            "unit": "ns",
            "range": "± 49513.25274294052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2011771.024390244,
            "unit": "ns",
            "range": "± 70505.73837514498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1730190.9576271186,
            "unit": "ns",
            "range": "± 75488.30084998603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8634285.755813954,
            "unit": "ns",
            "range": "± 314224.51831006905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3823691.2639508927,
            "unit": "ns",
            "range": "± 5054.942597483002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205955.3796875,
            "unit": "ns",
            "range": "± 2278.3814615827596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759776.7337239584,
            "unit": "ns",
            "range": "± 1016.9219418894457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934265.5546875,
            "unit": "ns",
            "range": "± 2863.628160677768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612948.2602864583,
            "unit": "ns",
            "range": "± 681.938869732499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572908.9961588542,
            "unit": "ns",
            "range": "± 958.7872168849358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2435323.933333333,
            "unit": "ns",
            "range": "± 39766.64665352947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2522952.6,
            "unit": "ns",
            "range": "± 43835.18369464028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3000180.5,
            "unit": "ns",
            "range": "± 20854.336376214604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2596397.066666667,
            "unit": "ns",
            "range": "± 39566.10156157607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3260050.4,
            "unit": "ns",
            "range": "± 49376.090578624906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32256.923076923078,
            "unit": "ns",
            "range": "± 207.94609138687102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10670313.92857143,
            "unit": "ns",
            "range": "± 33412.77761049434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27275180.333333332,
            "unit": "ns",
            "range": "± 138402.55805319015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72607126.76666667,
            "unit": "ns",
            "range": "± 400530.9615352506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136987823.53333333,
            "unit": "ns",
            "range": "± 471859.23555742565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288699868.06666666,
            "unit": "ns",
            "range": "± 1450621.3927593466"
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
          "id": "f36cbd1a34020e003725426cd4d6b82d75836175",
          "message": "Changelog",
          "timestamp": "2024-07-16T09:33:33+09:00",
          "tree_id": "c1eea56039119650a0171132e2666f8147bf07f0",
          "url": "https://github.com/planetarium/libplanet/commit/f36cbd1a34020e003725426cd4d6b82d75836175"
        },
        "date": 1721090524282,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200726.41428571427,
            "unit": "ns",
            "range": "± 9727.147690635993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191716.09302325582,
            "unit": "ns",
            "range": "± 6647.907765440741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165313.22727272726,
            "unit": "ns",
            "range": "± 3570.016565678762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3017191.2666666666,
            "unit": "ns",
            "range": "± 50276.297702178665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2787560.9285714286,
            "unit": "ns",
            "range": "± 29292.47931693333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12232.391304347826,
            "unit": "ns",
            "range": "± 777.0098851892403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59021.89743589744,
            "unit": "ns",
            "range": "± 3023.4248602285265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50270.833333333336,
            "unit": "ns",
            "range": "± 343.8420179869432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61754.19387755102,
            "unit": "ns",
            "range": "± 10491.07945725886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3419.0729166666665,
            "unit": "ns",
            "range": "± 214.91272376878783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12231.376344086022,
            "unit": "ns",
            "range": "± 835.5694610365579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999837.0428571429,
            "unit": "ns",
            "range": "± 45454.45559175761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1888391,
            "unit": "ns",
            "range": "± 58623.491403297536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1647908.971830986,
            "unit": "ns",
            "range": "± 74565.27990961474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8268487.66,
            "unit": "ns",
            "range": "± 216505.65776223186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3736063.275390625,
            "unit": "ns",
            "range": "± 5634.7673104775695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1189322.5252604166,
            "unit": "ns",
            "range": "± 3358.409081256311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770795.8568359375,
            "unit": "ns",
            "range": "± 1373.3690086144381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953081.529296875,
            "unit": "ns",
            "range": "± 1849.8603838069687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618567.4719401042,
            "unit": "ns",
            "range": "± 414.5945659724211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579217.390625,
            "unit": "ns",
            "range": "± 455.5450351584383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2426087.533333333,
            "unit": "ns",
            "range": "± 68050.94574616232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2513828.5,
            "unit": "ns",
            "range": "± 39367.678622873435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3011444,
            "unit": "ns",
            "range": "± 30635.621034244534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2694020.5,
            "unit": "ns",
            "range": "± 36025.60870871349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3193475.2333333334,
            "unit": "ns",
            "range": "± 27654.54144173034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32072.153846153848,
            "unit": "ns",
            "range": "± 265.709379508843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10203858.857142856,
            "unit": "ns",
            "range": "± 76495.20242458361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27187589.666666668,
            "unit": "ns",
            "range": "± 205859.05345949225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70346898.6923077,
            "unit": "ns",
            "range": "± 150181.61686237578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136738027.26666668,
            "unit": "ns",
            "range": "± 568927.6635633375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287132653.71428573,
            "unit": "ns",
            "range": "± 720197.8681086329"
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
          "id": "6b9b285ddd52ebd31c646c91d934ca74df26b63b",
          "message": "Changelog",
          "timestamp": "2024-07-16T13:15:44+09:00",
          "tree_id": "b598aa425f39661f629bed871eb1b3b4af844f38",
          "url": "https://github.com/planetarium/libplanet/commit/6b9b285ddd52ebd31c646c91d934ca74df26b63b"
        },
        "date": 1721103831339,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202620.88888888888,
            "unit": "ns",
            "range": "± 5817.630508218851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193376.45454545456,
            "unit": "ns",
            "range": "± 6936.897947744418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168226.68181818182,
            "unit": "ns",
            "range": "± 4107.675143486347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3019814.7333333334,
            "unit": "ns",
            "range": "± 31987.096205158963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2776517.3,
            "unit": "ns",
            "range": "± 43006.49223946144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12354.581081081082,
            "unit": "ns",
            "range": "± 632.7315377118906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60263.61392405063,
            "unit": "ns",
            "range": "± 3036.8402269098706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53726.28571428572,
            "unit": "ns",
            "range": "± 297.91052569300285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49886.80612244898,
            "unit": "ns",
            "range": "± 7539.549961490925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2512.742105263158,
            "unit": "ns",
            "range": "± 184.2356675212758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11870.264367816091,
            "unit": "ns",
            "range": "± 726.3453509398014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1019368.5138888889,
            "unit": "ns",
            "range": "± 48883.580670927455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1903744.1621621621,
            "unit": "ns",
            "range": "± 64394.23574596027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1656807.843137255,
            "unit": "ns",
            "range": "± 64040.15419761966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8055403.857142857,
            "unit": "ns",
            "range": "± 228223.22271533066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3704869.7081473214,
            "unit": "ns",
            "range": "± 4008.9360219913606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1187225.739483173,
            "unit": "ns",
            "range": "± 1950.1944638322077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759151.8662109375,
            "unit": "ns",
            "range": "± 1197.1892236633496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954658.6317708334,
            "unit": "ns",
            "range": "± 2494.98403252821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622354.7339192708,
            "unit": "ns",
            "range": "± 1803.6283499107747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576046.0203683035,
            "unit": "ns",
            "range": "± 736.6188402842778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2402887.966666667,
            "unit": "ns",
            "range": "± 39822.785128736585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2504352.4375,
            "unit": "ns",
            "range": "± 46864.004862251866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3010849,
            "unit": "ns",
            "range": "± 31338.277820729567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2553315.8125,
            "unit": "ns",
            "range": "± 48850.96496449687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3194516.4,
            "unit": "ns",
            "range": "± 47297.651021105536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31968.46153846154,
            "unit": "ns",
            "range": "± 236.2490265886879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10472524.1,
            "unit": "ns",
            "range": "± 90632.0581667594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27094807.64285714,
            "unit": "ns",
            "range": "± 128096.9866255836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68692578.71428572,
            "unit": "ns",
            "range": "± 194590.85393378927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138951971.85714287,
            "unit": "ns",
            "range": "± 715157.4491640992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287162090.2,
            "unit": "ns",
            "range": "± 1114842.4135551434"
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
          "id": "5298df772ab431b6c4cf8e36533a442c11f6dbcf",
          "message": "Changelog",
          "timestamp": "2024-07-16T13:40:54+09:00",
          "tree_id": "41ba7dc6567919ba3d2f66e5537293575fce26ee",
          "url": "https://github.com/planetarium/libplanet/commit/5298df772ab431b6c4cf8e36533a442c11f6dbcf"
        },
        "date": 1721105463298,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208381.26530612246,
            "unit": "ns",
            "range": "± 19567.251061772935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205523.26288659795,
            "unit": "ns",
            "range": "± 17801.70806515323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182843.31,
            "unit": "ns",
            "range": "± 16099.431903331246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3139420.2333333334,
            "unit": "ns",
            "range": "± 49410.06263833117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2887315.346153846,
            "unit": "ns",
            "range": "± 26719.127979302746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16155.868686868687,
            "unit": "ns",
            "range": "± 3581.0365465723794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87069.63,
            "unit": "ns",
            "range": "± 13040.070380499632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57742.5,
            "unit": "ns",
            "range": "± 7487.1789613979445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68388.17525773196,
            "unit": "ns",
            "range": "± 12500.83470047293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3615.4347826086955,
            "unit": "ns",
            "range": "± 705.4077116505009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19387.52525252525,
            "unit": "ns",
            "range": "± 3483.7256808270313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1037740.1071428572,
            "unit": "ns",
            "range": "± 55447.448481067826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2051550.2352941176,
            "unit": "ns",
            "range": "± 65443.981936929384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1779448.8050847459,
            "unit": "ns",
            "range": "± 77984.9060493504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8677722.228571428,
            "unit": "ns",
            "range": "± 282953.35289938695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3890748.3186383927,
            "unit": "ns",
            "range": "± 12230.431533476753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211485.7003348214,
            "unit": "ns",
            "range": "± 1962.382401155217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775003.291015625,
            "unit": "ns",
            "range": "± 2531.1193316639283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954969.4676339286,
            "unit": "ns",
            "range": "± 3776.3569682651105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639616.7557291667,
            "unit": "ns",
            "range": "± 2726.8059722983303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564235.21875,
            "unit": "ns",
            "range": "± 898.3902399112706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2575634.3,
            "unit": "ns",
            "range": "± 39545.64693074863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2561113.769230769,
            "unit": "ns",
            "range": "± 57326.83753674727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3082738.4782608696,
            "unit": "ns",
            "range": "± 76701.42233354048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2649286.48,
            "unit": "ns",
            "range": "± 69897.44344640462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3346897.466666667,
            "unit": "ns",
            "range": "± 57214.26354486224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36895.95,
            "unit": "ns",
            "range": "± 5972.7245536216005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11105554.857142856,
            "unit": "ns",
            "range": "± 146256.4520990216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27956651.1,
            "unit": "ns",
            "range": "± 197959.3762578575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71532704.66666667,
            "unit": "ns",
            "range": "± 589009.7855582545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138614331.06666666,
            "unit": "ns",
            "range": "± 883677.1261548827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288521855.5769231,
            "unit": "ns",
            "range": "± 1633180.7385868973"
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
          "id": "b9064f873d32a8748d5c95736224df15d4ed0401",
          "message": "Changelog",
          "timestamp": "2024-07-17T09:51:22+09:00",
          "tree_id": "17028deb9b286154a6a89a4c50252f2a98152dc1",
          "url": "https://github.com/planetarium/libplanet/commit/b9064f873d32a8748d5c95736224df15d4ed0401"
        },
        "date": 1721177964587,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199628.44545454546,
            "unit": "ns",
            "range": "± 8507.258679369663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191363.30952380953,
            "unit": "ns",
            "range": "± 6345.900918138725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170492.42307692306,
            "unit": "ns",
            "range": "± 2339.6455736406765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3061498.2333333334,
            "unit": "ns",
            "range": "± 42819.05309800211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2802209.6428571427,
            "unit": "ns",
            "range": "± 31470.136062395955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16807.9,
            "unit": "ns",
            "range": "± 960.4720404308695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59525.06578947369,
            "unit": "ns",
            "range": "± 3035.247773897111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49346.666666666664,
            "unit": "ns",
            "range": "± 421.7668104820985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58179.21428571428,
            "unit": "ns",
            "range": "± 9751.03883257743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3405.7291666666665,
            "unit": "ns",
            "range": "± 289.7622429788608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16032.488888888889,
            "unit": "ns",
            "range": "± 908.4517449533928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005841.3544303797,
            "unit": "ns",
            "range": "± 51744.061602308895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1918949,
            "unit": "ns",
            "range": "± 67833.49075002209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1656069.1358024692,
            "unit": "ns",
            "range": "± 84925.36130063757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8246298.568965517,
            "unit": "ns",
            "range": "± 238388.09608162832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3709319.2233072915,
            "unit": "ns",
            "range": "± 4084.1230885125565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1193642.5268554688,
            "unit": "ns",
            "range": "± 1242.5267771678389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774176.1547851562,
            "unit": "ns",
            "range": "± 1020.1415596242899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957664.2190104167,
            "unit": "ns",
            "range": "± 4944.982143607011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612048.2105887277,
            "unit": "ns",
            "range": "± 618.7235884752438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571997.6480887277,
            "unit": "ns",
            "range": "± 397.1320083559491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2444397.3,
            "unit": "ns",
            "range": "± 38121.2499686386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2497112.285714286,
            "unit": "ns",
            "range": "± 37286.56869577027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2966245.846153846,
            "unit": "ns",
            "range": "± 25191.775092432294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2598763.1428571427,
            "unit": "ns",
            "range": "± 31655.094436531286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3336326.588235294,
            "unit": "ns",
            "range": "± 65069.70384428035"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31684.64285714286,
            "unit": "ns",
            "range": "± 272.9998188623961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10518159.142857144,
            "unit": "ns",
            "range": "± 41617.87407400287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26861478.966666665,
            "unit": "ns",
            "range": "± 164877.91744407508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68493294.2,
            "unit": "ns",
            "range": "± 382099.020758307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138760085.66666666,
            "unit": "ns",
            "range": "± 742993.5376211622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285789773.96153843,
            "unit": "ns",
            "range": "± 440129.48699797713"
          }
        ]
      }
    ]
  }
}