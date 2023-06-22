window.BENCHMARK_DATA = {
  "lastUpdate": 1687412678777,
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "a1c360c93a287f9a71a45026cb78a3dfecc5b1c0",
          "message": "WIP: fix test",
          "timestamp": "2023-06-22T14:15:49+09:00",
          "tree_id": "865718399b7119b0a6f7a9ed2dde5147e509ab27",
          "url": "https://github.com/planetarium/libplanet/commit/a1c360c93a287f9a71a45026cb78a3dfecc5b1c0"
        },
        "date": 1687412613523,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10815507.260869564,
            "unit": "ns",
            "range": "± 1671591.089208964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26811910.265306123,
            "unit": "ns",
            "range": "± 4143265.308064278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64120555.1344086,
            "unit": "ns",
            "range": "± 5892047.099404036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127357202.1098901,
            "unit": "ns",
            "range": "± 9269886.953343201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266242035.18681318,
            "unit": "ns",
            "range": "± 25680630.893693525"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 90585.31707317074,
            "unit": "ns",
            "range": "± 9347.409050307951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375640.9831460674,
            "unit": "ns",
            "range": "± 29911.509777748965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370991.3548387097,
            "unit": "ns",
            "range": "± 43123.23608683585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 382127.05494505493,
            "unit": "ns",
            "range": "± 52937.99295556656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4849741.520833333,
            "unit": "ns",
            "range": "± 412997.47867633536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4323129.448979592,
            "unit": "ns",
            "range": "± 400026.06261672714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33622.23563218391,
            "unit": "ns",
            "range": "± 9269.083638583936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117501.88144329897,
            "unit": "ns",
            "range": "± 29416.445465803117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138450.02173913043,
            "unit": "ns",
            "range": "± 15183.673673729012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148274.20652173914,
            "unit": "ns",
            "range": "± 23563.429240038186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10324.895604395604,
            "unit": "ns",
            "range": "± 1419.0292446999806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30102.48795180723,
            "unit": "ns",
            "range": "± 4377.127383798581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2089855.2413793104,
            "unit": "ns",
            "range": "± 375908.0011193043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4074868.554347826,
            "unit": "ns",
            "range": "± 947165.4000709413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2966868.9775280897,
            "unit": "ns",
            "range": "± 438240.2105802866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10963776.721649485,
            "unit": "ns",
            "range": "± 3638792.883167143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4023819.824742268,
            "unit": "ns",
            "range": "± 521059.8930872977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4413066.29787234,
            "unit": "ns",
            "range": "± 717358.0760279095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5303818.080645162,
            "unit": "ns",
            "range": "± 669205.968175983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4917709.3,
            "unit": "ns",
            "range": "± 568013.7237771003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9474108.076086957,
            "unit": "ns",
            "range": "± 1325171.5253712535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8336608.645947802,
            "unit": "ns",
            "range": "± 544017.1373699608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2507041.0738636362,
            "unit": "ns",
            "range": "± 93211.65090410778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1612945.2712590145,
            "unit": "ns",
            "range": "± 83249.25608017319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3733211.0060022864,
            "unit": "ns",
            "range": "± 196253.34514419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1118470.5898038903,
            "unit": "ns",
            "range": "± 44156.78347373203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 971326.1910593134,
            "unit": "ns",
            "range": "± 46962.84732426324"
          }
        ]
      }
    ]
  }
}