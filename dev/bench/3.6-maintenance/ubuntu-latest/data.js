window.BENCHMARK_DATA = {
  "lastUpdate": 1700482066042,
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
          "id": "b13ef3155389100c218a045fbdc3051e23e3c669",
          "message": "Merge pull request #3451 from greymistcube/release/3.6.0\n\n🚀 Release 3.6.0",
          "timestamp": "2023-10-06T18:26:22+09:00",
          "tree_id": "45b24eea1bbbdcc0b75e430f611660d011258ba1",
          "url": "https://github.com/planetarium/libplanet/commit/b13ef3155389100c218a045fbdc3051e23e3c669"
        },
        "date": 1696597786720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50058.58064516129,
            "unit": "ns",
            "range": "± 3605.203559116294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7920333.866666666,
            "unit": "ns",
            "range": "± 78623.85169351479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22247895.92857143,
            "unit": "ns",
            "range": "± 340134.6262895743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55526156.93333333,
            "unit": "ns",
            "range": "± 739373.6199287173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111210094.66666667,
            "unit": "ns",
            "range": "± 1494073.6039903823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228425274.06666666,
            "unit": "ns",
            "range": "± 3315840.6506604124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280342.0909090909,
            "unit": "ns",
            "range": "± 8878.797558522623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270065.28301886795,
            "unit": "ns",
            "range": "± 11264.79670576465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240450.62686567163,
            "unit": "ns",
            "range": "± 11386.514419759389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4465295.533333333,
            "unit": "ns",
            "range": "± 50056.468164701844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4094858.466666667,
            "unit": "ns",
            "range": "± 70584.35485175234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20283.16304347826,
            "unit": "ns",
            "range": "± 1351.612673541702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87101.8125,
            "unit": "ns",
            "range": "± 6235.509309063779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70277,
            "unit": "ns",
            "range": "± 910.669084694425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77365.79591836735,
            "unit": "ns",
            "range": "± 8424.585093897093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5601.208333333333,
            "unit": "ns",
            "range": "± 615.6851197378954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19876.389473684212,
            "unit": "ns",
            "range": "± 1628.0522842690125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1438813.268041237,
            "unit": "ns",
            "range": "± 92591.47385980835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773530.727272727,
            "unit": "ns",
            "range": "± 83794.57920536713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2121822.21875,
            "unit": "ns",
            "range": "± 98109.15894180752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8925976.105263159,
            "unit": "ns",
            "range": "± 196698.02497367343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5010745.815625,
            "unit": "ns",
            "range": "± 42878.53541526369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1588285.7861328125,
            "unit": "ns",
            "range": "± 2554.176286478477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1083754.0457589286,
            "unit": "ns",
            "range": "± 1571.6365694511271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2708373.7625,
            "unit": "ns",
            "range": "± 9651.860455924103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842623.7315150669,
            "unit": "ns",
            "range": "± 2192.4731817750035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753436.8973911831,
            "unit": "ns",
            "range": "± 1175.5553358859681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3522392.5,
            "unit": "ns",
            "range": "± 82477.92975540848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3562896.8666666667,
            "unit": "ns",
            "range": "± 135060.6506884626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4513051.413793104,
            "unit": "ns",
            "range": "± 129434.886744405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4504983.612903226,
            "unit": "ns",
            "range": "± 132468.2487546047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10834653.823529411,
            "unit": "ns",
            "range": "± 237736.51197293785"
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
          "id": "9e8b368b41ed36df78caf7ddb972fdd3405cb944",
          "message": "Merge pull request #3453 from greymistcube/prepare/3.6.1\n\n🔧 Prepare 3.6.1",
          "timestamp": "2023-10-10T14:52:08+09:00",
          "tree_id": "3755ab0ad6784245232eca019359e9709e05e21e",
          "url": "https://github.com/planetarium/libplanet/commit/9e8b368b41ed36df78caf7ddb972fdd3405cb944"
        },
        "date": 1696917918700,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48006.831460674155,
            "unit": "ns",
            "range": "± 2675.7880200213713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7777975.333333333,
            "unit": "ns",
            "range": "± 59028.57500115234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19672930.6,
            "unit": "ns",
            "range": "± 136890.16233138993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50964752.13333333,
            "unit": "ns",
            "range": "± 343769.29462543136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102014058,
            "unit": "ns",
            "range": "± 545050.7772157915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203413615.66666666,
            "unit": "ns",
            "range": "± 898691.5782153731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267886.9666666667,
            "unit": "ns",
            "range": "± 6268.306191954247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258895.25,
            "unit": "ns",
            "range": "± 10736.579530799669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229081.23076923078,
            "unit": "ns",
            "range": "± 6080.771176801129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4205591.571428572,
            "unit": "ns",
            "range": "± 42701.94418869597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3891411.933333333,
            "unit": "ns",
            "range": "± 37541.4653444631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20263.86170212766,
            "unit": "ns",
            "range": "± 1851.053873617305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88397.1884057971,
            "unit": "ns",
            "range": "± 3951.0204574461163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72388.97777777778,
            "unit": "ns",
            "range": "± 2746.1002803056826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78062.87234042553,
            "unit": "ns",
            "range": "± 7247.845534140032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5206.081632653061,
            "unit": "ns",
            "range": "± 537.366462404284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19339.977777777778,
            "unit": "ns",
            "range": "± 1660.4127142138775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1292634,
            "unit": "ns",
            "range": "± 69983.42595597106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2503744.88372093,
            "unit": "ns",
            "range": "± 92739.3770030548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1966338.48,
            "unit": "ns",
            "range": "± 97385.53959383654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8390029.25,
            "unit": "ns",
            "range": "± 297582.2841739614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4999392.736979167,
            "unit": "ns",
            "range": "± 6053.689730567162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1582921.8154947916,
            "unit": "ns",
            "range": "± 3018.2310917977334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068634.6609375,
            "unit": "ns",
            "range": "± 722.601726184545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2539981.04765625,
            "unit": "ns",
            "range": "± 2338.766134045778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808913.2958333333,
            "unit": "ns",
            "range": "± 959.1540772426258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757459.0244140625,
            "unit": "ns",
            "range": "± 1516.0786259220927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3229859.3684210526,
            "unit": "ns",
            "range": "± 111412.28399336114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3411697.6666666665,
            "unit": "ns",
            "range": "± 51930.294353745645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4179870.1428571427,
            "unit": "ns",
            "range": "± 51610.866030706755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3995190.703703704,
            "unit": "ns",
            "range": "± 165511.92328886304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9917471.35,
            "unit": "ns",
            "range": "± 237535.22414371002"
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
          "id": "7f06d408370bd41f1c8166ba076a4ee031adc442",
          "message": "Merge pull request #3495 from greymistcube/refactor/hash-node-caching\n\n✨ ♻️ `HashNode` caching",
          "timestamp": "2023-11-20T17:12:44+09:00",
          "tree_id": "3b29e4f3c11f13950463ba44b5d3b76ea6a30ea0",
          "url": "https://github.com/planetarium/libplanet/commit/7f06d408370bd41f1c8166ba076a4ee031adc442"
        },
        "date": 1700468629649,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205272.1875,
            "unit": "ns",
            "range": "± 12088.309360101863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195673.52,
            "unit": "ns",
            "range": "± 9657.657858250468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161272.4705882353,
            "unit": "ns",
            "range": "± 3013.997534787625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3134357,
            "unit": "ns",
            "range": "± 23973.879374972134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2820145.3571428573,
            "unit": "ns",
            "range": "± 34273.193143996876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15261.183673469388,
            "unit": "ns",
            "range": "± 2464.071734407912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68021.88775510204,
            "unit": "ns",
            "range": "± 8052.925666575777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67133.83,
            "unit": "ns",
            "range": "± 21376.785544209666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70303.54081632652,
            "unit": "ns",
            "range": "± 19012.746179929938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6657.873737373738,
            "unit": "ns",
            "range": "± 1553.6607828875735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12889.67894736842,
            "unit": "ns",
            "range": "± 1981.31473102631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3710506.730729167,
            "unit": "ns",
            "range": "± 47378.68995754799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1168942.1474609375,
            "unit": "ns",
            "range": "± 4669.933112081878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739436.2790876116,
            "unit": "ns",
            "range": "± 1805.8381744405078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935547.0467247595,
            "unit": "ns",
            "range": "± 3476.5144709364936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611411.748835637,
            "unit": "ns",
            "range": "± 1312.9793733698632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571155.2718331473,
            "unit": "ns",
            "range": "± 913.1509665529023"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42002.572916666664,
            "unit": "ns",
            "range": "± 5721.097190951348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2479086.9166666665,
            "unit": "ns",
            "range": "± 79772.97723714824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2532784,
            "unit": "ns",
            "range": "± 59702.273231259795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3202215.695652174,
            "unit": "ns",
            "range": "± 60218.09070328133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3048887.162337662,
            "unit": "ns",
            "range": "± 156197.27693669026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6998110.104166667,
            "unit": "ns",
            "range": "± 275032.4254961345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5807340.2,
            "unit": "ns",
            "range": "± 70940.44262337245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14973669.9,
            "unit": "ns",
            "range": "± 95631.18969681686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37998018,
            "unit": "ns",
            "range": "± 115937.01444716901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76611531.14285715,
            "unit": "ns",
            "range": "± 726388.197249595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153486328.1153846,
            "unit": "ns",
            "range": "± 772077.1392750143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990868.4255319149,
            "unit": "ns",
            "range": "± 114235.60724396585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1864187.7368421052,
            "unit": "ns",
            "range": "± 79652.0281793893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1436758.0625,
            "unit": "ns",
            "range": "± 143973.16997704175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5771361.205479452,
            "unit": "ns",
            "range": "± 287345.352047263"
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
          "id": "06bc830559704f01344052cc9295020489b5a181",
          "message": "Merge pull request #3498 from greymistcube/chore/yarn-build-fix-workaround\n\n🐛 Temporary workaround to `yarn build` fail",
          "timestamp": "2023-11-20T17:54:39+09:00",
          "tree_id": "df46edf8e34f5eb1938dcefa05ebda9b68e761dd",
          "url": "https://github.com/planetarium/libplanet/commit/06bc830559704f01344052cc9295020489b5a181"
        },
        "date": 1700471115430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5617634.9,
            "unit": "ns",
            "range": "± 32958.0816748444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14764276.884615384,
            "unit": "ns",
            "range": "± 126851.19009331266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37341333.21428572,
            "unit": "ns",
            "range": "± 149128.74682915822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75912794.57692307,
            "unit": "ns",
            "range": "± 327762.4205682274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154547678.42857143,
            "unit": "ns",
            "range": "± 868863.3946482978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968678.5306122449,
            "unit": "ns",
            "range": "± 86374.57728820182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1914765.064516129,
            "unit": "ns",
            "range": "± 87068.4651133847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1340353.6555555556,
            "unit": "ns",
            "range": "± 72108.45062694266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5469569.8125,
            "unit": "ns",
            "range": "± 158823.39296119337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2375466.0757575757,
            "unit": "ns",
            "range": "± 69629.95007000862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2509195.470588235,
            "unit": "ns",
            "range": "± 60649.66016467049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3183908.6666666665,
            "unit": "ns",
            "range": "± 81049.60661904195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3005246.6666666665,
            "unit": "ns",
            "range": "± 118434.04976526563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6982942.514285714,
            "unit": "ns",
            "range": "± 226994.76572721067"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39374.32474226804,
            "unit": "ns",
            "range": "± 4974.901749470178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3687817.59375,
            "unit": "ns",
            "range": "± 13440.650894160011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1148911.3326822917,
            "unit": "ns",
            "range": "± 6104.074607045663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766665.2235630581,
            "unit": "ns",
            "range": "± 2589.726901125132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954513.5052083333,
            "unit": "ns",
            "range": "± 4821.868656181655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631543.2165096507,
            "unit": "ns",
            "range": "± 12360.849988743576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580534.1452287947,
            "unit": "ns",
            "range": "± 8932.79968179676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198460.38461538462,
            "unit": "ns",
            "range": "± 8153.434957971784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189827.18604651163,
            "unit": "ns",
            "range": "± 6821.601753867789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174022.04166666666,
            "unit": "ns",
            "range": "± 4205.714574854662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3109227.2,
            "unit": "ns",
            "range": "± 34015.74044510235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2802036.9285714286,
            "unit": "ns",
            "range": "± 48650.315838115086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16299.641304347826,
            "unit": "ns",
            "range": "± 2131.6612032187877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66700.96875,
            "unit": "ns",
            "range": "± 10283.98042583771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54699.114583333336,
            "unit": "ns",
            "range": "± 5914.057354027982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59067.42391304348,
            "unit": "ns",
            "range": "± 12692.454424728792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3200.808510638298,
            "unit": "ns",
            "range": "± 557.8893842762026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11584.736263736264,
            "unit": "ns",
            "range": "± 935.2853377465419"
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
          "id": "83f829b962629a185c33bb1dabd673e5aa53ecc7",
          "message": "Merge pull request #3497 from greymistcube/release/3.6.1\n\n🚀 Release 3.6.1",
          "timestamp": "2023-11-20T18:45:56+09:00",
          "tree_id": "0f121f06ff347e4e00129374b3f23d10cb7186fd",
          "url": "https://github.com/planetarium/libplanet/commit/83f829b962629a185c33bb1dabd673e5aa53ecc7"
        },
        "date": 1700474194972,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5658277.533333333,
            "unit": "ns",
            "range": "± 21413.639804928964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14611722.857142856,
            "unit": "ns",
            "range": "± 88964.15477799268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36795648,
            "unit": "ns",
            "range": "± 132623.6074636287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75066509.6923077,
            "unit": "ns",
            "range": "± 118291.45269797576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152862457.65384614,
            "unit": "ns",
            "range": "± 796473.4102961678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946471.75,
            "unit": "ns",
            "range": "± 67813.8340955517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1850902.3392857143,
            "unit": "ns",
            "range": "± 79521.44496189847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1396630.5257731958,
            "unit": "ns",
            "range": "± 117836.35650253957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5673126.444444444,
            "unit": "ns",
            "range": "± 315040.67782770103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2407108.714285714,
            "unit": "ns",
            "range": "± 30354.33868982659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2480466.8125,
            "unit": "ns",
            "range": "± 75864.84367586682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3113006.6666666665,
            "unit": "ns",
            "range": "± 48304.6164248551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2998058.6071428573,
            "unit": "ns",
            "range": "± 77614.35869559729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7059073.516129033,
            "unit": "ns",
            "range": "± 209807.47404289022"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39738.510416666664,
            "unit": "ns",
            "range": "± 5245.0604401611035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3751844.2240885417,
            "unit": "ns",
            "range": "± 52152.95671002681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1130830.1993815105,
            "unit": "ns",
            "range": "± 2516.256837904755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727522.2667518029,
            "unit": "ns",
            "range": "± 1580.4674382255641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948331.312890625,
            "unit": "ns",
            "range": "± 21454.606248242457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616295.0587565104,
            "unit": "ns",
            "range": "± 3510.4165906884023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571500.9232003348,
            "unit": "ns",
            "range": "± 947.3215058012404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201336.71276595743,
            "unit": "ns",
            "range": "± 7303.724228496066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188639.46721311475,
            "unit": "ns",
            "range": "± 8366.373465580757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163626.65,
            "unit": "ns",
            "range": "± 3696.4586932701727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3181998.2666666666,
            "unit": "ns",
            "range": "± 48510.18632568196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2748058.4615384615,
            "unit": "ns",
            "range": "± 23372.40580476396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15354.731958762886,
            "unit": "ns",
            "range": "± 2633.1343194133046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59370.204545454544,
            "unit": "ns",
            "range": "± 4370.877436725451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62999.28947368421,
            "unit": "ns",
            "range": "± 2005.0073149141315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55844.010204081635,
            "unit": "ns",
            "range": "± 10215.292800497436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3520.9684210526316,
            "unit": "ns",
            "range": "± 557.9937171275886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13634.583333333334,
            "unit": "ns",
            "range": "± 2909.28211679234"
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
          "id": "1da500876fda9bba8003f4a72e6ed4c21c53ada5",
          "message": "Merge pull request #3499 from greymistcube/prepare/3.6.2\n\n🔧 Prepare 3.6.2",
          "timestamp": "2023-11-20T18:57:08+09:00",
          "tree_id": "1a049c226a0684bcc3f69f0003f0d7a1bb370460",
          "url": "https://github.com/planetarium/libplanet/commit/1da500876fda9bba8003f4a72e6ed4c21c53ada5"
        },
        "date": 1700474884836,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6044795.733333333,
            "unit": "ns",
            "range": "± 44968.57991097255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14991955.666666666,
            "unit": "ns",
            "range": "± 87687.87101146777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37869678.75,
            "unit": "ns",
            "range": "± 185931.35454204842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76781421.92307693,
            "unit": "ns",
            "range": "± 227518.65127737753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153326326.92857143,
            "unit": "ns",
            "range": "± 671928.034865166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033717.5,
            "unit": "ns",
            "range": "± 122312.34803184224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1981887.4179104478,
            "unit": "ns",
            "range": "± 93067.90028353676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1481538.8382352942,
            "unit": "ns",
            "range": "± 70929.50893366215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5973706.705263158,
            "unit": "ns",
            "range": "± 404955.1649592953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2479162.4444444445,
            "unit": "ns",
            "range": "± 103579.49424046278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2561387.489361702,
            "unit": "ns",
            "range": "± 97698.31073900571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3203563.603448276,
            "unit": "ns",
            "range": "± 90859.83728026404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3031406.3170731706,
            "unit": "ns",
            "range": "± 108704.98710073954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6658864.636363637,
            "unit": "ns",
            "range": "± 204603.29117065453"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40235.99462365591,
            "unit": "ns",
            "range": "± 5341.971582021282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3604611.224934896,
            "unit": "ns",
            "range": "± 20651.2967821058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1167422.521484375,
            "unit": "ns",
            "range": "± 3591.0184737072645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724979.0698242188,
            "unit": "ns",
            "range": "± 2088.2311740473374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939114.6040039062,
            "unit": "ns",
            "range": "± 9035.84712451035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634992.547014509,
            "unit": "ns",
            "range": "± 1214.3275321877186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582538.2094401042,
            "unit": "ns",
            "range": "± 1510.62997646543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233957.7373737374,
            "unit": "ns",
            "range": "± 26358.68164752611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220322.4375,
            "unit": "ns",
            "range": "± 15298.24256697997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168487.14705882352,
            "unit": "ns",
            "range": "± 5446.589047325458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3129816.714285714,
            "unit": "ns",
            "range": "± 40379.84009031957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2915155.1428571427,
            "unit": "ns",
            "range": "± 36208.3678383393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14301.556701030928,
            "unit": "ns",
            "range": "± 2139.752136974982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75651.63541666667,
            "unit": "ns",
            "range": "± 8695.937098038845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99802.57142857143,
            "unit": "ns",
            "range": "± 1709.8988145630008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85680.86082474227,
            "unit": "ns",
            "range": "± 14611.097973932896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6394.649484536082,
            "unit": "ns",
            "range": "± 992.8987343593706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14282.606382978724,
            "unit": "ns",
            "range": "± 2303.3157514606114"
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
          "id": "a979efb24353156624445e79f7bb50b6ee799f31",
          "message": "Merge pull request #3501 from greymistcube/fix/release\n\n🔧 Fix release",
          "timestamp": "2023-11-20T20:56:40+09:00",
          "tree_id": "69a7248c31c7f108ea18b3dde4f848df24bca099",
          "url": "https://github.com/planetarium/libplanet/commit/a979efb24353156624445e79f7bb50b6ee799f31"
        },
        "date": 1700482042150,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5694824.214285715,
            "unit": "ns",
            "range": "± 31138.31401042914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14897019.566666666,
            "unit": "ns",
            "range": "± 98644.03046051615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36708833.23076923,
            "unit": "ns",
            "range": "± 338375.25865798607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76145273.63333334,
            "unit": "ns",
            "range": "± 960123.5869480454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151691674.65384614,
            "unit": "ns",
            "range": "± 619395.5991639277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974294.5208333334,
            "unit": "ns",
            "range": "± 96441.03566166374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1851271.5897435897,
            "unit": "ns",
            "range": "± 64468.54211846187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1383780.4835164836,
            "unit": "ns",
            "range": "± 100943.2025803909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5469427.6875,
            "unit": "ns",
            "range": "± 165866.886009474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2421990.358974359,
            "unit": "ns",
            "range": "± 82592.69151606422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2518380,
            "unit": "ns",
            "range": "± 54711.36523814977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3319626.6875,
            "unit": "ns",
            "range": "± 88287.82253057053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2910123.367647059,
            "unit": "ns",
            "range": "± 131952.68051695306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6588261.293103448,
            "unit": "ns",
            "range": "± 176146.9632527622"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39369.40425531915,
            "unit": "ns",
            "range": "± 5257.586836201258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3605769.138346354,
            "unit": "ns",
            "range": "± 4880.519507584329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1158156.6181640625,
            "unit": "ns",
            "range": "± 3575.3982190204333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735467.9819661458,
            "unit": "ns",
            "range": "± 12825.289354039705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1891817.96328125,
            "unit": "ns",
            "range": "± 6723.2619510551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620999.4520670573,
            "unit": "ns",
            "range": "± 1029.0203124928503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580278.6982421875,
            "unit": "ns",
            "range": "± 2313.924084300778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199775.88888888888,
            "unit": "ns",
            "range": "± 9101.697994917266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189436.16666666666,
            "unit": "ns",
            "range": "± 7318.59245952748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162802.2142857143,
            "unit": "ns",
            "range": "± 2791.4240487214083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3101024,
            "unit": "ns",
            "range": "± 59254.92704914926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2786207.8,
            "unit": "ns",
            "range": "± 39647.38702469198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14208.474747474747,
            "unit": "ns",
            "range": "± 3080.8674180862104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59334.52222222222,
            "unit": "ns",
            "range": "± 3846.6949478705133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54611.068181818184,
            "unit": "ns",
            "range": "± 6131.8268748297205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74612.74736842106,
            "unit": "ns",
            "range": "± 17119.54724928801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3092.3010752688174,
            "unit": "ns",
            "range": "± 478.2556344118251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13288.917525773197,
            "unit": "ns",
            "range": "± 2542.7853603795347"
          }
        ]
      }
    ]
  }
}