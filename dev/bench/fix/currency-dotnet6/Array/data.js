window.BENCHMARK_DATA = {
  "lastUpdate": 1721189752997,
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
        "date": 1721034665055,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10729506,
            "unit": "ns",
            "range": "± 122745.0787193022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26865422.64285714,
            "unit": "ns",
            "range": "± 230188.2131169579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66731788.71428572,
            "unit": "ns",
            "range": "± 96535.89157978701"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136232236.46666667,
            "unit": "ns",
            "range": "± 310469.946490999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272970216.4,
            "unit": "ns",
            "range": "± 497583.43011553644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13981.92857142857,
            "unit": "ns",
            "range": "± 389.41760204575854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110597.359375,
            "unit": "ns",
            "range": "± 4705.793144919128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106376.7627118644,
            "unit": "ns",
            "range": "± 4696.082800256133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90324.23076923077,
            "unit": "ns",
            "range": "± 1374.2909780347436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3048743.033707865,
            "unit": "ns",
            "range": "± 167771.48635281538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2756813.1717171716,
            "unit": "ns",
            "range": "± 163888.1548213156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5096.224719101124,
            "unit": "ns",
            "range": "± 557.598070314439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26314.923076923078,
            "unit": "ns",
            "range": "± 1632.8462146459967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24745.878787878788,
            "unit": "ns",
            "range": "± 1167.0282774921097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28740.296703296703,
            "unit": "ns",
            "range": "± 4240.1378842740105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1085.9895833333333,
            "unit": "ns",
            "range": "± 182.69995504805522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4814.465909090909,
            "unit": "ns",
            "range": "± 417.6206260832893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 700214.9333333333,
            "unit": "ns",
            "range": "± 52494.35136756262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1261116.6744186047,
            "unit": "ns",
            "range": "± 45572.3786251951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1084843.3152173914,
            "unit": "ns",
            "range": "± 59620.52964197531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9307450.77,
            "unit": "ns",
            "range": "± 1471793.9914626884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2177530.6086956523,
            "unit": "ns",
            "range": "± 50382.679852883004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273898.2,
            "unit": "ns",
            "range": "± 85720.01174871594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2582606.40625,
            "unit": "ns",
            "range": "± 70189.70932287465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2369683.4590163934,
            "unit": "ns",
            "range": "± 106870.0146415532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3102670.44,
            "unit": "ns",
            "range": "± 124864.25095411843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3028364.53828125,
            "unit": "ns",
            "range": "± 54615.671739159996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917414.3530598958,
            "unit": "ns",
            "range": "± 6511.181091735289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616543.7747395834,
            "unit": "ns",
            "range": "± 4913.215916005298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1645250.7195870536,
            "unit": "ns",
            "range": "± 17156.431992433783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462683.9041992187,
            "unit": "ns",
            "range": "± 1023.9305610265147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424544.8075846354,
            "unit": "ns",
            "range": "± 1279.8890821067391"
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
        "date": 1721036218577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10966322.5,
            "unit": "ns",
            "range": "± 282703.31760499306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26834277.07142857,
            "unit": "ns",
            "range": "± 232690.57625573338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67373008,
            "unit": "ns",
            "range": "± 102710.06636297007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134862816.16666666,
            "unit": "ns",
            "range": "± 131386.49086972605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279176505.8666667,
            "unit": "ns",
            "range": "± 739213.7422137762"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14022.756756756757,
            "unit": "ns",
            "range": "± 471.04224895469866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110565.515625,
            "unit": "ns",
            "range": "± 4980.732339191961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105103.73076923077,
            "unit": "ns",
            "range": "± 4049.4243072579047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91177.94444444444,
            "unit": "ns",
            "range": "± 1853.6284122902503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3117787.8,
            "unit": "ns",
            "range": "± 138077.6125209469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2770328.98989899,
            "unit": "ns",
            "range": "± 166457.30911708233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5081.8279569892475,
            "unit": "ns",
            "range": "± 625.4370927887138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26369.846153846152,
            "unit": "ns",
            "range": "± 1355.2232774964177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22832.988505747126,
            "unit": "ns",
            "range": "± 1239.1009915693742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29454.72680412371,
            "unit": "ns",
            "range": "± 4498.752247163361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1182.1630434782608,
            "unit": "ns",
            "range": "± 223.81901426527506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4855.19540229885,
            "unit": "ns",
            "range": "± 441.46929201538904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681208.6917808219,
            "unit": "ns",
            "range": "± 31247.310471221863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1280140.7173913044,
            "unit": "ns",
            "range": "± 46045.68374157852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1058348.0655737706,
            "unit": "ns",
            "range": "± 47757.375276449486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9240401.151515152,
            "unit": "ns",
            "range": "± 1307389.3037667712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2220011.448979592,
            "unit": "ns",
            "range": "± 88307.4013522416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2280357.9583333335,
            "unit": "ns",
            "range": "± 84237.23472632903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2600618.923076923,
            "unit": "ns",
            "range": "± 32338.066192599134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2337390.4285714286,
            "unit": "ns",
            "range": "± 31054.88908793165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3131828.242424242,
            "unit": "ns",
            "range": "± 293279.64939296944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3045066.8622395834,
            "unit": "ns",
            "range": "± 42174.00845213383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913600.6992885044,
            "unit": "ns",
            "range": "± 4640.495244279339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616483.7921223958,
            "unit": "ns",
            "range": "± 4746.039805173113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1645568.5629185268,
            "unit": "ns",
            "range": "± 8892.107755046067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466180.1815429687,
            "unit": "ns",
            "range": "± 904.6022915381834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429793.62386067706,
            "unit": "ns",
            "range": "± 991.3823286224447"
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
        "date": 1721091270325,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10753247.6,
            "unit": "ns",
            "range": "± 143766.4575984259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26400877.5,
            "unit": "ns",
            "range": "± 140210.74553506947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67215885.86666666,
            "unit": "ns",
            "range": "± 136444.56032494173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135885446.64285713,
            "unit": "ns",
            "range": "± 280737.28724408936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273975723.5,
            "unit": "ns",
            "range": "± 365247.27793641604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13916.93023255814,
            "unit": "ns",
            "range": "± 509.30051916931626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112225.65,
            "unit": "ns",
            "range": "± 5008.855347519319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105546.82352941176,
            "unit": "ns",
            "range": "± 5055.223067966516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92836.61764705883,
            "unit": "ns",
            "range": "± 2914.3555970996076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3018049.7804878047,
            "unit": "ns",
            "range": "± 159925.13546504488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2696501.22,
            "unit": "ns",
            "range": "± 175423.79754912714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5005.086021505376,
            "unit": "ns",
            "range": "± 549.1922063143203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27292.727272727272,
            "unit": "ns",
            "range": "± 1501.429692049278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22268.59375,
            "unit": "ns",
            "range": "± 1299.1584205341305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28508.885416666668,
            "unit": "ns",
            "range": "± 5483.518306553869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1430.554347826087,
            "unit": "ns",
            "range": "± 256.93084391002424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4888.483516483517,
            "unit": "ns",
            "range": "± 600.6398692253557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 667135.253968254,
            "unit": "ns",
            "range": "± 19969.210201294693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1259621.3333333333,
            "unit": "ns",
            "range": "± 38945.05565720579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1049571.109375,
            "unit": "ns",
            "range": "± 48124.27128423495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9366511.59,
            "unit": "ns",
            "range": "± 1216131.1672241285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2191404.9444444445,
            "unit": "ns",
            "range": "± 46819.297933302245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2279531.5,
            "unit": "ns",
            "range": "± 21124.463945861444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2610595.296296296,
            "unit": "ns",
            "range": "± 66327.43461379533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2315986.6346153845,
            "unit": "ns",
            "range": "± 95596.89446429114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3003022,
            "unit": "ns",
            "range": "± 151569.3307827112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3049417.144270833,
            "unit": "ns",
            "range": "± 46644.67698063231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 916976.4053385417,
            "unit": "ns",
            "range": "± 4867.234131056125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613033.3662109375,
            "unit": "ns",
            "range": "± 4502.523487685429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636422.2610677083,
            "unit": "ns",
            "range": "± 21710.554978940112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458993.48017578124,
            "unit": "ns",
            "range": "± 390.2484001171472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419814.96588541666,
            "unit": "ns",
            "range": "± 2755.1183827124783"
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
        "date": 1721103830068,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10687389.576923076,
            "unit": "ns",
            "range": "± 98770.6369292527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26518399.07142857,
            "unit": "ns",
            "range": "± 151163.90636578473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67206095.28571428,
            "unit": "ns",
            "range": "± 168218.5167124908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135409993.1,
            "unit": "ns",
            "range": "± 334727.52409743663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273090411.21428573,
            "unit": "ns",
            "range": "± 274818.81859877694"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14030.76923076923,
            "unit": "ns",
            "range": "± 379.3306006841323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109132.83582089552,
            "unit": "ns",
            "range": "± 4218.7096569456535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105972.72549019608,
            "unit": "ns",
            "range": "± 4242.459989574122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90865.27272727272,
            "unit": "ns",
            "range": "± 2869.2449820545917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3021317.714285714,
            "unit": "ns",
            "range": "± 184096.18144591997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2710422.82,
            "unit": "ns",
            "range": "± 182128.68676519845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4960.752808988764,
            "unit": "ns",
            "range": "± 529.6193161322849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26663.98947368421,
            "unit": "ns",
            "range": "± 2007.2451561553944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22500.088888888888,
            "unit": "ns",
            "range": "± 1609.3667373786418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30307.864583333332,
            "unit": "ns",
            "range": "± 5077.258894987773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1122.7340425531916,
            "unit": "ns",
            "range": "± 180.76482824299254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5037.136842105263,
            "unit": "ns",
            "range": "± 892.1103429810415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 672259.4915254237,
            "unit": "ns",
            "range": "± 25368.682193203385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1285117.9642857143,
            "unit": "ns",
            "range": "± 53780.815311431805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1052788.3181818181,
            "unit": "ns",
            "range": "± 44598.27390452041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9176490.551020408,
            "unit": "ns",
            "range": "± 1281841.1640426873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2175853.242424242,
            "unit": "ns",
            "range": "± 58659.535680500354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283644.2916666665,
            "unit": "ns",
            "range": "± 89937.9664052096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2570146.736842105,
            "unit": "ns",
            "range": "± 55140.427461610445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2296312.9166666665,
            "unit": "ns",
            "range": "± 25709.87444705503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3020190.696969697,
            "unit": "ns",
            "range": "± 142172.2176772533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3031405.043229167,
            "unit": "ns",
            "range": "± 49781.51441697472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919212.71640625,
            "unit": "ns",
            "range": "± 8991.53130429853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613092.6925130208,
            "unit": "ns",
            "range": "± 5579.21233728972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1644310.6332310268,
            "unit": "ns",
            "range": "± 15749.21709752766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469836.0709751674,
            "unit": "ns",
            "range": "± 787.6599807714609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424410.01119791664,
            "unit": "ns",
            "range": "± 829.6063671883302"
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
        "date": 1721105802249,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10812602.923076924,
            "unit": "ns",
            "range": "± 136798.8729068223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26683779.5,
            "unit": "ns",
            "range": "± 184580.25245727753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67316564.26666667,
            "unit": "ns",
            "range": "± 110336.4820922583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136036002.76923078,
            "unit": "ns",
            "range": "± 104065.83369767576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273140645.14285713,
            "unit": "ns",
            "range": "± 550971.8704646932"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14251.741935483871,
            "unit": "ns",
            "range": "± 426.6128586702418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110978.04651162791,
            "unit": "ns",
            "range": "± 3896.322789952014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 108069.0701754386,
            "unit": "ns",
            "range": "± 4699.344566227329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92284.1282051282,
            "unit": "ns",
            "range": "± 3157.9929600558776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3029996.95,
            "unit": "ns",
            "range": "± 135041.28247272692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2780791.97,
            "unit": "ns",
            "range": "± 165480.9016877875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5232.357142857143,
            "unit": "ns",
            "range": "± 591.4557853565607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26899.64285714286,
            "unit": "ns",
            "range": "± 1349.2791260776426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22960.242105263158,
            "unit": "ns",
            "range": "± 1764.4773303366967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29915.673684210527,
            "unit": "ns",
            "range": "± 5472.156363329327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1156.731182795699,
            "unit": "ns",
            "range": "± 203.21760342832263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4588.511764705882,
            "unit": "ns",
            "range": "± 335.26256569319224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 689953.3544303797,
            "unit": "ns",
            "range": "± 33142.71434230052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1275659.3333333333,
            "unit": "ns",
            "range": "± 39536.444687329764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1067751.6046511629,
            "unit": "ns",
            "range": "± 57776.60889347951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9665907.383838383,
            "unit": "ns",
            "range": "± 1530823.8127520988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2184548.6764705884,
            "unit": "ns",
            "range": "± 69609.23316530541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2323748.5135135134,
            "unit": "ns",
            "range": "± 78916.76072561154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2597592.5,
            "unit": "ns",
            "range": "± 45141.974190410554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2328339.152173913,
            "unit": "ns",
            "range": "± 89602.13755956381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2963869.5342465756,
            "unit": "ns",
            "range": "± 142849.98815006774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3009213.3638822115,
            "unit": "ns",
            "range": "± 15709.446273075375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 931962.9492885044,
            "unit": "ns",
            "range": "± 3384.5687753580255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615991.2248697917,
            "unit": "ns",
            "range": "± 4908.712933248648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1645827.4222935268,
            "unit": "ns",
            "range": "± 15381.949557431322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464586.0111653646,
            "unit": "ns",
            "range": "± 1091.5006711259832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 433253.392578125,
            "unit": "ns",
            "range": "± 1118.140960429527"
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
        "date": 1721177973847,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10712244.4375,
            "unit": "ns",
            "range": "± 180450.49921052912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26562824,
            "unit": "ns",
            "range": "± 121304.76398977653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67510788.42857143,
            "unit": "ns",
            "range": "± 91260.97368575151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135868673.46153846,
            "unit": "ns",
            "range": "± 252152.641502991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276464646.0714286,
            "unit": "ns",
            "range": "± 330709.062382508"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14211.92,
            "unit": "ns",
            "range": "± 297.83859163423847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110182.35384615384,
            "unit": "ns",
            "range": "± 4874.462103115741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106462.67307692308,
            "unit": "ns",
            "range": "± 4367.8765681455625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91437.21212121213,
            "unit": "ns",
            "range": "± 2847.449042098644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2994631.0217391304,
            "unit": "ns",
            "range": "± 167499.83899424627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2819272.4264705884,
            "unit": "ns",
            "range": "± 133817.87378800995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4853.404255319149,
            "unit": "ns",
            "range": "± 464.6582584932701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26220.005494505494,
            "unit": "ns",
            "range": "± 1501.706594908505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23936.083333333332,
            "unit": "ns",
            "range": "± 1635.9139062835577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29824.916666666668,
            "unit": "ns",
            "range": "± 5289.743465407804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1259.0520833333333,
            "unit": "ns",
            "range": "± 220.97851144835283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4767.360465116279,
            "unit": "ns",
            "range": "± 362.7470326725256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676478.4705882353,
            "unit": "ns",
            "range": "± 32223.949387118886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1247187.3333333333,
            "unit": "ns",
            "range": "± 26503.567125622034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1085049.3651685393,
            "unit": "ns",
            "range": "± 59445.792559690846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9452572.02,
            "unit": "ns",
            "range": "± 1330129.1628859413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186477.230769231,
            "unit": "ns",
            "range": "± 36228.409533941376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2290930.6346153845,
            "unit": "ns",
            "range": "± 83282.92089772089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2580044.6153846155,
            "unit": "ns",
            "range": "± 40871.41924282881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2311767.6428571427,
            "unit": "ns",
            "range": "± 40562.70550614224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2941604.846153846,
            "unit": "ns",
            "range": "± 135352.09901404267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3053284.1946614585,
            "unit": "ns",
            "range": "± 62256.84509452801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924771.5341099331,
            "unit": "ns",
            "range": "± 2509.390539667121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612866.2329427083,
            "unit": "ns",
            "range": "± 5079.813194142753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1645048.4763020833,
            "unit": "ns",
            "range": "± 19841.794572315735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467855.65771484375,
            "unit": "ns",
            "range": "± 626.1136974550247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423291.17705078126,
            "unit": "ns",
            "range": "± 1148.6176881591357"
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
          "id": "a9f0615a9c8a09a2d116816e927e0a55d2aa612a",
          "message": "Changelog",
          "timestamp": "2024-07-17T13:07:43+09:00",
          "tree_id": "a89426d116c187bbcf064240180c86d8c1973a2c",
          "url": "https://github.com/planetarium/libplanet/commit/a9f0615a9c8a09a2d116816e927e0a55d2aa612a"
        },
        "date": 1721189740302,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10811304.23076923,
            "unit": "ns",
            "range": "± 136302.82205146123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26601177.807692308,
            "unit": "ns",
            "range": "± 135816.44838493396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68078901.5,
            "unit": "ns",
            "range": "± 105898.33148082682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135668491.57142857,
            "unit": "ns",
            "range": "± 183319.71936554924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272802669.8,
            "unit": "ns",
            "range": "± 369547.95931887225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14000.42857142857,
            "unit": "ns",
            "range": "± 329.4906025106894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109531.93548387097,
            "unit": "ns",
            "range": "± 2687.6921194646266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104850.3090909091,
            "unit": "ns",
            "range": "± 4245.184748729052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 96872.03125,
            "unit": "ns",
            "range": "± 2985.5533499576836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3039354.2688172045,
            "unit": "ns",
            "range": "± 171358.2598611268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2832218.6716417912,
            "unit": "ns",
            "range": "± 133225.51846790485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4971.833333333333,
            "unit": "ns",
            "range": "± 347.75027362892007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26585.61797752809,
            "unit": "ns",
            "range": "± 1613.0918822504273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22536.402597402597,
            "unit": "ns",
            "range": "± 1144.3398609511012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30192.484536082473,
            "unit": "ns",
            "range": "± 5338.683590692486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1145.4719101123596,
            "unit": "ns",
            "range": "± 259.7897353406317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4888.3,
            "unit": "ns",
            "range": "± 289.0541899352111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 674771.3661971831,
            "unit": "ns",
            "range": "± 32605.46494344575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1282431.3653846155,
            "unit": "ns",
            "range": "± 52414.937038090706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1079651.3554216868,
            "unit": "ns",
            "range": "± 55030.231638825084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9332033.71,
            "unit": "ns",
            "range": "± 1338909.247942693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2200415.46,
            "unit": "ns",
            "range": "± 87535.69460936073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2279259.886792453,
            "unit": "ns",
            "range": "± 81715.6366167409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2584624.03125,
            "unit": "ns",
            "range": "± 73737.72191485536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2274969.5263157897,
            "unit": "ns",
            "range": "± 50128.90637631525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2988624.6447368423,
            "unit": "ns",
            "range": "± 146058.5686156257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3037648.83671875,
            "unit": "ns",
            "range": "± 45449.48501052232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919495.0740885417,
            "unit": "ns",
            "range": "± 6238.970782553134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615118.9311848958,
            "unit": "ns",
            "range": "± 4140.289078752132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1642659.4231770833,
            "unit": "ns",
            "range": "± 12637.238774630257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463842.26904296875,
            "unit": "ns",
            "range": "± 617.766984482477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418861.9305889423,
            "unit": "ns",
            "range": "± 460.133295201749"
          }
        ]
      }
    ]
  }
}