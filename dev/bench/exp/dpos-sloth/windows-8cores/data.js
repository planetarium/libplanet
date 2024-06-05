window.BENCHMARK_DATA = {
  "lastUpdate": 1717551166307,
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
      }
    ]
  }
}