window.BENCHMARK_DATA = {
  "lastUpdate": 1681801840926,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "796b0894b2912da9b4a59a4a400736175a076266",
          "message": "Version bump",
          "timestamp": "2023-04-18T15:46:02+09:00",
          "tree_id": "13c2e25096d4f2be554b279a8e7f29bb999bbc3c",
          "url": "https://github.com/planetarium/libplanet/commit/796b0894b2912da9b4a59a4a400736175a076266"
        },
        "date": 1681801582353,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8901651.533333333,
            "unit": "ns",
            "range": "± 117038.68993924718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22109827.076923076,
            "unit": "ns",
            "range": "± 266290.8637178094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55692170.44444445,
            "unit": "ns",
            "range": "± 1117363.2070792418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112244791.26666667,
            "unit": "ns",
            "range": "± 1603664.1627018005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225243886.65,
            "unit": "ns",
            "range": "± 4971253.725619729"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66558.30107526881,
            "unit": "ns",
            "range": "± 6299.0221649439645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 450866.3728813559,
            "unit": "ns",
            "range": "± 18280.055841892285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366967.1721311475,
            "unit": "ns",
            "range": "± 16476.3155870493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316009.6,
            "unit": "ns",
            "range": "± 10289.676943422472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6473262.576923077,
            "unit": "ns",
            "range": "± 78566.70863822405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4600862.5,
            "unit": "ns",
            "range": "± 71070.51170876325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20594.926315789475,
            "unit": "ns",
            "range": "± 1545.895156515606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98418.73404255319,
            "unit": "ns",
            "range": "± 6265.322194644073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91936.5,
            "unit": "ns",
            "range": "± 5012.513994112782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 246775.90721649484,
            "unit": "ns",
            "range": "± 21890.240238746846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6071.515789473684,
            "unit": "ns",
            "range": "± 574.9068724429052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19544.425531914894,
            "unit": "ns",
            "range": "± 1533.8825797916943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1772257.9382022473,
            "unit": "ns",
            "range": "± 241323.03156138296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3482231.215909091,
            "unit": "ns",
            "range": "± 211308.79891871536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3007364.81443299,
            "unit": "ns",
            "range": "± 352696.8426296197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8003499.819148936,
            "unit": "ns",
            "range": "± 516635.8799089863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3807942.892307692,
            "unit": "ns",
            "range": "± 177232.799544406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4033284.2,
            "unit": "ns",
            "range": "± 61136.38338665447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5752816.75,
            "unit": "ns",
            "range": "± 162191.58498599278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5076293.515625,
            "unit": "ns",
            "range": "± 232146.86076247672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9400848.5,
            "unit": "ns",
            "range": "± 273530.67458683415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7148700.868389423,
            "unit": "ns",
            "range": "± 53766.511623406266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2198021.5563616073,
            "unit": "ns",
            "range": "± 12913.2907047359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1464041.8265625,
            "unit": "ns",
            "range": "± 12800.367307577822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3081716.544228831,
            "unit": "ns",
            "range": "± 93075.82412176432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045299.6596137153,
            "unit": "ns",
            "range": "± 21541.70829845118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 957425.4429036458,
            "unit": "ns",
            "range": "± 7833.840631463859"
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
          "id": "23fa5406ecce3a4959fc38701c795682c8fbcadc",
          "message": "Merge pull request #3097 from dahlia/1.0-maintenance\n\nRelease 1.0.0",
          "timestamp": "2023-04-18T15:39:29+09:00",
          "tree_id": "244d53aa04947b63072d6989e3d8373876b569bc",
          "url": "https://github.com/planetarium/libplanet/commit/23fa5406ecce3a4959fc38701c795682c8fbcadc"
        },
        "date": 1681801779164,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8556429.105263159,
            "unit": "ns",
            "range": "± 290684.60909793805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21376773.647058822,
            "unit": "ns",
            "range": "± 392348.4511347887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 82416820.7113402,
            "unit": "ns",
            "range": "± 29661216.193371177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146893080.5319149,
            "unit": "ns",
            "range": "± 43911189.147515334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300449755.4456522,
            "unit": "ns",
            "range": "± 69784570.99582824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82100.93956043955,
            "unit": "ns",
            "range": "± 11889.148763294657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 445813.1724137931,
            "unit": "ns",
            "range": "± 50589.22908738554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 362720.5617977528,
            "unit": "ns",
            "range": "± 30697.830037300337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 358483.08510638296,
            "unit": "ns",
            "range": "± 40904.2358112764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6048580.726804123,
            "unit": "ns",
            "range": "± 529084.5916519106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4493028.302083333,
            "unit": "ns",
            "range": "± 459066.6402957801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27726.543478260868,
            "unit": "ns",
            "range": "± 5386.888348110804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113273.77083333333,
            "unit": "ns",
            "range": "± 22221.312742727136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116733.63541666667,
            "unit": "ns",
            "range": "± 18756.171387247054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 272684.3548387097,
            "unit": "ns",
            "range": "± 25109.915890654916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11405.229166666666,
            "unit": "ns",
            "range": "± 1611.417757453072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25581.263440860213,
            "unit": "ns",
            "range": "± 5895.590880881735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2061167.4421052632,
            "unit": "ns",
            "range": "± 575635.6159683577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3588052.2386363638,
            "unit": "ns",
            "range": "± 426874.78684082784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3405854.435483871,
            "unit": "ns",
            "range": "± 715256.6632600254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9807160.085106382,
            "unit": "ns",
            "range": "± 3246645.4945862168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4462895.465909091,
            "unit": "ns",
            "range": "± 1647571.7134170795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4260155.2272727275,
            "unit": "ns",
            "range": "± 1033784.8795002074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5037585.188888889,
            "unit": "ns",
            "range": "± 481669.3937477018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5944405.034090909,
            "unit": "ns",
            "range": "± 1126392.6668202453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9400924.747191012,
            "unit": "ns",
            "range": "± 1089989.3706923798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7337353.488372093,
            "unit": "ns",
            "range": "± 268538.2467789342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2158473.13986171,
            "unit": "ns",
            "range": "± 145021.1905829449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367905.149116848,
            "unit": "ns",
            "range": "± 32860.755444362745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3132120.341187836,
            "unit": "ns",
            "range": "± 245112.73689413472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 959802.0849095394,
            "unit": "ns",
            "range": "± 19342.305131745263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 825212.3553528866,
            "unit": "ns",
            "range": "± 35125.94767682968"
          }
        ]
      }
    ]
  }
}