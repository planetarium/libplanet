window.BENCHMARK_DATA = {
  "lastUpdate": 1678691467925,
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
      }
    ]
  }
}