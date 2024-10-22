window.BENCHMARK_DATA = {
  "lastUpdate": 1729585160008,
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
          "id": "cc6231734c0a453136406364b913e301cca2fa30",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-08-02T16:46:46+09:00",
          "tree_id": "d54846787daf405e740697a05174fd66793ff8b8",
          "url": "https://github.com/planetarium/libplanet/commit/cc6231734c0a453136406364b913e301cca2fa30"
        },
        "date": 1722585371956,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1042810.5714285715,
            "unit": "ns",
            "range": "± 52870.64948791944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2042989.808219178,
            "unit": "ns",
            "range": "± 100681.40450156205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686753.238095238,
            "unit": "ns",
            "range": "± 77148.04643685439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8645033.392156864,
            "unit": "ns",
            "range": "± 351980.31722828356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205476.9661016949,
            "unit": "ns",
            "range": "± 8520.282413900622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197400.42105263157,
            "unit": "ns",
            "range": "± 8095.0435495770425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170066.76,
            "unit": "ns",
            "range": "± 4385.474710906448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3077784.6,
            "unit": "ns",
            "range": "± 46031.47594201168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2845290.3684210526,
            "unit": "ns",
            "range": "± 55623.66400014628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15215.704081632653,
            "unit": "ns",
            "range": "± 2082.9458333137827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61433.5,
            "unit": "ns",
            "range": "± 4734.63764552353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51018.333333333336,
            "unit": "ns",
            "range": "± 510.10949507894577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55455.04081632653,
            "unit": "ns",
            "range": "± 9900.963818717548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2835.191489361702,
            "unit": "ns",
            "range": "± 319.2433014460727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12923.582417582418,
            "unit": "ns",
            "range": "± 1494.0680042973952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32456.384615384617,
            "unit": "ns",
            "range": "± 339.74488920893236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11010526.57142857,
            "unit": "ns",
            "range": "± 74513.52758595045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27713766.115384616,
            "unit": "ns",
            "range": "± 96244.13719333631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71387432.3076923,
            "unit": "ns",
            "range": "± 163711.59433863393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146502860.8,
            "unit": "ns",
            "range": "± 765499.2453605686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294183484.03333336,
            "unit": "ns",
            "range": "± 1275909.8181570484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3745078.9083533655,
            "unit": "ns",
            "range": "± 2775.775348955916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1232422.50703125,
            "unit": "ns",
            "range": "± 2918.007522642486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755782.9251302084,
            "unit": "ns",
            "range": "± 1587.2905603067795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972664.9556361607,
            "unit": "ns",
            "range": "± 2087.051224010706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629028.4422433035,
            "unit": "ns",
            "range": "± 614.9517486576436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572615.1408203125,
            "unit": "ns",
            "range": "± 969.251626702988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2448812.9285714286,
            "unit": "ns",
            "range": "± 40129.65900383078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2621047.466666667,
            "unit": "ns",
            "range": "± 30262.416431386744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3104869,
            "unit": "ns",
            "range": "± 39009.254039449224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2620273.56,
            "unit": "ns",
            "range": "± 69189.84102578451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3307574,
            "unit": "ns",
            "range": "± 62309.815215047245"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "7ea0e5a69474f0b819e2329cb59d08e625b9f00e",
          "message": "feat: Upgrade BPV to handle vote power",
          "timestamp": "2024-10-08T11:46:39+09:00",
          "tree_id": "d830b82445d1f1b3f72fb10ed19bb76935908cc0",
          "url": "https://github.com/planetarium/libplanet/commit/7ea0e5a69474f0b819e2329cb59d08e625b9f00e"
        },
        "date": 1728356287466,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1085622.7654320989,
            "unit": "ns",
            "range": "± 56566.997920446425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2031532.2631578948,
            "unit": "ns",
            "range": "± 65277.848446626725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1745491.1898734176,
            "unit": "ns",
            "range": "± 88533.46765157345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8430536.166666666,
            "unit": "ns",
            "range": "± 194873.42453484205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10950707.866666667,
            "unit": "ns",
            "range": "± 175987.65442247308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28300875.233333334,
            "unit": "ns",
            "range": "± 198970.7416669477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71872562.6,
            "unit": "ns",
            "range": "± 453318.2468316744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143397812.86666667,
            "unit": "ns",
            "range": "± 711004.9421625369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 303472403.73333335,
            "unit": "ns",
            "range": "± 3511546.7692574183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3787014.418269231,
            "unit": "ns",
            "range": "± 10995.378646844774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220432.33984375,
            "unit": "ns",
            "range": "± 2286.543381400788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 782593.0602864583,
            "unit": "ns",
            "range": "± 1178.2458911101237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947656.842075893,
            "unit": "ns",
            "range": "± 2045.1793441436566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618760.9266880581,
            "unit": "ns",
            "range": "± 462.5363684030556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591008.6472516741,
            "unit": "ns",
            "range": "± 518.0424169057101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2521246.785714286,
            "unit": "ns",
            "range": "± 31691.100236813807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2644209.1304347827,
            "unit": "ns",
            "range": "± 61195.30386119536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3076826.066666667,
            "unit": "ns",
            "range": "± 51419.13693567331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2675051.476190476,
            "unit": "ns",
            "range": "± 60416.016565658356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3351258.714285714,
            "unit": "ns",
            "range": "± 42731.81100624717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216655.22727272726,
            "unit": "ns",
            "range": "± 20170.601933091344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210674.0101010101,
            "unit": "ns",
            "range": "± 19754.365737830678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186993.5918367347,
            "unit": "ns",
            "range": "± 12537.385586191403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3141059.6428571427,
            "unit": "ns",
            "range": "± 23786.12607773099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2928310.7333333334,
            "unit": "ns",
            "range": "± 28033.371899696023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17969.26,
            "unit": "ns",
            "range": "± 4861.485482168318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70593.70833333333,
            "unit": "ns",
            "range": "± 10589.348291578233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54246.333333333336,
            "unit": "ns",
            "range": "± 3216.410836113239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68979.44897959183,
            "unit": "ns",
            "range": "± 11375.417362342057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3416.28125,
            "unit": "ns",
            "range": "± 561.3288126003005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17966.329896907217,
            "unit": "ns",
            "range": "± 3936.576375062604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34639.637931034486,
            "unit": "ns",
            "range": "± 1521.6235494547568"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "e87d526d07f2639f61ffba2a557b170cd43f9ff3",
          "message": "feat: Upgrade BPV to handle vote power",
          "timestamp": "2024-10-08T13:06:55+09:00",
          "tree_id": "93ff63e40a7217404d7236fa4adee603bed5f7e6",
          "url": "https://github.com/planetarium/libplanet/commit/e87d526d07f2639f61ffba2a557b170cd43f9ff3"
        },
        "date": 1728361309424,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1044663.7361111111,
            "unit": "ns",
            "range": "± 51473.43138516398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1991015.4102564103,
            "unit": "ns",
            "range": "± 65795.30410523948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1737723.4,
            "unit": "ns",
            "range": "± 126858.78466344025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8285297.888888889,
            "unit": "ns",
            "range": "± 222942.59633511273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11317263.4,
            "unit": "ns",
            "range": "± 149751.069356926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28174447.57142857,
            "unit": "ns",
            "range": "± 86134.68751698325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72293034.93333334,
            "unit": "ns",
            "range": "± 413128.46349747066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146515975.23333332,
            "unit": "ns",
            "range": "± 875470.2526163105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300296331,
            "unit": "ns",
            "range": "± 1136314.634418361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3683999.8611778845,
            "unit": "ns",
            "range": "± 10246.856261044593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1237145.9963942308,
            "unit": "ns",
            "range": "± 2065.2009778553975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772487.5340169271,
            "unit": "ns",
            "range": "± 647.9751954821895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2069486.715625,
            "unit": "ns",
            "range": "± 3707.9129096068627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629727.2743489583,
            "unit": "ns",
            "range": "± 1250.5552382347485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585294.5119441106,
            "unit": "ns",
            "range": "± 576.1747073131405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2506793.1,
            "unit": "ns",
            "range": "± 31438.40802903353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2576826.25,
            "unit": "ns",
            "range": "± 66656.13778989311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3082720.8,
            "unit": "ns",
            "range": "± 48663.27328870746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2704057.3103448274,
            "unit": "ns",
            "range": "± 77861.55708375853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3412822.722222222,
            "unit": "ns",
            "range": "± 71614.76208284858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203185.10869565216,
            "unit": "ns",
            "range": "± 9773.43726821867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198228.63684210528,
            "unit": "ns",
            "range": "± 11784.94923450239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167472.65789473685,
            "unit": "ns",
            "range": "± 5358.956354004497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3140071.2333333334,
            "unit": "ns",
            "range": "± 38478.50204143063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2947979.3333333335,
            "unit": "ns",
            "range": "± 46683.48084351323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13368.573684210527,
            "unit": "ns",
            "range": "± 1584.3849954041518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61349.26373626374,
            "unit": "ns",
            "range": "± 5795.283601219117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50767,
            "unit": "ns",
            "range": "± 402.3561290019758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58144.84693877551,
            "unit": "ns",
            "range": "± 10074.056189556983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3064.103092783505,
            "unit": "ns",
            "range": "± 458.3964915090811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12607.212765957447,
            "unit": "ns",
            "range": "± 1151.5526393203224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43912.375,
            "unit": "ns",
            "range": "± 843.3723475824107"
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
          "id": "ac9cce38c1ab3ac27544eff030ee44b3ed3595dd",
          "message": "test: Change test hash values due to BPV updates",
          "timestamp": "2024-10-08T13:45:17+09:00",
          "tree_id": "9bf9aba8308c678276caeeca3678a4c3f5fbbdca",
          "url": "https://github.com/planetarium/libplanet/commit/ac9cce38c1ab3ac27544eff030ee44b3ed3595dd"
        },
        "date": 1728363312768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1051769.2714285713,
            "unit": "ns",
            "range": "± 37927.70509834082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2054561.2872340425,
            "unit": "ns",
            "range": "± 77821.49056429978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1790658.3732394367,
            "unit": "ns",
            "range": "± 81880.39474465697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8297267.8125,
            "unit": "ns",
            "range": "± 253896.3792466217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11303883.57142857,
            "unit": "ns",
            "range": "± 50814.62999163541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28465553.214285713,
            "unit": "ns",
            "range": "± 106918.37099407881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71927308.7,
            "unit": "ns",
            "range": "± 234750.0790570991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144761749.33333334,
            "unit": "ns",
            "range": "± 361589.47157271893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299401745.71428573,
            "unit": "ns",
            "range": "± 2730871.2246236177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3769828.988839286,
            "unit": "ns",
            "range": "± 7189.43715668921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215793.809344952,
            "unit": "ns",
            "range": "± 1358.0555372755996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 796567.6792689732,
            "unit": "ns",
            "range": "± 2306.063922701157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1988506.5848958334,
            "unit": "ns",
            "range": "± 4797.672102283054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621819.2309194711,
            "unit": "ns",
            "range": "± 1649.5159439778615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578876.1974748884,
            "unit": "ns",
            "range": "± 958.6421978953209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2511333.066666667,
            "unit": "ns",
            "range": "± 40823.62274899646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2682190.0588235296,
            "unit": "ns",
            "range": "± 52129.90754052633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3139330.2,
            "unit": "ns",
            "range": "± 53844.642158449045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2829801.5,
            "unit": "ns",
            "range": "± 54979.406365171555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3346933.4615384615,
            "unit": "ns",
            "range": "± 51018.12173240567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214531.21739130435,
            "unit": "ns",
            "range": "± 12106.796512636012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204916.1494845361,
            "unit": "ns",
            "range": "± 12729.179591952987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185505.4393939394,
            "unit": "ns",
            "range": "± 12120.293754285287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3164958.3333333335,
            "unit": "ns",
            "range": "± 21908.22056628407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3100130.533333333,
            "unit": "ns",
            "range": "± 46405.4169403694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15446.255319148937,
            "unit": "ns",
            "range": "± 1718.958148678113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72627.41,
            "unit": "ns",
            "range": "± 8904.329289897656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53204.9756097561,
            "unit": "ns",
            "range": "± 1923.4081923476992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69259.37894736842,
            "unit": "ns",
            "range": "± 10336.774083369331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3846.422680412371,
            "unit": "ns",
            "range": "± 692.4134698503782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15941.373626373626,
            "unit": "ns",
            "range": "± 1843.809038366872"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39111.207070707074,
            "unit": "ns",
            "range": "± 7107.645607849779"
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
          "id": "c045fc891af5dfeb196e399ee3e227d5410c3177",
          "message": "test: Change test hash values due to BPV updates",
          "timestamp": "2024-10-08T14:11:59+09:00",
          "tree_id": "7d6f4b988ace2bcbd5a789a69c3c02a5e7ae15f2",
          "url": "https://github.com/planetarium/libplanet/commit/c045fc891af5dfeb196e399ee3e227d5410c3177"
        },
        "date": 1728364831086,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1044223.0487804879,
            "unit": "ns",
            "range": "± 52257.25284339324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1989905.2884615385,
            "unit": "ns",
            "range": "± 81504.79699616303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1705353.3452380951,
            "unit": "ns",
            "range": "± 90995.71908499343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8275413.219512195,
            "unit": "ns",
            "range": "± 291991.90810427535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10681171.357142856,
            "unit": "ns",
            "range": "± 76105.2488856029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27669757.466666665,
            "unit": "ns",
            "range": "± 193463.2780953779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72267421.2,
            "unit": "ns",
            "range": "± 379389.78730516345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144841028.41666666,
            "unit": "ns",
            "range": "± 474936.6671061538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 301502820.8666667,
            "unit": "ns",
            "range": "± 1437888.5462855827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3795047.1184895835,
            "unit": "ns",
            "range": "± 15306.313882457489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195290.603794643,
            "unit": "ns",
            "range": "± 2578.1726941901193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763448.3791015625,
            "unit": "ns",
            "range": "± 1442.2559623691466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933392.8509114583,
            "unit": "ns",
            "range": "± 1815.9696751113433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614693.6144831731,
            "unit": "ns",
            "range": "± 390.36309787619194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576372.7110677083,
            "unit": "ns",
            "range": "± 458.1757180700986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2533847.066666667,
            "unit": "ns",
            "range": "± 46359.51238722159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2700731.1,
            "unit": "ns",
            "range": "± 49627.67056045591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3118320,
            "unit": "ns",
            "range": "± 67978.34700844086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2667749.6296296297,
            "unit": "ns",
            "range": "± 74554.063669955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3339619.933333333,
            "unit": "ns",
            "range": "± 47344.55153819054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203758.5243902439,
            "unit": "ns",
            "range": "± 10658.458449705056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195982.1855670103,
            "unit": "ns",
            "range": "± 11714.325901193495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185579.87878787878,
            "unit": "ns",
            "range": "± 11478.536232742492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3079987.6428571427,
            "unit": "ns",
            "range": "± 42384.05504905234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2930645,
            "unit": "ns",
            "range": "± 38122.05340557015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12997.78409090909,
            "unit": "ns",
            "range": "± 1096.7292329097027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71655.52127659574,
            "unit": "ns",
            "range": "± 5151.601218827212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58622.875,
            "unit": "ns",
            "range": "± 5019.864584564849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57163.21428571428,
            "unit": "ns",
            "range": "± 9060.727934389759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2800.191489361702,
            "unit": "ns",
            "range": "± 341.97542125713437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12635.569892473119,
            "unit": "ns",
            "range": "± 1705.3129599160375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32221.1875,
            "unit": "ns",
            "range": "± 616.907147929627"
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
          "id": "9f2ae3694898cc0c8de50f764c04667fb7c22a8f",
          "message": "test: Change test hash values due to BPV updates",
          "timestamp": "2024-10-21T10:26:58+09:00",
          "tree_id": "5a908570fa7869eea1d7f2eca1de3ec178e83caf",
          "url": "https://github.com/planetarium/libplanet/commit/9f2ae3694898cc0c8de50f764c04667fb7c22a8f"
        },
        "date": 1729474566848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10631838,
            "unit": "ns",
            "range": "± 53194.85525586386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27442718.166666668,
            "unit": "ns",
            "range": "± 111888.1211712758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68618595.53333333,
            "unit": "ns",
            "range": "± 265703.9778431916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139851923.73333332,
            "unit": "ns",
            "range": "± 757360.8873016565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287615547.14285713,
            "unit": "ns",
            "range": "± 1062103.0095675464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 118161.36440677966,
            "unit": "ns",
            "range": "± 5168.56621703913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191987.95238095237,
            "unit": "ns",
            "range": "± 5902.132408993115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165785.8,
            "unit": "ns",
            "range": "± 2936.6949158146185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2879973.9166666665,
            "unit": "ns",
            "range": "± 16314.80832338486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2727834.5714285714,
            "unit": "ns",
            "range": "± 33734.69352157369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12989.744186046511,
            "unit": "ns",
            "range": "± 855.8992132261219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63658.58163265306,
            "unit": "ns",
            "range": "± 7768.959556875052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49798.5625,
            "unit": "ns",
            "range": "± 918.350330302476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49833.239583333336,
            "unit": "ns",
            "range": "± 7363.573791583872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2961.0309278350514,
            "unit": "ns",
            "range": "± 476.0920878536404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11998.644444444444,
            "unit": "ns",
            "range": "± 751.4664362059493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3698646.347981771,
            "unit": "ns",
            "range": "± 4090.066592818971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206474.328515625,
            "unit": "ns",
            "range": "± 1754.534638411644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762280.6782552083,
            "unit": "ns",
            "range": "± 1242.654482009488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949200.6466238839,
            "unit": "ns",
            "range": "± 3501.1643654989994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624367.710797991,
            "unit": "ns",
            "range": "± 1098.8089732557105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578970.7662527902,
            "unit": "ns",
            "range": "± 588.8268790652845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2418148.785714286,
            "unit": "ns",
            "range": "± 35885.42367072559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2538942.8333333335,
            "unit": "ns",
            "range": "± 26932.114684535125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3004619.7,
            "unit": "ns",
            "range": "± 47205.214507963596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2508047.5625,
            "unit": "ns",
            "range": "± 45959.26528418943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3283876.222222222,
            "unit": "ns",
            "range": "± 70043.58630990845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000651.843373494,
            "unit": "ns",
            "range": "± 50601.178782780116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1928459.15625,
            "unit": "ns",
            "range": "± 57921.64833334958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1607316.15,
            "unit": "ns",
            "range": "± 82835.01963283494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7656753.5,
            "unit": "ns",
            "range": "± 174006.57106724146"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30973.56,
            "unit": "ns",
            "range": "± 810.6600232732173"
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
          "id": "fc7769ba71198c2391c999f25f83d3196468cf46",
          "message": "test: Add test code for additional changes",
          "timestamp": "2024-10-22T10:16:44+09:00",
          "tree_id": "b081b2b11fa0f46ab079aec6128b803709b66d0b",
          "url": "https://github.com/planetarium/libplanet/commit/fc7769ba71198c2391c999f25f83d3196468cf46"
        },
        "date": 1729560345922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10966712.26923077,
            "unit": "ns",
            "range": "± 38451.04556262384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28579414.57142857,
            "unit": "ns",
            "range": "± 216776.308905575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71243842.46666667,
            "unit": "ns",
            "range": "± 336691.4897636509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144665899.96666667,
            "unit": "ns",
            "range": "± 740619.9270274354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294736777.3333333,
            "unit": "ns",
            "range": "± 2074999.7146660273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111441.36263736263,
            "unit": "ns",
            "range": "± 8063.542472851334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192303.28205128206,
            "unit": "ns",
            "range": "± 6734.128537175072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167398.57142857142,
            "unit": "ns",
            "range": "± 2784.255948509976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2897726.5,
            "unit": "ns",
            "range": "± 31840.640972481404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2713076.3571428573,
            "unit": "ns",
            "range": "± 25938.71430256962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16424.127659574468,
            "unit": "ns",
            "range": "± 1306.388070207092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59750.01204819277,
            "unit": "ns",
            "range": "± 3175.0740974413993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49126.42424242424,
            "unit": "ns",
            "range": "± 1144.713119909936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63278.73469387755,
            "unit": "ns",
            "range": "± 9043.469352745198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3181.625,
            "unit": "ns",
            "range": "± 276.1047951317341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12554.989010989011,
            "unit": "ns",
            "range": "± 1094.3824589898022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3738396.8052884615,
            "unit": "ns",
            "range": "± 3628.8698699831325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206500.9221354167,
            "unit": "ns",
            "range": "± 1462.837170488952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767574.6282087053,
            "unit": "ns",
            "range": "± 1220.5745523824473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954098.5369791666,
            "unit": "ns",
            "range": "± 2836.171130654407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628395.2368861607,
            "unit": "ns",
            "range": "± 906.3075639281761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574051.9626813616,
            "unit": "ns",
            "range": "± 366.6821103649125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2510091.9782608696,
            "unit": "ns",
            "range": "± 52442.67836051574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2543680.0555555555,
            "unit": "ns",
            "range": "± 54081.38704519353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3094230,
            "unit": "ns",
            "range": "± 56826.115325614155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2588562.066666667,
            "unit": "ns",
            "range": "± 35508.79457958602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3333837.1333333333,
            "unit": "ns",
            "range": "± 53208.206590265574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000421.1081081082,
            "unit": "ns",
            "range": "± 48996.66839381665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1945073.84,
            "unit": "ns",
            "range": "± 73746.32126234488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1609914.3561643835,
            "unit": "ns",
            "range": "± 75609.2445008049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7662758.7727272725,
            "unit": "ns",
            "range": "± 148493.40236969062"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30828.14285714286,
            "unit": "ns",
            "range": "± 871.3846671219538"
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
          "id": "20462ef1b171c8911565f12b7eec58bd72c59361",
          "message": "test: Add test code for additional changes",
          "timestamp": "2024-10-22T10:39:13+09:00",
          "tree_id": "81c38f4dfaa53629ac86f6fe48c3f3ff443c214a",
          "url": "https://github.com/planetarium/libplanet/commit/20462ef1b171c8911565f12b7eec58bd72c59361"
        },
        "date": 1729561765577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10504722.142857144,
            "unit": "ns",
            "range": "± 51814.492556259174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27958977.9,
            "unit": "ns",
            "range": "± 129085.8489482318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 76395194.07142857,
            "unit": "ns",
            "range": "± 344909.68938515446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143551082.2142857,
            "unit": "ns",
            "range": "± 409183.48372496257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290103793.14285713,
            "unit": "ns",
            "range": "± 698474.4470797501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108205.97777777778,
            "unit": "ns",
            "range": "± 6649.552489762552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193485.55,
            "unit": "ns",
            "range": "± 8248.937123982929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169990,
            "unit": "ns",
            "range": "± 1042.1386663971355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2860743.466666667,
            "unit": "ns",
            "range": "± 48648.083521004875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2883378,
            "unit": "ns",
            "range": "± 41457.57203282825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12217.206896551725,
            "unit": "ns",
            "range": "± 882.4408160921461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58807.5,
            "unit": "ns",
            "range": "± 3168.777961783428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49689.26470588235,
            "unit": "ns",
            "range": "± 871.288953893294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51841.9175257732,
            "unit": "ns",
            "range": "± 8169.186845842971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2462.8617021276596,
            "unit": "ns",
            "range": "± 253.5898326997447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11650.301075268817,
            "unit": "ns",
            "range": "± 1047.2409068901236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3711123.790457589,
            "unit": "ns",
            "range": "± 8615.901728696446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226281.4252232143,
            "unit": "ns",
            "range": "± 2215.230799773419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755903.0021033654,
            "unit": "ns",
            "range": "± 765.1900628500256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960363.8963541666,
            "unit": "ns",
            "range": "± 2186.0945445939265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620710.4192057292,
            "unit": "ns",
            "range": "± 651.6272804885906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578669.5216936384,
            "unit": "ns",
            "range": "± 383.38296580004385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2439422.3333333335,
            "unit": "ns",
            "range": "± 28245.727873348173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2527103.2,
            "unit": "ns",
            "range": "± 65603.30293953553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2987231.0714285714,
            "unit": "ns",
            "range": "± 33308.21841923906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2555402.8666666667,
            "unit": "ns",
            "range": "± 29280.836231390727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3255403.777777778,
            "unit": "ns",
            "range": "± 67770.37372567972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022382.956043956,
            "unit": "ns",
            "range": "± 77094.90152070326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1899283.9130434783,
            "unit": "ns",
            "range": "± 46838.35170699817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1608356.55,
            "unit": "ns",
            "range": "± 83805.2240332504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7666087.375,
            "unit": "ns",
            "range": "± 193928.13356517063"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33893.79,
            "unit": "ns",
            "range": "± 5456.5134690828745"
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
          "id": "7d6004d5fcc4cb9261f614eb96f738fe55c28ea1",
          "message": "test: Add test code for additional changes",
          "timestamp": "2024-10-22T11:07:12+09:00",
          "tree_id": "df6525dc6c3df57a21bae839857e2c0e8710c824",
          "url": "https://github.com/planetarium/libplanet/commit/7d6004d5fcc4cb9261f614eb96f738fe55c28ea1"
        },
        "date": 1729563376671,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10861608.285714285,
            "unit": "ns",
            "range": "± 63401.657699971816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27960342,
            "unit": "ns",
            "range": "± 141830.09280238568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71513270.93333334,
            "unit": "ns",
            "range": "± 401584.3802420014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142240466.8,
            "unit": "ns",
            "range": "± 775758.0038143522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288016621.64285713,
            "unit": "ns",
            "range": "± 1089112.5848044895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 118602.90625,
            "unit": "ns",
            "range": "± 8289.427927157547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196997.63636363635,
            "unit": "ns",
            "range": "± 5758.941156031755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170422.8,
            "unit": "ns",
            "range": "± 3112.577691514589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2964528.3333333335,
            "unit": "ns",
            "range": "± 37047.29373896226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2842175.7333333334,
            "unit": "ns",
            "range": "± 38432.34280704333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12722.91304347826,
            "unit": "ns",
            "range": "± 902.1524036372334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58903.0253164557,
            "unit": "ns",
            "range": "± 2740.3114317428603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50463.92857142857,
            "unit": "ns",
            "range": "± 572.5866362778266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60030.6875,
            "unit": "ns",
            "range": "± 9824.459374773705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3187.1875,
            "unit": "ns",
            "range": "± 560.161336017063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12256.946236559139,
            "unit": "ns",
            "range": "± 1174.8155670756541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748625.443359375,
            "unit": "ns",
            "range": "± 5483.748622777555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216038.2796875,
            "unit": "ns",
            "range": "± 2425.5869952866165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765867.0285807292,
            "unit": "ns",
            "range": "± 1347.8388024235155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968545.2002604166,
            "unit": "ns",
            "range": "± 2147.990356881586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632554.5319475447,
            "unit": "ns",
            "range": "± 380.25143040314424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581512.6729910715,
            "unit": "ns",
            "range": "± 732.4796673059503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2457917.8,
            "unit": "ns",
            "range": "± 24850.786581974768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2524942.25,
            "unit": "ns",
            "range": "± 78485.63597820449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3098438,
            "unit": "ns",
            "range": "± 42461.72966330976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2582140.1428571427,
            "unit": "ns",
            "range": "± 36859.158007427184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3223611.8,
            "unit": "ns",
            "range": "± 31503.64305056072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1060890.7894736843,
            "unit": "ns",
            "range": "± 106939.94659540254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1918151.6285714286,
            "unit": "ns",
            "range": "± 62344.11051437474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1602169.670886076,
            "unit": "ns",
            "range": "± 82621.58849650112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7765035.352941177,
            "unit": "ns",
            "range": "± 248932.47021216873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30668.51219512195,
            "unit": "ns",
            "range": "± 1110.4703985688052"
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
          "id": "69004c5ad9ccc0e9156648af0b7272f95eb26779",
          "message": "test: Add test code for additional changes",
          "timestamp": "2024-10-22T11:13:35+09:00",
          "tree_id": "3c13b720884b5e04999b9b4fadaf7d4229f0af0f",
          "url": "https://github.com/planetarium/libplanet/commit/69004c5ad9ccc0e9156648af0b7272f95eb26779"
        },
        "date": 1729563775252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11060503.233333332,
            "unit": "ns",
            "range": "± 72467.68052771295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28254007.433333334,
            "unit": "ns",
            "range": "± 167793.38333432862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73142468.3,
            "unit": "ns",
            "range": "± 410959.7043180407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142276057.23333332,
            "unit": "ns",
            "range": "± 520583.76955483714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297142312.03333336,
            "unit": "ns",
            "range": "± 1348039.0891607741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 120305.18947368421,
            "unit": "ns",
            "range": "± 9511.990952403783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201670.48235294118,
            "unit": "ns",
            "range": "± 10836.269076151455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171451.72,
            "unit": "ns",
            "range": "± 4462.366622843383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3080645.3571428573,
            "unit": "ns",
            "range": "± 37763.78405217836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2868669.5555555555,
            "unit": "ns",
            "range": "± 60114.98591397913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13824.58695652174,
            "unit": "ns",
            "range": "± 1285.7096014141987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86387.41836734694,
            "unit": "ns",
            "range": "± 9920.952050385635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50760.166666666664,
            "unit": "ns",
            "range": "± 1506.1346526635734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63838.102040816324,
            "unit": "ns",
            "range": "± 9390.413662473391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3735.8736842105263,
            "unit": "ns",
            "range": "± 429.26915234055167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13668.397849462366,
            "unit": "ns",
            "range": "± 2039.674713728003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3634353.2385602677,
            "unit": "ns",
            "range": "± 4389.812160184102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197699.2079427084,
            "unit": "ns",
            "range": "± 2052.7537796954784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757804.8184291294,
            "unit": "ns",
            "range": "± 1035.5655747631324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961935.975,
            "unit": "ns",
            "range": "± 4178.080233593835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 657138.3447265625,
            "unit": "ns",
            "range": "± 566.7917700604796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581948.6845052083,
            "unit": "ns",
            "range": "± 815.6898385230689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2479188.117647059,
            "unit": "ns",
            "range": "± 40861.60814548657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2593803.066666667,
            "unit": "ns",
            "range": "± 45336.17517654192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3119842.3571428573,
            "unit": "ns",
            "range": "± 54486.74056291429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2673293.8529411764,
            "unit": "ns",
            "range": "± 53704.23198750399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3324199.1428571427,
            "unit": "ns",
            "range": "± 26229.754758838124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1042301.6373626373,
            "unit": "ns",
            "range": "± 68422.60483893326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2018151.463414634,
            "unit": "ns",
            "range": "± 72729.29151624453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1632029.5114942528,
            "unit": "ns",
            "range": "± 85709.75107675557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7780998.115384615,
            "unit": "ns",
            "range": "± 205097.401749574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31024.280487804877,
            "unit": "ns",
            "range": "± 1127.7268399793259"
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
          "id": "b17cba1bdd6c70eab066e839f02017e6abf1cd83",
          "message": "test: Add test code for additional changes",
          "timestamp": "2024-10-22T11:35:26+09:00",
          "tree_id": "fccfe15604297b24d279f9a5d52e5a22baf3c5d7",
          "url": "https://github.com/planetarium/libplanet/commit/b17cba1bdd6c70eab066e839f02017e6abf1cd83"
        },
        "date": 1729565460674,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10789339.933333334,
            "unit": "ns",
            "range": "± 74248.63791676746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27978264.07142857,
            "unit": "ns",
            "range": "± 149404.9236355113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72702318.36666666,
            "unit": "ns",
            "range": "± 438456.1285297158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142816155.7857143,
            "unit": "ns",
            "range": "± 613161.866478292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294483741.76666665,
            "unit": "ns",
            "range": "± 769937.2710706899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109160.23287671233,
            "unit": "ns",
            "range": "± 4880.947541548521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195753.56976744186,
            "unit": "ns",
            "range": "± 7129.899255934723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164491.63636363635,
            "unit": "ns",
            "range": "± 3965.049420762736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2958781.785714286,
            "unit": "ns",
            "range": "± 33750.58085295848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2887955.730769231,
            "unit": "ns",
            "range": "± 20229.39707930782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14841.757575757576,
            "unit": "ns",
            "range": "± 2152.9993084679454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62073.445054945056,
            "unit": "ns",
            "range": "± 4105.970786178038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50566.92307692308,
            "unit": "ns",
            "range": "± 715.7197381585501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65108.0618556701,
            "unit": "ns",
            "range": "± 6293.547303611906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3300.2448979591836,
            "unit": "ns",
            "range": "± 811.5148627082448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12769.95652173913,
            "unit": "ns",
            "range": "± 946.1887390774632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3697958.2566964286,
            "unit": "ns",
            "range": "± 4178.916764996268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213664.6731770833,
            "unit": "ns",
            "range": "± 1979.091799296719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758237.0465745192,
            "unit": "ns",
            "range": "± 308.88492235074665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935713.5237379808,
            "unit": "ns",
            "range": "± 1670.6201702913127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620593.1192157452,
            "unit": "ns",
            "range": "± 461.6158903848914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579233.7884347098,
            "unit": "ns",
            "range": "± 646.0574178012544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2521721.125,
            "unit": "ns",
            "range": "± 47874.56776184338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2555718.023809524,
            "unit": "ns",
            "range": "± 60192.89216561956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3070729.4285714286,
            "unit": "ns",
            "range": "± 46152.066705060475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2621664.3157894737,
            "unit": "ns",
            "range": "± 56382.364370482435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3296868.0625,
            "unit": "ns",
            "range": "± 62543.380358456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017891.6075268817,
            "unit": "ns",
            "range": "± 65540.48951875382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1943778.9189189188,
            "unit": "ns",
            "range": "± 65859.8000724006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1602789.7602739725,
            "unit": "ns",
            "range": "± 72677.46875580327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7774714.038461538,
            "unit": "ns",
            "range": "± 171327.35972108616"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31304.35,
            "unit": "ns",
            "range": "± 699.0843089732679"
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
          "id": "d65ff915dace0c5f695a77f04d2f79747d285971",
          "message": "chore: Changes",
          "timestamp": "2024-10-22T16:56:43+09:00",
          "tree_id": "614bfc05a6323132ae8cc65f448e98efd55dea85",
          "url": "https://github.com/planetarium/libplanet/commit/d65ff915dace0c5f695a77f04d2f79747d285971"
        },
        "date": 1729585132924,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11463203.866666667,
            "unit": "ns",
            "range": "± 209835.39479311145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28512389.133333333,
            "unit": "ns",
            "range": "± 365134.24671323027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73436922.64285715,
            "unit": "ns",
            "range": "± 282800.47645471967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 151272822.56666666,
            "unit": "ns",
            "range": "± 835239.150708643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 301242550.4,
            "unit": "ns",
            "range": "± 1812448.0268565654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 137843.46,
            "unit": "ns",
            "range": "± 19476.78368041647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239421.83333333334,
            "unit": "ns",
            "range": "± 11522.62111299879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205392.84536082475,
            "unit": "ns",
            "range": "± 13102.130954495693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3057726.5,
            "unit": "ns",
            "range": "± 29244.345233802826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2968189.033333333,
            "unit": "ns",
            "range": "± 48289.452765687085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22047.434343434343,
            "unit": "ns",
            "range": "± 3301.6730921428184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101014.14736842105,
            "unit": "ns",
            "range": "± 7001.095127053446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56749.05376344086,
            "unit": "ns",
            "range": "± 5700.162002590253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72204.91237113402,
            "unit": "ns",
            "range": "± 12189.086388849877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4564.865979381443,
            "unit": "ns",
            "range": "± 1281.8408769947648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20714.5,
            "unit": "ns",
            "range": "± 3438.749983417464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3753607.834435096,
            "unit": "ns",
            "range": "± 15138.732617358322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214010.1658854166,
            "unit": "ns",
            "range": "± 2531.4888388800246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768167.1939174107,
            "unit": "ns",
            "range": "± 1132.4785816577416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928203.0997395834,
            "unit": "ns",
            "range": "± 6822.504547264377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621831.5008370535,
            "unit": "ns",
            "range": "± 749.8350317543853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 597977.4823521206,
            "unit": "ns",
            "range": "± 807.1401544472175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2543060.4615384615,
            "unit": "ns",
            "range": "± 33101.019225534896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2648548.6585365855,
            "unit": "ns",
            "range": "± 94920.17491545455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3103613.6,
            "unit": "ns",
            "range": "± 49217.861133361504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2588969.9166666665,
            "unit": "ns",
            "range": "± 86052.91963350227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3355846.785714286,
            "unit": "ns",
            "range": "± 46369.646458031755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1057139.4736842106,
            "unit": "ns",
            "range": "± 86003.81409204837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2045120.3636363635,
            "unit": "ns",
            "range": "± 76211.77687638171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1690971.7258064516,
            "unit": "ns",
            "range": "± 73109.78229968403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8186291.35106383,
            "unit": "ns",
            "range": "± 308231.89350375824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37392.92,
            "unit": "ns",
            "range": "± 8096.666348141766"
          }
        ]
      }
    ]
  }
}