window.BENCHMARK_DATA = {
  "lastUpdate": 1681219705722,
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
        "date": 1681219683570,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8020276.266666667,
            "unit": "ns",
            "range": "± 70853.14775693926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19930314.666666668,
            "unit": "ns",
            "range": "± 91944.08611656066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51731582.28571428,
            "unit": "ns",
            "range": "± 256829.4188580993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106234782.46666667,
            "unit": "ns",
            "range": "± 324276.9163389011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205742445.4,
            "unit": "ns",
            "range": "± 517102.9650574991"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47472.73134328358,
            "unit": "ns",
            "range": "± 2253.884885757287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1378186.8723404256,
            "unit": "ns",
            "range": "± 92170.8966995121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2505620.111111111,
            "unit": "ns",
            "range": "± 82839.67556526721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185796.4929577466,
            "unit": "ns",
            "range": "± 107115.48134258427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5018331.7272727275,
            "unit": "ns",
            "range": "± 119740.86410530025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6120352.266183035,
            "unit": "ns",
            "range": "± 19140.222975557837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890673.9164341518,
            "unit": "ns",
            "range": "± 6059.218478577773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347502.1331129808,
            "unit": "ns",
            "range": "± 720.3522958080065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2599725.34296875,
            "unit": "ns",
            "range": "± 1766.207896267657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826512.490373884,
            "unit": "ns",
            "range": "± 942.7871411798438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790111.331891741,
            "unit": "ns",
            "range": "± 1244.6108143775602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204498.7142857143,
            "unit": "ns",
            "range": "± 2779.800807157327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204107.08333333334,
            "unit": "ns",
            "range": "± 2732.4451074361064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187397.64197530865,
            "unit": "ns",
            "range": "± 9866.685525429299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11670577.6,
            "unit": "ns",
            "range": "± 37114.32184442319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9530876.57142857,
            "unit": "ns",
            "range": "± 36541.46884276566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19329.052083333332,
            "unit": "ns",
            "range": "± 1684.6326625662607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54959.1797752809,
            "unit": "ns",
            "range": "± 3314.0028891254406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41250.34482758621,
            "unit": "ns",
            "range": "± 2247.5374370350537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92388.5,
            "unit": "ns",
            "range": "± 10901.327215799645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5040.19587628866,
            "unit": "ns",
            "range": "± 759.6015764746792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18291.572916666668,
            "unit": "ns",
            "range": "± 1446.6592785833864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333375.1923076925,
            "unit": "ns",
            "range": "± 88013.58854950489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5222073.533333333,
            "unit": "ns",
            "range": "± 51016.645157475905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24411824.866666667,
            "unit": "ns",
            "range": "± 171711.4370880347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6419853.785714285,
            "unit": "ns",
            "range": "± 50389.42263424029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27588565.4,
            "unit": "ns",
            "range": "± 357460.72147156455"
          }
        ]
      }
    ]
  }
}