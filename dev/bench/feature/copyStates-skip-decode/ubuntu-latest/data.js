window.BENCHMARK_DATA = {
  "lastUpdate": 1698989359177,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "0d95a809c7915f9fa05077be7fae2cea78d63196",
          "message": "no fingerprint check",
          "timestamp": "2023-11-03T12:43:51+09:00",
          "tree_id": "089f1c7afd2aa770e71acd3f82f294b0ce086dfc",
          "url": "https://github.com/planetarium/libplanet/commit/0d95a809c7915f9fa05077be7fae2cea78d63196"
        },
        "date": 1698983685151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5663470.5,
            "unit": "ns",
            "range": "± 20765.96694988308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15008925.2,
            "unit": "ns",
            "range": "± 206774.83315992373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37464230.416666664,
            "unit": "ns",
            "range": "± 188829.097034357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75558652.46666667,
            "unit": "ns",
            "range": "± 932673.7058474008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152582052.85714287,
            "unit": "ns",
            "range": "± 1818457.5417122426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1059704.7419354839,
            "unit": "ns",
            "range": "± 83072.06854251721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1999460.180851064,
            "unit": "ns",
            "range": "± 77917.91629911524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1649496.988372093,
            "unit": "ns",
            "range": "± 89123.16533961752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3997524.3604651163,
            "unit": "ns",
            "range": "± 144855.74646861636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2377342.1304347827,
            "unit": "ns",
            "range": "± 89854.43717593935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2463517.75,
            "unit": "ns",
            "range": "± 45675.85279804798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3135693.3571428573,
            "unit": "ns",
            "range": "± 35349.8335402612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3220637.2421052633,
            "unit": "ns",
            "range": "± 253990.20025829595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5159136.425925926,
            "unit": "ns",
            "range": "± 208834.18539611864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42303.33505154639,
            "unit": "ns",
            "range": "± 6330.107300104945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4052202.9226973685,
            "unit": "ns",
            "range": "± 80595.730338163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1314511.7893229167,
            "unit": "ns",
            "range": "± 2732.2261790147572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 904983.5288085938,
            "unit": "ns",
            "range": "± 1248.0635526366243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2003461.0856370192,
            "unit": "ns",
            "range": "± 24356.995465090928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624061.0029994419,
            "unit": "ns",
            "range": "± 1153.120472571775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588300.7161959135,
            "unit": "ns",
            "range": "± 705.4879541245729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213288.41549295775,
            "unit": "ns",
            "range": "± 10464.609946654184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209445.18279569893,
            "unit": "ns",
            "range": "± 13129.960342953322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179934.42307692306,
            "unit": "ns",
            "range": "± 4844.4948295819395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3340165.4,
            "unit": "ns",
            "range": "± 26536.906203033002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2971910.8333333335,
            "unit": "ns",
            "range": "± 52472.46810970311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19310.79591836735,
            "unit": "ns",
            "range": "± 4983.030425951919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67150.21212121213,
            "unit": "ns",
            "range": "± 8336.087188712147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78255.02,
            "unit": "ns",
            "range": "± 16572.809918829593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81227.66666666667,
            "unit": "ns",
            "range": "± 18013.222533484015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3023.211111111111,
            "unit": "ns",
            "range": "± 637.5049415000277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14579.697916666666,
            "unit": "ns",
            "range": "± 2554.064975144283"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "ba4928bdc74dc0465935b91a4fdc438691e49dfc",
          "message": "no fingerprint check",
          "timestamp": "2023-11-03T12:50:31+09:00",
          "tree_id": "3c9a4548973c2ea8bb24d493a426ef5607ff29c1",
          "url": "https://github.com/planetarium/libplanet/commit/ba4928bdc74dc0465935b91a4fdc438691e49dfc"
        },
        "date": 1698984264514,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8651261.952380951,
            "unit": "ns",
            "range": "± 204440.05529726218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22558241.133333333,
            "unit": "ns",
            "range": "± 222768.62735642705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57690117,
            "unit": "ns",
            "range": "± 402386.3680247417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115345530.93333334,
            "unit": "ns",
            "range": "± 829949.721656978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229217330.46666667,
            "unit": "ns",
            "range": "± 1921958.511911143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1562156.84,
            "unit": "ns",
            "range": "± 119379.91549304119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2952921,
            "unit": "ns",
            "range": "± 47096.96052673827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2468387.238095238,
            "unit": "ns",
            "range": "± 127621.51048075089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6033184.406779661,
            "unit": "ns",
            "range": "± 262708.01518803835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3729231.066666667,
            "unit": "ns",
            "range": "± 69359.45271911564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3926929.9545454546,
            "unit": "ns",
            "range": "± 93921.19661689909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4712758.24,
            "unit": "ns",
            "range": "± 121651.33563566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4702304.043478261,
            "unit": "ns",
            "range": "± 220373.43402602902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7312737.307692308,
            "unit": "ns",
            "range": "± 99508.03056821144"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48807.47368421053,
            "unit": "ns",
            "range": "± 2486.6728050345196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6103775.56640625,
            "unit": "ns",
            "range": "± 21720.22348190156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1930787.2957589286,
            "unit": "ns",
            "range": "± 4406.2367232698225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393804.4333333333,
            "unit": "ns",
            "range": "± 3405.6970361054687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2682352.654166667,
            "unit": "ns",
            "range": "± 7672.947699254611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841169.3322916667,
            "unit": "ns",
            "range": "± 1311.6210779646685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765653.25859375,
            "unit": "ns",
            "range": "± 338.7096443884924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298621.925,
            "unit": "ns",
            "range": "± 10491.569466291765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285536.975,
            "unit": "ns",
            "range": "± 9911.190159813015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250150.33333333334,
            "unit": "ns",
            "range": "± 7355.00909928565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4597568.6,
            "unit": "ns",
            "range": "± 70101.7149991965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4126331.066666667,
            "unit": "ns",
            "range": "± 54019.04805643848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21340.521739130436,
            "unit": "ns",
            "range": "± 2723.309159780064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91774.41111111111,
            "unit": "ns",
            "range": "± 6243.03162076348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80411.71428571429,
            "unit": "ns",
            "range": "± 2294.00818328391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104301.48453608247,
            "unit": "ns",
            "range": "± 14166.895178632565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5673.257731958763,
            "unit": "ns",
            "range": "± 790.7699080425581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20884.25773195876,
            "unit": "ns",
            "range": "± 2105.820763771766"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "Robert",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "Robert",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "2adc48f94542d57d5e097b6a30c3d056d73a9222",
          "message": "remove fingerpring check",
          "timestamp": "2023-11-03T14:18:25+09:00",
          "tree_id": "26ca58306dcf516bb0d07740be5129d12b410786",
          "url": "https://github.com/planetarium/libplanet/commit/2adc48f94542d57d5e097b6a30c3d056d73a9222"
        },
        "date": 1698989336110,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5807093,
            "unit": "ns",
            "range": "± 53245.48952764414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14728478.866666667,
            "unit": "ns",
            "range": "± 73392.84818395034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37456689.4,
            "unit": "ns",
            "range": "± 201632.32327566642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77212624.07142857,
            "unit": "ns",
            "range": "± 370783.65834197175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154416506,
            "unit": "ns",
            "range": "± 730075.4897322833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1099088.5157894737,
            "unit": "ns",
            "range": "± 100524.33245799123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2052663.7222222222,
            "unit": "ns",
            "range": "± 76446.53695554135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1728095.1875,
            "unit": "ns",
            "range": "± 136891.42302210577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4234822.097560976,
            "unit": "ns",
            "range": "± 150065.3890375467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2498522.476190476,
            "unit": "ns",
            "range": "± 85645.99514435985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2614784.638888889,
            "unit": "ns",
            "range": "± 78624.6393031573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3334422.9375,
            "unit": "ns",
            "range": "± 61113.49836434801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3230460.0714285714,
            "unit": "ns",
            "range": "± 208819.9205994281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5212729.595238095,
            "unit": "ns",
            "range": "± 100607.37631004237"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45694.54639175258,
            "unit": "ns",
            "range": "± 9698.414295883436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3999203.8997395835,
            "unit": "ns",
            "range": "± 10573.683274834442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1348277.8152126735,
            "unit": "ns",
            "range": "± 28635.175038743597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 905613.0310058594,
            "unit": "ns",
            "range": "± 2355.1550368581634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935768.4381009615,
            "unit": "ns",
            "range": "± 3791.7004019986684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633344.488141741,
            "unit": "ns",
            "range": "± 2132.1887813352064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 593916.5485677083,
            "unit": "ns",
            "range": "± 9911.545161861499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217227.79365079364,
            "unit": "ns",
            "range": "± 8965.706983545566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213608.99462365592,
            "unit": "ns",
            "range": "± 18865.048747689154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178909.2857142857,
            "unit": "ns",
            "range": "± 2582.109287699956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3072202.705882353,
            "unit": "ns",
            "range": "± 55420.16103793446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2875945.3571428573,
            "unit": "ns",
            "range": "± 17907.25670527988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15359.77894736842,
            "unit": "ns",
            "range": "± 2457.789619214393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70115.68085106384,
            "unit": "ns",
            "range": "± 8278.930906271182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68903.24742268042,
            "unit": "ns",
            "range": "± 11535.64900918645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97031.41758241758,
            "unit": "ns",
            "range": "± 13455.015412738134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5797.632653061224,
            "unit": "ns",
            "range": "± 1877.1984479936025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15732.810526315789,
            "unit": "ns",
            "range": "± 2540.2561995717056"
          }
        ]
      }
    ]
  }
}