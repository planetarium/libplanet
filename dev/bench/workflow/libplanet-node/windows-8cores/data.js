window.BENCHMARK_DATA = {
  "lastUpdate": 1736995787593,
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
          "id": "7696284b6c1d71e81f6ec55c381a9001255f9da4",
          "message": "docs: update docs and workflows required for Libplanet.Node",
          "timestamp": "2025-01-16T11:31:02+09:00",
          "tree_id": "37c19a5175dffd6e72760d54aed179d03f9dab44",
          "url": "https://github.com/planetarium/libplanet/commit/7696284b6c1d71e81f6ec55c381a9001255f9da4"
        },
        "date": 1736995350854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3104000,
            "unit": "ns",
            "range": "± 71397.00273821024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1561281.8181818181,
            "unit": "ns",
            "range": "± 150301.00950667358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4264223.076923077,
            "unit": "ns",
            "range": "± 116712.59506220333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6027384.2465753425,
            "unit": "ns",
            "range": "± 267746.67090947187"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23055.434782608696,
            "unit": "ns",
            "range": "± 2563.0666783948004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9339366.666666666,
            "unit": "ns",
            "range": "± 76336.66659388963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22315546.666666668,
            "unit": "ns",
            "range": "± 274601.59677682316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46598076,
            "unit": "ns",
            "range": "± 250642.524790454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93579730.76923077,
            "unit": "ns",
            "range": "± 133448.52556082804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184251360,
            "unit": "ns",
            "range": "± 502151.90473458474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4086590.5208333335,
            "unit": "ns",
            "range": "± 9374.578905473458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 904796.9466145834,
            "unit": "ns",
            "range": "± 4628.232523165671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724473.80859375,
            "unit": "ns",
            "range": "± 6409.660752392341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635161.0677083333,
            "unit": "ns",
            "range": "± 32756.340749481813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 438510.8138020833,
            "unit": "ns",
            "range": "± 1976.0627392955394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 406515.29715401784,
            "unit": "ns",
            "range": "± 875.7228425695214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2202842.1052631577,
            "unit": "ns",
            "range": "± 36582.13461649573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2780541.1764705884,
            "unit": "ns",
            "range": "± 37117.82016133776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2169346.5517241377,
            "unit": "ns",
            "range": "± 95174.11046965588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2932543.3333333335,
            "unit": "ns",
            "range": "± 37895.63613524964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2508748,
            "unit": "ns",
            "range": "± 100542.46232618458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101325.26315789473,
            "unit": "ns",
            "range": "± 37789.64726071925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178894.73684210525,
            "unit": "ns",
            "range": "± 80505.34588886214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 113453.125,
            "unit": "ns",
            "range": "± 5214.20431008429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2189450,
            "unit": "ns",
            "range": "± 75270.67997007795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2142817.6470588236,
            "unit": "ns",
            "range": "± 42813.87385086343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10964.772727272728,
            "unit": "ns",
            "range": "± 3842.8329998836502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52212.64367816092,
            "unit": "ns",
            "range": "± 13100.291179061998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36811.11111111111,
            "unit": "ns",
            "range": "± 1015.7730414786917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61882.65306122449,
            "unit": "ns",
            "range": "± 23370.145840367415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2932.6530612244896,
            "unit": "ns",
            "range": "± 811.6135780296426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10024.70588235294,
            "unit": "ns",
            "range": "± 3581.330754341016"
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
          "id": "5dedafdca6b8f0466605f382bacbc60d27347c31",
          "message": "docs: update docs and workflows required for Libplanet.Node",
          "timestamp": "2025-01-16T11:33:18+09:00",
          "tree_id": "f7764111adeef0737a3565632b4401b3d6cb1711",
          "url": "https://github.com/planetarium/libplanet/commit/5dedafdca6b8f0466605f382bacbc60d27347c31"
        },
        "date": 1736995531074,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3192686.3636363638,
            "unit": "ns",
            "range": "± 74921.63712811346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5821927.2727272725,
            "unit": "ns",
            "range": "± 128243.28509968922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4501902.94117647,
            "unit": "ns",
            "range": "± 142250.88056455177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5988981.944444444,
            "unit": "ns",
            "range": "± 277965.34403825726"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22508.219178082192,
            "unit": "ns",
            "range": "± 1087.1411827788327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9650535.714285715,
            "unit": "ns",
            "range": "± 116944.88252784108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22571216.666666668,
            "unit": "ns",
            "range": "± 421276.60012101766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49762633.333333336,
            "unit": "ns",
            "range": "± 839339.9378877031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94815369.23076923,
            "unit": "ns",
            "range": "± 610939.9607498478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194346961.53846154,
            "unit": "ns",
            "range": "± 962311.2901918845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4088999.21875,
            "unit": "ns",
            "range": "± 13606.761303112407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918377.7994791666,
            "unit": "ns",
            "range": "± 4687.889781864657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725929.3317522322,
            "unit": "ns",
            "range": "± 2712.0592690570447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1767462.4302455357,
            "unit": "ns",
            "range": "± 6372.396491387836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 454523.2454427083,
            "unit": "ns",
            "range": "± 2234.351305647655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 416125.16741071426,
            "unit": "ns",
            "range": "± 910.5172809810082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2473871.4285714286,
            "unit": "ns",
            "range": "± 41783.736780482664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2784130,
            "unit": "ns",
            "range": "± 63569.08467420142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4125607.1428571427,
            "unit": "ns",
            "range": "± 46616.56134045915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2917207.1428571427,
            "unit": "ns",
            "range": "± 42583.84425118042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2517727.272727273,
            "unit": "ns",
            "range": "± 52631.295522704626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99934.52380952382,
            "unit": "ns",
            "range": "± 22225.181062580494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 149948.14814814815,
            "unit": "ns",
            "range": "± 21155.833185619937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 122432.63157894737,
            "unit": "ns",
            "range": "± 8613.63888934366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2283011.5384615385,
            "unit": "ns",
            "range": "± 53800.38904634855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2179430,
            "unit": "ns",
            "range": "± 48163.95354466482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12303.529411764706,
            "unit": "ns",
            "range": "± 3211.862204941148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55482.558139534885,
            "unit": "ns",
            "range": "± 13016.037093302517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38054.545454545456,
            "unit": "ns",
            "range": "± 2565.774248090235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71991.23711340207,
            "unit": "ns",
            "range": "± 28644.603013254375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3543.75,
            "unit": "ns",
            "range": "± 1161.0170224056965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12986.363636363636,
            "unit": "ns",
            "range": "± 4033.314766315633"
          }
        ]
      }
    ]
  }
}