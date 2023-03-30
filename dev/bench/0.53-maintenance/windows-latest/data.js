window.BENCHMARK_DATA = {
  "lastUpdate": 1680158866732,
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
          "id": "b2df14c688950b5b85c75d84612e38eb4ace2b65",
          "message": "Version bump",
          "timestamp": "2023-03-28T16:32:59+09:00",
          "tree_id": "8ced6279d3c078684d800c452b0866aad06d8d6e",
          "url": "https://github.com/planetarium/libplanet/commit/b2df14c688950b5b85c75d84612e38eb4ace2b65"
        },
        "date": 1679990242857,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1626756.5656565656,
            "unit": "ns",
            "range": "± 147558.30266726477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2962404.8192771086,
            "unit": "ns",
            "range": "± 156435.32358229137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2490179.347826087,
            "unit": "ns",
            "range": "± 139796.60070545622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6182013.131313131,
            "unit": "ns",
            "range": "± 373707.42475311493"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55358.94736842105,
            "unit": "ns",
            "range": "± 3563.869960162004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8534046.666666666,
            "unit": "ns",
            "range": "± 249882.47131654585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22923279.310344826,
            "unit": "ns",
            "range": "± 670608.0313413398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57506680.64516129,
            "unit": "ns",
            "range": "± 1709548.5904022255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112968953.84615384,
            "unit": "ns",
            "range": "± 1373982.618531123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226959381.25,
            "unit": "ns",
            "range": "± 4360393.633181718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5718194.587053572,
            "unit": "ns",
            "range": "± 33420.395179472376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1825351.353236607,
            "unit": "ns",
            "range": "± 12793.079625194874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379026.0807291667,
            "unit": "ns",
            "range": "± 8059.074722218532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3151296.09375,
            "unit": "ns",
            "range": "± 15820.517235884387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957790.4231770834,
            "unit": "ns",
            "range": "± 8922.277755023637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890756.6666666666,
            "unit": "ns",
            "range": "± 6994.646902680611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3605180.882352941,
            "unit": "ns",
            "range": "± 170791.57172514152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5804501.538461538,
            "unit": "ns",
            "range": "± 268495.58509656385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27562539.18918919,
            "unit": "ns",
            "range": "± 1364493.6219468305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7080307.5,
            "unit": "ns",
            "range": "± 249261.15065199987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31058728.94736842,
            "unit": "ns",
            "range": "± 682314.107023499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215302.53164556963,
            "unit": "ns",
            "range": "± 11170.140768613994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212084.2857142857,
            "unit": "ns",
            "range": "± 10275.8424417757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199754,
            "unit": "ns",
            "range": "± 12153.192372725976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12919894.871794872,
            "unit": "ns",
            "range": "± 450884.6397850143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10506113.333333334,
            "unit": "ns",
            "range": "± 185985.4443869453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24553.684210526317,
            "unit": "ns",
            "range": "± 2613.4598624060814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60985.26315789474,
            "unit": "ns",
            "range": "± 5623.525214157621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47893.333333333336,
            "unit": "ns",
            "range": "± 3390.7607445772833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120025.51020408163,
            "unit": "ns",
            "range": "± 21648.486584204744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6912.5,
            "unit": "ns",
            "range": "± 994.9609883915311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23460.82474226804,
            "unit": "ns",
            "range": "± 2262.3529740916742"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a7039b150f1d8641c3fac69a85a074e4dbd9fb6",
          "message": "Merge pull request #3010 from riemannulus/0.53-maintenance\n\n 🔀 Port 0.50.6 to 0.53.1",
          "timestamp": "2023-03-28T17:46:17+09:00",
          "tree_id": "f64408b31c3787ccb81125308b218a2546057403",
          "url": "https://github.com/planetarium/libplanet/commit/0a7039b150f1d8641c3fac69a85a074e4dbd9fb6"
        },
        "date": 1679994393984,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368779.5918367347,
            "unit": "ns",
            "range": "± 107369.91646013527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2510542.4242424243,
            "unit": "ns",
            "range": "± 77935.20558091442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2152524.4897959186,
            "unit": "ns",
            "range": "± 147952.4074085462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5147665.454545454,
            "unit": "ns",
            "range": "± 215301.95352555256"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49187.951807228914,
            "unit": "ns",
            "range": "± 2624.4347865528384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7021588.888888889,
            "unit": "ns",
            "range": "± 148718.687812175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19658564.285714287,
            "unit": "ns",
            "range": "± 135060.80458099578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48833993.333333336,
            "unit": "ns",
            "range": "± 422396.1621623991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99088326.66666667,
            "unit": "ns",
            "range": "± 1063407.3151006268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197854926.66666666,
            "unit": "ns",
            "range": "± 1753246.455035697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4824737.388392857,
            "unit": "ns",
            "range": "± 8744.909463470507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523458.4681919643,
            "unit": "ns",
            "range": "± 2171.405056962074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166169.2317708333,
            "unit": "ns",
            "range": "± 2712.467739239015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652955.2176339286,
            "unit": "ns",
            "range": "± 6631.715967079995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823588.0794270834,
            "unit": "ns",
            "range": "± 1204.5715663394433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745495.5533854166,
            "unit": "ns",
            "range": "± 1473.368455825342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3181624.1379310344,
            "unit": "ns",
            "range": "± 91736.72988960004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5097273.333333333,
            "unit": "ns",
            "range": "± 73812.00508886136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23543206.666666668,
            "unit": "ns",
            "range": "± 401964.6616782316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6359475,
            "unit": "ns",
            "range": "± 76060.09735131102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26846860,
            "unit": "ns",
            "range": "± 381171.9031018494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182721.05263157896,
            "unit": "ns",
            "range": "± 6269.581558291907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183020,
            "unit": "ns",
            "range": "± 7763.8144500506205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163700,
            "unit": "ns",
            "range": "± 8336.090210644315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11212796.666666666,
            "unit": "ns",
            "range": "± 117893.17723301565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8914750,
            "unit": "ns",
            "range": "± 130356.82833019408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21132.63157894737,
            "unit": "ns",
            "range": "± 1680.5167711573417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55537.096774193546,
            "unit": "ns",
            "range": "± 4324.405608978851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42512.345679012345,
            "unit": "ns",
            "range": "± 2186.6288388778617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102392.63157894737,
            "unit": "ns",
            "range": "± 14332.526926801944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6663.1578947368425,
            "unit": "ns",
            "range": "± 720.5276777324377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21255.670103092783,
            "unit": "ns",
            "range": "± 2186.5102080791585"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de35a14d0b35e50e9ebeed8728a2f3c221361d97",
          "message": "Merge pull request #3011 from riemannulus/0.53-maintenance\n\n🚀  Release 0.53.1",
          "timestamp": "2023-03-28T17:48:17+09:00",
          "tree_id": "5327816bb24d6a46b7e74947750e7b5105c5f55e",
          "url": "https://github.com/planetarium/libplanet/commit/de35a14d0b35e50e9ebeed8728a2f3c221361d97"
        },
        "date": 1679994435800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1364262,
            "unit": "ns",
            "range": "± 108781.30203636686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2563033.3333333335,
            "unit": "ns",
            "range": "± 112797.04537942333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2140918.3673469387,
            "unit": "ns",
            "range": "± 146228.73647304365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5092895.238095238,
            "unit": "ns",
            "range": "± 185119.448520877"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48121.62162162162,
            "unit": "ns",
            "range": "± 2351.9895553694955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6774666.666666667,
            "unit": "ns",
            "range": "± 133442.92456944677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19232500,
            "unit": "ns",
            "range": "± 318285.8216850293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48071253.333333336,
            "unit": "ns",
            "range": "± 757840.8991212816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96571980,
            "unit": "ns",
            "range": "± 1754200.7122496397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190912344.44444445,
            "unit": "ns",
            "range": "± 3991868.366364187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4828391.458333333,
            "unit": "ns",
            "range": "± 13385.963732494778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1498928.2421875,
            "unit": "ns",
            "range": "± 4665.650967346936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1175031.640625,
            "unit": "ns",
            "range": "± 2048.731075147001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626252.265625,
            "unit": "ns",
            "range": "± 5558.35777431487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822821.9426081731,
            "unit": "ns",
            "range": "± 1702.9622063178365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757763.3463541666,
            "unit": "ns",
            "range": "± 4358.340100412777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3237023.076923077,
            "unit": "ns",
            "range": "± 86540.6369641098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4933895,
            "unit": "ns",
            "range": "± 173504.23027429887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23521141.17647059,
            "unit": "ns",
            "range": "± 481865.9526502464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6081785,
            "unit": "ns",
            "range": "± 192316.20403214425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26398803.57142857,
            "unit": "ns",
            "range": "± 745708.6713853909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186569.5652173913,
            "unit": "ns",
            "range": "± 9025.459159703636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184216.32653061225,
            "unit": "ns",
            "range": "± 7371.915935347008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155613.84615384616,
            "unit": "ns",
            "range": "± 7181.7450204293345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10922292.857142856,
            "unit": "ns",
            "range": "± 275395.4906010377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9133856.25,
            "unit": "ns",
            "range": "± 171684.29541360697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22737.894736842107,
            "unit": "ns",
            "range": "± 2167.5154394585416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55117.97752808989,
            "unit": "ns",
            "range": "± 4437.688838434035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42784.69387755102,
            "unit": "ns",
            "range": "± 3235.5420534355226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106464.64646464646,
            "unit": "ns",
            "range": "± 18844.24511909223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7386.315789473684,
            "unit": "ns",
            "range": "± 876.8428043106952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21891.489361702126,
            "unit": "ns",
            "range": "± 1630.4666245784072"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08d9132bfee8e672a126af36e410fb3afed7a352",
          "message": "Merge pull request #3012 from riemannulus/0.53-maintenance\n\n🔧  Prepare 0.53.2",
          "timestamp": "2023-03-28T17:51:21+09:00",
          "tree_id": "7d8c64db4eade92724f0287d72f0c6a353e034b8",
          "url": "https://github.com/planetarium/libplanet/commit/08d9132bfee8e672a126af36e410fb3afed7a352"
        },
        "date": 1679994721241,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354136,
            "unit": "ns",
            "range": "± 129443.58743202664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2513166.6666666665,
            "unit": "ns",
            "range": "± 101802.86178033831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2093282.9545454546,
            "unit": "ns",
            "range": "± 112667.51739622116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4913976,
            "unit": "ns",
            "range": "± 129878.36065591013"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47549.253731343284,
            "unit": "ns",
            "range": "± 2273.2551173558045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7000166.666666667,
            "unit": "ns",
            "range": "± 173776.3221642337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19195920,
            "unit": "ns",
            "range": "± 180210.92879496198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48326653.333333336,
            "unit": "ns",
            "range": "± 629121.5847361719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96910813.33333333,
            "unit": "ns",
            "range": "± 1640500.8955745657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189856900,
            "unit": "ns",
            "range": "± 1682052.3659109625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4850309.479166667,
            "unit": "ns",
            "range": "± 25383.15576928075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1522502.3697916667,
            "unit": "ns",
            "range": "± 5023.909559797945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170977.9166666667,
            "unit": "ns",
            "range": "± 2927.2611627388505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645035.9635416665,
            "unit": "ns",
            "range": "± 4491.486060984333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828049.7837611607,
            "unit": "ns",
            "range": "± 1239.463247232093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772620.1171875,
            "unit": "ns",
            "range": "± 1291.1152164983416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3068579.3103448274,
            "unit": "ns",
            "range": "± 124932.04575150598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4876429.787234043,
            "unit": "ns",
            "range": "± 189862.96993964244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22768803.333333332,
            "unit": "ns",
            "range": "± 678776.7651334697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5933963.333333333,
            "unit": "ns",
            "range": "± 177554.92881676488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26116892.85714286,
            "unit": "ns",
            "range": "± 737931.2052290469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182822.44897959183,
            "unit": "ns",
            "range": "± 7248.053339406682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182128,
            "unit": "ns",
            "range": "± 7339.584873986333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158174.02597402598,
            "unit": "ns",
            "range": "± 8129.54978033196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11131038.888888888,
            "unit": "ns",
            "range": "± 237928.7934480272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8856616.666666666,
            "unit": "ns",
            "range": "± 180496.78260127455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20572.164948453606,
            "unit": "ns",
            "range": "± 1922.3326903812954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52741.836734693876,
            "unit": "ns",
            "range": "± 5152.3175341849455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41840.40404040404,
            "unit": "ns",
            "range": "± 3631.183514040095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97448.91304347826,
            "unit": "ns",
            "range": "± 15041.557776507187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6396.875,
            "unit": "ns",
            "range": "± 994.0298761792033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19421.649484536083,
            "unit": "ns",
            "range": "± 1615.821953122447"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7356e3db66d1566eb296795721b13f27730a16c4",
          "message": "Merge pull request #3022 from riemannulus/0.53-maintenance\n\n🔀 Port 0.50.7 to 0.53.2",
          "timestamp": "2023-03-29T15:49:11+09:00",
          "tree_id": "82e943ab6bfdba67365883851e29c3374d58d32a",
          "url": "https://github.com/planetarium/libplanet/commit/7356e3db66d1566eb296795721b13f27730a16c4"
        },
        "date": 1680073522833,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1350697.9797979798,
            "unit": "ns",
            "range": "± 110009.57284857584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2312857.6923076925,
            "unit": "ns",
            "range": "± 63158.31646316689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2053427.6923076923,
            "unit": "ns",
            "range": "± 93417.27039821837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4657618.75,
            "unit": "ns",
            "range": "± 144362.89720253498"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45676.470588235294,
            "unit": "ns",
            "range": "± 899.6731432614193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7065353.333333333,
            "unit": "ns",
            "range": "± 47616.7267529664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17708080,
            "unit": "ns",
            "range": "± 107707.37605727314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45590033.333333336,
            "unit": "ns",
            "range": "± 304927.8314305737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90711369.23076923,
            "unit": "ns",
            "range": "± 445865.5054771102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181122557.14285713,
            "unit": "ns",
            "range": "± 639830.3807251584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4886762.5,
            "unit": "ns",
            "range": "± 10959.687818550223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1608783.900669643,
            "unit": "ns",
            "range": "± 963.9425519934723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1144082.2684151786,
            "unit": "ns",
            "range": "± 1330.9706443185937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654323.3854166665,
            "unit": "ns",
            "range": "± 14966.481242409314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827525.3971354166,
            "unit": "ns",
            "range": "± 3267.824715752463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736833.5658482143,
            "unit": "ns",
            "range": "± 946.1061216662475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2938785.714285714,
            "unit": "ns",
            "range": "± 50584.89187212211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4575815.7894736845,
            "unit": "ns",
            "range": "± 182060.00854258554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21479540,
            "unit": "ns",
            "range": "± 255511.14540968937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5687150,
            "unit": "ns",
            "range": "± 85967.21199656029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24590273.333333332,
            "unit": "ns",
            "range": "± 396838.3324418624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179435,
            "unit": "ns",
            "range": "± 6345.6647830201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179203.33333333334,
            "unit": "ns",
            "range": "± 5362.432112476534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152836.36363636365,
            "unit": "ns",
            "range": "± 7846.3855086427675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10174126.666666666,
            "unit": "ns",
            "range": "± 157917.65696385058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8175900,
            "unit": "ns",
            "range": "± 67994.03820019246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17526.59574468085,
            "unit": "ns",
            "range": "± 1302.947488351335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48623.15789473684,
            "unit": "ns",
            "range": "± 3072.9932954617666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36913.48314606742,
            "unit": "ns",
            "range": "± 2026.371085285442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90873.4693877551,
            "unit": "ns",
            "range": "± 11285.941907810615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4803.061224489796,
            "unit": "ns",
            "range": "± 863.3970406604169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16507.44680851064,
            "unit": "ns",
            "range": "± 1823.0447980918955"
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
          "id": "c4a323ee3312cd72ca15a180c2127af50a436b28",
          "message": "Merge pull request #3027 from limebell/chore/add-missing\n\nAdd missing commit",
          "timestamp": "2023-03-30T15:24:01+09:00",
          "tree_id": "e9e4138353a2808dc8e02aab5bdc269078c1ba27",
          "url": "https://github.com/planetarium/libplanet/commit/c4a323ee3312cd72ca15a180c2127af50a436b28"
        },
        "date": 1680158803003,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1750904.1237113401,
            "unit": "ns",
            "range": "± 190531.12547425035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3487635.4166666665,
            "unit": "ns",
            "range": "± 350014.6038995837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2805503.2608695654,
            "unit": "ns",
            "range": "± 263424.39766649023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7099683.333333333,
            "unit": "ns",
            "range": "± 518800.03138145956"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59278.35051546392,
            "unit": "ns",
            "range": "± 10300.922559858045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9271503.030303031,
            "unit": "ns",
            "range": "± 689552.9139327687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25481580.208333332,
            "unit": "ns",
            "range": "± 1726815.993892245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69437496.34146342,
            "unit": "ns",
            "range": "± 3655620.5097723054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134672353.65853658,
            "unit": "ns",
            "range": "± 4784658.242868427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272962917.7777778,
            "unit": "ns",
            "range": "± 10322866.730936557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6040886.603860294,
            "unit": "ns",
            "range": "± 123223.39361143766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2007505.6703629033,
            "unit": "ns",
            "range": "± 60526.55032066675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1519247.2886029412,
            "unit": "ns",
            "range": "± 29787.32854638378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3333074.276194853,
            "unit": "ns",
            "range": "± 65525.22829925534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1107360.531455592,
            "unit": "ns",
            "range": "± 24410.395332856544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1016774.0913722826,
            "unit": "ns",
            "range": "± 24671.08639185526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3781419.587628866,
            "unit": "ns",
            "range": "± 376154.5356851288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6514582.795698925,
            "unit": "ns",
            "range": "± 531107.4290786507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 32659154,
            "unit": "ns",
            "range": "± 1219383.2136446554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7677262.886597938,
            "unit": "ns",
            "range": "± 561281.2491893709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 39636971.428571425,
            "unit": "ns",
            "range": "± 3019816.73694651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230895.65217391305,
            "unit": "ns",
            "range": "± 37075.58336678706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226329.78723404257,
            "unit": "ns",
            "range": "± 32856.1243854424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200931.25,
            "unit": "ns",
            "range": "± 25454.178904144806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14014121.42857143,
            "unit": "ns",
            "range": "± 1292108.979417263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11076197.849462366,
            "unit": "ns",
            "range": "± 881411.2877971297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25075.531914893618,
            "unit": "ns",
            "range": "± 7199.756360426936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67044.68085106384,
            "unit": "ns",
            "range": "± 16384.346168200133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42274.41860465116,
            "unit": "ns",
            "range": "± 5979.43900666888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117721.50537634408,
            "unit": "ns",
            "range": "± 24572.947521270682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5729.032258064516,
            "unit": "ns",
            "range": "± 678.1657879196122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21322.988505747126,
            "unit": "ns",
            "range": "± 2564.276095746163"
          }
        ]
      }
    ]
  }
}