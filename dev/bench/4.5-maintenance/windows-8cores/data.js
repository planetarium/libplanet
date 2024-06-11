window.BENCHMARK_DATA = {
  "lastUpdate": 1718097002680,
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
          "id": "51b31e7a885df1342681b51dac515f443bc7bf7a",
          "message": "Merge pull request #3784 from greymistcube/release/4.5.0\n\n🚀 Release 4.5.0",
          "timestamp": "2024-05-14T17:05:00+09:00",
          "tree_id": "d0af614dc8458ab70ce6395965f553458859c58a",
          "url": "https://github.com/planetarium/libplanet/commit/51b31e7a885df1342681b51dac515f443bc7bf7a"
        },
        "date": 1715675837601,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009850.5376344086,
            "unit": "ns",
            "range": "± 96786.14325863865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1833042.0634920634,
            "unit": "ns",
            "range": "± 84009.06307019135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1567334.831460674,
            "unit": "ns",
            "range": "± 86598.64068469654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6945920,
            "unit": "ns",
            "range": "± 136420.18118054722"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36280.21978021978,
            "unit": "ns",
            "range": "± 3824.982782247952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5317496.666666667,
            "unit": "ns",
            "range": "± 99169.31312995299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14207042.857142856,
            "unit": "ns",
            "range": "± 77142.67216095037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34586700,
            "unit": "ns",
            "range": "± 110866.10080494537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68261671.42857143,
            "unit": "ns",
            "range": "± 298268.09166502295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142590514.2857143,
            "unit": "ns",
            "range": "± 993523.1349999958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3369876.7020089286,
            "unit": "ns",
            "range": "± 8928.51970832349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087051.5494791667,
            "unit": "ns",
            "range": "± 1758.6604918666892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759670.3752790178,
            "unit": "ns",
            "range": "± 1743.2142743047448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932128.8411458333,
            "unit": "ns",
            "range": "± 7925.345434769179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624565.5533854166,
            "unit": "ns",
            "range": "± 2702.050686576803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565016.9661458334,
            "unit": "ns",
            "range": "± 1850.7397989489918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2243953.846153846,
            "unit": "ns",
            "range": "± 59380.665073872195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2431576.470588235,
            "unit": "ns",
            "range": "± 50016.22802604825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2980068.4210526315,
            "unit": "ns",
            "range": "± 59590.71565112191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2963630.434782609,
            "unit": "ns",
            "range": "± 109911.03648873932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7884472,
            "unit": "ns",
            "range": "± 147790.76854346035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 191458.82352941178,
            "unit": "ns",
            "range": "± 5713.904765122021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183062.5,
            "unit": "ns",
            "range": "± 9518.620990963987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144570.83333333334,
            "unit": "ns",
            "range": "± 3026.187035035094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2768285.714285714,
            "unit": "ns",
            "range": "± 25048.68665812049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2547061.5384615385,
            "unit": "ns",
            "range": "± 28172.313195214036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12142.696629213484,
            "unit": "ns",
            "range": "± 1085.1149541585485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59977.65957446808,
            "unit": "ns",
            "range": "± 5882.805348180812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48402,
            "unit": "ns",
            "range": "± 1936.7013824794878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57979.72972972973,
            "unit": "ns",
            "range": "± 2734.2064401687376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2924.226804123711,
            "unit": "ns",
            "range": "± 555.5174671937763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11742.391304347826,
            "unit": "ns",
            "range": "± 1759.4475716218974"
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
          "id": "f8cbd4da619c690f41d329f5b5a901a62aafedc5",
          "message": "Merge pull request #3800 from greymistcube/chore/suppress-warning\n\n🔧 Suppressed security warnings during build",
          "timestamp": "2024-05-27T09:43:58+09:00",
          "tree_id": "a1871d2e438b7b74090577e0a07fbd863744452d",
          "url": "https://github.com/planetarium/libplanet/commit/f8cbd4da619c690f41d329f5b5a901a62aafedc5"
        },
        "date": 1716771436783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961227.8350515463,
            "unit": "ns",
            "range": "± 99950.16752348396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1767045.9770114943,
            "unit": "ns",
            "range": "± 123672.8493869525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1520389.6907216494,
            "unit": "ns",
            "range": "± 129117.92049367774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6993167.741935484,
            "unit": "ns",
            "range": "± 181792.83335177027"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35428.57142857143,
            "unit": "ns",
            "range": "± 3930.09148082065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5092278.571428572,
            "unit": "ns",
            "range": "± 28453.28637423989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13611660,
            "unit": "ns",
            "range": "± 212454.89538118104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32369007.692307692,
            "unit": "ns",
            "range": "± 121648.85573881945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68360086.66666667,
            "unit": "ns",
            "range": "± 623180.3635576217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132887379.16666667,
            "unit": "ns",
            "range": "± 2919074.3269174974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350491.9010416665,
            "unit": "ns",
            "range": "± 4532.379129894358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058410.2734375,
            "unit": "ns",
            "range": "± 5006.308136982237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737482.2893415178,
            "unit": "ns",
            "range": "± 2015.0190957376155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951879.8307291667,
            "unit": "ns",
            "range": "± 29448.39797282616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612969.5638020834,
            "unit": "ns",
            "range": "± 464.93873754459236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567812.6888020834,
            "unit": "ns",
            "range": "± 2183.4540695384003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2160032.6086956523,
            "unit": "ns",
            "range": "± 81832.72926959081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316840,
            "unit": "ns",
            "range": "± 43172.789049188315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2774740,
            "unit": "ns",
            "range": "± 42164.79235435311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2769294.827586207,
            "unit": "ns",
            "range": "± 66788.12380617305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8091151.3513513515,
            "unit": "ns",
            "range": "± 218431.370637733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169477.19298245615,
            "unit": "ns",
            "range": "± 7097.510065002164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164736.4705882353,
            "unit": "ns",
            "range": "± 8180.3022277795535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145455.55555555556,
            "unit": "ns",
            "range": "± 3042.149437916287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2670110,
            "unit": "ns",
            "range": "± 39455.37805094328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2463414.285714286,
            "unit": "ns",
            "range": "± 43248.01208669075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9853.191489361701,
            "unit": "ns",
            "range": "± 1188.8100246740435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49789.01098901099,
            "unit": "ns",
            "range": "± 2994.1962582989167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44080.61224489796,
            "unit": "ns",
            "range": "± 1713.9384568920805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50873.958333333336,
            "unit": "ns",
            "range": "± 8414.726999876832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2337.1134020618556,
            "unit": "ns",
            "range": "± 356.28862002036186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9444.21052631579,
            "unit": "ns",
            "range": "± 1432.7265918946505"
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
          "id": "56ecf057e4cadda0384943b8383850ec44919a76",
          "message": "Merge pull request #3802 from greymistcube/release/4.5.1\n\n🚀 Release 4.5.1",
          "timestamp": "2024-05-27T10:40:45+09:00",
          "tree_id": "4083e2db9d478b47f3241ff24140f6708124e097",
          "url": "https://github.com/planetarium/libplanet/commit/56ecf057e4cadda0384943b8383850ec44919a76"
        },
        "date": 1716774678596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 942552.5252525252,
            "unit": "ns",
            "range": "± 72905.32488521846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1719698.2758620689,
            "unit": "ns",
            "range": "± 74505.4089438309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1513932.9896907217,
            "unit": "ns",
            "range": "± 129316.59287195247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6934462.5,
            "unit": "ns",
            "range": "± 179122.12936502532"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36232.989690721646,
            "unit": "ns",
            "range": "± 5434.9892986993045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5234521.428571428,
            "unit": "ns",
            "range": "± 23092.09583623561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13171003.333333334,
            "unit": "ns",
            "range": "± 98387.49097803226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32416553.333333332,
            "unit": "ns",
            "range": "± 260743.79013744142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66206714.28571428,
            "unit": "ns",
            "range": "± 426641.42547819467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130650506.66666667,
            "unit": "ns",
            "range": "± 779939.9743081576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3422655.6119791665,
            "unit": "ns",
            "range": "± 6622.539569455575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059057.2005208333,
            "unit": "ns",
            "range": "± 3826.4029001283784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744459.6609933035,
            "unit": "ns",
            "range": "± 1008.4004675213324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960430.5943080357,
            "unit": "ns",
            "range": "± 4300.589441975218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618276.0221354166,
            "unit": "ns",
            "range": "± 840.3512800732174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569468.9662388393,
            "unit": "ns",
            "range": "± 842.7492325895698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2133788,
            "unit": "ns",
            "range": "± 36613.0022441937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2255314.814814815,
            "unit": "ns",
            "range": "± 88312.65087563639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2810752.380952381,
            "unit": "ns",
            "range": "± 65177.270724138325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2828601.4492753623,
            "unit": "ns",
            "range": "± 135409.82618436698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8004416.129032258,
            "unit": "ns",
            "range": "± 220989.0496484297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173098.4375,
            "unit": "ns",
            "range": "± 7529.318192271873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168472.46376811594,
            "unit": "ns",
            "range": "± 7326.560947072504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144277.5,
            "unit": "ns",
            "range": "± 5096.881273675964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2689386.6666666665,
            "unit": "ns",
            "range": "± 46196.55006702598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2428157.8947368423,
            "unit": "ns",
            "range": "± 53776.43345668842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9953.191489361701,
            "unit": "ns",
            "range": "± 1400.053925817005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52353.846153846156,
            "unit": "ns",
            "range": "± 4226.196285400743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43416.666666666664,
            "unit": "ns",
            "range": "± 2152.823236432556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51402.1978021978,
            "unit": "ns",
            "range": "± 8747.367578902786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2325.773195876289,
            "unit": "ns",
            "range": "± 465.08922766574767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9421.978021978022,
            "unit": "ns",
            "range": "± 956.823703464541"
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
          "id": "61d610a54e250ec46fad08bb0b55d448ee8072d4",
          "message": "Merge pull request #3803 from greymistcube/prepare/4.5.2\n\n🔧 Prepare 4.5.2",
          "timestamp": "2024-05-27T13:56:13+09:00",
          "tree_id": "3dce6529ec640cc674e777c61bed5da006951acc",
          "url": "https://github.com/planetarium/libplanet/commit/61d610a54e250ec46fad08bb0b55d448ee8072d4"
        },
        "date": 1716786463627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008826.5957446808,
            "unit": "ns",
            "range": "± 95990.62361863807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1770686.440677966,
            "unit": "ns",
            "range": "± 74871.2238300033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1535180.808080808,
            "unit": "ns",
            "range": "± 115767.83829291195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6986016.666666667,
            "unit": "ns",
            "range": "± 180565.48773871167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37733.333333333336,
            "unit": "ns",
            "range": "± 5058.684597311089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5056453.333333333,
            "unit": "ns",
            "range": "± 33878.87809465332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13056200,
            "unit": "ns",
            "range": "± 110996.58345400338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33624556.666666664,
            "unit": "ns",
            "range": "± 282158.3002163013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67501376.92307693,
            "unit": "ns",
            "range": "± 512981.4667767348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138360016.66666666,
            "unit": "ns",
            "range": "± 2779236.445342074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3372069.5182291665,
            "unit": "ns",
            "range": "± 10158.293354357058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072699.453125,
            "unit": "ns",
            "range": "± 2957.8142873424554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740849.4516225961,
            "unit": "ns",
            "range": "± 1327.9364672945778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915035.0060096155,
            "unit": "ns",
            "range": "± 3136.394147943269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631907.3091947115,
            "unit": "ns",
            "range": "± 769.5300353334953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579553.80859375,
            "unit": "ns",
            "range": "± 2046.407986511007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2246627.868852459,
            "unit": "ns",
            "range": "± 100433.21683445098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2377500,
            "unit": "ns",
            "range": "± 85470.05199035532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2875636.6666666665,
            "unit": "ns",
            "range": "± 84081.93349483518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2846569.662921348,
            "unit": "ns",
            "range": "± 157452.95358274656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7939580.645161291,
            "unit": "ns",
            "range": "± 201878.8455474468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180875,
            "unit": "ns",
            "range": "± 6932.977009392571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168557.57575757575,
            "unit": "ns",
            "range": "± 7272.668764333417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142320,
            "unit": "ns",
            "range": "± 3251.6554488282945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2718128.5714285714,
            "unit": "ns",
            "range": "± 19882.856108541524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2459371.4285714286,
            "unit": "ns",
            "range": "± 27431.969798630336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11452.631578947368,
            "unit": "ns",
            "range": "± 1920.3192390441816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56944.444444444445,
            "unit": "ns",
            "range": "± 5504.862826558808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46068.131868131866,
            "unit": "ns",
            "range": "± 3329.4270151310197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58340.425531914894,
            "unit": "ns",
            "range": "± 9670.866560553366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3058.9473684210525,
            "unit": "ns",
            "range": "± 580.9923163592898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11211.702127659575,
            "unit": "ns",
            "range": "± 1318.446983368089"
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
          "id": "89642e1576f1e96f5a14684c78ea274fd857d9d8",
          "message": "Merge pull request #3810 from s2quake/feature/gql-bpv\n\nAdds the ProtocolVersion field to BlockType in Explorer",
          "timestamp": "2024-06-10T17:50:02+09:00",
          "tree_id": "17fa89e1f0d1afee09bd8c8576a127f7f72daa12",
          "url": "https://github.com/planetarium/libplanet/commit/89642e1576f1e96f5a14684c78ea274fd857d9d8"
        },
        "date": 1718009951723,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977584.8484848485,
            "unit": "ns",
            "range": "± 118978.90257472108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1702410,
            "unit": "ns",
            "range": "± 62013.25812818957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1489903,
            "unit": "ns",
            "range": "± 102237.72896163297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6771110.714285715,
            "unit": "ns",
            "range": "± 127112.71853864867"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37902.10526315789,
            "unit": "ns",
            "range": "± 5203.86474523254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5078942.857142857,
            "unit": "ns",
            "range": "± 16078.495637901637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13288580,
            "unit": "ns",
            "range": "± 99632.97790247106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32699757.14285714,
            "unit": "ns",
            "range": "± 143972.54259746204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65288285.71428572,
            "unit": "ns",
            "range": "± 471337.6135362697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136819714.2857143,
            "unit": "ns",
            "range": "± 2350084.765363923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3364200.9375,
            "unit": "ns",
            "range": "± 11241.414670367565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075711.9401041667,
            "unit": "ns",
            "range": "± 6354.529815507259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735039.2578125,
            "unit": "ns",
            "range": "± 1898.704470746295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957243.0208333333,
            "unit": "ns",
            "range": "± 5928.38263523037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619583.1821986607,
            "unit": "ns",
            "range": "± 1183.4328796990624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570783.0904447115,
            "unit": "ns",
            "range": "± 792.8278663860762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2280089.189189189,
            "unit": "ns",
            "range": "± 77267.46758207199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2373035.294117647,
            "unit": "ns",
            "range": "± 47930.430589246615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2923950,
            "unit": "ns",
            "range": "± 66838.33992709967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2890363,
            "unit": "ns",
            "range": "± 197008.73264498665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7746414.285714285,
            "unit": "ns",
            "range": "± 220982.56796389018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175239.68253968254,
            "unit": "ns",
            "range": "± 7166.353724457444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172834.24657534246,
            "unit": "ns",
            "range": "± 8190.97096364314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144890.9090909091,
            "unit": "ns",
            "range": "± 2804.2330401952945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2697328.5714285714,
            "unit": "ns",
            "range": "± 31726.218921153642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2574650,
            "unit": "ns",
            "range": "± 19283.711739743943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11672.413793103447,
            "unit": "ns",
            "range": "± 927.8243688017802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59397.82608695652,
            "unit": "ns",
            "range": "± 5806.532476271301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49834.536082474224,
            "unit": "ns",
            "range": "± 3680.759098739732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65407.608695652176,
            "unit": "ns",
            "range": "± 10464.88879613768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3452.0833333333335,
            "unit": "ns",
            "range": "± 494.1721768279527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13019.791666666666,
            "unit": "ns",
            "range": "± 2339.730969315048"
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
          "id": "d08ba662a1c9f3e4f95e1ed7ccc1ab49587b63b3",
          "message": "Merge pull request #3812 from s2quake/release/4.5.2\n\n🚀 Release 4.5.2",
          "timestamp": "2024-06-11T09:16:24+09:00",
          "tree_id": "7f4910b96854b48ddd182cd1ed1a3314c3da8a27",
          "url": "https://github.com/planetarium/libplanet/commit/d08ba662a1c9f3e4f95e1ed7ccc1ab49587b63b3"
        },
        "date": 1718065564083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017509,
            "unit": "ns",
            "range": "± 139818.9602141052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1758798.4126984128,
            "unit": "ns",
            "range": "± 79849.88232375334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1534663.6363636365,
            "unit": "ns",
            "range": "± 138025.86599837407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6775068.421052632,
            "unit": "ns",
            "range": "± 131752.41112122886"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36124.21052631579,
            "unit": "ns",
            "range": "± 4999.057693960693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5204185.714285715,
            "unit": "ns",
            "range": "± 40573.709887881014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13409696.666666666,
            "unit": "ns",
            "range": "± 217590.7720819936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33550463.333333332,
            "unit": "ns",
            "range": "± 284481.0133425093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66084220,
            "unit": "ns",
            "range": "± 654191.8910271773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130732360,
            "unit": "ns",
            "range": "± 2021506.1095982017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3292778.515625,
            "unit": "ns",
            "range": "± 6574.085950747896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075733.9713541667,
            "unit": "ns",
            "range": "± 3715.769436649162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742102.4065290178,
            "unit": "ns",
            "range": "± 1867.4042848432355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958033.173076923,
            "unit": "ns",
            "range": "± 3414.7298324213893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622812.9361979166,
            "unit": "ns",
            "range": "± 1611.7970654320543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572044.94140625,
            "unit": "ns",
            "range": "± 1053.1305829296762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2211454.5454545454,
            "unit": "ns",
            "range": "± 69972.53073041007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2386925.806451613,
            "unit": "ns",
            "range": "± 72772.60000733763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2920757.1428571427,
            "unit": "ns",
            "range": "± 38273.56417013856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2802770.4225352113,
            "unit": "ns",
            "range": "± 137366.31880212663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7827335.483870967,
            "unit": "ns",
            "range": "± 217360.91882456254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181051.51515151514,
            "unit": "ns",
            "range": "± 8122.92562725529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169121.25,
            "unit": "ns",
            "range": "± 7870.851428860151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143603.7037037037,
            "unit": "ns",
            "range": "± 3873.4283643107815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2708628.5714285714,
            "unit": "ns",
            "range": "± 62494.77692461301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2480420,
            "unit": "ns",
            "range": "± 37007.35834166729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11654.639175257733,
            "unit": "ns",
            "range": "± 1947.2213439153013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54171.57894736842,
            "unit": "ns",
            "range": "± 4675.460226701428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47072.63157894737,
            "unit": "ns",
            "range": "± 3774.873313507979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63375.510204081635,
            "unit": "ns",
            "range": "± 16352.03610528532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2848.9583333333335,
            "unit": "ns",
            "range": "± 526.9564631305775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12161.702127659575,
            "unit": "ns",
            "range": "± 1730.691103364272"
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
          "id": "c6fe9eedd513dd23fda494b11dc6f0e91a5214ac",
          "message": "Merge pull request #3814 from s2quake/prepare/4.5.3\n\n🔧 Prepare 4.5.3",
          "timestamp": "2024-06-11T17:57:15+09:00",
          "tree_id": "956ca3e0810d3beef4e628933cf908c9977a40a6",
          "url": "https://github.com/planetarium/libplanet/commit/c6fe9eedd513dd23fda494b11dc6f0e91a5214ac"
        },
        "date": 1718096842870,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1025974,
            "unit": "ns",
            "range": "± 115940.6035847492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1748335.3846153845,
            "unit": "ns",
            "range": "± 77024.92175987837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1644939.2857142857,
            "unit": "ns",
            "range": "± 46334.47112340568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7090374.193548387,
            "unit": "ns",
            "range": "± 191714.68900033357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36882.97872340425,
            "unit": "ns",
            "range": "± 5234.719458193921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5147746.666666667,
            "unit": "ns",
            "range": "± 63472.43346149421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13676920,
            "unit": "ns",
            "range": "± 108881.6342902433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33082540,
            "unit": "ns",
            "range": "± 458117.3349387999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65409026.666666664,
            "unit": "ns",
            "range": "± 661549.3766980087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137504969.5652174,
            "unit": "ns",
            "range": "± 3358233.937981903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3395666.9270833335,
            "unit": "ns",
            "range": "± 10843.920990229333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071590.2604166667,
            "unit": "ns",
            "range": "± 4054.1137207797724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751080.5338541666,
            "unit": "ns",
            "range": "± 2337.2005753657845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940621.77734375,
            "unit": "ns",
            "range": "± 4777.860336930594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611807.8385416666,
            "unit": "ns",
            "range": "± 1316.384458000617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571304.5638020834,
            "unit": "ns",
            "range": "± 1713.52949948725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2238410,
            "unit": "ns",
            "range": "± 79297.84748266888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291754.1666666665,
            "unit": "ns",
            "range": "± 88974.03627579044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2907023.3333333335,
            "unit": "ns",
            "range": "± 49714.49151572071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3018266.6666666665,
            "unit": "ns",
            "range": "± 97704.2942905122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8101123.529411765,
            "unit": "ns",
            "range": "± 187426.74699785002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193226.13636363635,
            "unit": "ns",
            "range": "± 10342.830203811207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172972.2891566265,
            "unit": "ns",
            "range": "± 8831.268080823318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143943.24324324325,
            "unit": "ns",
            "range": "± 4875.821329133547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2714205.882352941,
            "unit": "ns",
            "range": "± 43390.486725033334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2538813.3333333335,
            "unit": "ns",
            "range": "± 46748.99336833233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10607.777777777777,
            "unit": "ns",
            "range": "± 1100.9931959272737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57035.48387096774,
            "unit": "ns",
            "range": "± 6337.288632291901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47510.769230769234,
            "unit": "ns",
            "range": "± 2128.0216073946385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60645.97701149425,
            "unit": "ns",
            "range": "± 9764.301432492835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2800,
            "unit": "ns",
            "range": "± 582.7377912349029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11377.41935483871,
            "unit": "ns",
            "range": "± 1565.6037196598072"
          }
        ]
      }
    ]
  }
}