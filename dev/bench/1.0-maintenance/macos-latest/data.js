window.BENCHMARK_DATA = {
  "lastUpdate": 1683022320168,
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
          "id": "7bf8a0695ce9422632af9828a170541ef06ceabb",
          "message": "Merge pull request #3125 from limebell/bugfix/update-txexecution\n\nUpdate txexecution",
          "timestamp": "2023-05-02T16:21:36+09:00",
          "tree_id": "8c8ab7108b72b7412ea85d30fed2371a53078f35",
          "url": "https://github.com/planetarium/libplanet/commit/7bf8a0695ce9422632af9828a170541ef06ceabb"
        },
        "date": 1683013578635,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11369156.8,
            "unit": "ns",
            "range": "± 4563355.0009020185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24105152.46551724,
            "unit": "ns",
            "range": "± 4072625.4896269096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66331303.661290325,
            "unit": "ns",
            "range": "± 16514638.715485342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 155011329.81914893,
            "unit": "ns",
            "range": "± 42772556.9277623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290584264.0425532,
            "unit": "ns",
            "range": "± 51296542.64084545"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79259.20930232559,
            "unit": "ns",
            "range": "± 7923.60608801511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 445571.81052631576,
            "unit": "ns",
            "range": "± 56589.34422104547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348563.89247311826,
            "unit": "ns",
            "range": "± 42822.68114345948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339633.7528089888,
            "unit": "ns",
            "range": "± 25848.48349705052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6029094.41,
            "unit": "ns",
            "range": "± 470884.9962202185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4168827.876344086,
            "unit": "ns",
            "range": "± 270633.96754070657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24068.39010989011,
            "unit": "ns",
            "range": "± 4632.2232014217525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122836.25,
            "unit": "ns",
            "range": "± 22603.91342740271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124958.68478260869,
            "unit": "ns",
            "range": "± 18882.647327278006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 276037.9655172414,
            "unit": "ns",
            "range": "± 37830.8230275348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10034.659574468085,
            "unit": "ns",
            "range": "± 1465.2059457664968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26166.68181818182,
            "unit": "ns",
            "range": "± 4279.410821369739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1974565.742105263,
            "unit": "ns",
            "range": "± 361331.2593134696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3653205.3586956523,
            "unit": "ns",
            "range": "± 486611.5033770697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2871081.9569892474,
            "unit": "ns",
            "range": "± 398995.64596373716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9722849.79213483,
            "unit": "ns",
            "range": "± 2440624.3969735918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3616791.175257732,
            "unit": "ns",
            "range": "± 393183.6044365917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3674873.577777778,
            "unit": "ns",
            "range": "± 312423.165556308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5013684.617977528,
            "unit": "ns",
            "range": "± 559420.5687235374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4967457,
            "unit": "ns",
            "range": "± 674508.2506803402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9902851.39010989,
            "unit": "ns",
            "range": "± 1870868.98243833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9619538.440560566,
            "unit": "ns",
            "range": "± 1714976.1790800777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2485994.7488715276,
            "unit": "ns",
            "range": "± 377875.39014598366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1617759.0651614012,
            "unit": "ns",
            "range": "± 89846.7377921326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3605645.609453914,
            "unit": "ns",
            "range": "± 290016.532139109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045165.431443118,
            "unit": "ns",
            "range": "± 57299.18301159347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 897931.6203642696,
            "unit": "ns",
            "range": "± 47586.60727890186"
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
          "id": "7b23f9440cba2c4f2e9aaa9b756629b3c1fbb82b",
          "message": "Merge pull request #3128 from planetarium/test/append\n\nAdd regression test for appending hotfix",
          "timestamp": "2023-05-02T18:51:32+09:00",
          "tree_id": "80e52a1d741b1034963b30010e8348315e3c6ef1",
          "url": "https://github.com/planetarium/libplanet/commit/7b23f9440cba2c4f2e9aaa9b756629b3c1fbb82b"
        },
        "date": 1683022245798,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8749188.195652174,
            "unit": "ns",
            "range": "± 218050.6769980599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21527119,
            "unit": "ns",
            "range": "± 642976.2561804634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52752980.048780486,
            "unit": "ns",
            "range": "± 1832708.4712488365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113958415.3235294,
            "unit": "ns",
            "range": "± 2192901.8955709757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232960706.9262295,
            "unit": "ns",
            "range": "± 9728345.26155682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73604.05555555556,
            "unit": "ns",
            "range": "± 13004.272006036757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 425807.33684210526,
            "unit": "ns",
            "range": "± 47109.04404577328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333338.22340425535,
            "unit": "ns",
            "range": "± 26059.32521063093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344450.097826087,
            "unit": "ns",
            "range": "± 31345.093601749104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5536260.071428572,
            "unit": "ns",
            "range": "± 73724.67453298459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4038990.3529411764,
            "unit": "ns",
            "range": "± 81214.86307855014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26761.81443298969,
            "unit": "ns",
            "range": "± 4612.442312940747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108181.52061855671,
            "unit": "ns",
            "range": "± 17961.044243943717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128304.06185567011,
            "unit": "ns",
            "range": "± 13175.784380362358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 276382.06701030926,
            "unit": "ns",
            "range": "± 31477.040761848428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8981.469387755102,
            "unit": "ns",
            "range": "± 1352.015177536977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23348.2,
            "unit": "ns",
            "range": "± 5681.722447481289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1705738.4505494505,
            "unit": "ns",
            "range": "± 167965.28323980546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3456400.4896907215,
            "unit": "ns",
            "range": "± 269053.3584547518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2753245.224719101,
            "unit": "ns",
            "range": "± 257933.63627195207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7637139.483516484,
            "unit": "ns",
            "range": "± 605838.5664679138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3461019.6931818184,
            "unit": "ns",
            "range": "± 229791.81325064588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3714565.8804347827,
            "unit": "ns",
            "range": "± 243989.81541151667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4862165.868131869,
            "unit": "ns",
            "range": "± 288268.83619146625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4785116.388888889,
            "unit": "ns",
            "range": "± 298492.7983825411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8969583.880434783,
            "unit": "ns",
            "range": "± 623080.3097342638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7049847.554108797,
            "unit": "ns",
            "range": "± 297185.06634394027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2142045.1104657063,
            "unit": "ns",
            "range": "± 109677.61500840828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355119.912388393,
            "unit": "ns",
            "range": "± 22652.38297560876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2788771.0256177327,
            "unit": "ns",
            "range": "± 150819.28583502714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 905328.0680989583,
            "unit": "ns",
            "range": "± 16811.840240875936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766751.7994921874,
            "unit": "ns",
            "range": "± 20018.470191952787"
          }
        ]
      }
    ]
  }
}