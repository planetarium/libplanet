window.BENCHMARK_DATA = {
  "lastUpdate": 1720677058059,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "0aed441cf58de2985591b89fab2711052c49a4bf",
          "message": "add tracing example",
          "timestamp": "2024-07-11T12:35:53+09:00",
          "tree_id": "9bcc60c7c037fb69c211b1c487672d2bbc1a8b2d",
          "url": "https://github.com/planetarium/libplanet/commit/0aed441cf58de2985591b89fab2711052c49a4bf"
        },
        "date": 1720669466223,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3622953.315204327,
            "unit": "ns",
            "range": "± 5895.52569196847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206002.1330729167,
            "unit": "ns",
            "range": "± 4065.1907190006673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760107.4483816965,
            "unit": "ns",
            "range": "± 656.905689268324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971650.3995535714,
            "unit": "ns",
            "range": "± 1635.8453950078479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620354.2647879465,
            "unit": "ns",
            "range": "± 765.711803770051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585696.6641927083,
            "unit": "ns",
            "range": "± 1028.3640589635784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2382453.769230769,
            "unit": "ns",
            "range": "± 79175.28874275088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2500747.867647059,
            "unit": "ns",
            "range": "± 118351.51549905272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3111676.037037037,
            "unit": "ns",
            "range": "± 85915.67333168632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2609091.882352941,
            "unit": "ns",
            "range": "± 41439.58113609854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3295494.6428571427,
            "unit": "ns",
            "range": "± 36562.85799899872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1043265.1546391753,
            "unit": "ns",
            "range": "± 105395.11851859532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1943231.1666666667,
            "unit": "ns",
            "range": "± 70928.8951563007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1683606.375,
            "unit": "ns",
            "range": "± 95418.22913295579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8267591.115384615,
            "unit": "ns",
            "range": "± 225678.39191487996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198886.53225806452,
            "unit": "ns",
            "range": "± 9030.481999222779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192322.71929824562,
            "unit": "ns",
            "range": "± 6184.48093662789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169077.86363636365,
            "unit": "ns",
            "range": "± 3057.3530926113904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3153176.9285714286,
            "unit": "ns",
            "range": "± 13490.75198602182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2759467.566666667,
            "unit": "ns",
            "range": "± 48362.389541972836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12665.016129032258,
            "unit": "ns",
            "range": "± 981.3153064715171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61242.427083333336,
            "unit": "ns",
            "range": "± 5365.193495789203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70029.42,
            "unit": "ns",
            "range": "± 19144.96769451018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59317.17346938775,
            "unit": "ns",
            "range": "± 11887.574492509353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2916.7738095238096,
            "unit": "ns",
            "range": "± 324.46635896649644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12707.354166666666,
            "unit": "ns",
            "range": "± 1486.3670792567514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5826627.076923077,
            "unit": "ns",
            "range": "± 29788.13313626065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14601022.4,
            "unit": "ns",
            "range": "± 132955.6720999253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37265680.46666667,
            "unit": "ns",
            "range": "± 251224.84084207081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75846569.93333334,
            "unit": "ns",
            "range": "± 612358.5332135865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151067280.7142857,
            "unit": "ns",
            "range": "± 665081.5960857942"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38282.857142857145,
            "unit": "ns",
            "range": "± 437.9555399182147"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "166b45e9cb25bd7b903e8a689bdae2c3d9d0b9f9",
          "message": "Revert \"Added cached migration\"\n\nThis reverts commit 0008aa83d582df1c830f8aa758a253dd8db443b0.",
          "timestamp": "2024-07-11T14:32:59+09:00",
          "tree_id": "9b1a8fcb7d9de0e39e543216925491d449429c82",
          "url": "https://github.com/planetarium/libplanet/commit/166b45e9cb25bd7b903e8a689bdae2c3d9d0b9f9"
        },
        "date": 1720677032459,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3794221.2421875,
            "unit": "ns",
            "range": "± 22287.151967675378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1225517.0321614584,
            "unit": "ns",
            "range": "± 1410.942379779025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760333.5001953125,
            "unit": "ns",
            "range": "± 1441.3568842814427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966768.3517127405,
            "unit": "ns",
            "range": "± 2056.1610072553667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621360.1337890625,
            "unit": "ns",
            "range": "± 1354.2739311429607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580004.019140625,
            "unit": "ns",
            "range": "± 887.7612625495109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2565235.466666667,
            "unit": "ns",
            "range": "± 47815.20592547143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2690862.6818181816,
            "unit": "ns",
            "range": "± 65060.793508574476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3177756.714285714,
            "unit": "ns",
            "range": "± 35823.70359708901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2738690.4,
            "unit": "ns",
            "range": "± 54512.71805097654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3353078,
            "unit": "ns",
            "range": "± 38431.34118188515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1146637.625,
            "unit": "ns",
            "range": "± 117805.66999510142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2084143.1206896552,
            "unit": "ns",
            "range": "± 90289.97479059862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1883231.6262626264,
            "unit": "ns",
            "range": "± 190710.04447887486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8396353.529411765,
            "unit": "ns",
            "range": "± 142048.07364503294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244783.88095238095,
            "unit": "ns",
            "range": "± 8534.578513325432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235699.85185185185,
            "unit": "ns",
            "range": "± 6491.859350244876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187747.2951807229,
            "unit": "ns",
            "range": "± 9734.048584621989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3242792.7,
            "unit": "ns",
            "range": "± 42259.7471802998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2959051.769230769,
            "unit": "ns",
            "range": "± 23450.52429461456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22096.879120879123,
            "unit": "ns",
            "range": "± 1910.4702611030662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101552.72093023256,
            "unit": "ns",
            "range": "± 6317.813107120054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94237.62962962964,
            "unit": "ns",
            "range": "± 2568.5533214714787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99830.03684210527,
            "unit": "ns",
            "range": "± 9498.550973264992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6669.744897959184,
            "unit": "ns",
            "range": "± 562.6960746232207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20541.54938271605,
            "unit": "ns",
            "range": "± 1094.3072569122733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6049315.933333334,
            "unit": "ns",
            "range": "± 46849.369598543715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15271373.833333334,
            "unit": "ns",
            "range": "± 62045.429240731886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37017897.766666666,
            "unit": "ns",
            "range": "± 125238.51708153107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77037004.76666667,
            "unit": "ns",
            "range": "± 222489.80401019557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152112050.66666666,
            "unit": "ns",
            "range": "± 544780.3794085501"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44620.90404040404,
            "unit": "ns",
            "range": "± 6695.255831662602"
          }
        ]
      }
    ]
  }
}