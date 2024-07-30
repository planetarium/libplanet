window.BENCHMARK_DATA = {
  "lastUpdate": 1722313766496,
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
          "id": "513f6a325917eadcdceb8080eb3d89459e4ab67f",
          "message": "chore: Remove explorer mutation.",
          "timestamp": "2024-07-30T12:37:13+09:00",
          "tree_id": "ef65c932dda86ecaf60ea63bfcb0eb63809425ec",
          "url": "https://github.com/planetarium/libplanet/commit/513f6a325917eadcdceb8080eb3d89459e4ab67f"
        },
        "date": 1722311354339,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014101.2631578947,
            "unit": "ns",
            "range": "± 49259.897147508935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1934042.25,
            "unit": "ns",
            "range": "± 71487.77588183811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1673595.8266666667,
            "unit": "ns",
            "range": "± 84488.36010592505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8297121.352941177,
            "unit": "ns",
            "range": "± 169821.34527494668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200561.83582089553,
            "unit": "ns",
            "range": "± 9533.952655127492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193780.5,
            "unit": "ns",
            "range": "± 8328.043906529967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165053.53846153847,
            "unit": "ns",
            "range": "± 2182.805366777068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3058375.9,
            "unit": "ns",
            "range": "± 44987.77728418496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2798335.6,
            "unit": "ns",
            "range": "± 30968.558557257482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12461.788732394367,
            "unit": "ns",
            "range": "± 622.6484886696956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59669.19565217391,
            "unit": "ns",
            "range": "± 3355.8689175932964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50203,
            "unit": "ns",
            "range": "± 296.58837918345125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52613.31958762887,
            "unit": "ns",
            "range": "± 6933.951722542481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3478.5157894736844,
            "unit": "ns",
            "range": "± 393.13312842208285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11907.1797752809,
            "unit": "ns",
            "range": "± 784.4601293796343"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32337.071428571428,
            "unit": "ns",
            "range": "± 277.45920401044526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10241603.966666667,
            "unit": "ns",
            "range": "± 55255.549771515085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27332419.42857143,
            "unit": "ns",
            "range": "± 165217.62919472388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69212271.4,
            "unit": "ns",
            "range": "± 465450.9345853761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137927989.2857143,
            "unit": "ns",
            "range": "± 631342.8407594559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288363624.53333336,
            "unit": "ns",
            "range": "± 1397929.1484477962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3713738.984675481,
            "unit": "ns",
            "range": "± 5225.9324789853235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202699.842998798,
            "unit": "ns",
            "range": "± 1288.850551449072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774347.7038411458,
            "unit": "ns",
            "range": "± 1600.8531256086965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967970.5650111607,
            "unit": "ns",
            "range": "± 1849.674645322161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608907.3109654018,
            "unit": "ns",
            "range": "± 1539.2673900902037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578548.6741768973,
            "unit": "ns",
            "range": "± 1097.3692013461236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2375243.4,
            "unit": "ns",
            "range": "± 36956.13705036978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2543742.1333333333,
            "unit": "ns",
            "range": "± 43809.05323734332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3029365.8,
            "unit": "ns",
            "range": "± 21925.90258510305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2609847.7333333334,
            "unit": "ns",
            "range": "± 77030.53630639329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3204541.7,
            "unit": "ns",
            "range": "± 39449.2702887428"
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
          "id": "f83af1b319a8c75a26608d9a301b4c5aaa54d6fd",
          "message": "changelog",
          "timestamp": "2024-07-30T12:42:10+09:00",
          "tree_id": "1d4e45658b787684c6b41c591cd1189a3b5dc3ee",
          "url": "https://github.com/planetarium/libplanet/commit/f83af1b319a8c75a26608d9a301b4c5aaa54d6fd"
        },
        "date": 1722311463079,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026716.7954545454,
            "unit": "ns",
            "range": "± 73016.4250048331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2007645.656716418,
            "unit": "ns",
            "range": "± 94663.55176264921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1764850.7157894736,
            "unit": "ns",
            "range": "± 137094.04006395268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8739693.323529411,
            "unit": "ns",
            "range": "± 418483.11718926724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209669.98453608248,
            "unit": "ns",
            "range": "± 16471.6731821339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194187.1,
            "unit": "ns",
            "range": "± 8141.8988409088715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172644.75,
            "unit": "ns",
            "range": "± 8403.42781962922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3174406.3571428573,
            "unit": "ns",
            "range": "± 50438.57735725876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2802297.769230769,
            "unit": "ns",
            "range": "± 35127.70153111322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16605.11224489796,
            "unit": "ns",
            "range": "± 4115.5811577007835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60793.54651162791,
            "unit": "ns",
            "range": "± 3399.9095962270967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51198.28571428572,
            "unit": "ns",
            "range": "± 795.3886499036835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60345.408602150535,
            "unit": "ns",
            "range": "± 11117.361344582274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3685.5652173913045,
            "unit": "ns",
            "range": "± 427.75439200056894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12194.1,
            "unit": "ns",
            "range": "± 751.9403861369581"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33065.08823529412,
            "unit": "ns",
            "range": "± 672.0971896630288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10468125.307692308,
            "unit": "ns",
            "range": "± 61073.79482148981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26772027.6,
            "unit": "ns",
            "range": "± 114932.83374948046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68991316.85714285,
            "unit": "ns",
            "range": "± 241344.70968556323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142512772.85714287,
            "unit": "ns",
            "range": "± 2187407.7426142804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291459773.64285713,
            "unit": "ns",
            "range": "± 1765734.414680741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3658989.8016826925,
            "unit": "ns",
            "range": "± 14878.460094439126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208329.5862379808,
            "unit": "ns",
            "range": "± 1258.6046724644136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759648.8331473215,
            "unit": "ns",
            "range": "± 3660.9021855120413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964873.6177083333,
            "unit": "ns",
            "range": "± 8867.83306810939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641289.9576590402,
            "unit": "ns",
            "range": "± 2925.8330239456077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587537.7360839844,
            "unit": "ns",
            "range": "± 697.8977683353307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2437931.533333333,
            "unit": "ns",
            "range": "± 37312.037500108774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2524578.066666667,
            "unit": "ns",
            "range": "± 35328.12249563606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2990231.1333333333,
            "unit": "ns",
            "range": "± 28485.980180399187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2638315.0416666665,
            "unit": "ns",
            "range": "± 68271.89352140593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3281912.777777778,
            "unit": "ns",
            "range": "± 66578.91057857634"
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
          "id": "0e92909236c8f883b849b0179b3e9491d3f8f1f1",
          "message": "changelog",
          "timestamp": "2024-07-30T13:18:29+09:00",
          "tree_id": "f55f248759908343516491ff0c824e9e37d8b82e",
          "url": "https://github.com/planetarium/libplanet/commit/0e92909236c8f883b849b0179b3e9491d3f8f1f1"
        },
        "date": 1722313740348,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1021958.5,
            "unit": "ns",
            "range": "± 51464.86329822702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1911456.972972973,
            "unit": "ns",
            "range": "± 63849.442051197664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1679725.9722222222,
            "unit": "ns",
            "range": "± 82670.8573707915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8152315.206896552,
            "unit": "ns",
            "range": "± 232370.85342360134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202140.61538461538,
            "unit": "ns",
            "range": "± 7076.324248823956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190912.6219512195,
            "unit": "ns",
            "range": "± 6508.577410598732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167168.38888888888,
            "unit": "ns",
            "range": "± 3473.2048454838955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3063299.033333333,
            "unit": "ns",
            "range": "± 49221.638341088896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2853085.904761905,
            "unit": "ns",
            "range": "± 66151.2133826015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12160.891304347826,
            "unit": "ns",
            "range": "± 588.464782728337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62126.583333333336,
            "unit": "ns",
            "range": "± 5377.825116388235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50035.7,
            "unit": "ns",
            "range": "± 932.9213869805506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49889.84210526316,
            "unit": "ns",
            "range": "± 7689.888884065368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2655.31914893617,
            "unit": "ns",
            "range": "± 234.64473089524583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14574.654639175258,
            "unit": "ns",
            "range": "± 1888.614413510858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32896.729508196724,
            "unit": "ns",
            "range": "± 397.5867365931038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10649393.076923076,
            "unit": "ns",
            "range": "± 40750.711827037536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26836263.5,
            "unit": "ns",
            "range": "± 82943.59776169494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69518874.33333333,
            "unit": "ns",
            "range": "± 453349.76187875494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137389017.73333332,
            "unit": "ns",
            "range": "± 642775.0028101887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284071302.85714287,
            "unit": "ns",
            "range": "± 672776.26354999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3790213.90625,
            "unit": "ns",
            "range": "± 4541.481833758496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203161.3486979166,
            "unit": "ns",
            "range": "± 1829.5196549609866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762791.9703125,
            "unit": "ns",
            "range": "± 1382.4615108258486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954030.50703125,
            "unit": "ns",
            "range": "± 4472.776829143964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618695.1778041294,
            "unit": "ns",
            "range": "± 1037.2163828618404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572045.4067758414,
            "unit": "ns",
            "range": "± 373.2347281680767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2472632.3333333335,
            "unit": "ns",
            "range": "± 44124.33368443356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2435832.8846153845,
            "unit": "ns",
            "range": "± 17569.454305405834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3039753.75,
            "unit": "ns",
            "range": "± 21791.666552001854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2563786.3125,
            "unit": "ns",
            "range": "± 49749.24955778228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3271191.1333333333,
            "unit": "ns",
            "range": "± 48580.28424145903"
          }
        ]
      }
    ]
  }
}