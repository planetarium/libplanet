window.BENCHMARK_DATA = {
  "lastUpdate": 1720765324006,
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
          "id": "75b3ae438f440fc85a9245fdb02a3d32ae3252fc",
          "message": "fix: Fix the ci running error when github releasing",
          "timestamp": "2024-07-11T13:36:29+09:00",
          "tree_id": "a8735697867f1301214b2128eb787916f57d5be7",
          "url": "https://github.com/planetarium/libplanet/commit/75b3ae438f440fc85a9245fdb02a3d32ae3252fc"
        },
        "date": 1720676749187,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10892878.666666666,
            "unit": "ns",
            "range": "± 80277.25594840708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26588648.714285713,
            "unit": "ns",
            "range": "± 154705.723699087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67722927.4,
            "unit": "ns",
            "range": "± 202854.3302213262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135083404.5,
            "unit": "ns",
            "range": "± 210216.01812595245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272366494.4285714,
            "unit": "ns",
            "range": "± 400393.0550803441"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14147.130434782608,
            "unit": "ns",
            "range": "± 358.40154021937536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110165.56603773584,
            "unit": "ns",
            "range": "± 3819.5480678570516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107263.96363636364,
            "unit": "ns",
            "range": "± 4284.129852285735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93010.48148148147,
            "unit": "ns",
            "range": "± 2517.4707907612715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3047197.0506329113,
            "unit": "ns",
            "range": "± 156801.22147646116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2727075.75,
            "unit": "ns",
            "range": "± 168940.36303103555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5122.797752808989,
            "unit": "ns",
            "range": "± 522.0768007716716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26803.282608695652,
            "unit": "ns",
            "range": "± 1738.8574645128394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22881.140845070422,
            "unit": "ns",
            "range": "± 1115.8653182399323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30468.35106382979,
            "unit": "ns",
            "range": "± 4606.2963423675355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1089.8736842105263,
            "unit": "ns",
            "range": "± 204.85953891164237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4731.078651685393,
            "unit": "ns",
            "range": "± 443.8394269614115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678304.22,
            "unit": "ns",
            "range": "± 34067.91529274302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1289438.5405405406,
            "unit": "ns",
            "range": "± 42892.010299507216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1076431.482352941,
            "unit": "ns",
            "range": "± 57867.60812974235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9368126.7,
            "unit": "ns",
            "range": "± 1298486.1921189323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2195792.847826087,
            "unit": "ns",
            "range": "± 84132.64625841145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2286317.56,
            "unit": "ns",
            "range": "± 110369.61467909496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2585514.1315789474,
            "unit": "ns",
            "range": "± 56289.82618674979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2335039.8974358975,
            "unit": "ns",
            "range": "± 81202.66295373987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2838425.378378378,
            "unit": "ns",
            "range": "± 94225.76363104123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3017800.721047794,
            "unit": "ns",
            "range": "± 59624.69706229462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922302.3324869792,
            "unit": "ns",
            "range": "± 5670.777701041784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610012.4946614583,
            "unit": "ns",
            "range": "± 4725.028009726542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630307.9311197917,
            "unit": "ns",
            "range": "± 18640.384204674425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469589.77457682294,
            "unit": "ns",
            "range": "± 1231.4559910866499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419218.9615234375,
            "unit": "ns",
            "range": "± 1717.7447534571331"
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
          "id": "1715ccfb96803c319afff76dff631edd0f6b7b58",
          "message": "Merge pull request #3874 from planetarium/prepare/5.1.1\n\n🔧Prepare 5.1.1",
          "timestamp": "2024-07-12T15:13:54+09:00",
          "tree_id": "f4265a0ab88d83def888e04ed52141f2d5f9bd4a",
          "url": "https://github.com/planetarium/libplanet/commit/1715ccfb96803c319afff76dff631edd0f6b7b58"
        },
        "date": 1720765311647,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10659519.615384616,
            "unit": "ns",
            "range": "± 149906.58504078377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26586077.285714287,
            "unit": "ns",
            "range": "± 140033.43908025275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67027583.64285714,
            "unit": "ns",
            "range": "± 138327.77502039642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135103658.66666666,
            "unit": "ns",
            "range": "± 259296.78649038073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273828824.6666667,
            "unit": "ns",
            "range": "± 412397.1221833334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14083.307692307691,
            "unit": "ns",
            "range": "± 378.58526323466623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110350.44545454545,
            "unit": "ns",
            "range": "± 4153.430542906366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104256.21428571429,
            "unit": "ns",
            "range": "± 3722.3837663762165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94474.81081081081,
            "unit": "ns",
            "range": "± 3151.6776382484672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3063533.1754385964,
            "unit": "ns",
            "range": "± 132933.39964555865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2738156,
            "unit": "ns",
            "range": "± 112684.54873331467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4959.593406593406,
            "unit": "ns",
            "range": "± 437.64932633894557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26668.25581395349,
            "unit": "ns",
            "range": "± 1764.9883864710173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23014.56842105263,
            "unit": "ns",
            "range": "± 1723.1506747607218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28673.896907216495,
            "unit": "ns",
            "range": "± 5090.61830823079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1258.2164948453608,
            "unit": "ns",
            "range": "± 223.5248041234333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4745.7555555555555,
            "unit": "ns",
            "range": "± 520.8962309287285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 674366.2753623188,
            "unit": "ns",
            "range": "± 32207.138235035844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1262719.3823529412,
            "unit": "ns",
            "range": "± 34430.2029177209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1058851.1014492754,
            "unit": "ns",
            "range": "± 48001.05554603643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9445846.58,
            "unit": "ns",
            "range": "± 1282239.9311628013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2208903.4137931033,
            "unit": "ns",
            "range": "± 64083.32040204559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2292122.659574468,
            "unit": "ns",
            "range": "± 89100.2011243708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2600033.3225806453,
            "unit": "ns",
            "range": "± 79068.62466844317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2297939.85,
            "unit": "ns",
            "range": "± 49968.04469624351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3054344.08,
            "unit": "ns",
            "range": "± 217408.3000802672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3078304.0127604166,
            "unit": "ns",
            "range": "± 34571.11349560526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921898.5182942708,
            "unit": "ns",
            "range": "± 6177.961959476833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614657.8914713542,
            "unit": "ns",
            "range": "± 5251.573427875235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1670426.3950520833,
            "unit": "ns",
            "range": "± 17801.213831544075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467177.0964704241,
            "unit": "ns",
            "range": "± 439.47545983731123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422627.3819486178,
            "unit": "ns",
            "range": "± 975.67715082365"
          }
        ]
      }
    ]
  }
}