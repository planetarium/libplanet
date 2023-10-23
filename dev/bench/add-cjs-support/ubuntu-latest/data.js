window.BENCHMARK_DATA = {
  "lastUpdate": 1698026281191,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "8ba410942864b26987a6a6745a77f65b18f05d6b",
          "message": "add conditional exports to support cjs",
          "timestamp": "2023-10-23T10:34:47+09:00",
          "tree_id": "7a258ff201260e1e5d6b8bef08db48450bc33a94",
          "url": "https://github.com/planetarium/libplanet/commit/8ba410942864b26987a6a6745a77f65b18f05d6b"
        },
        "date": 1698025724545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4977998.497395833,
            "unit": "ns",
            "range": "± 62851.596603230246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1634998.675502232,
            "unit": "ns",
            "range": "± 5206.115929403484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062790.334263393,
            "unit": "ns",
            "range": "± 1335.4717485978917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2514936.0270647323,
            "unit": "ns",
            "range": "± 9012.092637843078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809562.4230608259,
            "unit": "ns",
            "range": "± 1122.6933003463173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747303.701311384,
            "unit": "ns",
            "range": "± 1201.435371542812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3420670.9615384615,
            "unit": "ns",
            "range": "± 76460.97342172974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3623438.5714285714,
            "unit": "ns",
            "range": "± 41002.44916833869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4323387.5,
            "unit": "ns",
            "range": "± 82041.22343797659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3790390.6666666665,
            "unit": "ns",
            "range": "± 70015.10001285096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5875216.266666667,
            "unit": "ns",
            "range": "± 102080.93523730966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48261.54255319149,
            "unit": "ns",
            "range": "± 3543.1812445178534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7552916.285714285,
            "unit": "ns",
            "range": "± 29178.669691900126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19860563.214285713,
            "unit": "ns",
            "range": "± 112687.98957651478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50397538.266666666,
            "unit": "ns",
            "range": "± 483124.6035850477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101707885.28571428,
            "unit": "ns",
            "range": "± 1234362.2481155961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214095396.66666666,
            "unit": "ns",
            "range": "± 4875292.081557743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275170.05263157893,
            "unit": "ns",
            "range": "± 8751.973105557301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263864.6231884058,
            "unit": "ns",
            "range": "± 12654.556552182918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247905.72727272726,
            "unit": "ns",
            "range": "± 16255.412881728756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242295.846153846,
            "unit": "ns",
            "range": "± 44409.87985205949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4009235,
            "unit": "ns",
            "range": "± 59754.56778077025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24915.91304347826,
            "unit": "ns",
            "range": "± 2655.877867128442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107431.07142857143,
            "unit": "ns",
            "range": "± 14279.612623070292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82180.66666666667,
            "unit": "ns",
            "range": "± 9200.646128597353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94910.22916666667,
            "unit": "ns",
            "range": "± 15431.451178120593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6842.333333333333,
            "unit": "ns",
            "range": "± 1245.1144935470052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25056.864583333332,
            "unit": "ns",
            "range": "± 2493.658097611837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436588.2647058824,
            "unit": "ns",
            "range": "± 46014.80075150315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2593893.1142857145,
            "unit": "ns",
            "range": "± 82153.3184248929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1897635.0412371133,
            "unit": "ns",
            "range": "± 140605.3801062064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4423178.533333333,
            "unit": "ns",
            "range": "± 131669.72249343753"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "7fbea9473ea0daa98391f42d2deb04fed9519242",
          "message": "remove unused dependancy",
          "timestamp": "2023-10-23T10:39:04+09:00",
          "tree_id": "5aec75930706f355e45521f0cc263516994e7350",
          "url": "https://github.com/planetarium/libplanet/commit/7fbea9473ea0daa98391f42d2deb04fed9519242"
        },
        "date": 1698025971339,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4895280.845552885,
            "unit": "ns",
            "range": "± 6306.585962462113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1553747.4140625,
            "unit": "ns",
            "range": "± 1193.6430557440149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1069198.2373697916,
            "unit": "ns",
            "range": "± 569.1384245774622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545077.122916667,
            "unit": "ns",
            "range": "± 7945.441951697156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831082.3747209822,
            "unit": "ns",
            "range": "± 627.8919367036042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720790.5093098958,
            "unit": "ns",
            "range": "± 459.39089416764807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3283633.4285714286,
            "unit": "ns",
            "range": "± 29585.188044836756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3382855.8,
            "unit": "ns",
            "range": "± 37264.02385143076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4148962.904761905,
            "unit": "ns",
            "range": "± 95716.1343279725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3587206.2413793104,
            "unit": "ns",
            "range": "± 144846.42652391442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5853189.684210527,
            "unit": "ns",
            "range": "± 124114.25054183506"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48379.936170212764,
            "unit": "ns",
            "range": "± 4499.150903903647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7946082.6,
            "unit": "ns",
            "range": "± 57246.78176331961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19906852.933333334,
            "unit": "ns",
            "range": "± 82681.34465824343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50625081.28571428,
            "unit": "ns",
            "range": "± 177474.12019499918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102129866,
            "unit": "ns",
            "range": "± 430417.8446000384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206356052.08333334,
            "unit": "ns",
            "range": "± 307013.24301921285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268668.4035087719,
            "unit": "ns",
            "range": "± 11600.350474785002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261279.33846153846,
            "unit": "ns",
            "range": "± 11622.773246783827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239955.03125,
            "unit": "ns",
            "range": "± 13817.216283320811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4249971.714285715,
            "unit": "ns",
            "range": "± 35131.84001274796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3858080.2666666666,
            "unit": "ns",
            "range": "± 39319.527443146886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19078.15625,
            "unit": "ns",
            "range": "± 1778.549369441139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93055.82828282828,
            "unit": "ns",
            "range": "± 10029.960457366458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76761.10309278351,
            "unit": "ns",
            "range": "± 7435.179378138398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75219.45205479451,
            "unit": "ns",
            "range": "± 2624.1961681473686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5295.917525773196,
            "unit": "ns",
            "range": "± 815.3193861674582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21780.291666666668,
            "unit": "ns",
            "range": "± 3257.6881047330626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1366572.3195876288,
            "unit": "ns",
            "range": "± 95153.79203103985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2583754.43902439,
            "unit": "ns",
            "range": "± 92087.36325578249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1711065.388888889,
            "unit": "ns",
            "range": "± 95771.3343750136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4491866.779661017,
            "unit": "ns",
            "range": "± 193025.8885477736"
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
          "id": "bcb549979a34e9f1afab9435f427aba162c2463a",
          "message": "Merge pull request #3418 from greymistcube/prepare/3.4.0\n\n🔧 Prepare 3.4.0",
          "timestamp": "2023-09-08T10:21:29+09:00",
          "tree_id": "d08370af5794578e62bc1c40dd2c906d7efde68b",
          "url": "https://github.com/planetarium/libplanet/commit/bcb549979a34e9f1afab9435f427aba162c2463a"
        },
        "date": 1698026081064,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5068747.211458334,
            "unit": "ns",
            "range": "± 150755.5115427361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1714311.5426772388,
            "unit": "ns",
            "range": "± 81292.2830708817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142405.209140625,
            "unit": "ns",
            "range": "± 74538.31660520696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663564.9121981533,
            "unit": "ns",
            "range": "± 99324.63041986123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945882.5036621094,
            "unit": "ns",
            "range": "± 48946.015434188295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 977742.4254557291,
            "unit": "ns",
            "range": "± 17564.18111154698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4819613.023809524,
            "unit": "ns",
            "range": "± 173903.6034979862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4753304.731707317,
            "unit": "ns",
            "range": "± 163465.60170797777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5560777.548387097,
            "unit": "ns",
            "range": "± 506194.236712474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5131722.044117647,
            "unit": "ns",
            "range": "± 245892.338357296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8007353.71875,
            "unit": "ns",
            "range": "± 245357.43901003595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65347.927835051545,
            "unit": "ns",
            "range": "± 18317.872147308884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11326430.225806452,
            "unit": "ns",
            "range": "± 338524.5086715495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28681297.873239435,
            "unit": "ns",
            "range": "± 1401673.9285908414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71522194.58823529,
            "unit": "ns",
            "range": "± 1447315.7576880925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147172051.92682928,
            "unit": "ns",
            "range": "± 5268316.317966564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293220592.0208333,
            "unit": "ns",
            "range": "± 11357077.836536255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385740.1263157895,
            "unit": "ns",
            "range": "± 28322.253396812135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366364.3058823529,
            "unit": "ns",
            "range": "± 19087.50836967636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267562.20408163266,
            "unit": "ns",
            "range": "± 42889.13351526095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4382711.824742268,
            "unit": "ns",
            "range": "± 449872.78428751876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4204589.464646464,
            "unit": "ns",
            "range": "± 468070.72917469294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28707.81818181818,
            "unit": "ns",
            "range": "± 12146.081494065584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97236.6105263158,
            "unit": "ns",
            "range": "± 18585.305692592796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93455.84848484848,
            "unit": "ns",
            "range": "± 23279.314125864756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100474.29166666667,
            "unit": "ns",
            "range": "± 23783.40093953926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4849.95652173913,
            "unit": "ns",
            "range": "± 683.4962143362204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25157.40404040404,
            "unit": "ns",
            "range": "± 10735.408317015464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1438196.806122449,
            "unit": "ns",
            "range": "± 205656.47963897977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2830021.4242424243,
            "unit": "ns",
            "range": "± 331293.9288179216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1769076.0612244897,
            "unit": "ns",
            "range": "± 263762.7231879478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5098589.84,
            "unit": "ns",
            "range": "± 639811.2147498917"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62b18225439af051a67d52760d028260f1e05e70",
          "message": "Merge branch 'main' into add-cjs-support",
          "timestamp": "2023-10-23T10:39:29+09:00",
          "tree_id": "09568e04755ba98b97acc51e92aa136ef1a5be0d",
          "url": "https://github.com/planetarium/libplanet/commit/62b18225439af051a67d52760d028260f1e05e70"
        },
        "date": 1698026248162,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5651959.753255208,
            "unit": "ns",
            "range": "± 51753.29402851642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1811193.42359375,
            "unit": "ns",
            "range": "± 48222.98709541172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1187824.316611842,
            "unit": "ns",
            "range": "± 21359.386409605333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2963749.7338541667,
            "unit": "ns",
            "range": "± 46465.22157052806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 935116.3441233916,
            "unit": "ns",
            "range": "± 18976.22795258565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898345.4511067708,
            "unit": "ns",
            "range": "± 12088.597736090936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3851904.488372093,
            "unit": "ns",
            "range": "± 209368.76155612833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4118477.3645833335,
            "unit": "ns",
            "range": "± 273761.4403292388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4745689.530612245,
            "unit": "ns",
            "range": "± 330158.00214755675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5229219.041237113,
            "unit": "ns",
            "range": "± 339900.8971229984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13231298.932584269,
            "unit": "ns",
            "range": "± 887978.6134210025"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59738.92307692308,
            "unit": "ns",
            "range": "± 8146.1175404548385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9469105.235294119,
            "unit": "ns",
            "range": "± 300899.4272583911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24808406.43037975,
            "unit": "ns",
            "range": "± 1287858.8273896137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61184241.41,
            "unit": "ns",
            "range": "± 4720552.585085426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126917932.63636364,
            "unit": "ns",
            "range": "± 7750515.8565734215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257499736.4,
            "unit": "ns",
            "range": "± 9771962.211408587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310903.92045454547,
            "unit": "ns",
            "range": "± 21464.738167580686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302632.35869565216,
            "unit": "ns",
            "range": "± 23184.081639894823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272187.6808510638,
            "unit": "ns",
            "range": "± 24395.40844521519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4635677.21875,
            "unit": "ns",
            "range": "± 328699.6134164605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4294783.59375,
            "unit": "ns",
            "range": "± 334566.80423102283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26684.030612244896,
            "unit": "ns",
            "range": "± 5599.48969039748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96398.2,
            "unit": "ns",
            "range": "± 10139.183567576893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103809.68,
            "unit": "ns",
            "range": "± 16861.790279561625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105992.71578947369,
            "unit": "ns",
            "range": "± 14450.657574424034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11658.61,
            "unit": "ns",
            "range": "± 6268.179014633749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24385.36,
            "unit": "ns",
            "range": "± 7280.538178742089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1545892.78125,
            "unit": "ns",
            "range": "± 159392.19232778283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2923051.7216494847,
            "unit": "ns",
            "range": "± 221366.79539726136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2367371.547368421,
            "unit": "ns",
            "range": "± 182903.00388793272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11269349.393258426,
            "unit": "ns",
            "range": "± 927827.0461842872"
          }
        ]
      }
    ]
  }
}