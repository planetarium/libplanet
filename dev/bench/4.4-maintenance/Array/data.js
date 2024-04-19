window.BENCHMARK_DATA = {
  "lastUpdate": 1713504063354,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
        "date": 1713347170574,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5757125.357142857,
            "unit": "ns",
            "range": "± 67367.9188288029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14356016.23076923,
            "unit": "ns",
            "range": "± 24188.87314501527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36139176.538461536,
            "unit": "ns",
            "range": "± 225911.70571730577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72684523.5,
            "unit": "ns",
            "range": "± 216136.29557393427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145865791.2,
            "unit": "ns",
            "range": "± 262475.23301561235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86048.43589743589,
            "unit": "ns",
            "range": "± 2986.55822676126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113011.06363636363,
            "unit": "ns",
            "range": "± 4799.415194944902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105589.74193548386,
            "unit": "ns",
            "range": "± 4381.302740373319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92737.5,
            "unit": "ns",
            "range": "± 2523.003483945276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3150811.9565217393,
            "unit": "ns",
            "range": "± 71559.35268615598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2734848.56185567,
            "unit": "ns",
            "range": "± 158271.72176209436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4999.886363636364,
            "unit": "ns",
            "range": "± 499.16959621848343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26997.436781609194,
            "unit": "ns",
            "range": "± 1759.6189380100102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22263.688679245282,
            "unit": "ns",
            "range": "± 780.5485757466637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28914.558139534885,
            "unit": "ns",
            "range": "± 3553.1951672515866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1302.0526315789473,
            "unit": "ns",
            "range": "± 220.10057509669244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4886.236263736264,
            "unit": "ns",
            "range": "± 647.917430184585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1129333.8469387756,
            "unit": "ns",
            "range": "± 134197.6353738201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1831186.0142857144,
            "unit": "ns",
            "range": "± 84320.87971646889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1571037.9797979798,
            "unit": "ns",
            "range": "± 160012.24043618585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10711490.136363637,
            "unit": "ns",
            "range": "± 2003504.2406389294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2679771.25,
            "unit": "ns",
            "range": "± 24096.68718884969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2828094.066666667,
            "unit": "ns",
            "range": "± 38319.232290749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3319855.5384615385,
            "unit": "ns",
            "range": "± 155902.54766881897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3351660.15625,
            "unit": "ns",
            "range": "± 155206.9228374611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10745622.6875,
            "unit": "ns",
            "range": "± 702587.4450905565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3046441.210546875,
            "unit": "ns",
            "range": "± 30966.35270115572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923017.7356770834,
            "unit": "ns",
            "range": "± 4093.314295745654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615774.3982421875,
            "unit": "ns",
            "range": "± 4964.062819658868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630288.655423678,
            "unit": "ns",
            "range": "± 2852.062547151614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460176.6180245536,
            "unit": "ns",
            "range": "± 716.9085669489348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 431264.9626813616,
            "unit": "ns",
            "range": "± 901.73508293093"
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
          "id": "da8689a5319160fa420fb426fca8f9afb012a131",
          "message": "Merge pull request #3749 from greymistcube/prepare/4.4.1\n\n🔧 Prepare 4.4.1",
          "timestamp": "2024-04-18T12:45:53+09:00",
          "tree_id": "489eff0480f42ea9f76802245a90e0bab67cdb6c",
          "url": "https://github.com/planetarium/libplanet/commit/da8689a5319160fa420fb426fca8f9afb012a131"
        },
        "date": 1713412459166,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5714985.5,
            "unit": "ns",
            "range": "± 70161.51183437124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14525980.538461538,
            "unit": "ns",
            "range": "± 63878.98207889585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35925961.692307696,
            "unit": "ns",
            "range": "± 238262.6720975489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72549752.46666667,
            "unit": "ns",
            "range": "± 338689.4710795182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145418485.73333332,
            "unit": "ns",
            "range": "± 352097.3675696756"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 88866.35849056604,
            "unit": "ns",
            "range": "± 3657.3481518209946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110457.81132075471,
            "unit": "ns",
            "range": "± 4483.36999389712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105353.55072463768,
            "unit": "ns",
            "range": "± 5082.017198897419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92429.53488372093,
            "unit": "ns",
            "range": "± 3296.564520172313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3070680.547368421,
            "unit": "ns",
            "range": "± 175119.88940429868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2754011.414893617,
            "unit": "ns",
            "range": "± 156708.63743597886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5071.9885057471265,
            "unit": "ns",
            "range": "± 503.9489521548525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27980.197802197803,
            "unit": "ns",
            "range": "± 2694.7951776208242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22880.54651162791,
            "unit": "ns",
            "range": "± 1203.401010440354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30000.82978723404,
            "unit": "ns",
            "range": "± 5546.5353258817095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1321.6521739130435,
            "unit": "ns",
            "range": "± 244.64629928421957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5115.563157894737,
            "unit": "ns",
            "range": "± 737.7455135594901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1151890.581632653,
            "unit": "ns",
            "range": "± 118700.09078535716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1819464.5714285714,
            "unit": "ns",
            "range": "± 92303.0774782653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1537878.7272727273,
            "unit": "ns",
            "range": "± 152729.92794056766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10630611.56,
            "unit": "ns",
            "range": "± 2055326.2122281287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2701972.4166666665,
            "unit": "ns",
            "range": "± 30107.53091370491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2699607.5,
            "unit": "ns",
            "range": "± 115992.5541033483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3285902.1774193547,
            "unit": "ns",
            "range": "± 139812.08026719344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3378142.9482758623,
            "unit": "ns",
            "range": "± 147040.3567465286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10880443.515151516,
            "unit": "ns",
            "range": "± 753186.1510551375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3046890.709114583,
            "unit": "ns",
            "range": "± 29388.078841943097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922377.0805338542,
            "unit": "ns",
            "range": "± 3526.4851456561632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614886.4505208334,
            "unit": "ns",
            "range": "± 4504.414901219149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1659752.1778846155,
            "unit": "ns",
            "range": "± 10037.855462056494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457901.295828683,
            "unit": "ns",
            "range": "± 408.09361147244323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422948.8498046875,
            "unit": "ns",
            "range": "± 1317.5151891449354"
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
          "id": "90e70576ece55b54c5bef2dfc9125de483ca9f70",
          "message": "Merge pull request #3757 from greymistcube/port/4.3.1-to-4.4\n\n🔀 Port 4.3.1 to 4.4",
          "timestamp": "2024-04-18T15:51:15+09:00",
          "tree_id": "3b40adf1bdb746bb2eda7f4b514d5412ad17a0d3",
          "url": "https://github.com/planetarium/libplanet/commit/90e70576ece55b54c5bef2dfc9125de483ca9f70"
        },
        "date": 1713426187710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5749467.692307692,
            "unit": "ns",
            "range": "± 54667.987526803736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14390146,
            "unit": "ns",
            "range": "± 72801.15414981726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35609308.666666664,
            "unit": "ns",
            "range": "± 61677.669467723055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72707925.92307693,
            "unit": "ns",
            "range": "± 296699.28272058605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146098318.16666666,
            "unit": "ns",
            "range": "± 435825.1654832747"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18430.244680851065,
            "unit": "ns",
            "range": "± 1637.1456322538813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110316.03125,
            "unit": "ns",
            "range": "± 5113.443563624519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105224.7076923077,
            "unit": "ns",
            "range": "± 4855.118522378846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90786.57142857143,
            "unit": "ns",
            "range": "± 2968.538125920234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3088612.106060606,
            "unit": "ns",
            "range": "± 144793.00212033506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2820342.75,
            "unit": "ns",
            "range": "± 87184.97511501882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5418.628865979382,
            "unit": "ns",
            "range": "± 926.4177234513286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26441.602272727272,
            "unit": "ns",
            "range": "± 1566.4777279548803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22779.833333333332,
            "unit": "ns",
            "range": "± 1449.0206087691372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30528.252747252747,
            "unit": "ns",
            "range": "± 4406.308935538796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1284.1979166666667,
            "unit": "ns",
            "range": "± 291.3304370891607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4766.311111111111,
            "unit": "ns",
            "range": "± 628.6352195041245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 694679.7040816327,
            "unit": "ns",
            "range": "± 62152.355911789506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1241358.152173913,
            "unit": "ns",
            "range": "± 41322.20492286731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1048990.9352941175,
            "unit": "ns",
            "range": "± 56661.46533547315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10658571.95,
            "unit": "ns",
            "range": "± 2428714.915199923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2244646.352112676,
            "unit": "ns",
            "range": "± 108904.12508914154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2317533.3815789474,
            "unit": "ns",
            "range": "± 117490.20494094727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2685164.4545454546,
            "unit": "ns",
            "range": "± 97360.06081370867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3005691.625,
            "unit": "ns",
            "range": "± 128462.09780158539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10401207.768041236,
            "unit": "ns",
            "range": "± 993917.7213175092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3037014.341337316,
            "unit": "ns",
            "range": "± 60577.41122842202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 931552.9029296875,
            "unit": "ns",
            "range": "± 5470.95305471159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614407.3218098958,
            "unit": "ns",
            "range": "± 5914.376886170469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1623537.230747768,
            "unit": "ns",
            "range": "± 8765.578542471807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 455431.569405692,
            "unit": "ns",
            "range": "± 695.7449267627652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 416732.98193359375,
            "unit": "ns",
            "range": "± 1327.0218403154101"
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
          "id": "01ff04787bdd1c89b75d7d821718b9a2bd40f994",
          "message": "Merge pull request #3758 from greymistcube/release/4.4.1\n\n🚀 Release 4.4.1",
          "timestamp": "2024-04-18T16:05:22+09:00",
          "tree_id": "6ffc1104a7fa6713ef80a0c59ec9b8066316b36b",
          "url": "https://github.com/planetarium/libplanet/commit/01ff04787bdd1c89b75d7d821718b9a2bd40f994"
        },
        "date": 1713427844781,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5706735.571428572,
            "unit": "ns",
            "range": "± 55310.534145807214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14252725.92857143,
            "unit": "ns",
            "range": "± 42794.78745660555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36377243.333333336,
            "unit": "ns",
            "range": "± 150430.08812693952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72591997.5,
            "unit": "ns",
            "range": "± 183584.06830020368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145841677.4,
            "unit": "ns",
            "range": "± 404755.86553427484"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18181.21505376344,
            "unit": "ns",
            "range": "± 1623.5517884474523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110277.85135135135,
            "unit": "ns",
            "range": "± 4577.117791686243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104870.89090909091,
            "unit": "ns",
            "range": "± 4358.264735694392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91061,
            "unit": "ns",
            "range": "± 2739.1881302501342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3153529.6428571427,
            "unit": "ns",
            "range": "± 51960.81870447732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2769115.470588235,
            "unit": "ns",
            "range": "± 131154.78408894216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4946.829545454545,
            "unit": "ns",
            "range": "± 538.6816435892548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26604.280898876405,
            "unit": "ns",
            "range": "± 1816.7239120108236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23515.371134020617,
            "unit": "ns",
            "range": "± 2374.0133973557827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28912.208333333332,
            "unit": "ns",
            "range": "± 5337.957089840875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1285.9347826086957,
            "unit": "ns",
            "range": "± 193.89409165024932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4795.120879120879,
            "unit": "ns",
            "range": "± 637.7840776237124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 692784.275510204,
            "unit": "ns",
            "range": "± 68842.61281792381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1254966.4186046512,
            "unit": "ns",
            "range": "± 46520.11572900099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1063026.3010752688,
            "unit": "ns",
            "range": "± 60017.30347027556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10775089.5,
            "unit": "ns",
            "range": "± 2548715.883973896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2214471.55,
            "unit": "ns",
            "range": "± 78279.11568554064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2320916,
            "unit": "ns",
            "range": "± 79699.27153104317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2696175.1904761903,
            "unit": "ns",
            "range": "± 97453.17697889538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3020191.5,
            "unit": "ns",
            "range": "± 130996.49649034746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10367687.5,
            "unit": "ns",
            "range": "± 904138.7160529052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3053064.7327008927,
            "unit": "ns",
            "range": "± 35618.57164732345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923513.0401692708,
            "unit": "ns",
            "range": "± 4716.507971485476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617193.9041666667,
            "unit": "ns",
            "range": "± 5505.508559391898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1648534.9362444195,
            "unit": "ns",
            "range": "± 6862.529233953774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468660.93313802086,
            "unit": "ns",
            "range": "± 881.3110080177847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426030.7383138021,
            "unit": "ns",
            "range": "± 2056.2170204865656"
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
          "id": "980e86faec3eca09b3c0b2b239b354038e8402df",
          "message": "Merge pull request #3759 from greymistcube/prepare/4.4.2\n\n🔧 Prepare 4.4.2",
          "timestamp": "2024-04-19T14:11:39+09:00",
          "tree_id": "dbde54531bdc4ccc2cbd9936f214caa5716598bd",
          "url": "https://github.com/planetarium/libplanet/commit/980e86faec3eca09b3c0b2b239b354038e8402df"
        },
        "date": 1713504029408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5699798.566666666,
            "unit": "ns",
            "range": "± 75635.48260993708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14265406.75,
            "unit": "ns",
            "range": "± 29360.17931306712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36067922.64285714,
            "unit": "ns",
            "range": "± 141506.7619970901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72266113.28571428,
            "unit": "ns",
            "range": "± 262032.12852256483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 144945597.6,
            "unit": "ns",
            "range": "± 439184.6379211953"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18468.505376344085,
            "unit": "ns",
            "range": "± 1574.3364069516363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112062.59550561798,
            "unit": "ns",
            "range": "± 7817.959191850143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104673.4827586207,
            "unit": "ns",
            "range": "± 4545.373029068322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90392.08,
            "unit": "ns",
            "range": "± 2342.863150790787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3173733.3947368423,
            "unit": "ns",
            "range": "± 67371.02993283187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2838347.2818181817,
            "unit": "ns",
            "range": "± 119743.39955345422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4966.782608695652,
            "unit": "ns",
            "range": "± 766.0148884744658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26534.977528089887,
            "unit": "ns",
            "range": "± 1706.0214480795535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23510.20202020202,
            "unit": "ns",
            "range": "± 1688.907417502166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30610.905263157896,
            "unit": "ns",
            "range": "± 5005.0389844246265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1066.8969072164948,
            "unit": "ns",
            "range": "± 312.2290320066907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4863.827586206897,
            "unit": "ns",
            "range": "± 565.8914598634896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676044.6428571428,
            "unit": "ns",
            "range": "± 55559.001599952324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1238527.142857143,
            "unit": "ns",
            "range": "± 35493.425471241004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1064921.2584269664,
            "unit": "ns",
            "range": "± 58682.417570521866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10794082.94,
            "unit": "ns",
            "range": "± 2282810.44781729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2219798.3484848486,
            "unit": "ns",
            "range": "± 104094.61686805643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291644.933333333,
            "unit": "ns",
            "range": "± 42703.350862945284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2688505.0285714287,
            "unit": "ns",
            "range": "± 88218.26600089713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3057575.772727273,
            "unit": "ns",
            "range": "± 142525.79979849752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10375964.680851065,
            "unit": "ns",
            "range": "± 919775.2557647212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3033168.2299479167,
            "unit": "ns",
            "range": "± 53113.4065655524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 929557.4114583334,
            "unit": "ns",
            "range": "± 8109.482075478581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614846.4520833333,
            "unit": "ns",
            "range": "± 5162.050031841141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1640384.90703125,
            "unit": "ns",
            "range": "± 13768.749558259202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465556.1601938101,
            "unit": "ns",
            "range": "± 452.9814458554316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420802.12259114586,
            "unit": "ns",
            "range": "± 1369.0520468492812"
          }
        ]
      }
    ]
  }
}