window.BENCHMARK_DATA = {
  "lastUpdate": 1732172303882,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "7063430cde5bbc731a6c900aa461119b1c8f0ade",
          "message": "Prepare 5.3.1",
          "timestamp": "2024-10-10T17:56:15+09:00",
          "tree_id": "a924950a4d2ac793b68a6139ae388d38e427220c",
          "url": "https://github.com/planetarium/libplanet/commit/7063430cde5bbc731a6c900aa461119b1c8f0ade"
        },
        "date": 1728551213124,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1034599.8876404495,
            "unit": "ns",
            "range": "± 56992.56437913597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2056120.362745098,
            "unit": "ns",
            "range": "± 82614.81428848451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1625284.3255813953,
            "unit": "ns",
            "range": "± 87702.46744311356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7866362.863636363,
            "unit": "ns",
            "range": "± 192003.18071653455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10720420.157894736,
            "unit": "ns",
            "range": "± 235286.9525627196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27883024,
            "unit": "ns",
            "range": "± 228083.6830183842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69633402.38461539,
            "unit": "ns",
            "range": "± 406910.6976849135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140080365.46666667,
            "unit": "ns",
            "range": "± 798754.1867080856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291252331.1333333,
            "unit": "ns",
            "range": "± 1233660.777176198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746561.701171875,
            "unit": "ns",
            "range": "± 4716.173716193431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1258329.9417067308,
            "unit": "ns",
            "range": "± 2030.4529208170486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776462.6537760417,
            "unit": "ns",
            "range": "± 1947.1732233690545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918963.8229166667,
            "unit": "ns",
            "range": "± 2064.062250559594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628667.4750651042,
            "unit": "ns",
            "range": "± 1510.0117640594121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578622.5674525669,
            "unit": "ns",
            "range": "± 560.1006547534304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2576531.1875,
            "unit": "ns",
            "range": "± 49082.45147126585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2646884.1875,
            "unit": "ns",
            "range": "± 51536.921411377494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3192445.75,
            "unit": "ns",
            "range": "± 60989.21100271206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2702760,
            "unit": "ns",
            "range": "± 62988.954110296916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3353436.4285714286,
            "unit": "ns",
            "range": "± 45041.516284277255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229984.7,
            "unit": "ns",
            "range": "± 20666.151156082757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211143.67,
            "unit": "ns",
            "range": "± 17548.59920223569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180998.23469387754,
            "unit": "ns",
            "range": "± 14055.117709608441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3154436.533333333,
            "unit": "ns",
            "range": "± 47531.98801989887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2929095.5,
            "unit": "ns",
            "range": "± 37235.936638496874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18288.90404040404,
            "unit": "ns",
            "range": "± 4830.95897844435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74190.8,
            "unit": "ns",
            "range": "± 14550.008433473204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52920.38888888889,
            "unit": "ns",
            "range": "± 3461.9452500699517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65908.36458333333,
            "unit": "ns",
            "range": "± 12228.880411911701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3133.467391304348,
            "unit": "ns",
            "range": "± 482.83843567900027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20250.13829787234,
            "unit": "ns",
            "range": "± 2555.9988382847914"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38946.49,
            "unit": "ns",
            "range": "± 7483.449769621256"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ca328bb06cc3329bf0952effad24aeac5e3a664",
          "message": "Merge pull request #3967 from riemannulus/fix/system.text.json-version\n\n🔧 Patch: CVE-2024-43485 to `5.3-maintenance`",
          "timestamp": "2024-10-14T15:25:19+09:00",
          "tree_id": "62916e6a449a220d3db869842fbd8c7d116fcded",
          "url": "https://github.com/planetarium/libplanet/commit/4ca328bb06cc3329bf0952effad24aeac5e3a664"
        },
        "date": 1728887630101,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10529437.366666667,
            "unit": "ns",
            "range": "± 92781.11073601956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27469573.933333334,
            "unit": "ns",
            "range": "± 107181.63691700892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69128589.26666667,
            "unit": "ns",
            "range": "± 404322.5236787134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138953150.5,
            "unit": "ns",
            "range": "± 645167.0523514105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288841939.3333333,
            "unit": "ns",
            "range": "± 624457.2284848277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204213.3909090909,
            "unit": "ns",
            "range": "± 8470.688462274824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196344.66666666666,
            "unit": "ns",
            "range": "± 6438.044187865774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169541.06896551725,
            "unit": "ns",
            "range": "± 7382.662927336524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3137845.8666666667,
            "unit": "ns",
            "range": "± 48134.08756924566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2788607.3,
            "unit": "ns",
            "range": "± 38775.67243996458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19847.515463917527,
            "unit": "ns",
            "range": "± 2612.3302102457387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71895.08,
            "unit": "ns",
            "range": "± 8926.000797443365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50235.28571428572,
            "unit": "ns",
            "range": "± 893.8962621426087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57819.663265306124,
            "unit": "ns",
            "range": "± 12813.39704101928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2522.3541666666665,
            "unit": "ns",
            "range": "± 361.8097487606513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11843.827956989247,
            "unit": "ns",
            "range": "± 928.0057348920424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3695231.475060096,
            "unit": "ns",
            "range": "± 7133.3891709255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202575.33203125,
            "unit": "ns",
            "range": "± 2446.6000669902455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758335.2904947917,
            "unit": "ns",
            "range": "± 1893.5832047020024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981926.09140625,
            "unit": "ns",
            "range": "± 1884.8397424030213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619233.831655649,
            "unit": "ns",
            "range": "± 959.3169983774901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569353.5827473958,
            "unit": "ns",
            "range": "± 837.0072354542151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2454749.153846154,
            "unit": "ns",
            "range": "± 34743.90185544833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2582014.3846153845,
            "unit": "ns",
            "range": "± 40438.14822157097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3084699.8,
            "unit": "ns",
            "range": "± 29744.179800905105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2634681.9615384615,
            "unit": "ns",
            "range": "± 39291.78298664023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3343276.4285714286,
            "unit": "ns",
            "range": "± 44574.06574320006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982464.0804597702,
            "unit": "ns",
            "range": "± 55828.65442838604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1920572.6666666667,
            "unit": "ns",
            "range": "± 80938.82108618063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574586.3536585367,
            "unit": "ns",
            "range": "± 83276.47768318388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7723982.304347826,
            "unit": "ns",
            "range": "± 175888.24906985034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30381.242857142857,
            "unit": "ns",
            "range": "± 990.0717247594071"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e380da42ce0f6a81121b41fc301539ed994ffc8",
          "message": "Merge pull request #3968 from riemannulus/bump/bouncycastle\n\n🔧 Patch:  CVE-2024-29857 to `5.3-maintenance`",
          "timestamp": "2024-10-14T15:38:33+09:00",
          "tree_id": "fc020f10caa797606022ceeb9067c6e9edf55986",
          "url": "https://github.com/planetarium/libplanet/commit/0e380da42ce0f6a81121b41fc301539ed994ffc8"
        },
        "date": 1728888443814,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10764473.466666667,
            "unit": "ns",
            "range": "± 128230.33764723467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27442797.433333334,
            "unit": "ns",
            "range": "± 110720.34006287235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69227748,
            "unit": "ns",
            "range": "± 659671.791762605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140862083,
            "unit": "ns",
            "range": "± 413125.6832732625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293859153.03846157,
            "unit": "ns",
            "range": "± 607420.2557964043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210796.40425531915,
            "unit": "ns",
            "range": "± 8196.56567440072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202162.5,
            "unit": "ns",
            "range": "± 6946.373586267873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169838.7027027027,
            "unit": "ns",
            "range": "± 8126.636072546194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3167369.3571428573,
            "unit": "ns",
            "range": "± 26946.74442333403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2905959.5,
            "unit": "ns",
            "range": "± 41103.81395060213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13284.153846153846,
            "unit": "ns",
            "range": "± 992.0331639066299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70451.36734693877,
            "unit": "ns",
            "range": "± 6214.689716794893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51467,
            "unit": "ns",
            "range": "± 1341.4945334712822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67125.74489795919,
            "unit": "ns",
            "range": "± 12167.768124863229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3811.78125,
            "unit": "ns",
            "range": "± 389.61290379379324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13832.741935483871,
            "unit": "ns",
            "range": "± 965.6183972981052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3724500.5084134615,
            "unit": "ns",
            "range": "± 14810.271349463861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1233950.2608072916,
            "unit": "ns",
            "range": "± 2779.5295028607748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774947.48203125,
            "unit": "ns",
            "range": "± 3026.683342617268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963564.744419643,
            "unit": "ns",
            "range": "± 3809.232529843545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624343.7370793269,
            "unit": "ns",
            "range": "± 1124.0289258262633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584611.8049879808,
            "unit": "ns",
            "range": "± 522.9786853351256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2551241.3076923075,
            "unit": "ns",
            "range": "± 32824.22455388858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2571189.714285714,
            "unit": "ns",
            "range": "± 39730.015100344805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3097363.1,
            "unit": "ns",
            "range": "± 49792.70440077399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2565199.1428571427,
            "unit": "ns",
            "range": "± 43914.929651380684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3349592.5,
            "unit": "ns",
            "range": "± 52969.94434852385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029300.6827956989,
            "unit": "ns",
            "range": "± 84765.56697764907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1986699.0612244897,
            "unit": "ns",
            "range": "± 79225.16333958342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1598941.8157894737,
            "unit": "ns",
            "range": "± 81315.98215581986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7804372.928571428,
            "unit": "ns",
            "range": "± 223066.0596780492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31775.882352941175,
            "unit": "ns",
            "range": "± 938.3817070702055"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "866c901166f62fbf6e3294afb4ca779f76656073",
          "message": "Merge pull request #3969 from riemannulus/release/5.3.1\n\n🚀 release: 5.3.1",
          "timestamp": "2024-10-14T15:48:36+09:00",
          "tree_id": "3760144b41867ff68c42b61e7d6b211a9db2f29c",
          "url": "https://github.com/planetarium/libplanet/commit/866c901166f62fbf6e3294afb4ca779f76656073"
        },
        "date": 1728889113655,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10954029.266666668,
            "unit": "ns",
            "range": "± 88724.38906158994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27760140.466666665,
            "unit": "ns",
            "range": "± 96365.90619157694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70101338.46666667,
            "unit": "ns",
            "range": "± 443167.8427648357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138714751.2,
            "unit": "ns",
            "range": "± 755843.5053394887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293047914.14285713,
            "unit": "ns",
            "range": "± 2924787.744528636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233873,
            "unit": "ns",
            "range": "± 17401.31386412538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198470.12121212122,
            "unit": "ns",
            "range": "± 9259.560826128522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182108,
            "unit": "ns",
            "range": "± 4196.5123865569985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3313755.9285714286,
            "unit": "ns",
            "range": "± 16627.60033782703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2863686.4,
            "unit": "ns",
            "range": "± 53062.05231182504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14166.966666666667,
            "unit": "ns",
            "range": "± 814.407228423143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66377.85802469136,
            "unit": "ns",
            "range": "± 3493.7832979044433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53360.91935483871,
            "unit": "ns",
            "range": "± 1591.765618722253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68403.09183673469,
            "unit": "ns",
            "range": "± 9621.4254059362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3554.417525773196,
            "unit": "ns",
            "range": "± 547.0539596729143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21742.077777777777,
            "unit": "ns",
            "range": "± 1799.513868360556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3702481.0426897323,
            "unit": "ns",
            "range": "± 6483.457485701331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204845.2830729166,
            "unit": "ns",
            "range": "± 2577.8647863618385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783952.2606724331,
            "unit": "ns",
            "range": "± 1452.227744474154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1882166.6153738839,
            "unit": "ns",
            "range": "± 697.2009676187904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622193.9851262019,
            "unit": "ns",
            "range": "± 536.718989251711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561268.876953125,
            "unit": "ns",
            "range": "± 526.0970997896344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2523845,
            "unit": "ns",
            "range": "± 50601.08804385754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2595940.2,
            "unit": "ns",
            "range": "± 44560.41277412049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3090238.4285714286,
            "unit": "ns",
            "range": "± 45369.79282045962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2649906.8666666667,
            "unit": "ns",
            "range": "± 43224.662860565186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3276423.3571428573,
            "unit": "ns",
            "range": "± 23657.995662085425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001771.411111111,
            "unit": "ns",
            "range": "± 70445.78308631181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1971199.6129032257,
            "unit": "ns",
            "range": "± 59967.36623957924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1628509.884057971,
            "unit": "ns",
            "range": "± 78483.57446316886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7873490.307692308,
            "unit": "ns",
            "range": "± 270497.79324016225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34082.536082474224,
            "unit": "ns",
            "range": "± 4157.891959028676"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57a4569717082553221fedeaa74ac656edb9d5c2",
          "message": "Merge pull request #3971 from riemannulus/prepare/5.3.2\n\n🧹  prepare: 5.3.2",
          "timestamp": "2024-10-16T15:08:31+09:00",
          "tree_id": "6dbfc866a79fbd44fcbac641b75e9992b736d867",
          "url": "https://github.com/planetarium/libplanet/commit/57a4569717082553221fedeaa74ac656edb9d5c2"
        },
        "date": 1729059432606,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10817702.933333334,
            "unit": "ns",
            "range": "± 66594.3489359985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27585200.714285713,
            "unit": "ns",
            "range": "± 136453.96078936072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69366017.58333333,
            "unit": "ns",
            "range": "± 133212.48700919235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138774553.64285713,
            "unit": "ns",
            "range": "± 626505.6345837365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288232699.46666664,
            "unit": "ns",
            "range": "± 2463907.9916251474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200125.87142857144,
            "unit": "ns",
            "range": "± 9403.224009127855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195455,
            "unit": "ns",
            "range": "± 8409.11504389306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174432.84375,
            "unit": "ns",
            "range": "± 5320.0223265925815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3090293.566666667,
            "unit": "ns",
            "range": "± 51826.3428858704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2901626.911764706,
            "unit": "ns",
            "range": "± 55505.603842155906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16844.542553191488,
            "unit": "ns",
            "range": "± 1227.811145024826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69829.13636363637,
            "unit": "ns",
            "range": "± 14334.588971744819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50297.653846153844,
            "unit": "ns",
            "range": "± 1368.6685703210312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51539.60227272727,
            "unit": "ns",
            "range": "± 4722.599926934297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2623.851063829787,
            "unit": "ns",
            "range": "± 422.3393365694343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16190.272727272728,
            "unit": "ns",
            "range": "± 968.8577790518368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3808568.6941964286,
            "unit": "ns",
            "range": "± 5730.163036058211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220564.1026041666,
            "unit": "ns",
            "range": "± 1699.288815079889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773349.0890764509,
            "unit": "ns",
            "range": "± 1123.3347675142404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934891.0084635417,
            "unit": "ns",
            "range": "± 1547.5746268115404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640752.6117466518,
            "unit": "ns",
            "range": "± 596.8605950864361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575956.4475661058,
            "unit": "ns",
            "range": "± 470.2774012284542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2453374.9,
            "unit": "ns",
            "range": "± 54179.99712935432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2567669.904761905,
            "unit": "ns",
            "range": "± 58376.09491042096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3035095.0714285714,
            "unit": "ns",
            "range": "± 46166.77842422437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2599314.111111111,
            "unit": "ns",
            "range": "± 54171.33544286497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3262349.214285714,
            "unit": "ns",
            "range": "± 28928.255062983164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005995.2954545454,
            "unit": "ns",
            "range": "± 56428.1347766473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2003768.5918367347,
            "unit": "ns",
            "range": "± 79745.75535802265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1604205.8507462686,
            "unit": "ns",
            "range": "± 73938.46579015302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7688839.1875,
            "unit": "ns",
            "range": "± 122806.18505554121"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31023.804347826088,
            "unit": "ns",
            "range": "± 1192.8534904834098"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46cff67d3e5e0be88e23aa0924e4b5f88e20c672",
          "message": "Merge pull request #3973 from riemannulus/fix/unvalidate-action-scheme\n\nfix: do not check action is valid when append block",
          "timestamp": "2024-10-22T13:30:46+09:00",
          "tree_id": "357b3e893c3e15f3f21891a6b538d3b86f3d8891",
          "url": "https://github.com/planetarium/libplanet/commit/46cff67d3e5e0be88e23aa0924e4b5f88e20c672"
        },
        "date": 1729572004806,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10496077.1,
            "unit": "ns",
            "range": "± 78026.1432806796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27597297.4,
            "unit": "ns",
            "range": "± 183099.24966874425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70426742,
            "unit": "ns",
            "range": "± 412892.8193985512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139761739.46666667,
            "unit": "ns",
            "range": "± 450099.2710813704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286684049.1923077,
            "unit": "ns",
            "range": "± 1639136.5606292225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202786.14942528735,
            "unit": "ns",
            "range": "± 10791.504119066585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196877.02597402598,
            "unit": "ns",
            "range": "± 9648.318042640803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173165.39534883722,
            "unit": "ns",
            "range": "± 6304.270068920161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3226255.3571428573,
            "unit": "ns",
            "range": "± 27337.389272702192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3021924.0625,
            "unit": "ns",
            "range": "± 59167.867878287616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14071.573033707866,
            "unit": "ns",
            "range": "± 1307.511758052819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62987.20212765958,
            "unit": "ns",
            "range": "± 6160.416496497457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50832.96666666667,
            "unit": "ns",
            "range": "± 1734.9888079282712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59597.948979591834,
            "unit": "ns",
            "range": "± 10793.94192192384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2888.2021276595747,
            "unit": "ns",
            "range": "± 372.4530663883586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12801.7,
            "unit": "ns",
            "range": "± 1342.206695514199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3745073.73828125,
            "unit": "ns",
            "range": "± 3045.4727332630323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226985.5975167411,
            "unit": "ns",
            "range": "± 1234.2971090109697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762096.9853515625,
            "unit": "ns",
            "range": "± 1033.9366949090695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1990238.0359375,
            "unit": "ns",
            "range": "± 5240.77989523636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641880.1415318081,
            "unit": "ns",
            "range": "± 363.1856134913321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566204.7142857143,
            "unit": "ns",
            "range": "± 949.1599859699525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2456307.9444444445,
            "unit": "ns",
            "range": "± 51591.91013016561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2532318.3571428573,
            "unit": "ns",
            "range": "± 35894.369034726034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3040223.433333333,
            "unit": "ns",
            "range": "± 46205.504853653016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2593256.4375,
            "unit": "ns",
            "range": "± 49598.42342920287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3292514.933333333,
            "unit": "ns",
            "range": "± 39183.56343903592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998101.4883720931,
            "unit": "ns",
            "range": "± 51572.578287472796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1914680.96875,
            "unit": "ns",
            "range": "± 59008.0171668794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1589849.0507246377,
            "unit": "ns",
            "range": "± 75991.64307605228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7702612.72972973,
            "unit": "ns",
            "range": "± 258483.023720842"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30734.337837837837,
            "unit": "ns",
            "range": "± 1052.4002331578756"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8272b05aee35205bbf97d9abcb37023fc895492e",
          "message": "Merge pull request #3988 from planetarium/release/5.3.2\n\n🚀 Release 5.3.2",
          "timestamp": "2024-11-21T15:48:01+09:00",
          "tree_id": "df07ab43c0b7d586cd6ed2c4d15f88d8b220a3fa",
          "url": "https://github.com/planetarium/libplanet/commit/8272b05aee35205bbf97d9abcb37023fc895492e"
        },
        "date": 1732172277618,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10876248,
            "unit": "ns",
            "range": "± 107003.33753026297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27387363.92857143,
            "unit": "ns",
            "range": "± 93112.91913313912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69963267.56666666,
            "unit": "ns",
            "range": "± 331463.79364213836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139663387.96666667,
            "unit": "ns",
            "range": "± 632961.5887755486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287561645.1333333,
            "unit": "ns",
            "range": "± 1628835.0579552627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207605.27956989247,
            "unit": "ns",
            "range": "± 12179.91582515855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198001.23529411765,
            "unit": "ns",
            "range": "± 9495.852357925109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168833.8153846154,
            "unit": "ns",
            "range": "± 7833.47932533077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3117022.2,
            "unit": "ns",
            "range": "± 31501.285983273763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2860882.230769231,
            "unit": "ns",
            "range": "± 30669.5523012478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14139.57142857143,
            "unit": "ns",
            "range": "± 1554.621920045422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81917.53,
            "unit": "ns",
            "range": "± 14640.768445537913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52281.07142857143,
            "unit": "ns",
            "range": "± 2057.6982893514783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64056.77319587629,
            "unit": "ns",
            "range": "± 10449.27542295114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2925.2708333333335,
            "unit": "ns",
            "range": "± 448.5621820220145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13600.872340425532,
            "unit": "ns",
            "range": "± 2166.53368773415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3825702.1121651786,
            "unit": "ns",
            "range": "± 5169.176705589946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1187540.4432291666,
            "unit": "ns",
            "range": "± 1176.9284310647852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775055.1353515625,
            "unit": "ns",
            "range": "± 1600.6529360487675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918784.803515625,
            "unit": "ns",
            "range": "± 2022.7992381595952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642379.4354817708,
            "unit": "ns",
            "range": "± 768.5597225237773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575697.0423177084,
            "unit": "ns",
            "range": "± 553.385758471834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2437326.1142857145,
            "unit": "ns",
            "range": "± 79953.68294345077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2548187.947368421,
            "unit": "ns",
            "range": "± 55632.61418096571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3086825.8333333335,
            "unit": "ns",
            "range": "± 55116.386095589536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2584872.375,
            "unit": "ns",
            "range": "± 50335.82328570776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3259145.5625,
            "unit": "ns",
            "range": "± 59742.60025360881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1031419.2446808511,
            "unit": "ns",
            "range": "± 86525.13467340756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1952847.2368421052,
            "unit": "ns",
            "range": "± 66343.01182427102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1578871,
            "unit": "ns",
            "range": "± 77733.86825702166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7615970.115384615,
            "unit": "ns",
            "range": "± 206199.81777878987"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33985.38383838384,
            "unit": "ns",
            "range": "± 5227.001559225356"
          }
        ]
      }
    ]
  }
}