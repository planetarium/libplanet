window.BENCHMARK_DATA = {
  "lastUpdate": 1714474262315,
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
          "id": "3f15fa48f9f57536b050c7443c2247627f30ee76",
          "message": "feat: add dpos related features",
          "timestamp": "2024-03-21T19:07:13+09:00",
          "tree_id": "9951d77e8b5a62bf4d33a34cdbb2c476c8268a10",
          "url": "https://github.com/planetarium/libplanet/commit/3f15fa48f9f57536b050c7443c2247627f30ee76"
        },
        "date": 1711016205526,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960708.1632653062,
            "unit": "ns",
            "range": "± 101619.31656769007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1688823.076923077,
            "unit": "ns",
            "range": "± 50531.51940562737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1493093.4343434344,
            "unit": "ns",
            "range": "± 146697.48697930758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6909748.148148148,
            "unit": "ns",
            "range": "± 363538.06544539146"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33847.5,
            "unit": "ns",
            "range": "± 1559.8583999351035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5062330.769230769,
            "unit": "ns",
            "range": "± 19908.473263721346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12763386.666666666,
            "unit": "ns",
            "range": "± 229743.40614404294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31723300,
            "unit": "ns",
            "range": "± 304085.9136118325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64739753.333333336,
            "unit": "ns",
            "range": "± 401769.567692489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128446056.25,
            "unit": "ns",
            "range": "± 2493011.295593811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3326049.765625,
            "unit": "ns",
            "range": "± 9446.541703459721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062157.34375,
            "unit": "ns",
            "range": "± 1233.5555695527162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733284.5768229166,
            "unit": "ns",
            "range": "± 2190.7760454439713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951387.03125,
            "unit": "ns",
            "range": "± 4582.445652939514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611372.4869791666,
            "unit": "ns",
            "range": "± 1017.9035461352305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554782.4986049107,
            "unit": "ns",
            "range": "± 1140.294907798735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2113434.88372093,
            "unit": "ns",
            "range": "± 64672.9018240507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278746.5517241377,
            "unit": "ns",
            "range": "± 99806.59580833402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2840761.5384615385,
            "unit": "ns",
            "range": "± 31907.014340150414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2831269.8113207547,
            "unit": "ns",
            "range": "± 109749.35357248853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7944006.557377049,
            "unit": "ns",
            "range": "± 355333.85750532907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173381.4814814815,
            "unit": "ns",
            "range": "± 9049.269460999476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166427.16049382716,
            "unit": "ns",
            "range": "± 8676.577844197545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149597.14285714287,
            "unit": "ns",
            "range": "± 4891.1375865698465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2863013.3333333335,
            "unit": "ns",
            "range": "± 32458.344000242763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2470140,
            "unit": "ns",
            "range": "± 34244.32799749471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9663.333333333334,
            "unit": "ns",
            "range": "± 839.2680063703453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51076.59574468085,
            "unit": "ns",
            "range": "± 4494.4751157396795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43995,
            "unit": "ns",
            "range": "± 1292.1756648064336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48701.063829787236,
            "unit": "ns",
            "range": "± 7992.866371621112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2479.896907216495,
            "unit": "ns",
            "range": "± 407.5242703543374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9515.95744680851,
            "unit": "ns",
            "range": "± 1048.3272073420712"
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
          "id": "1398e6bb177dda739d30043165ac072ef33dbaf5",
          "message": "Merge pull request #3730 from limebell/feature/update-validatorset\n\nIntroduce `IAccount.SetValidatorSet()` method",
          "timestamp": "2024-04-05T15:35:18+09:00",
          "tree_id": "0f53133435a83c0ce427c2b033a2618f06fc709f",
          "url": "https://github.com/planetarium/libplanet/commit/1398e6bb177dda739d30043165ac072ef33dbaf5"
        },
        "date": 1712299457297,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973299,
            "unit": "ns",
            "range": "± 109472.55963080982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1675895.3488372094,
            "unit": "ns",
            "range": "± 61833.751584344805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1475827.3684210526,
            "unit": "ns",
            "range": "± 122276.52863803043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6690482.142857143,
            "unit": "ns",
            "range": "± 182768.36798521463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36451.063829787236,
            "unit": "ns",
            "range": "± 5804.517052342572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5322969.230769231,
            "unit": "ns",
            "range": "± 12655.524789288973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13141733.333333334,
            "unit": "ns",
            "range": "± 97477.65067415392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31913760,
            "unit": "ns",
            "range": "± 211628.81183808597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64568716.666666664,
            "unit": "ns",
            "range": "± 329160.3553343104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129095013.33333333,
            "unit": "ns",
            "range": "± 676055.2902860901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3382673.465401786,
            "unit": "ns",
            "range": "± 33865.05591304618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075360.078125,
            "unit": "ns",
            "range": "± 6167.859326760686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736318.5616629465,
            "unit": "ns",
            "range": "± 1551.6976652883268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931417.5362723214,
            "unit": "ns",
            "range": "± 3454.1074010807138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600962.3046875,
            "unit": "ns",
            "range": "± 1850.1934616542644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559036.6927083334,
            "unit": "ns",
            "range": "± 1758.366146405637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2180070,
            "unit": "ns",
            "range": "± 105773.93907955682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2345535.714285714,
            "unit": "ns",
            "range": "± 65908.60234016394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2827150,
            "unit": "ns",
            "range": "± 40795.24387814005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2852547.76119403,
            "unit": "ns",
            "range": "± 126673.60629898633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7875727.027027027,
            "unit": "ns",
            "range": "± 200692.09646267237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180977.02702702704,
            "unit": "ns",
            "range": "± 9058.490262448591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166953.42465753425,
            "unit": "ns",
            "range": "± 8232.204413018235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143990.9090909091,
            "unit": "ns",
            "range": "± 3470.097993800764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2933746.6666666665,
            "unit": "ns",
            "range": "± 37433.53856535353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2464207.6923076925,
            "unit": "ns",
            "range": "± 21625.350152789877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9996.808510638299,
            "unit": "ns",
            "range": "± 1068.6593075558342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52355.31914893617,
            "unit": "ns",
            "range": "± 4385.940808853804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43506.25,
            "unit": "ns",
            "range": "± 993.8317830011404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54056.12244897959,
            "unit": "ns",
            "range": "± 10382.69839910162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2111.2244897959185,
            "unit": "ns",
            "range": "± 418.11621061570185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9568.181818181818,
            "unit": "ns",
            "range": "± 872.6423678657582"
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
          "id": "16202678becba39ba2b2a9f8023f3e4d8872eee3",
          "message": "Merge pull request #3737 from limebell/feature/vote-power\n\nImplement Vote Power",
          "timestamp": "2024-04-16T12:51:53+09:00",
          "tree_id": "d6b3dbf6d76cec814d39b7b9f4e53f6796831e4a",
          "url": "https://github.com/planetarium/libplanet/commit/16202678becba39ba2b2a9f8023f3e4d8872eee3"
        },
        "date": 1713240122653,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027378,
            "unit": "ns",
            "range": "± 113543.84689483076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1822157.6923076923,
            "unit": "ns",
            "range": "± 48949.11785171964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1554446.0526315789,
            "unit": "ns",
            "range": "± 78491.59520320542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6983938.596491228,
            "unit": "ns",
            "range": "± 302275.441889386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36712.08791208791,
            "unit": "ns",
            "range": "± 4076.050244070305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10528700,
            "unit": "ns",
            "range": "± 197392.17140842575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25014178.57142857,
            "unit": "ns",
            "range": "± 200531.12238242733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62728306.666666664,
            "unit": "ns",
            "range": "± 528034.6044757005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125641880,
            "unit": "ns",
            "range": "± 973694.8019931972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252547370,
            "unit": "ns",
            "range": "± 1684877.6226013736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3331853.0048076925,
            "unit": "ns",
            "range": "± 3574.711847619801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083902.0442708333,
            "unit": "ns",
            "range": "± 2066.2148869303865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744497.0442708334,
            "unit": "ns",
            "range": "± 1807.8862631126328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939766.30859375,
            "unit": "ns",
            "range": "± 1491.238272242826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615235.2734375,
            "unit": "ns",
            "range": "± 1185.5067288448597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577389.8018973215,
            "unit": "ns",
            "range": "± 1735.807043793708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2234955.5555555555,
            "unit": "ns",
            "range": "± 52393.82915318686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2444520.512820513,
            "unit": "ns",
            "range": "± 80447.40085915301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2875140,
            "unit": "ns",
            "range": "± 48215.83616554687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2958498.936170213,
            "unit": "ns",
            "range": "± 114540.48434152656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7935679.0322580645,
            "unit": "ns",
            "range": "± 206793.43347657888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189283.05084745763,
            "unit": "ns",
            "range": "± 7924.191518477319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178130.64516129033,
            "unit": "ns",
            "range": "± 8069.545840302705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146376.59574468085,
            "unit": "ns",
            "range": "± 5630.901262557989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2797040,
            "unit": "ns",
            "range": "± 30295.84601416976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2560821.4285714286,
            "unit": "ns",
            "range": "± 31613.682008109878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12214.606741573034,
            "unit": "ns",
            "range": "± 1140.130630653363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60027.17391304348,
            "unit": "ns",
            "range": "± 5421.469393716459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48169.230769230766,
            "unit": "ns",
            "range": "± 2480.223476122362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64762.5,
            "unit": "ns",
            "range": "± 9550.71535504558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3237.5,
            "unit": "ns",
            "range": "± 514.4746937666768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12415.463917525773,
            "unit": "ns",
            "range": "± 1983.2286495229594"
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
          "id": "5cbb2c630450c32c5f72d0be59b4fd8cc4f6be3b",
          "message": "Merge pull request #3748 from limebell/feature/tx-action\n\nIntroduce Transaction-Actions",
          "timestamp": "2024-04-18T12:05:12+09:00",
          "tree_id": "91f4afc7c986219bc488d50bdb27fa41c2100f5e",
          "url": "https://github.com/planetarium/libplanet/commit/5cbb2c630450c32c5f72d0be59b4fd8cc4f6be3b"
        },
        "date": 1713410103293,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 941859,
            "unit": "ns",
            "range": "± 81195.06639612229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1735949.2063492064,
            "unit": "ns",
            "range": "± 79328.51635713651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1449431.5217391304,
            "unit": "ns",
            "range": "± 93657.22507445901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6787091.176470588,
            "unit": "ns",
            "range": "± 215469.41337833606"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34067.07317073171,
            "unit": "ns",
            "range": "± 1679.436624971599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10135385.714285715,
            "unit": "ns",
            "range": "± 134950.49723249153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23908613.333333332,
            "unit": "ns",
            "range": "± 276616.8878912975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59187426.666666664,
            "unit": "ns",
            "range": "± 528347.9933672864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120546514.28571428,
            "unit": "ns",
            "range": "± 502201.1960546104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246742140,
            "unit": "ns",
            "range": "± 1430817.8938734906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3306311.4453125,
            "unit": "ns",
            "range": "± 9411.334118328994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055792.65625,
            "unit": "ns",
            "range": "± 2896.4564794768603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730846.3797433035,
            "unit": "ns",
            "range": "± 1112.3630162158092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1901603.6658653845,
            "unit": "ns",
            "range": "± 1531.8232643272838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627625.6208147322,
            "unit": "ns",
            "range": "± 683.0133026825606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565241.3295200893,
            "unit": "ns",
            "range": "± 770.1729332940648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185943.75,
            "unit": "ns",
            "range": "± 42295.32627844358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2212825,
            "unit": "ns",
            "range": "± 98562.76263359353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2810006.6666666665,
            "unit": "ns",
            "range": "± 49496.038321504166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2765516.4383561644,
            "unit": "ns",
            "range": "± 137542.45608548436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8032222.0930232555,
            "unit": "ns",
            "range": "± 435765.5228651305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173138.59649122806,
            "unit": "ns",
            "range": "± 7481.399658628746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162877.77777777778,
            "unit": "ns",
            "range": "± 7112.720192054931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143128.57142857142,
            "unit": "ns",
            "range": "± 3378.9262876160615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2805935.714285714,
            "unit": "ns",
            "range": "± 41680.73908880469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2404157.1428571427,
            "unit": "ns",
            "range": "± 27113.67705635817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9932.631578947368,
            "unit": "ns",
            "range": "± 1105.060131728967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52278.651685393255,
            "unit": "ns",
            "range": "± 3441.2098794052713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44487.234042553195,
            "unit": "ns",
            "range": "± 1716.1150540729811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51769.89247311828,
            "unit": "ns",
            "range": "± 9229.0041969095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2410.7526881720432,
            "unit": "ns",
            "range": "± 343.4044280662689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9876.344086021505,
            "unit": "ns",
            "range": "± 1293.3271761877315"
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
          "id": "2088719638c4fe35b6bbfba6e84109b0a02d98c5",
          "message": "Merge pull request #3764 from limebell/bugfix/tx-action-signer\n\nAdd BlockAction flag to ActionContext",
          "timestamp": "2024-04-23T16:21:21+09:00",
          "tree_id": "64ed9de5c55aaf37df5d6415f94a8eb84878477a",
          "url": "https://github.com/planetarium/libplanet/commit/2088719638c4fe35b6bbfba6e84109b0a02d98c5"
        },
        "date": 1713857469158,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 940250,
            "unit": "ns",
            "range": "± 81106.08459766065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1717138.888888889,
            "unit": "ns",
            "range": "± 71903.02540848391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1501827.9569892474,
            "unit": "ns",
            "range": "± 127457.02631764661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6757339.583333333,
            "unit": "ns",
            "range": "± 263485.7497374693"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36243.8202247191,
            "unit": "ns",
            "range": "± 4028.053755627235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10190280,
            "unit": "ns",
            "range": "± 115588.495473011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24081453.333333332,
            "unit": "ns",
            "range": "± 155920.53775958475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61037638.461538464,
            "unit": "ns",
            "range": "± 222913.08671939658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117745638.46153846,
            "unit": "ns",
            "range": "± 360970.7803005241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238523966.66666666,
            "unit": "ns",
            "range": "± 1034254.2328147553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3348552.3995535714,
            "unit": "ns",
            "range": "± 7177.03234622377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1084510.3255208333,
            "unit": "ns",
            "range": "± 4002.186591635952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749466.6294642857,
            "unit": "ns",
            "range": "± 1279.5781115357856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931163.8113839286,
            "unit": "ns",
            "range": "± 4779.253396222549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622136.8815104166,
            "unit": "ns",
            "range": "± 2166.8202608114148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568310.2818080357,
            "unit": "ns",
            "range": "± 1297.8558359380224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120030,
            "unit": "ns",
            "range": "± 40956.011061934034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2258791.891891892,
            "unit": "ns",
            "range": "± 75106.4443838742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2769013.3333333335,
            "unit": "ns",
            "range": "± 46054.747958530934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2781560.975609756,
            "unit": "ns",
            "range": "± 147029.68857510792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7737951.3513513515,
            "unit": "ns",
            "range": "± 210786.24061886544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179616.66666666666,
            "unit": "ns",
            "range": "± 6444.6959347246875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169666.03773584907,
            "unit": "ns",
            "range": "± 6556.498344162847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141506.25,
            "unit": "ns",
            "range": "± 2702.583640395489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2765993.3333333335,
            "unit": "ns",
            "range": "± 49113.98501251475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2447230.769230769,
            "unit": "ns",
            "range": "± 20014.13602995745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9804.651162790698,
            "unit": "ns",
            "range": "± 936.8165087137565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55411.11111111111,
            "unit": "ns",
            "range": "± 3269.176594418407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45797.82608695652,
            "unit": "ns",
            "range": "± 1705.479942933599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57336.84210526316,
            "unit": "ns",
            "range": "± 12053.268759716302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2258.1632653061224,
            "unit": "ns",
            "range": "± 463.05205990584074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10214.736842105263,
            "unit": "ns",
            "range": "± 1197.3346659775718"
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
          "id": "bed82d6dcaa24d13ecb28799a041a1fac6077075",
          "message": "Merge pull request #3762 from limebell/feature/max-gas-price\n\nAdd max gas price to `IActionContext`",
          "timestamp": "2024-04-24T12:43:32+09:00",
          "tree_id": "5551ee817ddca72946e507bb7a5a0db1876ba12b",
          "url": "https://github.com/planetarium/libplanet/commit/bed82d6dcaa24d13ecb28799a041a1fac6077075"
        },
        "date": 1713930791542,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956131.25,
            "unit": "ns",
            "range": "± 77206.74951746532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1725715.0943396227,
            "unit": "ns",
            "range": "± 71128.51693677821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1470352.6315789474,
            "unit": "ns",
            "range": "± 95378.64947102162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6833906.8965517245,
            "unit": "ns",
            "range": "± 196830.51253559405"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39814.43298969072,
            "unit": "ns",
            "range": "± 5452.082738327346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10161073.333333334,
            "unit": "ns",
            "range": "± 146453.6663281339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24381892.85714286,
            "unit": "ns",
            "range": "± 141551.841355769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59969834.615384616,
            "unit": "ns",
            "range": "± 625627.8923957832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119275385.71428572,
            "unit": "ns",
            "range": "± 1349395.4873641313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239861742.85714287,
            "unit": "ns",
            "range": "± 2299037.096001543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3374699.7596153845,
            "unit": "ns",
            "range": "± 4768.099856709398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051225.15625,
            "unit": "ns",
            "range": "± 1259.0009601346528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752378.06640625,
            "unit": "ns",
            "range": "± 2266.199842106396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941738.7109375,
            "unit": "ns",
            "range": "± 5211.65795116912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617312.8278459822,
            "unit": "ns",
            "range": "± 1499.2316697205572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574022.3005022322,
            "unit": "ns",
            "range": "± 1021.3734759252917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2203553.846153846,
            "unit": "ns",
            "range": "± 76804.79647218397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316239.2156862747,
            "unit": "ns",
            "range": "± 93916.36082905125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2810178.5714285714,
            "unit": "ns",
            "range": "± 49805.62493057662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2865685.3658536584,
            "unit": "ns",
            "range": "± 103046.83537347376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7893654.838709678,
            "unit": "ns",
            "range": "± 225875.31197353062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180956.86274509804,
            "unit": "ns",
            "range": "± 7367.720268901658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169448.2142857143,
            "unit": "ns",
            "range": "± 7234.110891437204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144906.25,
            "unit": "ns",
            "range": "± 5642.709710089685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2721433.3333333335,
            "unit": "ns",
            "range": "± 37875.164623247445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2490187.5,
            "unit": "ns",
            "range": "± 47166.82273236842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11511.702127659575,
            "unit": "ns",
            "range": "± 1259.788033286802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57626.5306122449,
            "unit": "ns",
            "range": "± 6699.800751313478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44973.880597014926,
            "unit": "ns",
            "range": "± 2144.838028230825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60389.89898989899,
            "unit": "ns",
            "range": "± 12855.106941581185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2591.6666666666665,
            "unit": "ns",
            "range": "± 403.0584825442546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11445.263157894737,
            "unit": "ns",
            "range": "± 1403.6251258227694"
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
          "id": "15807781c0742c2a1135f8536f004238aca3aa41",
          "message": "Merge pull request #3766 from limebell/test/reinforce-aev-test\n\nAdd test for evaluation when policy actions fails",
          "timestamp": "2024-04-29T18:29:14+09:00",
          "tree_id": "fd5cb49e793adcafc3ac354ae14ca307b01f9cfb",
          "url": "https://github.com/planetarium/libplanet/commit/15807781c0742c2a1135f8536f004238aca3aa41"
        },
        "date": 1714383600855,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 942337.5,
            "unit": "ns",
            "range": "± 81780.03520355526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1720942.105263158,
            "unit": "ns",
            "range": "± 58178.3169025217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1454184.5238095238,
            "unit": "ns",
            "range": "± 76362.12631871305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6756048.275862069,
            "unit": "ns",
            "range": "± 197143.6561435226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40781.52173913043,
            "unit": "ns",
            "range": "± 3459.591837318514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9899678.57142857,
            "unit": "ns",
            "range": "± 90143.78410731831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24709261.53846154,
            "unit": "ns",
            "range": "± 230124.60587857445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59715813.333333336,
            "unit": "ns",
            "range": "± 478421.83249672444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119320700,
            "unit": "ns",
            "range": "± 746122.0925043548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246475320,
            "unit": "ns",
            "range": "± 946868.9373780453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3327501.328125,
            "unit": "ns",
            "range": "± 2833.341587257651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079854.9739583333,
            "unit": "ns",
            "range": "± 2698.2338976038354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733773.6979166666,
            "unit": "ns",
            "range": "± 10008.851467122657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1980667.8292410714,
            "unit": "ns",
            "range": "± 10082.271650210214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616847.94921875,
            "unit": "ns",
            "range": "± 1113.394489389832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560767.4386160715,
            "unit": "ns",
            "range": "± 1095.2908549865792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2191764,
            "unit": "ns",
            "range": "± 57849.36530910833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2232678.5714285714,
            "unit": "ns",
            "range": "± 33415.569346118806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2826600,
            "unit": "ns",
            "range": "± 76773.18802811304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2812513.3333333335,
            "unit": "ns",
            "range": "± 106954.42869830973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8164817.46031746,
            "unit": "ns",
            "range": "± 372833.03602918057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179341.66666666666,
            "unit": "ns",
            "range": "± 7351.589051485462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173495,
            "unit": "ns",
            "range": "± 5979.921532801374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144415.7894736842,
            "unit": "ns",
            "range": "± 3167.5898931197125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2704933.3333333335,
            "unit": "ns",
            "range": "± 46709.216996016454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2386560,
            "unit": "ns",
            "range": "± 39794.27094444626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10957.446808510638,
            "unit": "ns",
            "range": "± 1107.694434176607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55338.04347826087,
            "unit": "ns",
            "range": "± 3847.8434774117695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45507.142857142855,
            "unit": "ns",
            "range": "± 711.9467198239851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53307.86516853933,
            "unit": "ns",
            "range": "± 8718.556812380408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2652.6881720430106,
            "unit": "ns",
            "range": "± 386.0590734954223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10636.559139784946,
            "unit": "ns",
            "range": "± 1030.0680587726229"
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
          "id": "092755aa0051340ca92c8b145c0424fd7172770c",
          "message": "test: add test for evaluation when policy actions fails  [skip changelog]",
          "timestamp": "2024-04-30T19:02:19+09:00",
          "tree_id": "f39606a243217f47ae52ed4ebf58aa01dadc6181",
          "url": "https://github.com/planetarium/libplanet/commit/092755aa0051340ca92c8b145c0424fd7172770c"
        },
        "date": 1714474192744,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005164.6464646464,
            "unit": "ns",
            "range": "± 130872.22177089869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1720990.243902439,
            "unit": "ns",
            "range": "± 61807.88301211282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1528279.5918367347,
            "unit": "ns",
            "range": "± 120001.84960703744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7142312.5,
            "unit": "ns",
            "range": "± 281041.5526368132"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38090.90909090909,
            "unit": "ns",
            "range": "± 5709.356640353907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10262693.333333334,
            "unit": "ns",
            "range": "± 119715.43322554929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24587128.57142857,
            "unit": "ns",
            "range": "± 252200.35816655905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61773042.85714286,
            "unit": "ns",
            "range": "± 640806.0545597549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125071456.25,
            "unit": "ns",
            "range": "± 2442912.7499684333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251690350,
            "unit": "ns",
            "range": "± 3934034.1680010865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3318749.3582589286,
            "unit": "ns",
            "range": "± 7633.524401096214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1087890.0130208333,
            "unit": "ns",
            "range": "± 2878.3881197113683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741058.7239583334,
            "unit": "ns",
            "range": "± 3187.4482232740665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952623.0338541667,
            "unit": "ns",
            "range": "± 4682.464913118521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629485.1432291666,
            "unit": "ns",
            "range": "± 1043.9737364808466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560320.4927884615,
            "unit": "ns",
            "range": "± 811.0450294525062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2196742.8571428573,
            "unit": "ns",
            "range": "± 38395.92755419841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316157.1428571427,
            "unit": "ns",
            "range": "± 74264.60357759823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2745822.580645161,
            "unit": "ns",
            "range": "± 82526.77024124724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2777221.568627451,
            "unit": "ns",
            "range": "± 99581.63146630103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7956336.363636363,
            "unit": "ns",
            "range": "± 165513.53432058071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184835.7142857143,
            "unit": "ns",
            "range": "± 8903.769527635035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171727.77777777778,
            "unit": "ns",
            "range": "± 6595.0643828424045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142007.6923076923,
            "unit": "ns",
            "range": "± 2230.2696169079118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2697042.8571428573,
            "unit": "ns",
            "range": "± 24391.16215371443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2401031.25,
            "unit": "ns",
            "range": "± 44651.08761273346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11915.555555555555,
            "unit": "ns",
            "range": "± 1412.696132240561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57557.291666666664,
            "unit": "ns",
            "range": "± 7058.39917428228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50090.90909090909,
            "unit": "ns",
            "range": "± 6828.1693083795235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58485.71428571428,
            "unit": "ns",
            "range": "± 10167.776676328138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2664.5833333333335,
            "unit": "ns",
            "range": "± 527.3527066328403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11326.80412371134,
            "unit": "ns",
            "range": "± 1990.5775681904029"
          }
        ]
      }
    ]
  }
}