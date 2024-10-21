window.BENCHMARK_DATA = {
  "lastUpdate": 1729475086167,
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
        "date": 1720002138551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994186.3157894737,
            "unit": "ns",
            "range": "± 88622.46198451657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1827954,
            "unit": "ns",
            "range": "± 63414.693494650026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1632612.7659574468,
            "unit": "ns",
            "range": "± 118263.41678328284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6664200,
            "unit": "ns",
            "range": "± 193905.29168348433"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37334,
            "unit": "ns",
            "range": "± 5526.450995535978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10282671.42857143,
            "unit": "ns",
            "range": "± 124483.56350304879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24670478.57142857,
            "unit": "ns",
            "range": "± 314982.8717652668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63657253.333333336,
            "unit": "ns",
            "range": "± 1087696.0459526146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119404933.33333333,
            "unit": "ns",
            "range": "± 1222917.4856328887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245108853.33333334,
            "unit": "ns",
            "range": "± 4363941.732763212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3324053.359375,
            "unit": "ns",
            "range": "± 8677.388025225393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054135.9505208333,
            "unit": "ns",
            "range": "± 4355.848804828575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741411.1588541666,
            "unit": "ns",
            "range": "± 1840.047365293722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938160.9375,
            "unit": "ns",
            "range": "± 1683.4118778510976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620001.1002604166,
            "unit": "ns",
            "range": "± 1064.5774435325297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556245.6510416666,
            "unit": "ns",
            "range": "± 1091.9310129968824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182813.793103448,
            "unit": "ns",
            "range": "± 63510.52625992646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2255548.8372093025,
            "unit": "ns",
            "range": "± 77369.66112696525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2773188.5714285714,
            "unit": "ns",
            "range": "± 89905.85851299114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2322210.9589041094,
            "unit": "ns",
            "range": "± 115275.66665467106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3029155.5555555555,
            "unit": "ns",
            "range": "± 61844.83879005039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181786.48648648648,
            "unit": "ns",
            "range": "± 5703.369479827116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174334.92063492062,
            "unit": "ns",
            "range": "± 8013.499874308048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146169.1489361702,
            "unit": "ns",
            "range": "± 5590.700286612323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2783340,
            "unit": "ns",
            "range": "± 39337.419481056095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2416076.923076923,
            "unit": "ns",
            "range": "± 20190.06165774611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12162.626262626263,
            "unit": "ns",
            "range": "± 2014.0620878187822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59140.40404040404,
            "unit": "ns",
            "range": "± 8708.22879893939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44231.08108108108,
            "unit": "ns",
            "range": "± 2166.7427530095406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60205.0505050505,
            "unit": "ns",
            "range": "± 13920.227344916384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2548.9583333333335,
            "unit": "ns",
            "range": "± 426.2430222714358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11264.646464646465,
            "unit": "ns",
            "range": "± 1551.64909846195"
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
        "date": 1720753754816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997625.5319148937,
            "unit": "ns",
            "range": "± 108279.13443510294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1779834,
            "unit": "ns",
            "range": "± 71811.74541529984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1556625.8064516129,
            "unit": "ns",
            "range": "± 112166.1354218994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6938086.046511628,
            "unit": "ns",
            "range": "± 253027.83169087992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32381.08108108108,
            "unit": "ns",
            "range": "± 1579.2902581106484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9859057.142857144,
            "unit": "ns",
            "range": "± 69293.61680321161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24582353.333333332,
            "unit": "ns",
            "range": "± 408350.30456471466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61466796.666666664,
            "unit": "ns",
            "range": "± 970307.1287459647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122708621.42857143,
            "unit": "ns",
            "range": "± 1655983.250184044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247233166.66666666,
            "unit": "ns",
            "range": "± 2018724.8672178707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3334778.2291666665,
            "unit": "ns",
            "range": "± 5457.194718594993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068634.0364583333,
            "unit": "ns",
            "range": "± 6363.8688108722645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743108.4049479166,
            "unit": "ns",
            "range": "± 1229.4147628517912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910369.0234375,
            "unit": "ns",
            "range": "± 6825.209578685292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627124.3359375,
            "unit": "ns",
            "range": "± 1257.0016339171464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559630.4947916666,
            "unit": "ns",
            "range": "± 2152.5952648599246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2114418.75,
            "unit": "ns",
            "range": "± 65419.56616408255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2230273.3333333335,
            "unit": "ns",
            "range": "± 38026.86018116793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2744614.285714286,
            "unit": "ns",
            "range": "± 39015.85194887718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2230673.3333333335,
            "unit": "ns",
            "range": "± 39883.21284283234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2899341.6666666665,
            "unit": "ns",
            "range": "± 15228.29055847482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177816.43835616438,
            "unit": "ns",
            "range": "± 8861.167055357484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163984.12698412698,
            "unit": "ns",
            "range": "± 7472.448455432719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144830.76923076922,
            "unit": "ns",
            "range": "± 1835.0225318256157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2822633.3333333335,
            "unit": "ns",
            "range": "± 51875.684734436676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2460746.153846154,
            "unit": "ns",
            "range": "± 67012.01821028363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10773.958333333334,
            "unit": "ns",
            "range": "± 1695.954616551843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56327.83505154639,
            "unit": "ns",
            "range": "± 7777.943471070953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49155.913978494624,
            "unit": "ns",
            "range": "± 3276.2804455261853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55765.30612244898,
            "unit": "ns",
            "range": "± 13415.97064926813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2519.5876288659792,
            "unit": "ns",
            "range": "± 459.7642455781305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10390.322580645161,
            "unit": "ns",
            "range": "± 1357.1921555124657"
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
        "date": 1720775771253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1037011.5789473684,
            "unit": "ns",
            "range": "± 89456.68732439667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1843865.8536585367,
            "unit": "ns",
            "range": "± 66024.03959830123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1600468.131868132,
            "unit": "ns",
            "range": "± 102664.31261275304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6859132,
            "unit": "ns",
            "range": "± 177852.13830595347"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34987.234042553195,
            "unit": "ns",
            "range": "± 3379.8973720677322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10316646.153846154,
            "unit": "ns",
            "range": "± 83360.01854790877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26216286.666666668,
            "unit": "ns",
            "range": "± 169001.5928355481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65091150,
            "unit": "ns",
            "range": "± 602741.3233362575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133189420,
            "unit": "ns",
            "range": "± 1513323.3972193217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261014019.23076922,
            "unit": "ns",
            "range": "± 1745223.9060669814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3425562.109375,
            "unit": "ns",
            "range": "± 3931.045127924181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064966.9270833333,
            "unit": "ns",
            "range": "± 2961.0823645767373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738182.8385416666,
            "unit": "ns",
            "range": "± 2868.4157198350076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966660.5989583333,
            "unit": "ns",
            "range": "± 6236.237139639474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632456.4903846154,
            "unit": "ns",
            "range": "± 753.481152178926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565558.7541852678,
            "unit": "ns",
            "range": "± 953.014040099044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2265855.5555555555,
            "unit": "ns",
            "range": "± 48226.02692740316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291028.125,
            "unit": "ns",
            "range": "± 70481.68022957363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2795935.714285714,
            "unit": "ns",
            "range": "± 42489.24944831715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2361993.3333333335,
            "unit": "ns",
            "range": "± 33592.39851655785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3054253.3333333335,
            "unit": "ns",
            "range": "± 40036.3739378985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193700,
            "unit": "ns",
            "range": "± 5994.1907360915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180016,
            "unit": "ns",
            "range": "± 7181.875145966052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150563.63636363635,
            "unit": "ns",
            "range": "± 3170.7811046890033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2941446.153846154,
            "unit": "ns",
            "range": "± 41336.981331986804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2532028.5714285714,
            "unit": "ns",
            "range": "± 28553.73957918724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12853.763440860215,
            "unit": "ns",
            "range": "± 1193.238117184108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60279.78723404255,
            "unit": "ns",
            "range": "± 4349.15836097831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51517.89473684211,
            "unit": "ns",
            "range": "± 3706.6064925925784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64995.555555555555,
            "unit": "ns",
            "range": "± 9504.592752756706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3145.360824742268,
            "unit": "ns",
            "range": "± 537.3586284155546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11593.548387096775,
            "unit": "ns",
            "range": "± 1192.3493844920024"
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
        "date": 1720776691102,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030818.3673469388,
            "unit": "ns",
            "range": "± 107600.14596523537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1810267.3076923077,
            "unit": "ns",
            "range": "± 71829.97823333589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1602715.0537634408,
            "unit": "ns",
            "range": "± 93520.83114406925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7247061.038961039,
            "unit": "ns",
            "range": "± 366170.0083854652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33502.22222222222,
            "unit": "ns",
            "range": "± 2989.944863562048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10208250,
            "unit": "ns",
            "range": "± 97938.9821816075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26041371.42857143,
            "unit": "ns",
            "range": "± 216732.09065774988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65927440,
            "unit": "ns",
            "range": "± 974267.7703207236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125647193.33333333,
            "unit": "ns",
            "range": "± 852497.6476437312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252779080,
            "unit": "ns",
            "range": "± 942119.2078045568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3294518.6458333335,
            "unit": "ns",
            "range": "± 8285.529785407194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073473.5026041667,
            "unit": "ns",
            "range": "± 9270.74898321274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743804.9348958334,
            "unit": "ns",
            "range": "± 1898.3508757769464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971775.4166666667,
            "unit": "ns",
            "range": "± 3994.9611819394713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617666.11328125,
            "unit": "ns",
            "range": "± 1288.5871360807444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566248.5546875,
            "unit": "ns",
            "range": "± 1471.2038106852535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2223672.727272727,
            "unit": "ns",
            "range": "± 53108.354484179945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2174165.8536585364,
            "unit": "ns",
            "range": "± 52046.98170766533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2746990.909090909,
            "unit": "ns",
            "range": "± 65527.478126434784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2292576.923076923,
            "unit": "ns",
            "range": "± 90184.79854380185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2981515.3846153845,
            "unit": "ns",
            "range": "± 35007.13846617206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185537.03703703705,
            "unit": "ns",
            "range": "± 7514.722563484932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177836,
            "unit": "ns",
            "range": "± 8126.710048735356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145762.5,
            "unit": "ns",
            "range": "± 3670.1868806820225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2895835.714285714,
            "unit": "ns",
            "range": "± 28566.726398781804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2501660,
            "unit": "ns",
            "range": "± 30626.17461304254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11657.142857142857,
            "unit": "ns",
            "range": "± 972.7558626160874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57127.17391304348,
            "unit": "ns",
            "range": "± 4095.027895378416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46353.7037037037,
            "unit": "ns",
            "range": "± 1959.1789734923918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65105.102040816324,
            "unit": "ns",
            "range": "± 15516.485230457512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2739.175257731959,
            "unit": "ns",
            "range": "± 499.28213071179493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10550,
            "unit": "ns",
            "range": "± 883.1760866327846"
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
        "date": 1722585476792,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986920,
            "unit": "ns",
            "range": "± 98823.85856298365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1728106.6666666667,
            "unit": "ns",
            "range": "± 64812.12148131776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1500137.6344086023,
            "unit": "ns",
            "range": "± 97365.22112976224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6873189.189189189,
            "unit": "ns",
            "range": "± 220045.92170194307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29853.846153846152,
            "unit": "ns",
            "range": "± 639.3812997386657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9768457.142857144,
            "unit": "ns",
            "range": "± 54520.39440973815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24050466.666666668,
            "unit": "ns",
            "range": "± 143854.1357797974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60157256.666666664,
            "unit": "ns",
            "range": "± 587852.0847320434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120206400,
            "unit": "ns",
            "range": "± 393602.83704939595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240702753.33333334,
            "unit": "ns",
            "range": "± 1796432.6113028512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3371231.8229166665,
            "unit": "ns",
            "range": "± 7177.953092614366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056960.6724330357,
            "unit": "ns",
            "range": "± 2000.999873611174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735602.6432291666,
            "unit": "ns",
            "range": "± 2536.4413943707495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925021.171875,
            "unit": "ns",
            "range": "± 4538.389213112189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613685.37109375,
            "unit": "ns",
            "range": "± 1464.8166786002967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559797.65625,
            "unit": "ns",
            "range": "± 1280.7504220322971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2175933.3333333335,
            "unit": "ns",
            "range": "± 12926.642844841628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2245160,
            "unit": "ns",
            "range": "± 50738.98895326946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2783378.5714285714,
            "unit": "ns",
            "range": "± 36606.39243401303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2329986.8421052634,
            "unit": "ns",
            "range": "± 78177.31810080117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2992293.3333333335,
            "unit": "ns",
            "range": "± 45409.82377457653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172525.7142857143,
            "unit": "ns",
            "range": "± 5519.236032872179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164772.72727272726,
            "unit": "ns",
            "range": "± 6482.66790488169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145169.5652173913,
            "unit": "ns",
            "range": "± 2282.8281468008245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2774673.3333333335,
            "unit": "ns",
            "range": "± 37426.16477177176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2518823.076923077,
            "unit": "ns",
            "range": "± 19487.73776190872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9489.887640449439,
            "unit": "ns",
            "range": "± 1101.2436093943381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48706.52173913043,
            "unit": "ns",
            "range": "± 3243.5838389659884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43400,
            "unit": "ns",
            "range": "± 591.6079783099616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47018.75,
            "unit": "ns",
            "range": "± 7887.142268140898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2083.157894736842,
            "unit": "ns",
            "range": "± 316.4472432851245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9053.191489361701,
            "unit": "ns",
            "range": "± 785.308942379083"
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
        "date": 1728356214063,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1024207.4468085107,
            "unit": "ns",
            "range": "± 74869.88748138757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1834855.1724137932,
            "unit": "ns",
            "range": "± 80497.20747562154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590506.0240963856,
            "unit": "ns",
            "range": "± 83671.83917295458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6761771.052631579,
            "unit": "ns",
            "range": "± 144281.72125296848"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31600,
            "unit": "ns",
            "range": "± 725.0615737399726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10058166.666666666,
            "unit": "ns",
            "range": "± 79778.97741946332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25011140,
            "unit": "ns",
            "range": "± 329702.4130073317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62447164.28571428,
            "unit": "ns",
            "range": "± 375311.7772796841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120361546.66666667,
            "unit": "ns",
            "range": "± 1080224.8078635342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245001338.46153846,
            "unit": "ns",
            "range": "± 1528884.7942964078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3306500.7291666665,
            "unit": "ns",
            "range": "± 7429.6644023123445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1089058.7760416667,
            "unit": "ns",
            "range": "± 2101.3886064222215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738623.9048549107,
            "unit": "ns",
            "range": "± 2507.5556554083764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903718.7239583333,
            "unit": "ns",
            "range": "± 3504.364956178343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629131.3020833334,
            "unit": "ns",
            "range": "± 1993.6324501718327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555903.2486979166,
            "unit": "ns",
            "range": "± 1344.7499756159796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2172900,
            "unit": "ns",
            "range": "± 55711.75290515194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2254337.5,
            "unit": "ns",
            "range": "± 32843.34280591223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2776307.1428571427,
            "unit": "ns",
            "range": "± 48832.56265878514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2397251.8518518517,
            "unit": "ns",
            "range": "± 63357.51045498971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3053173.3333333335,
            "unit": "ns",
            "range": "± 47988.48770675059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187756.16438356164,
            "unit": "ns",
            "range": "± 9262.768759054381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173759.3220338983,
            "unit": "ns",
            "range": "± 7230.613047984143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161319.04761904763,
            "unit": "ns",
            "range": "± 7408.383593297379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2814636.6666666665,
            "unit": "ns",
            "range": "± 22376.226755409945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2732146.6666666665,
            "unit": "ns",
            "range": "± 50298.20881029274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12140,
            "unit": "ns",
            "range": "± 1327.0828671074812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60012.5,
            "unit": "ns",
            "range": "± 4033.080316842855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49958.426966292136,
            "unit": "ns",
            "range": "± 2778.112872762734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62720.833333333336,
            "unit": "ns",
            "range": "± 15308.256572785993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2790.625,
            "unit": "ns",
            "range": "± 442.26168128930425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10980,
            "unit": "ns",
            "range": "± 1420.412979984295"
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
        "date": 1728361301603,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1025471.7171717172,
            "unit": "ns",
            "range": "± 92422.98397817176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1837720.9302325582,
            "unit": "ns",
            "range": "± 67796.43394941153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545629.347826087,
            "unit": "ns",
            "range": "± 88106.82644099752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6767777.142857143,
            "unit": "ns",
            "range": "± 216894.36177104103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31352.941176470587,
            "unit": "ns",
            "range": "± 613.5120690121176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9824573.333333334,
            "unit": "ns",
            "range": "± 148180.86181934498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24590907.692307692,
            "unit": "ns",
            "range": "± 114519.50679206332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60860200,
            "unit": "ns",
            "range": "± 538153.4154601535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121346700,
            "unit": "ns",
            "range": "± 721058.4075807293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244322300,
            "unit": "ns",
            "range": "± 1978174.0866069086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3388015.3846153845,
            "unit": "ns",
            "range": "± 2215.1071279922776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048564.7181919643,
            "unit": "ns",
            "range": "± 1229.0630697691047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732054.1666666666,
            "unit": "ns",
            "range": "± 1199.3424422949813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975607.265625,
            "unit": "ns",
            "range": "± 2930.474636817125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625796.3716947115,
            "unit": "ns",
            "range": "± 881.3467643099799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562813.9369419643,
            "unit": "ns",
            "range": "± 617.6472170165518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2173363.6363636362,
            "unit": "ns",
            "range": "± 47488.13932576614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249054.054054054,
            "unit": "ns",
            "range": "± 74339.007984423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2781000,
            "unit": "ns",
            "range": "± 39851.04959528863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2358300,
            "unit": "ns",
            "range": "± 43533.38948439462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3032386.9565217393,
            "unit": "ns",
            "range": "± 75659.76656506311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179671.9298245614,
            "unit": "ns",
            "range": "± 7769.371053464755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171361.84210526315,
            "unit": "ns",
            "range": "± 8449.851550652838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146961.11111111112,
            "unit": "ns",
            "range": "± 3130.709163956474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2716746.6666666665,
            "unit": "ns",
            "range": "± 32965.693567418726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2505742.8571428573,
            "unit": "ns",
            "range": "± 34230.4343729763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11290.526315789473,
            "unit": "ns",
            "range": "± 939.7910229690978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52997.8021978022,
            "unit": "ns",
            "range": "± 3111.4476095711825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45510.52631578947,
            "unit": "ns",
            "range": "± 1008.791761818786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50053.94736842105,
            "unit": "ns",
            "range": "± 2621.7775542291242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2721.6494845360826,
            "unit": "ns",
            "range": "± 421.8576981942764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10433.333333333334,
            "unit": "ns",
            "range": "± 946.1975771858981"
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
        "date": 1728363292695,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966105.3191489362,
            "unit": "ns",
            "range": "± 63892.070228386656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1735108.6956521738,
            "unit": "ns",
            "range": "± 66261.32716947999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1485535.1648351648,
            "unit": "ns",
            "range": "± 82994.86379506515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6743942,
            "unit": "ns",
            "range": "± 271550.4584148333"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36640,
            "unit": "ns",
            "range": "± 4816.428116143726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10039946.666666666,
            "unit": "ns",
            "range": "± 132093.66734397586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25407976.666666668,
            "unit": "ns",
            "range": "± 304273.125583547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61130040,
            "unit": "ns",
            "range": "± 790075.2032921568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121696885.71428572,
            "unit": "ns",
            "range": "± 762259.6598344878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235984966.66666666,
            "unit": "ns",
            "range": "± 834540.6235654154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3348222.0833333335,
            "unit": "ns",
            "range": "± 21222.283345169562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087536.5513392857,
            "unit": "ns",
            "range": "± 2008.2326510034168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733713.57421875,
            "unit": "ns",
            "range": "± 1509.9576352589868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930614.4401041667,
            "unit": "ns",
            "range": "± 6701.4645256773065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618012.75390625,
            "unit": "ns",
            "range": "± 3549.695343400011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561806.1393229166,
            "unit": "ns",
            "range": "± 1300.4404227762093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185857.8947368423,
            "unit": "ns",
            "range": "± 29167.377434948594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2250003.3333333335,
            "unit": "ns",
            "range": "± 44460.29211231798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2710500,
            "unit": "ns",
            "range": "± 42074.423856508634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2398000,
            "unit": "ns",
            "range": "± 50443.74204112053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3006144,
            "unit": "ns",
            "range": "± 61574.08870620823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172584.74576271186,
            "unit": "ns",
            "range": "± 7574.476505396311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159228.57142857142,
            "unit": "ns",
            "range": "± 6331.600640175173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141160,
            "unit": "ns",
            "range": "± 3132.243184751314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2624506.6666666665,
            "unit": "ns",
            "range": "± 25815.01408833535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2421460,
            "unit": "ns",
            "range": "± 45141.74184879065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9206.741573033707,
            "unit": "ns",
            "range": "± 616.2197351611217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48663.63636363636,
            "unit": "ns",
            "range": "± 2667.6082454712437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44378.78787878788,
            "unit": "ns",
            "range": "± 1777.0775621802957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44531.914893617024,
            "unit": "ns",
            "range": "± 6377.130051332164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2338.9473684210525,
            "unit": "ns",
            "range": "± 342.4861347844565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9290,
            "unit": "ns",
            "range": "± 941.556206441039"
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
        "date": 1729474814258,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1041115.0537634408,
            "unit": "ns",
            "range": "± 101916.33284884112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1859143.75,
            "unit": "ns",
            "range": "± 72725.771446213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1593873.9583333333,
            "unit": "ns",
            "range": "± 139664.68358539595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6609700,
            "unit": "ns",
            "range": "± 168277.0419788239"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30108.333333333332,
            "unit": "ns",
            "range": "± 2171.347276688816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10211866.666666666,
            "unit": "ns",
            "range": "± 86895.10644339833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24761678.57142857,
            "unit": "ns",
            "range": "± 245082.47333553605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63435364.28571428,
            "unit": "ns",
            "range": "± 708896.7513051453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126524953.33333333,
            "unit": "ns",
            "range": "± 1699129.068025594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245116930.76923078,
            "unit": "ns",
            "range": "± 1867677.8413244504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3257816.640625,
            "unit": "ns",
            "range": "± 3994.6820488565136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062781.3895089286,
            "unit": "ns",
            "range": "± 3373.101911447819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745947.16796875,
            "unit": "ns",
            "range": "± 3007.495626561089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947541.5885416667,
            "unit": "ns",
            "range": "± 6589.456786381275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621564.4075520834,
            "unit": "ns",
            "range": "± 828.697348885767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568863.0208333334,
            "unit": "ns",
            "range": "± 1555.1114409709185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2183501.923076923,
            "unit": "ns",
            "range": "± 86419.20059525763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2344556.25,
            "unit": "ns",
            "range": "± 72860.21941073638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2833718.5185185187,
            "unit": "ns",
            "range": "± 77980.65360191806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2436076.1904761903,
            "unit": "ns",
            "range": "± 56349.22275206557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2970350,
            "unit": "ns",
            "range": "± 51592.828959071434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101308.33333333333,
            "unit": "ns",
            "range": "± 5586.7573269043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170081.0344827586,
            "unit": "ns",
            "range": "± 6545.936382336533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149694.8275862069,
            "unit": "ns",
            "range": "± 6550.8650135606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2719192.8571428573,
            "unit": "ns",
            "range": "± 32092.425760742848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2548822.222222222,
            "unit": "ns",
            "range": "± 52602.5559159333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12016.494845360825,
            "unit": "ns",
            "range": "± 2114.123164003772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56203.125,
            "unit": "ns",
            "range": "± 6168.535663902909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46327.65957446808,
            "unit": "ns",
            "range": "± 1778.2138238497218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68206.06060606061,
            "unit": "ns",
            "range": "± 13990.352493566723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2809.8901098901097,
            "unit": "ns",
            "range": "± 361.80256895315006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11874.468085106382,
            "unit": "ns",
            "range": "± 1619.434135222957"
          }
        ]
      }
    ]
  }
}