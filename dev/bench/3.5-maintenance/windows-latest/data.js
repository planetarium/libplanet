window.BENCHMARK_DATA = {
  "lastUpdate": 1696421886079,
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
          "id": "f4de791ec79e187d4f37220ca3f714d0fa1503b4",
          "message": "Merge pull request #3441 from greymistcube/release/3.5.0\n\n🚀 Release 3.5.0",
          "timestamp": "2023-10-04T17:16:25+09:00",
          "tree_id": "3e3fb2039e8bdf70273fc070e13a90ca8e2a47eb",
          "url": "https://github.com/planetarium/libplanet/commit/f4de791ec79e187d4f37220ca3f714d0fa1503b4"
        },
        "date": 1696408693189,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640380.412371134,
            "unit": "ns",
            "range": "± 210951.35282372925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2941993.75,
            "unit": "ns",
            "range": "± 278944.8195998251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2431348.4536082475,
            "unit": "ns",
            "range": "± 241790.06394727106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10655722.727272727,
            "unit": "ns",
            "range": "± 768441.4517482059"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60801.063829787236,
            "unit": "ns",
            "range": "± 13625.312423612284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9068717.391304348,
            "unit": "ns",
            "range": "± 819553.9029947933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25221955.789473683,
            "unit": "ns",
            "range": "± 1959994.6930407847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59214512.5,
            "unit": "ns",
            "range": "± 1474740.1968136036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115991772.97297297,
            "unit": "ns",
            "range": "± 3847412.2663918645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236042328.2051282,
            "unit": "ns",
            "range": "± 8197485.873342949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5331694.692095588,
            "unit": "ns",
            "range": "± 169909.07505305004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1628487.96875,
            "unit": "ns",
            "range": "± 19108.37909372561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1233100.9410511365,
            "unit": "ns",
            "range": "± 29769.588120283934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3062109.9051339286,
            "unit": "ns",
            "range": "± 54170.219045626116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985932.7837775735,
            "unit": "ns",
            "range": "± 19862.422679841995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886034.8557692308,
            "unit": "ns",
            "range": "± 7777.821397043946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3413157.2916666665,
            "unit": "ns",
            "range": "± 262494.9919300885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3528083.505154639,
            "unit": "ns",
            "range": "± 209055.0269867225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4985607.142857143,
            "unit": "ns",
            "range": "± 265321.36766784533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4658487.368421053,
            "unit": "ns",
            "range": "± 318855.84591950587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12218311.494252874,
            "unit": "ns",
            "range": "± 733153.0175042916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309342.1052631579,
            "unit": "ns",
            "range": "± 46161.039985489864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282411.7021276596,
            "unit": "ns",
            "range": "± 45275.56749644749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237587.36842105264,
            "unit": "ns",
            "range": "± 29816.26802176625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4189793.6170212766,
            "unit": "ns",
            "range": "± 293374.32868779276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4041138.144329897,
            "unit": "ns",
            "range": "± 343363.7410007361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26142,
            "unit": "ns",
            "range": "± 10153.977973526862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97080.41237113402,
            "unit": "ns",
            "range": "± 18140.652087549446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102205,
            "unit": "ns",
            "range": "± 23773.21884691752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123738.94736842105,
            "unit": "ns",
            "range": "± 24893.22857058548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7794.505494505494,
            "unit": "ns",
            "range": "± 1717.9679622780861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22960.416666666668,
            "unit": "ns",
            "range": "± 6662.9293252279385"
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
          "id": "2c220258279adbad575c0686da121881db5772c4",
          "message": "Merge pull request #3443 from greymistcube/prepare/3.5.1\n\n🔧 Prepare 3.5.1",
          "timestamp": "2023-10-04T20:57:49+09:00",
          "tree_id": "6660c95a6a1132eb392ccdb1480cc8a13c802149",
          "url": "https://github.com/planetarium/libplanet/commit/2c220258279adbad575c0686da121881db5772c4"
        },
        "date": 1696421810212,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1517915.4639175257,
            "unit": "ns",
            "range": "± 104389.37360132154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2764624.4680851065,
            "unit": "ns",
            "range": "± 163272.79217215747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2160822.9166666665,
            "unit": "ns",
            "range": "± 182108.75147569127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9618287.640449438,
            "unit": "ns",
            "range": "± 602906.4074095626"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56351.68539325843,
            "unit": "ns",
            "range": "± 4367.96479442685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8689350,
            "unit": "ns",
            "range": "± 122679.5196658943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24259037.5,
            "unit": "ns",
            "range": "± 621185.200146007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60184751.06382979,
            "unit": "ns",
            "range": "± 2296256.3835675954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126088930.76923077,
            "unit": "ns",
            "range": "± 3446500.3326585335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248256912.12121212,
            "unit": "ns",
            "range": "± 7741570.458963639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5481836.277173913,
            "unit": "ns",
            "range": "± 138611.4611227616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1705932.8590029762,
            "unit": "ns",
            "range": "± 39764.863746603645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289626.2630208333,
            "unit": "ns",
            "range": "± 21007.27935782368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3233685.2213541665,
            "unit": "ns",
            "range": "± 81513.25888575173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978531.46484375,
            "unit": "ns",
            "range": "± 19345.42470182345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 918537.6611328125,
            "unit": "ns",
            "range": "± 20399.74260439144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3726531.4814814813,
            "unit": "ns",
            "range": "± 155021.3921014921"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4070591.1764705884,
            "unit": "ns",
            "range": "± 128484.69574621803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4761731.818181818,
            "unit": "ns",
            "range": "± 260299.0373801333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4692320.833333333,
            "unit": "ns",
            "range": "± 179723.6329412152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12124923.170731707,
            "unit": "ns",
            "range": "± 602234.5780402792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286647.0588235294,
            "unit": "ns",
            "range": "± 13559.228510041894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284723.8805970149,
            "unit": "ns",
            "range": "± 13528.119867041469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248535.1851851852,
            "unit": "ns",
            "range": "± 10425.140285150095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4735569.230769231,
            "unit": "ns",
            "range": "± 75489.37435841975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4449834.615384615,
            "unit": "ns",
            "range": "± 119254.06137254258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22281.25,
            "unit": "ns",
            "range": "± 2159.742309189979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94397.77777777778,
            "unit": "ns",
            "range": "± 7263.936280498409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81842.55319148937,
            "unit": "ns",
            "range": "± 8232.292686334975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97680,
            "unit": "ns",
            "range": "± 17415.41014843744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5232.978723404255,
            "unit": "ns",
            "range": "± 604.7105942252421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19930.68181818182,
            "unit": "ns",
            "range": "± 1276.0713735799495"
          }
        ]
      }
    ]
  }
}