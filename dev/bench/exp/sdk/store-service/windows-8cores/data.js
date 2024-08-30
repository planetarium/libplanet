window.BENCHMARK_DATA = {
  "lastUpdate": 1725005375076,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "e1eb5cd0c5fe0ec219d47ccea9bf706c46999198",
          "message": "feat: Add IStoreService",
          "timestamp": "2024-08-30T16:54:37+09:00",
          "tree_id": "a89562dce658f987a8d715b4193ee2ef965bdfa9",
          "url": "https://github.com/planetarium/libplanet/commit/e1eb5cd0c5fe0ec219d47ccea9bf706c46999198"
        },
        "date": 1725005074370,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986840.4255319149,
            "unit": "ns",
            "range": "± 98686.89280025824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1826088.888888889,
            "unit": "ns",
            "range": "± 69398.14715309645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1557048.4210526317,
            "unit": "ns",
            "range": "± 100257.45779354812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6833026.666666667,
            "unit": "ns",
            "range": "± 177040.10637244832"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30277.272727272728,
            "unit": "ns",
            "range": "± 386.599113370523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9885447.05882353,
            "unit": "ns",
            "range": "± 199884.1824583897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24004313.333333332,
            "unit": "ns",
            "range": "± 366592.5372684943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58941884.615384616,
            "unit": "ns",
            "range": "± 203200.9015980402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117636486.66666667,
            "unit": "ns",
            "range": "± 853364.4530969894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234019346.66666666,
            "unit": "ns",
            "range": "± 1049856.1322300083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3340111.495535714,
            "unit": "ns",
            "range": "± 12840.423011854533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051158.6328125,
            "unit": "ns",
            "range": "± 2217.978005776475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742217.9827008928,
            "unit": "ns",
            "range": "± 2541.8463274498536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953510.703125,
            "unit": "ns",
            "range": "± 5920.010090012955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624011.4408052885,
            "unit": "ns",
            "range": "± 1911.1818723868014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568660.87890625,
            "unit": "ns",
            "range": "± 1258.3674773098426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2117843.5897435895,
            "unit": "ns",
            "range": "± 73220.89791881677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2204254.1666666665,
            "unit": "ns",
            "range": "± 86978.97999512817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2681400,
            "unit": "ns",
            "range": "± 38342.64923032836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2281366.6666666665,
            "unit": "ns",
            "range": "± 62780.907190739985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2928533.3333333335,
            "unit": "ns",
            "range": "± 21148.57972163673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178405.6603773585,
            "unit": "ns",
            "range": "± 7333.364614878085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169724.64788732395,
            "unit": "ns",
            "range": "± 7989.684748114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147571.42857142858,
            "unit": "ns",
            "range": "± 2146.7071640891427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2726940,
            "unit": "ns",
            "range": "± 43113.41852767949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2472940,
            "unit": "ns",
            "range": "± 32639.695376729764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10742.553191489362,
            "unit": "ns",
            "range": "± 1298.3438053632747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52934.04255319149,
            "unit": "ns",
            "range": "± 4690.038704737221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44376.92307692308,
            "unit": "ns",
            "range": "± 1824.1963457074207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54761.95652173913,
            "unit": "ns",
            "range": "± 13317.408605060253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2710.3092783505153,
            "unit": "ns",
            "range": "± 501.141309097393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10021.59090909091,
            "unit": "ns",
            "range": "± 871.1135512817777"
          }
        ]
      }
    ]
  }
}