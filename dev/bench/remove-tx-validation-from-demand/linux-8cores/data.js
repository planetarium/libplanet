window.BENCHMARK_DATA = {
  "lastUpdate": 1719810668333,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "9e889f1153956a905c2f4888251749db7553d892",
          "message": "Remove tx validation from tx demand",
          "timestamp": "2024-07-01T14:02:42+09:00",
          "tree_id": "7950f33d393584a31bc1f73e4370c1669602ff13",
          "url": "https://github.com/planetarium/libplanet/commit/9e889f1153956a905c2f4888251749db7553d892"
        },
        "date": 1719810642718,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3686851.466346154,
            "unit": "ns",
            "range": "± 4050.967667220316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200694.1648995536,
            "unit": "ns",
            "range": "± 1909.8990458515184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759769.4952473958,
            "unit": "ns",
            "range": "± 1467.6264255651347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939567.2022235577,
            "unit": "ns",
            "range": "± 1728.607402871223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629668.2678571428,
            "unit": "ns",
            "range": "± 698.0843661921144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564897.4675292969,
            "unit": "ns",
            "range": "± 356.7678280818622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2400300.033333333,
            "unit": "ns",
            "range": "± 32365.8888092004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2551861.705882353,
            "unit": "ns",
            "range": "± 50046.77956018337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3084463.4615384615,
            "unit": "ns",
            "range": "± 84178.6218549488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2496907,
            "unit": "ns",
            "range": "± 57057.423877870155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3222218.8947368423,
            "unit": "ns",
            "range": "± 67615.10119451024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026466.5520833334,
            "unit": "ns",
            "range": "± 98593.18246579778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1908766.1818181819,
            "unit": "ns",
            "range": "± 80190.83613875713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1696760.0666666667,
            "unit": "ns",
            "range": "± 114787.06759606891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8391719.405405406,
            "unit": "ns",
            "range": "± 280587.3370719653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204301.06923076924,
            "unit": "ns",
            "range": "± 9559.657391169332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196904.3448275862,
            "unit": "ns",
            "range": "± 8578.702201263035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169366.58333333334,
            "unit": "ns",
            "range": "± 1656.6526743205206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3181912.785714286,
            "unit": "ns",
            "range": "± 39474.787973666615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2877677.1666666665,
            "unit": "ns",
            "range": "± 34459.79206194345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12406.557894736841,
            "unit": "ns",
            "range": "± 1156.975695470918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60397.903225806454,
            "unit": "ns",
            "range": "± 3734.6825953967027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52795.34210526316,
            "unit": "ns",
            "range": "± 1740.9887106502626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58789.552083333336,
            "unit": "ns",
            "range": "± 9517.69503152146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2903.4347826086955,
            "unit": "ns",
            "range": "± 299.7240600677041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11604.5,
            "unit": "ns",
            "range": "± 624.3187356798851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5700414.142857143,
            "unit": "ns",
            "range": "± 25400.722175854473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14593828.2,
            "unit": "ns",
            "range": "± 99095.51275929992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36698313.733333334,
            "unit": "ns",
            "range": "± 208093.12161916724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75519692.1,
            "unit": "ns",
            "range": "± 358652.2632034704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151461503.57142857,
            "unit": "ns",
            "range": "± 633935.1306394375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38592.642857142855,
            "unit": "ns",
            "range": "± 463.6548545802407"
          }
        ]
      }
    ]
  }
}