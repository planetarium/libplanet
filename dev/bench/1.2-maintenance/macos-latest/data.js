window.BENCHMARK_DATA = {
  "lastUpdate": 1684395654250,
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
          "id": "329dd0a8838dd9ffe6ccf309df4f80c318524a70",
          "message": "Merge pull request #3167 from greymistcube/release/1.2.0\n\n🚀 Release 1.2.0",
          "timestamp": "2023-05-16T17:54:33+09:00",
          "tree_id": "2085a9782b57ad4f6a8e3a8d2d33efcec83c8ad6",
          "url": "https://github.com/planetarium/libplanet/commit/329dd0a8838dd9ffe6ccf309df4f80c318524a70"
        },
        "date": 1684228933280,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9067299.076086957,
            "unit": "ns",
            "range": "± 578453.5086607559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27403622.908602152,
            "unit": "ns",
            "range": "± 7736944.4330831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58499337.77906977,
            "unit": "ns",
            "range": "± 2153064.426348434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116169300.21052632,
            "unit": "ns",
            "range": "± 8202531.281583148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227402282.85051546,
            "unit": "ns",
            "range": "± 15532918.336978309"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82417.33333333333,
            "unit": "ns",
            "range": "± 10319.436253219923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346748.9574468085,
            "unit": "ns",
            "range": "± 39988.33842910643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337598.6770833333,
            "unit": "ns",
            "range": "± 28520.648710602196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321203.28651685396,
            "unit": "ns",
            "range": "± 19208.908776843335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4268715.088235294,
            "unit": "ns",
            "range": "± 83578.62589955253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3763846.722222222,
            "unit": "ns",
            "range": "± 79891.17395764106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20265.978260869564,
            "unit": "ns",
            "range": "± 3072.756368933098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104553.27319587629,
            "unit": "ns",
            "range": "± 14119.10996258348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121579.47126436782,
            "unit": "ns",
            "range": "± 15845.822548192813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131338.48958333334,
            "unit": "ns",
            "range": "± 20544.991876364675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9406.70652173913,
            "unit": "ns",
            "range": "± 2057.592856585939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27630.333333333332,
            "unit": "ns",
            "range": "± 3570.064097382608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707853.8263157895,
            "unit": "ns",
            "range": "± 229703.7751819023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3093522.842465753,
            "unit": "ns",
            "range": "± 152267.76427848148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2700975.9631578946,
            "unit": "ns",
            "range": "± 281805.75348979904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6863880.828571429,
            "unit": "ns",
            "range": "± 330693.6113616972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3598817.3711340204,
            "unit": "ns",
            "range": "± 276989.1345828659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3810391.2789473683,
            "unit": "ns",
            "range": "± 303331.8868714659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4980943.217171717,
            "unit": "ns",
            "range": "± 459353.33199143497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4985573.170103093,
            "unit": "ns",
            "range": "± 519676.5727485126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8813814.578947369,
            "unit": "ns",
            "range": "± 939292.2987429983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7790599.444562816,
            "unit": "ns",
            "range": "± 567688.8112374077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2252707.3328683036,
            "unit": "ns",
            "range": "± 64293.79374550701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1433573.7207782452,
            "unit": "ns",
            "range": "± 19693.350687686503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3345762.6891324627,
            "unit": "ns",
            "range": "± 158259.05427882177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1038666.5841077303,
            "unit": "ns",
            "range": "± 59201.57383967773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 859752.6114941406,
            "unit": "ns",
            "range": "± 75785.43834143018"
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
          "id": "3d5aa886e8d61a1bb36174e6a54d989d1a7665ad",
          "message": "Merge pull request #3171 from greymistcube/prepare/1.2.1\n\n🔧 Prepare 1.2.1",
          "timestamp": "2023-05-17T11:00:29+09:00",
          "tree_id": "42e66b107c4b4ca1ce58e4c972c15d296fb64218",
          "url": "https://github.com/planetarium/libplanet/commit/3d5aa886e8d61a1bb36174e6a54d989d1a7665ad"
        },
        "date": 1684289801069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8246200.704819277,
            "unit": "ns",
            "range": "± 435952.4720993736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20300723.558139537,
            "unit": "ns",
            "range": "± 1095138.282986127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51864078.2345679,
            "unit": "ns",
            "range": "± 2716766.639883647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103486228.01111111,
            "unit": "ns",
            "range": "± 3767950.891570996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202952034.25,
            "unit": "ns",
            "range": "± 5093373.529875487"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69574.80208333333,
            "unit": "ns",
            "range": "± 9181.302709562908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332466.56842105265,
            "unit": "ns",
            "range": "± 33419.26001913645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308005.23913043475,
            "unit": "ns",
            "range": "± 16819.313609473975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304347.35714285716,
            "unit": "ns",
            "range": "± 25462.63371119157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4080454.9411764704,
            "unit": "ns",
            "range": "± 83535.08675735499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3790859.5625,
            "unit": "ns",
            "range": "± 117581.5560050836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18716.260416666668,
            "unit": "ns",
            "range": "± 2414.7159917768763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98137.44086021505,
            "unit": "ns",
            "range": "± 14447.255847047612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94228.76262626263,
            "unit": "ns",
            "range": "± 14155.98574021825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118243.16666666667,
            "unit": "ns",
            "range": "± 15950.641108822434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6876.537634408603,
            "unit": "ns",
            "range": "± 1722.144388477316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20629.51020408163,
            "unit": "ns",
            "range": "± 4352.642598775865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595225.9210526317,
            "unit": "ns",
            "range": "± 167881.8835561263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3019419.3263157895,
            "unit": "ns",
            "range": "± 189809.115572049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2517546.4693877553,
            "unit": "ns",
            "range": "± 208329.83899974302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6818371.9639175255,
            "unit": "ns",
            "range": "± 414776.5429611634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3256531.3666666667,
            "unit": "ns",
            "range": "± 201545.3606007588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3470801.3723404254,
            "unit": "ns",
            "range": "± 273607.75738331623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4509803.081632653,
            "unit": "ns",
            "range": "± 302710.0931154636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4292495.75,
            "unit": "ns",
            "range": "± 274521.8858729964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7854268.679487179,
            "unit": "ns",
            "range": "± 401073.6667883816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6633088.316761363,
            "unit": "ns",
            "range": "± 159508.2191113596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1985123.8998161764,
            "unit": "ns",
            "range": "± 40681.34360058895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1283487.7841145834,
            "unit": "ns",
            "range": "± 17251.998202550683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2484413.680908203,
            "unit": "ns",
            "range": "± 38774.172194790095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 925403.4683627425,
            "unit": "ns",
            "range": "± 40025.648877044136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 830431.013671875,
            "unit": "ns",
            "range": "± 23891.933344715126"
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
          "id": "245e9e7454eb1a52376e4c89e6a452f9da3ba9ef",
          "message": "Merge pull request #3174 from greymistcube/fix/tx-query\n\nFixed query for tx with actions",
          "timestamp": "2023-05-17T21:46:43+09:00",
          "tree_id": "167fa81d6a573d9aa9ff1c65d7b794d44324b59d",
          "url": "https://github.com/planetarium/libplanet/commit/245e9e7454eb1a52376e4c89e6a452f9da3ba9ef"
        },
        "date": 1684328605204,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8213745.714285715,
            "unit": "ns",
            "range": "± 438337.27728358586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24060355.760416668,
            "unit": "ns",
            "range": "± 4705781.54366548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53173149.88823529,
            "unit": "ns",
            "range": "± 3500806.4047386823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111655815.25581396,
            "unit": "ns",
            "range": "± 7484392.133537111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221707024.1451613,
            "unit": "ns",
            "range": "± 6580185.000705257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61796.32258064516,
            "unit": "ns",
            "range": "± 9929.531591869834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352334.9130434783,
            "unit": "ns",
            "range": "± 50487.96859575974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360932.9,
            "unit": "ns",
            "range": "± 46383.296550771964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331397.0393258427,
            "unit": "ns",
            "range": "± 40201.32613344541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4184661.9324324327,
            "unit": "ns",
            "range": "± 208261.26833309093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3753801,
            "unit": "ns",
            "range": "± 39320.8139852361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17943.607526881722,
            "unit": "ns",
            "range": "± 2331.8442153870474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89460.66315789474,
            "unit": "ns",
            "range": "± 9604.753789317841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92249.33157894737,
            "unit": "ns",
            "range": "± 16156.056509209773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99937.31521739131,
            "unit": "ns",
            "range": "± 11388.264724136801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7422.542105263158,
            "unit": "ns",
            "range": "± 1710.5232241439887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22479.520408163266,
            "unit": "ns",
            "range": "± 3075.251263658103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1451139.7604166667,
            "unit": "ns",
            "range": "± 138764.14410925316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2841717.8181818184,
            "unit": "ns",
            "range": "± 211416.70222020708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2425843.6666666665,
            "unit": "ns",
            "range": "± 271825.2287284624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6166346.545454546,
            "unit": "ns",
            "range": "± 288779.8043077742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3596068.852272727,
            "unit": "ns",
            "range": "± 494124.9023474358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3755019.489361702,
            "unit": "ns",
            "range": "± 341561.80519567285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5064117.268817204,
            "unit": "ns",
            "range": "± 459971.501491341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4813153.70212766,
            "unit": "ns",
            "range": "± 367138.548338965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8526051.994623655,
            "unit": "ns",
            "range": "± 727125.2668260847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6944432.433238637,
            "unit": "ns",
            "range": "± 294090.0286489664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1952913.925502232,
            "unit": "ns",
            "range": "± 15869.602905484711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292344.1315104167,
            "unit": "ns",
            "range": "± 19793.318904135012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2873258.6256009615,
            "unit": "ns",
            "range": "± 37367.562646994964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859699.0678710938,
            "unit": "ns",
            "range": "± 3226.7183814102236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725097.4677734375,
            "unit": "ns",
            "range": "± 5113.908311097668"
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
          "id": "df50e75dd453cd8272f07fa3032f5ff5003f68d1",
          "message": "Merge pull request #3175 from greymistcube/release/1.2.1\n\n🚀 Release 1.2.1",
          "timestamp": "2023-05-17T22:08:02+09:00",
          "tree_id": "b2d3ed91786a1c1441663fba400fbb99f721c2ca",
          "url": "https://github.com/planetarium/libplanet/commit/df50e75dd453cd8272f07fa3032f5ff5003f68d1"
        },
        "date": 1684329876637,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8455012.146341464,
            "unit": "ns",
            "range": "± 293883.4510544581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21255369.208333332,
            "unit": "ns",
            "range": "± 541754.3458073706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74084938.4021739,
            "unit": "ns",
            "range": "± 32836893.57058901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106893630.25,
            "unit": "ns",
            "range": "± 945389.1976042195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208628161.2,
            "unit": "ns",
            "range": "± 4692392.490566934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66148.92708333333,
            "unit": "ns",
            "range": "± 9832.6665513693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349196.7634408602,
            "unit": "ns",
            "range": "± 45417.7732985662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321028.1626506024,
            "unit": "ns",
            "range": "± 41251.33482578712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333659.7659574468,
            "unit": "ns",
            "range": "± 42126.12311573235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4288731.835443038,
            "unit": "ns",
            "range": "± 214007.23348992446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3857639.375,
            "unit": "ns",
            "range": "± 118462.11936222618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20939.804347826088,
            "unit": "ns",
            "range": "± 3336.1615083282795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103823.65625,
            "unit": "ns",
            "range": "± 16424.545204520244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99878.62626262626,
            "unit": "ns",
            "range": "± 13606.074416684794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112781.05670103093,
            "unit": "ns",
            "range": "± 15143.83345551985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5766.677083333333,
            "unit": "ns",
            "range": "± 1402.107582739128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20593.03092783505,
            "unit": "ns",
            "range": "± 3338.439344881104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1534820.9574468085,
            "unit": "ns",
            "range": "± 127464.525926026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2920351.6525423727,
            "unit": "ns",
            "range": "± 128755.79581260953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2502887.3571428573,
            "unit": "ns",
            "range": "± 200309.28420903275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6328833.791044776,
            "unit": "ns",
            "range": "± 296879.6408087687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3544996.2333333334,
            "unit": "ns",
            "range": "± 61779.97159790619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3537916.1894736844,
            "unit": "ns",
            "range": "± 260126.9005326216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4552159.875,
            "unit": "ns",
            "range": "± 224995.86951300624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4538320.619047619,
            "unit": "ns",
            "range": "± 529961.6131825908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8307658.066666666,
            "unit": "ns",
            "range": "± 622506.862180124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6509986.11640625,
            "unit": "ns",
            "range": "± 145732.41222439235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1964318.0756138393,
            "unit": "ns",
            "range": "± 20027.42315943171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1240643.7706298828,
            "unit": "ns",
            "range": "± 22018.192031748506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586129.7833533655,
            "unit": "ns",
            "range": "± 28626.16110608086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815016.1694335938,
            "unit": "ns",
            "range": "± 8482.90766697862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713713.1982421875,
            "unit": "ns",
            "range": "± 13121.149772320576"
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
          "id": "d1ef3e2666d17ac1b606684761befda11ca1df2a",
          "message": "Merge pull request #3177 from greymistcube/prepare/1.2.2\n\n🔧 Prepare 1.2.2",
          "timestamp": "2023-05-18T16:25:54+09:00",
          "tree_id": "02032a856fc0fc2cfdbf33544da2b4656195e77b",
          "url": "https://github.com/planetarium/libplanet/commit/d1ef3e2666d17ac1b606684761befda11ca1df2a"
        },
        "date": 1684395600272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7696777.564516129,
            "unit": "ns",
            "range": "± 230033.8044425841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18887359.75,
            "unit": "ns",
            "range": "± 166584.05361046855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46182831.615384616,
            "unit": "ns",
            "range": "± 612828.9000953608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94776283.92105263,
            "unit": "ns",
            "range": "± 1693981.9243342434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192985096.76666668,
            "unit": "ns",
            "range": "± 3063104.4277322046"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56879.39772727273,
            "unit": "ns",
            "range": "± 7077.703297428591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328281.23863636365,
            "unit": "ns",
            "range": "± 18056.53755011519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310941.9666666667,
            "unit": "ns",
            "range": "± 17222.224772078665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292907.404040404,
            "unit": "ns",
            "range": "± 20952.203602835612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3957951.5454545454,
            "unit": "ns",
            "range": "± 92214.12106741533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4010378.8674698793,
            "unit": "ns",
            "range": "± 212968.6324704553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17601.677083333332,
            "unit": "ns",
            "range": "± 3416.7607420349764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87108.97894736842,
            "unit": "ns",
            "range": "± 9374.228476598326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115880,
            "unit": "ns",
            "range": "± 17202.141792597562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113614.94791666667,
            "unit": "ns",
            "range": "± 17299.21904070561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6305.81443298969,
            "unit": "ns",
            "range": "± 1961.9663888659047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15705.568421052632,
            "unit": "ns",
            "range": "± 1498.3144618709837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1441236.0416666667,
            "unit": "ns",
            "range": "± 139074.36030547542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2874258.3595505618,
            "unit": "ns",
            "range": "± 287354.71908629715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2387673.846153846,
            "unit": "ns",
            "range": "± 269471.3109737874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6337724.463157895,
            "unit": "ns",
            "range": "± 384091.1375881813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3072089.463414634,
            "unit": "ns",
            "range": "± 110233.2531736902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3218730.2333333334,
            "unit": "ns",
            "range": "± 90998.11484318037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4163812.592592593,
            "unit": "ns",
            "range": "± 174936.98875379667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4230043.043478261,
            "unit": "ns",
            "range": "± 259724.60292529347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7695929.107843137,
            "unit": "ns",
            "range": "± 313055.20860896586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6730294.154017857,
            "unit": "ns",
            "range": "± 71946.90389001468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2041882.4493489584,
            "unit": "ns",
            "range": "± 27446.44381560437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1230508.9923177084,
            "unit": "ns",
            "range": "± 9868.568864650115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666890.4815104166,
            "unit": "ns",
            "range": "± 33654.19402420665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 773663.3016276042,
            "unit": "ns",
            "range": "± 3525.663565105293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766333.3938151042,
            "unit": "ns",
            "range": "± 7134.28621211535"
          }
        ]
      }
    ]
  }
}