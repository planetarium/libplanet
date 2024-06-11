window.BENCHMARK_DATA = {
  "lastUpdate": 1718097172833,
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
          "id": "acefa767a052bbf8b7b8bace776de53727691e83",
          "message": "Merge pull request #3805 from greymistcube/release/4.6.0\n\n🚀 Release 4.6.0",
          "timestamp": "2024-05-27T13:54:48+09:00",
          "tree_id": "26b04820a6d9dd8d731598d5a003c296450a4cdc",
          "url": "https://github.com/planetarium/libplanet/commit/acefa767a052bbf8b7b8bace776de53727691e83"
        },
        "date": 1716786588888,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009524,
            "unit": "ns",
            "range": "± 82379.67793924506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1809460.3448275863,
            "unit": "ns",
            "range": "± 78326.36834953076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596201.0416666667,
            "unit": "ns",
            "range": "± 114827.82029932024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6993274.193548387,
            "unit": "ns",
            "range": "± 164986.445842766"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36374.73684210526,
            "unit": "ns",
            "range": "± 5016.419177678577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5211064.285714285,
            "unit": "ns",
            "range": "± 40945.24687626443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13347260,
            "unit": "ns",
            "range": "± 127086.99944751008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33756806.666666664,
            "unit": "ns",
            "range": "± 392523.7162382979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66934321.428571425,
            "unit": "ns",
            "range": "± 822600.6753242766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136436720,
            "unit": "ns",
            "range": "± 1907412.0141475166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3332059.8772321427,
            "unit": "ns",
            "range": "± 26710.077198203002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081041.7447916667,
            "unit": "ns",
            "range": "± 3651.6462062383453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753727.98828125,
            "unit": "ns",
            "range": "± 1843.3853205513599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2009205.3013392857,
            "unit": "ns",
            "range": "± 4659.114726491391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618777.783203125,
            "unit": "ns",
            "range": "± 1432.1065776040446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553342.9966517857,
            "unit": "ns",
            "range": "± 446.0879291807978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2248564.0625,
            "unit": "ns",
            "range": "± 97112.67938595785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2317025.641025641,
            "unit": "ns",
            "range": "± 80210.38362347882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2926712.5,
            "unit": "ns",
            "range": "± 52331.327456250656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2953769.4444444445,
            "unit": "ns",
            "range": "± 97445.2251104455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7884225.806451613,
            "unit": "ns",
            "range": "± 154054.2328050784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183062.29508196723,
            "unit": "ns",
            "range": "± 7340.348854889352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176888.7323943662,
            "unit": "ns",
            "range": "± 7510.479332159349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151344.44444444444,
            "unit": "ns",
            "range": "± 5025.686545391113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2845646.6666666665,
            "unit": "ns",
            "range": "± 44555.773502218006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2621110,
            "unit": "ns",
            "range": "± 30105.523935460275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12418.556701030928,
            "unit": "ns",
            "range": "± 1770.6125291893584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57992.47311827957,
            "unit": "ns",
            "range": "± 4582.415267822146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49119.354838709674,
            "unit": "ns",
            "range": "± 2783.1893678841734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54959.52380952381,
            "unit": "ns",
            "range": "± 8067.189520425463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2721.4285714285716,
            "unit": "ns",
            "range": "± 568.095026173339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10846.666666666666,
            "unit": "ns",
            "range": "± 1201.889897554138"
          }
        ]
      },
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
          "id": "96bc91e80ec0fc970e057b6927c7bd47681c3836",
          "message": "Merge pull request #3807 from greymistcube/prepare/4.6.1\n\n🔧 Prepare 4.6.1",
          "timestamp": "2024-05-28T13:30:49+09:00",
          "tree_id": "55f0afe5fac922701956f1aae5f98ce7429ef7a4",
          "url": "https://github.com/planetarium/libplanet/commit/96bc91e80ec0fc970e057b6927c7bd47681c3836"
        },
        "date": 1716871344221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953241.4141414141,
            "unit": "ns",
            "range": "± 95630.11758759126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1754276.923076923,
            "unit": "ns",
            "range": "± 89661.56558780548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1484284,
            "unit": "ns",
            "range": "± 106539.78791081203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7688860,
            "unit": "ns",
            "range": "± 499715.74364776444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35202.63157894737,
            "unit": "ns",
            "range": "± 5446.29177192607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5098176.923076923,
            "unit": "ns",
            "range": "± 28674.121719945608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13301192.857142856,
            "unit": "ns",
            "range": "± 170939.63605853435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33289496.666666668,
            "unit": "ns",
            "range": "± 557291.7841370592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64423900,
            "unit": "ns",
            "range": "± 973384.0257259523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132738407.6923077,
            "unit": "ns",
            "range": "± 763034.4765709458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3367906.8489583335,
            "unit": "ns",
            "range": "± 10116.470423329003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087760.4166666667,
            "unit": "ns",
            "range": "± 4270.020437326761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761940.4752604166,
            "unit": "ns",
            "range": "± 2420.9202272634116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931747.0572916667,
            "unit": "ns",
            "range": "± 6337.186963291791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626138.1068638393,
            "unit": "ns",
            "range": "± 996.0273365121814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576322.55859375,
            "unit": "ns",
            "range": "± 1402.5667863994584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2157815.476190476,
            "unit": "ns",
            "range": "± 115652.07741590241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2303158.1818181816,
            "unit": "ns",
            "range": "± 97935.62453054839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2815909.6774193547,
            "unit": "ns",
            "range": "± 84066.74473234035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2895532,
            "unit": "ns",
            "range": "± 294160.31562549167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8698233.333333334,
            "unit": "ns",
            "range": "± 676357.0736018335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168714.4927536232,
            "unit": "ns",
            "range": "± 8150.1763849970985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161991.66666666666,
            "unit": "ns",
            "range": "± 6932.710274590482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146336.58536585365,
            "unit": "ns",
            "range": "± 5197.920550449044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2824558.620689655,
            "unit": "ns",
            "range": "± 81415.9624452521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2587913.4146341463,
            "unit": "ns",
            "range": "± 136403.6102145187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8713.636363636364,
            "unit": "ns",
            "range": "± 645.2624554114676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49141.573033707864,
            "unit": "ns",
            "range": "± 3060.815733099892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42721.739130434784,
            "unit": "ns",
            "range": "± 910.5225880774235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45553.60824742268,
            "unit": "ns",
            "range": "± 8218.044955255351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1968.75,
            "unit": "ns",
            "range": "± 214.87450437773893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9120.833333333334,
            "unit": "ns",
            "range": "± 1448.5503945717714"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24818acb264e776eeba334578af431523b027dac",
          "message": "Merge pull request #3816 from s2quake/port/4.5.2-to-4.6\n\n🔀 Port 4.5.2 to 4.6.1",
          "timestamp": "2024-06-11T17:57:55+09:00",
          "tree_id": "5e1b2cb9e6f7b34c5685e98a1a9646f710b7c193",
          "url": "https://github.com/planetarium/libplanet/commit/24818acb264e776eeba334578af431523b027dac"
        },
        "date": 1718096966219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 922770.5263157894,
            "unit": "ns",
            "range": "± 70019.43783873133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1718305.0632911392,
            "unit": "ns",
            "range": "± 85007.76570669681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1603448.4210526317,
            "unit": "ns",
            "range": "± 168778.62616971298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6844251.724137931,
            "unit": "ns",
            "range": "± 199963.58350725775"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34568.47826086957,
            "unit": "ns",
            "range": "± 3508.918913935909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4872121.428571428,
            "unit": "ns",
            "range": "± 28376.891426528156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13074942.857142856,
            "unit": "ns",
            "range": "± 75737.8140925422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31546464.285714287,
            "unit": "ns",
            "range": "± 159205.60295099232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64115069.23076923,
            "unit": "ns",
            "range": "± 378504.1818012393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126012850,
            "unit": "ns",
            "range": "± 521358.7495853798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3393034.1145833335,
            "unit": "ns",
            "range": "± 6030.168661280086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1039698.9397321428,
            "unit": "ns",
            "range": "± 1727.8828302974994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728044.1536458334,
            "unit": "ns",
            "range": "± 1507.0241257645746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1893650.4957932692,
            "unit": "ns",
            "range": "± 2071.3780111382403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620370.1381138393,
            "unit": "ns",
            "range": "± 1562.5306934234477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562599.9544270834,
            "unit": "ns",
            "range": "± 1350.5900344295258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120238.4615384615,
            "unit": "ns",
            "range": "± 53300.297011728384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2254805.714285714,
            "unit": "ns",
            "range": "± 73498.81528799968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2791680.434782609,
            "unit": "ns",
            "range": "± 70152.96556151492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2784981.4285714286,
            "unit": "ns",
            "range": "± 130439.43488011071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8158807.547169811,
            "unit": "ns",
            "range": "± 337815.4530606322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166575.8064516129,
            "unit": "ns",
            "range": "± 7252.284783768196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157542.62295081967,
            "unit": "ns",
            "range": "± 7039.186956280142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144152.9411764706,
            "unit": "ns",
            "range": "± 2614.650465898555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2754500,
            "unit": "ns",
            "range": "± 26768.665050230436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2499540,
            "unit": "ns",
            "range": "± 30781.62253219095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9112.222222222223,
            "unit": "ns",
            "range": "± 783.3703872023553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48852.68817204301,
            "unit": "ns",
            "range": "± 3523.9735291734382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42460.9756097561,
            "unit": "ns",
            "range": "± 1530.0127530155569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46300,
            "unit": "ns",
            "range": "± 7652.396700232677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2078.021978021978,
            "unit": "ns",
            "range": "± 166.53474632586955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8752.87356321839,
            "unit": "ns",
            "range": "± 616.2223776459068"
          }
        ]
      }
    ]
  }
}