window.BENCHMARK_DATA = {
  "lastUpdate": 1720694657642,
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
      }
    ]
  }
}