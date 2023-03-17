window.BENCHMARK_DATA = {
  "lastUpdate": 1679045380245,
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
      }
    ]
  }
}