window.BENCHMARK_DATA = {
  "lastUpdate": 1679393317199,
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
          "id": "3cb319c420cf611c832339023617574c5baa3b58",
          "message": "@planetarium/account-aws-kms: WIP need tests, created IAM policy\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-15T16:57:35+09:00",
          "tree_id": "8b36d094389e4ba162c0254bc3ee3474e56a7137",
          "url": "https://github.com/planetarium/libplanet/commit/3cb319c420cf611c832339023617574c5baa3b58"
        },
        "date": 1678867935542,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200835.05555555556,
            "unit": "ns",
            "range": "± 6697.927615291355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212614.58823529413,
            "unit": "ns",
            "range": "± 8632.759943787318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180688.9292929293,
            "unit": "ns",
            "range": "± 18789.097731838596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11455727.07142857,
            "unit": "ns",
            "range": "± 43278.50140385797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9431951.6,
            "unit": "ns",
            "range": "± 129628.521775991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21596.691489361703,
            "unit": "ns",
            "range": "± 1772.381248742643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59100.71428571428,
            "unit": "ns",
            "range": "± 5714.116882999272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40325.875,
            "unit": "ns",
            "range": "± 2230.665344857253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99050.56521739131,
            "unit": "ns",
            "range": "± 9890.552278832327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6481.571428571428,
            "unit": "ns",
            "range": "± 1388.4795659838278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20979.48979591837,
            "unit": "ns",
            "range": "± 2180.699746983234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371975.153846154,
            "unit": "ns",
            "range": "± 88710.55941823039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5259965.666666667,
            "unit": "ns",
            "range": "± 138659.4769930999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24884807.35,
            "unit": "ns",
            "range": "± 572268.8409611136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6216269.696969697,
            "unit": "ns",
            "range": "± 193293.6599483227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27835715.5,
            "unit": "ns",
            "range": "± 370268.13266911416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6001234.611458333,
            "unit": "ns",
            "range": "± 50268.72614988306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1835773.830891927,
            "unit": "ns",
            "range": "± 1570.4353196761438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369235.9310825893,
            "unit": "ns",
            "range": "± 1549.4916464344305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559652.7052283655,
            "unit": "ns",
            "range": "± 3884.49888652744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837957.1047014509,
            "unit": "ns",
            "range": "± 2014.6088960141935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743841.640485491,
            "unit": "ns",
            "range": "± 888.7679079137788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7700424.714285715,
            "unit": "ns",
            "range": "± 46158.82562069056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20126330.2,
            "unit": "ns",
            "range": "± 297597.26027209515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49810158.666666664,
            "unit": "ns",
            "range": "± 586612.3336415464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102621398.76923077,
            "unit": "ns",
            "range": "± 203363.3333634466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203352502.53333333,
            "unit": "ns",
            "range": "± 1672183.3162108269"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46343.73626373626,
            "unit": "ns",
            "range": "± 3218.9324484133103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407163.4,
            "unit": "ns",
            "range": "± 88282.09030213828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2491810.5,
            "unit": "ns",
            "range": "± 65768.65686708222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202402.989473684,
            "unit": "ns",
            "range": "± 138785.51219406145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5197017.703703703,
            "unit": "ns",
            "range": "± 144111.27645965776"
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
          "id": "3f84081bf69e8a67023e5b51bf141d01b8f9702a",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:08:54+09:00",
          "tree_id": "61ebbe0df335198e2ab126d292f64ee8d1ba4081",
          "url": "https://github.com/planetarium/libplanet/commit/3f84081bf69e8a67023e5b51bf141d01b8f9702a"
        },
        "date": 1679044892664,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3352083.6666666665,
            "unit": "ns",
            "range": "± 45834.77885166407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5256387.928571428,
            "unit": "ns",
            "range": "± 42816.47211864627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24351015.266666666,
            "unit": "ns",
            "range": "± 327336.2875195273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6202149.826086956,
            "unit": "ns",
            "range": "± 144428.59960883224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27176542.733333334,
            "unit": "ns",
            "range": "± 405643.0310252505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8109208.071428572,
            "unit": "ns",
            "range": "± 58091.2727954424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19930335.6,
            "unit": "ns",
            "range": "± 82804.40086199698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50568849.8,
            "unit": "ns",
            "range": "± 312805.13962808036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101707624.93333334,
            "unit": "ns",
            "range": "± 878554.7990267448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 202408642.13333333,
            "unit": "ns",
            "range": "± 1208905.7436240704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1340856.4086021506,
            "unit": "ns",
            "range": "± 77123.34721775475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2468857.925925926,
            "unit": "ns",
            "range": "± 68370.83815820779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2091991.2318840579,
            "unit": "ns",
            "range": "± 100185.03366640925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5217201.566666666,
            "unit": "ns",
            "range": "± 151476.5457357908"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45391.96875,
            "unit": "ns",
            "range": "± 2107.848869381008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6258254.433333334,
            "unit": "ns",
            "range": "± 22675.80133597126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1853601.7828125,
            "unit": "ns",
            "range": "± 11240.772168794949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360179.759765625,
            "unit": "ns",
            "range": "± 579.3340477448826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619847.951171875,
            "unit": "ns",
            "range": "± 2453.295952793145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798873.9757361779,
            "unit": "ns",
            "range": "± 745.0969625250358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734171.8536658654,
            "unit": "ns",
            "range": "± 977.0734840507905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198405.4375,
            "unit": "ns",
            "range": "± 6063.834302450937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193331.1590909091,
            "unit": "ns",
            "range": "± 7068.534123035701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182019.56962025317,
            "unit": "ns",
            "range": "± 9388.163715051187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11625531.066666666,
            "unit": "ns",
            "range": "± 59159.02209114813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9415121.8,
            "unit": "ns",
            "range": "± 49391.25486243202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18856.456521739132,
            "unit": "ns",
            "range": "± 1283.596299319739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56028.4606741573,
            "unit": "ns",
            "range": "± 4110.54564796501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39203.76,
            "unit": "ns",
            "range": "± 922.6739348220474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94239.62105263158,
            "unit": "ns",
            "range": "± 13759.828789739948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5276.783505154639,
            "unit": "ns",
            "range": "± 726.079788240764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18539.44210526316,
            "unit": "ns",
            "range": "± 1660.7829909079448"
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
          "id": "ba8209ccee3401e9c0164d1845253437bf55e4b1",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:12:29+09:00",
          "tree_id": "bccba5616dba8f9556e4a998282574511f7cce3f",
          "url": "https://github.com/planetarium/libplanet/commit/ba8209ccee3401e9c0164d1845253437bf55e4b1"
        },
        "date": 1679045358596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4065175.1842105263,
            "unit": "ns",
            "range": "± 134803.47080243917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6113966.355263158,
            "unit": "ns",
            "range": "± 308887.8524139877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28012507.184615385,
            "unit": "ns",
            "range": "± 1300700.7985053298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7158812.94117647,
            "unit": "ns",
            "range": "± 339725.82952464104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31948889.185714286,
            "unit": "ns",
            "range": "± 1541248.901569634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8896613.819444444,
            "unit": "ns",
            "range": "± 435321.77631369483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23998539.71111111,
            "unit": "ns",
            "range": "± 899346.0107478512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58682443,
            "unit": "ns",
            "range": "± 2428992.7871185225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 122893780.45762712,
            "unit": "ns",
            "range": "± 5391351.705941099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 253188719.2962963,
            "unit": "ns",
            "range": "± 6868600.85686902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1634722.7037037036,
            "unit": "ns",
            "range": "± 83328.57050247598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3213620.13,
            "unit": "ns",
            "range": "± 207607.73183416453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2470116.6333333333,
            "unit": "ns",
            "range": "± 162718.10112925738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6176458.05050505,
            "unit": "ns",
            "range": "± 476381.7188260917"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54927.25842696629,
            "unit": "ns",
            "range": "± 3707.8677054464815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6772214.926339285,
            "unit": "ns",
            "range": "± 58828.77493520636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2040450.3276041667,
            "unit": "ns",
            "range": "± 34813.460875344375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1549616.6652994792,
            "unit": "ns",
            "range": "± 45958.69309314368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2958045.761979167,
            "unit": "ns",
            "range": "± 17602.78757968116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934872.2626255581,
            "unit": "ns",
            "range": "± 7695.700863487674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 873348.3892867477,
            "unit": "ns",
            "range": "± 23944.951483379406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213386.96808510637,
            "unit": "ns",
            "range": "± 15866.391321898489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221068.93902439025,
            "unit": "ns",
            "range": "± 11674.979235815792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204275.60606060605,
            "unit": "ns",
            "range": "± 18635.9547560558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14227787.15,
            "unit": "ns",
            "range": "± 326414.1895468128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11367947.625,
            "unit": "ns",
            "range": "± 217944.55972008876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19856.032967032967,
            "unit": "ns",
            "range": "± 2032.2707302727458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56380.38888888889,
            "unit": "ns",
            "range": "± 5349.340365602677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46749.382978723406,
            "unit": "ns",
            "range": "± 6219.678766566411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97916.96907216495,
            "unit": "ns",
            "range": "± 15775.933193774945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5723.6,
            "unit": "ns",
            "range": "± 627.1544212433705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21516.916666666668,
            "unit": "ns",
            "range": "± 1753.5459213392771"
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
          "id": "d74378dbe64f8a924cdc17c38fcdfa4b228e074c",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:19:29+09:00",
          "tree_id": "bccba5616dba8f9556e4a998282574511f7cce3f",
          "url": "https://github.com/planetarium/libplanet/commit/d74378dbe64f8a924cdc17c38fcdfa4b228e074c"
        },
        "date": 1679045499700,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3205275.0833333335,
            "unit": "ns",
            "range": "± 37487.68525179807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5201979.866666666,
            "unit": "ns",
            "range": "± 75804.55578456506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23244720.214285713,
            "unit": "ns",
            "range": "± 192800.62771729068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5983898.733333333,
            "unit": "ns",
            "range": "± 77324.7438908203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26865959.25,
            "unit": "ns",
            "range": "± 504569.64053478284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7681921.733333333,
            "unit": "ns",
            "range": "± 26680.959560455594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19387824.785714287,
            "unit": "ns",
            "range": "± 101297.82443724929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48862293.6,
            "unit": "ns",
            "range": "± 620071.6564896582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98903173.53333333,
            "unit": "ns",
            "range": "± 555014.0792210161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 194843859.46666667,
            "unit": "ns",
            "range": "± 1676372.3508630118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1332909.4935064935,
            "unit": "ns",
            "range": "± 68065.02529888209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2546250,
            "unit": "ns",
            "range": "± 81702.36216507416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2083492.5466666666,
            "unit": "ns",
            "range": "± 96935.22353979811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4955969.166666667,
            "unit": "ns",
            "range": "± 101021.38217651223"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44470.90909090909,
            "unit": "ns",
            "range": "± 2083.6128588234774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6181368.384375,
            "unit": "ns",
            "range": "± 65001.66515420313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1808661.1196614583,
            "unit": "ns",
            "range": "± 5449.210590137082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361809.689453125,
            "unit": "ns",
            "range": "± 915.6367058937977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609909.27890625,
            "unit": "ns",
            "range": "± 2310.088791934868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865000.7953125,
            "unit": "ns",
            "range": "± 4926.133291272782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723901.9711216518,
            "unit": "ns",
            "range": "± 682.4025983374761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195985.4347826087,
            "unit": "ns",
            "range": "± 4569.258840099354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200318.35,
            "unit": "ns",
            "range": "± 4509.794747050725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159976.12903225806,
            "unit": "ns",
            "range": "± 4775.7589047322135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11394922.733333332,
            "unit": "ns",
            "range": "± 91621.24869690956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9165343.357142856,
            "unit": "ns",
            "range": "± 43704.212044162276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16498.91489361702,
            "unit": "ns",
            "range": "± 1168.8911633761313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47175.25555555556,
            "unit": "ns",
            "range": "± 3120.02686736167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37249.857142857145,
            "unit": "ns",
            "range": "± 492.6538583791101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83033.12244897959,
            "unit": "ns",
            "range": "± 11523.714114605627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4204.212765957447,
            "unit": "ns",
            "range": "± 391.274945883503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16000.907216494845,
            "unit": "ns",
            "range": "± 1722.2609055303474"
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
          "id": "772ba99bb79eaac292c4800f6659083fd1127617",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:18:52+09:00",
          "tree_id": "bccba5616dba8f9556e4a998282574511f7cce3f",
          "url": "https://github.com/planetarium/libplanet/commit/772ba99bb79eaac292c4800f6659083fd1127617"
        },
        "date": 1679045977984,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4114627.9139784947,
            "unit": "ns",
            "range": "± 296141.1564064566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6435255.084210526,
            "unit": "ns",
            "range": "± 601864.5013320294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 35380377.79591837,
            "unit": "ns",
            "range": "± 2405161.223746275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8408953.010869564,
            "unit": "ns",
            "range": "± 706972.2320665302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 41242098.68181818,
            "unit": "ns",
            "range": "± 1941546.7471778598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10835507.340206185,
            "unit": "ns",
            "range": "± 1176871.77971842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 27563931.652631577,
            "unit": "ns",
            "range": "± 1776973.463663971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 71266428.03225806,
            "unit": "ns",
            "range": "± 3230490.0215196963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 142845144.91111112,
            "unit": "ns",
            "range": "± 5426460.753757223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 283714084.5714286,
            "unit": "ns",
            "range": "± 4776828.541096677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1868931.1333333333,
            "unit": "ns",
            "range": "± 193877.47717347305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3421407.7934782607,
            "unit": "ns",
            "range": "± 308117.81284656766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2854414.8645833335,
            "unit": "ns",
            "range": "± 252092.43872301752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7322364.042105263,
            "unit": "ns",
            "range": "± 572601.8800958075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66831.32258064517,
            "unit": "ns",
            "range": "± 17208.255151905192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7695613.754166666,
            "unit": "ns",
            "range": "± 126692.23071937311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2472980.5678267046,
            "unit": "ns",
            "range": "± 59908.634573270836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1766069.671875,
            "unit": "ns",
            "range": "± 25103.312409934937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3256760.4029447115,
            "unit": "ns",
            "range": "± 35389.33659827408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1122899.5989793346,
            "unit": "ns",
            "range": "± 33853.46681259715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 998293.2733154297,
            "unit": "ns",
            "range": "± 18617.54104445517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267831.93333333335,
            "unit": "ns",
            "range": "± 38539.038536545624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282460.6451612903,
            "unit": "ns",
            "range": "± 35222.61782565694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237108.78125,
            "unit": "ns",
            "range": "± 48805.49482463999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15751549.831578948,
            "unit": "ns",
            "range": "± 1169773.3406542742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12561466.984848484,
            "unit": "ns",
            "range": "± 571965.2817734923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30222.606382978724,
            "unit": "ns",
            "range": "± 8645.648595628822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81352.47252747252,
            "unit": "ns",
            "range": "± 17374.97207693402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53131.6,
            "unit": "ns",
            "range": "± 10561.863330243466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139128.88043478262,
            "unit": "ns",
            "range": "± 29717.25079790436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6291.585106382979,
            "unit": "ns",
            "range": "± 811.0046392820979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34532.22,
            "unit": "ns",
            "range": "± 11482.762755389735"
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
          "id": "ff2b26f83f662ff9957613d8b22d9daf1033367e",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:28:06+09:00",
          "tree_id": "591cce301b14c3bdda609b103273ba7289081317",
          "url": "https://github.com/planetarium/libplanet/commit/ff2b26f83f662ff9957613d8b22d9daf1033367e"
        },
        "date": 1679046338099,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4199907.133333334,
            "unit": "ns",
            "range": "± 76707.97715070045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6470753.426229509,
            "unit": "ns",
            "range": "± 284169.1535309242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30036138.863636363,
            "unit": "ns",
            "range": "± 727586.1532353662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7907204.292682927,
            "unit": "ns",
            "range": "± 282857.87243960914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33608883.615384616,
            "unit": "ns",
            "range": "± 507084.2962173611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9790765.979591837,
            "unit": "ns",
            "range": "± 387633.87677353324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 26295283.266666666,
            "unit": "ns",
            "range": "± 265739.9237300761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 65599910.666666664,
            "unit": "ns",
            "range": "± 976499.8641686444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 137927131.73333332,
            "unit": "ns",
            "range": "± 1522819.7163963146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 271159841.26666665,
            "unit": "ns",
            "range": "± 2370275.5066558477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1690506.4555555556,
            "unit": "ns",
            "range": "± 89902.19184941746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3228187,
            "unit": "ns",
            "range": "± 56030.55960430369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2693348.2586206896,
            "unit": "ns",
            "range": "± 114014.30933517755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6312153.6,
            "unit": "ns",
            "range": "± 167655.36184536418"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59488.20652173913,
            "unit": "ns",
            "range": "± 4055.0031870505313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7124545.459375,
            "unit": "ns",
            "range": "± 60977.54240430558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2186634.09921875,
            "unit": "ns",
            "range": "± 15254.918757876661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1643512.4194010417,
            "unit": "ns",
            "range": "± 6729.06496326677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3086264.316145833,
            "unit": "ns",
            "range": "± 18915.054569577722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001164.1260416667,
            "unit": "ns",
            "range": "± 1303.1343322354646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910655.9130859375,
            "unit": "ns",
            "range": "± 4683.623572456721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244280.75,
            "unit": "ns",
            "range": "± 9023.363123155666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246795.98484848486,
            "unit": "ns",
            "range": "± 11509.174643257338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224246.94186046513,
            "unit": "ns",
            "range": "± 12145.332131030862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14801966.933333334,
            "unit": "ns",
            "range": "± 246543.00031245395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12040292.333333334,
            "unit": "ns",
            "range": "± 152703.54612949828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28078.389473684212,
            "unit": "ns",
            "range": "± 2437.0062131366717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67703.2808988764,
            "unit": "ns",
            "range": "± 4465.648357153152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55785.90625,
            "unit": "ns",
            "range": "± 5512.492663946664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119038.78350515464,
            "unit": "ns",
            "range": "± 16892.003843181494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7693.489361702128,
            "unit": "ns",
            "range": "± 778.2101845153784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25230.26595744681,
            "unit": "ns",
            "range": "± 2494.6656516359662"
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
          "id": "24b0a1f5a01c49d4e795562f6de5f00594abeccf",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:20:35+09:00",
          "tree_id": "39bbc6389268a9bc4028075bf612fa30327b7382",
          "url": "https://github.com/planetarium/libplanet/commit/24b0a1f5a01c49d4e795562f6de5f00594abeccf"
        },
        "date": 1679046502625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5204556.265306123,
            "unit": "ns",
            "range": "± 641435.6707742397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 7629247.88,
            "unit": "ns",
            "range": "± 1204513.5701818676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 39401824.54,
            "unit": "ns",
            "range": "± 5291099.755456852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 9547063.4,
            "unit": "ns",
            "range": "± 1392253.3465299984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 45534364.44,
            "unit": "ns",
            "range": "± 5656860.734932751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 12355772.704081632,
            "unit": "ns",
            "range": "± 1630428.7797214903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 31984928.03,
            "unit": "ns",
            "range": "± 4002736.3204231365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 81424694.42,
            "unit": "ns",
            "range": "± 9856469.673703417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 162927446.49,
            "unit": "ns",
            "range": "± 17523185.180733904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 325632317.15,
            "unit": "ns",
            "range": "± 29069859.838037197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2001929.7252747254,
            "unit": "ns",
            "range": "± 227619.15097543807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4237101.262626262,
            "unit": "ns",
            "range": "± 664736.7010246036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3284626.6565656564,
            "unit": "ns",
            "range": "± 424006.7006374695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8343233.12,
            "unit": "ns",
            "range": "± 1398391.3340225325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79350.60606060606,
            "unit": "ns",
            "range": "± 20813.177493694824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9170998.6415625,
            "unit": "ns",
            "range": "± 760538.6484827399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2804250.545008681,
            "unit": "ns",
            "range": "± 155274.5254377211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1904410.2803125,
            "unit": "ns",
            "range": "± 115637.25431622229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4201545.8478125,
            "unit": "ns",
            "range": "± 458925.90789529786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1259584.080703125,
            "unit": "ns",
            "range": "± 98054.15586701133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1100241.3454296875,
            "unit": "ns",
            "range": "± 67525.00960972597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332658.34,
            "unit": "ns",
            "range": "± 72649.88711055345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312618.2244897959,
            "unit": "ns",
            "range": "± 62048.28167612214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295415.8484848485,
            "unit": "ns",
            "range": "± 65765.41054358745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 18914492.68,
            "unit": "ns",
            "range": "± 2182789.6330513493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 14418631.33,
            "unit": "ns",
            "range": "± 1896686.3476132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 37030.30303030303,
            "unit": "ns",
            "range": "± 10475.279324564273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93242.1313131313,
            "unit": "ns",
            "range": "± 25280.17293826732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71582.58,
            "unit": "ns",
            "range": "± 21195.910473761596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 173525.54,
            "unit": "ns",
            "range": "± 53185.060541817234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9362.255319148937,
            "unit": "ns",
            "range": "± 3663.8746953974223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32781.62105263158,
            "unit": "ns",
            "range": "± 10489.913291103565"
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
          "id": "3b8b4780df5ce1d2c244566536d2291bed7a5b90",
          "message": "temp",
          "timestamp": "2023-03-17T18:42:07+09:00",
          "tree_id": "daef535de31db5c777ace12118d58cc4047e4614",
          "url": "https://github.com/planetarium/libplanet/commit/3b8b4780df5ce1d2c244566536d2291bed7a5b90"
        },
        "date": 1679047155518,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3594028.288659794,
            "unit": "ns",
            "range": "± 335008.5145987573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5607157.24742268,
            "unit": "ns",
            "range": "± 404104.50990482315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28814652.13,
            "unit": "ns",
            "range": "± 1896326.07552767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7123308.515151516,
            "unit": "ns",
            "range": "± 520971.9987491859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33140842.275510203,
            "unit": "ns",
            "range": "± 1961264.6105870972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8967212.917525774,
            "unit": "ns",
            "range": "± 635488.0361463947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23552244.27,
            "unit": "ns",
            "range": "± 1698068.3780292198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57306119,
            "unit": "ns",
            "range": "± 2699952.4411485586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 115462698.66101696,
            "unit": "ns",
            "range": "± 5029029.354384919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 226733571.44444445,
            "unit": "ns",
            "range": "± 5688485.519772041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1557805.3229166667,
            "unit": "ns",
            "range": "± 206959.99010754633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3062360.7083333335,
            "unit": "ns",
            "range": "± 301741.03188671806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2370949.989247312,
            "unit": "ns",
            "range": "± 200930.20210832756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6534053.234693877,
            "unit": "ns",
            "range": "± 547772.2102380029"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58465.78350515464,
            "unit": "ns",
            "range": "± 9734.949807509283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6529649.299739583,
            "unit": "ns",
            "range": "± 110016.54477452415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2110540.363541667,
            "unit": "ns",
            "range": "± 26582.76952625748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1489426.251201923,
            "unit": "ns",
            "range": "± 16332.282012096031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2900062.0791666666,
            "unit": "ns",
            "range": "± 48378.04821584637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 933693.2491536458,
            "unit": "ns",
            "range": "± 15555.62235256373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 866156.503125,
            "unit": "ns",
            "range": "± 13128.62604986716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216130.45360824742,
            "unit": "ns",
            "range": "± 24657.64452500001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218381.53608247422,
            "unit": "ns",
            "range": "± 25767.316453803556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 184551.95789473684,
            "unit": "ns",
            "range": "± 21540.084128777307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13027695.639175259,
            "unit": "ns",
            "range": "± 827909.689776334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10140894.38095238,
            "unit": "ns",
            "range": "± 541597.5486614745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23141.303030303032,
            "unit": "ns",
            "range": "± 6762.298100580392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59984.96808510638,
            "unit": "ns",
            "range": "± 9598.057130294124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47413.333333333336,
            "unit": "ns",
            "range": "± 8370.281549269122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104797.84210526316,
            "unit": "ns",
            "range": "± 19962.872753719264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9321.28,
            "unit": "ns",
            "range": "± 5653.81103627804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21782.214285714286,
            "unit": "ns",
            "range": "± 6880.055334604257"
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
          "id": "ff2b26f83f662ff9957613d8b22d9daf1033367e",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:28:06+09:00",
          "tree_id": "591cce301b14c3bdda609b103273ba7289081317",
          "url": "https://github.com/planetarium/libplanet/commit/ff2b26f83f662ff9957613d8b22d9daf1033367e"
        },
        "date": 1679047295204,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3164686.3076923075,
            "unit": "ns",
            "range": "± 108784.64433219323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4904881.6,
            "unit": "ns",
            "range": "± 45083.906494763425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22923439.64285714,
            "unit": "ns",
            "range": "± 242411.71119386863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6027529.2,
            "unit": "ns",
            "range": "± 101988.45279330121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26211273.066666666,
            "unit": "ns",
            "range": "± 438049.49085470545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7615907.6,
            "unit": "ns",
            "range": "± 8859.459946455943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19536293.333333332,
            "unit": "ns",
            "range": "± 113363.79610393805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49830844.733333334,
            "unit": "ns",
            "range": "± 661445.8391473579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97370612.21428572,
            "unit": "ns",
            "range": "± 524657.8957958706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 194700061.2,
            "unit": "ns",
            "range": "± 1303135.01471047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1318069.21686747,
            "unit": "ns",
            "range": "± 68914.88039675276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2432420.933333333,
            "unit": "ns",
            "range": "± 72151.2866217077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2057624.9166666667,
            "unit": "ns",
            "range": "± 116500.43671150735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5026491.234042553,
            "unit": "ns",
            "range": "± 193013.7545053982"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44193.850746268654,
            "unit": "ns",
            "range": "± 2096.370162011871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6159085.4734375,
            "unit": "ns",
            "range": "± 38259.77444728352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911706.2635416666,
            "unit": "ns",
            "range": "± 7361.497441617281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327704.004296875,
            "unit": "ns",
            "range": "± 1827.3184068637468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607193.37890625,
            "unit": "ns",
            "range": "± 4741.858278812027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789213.8209402902,
            "unit": "ns",
            "range": "± 1245.5227965718168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753603.4536830357,
            "unit": "ns",
            "range": "± 988.8691264005391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189718.48387096773,
            "unit": "ns",
            "range": "± 5721.143346517185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190601.5,
            "unit": "ns",
            "range": "± 6756.022479505951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157314.46153846153,
            "unit": "ns",
            "range": "± 1641.0487812871688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11037217,
            "unit": "ns",
            "range": "± 65316.77167575612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8990037.533333333,
            "unit": "ns",
            "range": "± 76808.12872519853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16177.574468085106,
            "unit": "ns",
            "range": "± 1369.2825803016178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48437.51111111111,
            "unit": "ns",
            "range": "± 2915.191875059767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37983,
            "unit": "ns",
            "range": "± 378.4581158523958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83638.39795918367,
            "unit": "ns",
            "range": "± 15205.82218441059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4444.857142857143,
            "unit": "ns",
            "range": "± 435.60376395901085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15478.617021276596,
            "unit": "ns",
            "range": "± 926.1901974528225"
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
          "id": "2ada47c0396ce39e1705113d0887010903d3d203",
          "message": "test ci",
          "timestamp": "2023-03-21T18:29:57+09:00",
          "tree_id": "ab605486f45e0e1dc8138c2a7ca2b75c7ff8b507",
          "url": "https://github.com/planetarium/libplanet/commit/2ada47c0396ce39e1705113d0887010903d3d203"
        },
        "date": 1679391748009,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3320952.7333333334,
            "unit": "ns",
            "range": "± 41580.870296785455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5020063.454545454,
            "unit": "ns",
            "range": "± 86302.04069249064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23420634.933333334,
            "unit": "ns",
            "range": "± 241927.10684609902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6236301.882352941,
            "unit": "ns",
            "range": "± 124770.21822077692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26943626,
            "unit": "ns",
            "range": "± 325065.3051067475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7775614.642857143,
            "unit": "ns",
            "range": "± 49801.070749389655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19823244.57142857,
            "unit": "ns",
            "range": "± 63379.57994704395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51149241.733333334,
            "unit": "ns",
            "range": "± 277406.84474289656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101503816.66666667,
            "unit": "ns",
            "range": "± 706613.1232544305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203970452.73333332,
            "unit": "ns",
            "range": "± 1143402.957313479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1396220.1836734693,
            "unit": "ns",
            "range": "± 83617.23497801143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2502873.34375,
            "unit": "ns",
            "range": "± 77012.55984729285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2179100.3936170214,
            "unit": "ns",
            "range": "± 120966.25136346674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5173584.939393939,
            "unit": "ns",
            "range": "± 147449.32153941476"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44730.58823529412,
            "unit": "ns",
            "range": "± 2138.3889753758035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5981138.0015625,
            "unit": "ns",
            "range": "± 15995.710251893901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2006075.2403645834,
            "unit": "ns",
            "range": "± 2218.1454795949912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359350.5857872595,
            "unit": "ns",
            "range": "± 371.3692069524353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572323.9627403845,
            "unit": "ns",
            "range": "± 1365.9551412381734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815302.4712890625,
            "unit": "ns",
            "range": "± 791.4080667823571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756042.4631159856,
            "unit": "ns",
            "range": "± 481.83229818018845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201380.18181818182,
            "unit": "ns",
            "range": "± 4902.863222127635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190553.45,
            "unit": "ns",
            "range": "± 6554.223594027963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166981.51063829788,
            "unit": "ns",
            "range": "± 6409.789804843499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11377240.2,
            "unit": "ns",
            "range": "± 112377.74922058954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9306243.8,
            "unit": "ns",
            "range": "± 57072.578432078175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19219.434782608696,
            "unit": "ns",
            "range": "± 1433.7067251435803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54356.67032967033,
            "unit": "ns",
            "range": "± 3936.3211732528607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39263.523255813954,
            "unit": "ns",
            "range": "± 2142.5328865716483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89717.3829787234,
            "unit": "ns",
            "range": "± 11315.995844788784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5242.063157894737,
            "unit": "ns",
            "range": "± 629.8490161956972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19241.724489795917,
            "unit": "ns",
            "range": "± 1773.8454922929698"
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
          "id": "7daa389141d95d02db84565d9eccfe2f99414fb5",
          "message": "test ci",
          "timestamp": "2023-03-21T18:45:22+09:00",
          "tree_id": "7a6e1cd2f8ef001dc05c6a624c4718f5c0753ccb",
          "url": "https://github.com/planetarium/libplanet/commit/7daa389141d95d02db84565d9eccfe2f99414fb5"
        },
        "date": 1679392773378,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3559005.6333333333,
            "unit": "ns",
            "range": "± 103189.42043622673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5588070.5,
            "unit": "ns",
            "range": "± 96522.90591496523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25443916.866666667,
            "unit": "ns",
            "range": "± 339387.4260518852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7104772.952380952,
            "unit": "ns",
            "range": "± 164412.58905858645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28632197.36842105,
            "unit": "ns",
            "range": "± 610334.4635938206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7761964,
            "unit": "ns",
            "range": "± 96308.04190241292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22021131.866666667,
            "unit": "ns",
            "range": "± 228968.4222344915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55784881.333333336,
            "unit": "ns",
            "range": "± 906047.4053254345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108758320.8,
            "unit": "ns",
            "range": "± 1803791.6916909541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 224600833,
            "unit": "ns",
            "range": "± 1932366.419631639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1449300.440860215,
            "unit": "ns",
            "range": "± 83070.44417717207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2728564.0285714287,
            "unit": "ns",
            "range": "± 88561.94649259909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2288826.140625,
            "unit": "ns",
            "range": "± 104961.29055852005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5407672,
            "unit": "ns",
            "range": "± 100746.97705109237"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50847,
            "unit": "ns",
            "range": "± 2796.0896906464814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6200991.35546875,
            "unit": "ns",
            "range": "± 17434.491379560408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1884456.0591145833,
            "unit": "ns",
            "range": "± 5951.703328870616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367176.236328125,
            "unit": "ns",
            "range": "± 3970.293026970008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2651679.780691964,
            "unit": "ns",
            "range": "± 2159.2827302896776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823868.6640625,
            "unit": "ns",
            "range": "± 342.05332438547856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770697.9009114583,
            "unit": "ns",
            "range": "± 410.52769153618453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206764.21818181817,
            "unit": "ns",
            "range": "± 8753.099101314978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207917.3947368421,
            "unit": "ns",
            "range": "± 6861.294084620425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183077.47619047618,
            "unit": "ns",
            "range": "± 9799.15163462952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12474492.466666667,
            "unit": "ns",
            "range": "± 147917.05478692474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10088750.866666667,
            "unit": "ns",
            "range": "± 174337.1451375043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23266.5,
            "unit": "ns",
            "range": "± 1915.0674754388867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58412.91111111111,
            "unit": "ns",
            "range": "± 3439.8166821237332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45993.45,
            "unit": "ns",
            "range": "± 1633.838659925351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105396.75531914894,
            "unit": "ns",
            "range": "± 14233.219748245761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7309.432989690722,
            "unit": "ns",
            "range": "± 875.6924867785173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21631.35106382979,
            "unit": "ns",
            "range": "± 1763.5547417196512"
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
          "id": "36114eb20e55ce984f8d63c68bb9bf45452461bf",
          "message": "test ci",
          "timestamp": "2023-03-21T18:41:41+09:00",
          "tree_id": "8acf145f75464e31f405cb4f1ea43bbf522c2fb8",
          "url": "https://github.com/planetarium/libplanet/commit/36114eb20e55ce984f8d63c68bb9bf45452461bf"
        },
        "date": 1679392876185,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4109435.87628866,
            "unit": "ns",
            "range": "± 362061.9739461124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6958183.602150538,
            "unit": "ns",
            "range": "± 631347.5132579888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 35634547.94949495,
            "unit": "ns",
            "range": "± 2323668.174468463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8695729.627659574,
            "unit": "ns",
            "range": "± 534077.6958223428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 39218237.15,
            "unit": "ns",
            "range": "± 1745425.7701537777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9500252.778947368,
            "unit": "ns",
            "range": "± 637070.7755144966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 27376540.170212764,
            "unit": "ns",
            "range": "± 1533704.4563432252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 70152839.5,
            "unit": "ns",
            "range": "± 2134083.7376517686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 145374224.54285714,
            "unit": "ns",
            "range": "± 4245033.779167268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 280197994.04444444,
            "unit": "ns",
            "range": "± 10079845.445053281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1879926.1979166667,
            "unit": "ns",
            "range": "± 190755.21889289477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3513783.9032258065,
            "unit": "ns",
            "range": "± 248213.77389784416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3010255.597826087,
            "unit": "ns",
            "range": "± 223247.87451241052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7168563.75,
            "unit": "ns",
            "range": "± 661550.5824603604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71129.6530612245,
            "unit": "ns",
            "range": "± 17906.230512219572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7111835.215992647,
            "unit": "ns",
            "range": "± 137064.38599331968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2313195.5307617188,
            "unit": "ns",
            "range": "± 38784.11052390767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1751877.743631114,
            "unit": "ns",
            "range": "± 43367.38601331079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3254399.96484375,
            "unit": "ns",
            "range": "± 63034.328282034374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1078202.2745535714,
            "unit": "ns",
            "range": "± 18976.075124129624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1001810.8275035511,
            "unit": "ns",
            "range": "± 23935.87326549205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252693.82291666666,
            "unit": "ns",
            "range": "± 36878.4736018167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257014.48936170212,
            "unit": "ns",
            "range": "± 41831.79395044861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212629.28421052633,
            "unit": "ns",
            "range": "± 42557.830397242906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15294224.13402062,
            "unit": "ns",
            "range": "± 1155175.4552648286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12036581.915789474,
            "unit": "ns",
            "range": "± 885413.00989062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32119.690721649484,
            "unit": "ns",
            "range": "± 10351.92635088677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80606.52631578948,
            "unit": "ns",
            "range": "± 17269.88603175574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52245.13978494624,
            "unit": "ns",
            "range": "± 10641.705031120635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125310.25842696629,
            "unit": "ns",
            "range": "± 25417.23990966837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5745.3488372093025,
            "unit": "ns",
            "range": "± 1046.299583320884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31341.867346938776,
            "unit": "ns",
            "range": "± 10146.12730002967"
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
          "id": "9ffc80d0c8c3075341b92853c99c145e4b755654",
          "message": "test ci",
          "timestamp": "2023-03-21T18:51:23+09:00",
          "tree_id": "d4c31b3090a321c1e37417ae44c7d679d741d644",
          "url": "https://github.com/planetarium/libplanet/commit/9ffc80d0c8c3075341b92853c99c145e4b755654"
        },
        "date": 1679393294934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4066088.846153846,
            "unit": "ns",
            "range": "± 140798.70429512564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6375636.676470588,
            "unit": "ns",
            "range": "± 204037.7387455745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29516829.872340426,
            "unit": "ns",
            "range": "± 1129737.9299797541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7678765.952380952,
            "unit": "ns",
            "range": "± 181088.83646085867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33578728.672413796,
            "unit": "ns",
            "range": "± 1473622.1174740305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9522297.222222222,
            "unit": "ns",
            "range": "± 313379.4038587467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26037685.5,
            "unit": "ns",
            "range": "± 492996.97009670694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64079714.06666667,
            "unit": "ns",
            "range": "± 861607.9908235089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134039307.46666667,
            "unit": "ns",
            "range": "± 1779056.4407484524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254550481,
            "unit": "ns",
            "range": "± 4597016.635872024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1650351.425531915,
            "unit": "ns",
            "range": "± 111194.06163859623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3103782.76,
            "unit": "ns",
            "range": "± 124227.38962007845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2560950.5057471264,
            "unit": "ns",
            "range": "± 134781.84685130347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6716285.1,
            "unit": "ns",
            "range": "± 406165.5010361285"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58686.760869565216,
            "unit": "ns",
            "range": "± 5283.101782824438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7133070.985416667,
            "unit": "ns",
            "range": "± 62171.07014464898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2190751.2526041665,
            "unit": "ns",
            "range": "± 11833.871007298181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1622880.2290364583,
            "unit": "ns",
            "range": "± 8635.70817525078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2934141.6763020833,
            "unit": "ns",
            "range": "± 51618.42610117344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 963631.5989815848,
            "unit": "ns",
            "range": "± 3406.6213814520597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913390.7427083333,
            "unit": "ns",
            "range": "± 4682.626215910048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234687.5,
            "unit": "ns",
            "range": "± 11951.043226430067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227649.11340206186,
            "unit": "ns",
            "range": "± 14203.425199340332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198767.83,
            "unit": "ns",
            "range": "± 15525.828832316938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13871317.333333334,
            "unit": "ns",
            "range": "± 614686.0099076537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11898765.333333334,
            "unit": "ns",
            "range": "± 168590.9272981144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26819.9793814433,
            "unit": "ns",
            "range": "± 2859.6148450570136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65961.89010989011,
            "unit": "ns",
            "range": "± 6405.365128720956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50942.354166666664,
            "unit": "ns",
            "range": "± 5492.311615683503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121071.793814433,
            "unit": "ns",
            "range": "± 13686.918605565608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6673.03125,
            "unit": "ns",
            "range": "± 963.094731670282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23168.563829787236,
            "unit": "ns",
            "range": "± 2585.3194954843416"
          }
        ]
      }
    ]
  }
}