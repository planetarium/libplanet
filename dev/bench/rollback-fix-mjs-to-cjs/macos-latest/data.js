window.BENCHMARK_DATA = {
  "lastUpdate": 1698372252417,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "330ff7bca7b03ca2c22a8f58155b38dfb937453f",
          "message": "Revert \"fix import mjs to require cjs (#3459)\"\n\nThis reverts commit a5937c2b2a851d33743b66c34d0f38cb4551f544.",
          "timestamp": "2023-10-27T10:47:58+09:00",
          "tree_id": "6f4b6dc9eae1d4afbeef25aec0647e33718abf4f",
          "url": "https://github.com/planetarium/libplanet/commit/330ff7bca7b03ca2c22a8f58155b38dfb937453f"
        },
        "date": 1698372175158,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8084267.033333333,
            "unit": "ns",
            "range": "± 149300.73936180276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19831182.26190476,
            "unit": "ns",
            "range": "± 456254.93366054737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51806792.093023255,
            "unit": "ns",
            "range": "± 1909251.3261656456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99604585.5925926,
            "unit": "ns",
            "range": "± 2768148.4322657916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199746987.75,
            "unit": "ns",
            "range": "± 3775432.6434287326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44418.137931034486,
            "unit": "ns",
            "range": "± 8655.229660102954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221751.52083333334,
            "unit": "ns",
            "range": "± 15637.737307033009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218018.1052631579,
            "unit": "ns",
            "range": "± 17149.68521792479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205887.8673469388,
            "unit": "ns",
            "range": "± 20308.810485420785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3732481.827586207,
            "unit": "ns",
            "range": "± 107033.95809410507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3411541.1818181816,
            "unit": "ns",
            "range": "± 74069.14185159725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14548.5,
            "unit": "ns",
            "range": "± 2627.0348199167333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72890.36842105263,
            "unit": "ns",
            "range": "± 15133.143968218303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60727.762886597935,
            "unit": "ns",
            "range": "± 12374.112844271902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60151.084210526315,
            "unit": "ns",
            "range": "± 11295.787004749289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4724.468085106383,
            "unit": "ns",
            "range": "± 1231.307308165809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13132.033707865168,
            "unit": "ns",
            "range": "± 1982.447370902018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1116077.4838709678,
            "unit": "ns",
            "range": "± 96392.52150154786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2298133.2065217393,
            "unit": "ns",
            "range": "± 142147.23515638718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1724970.5483870967,
            "unit": "ns",
            "range": "± 137776.47254430037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8274697.674157304,
            "unit": "ns",
            "range": "± 1398679.52938428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3012434.252873563,
            "unit": "ns",
            "range": "± 159142.71191644736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3107086.3666666667,
            "unit": "ns",
            "range": "± 88387.16737583002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3675867.375,
            "unit": "ns",
            "range": "± 95219.56904659083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3594619.465116279,
            "unit": "ns",
            "range": "± 193930.82732020394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11254664.155913979,
            "unit": "ns",
            "range": "± 1171976.6714570443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4672549.346047794,
            "unit": "ns",
            "range": "± 94809.57033093386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1403368.439453125,
            "unit": "ns",
            "range": "± 26211.510134980646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 869617.7633634869,
            "unit": "ns",
            "range": "± 18196.34606914326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2354517.5613606772,
            "unit": "ns",
            "range": "± 290838.95882921125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 683116.2560346555,
            "unit": "ns",
            "range": "± 23909.91482050775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 611517.053157552,
            "unit": "ns",
            "range": "± 16071.525159934608"
          }
        ]
      }
    ]
  }
}