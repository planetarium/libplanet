window.BENCHMARK_DATA = {
  "lastUpdate": 1715244035301,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c14cb2120d7aa40100f05537b15c3d7bc9b3d0b",
          "message": "Merge pull request #3760 from OnedgeLee/feature/srh-istore\n\nAdd tests for NestStateRootHash",
          "timestamp": "2024-04-18T17:04:59+09:00",
          "tree_id": "37cfb32103ba30aa339d0c4c9190dae1cb4d175e",
          "url": "https://github.com/planetarium/libplanet/commit/3c14cb2120d7aa40100f05537b15c3d7bc9b3d0b"
        },
        "date": 1713837477598,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1927369.4444444445,
            "unit": "ns",
            "range": "± 63263.00575237789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2860001.1764705884,
            "unit": "ns",
            "range": "± 186955.30182252606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2421302,
            "unit": "ns",
            "range": "± 310003.3339605667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8180677.5,
            "unit": "ns",
            "range": "± 184146.09513254443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 183263.26530612246,
            "unit": "ns",
            "range": "± 7247.2320543073265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5069226.666666667,
            "unit": "ns",
            "range": "± 24859.590465155256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13588092.857142856,
            "unit": "ns",
            "range": "± 78507.24086434237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32574373.333333332,
            "unit": "ns",
            "range": "± 259167.55602358506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64645160,
            "unit": "ns",
            "range": "± 522186.78486315056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131180593.33333333,
            "unit": "ns",
            "range": "± 1099447.7311467833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3250566.0907451925,
            "unit": "ns",
            "range": "± 6886.996096999566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062544.2447916667,
            "unit": "ns",
            "range": "± 2211.529460988667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731017.0522836539,
            "unit": "ns",
            "range": "± 1981.0065056820877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958769.2447916667,
            "unit": "ns",
            "range": "± 5709.918748654327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608807.5544084822,
            "unit": "ns",
            "range": "± 1042.2695930339871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554616.1263020834,
            "unit": "ns",
            "range": "± 1035.784051083236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3015807.1428571427,
            "unit": "ns",
            "range": "± 85024.05728651343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2702629.487179487,
            "unit": "ns",
            "range": "± 80688.2375158505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3442029.1666666665,
            "unit": "ns",
            "range": "± 102747.99777172931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3380306,
            "unit": "ns",
            "range": "± 372179.7990110683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8848465.625,
            "unit": "ns",
            "range": "± 235128.59982924513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172057.97101449277,
            "unit": "ns",
            "range": "± 7820.9824453780875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164525.67567567568,
            "unit": "ns",
            "range": "± 7667.241485890598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146018.75,
            "unit": "ns",
            "range": "± 2686.439713325675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2748986.6666666665,
            "unit": "ns",
            "range": "± 37460.05237328859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2457660,
            "unit": "ns",
            "range": "± 35157.25489040024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9991.666666666666,
            "unit": "ns",
            "range": "± 1281.0083747346662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53664.583333333336,
            "unit": "ns",
            "range": "± 7568.897286946816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42874.509803921566,
            "unit": "ns",
            "range": "± 1759.9821745977886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49511.34020618557,
            "unit": "ns",
            "range": "± 9835.45749961862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2128.865979381443,
            "unit": "ns",
            "range": "± 309.5557175502356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8973.333333333334,
            "unit": "ns",
            "range": "± 878.9421629679036"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "044891137bcb9cbbd0e114530fbb5b272e93c5ed",
          "message": "Merge pull request #3765 from OnedgeLee/feature/srh-blockchain\n\nPostpone state root hash",
          "timestamp": "2024-05-02T17:21:21+09:00",
          "tree_id": "2627712250e2e4140e0591b901664678d0ad104c",
          "url": "https://github.com/planetarium/libplanet/commit/044891137bcb9cbbd0e114530fbb5b272e93c5ed"
        },
        "date": 1714638630550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1929760.2040816327,
            "unit": "ns",
            "range": "± 224524.03620313713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3052427.777777778,
            "unit": "ns",
            "range": "± 311549.19608189637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2531974.7474747472,
            "unit": "ns",
            "range": "± 282209.53944138973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8419533.333333334,
            "unit": "ns",
            "range": "± 394094.8629779904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 181684.2857142857,
            "unit": "ns",
            "range": "± 8516.065562852804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5182200,
            "unit": "ns",
            "range": "± 43717.84532659403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13515380,
            "unit": "ns",
            "range": "± 196879.59046802475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34888920,
            "unit": "ns",
            "range": "± 470815.942502254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67223866.66666667,
            "unit": "ns",
            "range": "± 928909.2387362308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132120890,
            "unit": "ns",
            "range": "± 1842342.6665913311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3296655.703125,
            "unit": "ns",
            "range": "± 9658.553826644127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069634.5947265625,
            "unit": "ns",
            "range": "± 27230.454888301236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744637.7720424107,
            "unit": "ns",
            "range": "± 1654.9790275509836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971697.544642857,
            "unit": "ns",
            "range": "± 8193.1172246475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609639.1075721154,
            "unit": "ns",
            "range": "± 1138.799631699847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563446.4564732143,
            "unit": "ns",
            "range": "± 1174.263271757244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2422657.1428571427,
            "unit": "ns",
            "range": "± 60644.497955504026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2649989.7435897435,
            "unit": "ns",
            "range": "± 90521.11935859236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4088886.6666666665,
            "unit": "ns",
            "range": "± 60878.80075159482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2746667.4418604653,
            "unit": "ns",
            "range": "± 100740.00416189292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3779427.272727273,
            "unit": "ns",
            "range": "± 95080.12171560648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174397.56097560975,
            "unit": "ns",
            "range": "± 9193.314473831218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169066.66666666666,
            "unit": "ns",
            "range": "± 7113.20897594636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149600,
            "unit": "ns",
            "range": "± 3774.4252164118598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2785193.3333333335,
            "unit": "ns",
            "range": "± 43637.36057663477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2439541.1764705884,
            "unit": "ns",
            "range": "± 38651.50480291048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10583.870967741936,
            "unit": "ns",
            "range": "± 1251.8065486901792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55992.857142857145,
            "unit": "ns",
            "range": "± 5812.872313760425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44430.357142857145,
            "unit": "ns",
            "range": "± 1909.8709754475938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60479.79797979798,
            "unit": "ns",
            "range": "± 14417.838864052816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2513.684210526316,
            "unit": "ns",
            "range": "± 436.2827812022522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9879.347826086956,
            "unit": "ns",
            "range": "± 1528.2352131457117"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6f58f4280f062e4e71fcee97e291728bfc08326",
          "message": "Merge pull request #3768 from OnedgeLee/feature/srh-libplanet-net\n\nSloth update for Libplanet.Net",
          "timestamp": "2024-05-02T19:00:16+09:00",
          "tree_id": "f4b0321cb2e3f815be709a435637ba74a4d41a7f",
          "url": "https://github.com/planetarium/libplanet/commit/f6f58f4280f062e4e71fcee97e291728bfc08326"
        },
        "date": 1714644559473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1861065.9793814432,
            "unit": "ns",
            "range": "± 203878.96270755326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2945774.418604651,
            "unit": "ns",
            "range": "± 159411.18507221693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2538201,
            "unit": "ns",
            "range": "± 350754.36237666756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8147719.354838709,
            "unit": "ns",
            "range": "± 134904.9873537047"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 177710.3896103896,
            "unit": "ns",
            "range": "± 8075.606290023651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5085286.666666667,
            "unit": "ns",
            "range": "± 22809.423699949315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13629286.666666666,
            "unit": "ns",
            "range": "± 87623.29164152211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33725464.28571428,
            "unit": "ns",
            "range": "± 246974.6626903031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66696723.07692308,
            "unit": "ns",
            "range": "± 409888.08259866526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132311040,
            "unit": "ns",
            "range": "± 863234.147014255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3282542.3076923075,
            "unit": "ns",
            "range": "± 5495.1903389771605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058180.9505208333,
            "unit": "ns",
            "range": "± 2491.263221755037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736658.8641826923,
            "unit": "ns",
            "range": "± 1273.401317841513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919723.8020833333,
            "unit": "ns",
            "range": "± 2730.807899159204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618048.3854166666,
            "unit": "ns",
            "range": "± 1061.8710432965474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557841.064453125,
            "unit": "ns",
            "range": "± 862.33113378345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3007735,
            "unit": "ns",
            "range": "± 67792.50288467317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2767291.6666666665,
            "unit": "ns",
            "range": "± 64053.9576665925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3366354.098360656,
            "unit": "ns",
            "range": "± 91907.35838109028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2866848.6486486485,
            "unit": "ns",
            "range": "± 93708.06505555676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3781470.588235294,
            "unit": "ns",
            "range": "± 60248.92067139241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176784.78260869565,
            "unit": "ns",
            "range": "± 11069.519925488781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170297.8021978022,
            "unit": "ns",
            "range": "± 10055.213993214089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143956.52173913043,
            "unit": "ns",
            "range": "± 5485.927539275704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2696040,
            "unit": "ns",
            "range": "± 38621.25247654642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2409328.5714285714,
            "unit": "ns",
            "range": "± 34508.486772686214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10448.958333333334,
            "unit": "ns",
            "range": "± 1620.395974456579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53200,
            "unit": "ns",
            "range": "± 4321.913484813499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44627.27272727273,
            "unit": "ns",
            "range": "± 1909.0869007493598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53737.755102040814,
            "unit": "ns",
            "range": "± 13460.806146920537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2369.0721649484535,
            "unit": "ns",
            "range": "± 515.2590013653061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10189.36170212766,
            "unit": "ns",
            "range": "± 1277.5537852538446"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "08e801667a7a4e4f7f51805394106ebd804958cf",
          "message": "feat: Consider creating context from pre-sloth block",
          "timestamp": "2024-05-09T17:29:34+09:00",
          "tree_id": "b8ef808ed0b6457a1db58b468a238cafc06796af",
          "url": "https://github.com/planetarium/libplanet/commit/08e801667a7a4e4f7f51805394106ebd804958cf"
        },
        "date": 1715243966346,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966812.6315789474,
            "unit": "ns",
            "range": "± 82272.70590310094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1729730.5970149254,
            "unit": "ns",
            "range": "± 81531.50392928801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1510418.2795698924,
            "unit": "ns",
            "range": "± 117001.21324736669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6689930.769230769,
            "unit": "ns",
            "range": "± 180521.9073004288"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36398.9898989899,
            "unit": "ns",
            "range": "± 4970.453413175702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5043400,
            "unit": "ns",
            "range": "± 16913.717691679914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13180257.142857144,
            "unit": "ns",
            "range": "± 61627.9371499861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32696057.14285714,
            "unit": "ns",
            "range": "± 168950.83360499935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66458606.666666664,
            "unit": "ns",
            "range": "± 269621.60115525575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128736700,
            "unit": "ns",
            "range": "± 767253.3842964042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3309969.8102678573,
            "unit": "ns",
            "range": "± 4422.658764431946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078386.953125,
            "unit": "ns",
            "range": "± 5260.1996519540935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738557.1875,
            "unit": "ns",
            "range": "± 2277.3650611454236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925360,
            "unit": "ns",
            "range": "± 7582.585947037372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614985.2473958334,
            "unit": "ns",
            "range": "± 1888.7625289097023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558124.9372209822,
            "unit": "ns",
            "range": "± 1399.0488036312818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120156.25,
            "unit": "ns",
            "range": "± 40760.33969027573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2204031.8181818184,
            "unit": "ns",
            "range": "± 81655.9537205505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2698746.6666666665,
            "unit": "ns",
            "range": "± 41496.02161079794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2353336.3636363638,
            "unit": "ns",
            "range": "± 55825.2080409366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3023314.285714286,
            "unit": "ns",
            "range": "± 40948.3137089233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173827.47252747254,
            "unit": "ns",
            "range": "± 10353.679602860102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169076.38888888888,
            "unit": "ns",
            "range": "± 8066.859574576166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148260.7142857143,
            "unit": "ns",
            "range": "± 4001.512610826458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2806926.6666666665,
            "unit": "ns",
            "range": "± 41178.81679190106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2477514.285714286,
            "unit": "ns",
            "range": "± 23238.590488927846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12020.212765957447,
            "unit": "ns",
            "range": "± 1811.7050596223114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54553.68421052631,
            "unit": "ns",
            "range": "± 5037.092426388668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48135.10638297872,
            "unit": "ns",
            "range": "± 4192.946136118246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51071.134020618556,
            "unit": "ns",
            "range": "± 10379.737460180197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2265.151515151515,
            "unit": "ns",
            "range": "± 401.36594233448386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9150,
            "unit": "ns",
            "range": "± 1048.8088481701516"
          }
        ]
      }
    ]
  }
}