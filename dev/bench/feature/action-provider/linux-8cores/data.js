window.BENCHMARK_DATA = {
  "lastUpdate": 1744252609919,
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
          "id": "96d0939b259534eaeb8b570aeaf1edeb2e2035a6",
          "message": "fix: Remove temporary code",
          "timestamp": "2025-04-10T11:23:14+09:00",
          "tree_id": "682eb97e99da8be6985b7bc58f61596655809c6b",
          "url": "https://github.com/planetarium/libplanet/commit/96d0939b259534eaeb8b570aeaf1edeb2e2035a6"
        },
        "date": 1744252184773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2373571.8163265307,
            "unit": "ns",
            "range": "± 70887.3300590667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5211504.454545454,
            "unit": "ns",
            "range": "± 117541.16766223908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4045522.7395833335,
            "unit": "ns",
            "range": "± 233063.2447476434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15485674.66,
            "unit": "ns",
            "range": "± 7337096.77734168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34578.26666666667,
            "unit": "ns",
            "range": "± 649.8260719681258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2204744.3076923075,
            "unit": "ns",
            "range": "± 11868.644779309721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2580837.8545454545,
            "unit": "ns",
            "range": "± 109622.45780682022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3036685.879310345,
            "unit": "ns",
            "range": "± 48662.90631287111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2535634.1153846155,
            "unit": "ns",
            "range": "± 67250.05642782878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2211834.688235294,
            "unit": "ns",
            "range": "± 195991.5757321323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2864136.8666666667,
            "unit": "ns",
            "range": "± 12320.462015146457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 7075850.884615385,
            "unit": "ns",
            "range": "± 16340.251158506619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 18732237.785714287,
            "unit": "ns",
            "range": "± 161839.08010032616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25450336.333333332,
            "unit": "ns",
            "range": "± 333326.3551303823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50698657.28571428,
            "unit": "ns",
            "range": "± 31723.616719381822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244164.68,
            "unit": "ns",
            "range": "± 30696.82083031539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 479514.05,
            "unit": "ns",
            "range": "± 10889.073376434215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165077.03703703705,
            "unit": "ns",
            "range": "± 6941.369775953945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 985365.8243243244,
            "unit": "ns",
            "range": "± 33080.92639023787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 868473.9210526316,
            "unit": "ns",
            "range": "± 24774.405877057205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24200.875,
            "unit": "ns",
            "range": "± 1968.1247727348568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101575.64285714286,
            "unit": "ns",
            "range": "± 16259.076900922237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39862.23417721519,
            "unit": "ns",
            "range": "± 2108.4726925191594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62288.333333333336,
            "unit": "ns",
            "range": "± 30854.060760096956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3606.4242424242425,
            "unit": "ns",
            "range": "± 1629.8830250434155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23122.968421052632,
            "unit": "ns",
            "range": "± 1900.6075369813886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3859549.33828125,
            "unit": "ns",
            "range": "± 22214.297479803172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 912063.1952427456,
            "unit": "ns",
            "range": "± 5309.269868794089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 717244.8003255208,
            "unit": "ns",
            "range": "± 3587.967669563542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1746400.5963541667,
            "unit": "ns",
            "range": "± 5325.127967208172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462636.01002604165,
            "unit": "ns",
            "range": "± 1895.1356761330283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425504.92548828124,
            "unit": "ns",
            "range": "± 1952.8758386527068"
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
          "id": "2e3287cdda36d54de0f7780e3c1876179714bf59",
          "message": "fix: Remove temporary code",
          "timestamp": "2025-04-10T11:25:01+09:00",
          "tree_id": "682eb97e99da8be6985b7bc58f61596655809c6b",
          "url": "https://github.com/planetarium/libplanet/commit/2e3287cdda36d54de0f7780e3c1876179714bf59"
        },
        "date": 1744252308417,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2202208.936170213,
            "unit": "ns",
            "range": "± 50359.21274439234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4690721.636363637,
            "unit": "ns",
            "range": "± 112992.06065010368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4049448.3076923075,
            "unit": "ns",
            "range": "± 109247.11224815756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14220296.91,
            "unit": "ns",
            "range": "± 6533162.9670484"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 26621.785714285714,
            "unit": "ns",
            "range": "± 1324.7808694145888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2288046.9929577466,
            "unit": "ns",
            "range": "± 111194.08982288238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2478044.875,
            "unit": "ns",
            "range": "± 115606.19409004055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3019661.212121212,
            "unit": "ns",
            "range": "± 354767.9802450734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2572259.533333333,
            "unit": "ns",
            "range": "± 41256.98322512318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2262711.880952381,
            "unit": "ns",
            "range": "± 334760.85209334554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2634138.0714285714,
            "unit": "ns",
            "range": "± 9415.441902814478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 6479998.269230769,
            "unit": "ns",
            "range": "± 7520.715913992122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 17269385.35714286,
            "unit": "ns",
            "range": "± 121976.10492829332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25174123.035714287,
            "unit": "ns",
            "range": "± 521937.091269201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 49999241.961538464,
            "unit": "ns",
            "range": "± 119498.87592819678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257683.29,
            "unit": "ns",
            "range": "± 28117.4989208058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 513563.21428571426,
            "unit": "ns",
            "range": "± 6342.963411148202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 184797.32142857142,
            "unit": "ns",
            "range": "± 9609.105342005161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1041360.476744186,
            "unit": "ns",
            "range": "± 35942.793500816035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 913826.5909090909,
            "unit": "ns",
            "range": "± 34063.98492906192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27022.5625,
            "unit": "ns",
            "range": "± 2748.1202103964583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109128.78,
            "unit": "ns",
            "range": "± 19208.32293042773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60605.931818181816,
            "unit": "ns",
            "range": "± 15557.230046860204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80897.92,
            "unit": "ns",
            "range": "± 37811.395967668774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5697.45,
            "unit": "ns",
            "range": "± 1986.7620038900002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26697.51020408163,
            "unit": "ns",
            "range": "± 2999.9107770061923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3530113.0872395835,
            "unit": "ns",
            "range": "± 43202.0922758617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 944185.9520833333,
            "unit": "ns",
            "range": "± 14237.649898626007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749194.3193359375,
            "unit": "ns",
            "range": "± 1938.8118536035067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1746847.721484375,
            "unit": "ns",
            "range": "± 14449.131582231199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460982.21087239584,
            "unit": "ns",
            "range": "± 3682.162670974772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429213.391015625,
            "unit": "ns",
            "range": "± 4543.213181566202"
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
          "id": "63bc4b191e95b56d054b34fb3528de1e5bf484b8",
          "message": "fix: Remove temporary code",
          "timestamp": "2025-04-10T11:29:19+09:00",
          "tree_id": "bd8e79b028c3504db709b880689107ae7ab4e4f2",
          "url": "https://github.com/planetarium/libplanet/commit/63bc4b191e95b56d054b34fb3528de1e5bf484b8"
        },
        "date": 1744252582906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2543619.9693877553,
            "unit": "ns",
            "range": "± 175326.46064451613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5441019.758241759,
            "unit": "ns",
            "range": "± 303142.67964578955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4575718.093333334,
            "unit": "ns",
            "range": "± 228613.24369136136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15504100.08,
            "unit": "ns",
            "range": "± 7772262.71691223"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 26783.021505376346,
            "unit": "ns",
            "range": "± 2344.8304980850717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2299259.6923076925,
            "unit": "ns",
            "range": "± 19845.66634215396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2661294.533333333,
            "unit": "ns",
            "range": "± 47512.730456263234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3634922.8333333335,
            "unit": "ns",
            "range": "± 39651.66251319869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2721045.3421052634,
            "unit": "ns",
            "range": "± 92349.03403510855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4023470.193548387,
            "unit": "ns",
            "range": "± 121513.64720294297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2892181.7,
            "unit": "ns",
            "range": "± 16046.883405464483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 7415252.04,
            "unit": "ns",
            "range": "± 194241.9954462903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 13176707.193181818,
            "unit": "ns",
            "range": "± 751668.2783759797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25894836,
            "unit": "ns",
            "range": "± 440482.1454067297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 51508418.42307692,
            "unit": "ns",
            "range": "± 317686.9743907939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284368.4375,
            "unit": "ns",
            "range": "± 30368.78317747129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 499483.41,
            "unit": "ns",
            "range": "± 61165.69737455015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194497.3,
            "unit": "ns",
            "range": "± 17027.477337552125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1077306,
            "unit": "ns",
            "range": "± 43180.44806454126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 974278.8555555556,
            "unit": "ns",
            "range": "± 36267.91681434881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30609.364583333332,
            "unit": "ns",
            "range": "± 3410.5536828460213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125516.39393939394,
            "unit": "ns",
            "range": "± 16508.87568689246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81713.43298969071,
            "unit": "ns",
            "range": "± 21080.156879904862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94555.91,
            "unit": "ns",
            "range": "± 45698.91713150125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7058.46,
            "unit": "ns",
            "range": "± 2174.781145009049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30791.13186813187,
            "unit": "ns",
            "range": "± 2785.1978673328326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4098022.2583333333,
            "unit": "ns",
            "range": "± 55922.1607168258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 984628.98359375,
            "unit": "ns",
            "range": "± 11675.518323489794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730172.0988932292,
            "unit": "ns",
            "range": "± 7700.174226831893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1839846.8407778533,
            "unit": "ns",
            "range": "± 46249.165701117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 473654.2223933293,
            "unit": "ns",
            "range": "± 2082.3449855097265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 441485.4839518229,
            "unit": "ns",
            "range": "± 2515.5339548467678"
          }
        ]
      }
    ]
  }
}