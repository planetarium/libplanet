window.BENCHMARK_DATA = {
  "lastUpdate": 1700468655973,
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
      }
    ]
  }
}