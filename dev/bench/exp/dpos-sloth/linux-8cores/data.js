window.BENCHMARK_DATA = {
  "lastUpdate": 1722308011652,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "752aea228a9adc1132cdd55dd98fc88e72cb910f",
          "message": "feat: make ActionEvaluator.CommitWorld to public",
          "timestamp": "2024-05-20T17:57:03+09:00",
          "tree_id": "927016d20e8d96cc4a85cb63a10d9504b5eaac5c",
          "url": "https://github.com/planetarium/libplanet/commit/752aea228a9adc1132cdd55dd98fc88e72cb910f"
        },
        "date": 1716195944971,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003049.1781609196,
            "unit": "ns",
            "range": "± 54654.49328248303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1911721.121212121,
            "unit": "ns",
            "range": "± 59993.325102025716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1673184.4436619717,
            "unit": "ns",
            "range": "± 81833.48584462533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8479486.846153846,
            "unit": "ns",
            "range": "± 347457.43744544074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10831235.333333334,
            "unit": "ns",
            "range": "± 36510.36047610648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28299736.8,
            "unit": "ns",
            "range": "± 180059.5690059265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70399881.8,
            "unit": "ns",
            "range": "± 374823.48120057036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142433440.3,
            "unit": "ns",
            "range": "± 638836.8112301786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292667848.5714286,
            "unit": "ns",
            "range": "± 1142299.2756351426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3717421.1618303573,
            "unit": "ns",
            "range": "± 6806.293790848557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1175613.6626302083,
            "unit": "ns",
            "range": "± 1766.198603886239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770819.9105747768,
            "unit": "ns",
            "range": "± 1811.208508789613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908244.7075520833,
            "unit": "ns",
            "range": "± 2919.0797616195973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618973.3227864583,
            "unit": "ns",
            "range": "± 646.139943911036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580334.0227864584,
            "unit": "ns",
            "range": "± 868.4751829437105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411922.214285714,
            "unit": "ns",
            "range": "± 42094.20042125038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2521636.8,
            "unit": "ns",
            "range": "± 43834.246341351485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3046223.8,
            "unit": "ns",
            "range": "± 45491.28085091849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2572107.277777778,
            "unit": "ns",
            "range": "± 53045.01652237915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3282365,
            "unit": "ns",
            "range": "± 68380.01300625275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203647.5172413793,
            "unit": "ns",
            "range": "± 4739.686115441234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191187.3111111111,
            "unit": "ns",
            "range": "± 7245.124880730058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164605.32432432432,
            "unit": "ns",
            "range": "± 5584.382349483712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3262659.066666667,
            "unit": "ns",
            "range": "± 31997.41159278505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2813541.2,
            "unit": "ns",
            "range": "± 31700.898870086137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12681.365168539325,
            "unit": "ns",
            "range": "± 711.86525459865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60885.005494505494,
            "unit": "ns",
            "range": "± 3563.25028395152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51802.45,
            "unit": "ns",
            "range": "± 1186.5428985080987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50164.62886597938,
            "unit": "ns",
            "range": "± 6978.859607652581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2562.0434782608695,
            "unit": "ns",
            "range": "± 178.29380081076565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12507.988095238095,
            "unit": "ns",
            "range": "± 813.2139346266928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38534.153846153844,
            "unit": "ns",
            "range": "± 502.3678675621823"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "ce8f7ecd0fec57e750b97aba0c14170f74f33792",
          "message": "feat: make ActionEvaluator.CommitWorld to public",
          "timestamp": "2024-06-04T19:38:01+09:00",
          "tree_id": "927016d20e8d96cc4a85cb63a10d9504b5eaac5c",
          "url": "https://github.com/planetarium/libplanet/commit/ce8f7ecd0fec57e750b97aba0c14170f74f33792"
        },
        "date": 1717550435115,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994405.5454545454,
            "unit": "ns",
            "range": "± 58548.20640320584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1993720.053846154,
            "unit": "ns",
            "range": "± 92266.17975168208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1650611.8205128205,
            "unit": "ns",
            "range": "± 79569.04346079615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8119897.411764706,
            "unit": "ns",
            "range": "± 158640.2507822569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11282012.038461538,
            "unit": "ns",
            "range": "± 154346.97931155816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28723945.033333335,
            "unit": "ns",
            "range": "± 443080.02689305734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72824891.93333334,
            "unit": "ns",
            "range": "± 849143.8969614772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146240518.57142857,
            "unit": "ns",
            "range": "± 381830.54458504217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298160584.5,
            "unit": "ns",
            "range": "± 1582481.0674628713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3669266.4510216345,
            "unit": "ns",
            "range": "± 7225.427699421087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199746.9063895089,
            "unit": "ns",
            "range": "± 1377.2106347929591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769175.717578125,
            "unit": "ns",
            "range": "± 936.1533681649485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940391.2543247768,
            "unit": "ns",
            "range": "± 868.2080214515927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618200.3835797991,
            "unit": "ns",
            "range": "± 762.7056656195963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575815.0711495535,
            "unit": "ns",
            "range": "± 762.7814643256487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2470493.0689655175,
            "unit": "ns",
            "range": "± 71597.95825846423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2490692.304347826,
            "unit": "ns",
            "range": "± 53393.99156053795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3029693.8571428573,
            "unit": "ns",
            "range": "± 44269.165561556314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2621374.5,
            "unit": "ns",
            "range": "± 42836.34234502288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3208287.3333333335,
            "unit": "ns",
            "range": "± 46062.31184209163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207367.8918918919,
            "unit": "ns",
            "range": "± 6911.083532927315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196325.47222222222,
            "unit": "ns",
            "range": "± 9439.176714177514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174288.65384615384,
            "unit": "ns",
            "range": "± 2711.674385754856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3226954.8571428573,
            "unit": "ns",
            "range": "± 18531.323049853243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2857006.533333333,
            "unit": "ns",
            "range": "± 41900.849428598645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13006.189473684211,
            "unit": "ns",
            "range": "± 842.4288756484525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60825.77368421053,
            "unit": "ns",
            "range": "± 4301.389145831215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50753.307692307695,
            "unit": "ns",
            "range": "± 652.2890954956737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49824.029411764706,
            "unit": "ns",
            "range": "± 3403.063677770074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2674.7473684210527,
            "unit": "ns",
            "range": "± 230.6043387064414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15940.119565217392,
            "unit": "ns",
            "range": "± 1049.1923931552087"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37993.5,
            "unit": "ns",
            "range": "± 566.1681407818385"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9ace8f6a908e54124b70bf48a5433b02d14eb8c",
          "message": "Merge pull request #3813 from limebell/feature/nullable-votepower\n\nMake `IVoteMetadata.ValidatorPower` nullable",
          "timestamp": "2024-06-10T20:41:38+09:00",
          "tree_id": "cec81941df4622fa80bf1becb8764cfbc351c656",
          "url": "https://github.com/planetarium/libplanet/commit/c9ace8f6a908e54124b70bf48a5433b02d14eb8c"
        },
        "date": 1718020218672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997496.472972973,
            "unit": "ns",
            "range": "± 45249.70057933872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1918268.2727272727,
            "unit": "ns",
            "range": "± 71335.06431520284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1716091.56185567,
            "unit": "ns",
            "range": "± 111545.1599616547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8263272.2727272725,
            "unit": "ns",
            "range": "± 199915.97365826374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10932687.866666667,
            "unit": "ns",
            "range": "± 94434.08808480931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28227410.785714287,
            "unit": "ns",
            "range": "± 117667.80239704721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71611448,
            "unit": "ns",
            "range": "± 306479.20582141145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145329926.3846154,
            "unit": "ns",
            "range": "± 920268.347092171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296849583.14285713,
            "unit": "ns",
            "range": "± 830513.7048989951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733419.809988839,
            "unit": "ns",
            "range": "± 7932.358092649616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226174.5767299107,
            "unit": "ns",
            "range": "± 2286.7925408906303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777687.638532366,
            "unit": "ns",
            "range": "± 1333.1583206658015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929260.828125,
            "unit": "ns",
            "range": "± 1739.4594252704926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607882.4024135044,
            "unit": "ns",
            "range": "± 627.4509192773795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576137.0278320312,
            "unit": "ns",
            "range": "± 516.1373357261456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2464887.962962963,
            "unit": "ns",
            "range": "± 66520.90486657413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2487067.285714286,
            "unit": "ns",
            "range": "± 57298.53717953265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3057154.7666666666,
            "unit": "ns",
            "range": "± 53471.273777163566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2547129.46875,
            "unit": "ns",
            "range": "± 78901.3435864113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3305620.55,
            "unit": "ns",
            "range": "± 71857.338612497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202236.02040816325,
            "unit": "ns",
            "range": "± 8018.562907637595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192742.6888888889,
            "unit": "ns",
            "range": "± 7188.829070231821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164919.61538461538,
            "unit": "ns",
            "range": "± 2172.551516016039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3166970.6666666665,
            "unit": "ns",
            "range": "± 36736.06385452597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2806734,
            "unit": "ns",
            "range": "± 48525.41916651225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16521.32978723404,
            "unit": "ns",
            "range": "± 1467.2080822901667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61250.89473684211,
            "unit": "ns",
            "range": "± 4572.933504859395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51512.5,
            "unit": "ns",
            "range": "± 790.4862914200833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55210.45744680851,
            "unit": "ns",
            "range": "± 7678.086300992036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3396.3736842105263,
            "unit": "ns",
            "range": "± 294.91128280492063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12076.731182795698,
            "unit": "ns",
            "range": "± 940.8716257185574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38768.375,
            "unit": "ns",
            "range": "± 731.7404708410398"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1991162a1d98a3374ec4873608e2fb340fbfbdc",
          "message": "Merge pull request #3826 from limebell/chore/vp-followup\n\nFix `ValidatorSet.ValidateBlockCommitValidators()` behavior",
          "timestamp": "2024-06-14T15:19:39+09:00",
          "tree_id": "c80a492b39105394077e23ea54aa7847da02cb35",
          "url": "https://github.com/planetarium/libplanet/commit/e1991162a1d98a3374ec4873608e2fb340fbfbdc"
        },
        "date": 1718346561251,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004887.5172413794,
            "unit": "ns",
            "range": "± 51378.449974098854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1979256.0454545454,
            "unit": "ns",
            "range": "± 92997.93433842111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1764425.440860215,
            "unit": "ns",
            "range": "± 99836.54549992141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8319152.1875,
            "unit": "ns",
            "range": "± 154216.0931456112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11165851.1,
            "unit": "ns",
            "range": "± 90435.79498880488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28663360.807692308,
            "unit": "ns",
            "range": "± 162491.35714727754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72157165.26666667,
            "unit": "ns",
            "range": "± 513801.39441692934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142307809.5,
            "unit": "ns",
            "range": "± 459156.8183956662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 306618789.6333333,
            "unit": "ns",
            "range": "± 2139463.9698094563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3688742.5323660714,
            "unit": "ns",
            "range": "± 4508.966074234176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205738.9287760416,
            "unit": "ns",
            "range": "± 1195.428013297062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770143.3696614583,
            "unit": "ns",
            "range": "± 2220.364722252253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958807.3643229166,
            "unit": "ns",
            "range": "± 3442.079261973061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610699.24375,
            "unit": "ns",
            "range": "± 577.3395193043619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574110.4744001116,
            "unit": "ns",
            "range": "± 742.018723534102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2471058.625,
            "unit": "ns",
            "range": "± 43205.35500124184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2514325.652173913,
            "unit": "ns",
            "range": "± 62855.13651651614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3156213,
            "unit": "ns",
            "range": "± 67155.91630741282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2608113.2195121953,
            "unit": "ns",
            "range": "± 93044.89911825155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3262918.466666667,
            "unit": "ns",
            "range": "± 54474.100308399065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205028.84285714285,
            "unit": "ns",
            "range": "± 9049.617856669962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193782.01785714287,
            "unit": "ns",
            "range": "± 8207.9727438212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166467.7619047619,
            "unit": "ns",
            "range": "± 6048.209188937458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3227553.2,
            "unit": "ns",
            "range": "± 32615.060334146245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2814686.214285714,
            "unit": "ns",
            "range": "± 34567.4946115535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17297.59574468085,
            "unit": "ns",
            "range": "± 1884.8481318084216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62638.63440860215,
            "unit": "ns",
            "range": "± 5253.360369252996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51307.8125,
            "unit": "ns",
            "range": "± 938.5533704412694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58022.734042553195,
            "unit": "ns",
            "range": "± 9657.639330007414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2878.8695652173915,
            "unit": "ns",
            "range": "± 184.1293571444984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12475.978494623656,
            "unit": "ns",
            "range": "± 1088.7402670507367"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35786.068181818184,
            "unit": "ns",
            "range": "± 2658.1880605805054"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe7a64bef1538836ba5bc4836f9a81c108980094",
          "message": "Merge pull request #3841 from limebell/feat/nodestate-self\n\nAdd \"self\" field to NodeState query",
          "timestamp": "2024-06-20T17:48:30+09:00",
          "tree_id": "975d44e2d619fed29ca688f6b17f938ded44e481",
          "url": "https://github.com/planetarium/libplanet/commit/fe7a64bef1538836ba5bc4836f9a81c108980094"
        },
        "date": 1718873832205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000019.4712643678,
            "unit": "ns",
            "range": "± 52995.456036417745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1959724.0444444444,
            "unit": "ns",
            "range": "± 73392.37262077763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1694359.8674698796,
            "unit": "ns",
            "range": "± 86018.42168393011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8512362.2,
            "unit": "ns",
            "range": "± 266968.04305558634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11019687.766666668,
            "unit": "ns",
            "range": "± 102282.21842282871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27780613.366666667,
            "unit": "ns",
            "range": "± 171325.77115078023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72318228.1,
            "unit": "ns",
            "range": "± 485817.53714946465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147012208.23333332,
            "unit": "ns",
            "range": "± 2035959.322995795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298883959.06666666,
            "unit": "ns",
            "range": "± 3061946.047765106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3709166.3329326925,
            "unit": "ns",
            "range": "± 3832.1262559257193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1243099.6674107143,
            "unit": "ns",
            "range": "± 1325.645778110117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770903.1484375,
            "unit": "ns",
            "range": "± 1118.056108887535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940532.6239483173,
            "unit": "ns",
            "range": "± 1538.9228601877498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618538.8043619791,
            "unit": "ns",
            "range": "± 1376.0489751414962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587329.5433872768,
            "unit": "ns",
            "range": "± 944.870023654644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2459016.933333333,
            "unit": "ns",
            "range": "± 40135.033824162485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2538517.523809524,
            "unit": "ns",
            "range": "± 47698.98971007567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3046616.3928571427,
            "unit": "ns",
            "range": "± 85948.89560548705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2609334.911764706,
            "unit": "ns",
            "range": "± 51580.57247532595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3218838.714285714,
            "unit": "ns",
            "range": "± 46868.55671437954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208004.63157894736,
            "unit": "ns",
            "range": "± 7019.807156129439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191532.3085106383,
            "unit": "ns",
            "range": "± 7393.047961307086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164191.85714285713,
            "unit": "ns",
            "range": "± 2342.330713270368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3301328,
            "unit": "ns",
            "range": "± 50582.52272277451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2819952.3333333335,
            "unit": "ns",
            "range": "± 42893.49759856493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12858.827956989247,
            "unit": "ns",
            "range": "± 917.2452213919858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69490.72340425532,
            "unit": "ns",
            "range": "± 2681.0524272165603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53901.25,
            "unit": "ns",
            "range": "± 776.8258404324848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61123.510204081635,
            "unit": "ns",
            "range": "± 14174.415259304133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2793.6666666666665,
            "unit": "ns",
            "range": "± 543.9342194491162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12438.647727272728,
            "unit": "ns",
            "range": "± 910.4466888995253"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38134.055555555555,
            "unit": "ns",
            "range": "± 788.2551447358998"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "2e5122639d6ec9c4bb3a03ab60b3147f8f491f82",
          "message": "temp: fix build error due to rebase",
          "timestamp": "2024-06-20T18:30:37+09:00",
          "tree_id": "40ceaa3f38c0b730776d3580087a7cae144844ec",
          "url": "https://github.com/planetarium/libplanet/commit/2e5122639d6ec9c4bb3a03ab60b3147f8f491f82"
        },
        "date": 1718876375957,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996775.1481481482,
            "unit": "ns",
            "range": "± 51633.464864395624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1903248.2631578948,
            "unit": "ns",
            "range": "± 64188.57688069908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1669655.5375,
            "unit": "ns",
            "range": "± 86970.14943666907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8291565.892857143,
            "unit": "ns",
            "range": "± 201928.99015070716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11228097.4,
            "unit": "ns",
            "range": "± 103437.66275933679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28630173.6,
            "unit": "ns",
            "range": "± 183577.32160310933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71097251.53846154,
            "unit": "ns",
            "range": "± 254734.80909716524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142354198.5,
            "unit": "ns",
            "range": "± 581289.7313343241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296718040.1666667,
            "unit": "ns",
            "range": "± 1184550.2301079552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3659882.338341346,
            "unit": "ns",
            "range": "± 5523.427511878589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220836.7197265625,
            "unit": "ns",
            "range": "± 2271.2819486066155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768962.9137369791,
            "unit": "ns",
            "range": "± 1385.1776460021565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947543.4027944712,
            "unit": "ns",
            "range": "± 1524.761683542796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633654.0592698317,
            "unit": "ns",
            "range": "± 430.18306641151054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578433.0817057291,
            "unit": "ns",
            "range": "± 753.2662525683277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2361612.466666667,
            "unit": "ns",
            "range": "± 36823.148545963515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2541489.1666666665,
            "unit": "ns",
            "range": "± 43025.74514614421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3005807.466666667,
            "unit": "ns",
            "range": "± 56086.9429786937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2581250.2666666666,
            "unit": "ns",
            "range": "± 42306.81866600342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3238541.9285714286,
            "unit": "ns",
            "range": "± 43147.54204553753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205203.75,
            "unit": "ns",
            "range": "± 7637.377615583981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195609.75,
            "unit": "ns",
            "range": "± 5556.735775486489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169947.34615384616,
            "unit": "ns",
            "range": "± 2807.4291574960484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3084173.8666666667,
            "unit": "ns",
            "range": "± 46725.58773438606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2682281.8333333335,
            "unit": "ns",
            "range": "± 12014.298623899875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12564.385057471265,
            "unit": "ns",
            "range": "± 700.3455197969828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61245.43670886076,
            "unit": "ns",
            "range": "± 3192.007873607715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60750.53846153846,
            "unit": "ns",
            "range": "± 859.5833889531036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48153.955555555556,
            "unit": "ns",
            "range": "± 4308.677502882432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2672.5876288659792,
            "unit": "ns",
            "range": "± 220.02460812076032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12072.111111111111,
            "unit": "ns",
            "range": "± 609.6059811625626"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39681,
            "unit": "ns",
            "range": "± 442.9554959909307"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff3ac3ed0c4017a30779c83a9fd956c4573255bf",
          "message": "Merge pull request #3867 from planetarium/feature/remove-feecollector\n\nRemove `IFeeCollector` and its implementation",
          "timestamp": "2024-07-03T19:12:31+09:00",
          "tree_id": "07d0f8f57eaa6f486b6b23cd83a7e4cc91907561",
          "url": "https://github.com/planetarium/libplanet/commit/ff3ac3ed0c4017a30779c83a9fd956c4573255bf"
        },
        "date": 1720002021460,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3718753.159855769,
            "unit": "ns",
            "range": "± 6168.050147960074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214106.0326450893,
            "unit": "ns",
            "range": "± 2299.2058656918816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769270.0270647322,
            "unit": "ns",
            "range": "± 1096.5043125810025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955019.3097098214,
            "unit": "ns",
            "range": "± 5184.5292728467175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616401.8996582031,
            "unit": "ns",
            "range": "± 273.3039996714277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577934.1853376116,
            "unit": "ns",
            "range": "± 864.786269783358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2330647.533333333,
            "unit": "ns",
            "range": "± 42388.02781424199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2508234.8571428573,
            "unit": "ns",
            "range": "± 36697.467239384714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3023766.772727273,
            "unit": "ns",
            "range": "± 72194.69208026955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2579879.1379310344,
            "unit": "ns",
            "range": "± 72522.94787500227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3264433.714285714,
            "unit": "ns",
            "range": "± 25830.613174855356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991063.1533333333,
            "unit": "ns",
            "range": "± 48774.995121141605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1893186.3870967743,
            "unit": "ns",
            "range": "± 56771.451806154255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1661302.842857143,
            "unit": "ns",
            "range": "± 80863.27079861605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8334077.725,
            "unit": "ns",
            "range": "± 295642.6125102685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208670.94736842104,
            "unit": "ns",
            "range": "± 4571.096482533658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193555.625,
            "unit": "ns",
            "range": "± 4886.331617824135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169670.5,
            "unit": "ns",
            "range": "± 1702.4054105348062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3070053.6666666665,
            "unit": "ns",
            "range": "± 44801.34760675121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2772115.3571428573,
            "unit": "ns",
            "range": "± 47083.68089755342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16890.578125,
            "unit": "ns",
            "range": "± 707.3412953343792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70329.67796610169,
            "unit": "ns",
            "range": "± 3111.86316537591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50055,
            "unit": "ns",
            "range": "± 628.0051751379124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54048.59793814433,
            "unit": "ns",
            "range": "± 6558.134399767389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3451.836956521739,
            "unit": "ns",
            "range": "± 256.31626571436374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12586.842105263158,
            "unit": "ns",
            "range": "± 1156.3682539026306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10720335.6,
            "unit": "ns",
            "range": "± 71118.18274915956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27731700.266666666,
            "unit": "ns",
            "range": "± 109323.97839741332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69982579.28571428,
            "unit": "ns",
            "range": "± 228180.50289297072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137729458.66666666,
            "unit": "ns",
            "range": "± 440736.7564970317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292666766.1666667,
            "unit": "ns",
            "range": "± 997620.4507939069"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38287.875,
            "unit": "ns",
            "range": "± 682.9279976688612"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d38202c80aea945ee74241f3d80ebf133d6dfff",
          "message": "Merge pull request #3868 from planetarium/introduce/gas-tracer\n\nwip: Introduce/gas tracer",
          "timestamp": "2024-07-12T11:58:22+09:00",
          "tree_id": "febb1fcfd6b9413d5a7f3a4f1c6c55a67c41dc82",
          "url": "https://github.com/planetarium/libplanet/commit/0d38202c80aea945ee74241f3d80ebf133d6dfff"
        },
        "date": 1720753708863,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208642.27692307692,
            "unit": "ns",
            "range": "± 9745.067631415668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200544.29032258064,
            "unit": "ns",
            "range": "± 14780.587707163219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176041.34,
            "unit": "ns",
            "range": "± 4659.8576666389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3150947.3333333335,
            "unit": "ns",
            "range": "± 42412.14660863537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805998.933333333,
            "unit": "ns",
            "range": "± 44190.41487935505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13302.557894736841,
            "unit": "ns",
            "range": "± 1271.6280126135964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63764.13978494624,
            "unit": "ns",
            "range": "± 5809.918181328034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51886.333333333336,
            "unit": "ns",
            "range": "± 620.7565520956641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73543.0306122449,
            "unit": "ns",
            "range": "± 10307.803226176211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2901.351063829787,
            "unit": "ns",
            "range": "± 322.98000728587357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12524.45054945055,
            "unit": "ns",
            "range": "± 1259.6779329454394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001902.8375,
            "unit": "ns",
            "range": "± 47221.62433645479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2021828.9047619049,
            "unit": "ns",
            "range": "± 90613.79723642359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1700080.5,
            "unit": "ns",
            "range": "± 91883.6421090155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8146630.384615385,
            "unit": "ns",
            "range": "± 196427.8902034183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3762638.5,
            "unit": "ns",
            "range": "± 7439.003246874173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1193370.3263113839,
            "unit": "ns",
            "range": "± 2950.914939683988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772896.9366536458,
            "unit": "ns",
            "range": "± 2272.6741204446666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936192.767299107,
            "unit": "ns",
            "range": "± 2801.1348529829843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620998.3420572917,
            "unit": "ns",
            "range": "± 931.8110067243476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569218.6198567708,
            "unit": "ns",
            "range": "± 734.6416279182145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2464812.3684210526,
            "unit": "ns",
            "range": "± 54277.772987364144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2575729.8225806453,
            "unit": "ns",
            "range": "± 76997.23600683645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3103832.8448275863,
            "unit": "ns",
            "range": "± 77444.63963294585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2598497.1,
            "unit": "ns",
            "range": "± 55993.43770375427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3345699.3846153845,
            "unit": "ns",
            "range": "± 42680.49260793987"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35576.22727272727,
            "unit": "ns",
            "range": "± 2908.546596510916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11222269.733333332,
            "unit": "ns",
            "range": "± 122204.55402752658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28065794.384615384,
            "unit": "ns",
            "range": "± 119148.50369779335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71405162.78571428,
            "unit": "ns",
            "range": "± 475789.2418655034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144822973.33333334,
            "unit": "ns",
            "range": "± 785940.9448998666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287818069.14285713,
            "unit": "ns",
            "range": "± 941361.1517586041"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "bf23258b231b4c3302d281e763e5e54d63bde93f",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-12T18:04:42+09:00",
          "tree_id": "febb1fcfd6b9413d5a7f3a4f1c6c55a67c41dc82",
          "url": "https://github.com/planetarium/libplanet/commit/bf23258b231b4c3302d281e763e5e54d63bde93f"
        },
        "date": 1720775730217,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208381.95918367346,
            "unit": "ns",
            "range": "± 7876.495781117767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196428.43243243243,
            "unit": "ns",
            "range": "± 9310.16765895426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168736.10344827586,
            "unit": "ns",
            "range": "± 4874.277707259577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3212163.2666666666,
            "unit": "ns",
            "range": "± 38034.1955340692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2737688.7333333334,
            "unit": "ns",
            "range": "± 33844.79044205573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13562.91573033708,
            "unit": "ns",
            "range": "± 1297.446511500297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61787.43820224719,
            "unit": "ns",
            "range": "± 4917.370386874049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51120.153846153844,
            "unit": "ns",
            "range": "± 472.8961912431815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61996.55319148936,
            "unit": "ns",
            "range": "± 9336.963790787324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2952.360824742268,
            "unit": "ns",
            "range": "± 363.53347466129264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12767.712765957447,
            "unit": "ns",
            "range": "± 1005.7323750172602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030539.8118279569,
            "unit": "ns",
            "range": "± 79184.03049596863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1974172.6153846155,
            "unit": "ns",
            "range": "± 80311.07362335187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1690806.8513513512,
            "unit": "ns",
            "range": "± 84302.70382693782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8286481.018518519,
            "unit": "ns",
            "range": "± 224007.00887135213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3742108.368689904,
            "unit": "ns",
            "range": "± 4796.912694296397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198137.3853665865,
            "unit": "ns",
            "range": "± 1634.2791066067593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768794.3099190848,
            "unit": "ns",
            "range": "± 1143.0521621876553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928586.5202287945,
            "unit": "ns",
            "range": "± 2954.369434408283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621488.0356445312,
            "unit": "ns",
            "range": "± 739.1539365283387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567129.1309895833,
            "unit": "ns",
            "range": "± 995.8941323404996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2422648,
            "unit": "ns",
            "range": "± 36116.61099233189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2575216.1739130435,
            "unit": "ns",
            "range": "± 62479.49721792537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3073437.3571428573,
            "unit": "ns",
            "range": "± 50155.255972149804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2631722.1666666665,
            "unit": "ns",
            "range": "± 35771.58296482732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3252892.3,
            "unit": "ns",
            "range": "± 32420.645836521253"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38101.66,
            "unit": "ns",
            "range": "± 5938.546802514616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10990345.785714285,
            "unit": "ns",
            "range": "± 109969.14647032635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28410044.466666665,
            "unit": "ns",
            "range": "± 155146.15234530432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71786646.5,
            "unit": "ns",
            "range": "± 515723.37958139647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144552426,
            "unit": "ns",
            "range": "± 618969.7986666462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299810213.06666666,
            "unit": "ns",
            "range": "± 1617227.1027544765"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "985c1f787a192654603dba83f7be5bff42d3aa20",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-12T18:16:18+09:00",
          "tree_id": "6512b68e13dce93054d5efa58408c2563d333d72",
          "url": "https://github.com/planetarium/libplanet/commit/985c1f787a192654603dba83f7be5bff42d3aa20"
        },
        "date": 1720776544600,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205236.36440677967,
            "unit": "ns",
            "range": "± 8973.038061340372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192918.63636363635,
            "unit": "ns",
            "range": "± 6414.951578025697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173466.6911764706,
            "unit": "ns",
            "range": "± 7774.496567196736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3130231.066666667,
            "unit": "ns",
            "range": "± 46367.468416470416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2736530.5,
            "unit": "ns",
            "range": "± 31152.10188426605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13378.642105263158,
            "unit": "ns",
            "range": "± 1105.9169865713295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62385.92473118279,
            "unit": "ns",
            "range": "± 4103.9954160193465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61766.38888888889,
            "unit": "ns",
            "range": "± 2063.87091619853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60438.9081632653,
            "unit": "ns",
            "range": "± 10517.153249621077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3062.0520833333335,
            "unit": "ns",
            "range": "± 319.01466291302154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12268.891304347826,
            "unit": "ns",
            "range": "± 812.2869554200245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1016673.9222222222,
            "unit": "ns",
            "range": "± 61594.46307437746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1901986.642857143,
            "unit": "ns",
            "range": "± 33144.45122051037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1692438.3875,
            "unit": "ns",
            "range": "± 88499.18061402757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8270968.2272727275,
            "unit": "ns",
            "range": "± 179216.09939378235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3728039.6227678573,
            "unit": "ns",
            "range": "± 7923.728689596897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226160.0601283482,
            "unit": "ns",
            "range": "± 1580.1022282424901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760936.6617838541,
            "unit": "ns",
            "range": "± 1623.9889892605133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937514.6611328125,
            "unit": "ns",
            "range": "± 3374.0847925776793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623091.7043108259,
            "unit": "ns",
            "range": "± 603.5246169491442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571086.392438616,
            "unit": "ns",
            "range": "± 650.330870946208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2454920.269230769,
            "unit": "ns",
            "range": "± 29322.85413050671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2533207.111111111,
            "unit": "ns",
            "range": "± 47242.7506594322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3204789.3333333335,
            "unit": "ns",
            "range": "± 49187.194408804455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2623761.2666666666,
            "unit": "ns",
            "range": "± 44390.58872822138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3252752.5,
            "unit": "ns",
            "range": "± 57245.06139896636"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36599.87368421053,
            "unit": "ns",
            "range": "± 3726.0594330697672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11077612.466666667,
            "unit": "ns",
            "range": "± 180098.70397085304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28037470.5,
            "unit": "ns",
            "range": "± 46215.36683789861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74618580.78571428,
            "unit": "ns",
            "range": "± 163230.7965777662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142889452.7,
            "unit": "ns",
            "range": "± 718536.2921961761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299003143.64285713,
            "unit": "ns",
            "range": "± 1199276.773261725"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "f47f4f3b5efd77becd70bf7b6a8d5d1dd1b4f017",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-29T16:28:24+09:00",
          "tree_id": "a6924fe3b7bfaa97a107d6e019ffae7a755be977",
          "url": "https://github.com/planetarium/libplanet/commit/f47f4f3b5efd77becd70bf7b6a8d5d1dd1b4f017"
        },
        "date": 1722307985530,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1024436.4782608695,
            "unit": "ns",
            "range": "± 49288.18897076563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1952233.880952381,
            "unit": "ns",
            "range": "± 71251.64885458916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1663699.6686746988,
            "unit": "ns",
            "range": "± 87161.12509121439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8279520.368421053,
            "unit": "ns",
            "range": "± 284507.93203288876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199672.66,
            "unit": "ns",
            "range": "± 7455.445301063032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192596.02127659574,
            "unit": "ns",
            "range": "± 6290.60939015748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164067.92307692306,
            "unit": "ns",
            "range": "± 2676.3743342296266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3038042.8,
            "unit": "ns",
            "range": "± 48776.02308101799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2865384.466666667,
            "unit": "ns",
            "range": "± 45186.487833148065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12366.318681318682,
            "unit": "ns",
            "range": "± 782.3445515332724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60299.14893617021,
            "unit": "ns",
            "range": "± 4353.163740642926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50107.75,
            "unit": "ns",
            "range": "± 633.4597820339864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55188.8969072165,
            "unit": "ns",
            "range": "± 9419.04042406096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2579.81914893617,
            "unit": "ns",
            "range": "± 277.0894022399206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11794.433333333332,
            "unit": "ns",
            "range": "± 820.6076646765143"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32683.928571428572,
            "unit": "ns",
            "range": "± 343.53959894596727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10560691.7,
            "unit": "ns",
            "range": "± 80635.33509678887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27643739.666666668,
            "unit": "ns",
            "range": "± 99943.30920410164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71552953.53333333,
            "unit": "ns",
            "range": "± 270210.02374287264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140369909.96666667,
            "unit": "ns",
            "range": "± 402263.4457867961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298167093.5,
            "unit": "ns",
            "range": "± 593487.6881194302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3774791.1356026786,
            "unit": "ns",
            "range": "± 6643.608160851578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208744.4077845982,
            "unit": "ns",
            "range": "± 1199.5263420513302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754513.6391276042,
            "unit": "ns",
            "range": "± 1368.23665648056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913185.2833426339,
            "unit": "ns",
            "range": "± 1782.5563319696716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626201.357421875,
            "unit": "ns",
            "range": "± 553.8086139399918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579304.376953125,
            "unit": "ns",
            "range": "± 218.32053465955607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2441575.590909091,
            "unit": "ns",
            "range": "± 57708.42991478313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2555086.933333333,
            "unit": "ns",
            "range": "± 42915.44063532157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3044665.3076923075,
            "unit": "ns",
            "range": "± 80819.23537674393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2575929.888888889,
            "unit": "ns",
            "range": "± 54630.13551483541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3229452.1428571427,
            "unit": "ns",
            "range": "± 44631.793343478195"
          }
        ]
      }
    ]
  }
}