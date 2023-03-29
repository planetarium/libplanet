window.BENCHMARK_DATA = {
  "lastUpdate": 1680074334012,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aea547870cfd181eee84fb1f822cb8493dbb2587",
          "message": "Merge pull request #2919 from colibrishin/release/0.52\n\n🚀 Release 0.52.0",
          "timestamp": "2023-03-13T19:19:01+09:00",
          "tree_id": "e0cd58434e1e45efbb58c9cb5a1763293e84f4a6",
          "url": "https://github.com/planetarium/libplanet/commit/aea547870cfd181eee84fb1f822cb8493dbb2587"
        },
        "date": 1678704337432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1278923.2323232323,
            "unit": "ns",
            "range": "± 77050.93309938752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2306332,
            "unit": "ns",
            "range": "± 92685.28809132239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1984220.7792207792,
            "unit": "ns",
            "range": "± 100864.6661538727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4696264.864864865,
            "unit": "ns",
            "range": "± 156737.4436158483"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43248.57142857143,
            "unit": "ns",
            "range": "± 2102.2240022636934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6919666.666666667,
            "unit": "ns",
            "range": "± 4426.435736948333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17757840,
            "unit": "ns",
            "range": "± 173495.00116306357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45397713.333333336,
            "unit": "ns",
            "range": "± 394182.8924074035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 89531478.57142857,
            "unit": "ns",
            "range": "± 984383.4971724661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 179677126.66666666,
            "unit": "ns",
            "range": "± 1696370.6150260353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4801308.802083333,
            "unit": "ns",
            "range": "± 9800.778823319082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521382.0703125,
            "unit": "ns",
            "range": "± 2385.8214649439287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160447.4348958333,
            "unit": "ns",
            "range": "± 1899.627998858195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518207.265625,
            "unit": "ns",
            "range": "± 5309.084892741203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853547.20703125,
            "unit": "ns",
            "range": "± 1844.8780991605022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721658.7890625,
            "unit": "ns",
            "range": "± 664.5018426680355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2955193.3333333335,
            "unit": "ns",
            "range": "± 37507.87472873752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4632155,
            "unit": "ns",
            "range": "± 106086.74938340245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21084260,
            "unit": "ns",
            "range": "± 338214.8087490299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5497786.666666667,
            "unit": "ns",
            "range": "± 102078.84114508652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24784081.25,
            "unit": "ns",
            "range": "± 682150.5573280016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174185.7142857143,
            "unit": "ns",
            "range": "± 3003.807108130804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171574.07407407407,
            "unit": "ns",
            "range": "± 7118.755063547759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145084.0909090909,
            "unit": "ns",
            "range": "± 5447.292614570347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10105390,
            "unit": "ns",
            "range": "± 57471.00884048284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8144466.666666667,
            "unit": "ns",
            "range": "± 64823.845553784864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16600,
            "unit": "ns",
            "range": "± 1944.9881036665122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46224.7191011236,
            "unit": "ns",
            "range": "± 2824.7397667297846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33879.31034482759,
            "unit": "ns",
            "range": "± 974.8184117878525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82181.81818181818,
            "unit": "ns",
            "range": "± 14825.4356967766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4178.125,
            "unit": "ns",
            "range": "± 594.9264660443339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15676.288659793814,
            "unit": "ns",
            "range": "± 1464.4234641913613"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "233f6f30e700db3d42c169b28bec7e9636c8ddde",
          "message": "Merge pull request #2926 from colibrishin/prepare/0.52.1\n\n🔧 Prepare 0.52.1",
          "timestamp": "2023-03-14T13:20:29+09:00",
          "tree_id": "2aef4fbff4f74ea709ce146f26d005bfcb7cdb86",
          "url": "https://github.com/planetarium/libplanet/commit/233f6f30e700db3d42c169b28bec7e9636c8ddde"
        },
        "date": 1678768482394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1350281,
            "unit": "ns",
            "range": "± 129338.82345032814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2325923.404255319,
            "unit": "ns",
            "range": "± 89902.74990417714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2019751.5789473683,
            "unit": "ns",
            "range": "± 117035.92362045583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4779251.612903226,
            "unit": "ns",
            "range": "± 135477.02110436233"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42862.06896551724,
            "unit": "ns",
            "range": "± 2348.242359986499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7060014.285714285,
            "unit": "ns",
            "range": "± 79501.95795501718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18065121.42857143,
            "unit": "ns",
            "range": "± 89326.08524666524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45891750,
            "unit": "ns",
            "range": "± 185112.93464106868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 90615720,
            "unit": "ns",
            "range": "± 1156571.3702886773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 185824233.33333334,
            "unit": "ns",
            "range": "± 1530525.1053462788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4942672.145432692,
            "unit": "ns",
            "range": "± 7105.745638432322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515287.1484375,
            "unit": "ns",
            "range": "± 2793.572605410234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147702.36328125,
            "unit": "ns",
            "range": "± 2004.1439175124253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595349.0625,
            "unit": "ns",
            "range": "± 21879.779965342135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824093.7858072916,
            "unit": "ns",
            "range": "± 6104.159451519319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795662.7511160715,
            "unit": "ns",
            "range": "± 1339.92266916568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3032618.1818181816,
            "unit": "ns",
            "range": "± 112238.37127878776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4695653.333333333,
            "unit": "ns",
            "range": "± 132165.76512571008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21702814.285714287,
            "unit": "ns",
            "range": "± 152398.91407417908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5980793.548387097,
            "unit": "ns",
            "range": "± 179654.7428365194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24436846.153846152,
            "unit": "ns",
            "range": "± 320038.09048139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175505.55555555556,
            "unit": "ns",
            "range": "± 3641.82763138675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178428.57142857142,
            "unit": "ns",
            "range": "± 7038.199343582135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154271.71717171717,
            "unit": "ns",
            "range": "± 9554.92223191625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10420900,
            "unit": "ns",
            "range": "± 104614.42129485372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8275146.666666667,
            "unit": "ns",
            "range": "± 74707.02650704156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18550.515463917527,
            "unit": "ns",
            "range": "± 2336.6698040578767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50623.40425531915,
            "unit": "ns",
            "range": "± 4981.501814658312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34872.549019607846,
            "unit": "ns",
            "range": "± 1422.4033789853777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85186.59793814433,
            "unit": "ns",
            "range": "± 14178.347847348517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4746.315789473684,
            "unit": "ns",
            "range": "± 556.9312815847345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17154.166666666668,
            "unit": "ns",
            "range": "± 2555.4036313855086"
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
          "id": "ad915fabdad7fc9ca00f933507e2196a26911431",
          "message": "Merge pull request #2946 from greymistcube/port/0.51.2-to-0.52.1\n\n🔀🚀 Port 0.51.2 to 0.52.1 and release 0.52.1",
          "timestamp": "2023-03-15T18:57:02+09:00",
          "tree_id": "c27253e5957238046518b4bd134cde83bae519e6",
          "url": "https://github.com/planetarium/libplanet/commit/ad915fabdad7fc9ca00f933507e2196a26911431"
        },
        "date": 1678875355936,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1358982.9787234042,
            "unit": "ns",
            "range": "± 104643.59649689986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2514916.6666666665,
            "unit": "ns",
            "range": "± 83376.52804339737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2053166.1290322582,
            "unit": "ns",
            "range": "± 93482.83079594039"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5101803.448275862,
            "unit": "ns",
            "range": "± 223781.31866711308"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49697.64705882353,
            "unit": "ns",
            "range": "± 2706.1207725920776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6983053.846153846,
            "unit": "ns",
            "range": "± 87665.94374275391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19805653.333333332,
            "unit": "ns",
            "range": "± 363801.1424364899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50221807.14285714,
            "unit": "ns",
            "range": "± 533347.4613799521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99019538.8888889,
            "unit": "ns",
            "range": "± 2043458.5080889326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 199576993.33333334,
            "unit": "ns",
            "range": "± 3468962.11453732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4775583.75,
            "unit": "ns",
            "range": "± 25024.14167645746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513929.8828125,
            "unit": "ns",
            "range": "± 13050.62650816753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1137762.65625,
            "unit": "ns",
            "range": "± 11046.683116135067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605496.5680803573,
            "unit": "ns",
            "range": "± 4536.138739448112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842280.9221540178,
            "unit": "ns",
            "range": "± 1752.4018665480166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755493.2407924107,
            "unit": "ns",
            "range": "± 1307.38553994357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3273910.714285714,
            "unit": "ns",
            "range": "± 89412.5202074143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5070612,
            "unit": "ns",
            "range": "± 133469.6979342752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23590317.777777776,
            "unit": "ns",
            "range": "± 895804.6667886946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6214586.666666667,
            "unit": "ns",
            "range": "± 211401.73044789306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26756725,
            "unit": "ns",
            "range": "± 517151.10042101494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186303.2786885246,
            "unit": "ns",
            "range": "± 8157.286460850297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181444.79166666666,
            "unit": "ns",
            "range": "± 10939.834212076494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163975,
            "unit": "ns",
            "range": "± 10421.417098621201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11199860,
            "unit": "ns",
            "range": "± 137614.97426827194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8914428.125,
            "unit": "ns",
            "range": "± 272936.4834941958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21108.42105263158,
            "unit": "ns",
            "range": "± 2237.573874111258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53675.2688172043,
            "unit": "ns",
            "range": "± 4859.0269180151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40009.375,
            "unit": "ns",
            "range": "± 2579.803261572683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97373.1182795699,
            "unit": "ns",
            "range": "± 14955.812740732543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5654.166666666667,
            "unit": "ns",
            "range": "± 669.1576270390717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18469.14893617021,
            "unit": "ns",
            "range": "± 1833.7942682972143"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ef2213aed5a36d2ae2924118074332c080c7aee",
          "message": "Merge pull request #2976 from riemannulus/0.52-maintenance\n\n🔀 Port 0.50.6 to 0.52.2",
          "timestamp": "2023-03-28T15:27:27+09:00",
          "tree_id": "02382587929633a3da45125b42ba2f0682dbcf46",
          "url": "https://github.com/planetarium/libplanet/commit/6ef2213aed5a36d2ae2924118074332c080c7aee"
        },
        "date": 1679986205430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616719.7916666667,
            "unit": "ns",
            "range": "± 225936.7203536571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3242706.25,
            "unit": "ns",
            "range": "± 300150.0445172118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2742971.5789473685,
            "unit": "ns",
            "range": "± 229277.4977885123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6686398,
            "unit": "ns",
            "range": "± 724994.6807161185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67907.07070707071,
            "unit": "ns",
            "range": "± 18437.695706468778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8706692.857142856,
            "unit": "ns",
            "range": "± 718038.3183713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23966101.01010101,
            "unit": "ns",
            "range": "± 1858178.8460690647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59590211.428571425,
            "unit": "ns",
            "range": "± 2882965.8664496653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 122988200,
            "unit": "ns",
            "range": "± 5442020.810482457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 241581796.55172414,
            "unit": "ns",
            "range": "± 7041174.352868113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5821677.708333333,
            "unit": "ns",
            "range": "± 104157.9201842649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851589.0950520833,
            "unit": "ns",
            "range": "± 37506.89791373995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387177.099609375,
            "unit": "ns",
            "range": "± 19102.945932166516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3048792.5223214286,
            "unit": "ns",
            "range": "± 39497.26131876861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025259.0418198529,
            "unit": "ns",
            "range": "± 19634.751437464747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935928.857421875,
            "unit": "ns",
            "range": "± 13335.488666447038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3444930.1075268816,
            "unit": "ns",
            "range": "± 313442.8606776217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5262375.7894736845,
            "unit": "ns",
            "range": "± 385183.74551877205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29368384.69387755,
            "unit": "ns",
            "range": "± 2235414.8501886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7307792.424242424,
            "unit": "ns",
            "range": "± 700749.1053080135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34958819.19191919,
            "unit": "ns",
            "range": "± 2750837.959369753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230368.55670103093,
            "unit": "ns",
            "range": "± 36923.003584872706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229971.875,
            "unit": "ns",
            "range": "± 31737.21608566859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190710.52631578947,
            "unit": "ns",
            "range": "± 25492.549907450895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12977690.625,
            "unit": "ns",
            "range": "± 1219570.888302683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10153313.402061855,
            "unit": "ns",
            "range": "± 795769.5704773337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31740.625,
            "unit": "ns",
            "range": "± 12002.268014837862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72621.73913043478,
            "unit": "ns",
            "range": "± 17453.994952426536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49094.73684210526,
            "unit": "ns",
            "range": "± 13695.31188944451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131334.0206185567,
            "unit": "ns",
            "range": "± 27889.528674897036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5862.765957446809,
            "unit": "ns",
            "range": "± 1083.3027994922672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31547,
            "unit": "ns",
            "range": "± 12150.0172922519"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc64737ece4bdb4cac81695df18ed892a956003d",
          "message": "Merge pull request #3005 from riemannulus/0.52-maintenance\n\n🔧 Prepare 0.52.3",
          "timestamp": "2023-03-28T15:48:26+09:00",
          "tree_id": "cf56bc8debce58fdac70c5bbb1f03a79ea85f380",
          "url": "https://github.com/planetarium/libplanet/commit/bc64737ece4bdb4cac81695df18ed892a956003d"
        },
        "date": 1679987456823,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1585238.5416666667,
            "unit": "ns",
            "range": "± 107292.87254474788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2957080,
            "unit": "ns",
            "range": "± 103478.37430457606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2510161.855670103,
            "unit": "ns",
            "range": "± 177574.90464314102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6151483.116883117,
            "unit": "ns",
            "range": "± 314860.31297210837"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55600,
            "unit": "ns",
            "range": "± 3703.250725250173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8578042.105263159,
            "unit": "ns",
            "range": "± 175214.32372887235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23794342.85714286,
            "unit": "ns",
            "range": "± 304437.39210925734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58675764.705882356,
            "unit": "ns",
            "range": "± 1128750.8460357718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113362423.8095238,
            "unit": "ns",
            "range": "± 2648548.0897851866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 232415213.33333334,
            "unit": "ns",
            "range": "± 4316020.005558472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5568804.854910715,
            "unit": "ns",
            "range": "± 76595.11535183695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1831641.392299107,
            "unit": "ns",
            "range": "± 6999.561609841245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387957.03125,
            "unit": "ns",
            "range": "± 20545.633299862897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3015248.918269231,
            "unit": "ns",
            "range": "± 25581.998088583125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967823.4008789062,
            "unit": "ns",
            "range": "± 18415.60500977145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901090.4634915865,
            "unit": "ns",
            "range": "± 9967.203331656523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3626800,
            "unit": "ns",
            "range": "± 223568.96208570816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5813981.632653061,
            "unit": "ns",
            "range": "± 224144.3114690747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27702305.555555556,
            "unit": "ns",
            "range": "± 569271.4812627494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7113518.604651162,
            "unit": "ns",
            "range": "± 260251.44092352022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30711659.523809522,
            "unit": "ns",
            "range": "± 706181.3059723133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212866.30434782608,
            "unit": "ns",
            "range": "± 11958.704376641015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225186.07594936708,
            "unit": "ns",
            "range": "± 11642.844552608654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206988.77551020408,
            "unit": "ns",
            "range": "± 12079.426854132715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13247118.421052631,
            "unit": "ns",
            "range": "± 290202.84869692934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10874612.5,
            "unit": "ns",
            "range": "± 201263.37595300344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26367.34693877551,
            "unit": "ns",
            "range": "± 2778.591778247602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63523.655913978495,
            "unit": "ns",
            "range": "± 5649.9018431154755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52479.78723404255,
            "unit": "ns",
            "range": "± 4543.377072515673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121196.875,
            "unit": "ns",
            "range": "± 15132.283044259348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8100,
            "unit": "ns",
            "range": "± 1020.0125155677716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23975,
            "unit": "ns",
            "range": "± 2312.1646271746945"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7df6c9598b4ba204c0a9054111bdc9a21954e13b",
          "message": "Merge pull request #3004 from riemannulus/0.52-maintenance\n\n🚀 Release 0.52.2",
          "timestamp": "2023-03-28T15:45:41+09:00",
          "tree_id": "5168d4a2776747d74450deb18b64e9ae2c50a345",
          "url": "https://github.com/planetarium/libplanet/commit/7df6c9598b4ba204c0a9054111bdc9a21954e13b"
        },
        "date": 1679987547860,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1852252.0833333333,
            "unit": "ns",
            "range": "± 223449.32263286842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3462951.5789473685,
            "unit": "ns",
            "range": "± 280212.10160479916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2850504.12371134,
            "unit": "ns",
            "range": "± 302602.4402707583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6987016.129032258,
            "unit": "ns",
            "range": "± 597583.8884698666"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66545.83333333333,
            "unit": "ns",
            "range": "± 15657.54512362157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9870450,
            "unit": "ns",
            "range": "± 1043642.5934817402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 28448119.387755103,
            "unit": "ns",
            "range": "± 1662392.3378926404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 71177737.5,
            "unit": "ns",
            "range": "± 2475638.457789404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 139200700,
            "unit": "ns",
            "range": "± 3715854.2914113305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 278015780,
            "unit": "ns",
            "range": "± 5074268.328002711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6467541.845703125,
            "unit": "ns",
            "range": "± 106075.40635784446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2025602.4188701923,
            "unit": "ns",
            "range": "± 29526.061563418043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1557654.1819852942,
            "unit": "ns",
            "range": "± 30323.975463666393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3478014.5833333335,
            "unit": "ns",
            "range": "± 56093.294912775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1294682.3486328125,
            "unit": "ns",
            "range": "± 24525.00053536677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 996913.5587993421,
            "unit": "ns",
            "range": "± 20896.66420491966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4096226.6666666665,
            "unit": "ns",
            "range": "± 333115.7718919146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6553347.872340426,
            "unit": "ns",
            "range": "± 481085.6849727987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 34220316.27906977,
            "unit": "ns",
            "range": "± 1859219.2736459514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8070668.085106383,
            "unit": "ns",
            "range": "± 624533.2389051594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 39499774.489795916,
            "unit": "ns",
            "range": "± 2578553.76992493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253777.4193548387,
            "unit": "ns",
            "range": "± 39021.697222666364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267763.829787234,
            "unit": "ns",
            "range": "± 44473.71726211449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224148.95833333334,
            "unit": "ns",
            "range": "± 37528.417288325225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15265798.94736842,
            "unit": "ns",
            "range": "± 1063129.368090616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13103248.936170213,
            "unit": "ns",
            "range": "± 1126449.4122861074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33564.28571428572,
            "unit": "ns",
            "range": "± 10036.800841603892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80684.94623655915,
            "unit": "ns",
            "range": "± 17780.325877561845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53989.24731182796,
            "unit": "ns",
            "range": "± 12931.949501353745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137472.8260869565,
            "unit": "ns",
            "range": "± 33877.42320358024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7785.714285714285,
            "unit": "ns",
            "range": "± 1625.559615013283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28993.617021276597,
            "unit": "ns",
            "range": "± 7697.560128883157"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69c785cbb61ced1f984a000458e57212e4d836a3",
          "message": "Merge pull request #3023 from limebell/chore/port-0.50.7-to-0.52\n\n🔀 Port 0.50.7 to 0.52.3",
          "timestamp": "2023-03-29T15:53:15+09:00",
          "tree_id": "854dfc97e54aae3f4aacf7783b5388ed1462fb1e",
          "url": "https://github.com/planetarium/libplanet/commit/69c785cbb61ced1f984a000458e57212e4d836a3"
        },
        "date": 1680074265957,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1846923.9583333333,
            "unit": "ns",
            "range": "± 242773.108605672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3417307.6923076925,
            "unit": "ns",
            "range": "± 321379.87049968325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2828086.9565217393,
            "unit": "ns",
            "range": "± 269800.84564640373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7328753.684210527,
            "unit": "ns",
            "range": "± 737784.8540128417"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81443.15789473684,
            "unit": "ns",
            "range": "± 20863.531517181385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10441870.103092784,
            "unit": "ns",
            "range": "± 944357.8099213053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 26272556.363636363,
            "unit": "ns",
            "range": "± 1084937.8909964687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 81493395,
            "unit": "ns",
            "range": "± 2871393.631434225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 135363409.75609756,
            "unit": "ns",
            "range": "± 4784586.256814944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 271427123.0769231,
            "unit": "ns",
            "range": "± 4033194.825270625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6335939.192708333,
            "unit": "ns",
            "range": "± 187003.8506637567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2053084.5052083333,
            "unit": "ns",
            "range": "± 24845.65760417059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1570456.5494791667,
            "unit": "ns",
            "range": "± 28104.512337476837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3391941.89453125,
            "unit": "ns",
            "range": "± 62668.89208146919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1086979.820033482,
            "unit": "ns",
            "range": "± 30686.93992042312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1037405.5964543269,
            "unit": "ns",
            "range": "± 27711.701305654653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4117120.8333333335,
            "unit": "ns",
            "range": "± 291241.839430889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6714894.444444444,
            "unit": "ns",
            "range": "± 373310.51970992243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 33818097.938144326,
            "unit": "ns",
            "range": "± 2117563.176840863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8039761.538461538,
            "unit": "ns",
            "range": "± 484810.33330783213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 39723365.97938144,
            "unit": "ns",
            "range": "± 2880364.498269801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253389.010989011,
            "unit": "ns",
            "range": "± 25958.597165270057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258011.45833333334,
            "unit": "ns",
            "range": "± 31020.64972610704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230116.12903225806,
            "unit": "ns",
            "range": "± 26105.10232620111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15369217.97752809,
            "unit": "ns",
            "range": "± 844971.2571176336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12145121.739130436,
            "unit": "ns",
            "range": "± 812764.3314167495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33383.67346938775,
            "unit": "ns",
            "range": "± 7022.712694037839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78568.08510638298,
            "unit": "ns",
            "range": "± 15496.882883001123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58962.244897959186,
            "unit": "ns",
            "range": "± 13476.053716665656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144245.7894736842,
            "unit": "ns",
            "range": "± 25988.204835915563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8283.333333333334,
            "unit": "ns",
            "range": "± 1811.8368604785487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32842.55319148936,
            "unit": "ns",
            "range": "± 10575.204203643218"
          }
        ]
      }
    ]
  }
}