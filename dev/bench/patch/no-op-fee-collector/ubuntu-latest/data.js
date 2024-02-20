window.BENCHMARK_DATA = {
  "lastUpdate": 1708406325582,
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "94e15d88dbeabdb0d3254ec0f3b491e4baf48109",
          "message": "Disabled fee processing",
          "timestamp": "2024-02-20T14:07:19+09:00",
          "tree_id": "c6e224f14fddc85f3600523f2efe6f98c6385f1a",
          "url": "https://github.com/planetarium/libplanet/commit/94e15d88dbeabdb0d3254ec0f3b491e4baf48109"
        },
        "date": 1708406298299,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5766922.566666666,
            "unit": "ns",
            "range": "± 84339.97338024806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15001905.533333333,
            "unit": "ns",
            "range": "± 140083.11762351598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38107243.461538464,
            "unit": "ns",
            "range": "± 251439.31548175975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74143089.3076923,
            "unit": "ns",
            "range": "± 268164.71366723615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154005676,
            "unit": "ns",
            "range": "± 820487.2293305362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196993.57142857142,
            "unit": "ns",
            "range": "± 7120.761250558569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195048.41176470587,
            "unit": "ns",
            "range": "± 6273.981125142574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173540.4375,
            "unit": "ns",
            "range": "± 5396.984145514556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3264140.2,
            "unit": "ns",
            "range": "± 50962.621085318155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2840499.8333333335,
            "unit": "ns",
            "range": "± 33101.99479936171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13763.082474226803,
            "unit": "ns",
            "range": "± 2431.5763691400853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67037.24444444444,
            "unit": "ns",
            "range": "± 3949.0791831301276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55842.15053763441,
            "unit": "ns",
            "range": "± 5955.863970010229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63496.41758241758,
            "unit": "ns",
            "range": "± 7144.120597566667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3610.840909090909,
            "unit": "ns",
            "range": "± 716.5126413426087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13384.053191489362,
            "unit": "ns",
            "range": "± 2069.488110657076"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40039.14736842105,
            "unit": "ns",
            "range": "± 5794.177829747061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 984433.0408163265,
            "unit": "ns",
            "range": "± 95606.99798643246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1903427.549180328,
            "unit": "ns",
            "range": "± 85549.42477897913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1619328.2765957448,
            "unit": "ns",
            "range": "± 99785.52307557286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7885163.338709678,
            "unit": "ns",
            "range": "± 205299.57177615623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3724967.893329327,
            "unit": "ns",
            "range": "± 6717.039600652816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219519.3384915865,
            "unit": "ns",
            "range": "± 2585.3374807154655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771021.7817382812,
            "unit": "ns",
            "range": "± 1779.406493177082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950606.0337611607,
            "unit": "ns",
            "range": "± 5266.434902230116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626200.4413364956,
            "unit": "ns",
            "range": "± 1143.7351927895782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580074.5029296875,
            "unit": "ns",
            "range": "± 957.283289009137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2440715.6,
            "unit": "ns",
            "range": "± 65150.81925425037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2523967.294117647,
            "unit": "ns",
            "range": "± 101364.34985423506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3247180.1,
            "unit": "ns",
            "range": "± 56687.678170833555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3283527.670886076,
            "unit": "ns",
            "range": "± 170694.15850832345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8937388.5,
            "unit": "ns",
            "range": "± 233136.5395848316"
          }
        ]
      }
    ]
  }
}