window.BENCHMARK_DATA = {
  "lastUpdate": 1715674532781,
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
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e9ea5bd1ebbf2d303391caeee97ac71c23507c1",
          "message": "Merge pull request #3708 from greymistcube/prepare/4.3.0\n\n🔧 Prepare 4.3.0",
          "timestamp": "2024-03-22T22:19:38+09:00",
          "tree_id": "3bd385ff7052df8da1bc5a68e3098fe6e3e329ce",
          "url": "https://github.com/planetarium/libplanet/commit/0e9ea5bd1ebbf2d303391caeee97ac71c23507c1"
        },
        "date": 1711114145701,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5784658.866666666,
            "unit": "ns",
            "range": "± 32004.43434424733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14423946.615384616,
            "unit": "ns",
            "range": "± 51643.15309496258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38067888.46666667,
            "unit": "ns",
            "range": "± 256386.29947485402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75117471.36666666,
            "unit": "ns",
            "range": "± 673047.2114437936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152261423.96666667,
            "unit": "ns",
            "range": "± 824281.5515231489"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40175.536082474224,
            "unit": "ns",
            "range": "± 6903.149868390178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980377.1739130435,
            "unit": "ns",
            "range": "± 77750.56162259386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1843128.5,
            "unit": "ns",
            "range": "± 64568.51033254602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1600134.489010989,
            "unit": "ns",
            "range": "± 111584.98205707457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7616845.29032258,
            "unit": "ns",
            "range": "± 224511.878781828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2360019.472222222,
            "unit": "ns",
            "range": "± 56443.60311951649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2549971.888888889,
            "unit": "ns",
            "range": "± 82326.7219221344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3116035.730769231,
            "unit": "ns",
            "range": "± 51582.5280838933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3156274.060240964,
            "unit": "ns",
            "range": "± 168186.4584696684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8691754.445945946,
            "unit": "ns",
            "range": "± 227491.9505125335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197742.09615384616,
            "unit": "ns",
            "range": "± 6975.714132419693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193075.07462686568,
            "unit": "ns",
            "range": "± 9183.611792478625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165534.6,
            "unit": "ns",
            "range": "± 4870.82160703779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3245816.533333333,
            "unit": "ns",
            "range": "± 42642.58880654186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2906058.2666666666,
            "unit": "ns",
            "range": "± 33907.52177923836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12721.184782608696,
            "unit": "ns",
            "range": "± 1182.0992774483489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60882.72631578947,
            "unit": "ns",
            "range": "± 5095.318062529822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51936.730769230766,
            "unit": "ns",
            "range": "± 990.9760262566318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62832.77419354839,
            "unit": "ns",
            "range": "± 9651.625882550468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2907.8146067415732,
            "unit": "ns",
            "range": "± 344.84171584766835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11824.376344086022,
            "unit": "ns",
            "range": "± 1147.3187165127229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3717400.630533854,
            "unit": "ns",
            "range": "± 3142.8929121460446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219140.524639423,
            "unit": "ns",
            "range": "± 1023.7125680735511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755771.2392578125,
            "unit": "ns",
            "range": "± 842.1546933557756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969585.8674479167,
            "unit": "ns",
            "range": "± 2683.3873757615397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627539.9813151042,
            "unit": "ns",
            "range": "± 312.17496900898976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571464.7594168527,
            "unit": "ns",
            "range": "± 495.87218740711313"
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
          "id": "757ba26ea62bc3ef51199853d452e4b119a10e5a",
          "message": "Merge pull request #3710 from xiaoxianBoy/fix-typos\n\nchore: fix typos",
          "timestamp": "2024-03-25T17:49:36+09:00",
          "tree_id": "3ac7612ac12e4b8910b4ff8d747654a7bd720f66",
          "url": "https://github.com/planetarium/libplanet/commit/757ba26ea62bc3ef51199853d452e4b119a10e5a"
        },
        "date": 1711357192555,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5854701.807692308,
            "unit": "ns",
            "range": "± 153581.14752612554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15217022.833333334,
            "unit": "ns",
            "range": "± 144305.48415757585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38774003.56666667,
            "unit": "ns",
            "range": "± 179291.78658244165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76592772.93333334,
            "unit": "ns",
            "range": "± 199039.28707184084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152059751.23333332,
            "unit": "ns",
            "range": "± 809243.6926863492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41418.721649484534,
            "unit": "ns",
            "range": "± 5856.41720811145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1051808.3402061856,
            "unit": "ns",
            "range": "± 107674.20944333718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1998544.9024390243,
            "unit": "ns",
            "range": "± 70770.82040672019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1738790.606060606,
            "unit": "ns",
            "range": "± 162476.85326273265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7867100.20212766,
            "unit": "ns",
            "range": "± 302244.7797379177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2493985.3095238097,
            "unit": "ns",
            "range": "± 90940.17161291937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2644921.5,
            "unit": "ns",
            "range": "± 62477.98331649555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3196078.65,
            "unit": "ns",
            "range": "± 70726.74791892273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3367239.163265306,
            "unit": "ns",
            "range": "± 132913.13797291118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8773512.470588235,
            "unit": "ns",
            "range": "± 243028.63153187672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225088.32,
            "unit": "ns",
            "range": "± 23914.006250249444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214853.797979798,
            "unit": "ns",
            "range": "± 21794.425509880046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177213.31632653062,
            "unit": "ns",
            "range": "± 13207.435401643905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3264671.625,
            "unit": "ns",
            "range": "± 50040.681745788934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2951463.1428571427,
            "unit": "ns",
            "range": "± 46407.49728157683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17653.484848484848,
            "unit": "ns",
            "range": "± 4651.946459769718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93019.25274725274,
            "unit": "ns",
            "range": "± 7046.161444508329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92669.5,
            "unit": "ns",
            "range": "± 1528.842632227937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85567.00537634408,
            "unit": "ns",
            "range": "± 12276.808759523201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6589.938144329897,
            "unit": "ns",
            "range": "± 580.2475192829528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17000.56,
            "unit": "ns",
            "range": "± 4592.099610717028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3788071.1670673075,
            "unit": "ns",
            "range": "± 4820.172042816463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217189.3255208333,
            "unit": "ns",
            "range": "± 1380.7637625965544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763149.3447963169,
            "unit": "ns",
            "range": "± 935.4649943992931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934117.471484375,
            "unit": "ns",
            "range": "± 3712.6899870971124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614576.0475027902,
            "unit": "ns",
            "range": "± 1327.4067558093095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580629.2399088541,
            "unit": "ns",
            "range": "± 333.2870547218102"
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
          "id": "200a0686c37ec092e96f7582fbc6c472d71babd2",
          "message": "Merge pull request #3713 from greymistcube/refactor/add-info-to-action-context\n\n✨ ♻️ Added `Txs` property to `IActionContext`",
          "timestamp": "2024-03-28T14:27:37+09:00",
          "tree_id": "e833efb9d625c8f530880a2800a40c432cc015d4",
          "url": "https://github.com/planetarium/libplanet/commit/200a0686c37ec092e96f7582fbc6c472d71babd2"
        },
        "date": 1711604253474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5832843.266666667,
            "unit": "ns",
            "range": "± 24742.816982096516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14358983.2,
            "unit": "ns",
            "range": "± 92013.83631994856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36164271.307692304,
            "unit": "ns",
            "range": "± 72597.14513255625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73999524.7,
            "unit": "ns",
            "range": "± 361998.6459312087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151776515.53333333,
            "unit": "ns",
            "range": "± 678357.803426551"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36942.775862068964,
            "unit": "ns",
            "range": "± 2467.0874113229675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955199.0531914893,
            "unit": "ns",
            "range": "± 69655.81808525525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1850009.8793103448,
            "unit": "ns",
            "range": "± 80983.89248899677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1589393.4646464647,
            "unit": "ns",
            "range": "± 146193.40330097207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7684188.579710145,
            "unit": "ns",
            "range": "± 370186.6928396681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2393444.48,
            "unit": "ns",
            "range": "± 59292.818296934856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2499252.125,
            "unit": "ns",
            "range": "± 54743.473704855394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3108897.617647059,
            "unit": "ns",
            "range": "± 62727.05672782116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3151179.3,
            "unit": "ns",
            "range": "± 111462.96163995922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8514024.5,
            "unit": "ns",
            "range": "± 195676.44341054445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203617.22641509434,
            "unit": "ns",
            "range": "± 8423.843154179207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189603.15384615384,
            "unit": "ns",
            "range": "± 6051.2098422262525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166355,
            "unit": "ns",
            "range": "± 3829.259472177768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3162738.0625,
            "unit": "ns",
            "range": "± 58231.98595098602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807580.1428571427,
            "unit": "ns",
            "range": "± 28711.774798737308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12330.357894736842,
            "unit": "ns",
            "range": "± 809.2814768957612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59320.089887640446,
            "unit": "ns",
            "range": "± 3298.0353161198636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52483.8,
            "unit": "ns",
            "range": "± 1547.735546109107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59911.37113402062,
            "unit": "ns",
            "range": "± 10696.238412326305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5535.845360824742,
            "unit": "ns",
            "range": "± 772.2171993169811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13453.9,
            "unit": "ns",
            "range": "± 2138.46125411557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3862359.366629464,
            "unit": "ns",
            "range": "± 6827.809813113755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194832.809375,
            "unit": "ns",
            "range": "± 1887.1183803091346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765431.4464192708,
            "unit": "ns",
            "range": "± 859.7861316015606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973264.447265625,
            "unit": "ns",
            "range": "± 2209.0118999247684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619029.2837890625,
            "unit": "ns",
            "range": "± 707.7242647437023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568058.3376116072,
            "unit": "ns",
            "range": "± 368.5298128446686"
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
          "id": "c8c03a16a0d34aa8b3274fef5cbfb64298084a41",
          "message": "Merge pull request #3714 from greymistcube/remove/total-updated-fungible-assets\n\n🧹 Removed `TotalUpdatedFungibleAssets` from `IWorld`",
          "timestamp": "2024-03-28T15:38:23+09:00",
          "tree_id": "33555845d43c83cb9f31a0f0daf13075fab4237b",
          "url": "https://github.com/planetarium/libplanet/commit/c8c03a16a0d34aa8b3274fef5cbfb64298084a41"
        },
        "date": 1711608562534,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5652364.714285715,
            "unit": "ns",
            "range": "± 22738.410817985336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14430435.42857143,
            "unit": "ns",
            "range": "± 87008.28399770492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36425067.6,
            "unit": "ns",
            "range": "± 172529.48581031425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75873906.8,
            "unit": "ns",
            "range": "± 368195.91402776714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153032188.1,
            "unit": "ns",
            "range": "± 1034983.7144232752"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36780.54838709677,
            "unit": "ns",
            "range": "± 3308.2098519083816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960064.1666666666,
            "unit": "ns",
            "range": "± 66377.21723671375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1834908.7222222222,
            "unit": "ns",
            "range": "± 51078.92851515594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1588116.902173913,
            "unit": "ns",
            "range": "± 109562.04702008849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7614471.84,
            "unit": "ns",
            "range": "± 307610.7382456356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2396122.466666667,
            "unit": "ns",
            "range": "± 30028.521946087632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2461105.152173913,
            "unit": "ns",
            "range": "± 75622.60527116578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3130683.8857142855,
            "unit": "ns",
            "range": "± 100327.69226735177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3211738.0555555555,
            "unit": "ns",
            "range": "± 66075.59923853909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8842321.970588235,
            "unit": "ns",
            "range": "± 199197.28921108478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199216.93548387097,
            "unit": "ns",
            "range": "± 4747.893132295516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195450.5,
            "unit": "ns",
            "range": "± 5533.605217550644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164769.07142857142,
            "unit": "ns",
            "range": "± 2768.8245066005265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3207996.9285714286,
            "unit": "ns",
            "range": "± 11194.768760894085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2814445.2666666666,
            "unit": "ns",
            "range": "± 28676.639705184294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13442.845360824742,
            "unit": "ns",
            "range": "± 2154.7155957931654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60079.303797468354,
            "unit": "ns",
            "range": "± 2928.5319869913574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52184.807692307695,
            "unit": "ns",
            "range": "± 1023.1140999607334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58988.36734693877,
            "unit": "ns",
            "range": "± 8502.397401615926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2898.415789473684,
            "unit": "ns",
            "range": "± 262.2908756923209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11927.620689655172,
            "unit": "ns",
            "range": "± 699.2884297191351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3735440.9109933036,
            "unit": "ns",
            "range": "± 2767.736528342971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217904.7859375,
            "unit": "ns",
            "range": "± 1869.8097895870994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775333.8486979167,
            "unit": "ns",
            "range": "± 1560.601167080702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959036.4447916667,
            "unit": "ns",
            "range": "± 7367.403587837503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616520.1525390625,
            "unit": "ns",
            "range": "± 2539.3744570809286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567231.111328125,
            "unit": "ns",
            "range": "± 449.1286623657077"
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
          "id": "b15c7261184cdbdbd9cb5850914a0999f9137ab8",
          "message": "Merge pull request #3715 from greymistcube/refactor/iworld-extensions\n\n♻️ 🚚 Moved `Currency` and `Validator` related methods from `IWorldState` and `IWorld` to an extension `class`",
          "timestamp": "2024-03-29T08:57:43+09:00",
          "tree_id": "e5b1e33019de8451e46cbbf3bb85c042d0273f24",
          "url": "https://github.com/planetarium/libplanet/commit/b15c7261184cdbdbd9cb5850914a0999f9137ab8"
        },
        "date": 1711670843919,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5538928,
            "unit": "ns",
            "range": "± 17236.506057694034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14681366.733333332,
            "unit": "ns",
            "range": "± 129301.20652374144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37089950,
            "unit": "ns",
            "range": "± 149159.2742313758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75276859.1,
            "unit": "ns",
            "range": "± 468893.162845653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150551070.14285713,
            "unit": "ns",
            "range": "± 807643.9514959173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36503.3021978022,
            "unit": "ns",
            "range": "± 2050.459158442216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997088.72,
            "unit": "ns",
            "range": "± 87330.54452857935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1888397.1016949152,
            "unit": "ns",
            "range": "± 82426.57986347291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1602886,
            "unit": "ns",
            "range": "± 128638.91330146947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7492745.117647059,
            "unit": "ns",
            "range": "± 206905.5702111714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417692.393939394,
            "unit": "ns",
            "range": "± 75385.90282545346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2577002.125,
            "unit": "ns",
            "range": "± 50358.23769073603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3120002.4285714286,
            "unit": "ns",
            "range": "± 30256.62636823235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3227279.066666667,
            "unit": "ns",
            "range": "± 144085.61012577737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8559817.318181818,
            "unit": "ns",
            "range": "± 171002.0354090465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203443.7142857143,
            "unit": "ns",
            "range": "± 5509.267847149947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194094,
            "unit": "ns",
            "range": "± 7307.112202142093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168733.92857142858,
            "unit": "ns",
            "range": "± 2222.3177943581513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3241144.966666667,
            "unit": "ns",
            "range": "± 39387.72936709145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2809701.3571428573,
            "unit": "ns",
            "range": "± 26567.56477826398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12670.117021276596,
            "unit": "ns",
            "range": "± 1232.2065691958985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60415.60752688172,
            "unit": "ns",
            "range": "± 5039.080684061945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53097.942028985504,
            "unit": "ns",
            "range": "± 2550.7798800739233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67037.30808080808,
            "unit": "ns",
            "range": "± 14877.60382127415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3127.088888888889,
            "unit": "ns",
            "range": "± 477.05568526268314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12009.404494382023,
            "unit": "ns",
            "range": "± 860.4626625344847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3740546.165264423,
            "unit": "ns",
            "range": "± 5330.997741622506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1248116.0926339286,
            "unit": "ns",
            "range": "± 2886.568032696557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770904.2580915178,
            "unit": "ns",
            "range": "± 1182.9196196984624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1905232.4915364583,
            "unit": "ns",
            "range": "± 2524.524847065424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629509.9802734375,
            "unit": "ns",
            "range": "± 683.3644469856359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578753.4075520834,
            "unit": "ns",
            "range": "± 457.4333909386352"
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
          "id": "362de2c5404515ccb1b22a0d454c87d1db580b79",
          "message": "Merge pull request #3716 from greymistcube/refactor/dumb-action\n\n🧹 Cleanup `DumbAction`",
          "timestamp": "2024-03-29T20:27:00+09:00",
          "tree_id": "7145d7a7252499b8292eaabb2d5a56d421e6c0c3",
          "url": "https://github.com/planetarium/libplanet/commit/362de2c5404515ccb1b22a0d454c87d1db580b79"
        },
        "date": 1711712186936,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5666500.533333333,
            "unit": "ns",
            "range": "± 52053.80168752144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14712663.266666668,
            "unit": "ns",
            "range": "± 107080.55460224237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37488233.2,
            "unit": "ns",
            "range": "± 213247.9918549561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74996664.83333333,
            "unit": "ns",
            "range": "± 317946.1094081976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153083988.5,
            "unit": "ns",
            "range": "± 426782.2320297194"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36079.364197530864,
            "unit": "ns",
            "range": "± 1589.7866897251215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026009.8608247422,
            "unit": "ns",
            "range": "± 126719.33451013452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1933657.196969697,
            "unit": "ns",
            "range": "± 91110.78169129639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1655009.71,
            "unit": "ns",
            "range": "± 154656.28085618958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7553175.305555556,
            "unit": "ns",
            "range": "± 249644.59279347162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2482435.7647058824,
            "unit": "ns",
            "range": "± 49228.20268089397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2546356.625,
            "unit": "ns",
            "range": "± 98978.00512484922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3240382.3666666667,
            "unit": "ns",
            "range": "± 52725.459667259514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3175669.063829787,
            "unit": "ns",
            "range": "± 121093.09385944501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8670829.45,
            "unit": "ns",
            "range": "± 236077.93980193412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212715.9,
            "unit": "ns",
            "range": "± 17054.930432889698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200285.7857142857,
            "unit": "ns",
            "range": "± 3520.0830066386748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170901.30434782608,
            "unit": "ns",
            "range": "± 4167.367682741955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3310082.066666667,
            "unit": "ns",
            "range": "± 31574.324798722748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2772618.714285714,
            "unit": "ns",
            "range": "± 30771.451847397504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12965.471264367816,
            "unit": "ns",
            "range": "± 930.2088392558835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62696.27173913043,
            "unit": "ns",
            "range": "± 5600.232793637137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55888.28571428572,
            "unit": "ns",
            "range": "± 7054.541010525848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63068.436170212764,
            "unit": "ns",
            "range": "± 11168.283712937102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3594.0795454545455,
            "unit": "ns",
            "range": "± 804.7893452025288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13167.988888888889,
            "unit": "ns",
            "range": "± 1160.0829735381576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3792995.830403646,
            "unit": "ns",
            "range": "± 4061.0831901996016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202364.9913504464,
            "unit": "ns",
            "range": "± 1586.2598864862578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764094.8921223958,
            "unit": "ns",
            "range": "± 713.5282261097335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2022689.5345982143,
            "unit": "ns",
            "range": "± 2439.109806637709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632374.993359375,
            "unit": "ns",
            "range": "± 279.21315284300243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575589.7419921875,
            "unit": "ns",
            "range": "± 961.174039784399"
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
          "id": "ad08e71a984c56196853c85567a50b7e6ea7e374",
          "message": "Merge pull request #3717 from greymistcube/chore/cleanup\n\n🧹 Minor cleanup",
          "timestamp": "2024-03-29T20:58:16+09:00",
          "tree_id": "e2d7a8ace564d7f0e6b01893b169194ab2e4d640",
          "url": "https://github.com/planetarium/libplanet/commit/ad08e71a984c56196853c85567a50b7e6ea7e374"
        },
        "date": 1711714079473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5780399.166666667,
            "unit": "ns",
            "range": "± 31737.55561084557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14575717.785714285,
            "unit": "ns",
            "range": "± 101047.81802704833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37447618.833333336,
            "unit": "ns",
            "range": "± 105121.75118517622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76838709.5,
            "unit": "ns",
            "range": "± 391862.05730507214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155706917.53333333,
            "unit": "ns",
            "range": "± 639701.406519576"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36514.673684210524,
            "unit": "ns",
            "range": "± 2471.991566991853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012658.5612244898,
            "unit": "ns",
            "range": "± 111064.98340718591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1915941.8125,
            "unit": "ns",
            "range": "± 75568.8840360466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1629160.7659574468,
            "unit": "ns",
            "range": "± 118826.6047824168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7580127.121621622,
            "unit": "ns",
            "range": "± 248315.43864579353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2470755.523255814,
            "unit": "ns",
            "range": "± 90310.9752536277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2589358.11971831,
            "unit": "ns",
            "range": "± 126516.45329017387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3231785.6923076925,
            "unit": "ns",
            "range": "± 85901.47434719346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3248395.7580645164,
            "unit": "ns",
            "range": "± 146278.11456943818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8775274,
            "unit": "ns",
            "range": "± 191220.59647273587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203918.12068965516,
            "unit": "ns",
            "range": "± 8828.32009228512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194928,
            "unit": "ns",
            "range": "± 7870.892022807445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164536.7894736842,
            "unit": "ns",
            "range": "± 3655.518500674279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3256038.4,
            "unit": "ns",
            "range": "± 22452.561339092572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3002811.2666666666,
            "unit": "ns",
            "range": "± 32185.00820139416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13463.08888888889,
            "unit": "ns",
            "range": "± 1125.8370757900411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67720.64432989691,
            "unit": "ns",
            "range": "± 6838.025322582918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90102.88888888889,
            "unit": "ns",
            "range": "± 2037.9154382194893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72377.67346938775,
            "unit": "ns",
            "range": "± 19993.66969651934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3431.8172043010754,
            "unit": "ns",
            "range": "± 797.7205289507664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12909.255813953489,
            "unit": "ns",
            "range": "± 964.745186547101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3710579.326171875,
            "unit": "ns",
            "range": "± 4937.183645240882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219290.9955729167,
            "unit": "ns",
            "range": "± 1915.032457895967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773853.1899088542,
            "unit": "ns",
            "range": "± 1123.6613959345095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917870.6909877232,
            "unit": "ns",
            "range": "± 1600.0157112870897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624716.1305803572,
            "unit": "ns",
            "range": "± 646.1083632837183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580697.9250139509,
            "unit": "ns",
            "range": "± 750.5890373575751"
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
          "id": "ea7bae21f01aef2eafb78cb40df02c5cc09dd9fc",
          "message": "Merge pull request #3718 from greymistcube/refactor/dumb-action\n\n♻️ Overhaul `DumbAction`",
          "timestamp": "2024-04-01T10:34:00+09:00",
          "tree_id": "87a583c1d570c6bc2afb4f2b8f7a1ca01ed70eaa",
          "url": "https://github.com/planetarium/libplanet/commit/ea7bae21f01aef2eafb78cb40df02c5cc09dd9fc"
        },
        "date": 1711935807725,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5503117.966666667,
            "unit": "ns",
            "range": "± 20068.436140462203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14100767.2,
            "unit": "ns",
            "range": "± 63327.22511707403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36462476.36666667,
            "unit": "ns",
            "range": "± 169796.69994515993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76114366.1,
            "unit": "ns",
            "range": "± 378801.0625542873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153411208.06666666,
            "unit": "ns",
            "range": "± 1379446.8803339498"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40893.602040816324,
            "unit": "ns",
            "range": "± 6504.21919763807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982932.08,
            "unit": "ns",
            "range": "± 88018.65615606039"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1856059.857142857,
            "unit": "ns",
            "range": "± 66863.18246862583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1602275.97,
            "unit": "ns",
            "range": "± 149523.5598733561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7613450.055555556,
            "unit": "ns",
            "range": "± 285906.0705636759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2416059.2666666666,
            "unit": "ns",
            "range": "± 36081.94684220642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2591761.382352941,
            "unit": "ns",
            "range": "± 81451.68618379063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3115781.8,
            "unit": "ns",
            "range": "± 50922.5457171407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3055434.0942028984,
            "unit": "ns",
            "range": "± 147451.22230950886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8566420.935483871,
            "unit": "ns",
            "range": "± 206418.44124349864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201281.44827586206,
            "unit": "ns",
            "range": "± 5635.217447865616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194367.37837837837,
            "unit": "ns",
            "range": "± 6483.498452701766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169760.48,
            "unit": "ns",
            "range": "± 4364.0240806698885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3155568.285714286,
            "unit": "ns",
            "range": "± 24759.16205919793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2828368,
            "unit": "ns",
            "range": "± 22815.738107381392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12181.69411764706,
            "unit": "ns",
            "range": "± 669.8235201747336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66588.71875,
            "unit": "ns",
            "range": "± 3839.703264859285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53426.84375,
            "unit": "ns",
            "range": "± 1656.4740654888312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89554.71649484536,
            "unit": "ns",
            "range": "± 16886.533903544518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3627.436170212766,
            "unit": "ns",
            "range": "± 276.4275871466389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11740.719178082192,
            "unit": "ns",
            "range": "± 594.941366078656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3815017.743582589,
            "unit": "ns",
            "range": "± 6634.034166117745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217685.1196986607,
            "unit": "ns",
            "range": "± 1176.482909479517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760329.6475306919,
            "unit": "ns",
            "range": "± 2659.8402321613175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930150.7071614584,
            "unit": "ns",
            "range": "± 4875.860663431457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606145.7219401042,
            "unit": "ns",
            "range": "± 1088.1222968718268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566753.3604910715,
            "unit": "ns",
            "range": "± 730.9840270695355"
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
          "id": "421ca95ad9e5ae172247b8b16b9057487bf47028",
          "message": "Merge pull request #3719 from greymistcube/refactor/test-util-bytes-equality\n\n♻️ Changed `AssertBytesEqual()` overloads and use more hex representation",
          "timestamp": "2024-04-01T12:48:45+09:00",
          "tree_id": "407de50a21cfd9ecda31c72e8385cd67126ba4b7",
          "url": "https://github.com/planetarium/libplanet/commit/421ca95ad9e5ae172247b8b16b9057487bf47028"
        },
        "date": 1711943897148,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6119304.357142857,
            "unit": "ns",
            "range": "± 27709.167643877063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15128106.066666666,
            "unit": "ns",
            "range": "± 110152.49050129595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38850050.428571425,
            "unit": "ns",
            "range": "± 582693.108669955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76976148.83333333,
            "unit": "ns",
            "range": "± 392909.4965675332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154296670.06666666,
            "unit": "ns",
            "range": "± 482759.0131021402"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47096.5,
            "unit": "ns",
            "range": "± 7102.064789459768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1078602.2121212122,
            "unit": "ns",
            "range": "± 95355.46278287457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2021468.648148148,
            "unit": "ns",
            "range": "± 79465.87948614135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1696966.510989011,
            "unit": "ns",
            "range": "± 103893.73894058983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7525508.2272727275,
            "unit": "ns",
            "range": "± 138715.15866118696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2495743.9375,
            "unit": "ns",
            "range": "± 70508.74205873797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2671174.641025641,
            "unit": "ns",
            "range": "± 91008.67095487665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3180786.9615384615,
            "unit": "ns",
            "range": "± 60227.47035247671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3353972.4166666665,
            "unit": "ns",
            "range": "± 129805.13033411559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8777843.629032258,
            "unit": "ns",
            "range": "± 183526.5677987326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224024.66326530612,
            "unit": "ns",
            "range": "± 14854.164282615344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228588.45833333334,
            "unit": "ns",
            "range": "± 7465.595217775591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171620.44736842104,
            "unit": "ns",
            "range": "± 3753.2019585309376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3330991.8666666667,
            "unit": "ns",
            "range": "± 46930.87372305702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2880562.785714286,
            "unit": "ns",
            "range": "± 34556.90915705586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18744.163265306124,
            "unit": "ns",
            "range": "± 3041.9538339213523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85095.41836734694,
            "unit": "ns",
            "range": "± 15014.104396992276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93269.27777777778,
            "unit": "ns",
            "range": "± 2694.3984286039604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88899.5421686747,
            "unit": "ns",
            "range": "± 6318.215596544615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6847.3247422680415,
            "unit": "ns",
            "range": "± 797.5908126235178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18851.408163265307,
            "unit": "ns",
            "range": "± 3036.038934039687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3836685.2688802085,
            "unit": "ns",
            "range": "± 6085.404626380128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199877.8712332589,
            "unit": "ns",
            "range": "± 1688.3368587053033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772180.625,
            "unit": "ns",
            "range": "± 392.6290814840445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969392.2205729166,
            "unit": "ns",
            "range": "± 9325.168173298927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607201.4579427083,
            "unit": "ns",
            "range": "± 1081.5566699842016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580425.8286458333,
            "unit": "ns",
            "range": "± 692.3510610285615"
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
          "id": "a763a2bd7072f072d207e8bd859df1389f5102eb",
          "message": "Merge pull request #3720 from greymistcube/refactor/dumb-action\n\n♻️ Refactor `DumbAction`",
          "timestamp": "2024-04-02T08:53:21+09:00",
          "tree_id": "4a1f60ea587825d5c1cadd8ec7f90693d651c6dd",
          "url": "https://github.com/planetarium/libplanet/commit/a763a2bd7072f072d207e8bd859df1389f5102eb"
        },
        "date": 1712016197337,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6029821.5,
            "unit": "ns",
            "range": "± 142766.3166247557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15041329.7,
            "unit": "ns",
            "range": "± 114164.29971705565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38031423,
            "unit": "ns",
            "range": "± 174465.29053285724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77875517.7,
            "unit": "ns",
            "range": "± 381672.8207266758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155862603.69230768,
            "unit": "ns",
            "range": "± 447316.9443950201"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38353.7191011236,
            "unit": "ns",
            "range": "± 2863.115618552486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996877.57,
            "unit": "ns",
            "range": "± 96765.86534478127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1936210.6734693877,
            "unit": "ns",
            "range": "± 76551.79945805426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1688285.8020833333,
            "unit": "ns",
            "range": "± 146981.9412258469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7511536.419354838,
            "unit": "ns",
            "range": "± 192597.67969072628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2643432.6875,
            "unit": "ns",
            "range": "± 81927.533734604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2727221.4,
            "unit": "ns",
            "range": "± 42779.982830424655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3323194.285714286,
            "unit": "ns",
            "range": "± 56167.95562408348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3402414.2647058824,
            "unit": "ns",
            "range": "± 137970.0893230976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8905818.647058824,
            "unit": "ns",
            "range": "± 223145.5269164976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236969.4358974359,
            "unit": "ns",
            "range": "± 8221.637981233845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216662.0625,
            "unit": "ns",
            "range": "± 18667.138271819025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172123.92424242425,
            "unit": "ns",
            "range": "± 8048.29259162006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3293654.3571428573,
            "unit": "ns",
            "range": "± 52611.14241826483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2952362.625,
            "unit": "ns",
            "range": "± 55042.382262973806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19855.614583333332,
            "unit": "ns",
            "range": "± 3449.9378922549704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98300.31944444444,
            "unit": "ns",
            "range": "± 4861.87557075786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88563.4191919192,
            "unit": "ns",
            "range": "± 14584.551001377133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98259.51020408163,
            "unit": "ns",
            "range": "± 11132.861281554162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5110.611111111111,
            "unit": "ns",
            "range": "± 1606.5544757171203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15632.90625,
            "unit": "ns",
            "range": "± 2143.113200724222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3683955.553185096,
            "unit": "ns",
            "range": "± 3579.222447171808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216224.6630859375,
            "unit": "ns",
            "range": "± 869.1887263811782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767781.0487583706,
            "unit": "ns",
            "range": "± 881.2243112433742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934617.2698317308,
            "unit": "ns",
            "range": "± 1069.0801822639146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620769.9130859375,
            "unit": "ns",
            "range": "± 2231.253680880572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575595.9159405048,
            "unit": "ns",
            "range": "± 979.9291494557333"
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
          "id": "1ea676dfe55226895127f404097c0fb64399b925",
          "message": "Merge pull request #3721 from greymistcube/refactor/dumb-action\n\n♻️ Add mint and burn functionality to `DumbAction`",
          "timestamp": "2024-04-02T18:27:19+09:00",
          "tree_id": "581ef3be9c0e05074ee9c4ffb20168dd9eff71a3",
          "url": "https://github.com/planetarium/libplanet/commit/1ea676dfe55226895127f404097c0fb64399b925"
        },
        "date": 1712050627964,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5579060.033333333,
            "unit": "ns",
            "range": "± 19291.647518575297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14748635.4,
            "unit": "ns",
            "range": "± 172767.55215474594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37112280.86666667,
            "unit": "ns",
            "range": "± 101671.0107193552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75163863.8,
            "unit": "ns",
            "range": "± 429381.06769215746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148700060.16666666,
            "unit": "ns",
            "range": "± 678647.9169953263"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38207.765957446805,
            "unit": "ns",
            "range": "± 4044.5484088748244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998191.095959596,
            "unit": "ns",
            "range": "± 90886.29502755123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1887143.1046511629,
            "unit": "ns",
            "range": "± 69508.76737133837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1584426.2783505155,
            "unit": "ns",
            "range": "± 144046.42238852076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7539152.815789473,
            "unit": "ns",
            "range": "± 255167.44004027706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2408584.1774193547,
            "unit": "ns",
            "range": "± 72142.19637326784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2524051.964285714,
            "unit": "ns",
            "range": "± 107059.61833159966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3186111.4523809524,
            "unit": "ns",
            "range": "± 65457.85327481814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3136481.8913043477,
            "unit": "ns",
            "range": "± 144879.5583366747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8840623.108108109,
            "unit": "ns",
            "range": "± 166312.6840819531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200438.90625,
            "unit": "ns",
            "range": "± 5747.131985211715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197136.23076923078,
            "unit": "ns",
            "range": "± 2609.7842871856337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166512.36666666667,
            "unit": "ns",
            "range": "± 2055.6453233080106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3258547.3333333335,
            "unit": "ns",
            "range": "± 36018.63214993569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2859916.066666667,
            "unit": "ns",
            "range": "± 32177.853090211567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12621.141304347826,
            "unit": "ns",
            "range": "± 1243.1743362711104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59328.247191011236,
            "unit": "ns",
            "range": "± 3732.164249287107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53403.84146341463,
            "unit": "ns",
            "range": "± 2730.8235020314323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64373.5918367347,
            "unit": "ns",
            "range": "± 17877.61225153464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3526.4021739130435,
            "unit": "ns",
            "range": "± 339.34724216420693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11752.521978021978,
            "unit": "ns",
            "range": "± 672.627517493432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3714646.053185096,
            "unit": "ns",
            "range": "± 4801.606645784082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1227020.009765625,
            "unit": "ns",
            "range": "± 1727.58437070588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754592.4048177083,
            "unit": "ns",
            "range": "± 620.0381786959449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945459.094951923,
            "unit": "ns",
            "range": "± 2327.09408088179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618288.8531668527,
            "unit": "ns",
            "range": "± 319.537798493328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573570.1302315848,
            "unit": "ns",
            "range": "± 309.2225440457359"
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
          "id": "438df37e9ef7b1b76cc81331e1c1cde526e10e0b",
          "message": "Merge pull request #3722 from greymistcube/refactor/random-test\n\n♻️ Changed `RandomAction` to `ContextRecordingAction`",
          "timestamp": "2024-04-02T19:01:15+09:00",
          "tree_id": "8ac4897b6fdb0cba78832f4cd134cac834f7fdee",
          "url": "https://github.com/planetarium/libplanet/commit/438df37e9ef7b1b76cc81331e1c1cde526e10e0b"
        },
        "date": 1712052649319,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5902967.7,
            "unit": "ns",
            "range": "± 55864.22729797665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15136061.366666667,
            "unit": "ns",
            "range": "± 154220.5802445995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37576480.6,
            "unit": "ns",
            "range": "± 122308.44345272558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76784281.1,
            "unit": "ns",
            "range": "± 257305.03299941213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156215941.03333333,
            "unit": "ns",
            "range": "± 551441.2941685331"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42168.142857142855,
            "unit": "ns",
            "range": "± 7302.876463718246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1063578.193877551,
            "unit": "ns",
            "range": "± 116780.99121424957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1942040.5416666667,
            "unit": "ns",
            "range": "± 75200.04785590326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1700456.0959595959,
            "unit": "ns",
            "range": "± 187155.74148890984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7529586.315789473,
            "unit": "ns",
            "range": "± 150115.00462980324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2481759.2264150945,
            "unit": "ns",
            "range": "± 97427.0932912325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2659259.765957447,
            "unit": "ns",
            "range": "± 92503.82995154796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3264901,
            "unit": "ns",
            "range": "± 49911.43531835627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3331466.8529411764,
            "unit": "ns",
            "range": "± 159320.10449872768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8790819.970588235,
            "unit": "ns",
            "range": "± 221686.3164949636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236051.83333333334,
            "unit": "ns",
            "range": "± 16167.836117080476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235767.58163265305,
            "unit": "ns",
            "range": "± 9197.220105002594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176691.5934065934,
            "unit": "ns",
            "range": "± 12685.141114248609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3328260.8571428573,
            "unit": "ns",
            "range": "± 55643.4738005582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2959778.7666666666,
            "unit": "ns",
            "range": "± 49726.471917404124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27473.14285714286,
            "unit": "ns",
            "range": "± 2315.103124999283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102599.01030927835,
            "unit": "ns",
            "range": "± 7062.694853499095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95049.27551020408,
            "unit": "ns",
            "range": "± 3749.3452498697807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93141.47916666667,
            "unit": "ns",
            "range": "± 10743.37312900539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6319.440860215053,
            "unit": "ns",
            "range": "± 443.1062161006975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21298.59756097561,
            "unit": "ns",
            "range": "± 1083.313719021936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3795236.530691964,
            "unit": "ns",
            "range": "± 30320.70320470987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217468.0604166666,
            "unit": "ns",
            "range": "± 3950.775758796644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766484.5893554688,
            "unit": "ns",
            "range": "± 1752.2738376725658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955614.3194110577,
            "unit": "ns",
            "range": "± 2909.8992465769793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617428.5088704427,
            "unit": "ns",
            "range": "± 3956.990081106369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583244.9419270833,
            "unit": "ns",
            "range": "± 1668.9457309506877"
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
          "id": "03c1a63b7ab259350002a9031c78a30c64dcaf3e",
          "message": "Merge pull request #3723 from greymistcube/chore/cleanup\n\n🧹 Removed RecordRandom from DumbAction",
          "timestamp": "2024-04-03T00:56:21+09:00",
          "tree_id": "3421221604a67af3a457b2d9bdd5d6fdb44dfe0c",
          "url": "https://github.com/planetarium/libplanet/commit/03c1a63b7ab259350002a9031c78a30c64dcaf3e"
        },
        "date": 1712073968315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5787324.083333333,
            "unit": "ns",
            "range": "± 25446.848118661816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14846101.461538462,
            "unit": "ns",
            "range": "± 53486.75465261686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37678612.06666667,
            "unit": "ns",
            "range": "± 218348.90424026363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76692337.8,
            "unit": "ns",
            "range": "± 323962.35863780754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154017060.2857143,
            "unit": "ns",
            "range": "± 561760.6133651016"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39297.31443298969,
            "unit": "ns",
            "range": "± 4846.408737684656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980542.3888888889,
            "unit": "ns",
            "range": "± 75590.80740759724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1917347.775,
            "unit": "ns",
            "range": "± 67866.87398795376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1623570.2346938776,
            "unit": "ns",
            "range": "± 134545.96413042108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7513178.735294118,
            "unit": "ns",
            "range": "± 241030.60688537848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2388968.5384615385,
            "unit": "ns",
            "range": "± 81169.54981455278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2526335.8846153845,
            "unit": "ns",
            "range": "± 50082.03053417616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3128202.05,
            "unit": "ns",
            "range": "± 65937.49556765263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3221354.790322581,
            "unit": "ns",
            "range": "± 138950.32280322074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8738781.129032258,
            "unit": "ns",
            "range": "± 226915.24362203933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201511.18421052632,
            "unit": "ns",
            "range": "± 7792.3139607424655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194490.1052631579,
            "unit": "ns",
            "range": "± 8326.31110371602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164546.7619047619,
            "unit": "ns",
            "range": "± 3609.6607445127293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3262511.5,
            "unit": "ns",
            "range": "± 31162.931764624886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2905239.2,
            "unit": "ns",
            "range": "± 40095.07858685046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12864.16304347826,
            "unit": "ns",
            "range": "± 1185.4136411384968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63019.36082474227,
            "unit": "ns",
            "range": "± 5747.434125303161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67720.4,
            "unit": "ns",
            "range": "± 17147.179378733537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66367.98969072165,
            "unit": "ns",
            "range": "± 13465.634995931037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4576.242424242424,
            "unit": "ns",
            "range": "± 1909.7844738475503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12699.902298850575,
            "unit": "ns",
            "range": "± 1272.4454798003808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3763693.236328125,
            "unit": "ns",
            "range": "± 5765.642315727934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204587.4427083333,
            "unit": "ns",
            "range": "± 1054.0227177518918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759990.1235026042,
            "unit": "ns",
            "range": "± 1050.6601572572035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951798.16875,
            "unit": "ns",
            "range": "± 2306.2344351637266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610583.4027994792,
            "unit": "ns",
            "range": "± 540.8248163109743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555675.0506510417,
            "unit": "ns",
            "range": "± 1035.9329347625114"
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
          "id": "2b09e6c5623785e1b228b73e0e6c412d2a08355c",
          "message": "Merge pull request #3724 from greymistcube/chore/test-description-for-qol\n\n🧹 More descriptive currency ticker and documentation for easier testing",
          "timestamp": "2024-04-03T14:48:08+09:00",
          "tree_id": "23b3b99e5773f34063f3e1c09242ba5917cfc817",
          "url": "https://github.com/planetarium/libplanet/commit/2b09e6c5623785e1b228b73e0e6c412d2a08355c"
        },
        "date": 1712123862453,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5720803.142857143,
            "unit": "ns",
            "range": "± 23178.396385783108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14427596.714285715,
            "unit": "ns",
            "range": "± 89294.95431126302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37560679.9,
            "unit": "ns",
            "range": "± 151259.82494880407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74255064.11538461,
            "unit": "ns",
            "range": "± 275934.57857692114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150692204.83333334,
            "unit": "ns",
            "range": "± 432345.46250482975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39781.163265306124,
            "unit": "ns",
            "range": "± 6373.294004509364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971902.9255319149,
            "unit": "ns",
            "range": "± 68426.00403579201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1944319.0875,
            "unit": "ns",
            "range": "± 101270.24462688787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1614932.4479166667,
            "unit": "ns",
            "range": "± 130134.57573502173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7596330.517241379,
            "unit": "ns",
            "range": "± 219671.34197926888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2544593.7666666666,
            "unit": "ns",
            "range": "± 43190.767653460825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2576543.769230769,
            "unit": "ns",
            "range": "± 68280.57317308208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3193870.1333333333,
            "unit": "ns",
            "range": "± 49105.46177051223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3441347.897959184,
            "unit": "ns",
            "range": "± 136722.54280540888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8641828.529411765,
            "unit": "ns",
            "range": "± 216272.1602801819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198344.54545454544,
            "unit": "ns",
            "range": "± 5630.109746326604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188782.87234042553,
            "unit": "ns",
            "range": "± 7063.956080348171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166360.61764705883,
            "unit": "ns",
            "range": "± 2595.8204358726584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3194768.285714286,
            "unit": "ns",
            "range": "± 53040.6635363249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2863973.1428571427,
            "unit": "ns",
            "range": "± 30155.062143877254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12226.76923076923,
            "unit": "ns",
            "range": "± 859.0018377541211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59933.426315789475,
            "unit": "ns",
            "range": "± 4784.706178849139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52537.793103448275,
            "unit": "ns",
            "range": "± 1480.357953317622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57512.06842105263,
            "unit": "ns",
            "range": "± 8602.14368341148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3131.3711340206187,
            "unit": "ns",
            "range": "± 484.5547853353725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11897.09090909091,
            "unit": "ns",
            "range": "± 747.7528271368275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3803274.550480769,
            "unit": "ns",
            "range": "± 4407.283801714076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219387.3609095982,
            "unit": "ns",
            "range": "± 2109.803189489144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774173.2849684495,
            "unit": "ns",
            "range": "± 936.4923114965409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933851.910435268,
            "unit": "ns",
            "range": "± 1128.493188549266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627197.9212890625,
            "unit": "ns",
            "range": "± 1164.4728575371296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573535.3900669643,
            "unit": "ns",
            "range": "± 598.7597895212302"
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
          "id": "c000850274ad9a846d44f628b66e2561b4002830",
          "message": "Merge pull request #3726 from greymistcube/refactor/shared-currency-for-testing\n\n♻️ Shared `Currencies` for testing",
          "timestamp": "2024-04-04T10:02:44+09:00",
          "tree_id": "c95218d091f584782dc1bef9ce1fca86a42984f5",
          "url": "https://github.com/planetarium/libplanet/commit/c000850274ad9a846d44f628b66e2561b4002830"
        },
        "date": 1712193156044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5936568.777777778,
            "unit": "ns",
            "range": "± 122148.66102781844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14857384.866666667,
            "unit": "ns",
            "range": "± 105950.95168915707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38870203.43333333,
            "unit": "ns",
            "range": "± 217148.74788378412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77490012.06666666,
            "unit": "ns",
            "range": "± 434825.4876294736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152473824.8,
            "unit": "ns",
            "range": "± 605345.8651235437"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43814.291666666664,
            "unit": "ns",
            "range": "± 4908.106061816013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1031756.43,
            "unit": "ns",
            "range": "± 109633.87049687868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1992192.0263157894,
            "unit": "ns",
            "range": "± 120933.63355328779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1620092.0520833333,
            "unit": "ns",
            "range": "± 109142.36666206786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8079870.571428572,
            "unit": "ns",
            "range": "± 390341.13851194206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2465675.1285714284,
            "unit": "ns",
            "range": "± 64875.53754921156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2652225.869230769,
            "unit": "ns",
            "range": "± 123427.62830976717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3224743.263157895,
            "unit": "ns",
            "range": "± 110355.3419132043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3261572.8243243243,
            "unit": "ns",
            "range": "± 109624.85818464262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8755259.032258065,
            "unit": "ns",
            "range": "± 197675.88948284072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203827.29787234042,
            "unit": "ns",
            "range": "± 7904.7571640365195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200663.2988505747,
            "unit": "ns",
            "range": "± 10996.640925929876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168414.6,
            "unit": "ns",
            "range": "± 3871.365995831989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3282502.9285714286,
            "unit": "ns",
            "range": "± 37584.45646697025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2920899.214285714,
            "unit": "ns",
            "range": "± 35950.702672449355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14687.537634408602,
            "unit": "ns",
            "range": "± 1779.8894418470745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66714.07368421053,
            "unit": "ns",
            "range": "± 5861.334729706351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60500.06626506024,
            "unit": "ns",
            "range": "± 5380.453594516964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94639.77551020408,
            "unit": "ns",
            "range": "± 16201.759954374951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5341.050505050505,
            "unit": "ns",
            "range": "± 1723.242662231125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13895.648936170213,
            "unit": "ns",
            "range": "± 1607.1406650833171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3696149.9249441964,
            "unit": "ns",
            "range": "± 3109.7119648074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221295.970424107,
            "unit": "ns",
            "range": "± 1204.3555998832587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767967.9516276042,
            "unit": "ns",
            "range": "± 2502.19039637661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965902.73515625,
            "unit": "ns",
            "range": "± 4370.1496225657365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616187.3356770833,
            "unit": "ns",
            "range": "± 401.42263620689556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582825.0930989584,
            "unit": "ns",
            "range": "± 643.9294250629466"
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
          "id": "f63f65c6f3d180999373bb839c5cb8396c5c3bc5",
          "message": "Merge pull request #3727 from greymistcube/chore/fix-exception-message\n\n🩹 Added missing information in Exception",
          "timestamp": "2024-04-04T16:52:49+09:00",
          "tree_id": "446381872af4f2fe81380a140647caf2f459f254",
          "url": "https://github.com/planetarium/libplanet/commit/f63f65c6f3d180999373bb839c5cb8396c5c3bc5"
        },
        "date": 1712217759768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6080405.733333333,
            "unit": "ns",
            "range": "± 51580.898048553194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14790116.866666667,
            "unit": "ns",
            "range": "± 128961.94338578376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37478278.5,
            "unit": "ns",
            "range": "± 154718.42110887467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77418887.66666667,
            "unit": "ns",
            "range": "± 673629.9677286448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154150220.86666667,
            "unit": "ns",
            "range": "± 748904.951791697"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39927.71428571428,
            "unit": "ns",
            "range": "± 6598.644009407281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 978863.8315789474,
            "unit": "ns",
            "range": "± 81564.21154899757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1864333.3857142858,
            "unit": "ns",
            "range": "± 60040.896038975174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1578619.131868132,
            "unit": "ns",
            "range": "± 94057.83658617342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7561893.080645162,
            "unit": "ns",
            "range": "± 205149.59521136017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2446212.9897959186,
            "unit": "ns",
            "range": "± 89912.63192425616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2481930.5789473685,
            "unit": "ns",
            "range": "± 63734.825969150676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3186810.6764705884,
            "unit": "ns",
            "range": "± 63909.96013263044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3156270.4552238807,
            "unit": "ns",
            "range": "± 149566.24313594628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8687334.486486487,
            "unit": "ns",
            "range": "± 212099.89302247574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201587.2558139535,
            "unit": "ns",
            "range": "± 7437.819637286901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200112.78481012658,
            "unit": "ns",
            "range": "± 10152.752645150598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171988.7857142857,
            "unit": "ns",
            "range": "± 3035.0494972157294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3259743.466666667,
            "unit": "ns",
            "range": "± 35409.28664280574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2870359.3,
            "unit": "ns",
            "range": "± 44167.7515586073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12320.189473684211,
            "unit": "ns",
            "range": "± 803.3820968287998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61388.43010752688,
            "unit": "ns",
            "range": "± 4782.544564209403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53405.192307692305,
            "unit": "ns",
            "range": "± 1427.038885783587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59166.010309278354,
            "unit": "ns",
            "range": "± 9995.709539487894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4832.55,
            "unit": "ns",
            "range": "± 1683.8181982469114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15502.689473684211,
            "unit": "ns",
            "range": "± 1303.2734261436756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3738395.865792411,
            "unit": "ns",
            "range": "± 4301.23537822884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1227369.5457589286,
            "unit": "ns",
            "range": "± 2606.2076947846913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771553.2858072916,
            "unit": "ns",
            "range": "± 1373.1137021475472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924908.9995492788,
            "unit": "ns",
            "range": "± 861.3050110728184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616127.5133713942,
            "unit": "ns",
            "range": "± 658.9685600397814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572322.673828125,
            "unit": "ns",
            "range": "± 654.1250537290855"
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
          "id": "74c0af4f0eb2c55103c10378c3e77f7d2e595d44",
          "message": "Merge pull request #3728 from greymistcube/refactor/remove-negative-balance\n\n♻️ Removed negative balance feature",
          "timestamp": "2024-04-05T13:01:33+09:00",
          "tree_id": "38305c1f46d1f603d4fb690302d54cb8f389db44",
          "url": "https://github.com/planetarium/libplanet/commit/74c0af4f0eb2c55103c10378c3e77f7d2e595d44"
        },
        "date": 1712290275000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5742613.666666667,
            "unit": "ns",
            "range": "± 13534.189925975657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14624606.57142857,
            "unit": "ns",
            "range": "± 100238.44587894046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37367410.78571428,
            "unit": "ns",
            "range": "± 389115.5926105286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76333944.42857143,
            "unit": "ns",
            "range": "± 284016.11200191936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152800681.8,
            "unit": "ns",
            "range": "± 1102333.648646828"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37691.23626373626,
            "unit": "ns",
            "range": "± 3454.1298722130837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979390.2421052632,
            "unit": "ns",
            "range": "± 82926.5711582107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1866941.3510638298,
            "unit": "ns",
            "range": "± 71599.44038370653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1619897.076923077,
            "unit": "ns",
            "range": "± 96851.24534015277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7845109.216216216,
            "unit": "ns",
            "range": "± 234445.1642308489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423352.214285714,
            "unit": "ns",
            "range": "± 67925.31417441602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2497380.275862069,
            "unit": "ns",
            "range": "± 71576.20905565147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3087874.4285714286,
            "unit": "ns",
            "range": "± 40433.247073159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3153666.023809524,
            "unit": "ns",
            "range": "± 114731.67514433949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8587047.533333333,
            "unit": "ns",
            "range": "± 156622.57989185644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200219.25396825396,
            "unit": "ns",
            "range": "± 9171.053893370432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192678.07352941178,
            "unit": "ns",
            "range": "± 8969.28661253482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179503.42857142858,
            "unit": "ns",
            "range": "± 2885.0446327512914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3199942.153846154,
            "unit": "ns",
            "range": "± 19388.77355089002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2848468,
            "unit": "ns",
            "range": "± 30459.69038682991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12286.154929577464,
            "unit": "ns",
            "range": "± 617.3525884865686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60185.07608695652,
            "unit": "ns",
            "range": "± 3521.2140052928107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60632.53846153846,
            "unit": "ns",
            "range": "± 6168.1686212498225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81260.82222222222,
            "unit": "ns",
            "range": "± 7976.205757643461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2971.68085106383,
            "unit": "ns",
            "range": "± 372.0269447047682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11373.45294117647,
            "unit": "ns",
            "range": "± 638.4825370674253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3679941.4832589286,
            "unit": "ns",
            "range": "± 4665.960529691716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196755.3489118305,
            "unit": "ns",
            "range": "± 1439.9346875510869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777385.6348353794,
            "unit": "ns",
            "range": "± 1106.2525292906323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955741.4795572916,
            "unit": "ns",
            "range": "± 2467.189874197506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627728.7546735491,
            "unit": "ns",
            "range": "± 457.82532467709484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576501.8983723958,
            "unit": "ns",
            "range": "± 399.76828663437595"
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
          "id": "c8f6d650474f812c3b47cbe82532c0c9f932d6a2",
          "message": "Merge pull request #3729 from greymistcube/bump/litedb-to-5.0.19\n\n⬆️ Bump Litedb to 5.0.15",
          "timestamp": "2024-04-08T16:23:12+09:00",
          "tree_id": "35c6f1dfd73b98176c26ec1f06a87cf0b097b299",
          "url": "https://github.com/planetarium/libplanet/commit/c8f6d650474f812c3b47cbe82532c0c9f932d6a2"
        },
        "date": 1712561475763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5717818.428571428,
            "unit": "ns",
            "range": "± 22158.684860010868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14544096.833333334,
            "unit": "ns",
            "range": "± 41530.59600481495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37286981.266666666,
            "unit": "ns",
            "range": "± 193338.441510686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75675077.06666666,
            "unit": "ns",
            "range": "± 424486.58418771304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150496123.07142857,
            "unit": "ns",
            "range": "± 313855.523159074"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 198280.4375,
            "unit": "ns",
            "range": "± 3471.792792756119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1753495.7142857143,
            "unit": "ns",
            "range": "± 247102.36775536832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3071845.263157895,
            "unit": "ns",
            "range": "± 214313.8162188858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2363060.5454545454,
            "unit": "ns",
            "range": "± 319451.18898780126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8341488.52,
            "unit": "ns",
            "range": "± 212969.70824139914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2603020.120689655,
            "unit": "ns",
            "range": "± 60893.02829130097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2796559.625,
            "unit": "ns",
            "range": "± 146258.2294439716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3777291.285714286,
            "unit": "ns",
            "range": "± 120264.9877875588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3511075.0102040814,
            "unit": "ns",
            "range": "± 267995.5536336222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9427318.92,
            "unit": "ns",
            "range": "± 250380.56152317414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197509.05714285714,
            "unit": "ns",
            "range": "± 6075.511394320729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189929.4375,
            "unit": "ns",
            "range": "± 6955.976630900053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161406.2857142857,
            "unit": "ns",
            "range": "± 1883.2854037792338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3148441.066666667,
            "unit": "ns",
            "range": "± 39023.326905595226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2893760.466666667,
            "unit": "ns",
            "range": "± 44494.85999346548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12976.104166666666,
            "unit": "ns",
            "range": "± 979.0036554866077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63257.5206185567,
            "unit": "ns",
            "range": "± 4394.1264726796135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70702.23469387754,
            "unit": "ns",
            "range": "± 13080.959149234377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71162.17525773196,
            "unit": "ns",
            "range": "± 8932.951758809333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2937.010752688172,
            "unit": "ns",
            "range": "± 660.827667705327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11343.426315789473,
            "unit": "ns",
            "range": "± 870.1879137009291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3803141.1422991073,
            "unit": "ns",
            "range": "± 9585.377605322352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202206.914341518,
            "unit": "ns",
            "range": "± 1941.9566674277219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778925.6162806919,
            "unit": "ns",
            "range": "± 597.0797616389748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934791.2820870536,
            "unit": "ns",
            "range": "± 2821.383974267784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614125.3351004465,
            "unit": "ns",
            "range": "± 845.6804202691375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573737.5853365385,
            "unit": "ns",
            "range": "± 343.08742664421254"
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
          "id": "8874c899afca340a0876b8418eea63d339bc9f90",
          "message": "Merge pull request #3732 from greymistcube/release/4.3.0\n\n🚀 Release 4.3.0",
          "timestamp": "2024-04-08T17:29:00+09:00",
          "tree_id": "2ae2825d3031445259bfbbfc1e75f3248632af1e",
          "url": "https://github.com/planetarium/libplanet/commit/8874c899afca340a0876b8418eea63d339bc9f90"
        },
        "date": 1712565428563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5776815.1,
            "unit": "ns",
            "range": "± 22229.844189416042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14686259.266666668,
            "unit": "ns",
            "range": "± 80883.49075188041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39051049.6,
            "unit": "ns",
            "range": "± 210901.48122855846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74431307.1,
            "unit": "ns",
            "range": "± 254803.22547571603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148953880.06666666,
            "unit": "ns",
            "range": "± 651045.2232765474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 196623.73333333334,
            "unit": "ns",
            "range": "± 2908.0363887158014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1809927.3865979381,
            "unit": "ns",
            "range": "± 235160.97851763677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3297864.8764044945,
            "unit": "ns",
            "range": "± 223580.03279438175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2282025.5416666665,
            "unit": "ns",
            "range": "± 277682.28477668186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8504083.613636363,
            "unit": "ns",
            "range": "± 314820.6875482226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2696544.4714285713,
            "unit": "ns",
            "range": "± 87611.92411071401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2884086.6,
            "unit": "ns",
            "range": "± 86407.69970225624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3852419.4137931033,
            "unit": "ns",
            "range": "± 109131.6127616811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3500389.03,
            "unit": "ns",
            "range": "± 281840.7654576008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9347073.88235294,
            "unit": "ns",
            "range": "± 170698.7129501398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197351.5909090909,
            "unit": "ns",
            "range": "± 6528.556848678509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189251,
            "unit": "ns",
            "range": "± 5621.109135314054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163848.84615384616,
            "unit": "ns",
            "range": "± 1463.3438218770189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3167884.8,
            "unit": "ns",
            "range": "± 21067.079220568623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2765847.214285714,
            "unit": "ns",
            "range": "± 31228.19919480708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11886.744680851063,
            "unit": "ns",
            "range": "± 762.5245095467913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59958.22352941176,
            "unit": "ns",
            "range": "± 3114.8691533187907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51469.171428571426,
            "unit": "ns",
            "range": "± 1447.9805914712085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57010.469072164946,
            "unit": "ns",
            "range": "± 8435.118673159464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2408.5105263157893,
            "unit": "ns",
            "range": "± 302.3270560571583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11572.402173913044,
            "unit": "ns",
            "range": "± 863.2582293524185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3694155.1416015625,
            "unit": "ns",
            "range": "± 3039.675313672271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212004.461328125,
            "unit": "ns",
            "range": "± 1028.1210126551416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758443.04296875,
            "unit": "ns",
            "range": "± 1588.39460218918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938001.3733072917,
            "unit": "ns",
            "range": "± 1907.1792817594276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611619.3527483259,
            "unit": "ns",
            "range": "± 504.96884915414324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559017.594921875,
            "unit": "ns",
            "range": "± 1196.9061622891898"
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
          "id": "4e55367a86451f70ecf9de2b90d59c152a5eb5b6",
          "message": "Merge pull request #3733 from greymistcube/prepare/4.4.0\n\n🔧 Prepare 4.4.0",
          "timestamp": "2024-04-08T18:52:52+09:00",
          "tree_id": "e63646c38e8c49ca210258e2d63ecb6a4042cfd0",
          "url": "https://github.com/planetarium/libplanet/commit/4e55367a86451f70ecf9de2b90d59c152a5eb5b6"
        },
        "date": 1712570471560,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5686312.928571428,
            "unit": "ns",
            "range": "± 13342.342452129242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14622393.966666667,
            "unit": "ns",
            "range": "± 73107.54617574096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37642603,
            "unit": "ns",
            "range": "± 138590.46208662636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76451896.23333333,
            "unit": "ns",
            "range": "± 281375.43737415184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152803036,
            "unit": "ns",
            "range": "± 947638.7325246895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 196003.625,
            "unit": "ns",
            "range": "± 3299.8978544797415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1762068.0505050505,
            "unit": "ns",
            "range": "± 255344.25750148992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2853731.2465753425,
            "unit": "ns",
            "range": "± 138716.29454181143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2394905.2653061226,
            "unit": "ns",
            "range": "± 316953.6121652407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8358454.84,
            "unit": "ns",
            "range": "± 154687.42921525118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2692148.125,
            "unit": "ns",
            "range": "± 133096.43596141876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2996184.6052631577,
            "unit": "ns",
            "range": "± 102810.12069345186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3876179.945945946,
            "unit": "ns",
            "range": "± 127319.72953093456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3507067.355555556,
            "unit": "ns",
            "range": "± 200820.56764831446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9211706.857142856,
            "unit": "ns",
            "range": "± 130224.95733499435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202312.8947368421,
            "unit": "ns",
            "range": "± 6892.404169218709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195430.98507462686,
            "unit": "ns",
            "range": "± 8955.47423662221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168590.25,
            "unit": "ns",
            "range": "± 3792.140027325218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3252827.1428571427,
            "unit": "ns",
            "range": "± 26508.63734595878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2938548.8333333335,
            "unit": "ns",
            "range": "± 39519.99586586637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14740.714285714286,
            "unit": "ns",
            "range": "± 2429.670135856339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59393.625,
            "unit": "ns",
            "range": "± 3258.600740930546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61171.14,
            "unit": "ns",
            "range": "± 16670.554006972714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66733.04545454546,
            "unit": "ns",
            "range": "± 22218.713559296262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4218.4,
            "unit": "ns",
            "range": "± 1618.4026043908204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15433.5,
            "unit": "ns",
            "range": "± 1467.620272223323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3789736.408203125,
            "unit": "ns",
            "range": "± 4082.029899128742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223885.5040457589,
            "unit": "ns",
            "range": "± 1624.7010201620835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767684.1019810268,
            "unit": "ns",
            "range": "± 1564.6878145595244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915267.9625,
            "unit": "ns",
            "range": "± 1529.5929060011752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625026.5617327009,
            "unit": "ns",
            "range": "± 813.5386974965986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567850.5989815848,
            "unit": "ns",
            "range": "± 948.1669533701122"
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
          "id": "4f78091a0c08ef13d674c824be4b836ce7d6e4dc",
          "message": "Merge pull request #3735 from greymistcube/refactor/iworld\n\n♻️ Changed `SetValidator()` to `SetValidatorSet()`",
          "timestamp": "2024-04-09T16:02:50+09:00",
          "tree_id": "13c4d7d33bd113ebaa1a03877172a4f9fde2a8c1",
          "url": "https://github.com/planetarium/libplanet/commit/4f78091a0c08ef13d674c824be4b836ce7d6e4dc"
        },
        "date": 1712646790529,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5686584.766666667,
            "unit": "ns",
            "range": "± 53164.4947893754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15357918,
            "unit": "ns",
            "range": "± 74219.03451368024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37665122,
            "unit": "ns",
            "range": "± 151551.60743974784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79633741.21428572,
            "unit": "ns",
            "range": "± 180054.4209784187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 160981616.63333333,
            "unit": "ns",
            "range": "± 541869.5799215984"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 240470.16842105263,
            "unit": "ns",
            "range": "± 14368.436269211637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1811051.8585858585,
            "unit": "ns",
            "range": "± 275361.8013276504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3311472.12371134,
            "unit": "ns",
            "range": "± 342461.33395946625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2510892.090909091,
            "unit": "ns",
            "range": "± 345346.32880747085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8527400.892857144,
            "unit": "ns",
            "range": "± 194172.44116970594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2861883.566666667,
            "unit": "ns",
            "range": "± 149494.16977454262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3016010.619047619,
            "unit": "ns",
            "range": "± 108004.56354838978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3940334.275862069,
            "unit": "ns",
            "range": "± 111999.35431156243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3616725.4210526315,
            "unit": "ns",
            "range": "± 225457.1446668556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9502805.037037037,
            "unit": "ns",
            "range": "± 259876.7286620985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209790.325,
            "unit": "ns",
            "range": "± 10847.635179228953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194862.28125,
            "unit": "ns",
            "range": "± 8900.492981653782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165231.6,
            "unit": "ns",
            "range": "± 3769.085529185533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3272562.8076923075,
            "unit": "ns",
            "range": "± 27026.42691387023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2918371.6666666665,
            "unit": "ns",
            "range": "± 30152.97949899258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14372.673684210526,
            "unit": "ns",
            "range": "± 1496.514364598298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67948.85858585859,
            "unit": "ns",
            "range": "± 6934.856496918967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89778.04,
            "unit": "ns",
            "range": "± 3597.7765864092075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89840.9387755102,
            "unit": "ns",
            "range": "± 11419.51484703154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3987.8958333333335,
            "unit": "ns",
            "range": "± 1168.9076905534876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18750.132653061224,
            "unit": "ns",
            "range": "± 3567.768471863007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3730604.3811383927,
            "unit": "ns",
            "range": "± 17180.438146008222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212852.7490885416,
            "unit": "ns",
            "range": "± 2910.8893301116195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773245.0657784598,
            "unit": "ns",
            "range": "± 740.5351139052245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956578.1082589286,
            "unit": "ns",
            "range": "± 2897.774810922234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617799.1153645833,
            "unit": "ns",
            "range": "± 676.929959478503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563436.6861746652,
            "unit": "ns",
            "range": "± 431.55759895988786"
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
          "id": "70aeb4796562ecf0585adab341a1d516a0515bbe",
          "message": "Merge pull request #3736 from greymistcube/refactor/block-protocol-version\n\n♻️ Changed constant reference block protocol versions",
          "timestamp": "2024-04-09T18:37:02+09:00",
          "tree_id": "84d13b2792e0acf7939c6c360d75621c214ce7d5",
          "url": "https://github.com/planetarium/libplanet/commit/70aeb4796562ecf0585adab341a1d516a0515bbe"
        },
        "date": 1712656006008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5756799.071428572,
            "unit": "ns",
            "range": "± 27318.721378639526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14832444.115384616,
            "unit": "ns",
            "range": "± 87086.00626730878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39680012.733333334,
            "unit": "ns",
            "range": "± 225791.94223395342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76210043.06666666,
            "unit": "ns",
            "range": "± 507430.0464074498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151469119.93333334,
            "unit": "ns",
            "range": "± 799801.0952471215"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 195703.77272727274,
            "unit": "ns",
            "range": "± 9134.263395076221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1762096.6288659794,
            "unit": "ns",
            "range": "± 232916.0278885093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2881250.0923076924,
            "unit": "ns",
            "range": "± 133483.72829812008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2296049.0531914895,
            "unit": "ns",
            "range": "± 249892.2762501387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8322387.552631579,
            "unit": "ns",
            "range": "± 165950.25816372866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2601270.3174603176,
            "unit": "ns",
            "range": "± 80624.82155175558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2841205.577777778,
            "unit": "ns",
            "range": "± 165709.67511357533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3901565.7790697673,
            "unit": "ns",
            "range": "± 125536.02075620057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3571848.159574468,
            "unit": "ns",
            "range": "± 374446.55322975124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9426740.444444444,
            "unit": "ns",
            "range": "± 185073.8899607468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201635.8492063492,
            "unit": "ns",
            "range": "± 8772.191261096019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194225.28865979382,
            "unit": "ns",
            "range": "± 12698.366125180864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174060.05172413794,
            "unit": "ns",
            "range": "± 4964.25037922003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3311190.8666666667,
            "unit": "ns",
            "range": "± 52379.591716712755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2831980.6875,
            "unit": "ns",
            "range": "± 55468.366975804325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12332.52688172043,
            "unit": "ns",
            "range": "± 993.9497033836648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59984.03191489362,
            "unit": "ns",
            "range": "± 4804.359054970602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59723.6914893617,
            "unit": "ns",
            "range": "± 6249.4498063663505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59006.04081632653,
            "unit": "ns",
            "range": "± 9714.102562841801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2627.5425531914893,
            "unit": "ns",
            "range": "± 474.426692273736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12104.231578947369,
            "unit": "ns",
            "range": "± 1062.724153603246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722639.3599759615,
            "unit": "ns",
            "range": "± 3910.145557595689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1238162.4848958333,
            "unit": "ns",
            "range": "± 4746.58055828689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764829.3895182292,
            "unit": "ns",
            "range": "± 1480.291600048801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929863.763671875,
            "unit": "ns",
            "range": "± 1017.2835271799604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628154.5304129465,
            "unit": "ns",
            "range": "± 517.7255742749908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582723.966657366,
            "unit": "ns",
            "range": "± 1634.2621652573578"
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
          "id": "9ab2062035cf17953592afb7a1f1b29d28655e06",
          "message": "Merge pull request #3738 from greymistcube/refactor/trie-metadata\n\n♻️ Refactor `TrieMetadata`",
          "timestamp": "2024-04-11T18:40:39+09:00",
          "tree_id": "f5e5bb85ed32af2e83a2800131f11d15bc40ab1e",
          "url": "https://github.com/planetarium/libplanet/commit/9ab2062035cf17953592afb7a1f1b29d28655e06"
        },
        "date": 1712828952420,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5723978.666666667,
            "unit": "ns",
            "range": "± 12320.237920764454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14606003.166666666,
            "unit": "ns",
            "range": "± 92198.06445959285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37547838.1,
            "unit": "ns",
            "range": "± 157133.88569297022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76100245,
            "unit": "ns",
            "range": "± 286498.4475479485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153127028.19230768,
            "unit": "ns",
            "range": "± 400917.37616608414"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 196775.75,
            "unit": "ns",
            "range": "± 4907.379768720212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1763511.551020408,
            "unit": "ns",
            "range": "± 240216.00297507682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2876706.893939394,
            "unit": "ns",
            "range": "± 132223.35813476652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2392606.5102040814,
            "unit": "ns",
            "range": "± 321944.8631537991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8380218.857142857,
            "unit": "ns",
            "range": "± 238903.08540760863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2629851.5494505493,
            "unit": "ns",
            "range": "± 147068.93221269964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2942533.9,
            "unit": "ns",
            "range": "± 51778.92272762474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3881485.0681818184,
            "unit": "ns",
            "range": "± 142666.6302040738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3434495.2391304346,
            "unit": "ns",
            "range": "± 193149.60996338597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9461507.045454545,
            "unit": "ns",
            "range": "± 133568.78158265137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198499.86363636365,
            "unit": "ns",
            "range": "± 7044.25832031294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187888.35483870967,
            "unit": "ns",
            "range": "± 5820.021489163118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163429,
            "unit": "ns",
            "range": "± 2578.9602556068985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3290863.4285714286,
            "unit": "ns",
            "range": "± 27834.519411678746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2915097.9285714286,
            "unit": "ns",
            "range": "± 16506.395019293795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11696.766666666666,
            "unit": "ns",
            "range": "± 690.924946736237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69097.12711864407,
            "unit": "ns",
            "range": "± 3046.514157809653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50778.63157894737,
            "unit": "ns",
            "range": "± 1110.2899626537164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56307.34042553192,
            "unit": "ns",
            "range": "± 8883.460976169275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2556.2473118279568,
            "unit": "ns",
            "range": "± 291.10825178788656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11772.822916666666,
            "unit": "ns",
            "range": "± 905.8348053741328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3703237.8155691964,
            "unit": "ns",
            "range": "± 4191.532191021922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1240019.9552176339,
            "unit": "ns",
            "range": "± 1627.600527228747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763136.8129557292,
            "unit": "ns",
            "range": "± 897.5519735897636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922598.095703125,
            "unit": "ns",
            "range": "± 1349.2142743824654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635538.3970102164,
            "unit": "ns",
            "range": "± 450.80980003289443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568193.316545759,
            "unit": "ns",
            "range": "± 803.6466440771512"
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
          "id": "24fe16c9bb067e1c1199b90e950c5747ac897da0",
          "message": "Merge pull request #3740 from greymistcube/chore/changelog-fix\n\n🧹 Fixed changelog typo",
          "timestamp": "2024-04-12T11:03:44+09:00",
          "tree_id": "5d245d6edd2e752ae75652a1840759df64989b08",
          "url": "https://github.com/planetarium/libplanet/commit/24fe16c9bb067e1c1199b90e950c5747ac897da0"
        },
        "date": 1712887979672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206538.125,
            "unit": "ns",
            "range": "± 13213.167507611886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197413.20454545456,
            "unit": "ns",
            "range": "± 12113.217217567722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164090.62857142856,
            "unit": "ns",
            "range": "± 5355.91835419536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3290022.8,
            "unit": "ns",
            "range": "± 35816.15215075057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2879768.1666666665,
            "unit": "ns",
            "range": "± 47140.46233433904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16835.25773195876,
            "unit": "ns",
            "range": "± 3436.8558617044596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63045.989130434784,
            "unit": "ns",
            "range": "± 4811.354104466005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81725.74747474748,
            "unit": "ns",
            "range": "± 14919.254006452526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72657.05102040817,
            "unit": "ns",
            "range": "± 17631.13969415749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5516.9795918367345,
            "unit": "ns",
            "range": "± 1468.4907041016031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12793.63829787234,
            "unit": "ns",
            "range": "± 1341.0262387966752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5797414.333333333,
            "unit": "ns",
            "range": "± 53090.55237942417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15241749.7,
            "unit": "ns",
            "range": "± 81940.46274076946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38153574,
            "unit": "ns",
            "range": "± 151010.068763133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77532217.13333334,
            "unit": "ns",
            "range": "± 542726.4391757689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154848860.16666666,
            "unit": "ns",
            "range": "± 715213.0547614732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3727219.0758928573,
            "unit": "ns",
            "range": "± 7043.973383832216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219709.504185268,
            "unit": "ns",
            "range": "± 1205.2280882091495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772677.724609375,
            "unit": "ns",
            "range": "± 2240.956540350282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943797.605859375,
            "unit": "ns",
            "range": "± 1459.2309626309732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617193.0421875,
            "unit": "ns",
            "range": "± 1083.9997241345368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581906.7805338542,
            "unit": "ns",
            "range": "± 948.7173258165742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1808102.1224489796,
            "unit": "ns",
            "range": "± 235089.01364772694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2895153.106557377,
            "unit": "ns",
            "range": "± 128418.2941248739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2394235.2684210525,
            "unit": "ns",
            "range": "± 217076.02613004934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8970725,
            "unit": "ns",
            "range": "± 259757.84306619118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2896259.7435897435,
            "unit": "ns",
            "range": "± 96492.54287105298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3043427.111111111,
            "unit": "ns",
            "range": "± 80363.19883193793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3903158.0675675673,
            "unit": "ns",
            "range": "± 109148.97243536788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3622911.6224489794,
            "unit": "ns",
            "range": "± 285261.25146443746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9466236.736842105,
            "unit": "ns",
            "range": "± 158223.93118258484"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 194974.5,
            "unit": "ns",
            "range": "± 8179.628503350882"
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
          "id": "24e8a381e18b93d71181216254775a2882548c47",
          "message": "Merge pull request #3739 from greymistcube/refactor/iworld-state\n\n♻️ Added `Version` property to `IWorldState`",
          "timestamp": "2024-04-12T18:14:04+09:00",
          "tree_id": "93408a025d34e352529096c6d27af63e2bef7b90",
          "url": "https://github.com/planetarium/libplanet/commit/24e8a381e18b93d71181216254775a2882548c47"
        },
        "date": 1712913730094,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199130.32432432432,
            "unit": "ns",
            "range": "± 6632.6135583278265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190249.51612903227,
            "unit": "ns",
            "range": "± 5670.221200100091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162697.4411764706,
            "unit": "ns",
            "range": "± 3105.825241996647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3200448.3571428573,
            "unit": "ns",
            "range": "± 31676.576528326812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2883616.3333333335,
            "unit": "ns",
            "range": "± 38577.80701326063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12022.942622950819,
            "unit": "ns",
            "range": "± 435.63625976228394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64617.5,
            "unit": "ns",
            "range": "± 6539.750678687525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54826.83,
            "unit": "ns",
            "range": "± 5733.5714239763665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60535.88775510204,
            "unit": "ns",
            "range": "± 12280.379102439889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2596.0670103092784,
            "unit": "ns",
            "range": "± 271.1174755839437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11909.173333333334,
            "unit": "ns",
            "range": "± 613.9021044709604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5606803.928571428,
            "unit": "ns",
            "range": "± 9781.393753639419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14862687.857142856,
            "unit": "ns",
            "range": "± 151270.8449664463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37705039.76923077,
            "unit": "ns",
            "range": "± 93159.64051486552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74182365.28571428,
            "unit": "ns",
            "range": "± 158866.87513155767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151722371.13333333,
            "unit": "ns",
            "range": "± 371235.82924871484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3700175.041015625,
            "unit": "ns",
            "range": "± 3400.9933018281554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223283.1496930805,
            "unit": "ns",
            "range": "± 2159.2179052589768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781359.5457682292,
            "unit": "ns",
            "range": "± 1445.2317853015356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945086.1241629464,
            "unit": "ns",
            "range": "± 1963.140693030901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632556.3771484375,
            "unit": "ns",
            "range": "± 530.8734028407604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573677.2477864583,
            "unit": "ns",
            "range": "± 478.36102797808087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1763369.8535353534,
            "unit": "ns",
            "range": "± 247116.15625335986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2864177.4430379746,
            "unit": "ns",
            "range": "± 134832.37747736496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2329184.83,
            "unit": "ns",
            "range": "± 297114.86584110686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8282231.107142857,
            "unit": "ns",
            "range": "± 194402.95719846088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2724018.5,
            "unit": "ns",
            "range": "± 89377.03895724396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2846156.5274725277,
            "unit": "ns",
            "range": "± 158239.31334984297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3797308.445945946,
            "unit": "ns",
            "range": "± 120540.21201033701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3536335.8775510206,
            "unit": "ns",
            "range": "± 383240.1816590843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9396458.73076923,
            "unit": "ns",
            "range": "± 149174.16266741918"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 199269.96666666667,
            "unit": "ns",
            "range": "± 3459.3024248635256"
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
          "id": "a5d2dbd6405f4fa534b05df34bdc56a422426415",
          "message": "Merge pull request #3741 from greymistcube/bump/block-protocol-version-to-6\n\n♻️ ⬆️ Bump block protocol version to 6",
          "timestamp": "2024-04-15T10:37:40+09:00",
          "tree_id": "fda4bd5af61c41b4577502f139ca173cf7b36593",
          "url": "https://github.com/planetarium/libplanet/commit/a5d2dbd6405f4fa534b05df34bdc56a422426415"
        },
        "date": 1713145540569,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199165.5625,
            "unit": "ns",
            "range": "± 5938.913846559967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189274.5294117647,
            "unit": "ns",
            "range": "± 5911.7982983455095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161392.38461538462,
            "unit": "ns",
            "range": "± 1817.090464564232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3101550.8,
            "unit": "ns",
            "range": "± 29354.261294936867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2889868.9285714286,
            "unit": "ns",
            "range": "± 38745.01200147582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12076.222222222223,
            "unit": "ns",
            "range": "± 690.1662522033365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58269.4126984127,
            "unit": "ns",
            "range": "± 2663.5352364789883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62069.92307692308,
            "unit": "ns",
            "range": "± 883.7422759246103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55688.74742268041,
            "unit": "ns",
            "range": "± 8330.976004535383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2598.673469387755,
            "unit": "ns",
            "range": "± 300.7972833664273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15540.198924731183,
            "unit": "ns",
            "range": "± 1049.4889520820645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5776908.833333333,
            "unit": "ns",
            "range": "± 37607.96881298025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14226648.933333334,
            "unit": "ns",
            "range": "± 91760.55990181859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37586663.78571428,
            "unit": "ns",
            "range": "± 105757.6249778263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75965162.4,
            "unit": "ns",
            "range": "± 346027.63448289584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151850438.1,
            "unit": "ns",
            "range": "± 515543.406130408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3714294.8251953125,
            "unit": "ns",
            "range": "± 3139.6701537652602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208567.69140625,
            "unit": "ns",
            "range": "± 1846.1811017502564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771070.5596354167,
            "unit": "ns",
            "range": "± 1821.3044870250396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940584.6628069195,
            "unit": "ns",
            "range": "± 2148.8917407586514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624114.1984514509,
            "unit": "ns",
            "range": "± 1066.4847754223827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569463.828515625,
            "unit": "ns",
            "range": "± 1012.5520065241262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1776270.7857142857,
            "unit": "ns",
            "range": "± 279981.82603294495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2857355.486842105,
            "unit": "ns",
            "range": "± 144579.38710005136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2408383.86,
            "unit": "ns",
            "range": "± 322207.54403510125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8466779.857142856,
            "unit": "ns",
            "range": "± 265117.2324549965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2722803.15625,
            "unit": "ns",
            "range": "± 84246.48200910399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2798104.3294117646,
            "unit": "ns",
            "range": "± 151260.54031572305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3884259.9591836734,
            "unit": "ns",
            "range": "± 124133.02361075518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3437295.9166666665,
            "unit": "ns",
            "range": "± 201920.61120683138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9258788.904761905,
            "unit": "ns",
            "range": "± 206838.95217098368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 195332.36666666667,
            "unit": "ns",
            "range": "± 3636.6756378921255"
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
          "id": "8c6eba765a1a401ec979b2068a9b6bc2ca6cb5ea",
          "message": "Merge pull request #3742 from greymistcube/chore/add-missing-protocol-version\n\n🔧 Add missing protocol versions",
          "timestamp": "2024-04-15T12:30:17+09:00",
          "tree_id": "2c7689bd15fba4748ed896f13ae10b49a60c27da",
          "url": "https://github.com/planetarium/libplanet/commit/8c6eba765a1a401ec979b2068a9b6bc2ca6cb5ea"
        },
        "date": 1713152433130,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211642.546875,
            "unit": "ns",
            "range": "± 9508.124245319606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211158.5,
            "unit": "ns",
            "range": "± 18740.2618660807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166801.2857142857,
            "unit": "ns",
            "range": "± 4778.912059339392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3218778.6,
            "unit": "ns",
            "range": "± 41472.77792342484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2934095.2,
            "unit": "ns",
            "range": "± 38902.06953951349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14615.393617021276,
            "unit": "ns",
            "range": "± 1722.8681463917346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68486.40625,
            "unit": "ns",
            "range": "± 6802.549311727688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76381.71,
            "unit": "ns",
            "range": "± 13414.815530715707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74266.53846153847,
            "unit": "ns",
            "range": "± 11249.329672185106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4112.397959183673,
            "unit": "ns",
            "range": "± 1199.4247288604556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19166.255102040817,
            "unit": "ns",
            "range": "± 5944.678341052773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5998673.571428572,
            "unit": "ns",
            "range": "± 75026.0823249686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15004182.6,
            "unit": "ns",
            "range": "± 114529.3997831374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37789100.46666667,
            "unit": "ns",
            "range": "± 174449.60569454133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77874828.13333334,
            "unit": "ns",
            "range": "± 362820.4306375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155334047.2,
            "unit": "ns",
            "range": "± 556029.5672102596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3751582.3738839286,
            "unit": "ns",
            "range": "± 8117.8295003351805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1191549.0536458334,
            "unit": "ns",
            "range": "± 1792.4522776723268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758827.1100510817,
            "unit": "ns",
            "range": "± 482.44991083023154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917574.96796875,
            "unit": "ns",
            "range": "± 1627.9264919431396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610702.5210286458,
            "unit": "ns",
            "range": "± 751.3015388803285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565304.6274739583,
            "unit": "ns",
            "range": "± 531.7146874651439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1856994.4242424243,
            "unit": "ns",
            "range": "± 297244.12249815086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3184464.2386363638,
            "unit": "ns",
            "range": "± 238694.17844795124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2538653.8434343436,
            "unit": "ns",
            "range": "± 326764.28281527164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8600602.96,
            "unit": "ns",
            "range": "± 208501.9492953403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2888043.8055555555,
            "unit": "ns",
            "range": "± 94809.62785100902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2920644.464285714,
            "unit": "ns",
            "range": "± 90645.24621160414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4063951.8,
            "unit": "ns",
            "range": "± 146580.62369197563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3733613.85,
            "unit": "ns",
            "range": "± 330163.14148481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9603783.36,
            "unit": "ns",
            "range": "± 168863.64408916837"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 200243.80898876404,
            "unit": "ns",
            "range": "± 13493.861851931388"
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
          "id": "ad6b7614bd7eb8becbdbf1d1073a6fb24992f762",
          "message": "Merge pull request #3743 from greymistcube/refactor/world-tests\n\n♻️ Refactor `IWorld` tests",
          "timestamp": "2024-04-15T15:49:49+09:00",
          "tree_id": "2508af505ebc141a466d106fc7738ea6715048aa",
          "url": "https://github.com/planetarium/libplanet/commit/ad6b7614bd7eb8becbdbf1d1073a6fb24992f762"
        },
        "date": 1713164320592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204131.9019607843,
            "unit": "ns",
            "range": "± 8219.245725137805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194241.21212121213,
            "unit": "ns",
            "range": "± 9148.171606754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170594.29166666666,
            "unit": "ns",
            "range": "± 4248.5358754687395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3176260.5,
            "unit": "ns",
            "range": "± 21585.402738531782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2878842.6764705884,
            "unit": "ns",
            "range": "± 58816.2438438941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11469.864197530864,
            "unit": "ns",
            "range": "± 598.5634626563507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59055.43103448276,
            "unit": "ns",
            "range": "± 3228.4705781930584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51687.61111111111,
            "unit": "ns",
            "range": "± 1068.4697765490105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78999.94,
            "unit": "ns",
            "range": "± 26270.523219737894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2632.1631578947367,
            "unit": "ns",
            "range": "± 339.50754732707975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11426.384615384615,
            "unit": "ns",
            "range": "± 754.8789125744423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5719914.785714285,
            "unit": "ns",
            "range": "± 25752.96970531471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14519450.666666666,
            "unit": "ns",
            "range": "± 118207.58238048056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37558089.8,
            "unit": "ns",
            "range": "± 209262.2591941236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 80125131.9,
            "unit": "ns",
            "range": "± 408089.93781252264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 157771719.46666667,
            "unit": "ns",
            "range": "± 777400.6508176432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3679623.5833333335,
            "unit": "ns",
            "range": "± 28015.853935971612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190052.3203125,
            "unit": "ns",
            "range": "± 7895.460301198924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776652.9673549107,
            "unit": "ns",
            "range": "± 958.0252044489714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922119.6295072115,
            "unit": "ns",
            "range": "± 1662.2642316040972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617892.1799665178,
            "unit": "ns",
            "range": "± 1412.8764689728475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578396.2138671875,
            "unit": "ns",
            "range": "± 559.2574656056601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779186.5757575757,
            "unit": "ns",
            "range": "± 268122.04563757783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2951796.9176470586,
            "unit": "ns",
            "range": "± 202586.06847368376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2371553.1666666665,
            "unit": "ns",
            "range": "± 332279.92192064784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8335993.586206896,
            "unit": "ns",
            "range": "± 229386.27789581072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2837272.7391304346,
            "unit": "ns",
            "range": "± 50873.79354675592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3047261.6578947366,
            "unit": "ns",
            "range": "± 47653.884907812266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3866574.1463414636,
            "unit": "ns",
            "range": "± 97642.14562845313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3607499.95,
            "unit": "ns",
            "range": "± 330491.39942633186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9325485.92857143,
            "unit": "ns",
            "range": "± 215508.42258333464"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 193056.3775510204,
            "unit": "ns",
            "range": "± 7618.062922621945"
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
          "id": "51705f6444c3d3a4a04ebd2145561cf41eb273c0",
          "message": "Merge pull request #3745 from greymistcube/feature/validator-set-account\n\n✨ Introduce `ValidatorSetAccount`",
          "timestamp": "2024-04-17T11:26:36+09:00",
          "tree_id": "778d877278bab8bb4835ca013d973df5af790da4",
          "url": "https://github.com/planetarium/libplanet/commit/51705f6444c3d3a4a04ebd2145561cf41eb273c0"
        },
        "date": 1713321306627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198917.4,
            "unit": "ns",
            "range": "± 7981.0339057093115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194440.61764705883,
            "unit": "ns",
            "range": "± 5863.011719682444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164440.90322580645,
            "unit": "ns",
            "range": "± 4892.760450262808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3106052.966666667,
            "unit": "ns",
            "range": "± 32717.851784760012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2746822.714285714,
            "unit": "ns",
            "range": "± 25328.611706704556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12043.19587628866,
            "unit": "ns",
            "range": "± 795.5714486976124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59981.26344086022,
            "unit": "ns",
            "range": "± 3669.5322809348354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50577.25,
            "unit": "ns",
            "range": "± 1689.8842796391202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56467.63265306123,
            "unit": "ns",
            "range": "± 9180.468108348687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2817.915789473684,
            "unit": "ns",
            "range": "± 461.400381428194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11305.967391304348,
            "unit": "ns",
            "range": "± 648.986622579869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5768988.833333333,
            "unit": "ns",
            "range": "± 40289.428627063426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15135745.214285715,
            "unit": "ns",
            "range": "± 72155.13102942593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37380415.4,
            "unit": "ns",
            "range": "± 257717.60006332514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76537961.13333334,
            "unit": "ns",
            "range": "± 528519.1970001613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150730766.4,
            "unit": "ns",
            "range": "± 563775.7885119377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3760984.8489583335,
            "unit": "ns",
            "range": "± 4818.251261094802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1188861.107700893,
            "unit": "ns",
            "range": "± 975.0522440965811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783694.3799479167,
            "unit": "ns",
            "range": "± 899.8081573484695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946782.2119140625,
            "unit": "ns",
            "range": "± 1458.676442494216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630434.7237079327,
            "unit": "ns",
            "range": "± 480.2815688973106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569412.474233774,
            "unit": "ns",
            "range": "± 525.1373915545527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1775058.0656565656,
            "unit": "ns",
            "range": "± 237232.82396556507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3212604.547368421,
            "unit": "ns",
            "range": "± 233787.87404655493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2374779.767676768,
            "unit": "ns",
            "range": "± 291125.2158636375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8725419.166666666,
            "unit": "ns",
            "range": "± 157364.35437256825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2810561.7083333335,
            "unit": "ns",
            "range": "± 66552.63523576115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2893752.4166666665,
            "unit": "ns",
            "range": "± 74201.0337176261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3891476.6860465114,
            "unit": "ns",
            "range": "± 126478.53061671993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3552559.282828283,
            "unit": "ns",
            "range": "± 297705.4178990188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9747207.38095238,
            "unit": "ns",
            "range": "± 222956.9493894452"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 198075.0625,
            "unit": "ns",
            "range": "± 5192.507250293911"
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
          "id": "2f233fa27e5dd57f49840b71a5b469de49ca01c9",
          "message": "Merge pull request #3746 from greymistcube/feature/world-gql-version-property\n\n✨ Added version field to world state query",
          "timestamp": "2024-04-17T11:45:17+09:00",
          "tree_id": "c88b9e958fe6203b44a686601a09d7fe019cfcf8",
          "url": "https://github.com/planetarium/libplanet/commit/2f233fa27e5dd57f49840b71a5b469de49ca01c9"
        },
        "date": 1713322517592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212562.16666666666,
            "unit": "ns",
            "range": "± 17454.002221730687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208147.63157894736,
            "unit": "ns",
            "range": "± 18177.999715609367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177235.7142857143,
            "unit": "ns",
            "range": "± 2988.7588928818295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3230920.3076923075,
            "unit": "ns",
            "range": "± 13450.438093141647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2842422.1923076925,
            "unit": "ns",
            "range": "± 17239.128716308023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13289.933333333332,
            "unit": "ns",
            "range": "± 1027.6347862604616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81417.27,
            "unit": "ns",
            "range": "± 17265.630168875505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90027.42307692308,
            "unit": "ns",
            "range": "± 2018.7081992814499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91976.20833333333,
            "unit": "ns",
            "range": "± 12288.939240691343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5458.731958762886,
            "unit": "ns",
            "range": "± 1181.3712946143696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13276.157894736842,
            "unit": "ns",
            "range": "± 932.1329157777723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5673292.266666667,
            "unit": "ns",
            "range": "± 39531.14105806182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14916470.533333333,
            "unit": "ns",
            "range": "± 110051.27544264255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38429842.166666664,
            "unit": "ns",
            "range": "± 188814.05129675925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78727492.3,
            "unit": "ns",
            "range": "± 274408.77001843177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155431033.46666667,
            "unit": "ns",
            "range": "± 906566.3284959091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3702667.8161272323,
            "unit": "ns",
            "range": "± 3501.0569838380316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212356.7504507212,
            "unit": "ns",
            "range": "± 2115.0645157223266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773480.1360426683,
            "unit": "ns",
            "range": "± 530.506301005546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926743.0179966518,
            "unit": "ns",
            "range": "± 1278.6303112315693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614061.3544921875,
            "unit": "ns",
            "range": "± 558.4731737223868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566524.1040414664,
            "unit": "ns",
            "range": "± 649.9373496685575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1837066.4848484849,
            "unit": "ns",
            "range": "± 250341.90359322767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2912148.960526316,
            "unit": "ns",
            "range": "± 146816.1921091304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2484631.31,
            "unit": "ns",
            "range": "± 341111.7383127431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8862403.333333334,
            "unit": "ns",
            "range": "± 210226.30921136713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2883482.0405405406,
            "unit": "ns",
            "range": "± 93532.32273616389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2964747.12345679,
            "unit": "ns",
            "range": "± 156049.65778690312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3937834.7045454546,
            "unit": "ns",
            "range": "± 118353.19111634593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3770140.3701298703,
            "unit": "ns",
            "range": "± 185532.78972783606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9947550.016129032,
            "unit": "ns",
            "range": "± 222287.62479497454"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 205712.66326530612,
            "unit": "ns",
            "range": "± 19201.54098892477"
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
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713346745159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206530.70588235295,
            "unit": "ns",
            "range": "± 6598.648573896214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201629.22093023255,
            "unit": "ns",
            "range": "± 10904.61545957508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167134.25,
            "unit": "ns",
            "range": "± 3821.385018619076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3334156.8,
            "unit": "ns",
            "range": "± 35354.628420375986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2969456.033333333,
            "unit": "ns",
            "range": "± 35772.2529720346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12726.632911392406,
            "unit": "ns",
            "range": "± 668.0854424324281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62723.234042553195,
            "unit": "ns",
            "range": "± 5350.890128293161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76738.86,
            "unit": "ns",
            "range": "± 20105.758338196036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69037.63917525773,
            "unit": "ns",
            "range": "± 11043.803651242597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3333.5494505494507,
            "unit": "ns",
            "range": "± 529.9054897649468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12815.846153846154,
            "unit": "ns",
            "range": "± 1048.8195790514733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5849667.857142857,
            "unit": "ns",
            "range": "± 29183.66736288044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14908178.57142857,
            "unit": "ns",
            "range": "± 84288.6935566954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37596442,
            "unit": "ns",
            "range": "± 188151.70970029174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76454688.78571428,
            "unit": "ns",
            "range": "± 241221.4229748831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155641765.42857143,
            "unit": "ns",
            "range": "± 749098.4824210071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3678882.0907451925,
            "unit": "ns",
            "range": "± 7293.614374713261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207484.25625,
            "unit": "ns",
            "range": "± 1003.9421675966097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766985.6640625,
            "unit": "ns",
            "range": "± 872.2262873691403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1901423.14453125,
            "unit": "ns",
            "range": "± 1929.5369798313302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627267.5878208706,
            "unit": "ns",
            "range": "± 804.8471755795262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571372.1055338542,
            "unit": "ns",
            "range": "± 1192.7293234214098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1831819.6565656567,
            "unit": "ns",
            "range": "± 278002.1844347506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2954260.0573770492,
            "unit": "ns",
            "range": "± 126296.19639621305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2494000.2525252528,
            "unit": "ns",
            "range": "± 284256.6640561546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9112087.807692308,
            "unit": "ns",
            "range": "± 245669.92251946827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2844548.3333333335,
            "unit": "ns",
            "range": "± 94672.67575946686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2973488.765957447,
            "unit": "ns",
            "range": "± 98162.10254675965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3904904.2926829266,
            "unit": "ns",
            "range": "± 125652.26126282883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3651106.785714286,
            "unit": "ns",
            "range": "± 297959.5167808079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9962394.75,
            "unit": "ns",
            "range": "± 176693.21078807753"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 205797.53,
            "unit": "ns",
            "range": "± 19705.262921800175"
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
          "id": "1fa87bec789e297ac0d12b9241a31e172eed014f",
          "message": "Merge pull request #3750 from greymistcube/prepare/4.5.0\n\n🔧 Prepare 4.5.0",
          "timestamp": "2024-04-18T12:46:03+09:00",
          "tree_id": "d051d198797ab21591fcdea2e718cde61ab745b7",
          "url": "https://github.com/planetarium/libplanet/commit/1fa87bec789e297ac0d12b9241a31e172eed014f"
        },
        "date": 1713412531357,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199981.48571428572,
            "unit": "ns",
            "range": "± 9473.282086995667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199206.20212765958,
            "unit": "ns",
            "range": "± 7606.558119878027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163477.58333333334,
            "unit": "ns",
            "range": "± 2248.0830402946876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3153995.033333333,
            "unit": "ns",
            "range": "± 29483.753363666638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2832127.6,
            "unit": "ns",
            "range": "± 35394.47646536311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11905.104395604396,
            "unit": "ns",
            "range": "± 803.2263812500305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61488.27659574468,
            "unit": "ns",
            "range": "± 5003.571741802084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52129.84693877551,
            "unit": "ns",
            "range": "± 1670.933129409787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58649.47959183674,
            "unit": "ns",
            "range": "± 11178.712666077128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2663.3555555555554,
            "unit": "ns",
            "range": "± 382.6255044481252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11337.595505617977,
            "unit": "ns",
            "range": "± 933.9759915045161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5714951.5,
            "unit": "ns",
            "range": "± 25085.21810036455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15119475.666666666,
            "unit": "ns",
            "range": "± 116665.22103539723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38224820.93333333,
            "unit": "ns",
            "range": "± 235382.50961830092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75268249.26666667,
            "unit": "ns",
            "range": "± 421335.2621500681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154628971.66666666,
            "unit": "ns",
            "range": "± 654006.8195569292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3711749.590401786,
            "unit": "ns",
            "range": "± 2874.2513722225417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222049.226171875,
            "unit": "ns",
            "range": "± 1493.0743843170326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752615.4958683894,
            "unit": "ns",
            "range": "± 517.9420794430592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928158.8253348214,
            "unit": "ns",
            "range": "± 2716.369209668379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627750.9628208706,
            "unit": "ns",
            "range": "± 614.8371894885032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585086.7264927456,
            "unit": "ns",
            "range": "± 626.6311444041813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1845111.9393939395,
            "unit": "ns",
            "range": "± 262524.4806606796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2941342.688888889,
            "unit": "ns",
            "range": "± 187192.41845834503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2441663.606060606,
            "unit": "ns",
            "range": "± 304994.14591029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8812714.631578946,
            "unit": "ns",
            "range": "± 184435.37402967966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2717925.9340659343,
            "unit": "ns",
            "range": "± 227937.8782905944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2981478.172413793,
            "unit": "ns",
            "range": "± 74711.0921703775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3910113.685714286,
            "unit": "ns",
            "range": "± 125637.34090130712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3533945.9677419355,
            "unit": "ns",
            "range": "± 216018.20193026264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9638444.666666666,
            "unit": "ns",
            "range": "± 145518.0348856103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 198830.40322580645,
            "unit": "ns",
            "range": "± 6011.787683958013"
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
          "id": "690a98c0664abf024c89dc52a04b14e9f6943eaa",
          "message": "Merge pull request #3769 from greymistcube/bump/block-protocol-version-to-7\n\n♻️ Bumped block protocol version to 7",
          "timestamp": "2024-04-29T17:39:22+09:00",
          "tree_id": "727d6be8788aca036bb53f5b487cee8199711832",
          "url": "https://github.com/planetarium/libplanet/commit/690a98c0664abf024c89dc52a04b14e9f6943eaa"
        },
        "date": 1714380473355,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2813184.8095238097,
            "unit": "ns",
            "range": "± 57416.32957584371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2778014.1896551726,
            "unit": "ns",
            "range": "± 73162.54348551872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3912025.480769231,
            "unit": "ns",
            "range": "± 144423.1929264758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3483292.376344086,
            "unit": "ns",
            "range": "± 223577.95154384436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9544379.92857143,
            "unit": "ns",
            "range": "± 161790.4066626678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203166.47619047618,
            "unit": "ns",
            "range": "± 6950.178135945186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190985.0806451613,
            "unit": "ns",
            "range": "± 7556.697904700037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170672.64705882352,
            "unit": "ns",
            "range": "± 3335.2254972710703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3119078.8333333335,
            "unit": "ns",
            "range": "± 47053.12192871048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2826421.6,
            "unit": "ns",
            "range": "± 30987.421687332608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12078.268421052631,
            "unit": "ns",
            "range": "± 752.6874044245694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58875.615942028984,
            "unit": "ns",
            "range": "± 2847.884170935616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51432.03333333333,
            "unit": "ns",
            "range": "± 2292.119132487255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56866.09574468085,
            "unit": "ns",
            "range": "± 10353.633637852143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2638.0344827586205,
            "unit": "ns",
            "range": "± 353.99173713506895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13888.897959183674,
            "unit": "ns",
            "range": "± 2092.2804088046987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5778835.071428572,
            "unit": "ns",
            "range": "± 22805.52476067784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14793775.423076924,
            "unit": "ns",
            "range": "± 126577.34253705753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38556470.333333336,
            "unit": "ns",
            "range": "± 254589.69977443726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76088954.07692307,
            "unit": "ns",
            "range": "± 147360.60868973858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149821141.80769232,
            "unit": "ns",
            "range": "± 227544.18512323586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1826453.03,
            "unit": "ns",
            "range": "± 239005.5878054135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2866715.175,
            "unit": "ns",
            "range": "± 149171.00449142806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350508.707070707,
            "unit": "ns",
            "range": "± 290846.27848012745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8531367.416666666,
            "unit": "ns",
            "range": "± 87190.83396201933"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 198514.76666666666,
            "unit": "ns",
            "range": "± 3391.361514762106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3714381.9044471155,
            "unit": "ns",
            "range": "± 4340.311792355588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207337.400390625,
            "unit": "ns",
            "range": "± 1438.813542294738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776062.7637369792,
            "unit": "ns",
            "range": "± 1007.8994036651465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944550.0065104167,
            "unit": "ns",
            "range": "± 1509.7378973560571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638413.1975260417,
            "unit": "ns",
            "range": "± 1122.7633688644607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575806.814313616,
            "unit": "ns",
            "range": "± 976.3817381533562"
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
          "id": "18d0d04302179b3878a62bcdb7ecc88ea730d423",
          "message": "Merge pull request #3761 from greymistcube/port/4.4.1-to-main\n\n🔀 Port 4.4.1 to main",
          "timestamp": "2024-04-30T12:57:11+09:00",
          "tree_id": "0ec950bdc14dbdfc86d3ef2f4ef41ea64ccdb1d2",
          "url": "https://github.com/planetarium/libplanet/commit/18d0d04302179b3878a62bcdb7ecc88ea730d423"
        },
        "date": 1714450246640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2327999.12,
            "unit": "ns",
            "range": "± 53088.91145860876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2477430.3333333335,
            "unit": "ns",
            "range": "± 32116.454426856973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3057652.476190476,
            "unit": "ns",
            "range": "± 68178.9648847935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3130519.973333333,
            "unit": "ns",
            "range": "± 157585.87231625477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8932936.11764706,
            "unit": "ns",
            "range": "± 208353.34493624553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201000.6857142857,
            "unit": "ns",
            "range": "± 6457.857183177662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195386.91176470587,
            "unit": "ns",
            "range": "± 9188.108303728986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168044.2,
            "unit": "ns",
            "range": "± 3527.476100855293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3097316.1666666665,
            "unit": "ns",
            "range": "± 36982.23788458969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2861250,
            "unit": "ns",
            "range": "± 27058.794365233643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12612.613924050633,
            "unit": "ns",
            "range": "± 667.5306194329652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61393.6375,
            "unit": "ns",
            "range": "± 3130.5831856253644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53222.8125,
            "unit": "ns",
            "range": "± 1521.4758208355126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57458.051020408166,
            "unit": "ns",
            "range": "± 8867.729883461148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2967.4895833333335,
            "unit": "ns",
            "range": "± 297.0426513692202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12333.694805194806,
            "unit": "ns",
            "range": "± 638.8288222858963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5737151.142857143,
            "unit": "ns",
            "range": "± 14368.474726915936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14507625.966666667,
            "unit": "ns",
            "range": "± 77399.9619396978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37867943.53333333,
            "unit": "ns",
            "range": "± 122246.26447279436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76240961.96153846,
            "unit": "ns",
            "range": "± 357690.2241774334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155981795.33333334,
            "unit": "ns",
            "range": "± 411918.689279236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010499.691919192,
            "unit": "ns",
            "range": "± 100999.55628935438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1866205.076923077,
            "unit": "ns",
            "range": "± 49950.17566989976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1620514.68,
            "unit": "ns",
            "range": "± 115438.51740193639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7530273.769230769,
            "unit": "ns",
            "range": "± 88214.77842095947"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36986,
            "unit": "ns",
            "range": "± 1699.1937841603094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750560.1515066964,
            "unit": "ns",
            "range": "± 9658.151338981048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208971.5887920673,
            "unit": "ns",
            "range": "± 1624.7858621006253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761900.2809244791,
            "unit": "ns",
            "range": "± 1204.1595577466176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937962.5032552083,
            "unit": "ns",
            "range": "± 4291.466827976866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611118.5854116586,
            "unit": "ns",
            "range": "± 756.2883026447208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566948.4216657366,
            "unit": "ns",
            "range": "± 1068.2310439009937"
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
          "id": "5fc36e9405e81b64f94c3928e70e3bf779698589",
          "message": "Merge pull request #3773 from greymistcube/port/4.4.2-to-main\n\n🔀 Port 4.4.2 to main",
          "timestamp": "2024-04-30T13:16:22+09:00",
          "tree_id": "97e3d273ab980dad005b511a0d3ee51b81025638",
          "url": "https://github.com/planetarium/libplanet/commit/5fc36e9405e81b64f94c3928e70e3bf779698589"
        },
        "date": 1714451135163,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2357987.8974358975,
            "unit": "ns",
            "range": "± 82476.48119625085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2510673.214285714,
            "unit": "ns",
            "range": "± 55627.61274685698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3084723.0454545454,
            "unit": "ns",
            "range": "± 73440.09528843236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3141527.242857143,
            "unit": "ns",
            "range": "± 152510.96364765803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8817864.596774194,
            "unit": "ns",
            "range": "± 186184.89722161586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201611.89534883722,
            "unit": "ns",
            "range": "± 5973.864287917331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201283.08823529413,
            "unit": "ns",
            "range": "± 8103.102403836375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168970.42857142858,
            "unit": "ns",
            "range": "± 2710.4280875135605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3034048.4,
            "unit": "ns",
            "range": "± 13674.046254544723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2837610,
            "unit": "ns",
            "range": "± 36686.638871860225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12283.788235294118,
            "unit": "ns",
            "range": "± 675.4324733460927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60125.666666666664,
            "unit": "ns",
            "range": "± 2856.341140639842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53046.06896551724,
            "unit": "ns",
            "range": "± 1393.2892205916003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57828.56842105263,
            "unit": "ns",
            "range": "± 9037.380238048927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2934.75,
            "unit": "ns",
            "range": "± 232.1011122674544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12138.028985507246,
            "unit": "ns",
            "range": "± 593.2682403684172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5720037,
            "unit": "ns",
            "range": "± 10531.124271561746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14580630.833333334,
            "unit": "ns",
            "range": "± 110088.74694579477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37855553.85714286,
            "unit": "ns",
            "range": "± 150554.73480322806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75160213.6,
            "unit": "ns",
            "range": "± 298655.8785369639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151078799.93333334,
            "unit": "ns",
            "range": "± 531602.9145247508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1179571.0833333333,
            "unit": "ns",
            "range": "± 17257.166750806795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1815342.892857143,
            "unit": "ns",
            "range": "± 50201.406648684795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574554.0652173914,
            "unit": "ns",
            "range": "± 107738.53316866886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7908109.245283019,
            "unit": "ns",
            "range": "± 329855.98278717994"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37199.333333333336,
            "unit": "ns",
            "range": "± 2431.194799895467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3696915.5904447115,
            "unit": "ns",
            "range": "± 7441.62016777121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215642.5483072917,
            "unit": "ns",
            "range": "± 1723.9722001877878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772570.1947115385,
            "unit": "ns",
            "range": "± 1714.78909412262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951473.9692708333,
            "unit": "ns",
            "range": "± 2480.2476245243556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614796.992327009,
            "unit": "ns",
            "range": "± 1352.040730777119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576960.0532924107,
            "unit": "ns",
            "range": "± 446.86935846285274"
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
          "id": "dec2f8ef5a78fdc7224274978f7b15a933fd3377",
          "message": "Merge pull request #3775 from greymistcube/update/blockmetadata\n\n♻️ Updated `BlockMetadata`",
          "timestamp": "2024-04-30T21:02:20+09:00",
          "tree_id": "3be6c2a083f4b7dbf0546649cfb9bc78968ed19a",
          "url": "https://github.com/planetarium/libplanet/commit/dec2f8ef5a78fdc7224274978f7b15a933fd3377"
        },
        "date": 1714479112610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2575406.8571428573,
            "unit": "ns",
            "range": "± 36836.42686225175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2654419.827586207,
            "unit": "ns",
            "range": "± 77110.46942076439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3242727.066666667,
            "unit": "ns",
            "range": "± 32268.64614776275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3378574.565217391,
            "unit": "ns",
            "range": "± 162472.15478609738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9190040.57142857,
            "unit": "ns",
            "range": "± 223830.7166718781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243557.6914893617,
            "unit": "ns",
            "range": "± 9503.377442276023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238110.74528301886,
            "unit": "ns",
            "range": "± 9885.777001300832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177416.61538461538,
            "unit": "ns",
            "range": "± 4806.001340631717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3177273,
            "unit": "ns",
            "range": "± 19043.913336461777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2868272.566666667,
            "unit": "ns",
            "range": "± 32651.1840224312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21592.016853932586,
            "unit": "ns",
            "range": "± 1246.2739932254021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80132.61616161616,
            "unit": "ns",
            "range": "± 9413.021491862575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91889.81818181818,
            "unit": "ns",
            "range": "± 1702.2557970825944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85916.36,
            "unit": "ns",
            "range": "± 3655.711265285476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6418.68556701031,
            "unit": "ns",
            "range": "± 541.8336216400002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20868.112359550563,
            "unit": "ns",
            "range": "± 1162.052753048773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6421028.133333334,
            "unit": "ns",
            "range": "± 33489.90027470257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15653787.07142857,
            "unit": "ns",
            "range": "± 74051.39624348679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37711331,
            "unit": "ns",
            "range": "± 38538.47735469296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79926349.96666667,
            "unit": "ns",
            "range": "± 270690.38545194734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154868141.33333334,
            "unit": "ns",
            "range": "± 305085.7582588557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1089998.469072165,
            "unit": "ns",
            "range": "± 102547.6044043543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2037383.9594594594,
            "unit": "ns",
            "range": "± 60550.62135592489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1836847.27,
            "unit": "ns",
            "range": "± 174477.75879011434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8174934.354838709,
            "unit": "ns",
            "range": "± 227603.7788609185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38154.096774193546,
            "unit": "ns",
            "range": "± 2592.897992864842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3712178.174579327,
            "unit": "ns",
            "range": "± 5598.308542220216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202820.3956473214,
            "unit": "ns",
            "range": "± 1762.8940839516717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770436.7091936384,
            "unit": "ns",
            "range": "± 1284.3910341857697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944311.01875,
            "unit": "ns",
            "range": "± 2273.6908781030475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614771.6206054688,
            "unit": "ns",
            "range": "± 502.5263525344953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578924.3982872596,
            "unit": "ns",
            "range": "± 685.8085109230982"
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
          "id": "0e5d1cf8b2213420f1911978199af05f7e931ebe",
          "message": "Merge pull request #3774 from greymistcube/feature/trie-sub-traversal\n\n✨ Added methods to traverse subtries of a `MerkleTrie`",
          "timestamp": "2024-05-02T14:19:58+09:00",
          "tree_id": "59de99951eb361cc190f2c2056f3042b68569ca5",
          "url": "https://github.com/planetarium/libplanet/commit/0e5d1cf8b2213420f1911978199af05f7e931ebe"
        },
        "date": 1714627775594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2399130.210526316,
            "unit": "ns",
            "range": "± 53201.074263985545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2510344.3235294116,
            "unit": "ns",
            "range": "± 74532.21990266646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3138999.785714286,
            "unit": "ns",
            "range": "± 42503.75578595482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3176421.6428571427,
            "unit": "ns",
            "range": "± 126568.2917782015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8794293.5,
            "unit": "ns",
            "range": "± 89355.68357921667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205203.68421052632,
            "unit": "ns",
            "range": "± 4530.703073385111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192484.08474576272,
            "unit": "ns",
            "range": "± 7662.927389865411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167221.27272727274,
            "unit": "ns",
            "range": "± 4042.1580066406796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3143857.7666666666,
            "unit": "ns",
            "range": "± 23057.915320423253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2736834.4285714286,
            "unit": "ns",
            "range": "± 27326.895423639064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12320.755555555555,
            "unit": "ns",
            "range": "± 906.4293611564785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60758.78865979381,
            "unit": "ns",
            "range": "± 4604.995586676231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52492.98888888889,
            "unit": "ns",
            "range": "± 1901.5453000869657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59153.969072164946,
            "unit": "ns",
            "range": "± 9689.427341022285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2768.926315789474,
            "unit": "ns",
            "range": "± 394.8086862876716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11684.760869565218,
            "unit": "ns",
            "range": "± 691.8086245179929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5846967.071428572,
            "unit": "ns",
            "range": "± 13718.042570135287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14553862.066666666,
            "unit": "ns",
            "range": "± 66521.5324671715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37561859.53333333,
            "unit": "ns",
            "range": "± 241472.5210189902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76327340,
            "unit": "ns",
            "range": "± 250147.29094018645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150019777.34615386,
            "unit": "ns",
            "range": "± 485697.8460028495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018695.57,
            "unit": "ns",
            "range": "± 114811.81419739906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1829766.7407407407,
            "unit": "ns",
            "range": "± 49906.984701228546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1593409.7688172043,
            "unit": "ns",
            "range": "± 122399.86322466246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8048118.346938776,
            "unit": "ns",
            "range": "± 316565.3300722164"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42370.50515463918,
            "unit": "ns",
            "range": "± 7026.4725460274385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3783662.490685096,
            "unit": "ns",
            "range": "± 4408.301188095147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226236.9749098558,
            "unit": "ns",
            "range": "± 1030.4074832161539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772480.5411458333,
            "unit": "ns",
            "range": "± 1533.4881592112158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930588.5927083334,
            "unit": "ns",
            "range": "± 2164.4761261119993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635405.1085286458,
            "unit": "ns",
            "range": "± 591.4920282857279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570362.09375,
            "unit": "ns",
            "range": "± 351.69635411884536"
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
          "id": "5bcd7973f6ab61bf6a5d6dc7278130169e01e811",
          "message": "Merge pull request #3776 from greymistcube/refactor/world-migration\n\n♻️ Refactor world migration",
          "timestamp": "2024-05-03T10:01:49+09:00",
          "tree_id": "4cde64ce28ad2cc71c409cde339c3e98fcc30fd8",
          "url": "https://github.com/planetarium/libplanet/commit/5bcd7973f6ab61bf6a5d6dc7278130169e01e811"
        },
        "date": 1714698658802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2307096.8571428573,
            "unit": "ns",
            "range": "± 29310.570502956623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2476038.227272727,
            "unit": "ns",
            "range": "± 51608.34757776878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3065744.470588235,
            "unit": "ns",
            "range": "± 60944.585726623045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3106977.5535714286,
            "unit": "ns",
            "range": "± 125554.62350733965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8884136.535714285,
            "unit": "ns",
            "range": "± 221837.67119516688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206655.5806451613,
            "unit": "ns",
            "range": "± 5548.955948489731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197238.4836065574,
            "unit": "ns",
            "range": "± 7437.948459290377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172596.3076923077,
            "unit": "ns",
            "range": "± 1353.4612655838723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3075046.214285714,
            "unit": "ns",
            "range": "± 40609.938522444274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2730627.8666666667,
            "unit": "ns",
            "range": "± 33258.744536193924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12631.945945945947,
            "unit": "ns",
            "range": "± 640.0188169727746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62035.260416666664,
            "unit": "ns",
            "range": "± 4374.518384907115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53701.692307692305,
            "unit": "ns",
            "range": "± 829.2746212419004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83758.44047619047,
            "unit": "ns",
            "range": "± 7866.870294172257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2898.9583333333335,
            "unit": "ns",
            "range": "± 339.56008434030196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16471.310344827587,
            "unit": "ns",
            "range": "± 686.0314415815615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5697013.2,
            "unit": "ns",
            "range": "± 18171.254144153852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14756338.692307692,
            "unit": "ns",
            "range": "± 55943.78091647694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37000456.25,
            "unit": "ns",
            "range": "± 39512.10703551968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76153459.5,
            "unit": "ns",
            "range": "± 366183.4250252083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154060650.1,
            "unit": "ns",
            "range": "± 638741.8836429045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959605.7446808511,
            "unit": "ns",
            "range": "± 68337.53178284003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1831453.8666666667,
            "unit": "ns",
            "range": "± 54721.459678639054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1591673.440860215,
            "unit": "ns",
            "range": "± 119988.32202257292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7869254.978260869,
            "unit": "ns",
            "range": "± 300327.12393695634"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36383.5,
            "unit": "ns",
            "range": "± 1942.8824656373063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746574.35546875,
            "unit": "ns",
            "range": "± 4513.376506043929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213053.073046875,
            "unit": "ns",
            "range": "± 1186.5231615326602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766126.4665876116,
            "unit": "ns",
            "range": "± 1241.8233624852774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964538.59921875,
            "unit": "ns",
            "range": "± 1478.4421628587493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610522.9385416667,
            "unit": "ns",
            "range": "± 1053.3746778870834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568200.1928385417,
            "unit": "ns",
            "range": "± 636.143265669593"
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
          "id": "1b7e5fdaa3eab1684afe9b2781de9cc8ff9704d6",
          "message": "Merge pull request #3777 from greymistcube/chore/trie-remove-test\n\n✅ Added tests for `ITrie`",
          "timestamp": "2024-05-03T15:29:40+09:00",
          "tree_id": "9fd4dd7ceaed61592c79916f65e2bb908955bb1c",
          "url": "https://github.com/planetarium/libplanet/commit/1b7e5fdaa3eab1684afe9b2781de9cc8ff9704d6"
        },
        "date": 1714718362263,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2521705.7916666665,
            "unit": "ns",
            "range": "± 64542.50446190929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2636318.5454545454,
            "unit": "ns",
            "range": "± 82230.449918237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3215222.6086956523,
            "unit": "ns",
            "range": "± 80973.78146476523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3421293.195652174,
            "unit": "ns",
            "range": "± 130408.07269709946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9131387.029411765,
            "unit": "ns",
            "range": "± 207315.709911271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239212.10204081633,
            "unit": "ns",
            "range": "± 8400.302713406865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233258.1568627451,
            "unit": "ns",
            "range": "± 9510.015487626819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174602.34615384616,
            "unit": "ns",
            "range": "± 4714.9966675899805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3261500.7333333334,
            "unit": "ns",
            "range": "± 45419.045379769086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2851632.3846153845,
            "unit": "ns",
            "range": "± 33645.1004024322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14258.456989247312,
            "unit": "ns",
            "range": "± 1675.9431343080576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74962.53,
            "unit": "ns",
            "range": "± 12507.02478121311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90316.35714285714,
            "unit": "ns",
            "range": "± 1440.5917377748128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91436.14285714286,
            "unit": "ns",
            "range": "± 14540.55861814927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6449.335051546392,
            "unit": "ns",
            "range": "± 512.7392466045397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14278.0206185567,
            "unit": "ns",
            "range": "± 2263.336521135065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5892745.5,
            "unit": "ns",
            "range": "± 81648.01669623441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15128607.933333334,
            "unit": "ns",
            "range": "± 92152.14141412843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37849335.56666667,
            "unit": "ns",
            "range": "± 152003.1054614471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78940038.7,
            "unit": "ns",
            "range": "± 220777.90678358843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156250040.9,
            "unit": "ns",
            "range": "± 595413.7004495037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010174.11,
            "unit": "ns",
            "range": "± 103222.10524196713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1927528.1923076923,
            "unit": "ns",
            "range": "± 77328.45494003662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1672212.891304348,
            "unit": "ns",
            "range": "± 103650.24656920112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7833651.69047619,
            "unit": "ns",
            "range": "± 184673.44907014084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38242.204545454544,
            "unit": "ns",
            "range": "± 2541.185044215517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3764641.8264508927,
            "unit": "ns",
            "range": "± 5811.938717898787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209271.974888393,
            "unit": "ns",
            "range": "± 2170.0161358566866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779289.2223958333,
            "unit": "ns",
            "range": "± 1889.318267169642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960643.386997768,
            "unit": "ns",
            "range": "± 1634.496156815381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623578.3747209822,
            "unit": "ns",
            "range": "± 568.6458137401345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582045.9741586539,
            "unit": "ns",
            "range": "± 967.1270748498952"
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
          "id": "7ad0c0a782885c06638f4d169381e983fd14b958",
          "message": "Merge pull request #3778 from greymistcube/refactor/mocks\n\n♻️ Updated `MockWorldState`",
          "timestamp": "2024-05-07T12:08:14+09:00",
          "tree_id": "116a17b61dfe84a8bbc9ebd01c9be48e276b30a2",
          "url": "https://github.com/planetarium/libplanet/commit/7ad0c0a782885c06638f4d169381e983fd14b958"
        },
        "date": 1715051869399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2403700.6,
            "unit": "ns",
            "range": "± 63346.485064945264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2564506.2647058824,
            "unit": "ns",
            "range": "± 52452.20109958376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3172388.0714285714,
            "unit": "ns",
            "range": "± 51372.83975875891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3248726.380952381,
            "unit": "ns",
            "range": "± 117561.02696398557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9054498.227272727,
            "unit": "ns",
            "range": "± 159102.77570419447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201166.9,
            "unit": "ns",
            "range": "± 10354.611228589805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196594.15384615384,
            "unit": "ns",
            "range": "± 6869.73210823147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166419.3,
            "unit": "ns",
            "range": "± 3036.0676916978364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3117210.6428571427,
            "unit": "ns",
            "range": "± 26457.239633349574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2834650.3571428573,
            "unit": "ns",
            "range": "± 22662.263450696868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13060.5,
            "unit": "ns",
            "range": "± 1122.2356023815798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62902.26804123711,
            "unit": "ns",
            "range": "± 5355.515641053825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53279.771929824565,
            "unit": "ns",
            "range": "± 2061.585321140227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61012.177083333336,
            "unit": "ns",
            "range": "± 9380.900729948777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3216.1979166666665,
            "unit": "ns",
            "range": "± 605.4621048560073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12724.615384615385,
            "unit": "ns",
            "range": "± 896.9170129979298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5697063.6,
            "unit": "ns",
            "range": "± 38135.74754703818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14821125.3,
            "unit": "ns",
            "range": "± 126415.95069915596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38417168.46666667,
            "unit": "ns",
            "range": "± 118976.46170078388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76909159.06666666,
            "unit": "ns",
            "range": "± 277659.1340504362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151458099.06666666,
            "unit": "ns",
            "range": "± 796743.1740340051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962276.2840909091,
            "unit": "ns",
            "range": "± 64362.28355766632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1920719.1666666667,
            "unit": "ns",
            "range": "± 79518.40919115808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590647.3854166667,
            "unit": "ns",
            "range": "± 105191.66388798865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7684085.055555556,
            "unit": "ns",
            "range": "± 160051.36233923092"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36503.606741573036,
            "unit": "ns",
            "range": "± 2030.1028053792204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3699076.4983258927,
            "unit": "ns",
            "range": "± 5647.740956125365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211850.9532552084,
            "unit": "ns",
            "range": "± 2288.937942554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769136.3662109375,
            "unit": "ns",
            "range": "± 1905.574642701087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962361.0147235577,
            "unit": "ns",
            "range": "± 1797.135407204926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620818.0834263393,
            "unit": "ns",
            "range": "± 692.2231398028946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582273.5633370535,
            "unit": "ns",
            "range": "± 520.8436342680757"
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
          "id": "e3f0ce5513a2e8e8d88afa49b9b93af2337d0272",
          "message": "Merge pull request #3779 from greymistcube/feature/currency-account\n\n✨ Add `CurrencyAccount` to handle all `Currency` related logic",
          "timestamp": "2024-05-09T16:55:24+09:00",
          "tree_id": "eab19cdfc8dd9063e6307bdc4d787cf97ef6b4e6",
          "url": "https://github.com/planetarium/libplanet/commit/e3f0ce5513a2e8e8d88afa49b9b93af2337d0272"
        },
        "date": 1715241921396,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2459672.45,
            "unit": "ns",
            "range": "± 82666.55534689051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2525680.975,
            "unit": "ns",
            "range": "± 87410.01655401809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3224248,
            "unit": "ns",
            "range": "± 42200.56133512918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3250026.7978723403,
            "unit": "ns",
            "range": "± 120479.8028097791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8987033.964285715,
            "unit": "ns",
            "range": "± 185183.30462634045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221866.17676767678,
            "unit": "ns",
            "range": "± 24226.000023936285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198042.2931034483,
            "unit": "ns",
            "range": "± 8344.477024195108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168407.5,
            "unit": "ns",
            "range": "± 2547.1017254911512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3369708.466666667,
            "unit": "ns",
            "range": "± 40906.281199253266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3016485.3571428573,
            "unit": "ns",
            "range": "± 24274.283953971164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14393.881720430107,
            "unit": "ns",
            "range": "± 1862.8046225905798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64064.822222222225,
            "unit": "ns",
            "range": "± 5598.121931922274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76001.13,
            "unit": "ns",
            "range": "± 15761.730284095904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82777.63265306123,
            "unit": "ns",
            "range": "± 18061.91816678575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6642.163043478261,
            "unit": "ns",
            "range": "± 517.2084893699539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20942.454545454544,
            "unit": "ns",
            "range": "± 4764.101815411451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5828670.615384615,
            "unit": "ns",
            "range": "± 33284.85066197148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14891531.857142856,
            "unit": "ns",
            "range": "± 57188.162431112025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38476843.71428572,
            "unit": "ns",
            "range": "± 122533.9248010234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78656460,
            "unit": "ns",
            "range": "± 312474.3236699617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156053678.30769232,
            "unit": "ns",
            "range": "± 552399.6989789768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976542.4444444445,
            "unit": "ns",
            "range": "± 83377.23500450754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1870527.1041666667,
            "unit": "ns",
            "range": "± 72649.16217195345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1641318.4444444445,
            "unit": "ns",
            "range": "± 134902.68279704917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7759926.95,
            "unit": "ns",
            "range": "± 170884.58732276314"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37718.43023255814,
            "unit": "ns",
            "range": "± 2168.2634948987484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3752346.7882254464,
            "unit": "ns",
            "range": "± 7620.93889852013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1228371.0510066105,
            "unit": "ns",
            "range": "± 1065.2226278360092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771171.7220703125,
            "unit": "ns",
            "range": "± 2918.860754832885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945178.9338541667,
            "unit": "ns",
            "range": "± 2257.059245294689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632568.2581380209,
            "unit": "ns",
            "range": "± 829.6051298443477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587643.5432291667,
            "unit": "ns",
            "range": "± 645.8817638007793"
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
          "id": "f3d6674a59cb00a961e67b68c8090d43de6dbc92",
          "message": "Merge pull request #3780 from greymistcube/refactor/currency-total-supply-trackable\n\n💥 Change `GetTotalSupply()`'s behavior",
          "timestamp": "2024-05-09T17:58:30+09:00",
          "tree_id": "4e72f339c0f3bbbf0d4c09579b070b72c837f9f9",
          "url": "https://github.com/planetarium/libplanet/commit/f3d6674a59cb00a961e67b68c8090d43de6dbc92"
        },
        "date": 1715245715973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2358985.617647059,
            "unit": "ns",
            "range": "± 73913.41508984222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2444234.423076923,
            "unit": "ns",
            "range": "± 55377.18842333769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3086489.423076923,
            "unit": "ns",
            "range": "± 28970.105190412924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3035895.418181818,
            "unit": "ns",
            "range": "± 118225.73005024955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8904180.322580645,
            "unit": "ns",
            "range": "± 201852.4614790693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197791.69672131148,
            "unit": "ns",
            "range": "± 7509.011616761272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192222.29787234042,
            "unit": "ns",
            "range": "± 6766.002415899058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168007.2142857143,
            "unit": "ns",
            "range": "± 1982.8440793106104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3056786.5714285714,
            "unit": "ns",
            "range": "± 34518.70172811407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805269.8076923075,
            "unit": "ns",
            "range": "± 17792.924911251546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14152.111111111111,
            "unit": "ns",
            "range": "± 3019.7438663139283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59490.26436781609,
            "unit": "ns",
            "range": "± 3177.746226566837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52260.166666666664,
            "unit": "ns",
            "range": "± 879.1143270360233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66931.6170212766,
            "unit": "ns",
            "range": "± 6834.397749943908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2874.553191489362,
            "unit": "ns",
            "range": "± 210.60494623061834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11716.827956989247,
            "unit": "ns",
            "range": "± 661.1593674825391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5784477.857142857,
            "unit": "ns",
            "range": "± 26211.923548871193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14475313.566666666,
            "unit": "ns",
            "range": "± 93653.2448041838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37509649.833333336,
            "unit": "ns",
            "range": "± 223205.22962628768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75181451.85714285,
            "unit": "ns",
            "range": "± 133696.7702152076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151815905.14285713,
            "unit": "ns",
            "range": "± 516027.41303939646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976768.1224489796,
            "unit": "ns",
            "range": "± 71896.3387094218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1880090.5714285714,
            "unit": "ns",
            "range": "± 70541.9523171023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1627426.81,
            "unit": "ns",
            "range": "± 145561.41523864307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7791620.371428572,
            "unit": "ns",
            "range": "± 255582.14036829793"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38053.12371134021,
            "unit": "ns",
            "range": "± 6174.8560817536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3634672.5281808036,
            "unit": "ns",
            "range": "± 2391.1117936603337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212552.9504743305,
            "unit": "ns",
            "range": "± 1838.173431611331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775425.1214425223,
            "unit": "ns",
            "range": "± 746.5099803576982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965962.37890625,
            "unit": "ns",
            "range": "± 3494.353964227862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617099.6446614583,
            "unit": "ns",
            "range": "± 818.0205638228771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568863.2399553572,
            "unit": "ns",
            "range": "± 736.3424387676774"
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
          "id": "85c21f75e245ece09b1a57a84826ce3e75f56c49",
          "message": "Merge pull request #3782 from greymistcube/chore/vscode-settings\n\n🔧 Updated `./vscode/settings.json` to comply with the newest version of vscode json schema",
          "timestamp": "2024-05-10T16:11:48+09:00",
          "tree_id": "2960f62a8ef4c1c66b0d521c9664c46ea0d145e9",
          "url": "https://github.com/planetarium/libplanet/commit/85c21f75e245ece09b1a57a84826ce3e75f56c49"
        },
        "date": 1715325805207,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2396743.566666667,
            "unit": "ns",
            "range": "± 43258.958795452614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2538170,
            "unit": "ns",
            "range": "± 43153.313249721294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3173207.3666666667,
            "unit": "ns",
            "range": "± 44294.75776765506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3402719.8088235296,
            "unit": "ns",
            "range": "± 158547.9642685745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8903040.964285715,
            "unit": "ns",
            "range": "± 226092.15457934848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195169.82432432432,
            "unit": "ns",
            "range": "± 6582.915995438723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191393.26923076922,
            "unit": "ns",
            "range": "± 9871.85169925217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160045.82352941178,
            "unit": "ns",
            "range": "± 2477.486660793911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3270975.3333333335,
            "unit": "ns",
            "range": "± 38100.383820088944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2938236.5714285714,
            "unit": "ns",
            "range": "± 33620.57798138214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13446.729166666666,
            "unit": "ns",
            "range": "± 2140.3460688165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62561.85106382979,
            "unit": "ns",
            "range": "± 5246.443110423751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51939.346153846156,
            "unit": "ns",
            "range": "± 1385.8544134881613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65531.183673469386,
            "unit": "ns",
            "range": "± 16496.872307964855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3350.532608695652,
            "unit": "ns",
            "range": "± 510.45587147880457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12133.28409090909,
            "unit": "ns",
            "range": "± 843.8918728589136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5800858.928571428,
            "unit": "ns",
            "range": "± 28823.282780163583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15040263.6,
            "unit": "ns",
            "range": "± 93311.52406688957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38621069.2,
            "unit": "ns",
            "range": "± 201996.07027302007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78074634.76666667,
            "unit": "ns",
            "range": "± 976064.9405698567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152088382.06666666,
            "unit": "ns",
            "range": "± 513046.94131997414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998105.94,
            "unit": "ns",
            "range": "± 93672.0161954336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1900623.875,
            "unit": "ns",
            "range": "± 80786.96801027491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1589679.0308641975,
            "unit": "ns",
            "range": "± 79265.48657298561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7884640.392857143,
            "unit": "ns",
            "range": "± 185994.13379406056"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37349.322222222225,
            "unit": "ns",
            "range": "± 3312.3806871123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750913.7959735575,
            "unit": "ns",
            "range": "± 6096.780081852909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211765.255859375,
            "unit": "ns",
            "range": "± 3029.9411800283137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761953.9965444711,
            "unit": "ns",
            "range": "± 876.4720191026048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918769.1180989584,
            "unit": "ns",
            "range": "± 1584.6301620941251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629088.71640625,
            "unit": "ns",
            "range": "± 2608.787461863547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571280.9264973958,
            "unit": "ns",
            "range": "± 305.52765867197303"
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
          "id": "c6e6b63a930b02314c73be2ce5052aa38a3d63b0",
          "message": "Merge pull request #3783 from greymistcube/refactor/currency-account\n\n♻️ Refactor `CurrencyAccount`",
          "timestamp": "2024-05-14T09:59:47+09:00",
          "tree_id": "61ac3578bccca0fada5a93cdeec310cd8ed91952",
          "url": "https://github.com/planetarium/libplanet/commit/c6e6b63a930b02314c73be2ce5052aa38a3d63b0"
        },
        "date": 1715648982058,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2559052.08,
            "unit": "ns",
            "range": "± 66617.64498359275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2595555.18,
            "unit": "ns",
            "range": "± 102359.45833702214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3264921.3333333335,
            "unit": "ns",
            "range": "± 66235.42902604848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3252770.2,
            "unit": "ns",
            "range": "± 144220.9327286156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9152592.677419355,
            "unit": "ns",
            "range": "± 155710.29516945608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209428.65432098764,
            "unit": "ns",
            "range": "± 10924.019023647494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238441.8947368421,
            "unit": "ns",
            "range": "± 5070.394296466245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169247.5,
            "unit": "ns",
            "range": "± 4834.154455155141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3163759.433333333,
            "unit": "ns",
            "range": "± 16325.110756424403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807422.285714286,
            "unit": "ns",
            "range": "± 27237.676771561997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21716.70202020202,
            "unit": "ns",
            "range": "± 4300.213929134503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71980.72368421052,
            "unit": "ns",
            "range": "± 3580.8311385251855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89069.88043478261,
            "unit": "ns",
            "range": "± 6379.3402684190105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94978.9387755102,
            "unit": "ns",
            "range": "± 12098.565091766795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6249.720430107527,
            "unit": "ns",
            "range": "± 400.2503392060969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12760.666666666666,
            "unit": "ns",
            "range": "± 996.6019553283752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5710241,
            "unit": "ns",
            "range": "± 33006.20990056265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15130580.833333334,
            "unit": "ns",
            "range": "± 71234.1761111764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38331936.333333336,
            "unit": "ns",
            "range": "± 171539.77394331558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79306320.26666667,
            "unit": "ns",
            "range": "± 285791.2325298378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156695327.6,
            "unit": "ns",
            "range": "± 697302.5837084951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000933.9468085107,
            "unit": "ns",
            "range": "± 94772.86900995906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2025803.862745098,
            "unit": "ns",
            "range": "± 73842.81669411577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1716271.8854166667,
            "unit": "ns",
            "range": "± 187103.74952449126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7911554,
            "unit": "ns",
            "range": "± 145543.9615455789"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36971.239130434784,
            "unit": "ns",
            "range": "± 2596.9343395947208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3719462.3270089286,
            "unit": "ns",
            "range": "± 10427.038626631696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212819.3387920673,
            "unit": "ns",
            "range": "± 1908.5741646023948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774992.2662527902,
            "unit": "ns",
            "range": "± 1886.8615991671813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941909.4682291667,
            "unit": "ns",
            "range": "± 2181.7092864479896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621720.7274693081,
            "unit": "ns",
            "range": "± 906.0333018785262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566745.5977213542,
            "unit": "ns",
            "range": "± 324.94711681095595"
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
          "id": "51b31e7a885df1342681b51dac515f443bc7bf7a",
          "message": "Merge pull request #3784 from greymistcube/release/4.5.0\n\n🚀 Release 4.5.0",
          "timestamp": "2024-05-14T17:05:00+09:00",
          "tree_id": "d0af614dc8458ab70ce6395965f553458859c58a",
          "url": "https://github.com/planetarium/libplanet/commit/51b31e7a885df1342681b51dac515f443bc7bf7a"
        },
        "date": 1715674509089,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2388480.4736842103,
            "unit": "ns",
            "range": "± 52511.60923005336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2703189.466666667,
            "unit": "ns",
            "range": "± 47758.92955977173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3132449.5,
            "unit": "ns",
            "range": "± 69149.95223159289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3132053.7066666665,
            "unit": "ns",
            "range": "± 156921.5853518732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8947754.285714285,
            "unit": "ns",
            "range": "± 156868.03313438513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202944.28358208956,
            "unit": "ns",
            "range": "± 9160.073790238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191754.25454545455,
            "unit": "ns",
            "range": "± 8093.748925853055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166546.8076923077,
            "unit": "ns",
            "range": "± 2509.2071584671053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3141882.033333333,
            "unit": "ns",
            "range": "± 46638.986179355314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2841976.5,
            "unit": "ns",
            "range": "± 41507.15893210934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13035.244680851063,
            "unit": "ns",
            "range": "± 1075.5520681563905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63288.2,
            "unit": "ns",
            "range": "± 6031.173225903154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54160.98888888889,
            "unit": "ns",
            "range": "± 4481.896615221962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75722.85567010309,
            "unit": "ns",
            "range": "± 23785.21991962204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3078.0425531914893,
            "unit": "ns",
            "range": "± 509.42982917957136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12857.572916666666,
            "unit": "ns",
            "range": "± 1251.4880006135993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5767181.071428572,
            "unit": "ns",
            "range": "± 23302.09866898518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14686604.633333333,
            "unit": "ns",
            "range": "± 116286.683298443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37692484.2,
            "unit": "ns",
            "range": "± 238564.3488870156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74867492,
            "unit": "ns",
            "range": "± 376467.4151875564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150018375.14285713,
            "unit": "ns",
            "range": "± 639276.2466054702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986408.8296703297,
            "unit": "ns",
            "range": "± 80949.65127960782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1832854.111111111,
            "unit": "ns",
            "range": "± 60248.87364650908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1610963.2311827957,
            "unit": "ns",
            "range": "± 109228.33584625451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7878946.315789473,
            "unit": "ns",
            "range": "± 269978.8900073991"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38207.52631578947,
            "unit": "ns",
            "range": "± 5452.045286417858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3678490.5987723214,
            "unit": "ns",
            "range": "± 4170.062802892526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210385.7009114583,
            "unit": "ns",
            "range": "± 2974.0209230442165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768875.6919921875,
            "unit": "ns",
            "range": "± 1217.6925551972445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943871.8376302083,
            "unit": "ns",
            "range": "± 5187.863053359413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618553.7673688616,
            "unit": "ns",
            "range": "± 639.1502326791984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581103.25546875,
            "unit": "ns",
            "range": "± 699.9578878010257"
          }
        ]
      }
    ]
  }
}