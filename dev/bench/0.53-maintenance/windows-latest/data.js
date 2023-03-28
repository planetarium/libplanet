window.BENCHMARK_DATA = {
  "lastUpdate": 1679987639809,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "d8d5ed9b9406362876512cf8ef4b393304225b72",
          "message": "Version bump",
          "timestamp": "2023-03-27T17:58:08+09:00",
          "tree_id": "3dbd7bd8fcd4b144c04a448633d6660bc6df5655",
          "url": "https://github.com/planetarium/libplanet/commit/d8d5ed9b9406362876512cf8ef4b393304225b72"
        },
        "date": 1679908657554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1401754.081632653,
            "unit": "ns",
            "range": "± 126693.44458453364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2649674.6666666665,
            "unit": "ns",
            "range": "± 132572.21702878748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198092,
            "unit": "ns",
            "range": "± 164822.6623870748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5122557.5,
            "unit": "ns",
            "range": "± 181827.99266522928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48779.34782608696,
            "unit": "ns",
            "range": "± 3119.894970177727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7459823.529411765,
            "unit": "ns",
            "range": "± 153014.39691011008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19821935.714285713,
            "unit": "ns",
            "range": "± 204419.91701526416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50512407.14285714,
            "unit": "ns",
            "range": "± 271205.537906601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101640061.53846154,
            "unit": "ns",
            "range": "± 838347.4821918628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198256313.33333334,
            "unit": "ns",
            "range": "± 2631576.192503721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4837413.560267857,
            "unit": "ns",
            "range": "± 16470.535786989334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507443.540736607,
            "unit": "ns",
            "range": "± 3560.1388566445753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166069.8177083333,
            "unit": "ns",
            "range": "± 3565.0166299215894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632863.4375,
            "unit": "ns",
            "range": "± 5958.075041750062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848033.4333147322,
            "unit": "ns",
            "range": "± 1778.4766441585557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749307.87109375,
            "unit": "ns",
            "range": "± 1382.0573011147333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3268203.125,
            "unit": "ns",
            "range": "± 98367.55459180109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5126518.518518519,
            "unit": "ns",
            "range": "± 139350.26161836015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23889178.57142857,
            "unit": "ns",
            "range": "± 191013.69434826245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6399019.14893617,
            "unit": "ns",
            "range": "± 249459.6243694845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27550663.333333332,
            "unit": "ns",
            "range": "± 466990.46926136763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198768.5185185185,
            "unit": "ns",
            "range": "± 8382.525041160827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194591.83673469388,
            "unit": "ns",
            "range": "± 7772.436252946849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175525,
            "unit": "ns",
            "range": "± 11169.43317155071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11323681.25,
            "unit": "ns",
            "range": "± 219462.40443031088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9264128.57142857,
            "unit": "ns",
            "range": "± 135389.45208643004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25464.21052631579,
            "unit": "ns",
            "range": "± 2734.527684506929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58227.95698924731,
            "unit": "ns",
            "range": "± 3678.5324812377658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48200,
            "unit": "ns",
            "range": "± 3893.744983945405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106565.78947368421,
            "unit": "ns",
            "range": "± 5256.400609582668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8647.959183673469,
            "unit": "ns",
            "range": "± 1157.7822375805642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25734.0206185567,
            "unit": "ns",
            "range": "± 2049.07939684397"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "6f2c67465385ea7e41cfadbe26dd4a5fb585e2b5",
          "message": "Version bump",
          "timestamp": "2023-03-28T15:44:31+09:00",
          "tree_id": "8ced6279d3c078684d800c452b0866aad06d8d6e",
          "url": "https://github.com/planetarium/libplanet/commit/6f2c67465385ea7e41cfadbe26dd4a5fb585e2b5"
        },
        "date": 1679987330777,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1815367.7083333333,
            "unit": "ns",
            "range": "± 210464.1209551638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3245907.4468085105,
            "unit": "ns",
            "range": "± 300105.84234668844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2748705.617977528,
            "unit": "ns",
            "range": "± 282346.34894670453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6788993.406593407,
            "unit": "ns",
            "range": "± 554731.1452511023"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68430.20833333333,
            "unit": "ns",
            "range": "± 18277.758239782306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8908427.41935484,
            "unit": "ns",
            "range": "± 747439.0455195534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26827815.625,
            "unit": "ns",
            "range": "± 1745546.1059705857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66714003.84615385,
            "unit": "ns",
            "range": "± 2738525.999759262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131740115.9090909,
            "unit": "ns",
            "range": "± 4882016.698186204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257025300,
            "unit": "ns",
            "range": "± 4547053.852771045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6201403.850446428,
            "unit": "ns",
            "range": "± 93533.29152089993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956915.546875,
            "unit": "ns",
            "range": "± 33211.061626680406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1477141.2109375,
            "unit": "ns",
            "range": "± 12723.324704128127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3339852.6822916665,
            "unit": "ns",
            "range": "± 48586.90453106482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1078409.1195913462,
            "unit": "ns",
            "range": "± 29151.146394451567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 980335.5794270834,
            "unit": "ns",
            "range": "± 24562.307100373822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3992030.2083333335,
            "unit": "ns",
            "range": "± 408976.6180730659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6326382.417582418,
            "unit": "ns",
            "range": "± 592607.2678508473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31159131.25,
            "unit": "ns",
            "range": "± 2006260.5418414627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7316845.161290322,
            "unit": "ns",
            "range": "± 602511.2500331838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37928818.75,
            "unit": "ns",
            "range": "± 2950939.903909742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235911.70212765958,
            "unit": "ns",
            "range": "± 38002.50375561148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240524,
            "unit": "ns",
            "range": "± 35572.367893854884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217996.90721649484,
            "unit": "ns",
            "range": "± 35623.39602707354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15589217.346938776,
            "unit": "ns",
            "range": "± 1482253.4005035134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11501907.368421054,
            "unit": "ns",
            "range": "± 1194962.7524901123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28857.291666666668,
            "unit": "ns",
            "range": "± 10197.829952770055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69757.8947368421,
            "unit": "ns",
            "range": "± 17171.826127176846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53947.916666666664,
            "unit": "ns",
            "range": "± 14854.947637007866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137642.70833333334,
            "unit": "ns",
            "range": "± 29827.73963167654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7176.7441860465115,
            "unit": "ns",
            "range": "± 1292.482737953191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32400,
            "unit": "ns",
            "range": "± 10588.663355998558"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59d402c02d16124c08caec2273d957bc8390aa46",
          "message": "Merge pull request #2997 from tkiapril/release/0.53\n\n🚀 Release 0.53.0",
          "timestamp": "2023-03-27T17:55:04+09:00",
          "tree_id": "470c6e76c5b87e56493e384b6d88818eb6a20a81",
          "url": "https://github.com/planetarium/libplanet/commit/59d402c02d16124c08caec2273d957bc8390aa46"
        },
        "date": 1679987592297,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1263368.3544303798,
            "unit": "ns",
            "range": "± 65573.76066905897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2457127.049180328,
            "unit": "ns",
            "range": "± 110135.95899832567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2114847,
            "unit": "ns",
            "range": "± 164509.31535750168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5028731.37254902,
            "unit": "ns",
            "range": "± 203375.36182162882"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46479.31034482759,
            "unit": "ns",
            "range": "± 2423.918504033101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7036678.571428572,
            "unit": "ns",
            "range": "± 113804.67192364446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18615005.88235294,
            "unit": "ns",
            "range": "± 372027.75513156987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48325980,
            "unit": "ns",
            "range": "± 671108.9428273602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95291808,
            "unit": "ns",
            "range": "± 2508643.71788157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195650888,
            "unit": "ns",
            "range": "± 5073238.622937686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4800519.635416667,
            "unit": "ns",
            "range": "± 31052.05352551968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508080.1432291667,
            "unit": "ns",
            "range": "± 4883.738061645129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142308.984375,
            "unit": "ns",
            "range": "± 5393.830067585779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593869.3359375,
            "unit": "ns",
            "range": "± 8780.260734125242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813062.6953125,
            "unit": "ns",
            "range": "± 3161.7207220237597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754263.3463541666,
            "unit": "ns",
            "range": "± 2414.174816653888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3029978.048780488,
            "unit": "ns",
            "range": "± 109113.03660011281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4886097.826086956,
            "unit": "ns",
            "range": "± 187736.1037782444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22990787.87878788,
            "unit": "ns",
            "range": "± 654528.4584901446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5972225,
            "unit": "ns",
            "range": "± 208438.26946961344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25835692.68292683,
            "unit": "ns",
            "range": "± 931717.5943895887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177792.1875,
            "unit": "ns",
            "range": "± 7738.407708892549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179200,
            "unit": "ns",
            "range": "± 8142.4962942355305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157238.77551020408,
            "unit": "ns",
            "range": "± 10414.11247737189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10503437.5,
            "unit": "ns",
            "range": "± 206093.30532552482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8523600,
            "unit": "ns",
            "range": "± 198701.92248692512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20471.717171717173,
            "unit": "ns",
            "range": "± 3381.402933213216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50191.397849462366,
            "unit": "ns",
            "range": "± 4983.705097920502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39065.57377049181,
            "unit": "ns",
            "range": "± 1765.6807229226201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91795.69892473119,
            "unit": "ns",
            "range": "± 14051.349261984826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5670.103092783505,
            "unit": "ns",
            "range": "± 904.4064522811826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17663.26530612245,
            "unit": "ns",
            "range": "± 1781.6005635557808"
          }
        ]
      }
    ]
  }
}