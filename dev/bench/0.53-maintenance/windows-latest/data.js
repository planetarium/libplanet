window.BENCHMARK_DATA = {
  "lastUpdate": 1679989732307,
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
          "id": "8b23ea67a4f8e12dbe144eb3496fb24dd72acef6",
          "message": "Merge pull request #3006 from tkiapril/ci-fix-release\n\nFix build artifact and push",
          "timestamp": "2023-03-28T16:00:25+09:00",
          "tree_id": "8d0931c2bea3b02ea4857e88e0f6295c46f2d265",
          "url": "https://github.com/planetarium/libplanet/commit/8b23ea67a4f8e12dbe144eb3496fb24dd72acef6"
        },
        "date": 1679987930365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1316416.6666666667,
            "unit": "ns",
            "range": "± 85807.75318842917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2493395.8333333335,
            "unit": "ns",
            "range": "± 98440.90344786156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2106365.6565656564,
            "unit": "ns",
            "range": "± 131828.23871530258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4914564,
            "unit": "ns",
            "range": "± 131029.33793620419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48348.936170212764,
            "unit": "ns",
            "range": "± 3165.9731446857213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6723796.153846154,
            "unit": "ns",
            "range": "± 35502.76081716781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19450742.85714286,
            "unit": "ns",
            "range": "± 452931.6566231914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49812493.333333336,
            "unit": "ns",
            "range": "± 535903.9179163511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96933100,
            "unit": "ns",
            "range": "± 1723508.3936137774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192132414.2857143,
            "unit": "ns",
            "range": "± 2106434.774632298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831302.421875,
            "unit": "ns",
            "range": "± 20662.181109920813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512000.8203125,
            "unit": "ns",
            "range": "± 3602.4188643820853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165500.5859375,
            "unit": "ns",
            "range": "± 6384.643189271081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2688547.5,
            "unit": "ns",
            "range": "± 7745.105024901176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828886.1929086539,
            "unit": "ns",
            "range": "± 1321.00121800305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766913.6848958334,
            "unit": "ns",
            "range": "± 1658.8023488393308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3098282.3529411764,
            "unit": "ns",
            "range": "± 59887.92903513735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4870194.444444444,
            "unit": "ns",
            "range": "± 103614.0262604851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22473900,
            "unit": "ns",
            "range": "± 362937.09411647945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5975494.444444444,
            "unit": "ns",
            "range": "± 197295.01614796405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26452832.258064516,
            "unit": "ns",
            "range": "± 785101.5812776912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183787.3015873016,
            "unit": "ns",
            "range": "± 8401.295830607594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185223.5294117647,
            "unit": "ns",
            "range": "± 3767.7130682558463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156195.56962025317,
            "unit": "ns",
            "range": "± 7948.871835262172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10767162.5,
            "unit": "ns",
            "range": "± 269341.8029075291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8705622.222222222,
            "unit": "ns",
            "range": "± 184691.0315207076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19720.43010752688,
            "unit": "ns",
            "range": "± 2055.7215563749273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51184.61538461538,
            "unit": "ns",
            "range": "± 3882.465513245219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39794.73684210526,
            "unit": "ns",
            "range": "± 2828.553815173109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99475.78947368421,
            "unit": "ns",
            "range": "± 17281.5774237504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6631.443298969072,
            "unit": "ns",
            "range": "± 671.3372688316482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19221.052631578947,
            "unit": "ns",
            "range": "± 1691.7757721275873"
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
          "id": "2d737a5965c073aeb8531100d7251e233f78c614",
          "message": "Merge branch 'main' into 0.53-maintenance",
          "timestamp": "2023-03-28T16:30:17+09:00",
          "tree_id": "3420c2bc5a00078db976a2da8519e1623951c323",
          "url": "https://github.com/planetarium/libplanet/commit/2d737a5965c073aeb8531100d7251e233f78c614"
        },
        "date": 1679989684537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1440356,
            "unit": "ns",
            "range": "± 117264.23268271817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2565253.488372093,
            "unit": "ns",
            "range": "± 93436.4167529811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2181165.9793814435,
            "unit": "ns",
            "range": "± 134093.2751285757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5109162.162162162,
            "unit": "ns",
            "range": "± 171319.38878297742"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49245.555555555555,
            "unit": "ns",
            "range": "± 3454.5576835557013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7168873.333333333,
            "unit": "ns",
            "range": "± 131913.92467745594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19418642.85714286,
            "unit": "ns",
            "range": "± 182134.74181447146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50897460,
            "unit": "ns",
            "range": "± 513969.9557645091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102266030.76923077,
            "unit": "ns",
            "range": "± 251178.07555801052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203261514.2857143,
            "unit": "ns",
            "range": "± 2922355.58065411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4789800.78125,
            "unit": "ns",
            "range": "± 24668.99285992024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1499506.89453125,
            "unit": "ns",
            "range": "± 5232.826399948846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158424.0885416667,
            "unit": "ns",
            "range": "± 4254.75104811374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642738.4207589286,
            "unit": "ns",
            "range": "± 3617.67250252725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822518.9453125,
            "unit": "ns",
            "range": "± 1093.8394711967264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755112.0377604166,
            "unit": "ns",
            "range": "± 1512.2903872116726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3129293.3333333335,
            "unit": "ns",
            "range": "± 56571.64189473969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5307050,
            "unit": "ns",
            "range": "± 98623.79023339145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24123226.666666668,
            "unit": "ns",
            "range": "± 312689.9661843676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6160793.333333333,
            "unit": "ns",
            "range": "± 101983.160141177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26930935.714285713,
            "unit": "ns",
            "range": "± 288452.19736523967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 191900,
            "unit": "ns",
            "range": "± 3584.291123380306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192440,
            "unit": "ns",
            "range": "± 6202.949962340025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172663.4328358209,
            "unit": "ns",
            "range": "± 8137.3604446887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11060444.444444444,
            "unit": "ns",
            "range": "± 225167.11760306652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8929093.75,
            "unit": "ns",
            "range": "± 170063.52330330372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21181.521739130436,
            "unit": "ns",
            "range": "± 1371.9264828144005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55021.50537634409,
            "unit": "ns",
            "range": "± 3980.1641178300783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39840,
            "unit": "ns",
            "range": "± 1859.8387026836494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95076.82926829268,
            "unit": "ns",
            "range": "± 10195.003602957577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6896.907216494846,
            "unit": "ns",
            "range": "± 973.230617608975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20631.25,
            "unit": "ns",
            "range": "± 1873.7135937968073"
          }
        ]
      }
    ]
  }
}