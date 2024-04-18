window.BENCHMARK_DATA = {
  "lastUpdate": 1713417051085,
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
          "id": "1fa87bec789e297ac0d12b9241a31e172eed014f",
          "message": "Merge pull request #3750 from greymistcube/prepare/4.5.0\n\n🔧 Prepare 4.5.0",
          "timestamp": "2024-04-18T12:46:03+09:00",
          "tree_id": "d051d198797ab21591fcdea2e718cde61ab745b7",
          "url": "https://github.com/planetarium/libplanet/commit/1fa87bec789e297ac0d12b9241a31e172eed014f"
        },
        "date": 1713415830971,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204266.11320754717,
            "unit": "ns",
            "range": "± 8508.597628418105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197702.1971830986,
            "unit": "ns",
            "range": "± 9682.638065290912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164400.70588235295,
            "unit": "ns",
            "range": "± 3232.548544970088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3134013.214285714,
            "unit": "ns",
            "range": "± 53300.20435835924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2878377.1666666665,
            "unit": "ns",
            "range": "± 34064.52535088303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12356.725806451614,
            "unit": "ns",
            "range": "± 1288.7561000490916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59988.244680851065,
            "unit": "ns",
            "range": "± 4466.936083239339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93872.20212765958,
            "unit": "ns",
            "range": "± 7884.773701186366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57470.744897959186,
            "unit": "ns",
            "range": "± 10254.942900021708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2683.303370786517,
            "unit": "ns",
            "range": "± 458.6757966862667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11785.979166666666,
            "unit": "ns",
            "range": "± 1213.8781173461896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5725599.269230769,
            "unit": "ns",
            "range": "± 11553.506337571625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14779137.066666666,
            "unit": "ns",
            "range": "± 122978.06986292118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37503939.2,
            "unit": "ns",
            "range": "± 207052.9985132171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77657461.9,
            "unit": "ns",
            "range": "± 403182.05626823934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155214817.9,
            "unit": "ns",
            "range": "± 881985.2606935593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3710295.903738839,
            "unit": "ns",
            "range": "± 4536.229464505939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1189665.5276041667,
            "unit": "ns",
            "range": "± 1771.2208126405578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776700.3702473958,
            "unit": "ns",
            "range": "± 1393.7178779039114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969873.1966145833,
            "unit": "ns",
            "range": "± 3611.4440942570222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612526.00703125,
            "unit": "ns",
            "range": "± 871.0669659448513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571275.3930338542,
            "unit": "ns",
            "range": "± 1012.473381464325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1810885.121212121,
            "unit": "ns",
            "range": "± 281676.3982088736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2859758.7733333334,
            "unit": "ns",
            "range": "± 138269.75174543864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2431292.782828283,
            "unit": "ns",
            "range": "± 321896.0093544295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8815541.125,
            "unit": "ns",
            "range": "± 221588.256277427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2896866.4210526315,
            "unit": "ns",
            "range": "± 51846.295931463275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2889817.2131147543,
            "unit": "ns",
            "range": "± 121621.64640832029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3842546.9516129033,
            "unit": "ns",
            "range": "± 116856.18328664762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3602695.16,
            "unit": "ns",
            "range": "± 303045.69525369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9647445.083333334,
            "unit": "ns",
            "range": "± 127773.72531119813"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 195669.68867924527,
            "unit": "ns",
            "range": "± 8144.43570566528"
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
        "date": 1713415969235,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217509.8673469388,
            "unit": "ns",
            "range": "± 15581.148424772775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194476.82142857142,
            "unit": "ns",
            "range": "± 7466.543822843442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174427.9,
            "unit": "ns",
            "range": "± 8449.130553674946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3265137.6666666665,
            "unit": "ns",
            "range": "± 40824.485098085555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2979332.9,
            "unit": "ns",
            "range": "± 45981.03538851642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13019.005617977527,
            "unit": "ns",
            "range": "± 779.108408310357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97429.7967032967,
            "unit": "ns",
            "range": "± 11890.719774022193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94791.75,
            "unit": "ns",
            "range": "± 936.9454359779976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96099.58333333333,
            "unit": "ns",
            "range": "± 14685.645946882723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5935.323232323232,
            "unit": "ns",
            "range": "± 2175.0688416423336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19325.418367346938,
            "unit": "ns",
            "range": "± 4246.28170072679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5736884.566666666,
            "unit": "ns",
            "range": "± 44556.42316124365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14845151.23076923,
            "unit": "ns",
            "range": "± 42861.96945263918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38472100.333333336,
            "unit": "ns",
            "range": "± 202638.1011404556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79800125.7,
            "unit": "ns",
            "range": "± 535051.979255447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156654929.46666667,
            "unit": "ns",
            "range": "± 648806.5296174713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3738890.1864583334,
            "unit": "ns",
            "range": "± 44747.588905633085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217055.4983473558,
            "unit": "ns",
            "range": "± 1887.345696751635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777088.5479817708,
            "unit": "ns",
            "range": "± 2477.4008355444375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952248.8568638393,
            "unit": "ns",
            "range": "± 4077.9800111482023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616590.5631760817,
            "unit": "ns",
            "range": "± 630.4940087581044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571928.7443359375,
            "unit": "ns",
            "range": "± 556.2996977403263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1780063.6363636365,
            "unit": "ns",
            "range": "± 257355.970438012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3021506.8440860217,
            "unit": "ns",
            "range": "± 237977.17001904114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2374528.01,
            "unit": "ns",
            "range": "± 296272.9882668953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8724176.034482758,
            "unit": "ns",
            "range": "± 228777.62841200232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2752368.323076923,
            "unit": "ns",
            "range": "± 127990.40416034465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2990595.1333333333,
            "unit": "ns",
            "range": "± 111957.2830512115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4134272.3333333335,
            "unit": "ns",
            "range": "± 95984.55782589893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3839324.31,
            "unit": "ns",
            "range": "± 304563.81458903506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9989848.92,
            "unit": "ns",
            "range": "± 164259.31633368623"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 238637.52,
            "unit": "ns",
            "range": "± 20360.787210913062"
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
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713417028031,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211654.7641509434,
            "unit": "ns",
            "range": "± 8822.720381428988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203583.95652173914,
            "unit": "ns",
            "range": "± 9530.340120211104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172805.86842105264,
            "unit": "ns",
            "range": "± 3450.5006111919843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3189413.285714286,
            "unit": "ns",
            "range": "± 32515.131780162275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2928361.875,
            "unit": "ns",
            "range": "± 54897.6640436549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12831.208791208792,
            "unit": "ns",
            "range": "± 1203.1946505171004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60504.86956521739,
            "unit": "ns",
            "range": "± 4101.322710030363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54570.604651162794,
            "unit": "ns",
            "range": "± 4230.280244586973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64000.4793814433,
            "unit": "ns",
            "range": "± 11936.675895619785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3006.0103092783506,
            "unit": "ns",
            "range": "± 685.0827732052614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13280.077777777778,
            "unit": "ns",
            "range": "± 890.0016314563733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5736111.433333334,
            "unit": "ns",
            "range": "± 56984.160284699996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15014014.42857143,
            "unit": "ns",
            "range": "± 79228.05387124736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37872068.1,
            "unit": "ns",
            "range": "± 307412.03173702507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77894537.46666667,
            "unit": "ns",
            "range": "± 372542.83934485144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 159085397.26666668,
            "unit": "ns",
            "range": "± 541985.2012893324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3608704.968449519,
            "unit": "ns",
            "range": "± 3397.8906233622024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1191817.944140625,
            "unit": "ns",
            "range": "± 1316.2168146346828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765355.8736049107,
            "unit": "ns",
            "range": "± 1340.588536399199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1988179.8747395833,
            "unit": "ns",
            "range": "± 3587.3706138473676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619665.2826822917,
            "unit": "ns",
            "range": "± 1598.4641570764097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557921.1960100447,
            "unit": "ns",
            "range": "± 813.7483969306891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1880860.691919192,
            "unit": "ns",
            "range": "± 230220.41325778488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3025887.098360656,
            "unit": "ns",
            "range": "± 132455.4077253555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2403221.262626263,
            "unit": "ns",
            "range": "± 291654.90565971856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8770299.666666666,
            "unit": "ns",
            "range": "± 220835.37775941822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2731937.9,
            "unit": "ns",
            "range": "± 87542.86908615284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3057907.3513513515,
            "unit": "ns",
            "range": "± 101155.65678509098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3952540.5392156863,
            "unit": "ns",
            "range": "± 161154.81248736705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3571167.3913043477,
            "unit": "ns",
            "range": "± 251288.48068226976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9823689.823529411,
            "unit": "ns",
            "range": "± 195920.1822934646"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 224855.62,
            "unit": "ns",
            "range": "± 16994.463524348277"
          }
        ]
      }
    ]
  }
}