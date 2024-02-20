window.BENCHMARK_DATA = {
  "lastUpdate": 1708420715745,
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
          "id": "c4a796309df66c22cce3355051ffa8b893e3816f",
          "message": "tmp: add logs",
          "timestamp": "2024-02-20T17:59:14+09:00",
          "tree_id": "804a9bc27afc1ff196a1dd7da9418e50258aec91",
          "url": "https://github.com/planetarium/libplanet/commit/c4a796309df66c22cce3355051ffa8b893e3816f"
        },
        "date": 1708420637550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8920628.590909092,
            "unit": "ns",
            "range": "± 603613.364181537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23178676.62244898,
            "unit": "ns",
            "range": "± 1751000.5261597799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58079667.71428572,
            "unit": "ns",
            "range": "± 4460680.0229563955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114054680.61,
            "unit": "ns",
            "range": "± 8395318.542231908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211548760.11,
            "unit": "ns",
            "range": "± 17543700.64252284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44364.142857142855,
            "unit": "ns",
            "range": "± 9522.316461003864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264962.92783505155,
            "unit": "ns",
            "range": "± 34539.906700513166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248480.7857142857,
            "unit": "ns",
            "range": "± 34331.815996965335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264350.8387096774,
            "unit": "ns",
            "range": "± 37463.12809175649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4318267.610526316,
            "unit": "ns",
            "range": "± 410483.240994057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4162961.1145833335,
            "unit": "ns",
            "range": "± 417637.73476023495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21781.026315789473,
            "unit": "ns",
            "range": "± 5925.07803313747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97704.41011235955,
            "unit": "ns",
            "range": "± 18130.017431321186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81484.42,
            "unit": "ns",
            "range": "± 23407.85106558667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83973.91052631578,
            "unit": "ns",
            "range": "± 11777.120153794358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6207.541237113402,
            "unit": "ns",
            "range": "± 2068.7613641053717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21567.479166666668,
            "unit": "ns",
            "range": "± 4192.389942638966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1055297.564516129,
            "unit": "ns",
            "range": "± 100266.01218159692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2213801.127118644,
            "unit": "ns",
            "range": "± 95833.98029996682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1811705.3453608248,
            "unit": "ns",
            "range": "± 183302.6498968157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19478758.032608695,
            "unit": "ns",
            "range": "± 2151986.0014138613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3149071.0757575757,
            "unit": "ns",
            "range": "± 363917.581167183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3658045.267676768,
            "unit": "ns",
            "range": "± 298708.23086429696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4076074.9591836734,
            "unit": "ns",
            "range": "± 503759.2600720389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4003156.1224489794,
            "unit": "ns",
            "range": "± 362874.8282031623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25327902.133333333,
            "unit": "ns",
            "range": "± 3084141.0016576815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5208766.888630319,
            "unit": "ns",
            "range": "± 594158.0499134136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1627518.5947916666,
            "unit": "ns",
            "range": "± 114382.84462501138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1038022.52109375,
            "unit": "ns",
            "range": "± 15456.526257446842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2367374.704185268,
            "unit": "ns",
            "range": "± 114692.7818520337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627573.0632052951,
            "unit": "ns",
            "range": "± 12787.138409758678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573932.6589006697,
            "unit": "ns",
            "range": "± 3364.11773540535"
          }
        ]
      }
    ]
  }
}