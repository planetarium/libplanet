window.BENCHMARK_DATA = {
  "lastUpdate": 1700540309334,
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
          "id": "1a27f4c51533ea4fb42c312f89fa912ad45c8a5d",
          "message": "Merge pull request #3502 from greymistcube/revert/prepare/3.6.1\n\n⏪ Revert \"Prepare 3.6.2\"",
          "timestamp": "2023-11-20T21:07:48+09:00",
          "tree_id": "05387f165cf02d173e9e04590549dee77618644e",
          "url": "https://github.com/planetarium/libplanet/commit/1a27f4c51533ea4fb42c312f89fa912ad45c8a5d"
        },
        "date": 1700482743621,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237561.03773584907,
            "unit": "ns",
            "range": "± 8021.682168114176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235303.39784946237,
            "unit": "ns",
            "range": "± 15207.26449198296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187290.99462365592,
            "unit": "ns",
            "range": "± 13775.69383924774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3250099.7333333334,
            "unit": "ns",
            "range": "± 48489.277229192885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2907056.6428571427,
            "unit": "ns",
            "range": "± 42344.33363392437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24647.885416666668,
            "unit": "ns",
            "range": "± 4132.08648676439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94729.625,
            "unit": "ns",
            "range": "± 12476.011661331686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91260.44444444444,
            "unit": "ns",
            "range": "± 13189.505079002205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99504.64583333333,
            "unit": "ns",
            "range": "± 12449.99748888511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6939.102040816327,
            "unit": "ns",
            "range": "± 824.6663741511387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21275.385416666668,
            "unit": "ns",
            "range": "± 3899.2016439800427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3702040.311104911,
            "unit": "ns",
            "range": "± 24578.551966552866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1139427.259014423,
            "unit": "ns",
            "range": "± 3512.7856673400324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733774.6338704427,
            "unit": "ns",
            "range": "± 1285.0663875167465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957172.9424479166,
            "unit": "ns",
            "range": "± 23872.951066731035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626021.5401204427,
            "unit": "ns",
            "range": "± 966.598604863985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571192.4138532366,
            "unit": "ns",
            "range": "± 1210.223187698153"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48946.93298969072,
            "unit": "ns",
            "range": "± 7374.940080134007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2658283.1,
            "unit": "ns",
            "range": "± 38378.02683046641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2676512.4782608696,
            "unit": "ns",
            "range": "± 128698.14765722254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3275669.285714286,
            "unit": "ns",
            "range": "± 38058.155564222354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3131038.927536232,
            "unit": "ns",
            "range": "± 137146.62616138448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6841784.9375,
            "unit": "ns",
            "range": "± 127045.9166744941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6035327.571428572,
            "unit": "ns",
            "range": "± 26719.99990705402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15666854.966666667,
            "unit": "ns",
            "range": "± 82898.72319098309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38254077.583333336,
            "unit": "ns",
            "range": "± 187428.48693081381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77929011.23333333,
            "unit": "ns",
            "range": "± 284454.88625702186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155470903.53333333,
            "unit": "ns",
            "range": "± 1470586.3423037312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1101118.3789473684,
            "unit": "ns",
            "range": "± 120986.65353913857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2012746.606060606,
            "unit": "ns",
            "range": "± 63722.382972419604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1613175.1958762887,
            "unit": "ns",
            "range": "± 167142.24904059013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5806253.333333333,
            "unit": "ns",
            "range": "± 203273.97007116093"
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
          "id": "1f66f7ca4ef89f57045b849e6a63e92a61deec7c",
          "message": "Merge pull request #3504 from greymistcube/prepare/3.6.2\n\n🔧 Prepare 3.6.2",
          "timestamp": "2023-11-20T23:22:43+09:00",
          "tree_id": "69a7248c31c7f108ea18b3dde4f848df24bca099",
          "url": "https://github.com/planetarium/libplanet/commit/1f66f7ca4ef89f57045b849e6a63e92a61deec7c"
        },
        "date": 1700490824507,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196647.20491803277,
            "unit": "ns",
            "range": "± 8776.419777533174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191133.6436781609,
            "unit": "ns",
            "range": "± 10394.017941884147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170301.3448275862,
            "unit": "ns",
            "range": "± 4918.454426776349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3108037.6428571427,
            "unit": "ns",
            "range": "± 22883.03119581825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2848240.6666666665,
            "unit": "ns",
            "range": "± 44713.837261709785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13793.19587628866,
            "unit": "ns",
            "range": "± 2115.300380753559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62259.22340425532,
            "unit": "ns",
            "range": "± 7330.449388671644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57229.72448979592,
            "unit": "ns",
            "range": "± 6449.1598234550065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57721.10638297872,
            "unit": "ns",
            "range": "± 10798.934258913974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3299.775280898876,
            "unit": "ns",
            "range": "± 398.42587290511676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12680.39175257732,
            "unit": "ns",
            "range": "± 2898.0305976527006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3715705.4015625,
            "unit": "ns",
            "range": "± 42413.79372492842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1165315.1090745192,
            "unit": "ns",
            "range": "± 2949.412943247118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731969.4494628906,
            "unit": "ns",
            "range": "± 2091.516299920529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908293.3081752232,
            "unit": "ns",
            "range": "± 3009.158618796547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617225.7143554688,
            "unit": "ns",
            "range": "± 3368.151500096819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567990.6839192709,
            "unit": "ns",
            "range": "± 1312.4219782886817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40115.47368421053,
            "unit": "ns",
            "range": "± 5798.183389102297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2412487.0789473685,
            "unit": "ns",
            "range": "± 43762.095320183944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2570221.74,
            "unit": "ns",
            "range": "± 98211.03150511335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3162101.3333333335,
            "unit": "ns",
            "range": "± 72416.07813968755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3002924.4615384615,
            "unit": "ns",
            "range": "± 101700.32142417927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7019136.837837838,
            "unit": "ns",
            "range": "± 233696.32894046657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5921129.633333334,
            "unit": "ns",
            "range": "± 48914.89936740961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14499060.357142856,
            "unit": "ns",
            "range": "± 53406.231809531426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37626745.65384615,
            "unit": "ns",
            "range": "± 319154.37685203017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75946648,
            "unit": "ns",
            "range": "± 436448.3307161606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153702061.80769232,
            "unit": "ns",
            "range": "± 574554.7182881982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 978240.9897959183,
            "unit": "ns",
            "range": "± 101903.36047798464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1849621.450980392,
            "unit": "ns",
            "range": "± 74140.64254275485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1414634.1842105263,
            "unit": "ns",
            "range": "± 133585.846095889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5858363.305263158,
            "unit": "ns",
            "range": "± 354853.8569779525"
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
          "id": "c305b8c6f6f47d6b3d18a35c61469a712f098ce3",
          "message": "Merge pull request #3506 from greymistcube/refactor/more-relaxed-consensus-timeout\n\n🔧 Changed default ContextTimeoutOption values",
          "timestamp": "2023-11-21T11:10:29+09:00",
          "tree_id": "908ad05338b32cbef2dc639356fde4e5274669a1",
          "url": "https://github.com/planetarium/libplanet/commit/c305b8c6f6f47d6b3d18a35c61469a712f098ce3"
        },
        "date": 1700533284501,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201365.3115942029,
            "unit": "ns",
            "range": "± 9624.64095476288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198626.42307692306,
            "unit": "ns",
            "range": "± 10158.30236068748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166221.48,
            "unit": "ns",
            "range": "± 4375.486259834443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3121896.5833333335,
            "unit": "ns",
            "range": "± 29902.994205379662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2832306.214285714,
            "unit": "ns",
            "range": "± 37235.51460259117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14827.125,
            "unit": "ns",
            "range": "± 3259.703968638547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62841.183673469386,
            "unit": "ns",
            "range": "± 7281.773985663617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56836.52577319588,
            "unit": "ns",
            "range": "± 6277.607268917539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64151.229166666664,
            "unit": "ns",
            "range": "± 10665.986716739646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3904.2150537634407,
            "unit": "ns",
            "range": "± 520.7599974924267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15237.969072164948,
            "unit": "ns",
            "range": "± 2544.673421472817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3591076.738839286,
            "unit": "ns",
            "range": "± 10750.924103107789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1149424.3885091145,
            "unit": "ns",
            "range": "± 8345.283880511764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760854.3134068081,
            "unit": "ns",
            "range": "± 9031.244002905436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919668.0430989584,
            "unit": "ns",
            "range": "± 4868.048578437979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630200.5321568081,
            "unit": "ns",
            "range": "± 1386.3471636155766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565896.7629743303,
            "unit": "ns",
            "range": "± 961.027389054933"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40616.31958762887,
            "unit": "ns",
            "range": "± 5911.6357394167835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2489364.595238095,
            "unit": "ns",
            "range": "± 87525.78688649685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2593592.4827586208,
            "unit": "ns",
            "range": "± 76000.09572908477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3143679.4285714286,
            "unit": "ns",
            "range": "± 45465.94705882682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2974856.992753623,
            "unit": "ns",
            "range": "± 129716.50959197216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6682150.116279069,
            "unit": "ns",
            "range": "± 236393.12639100724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5813067.642857143,
            "unit": "ns",
            "range": "± 26546.223664819776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14812857.307692308,
            "unit": "ns",
            "range": "± 211964.70050552624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38072983,
            "unit": "ns",
            "range": "± 228429.49169424755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76167160.71428572,
            "unit": "ns",
            "range": "± 332103.77680094296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156576657.93333334,
            "unit": "ns",
            "range": "± 1188981.5173315634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 964732.0105263158,
            "unit": "ns",
            "range": "± 87946.11606915238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1914612.0689655172,
            "unit": "ns",
            "range": "± 82962.48684059478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1439735.3434343433,
            "unit": "ns",
            "range": "± 143581.46860340095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5709343.614285714,
            "unit": "ns",
            "range": "± 275023.9291505901"
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
          "id": "f043a08169578303cd2bb49c738127459c56051a",
          "message": "Merge pull request #3507 from greymistcube/release/3.6.2\n\n🚀 Release 3.6.2",
          "timestamp": "2023-11-21T11:18:52+09:00",
          "tree_id": "b3f337e651b4db2e3f6f4aee02b43a29cc8f980a",
          "url": "https://github.com/planetarium/libplanet/commit/f043a08169578303cd2bb49c738127459c56051a"
        },
        "date": 1700533775770,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201338.42372881356,
            "unit": "ns",
            "range": "± 8864.932625535816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187525.69512195123,
            "unit": "ns",
            "range": "± 6723.492430350139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162556.62068965516,
            "unit": "ns",
            "range": "± 4735.872806974694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3080592.2666666666,
            "unit": "ns",
            "range": "± 27997.9313380386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2887128.1666666665,
            "unit": "ns",
            "range": "± 21792.89887610738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16617.684210526317,
            "unit": "ns",
            "range": "± 1727.9224474271145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59917.07731958763,
            "unit": "ns",
            "range": "± 5605.562001327809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60932.045454545456,
            "unit": "ns",
            "range": "± 1476.814121755494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69219.47474747474,
            "unit": "ns",
            "range": "± 15624.227505046701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3069.876404494382,
            "unit": "ns",
            "range": "± 593.801845970383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11507.935483870968,
            "unit": "ns",
            "range": "± 1387.677891506179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3590845.667410714,
            "unit": "ns",
            "range": "± 5009.7602188777855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1141447.9503348214,
            "unit": "ns",
            "range": "± 3169.089058546748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735257.2557942708,
            "unit": "ns",
            "range": "± 12239.025542411951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946835.9921875,
            "unit": "ns",
            "range": "± 19749.460892213396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613560.1549072266,
            "unit": "ns",
            "range": "± 10803.017482317053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571510.8818359375,
            "unit": "ns",
            "range": "± 839.5727638459697"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42096.59375,
            "unit": "ns",
            "range": "± 5017.9991831052275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2409133.04,
            "unit": "ns",
            "range": "± 24689.257037019157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2500570.069767442,
            "unit": "ns",
            "range": "± 56779.804956723725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3162582.4375,
            "unit": "ns",
            "range": "± 51501.76139766969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2947012.716981132,
            "unit": "ns",
            "range": "± 112914.12739102247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6860722.53125,
            "unit": "ns",
            "range": "± 210358.65856428808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5720501.5,
            "unit": "ns",
            "range": "± 20060.158140338393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14664258.2,
            "unit": "ns",
            "range": "± 88879.95273176061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36976507.666666664,
            "unit": "ns",
            "range": "± 285432.69647799106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75542681.36666666,
            "unit": "ns",
            "range": "± 456440.1600712169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150673773.7857143,
            "unit": "ns",
            "range": "± 1261096.8446346878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977078.3092783506,
            "unit": "ns",
            "range": "± 97092.72921471353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1841886.847826087,
            "unit": "ns",
            "range": "± 70384.35734576489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1393697.469387755,
            "unit": "ns",
            "range": "± 106247.75548398965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5727406.047619048,
            "unit": "ns",
            "range": "± 306640.3348029577"
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
          "id": "1c266590403b5b01de3d1f4e5d64953e25a4f967",
          "message": "Merge pull request #3508 from greymistcube/prepare/3.6.3\n\n🔧 Prepare 3.6.3",
          "timestamp": "2023-11-21T13:07:02+09:00",
          "tree_id": "bd6e4b1ea8d66955ebd09d534ee5832113ea0f64",
          "url": "https://github.com/planetarium/libplanet/commit/1c266590403b5b01de3d1f4e5d64953e25a4f967"
        },
        "date": 1700540283615,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197138.77083333334,
            "unit": "ns",
            "range": "± 7692.758491054064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196442.42857142858,
            "unit": "ns",
            "range": "± 8743.01222122335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162394.2894736842,
            "unit": "ns",
            "range": "± 3412.324958130899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3136384.4,
            "unit": "ns",
            "range": "± 69538.9086857135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2817001.1428571427,
            "unit": "ns",
            "range": "± 43258.20161782955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14540.357142857143,
            "unit": "ns",
            "range": "± 2734.0085040101835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61936.0206185567,
            "unit": "ns",
            "range": "± 6090.804513737938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56995.802083333336,
            "unit": "ns",
            "range": "± 5708.754095099157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55178.84375,
            "unit": "ns",
            "range": "± 9697.569376778607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2683.0860215053763,
            "unit": "ns",
            "range": "± 338.1832747231563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12154.75,
            "unit": "ns",
            "range": "± 1717.2882475831937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3584776.624699519,
            "unit": "ns",
            "range": "± 9768.203688488915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1153924.7740384615,
            "unit": "ns",
            "range": "± 1721.0278470033084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744451.0182542067,
            "unit": "ns",
            "range": "± 3114.9547692293067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942466.884765625,
            "unit": "ns",
            "range": "± 26788.439325658455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616998.2586495535,
            "unit": "ns",
            "range": "± 1216.6833285988077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 599192.6016376202,
            "unit": "ns",
            "range": "± 1010.0598266386681"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40877.8125,
            "unit": "ns",
            "range": "± 5542.53971865739"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2400586.4,
            "unit": "ns",
            "range": "± 28643.16283613147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2530344.466101695,
            "unit": "ns",
            "range": "± 109478.29997844891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3130966,
            "unit": "ns",
            "range": "± 94738.79465211896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3077120.676056338,
            "unit": "ns",
            "range": "± 147934.99537622932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6988334.413793104,
            "unit": "ns",
            "range": "± 155362.33955625823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5883548.333333333,
            "unit": "ns",
            "range": "± 37175.336166539746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14639677.466666667,
            "unit": "ns",
            "range": "± 267276.2005774622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38134635.35714286,
            "unit": "ns",
            "range": "± 244640.23625303252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76826684.53333333,
            "unit": "ns",
            "range": "± 577887.094986786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150570359.7142857,
            "unit": "ns",
            "range": "± 1179098.7661542073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960446.2446808511,
            "unit": "ns",
            "range": "± 82614.72829633419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1942032.3815789474,
            "unit": "ns",
            "range": "± 98103.386603585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1448652.4591836734,
            "unit": "ns",
            "range": "± 156884.34564964043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5746034.7894736845,
            "unit": "ns",
            "range": "± 290806.01670530887"
          }
        ]
      }
    ]
  }
}