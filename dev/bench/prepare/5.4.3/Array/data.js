window.BENCHMARK_DATA = {
  "lastUpdate": 1734066166561,
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "49ce9b0d402217257847c1d1dc92c53c57d40547",
          "message": "prepare: 5.4.3",
          "timestamp": "2024-12-13T13:46:36+09:00",
          "tree_id": "860f31b64bf519864f79ee30dfa27ae1bd55a521",
          "url": "https://github.com/planetarium/libplanet/commit/49ce9b0d402217257847c1d1dc92c53c57d40547"
        },
        "date": 1734066057424,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10530529.153846154,
            "unit": "ns",
            "range": "± 139641.6546473187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26338211.35714286,
            "unit": "ns",
            "range": "± 200681.49503968382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65982275.2,
            "unit": "ns",
            "range": "± 107337.66908100278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134425048.14285713,
            "unit": "ns",
            "range": "± 184865.20099452804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270215193.5,
            "unit": "ns",
            "range": "± 359803.3119764079"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13103.793103448275,
            "unit": "ns",
            "range": "± 382.7042292601377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54047.90217391304,
            "unit": "ns",
            "range": "± 3065.0657059080622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105986.15789473684,
            "unit": "ns",
            "range": "± 3589.562131892938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91963.9375,
            "unit": "ns",
            "range": "± 2214.317457461634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2829756.6770833335,
            "unit": "ns",
            "range": "± 167632.63313300643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2772623.3024691357,
            "unit": "ns",
            "range": "± 145045.32271926416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5499.458333333333,
            "unit": "ns",
            "range": "± 854.7274347529149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 28045.11827956989,
            "unit": "ns",
            "range": "± 2545.712293972743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23419.567010309278,
            "unit": "ns",
            "range": "± 1967.0206632706418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30684.936842105264,
            "unit": "ns",
            "range": "± 5169.353992337563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1306.9157894736843,
            "unit": "ns",
            "range": "± 311.9055252202723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4943.25,
            "unit": "ns",
            "range": "± 549.8996237076782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 682520.9052631579,
            "unit": "ns",
            "range": "± 50540.380929420484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1268438.875,
            "unit": "ns",
            "range": "± 44945.17935371735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1026694.4714285714,
            "unit": "ns",
            "range": "± 49365.42104711142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8727604.99,
            "unit": "ns",
            "range": "± 1341854.3067729971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2138825.426229508,
            "unit": "ns",
            "range": "± 94330.93951428997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275094.6938775512,
            "unit": "ns",
            "range": "± 90574.84574883454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2540907.2352941176,
            "unit": "ns",
            "range": "± 38734.097515189074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2249015.6333333333,
            "unit": "ns",
            "range": "± 65931.40920029528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2742722.9142857143,
            "unit": "ns",
            "range": "± 88140.09279929825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3018361.083984375,
            "unit": "ns",
            "range": "± 53066.17922107127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 912103.9885066106,
            "unit": "ns",
            "range": "± 4710.128029356095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 606364.4009765625,
            "unit": "ns",
            "range": "± 2870.7419340853876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1640862.3228236607,
            "unit": "ns",
            "range": "± 8833.780802117937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459188.4111328125,
            "unit": "ns",
            "range": "± 1087.4210079969075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419870.0602213542,
            "unit": "ns",
            "range": "± 1650.7466835009895"
          }
        ]
      }
    ]
  }
}