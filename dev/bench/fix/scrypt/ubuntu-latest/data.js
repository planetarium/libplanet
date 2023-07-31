window.BENCHMARK_DATA = {
  "lastUpdate": 1690778263239,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "8b36a4b4c6b388a0ed70890fe17a32959a6524fa",
          "message": "Use @noble/hashes/scrypt instead of scrypt-js",
          "timestamp": "2023-07-31T12:29:40+09:00",
          "tree_id": "c4ed2918319de0bffb1c1319964c0b7dad95ce9a",
          "url": "https://github.com/planetarium/libplanet/commit/8b36a4b4c6b388a0ed70890fe17a32959a6524fa"
        },
        "date": 1690775053482,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288700.96,
            "unit": "ns",
            "range": "± 9684.49106679629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274241.5128205128,
            "unit": "ns",
            "range": "± 9114.437840654084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238184.76923076922,
            "unit": "ns",
            "range": "± 6296.420585111463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4356786.75,
            "unit": "ns",
            "range": "± 73209.54510854442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4009289.6,
            "unit": "ns",
            "range": "± 66169.11655836343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18888.304347826088,
            "unit": "ns",
            "range": "± 1158.0242717865729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86961.60294117648,
            "unit": "ns",
            "range": "± 4159.5135986440355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75706.88888888889,
            "unit": "ns",
            "range": "± 1579.8842432982935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83088.9493670886,
            "unit": "ns",
            "range": "± 5207.959854257451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4867.593023255814,
            "unit": "ns",
            "range": "± 495.05905477574925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18467.610526315788,
            "unit": "ns",
            "range": "± 1272.0880831834638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442486.25,
            "unit": "ns",
            "range": "± 79457.74449733297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2815765.8771929825,
            "unit": "ns",
            "range": "± 113268.15154488645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1854716.21686747,
            "unit": "ns",
            "range": "± 96392.70683398025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4862488.72,
            "unit": "ns",
            "range": "± 112182.43213382387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6089433.046354166,
            "unit": "ns",
            "range": "± 35316.72104903172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1935725.0744791667,
            "unit": "ns",
            "range": "± 7799.3945698219195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393756.418359375,
            "unit": "ns",
            "range": "± 4005.2729219941143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2651118.6088541667,
            "unit": "ns",
            "range": "± 6449.323412999079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837885.7119140625,
            "unit": "ns",
            "range": "± 2177.0267711887423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775047.6579241072,
            "unit": "ns",
            "range": "± 1313.342448738486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3422195.111111111,
            "unit": "ns",
            "range": "± 95674.64837479689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3557143.447368421,
            "unit": "ns",
            "range": "± 121650.70266417018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4343848.105263158,
            "unit": "ns",
            "range": "± 94503.24660730782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4031553.4166666665,
            "unit": "ns",
            "range": "± 159012.40405032953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6691846.48,
            "unit": "ns",
            "range": "± 269998.28510606114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7865258.428571428,
            "unit": "ns",
            "range": "± 81942.64040517261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22287608.066666666,
            "unit": "ns",
            "range": "± 288015.90179672535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54861403.666666664,
            "unit": "ns",
            "range": "± 868430.2275165943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107674710.33333333,
            "unit": "ns",
            "range": "± 1461620.6767353767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212268352.46666667,
            "unit": "ns",
            "range": "± 3382977.1032851874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48106.4,
            "unit": "ns",
            "range": "± 2694.429942419498"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "39759bf5cc67fefc7d2450be0131a9f86b89606c",
          "message": "Fix Wrong Test Object",
          "timestamp": "2023-07-31T13:18:27+09:00",
          "tree_id": "7c6138a7d289091af8a013c4b8572d03bac8501a",
          "url": "https://github.com/planetarium/libplanet/commit/39759bf5cc67fefc7d2450be0131a9f86b89606c"
        },
        "date": 1690777992006,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304016.2727272727,
            "unit": "ns",
            "range": "± 7378.180613143945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284293.5172413793,
            "unit": "ns",
            "range": "± 10306.958676853428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266161.77777777775,
            "unit": "ns",
            "range": "± 13926.09296159551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4583773.533333333,
            "unit": "ns",
            "range": "± 47208.58455811774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4197646.866666666,
            "unit": "ns",
            "range": "± 39165.50953848965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22797.010869565216,
            "unit": "ns",
            "range": "± 1482.1324220069105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94941.43956043955,
            "unit": "ns",
            "range": "± 5704.943667476852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85343.93684210526,
            "unit": "ns",
            "range": "± 6317.495199184034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103076.08602150538,
            "unit": "ns",
            "range": "± 12217.231278933647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6176.581632653061,
            "unit": "ns",
            "range": "± 862.3395404120884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21748.52688172043,
            "unit": "ns",
            "range": "± 1601.573313362166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1494347.9411764706,
            "unit": "ns",
            "range": "± 80241.12749414862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2856656.193548387,
            "unit": "ns",
            "range": "± 78273.95798153192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1922586.7704918033,
            "unit": "ns",
            "range": "± 80753.6560708747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5270146.7,
            "unit": "ns",
            "range": "± 187172.91359831428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6114011.62890625,
            "unit": "ns",
            "range": "± 20100.326819514255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1912890.3247395833,
            "unit": "ns",
            "range": "± 1636.4287807126043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403615.821158854,
            "unit": "ns",
            "range": "± 3404.6397757280365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2696353.8733258927,
            "unit": "ns",
            "range": "± 1943.7530419841999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836255.2160993303,
            "unit": "ns",
            "range": "± 467.75253827608475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769611.1180989583,
            "unit": "ns",
            "range": "± 377.1710086840562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3620673.904761905,
            "unit": "ns",
            "range": "± 131867.01508528547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3748419.3684210526,
            "unit": "ns",
            "range": "± 78763.1087017058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4562365.571428572,
            "unit": "ns",
            "range": "± 78883.86711802677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4158908.7666666666,
            "unit": "ns",
            "range": "± 184164.43468154146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6713584.285714285,
            "unit": "ns",
            "range": "± 131582.0125386228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8433356.176470589,
            "unit": "ns",
            "range": "± 173148.21607016172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22674209.333333332,
            "unit": "ns",
            "range": "± 230411.15589362875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57128446.86666667,
            "unit": "ns",
            "range": "± 555616.6622951304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114328072.6,
            "unit": "ns",
            "range": "± 759094.2543740439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226407720.93333334,
            "unit": "ns",
            "range": "± 997424.2511241118"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49666.45744680851,
            "unit": "ns",
            "range": "± 2992.0609815852"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac3aca902f3f71cbb3fa22ac005d8ad6a6712bb5",
          "message": "Merge branch 'main' into fix/scrypt",
          "timestamp": "2023-07-31T13:17:28+09:00",
          "tree_id": "0874d36bad6c9de9057cad90ff4491eea015c87f",
          "url": "https://github.com/planetarium/libplanet/commit/ac3aca902f3f71cbb3fa22ac005d8ad6a6712bb5"
        },
        "date": 1690778232574,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 400107.3125,
            "unit": "ns",
            "range": "± 54520.49654295886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 386076.74226804124,
            "unit": "ns",
            "range": "± 48258.31671205285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339735.1789473684,
            "unit": "ns",
            "range": "± 38101.126259384975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5203873.262626262,
            "unit": "ns",
            "range": "± 435454.2964853167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4764649.072916667,
            "unit": "ns",
            "range": "± 374462.15170936193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26274.96875,
            "unit": "ns",
            "range": "± 7675.568521995961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118977.23469387754,
            "unit": "ns",
            "range": "± 24147.74934499874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125657.206185567,
            "unit": "ns",
            "range": "± 27466.030159217495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140226.97894736842,
            "unit": "ns",
            "range": "± 32053.932392267612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6632.595505617977,
            "unit": "ns",
            "range": "± 931.2433125946721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25893.929292929293,
            "unit": "ns",
            "range": "± 9194.803299660049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1790041.4226804124,
            "unit": "ns",
            "range": "± 240798.2121018653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3326113.836734694,
            "unit": "ns",
            "range": "± 308279.43111453764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2361601.989361702,
            "unit": "ns",
            "range": "± 307540.2896073522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6799822.75,
            "unit": "ns",
            "range": "± 569531.6826379927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7259429.9765625,
            "unit": "ns",
            "range": "± 193016.1266475617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2357760.7653729836,
            "unit": "ns",
            "range": "± 71722.71619493303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1674295.2586115056,
            "unit": "ns",
            "range": "± 41118.431669717625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3090208.9077148438,
            "unit": "ns",
            "range": "± 58580.33763947142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1044422.7098214285,
            "unit": "ns",
            "range": "± 17120.682588184292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 946307.3587890625,
            "unit": "ns",
            "range": "± 20748.217319398165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4051108.136842105,
            "unit": "ns",
            "range": "± 348112.9036218789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4354971.87755102,
            "unit": "ns",
            "range": "± 378711.139567073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5625064.65625,
            "unit": "ns",
            "range": "± 415068.8846339357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4705024.571428572,
            "unit": "ns",
            "range": "± 308713.048440427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8376627.90625,
            "unit": "ns",
            "range": "± 687011.8553984814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9468148.177083334,
            "unit": "ns",
            "range": "± 533275.9669437084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26613409.892473117,
            "unit": "ns",
            "range": "± 1532147.6637946065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67163471.48275863,
            "unit": "ns",
            "range": "± 1913825.508443058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137409542.64814815,
            "unit": "ns",
            "range": "± 5707451.615244575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270248585.4736842,
            "unit": "ns",
            "range": "± 5745695.910112314"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71902.94791666667,
            "unit": "ns",
            "range": "± 19041.993256661248"
          }
        ]
      }
    ]
  }
}