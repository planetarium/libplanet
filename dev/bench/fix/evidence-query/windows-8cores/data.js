window.BENCHMARK_DATA = {
  "lastUpdate": 1735182577031,
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
          "id": "a73925dcf3caaf85703b7ea02ac3f2d1166e45e7",
          "message": "wip",
          "timestamp": "2024-12-10T17:41:03+09:00",
          "tree_id": "363a86ec81a63578daa0784fd34f35c32609b0f2",
          "url": "https://github.com/planetarium/libplanet/commit/a73925dcf3caaf85703b7ea02ac3f2d1166e45e7"
        },
        "date": 1733820696319,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010717.8947368421,
            "unit": "ns",
            "range": "± 78317.1335007611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1740488.7096774194,
            "unit": "ns",
            "range": "± 78780.08632634558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1493743.8775510204,
            "unit": "ns",
            "range": "± 142881.4699205788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6518436.363636363,
            "unit": "ns",
            "range": "± 204435.46019798922"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29792.85714285714,
            "unit": "ns",
            "range": "± 1880.5142666453764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9641846.666666666,
            "unit": "ns",
            "range": "± 141189.37569634555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23958738.46153846,
            "unit": "ns",
            "range": "± 256048.18081258825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59339555.88235294,
            "unit": "ns",
            "range": "± 1163675.564467277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122492420,
            "unit": "ns",
            "range": "± 1600660.9394693358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243629600,
            "unit": "ns",
            "range": "± 4904012.305500466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3280671.5625,
            "unit": "ns",
            "range": "± 19733.287082149058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1084307.3828125,
            "unit": "ns",
            "range": "± 6753.5790235178865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745579.7526041666,
            "unit": "ns",
            "range": "± 3226.472478468671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918919.4411057692,
            "unit": "ns",
            "range": "± 5041.305505904565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622723.6049107143,
            "unit": "ns",
            "range": "± 2600.632807628692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557533.5867745535,
            "unit": "ns",
            "range": "± 2671.7978498073485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2190362.5,
            "unit": "ns",
            "range": "± 41778.25391277141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2322871.4285714286,
            "unit": "ns",
            "range": "± 32302.474984277753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2729568.4210526315,
            "unit": "ns",
            "range": "± 89590.76057955601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2286473.3333333335,
            "unit": "ns",
            "range": "± 16241.105990957754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3030826.6666666665,
            "unit": "ns",
            "range": "± 56018.293780650245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99569.23076923077,
            "unit": "ns",
            "range": "± 10422.770929371607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176087.62886597938,
            "unit": "ns",
            "range": "± 10528.871593266365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152058.57142857142,
            "unit": "ns",
            "range": "± 6644.066609992138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2605033.3333333335,
            "unit": "ns",
            "range": "± 61119.10775963056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2471892.3076923075,
            "unit": "ns",
            "range": "± 34491.79761282532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10810.204081632653,
            "unit": "ns",
            "range": "± 1732.8535429228525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57882.291666666664,
            "unit": "ns",
            "range": "± 7181.071534053464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46428.35820895522,
            "unit": "ns",
            "range": "± 2199.435600478288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54834.408602150535,
            "unit": "ns",
            "range": "± 13037.641946566939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2668.0851063829787,
            "unit": "ns",
            "range": "± 786.0631135509873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10770.652173913044,
            "unit": "ns",
            "range": "± 1283.413892065561"
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
          "id": "06aafad226f4675eaa37563c63a49445551e0060",
          "message": "wip: evidence",
          "timestamp": "2024-12-10T18:21:09+09:00",
          "tree_id": "816a26fa78c41eec5017845f94d0f8e07d5a5f10",
          "url": "https://github.com/planetarium/libplanet/commit/06aafad226f4675eaa37563c63a49445551e0060"
        },
        "date": 1733823058794,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1023459.793814433,
            "unit": "ns",
            "range": "± 124357.28321034135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1794453.7313432836,
            "unit": "ns",
            "range": "± 84928.61588694464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1607092.391304348,
            "unit": "ns",
            "range": "± 108477.48258134432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6777544.444444444,
            "unit": "ns",
            "range": "± 218315.83413564722"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31672.043010752688,
            "unit": "ns",
            "range": "± 3355.085873047257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10417800,
            "unit": "ns",
            "range": "± 171505.4601379876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25746826.666666668,
            "unit": "ns",
            "range": "± 224363.08732137948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64329173.333333336,
            "unit": "ns",
            "range": "± 638409.3374123205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126700640,
            "unit": "ns",
            "range": "± 1035385.8175302852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250262935.7142857,
            "unit": "ns",
            "range": "± 1150472.0533543832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3393827.1223958335,
            "unit": "ns",
            "range": "± 45390.06615800085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1101288.7890625,
            "unit": "ns",
            "range": "± 3276.3267274154427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748590.6803385416,
            "unit": "ns",
            "range": "± 2287.446493098246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981554.1927083333,
            "unit": "ns",
            "range": "± 22816.87886460501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633492.51953125,
            "unit": "ns",
            "range": "± 1918.7186932395036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572722.7278645834,
            "unit": "ns",
            "range": "± 904.1856086292121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2340305.882352941,
            "unit": "ns",
            "range": "± 45849.733785871584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2356755.172413793,
            "unit": "ns",
            "range": "± 102631.72139224141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2905814.814814815,
            "unit": "ns",
            "range": "± 80355.22434647345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2538270.2702702703,
            "unit": "ns",
            "range": "± 80199.836744309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3152714.285714286,
            "unit": "ns",
            "range": "± 55292.208182657036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110190.66666666667,
            "unit": "ns",
            "range": "± 5513.746294326409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185023.07692307694,
            "unit": "ns",
            "range": "± 7019.597647388468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183335.44303797468,
            "unit": "ns",
            "range": "± 9487.18485135422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2747769.230769231,
            "unit": "ns",
            "range": "± 29146.966240513626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2718693.3333333335,
            "unit": "ns",
            "range": "± 50561.03054254145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14797.938144329897,
            "unit": "ns",
            "range": "± 1955.2802112401573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66576,
            "unit": "ns",
            "range": "± 11925.349623233846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53481.63265306123,
            "unit": "ns",
            "range": "± 8149.673915920195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75190.8163265306,
            "unit": "ns",
            "range": "± 17400.018288500247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3358.3333333333335,
            "unit": "ns",
            "range": "± 883.3747093917633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12646.808510638299,
            "unit": "ns",
            "range": "± 1936.0030951532387"
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
          "id": "c655e2e08574bfcfd4fa53ac88af3760e024d06c",
          "message": "test: Add test code for evidence query",
          "timestamp": "2024-12-26T11:28:57+09:00",
          "tree_id": "b1b16f957f28dc3a3de7787113cfe5f954b6ff6b",
          "url": "https://github.com/planetarium/libplanet/commit/c655e2e08574bfcfd4fa53ac88af3760e024d06c"
        },
        "date": 1735180687575,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971245.7446808511,
            "unit": "ns",
            "range": "± 95818.86547907752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1741728,
            "unit": "ns",
            "range": "± 63744.08668853215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1483706.25,
            "unit": "ns",
            "range": "± 101006.52799383028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6634217.647058823,
            "unit": "ns",
            "range": "± 268468.7584847685"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31904,
            "unit": "ns",
            "range": "± 4838.563940892071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9652628.57142857,
            "unit": "ns",
            "range": "± 68946.62850653092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23281693.333333332,
            "unit": "ns",
            "range": "± 206082.99807416936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59778738.461538464,
            "unit": "ns",
            "range": "± 303268.7162085289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119213706.66666667,
            "unit": "ns",
            "range": "± 1374051.7324772782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236810846.66666666,
            "unit": "ns",
            "range": "± 1257613.8334541484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3295640.3125,
            "unit": "ns",
            "range": "± 7230.952808223344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071470.8463541667,
            "unit": "ns",
            "range": "± 2020.8049068708203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749498.80859375,
            "unit": "ns",
            "range": "± 1098.0576174079156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949202.1223958333,
            "unit": "ns",
            "range": "± 2663.568503472683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622853.61328125,
            "unit": "ns",
            "range": "± 1433.984022522345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556339.0169270834,
            "unit": "ns",
            "range": "± 1614.2953772964977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2219250,
            "unit": "ns",
            "range": "± 45848.372220768295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2320900,
            "unit": "ns",
            "range": "± 44580.68527961409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2710957.1428571427,
            "unit": "ns",
            "range": "± 62520.48121558703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2293645.3488372094,
            "unit": "ns",
            "range": "± 84354.37988879436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2990538.4615384615,
            "unit": "ns",
            "range": "± 44305.95404798957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93731.86813186813,
            "unit": "ns",
            "range": "± 8308.347597726024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165282.71604938273,
            "unit": "ns",
            "range": "± 7598.170670027372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152661.36363636365,
            "unit": "ns",
            "range": "± 5488.305364287796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2596417.6470588236,
            "unit": "ns",
            "range": "± 52851.76481554469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2519560,
            "unit": "ns",
            "range": "± 40356.07229932779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10932.65306122449,
            "unit": "ns",
            "range": "± 1722.906649151823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52565.95744680851,
            "unit": "ns",
            "range": "± 5032.551100467329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44204,
            "unit": "ns",
            "range": "± 1789.9903089465174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55098.97959183674,
            "unit": "ns",
            "range": "± 11894.601520849088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2261.855670103093,
            "unit": "ns",
            "range": "± 407.5954129017606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10256.842105263158,
            "unit": "ns",
            "range": "± 1436.7999780525095"
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
          "id": "344a3cca1fa970db5a68907dfd7f3d40d68df274",
          "message": "chore: Changes",
          "timestamp": "2024-12-26T11:59:27+09:00",
          "tree_id": "7b9007158a6b3706a199a411ccf87c03427f47e7",
          "url": "https://github.com/planetarium/libplanet/commit/344a3cca1fa970db5a68907dfd7f3d40d68df274"
        },
        "date": 1735182507886,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963243.0107526882,
            "unit": "ns",
            "range": "± 85220.2471321905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1758208.163265306,
            "unit": "ns",
            "range": "± 66290.13198538269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1494328.5714285714,
            "unit": "ns",
            "range": "± 124924.58105745622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6532868.75,
            "unit": "ns",
            "range": "± 178606.16511683445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30775.25773195876,
            "unit": "ns",
            "range": "± 3603.7894097693384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9646530.76923077,
            "unit": "ns",
            "range": "± 83547.0564474036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23426820,
            "unit": "ns",
            "range": "± 277649.59725730354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58848684.615384616,
            "unit": "ns",
            "range": "± 280458.08018951735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119346840,
            "unit": "ns",
            "range": "± 1703836.9937123847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238706578.57142857,
            "unit": "ns",
            "range": "± 1724209.7481627173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3258720.372596154,
            "unit": "ns",
            "range": "± 6008.254630861024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050392.3549107143,
            "unit": "ns",
            "range": "± 2831.9825808744345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 726569.2522321428,
            "unit": "ns",
            "range": "± 1185.228686441048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958384.6354166667,
            "unit": "ns",
            "range": "± 4459.973432293551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621784.1471354166,
            "unit": "ns",
            "range": "± 975.9689390810888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577418.06640625,
            "unit": "ns",
            "range": "± 882.307959464376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2168212,
            "unit": "ns",
            "range": "± 51489.38660863356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2272520,
            "unit": "ns",
            "range": "± 66215.24082601421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2732415.3846153845,
            "unit": "ns",
            "range": "± 30348.554225691605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2309795.744680851,
            "unit": "ns",
            "range": "± 86179.10055693875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2953142.8571428573,
            "unit": "ns",
            "range": "± 34983.396375681164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94454.44444444444,
            "unit": "ns",
            "range": "± 7440.870450335543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164310.52631578947,
            "unit": "ns",
            "range": "± 6805.504185440276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144209.375,
            "unit": "ns",
            "range": "± 4004.784185317324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2559600,
            "unit": "ns",
            "range": "± 27189.39272810404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2496364.285714286,
            "unit": "ns",
            "range": "± 41819.82612521072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10295.652173913044,
            "unit": "ns",
            "range": "± 1607.667961144939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51454.34782608696,
            "unit": "ns",
            "range": "± 4232.304156259816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44022.22222222222,
            "unit": "ns",
            "range": "± 1849.4942364921308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55351.51515151515,
            "unit": "ns",
            "range": "± 12725.928566708686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2273.684210526316,
            "unit": "ns",
            "range": "± 381.2662347616386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10305.376344086022,
            "unit": "ns",
            "range": "± 1369.8909502297154"
          }
        ]
      }
    ]
  }
}