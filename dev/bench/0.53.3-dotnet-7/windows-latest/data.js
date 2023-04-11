window.BENCHMARK_DATA = {
  "lastUpdate": 1681220359761,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "2a1572320c8214c064e4cad0f543a4fab9887ba7",
          "message": "test dotnet 7",
          "timestamp": "2023-04-11T22:14:37+09:00",
          "tree_id": "c95bb3c50c48f2fb94307633c06b0d737bffa9b6",
          "url": "https://github.com/planetarium/libplanet/commit/2a1572320c8214c064e4cad0f543a4fab9887ba7"
        },
        "date": 1681220297122,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1746886.7346938776,
            "unit": "ns",
            "range": "± 183237.09818733338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3108017.3469387754,
            "unit": "ns",
            "range": "± 304584.62234690756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2513260.2150537632,
            "unit": "ns",
            "range": "± 196800.17516107933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6404546.391752577,
            "unit": "ns",
            "range": "± 618648.7383574138"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61911.34020618557,
            "unit": "ns",
            "range": "± 14780.786206879213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8430325.773195876,
            "unit": "ns",
            "range": "± 669789.7991594003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22711068.085106384,
            "unit": "ns",
            "range": "± 1559481.1844723152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61804602.73972603,
            "unit": "ns",
            "range": "± 3066311.6385512105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119224972.58064516,
            "unit": "ns",
            "range": "± 5143066.905056903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239745775.7142857,
            "unit": "ns",
            "range": "± 11660410.455940044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5878009.15625,
            "unit": "ns",
            "range": "± 156051.51317115317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910942.87109375,
            "unit": "ns",
            "range": "± 32473.43790692062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1459878.3935546875,
            "unit": "ns",
            "range": "± 44752.88719614962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3225420.9821428573,
            "unit": "ns",
            "range": "± 51712.145833824805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048154.3772977941,
            "unit": "ns",
            "range": "± 18683.9090436327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1009315.4715401785,
            "unit": "ns",
            "range": "± 16046.87574099422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3439905.154639175,
            "unit": "ns",
            "range": "± 392856.64220847737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5324304.081632653,
            "unit": "ns",
            "range": "± 465802.631297178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29635704.08163265,
            "unit": "ns",
            "range": "± 2274895.6514833393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7534133.333333333,
            "unit": "ns",
            "range": "± 670980.9180960213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35107211.26760563,
            "unit": "ns",
            "range": "± 1718721.9734067598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225611.45833333334,
            "unit": "ns",
            "range": "± 34297.45999431159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240946.9387755102,
            "unit": "ns",
            "range": "± 37829.803894512115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199927.08333333334,
            "unit": "ns",
            "range": "± 34336.25513457556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14098598.863636363,
            "unit": "ns",
            "range": "± 772214.7653287895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11819428.86597938,
            "unit": "ns",
            "range": "± 681751.2697028214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28911.57894736842,
            "unit": "ns",
            "range": "± 8469.19151555871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71091.39784946236,
            "unit": "ns",
            "range": "± 14005.586276119306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47810.52631578947,
            "unit": "ns",
            "range": "± 11682.460700465339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128125.26315789473,
            "unit": "ns",
            "range": "± 31509.94766405862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6615.217391304348,
            "unit": "ns",
            "range": "± 1136.4524310528213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31705.208333333332,
            "unit": "ns",
            "range": "± 10417.691125061878"
          }
        ]
      }
    ]
  }
}