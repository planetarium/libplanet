window.BENCHMARK_DATA = {
  "lastUpdate": 1721354640012,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "3406e0388638865dc65d0e49f17ff8048e89dd10",
          "message": "temp: fix build error due to rebase",
          "timestamp": "2024-07-16T11:02:30+09:00",
          "tree_id": "b8b3773f9ae97678a42355348a63c5c88403d520",
          "url": "https://github.com/planetarium/libplanet/commit/3406e0388638865dc65d0e49f17ff8048e89dd10"
        },
        "date": 1721095854431,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203335.24285714285,
            "unit": "ns",
            "range": "± 9535.631244824175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190475.54545454544,
            "unit": "ns",
            "range": "± 6940.733392826945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165656.38888888888,
            "unit": "ns",
            "range": "± 3515.460879146639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3054395.066666667,
            "unit": "ns",
            "range": "± 55528.303155709524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2878618.1666666665,
            "unit": "ns",
            "range": "± 59206.78929992643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12780.306818181818,
            "unit": "ns",
            "range": "± 779.3109667786562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61021.7962962963,
            "unit": "ns",
            "range": "± 3141.0906403845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51037.083333333336,
            "unit": "ns",
            "range": "± 567.5296481375677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59077.31443298969,
            "unit": "ns",
            "range": "± 9123.256753952477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2909.814432989691,
            "unit": "ns",
            "range": "± 365.63749494025575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12271.605263157895,
            "unit": "ns",
            "range": "± 1033.284429480115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022399.9269662921,
            "unit": "ns",
            "range": "± 56956.49047755815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1943501.6578947369,
            "unit": "ns",
            "range": "± 60017.6113714229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1755823.4494382022,
            "unit": "ns",
            "range": "± 97270.0101403552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8478114.884615384,
            "unit": "ns",
            "range": "± 215184.37528060944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3752633.9773995536,
            "unit": "ns",
            "range": "± 10180.200531762008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226292.542689732,
            "unit": "ns",
            "range": "± 1748.3680942725073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777369.1399739584,
            "unit": "ns",
            "range": "± 733.2573737014527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961470.5571986607,
            "unit": "ns",
            "range": "± 1691.9518862275174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619972.6164713542,
            "unit": "ns",
            "range": "± 385.5078920400601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569166.3229631697,
            "unit": "ns",
            "range": "± 714.4914491838032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2476071.6,
            "unit": "ns",
            "range": "± 36939.09382406202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2490180.875,
            "unit": "ns",
            "range": "± 47644.506193089386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3007889.5833333335,
            "unit": "ns",
            "range": "± 20772.539414325274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2614261.5185185187,
            "unit": "ns",
            "range": "± 73005.24237465647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3307870.6666666665,
            "unit": "ns",
            "range": "± 51311.807505912424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32535.2,
            "unit": "ns",
            "range": "± 309.5827145414568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10345169.466666667,
            "unit": "ns",
            "range": "± 110538.88424691277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26951111.5,
            "unit": "ns",
            "range": "± 135079.2234526518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69752895.43333334,
            "unit": "ns",
            "range": "± 430856.6711898296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140129736.56666666,
            "unit": "ns",
            "range": "± 732401.5136418847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288195664.93333334,
            "unit": "ns",
            "range": "± 2672314.144741527"
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
          "id": "62f1624497569651272b9ed26ab5cd93cadcf303",
          "message": "Changelog",
          "timestamp": "2024-07-16T11:26:29+09:00",
          "tree_id": "2df40c8fcf5301123e95d348135c4ba1337cbbab",
          "url": "https://github.com/planetarium/libplanet/commit/62f1624497569651272b9ed26ab5cd93cadcf303"
        },
        "date": 1721097299865,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200474.39285714287,
            "unit": "ns",
            "range": "± 5624.923593484598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198837.23880597015,
            "unit": "ns",
            "range": "± 8853.581649988706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170146.79787234042,
            "unit": "ns",
            "range": "± 6476.254640624684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3019993.6,
            "unit": "ns",
            "range": "± 26292.524252016145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2936531.2666666666,
            "unit": "ns",
            "range": "± 41097.4409326119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12667.837209302326,
            "unit": "ns",
            "range": "± 1137.8725619791794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59450.86111111111,
            "unit": "ns",
            "range": "± 2937.6746927045024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50253.25,
            "unit": "ns",
            "range": "± 403.41612285804615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63636.26315789474,
            "unit": "ns",
            "range": "± 9821.557898707862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3374.9897959183672,
            "unit": "ns",
            "range": "± 316.47626561707114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15572.98969072165,
            "unit": "ns",
            "range": "± 1885.8699500873886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012696.5810810811,
            "unit": "ns",
            "range": "± 50536.100330115776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1898726.7407407407,
            "unit": "ns",
            "range": "± 51740.04547855083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1703146.4605263157,
            "unit": "ns",
            "range": "± 86286.38445416377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8413207.214285715,
            "unit": "ns",
            "range": "± 305269.28562464693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3800848.469951923,
            "unit": "ns",
            "range": "± 6734.684833541201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209012.2743489584,
            "unit": "ns",
            "range": "± 2509.9392392695604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 788208.3927873884,
            "unit": "ns",
            "range": "± 1842.2150035264935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930134.6391927083,
            "unit": "ns",
            "range": "± 3471.2092513568305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621169.267578125,
            "unit": "ns",
            "range": "± 1147.7428143752904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576485.9171875,
            "unit": "ns",
            "range": "± 480.3308766349846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2502705.8,
            "unit": "ns",
            "range": "± 40532.21023757349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2561417.617647059,
            "unit": "ns",
            "range": "± 49217.05996893043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3045492.566666667,
            "unit": "ns",
            "range": "± 35499.88985187472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2573682.9574468085,
            "unit": "ns",
            "range": "± 99852.37100229898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3317050.533333333,
            "unit": "ns",
            "range": "± 51913.022456339226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32213.666666666668,
            "unit": "ns",
            "range": "± 574.4173030952655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10638910,
            "unit": "ns",
            "range": "± 169502.72753431264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27427280.6,
            "unit": "ns",
            "range": "± 253610.47846868294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69395555.46666667,
            "unit": "ns",
            "range": "± 572173.5864388242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138304413.4,
            "unit": "ns",
            "range": "± 358061.4504672148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283820034.9,
            "unit": "ns",
            "range": "± 1523892.5088668633"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "436c989fe3f04a770351e863bba274304740e9fc",
          "message": "Fixed tests",
          "timestamp": "2024-07-18T13:58:06+09:00",
          "tree_id": "a8052802bcadc662005a819385c53df8d83b860f",
          "url": "https://github.com/planetarium/libplanet/commit/436c989fe3f04a770351e863bba274304740e9fc"
        },
        "date": 1721281437794,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199736.20289855072,
            "unit": "ns",
            "range": "± 9596.002849807875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198670.77966101695,
            "unit": "ns",
            "range": "± 8384.016379845058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166688.9375,
            "unit": "ns",
            "range": "± 3256.5866991632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3041497.588235294,
            "unit": "ns",
            "range": "± 60156.57948019778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2799158.933333333,
            "unit": "ns",
            "range": "± 39515.4314621275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12824.476744186046,
            "unit": "ns",
            "range": "± 985.7700689636346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60088.106741573036,
            "unit": "ns",
            "range": "± 3323.229893211701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49553.11538461538,
            "unit": "ns",
            "range": "± 327.5129866284029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53486.46808510638,
            "unit": "ns",
            "range": "± 8475.701461378365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2845.3645833333335,
            "unit": "ns",
            "range": "± 256.9666421026449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12152.173913043478,
            "unit": "ns",
            "range": "± 1062.9267660950225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015537.8235294118,
            "unit": "ns",
            "range": "± 51188.15456170279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1924353.0172413792,
            "unit": "ns",
            "range": "± 56284.06289757893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1685524.046875,
            "unit": "ns",
            "range": "± 71615.66971178591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8447855.293103449,
            "unit": "ns",
            "range": "± 245600.8652333787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3867538.0002790177,
            "unit": "ns",
            "range": "± 6852.9665641713555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216476.4878627232,
            "unit": "ns",
            "range": "± 1178.7696948981143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755850.896484375,
            "unit": "ns",
            "range": "± 815.5574286269558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918797.8263020834,
            "unit": "ns",
            "range": "± 2945.167425080055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632165.9584635417,
            "unit": "ns",
            "range": "± 443.51346499373085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577896.748046875,
            "unit": "ns",
            "range": "± 355.71416166855073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2514537.375,
            "unit": "ns",
            "range": "± 48477.27923041199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2581121.1428571427,
            "unit": "ns",
            "range": "± 28552.78175282009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3039230.033333333,
            "unit": "ns",
            "range": "± 30916.415117138633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2595897.625,
            "unit": "ns",
            "range": "± 65233.71619020103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3355309.9583333335,
            "unit": "ns",
            "range": "± 86625.47400735068"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32253.928571428572,
            "unit": "ns",
            "range": "± 279.7223112813339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10663632.6,
            "unit": "ns",
            "range": "± 61625.82190909448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27354294.4,
            "unit": "ns",
            "range": "± 156315.95834115686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69396481.3,
            "unit": "ns",
            "range": "± 360790.7563864209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138437948.42857143,
            "unit": "ns",
            "range": "± 813868.956271946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286880736.76666665,
            "unit": "ns",
            "range": "± 1349740.8585109147"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "7c03e1651d680b7542d18e12c29bec3d83846a67",
          "message": "Renamed IsBlockAction to IsPolicyAction for clarification",
          "timestamp": "2024-07-19T10:48:51+09:00",
          "tree_id": "e74a6082a67c212055a96436aace5083dbfff98e",
          "url": "https://github.com/planetarium/libplanet/commit/7c03e1651d680b7542d18e12c29bec3d83846a67"
        },
        "date": 1721354239842,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199754.4,
            "unit": "ns",
            "range": "± 8257.962194149353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193792.3448275862,
            "unit": "ns",
            "range": "± 7882.4946682377995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168218.85714285713,
            "unit": "ns",
            "range": "± 2815.1917468315673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3006824.230769231,
            "unit": "ns",
            "range": "± 25369.347827492682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2865404,
            "unit": "ns",
            "range": "± 53557.16639131188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12695.975903614459,
            "unit": "ns",
            "range": "± 691.0593666196639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60744.56451612903,
            "unit": "ns",
            "range": "± 3886.0155010052777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50419.142857142855,
            "unit": "ns",
            "range": "± 574.9224505755747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54332.204081632655,
            "unit": "ns",
            "range": "± 8625.633663809936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2665.0851063829787,
            "unit": "ns",
            "range": "± 277.82416538625506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11882.72619047619,
            "unit": "ns",
            "range": "± 651.1304599942324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013208.0512820513,
            "unit": "ns",
            "range": "± 43343.83010808914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1964499.95,
            "unit": "ns",
            "range": "± 43377.070922775245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1707712.3426966292,
            "unit": "ns",
            "range": "± 94637.85387451986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8306041.535714285,
            "unit": "ns",
            "range": "± 207372.83063718874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3676489.0501802885,
            "unit": "ns",
            "range": "± 10181.401709342905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201269.9186197917,
            "unit": "ns",
            "range": "± 2541.303105401565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769701.4626116072,
            "unit": "ns",
            "range": "± 907.9583944278355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967543.000279018,
            "unit": "ns",
            "range": "± 1112.955461566222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625891.3460518973,
            "unit": "ns",
            "range": "± 643.2255385574664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571859.6068359375,
            "unit": "ns",
            "range": "± 728.4330939974276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2428793.7666666666,
            "unit": "ns",
            "range": "± 29676.202323619185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2568518.3571428573,
            "unit": "ns",
            "range": "± 33814.413542286835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3032004.6923076925,
            "unit": "ns",
            "range": "± 17932.872652313752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2586746.552631579,
            "unit": "ns",
            "range": "± 89151.4003572536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3240636.5625,
            "unit": "ns",
            "range": "± 61133.250962105994"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32039.571428571428,
            "unit": "ns",
            "range": "± 368.2953380698106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10474617.133333333,
            "unit": "ns",
            "range": "± 59277.711941175265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26998999.6,
            "unit": "ns",
            "range": "± 142664.13722235872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69099210.07142857,
            "unit": "ns",
            "range": "± 174337.34459395506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137093109.26666668,
            "unit": "ns",
            "range": "± 369001.29188962135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286856043.0714286,
            "unit": "ns",
            "range": "± 1099978.9317407203"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "00a84a20430c43ae8aef8f1b47e2439c4208717f",
          "message": "Renamed IsBlockAction to IsPolicyAction for clarification",
          "timestamp": "2024-07-19T10:51:14+09:00",
          "tree_id": "e118203ae6582b70a19ad03a75b1454a5ebf512f",
          "url": "https://github.com/planetarium/libplanet/commit/00a84a20430c43ae8aef8f1b47e2439c4208717f"
        },
        "date": 1721354365037,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198606.631147541,
            "unit": "ns",
            "range": "± 8062.946612902362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194402.51219512196,
            "unit": "ns",
            "range": "± 6688.891672474414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169308.3,
            "unit": "ns",
            "range": "± 3422.0380677079124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3059167.2333333334,
            "unit": "ns",
            "range": "± 52218.950286908934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2804764.5,
            "unit": "ns",
            "range": "± 55775.64689001823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12666.922222222222,
            "unit": "ns",
            "range": "± 820.548463163207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60918.8021978022,
            "unit": "ns",
            "range": "± 5028.568550944759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52016.444444444445,
            "unit": "ns",
            "range": "± 1063.5447650758576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64326.86559139785,
            "unit": "ns",
            "range": "± 6522.450897685335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3300.9895833333335,
            "unit": "ns",
            "range": "± 313.84136102552014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12357.129032258064,
            "unit": "ns",
            "range": "± 807.6955574995372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017505.2921348314,
            "unit": "ns",
            "range": "± 59135.19649156081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1963326.5555555555,
            "unit": "ns",
            "range": "± 54609.45088558977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1674222.4444444445,
            "unit": "ns",
            "range": "± 75214.44142721621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8367783.387096774,
            "unit": "ns",
            "range": "± 125548.8547824252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3763128.0323016825,
            "unit": "ns",
            "range": "± 5251.170592352874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203271.1529017857,
            "unit": "ns",
            "range": "± 3778.89692794532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756688.4623325893,
            "unit": "ns",
            "range": "± 1121.7849942525427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958421.25546875,
            "unit": "ns",
            "range": "± 4139.192355420806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633599.5862379808,
            "unit": "ns",
            "range": "± 702.7818050742087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 597200.5158503606,
            "unit": "ns",
            "range": "± 375.09408531398645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2400267.6333333333,
            "unit": "ns",
            "range": "± 43779.72371978782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2501710.1052631577,
            "unit": "ns",
            "range": "± 52939.79025678841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3059471.8571428573,
            "unit": "ns",
            "range": "± 50220.601477354416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2591593.714285714,
            "unit": "ns",
            "range": "± 72018.69707691249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3330170.224137931,
            "unit": "ns",
            "range": "± 96318.21061976084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32280.433333333334,
            "unit": "ns",
            "range": "± 444.41220676733167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10582413.2,
            "unit": "ns",
            "range": "± 74709.08772431906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27606275.35714286,
            "unit": "ns",
            "range": "± 143299.83202234353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68561008.33333333,
            "unit": "ns",
            "range": "± 314320.87569249235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144089540.85714287,
            "unit": "ns",
            "range": "± 683755.8126864001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288595439.1666667,
            "unit": "ns",
            "range": "± 1443321.4068709547"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "fad901b261b4372060b6c936a909509b25ccfa03",
          "message": "Renamed IsBlockAction to IsPolicyAction for clarification",
          "timestamp": "2024-07-19T10:55:10+09:00",
          "tree_id": "124c39518d3b3b8c8321d4041513d400655ed3c8",
          "url": "https://github.com/planetarium/libplanet/commit/fad901b261b4372060b6c936a909509b25ccfa03"
        },
        "date": 1721354614109,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199700.07142857142,
            "unit": "ns",
            "range": "± 8250.538800823622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193088.375,
            "unit": "ns",
            "range": "± 6789.7454551510755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169161.05263157896,
            "unit": "ns",
            "range": "± 3354.1089804345324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3008883.033333333,
            "unit": "ns",
            "range": "± 45118.23344734947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2723975.966666667,
            "unit": "ns",
            "range": "± 50601.18659798217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12642.634146341463,
            "unit": "ns",
            "range": "± 644.2403031496468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60170.38961038961,
            "unit": "ns",
            "range": "± 2889.8874916902005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49771.333333333336,
            "unit": "ns",
            "range": "± 416.455679914842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51713.52127659575,
            "unit": "ns",
            "range": "± 6151.485751083148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2574.0625,
            "unit": "ns",
            "range": "± 246.7452047206421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12102.544776119403,
            "unit": "ns",
            "range": "± 548.8186329782507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1020761.8382352941,
            "unit": "ns",
            "range": "± 46306.75889856533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1941716.4042553192,
            "unit": "ns",
            "range": "± 75621.6436902821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1693520.2753623188,
            "unit": "ns",
            "range": "± 77112.73984274852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8376973.921052632,
            "unit": "ns",
            "range": "± 288258.0679920462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3793929.136160714,
            "unit": "ns",
            "range": "± 5783.3200077090405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1253976.44765625,
            "unit": "ns",
            "range": "± 3106.5756736480503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755739.5317708333,
            "unit": "ns",
            "range": "± 1888.5768304360195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961649.37109375,
            "unit": "ns",
            "range": "± 2578.158231509311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639669.28125,
            "unit": "ns",
            "range": "± 1222.3922203353927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566809.6353934152,
            "unit": "ns",
            "range": "± 342.5665962954609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2433623.6333333333,
            "unit": "ns",
            "range": "± 41744.63081962358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2537839.3636363638,
            "unit": "ns",
            "range": "± 58815.48993779936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3088598.714285714,
            "unit": "ns",
            "range": "± 38465.96293463887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2573185.1,
            "unit": "ns",
            "range": "± 38136.23520410552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3256695.8,
            "unit": "ns",
            "range": "± 56930.54802777554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31839.714285714286,
            "unit": "ns",
            "range": "± 416.5922981250888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10441673.214285715,
            "unit": "ns",
            "range": "± 54893.91242720757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27111126.4,
            "unit": "ns",
            "range": "± 151359.40715528716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68960770.13333334,
            "unit": "ns",
            "range": "± 399487.15175868507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138209189.8846154,
            "unit": "ns",
            "range": "± 506104.7415031034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283309468.6,
            "unit": "ns",
            "range": "± 689810.457823928"
          }
        ]
      }
    ]
  }
}