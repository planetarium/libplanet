window.BENCHMARK_DATA = {
  "lastUpdate": 1695608336951,
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
          "id": "dd29e8df43d1be525e1e6ada4a6420be0fc5c5f9",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-09-25T11:02:16+09:00",
          "tree_id": "2c97b4e23f376902560b604a8b270dc00b79067d",
          "url": "https://github.com/planetarium/libplanet/commit/dd29e8df43d1be525e1e6ada4a6420be0fc5c5f9"
        },
        "date": 1695608272894,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7653392.6875,
            "unit": "ns",
            "range": "± 149022.78064431122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18841724.5,
            "unit": "ns",
            "range": "± 431532.63384757016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45843974.833333336,
            "unit": "ns",
            "range": "± 979240.479688888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91176553.92857143,
            "unit": "ns",
            "range": "± 976332.8093318986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186128529.43333334,
            "unit": "ns",
            "range": "± 1981882.399085002"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52245.13829787234,
            "unit": "ns",
            "range": "± 5153.807785023527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287629.1976744186,
            "unit": "ns",
            "range": "± 15051.042495705204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271755.875,
            "unit": "ns",
            "range": "± 15448.626147905794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256906.44444444444,
            "unit": "ns",
            "range": "± 14622.495114489982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3838111.9375,
            "unit": "ns",
            "range": "± 70671.45750817063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3505305.5416666665,
            "unit": "ns",
            "range": "± 89585.88789146724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16428.045977011494,
            "unit": "ns",
            "range": "± 1723.8918443118148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79245.07368421053,
            "unit": "ns",
            "range": "± 7130.640225563745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71243.4693877551,
            "unit": "ns",
            "range": "± 6037.932219621545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77831.77173913043,
            "unit": "ns",
            "range": "± 10625.7535635586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4339.140449438202,
            "unit": "ns",
            "range": "± 491.92484291050295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16317.141304347826,
            "unit": "ns",
            "range": "± 1711.6361017017691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384338.0567010308,
            "unit": "ns",
            "range": "± 120418.48457998889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2664265.445945946,
            "unit": "ns",
            "range": "± 132155.92098720546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1978204.8578947368,
            "unit": "ns",
            "range": "± 164443.5831734188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5554845.314285714,
            "unit": "ns",
            "range": "± 268625.98421787674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3060250.217391304,
            "unit": "ns",
            "range": "± 147238.8454117073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3190405.914893617,
            "unit": "ns",
            "range": "± 99186.03779302585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4090574.768656716,
            "unit": "ns",
            "range": "± 191290.4490325595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3659604.847826087,
            "unit": "ns",
            "range": "± 257261.21153757087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6472713.2,
            "unit": "ns",
            "range": "± 194002.11951674198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5121078.314174107,
            "unit": "ns",
            "range": "± 20490.789059767118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1606750.55078125,
            "unit": "ns",
            "range": "± 8372.59357574393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 941185.3109654018,
            "unit": "ns",
            "range": "± 4985.790377022542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2785693.627170139,
            "unit": "ns",
            "range": "± 117287.51221203874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818680.8967895508,
            "unit": "ns",
            "range": "± 15467.281704709763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 709296.7041713169,
            "unit": "ns",
            "range": "± 2987.1195475232216"
          }
        ]
      }
    ]
  }
}