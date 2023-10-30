window.BENCHMARK_DATA = {
  "lastUpdate": 1698666964869,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "f1eb0c6d0bd637f1a2b33a1ca540400c75201b88",
          "message": "DONT MERGE",
          "timestamp": "2023-10-30T20:33:25+09:00",
          "tree_id": "858e9b734ea711e4bbeec82a2eba57fe46e551d7",
          "url": "https://github.com/planetarium/libplanet/commit/f1eb0c6d0bd637f1a2b33a1ca540400c75201b88"
        },
        "date": 1698666883649,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707044.7916666667,
            "unit": "ns",
            "range": "± 198732.79382378937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3198147.8723404254,
            "unit": "ns",
            "range": "± 257149.4974284073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2408048.913043478,
            "unit": "ns",
            "range": "± 208930.1074020337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11032435.164835164,
            "unit": "ns",
            "range": "± 1207663.727052603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64543.298969072166,
            "unit": "ns",
            "range": "± 12257.309955156139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8596657.446808511,
            "unit": "ns",
            "range": "± 623738.0497684064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23536698.94736842,
            "unit": "ns",
            "range": "± 1758756.3401264683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65273115.49295775,
            "unit": "ns",
            "range": "± 3197574.5004901937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133370166.66666667,
            "unit": "ns",
            "range": "± 7493392.978286204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261973021.42857143,
            "unit": "ns",
            "range": "± 7339383.620368349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5504455.572916667,
            "unit": "ns",
            "range": "± 65977.42849627424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1752440.7863451086,
            "unit": "ns",
            "range": "± 40343.17959166566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343864.5399305555,
            "unit": "ns",
            "range": "± 36870.00911415965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3153257.16796875,
            "unit": "ns",
            "range": "± 69268.11868245086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1027902.4674479166,
            "unit": "ns",
            "range": "± 30567.937253218963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1024730.1529947916,
            "unit": "ns",
            "range": "± 30308.891882717828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3854525,
            "unit": "ns",
            "range": "± 266644.55396527535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4167579.347826087,
            "unit": "ns",
            "range": "± 275908.57879833144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5200460,
            "unit": "ns",
            "range": "± 366067.8129829604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4689115.7894736845,
            "unit": "ns",
            "range": "± 439975.91721225344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13003266.867469879,
            "unit": "ns",
            "range": "± 841167.4959824497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290133.3333333333,
            "unit": "ns",
            "range": "± 30335.91046545523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296098.94736842107,
            "unit": "ns",
            "range": "± 40938.92049927717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254957.29166666666,
            "unit": "ns",
            "range": "± 31107.351457380344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4746027.835051547,
            "unit": "ns",
            "range": "± 417430.8307827448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4331887.368421053,
            "unit": "ns",
            "range": "± 316189.763329698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29171.428571428572,
            "unit": "ns",
            "range": "± 10145.874180503028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101941.48936170213,
            "unit": "ns",
            "range": "± 15856.143679394623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106566.66666666667,
            "unit": "ns",
            "range": "± 14941.598870656186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121224.73684210527,
            "unit": "ns",
            "range": "± 16741.920683562326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8277.64705882353,
            "unit": "ns",
            "range": "± 1140.4235293655302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26947.47474747475,
            "unit": "ns",
            "range": "± 8421.357002414212"
          }
        ]
      }
    ]
  }
}