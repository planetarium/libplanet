window.BENCHMARK_DATA = {
  "lastUpdate": 1678875403408,
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
      }
    ]
  }
}