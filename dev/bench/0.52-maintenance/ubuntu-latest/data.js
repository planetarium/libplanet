window.BENCHMARK_DATA = {
  "lastUpdate": 1680073569739,
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
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ef2213aed5a36d2ae2924118074332c080c7aee",
          "message": "Merge pull request #2976 from riemannulus/0.52-maintenance\n\n🔀 Port 0.50.6 to 0.52.2",
          "timestamp": "2023-03-28T15:27:27+09:00",
          "tree_id": "02382587929633a3da45125b42ba2f0682dbcf46",
          "url": "https://github.com/planetarium/libplanet/commit/6ef2213aed5a36d2ae2924118074332c080c7aee"
        },
        "date": 1679985926404,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4062991.2916666665,
            "unit": "ns",
            "range": "± 255742.4053890706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6433171.434210527,
            "unit": "ns",
            "range": "± 326300.5316175191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31546358.310344826,
            "unit": "ns",
            "range": "± 908124.3302101198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8031519.88,
            "unit": "ns",
            "range": "± 212733.95450956264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36657385.038461536,
            "unit": "ns",
            "range": "± 1495599.4147331025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9876128.367346939,
            "unit": "ns",
            "range": "± 392088.51608611573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 26789953.344827585,
            "unit": "ns",
            "range": "± 775513.6176362768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 65588966.61111111,
            "unit": "ns",
            "range": "± 1346907.8232764085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 134519806.48387095,
            "unit": "ns",
            "range": "± 4026850.2572136107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 268149354.52941176,
            "unit": "ns",
            "range": "± 5152233.535130372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1716304.0459770116,
            "unit": "ns",
            "range": "± 145134.8067828832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3332239.811764706,
            "unit": "ns",
            "range": "± 194425.95937090673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2783041.085106383,
            "unit": "ns",
            "range": "± 186080.51888198973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7257293.979166667,
            "unit": "ns",
            "range": "± 486485.1516728624"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59447.552083333336,
            "unit": "ns",
            "range": "± 7752.235284938675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7428036.531770834,
            "unit": "ns",
            "range": "± 94554.45764019845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2334693.4252604167,
            "unit": "ns",
            "range": "± 31650.06205999624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1681468.990234375,
            "unit": "ns",
            "range": "± 18628.341734433383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3214655.980338542,
            "unit": "ns",
            "range": "± 35741.463316020534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1052902.571986607,
            "unit": "ns",
            "range": "± 16954.099056172203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 979839.8136160715,
            "unit": "ns",
            "range": "± 11151.737648881095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236639.0843373494,
            "unit": "ns",
            "range": "± 12550.65307814388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235330.75789473683,
            "unit": "ns",
            "range": "± 18759.61161798886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213757.54736842104,
            "unit": "ns",
            "range": "± 13037.915576917096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15005678.054054054,
            "unit": "ns",
            "range": "± 501939.7287262433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12138265.794117646,
            "unit": "ns",
            "range": "± 579327.4412672856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20487.936842105264,
            "unit": "ns",
            "range": "± 3858.796292337272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63806.05319148936,
            "unit": "ns",
            "range": "± 8973.49914412507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46997.063829787236,
            "unit": "ns",
            "range": "± 4554.042011339293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115621.01052631579,
            "unit": "ns",
            "range": "± 18090.08457603151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5710.405063291139,
            "unit": "ns",
            "range": "± 1064.2878263937496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20245.16304347826,
            "unit": "ns",
            "range": "± 3893.808557571213"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc64737ece4bdb4cac81695df18ed892a956003d",
          "message": "Merge pull request #3005 from riemannulus/0.52-maintenance\n\n🔧 Prepare 0.52.3",
          "timestamp": "2023-03-28T15:48:26+09:00",
          "tree_id": "cf56bc8debce58fdac70c5bbb1f03a79ea85f380",
          "url": "https://github.com/planetarium/libplanet/commit/bc64737ece4bdb4cac81695df18ed892a956003d"
        },
        "date": 1679987142591,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4204022.888888889,
            "unit": "ns",
            "range": "± 114658.33853716249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6598401.5,
            "unit": "ns",
            "range": "± 159707.35113109078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30641283.25,
            "unit": "ns",
            "range": "± 687520.402674321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7901192.916666667,
            "unit": "ns",
            "range": "± 310494.3186991688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34839404.6,
            "unit": "ns",
            "range": "± 638746.3347174459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9896349.5,
            "unit": "ns",
            "range": "± 453683.2713110109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 26576985.25,
            "unit": "ns",
            "range": "± 367883.9433880609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 67907332.37931034,
            "unit": "ns",
            "range": "± 1921257.3542655306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 132156343.35714285,
            "unit": "ns",
            "range": "± 2280817.4097115207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 264374167.64285713,
            "unit": "ns",
            "range": "± 2403549.5073694526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1702201.2727272727,
            "unit": "ns",
            "range": "± 92823.56903283631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3255495.466666667,
            "unit": "ns",
            "range": "± 96796.38786176401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2819105.9292929294,
            "unit": "ns",
            "range": "± 174843.34434603795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6955151.424242424,
            "unit": "ns",
            "range": "± 462088.2734729657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60767.38461538462,
            "unit": "ns",
            "range": "± 4257.130767623843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7384109.844866072,
            "unit": "ns",
            "range": "± 68275.80756554575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2330701.6813616073,
            "unit": "ns",
            "range": "± 40461.73454064179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1709573.7083984376,
            "unit": "ns",
            "range": "± 39225.274770113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3286115.5086495536,
            "unit": "ns",
            "range": "± 49089.07434969486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023450.6450520833,
            "unit": "ns",
            "range": "± 12201.893145140853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 970957.6697916667,
            "unit": "ns",
            "range": "± 12102.299894099247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241238.14,
            "unit": "ns",
            "range": "± 9735.722169601671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235730.96153846153,
            "unit": "ns",
            "range": "± 9041.852547386945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221456.10666666666,
            "unit": "ns",
            "range": "± 11124.342813960853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15037339.76923077,
            "unit": "ns",
            "range": "± 233424.78729030822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12348875.829787234,
            "unit": "ns",
            "range": "± 475507.7724477148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23536.666666666668,
            "unit": "ns",
            "range": "± 1308.012567206062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65969.91208791209,
            "unit": "ns",
            "range": "± 7225.873729019983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51563.05882352941,
            "unit": "ns",
            "range": "± 2012.0838790842165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110515.45263157894,
            "unit": "ns",
            "range": "± 16113.852796662864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6144.6082474226805,
            "unit": "ns",
            "range": "± 950.0406083064406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23059.483146067414,
            "unit": "ns",
            "range": "± 1457.5001957925922"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7df6c9598b4ba204c0a9054111bdc9a21954e13b",
          "message": "Merge pull request #3004 from riemannulus/0.52-maintenance\n\n🚀 Release 0.52.2",
          "timestamp": "2023-03-28T15:45:41+09:00",
          "tree_id": "5168d4a2776747d74450deb18b64e9ae2c50a345",
          "url": "https://github.com/planetarium/libplanet/commit/7df6c9598b4ba204c0a9054111bdc9a21954e13b"
        },
        "date": 1679987194022,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4095915.5918367347,
            "unit": "ns",
            "range": "± 377476.852741442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6478724.821052631,
            "unit": "ns",
            "range": "± 512630.85494989384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 34277143.40625,
            "unit": "ns",
            "range": "± 2011389.526361255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8134386.9375,
            "unit": "ns",
            "range": "± 594820.9127879684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 40303165.85858586,
            "unit": "ns",
            "range": "± 2909666.9789555725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10378828.75,
            "unit": "ns",
            "range": "± 1068219.0943834558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 27819972.583333332,
            "unit": "ns",
            "range": "± 1910524.3196104139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 69881110.5909091,
            "unit": "ns",
            "range": "± 1669406.2457850855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 143453390.6153846,
            "unit": "ns",
            "range": "± 5883305.984447757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 289028382.64,
            "unit": "ns",
            "range": "± 11666819.496026637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1856931.5858585858,
            "unit": "ns",
            "range": "± 242203.57033360828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3493795.6767676766,
            "unit": "ns",
            "range": "± 378870.3994610183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2905524.1276595746,
            "unit": "ns",
            "range": "± 280342.23098072887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7376613.541666667,
            "unit": "ns",
            "range": "± 612577.7366128173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77506.37755102041,
            "unit": "ns",
            "range": "± 19501.468472603403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7271473.586979167,
            "unit": "ns",
            "range": "± 129969.54945334532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2385703.7173828124,
            "unit": "ns",
            "range": "± 83889.70537973166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1736178.7538085938,
            "unit": "ns",
            "range": "± 39936.10195728676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3376177.137606534,
            "unit": "ns",
            "range": "± 80278.80797182795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1095977.949514678,
            "unit": "ns",
            "range": "± 34695.05645771623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1033342.099609375,
            "unit": "ns",
            "range": "± 27897.82088160278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255300.625,
            "unit": "ns",
            "range": "± 24026.815244883823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274084.43157894735,
            "unit": "ns",
            "range": "± 31349.283685071292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221894.22916666666,
            "unit": "ns",
            "range": "± 35139.35464299078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15906592.694736842,
            "unit": "ns",
            "range": "± 930225.0702972781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11791263.171717172,
            "unit": "ns",
            "range": "± 1083952.8835235042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33185.65979381443,
            "unit": "ns",
            "range": "± 11532.779668990075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76717.60824742269,
            "unit": "ns",
            "range": "± 15795.411033586028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56554.255102040814,
            "unit": "ns",
            "range": "± 12020.648876349349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138626.9381443299,
            "unit": "ns",
            "range": "± 24223.575255581094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5935.955056179775,
            "unit": "ns",
            "range": "± 1181.0287494587117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25136.06976744186,
            "unit": "ns",
            "range": "± 3843.741304849307"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69c785cbb61ced1f984a000458e57212e4d836a3",
          "message": "Merge pull request #3023 from limebell/chore/port-0.50.7-to-0.52\n\n🔀 Port 0.50.7 to 0.52.3",
          "timestamp": "2023-03-29T15:53:15+09:00",
          "tree_id": "854dfc97e54aae3f4aacf7783b5388ed1462fb1e",
          "url": "https://github.com/planetarium/libplanet/commit/69c785cbb61ced1f984a000458e57212e4d836a3"
        },
        "date": 1680073548069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3304050.533333333,
            "unit": "ns",
            "range": "± 50037.52129561899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5242514.714285715,
            "unit": "ns",
            "range": "± 121294.18235024418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23513422.6,
            "unit": "ns",
            "range": "± 282362.8001049612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6321360,
            "unit": "ns",
            "range": "± 85852.650799336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27523826.866666667,
            "unit": "ns",
            "range": "± 360385.40357033384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7741883.733333333,
            "unit": "ns",
            "range": "± 19180.387484789422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19771723,
            "unit": "ns",
            "range": "± 122910.13134400272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50367895.86666667,
            "unit": "ns",
            "range": "± 213498.6770624341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100578621.35714285,
            "unit": "ns",
            "range": "± 455885.3586692782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 201251197.13333333,
            "unit": "ns",
            "range": "± 735945.1252458459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1353655.6489361702,
            "unit": "ns",
            "range": "± 76454.48039892089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2522871.789473684,
            "unit": "ns",
            "range": "± 53493.259125259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185621.3,
            "unit": "ns",
            "range": "± 110955.11690568594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5126299.7,
            "unit": "ns",
            "range": "± 152493.520907057"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46065.34246575343,
            "unit": "ns",
            "range": "± 2298.70599600912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6092308.162946428,
            "unit": "ns",
            "range": "± 18429.902181861467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1974189.1361607143,
            "unit": "ns",
            "range": "± 2291.378671635204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370891.8901041667,
            "unit": "ns",
            "range": "± 578.7010049244966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2544499.5789620536,
            "unit": "ns",
            "range": "± 1642.6020471296772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801737.7485727164,
            "unit": "ns",
            "range": "± 413.99470073165855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743811.6070963541,
            "unit": "ns",
            "range": "± 690.5227891251419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199080.32142857142,
            "unit": "ns",
            "range": "± 5297.280413735526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197954.26470588235,
            "unit": "ns",
            "range": "± 5956.7867548670065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170303.91666666666,
            "unit": "ns",
            "range": "± 5534.084135738141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11458054.357142856,
            "unit": "ns",
            "range": "± 44317.77603522983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9304352.642857144,
            "unit": "ns",
            "range": "± 54003.645474680176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18391.452631578948,
            "unit": "ns",
            "range": "± 1311.1245438709755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54029.52222222222,
            "unit": "ns",
            "range": "± 3122.5310290837006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40817.72727272727,
            "unit": "ns",
            "range": "± 1273.097165202034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87095.2435897436,
            "unit": "ns",
            "range": "± 3751.2718299919084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4980.968421052631,
            "unit": "ns",
            "range": "± 508.75315781615154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19568.22105263158,
            "unit": "ns",
            "range": "± 1532.7803910579119"
          }
        ]
      }
    ]
  }
}