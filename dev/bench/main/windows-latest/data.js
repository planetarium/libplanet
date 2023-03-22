window.BENCHMARK_DATA = {
  "lastUpdate": 1679463396433,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0592dab33dbeb79fc063cbfd4701914bf1aae8d",
          "message": "Merge pull request #2904 from colibrishin/benchmark/spliting-merged-fix-fix\n\nci/bench: use trigger branch/tag name as directory [skip changelog]",
          "timestamp": "2023-03-09T18:41:52+09:00",
          "tree_id": "aee1d02a16944476e40011981949805b963d4c00",
          "url": "https://github.com/planetarium/libplanet/commit/e0592dab33dbeb79fc063cbfd4701914bf1aae8d"
        },
        "date": 1678356259401,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1618280.412371134,
            "unit": "ns",
            "range": "± 153381.2350261971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2966303.846153846,
            "unit": "ns",
            "range": "± 79880.65338124987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2471260,
            "unit": "ns",
            "range": "± 129243.29094063086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6249664,
            "unit": "ns",
            "range": "± 380296.86450923514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62602.04081632653,
            "unit": "ns",
            "range": "± 7932.797371838433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8599928.57142857,
            "unit": "ns",
            "range": "± 370203.3469296598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23854526.666666668,
            "unit": "ns",
            "range": "± 317109.907640568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59303320,
            "unit": "ns",
            "range": "± 742795.7133117326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 120391750,
            "unit": "ns",
            "range": "± 561540.0405517465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 239765080,
            "unit": "ns",
            "range": "± 1112223.533031275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5185172.135416667,
            "unit": "ns",
            "range": "± 77039.17669190878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1600595.2311197917,
            "unit": "ns",
            "range": "± 2493.6223895343733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224137.2445913462,
            "unit": "ns",
            "range": "± 7017.050945084821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2740081.8917410714,
            "unit": "ns",
            "range": "± 20854.148712699352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859889.8356119791,
            "unit": "ns",
            "range": "± 1343.3477952008598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779087.5813802084,
            "unit": "ns",
            "range": "± 2102.059389060438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3887810,
            "unit": "ns",
            "range": "± 105756.34765329937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6057020,
            "unit": "ns",
            "range": "± 149666.7603934376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27986886.666666668,
            "unit": "ns",
            "range": "± 493833.916364987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7204806.862745098,
            "unit": "ns",
            "range": "± 294143.68139050814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32304507.14285714,
            "unit": "ns",
            "range": "± 523894.89618887036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221937.14285714287,
            "unit": "ns",
            "range": "± 10768.905471391225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229460.5633802817,
            "unit": "ns",
            "range": "± 11157.758080920832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232866.66666666666,
            "unit": "ns",
            "range": "± 12478.510041323269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13084746.666666666,
            "unit": "ns",
            "range": "± 166753.8342530547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10632940,
            "unit": "ns",
            "range": "± 108283.75290345798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33553.06122448979,
            "unit": "ns",
            "range": "± 3911.1578184405953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74725.80645161291,
            "unit": "ns",
            "range": "± 6572.751776741121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62382,
            "unit": "ns",
            "range": "± 6839.315637096915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145782.6530612245,
            "unit": "ns",
            "range": "± 23060.682054228742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9417.34693877551,
            "unit": "ns",
            "range": "± 1675.1073521655835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32564.583333333332,
            "unit": "ns",
            "range": "± 2980.6032298907357"
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
          "id": "6105566dddbe83ae6c4adb218287356746a639ef",
          "message": "Merge pull request #2894 from greymistcube/refactor/block-commit-cache\n\n♻️ Refactor block commit cache",
          "timestamp": "2023-03-13T15:51:32+09:00",
          "tree_id": "f8a594a2f58365c2a259a9e7f236d46f03039676",
          "url": "https://github.com/planetarium/libplanet/commit/6105566dddbe83ae6c4adb218287356746a639ef"
        },
        "date": 1678691415486,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1398986.8686868686,
            "unit": "ns",
            "range": "± 99571.85145069522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2631886,
            "unit": "ns",
            "range": "± 102637.48123907777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185341.935483871,
            "unit": "ns",
            "range": "± 140523.5198653365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5295485.454545454,
            "unit": "ns",
            "range": "± 222978.58427160903"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52741.05263157895,
            "unit": "ns",
            "range": "± 3404.6743443121645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7164914.285714285,
            "unit": "ns",
            "range": "± 170424.73202476886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20400773.333333332,
            "unit": "ns",
            "range": "± 248372.60162525022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49231962.5,
            "unit": "ns",
            "range": "± 951802.1950489503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101225980,
            "unit": "ns",
            "range": "± 1269288.598951622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 199895257.14285713,
            "unit": "ns",
            "range": "± 1943076.9828030234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4775067.075892857,
            "unit": "ns",
            "range": "± 20461.262817139912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542733.41796875,
            "unit": "ns",
            "range": "± 2503.625582787006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1162203.2682291667,
            "unit": "ns",
            "range": "± 4583.805992373674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627905.050223214,
            "unit": "ns",
            "range": "± 4220.145837415359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817552.6715959822,
            "unit": "ns",
            "range": "± 814.6432610225505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756309.1471354166,
            "unit": "ns",
            "range": "± 3316.666306808061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3191566.6666666665,
            "unit": "ns",
            "range": "± 95070.65732946982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5075145.454545454,
            "unit": "ns",
            "range": "± 122954.45431336694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23905514.285714287,
            "unit": "ns",
            "range": "± 344580.5741592408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6770407.407407408,
            "unit": "ns",
            "range": "± 186780.95547361174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26596411.111111112,
            "unit": "ns",
            "range": "± 559861.7611821572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193916.98113207548,
            "unit": "ns",
            "range": "± 8053.277781057097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187161.90476190476,
            "unit": "ns",
            "range": "± 6855.012493306733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165091.83673469388,
            "unit": "ns",
            "range": "± 9926.904745626392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11169870.588235294,
            "unit": "ns",
            "range": "± 215881.82752580717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9084836,
            "unit": "ns",
            "range": "± 237450.30160716438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23738.383838383837,
            "unit": "ns",
            "range": "± 2807.8863817464844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57956.382978723406,
            "unit": "ns",
            "range": "± 5090.018875488129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43855.208333333336,
            "unit": "ns",
            "range": "± 2727.2453730021075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105039.75903614458,
            "unit": "ns",
            "range": "± 10863.442159416343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7753.6082474226805,
            "unit": "ns",
            "range": "± 1174.2073439550352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22038.947368421053,
            "unit": "ns",
            "range": "± 2007.819540125827"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5d31eda81c48c6d63fff52f7727afb334c60a8a",
          "message": "Merge pull request #2921 from OnedgeLee/merge/0.51.1\n\nMerge 0.51.1 to main",
          "timestamp": "2023-03-13T17:40:15+09:00",
          "tree_id": "49d0d5313e846d8a0a998dd5a33189bc7e9b128f",
          "url": "https://github.com/planetarium/libplanet/commit/b5d31eda81c48c6d63fff52f7727afb334c60a8a"
        },
        "date": 1678697859326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447739.393939394,
            "unit": "ns",
            "range": "± 118268.23267832081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2527895.1612903224,
            "unit": "ns",
            "range": "± 75385.70527056031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2196145.9183673467,
            "unit": "ns",
            "range": "± 132473.23570836795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5079888.461538462,
            "unit": "ns",
            "range": "± 135227.3828096161"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52635.416666666664,
            "unit": "ns",
            "range": "± 4256.21475434308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7415826.666666667,
            "unit": "ns",
            "range": "± 126228.76323036152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20386920,
            "unit": "ns",
            "range": "± 181523.89925296337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50544564.28571428,
            "unit": "ns",
            "range": "± 235260.93077570392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102171113.33333333,
            "unit": "ns",
            "range": "± 689105.054054757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204442964.2857143,
            "unit": "ns",
            "range": "± 861426.1338100842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4918998.151041667,
            "unit": "ns",
            "range": "± 22831.81089856601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1539282.578125,
            "unit": "ns",
            "range": "± 4293.410111981602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171229.2550223214,
            "unit": "ns",
            "range": "± 3270.5484957447734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2656165.652901786,
            "unit": "ns",
            "range": "± 5849.460090264504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825889.74609375,
            "unit": "ns",
            "range": "± 1501.4864462075577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758518.4830729166,
            "unit": "ns",
            "range": "± 1189.865107513852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3354100,
            "unit": "ns",
            "range": "± 27886.73519793954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5301296.96969697,
            "unit": "ns",
            "range": "± 163377.4951700212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23849246.666666668,
            "unit": "ns",
            "range": "± 297219.6755327775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6487764.285714285,
            "unit": "ns",
            "range": "± 93057.54718405213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27430606.666666668,
            "unit": "ns",
            "range": "± 430409.46528802527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194901.35135135136,
            "unit": "ns",
            "range": "± 9707.661756518442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193267.6923076923,
            "unit": "ns",
            "range": "± 8500.020361966563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186321,
            "unit": "ns",
            "range": "± 11268.184360751238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11609980,
            "unit": "ns",
            "range": "± 78657.92304112064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9352664.285714285,
            "unit": "ns",
            "range": "± 113811.9880608964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25624.48979591837,
            "unit": "ns",
            "range": "± 2630.0429703082796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59706.31578947369,
            "unit": "ns",
            "range": "± 5771.330657551219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46985.555555555555,
            "unit": "ns",
            "range": "± 2967.1066037475803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114450,
            "unit": "ns",
            "range": "± 17381.817481131497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7513.265306122449,
            "unit": "ns",
            "range": "± 1010.2197122563731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23735.05154639175,
            "unit": "ns",
            "range": "± 2372.939511323166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aea547870cfd181eee84fb1f822cb8493dbb2587",
          "message": "Merge pull request #2919 from colibrishin/release/0.52\n\n🚀 Release 0.52.0",
          "timestamp": "2023-03-13T19:19:01+09:00",
          "tree_id": "e0cd58434e1e45efbb58c9cb5a1763293e84f4a6",
          "url": "https://github.com/planetarium/libplanet/commit/aea547870cfd181eee84fb1f822cb8493dbb2587"
        },
        "date": 1678703710486,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1278093,
            "unit": "ns",
            "range": "± 130901.03845920005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2502583.3333333335,
            "unit": "ns",
            "range": "± 104503.35148548162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2044967,
            "unit": "ns",
            "range": "± 145902.49757625774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5265217.171717172,
            "unit": "ns",
            "range": "± 328535.2688302866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47561.84210526316,
            "unit": "ns",
            "range": "± 2421.017257560034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6853753.846153846,
            "unit": "ns",
            "range": "± 12403.199545857471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18334185.714285713,
            "unit": "ns",
            "range": "± 202748.2736610289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45590413.333333336,
            "unit": "ns",
            "range": "± 804301.0717978922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91464638.46153846,
            "unit": "ns",
            "range": "± 979476.849767655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 181209250,
            "unit": "ns",
            "range": "± 2135099.038184679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4745474.051339285,
            "unit": "ns",
            "range": "± 18380.63900911887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1481180.8333333333,
            "unit": "ns",
            "range": "± 4990.136189160803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140693.2161458333,
            "unit": "ns",
            "range": "± 4884.658131918191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2684157.1354166665,
            "unit": "ns",
            "range": "± 21734.605139102205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822661.7838541666,
            "unit": "ns",
            "range": "± 2535.290176019171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747215.0948660715,
            "unit": "ns",
            "range": "± 2112.2813041579475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2948612.121212121,
            "unit": "ns",
            "range": "± 92745.80434437371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4678019.354838709,
            "unit": "ns",
            "range": "± 134800.71072847955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21787615.789473683,
            "unit": "ns",
            "range": "± 479890.46813154017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5580352.631578947,
            "unit": "ns",
            "range": "± 118674.44903517004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24979336,
            "unit": "ns",
            "range": "± 662325.5933199824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176455.84415584416,
            "unit": "ns",
            "range": "± 8997.419125658282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172577.10843373495,
            "unit": "ns",
            "range": "± 9217.974557977115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146541.66666666666,
            "unit": "ns",
            "range": "± 4877.140555694495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10299430.76923077,
            "unit": "ns",
            "range": "± 96066.12639752704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8389781.818181818,
            "unit": "ns",
            "range": "± 205212.84104526727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17419.14893617021,
            "unit": "ns",
            "range": "± 1721.2946237877397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50327.65957446808,
            "unit": "ns",
            "range": "± 3989.270670813761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37760.606060606064,
            "unit": "ns",
            "range": "± 1183.4640346086235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85711.53846153847,
            "unit": "ns",
            "range": "± 4694.428329696529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5479.166666666667,
            "unit": "ns",
            "range": "± 691.7432847016474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17643.478260869564,
            "unit": "ns",
            "range": "± 1592.448135876419"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ba5b680d8f3173eec161e6af2e2edcb471a8f3b",
          "message": "Merge pull request #2925 from colibrishin/prepare/0.53\n\n🔧 Prepare 0.53.0",
          "timestamp": "2023-03-14T00:31:45+09:00",
          "tree_id": "9c83cab9a04832002ac43889c4b0401dbc846dcb",
          "url": "https://github.com/planetarium/libplanet/commit/4ba5b680d8f3173eec161e6af2e2edcb471a8f3b"
        },
        "date": 1678722791894,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1668202.06185567,
            "unit": "ns",
            "range": "± 138497.77448526432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3070322,
            "unit": "ns",
            "range": "± 122570.63817593976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2582036.9565217393,
            "unit": "ns",
            "range": "± 181401.53246829045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5874431.818181818,
            "unit": "ns",
            "range": "± 112312.5290316676"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62274.489795918365,
            "unit": "ns",
            "range": "± 5299.140393711601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9273246.511627907,
            "unit": "ns",
            "range": "± 342496.11978951655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24217087.5,
            "unit": "ns",
            "range": "± 379446.05391719827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59823158.333333336,
            "unit": "ns",
            "range": "± 192052.32931930217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 120125557.14285715,
            "unit": "ns",
            "range": "± 730944.4677573359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 242106729.4117647,
            "unit": "ns",
            "range": "± 3541115.1327591543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5767556.473214285,
            "unit": "ns",
            "range": "± 65145.7348267403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1908005.296875,
            "unit": "ns",
            "range": "± 50340.897725079725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1425505.4565429688,
            "unit": "ns",
            "range": "± 43908.101367973344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3136376.231971154,
            "unit": "ns",
            "range": "± 21686.83856338546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015732.9159007353,
            "unit": "ns",
            "range": "± 32289.37790361772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935729.5442708334,
            "unit": "ns",
            "range": "± 10670.407761741199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3991872.727272727,
            "unit": "ns",
            "range": "± 108920.27265598698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6275014.285714285,
            "unit": "ns",
            "range": "± 227480.00455835147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28842150,
            "unit": "ns",
            "range": "± 586469.0253091452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7568194.339622642,
            "unit": "ns",
            "range": "± 311626.42354582093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32392935,
            "unit": "ns",
            "range": "± 745914.9755942626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226541.66666666666,
            "unit": "ns",
            "range": "± 8705.533415979608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222979.3650793651,
            "unit": "ns",
            "range": "± 9610.312987588179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219137.5,
            "unit": "ns",
            "range": "± 7794.300596902315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13595900,
            "unit": "ns",
            "range": "± 226640.84430590243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11165186.842105264,
            "unit": "ns",
            "range": "± 246190.03321852887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28461.458333333332,
            "unit": "ns",
            "range": "± 2975.35030371628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69773.68421052632,
            "unit": "ns",
            "range": "± 6364.633173336151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59039.393939393936,
            "unit": "ns",
            "range": "± 5291.32555788762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123690.80459770115,
            "unit": "ns",
            "range": "± 13722.614438200671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9591.666666666666,
            "unit": "ns",
            "range": "± 1169.8552916958458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25921.978021978022,
            "unit": "ns",
            "range": "± 2025.9868485808863"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "955091416ce990cac6d02fd02e57820fc1368b60",
          "message": "Merge pull request #2703 from longfin/feature/eliminate-completer\n\nRemove StateCompleters",
          "timestamp": "2023-03-14T01:19:32+09:00",
          "tree_id": "c74812b0f7d4eac0d6d751aeaf7ca384424b21f3",
          "url": "https://github.com/planetarium/libplanet/commit/955091416ce990cac6d02fd02e57820fc1368b60"
        },
        "date": 1678725418098,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1488925,
            "unit": "ns",
            "range": "± 22918.39773076326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2356950,
            "unit": "ns",
            "range": "± 82716.62158949365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2087009.756097561,
            "unit": "ns",
            "range": "± 110298.72525343332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4742203.846153846,
            "unit": "ns",
            "range": "± 126895.01638998825"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42845.58823529412,
            "unit": "ns",
            "range": "± 2043.1490052783652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7106750,
            "unit": "ns",
            "range": "± 52950.36500201064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18095486.666666668,
            "unit": "ns",
            "range": "± 87576.12090279491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46093593.333333336,
            "unit": "ns",
            "range": "± 272243.16721497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 92418960,
            "unit": "ns",
            "range": "± 687394.9122801037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 185013633.33333334,
            "unit": "ns",
            "range": "± 629218.4888150273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4781056.473214285,
            "unit": "ns",
            "range": "± 5457.636565188531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510912.665264423,
            "unit": "ns",
            "range": "± 929.1315782458726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1231229.0364583333,
            "unit": "ns",
            "range": "± 1510.7459636451638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2584594.921875,
            "unit": "ns",
            "range": "± 7955.0652516687605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825345.1998197115,
            "unit": "ns",
            "range": "± 5071.425044896627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726257.65625,
            "unit": "ns",
            "range": "± 1398.3694481880182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3112042.8571428573,
            "unit": "ns",
            "range": "± 51555.13425578356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4787313.333333333,
            "unit": "ns",
            "range": "± 86166.10923647639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21607413.333333332,
            "unit": "ns",
            "range": "± 223280.97566796435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5860700,
            "unit": "ns",
            "range": "± 145036.55025231023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25017613.333333332,
            "unit": "ns",
            "range": "± 297931.32685874024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179486.36363636365,
            "unit": "ns",
            "range": "± 6687.774020783412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175444.18604651163,
            "unit": "ns",
            "range": "± 6408.3019935668635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152329.72972972973,
            "unit": "ns",
            "range": "± 7657.724718946148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10553926.666666666,
            "unit": "ns",
            "range": "± 68375.4599531844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8522371.42857143,
            "unit": "ns",
            "range": "± 59761.73754774266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18631.25,
            "unit": "ns",
            "range": "± 1858.42675400458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51200,
            "unit": "ns",
            "range": "± 4776.533137873566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35016.25,
            "unit": "ns",
            "range": "± 1833.4061646446382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91370.40816326531,
            "unit": "ns",
            "range": "± 14413.23996988961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4888.659793814433,
            "unit": "ns",
            "range": "± 649.8198931017657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18986.458333333332,
            "unit": "ns",
            "range": "± 1873.7308570233356"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d6a86e7ba818a9568589c6dd80d936725d1c9cb",
          "message": "Merge pull request #2889 from dahlia/bencodex-js",
          "timestamp": "2023-03-15T14:37:59+09:00",
          "tree_id": "a6706f9443e0d4bc7c974bb1d6daad4a58dd04b6",
          "url": "https://github.com/planetarium/libplanet/commit/1d6a86e7ba818a9568589c6dd80d936725d1c9cb"
        },
        "date": 1678859587986,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1293707.2916666667,
            "unit": "ns",
            "range": "± 94892.86007724896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2316817.3913043477,
            "unit": "ns",
            "range": "± 57574.13128207298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2024578.5714285714,
            "unit": "ns",
            "range": "± 141177.8422569558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4779858.536585365,
            "unit": "ns",
            "range": "± 164796.16041584485"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42130,
            "unit": "ns",
            "range": "± 1912.557188687439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7012176.923076923,
            "unit": "ns",
            "range": "± 40427.48969546493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18129726.666666668,
            "unit": "ns",
            "range": "± 225079.80954911673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45011521.428571425,
            "unit": "ns",
            "range": "± 313437.9614203434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 90534690,
            "unit": "ns",
            "range": "± 926659.4541685743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 178791626.66666666,
            "unit": "ns",
            "range": "± 1915754.0445574152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4749860.416666667,
            "unit": "ns",
            "range": "± 9148.622382210368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502553.0078125,
            "unit": "ns",
            "range": "± 1241.8408943554261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148420.4622395833,
            "unit": "ns",
            "range": "± 1475.6417039478313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2699663.253348214,
            "unit": "ns",
            "range": "± 19865.889594234428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802990.1227678572,
            "unit": "ns",
            "range": "± 2186.235727897749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745035.37109375,
            "unit": "ns",
            "range": "± 1239.4461078744864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2870292.8571428573,
            "unit": "ns",
            "range": "± 17172.449504308406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4514566.666666667,
            "unit": "ns",
            "range": "± 83558.45458918765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20798413.333333332,
            "unit": "ns",
            "range": "± 240891.3325448595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5650213.636363637,
            "unit": "ns",
            "range": "± 135750.53554381616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24267563.157894738,
            "unit": "ns",
            "range": "± 516964.45849306625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168358.82352941178,
            "unit": "ns",
            "range": "± 6848.070574127817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170455.31914893616,
            "unit": "ns",
            "range": "± 6632.981115824635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142714.2857142857,
            "unit": "ns",
            "range": "± 2481.580496023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10249346.666666666,
            "unit": "ns",
            "range": "± 165173.24180848364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8178160,
            "unit": "ns",
            "range": "± 96706.71272313151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15910.526315789473,
            "unit": "ns",
            "range": "± 1324.36043851688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47636.17021276596,
            "unit": "ns",
            "range": "± 3593.777509518415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37546.153846153844,
            "unit": "ns",
            "range": "± 1316.4637948219174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81900,
            "unit": "ns",
            "range": "± 13274.632811820438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4050,
            "unit": "ns",
            "range": "± 516.0579322844328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14985.714285714286,
            "unit": "ns",
            "range": "± 1407.72246543221"
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
          "id": "265bb73ca9c75e7e0b3db07877b4499ac5eaff40",
          "message": "Merge pull request #2915 from planetarium/ci-account-web3-secret-storage\n\n`@planetarium/account-web3-secret-storage`",
          "timestamp": "2023-03-16T10:14:58+09:00",
          "tree_id": "58eff47933c90310496dfcf5e4afb42d5c5dff14",
          "url": "https://github.com/planetarium/libplanet/commit/265bb73ca9c75e7e0b3db07877b4499ac5eaff40"
        },
        "date": 1678930211128,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1381147.0588235294,
            "unit": "ns",
            "range": "± 43250.885331937825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2332953.846153846,
            "unit": "ns",
            "range": "± 63255.83123013549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2123018.3673469387,
            "unit": "ns",
            "range": "± 146062.99258707708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4818850,
            "unit": "ns",
            "range": "± 175570.77823695977"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42019.718309859156,
            "unit": "ns",
            "range": "± 1857.4652250780487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7053473.333333333,
            "unit": "ns",
            "range": "± 26358.09625324329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18217273.333333332,
            "unit": "ns",
            "range": "± 156701.57017476915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46009456.666666664,
            "unit": "ns",
            "range": "± 269651.0005455906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 93056978.57142857,
            "unit": "ns",
            "range": "± 456254.1235701057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 183753178.57142857,
            "unit": "ns",
            "range": "± 518141.264044367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4898380.769230769,
            "unit": "ns",
            "range": "± 6608.70053365843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1531470.99609375,
            "unit": "ns",
            "range": "± 4385.4524961718225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149001.875,
            "unit": "ns",
            "range": "± 1719.9505636011356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617920.8984375,
            "unit": "ns",
            "range": "± 30414.14777126385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811190.8268229166,
            "unit": "ns",
            "range": "± 1503.5644502783105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782297.2037760416,
            "unit": "ns",
            "range": "± 701.861613236987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3001556.25,
            "unit": "ns",
            "range": "± 57550.32544072478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4694796.153846154,
            "unit": "ns",
            "range": "± 127341.45116424338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21278693.333333332,
            "unit": "ns",
            "range": "± 166409.24367640275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5705210.52631579,
            "unit": "ns",
            "range": "± 122138.10896202183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24844613.333333332,
            "unit": "ns",
            "range": "± 413221.2722132342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174294.5945945946,
            "unit": "ns",
            "range": "± 5780.952725495548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176956.81818181818,
            "unit": "ns",
            "range": "± 6556.104832202161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152958.66666666666,
            "unit": "ns",
            "range": "± 7719.317525731343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10396086.666666666,
            "unit": "ns",
            "range": "± 70936.99283435232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8341526.666666667,
            "unit": "ns",
            "range": "± 85433.2861415993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16293.478260869566,
            "unit": "ns",
            "range": "± 1327.751495005466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48081.05263157895,
            "unit": "ns",
            "range": "± 4720.536724280995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35285.9375,
            "unit": "ns",
            "range": "± 1639.6251204815953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84539.24050632911,
            "unit": "ns",
            "range": "± 4676.027728019797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5006.451612903225,
            "unit": "ns",
            "range": "± 459.3962132902422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17203.191489361703,
            "unit": "ns",
            "range": "± 1198.3592840589297"
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
          "id": "9537674d4df800fc6b18690a8a0a32959fabe81e",
          "message": "Merge pull request #2948 from greymistcube/port/0.52.1-to-main\n\n🔀 Port 0.52.1 to main",
          "timestamp": "2023-03-16T10:54:39+09:00",
          "tree_id": "6ddce03a1f5692ba28751d1da2768d6c6078c57d",
          "url": "https://github.com/planetarium/libplanet/commit/9537674d4df800fc6b18690a8a0a32959fabe81e"
        },
        "date": 1678932624506,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354004.6391752576,
            "unit": "ns",
            "range": "± 117664.86042695811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2388982,
            "unit": "ns",
            "range": "± 95336.33414477014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2134427.551020408,
            "unit": "ns",
            "range": "± 146371.020440757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4773481.818181818,
            "unit": "ns",
            "range": "± 115044.54473258292"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43576.470588235294,
            "unit": "ns",
            "range": "± 887.7847513366527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7110385.714285715,
            "unit": "ns",
            "range": "± 43920.85289109626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17759853.333333332,
            "unit": "ns",
            "range": "± 113202.65561414733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46010386.666666664,
            "unit": "ns",
            "range": "± 172338.2341570812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91154092.3076923,
            "unit": "ns",
            "range": "± 327185.3945944064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 184489726.66666666,
            "unit": "ns",
            "range": "± 955664.6897516384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4849236.057692308,
            "unit": "ns",
            "range": "± 4492.202194792018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521527.5520833333,
            "unit": "ns",
            "range": "± 1802.4091394162529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142742.1316964286,
            "unit": "ns",
            "range": "± 2398.1543684706976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568317.9129464286,
            "unit": "ns",
            "range": "± 13444.831322208138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799518.6872209822,
            "unit": "ns",
            "range": "± 955.2751589251475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744920.6682477678,
            "unit": "ns",
            "range": "± 1297.3321890381671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3068066.6666666665,
            "unit": "ns",
            "range": "± 55980.46427953577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4694664,
            "unit": "ns",
            "range": "± 64711.10079937342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21781873.333333332,
            "unit": "ns",
            "range": "± 200135.23808617392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5921043.75,
            "unit": "ns",
            "range": "± 110011.56283924583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24874126.666666668,
            "unit": "ns",
            "range": "± 314383.1158376822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175814.2857142857,
            "unit": "ns",
            "range": "± 6345.098797153957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175157.77777777778,
            "unit": "ns",
            "range": "± 6483.8081153568755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152257.31707317074,
            "unit": "ns",
            "range": "± 7750.842733755384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10514884.615384616,
            "unit": "ns",
            "range": "± 37065.18685941131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8547753.846153846,
            "unit": "ns",
            "range": "± 33027.42838370898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18168.817204301075,
            "unit": "ns",
            "range": "± 2326.967540300861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50361.458333333336,
            "unit": "ns",
            "range": "± 4213.983483385479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35654.666666666664,
            "unit": "ns",
            "range": "± 1810.3526111165681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86418.88888888889,
            "unit": "ns",
            "range": "± 10622.76434583137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4826.80412371134,
            "unit": "ns",
            "range": "± 656.3020557000802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17968.478260869564,
            "unit": "ns",
            "range": "± 1264.296646563309"
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
          "id": "f0a07124aa5701cca761c35b8836c3dc5fb885ab",
          "message": "Merge pull request #2952 from greymistcube/port/0.50.4-to-main\n\n🔀 Port 0.50.4 to main",
          "timestamp": "2023-03-17T14:28:20+09:00",
          "tree_id": "14a568e4e31adb1cce02e61d8bc8545abb0bdf9a",
          "url": "https://github.com/planetarium/libplanet/commit/f0a07124aa5701cca761c35b8836c3dc5fb885ab"
        },
        "date": 1679032126261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1549800,
            "unit": "ns",
            "range": "± 24408.229486520864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2534812.5,
            "unit": "ns",
            "range": "± 89692.898233861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2153178.350515464,
            "unit": "ns",
            "range": "± 132449.1083293914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5060026.666666667,
            "unit": "ns",
            "range": "± 149778.7884557235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48872.72727272727,
            "unit": "ns",
            "range": "± 2638.822764025145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6928776.923076923,
            "unit": "ns",
            "range": "± 99287.81524643523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19858271.42857143,
            "unit": "ns",
            "range": "± 173588.56940643134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48810946.666666664,
            "unit": "ns",
            "range": "± 854958.8526996627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99973486.66666667,
            "unit": "ns",
            "range": "± 876792.7893885815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 199902646.66666666,
            "unit": "ns",
            "range": "± 2092005.12354831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4761743.125,
            "unit": "ns",
            "range": "± 19254.1291577683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507782.34375,
            "unit": "ns",
            "range": "± 4159.4644717159545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161255.0325520833,
            "unit": "ns",
            "range": "± 4531.284538230119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617230.0130208335,
            "unit": "ns",
            "range": "± 11976.585684729485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829886.0281808035,
            "unit": "ns",
            "range": "± 1486.3731635934819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761676.6671316965,
            "unit": "ns",
            "range": "± 1013.751165288784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3179091.6666666665,
            "unit": "ns",
            "range": "± 43766.351922522175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4953704.347826087,
            "unit": "ns",
            "range": "± 124848.65921390538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22817986.666666668,
            "unit": "ns",
            "range": "± 374869.28553576546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6020130,
            "unit": "ns",
            "range": "± 132113.11779962215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26014739.285714287,
            "unit": "ns",
            "range": "± 741041.9308070805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184311.11111111112,
            "unit": "ns",
            "range": "± 3923.2173004981646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181970.96774193548,
            "unit": "ns",
            "range": "± 4888.571266971369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154076.13636363635,
            "unit": "ns",
            "range": "± 8428.454737883307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11085396.551724138,
            "unit": "ns",
            "range": "± 321877.9388024049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8824820,
            "unit": "ns",
            "range": "± 164297.0967485427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20478.494623655915,
            "unit": "ns",
            "range": "± 1587.9881626958327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53555.78947368421,
            "unit": "ns",
            "range": "± 5792.212596557365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43933.333333333336,
            "unit": "ns",
            "range": "± 3376.2535034114735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108338.77551020408,
            "unit": "ns",
            "range": "± 16624.733980682708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6328.125,
            "unit": "ns",
            "range": "± 1006.7355399351019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19955.31914893617,
            "unit": "ns",
            "range": "± 1799.0210612355709"
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
          "id": "f4d254fa828bb0582c3f318ffb8d162b9e915fdf",
          "message": "Merge pull request #2954 from greymistcube/refactor/bencodable-validator\n\n♻️ `IBencodable` `Validator` and `ValidatorSet`",
          "timestamp": "2023-03-17T16:46:11+09:00",
          "tree_id": "697b033482d68942b8e7772b9738ace272559a25",
          "url": "https://github.com/planetarium/libplanet/commit/f4d254fa828bb0582c3f318ffb8d162b9e915fdf"
        },
        "date": 1679040431832,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423162.6262626264,
            "unit": "ns",
            "range": "± 181784.24337651252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2856970,
            "unit": "ns",
            "range": "± 247348.9856600805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2394977.777777778,
            "unit": "ns",
            "range": "± 173085.08262604373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5803435,
            "unit": "ns",
            "range": "± 417183.82678177115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54664.444444444445,
            "unit": "ns",
            "range": "± 4008.8823041266223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7840168.604651162,
            "unit": "ns",
            "range": "± 421969.7045890513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21377798.795180723,
            "unit": "ns",
            "range": "± 1133710.969585946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53226182.828282826,
            "unit": "ns",
            "range": "± 3211124.8656290695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102412376,
            "unit": "ns",
            "range": "± 6341037.053667471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 210607035.7142857,
            "unit": "ns",
            "range": "± 9036126.644277878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5575821.40625,
            "unit": "ns",
            "range": "± 83921.3817451617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875669.545200893,
            "unit": "ns",
            "range": "± 9482.04129491871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413820.3190104167,
            "unit": "ns",
            "range": "± 9189.47929478192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3138948.8020833335,
            "unit": "ns",
            "range": "± 39114.384706301535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 991390.8203125,
            "unit": "ns",
            "range": "± 9276.41973574062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910760.25390625,
            "unit": "ns",
            "range": "± 10528.002720764767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3401124.4680851065,
            "unit": "ns",
            "range": "± 239859.37039631855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5307371.717171717,
            "unit": "ns",
            "range": "± 408365.30465878453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26488251.020408165,
            "unit": "ns",
            "range": "± 1040258.3082906317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6719015.094339622,
            "unit": "ns",
            "range": "± 272752.3992676158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30171854,
            "unit": "ns",
            "range": "± 1914795.2714849205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210904.54545454544,
            "unit": "ns",
            "range": "± 9857.35854489008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204427.39726027398,
            "unit": "ns",
            "range": "± 9822.992589299702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176037.37373737374,
            "unit": "ns",
            "range": "± 15576.47746363797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12032300,
            "unit": "ns",
            "range": "± 723009.3071197757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9911993.421052631,
            "unit": "ns",
            "range": "± 501772.43615953403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21138.88888888889,
            "unit": "ns",
            "range": "± 1956.0734829401663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56307.77777777778,
            "unit": "ns",
            "range": "± 5566.315784317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51311.70212765958,
            "unit": "ns",
            "range": "± 4410.5410484911645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98495.88235294117,
            "unit": "ns",
            "range": "± 11816.448916065876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5709.375,
            "unit": "ns",
            "range": "± 848.2896879821434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21194.791666666668,
            "unit": "ns",
            "range": "± 2181.9050001832256"
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
          "id": "e8f6b8ed7fb1b03c4353c7a8d2ee4216e3e7b491",
          "message": "Merge pull request #2955 from greymistcube/refactor/bencodable-blockcommit\n\n♻️ `IBencodable` `BlockCommit`",
          "timestamp": "2023-03-17T17:32:41+09:00",
          "tree_id": "7a0907c438012591008e907aab2715fd36c87c2e",
          "url": "https://github.com/planetarium/libplanet/commit/e8f6b8ed7fb1b03c4353c7a8d2ee4216e3e7b491"
        },
        "date": 1679042952261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1342540,
            "unit": "ns",
            "range": "± 141862.00579037605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2308119.4444444445,
            "unit": "ns",
            "range": "± 75881.34654820152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2057095.918367347,
            "unit": "ns",
            "range": "± 138677.99899713343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4875477.419354838,
            "unit": "ns",
            "range": "± 221601.32746492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43902.94117647059,
            "unit": "ns",
            "range": "± 2092.9498277700723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6912720,
            "unit": "ns",
            "range": "± 11211.104189278465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17438140,
            "unit": "ns",
            "range": "± 98823.00773171628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 44450376.92307692,
            "unit": "ns",
            "range": "± 178497.44234323618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91642573.33333333,
            "unit": "ns",
            "range": "± 1574727.5244882694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 180713830.76923078,
            "unit": "ns",
            "range": "± 1504671.2140224166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4840537.447916667,
            "unit": "ns",
            "range": "± 22705.002392762843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497940.1497395833,
            "unit": "ns",
            "range": "± 3245.034674637575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167353.828125,
            "unit": "ns",
            "range": "± 3803.042082417201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548061.9921875,
            "unit": "ns",
            "range": "± 6529.422399612281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812928.0552455357,
            "unit": "ns",
            "range": "± 1857.832703616141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724298.0608258928,
            "unit": "ns",
            "range": "± 961.1909396715254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2904335.135135135,
            "unit": "ns",
            "range": "± 79244.92348345033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4572240.625,
            "unit": "ns",
            "range": "± 141962.67764718324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21133553.846153848,
            "unit": "ns",
            "range": "± 197879.45663705052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5613406.666666667,
            "unit": "ns",
            "range": "± 78954.6476209753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24441307.14285714,
            "unit": "ns",
            "range": "± 217192.1604488513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169639.79591836734,
            "unit": "ns",
            "range": "± 6742.781476573027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174421.21212121213,
            "unit": "ns",
            "range": "± 5399.117843208137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177556,
            "unit": "ns",
            "range": "± 22480.79009359598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10086026.666666666,
            "unit": "ns",
            "range": "± 76954.27646769649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8144633.333333333,
            "unit": "ns",
            "range": "± 62366.00111629809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17971.27659574468,
            "unit": "ns",
            "range": "± 1713.803688863599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47365.463917525776,
            "unit": "ns",
            "range": "± 5575.361352380847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35341.758241758245,
            "unit": "ns",
            "range": "± 1958.007259892677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83986.73469387754,
            "unit": "ns",
            "range": "± 16124.059232559044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4685.714285714285,
            "unit": "ns",
            "range": "± 635.2205559009998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16077.551020408164,
            "unit": "ns",
            "range": "± 1863.4592935203054"
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
          "id": "bb3de0b994abb6d0d4d1377ec1bfb9df4797a8a1",
          "message": "Merge pull request #2959 from greymistcube/refactor/bencodable-blockhash\n\n♻️ `IBencodable` for `BlockHash`",
          "timestamp": "2023-03-17T18:04:31+09:00",
          "tree_id": "edaa51dbf9a310e61f1217962dc2578ac1139cee",
          "url": "https://github.com/planetarium/libplanet/commit/bb3de0b994abb6d0d4d1377ec1bfb9df4797a8a1"
        },
        "date": 1679044643266,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992303.0612244898,
            "unit": "ns",
            "range": "± 100414.32564458124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1782050,
            "unit": "ns",
            "range": "± 90219.32165561875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1528723,
            "unit": "ns",
            "range": "± 102500.39749122236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3537917.777777778,
            "unit": "ns",
            "range": "± 126010.95603321181"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33991.13924050633,
            "unit": "ns",
            "range": "± 1684.7117895049146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 5018200,
            "unit": "ns",
            "range": "± 25102.1626842902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 12737600,
            "unit": "ns",
            "range": "± 81105.96108225908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 32475153.333333332,
            "unit": "ns",
            "range": "± 374053.7124659022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 65208923.07692308,
            "unit": "ns",
            "range": "± 521428.86084592296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 129498793.33333333,
            "unit": "ns",
            "range": "± 1307669.9231111512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3465178.7890625,
            "unit": "ns",
            "range": "± 16933.170970686173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1093242.6822916667,
            "unit": "ns",
            "range": "± 3402.6777612794563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 827194.2317708334,
            "unit": "ns",
            "range": "± 2050.284384054483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1894639.7005208333,
            "unit": "ns",
            "range": "± 19078.256907530635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600666.71875,
            "unit": "ns",
            "range": "± 2837.004636493638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 523018.73046875,
            "unit": "ns",
            "range": "± 1042.6409708589026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2093781.8181818181,
            "unit": "ns",
            "range": "± 77084.62663397717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3347177.272727273,
            "unit": "ns",
            "range": "± 74638.4359800038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15175426.666666666,
            "unit": "ns",
            "range": "± 245055.62478363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4057903.5714285714,
            "unit": "ns",
            "range": "± 115758.15940249727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18248447.826086957,
            "unit": "ns",
            "range": "± 450768.2582089112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 126819.71830985915,
            "unit": "ns",
            "range": "± 5869.402980549941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 129992.77108433735,
            "unit": "ns",
            "range": "± 6717.592177742763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 112058.16326530612,
            "unit": "ns",
            "range": "± 4416.061439728368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7300856.666666667,
            "unit": "ns",
            "range": "± 109119.00100785555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5964850,
            "unit": "ns",
            "range": "± 94070.49788019925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14014.285714285714,
            "unit": "ns",
            "range": "± 1809.9382002322052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 35993.406593406595,
            "unit": "ns",
            "range": "± 4133.274252206844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 26788.333333333332,
            "unit": "ns",
            "range": "± 1209.7193492520494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67589.69072164949,
            "unit": "ns",
            "range": "± 14622.139923589062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3558.9473684210525,
            "unit": "ns",
            "range": "± 460.2253695934951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13190.217391304348,
            "unit": "ns",
            "range": "± 1054.562018623272"
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
          "id": "e963d72d4fbdf5eaf8f87741ffe130108a5bc9bb",
          "message": "Merge pull request #2961 from greymistcube/refactor/bencodable-vote\n\n♻️ `IBencodable` for `VoteMetadata` and `Vote`",
          "timestamp": "2023-03-20T09:53:41+09:00",
          "tree_id": "f7642fcab75e8e532157a3af5e43029aaa1883b3",
          "url": "https://github.com/planetarium/libplanet/commit/e963d72d4fbdf5eaf8f87741ffe130108a5bc9bb"
        },
        "date": 1679274620136,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1512900,
            "unit": "ns",
            "range": "± 29703.782026312183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2627752.9850746267,
            "unit": "ns",
            "range": "± 124136.82696579664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2170859.574468085,
            "unit": "ns",
            "range": "± 126475.62757191384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5234680.357142857,
            "unit": "ns",
            "range": "± 223853.514943584"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52571.57894736842,
            "unit": "ns",
            "range": "± 3333.2516600669846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7932657.142857143,
            "unit": "ns",
            "range": "± 119190.65344284286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20402053.333333332,
            "unit": "ns",
            "range": "± 219842.98574426337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50969816.666666664,
            "unit": "ns",
            "range": "± 312152.63131694926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101386271.42857143,
            "unit": "ns",
            "range": "± 536120.4319762656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203036092.85714287,
            "unit": "ns",
            "range": "± 1771316.8997036708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4830260.997596154,
            "unit": "ns",
            "range": "± 32010.40589968174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1547026.6927083333,
            "unit": "ns",
            "range": "± 26531.767667011853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1177635.6770833333,
            "unit": "ns",
            "range": "± 6182.682610760126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617303.2877604165,
            "unit": "ns",
            "range": "± 10419.973968353974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853360.5755974265,
            "unit": "ns",
            "range": "± 16863.494079807828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759520.3350360577,
            "unit": "ns",
            "range": "± 11077.15072115008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333717.8571428573,
            "unit": "ns",
            "range": "± 95395.44229182499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5114787.5,
            "unit": "ns",
            "range": "± 94244.71603225297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23812200,
            "unit": "ns",
            "range": "± 369202.01682922756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6275766.666666667,
            "unit": "ns",
            "range": "± 146096.34264187908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26862940,
            "unit": "ns",
            "range": "± 695300.1306390404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192258.82352941178,
            "unit": "ns",
            "range": "± 7853.640594541827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185125.64102564103,
            "unit": "ns",
            "range": "± 9541.058721745796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171797.91666666666,
            "unit": "ns",
            "range": "± 10209.396901272832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11195885.714285715,
            "unit": "ns",
            "range": "± 237876.66612283405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9193778.57142857,
            "unit": "ns",
            "range": "± 136762.63085288394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24630.927835051545,
            "unit": "ns",
            "range": "± 2797.966554211821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63373.19587628866,
            "unit": "ns",
            "range": "± 6692.650126941455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46222.68041237113,
            "unit": "ns",
            "range": "± 2943.3011920658905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101704.76190476191,
            "unit": "ns",
            "range": "± 8315.84211388778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8512.765957446809,
            "unit": "ns",
            "range": "± 912.5450694485615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25004.21052631579,
            "unit": "ns",
            "range": "± 2316.7253021063875"
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
          "id": "8546675a24fce872d823d8e90984403e68d6a1b5",
          "message": "Merge pull request #2970 from greymistcube/refactor/lastcommit-encoding\n\n♻️ Refactor `Block<T>.LastCommit` encoding",
          "timestamp": "2023-03-21T13:40:04+09:00",
          "tree_id": "db3ec865d2318a231fde499a7a361a3f9994869d",
          "url": "https://github.com/planetarium/libplanet/commit/8546675a24fce872d823d8e90984403e68d6a1b5"
        },
        "date": 1679374571825,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1358635.3535353534,
            "unit": "ns",
            "range": "± 88846.05501920599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2510006.25,
            "unit": "ns",
            "range": "± 48738.656372534526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185274.4897959186,
            "unit": "ns",
            "range": "± 137697.7700941895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5115956.451612903,
            "unit": "ns",
            "range": "± 156142.49674679403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53435.48387096774,
            "unit": "ns",
            "range": "± 3135.998737012082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7487592.307692308,
            "unit": "ns",
            "range": "± 122468.8699325837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20137653.333333332,
            "unit": "ns",
            "range": "± 179906.96352228703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51430650,
            "unit": "ns",
            "range": "± 360579.53512900055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100633364.28571428,
            "unit": "ns",
            "range": "± 655664.5983652393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200959793.33333334,
            "unit": "ns",
            "range": "± 1249390.8689932907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4827221.822916667,
            "unit": "ns",
            "range": "± 10808.212619071954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526519.1015625,
            "unit": "ns",
            "range": "± 2717.0388888432067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159773.158482143,
            "unit": "ns",
            "range": "± 4502.343187357341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634890.6640625,
            "unit": "ns",
            "range": "± 7959.427389346591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826879.4401041666,
            "unit": "ns",
            "range": "± 1395.8674316362442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770172.8585379465,
            "unit": "ns",
            "range": "± 1167.4940311266648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3393405,
            "unit": "ns",
            "range": "± 120144.19104153826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5275869.047619048,
            "unit": "ns",
            "range": "± 191996.1641996098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23814400,
            "unit": "ns",
            "range": "± 377578.56325349223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6480845,
            "unit": "ns",
            "range": "± 126610.0664285926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27489384.615384616,
            "unit": "ns",
            "range": "± 198105.99791590462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198040,
            "unit": "ns",
            "range": "± 6692.621271757389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198763.76811594202,
            "unit": "ns",
            "range": "± 9619.128782466443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188586.48648648648,
            "unit": "ns",
            "range": "± 9460.289380211849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11516816.666666666,
            "unit": "ns",
            "range": "± 77133.758281745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9445438.461538462,
            "unit": "ns",
            "range": "± 94955.28367308424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25357.44680851064,
            "unit": "ns",
            "range": "± 1992.3638827348443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59188.77551020408,
            "unit": "ns",
            "range": "± 5871.859900521539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47595,
            "unit": "ns",
            "range": "± 3799.7175599448883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115602.0202020202,
            "unit": "ns",
            "range": "± 20501.12480636412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8504.736842105263,
            "unit": "ns",
            "range": "± 1152.035056079775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23621.052631578947,
            "unit": "ns",
            "range": "± 1754.5621225483299"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ba9be20de483f0da4aa96b1a5f62d63fec62c0d",
          "message": "Merge pull request #2566 from longfin/feature/fee-calculator\n\nIntroduce `IFeeCalculator`",
          "timestamp": "2023-03-22T14:22:57+09:00",
          "tree_id": "0788e90971d1d5d79c82dfad36e3b0bb1589462e",
          "url": "https://github.com/planetarium/libplanet/commit/4ba9be20de483f0da4aa96b1a5f62d63fec62c0d"
        },
        "date": 1679463360961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1073140,
            "unit": "ns",
            "range": "± 97992.95377678433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1773043.9024390243,
            "unit": "ns",
            "range": "± 63802.05736800534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596644,
            "unit": "ns",
            "range": "± 126804.96542551344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3663523.913043478,
            "unit": "ns",
            "range": "± 122817.14535534816"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33918.42105263158,
            "unit": "ns",
            "range": "± 1664.829162512141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4889507.142857143,
            "unit": "ns",
            "range": "± 17482.011162498275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13206680,
            "unit": "ns",
            "range": "± 78024.19221900712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33380713.333333332,
            "unit": "ns",
            "range": "± 370744.7482850599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66114706.666666664,
            "unit": "ns",
            "range": "± 352756.88606555463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132565314.28571428,
            "unit": "ns",
            "range": "± 1052040.693756036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3623986.746651786,
            "unit": "ns",
            "range": "± 7699.910973314194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1124947.5811298077,
            "unit": "ns",
            "range": "± 1165.5051749525485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 798456.2430245535,
            "unit": "ns",
            "range": "± 2304.8199026862358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967719.3489583333,
            "unit": "ns",
            "range": "± 5193.054809246371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641055.8035714285,
            "unit": "ns",
            "range": "± 705.5040700752603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571289.7181919643,
            "unit": "ns",
            "range": "± 658.5662158562352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2221519.230769231,
            "unit": "ns",
            "range": "± 90198.0610166393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3346000,
            "unit": "ns",
            "range": "± 57564.00061380955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15466353.333333334,
            "unit": "ns",
            "range": "± 159911.99752482912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4083255.263157895,
            "unit": "ns",
            "range": "± 139198.168474609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17413818.75,
            "unit": "ns",
            "range": "± 321529.37080718874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 123656.71641791044,
            "unit": "ns",
            "range": "± 5863.34850758447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 125032.95454545454,
            "unit": "ns",
            "range": "± 6560.57051049659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 100761.90476190476,
            "unit": "ns",
            "range": "± 3631.095539913095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7477383.333333333,
            "unit": "ns",
            "range": "± 53988.115976265246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6053550,
            "unit": "ns",
            "range": "± 50647.27699162776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10997.894736842105,
            "unit": "ns",
            "range": "± 1545.9610346695952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 32227.659574468085,
            "unit": "ns",
            "range": "± 4351.749228210413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23956.25,
            "unit": "ns",
            "range": "± 943.4897309141343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63262.06896551724,
            "unit": "ns",
            "range": "± 8658.296752037968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2633.3333333333335,
            "unit": "ns",
            "range": "± 546.3113950402986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10614.130434782608,
            "unit": "ns",
            "range": "± 1272.2379279982072"
          }
        ]
      }
    ]
  }
}