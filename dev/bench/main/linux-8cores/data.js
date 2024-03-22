window.BENCHMARK_DATA = {
  "lastUpdate": 1711106351398,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "1cd705f8031f944afb22d53c6d7c52ad070ce6bb",
          "message": "Merge pull request #3690 from riemannulus/ci/benchmark/use-large-runner\n\n🔀 ci: use large runner",
          "timestamp": "2024-03-08T16:33:12+09:00",
          "tree_id": "338c9f6bc38dfb9bc884984ee4efbfe67e0e2cbf",
          "url": "https://github.com/planetarium/libplanet/commit/1cd705f8031f944afb22d53c6d7c52ad070ce6bb"
        },
        "date": 1709883755402,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967698.6989247312,
            "unit": "ns",
            "range": "± 70075.34762168271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1836328.8648648649,
            "unit": "ns",
            "range": "± 61376.73097815299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1622449.6489361702,
            "unit": "ns",
            "range": "± 127023.67594709258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7766928.339285715,
            "unit": "ns",
            "range": "± 334275.1189793862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5615271.357142857,
            "unit": "ns",
            "range": "± 23778.785114393115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14246643.785714285,
            "unit": "ns",
            "range": "± 84304.12466907999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36683859.64285714,
            "unit": "ns",
            "range": "± 222227.33543200485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75673326.07142857,
            "unit": "ns",
            "range": "± 357894.5544824974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148623854.42857143,
            "unit": "ns",
            "range": "± 322868.1478002375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3739357.636418269,
            "unit": "ns",
            "range": "± 3227.017910435657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219426.7916666667,
            "unit": "ns",
            "range": "± 2239.070145011453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756453.5592215402,
            "unit": "ns",
            "range": "± 1264.8004941476593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942070.5128348214,
            "unit": "ns",
            "range": "± 2688.7798620683657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613913.4108072916,
            "unit": "ns",
            "range": "± 683.5874207780245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573732.2595052083,
            "unit": "ns",
            "range": "± 679.967272685228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417277.4411764704,
            "unit": "ns",
            "range": "± 38826.14568411116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2489799.25,
            "unit": "ns",
            "range": "± 72375.02459407428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3144289.48,
            "unit": "ns",
            "range": "± 81967.71913641777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3162789.6447368423,
            "unit": "ns",
            "range": "± 160552.2139413181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8689520.4,
            "unit": "ns",
            "range": "± 167258.05648009904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36389.01724137931,
            "unit": "ns",
            "range": "± 1973.8769244994407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203061.95,
            "unit": "ns",
            "range": "± 6648.516622487094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195270.03333333333,
            "unit": "ns",
            "range": "± 5715.241205175275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161936.92307692306,
            "unit": "ns",
            "range": "± 1957.4131509698566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3200198.566666667,
            "unit": "ns",
            "range": "± 52810.568524906164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2802839.5,
            "unit": "ns",
            "range": "± 16817.569918437635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12853.301075268817,
            "unit": "ns",
            "range": "± 1151.62265280575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60571.4625,
            "unit": "ns",
            "range": "± 2997.8142984841816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96256.38144329897,
            "unit": "ns",
            "range": "± 8825.785856704324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56526.510416666664,
            "unit": "ns",
            "range": "± 8224.19289080415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2829.413043478261,
            "unit": "ns",
            "range": "± 349.9898319456735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11911.75974025974,
            "unit": "ns",
            "range": "± 610.6348810566667"
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
          "id": "b5716038dda700b49d47668e22fa8a6637d2e63a",
          "message": "Merge pull request #3688 from riemannulus/introduce/libplanet.store.remote",
          "timestamp": "2024-03-08T18:20:31+09:00",
          "tree_id": "56c5ac4603fa37d1f9bb8d744b3c1951d8b80316",
          "url": "https://github.com/planetarium/libplanet/commit/b5716038dda700b49d47668e22fa8a6637d2e63a"
        },
        "date": 1709890219844,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996628.43,
            "unit": "ns",
            "range": "± 99514.7108025048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1870161.861111111,
            "unit": "ns",
            "range": "± 60375.68987604804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612778.7234042552,
            "unit": "ns",
            "range": "± 146343.60137603426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7781932.76744186,
            "unit": "ns",
            "range": "± 288489.0102303839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5614312.833333333,
            "unit": "ns",
            "range": "± 12387.933005611352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14293182.733333332,
            "unit": "ns",
            "range": "± 80227.22103898462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36548835.766666666,
            "unit": "ns",
            "range": "± 151461.12953091614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74874284.78571428,
            "unit": "ns",
            "range": "± 246327.74879359367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151441538.2142857,
            "unit": "ns",
            "range": "± 638865.1537755689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3651342.689453125,
            "unit": "ns",
            "range": "± 3601.307741219418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203414.191796875,
            "unit": "ns",
            "range": "± 1808.7198416343492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761738.1198567708,
            "unit": "ns",
            "range": "± 975.9623332030963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925663.6208333333,
            "unit": "ns",
            "range": "± 4528.878889598706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611843.5336216518,
            "unit": "ns",
            "range": "± 415.94317444130775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579314.1059570312,
            "unit": "ns",
            "range": "± 410.88342873488523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2350218.827586207,
            "unit": "ns",
            "range": "± 47365.82435535213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2461988.4285714286,
            "unit": "ns",
            "range": "± 41143.23331784415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3087009.8571428573,
            "unit": "ns",
            "range": "± 35453.90009273612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3192625.2,
            "unit": "ns",
            "range": "± 129963.31751083542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8888759,
            "unit": "ns",
            "range": "± 227430.2450321518"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35659.79761904762,
            "unit": "ns",
            "range": "± 1605.6085794351336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205168.5,
            "unit": "ns",
            "range": "± 8280.726925105262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191235.6181818182,
            "unit": "ns",
            "range": "± 7309.964798240491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163811.31578947368,
            "unit": "ns",
            "range": "± 3183.772867607647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3179576.1333333333,
            "unit": "ns",
            "range": "± 24864.02828777425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2878024.3571428573,
            "unit": "ns",
            "range": "± 36835.29646038125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12200.636363636364,
            "unit": "ns",
            "range": "± 637.0676843552502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60322.782608695656,
            "unit": "ns",
            "range": "± 2706.103123277223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61883.833333333336,
            "unit": "ns",
            "range": "± 1828.8632249029172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58415.15306122449,
            "unit": "ns",
            "range": "± 9715.924682452704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2994.305263157895,
            "unit": "ns",
            "range": "± 334.07516270101047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11982.084415584415,
            "unit": "ns",
            "range": "± 626.814132415691"
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
          "id": "7d95f209e8358f2f90568cfc4de9ff819c8eea40",
          "message": "Merge pull request #3691 from riemannulus/release/4.1.0\n\n🚀  release: 4.1.0",
          "timestamp": "2024-03-08T18:41:55+09:00",
          "tree_id": "47ecf2c1422b8b0c0364b1cf8110a0853147d579",
          "url": "https://github.com/planetarium/libplanet/commit/7d95f209e8358f2f90568cfc4de9ff819c8eea40"
        },
        "date": 1709891509902,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976564.6979166666,
            "unit": "ns",
            "range": "± 92835.37502716354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1841703.7073170731,
            "unit": "ns",
            "range": "± 66075.77366336467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1630436.1979166667,
            "unit": "ns",
            "range": "± 137958.610618404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7651758.020833333,
            "unit": "ns",
            "range": "± 299031.2044207761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5598685.653846154,
            "unit": "ns",
            "range": "± 12162.809940183462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14156283.066666666,
            "unit": "ns",
            "range": "± 89305.41670779204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37049518.071428575,
            "unit": "ns",
            "range": "± 99888.17647862673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72871500.16666667,
            "unit": "ns",
            "range": "± 151329.7806600078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151399982.35714287,
            "unit": "ns",
            "range": "± 688418.8506242858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3718532.009765625,
            "unit": "ns",
            "range": "± 6796.272465074804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216527.7349330357,
            "unit": "ns",
            "range": "± 2360.8629785445482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771469.6642127404,
            "unit": "ns",
            "range": "± 609.9254890989702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942909.9677083334,
            "unit": "ns",
            "range": "± 7119.205982827709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618676.277204241,
            "unit": "ns",
            "range": "± 626.9174542238933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572477.9785853794,
            "unit": "ns",
            "range": "± 674.6613366401938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2340625.936170213,
            "unit": "ns",
            "range": "± 91127.5861226408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2492479.6,
            "unit": "ns",
            "range": "± 53727.159597229846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3169832.923076923,
            "unit": "ns",
            "range": "± 86207.13439207828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3209231.1341463416,
            "unit": "ns",
            "range": "± 115458.82243071686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8778044.216216216,
            "unit": "ns",
            "range": "± 232461.0135622668"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35735.67415730337,
            "unit": "ns",
            "range": "± 1873.2800340050176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204320.42105263157,
            "unit": "ns",
            "range": "± 4427.6572977364485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190119.42857142858,
            "unit": "ns",
            "range": "± 7780.576545258288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167525.5,
            "unit": "ns",
            "range": "± 2625.644382447273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3178143.5,
            "unit": "ns",
            "range": "± 36848.53420422582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2834383.3,
            "unit": "ns",
            "range": "± 41691.66215581103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13914.848484848484,
            "unit": "ns",
            "range": "± 3006.9903909894333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60682.57831325301,
            "unit": "ns",
            "range": "± 3133.237665934595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52981.3,
            "unit": "ns",
            "range": "± 763.7972469724925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57572.5918367347,
            "unit": "ns",
            "range": "± 8600.894238855277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2927.3023255813955,
            "unit": "ns",
            "range": "± 269.8972819760463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11934.904761904761,
            "unit": "ns",
            "range": "± 557.2030010075297"
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
          "id": "b96bef3ed28520b43e8779dbec5087131d48cf98",
          "message": "Merge pull request #3692 from riemannulus/prepare/4.2.0\n\n🚀 prepare: 4.2.0",
          "timestamp": "2024-03-08T19:32:11+09:00",
          "tree_id": "a1e22e4e11ca2f7252c1d598507a159fff85889d",
          "url": "https://github.com/planetarium/libplanet/commit/b96bef3ed28520b43e8779dbec5087131d48cf98"
        },
        "date": 1709894483733,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 928284.0253164558,
            "unit": "ns",
            "range": "± 47799.05910402547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1861755.9130434783,
            "unit": "ns",
            "range": "± 71666.83020751142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1629787.96,
            "unit": "ns",
            "range": "± 163308.7122221746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7700382.32,
            "unit": "ns",
            "range": "± 201890.80661724048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5573828.833333333,
            "unit": "ns",
            "range": "± 36480.085881921674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14253235.285714285,
            "unit": "ns",
            "range": "± 69192.27130937783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36975624.266666666,
            "unit": "ns",
            "range": "± 395030.5452608275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73852720.66666667,
            "unit": "ns",
            "range": "± 642928.4123324936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149022380,
            "unit": "ns",
            "range": "± 1023606.1084185881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3718705.001201923,
            "unit": "ns",
            "range": "± 8705.931837160551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206184.2998697916,
            "unit": "ns",
            "range": "± 13841.63192717928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753830.5583984375,
            "unit": "ns",
            "range": "± 7195.431028290295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921766.83984375,
            "unit": "ns",
            "range": "± 12767.484827050035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608481.3503255208,
            "unit": "ns",
            "range": "± 6473.600630365027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569133.0618489584,
            "unit": "ns",
            "range": "± 6283.490913645994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2383039.310810811,
            "unit": "ns",
            "range": "± 79381.63310756667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2544294.48,
            "unit": "ns",
            "range": "± 36197.947458062685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3131674,
            "unit": "ns",
            "range": "± 98686.75707365343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3164934.196969697,
            "unit": "ns",
            "range": "± 139720.20908242848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9124443.88372093,
            "unit": "ns",
            "range": "± 258977.56001733776"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35984.090361445786,
            "unit": "ns",
            "range": "± 1798.581616204799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198658.92307692306,
            "unit": "ns",
            "range": "± 5138.8215218906125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191998.93181818182,
            "unit": "ns",
            "range": "± 6316.268056220684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166880.4375,
            "unit": "ns",
            "range": "± 3264.3043152408445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3166985.7,
            "unit": "ns",
            "range": "± 30527.8075067868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2808923.2333333334,
            "unit": "ns",
            "range": "± 36635.61297322333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12563.372093023256,
            "unit": "ns",
            "range": "± 694.4034603890403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69644.79545454546,
            "unit": "ns",
            "range": "± 2571.663705269823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52702.93548387097,
            "unit": "ns",
            "range": "± 1581.4277923337477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57456.885416666664,
            "unit": "ns",
            "range": "± 8514.61746258168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2856.18085106383,
            "unit": "ns",
            "range": "± 250.18895924540743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11530.597014925374,
            "unit": "ns",
            "range": "± 561.573602388899"
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
          "id": "9671f7952a37890619ef9b0fd41709719331afbe",
          "message": "Merge pull request #3695 from riemannulus/ci/use/self-hosted-macos\n\nci: use self-hosted macos",
          "timestamp": "2024-03-14T14:54:36+09:00",
          "tree_id": "703011aae57abc4e5aa6fa7b1e4ced12b79af3d1",
          "url": "https://github.com/planetarium/libplanet/commit/9671f7952a37890619ef9b0fd41709719331afbe"
        },
        "date": 1710396245170,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989410.75,
            "unit": "ns",
            "range": "± 74311.1161598742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1980198.593220339,
            "unit": "ns",
            "range": "± 87621.25169101755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1751642.9791666667,
            "unit": "ns",
            "range": "± 125250.95701703751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7656100.064516129,
            "unit": "ns",
            "range": "± 230192.400997504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5743065.291666667,
            "unit": "ns",
            "range": "± 148532.73307634456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14842890.933333334,
            "unit": "ns",
            "range": "± 137330.7410817646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38170645.93333333,
            "unit": "ns",
            "range": "± 203180.2493295992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76492919.53333333,
            "unit": "ns",
            "range": "± 486706.7709080029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152154277.26666668,
            "unit": "ns",
            "range": "± 564289.849210931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3769939.6975446427,
            "unit": "ns",
            "range": "± 11275.905329188665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198994.716796875,
            "unit": "ns",
            "range": "± 2274.033461616917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763713.1814313616,
            "unit": "ns",
            "range": "± 1157.8225832195767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966572.603794643,
            "unit": "ns",
            "range": "± 3377.38486953708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614622.7698102678,
            "unit": "ns",
            "range": "± 1348.0964232221133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565129.574358259,
            "unit": "ns",
            "range": "± 587.4743986368401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2461856.923076923,
            "unit": "ns",
            "range": "± 85753.21654252197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2585892.8666666667,
            "unit": "ns",
            "range": "± 41257.143853894595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3263224.5,
            "unit": "ns",
            "range": "± 46592.3687094951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3273996.704225352,
            "unit": "ns",
            "range": "± 159777.44471584703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8955410.352941176,
            "unit": "ns",
            "range": "± 176635.00632165317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36117.967391304344,
            "unit": "ns",
            "range": "± 2086.1821191089293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208974.92,
            "unit": "ns",
            "range": "± 10559.98041659732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195401.8875,
            "unit": "ns",
            "range": "± 9884.110845950263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164899.76923076922,
            "unit": "ns",
            "range": "± 2246.642426446116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3307679.769230769,
            "unit": "ns",
            "range": "± 18671.31463481636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2918649.4285714286,
            "unit": "ns",
            "range": "± 26753.180577166997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15290.275510204081,
            "unit": "ns",
            "range": "± 2981.6292777801395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69394.75531914894,
            "unit": "ns",
            "range": "± 6830.036961968297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88803.33333333333,
            "unit": "ns",
            "range": "± 1141.9880060931491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87693.84375,
            "unit": "ns",
            "range": "± 13898.14896976771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3796.863157894737,
            "unit": "ns",
            "range": "± 739.0934298830591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15124.010638297872,
            "unit": "ns",
            "range": "± 2371.7475556280324"
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
          "id": "5fc05429fba439add17e3c91f90d4fff3e17bd9f",
          "message": "Merge pull request #3685 from s2quake/chore/split-changeslog\n\nSplit changes.md by major version",
          "timestamp": "2024-03-14T16:36:50+09:00",
          "tree_id": "5ec541d47c2fa91af9db7266b8c10e833a4378cf",
          "url": "https://github.com/planetarium/libplanet/commit/5fc05429fba439add17e3c91f90d4fff3e17bd9f"
        },
        "date": 1710402384173,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 984148.2446808511,
            "unit": "ns",
            "range": "± 93589.10161504667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1913521.2333333334,
            "unit": "ns",
            "range": "± 85413.92046756517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1622261.0652173914,
            "unit": "ns",
            "range": "± 90901.06446762515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7840416.102040816,
            "unit": "ns",
            "range": "± 309918.61821030563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5618235.538461538,
            "unit": "ns",
            "range": "± 17514.914047821192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14770037.57142857,
            "unit": "ns",
            "range": "± 65615.966410288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37726896.115384616,
            "unit": "ns",
            "range": "± 80450.58590685595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77409111.83333333,
            "unit": "ns",
            "range": "± 473427.59727252705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152685222.2142857,
            "unit": "ns",
            "range": "± 1344473.7867882152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3759170.0212053573,
            "unit": "ns",
            "range": "± 5389.068603057117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211293.9514322917,
            "unit": "ns",
            "range": "± 1917.251063278314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771509.7953125,
            "unit": "ns",
            "range": "± 1554.683424626397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973252.78515625,
            "unit": "ns",
            "range": "± 3065.6230096879717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 653514.4945963542,
            "unit": "ns",
            "range": "± 751.8497412134815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557804.8436848958,
            "unit": "ns",
            "range": "± 598.9192963061804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423863.962962963,
            "unit": "ns",
            "range": "± 101696.52654797572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2461958.0405405406,
            "unit": "ns",
            "range": "± 48745.82417419899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3191573.1363636362,
            "unit": "ns",
            "range": "± 76181.75296183242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3246341.3263157895,
            "unit": "ns",
            "range": "± 209843.85471235824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8976965.529411765,
            "unit": "ns",
            "range": "± 236699.20662273554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38114.34375,
            "unit": "ns",
            "range": "± 4293.150680421389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196508.7,
            "unit": "ns",
            "range": "± 7332.15571860133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188381.29545454544,
            "unit": "ns",
            "range": "± 7050.8334740028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171346.1923076923,
            "unit": "ns",
            "range": "± 2523.311824587394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3198137.5,
            "unit": "ns",
            "range": "± 45632.42777737278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2848094.7,
            "unit": "ns",
            "range": "± 42889.766147315706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12422.719101123595,
            "unit": "ns",
            "range": "± 947.8809259314364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59980.37894736842,
            "unit": "ns",
            "range": "± 3853.490532024587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53480.175,
            "unit": "ns",
            "range": "± 1867.4022596534937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60892.134020618556,
            "unit": "ns",
            "range": "± 13434.071111844742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3067.7157894736843,
            "unit": "ns",
            "range": "± 402.7676766372706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11888.636363636364,
            "unit": "ns",
            "range": "± 845.9785897377491"
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
          "id": "bad0ed71b73360b295dab729bb5ff4e9d30e5bc3",
          "message": "Merge pull request #3684 from s2quake/chore/remove-unused-field\n\nRemoved unused field in NullBlockPolicy",
          "timestamp": "2024-03-14T16:56:42+09:00",
          "tree_id": "5156e3d39cee3ea16e56a57e59dc0997b9442757",
          "url": "https://github.com/planetarium/libplanet/commit/bad0ed71b73360b295dab729bb5ff4e9d30e5bc3"
        },
        "date": 1710403596627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1021417.6565656565,
            "unit": "ns",
            "range": "± 95869.40093798113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2016002.5614035088,
            "unit": "ns",
            "range": "± 86448.9452364841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1728077.99,
            "unit": "ns",
            "range": "± 126102.22058086107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7735068.448275862,
            "unit": "ns",
            "range": "± 223716.15699037447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5962716.571428572,
            "unit": "ns",
            "range": "± 51581.039796934754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15310416,
            "unit": "ns",
            "range": "± 150929.7061586713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37862346.8,
            "unit": "ns",
            "range": "± 273759.7195738837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76813579.13333334,
            "unit": "ns",
            "range": "± 206995.2965345095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154490941.06666666,
            "unit": "ns",
            "range": "± 463317.8505729034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3700640.7991071427,
            "unit": "ns",
            "range": "± 7022.796981222071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221418.054296875,
            "unit": "ns",
            "range": "± 3064.7810790944454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765730.9345052083,
            "unit": "ns",
            "range": "± 1225.2051077488088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919329.9609375,
            "unit": "ns",
            "range": "± 3962.9577111965395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633352.0282389323,
            "unit": "ns",
            "range": "± 393.09514722427434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576453.1136997768,
            "unit": "ns",
            "range": "± 622.5935235394151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2564246.9375,
            "unit": "ns",
            "range": "± 48537.909566947426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2765752.1052631577,
            "unit": "ns",
            "range": "± 61203.62786078647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3229987.236842105,
            "unit": "ns",
            "range": "± 68291.26865765011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3321578.14893617,
            "unit": "ns",
            "range": "± 188109.321848365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8940731.55882353,
            "unit": "ns",
            "range": "± 162969.1926614931"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40261.95918367347,
            "unit": "ns",
            "range": "± 5399.558559979394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209391.0361445783,
            "unit": "ns",
            "range": "± 11055.373472688694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200897.2794117647,
            "unit": "ns",
            "range": "± 9516.42522223109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173930.7105263158,
            "unit": "ns",
            "range": "± 5854.138430656692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3224648.6666666665,
            "unit": "ns",
            "range": "± 28840.955043297785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2902699.4166666665,
            "unit": "ns",
            "range": "± 14550.38672062351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16338.092783505155,
            "unit": "ns",
            "range": "± 3751.7189146067717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66020.20652173914,
            "unit": "ns",
            "range": "± 5412.097179463522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90027.64285714286,
            "unit": "ns",
            "range": "± 13372.906039382178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73643.33684210526,
            "unit": "ns",
            "range": "± 13564.188014855576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5961.459183673469,
            "unit": "ns",
            "range": "± 1167.0796505328963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14192.21505376344,
            "unit": "ns",
            "range": "± 1567.303748545796"
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
          "id": "d23ccf45a60ff011dcc112274755f6dcc1cd8e9e",
          "message": "Merge pull request #3697 from greymistcube/refactor/iworld-currency-handling\n\nMove FAV related operations from `IAccount` to `IWorld`",
          "timestamp": "2024-03-19T16:55:40+09:00",
          "tree_id": "243ee74689121f2566388a90479c76b16fd15d7d",
          "url": "https://github.com/planetarium/libplanet/commit/d23ccf45a60ff011dcc112274755f6dcc1cd8e9e"
        },
        "date": 1710835522968,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5718395.142857143,
            "unit": "ns",
            "range": "± 35024.830174424154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14923245.233333332,
            "unit": "ns",
            "range": "± 207524.44881764334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37575221.5,
            "unit": "ns",
            "range": "± 205729.9248266822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75542288.16666667,
            "unit": "ns",
            "range": "± 375072.56260501815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151359275.83333334,
            "unit": "ns",
            "range": "± 854230.8834601422"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39998.27551020408,
            "unit": "ns",
            "range": "± 5741.425426535317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971202.4673913043,
            "unit": "ns",
            "range": "± 78813.26974222338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1938618.0376344086,
            "unit": "ns",
            "range": "± 102544.35554724166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1662518.9387755103,
            "unit": "ns",
            "range": "± 150447.71399714018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8013875,
            "unit": "ns",
            "range": "± 223780.28588755228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2398412,
            "unit": "ns",
            "range": "± 44473.514471295966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2470630.2972972975,
            "unit": "ns",
            "range": "± 83811.90947024204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3087070.2666666666,
            "unit": "ns",
            "range": "± 44680.42095732547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3208990.0483870967,
            "unit": "ns",
            "range": "± 144929.64495167058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8947015.243243244,
            "unit": "ns",
            "range": "± 194429.97559324332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199199.12121212122,
            "unit": "ns",
            "range": "± 8624.780804376604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192572.9245283019,
            "unit": "ns",
            "range": "± 8038.066424230912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161578.38888888888,
            "unit": "ns",
            "range": "± 3297.85700718956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3201662.7333333334,
            "unit": "ns",
            "range": "± 58903.478904617055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2755235.4285714286,
            "unit": "ns",
            "range": "± 32907.776155409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12131.137362637362,
            "unit": "ns",
            "range": "± 767.7918918920603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60125.645161290326,
            "unit": "ns",
            "range": "± 3851.704263234205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51518.52380952381,
            "unit": "ns",
            "range": "± 933.5443009867083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56128.74725274725,
            "unit": "ns",
            "range": "± 7366.718397395149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2908.442105263158,
            "unit": "ns",
            "range": "± 279.54467978396707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11721.269662921348,
            "unit": "ns",
            "range": "± 849.4482669790721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3615931.6395089286,
            "unit": "ns",
            "range": "± 3631.334503819985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194704.3643229166,
            "unit": "ns",
            "range": "± 1912.8596951384336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763210.2518229167,
            "unit": "ns",
            "range": "± 1297.5554964366715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949913.6442708333,
            "unit": "ns",
            "range": "± 2649.780731646518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615097.3508463542,
            "unit": "ns",
            "range": "± 460.7131489553034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576834.2533052885,
            "unit": "ns",
            "range": "± 238.4398778679474"
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
          "id": "19ab254e527b7686280b57b8472bc789f64238a4",
          "message": "Merge pull request #3699 from greymistcube/refactor/simplify-iworld-delta\n\n🧹 Removed unnecessary methods and properties from `IWorldDelta`",
          "timestamp": "2024-03-19T18:20:26+09:00",
          "tree_id": "15ab5a662974ada3e2d9b22783e6225f894d7a9b",
          "url": "https://github.com/planetarium/libplanet/commit/19ab254e527b7686280b57b8472bc789f64238a4"
        },
        "date": 1710840616363,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5645604.9,
            "unit": "ns",
            "range": "± 61772.06678449873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14633601.266666668,
            "unit": "ns",
            "range": "± 88462.69330342163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37150908.571428575,
            "unit": "ns",
            "range": "± 178014.63017391588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76737067.96153846,
            "unit": "ns",
            "range": "± 258213.0462401204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156795344.7142857,
            "unit": "ns",
            "range": "± 793501.9556264185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36472.37209302326,
            "unit": "ns",
            "range": "± 2104.456368513432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969228.6304347826,
            "unit": "ns",
            "range": "± 68634.56245780262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1867673.2777777778,
            "unit": "ns",
            "range": "± 78382.62787861371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1665795.1914893617,
            "unit": "ns",
            "range": "± 129934.08213969284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7657522.382352941,
            "unit": "ns",
            "range": "± 310473.7709173931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2458135.5897435895,
            "unit": "ns",
            "range": "± 84484.18599319356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2754074.75,
            "unit": "ns",
            "range": "± 62815.70041157997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3182673.2647058824,
            "unit": "ns",
            "range": "± 64481.108063262815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3258718.8936170214,
            "unit": "ns",
            "range": "± 116214.69320900153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8787869.986486487,
            "unit": "ns",
            "range": "± 203474.9612802002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207265.74242424243,
            "unit": "ns",
            "range": "± 9438.050710266241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199477.06896551725,
            "unit": "ns",
            "range": "± 5403.349073432107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172621.28125,
            "unit": "ns",
            "range": "± 5033.223880180992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3252554.8571428573,
            "unit": "ns",
            "range": "± 20722.873125930357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2814396.433333333,
            "unit": "ns",
            "range": "± 39918.10260031812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12714.229166666666,
            "unit": "ns",
            "range": "± 1395.3148407526387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59714.90588235294,
            "unit": "ns",
            "range": "± 3131.823679977049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53205.6,
            "unit": "ns",
            "range": "± 2959.6899921171143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58209.88775510204,
            "unit": "ns",
            "range": "± 9219.574279460398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3067.175257731959,
            "unit": "ns",
            "range": "± 314.62752483125706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11806.395604395604,
            "unit": "ns",
            "range": "± 674.0664470892874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3751252.9314903845,
            "unit": "ns",
            "range": "± 7877.044978716444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214324.0908203125,
            "unit": "ns",
            "range": "± 1654.3200941987886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773644.1939174107,
            "unit": "ns",
            "range": "± 1012.92971729204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924120.648158482,
            "unit": "ns",
            "range": "± 1074.640106724083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615194.5192708333,
            "unit": "ns",
            "range": "± 1315.6644722685544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589687.1907784598,
            "unit": "ns",
            "range": "± 774.8152477568397"
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
          "id": "0e48fff7c859bf78f0242a2ef52bb2eb7bb70a50",
          "message": "Merge pull request #3702 from greymistcube/refactor/move-validator-mutation\n\n🚚 Move `Validator` related methods from `IAccount` to `IWorld`",
          "timestamp": "2024-03-21T15:56:52+09:00",
          "tree_id": "a761e93f03edfdcd597e405bad0050b411e979c3",
          "url": "https://github.com/planetarium/libplanet/commit/0e48fff7c859bf78f0242a2ef52bb2eb7bb70a50"
        },
        "date": 1711004785672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5693328.4,
            "unit": "ns",
            "range": "± 24135.206089267784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14780128.933333334,
            "unit": "ns",
            "range": "± 79796.5887003293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39454233.65384615,
            "unit": "ns",
            "range": "± 119139.19827023496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 80056054.06666666,
            "unit": "ns",
            "range": "± 415024.6792347701"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151886745.66666666,
            "unit": "ns",
            "range": "± 655496.9052512394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40007.43877551021,
            "unit": "ns",
            "range": "± 6359.011446249527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973267.41,
            "unit": "ns",
            "range": "± 91019.29648446626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871185.4152542374,
            "unit": "ns",
            "range": "± 77888.33592023731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1538623.2777777778,
            "unit": "ns",
            "range": "± 84481.57558551294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7694372.074074074,
            "unit": "ns",
            "range": "± 321401.3548655033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2489415.3157894737,
            "unit": "ns",
            "range": "± 53298.45403954835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554034.404761905,
            "unit": "ns",
            "range": "± 85499.62145995494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3263118.214285714,
            "unit": "ns",
            "range": "± 44416.390506257885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3200471.5217391304,
            "unit": "ns",
            "range": "± 70797.72654000163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8728848.588235294,
            "unit": "ns",
            "range": "± 206454.23223769382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201207.96835443037,
            "unit": "ns",
            "range": "± 9328.49877695645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193454.66666666666,
            "unit": "ns",
            "range": "± 7639.859414764023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162928.95454545456,
            "unit": "ns",
            "range": "± 5119.4668368084795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3331759,
            "unit": "ns",
            "range": "± 60107.094603834295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2760650.3684210526,
            "unit": "ns",
            "range": "± 56504.02312737516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12617.477528089888,
            "unit": "ns",
            "range": "± 1268.675427522093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63475.70526315789,
            "unit": "ns",
            "range": "± 5773.366597545392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51598.84848484849,
            "unit": "ns",
            "range": "± 1209.513515871467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80254.21348314607,
            "unit": "ns",
            "range": "± 14339.109065983832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4406.625,
            "unit": "ns",
            "range": "± 926.7729552195163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13748.360215053763,
            "unit": "ns",
            "range": "± 1731.5026685273529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3678304.588341346,
            "unit": "ns",
            "range": "± 8565.714562428831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210728.5766927083,
            "unit": "ns",
            "range": "± 2145.0434910804524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773125.5126302083,
            "unit": "ns",
            "range": "± 1013.2027728755996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942843.2627604166,
            "unit": "ns",
            "range": "± 4729.302610832422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614680.5547526042,
            "unit": "ns",
            "range": "± 449.85840571912166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579819.889453125,
            "unit": "ns",
            "range": "± 579.5546784879288"
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
          "id": "6815582f07d67a2c4468c2d7723eb8844bd39651",
          "message": "Merge pull request #3704 from greymistcube/refactor/cleanup\n\n♻️ Docs cleanup",
          "timestamp": "2024-03-21T17:53:16+09:00",
          "tree_id": "5a79dee718ab7a05427020dd64f4fa753ef2e2af",
          "url": "https://github.com/planetarium/libplanet/commit/6815582f07d67a2c4468c2d7723eb8844bd39651"
        },
        "date": 1711011754461,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5712812.2,
            "unit": "ns",
            "range": "± 52064.35993926858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14875262.357142856,
            "unit": "ns",
            "range": "± 51929.60572456517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37355433.14285714,
            "unit": "ns",
            "range": "± 166318.5042990879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76769708.06666666,
            "unit": "ns",
            "range": "± 467208.2888555728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154737222.92857143,
            "unit": "ns",
            "range": "± 488209.97461881314"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36955.67032967033,
            "unit": "ns",
            "range": "± 2067.8111027791097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006641.8913043478,
            "unit": "ns",
            "range": "± 71252.17151006797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1983315.25,
            "unit": "ns",
            "range": "± 29045.548537442173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686426.5656565656,
            "unit": "ns",
            "range": "± 156480.61425041434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7746855.94117647,
            "unit": "ns",
            "range": "± 155559.75820463282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2494667.703703704,
            "unit": "ns",
            "range": "± 68596.03258813084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2562074.653846154,
            "unit": "ns",
            "range": "± 68214.93875915586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3281870.5833333335,
            "unit": "ns",
            "range": "± 81514.95575388586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3168513.7258064514,
            "unit": "ns",
            "range": "± 64076.10115620836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8803061.290322581,
            "unit": "ns",
            "range": "± 190478.14754632505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205628.61904761905,
            "unit": "ns",
            "range": "± 9384.706272456082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199603.64,
            "unit": "ns",
            "range": "± 7499.499057447309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168158.2380952381,
            "unit": "ns",
            "range": "± 3944.6157215217036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3316609.1,
            "unit": "ns",
            "range": "± 42313.57187509194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2875286.933333333,
            "unit": "ns",
            "range": "± 47503.28525100233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13309.207865168539,
            "unit": "ns",
            "range": "± 1083.3318890668982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63579.478494623654,
            "unit": "ns",
            "range": "± 4373.56610037108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100976.42307692308,
            "unit": "ns",
            "range": "± 1592.3297115410521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89956.32653061225,
            "unit": "ns",
            "range": "± 19196.468035732974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3272.2916666666665,
            "unit": "ns",
            "range": "± 531.4940197052609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13650.989361702128,
            "unit": "ns",
            "range": "± 1056.1640827911554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3736233.797175481,
            "unit": "ns",
            "range": "± 5872.4670294757225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1191395.012109375,
            "unit": "ns",
            "range": "± 1496.003021879255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764281.0122395833,
            "unit": "ns",
            "range": "± 1172.6959261221587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1983671.3130580357,
            "unit": "ns",
            "range": "± 3351.058025187198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616291.2767159598,
            "unit": "ns",
            "range": "± 585.5761351598507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 599905.6509915865,
            "unit": "ns",
            "range": "± 554.4518170458958"
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
          "id": "e3df1917a9739c156d0e9eb0d58fef17b9b6206c",
          "message": "Merge pull request #3705 from greymistcube/refactor/cleanup\n\n🧹 Removed unnecessary test code",
          "timestamp": "2024-03-22T14:32:16+09:00",
          "tree_id": "244b5fe74be3f90bb2e7ed3f92e3709161f56e0d",
          "url": "https://github.com/planetarium/libplanet/commit/e3df1917a9739c156d0e9eb0d58fef17b9b6206c"
        },
        "date": 1711086206584,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5675039.566666666,
            "unit": "ns",
            "range": "± 76501.46955961664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14246527.866666667,
            "unit": "ns",
            "range": "± 105636.54116684831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37063737.9,
            "unit": "ns",
            "range": "± 171127.33212510837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76518545.2,
            "unit": "ns",
            "range": "± 263104.6060269565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148600616.64285713,
            "unit": "ns",
            "range": "± 428166.4876640335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36644.956043956045,
            "unit": "ns",
            "range": "± 2172.32925124719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990180.0515463918,
            "unit": "ns",
            "range": "± 97707.59461103522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1864557.575,
            "unit": "ns",
            "range": "± 65127.835297653895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1602628.5842105264,
            "unit": "ns",
            "range": "± 129432.70944424342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7500729,
            "unit": "ns",
            "range": "± 244569.2132460082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2428714.214285714,
            "unit": "ns",
            "range": "± 78968.24307782414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2534567.1904761903,
            "unit": "ns",
            "range": "± 90516.57272491748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3144816.875,
            "unit": "ns",
            "range": "± 58009.56566851712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3157160.3921568627,
            "unit": "ns",
            "range": "± 115639.69077562919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8644331.235294119,
            "unit": "ns",
            "range": "± 180253.45754815405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201536.1,
            "unit": "ns",
            "range": "± 8639.837366446434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190225.54761904763,
            "unit": "ns",
            "range": "± 5918.647839986315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163400.46153846153,
            "unit": "ns",
            "range": "± 2438.238285298924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3294306.7,
            "unit": "ns",
            "range": "± 42908.13482346409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2721515.285714286,
            "unit": "ns",
            "range": "± 34617.41665344544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12170.144444444444,
            "unit": "ns",
            "range": "± 719.6901691530396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63075.38775510204,
            "unit": "ns",
            "range": "± 7439.113466861371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51229.192307692305,
            "unit": "ns",
            "range": "± 625.4261726502158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59217.43877551021,
            "unit": "ns",
            "range": "± 10562.591531297501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2868.2,
            "unit": "ns",
            "range": "± 213.16281691902537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11701.422222222222,
            "unit": "ns",
            "range": "± 807.424428269168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3739040.55078125,
            "unit": "ns",
            "range": "± 4388.170344390095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1191151.5665364584,
            "unit": "ns",
            "range": "± 2672.486677671046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755302.4961588542,
            "unit": "ns",
            "range": "± 1269.3622570170962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959067.3252604166,
            "unit": "ns",
            "range": "± 2622.623555622171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620313.4924665178,
            "unit": "ns",
            "range": "± 681.1466340174633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572539.2825753348,
            "unit": "ns",
            "range": "± 403.35673928468185"
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
          "id": "5210b9336f9bb6e4f3c79b3c9f9612cad6719342",
          "message": "Merge pull request #3706 from greymistcube/chore/changelog\n\n🧹 Changelog formatting",
          "timestamp": "2024-03-22T17:50:34+09:00",
          "tree_id": "594bbc5288a619fc2040847db66ae22c22e2db13",
          "url": "https://github.com/planetarium/libplanet/commit/5210b9336f9bb6e4f3c79b3c9f9612cad6719342"
        },
        "date": 1711098005608,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5823566.366666666,
            "unit": "ns",
            "range": "± 80887.46806597304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14734180.6,
            "unit": "ns",
            "range": "± 58613.307215049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37753961.93333333,
            "unit": "ns",
            "range": "± 169926.36311669438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75439541.26666667,
            "unit": "ns",
            "range": "± 392602.4167568921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149003657.56666666,
            "unit": "ns",
            "range": "± 671952.1620618822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36232.082278481015,
            "unit": "ns",
            "range": "± 1835.5031072174731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956533.6063829787,
            "unit": "ns",
            "range": "± 67918.799818966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1837035.7857142857,
            "unit": "ns",
            "range": "± 51796.46102944296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1578716.6043956045,
            "unit": "ns",
            "range": "± 103025.95761466883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7767626.945454545,
            "unit": "ns",
            "range": "± 327003.95299238374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2375705.16,
            "unit": "ns",
            "range": "± 36772.752465514466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2497542.302325581,
            "unit": "ns",
            "range": "± 91111.36433391487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3194087.55,
            "unit": "ns",
            "range": "± 54088.134171509955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3154615.7674418604,
            "unit": "ns",
            "range": "± 115869.10906766784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8647389.463414634,
            "unit": "ns",
            "range": "± 268093.7978380046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193977.55970149254,
            "unit": "ns",
            "range": "± 8866.922705714143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199427.4818181818,
            "unit": "ns",
            "range": "± 8441.931597226781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166889.38,
            "unit": "ns",
            "range": "± 4372.10410176458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3230099.7333333334,
            "unit": "ns",
            "range": "± 49833.72484066627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2806197.7333333334,
            "unit": "ns",
            "range": "± 34243.015184469514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12008.731182795698,
            "unit": "ns",
            "range": "± 744.3957301320335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66176.75,
            "unit": "ns",
            "range": "± 9052.235233059648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51318.77272727273,
            "unit": "ns",
            "range": "± 1216.6815106133563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60192.744897959186,
            "unit": "ns",
            "range": "± 9485.954921319393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4926.606060606061,
            "unit": "ns",
            "range": "± 1800.8292523971904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11845.826086956522,
            "unit": "ns",
            "range": "± 1065.158592212793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3708567.98828125,
            "unit": "ns",
            "range": "± 1890.1319694516494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215586.6495535714,
            "unit": "ns",
            "range": "± 939.6681077641797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764919.8260416667,
            "unit": "ns",
            "range": "± 1284.0674808370113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930414.2786458333,
            "unit": "ns",
            "range": "± 3475.404151508713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613734.6786411831,
            "unit": "ns",
            "range": "± 527.9891479641681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584940.8623046875,
            "unit": "ns",
            "range": "± 1109.207759107124"
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
          "id": "30938b465c34003a3ea9268ed23166a34acc301b",
          "message": "Merge pull request #3642 from greymistcube/feature/mocks\n\n✨ Mocks",
          "timestamp": "2024-03-22T19:00:38+09:00",
          "tree_id": "031a5cb565d418e6075c81a74d21d70109ec35ae",
          "url": "https://github.com/planetarium/libplanet/commit/30938b465c34003a3ea9268ed23166a34acc301b"
        },
        "date": 1711102204625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5623656.142857143,
            "unit": "ns",
            "range": "± 18907.95702203844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14584441.42857143,
            "unit": "ns",
            "range": "± 32506.21295102803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36733875.93333333,
            "unit": "ns",
            "range": "± 247991.8047379984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76910365.93333334,
            "unit": "ns",
            "range": "± 444925.1552453139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152832909.06666666,
            "unit": "ns",
            "range": "± 802135.2152821749"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36242.956043956045,
            "unit": "ns",
            "range": "± 2134.419374142079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967731.847368421,
            "unit": "ns",
            "range": "± 77042.58787877587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1984410.1625,
            "unit": "ns",
            "range": "± 103391.54350435904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1688764.5263157894,
            "unit": "ns",
            "range": "± 97951.258848453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7609817,
            "unit": "ns",
            "range": "± 154203.07020343878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2416922.325,
            "unit": "ns",
            "range": "± 83610.32007546938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2536311.8928571427,
            "unit": "ns",
            "range": "± 72429.70945444115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3185436.625,
            "unit": "ns",
            "range": "± 82321.43672654667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3275226.6129032257,
            "unit": "ns",
            "range": "± 97399.73968879569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8762275.852941176,
            "unit": "ns",
            "range": "± 214563.08453722703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210034.85714285713,
            "unit": "ns",
            "range": "± 8322.280692013857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197378.1170212766,
            "unit": "ns",
            "range": "± 7624.749194886436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174307.88,
            "unit": "ns",
            "range": "± 4625.650885010671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3287211.1315789474,
            "unit": "ns",
            "range": "± 69938.95299013794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2931544.466666667,
            "unit": "ns",
            "range": "± 53172.48545719147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13251.060439560439,
            "unit": "ns",
            "range": "± 946.279653388776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64969.18556701031,
            "unit": "ns",
            "range": "± 5210.211010861862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83821.48453608247,
            "unit": "ns",
            "range": "± 16060.390993264427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82550.68181818182,
            "unit": "ns",
            "range": "± 21708.416621004275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3565.136842105263,
            "unit": "ns",
            "range": "± 515.6196150826758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12466.380434782608,
            "unit": "ns",
            "range": "± 977.8736838626029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3662474.7122395835,
            "unit": "ns",
            "range": "± 5478.950340185785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216852.2454427083,
            "unit": "ns",
            "range": "± 1839.564332428291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761432.2170061384,
            "unit": "ns",
            "range": "± 1153.257221004551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2070191.3353794643,
            "unit": "ns",
            "range": "± 3016.6855091990215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613987.0918619792,
            "unit": "ns",
            "range": "± 523.3506932119607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571316.3956380208,
            "unit": "ns",
            "range": "± 605.6428431757623"
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
          "id": "81ddb0a52b2ea66034848270f3d8a6630432585b",
          "message": "Merge pull request #3707 from greymistcube/release/4.2.0\n\n🚀 Release 4.2.0",
          "timestamp": "2024-03-22T20:09:24+09:00",
          "tree_id": "3c298f46a53aa9d2b54bc5e0fc9f400afb20a4cf",
          "url": "https://github.com/planetarium/libplanet/commit/81ddb0a52b2ea66034848270f3d8a6630432585b"
        },
        "date": 1711106328914,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5548293.8,
            "unit": "ns",
            "range": "± 12089.033638562089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14593327.3,
            "unit": "ns",
            "range": "± 140541.03825329556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37366300.5,
            "unit": "ns",
            "range": "± 157743.2839173778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74354793.03333333,
            "unit": "ns",
            "range": "± 476195.9204717959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152148691.96666667,
            "unit": "ns",
            "range": "± 778317.2882638606"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36633.329545454544,
            "unit": "ns",
            "range": "± 2118.4006612102166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963745.0978260869,
            "unit": "ns",
            "range": "± 72095.06206407823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1856162.3148148148,
            "unit": "ns",
            "range": "± 50953.982666140146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596734.9680851065,
            "unit": "ns",
            "range": "± 109859.06215670414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7455797.757142857,
            "unit": "ns",
            "range": "± 240177.35846812464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2385841.72,
            "unit": "ns",
            "range": "± 62340.30662722688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2504188,
            "unit": "ns",
            "range": "± 88538.8027926102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3179393.98,
            "unit": "ns",
            "range": "± 61299.59764082197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3160178.7264150945,
            "unit": "ns",
            "range": "± 130445.28797658392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8629963.029411765,
            "unit": "ns",
            "range": "± 178195.67412436104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203368.3409090909,
            "unit": "ns",
            "range": "± 7161.172016403467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192447.96226415093,
            "unit": "ns",
            "range": "± 7502.5968195692185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162840,
            "unit": "ns",
            "range": "± 3036.2124666856143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3191958.846153846,
            "unit": "ns",
            "range": "± 47493.756436760814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2875676.7333333334,
            "unit": "ns",
            "range": "± 38187.80256736187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12377.84065934066,
            "unit": "ns",
            "range": "± 720.8083767514888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60500.04838709677,
            "unit": "ns",
            "range": "± 4344.0731725664455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52114.72727272727,
            "unit": "ns",
            "range": "± 1654.1793711824166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59138.9587628866,
            "unit": "ns",
            "range": "± 10015.657398457766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2978.3229166666665,
            "unit": "ns",
            "range": "± 423.8563434589022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13900.858585858587,
            "unit": "ns",
            "range": "± 2926.548893966675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3724367.816964286,
            "unit": "ns",
            "range": "± 5248.559907660101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209064.1276041667,
            "unit": "ns",
            "range": "± 1221.2837183303025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 784541.7650669643,
            "unit": "ns",
            "range": "± 1087.9468978010545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973808.0496651786,
            "unit": "ns",
            "range": "± 1695.9591404531775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625353.2707170759,
            "unit": "ns",
            "range": "± 1106.705273907028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570512.279436384,
            "unit": "ns",
            "range": "± 280.65190434662816"
          }
        ]
      }
    ]
  }
}