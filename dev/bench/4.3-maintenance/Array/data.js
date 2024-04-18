window.BENCHMARK_DATA = {
  "lastUpdate": 1713422311486,
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
          "id": "8874c899afca340a0876b8418eea63d339bc9f90",
          "message": "Merge pull request #3732 from greymistcube/release/4.3.0\n\n🚀 Release 4.3.0",
          "timestamp": "2024-04-08T17:29:00+09:00",
          "tree_id": "2ae2825d3031445259bfbbfc1e75f3248632af1e",
          "url": "https://github.com/planetarium/libplanet/commit/8874c899afca340a0876b8418eea63d339bc9f90"
        },
        "date": 1712566452031,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5694501.433333334,
            "unit": "ns",
            "range": "± 105183.14012675136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14219250.333333334,
            "unit": "ns",
            "range": "± 83016.06100063171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36746865.07692308,
            "unit": "ns",
            "range": "± 105510.3293667351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73746369.86666666,
            "unit": "ns",
            "range": "± 220093.35456147647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146906835.53333333,
            "unit": "ns",
            "range": "± 442298.23968866887"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84988.39344262295,
            "unit": "ns",
            "range": "± 3830.7486791256547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110508.25396825396,
            "unit": "ns",
            "range": "± 5034.51307818937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105526.79710144928,
            "unit": "ns",
            "range": "± 4606.319209966796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89395.85714285714,
            "unit": "ns",
            "range": "± 1523.1742971703663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3195223.6428571427,
            "unit": "ns",
            "range": "± 54529.20499865841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2743760.74,
            "unit": "ns",
            "range": "± 179130.12213250026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5124.422222222222,
            "unit": "ns",
            "range": "± 560.7904328828942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26862.494382022473,
            "unit": "ns",
            "range": "± 1671.7040987322127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21836.41891891892,
            "unit": "ns",
            "range": "± 1030.5395050253985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30371.4375,
            "unit": "ns",
            "range": "± 5982.433998250299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1529.8711340206185,
            "unit": "ns",
            "range": "± 295.96133332707876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4918.922222222222,
            "unit": "ns",
            "range": "± 608.4410772165571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1180402.696969697,
            "unit": "ns",
            "range": "± 144086.75559795208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1801451.1639344261,
            "unit": "ns",
            "range": "± 80415.73969175859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1555928.72,
            "unit": "ns",
            "range": "± 166246.24887668068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8197480.197916667,
            "unit": "ns",
            "range": "± 701138.9628445634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2545545.446236559,
            "unit": "ns",
            "range": "± 165975.31793864424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2641748.404761905,
            "unit": "ns",
            "range": "± 119872.54523824048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3304171.1625,
            "unit": "ns",
            "range": "± 172866.18759961828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3290037.9285714286,
            "unit": "ns",
            "range": "± 175947.56524072567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9731124.863636363,
            "unit": "ns",
            "range": "± 238985.042599212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3025230.4359375,
            "unit": "ns",
            "range": "± 55695.74107329191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 930950.2600260417,
            "unit": "ns",
            "range": "± 2801.5607710171535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617895.6809244792,
            "unit": "ns",
            "range": "± 7422.207892498697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1629230.842578125,
            "unit": "ns",
            "range": "± 15844.48147499752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459874.7878766741,
            "unit": "ns",
            "range": "± 759.1748378023849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420254.9506184896,
            "unit": "ns",
            "range": "± 1163.1376037603495"
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
          "id": "874b142ae7f1399060e48180fbbcdb8621b5b584",
          "message": "Merge pull request #3734 from greymistcube/prepare/4.3.1\n\n🔧 Prepare 4.3.1",
          "timestamp": "2024-04-08T18:52:58+09:00",
          "tree_id": "561996de58eafd7fac18dc1e3e932ec689e9634f",
          "url": "https://github.com/planetarium/libplanet/commit/874b142ae7f1399060e48180fbbcdb8621b5b584"
        },
        "date": 1712570976805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5766223.5,
            "unit": "ns",
            "range": "± 61614.44506925553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14226771.166666666,
            "unit": "ns",
            "range": "± 34590.14177435092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36203138.07692308,
            "unit": "ns",
            "range": "± 166693.3360887899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72388363.76666667,
            "unit": "ns",
            "range": "± 283299.9682629367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145574225.26666668,
            "unit": "ns",
            "range": "± 423140.1368497315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84717.44736842105,
            "unit": "ns",
            "range": "± 2805.067506027487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111454.03846153847,
            "unit": "ns",
            "range": "± 4293.936888042453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105571.80597014926,
            "unit": "ns",
            "range": "± 4669.474541325291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92843,
            "unit": "ns",
            "range": "± 3387.568268349329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3123590.090909091,
            "unit": "ns",
            "range": "± 146384.3711576823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2812149.476190476,
            "unit": "ns",
            "range": "± 102170.98137119501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4720.636363636364,
            "unit": "ns",
            "range": "± 453.11362614990594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27393.44252873563,
            "unit": "ns",
            "range": "± 2615.90259382485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22716.12222222222,
            "unit": "ns",
            "range": "± 1280.685793967986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30178.94680851064,
            "unit": "ns",
            "range": "± 3923.537556100297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1138.3736263736264,
            "unit": "ns",
            "range": "± 241.21671438087225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4900.606741573034,
            "unit": "ns",
            "range": "± 509.07511095161425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1156198.581632653,
            "unit": "ns",
            "range": "± 128737.5745504291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1854132.9733333334,
            "unit": "ns",
            "range": "± 93080.43989140607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1584045.7676767677,
            "unit": "ns",
            "range": "± 172709.1840048141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8058994.270833333,
            "unit": "ns",
            "range": "± 560488.0528937817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2479160.3421052634,
            "unit": "ns",
            "range": "± 126145.2977554114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2882780.5,
            "unit": "ns",
            "range": "± 35153.37277796637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3221307,
            "unit": "ns",
            "range": "± 121425.10728088288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3242902.722222222,
            "unit": "ns",
            "range": "± 136281.9984882438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10396880.1010101,
            "unit": "ns",
            "range": "± 804511.0321500461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3029591.8372395835,
            "unit": "ns",
            "range": "± 25711.81595168443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925153.9852213542,
            "unit": "ns",
            "range": "± 4974.8334832310275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618103.1223307292,
            "unit": "ns",
            "range": "± 4578.007479935005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1640686.4901041666,
            "unit": "ns",
            "range": "± 3015.8616469618805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459368.29934895836,
            "unit": "ns",
            "range": "± 1407.9974338074362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418394.7391075721,
            "unit": "ns",
            "range": "± 885.0119136441333"
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
          "id": "cdc436ea389868eb8150dfb8456734dc81d9da4e",
          "message": "Merge pull request #3753 from greymistcube/revert/litedb-upgrade\n\n⏪ Revert litedb upgrade",
          "timestamp": "2024-04-18T14:32:00+09:00",
          "tree_id": "871891c019c0fcd630e6a00dcf3713b975ddb4e8",
          "url": "https://github.com/planetarium/libplanet/commit/cdc436ea389868eb8150dfb8456734dc81d9da4e"
        },
        "date": 1713421134173,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5739424.733333333,
            "unit": "ns",
            "range": "± 65827.0629240704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14330336.76923077,
            "unit": "ns",
            "range": "± 34827.60838318227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36002392.64285714,
            "unit": "ns",
            "range": "± 84561.7354796138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72835219.73333333,
            "unit": "ns",
            "range": "± 215283.5980450195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145757783,
            "unit": "ns",
            "range": "± 519869.7597908538"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18111.302083333332,
            "unit": "ns",
            "range": "± 1734.1630659669916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109965.62295081967,
            "unit": "ns",
            "range": "± 4102.596471195343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104645.42,
            "unit": "ns",
            "range": "± 3515.965690726709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92178.5294117647,
            "unit": "ns",
            "range": "± 2956.5034245048214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3197019.0833333335,
            "unit": "ns",
            "range": "± 82807.65986671433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2787412.044117647,
            "unit": "ns",
            "range": "± 133333.21581274553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4829.852272727273,
            "unit": "ns",
            "range": "± 507.884015625722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26720.035714285714,
            "unit": "ns",
            "range": "± 1516.7817503606755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22348.1875,
            "unit": "ns",
            "range": "± 1489.4112387644639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30254.697916666668,
            "unit": "ns",
            "range": "± 5108.521708344518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1308.5157894736842,
            "unit": "ns",
            "range": "± 294.43782940773457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5416.408163265306,
            "unit": "ns",
            "range": "± 1176.998251159127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 674144.6597938144,
            "unit": "ns",
            "range": "± 57991.2671268425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1228554.105263158,
            "unit": "ns",
            "range": "± 42341.56359493938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1027753.7688172043,
            "unit": "ns",
            "range": "± 65725.60914169239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9979979.25,
            "unit": "ns",
            "range": "± 2317365.3513224726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2229619.8596491227,
            "unit": "ns",
            "range": "± 88656.14282307608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316306.90625,
            "unit": "ns",
            "range": "± 103181.24099957944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2689454.730769231,
            "unit": "ns",
            "range": "± 103339.39569170168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2970762.326923077,
            "unit": "ns",
            "range": "± 121102.59911424015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11415925.565656565,
            "unit": "ns",
            "range": "± 1689661.1999036795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3081381.699088542,
            "unit": "ns",
            "range": "± 49380.044854209686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924582.4124098558,
            "unit": "ns",
            "range": "± 2578.8761466553633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615835.2567708333,
            "unit": "ns",
            "range": "± 5181.353942851437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1634308.431640625,
            "unit": "ns",
            "range": "± 20113.910120123113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 456127.5721261161,
            "unit": "ns",
            "range": "± 715.6432489053457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424303.61604817706,
            "unit": "ns",
            "range": "± 2134.287665154976"
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
          "id": "cfa261fe1d2342cbc4854094862fd53fb11a0324",
          "message": "Merge pull request #3754 from greymistcube/chore/changelog-typo\n\n🧹 Fixed typo",
          "timestamp": "2024-04-18T14:45:14+09:00",
          "tree_id": "be750d0ebe2ae0c8533bc6f40c090030474fa174",
          "url": "https://github.com/planetarium/libplanet/commit/cfa261fe1d2342cbc4854094862fd53fb11a0324"
        },
        "date": 1713422300131,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5968041.307692308,
            "unit": "ns",
            "range": "± 8704.671891046166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14326997,
            "unit": "ns",
            "range": "± 66053.31753143888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36480731.78571428,
            "unit": "ns",
            "range": "± 121615.50059490997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73271199.78571428,
            "unit": "ns",
            "range": "± 258272.34200539268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146341155.66666666,
            "unit": "ns",
            "range": "± 334111.4733593879"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18670.135416666668,
            "unit": "ns",
            "range": "± 1963.5086941482114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109533.62222222223,
            "unit": "ns",
            "range": "± 4047.6402288521426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104895.03389830509,
            "unit": "ns",
            "range": "± 4323.8941698351655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90172.15789473684,
            "unit": "ns",
            "range": "± 3717.964630342952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3203176.6153846155,
            "unit": "ns",
            "range": "± 40770.631402065344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805795.8684210526,
            "unit": "ns",
            "range": "± 160110.9664758504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5720.795698924731,
            "unit": "ns",
            "range": "± 630.9610433633517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26818.550561797754,
            "unit": "ns",
            "range": "± 1620.7368274620424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22082.15053763441,
            "unit": "ns",
            "range": "± 1268.8754859446335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28730.212765957447,
            "unit": "ns",
            "range": "± 5852.9464133617985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1155.3296703296703,
            "unit": "ns",
            "range": "± 216.14815160723313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5297.2588235294115,
            "unit": "ns",
            "range": "± 417.3272711679698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 682522.4646464647,
            "unit": "ns",
            "range": "± 60096.50420583124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1242976.0697674418,
            "unit": "ns",
            "range": "± 45918.36692974845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1028670.2411764705,
            "unit": "ns",
            "range": "± 55009.119672960755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9980223.2,
            "unit": "ns",
            "range": "± 2281904.0742057916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2216873.5342465756,
            "unit": "ns",
            "range": "± 110225.5985670956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2428735.933333333,
            "unit": "ns",
            "range": "± 43716.57511658261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2694547.5512820515,
            "unit": "ns",
            "range": "± 70733.50528082918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2984197.01754386,
            "unit": "ns",
            "range": "± 128005.07280314704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11314540.36,
            "unit": "ns",
            "range": "± 1591660.2022914991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3074713.2126116073,
            "unit": "ns",
            "range": "± 28045.60531593799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 930401.3555989583,
            "unit": "ns",
            "range": "± 5715.648788031181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 631297.1770019531,
            "unit": "ns",
            "range": "± 11759.534911229099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1639913.805438702,
            "unit": "ns",
            "range": "± 1053.66116641334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460493.6974051339,
            "unit": "ns",
            "range": "± 1083.6139719061532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418904.54609375,
            "unit": "ns",
            "range": "± 1006.807792508977"
          }
        ]
      }
    ]
  }
}