window.BENCHMARK_DATA = {
  "lastUpdate": 1720696897318,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "47aad3fd44f64470dfb29e066e70a5ea8fa9ec57",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-11T19:34:24+09:00",
          "tree_id": "e1ce2f2894f4cd42bcca2e3a3c33fb811626d035",
          "url": "https://github.com/planetarium/libplanet/commit/47aad3fd44f64470dfb29e066e70a5ea8fa9ec57"
        },
        "date": 1720694645276,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10868931,
            "unit": "ns",
            "range": "± 184333.58052308738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26554134.42857143,
            "unit": "ns",
            "range": "± 237459.29681743978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68991225.4,
            "unit": "ns",
            "range": "± 118566.23490377495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137873762,
            "unit": "ns",
            "range": "± 175304.48052931746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276765344.6666667,
            "unit": "ns",
            "range": "± 553322.3544714324"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15543.382978723404,
            "unit": "ns",
            "range": "± 1002.1218870383756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113667.09433962264,
            "unit": "ns",
            "range": "± 4699.707704757781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104856.69387755102,
            "unit": "ns",
            "range": "± 3906.0058361242545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91390.18518518518,
            "unit": "ns",
            "range": "± 2538.0946069085435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3125689.137254902,
            "unit": "ns",
            "range": "± 126212.96422016552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2720074.8080808083,
            "unit": "ns",
            "range": "± 165329.07496057654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4879.408602150537,
            "unit": "ns",
            "range": "± 547.967652896456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27006.30681818182,
            "unit": "ns",
            "range": "± 1989.0706104324986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22756.47272727273,
            "unit": "ns",
            "range": "± 958.9941654815265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29275.896907216495,
            "unit": "ns",
            "range": "± 5308.705027838193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1259.1666666666667,
            "unit": "ns",
            "range": "± 207.57737152334144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4598.455555555555,
            "unit": "ns",
            "range": "± 415.54372560554606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678015.7160493827,
            "unit": "ns",
            "range": "± 34211.28077266129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1264478.55,
            "unit": "ns",
            "range": "± 34962.15962638787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1078086.1612903227,
            "unit": "ns",
            "range": "± 60896.69012517809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9357549.56,
            "unit": "ns",
            "range": "± 1470785.3671121008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186726.230769231,
            "unit": "ns",
            "range": "± 58831.77345299575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2280041.935483871,
            "unit": "ns",
            "range": "± 68551.15991770208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2576538.769230769,
            "unit": "ns",
            "range": "± 27044.612948342245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2299891.9166666665,
            "unit": "ns",
            "range": "± 75322.36132190189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2949022.1025641025,
            "unit": "ns",
            "range": "± 151749.81901378537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3045672.9684709823,
            "unit": "ns",
            "range": "± 30139.35637970231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925621.2561848959,
            "unit": "ns",
            "range": "± 6010.46359385301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 619243.4112630208,
            "unit": "ns",
            "range": "± 4173.9224673015115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635768.684440104,
            "unit": "ns",
            "range": "± 22027.285039291666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463815.205859375,
            "unit": "ns",
            "range": "± 588.9689837224929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420991.9500976562,
            "unit": "ns",
            "range": "± 1240.7873812214775"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "31081140e59a51fd625cd887a72adcee3295b832",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-11T19:49:14+09:00",
          "tree_id": "febb1fcfd6b9413d5a7f3a4f1c6c55a67c41dc82",
          "url": "https://github.com/planetarium/libplanet/commit/31081140e59a51fd625cd887a72adcee3295b832"
        },
        "date": 1720696884680,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10886954.416666666,
            "unit": "ns",
            "range": "± 73678.19731836097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26767603.85714286,
            "unit": "ns",
            "range": "± 185403.1393008042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67418482.42857143,
            "unit": "ns",
            "range": "± 226217.69924080255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137929075.33333334,
            "unit": "ns",
            "range": "± 407403.1553245273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275775568.03333336,
            "unit": "ns",
            "range": "± 464318.5188719157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15386.290322580646,
            "unit": "ns",
            "range": "± 873.128627167408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111238.80952380953,
            "unit": "ns",
            "range": "± 3746.92172347626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106336.03846153847,
            "unit": "ns",
            "range": "± 4386.3780983883635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92032.86666666667,
            "unit": "ns",
            "range": "± 1536.9269834253519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3106207.4696969697,
            "unit": "ns",
            "range": "± 144619.98876942392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2768440.4942528736,
            "unit": "ns",
            "range": "± 150407.0712826063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4932.155913978495,
            "unit": "ns",
            "range": "± 475.26144966249564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26774.965909090908,
            "unit": "ns",
            "range": "± 2003.827942741544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22205.4375,
            "unit": "ns",
            "range": "± 345.64702009419955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29453.052083333332,
            "unit": "ns",
            "range": "± 5335.408671507331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1109.8555555555556,
            "unit": "ns",
            "range": "± 172.4200880597786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4879.9,
            "unit": "ns",
            "range": "± 465.54402270746834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678610.9285714285,
            "unit": "ns",
            "range": "± 35071.432515218636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1283211.1,
            "unit": "ns",
            "range": "± 44481.86737963558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1073941.606060606,
            "unit": "ns",
            "range": "± 49903.912330637584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9495661.61,
            "unit": "ns",
            "range": "± 1401903.4910741022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159414.0714285714,
            "unit": "ns",
            "range": "± 25470.154574941796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2298391.0625,
            "unit": "ns",
            "range": "± 43647.72209019046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2589702.1428571427,
            "unit": "ns",
            "range": "± 41905.094156745596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2294302,
            "unit": "ns",
            "range": "± 58650.76877941726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3023997.17,
            "unit": "ns",
            "range": "± 273832.1744567984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3039898.9263020833,
            "unit": "ns",
            "range": "± 35311.89384826803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926659.3725260417,
            "unit": "ns",
            "range": "± 6802.443335258409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614428.1009114584,
            "unit": "ns",
            "range": "± 5752.819222256638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1621080.1481770833,
            "unit": "ns",
            "range": "± 23843.316268671715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467413.712101863,
            "unit": "ns",
            "range": "± 786.3800700989568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424302.07252604165,
            "unit": "ns",
            "range": "± 1213.7419037273717"
          }
        ]
      }
    ]
  }
}