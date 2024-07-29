window.BENCHMARK_DATA = {
  "lastUpdate": 1722236395565,
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
          "id": "4e7eae43dae4c3ffe18ffd8ba289bca63275183c",
          "message": "add tracing example",
          "timestamp": "2024-07-11T15:37:56+09:00",
          "tree_id": "a28ed45abb03a1a23e123f9e8ec2cb8b89e6e291",
          "url": "https://github.com/planetarium/libplanet/commit/4e7eae43dae4c3ffe18ffd8ba289bca63275183c"
        },
        "date": 1720680569978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1097856.25,
            "unit": "ns",
            "range": "± 121529.13171442952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1907233.8461538462,
            "unit": "ns",
            "range": "± 80504.68013748307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1739786,
            "unit": "ns",
            "range": "± 187099.97976558638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7232571.794871795,
            "unit": "ns",
            "range": "± 371449.01413683966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37239.36170212766,
            "unit": "ns",
            "range": "± 4572.832775008826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5218542.857142857,
            "unit": "ns",
            "range": "± 69567.89394635911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13745542.857142856,
            "unit": "ns",
            "range": "± 128607.4092511225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33880026.666666664,
            "unit": "ns",
            "range": "± 391522.7934737949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68918176.66666667,
            "unit": "ns",
            "range": "± 532863.911153236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138460026.66666666,
            "unit": "ns",
            "range": "± 1324559.7465177772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3482796.0416666665,
            "unit": "ns",
            "range": "± 6129.590557538451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076584.0401785714,
            "unit": "ns",
            "range": "± 1844.5864075980473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766468.359375,
            "unit": "ns",
            "range": "± 1541.4412103607272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913851.0677083333,
            "unit": "ns",
            "range": "± 3338.8900481705823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633454.62890625,
            "unit": "ns",
            "range": "± 1173.7702806427808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572489.08203125,
            "unit": "ns",
            "range": "± 1106.8314848741547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2259122,
            "unit": "ns",
            "range": "± 90570.62029833124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2377378.947368421,
            "unit": "ns",
            "range": "± 76792.09615119548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2901891.304347826,
            "unit": "ns",
            "range": "± 72841.4524407352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2463407.5,
            "unit": "ns",
            "range": "± 86027.95129401928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3083620,
            "unit": "ns",
            "range": "± 45240.99278940979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181875.55555555556,
            "unit": "ns",
            "range": "± 6800.807290166352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176345.45454545456,
            "unit": "ns",
            "range": "± 8955.982203247191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155621.875,
            "unit": "ns",
            "range": "± 11599.584412927541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2879366.6666666665,
            "unit": "ns",
            "range": "± 48388.63010883366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2568742.1052631577,
            "unit": "ns",
            "range": "± 56340.831017709366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14131.521739130434,
            "unit": "ns",
            "range": "± 1750.0348095643844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66492.92929292929,
            "unit": "ns",
            "range": "± 8613.684562360491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52896.84210526316,
            "unit": "ns",
            "range": "± 5926.831391826872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78144.44444444444,
            "unit": "ns",
            "range": "± 17446.011310829657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3681.6326530612246,
            "unit": "ns",
            "range": "± 904.4388747162758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13971,
            "unit": "ns",
            "range": "± 2422.9248123837124"
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
          "id": "a4a4ab41303489276416ec2ae380a6c37671ad9c",
          "message": "use cache",
          "timestamp": "2024-07-29T15:49:10+09:00",
          "tree_id": "1132a23c89566e057ba94b930032f7f43d2ce107",
          "url": "https://github.com/planetarium/libplanet/commit/a4a4ab41303489276416ec2ae380a6c37671ad9c"
        },
        "date": 1722236320327,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038970.4081632653,
            "unit": "ns",
            "range": "± 114041.57969267506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1748103.488372093,
            "unit": "ns",
            "range": "± 59590.392917128156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1548877.0833333333,
            "unit": "ns",
            "range": "± 124481.58813691174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6776609.677419355,
            "unit": "ns",
            "range": "± 166307.67742317996"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38775.757575757576,
            "unit": "ns",
            "range": "± 4439.734568943464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5012150,
            "unit": "ns",
            "range": "± 27895.733062189334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12976528.57142857,
            "unit": "ns",
            "range": "± 85134.60318425557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31876423.333333332,
            "unit": "ns",
            "range": "± 250414.4520779977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65450686.666666664,
            "unit": "ns",
            "range": "± 985516.1989439608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130851140,
            "unit": "ns",
            "range": "± 1385243.1786513154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3311425.1502403845,
            "unit": "ns",
            "range": "± 5362.10137045514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058983.2481971155,
            "unit": "ns",
            "range": "± 1895.0439315740305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736150.0911458334,
            "unit": "ns",
            "range": "± 2062.892456191464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941870.7632211538,
            "unit": "ns",
            "range": "± 3779.092066701499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605722.2395833334,
            "unit": "ns",
            "range": "± 1349.5848605080103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566871.42578125,
            "unit": "ns",
            "range": "± 2074.305785850297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2112691.304347826,
            "unit": "ns",
            "range": "± 52882.72542353829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2245077.777777778,
            "unit": "ns",
            "range": "± 48374.18486141435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2685009.090909091,
            "unit": "ns",
            "range": "± 64318.5295754905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2317820.588235294,
            "unit": "ns",
            "range": "± 57512.66937847203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2984000,
            "unit": "ns",
            "range": "± 51732.269351998206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174992.9411764706,
            "unit": "ns",
            "range": "± 9459.925352510454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168832.39436619717,
            "unit": "ns",
            "range": "± 7013.838864251309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145353.57142857142,
            "unit": "ns",
            "range": "± 4059.4181432042274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2734750,
            "unit": "ns",
            "range": "± 18736.708109196523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2540600,
            "unit": "ns",
            "range": "± 31448.2480862179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10217.20430107527,
            "unit": "ns",
            "range": "± 1036.6777680474818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51491.20879120879,
            "unit": "ns",
            "range": "± 4892.049067430137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44561.666666666664,
            "unit": "ns",
            "range": "± 1984.2679277354525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54867.67676767677,
            "unit": "ns",
            "range": "± 9797.363538351428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2547.872340425532,
            "unit": "ns",
            "range": "± 366.2447396676822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9766.666666666666,
            "unit": "ns",
            "range": "± 1162.4535455724822"
          }
        ]
      }
    ]
  }
}