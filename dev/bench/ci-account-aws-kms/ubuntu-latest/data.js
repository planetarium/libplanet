window.BENCHMARK_DATA = {
  "lastUpdate": 1679047177039,
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
      }
    ]
  }
}