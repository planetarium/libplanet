window.BENCHMARK_DATA = {
  "lastUpdate": 1678875311667,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aea547870cfd181eee84fb1f822cb8493dbb2587",
          "message": "Merge pull request #2919 from colibrishin/release/0.52\n\n🚀 Release 0.52.0",
          "timestamp": "2023-03-13T19:19:01+09:00",
          "tree_id": "e0cd58434e1e45efbb58c9cb5a1763293e84f4a6",
          "url": "https://github.com/planetarium/libplanet/commit/aea547870cfd181eee84fb1f822cb8493dbb2587"
        },
        "date": 1678704299240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200249.2888888889,
            "unit": "ns",
            "range": "± 7303.999578755783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203477,
            "unit": "ns",
            "range": "± 6320.390746425413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177927.75384615385,
            "unit": "ns",
            "range": "± 8317.88781225207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11766177.266666668,
            "unit": "ns",
            "range": "± 99831.7480159684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9401871.6,
            "unit": "ns",
            "range": "± 55519.834109468095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21903.947916666668,
            "unit": "ns",
            "range": "± 1608.4615884345196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55326.782608695656,
            "unit": "ns",
            "range": "± 4144.635144339513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41135.52830188679,
            "unit": "ns",
            "range": "± 1640.8541233123958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92213.8125,
            "unit": "ns",
            "range": "± 10571.550779344683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5328.0625,
            "unit": "ns",
            "range": "± 626.5511750846853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19713.375,
            "unit": "ns",
            "range": "± 1404.0551889737849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333492.75,
            "unit": "ns",
            "range": "± 89650.29533873594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5209154.4,
            "unit": "ns",
            "range": "± 80539.18744916309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26890617.866666667,
            "unit": "ns",
            "range": "± 266116.40876070614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6333573.166666667,
            "unit": "ns",
            "range": "± 228329.40920573467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27859902.230769232,
            "unit": "ns",
            "range": "± 448639.0280998288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6054328.24375,
            "unit": "ns",
            "range": "± 15038.981906286894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850336.6527622768,
            "unit": "ns",
            "range": "± 5361.210762886596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372123.5981069712,
            "unit": "ns",
            "range": "± 606.5576424474601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602119.669363839,
            "unit": "ns",
            "range": "± 1259.3677097027391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811387.800405649,
            "unit": "ns",
            "range": "± 659.1589699261108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752983.4857700893,
            "unit": "ns",
            "range": "± 394.88221504446955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8051855.666666667,
            "unit": "ns",
            "range": "± 88213.60882350674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20261761.666666668,
            "unit": "ns",
            "range": "± 171173.85511047224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51342456.06666667,
            "unit": "ns",
            "range": "± 260227.11623872677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104052281.13333334,
            "unit": "ns",
            "range": "± 641329.891023318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 207883818.7857143,
            "unit": "ns",
            "range": "± 527969.3738919651"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46927.1914893617,
            "unit": "ns",
            "range": "± 3006.439598547048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1390758.469387755,
            "unit": "ns",
            "range": "± 116789.35919023646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2591714.966666667,
            "unit": "ns",
            "range": "± 77446.20244134025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2177644.1126760566,
            "unit": "ns",
            "range": "± 97426.3876495699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5085201.590909091,
            "unit": "ns",
            "range": "± 121327.10266668096"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "233f6f30e700db3d42c169b28bec7e9636c8ddde",
          "message": "Merge pull request #2926 from colibrishin/prepare/0.52.1\n\n🔧 Prepare 0.52.1",
          "timestamp": "2023-03-14T13:20:29+09:00",
          "tree_id": "2aef4fbff4f74ea709ce146f26d005bfcb7cdb86",
          "url": "https://github.com/planetarium/libplanet/commit/233f6f30e700db3d42c169b28bec7e9636c8ddde"
        },
        "date": 1678768327842,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193079.97368421053,
            "unit": "ns",
            "range": "± 6578.519645711982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193815,
            "unit": "ns",
            "range": "± 4187.273015262776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159741.42857142858,
            "unit": "ns",
            "range": "± 1851.0372025636666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11321453.133333333,
            "unit": "ns",
            "range": "± 60840.82104953016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9244248.666666666,
            "unit": "ns",
            "range": "± 82042.41499167774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17791.618556701033,
            "unit": "ns",
            "range": "± 1364.8694950075121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52096.4,
            "unit": "ns",
            "range": "± 4297.905737904786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38886.53333333333,
            "unit": "ns",
            "range": "± 705.0370675834474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85630.86734693877,
            "unit": "ns",
            "range": "± 12300.964676476087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4609.302083333333,
            "unit": "ns",
            "range": "± 418.14628817126123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17407.467391304348,
            "unit": "ns",
            "range": "± 1126.5262316401424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3209319.8,
            "unit": "ns",
            "range": "± 36656.428736892216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5202012.555555556,
            "unit": "ns",
            "range": "± 109932.5854037626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24019422.266666666,
            "unit": "ns",
            "range": "± 312235.0419076415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6241967.3125,
            "unit": "ns",
            "range": "± 116104.98159149976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26593886.066666666,
            "unit": "ns",
            "range": "± 352461.6932147108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5949665.129166666,
            "unit": "ns",
            "range": "± 31410.888175375167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1962899.5460379464,
            "unit": "ns",
            "range": "± 2259.0340518270045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337241.0157877605,
            "unit": "ns",
            "range": "± 527.8938070561633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2584851.7770647323,
            "unit": "ns",
            "range": "± 2223.2683369437023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832664.8318219866,
            "unit": "ns",
            "range": "± 476.89379937983216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763201.222265625,
            "unit": "ns",
            "range": "± 1387.9149963486932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7764288.133333334,
            "unit": "ns",
            "range": "± 17734.19750436454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20038625.133333333,
            "unit": "ns",
            "range": "± 52779.70098013422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50970409.5,
            "unit": "ns",
            "range": "± 365243.1801167651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102185999.13333334,
            "unit": "ns",
            "range": "± 566816.4328670471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203447410.93333334,
            "unit": "ns",
            "range": "± 1037080.3554062906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44474.983606557376,
            "unit": "ns",
            "range": "± 2007.777589706284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1274584.6436781608,
            "unit": "ns",
            "range": "± 67018.21748130547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2401169.3684210526,
            "unit": "ns",
            "range": "± 52742.462683423124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2056714.5824175824,
            "unit": "ns",
            "range": "± 114284.48131921265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4835814.888888889,
            "unit": "ns",
            "range": "± 98358.79744491824"
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
          "id": "ad915fabdad7fc9ca00f933507e2196a26911431",
          "message": "Merge pull request #2946 from greymistcube/port/0.51.2-to-0.52.1\n\n🔀🚀 Port 0.51.2 to 0.52.1 and release 0.52.1",
          "timestamp": "2023-03-15T18:57:02+09:00",
          "tree_id": "c27253e5957238046518b4bd134cde83bae519e6",
          "url": "https://github.com/planetarium/libplanet/commit/ad915fabdad7fc9ca00f933507e2196a26911431"
        },
        "date": 1678875287876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231370.21276595743,
            "unit": "ns",
            "range": "± 17127.470093499105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228934.83870967742,
            "unit": "ns",
            "range": "± 18975.022929636325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210091.04210526316,
            "unit": "ns",
            "range": "± 16979.463952215665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14883419.206896551,
            "unit": "ns",
            "range": "± 425910.1417812196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11723055.709677419,
            "unit": "ns",
            "range": "± 357070.40746209456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24944,
            "unit": "ns",
            "range": "± 7344.92087919601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62561.846153846156,
            "unit": "ns",
            "range": "± 6869.579930426083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52615.979166666664,
            "unit": "ns",
            "range": "± 7947.32111234467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117489.22680412371,
            "unit": "ns",
            "range": "± 15415.107104791412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10842.02,
            "unit": "ns",
            "range": "± 5763.508010357449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23991.030303030304,
            "unit": "ns",
            "range": "± 6076.9635668605015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4097174.494736842,
            "unit": "ns",
            "range": "± 282952.09905692644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6219643.357894737,
            "unit": "ns",
            "range": "± 381902.76337723515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30312057.666666668,
            "unit": "ns",
            "range": "± 783119.4907722889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7761518.714285715,
            "unit": "ns",
            "range": "± 431595.24462062796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35861116.15625,
            "unit": "ns",
            "range": "± 1658823.2436603527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7262550.8203125,
            "unit": "ns",
            "range": "± 93905.42719196432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2309453.6725643384,
            "unit": "ns",
            "range": "± 46152.34815938016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1645855.8809895834,
            "unit": "ns",
            "range": "± 22616.247694897727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3150675.803125,
            "unit": "ns",
            "range": "± 42074.25695621575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1009436.2465122768,
            "unit": "ns",
            "range": "± 7840.66708840714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934461.1247721354,
            "unit": "ns",
            "range": "± 16178.781346887887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9886982.885416666,
            "unit": "ns",
            "range": "± 875705.445798347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 25974147.095238097,
            "unit": "ns",
            "range": "± 612912.3694984386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 65082561.86046512,
            "unit": "ns",
            "range": "± 2380551.365012292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 130260675.42307693,
            "unit": "ns",
            "range": "± 5374893.31710045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 263498088.57692307,
            "unit": "ns",
            "range": "± 10875302.953274228"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58776.717391304344,
            "unit": "ns",
            "range": "± 7201.151607118488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1679799.3152173914,
            "unit": "ns",
            "range": "± 119871.59248449016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3281823.0520833335,
            "unit": "ns",
            "range": "± 220280.66506567528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2672598.1063829786,
            "unit": "ns",
            "range": "± 192143.87319012987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7197725.804123712,
            "unit": "ns",
            "range": "± 455160.19730602443"
          }
        ]
      }
    ]
  }
}