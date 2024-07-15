window.BENCHMARK_DATA = {
  "lastUpdate": 1721036231064,
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
      }
    ]
  }
}