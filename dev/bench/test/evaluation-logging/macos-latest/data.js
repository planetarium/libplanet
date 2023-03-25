window.BENCHMARK_DATA = {
  "lastUpdate": 1679742443928,
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
          "id": "4ac5b5442c64be640ce105c95625a639758a24c6",
          "message": "Merge pull request #2983 from greymistcube/refactor/state-caching\n\n🔧 Added state caching",
          "timestamp": "2023-03-23T18:20:56+09:00",
          "tree_id": "d4cdb454c29ceb38ec313af5f3988a6cad100edc",
          "url": "https://github.com/planetarium/libplanet/commit/4ac5b5442c64be640ce105c95625a639758a24c6"
        },
        "date": 1679564251473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 139610.5617977528,
            "unit": "ns",
            "range": "± 11338.528177248196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 125541.87755102041,
            "unit": "ns",
            "range": "± 14711.872565265248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242120.1875,
            "unit": "ns",
            "range": "± 24233.56569775962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230392.75,
            "unit": "ns",
            "range": "± 11344.070505191712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3779690.88,
            "unit": "ns",
            "range": "± 96552.95455746897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10457786.166666666,
            "unit": "ns",
            "range": "± 148023.37701085248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24806.050505050505,
            "unit": "ns",
            "range": "± 5154.292260000867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62649.41935483871,
            "unit": "ns",
            "range": "± 8935.249301067655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60949.282608695656,
            "unit": "ns",
            "range": "± 3441.15146306903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131641.74468085106,
            "unit": "ns",
            "range": "± 18050.108611763997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9510.322580645161,
            "unit": "ns",
            "range": "± 1572.5748973750465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22576.515463917527,
            "unit": "ns",
            "range": "± 4978.000546390341"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5581217.550951087,
            "unit": "ns",
            "range": "± 425445.50083400554"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6754674.543956044,
            "unit": "ns",
            "range": "± 928644.3713558778"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28184605.29411765,
            "unit": "ns",
            "range": "± 520485.65576857695"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7265061.788888888,
            "unit": "ns",
            "range": "± 574857.9517496504"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32418016.4,
            "unit": "ns",
            "range": "± 936097.1348755318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7250434.867424242,
            "unit": "ns",
            "range": "± 339985.02855769114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2013947.8318359375,
            "unit": "ns",
            "range": "± 39359.8238740209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1310470.425390625,
            "unit": "ns",
            "range": "± 17136.85569269978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2826278.4415690103,
            "unit": "ns",
            "range": "± 73076.1594928183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798464.0681340144,
            "unit": "ns",
            "range": "± 7340.977900348139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734834.671875,
            "unit": "ns",
            "range": "± 6452.8314046245205"
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
          "id": "8361ae9a1d1b251f68d46b145a61d4163ecaecab",
          "message": "More logging",
          "timestamp": "2023-03-23T19:37:21+09:00",
          "tree_id": "c7a804c87d04f2578052416c55966df9db654b5d",
          "url": "https://github.com/planetarium/libplanet/commit/8361ae9a1d1b251f68d46b145a61d4163ecaecab"
        },
        "date": 1679568711473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 119460.35051546391,
            "unit": "ns",
            "range": "± 10647.508482075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100130.8817204301,
            "unit": "ns",
            "range": "± 13650.986650795823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228401.78021978022,
            "unit": "ns",
            "range": "± 30122.70398730359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203062.0306122449,
            "unit": "ns",
            "range": "± 19418.73668767989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3573509.5581395347,
            "unit": "ns",
            "range": "± 131151.80055574683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9701900.285714285,
            "unit": "ns",
            "range": "± 380740.7475162178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17548.14893617021,
            "unit": "ns",
            "range": "± 3404.046374465981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49712.897959183676,
            "unit": "ns",
            "range": "± 6879.76399512771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46867.948453608245,
            "unit": "ns",
            "range": "± 6542.405838341527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102072.01041666667,
            "unit": "ns",
            "range": "± 20572.510220908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5547.8488372093025,
            "unit": "ns",
            "range": "± 905.3118477004856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15179.64606741573,
            "unit": "ns",
            "range": "± 1786.084751568496"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4667969.181951993,
            "unit": "ns",
            "range": "± 223568.4089324094"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6264131.239130435,
            "unit": "ns",
            "range": "± 152244.6114046308"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26406617.305555556,
            "unit": "ns",
            "range": "± 877089.3554359969"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7028151.132653061,
            "unit": "ns",
            "range": "± 604059.0477619894"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31216729,
            "unit": "ns",
            "range": "± 1386667.2534352564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6214102.055208334,
            "unit": "ns",
            "range": "± 110144.225136869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910653.361328125,
            "unit": "ns",
            "range": "± 36279.71950360811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1225588.2103365385,
            "unit": "ns",
            "range": "± 8885.010387341215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613029.069754464,
            "unit": "ns",
            "range": "± 30843.01023873861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808151.2508370535,
            "unit": "ns",
            "range": "± 7692.847886589442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 687582.0326021635,
            "unit": "ns",
            "range": "± 2461.5393993896087"
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
          "id": "57902588f81bc45ac7d3c895aaeeb0004042e7c6",
          "message": "Even more logging",
          "timestamp": "2023-03-23T20:14:42+09:00",
          "tree_id": "8ffc356651c118f2d476bd744f639d6cffea2f23",
          "url": "https://github.com/planetarium/libplanet/commit/57902588f81bc45ac7d3c895aaeeb0004042e7c6"
        },
        "date": 1679571748770,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135569.89784946237,
            "unit": "ns",
            "range": "± 15500.296138222777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 141765.45833333334,
            "unit": "ns",
            "range": "± 26311.867569363432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291303.14130434784,
            "unit": "ns",
            "range": "± 52586.883032859834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 338296.8888888889,
            "unit": "ns",
            "range": "± 132722.29932045654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4343759.191919192,
            "unit": "ns",
            "range": "± 774466.5926817866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10467959.956521738,
            "unit": "ns",
            "range": "± 379953.81680695864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23294.489361702126,
            "unit": "ns",
            "range": "± 4573.401966031016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60189.5989010989,
            "unit": "ns",
            "range": "± 11289.891501353419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63832.75,
            "unit": "ns",
            "range": "± 9142.375498051282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142646.56382978722,
            "unit": "ns",
            "range": "± 23078.07250228262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10128.097826086956,
            "unit": "ns",
            "range": "± 1712.375633150102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23339.110526315788,
            "unit": "ns",
            "range": "± 3814.8618036226526"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 7007407.818650266,
            "unit": "ns",
            "range": "± 826183.0555293829"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8937077.663265307,
            "unit": "ns",
            "range": "± 1474792.6801684683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 37976077.48,
            "unit": "ns",
            "range": "± 5886562.907287563"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8921907.792929294,
            "unit": "ns",
            "range": "± 1425433.5369971013"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39887423.803030305,
            "unit": "ns",
            "range": "± 5486201.080912051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8616471.782924106,
            "unit": "ns",
            "range": "± 1574487.7338245288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2187239.5262161726,
            "unit": "ns",
            "range": "± 146225.330782514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402398.1951219512,
            "unit": "ns",
            "range": "± 49404.05457923664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2805884.249441964,
            "unit": "ns",
            "range": "± 101450.77357239772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885917.2175009084,
            "unit": "ns",
            "range": "± 32477.000996517694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732201.5500217014,
            "unit": "ns",
            "range": "± 13715.851525588554"
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
          "id": "fda564fa603611e27aef86aea50d932277227ee3",
          "message": "Merge pull request #2985 from greymistcube/refactor/account-state-delta-caching\n\n🔧 Added caching to `AccountStateDeltaImpl`",
          "timestamp": "2023-03-24T09:44:57+09:00",
          "tree_id": "ecfd3ce8bde11199f643174bd303a620d5911aaf",
          "url": "https://github.com/planetarium/libplanet/commit/fda564fa603611e27aef86aea50d932277227ee3"
        },
        "date": 1679619486524,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115492.27083333333,
            "unit": "ns",
            "range": "± 7899.000102583494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94587.35789473684,
            "unit": "ns",
            "range": "± 10992.706111680725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204353.95263157896,
            "unit": "ns",
            "range": "± 19731.78207584631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176049.5507246377,
            "unit": "ns",
            "range": "± 8516.75491144684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3458246.5,
            "unit": "ns",
            "range": "± 71557.1175661957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9532555.91111111,
            "unit": "ns",
            "range": "± 359176.3237499618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17808.533333333333,
            "unit": "ns",
            "range": "± 2435.7948588462905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49554.17391304348,
            "unit": "ns",
            "range": "± 6173.464915938453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48565.447916666664,
            "unit": "ns",
            "range": "± 4751.926822203238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104068.93548387097,
            "unit": "ns",
            "range": "± 15721.032609910819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5798.086956521739,
            "unit": "ns",
            "range": "± 610.7205553697003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17114.117647058825,
            "unit": "ns",
            "range": "± 2052.4256347050427"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4559723.546614584,
            "unit": "ns",
            "range": "± 58421.96269986802"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5810380,
            "unit": "ns",
            "range": "± 88261.34675692499"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24980862.85964912,
            "unit": "ns",
            "range": "± 1024079.9209191467"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7036150.277777778,
            "unit": "ns",
            "range": "± 346852.3053401967"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32329242.083333332,
            "unit": "ns",
            "range": "± 1050109.5201662777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6028894.769270834,
            "unit": "ns",
            "range": "± 58704.46961822784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888434.2205729166,
            "unit": "ns",
            "range": "± 9164.008584513489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1226892.5053385417,
            "unit": "ns",
            "range": "± 9271.429875975013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2393078.9994791667,
            "unit": "ns",
            "range": "± 17805.18660232924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845502.4380208333,
            "unit": "ns",
            "range": "± 4061.1239246883038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 700958.380859375,
            "unit": "ns",
            "range": "± 4737.0222935850425"
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
          "id": "646fe97a1595f131c8571ad0153d8023f8e9beef",
          "message": "Remove logging from AccountStateDeltaImpl",
          "timestamp": "2023-03-24T15:00:36+09:00",
          "tree_id": "56d480473e97842fdb4390a3251fc9ebaf2cabd7",
          "url": "https://github.com/planetarium/libplanet/commit/646fe97a1595f131c8571ad0153d8023f8e9beef"
        },
        "date": 1679638471290,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 124101.6530612245,
            "unit": "ns",
            "range": "± 10928.857438656387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93131.13978494624,
            "unit": "ns",
            "range": "± 10232.145112331675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208137.97826086957,
            "unit": "ns",
            "range": "± 19497.36822532231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 184231.24210526317,
            "unit": "ns",
            "range": "± 14931.86466795216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3477282.882352941,
            "unit": "ns",
            "range": "± 69921.5599760567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9483738.397058824,
            "unit": "ns",
            "range": "± 451351.2992849838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18320.67777777778,
            "unit": "ns",
            "range": "± 3102.975286875694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52151.583333333336,
            "unit": "ns",
            "range": "± 7299.114196677591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45936.011235955055,
            "unit": "ns",
            "range": "± 4304.578198358279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107725.76923076923,
            "unit": "ns",
            "range": "± 14512.367580850116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5967.232558139535,
            "unit": "ns",
            "range": "± 659.2017753120477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17026.602272727272,
            "unit": "ns",
            "range": "± 1869.6022660176213"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4723722.779747596,
            "unit": "ns",
            "range": "± 164182.5149154243"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6013438.115789474,
            "unit": "ns",
            "range": "± 551832.3455028991"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25643142.25,
            "unit": "ns",
            "range": "± 787592.2157319001"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6602933.215909091,
            "unit": "ns",
            "range": "± 449394.6799163445"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30216324.21,
            "unit": "ns",
            "range": "± 1836531.6436098423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6002597.985677083,
            "unit": "ns",
            "range": "± 68407.56095537305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1899867.4881417411,
            "unit": "ns",
            "range": "± 20792.83185081952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1255329.6911458333,
            "unit": "ns",
            "range": "± 21570.1046585185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645665.8627604167,
            "unit": "ns",
            "range": "± 38902.40275225447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782542.2655598958,
            "unit": "ns",
            "range": "± 8549.022473017794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 705707.6328822544,
            "unit": "ns",
            "range": "± 6327.018978079134"
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
          "id": "b06a0868901ad6b9134bda33c895d740cf67a057",
          "message": "Merge pull request #2987 from greymistcube/optimization/state-cache\n\n♻️ Refactored to more granular caching scheme for `BlockChainStates<T>`",
          "timestamp": "2023-03-24T21:56:45+09:00",
          "tree_id": "3ef82fcb07ac2f63eacca5bb11dd399b5a8d8a7c",
          "url": "https://github.com/planetarium/libplanet/commit/b06a0868901ad6b9134bda33c895d740cf67a057"
        },
        "date": 1679663695433,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 145658.6222222222,
            "unit": "ns",
            "range": "± 9058.67884038332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132105.7142857143,
            "unit": "ns",
            "range": "± 22595.086063831644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251581.25789473683,
            "unit": "ns",
            "range": "± 27347.273949761697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241800.8085106383,
            "unit": "ns",
            "range": "± 21642.138226044015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3845989.3125,
            "unit": "ns",
            "range": "± 71483.01367851316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10467734.027027028,
            "unit": "ns",
            "range": "± 342121.0469932378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30368.35106382979,
            "unit": "ns",
            "range": "± 7036.1576768804425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65147.816091954024,
            "unit": "ns",
            "range": "± 8570.959759463505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65379.32941176471,
            "unit": "ns",
            "range": "± 6663.808807188836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144651,
            "unit": "ns",
            "range": "± 18559.86967200358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10083.147368421052,
            "unit": "ns",
            "range": "± 1466.7861957384787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27663.27894736842,
            "unit": "ns",
            "range": "± 4294.441164889911"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5574687.30687164,
            "unit": "ns",
            "range": "± 502384.5616325739"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6910960.2727272725,
            "unit": "ns",
            "range": "± 733730.0863734115"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30771084.627906978,
            "unit": "ns",
            "range": "± 2089745.21270291"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 9773215.612244898,
            "unit": "ns",
            "range": "± 2624892.927099042"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33935701.91860465,
            "unit": "ns",
            "range": "± 2298652.0609098277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7026100.779079861,
            "unit": "ns",
            "range": "± 112339.06950700152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2236100.953125,
            "unit": "ns",
            "range": "± 85700.0625508918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1444438.1103200605,
            "unit": "ns",
            "range": "± 42999.57105631726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3102356.176339286,
            "unit": "ns",
            "range": "± 53528.90489334008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 965889.5951360887,
            "unit": "ns",
            "range": "± 29240.56599616103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799702.5284090909,
            "unit": "ns",
            "range": "± 19166.984803872834"
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
          "id": "7c95388b8da3e5f1957ec79c31457793bae6918f",
          "message": "Merge pull request #2988 from greymistcube/optimization/account-state-delta-cache\n\n♻️ Reduced call to lower level `GetStates()` with empty addresses",
          "timestamp": "2023-03-25T09:28:13+09:00",
          "tree_id": "244138a8f31b2b5fc77932bfb2137ac88923d21b",
          "url": "https://github.com/planetarium/libplanet/commit/7c95388b8da3e5f1957ec79c31457793bae6918f"
        },
        "date": 1679705323959,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 130119.99462365592,
            "unit": "ns",
            "range": "± 12571.810291821846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 120821.96666666666,
            "unit": "ns",
            "range": "± 17911.39647404863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225283.13636363635,
            "unit": "ns",
            "range": "± 14454.267634672964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282137.6666666667,
            "unit": "ns",
            "range": "± 54750.9784100352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3929887.8829787234,
            "unit": "ns",
            "range": "± 243339.87601462714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11239265.414285714,
            "unit": "ns",
            "range": "± 545510.9574442868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24809.08695652174,
            "unit": "ns",
            "range": "± 3775.659149649699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68563.20652173914,
            "unit": "ns",
            "range": "± 14211.91348991374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55430.21428571428,
            "unit": "ns",
            "range": "± 11576.481417302695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118466.84042553192,
            "unit": "ns",
            "range": "± 21834.952818031463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7230.744680851064,
            "unit": "ns",
            "range": "± 1184.1228860975557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22726.233333333334,
            "unit": "ns",
            "range": "± 4019.936024562211"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5619115.730082418,
            "unit": "ns",
            "range": "± 335185.9381178237"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6766990.366666666,
            "unit": "ns",
            "range": "± 124166.51100142367"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26763521.666666668,
            "unit": "ns",
            "range": "± 477815.09371209197"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7305704.0344827585,
            "unit": "ns",
            "range": "± 207394.1756625503"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31139057.825,
            "unit": "ns",
            "range": "± 661442.2801000037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7152627.793738997,
            "unit": "ns",
            "range": "± 345943.77974159457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1942380.3849158655,
            "unit": "ns",
            "range": "± 20649.162555012474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413341.3059395032,
            "unit": "ns",
            "range": "± 49365.52952517792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2933612.555147059,
            "unit": "ns",
            "range": "± 140308.04951950358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893733.7137129934,
            "unit": "ns",
            "range": "± 16717.148814220367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 822312.2728978207,
            "unit": "ns",
            "range": "± 41569.832825704696"
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
          "id": "a76a9bb9a81bfbb08df9ca35674c4b0b6d1db640",
          "message": "Merge pull request #2990 from greymistcube/refactor/faster-key-bytes-conversion\n\n♻️ Improved `KeyConverters` performance",
          "timestamp": "2023-03-25T12:11:30+09:00",
          "tree_id": "adb4e0426a83696735a7801c1ad275c5aa15b795",
          "url": "https://github.com/planetarium/libplanet/commit/a76a9bb9a81bfbb08df9ca35674c4b0b6d1db640"
        },
        "date": 1679715006786,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 130614.13541666667,
            "unit": "ns",
            "range": "± 12617.585718370083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 106069.32258064517,
            "unit": "ns",
            "range": "± 13426.514103073367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221921.2105263158,
            "unit": "ns",
            "range": "± 23458.740263331303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215461.90425531915,
            "unit": "ns",
            "range": "± 25028.68865548723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3643116.7666666666,
            "unit": "ns",
            "range": "± 105578.31319163967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10751444.457446808,
            "unit": "ns",
            "range": "± 699902.892500693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19130.043010752688,
            "unit": "ns",
            "range": "± 2978.2657592821656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56265.21276595745,
            "unit": "ns",
            "range": "± 8810.629623519879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52010.782608695656,
            "unit": "ns",
            "range": "± 3874.393048037748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118595.55434782608,
            "unit": "ns",
            "range": "± 15175.736998859475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7828.247311827957,
            "unit": "ns",
            "range": "± 1133.1269994434406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20394.978494623654,
            "unit": "ns",
            "range": "± 2773.6360493610373"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5743331.3684358895,
            "unit": "ns",
            "range": "± 397987.32444647554"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6349140.6875,
            "unit": "ns",
            "range": "± 510800.8585949037"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29778519.2278481,
            "unit": "ns",
            "range": "± 1510797.6426510427"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8084684.75,
            "unit": "ns",
            "range": "± 1159293.4253916666"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31548904.698412698,
            "unit": "ns",
            "range": "± 1447580.9457214456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6817545.788411458,
            "unit": "ns",
            "range": "± 174214.75600141857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2044832.2273995536,
            "unit": "ns",
            "range": "± 29184.160378346132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1326074.1533854166,
            "unit": "ns",
            "range": "± 18804.151055942464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3059419.279967645,
            "unit": "ns",
            "range": "± 205894.76494433114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 881810.6796223958,
            "unit": "ns",
            "range": "± 25781.14634142752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784672.8455566406,
            "unit": "ns",
            "range": "± 26751.61357496659"
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
          "id": "e4bb87e69b9e18864d0aefdf5507f2f8c642026b",
          "message": "Minor logging change",
          "timestamp": "2023-03-25T13:50:51+09:00",
          "tree_id": "859926b9eb3eeee5989fcf06a37bb87c324663b7",
          "url": "https://github.com/planetarium/libplanet/commit/e4bb87e69b9e18864d0aefdf5507f2f8c642026b"
        },
        "date": 1679720823944,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 122517.5947368421,
            "unit": "ns",
            "range": "± 8616.46855769944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99068.3829787234,
            "unit": "ns",
            "range": "± 11826.165820915638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223887.30303030304,
            "unit": "ns",
            "range": "± 28115.572602826116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197365.02777777778,
            "unit": "ns",
            "range": "± 9614.799465396089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3628159.3846153845,
            "unit": "ns",
            "range": "± 59176.984618935625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10145068.846153846,
            "unit": "ns",
            "range": "± 131814.5011944476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18479.973684210527,
            "unit": "ns",
            "range": "± 2866.1872399605854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52520.84946236559,
            "unit": "ns",
            "range": "± 7642.170794699172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51088.244680851065,
            "unit": "ns",
            "range": "± 5926.846280893153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124802.73958333333,
            "unit": "ns",
            "range": "± 23423.930611435906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6913.322580645161,
            "unit": "ns",
            "range": "± 756.1781358063249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18786.15053763441,
            "unit": "ns",
            "range": "± 2582.866300240527"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4896123.277023566,
            "unit": "ns",
            "range": "± 218655.76524799629"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5982641.88,
            "unit": "ns",
            "range": "± 238422.91549335743"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26325371.81111111,
            "unit": "ns",
            "range": "± 981627.1883030103"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7449053.756097561,
            "unit": "ns",
            "range": "± 262526.1068870847"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30551547.435897436,
            "unit": "ns",
            "range": "± 1039202.3459488127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7463591.593955592,
            "unit": "ns",
            "range": "± 376929.43322122254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1981978.6678185095,
            "unit": "ns",
            "range": "± 19988.32931301855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1501415.8395432692,
            "unit": "ns",
            "range": "± 13191.221524512557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2873779.7961328123,
            "unit": "ns",
            "range": "± 174900.970131057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 911261.5708705357,
            "unit": "ns",
            "range": "± 14713.520677178198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754031.2581380209,
            "unit": "ns",
            "range": "± 8972.47780570504"
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
          "id": "06084a521d1c6ce05229fb0a0d7e546cf9eac9b8",
          "message": "Increased cache count",
          "timestamp": "2023-03-25T13:53:05+09:00",
          "tree_id": "eae3ce2e84a24477f1735d138701afa6166a7122",
          "url": "https://github.com/planetarium/libplanet/commit/06084a521d1c6ce05229fb0a0d7e546cf9eac9b8"
        },
        "date": 1679720986009,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 126270.76595744681,
            "unit": "ns",
            "range": "± 12145.567871136247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102597.0947368421,
            "unit": "ns",
            "range": "± 13813.261866982146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236348.52525252526,
            "unit": "ns",
            "range": "± 33540.12735647618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209044.8282828283,
            "unit": "ns",
            "range": "± 20008.910312627817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3888547.303030303,
            "unit": "ns",
            "range": "± 238964.7007487249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10755186.781818181,
            "unit": "ns",
            "range": "± 450651.3352543261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22565.34736842105,
            "unit": "ns",
            "range": "± 4747.712747786908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62521.78723404255,
            "unit": "ns",
            "range": "± 11002.56463516657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60019.011235955055,
            "unit": "ns",
            "range": "± 6462.576446698156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126112.41935483871,
            "unit": "ns",
            "range": "± 17526.283827764528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7980.854838709677,
            "unit": "ns",
            "range": "± 1479.636688993805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17917.411111111112,
            "unit": "ns",
            "range": "± 2715.58813086675"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5030953.370625,
            "unit": "ns",
            "range": "± 351985.40604780335"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7055798.697916667,
            "unit": "ns",
            "range": "± 1000644.1951329798"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26626513.513513513,
            "unit": "ns",
            "range": "± 902582.798528867"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6868598.020408163,
            "unit": "ns",
            "range": "± 450391.4938956453"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30926261,
            "unit": "ns",
            "range": "± 384064.62594247516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7389095.695126488,
            "unit": "ns",
            "range": "± 173426.04960470952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1995343.8364583333,
            "unit": "ns",
            "range": "± 37146.11217746863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380215.849717882,
            "unit": "ns",
            "range": "± 29511.769511795796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2840696.9025493423,
            "unit": "ns",
            "range": "± 97661.45870997114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826871.9652622768,
            "unit": "ns",
            "range": "± 9784.57153969831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731576.4041466346,
            "unit": "ns",
            "range": "± 4207.560143424208"
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
          "id": "ca4d3168f49854f75a6d927521318b1e412b79ca",
          "message": "Merge pull request #2991 from greymistcube/refactor/remove-state-delta-cache\n\n♻️ Remove state delta cache",
          "timestamp": "2023-03-25T19:54:01+09:00",
          "tree_id": "51067fb468ca59e1b776c0eb20895db4da154a8b",
          "url": "https://github.com/planetarium/libplanet/commit/ca4d3168f49854f75a6d927521318b1e412b79ca"
        },
        "date": 1679742394155,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115570.47916666667,
            "unit": "ns",
            "range": "± 8092.865966853531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92934.05319148937,
            "unit": "ns",
            "range": "± 11879.839217818828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207509.36559139786,
            "unit": "ns",
            "range": "± 23685.009676267608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178740.9010989011,
            "unit": "ns",
            "range": "± 11588.948801964496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3468781.8571428573,
            "unit": "ns",
            "range": "± 82054.08766115653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9603262.23076923,
            "unit": "ns",
            "range": "± 261099.32738730795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17764.217391304348,
            "unit": "ns",
            "range": "± 2743.6995871904714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50007.55434782609,
            "unit": "ns",
            "range": "± 5917.658287903964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46034.541666666664,
            "unit": "ns",
            "range": "± 5111.300279343216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102363.31868131868,
            "unit": "ns",
            "range": "± 15386.374203516796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5873.033333333334,
            "unit": "ns",
            "range": "± 715.690072430295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16101.866666666667,
            "unit": "ns",
            "range": "± 1929.6202875002593"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4593732.57109375,
            "unit": "ns",
            "range": "± 80007.65865481213"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5520068.989583333,
            "unit": "ns",
            "range": "± 389444.0736412136"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25274377.529411763,
            "unit": "ns",
            "range": "± 1013573.1972188166"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6315795.472727273,
            "unit": "ns",
            "range": "± 269179.09211491415"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29332438.363636363,
            "unit": "ns",
            "range": "± 928772.5412115786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6209577.265625,
            "unit": "ns",
            "range": "± 87794.18564565777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1825520.8329427084,
            "unit": "ns",
            "range": "± 5864.366036168965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1227192.5902944712,
            "unit": "ns",
            "range": "± 5179.422791661559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2424981.8776041665,
            "unit": "ns",
            "range": "± 25582.99824466511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 758012.6131510417,
            "unit": "ns",
            "range": "± 5701.252447573388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 701736.9211588542,
            "unit": "ns",
            "range": "± 6475.381428690204"
          }
        ]
      }
    ]
  }
}