window.BENCHMARK_DATA = {
  "lastUpdate": 1704185238404,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "9a68e63c24b34dca76ff7b938611af74e8a60cc2",
          "message": "scale timeout",
          "timestamp": "2023-12-26T17:21:19+09:00",
          "tree_id": "f77f0ef7bbaf5d161e3f60fab58495d263b9df09",
          "url": "https://github.com/planetarium/libplanet/commit/9a68e63c24b34dca76ff7b938611af74e8a60cc2"
        },
        "date": 1704185187767,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988629.5918367347,
            "unit": "ns",
            "range": "± 108917.33099734066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1761928.2608695652,
            "unit": "ns",
            "range": "± 58754.24774447652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1559754.6391752576,
            "unit": "ns",
            "range": "± 145435.0234502068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10809595.604395604,
            "unit": "ns",
            "range": "± 963116.1661689723"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35435.16483516483,
            "unit": "ns",
            "range": "± 2473.071577630342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5013380,
            "unit": "ns",
            "range": "± 21109.0095862948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12983013.333333334,
            "unit": "ns",
            "range": "± 141368.25197570585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32674493.333333332,
            "unit": "ns",
            "range": "± 350550.6697971609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64209970,
            "unit": "ns",
            "range": "± 920722.0173010186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133515220,
            "unit": "ns",
            "range": "± 1832658.118378096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3272078.2942708335,
            "unit": "ns",
            "range": "± 11032.422409924991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046473.0050223215,
            "unit": "ns",
            "range": "± 1779.8208155054704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739016.81640625,
            "unit": "ns",
            "range": "± 2129.818814679988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920620.9309895833,
            "unit": "ns",
            "range": "± 4207.658567023232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605107.9702524039,
            "unit": "ns",
            "range": "± 950.260143080424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580973.9713541666,
            "unit": "ns",
            "range": "± 2191.1576075040384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2125194.285714286,
            "unit": "ns",
            "range": "± 68476.06684888112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2267193.3333333335,
            "unit": "ns",
            "range": "± 41530.89154329525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2854114.285714286,
            "unit": "ns",
            "range": "± 45048.92822327667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2909495,
            "unit": "ns",
            "range": "± 100470.23018708653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12501712.765957447,
            "unit": "ns",
            "range": "± 1563401.2824424843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180700,
            "unit": "ns",
            "range": "± 7416.357120660822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168226.08695652173,
            "unit": "ns",
            "range": "± 7440.027912936117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152120,
            "unit": "ns",
            "range": "± 9625.946761946578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2905821.4285714286,
            "unit": "ns",
            "range": "± 31847.18749981467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2577356.25,
            "unit": "ns",
            "range": "± 48208.96139031968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12139.78494623656,
            "unit": "ns",
            "range": "± 1760.0111032842844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58510.98901098901,
            "unit": "ns",
            "range": "± 5883.242691453802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45902.409638554214,
            "unit": "ns",
            "range": "± 2465.170844701134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59924.444444444445,
            "unit": "ns",
            "range": "± 8402.344658207367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2868.041237113402,
            "unit": "ns",
            "range": "± 582.2990339580289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11954.347826086956,
            "unit": "ns",
            "range": "± 1332.6345915556171"
          }
        ]
      }
    ]
  }
}