window.BENCHMARK_DATA = {
  "lastUpdate": 1722416914643,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "583571d54d82fb099953049b20316af6d93d6d6a",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-main",
          "timestamp": "2024-07-30T17:49:46+09:00",
          "tree_id": "9413af4ceb1933084d79bd200c2c04dd2ebae8e7",
          "url": "https://github.com/planetarium/libplanet/commit/583571d54d82fb099953049b20316af6d93d6d6a"
        },
        "date": 1722332755127,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11048639,
            "unit": "ns",
            "range": "± 129855.36845135193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26689441.333333332,
            "unit": "ns",
            "range": "± 102835.04816498721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67305717.06666666,
            "unit": "ns",
            "range": "± 110987.93576746892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137576633.73333332,
            "unit": "ns",
            "range": "± 466120.6516746905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274422872.35714287,
            "unit": "ns",
            "range": "± 378076.6856909012"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14057.870967741936,
            "unit": "ns",
            "range": "± 432.1288189059279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110696.5,
            "unit": "ns",
            "range": "± 4168.326941460938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106446.0303030303,
            "unit": "ns",
            "range": "± 4997.166566302878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90332.08823529411,
            "unit": "ns",
            "range": "± 2272.4809445832016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3027489.371794872,
            "unit": "ns",
            "range": "± 155659.64504568803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2668819.48,
            "unit": "ns",
            "range": "± 176280.84249560183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4944.228260869565,
            "unit": "ns",
            "range": "± 378.44070196905665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26341.784090909092,
            "unit": "ns",
            "range": "± 1904.8003361674241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22589.47311827957,
            "unit": "ns",
            "range": "± 2069.274308792913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29962.202127659573,
            "unit": "ns",
            "range": "± 5306.4624155182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1243.3191489361702,
            "unit": "ns",
            "range": "± 245.83144906582945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5074.159574468085,
            "unit": "ns",
            "range": "± 615.1825203969693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 696731.1011235955,
            "unit": "ns",
            "range": "± 38471.24625969048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1305430.9047619049,
            "unit": "ns",
            "range": "± 47003.96850750076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1071234.5657894737,
            "unit": "ns",
            "range": "± 54022.36493856609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9424269.63,
            "unit": "ns",
            "range": "± 1182498.7700680012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2194997.75,
            "unit": "ns",
            "range": "± 67689.73661565522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2287436.595744681,
            "unit": "ns",
            "range": "± 88061.72323819727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2601113.16,
            "unit": "ns",
            "range": "± 69155.92479720495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2332283.6279069767,
            "unit": "ns",
            "range": "± 85571.0036107646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3005934.591549296,
            "unit": "ns",
            "range": "± 142987.79722035996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3006156.503515625,
            "unit": "ns",
            "range": "± 53391.76152727926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 932761.8325520833,
            "unit": "ns",
            "range": "± 4811.609852142852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612522.8217447917,
            "unit": "ns",
            "range": "± 4665.666250206568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1645375.8837239584,
            "unit": "ns",
            "range": "± 16598.32680314246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463501.1658761161,
            "unit": "ns",
            "range": "± 538.5863563023267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421694.1046048678,
            "unit": "ns",
            "range": "± 1072.8891271299974"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "eb924d42a2062ee5630ad69a2d6b17c782aa7065",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-main",
          "timestamp": "2024-07-31T17:55:15+09:00",
          "tree_id": "8a78ecb9c02c33f9fe134eedf74921fd8797ae20",
          "url": "https://github.com/planetarium/libplanet/commit/eb924d42a2062ee5630ad69a2d6b17c782aa7065"
        },
        "date": 1722416866433,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10947056.92857143,
            "unit": "ns",
            "range": "± 84275.92659779887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26494881,
            "unit": "ns",
            "range": "± 154686.91172655817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67600400.23076923,
            "unit": "ns",
            "range": "± 88603.31846038449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135944913.92857143,
            "unit": "ns",
            "range": "± 199701.2763644987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274179084,
            "unit": "ns",
            "range": "± 229754.5304083614"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14228.652173913044,
            "unit": "ns",
            "range": "± 360.32720088775534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110822.86206896552,
            "unit": "ns",
            "range": "± 4498.973826264517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107812.9074074074,
            "unit": "ns",
            "range": "± 4541.269701382953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92312.3,
            "unit": "ns",
            "range": "± 2112.942774525863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2985480.3,
            "unit": "ns",
            "range": "± 198025.5584858335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2759202.659340659,
            "unit": "ns",
            "range": "± 154126.52015789712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5194.733333333334,
            "unit": "ns",
            "range": "± 577.8197067279257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27528.252747252747,
            "unit": "ns",
            "range": "± 1564.7853427043494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23909.0412371134,
            "unit": "ns",
            "range": "± 1722.257396543401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29501.691489361703,
            "unit": "ns",
            "range": "± 4561.71973802796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1081.0842105263157,
            "unit": "ns",
            "range": "± 229.2974776544186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4825.095505617977,
            "unit": "ns",
            "range": "± 531.2325872889885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 690247.03125,
            "unit": "ns",
            "range": "± 31996.526884424107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1298924.3823529412,
            "unit": "ns",
            "range": "± 51563.85991240262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1089491.2087912087,
            "unit": "ns",
            "range": "± 60550.02375566401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9488434.9,
            "unit": "ns",
            "range": "± 1513324.820885273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2187126.25,
            "unit": "ns",
            "range": "± 55259.51820294617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2292023.588235294,
            "unit": "ns",
            "range": "± 72749.34170028835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2567253.214285714,
            "unit": "ns",
            "range": "± 33114.02930476301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2290722.4137931033,
            "unit": "ns",
            "range": "± 59974.950626739184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3122631.5,
            "unit": "ns",
            "range": "± 295629.7287742543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3033286.296875,
            "unit": "ns",
            "range": "± 62630.52800244353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920341.7287109375,
            "unit": "ns",
            "range": "± 5876.214063925679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615582.3750651042,
            "unit": "ns",
            "range": "± 5267.584363128729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1629959.8787760416,
            "unit": "ns",
            "range": "± 14064.021044181047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466683.1028529576,
            "unit": "ns",
            "range": "± 527.3590771375506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417597.4378580729,
            "unit": "ns",
            "range": "± 989.0164802424897"
          }
        ]
      }
    ]
  }
}