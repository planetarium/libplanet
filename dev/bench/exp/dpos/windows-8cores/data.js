window.BENCHMARK_DATA = {
  "lastUpdate": 1713410164337,
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
      }
    ]
  }
}