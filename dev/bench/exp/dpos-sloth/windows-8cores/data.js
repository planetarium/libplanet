window.BENCHMARK_DATA = {
  "lastUpdate": 1718876621888,
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
        "date": 1716196015036,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1034672,
            "unit": "ns",
            "range": "± 89676.65155626315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1776966.6666666667,
            "unit": "ns",
            "range": "± 66621.09417203566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1565217.3333333333,
            "unit": "ns",
            "range": "± 78602.2322310996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6947641.379310345,
            "unit": "ns",
            "range": "± 186126.64182762647"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36201.02040816326,
            "unit": "ns",
            "range": "± 4815.53531721363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10111350,
            "unit": "ns",
            "range": "± 39271.65297352184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25350260,
            "unit": "ns",
            "range": "± 392545.8368139955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62457646.666666664,
            "unit": "ns",
            "range": "± 841443.0579721504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121897053.33333333,
            "unit": "ns",
            "range": "± 778510.3126821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245847593.33333334,
            "unit": "ns",
            "range": "± 1023628.123369215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3326755.378605769,
            "unit": "ns",
            "range": "± 4891.030059462742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083810.546875,
            "unit": "ns",
            "range": "± 1299.8996989363918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735972.5260416666,
            "unit": "ns",
            "range": "± 1226.887065048124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947581.796875,
            "unit": "ns",
            "range": "± 3007.2805046833187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618104.052734375,
            "unit": "ns",
            "range": "± 884.7714146667396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573877.1484375,
            "unit": "ns",
            "range": "± 602.7206070384116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2112987.5,
            "unit": "ns",
            "range": "± 39864.53519943092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2213980,
            "unit": "ns",
            "range": "± 42236.06092079685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2828418.75,
            "unit": "ns",
            "range": "± 53489.141810900896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2313093.243243243,
            "unit": "ns",
            "range": "± 74215.7835134988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3016360.714285714,
            "unit": "ns",
            "range": "± 85121.72260199014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176403.0303030303,
            "unit": "ns",
            "range": "± 7599.837441519992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167179.3650793651,
            "unit": "ns",
            "range": "± 7671.546900621694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144964.70588235295,
            "unit": "ns",
            "range": "± 2797.9772105198135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2717371.4285714286,
            "unit": "ns",
            "range": "± 40113.175057414905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2325393.3333333335,
            "unit": "ns",
            "range": "± 41258.3405709278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10907.368421052632,
            "unit": "ns",
            "range": "± 1186.5596707218945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52226.666666666664,
            "unit": "ns",
            "range": "± 4077.922196192842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44818.8679245283,
            "unit": "ns",
            "range": "± 1880.881197304725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57102.083333333336,
            "unit": "ns",
            "range": "± 9319.735473619712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2785.714285714286,
            "unit": "ns",
            "range": "± 380.22549700332905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12277.083333333334,
            "unit": "ns",
            "range": "± 1259.6974713391487"
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
        "date": 1717550702812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993497.9381443299,
            "unit": "ns",
            "range": "± 105052.81705268293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1698526.0869565217,
            "unit": "ns",
            "range": "± 64309.789939989736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1528330.9278350514,
            "unit": "ns",
            "range": "± 118972.213458319"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6822441.666666667,
            "unit": "ns",
            "range": "± 205997.2404461491"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33188.63636363636,
            "unit": "ns",
            "range": "± 2589.6092910015973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10084864.285714285,
            "unit": "ns",
            "range": "± 104335.5725689791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24054220,
            "unit": "ns",
            "range": "± 179377.70286664474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60241303.84615385,
            "unit": "ns",
            "range": "± 277950.075299458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122540929.41176471,
            "unit": "ns",
            "range": "± 2371504.727689971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245236223.07692307,
            "unit": "ns",
            "range": "± 1705768.5849072288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3316212.03125,
            "unit": "ns",
            "range": "± 11473.397485585294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069192.8776041667,
            "unit": "ns",
            "range": "± 2435.7925223591833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748440.1171875,
            "unit": "ns",
            "range": "± 3815.5652476709374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936185.1302083333,
            "unit": "ns",
            "range": "± 6706.514561530024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608418.5481770834,
            "unit": "ns",
            "range": "± 1732.3860861338364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569427.9752604166,
            "unit": "ns",
            "range": "± 2676.3622835745996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2126647.1428571427,
            "unit": "ns",
            "range": "± 69487.92313909571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2214608.888888889,
            "unit": "ns",
            "range": "± 76651.8659626467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2741709.523809524,
            "unit": "ns",
            "range": "± 63942.67670939265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2295571.4285714286,
            "unit": "ns",
            "range": "± 36865.523367867885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2940073.3333333335,
            "unit": "ns",
            "range": "± 42466.26336057275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181544.92753623187,
            "unit": "ns",
            "range": "± 8717.030933953103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175710.16949152542,
            "unit": "ns",
            "range": "± 7460.394158840408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140963.15789473685,
            "unit": "ns",
            "range": "± 2829.05766138868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2682860,
            "unit": "ns",
            "range": "± 34162.54841614885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2401846.6666666665,
            "unit": "ns",
            "range": "± 29420.03366674452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9933.333333333334,
            "unit": "ns",
            "range": "± 1334.7711545758393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48891.76470588235,
            "unit": "ns",
            "range": "± 2644.0954779202934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43470.37037037037,
            "unit": "ns",
            "range": "± 1219.0206708712515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48801.030927835054,
            "unit": "ns",
            "range": "± 9492.414678369083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2037.8947368421052,
            "unit": "ns",
            "range": "± 258.1352718808992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9121.27659574468,
            "unit": "ns",
            "range": "± 909.4335162735206"
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
        "date": 1718020355731,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006114.5833333334,
            "unit": "ns",
            "range": "± 94528.24137085523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1771719.512195122,
            "unit": "ns",
            "range": "± 62625.2912947804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590495.918367347,
            "unit": "ns",
            "range": "± 144635.17268992634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6929593.478260869,
            "unit": "ns",
            "range": "± 266664.4111589396"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33072.15189873418,
            "unit": "ns",
            "range": "± 1579.6735064206698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10023306.666666666,
            "unit": "ns",
            "range": "± 53561.132851919334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24690992.85714286,
            "unit": "ns",
            "range": "± 213026.08530876687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62011386.666666664,
            "unit": "ns",
            "range": "± 439563.653551803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122279964.28571428,
            "unit": "ns",
            "range": "± 718662.9793283796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248247820,
            "unit": "ns",
            "range": "± 1235637.547526435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3316353.292410714,
            "unit": "ns",
            "range": "± 8678.33279223755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056329.2057291667,
            "unit": "ns",
            "range": "± 1871.01755278805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749070.48828125,
            "unit": "ns",
            "range": "± 1514.2571589510023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903662.876674107,
            "unit": "ns",
            "range": "± 5781.712912933117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620336.2653459822,
            "unit": "ns",
            "range": "± 1102.343108208735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561805.029296875,
            "unit": "ns",
            "range": "± 1174.0207210914673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145343.75,
            "unit": "ns",
            "range": "± 40672.57009746659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237200,
            "unit": "ns",
            "range": "± 69165.02472464887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2734092.8571428573,
            "unit": "ns",
            "range": "± 45978.58555534663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2324742.8571428573,
            "unit": "ns",
            "range": "± 39580.85617851357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2948371.4285714286,
            "unit": "ns",
            "range": "± 37095.555996982635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180639.62264150943,
            "unit": "ns",
            "range": "± 6991.845239624668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173037.7358490566,
            "unit": "ns",
            "range": "± 6906.636340815046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145413.15789473685,
            "unit": "ns",
            "range": "± 4669.172682816841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2736680,
            "unit": "ns",
            "range": "± 27374.65459664677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2455713.3333333335,
            "unit": "ns",
            "range": "± 27900.073391267186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11792.134831460675,
            "unit": "ns",
            "range": "± 1109.2815774083365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55575.2688172043,
            "unit": "ns",
            "range": "± 4609.787694676982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45873.80952380953,
            "unit": "ns",
            "range": "± 1679.4394424577195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59470.1030927835,
            "unit": "ns",
            "range": "± 11652.308113170588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2822.7272727272725,
            "unit": "ns",
            "range": "± 485.04537591609716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10859.375,
            "unit": "ns",
            "range": "± 1054.471993089682"
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
        "date": 1718346514386,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000826,
            "unit": "ns",
            "range": "± 97954.93049398181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1791527.027027027,
            "unit": "ns",
            "range": "± 86584.08898298208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1509757.8125,
            "unit": "ns",
            "range": "± 65905.96669446962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6772317.391304348,
            "unit": "ns",
            "range": "± 147987.57519152475"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34976.041666666664,
            "unit": "ns",
            "range": "± 4190.71014687102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10215307.142857144,
            "unit": "ns",
            "range": "± 118258.75452573488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24897292.85714286,
            "unit": "ns",
            "range": "± 242449.06987554414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62889960,
            "unit": "ns",
            "range": "± 908346.2994443725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126302833.33333333,
            "unit": "ns",
            "range": "± 860613.7400273188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249184946.66666666,
            "unit": "ns",
            "range": "± 1402903.8282213416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3269824.6930803573,
            "unit": "ns",
            "range": "± 9241.717083451738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062715.3255208333,
            "unit": "ns",
            "range": "± 2569.6190957168415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739115.7421875,
            "unit": "ns",
            "range": "± 2232.403671695817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981473.3473557692,
            "unit": "ns",
            "range": "± 5219.643717317512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616384.8182091346,
            "unit": "ns",
            "range": "± 615.5920954079165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562175.3841145834,
            "unit": "ns",
            "range": "± 1510.3750759067352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2091644.1176470588,
            "unit": "ns",
            "range": "± 57145.7370884275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2186837.313432836,
            "unit": "ns",
            "range": "± 103870.36185294089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2733030.9523809524,
            "unit": "ns",
            "range": "± 62616.60018755106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2290464.285714286,
            "unit": "ns",
            "range": "± 39852.72130738873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2889426.6666666665,
            "unit": "ns",
            "range": "± 42137.1479587221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180655.76923076922,
            "unit": "ns",
            "range": "± 7467.4828019006345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173535.89743589744,
            "unit": "ns",
            "range": "± 5992.472786293396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144450,
            "unit": "ns",
            "range": "± 3707.3370262341887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2743006.6666666665,
            "unit": "ns",
            "range": "± 50384.4146348376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2415866.6666666665,
            "unit": "ns",
            "range": "± 40281.96453335744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11994.736842105263,
            "unit": "ns",
            "range": "± 1543.0260695425059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56284.04255319149,
            "unit": "ns",
            "range": "± 5721.315609127416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45547.82608695652,
            "unit": "ns",
            "range": "± 1132.121726998949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53658.75,
            "unit": "ns",
            "range": "± 5478.974628037946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2736.4583333333335,
            "unit": "ns",
            "range": "± 481.0339284820533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10881.91489361702,
            "unit": "ns",
            "range": "± 1366.3358712663326"
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
        "date": 1718873975542,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1070878.125,
            "unit": "ns",
            "range": "± 113352.80666840704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1873914.0625,
            "unit": "ns",
            "range": "± 80807.28567496104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1650671.875,
            "unit": "ns",
            "range": "± 124989.88649876311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7274622.368421053,
            "unit": "ns",
            "range": "± 365757.57421136537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35540,
            "unit": "ns",
            "range": "± 4237.256237889315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10299585.714285715,
            "unit": "ns",
            "range": "± 148137.59641808516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25835793.333333332,
            "unit": "ns",
            "range": "± 389864.99397074565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63835807.692307696,
            "unit": "ns",
            "range": "± 424628.85845865146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131749946.66666667,
            "unit": "ns",
            "range": "± 1448988.8113866888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255650560,
            "unit": "ns",
            "range": "± 3670202.1608002544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3355024.4698660714,
            "unit": "ns",
            "range": "± 4750.506991262445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077539.453125,
            "unit": "ns",
            "range": "± 943.5169867041179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739117.421875,
            "unit": "ns",
            "range": "± 1243.118038386775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927077.9296875,
            "unit": "ns",
            "range": "± 2757.2844634832777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624090.2408854166,
            "unit": "ns",
            "range": "± 1410.749097485403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570619.2513020834,
            "unit": "ns",
            "range": "± 622.2307532130056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2151433.3333333335,
            "unit": "ns",
            "range": "± 31268.278463887935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283928.5714285714,
            "unit": "ns",
            "range": "± 33588.83579569096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2744546.6666666665,
            "unit": "ns",
            "range": "± 41349.01737762626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2299986.8421052634,
            "unit": "ns",
            "range": "± 79329.56972656175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2954411.7647058824,
            "unit": "ns",
            "range": "± 56591.47332364812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185260.63829787233,
            "unit": "ns",
            "range": "± 12411.367215070817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174210.75268817204,
            "unit": "ns",
            "range": "± 10574.728512966878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150210.1265822785,
            "unit": "ns",
            "range": "± 7752.5941884273925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2802253.846153846,
            "unit": "ns",
            "range": "± 23479.76488328533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2718658.8235294116,
            "unit": "ns",
            "range": "± 55254.64979103036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13204.255319148937,
            "unit": "ns",
            "range": "± 1828.8556204216193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65216.49484536082,
            "unit": "ns",
            "range": "± 9826.385402878857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48962.92134831461,
            "unit": "ns",
            "range": "± 3884.2742981526258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66930.85106382979,
            "unit": "ns",
            "range": "± 11294.741631184572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3656.701030927835,
            "unit": "ns",
            "range": "± 969.2036267488339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13092.783505154639,
            "unit": "ns",
            "range": "± 2491.412225972468"
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
        "date": 1718876404884,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1034495.7446808511,
            "unit": "ns",
            "range": "± 81302.76869056377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1812477.5,
            "unit": "ns",
            "range": "± 53363.72765734398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1618456.3157894737,
            "unit": "ns",
            "range": "± 130701.51703569143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7167342.5,
            "unit": "ns",
            "range": "± 371697.8866369565"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35375,
            "unit": "ns",
            "range": "± 666.8333125052068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10678986.666666666,
            "unit": "ns",
            "range": "± 199215.32093500765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25790933.333333332,
            "unit": "ns",
            "range": "± 93157.99222370303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60354335.71428572,
            "unit": "ns",
            "range": "± 716251.9578248371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124683766.66666667,
            "unit": "ns",
            "range": "± 1530135.253903424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249242628.57142857,
            "unit": "ns",
            "range": "± 796634.5966999806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3517165.8203125,
            "unit": "ns",
            "range": "± 4621.375547085074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1096511.3839285714,
            "unit": "ns",
            "range": "± 3319.9140716729858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740374.7916666666,
            "unit": "ns",
            "range": "± 1781.21878990678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967079.609375,
            "unit": "ns",
            "range": "± 6021.2019317128315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608822.3893229166,
            "unit": "ns",
            "range": "± 3222.7069888851593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572844.8502604166,
            "unit": "ns",
            "range": "± 1706.0703921509078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2111758.620689655,
            "unit": "ns",
            "range": "± 48648.05470520877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2179390.909090909,
            "unit": "ns",
            "range": "± 92838.3786235765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2679564.285714286,
            "unit": "ns",
            "range": "± 29848.968727008545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2239150,
            "unit": "ns",
            "range": "± 41744.89190308199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2914870.588235294,
            "unit": "ns",
            "range": "± 59102.02793375497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166260.29411764705,
            "unit": "ns",
            "range": "± 7727.4107904358225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166462.71186440677,
            "unit": "ns",
            "range": "± 7370.278109783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152529.16666666666,
            "unit": "ns",
            "range": "± 3867.195272463277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2698060,
            "unit": "ns",
            "range": "± 40344.90231562276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2384846.6666666665,
            "unit": "ns",
            "range": "± 24869.88616972821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10743.010752688173,
            "unit": "ns",
            "range": "± 1352.1639540302704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50373.03370786517,
            "unit": "ns",
            "range": "± 2958.22290192731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44336,
            "unit": "ns",
            "range": "± 1187.0411394162659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59331.25,
            "unit": "ns",
            "range": "± 11985.019706634655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3269.7916666666665,
            "unit": "ns",
            "range": "± 600.5470824553344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10428.40909090909,
            "unit": "ns",
            "range": "± 1399.831587870185"
          }
        ]
      }
    ]
  }
}