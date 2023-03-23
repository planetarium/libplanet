window.BENCHMARK_DATA = {
  "lastUpdate": 1679540938292,
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1679470070837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115651.87634408602,
            "unit": "ns",
            "range": "± 7615.834504096197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94884.52688172043,
            "unit": "ns",
            "range": "± 13388.30313597218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204997.97872340426,
            "unit": "ns",
            "range": "± 21534.301304342545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180393.3085106383,
            "unit": "ns",
            "range": "± 15229.536098828425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3490600.1363636362,
            "unit": "ns",
            "range": "± 84459.47108710694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9653495.510869564,
            "unit": "ns",
            "range": "± 581183.7909471713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17055.2183908046,
            "unit": "ns",
            "range": "± 2652.3446074873355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51335.76315789474,
            "unit": "ns",
            "range": "± 7523.2474176120895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43936.74725274725,
            "unit": "ns",
            "range": "± 4150.241807127779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100468.92631578947,
            "unit": "ns",
            "range": "± 16061.62204670215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5555.576470588236,
            "unit": "ns",
            "range": "± 728.5324514207375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15654.85393258427,
            "unit": "ns",
            "range": "± 1814.5296695297313"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4525636.079769737,
            "unit": "ns",
            "range": "± 98470.7781600471"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5667849.357142857,
            "unit": "ns",
            "range": "± 480386.7435347725"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25866524.16923077,
            "unit": "ns",
            "range": "± 1191134.3208971617"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6670823.631868131,
            "unit": "ns",
            "range": "± 658245.2468847121"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29289264.184210528,
            "unit": "ns",
            "range": "± 993173.9540225583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6263007.756696428,
            "unit": "ns",
            "range": "± 56655.45334848442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905620.6535644531,
            "unit": "ns",
            "range": "± 33599.9854372677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1231394.9555989583,
            "unit": "ns",
            "range": "± 18506.885894773503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642078.8624441964,
            "unit": "ns",
            "range": "± 27261.8103100122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836811.6605747768,
            "unit": "ns",
            "range": "± 6212.059035465578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710594.0339192708,
            "unit": "ns",
            "range": "± 7311.210162143289"
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1679470217664,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 125266.6182795699,
            "unit": "ns",
            "range": "± 11820.58056568166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98145.56842105264,
            "unit": "ns",
            "range": "± 11678.763929833473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219977.78282828283,
            "unit": "ns",
            "range": "± 29421.655605214415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201246.57894736843,
            "unit": "ns",
            "range": "± 17712.94459558773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3644194.709677419,
            "unit": "ns",
            "range": "± 111103.77765440548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10042473.333333334,
            "unit": "ns",
            "range": "± 361618.9015317204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20186.141414141413,
            "unit": "ns",
            "range": "± 3728.291579563884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56850.13684210526,
            "unit": "ns",
            "range": "± 9197.675020294388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54588.45918367347,
            "unit": "ns",
            "range": "± 7759.103540748043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116287.06382978724,
            "unit": "ns",
            "range": "± 14256.146310448496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6455.057894736842,
            "unit": "ns",
            "range": "± 771.7258458721011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17335.864583333332,
            "unit": "ns",
            "range": "± 1883.493211085758"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4537722.014539931,
            "unit": "ns",
            "range": "± 91594.4362243306"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5422575.295698925,
            "unit": "ns",
            "range": "± 370172.25933456974"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26066611.63917526,
            "unit": "ns",
            "range": "± 1616364.2071522046"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6410056.225,
            "unit": "ns",
            "range": "± 327965.4903866508"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29890007.5625,
            "unit": "ns",
            "range": "± 565197.9632863714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6681766.71765625,
            "unit": "ns",
            "range": "± 152302.90542172958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1941801.529203869,
            "unit": "ns",
            "range": "± 44747.97141541099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1226101.5546875,
            "unit": "ns",
            "range": "± 9351.846060034208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2445990.0733173075,
            "unit": "ns",
            "range": "± 23269.109333009026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821093.9247295673,
            "unit": "ns",
            "range": "± 4979.9153670305295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 708366.7197265625,
            "unit": "ns",
            "range": "± 6541.041951550179"
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
          "id": "8aa2e534c2706a35f0f5712c365b5c388ee9039f",
          "message": "Merge pull request #2978 from greymistcube/refactor/additional-evaluation-logging\n\n♻️ Added additional metrics to measure evaluation duration",
          "timestamp": "2023-03-22T16:32:51+09:00",
          "tree_id": "31f691be0aaf62e39e260347c1ac0ce65a4cae9f",
          "url": "https://github.com/planetarium/libplanet/commit/8aa2e534c2706a35f0f5712c365b5c388ee9039f"
        },
        "date": 1679471238301,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134105.55670103093,
            "unit": "ns",
            "range": "± 11842.706853771044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 120493.48453608247,
            "unit": "ns",
            "range": "± 16190.547035689142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241509.57142857142,
            "unit": "ns",
            "range": "± 25356.0110940797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227863.13725490196,
            "unit": "ns",
            "range": "± 9292.461579193336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3855854.269230769,
            "unit": "ns",
            "range": "± 47374.60479897404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10606140.4,
            "unit": "ns",
            "range": "± 136732.1357126512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24346.36170212766,
            "unit": "ns",
            "range": "± 2857.8534714955226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62903.239583333336,
            "unit": "ns",
            "range": "± 7504.2185030818255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64556.3275862069,
            "unit": "ns",
            "range": "± 3537.8520983681365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134156.55789473685,
            "unit": "ns",
            "range": "± 16149.259483527207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9431.03125,
            "unit": "ns",
            "range": "± 653.1828945632303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23703.974226804123,
            "unit": "ns",
            "range": "± 3152.1932645275715"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4880175.951904297,
            "unit": "ns",
            "range": "± 91736.66765036063"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5645652.625,
            "unit": "ns",
            "range": "± 259486.97975578232"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26089841,
            "unit": "ns",
            "range": "± 809460.6791692212"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6777726.06,
            "unit": "ns",
            "range": "± 435143.6475911788"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31970974.03030303,
            "unit": "ns",
            "range": "± 1005429.1482785934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7063938.361979167,
            "unit": "ns",
            "range": "± 22533.724155147054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1953196.3606770833,
            "unit": "ns",
            "range": "± 8338.336553713974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1306411.1884765625,
            "unit": "ns",
            "range": "± 6444.3212871243795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650205.870963542,
            "unit": "ns",
            "range": "± 43481.867499002976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799203.591796875,
            "unit": "ns",
            "range": "± 2246.407273241162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721156.6534505208,
            "unit": "ns",
            "range": "± 2266.5599197387996"
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
          "id": "f96f3225123873e5c62fdd47de65bfabd23754a6",
          "message": "Merge pull request #2979 from limebell/log/getstate-logging\n\nAdd time measure for `AccountStateDeltaImpl.GetState()` method",
          "timestamp": "2023-03-22T18:06:30+09:00",
          "tree_id": "5419d5b724fb3ad6d51fee9bcfc63f452a315433",
          "url": "https://github.com/planetarium/libplanet/commit/f96f3225123873e5c62fdd47de65bfabd23754a6"
        },
        "date": 1679476919566,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 124746.97826086957,
            "unit": "ns",
            "range": "± 10690.059148242763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99126.81182795699,
            "unit": "ns",
            "range": "± 14429.209968865911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231328,
            "unit": "ns",
            "range": "± 37003.17108715499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185796.29166666666,
            "unit": "ns",
            "range": "± 20378.137503302616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3571798.3333333335,
            "unit": "ns",
            "range": "± 116424.3274735016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9481344.342857143,
            "unit": "ns",
            "range": "± 457158.7327048859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17321.697916666668,
            "unit": "ns",
            "range": "± 3248.9809223971874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51086.927083333336,
            "unit": "ns",
            "range": "± 6944.869628945402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46148.9587628866,
            "unit": "ns",
            "range": "± 6495.540506951554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130818.42045454546,
            "unit": "ns",
            "range": "± 22781.572165643604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7305.421052631579,
            "unit": "ns",
            "range": "± 1085.6420061463716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16814.983870967742,
            "unit": "ns",
            "range": "± 2040.7023013877358"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4820106.100408381,
            "unit": "ns",
            "range": "± 310116.8802420422"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6084187.2,
            "unit": "ns",
            "range": "± 537918.1315918515"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27389434.556962024,
            "unit": "ns",
            "range": "± 1412266.1927794772"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7050278.180555556,
            "unit": "ns",
            "range": "± 346056.7405971766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30240239.086956523,
            "unit": "ns",
            "range": "± 736015.652118641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6236411.59765625,
            "unit": "ns",
            "range": "± 46330.17685813012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911403.743001302,
            "unit": "ns",
            "range": "± 15206.344748814823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331091.9817243305,
            "unit": "ns",
            "range": "± 17130.14289033455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2580406.280949519,
            "unit": "ns",
            "range": "± 19655.208407250524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864844.567952474,
            "unit": "ns",
            "range": "± 5742.59516771917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736805.3205378606,
            "unit": "ns",
            "range": "± 6505.9340217573845"
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
          "id": "7944e4a33f6c9e7c3358b07f63623d18f1032d57",
          "message": "Merge pull request #2981 from greymistcube/chore/more-logging\n\n🔧 Added logging info",
          "timestamp": "2023-03-23T11:54:01+09:00",
          "tree_id": "d66f794203c10cf5dacdcbd2cbed3dc4742f99b4",
          "url": "https://github.com/planetarium/libplanet/commit/7944e4a33f6c9e7c3358b07f63623d18f1032d57"
        },
        "date": 1679540881228,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 125883.77083333333,
            "unit": "ns",
            "range": "± 11424.401907163607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98986.01020408163,
            "unit": "ns",
            "range": "± 14954.808233781308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199951.19318181818,
            "unit": "ns",
            "range": "± 17568.024241981497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172146.4516129032,
            "unit": "ns",
            "range": "± 7786.039083139622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3601638.5625,
            "unit": "ns",
            "range": "± 67076.93609477478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9687213.039215686,
            "unit": "ns",
            "range": "± 392299.6750346837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17104.83695652174,
            "unit": "ns",
            "range": "± 3086.7543510415844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48585.35106382979,
            "unit": "ns",
            "range": "± 6480.622249938405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49765.82653061225,
            "unit": "ns",
            "range": "± 7865.048686809689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117268.29545454546,
            "unit": "ns",
            "range": "± 11582.005078389542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7734.175824175824,
            "unit": "ns",
            "range": "± 1023.7381457016198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24718.074468085106,
            "unit": "ns",
            "range": "± 3008.9882779367"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4753206.9407327585,
            "unit": "ns",
            "range": "± 138270.3047156665"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6158668.795918368,
            "unit": "ns",
            "range": "± 244957.3884893027"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26056564.285714287,
            "unit": "ns",
            "range": "± 950403.771367735"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6734047.166666667,
            "unit": "ns",
            "range": "± 486992.062158269"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28917323.162790697,
            "unit": "ns",
            "range": "± 1051183.3385197467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6673507.263020833,
            "unit": "ns",
            "range": "± 87218.79222545624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2097011.3951322115,
            "unit": "ns",
            "range": "± 11730.719343440851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1307902.597377232,
            "unit": "ns",
            "range": "± 7544.612388526445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2842621.1143973214,
            "unit": "ns",
            "range": "± 44262.863929393505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787747.1941964285,
            "unit": "ns",
            "range": "± 3667.5089912280305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729784.4553571428,
            "unit": "ns",
            "range": "± 5581.426999008627"
          }
        ]
      }
    ]
  }
}