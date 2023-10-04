window.BENCHMARK_DATA = {
  "lastUpdate": 1696400134029,
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
          "id": "8dc592d3d07260489d7ac7dd1f62754bc23faae0",
          "message": "Merge pull request #3435 from greymistcube/prepare/3.5.0\n\n🔧 Prepare 3.5.0",
          "timestamp": "2023-09-25T20:32:57+09:00",
          "tree_id": "0c99da6c0667ced3d6e43cb95f5270ef67333bc0",
          "url": "https://github.com/planetarium/libplanet/commit/8dc592d3d07260489d7ac7dd1f62754bc23faae0"
        },
        "date": 1696350868852,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45935.87837837838,
            "unit": "ns",
            "range": "± 2314.4956783886046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7671935.769230769,
            "unit": "ns",
            "range": "± 44551.5909408292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19791994.8,
            "unit": "ns",
            "range": "± 127197.33504631971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51794459.53333333,
            "unit": "ns",
            "range": "± 306848.07448658335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102529571.5,
            "unit": "ns",
            "range": "± 820868.0703103505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203299979.6,
            "unit": "ns",
            "range": "± 686115.5389233757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268640.48780487804,
            "unit": "ns",
            "range": "± 8596.686684769753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259315.4655172414,
            "unit": "ns",
            "range": "± 10489.746417444934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221828.375,
            "unit": "ns",
            "range": "± 4062.3560630911384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4168581.0714285714,
            "unit": "ns",
            "range": "± 29290.047651993398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3900027.5,
            "unit": "ns",
            "range": "± 25592.051247183404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18619.91489361702,
            "unit": "ns",
            "range": "± 1190.1059287774679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87804.6,
            "unit": "ns",
            "range": "± 5531.053090063987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68962.21052631579,
            "unit": "ns",
            "range": "± 1436.8423163678272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79324.45918367348,
            "unit": "ns",
            "range": "± 10289.276114087186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4563.489583333333,
            "unit": "ns",
            "range": "± 428.9870074045715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18357.290322580644,
            "unit": "ns",
            "range": "± 1620.784428848153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1296682.5212765958,
            "unit": "ns",
            "range": "± 86843.52450893476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2517680.2,
            "unit": "ns",
            "range": "± 82433.53330401781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1982310.0487804879,
            "unit": "ns",
            "range": "± 98985.24043087476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8396815.82142857,
            "unit": "ns",
            "range": "± 224165.34808518496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4908377.104910715,
            "unit": "ns",
            "range": "± 15312.355139092833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543314.7345252405,
            "unit": "ns",
            "range": "± 1535.203017089089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1057226.9450120192,
            "unit": "ns",
            "range": "± 812.137690754485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2535966.2751116073,
            "unit": "ns",
            "range": "± 7036.809154087786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807006.3523888221,
            "unit": "ns",
            "range": "± 426.50664914435896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732820.4575570914,
            "unit": "ns",
            "range": "± 442.7162757107738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3279363.125,
            "unit": "ns",
            "range": "± 55905.50122587818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3366532.846153846,
            "unit": "ns",
            "range": "± 33641.23689225807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4234271.066666666,
            "unit": "ns",
            "range": "± 70444.97833818012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4035324.2,
            "unit": "ns",
            "range": "± 104858.19160949608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10104287.64864865,
            "unit": "ns",
            "range": "± 251867.2486720398"
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
          "id": "a953e0e1d421062c120de71ca88ca23eeaf08720",
          "message": "Merge pull request #3437 from greymistcube/refactor/immutable-iaction-context\n\n♻️ Immutable `IActionContext`",
          "timestamp": "2023-10-04T01:31:53+09:00",
          "tree_id": "4e297305404cfc9980e96eef99e4a093ccf46805",
          "url": "https://github.com/planetarium/libplanet/commit/a953e0e1d421062c120de71ca88ca23eeaf08720"
        },
        "date": 1696351736884,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58223.78888888889,
            "unit": "ns",
            "range": "± 4206.100319625242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9853755,
            "unit": "ns",
            "range": "± 199065.46291421322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26568159.4,
            "unit": "ns",
            "range": "± 420909.09637470584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64672934.333333336,
            "unit": "ns",
            "range": "± 859694.1504603887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131569895.42857143,
            "unit": "ns",
            "range": "± 1269062.8826864404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261389065.33333334,
            "unit": "ns",
            "range": "± 2583105.374061109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323480.60869565216,
            "unit": "ns",
            "range": "± 12424.054386513037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315786.4651162791,
            "unit": "ns",
            "range": "± 17097.12482653335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290783.35714285716,
            "unit": "ns",
            "range": "± 18820.5828701495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5166631.8,
            "unit": "ns",
            "range": "± 137566.17472359742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4768808.138888889,
            "unit": "ns",
            "range": "± 155401.81496626328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24887.88172043011,
            "unit": "ns",
            "range": "± 2709.1527949328847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102996.32978723405,
            "unit": "ns",
            "range": "± 8922.206709524851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92782.27659574468,
            "unit": "ns",
            "range": "± 5980.245507608722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103910.3440860215,
            "unit": "ns",
            "range": "± 14188.983025339108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6661.428571428572,
            "unit": "ns",
            "range": "± 762.216112439153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24337.411111111112,
            "unit": "ns",
            "range": "± 2545.050061954122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1662706.2872340425,
            "unit": "ns",
            "range": "± 104210.87228747587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3239839.4225352113,
            "unit": "ns",
            "range": "± 158185.5465225805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2487756.592592593,
            "unit": "ns",
            "range": "± 127776.79465241113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10921054.363636363,
            "unit": "ns",
            "range": "± 512504.4831542344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5912701.4296875,
            "unit": "ns",
            "range": "± 30419.40616622952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849200.7938802084,
            "unit": "ns",
            "range": "± 16764.63513112419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1276961.3670572916,
            "unit": "ns",
            "range": "± 8785.37733711499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3071290.201302083,
            "unit": "ns",
            "range": "± 27418.692710359683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934906.1729817708,
            "unit": "ns",
            "range": "± 12686.133180147219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888612.1248697917,
            "unit": "ns",
            "range": "± 8564.222999721675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4069687.0921052634,
            "unit": "ns",
            "range": "± 206628.4266923715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4337502.926470588,
            "unit": "ns",
            "range": "± 206349.58476726184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5104097.05,
            "unit": "ns",
            "range": "± 178158.86476975743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5091954,
            "unit": "ns",
            "range": "± 213809.03291346898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12473833.837837838,
            "unit": "ns",
            "range": "± 357158.0859297084"
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
          "id": "ee9b5c2a7b96a42cdc27b2d0614ef3be23955b66",
          "message": "Merge pull request #3438 from greymistcube/refactor/remove-store-dependency\n\n♻️ Partially remove `IStore`/`BlockChain` dependency from `IActionEvaluator`",
          "timestamp": "2023-10-04T13:06:39+09:00",
          "tree_id": "1847fdc365e95467fdda18d024cbc0ab419b26f3",
          "url": "https://github.com/planetarium/libplanet/commit/ee9b5c2a7b96a42cdc27b2d0614ef3be23955b66"
        },
        "date": 1696393244934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48768.01052631579,
            "unit": "ns",
            "range": "± 2865.111941278775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8098035.666666667,
            "unit": "ns",
            "range": "± 112713.84330663372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21968892.85714286,
            "unit": "ns",
            "range": "± 251955.6561231352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54163133.541666664,
            "unit": "ns",
            "range": "± 1383529.7877514155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106004874.53846154,
            "unit": "ns",
            "range": "± 1023489.3579486317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209660595.64285713,
            "unit": "ns",
            "range": "± 2305971.0616022185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269498.43902439025,
            "unit": "ns",
            "range": "± 9573.08487387629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260334.92,
            "unit": "ns",
            "range": "± 10408.501097444829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233783.8125,
            "unit": "ns",
            "range": "± 4279.497762101686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4370637.6,
            "unit": "ns",
            "range": "± 72979.72107060191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3953154.066666667,
            "unit": "ns",
            "range": "± 73464.33278077062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18840.854166666668,
            "unit": "ns",
            "range": "± 2027.8814248485078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83706.5,
            "unit": "ns",
            "range": "± 5047.278035061908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70407.4,
            "unit": "ns",
            "range": "± 1876.9121670335617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75986.14666666667,
            "unit": "ns",
            "range": "± 3591.739899439438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5353.726315789474,
            "unit": "ns",
            "range": "± 574.0893332905467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19360.22105263158,
            "unit": "ns",
            "range": "± 1431.0630491407087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357966.8705882353,
            "unit": "ns",
            "range": "± 71946.06416810215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2630715.6666666665,
            "unit": "ns",
            "range": "± 97972.95557564481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2037504.3188405796,
            "unit": "ns",
            "range": "± 98014.18952398631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9274476.133333333,
            "unit": "ns",
            "range": "± 646683.7428803296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5002738.268973215,
            "unit": "ns",
            "range": "± 21704.020662681323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1581495.928515625,
            "unit": "ns",
            "range": "± 9801.67051745793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1078382.854296875,
            "unit": "ns",
            "range": "± 6468.597406225438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643974.17890625,
            "unit": "ns",
            "range": "± 3214.757532104363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828476.5991536458,
            "unit": "ns",
            "range": "± 4925.371353013272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750914.9026692709,
            "unit": "ns",
            "range": "± 2502.11330540704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3358230.1153846155,
            "unit": "ns",
            "range": "± 87996.95096187228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3496022.7435897435,
            "unit": "ns",
            "range": "± 120783.09933986231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4198710.863636363,
            "unit": "ns",
            "range": "± 100260.00185294208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4142593.338235294,
            "unit": "ns",
            "range": "± 190354.55545843765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10551675.452380951,
            "unit": "ns",
            "range": "± 379769.70937984105"
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
          "id": "77e9c1c09e193061fc5f3e4eb1de99f14a943352",
          "message": "Merge pull request #3439 from greymistcube/refactor/remove-istore-dependency\n\nRemove IBlockChainStates dependency; replaced with IStateStore",
          "timestamp": "2023-10-04T15:00:39+09:00",
          "tree_id": "0508b2950239a96408af4107ffc722a4f4cf32cc",
          "url": "https://github.com/planetarium/libplanet/commit/77e9c1c09e193061fc5f3e4eb1de99f14a943352"
        },
        "date": 1696400104991,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49452.55913978495,
            "unit": "ns",
            "range": "± 3214.6011635172113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8507694.9,
            "unit": "ns",
            "range": "± 195531.20868113425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22920074.2,
            "unit": "ns",
            "range": "± 339803.0788707315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57370898.6,
            "unit": "ns",
            "range": "± 637307.5850796963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113593108.07142857,
            "unit": "ns",
            "range": "± 689550.4615170518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227725305.07142857,
            "unit": "ns",
            "range": "± 3061626.6815793673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284411.69444444444,
            "unit": "ns",
            "range": "± 9394.19766153386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272774.92307692306,
            "unit": "ns",
            "range": "± 8392.038048006592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239441.57142857142,
            "unit": "ns",
            "range": "± 4169.387405921803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4511501.933333334,
            "unit": "ns",
            "range": "± 75405.44335833234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4099646.5,
            "unit": "ns",
            "range": "± 83911.84159037528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21012.68817204301,
            "unit": "ns",
            "range": "± 2307.518231961958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90569.14,
            "unit": "ns",
            "range": "± 6431.723277912096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73547.91304347826,
            "unit": "ns",
            "range": "± 2680.778674822232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86685.94791666667,
            "unit": "ns",
            "range": "± 15177.403404139839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5715.5,
            "unit": "ns",
            "range": "± 955.3866519054865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19975.532608695652,
            "unit": "ns",
            "range": "± 1487.810445588386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1427742.6578947369,
            "unit": "ns",
            "range": "± 71859.67254968583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2739321.3870967743,
            "unit": "ns",
            "range": "± 80454.4599367358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2170616.5714285714,
            "unit": "ns",
            "range": "± 92632.60468418569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9360091.375,
            "unit": "ns",
            "range": "± 402700.5147185713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5022211.4390625,
            "unit": "ns",
            "range": "± 23580.321418553245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1633333.2583705357,
            "unit": "ns",
            "range": "± 3833.7291011304437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1093180.4716796875,
            "unit": "ns",
            "range": "± 2549.749508748788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2657251.646484375,
            "unit": "ns",
            "range": "± 4825.818916813138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830411.8839192708,
            "unit": "ns",
            "range": "± 1792.3397096987933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758676.5377604166,
            "unit": "ns",
            "range": "± 1063.8469161733474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3618356.4285714286,
            "unit": "ns",
            "range": "± 51829.17892567749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3632936.3947368423,
            "unit": "ns",
            "range": "± 124632.30880550726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4557823.1875,
            "unit": "ns",
            "range": "± 79646.67345070037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4442698,
            "unit": "ns",
            "range": "± 191101.30147312267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11105159.078431373,
            "unit": "ns",
            "range": "± 453404.29703666654"
          }
        ]
      }
    ]
  }
}