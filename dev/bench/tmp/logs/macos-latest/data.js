window.BENCHMARK_DATA = {
  "lastUpdate": 1708485552752,
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
      },
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
          "id": "532814416591ec7f436d5d659e31c6a589ce8be5",
          "message": "tmp: logs",
          "timestamp": "2024-02-21T12:00:01+09:00",
          "tree_id": "d395dd51c4a4e7cf6838b57a0757ded6fd9e846d",
          "url": "https://github.com/planetarium/libplanet/commit/532814416591ec7f436d5d659e31c6a589ce8be5"
        },
        "date": 1708485483434,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8537117.311320756,
            "unit": "ns",
            "range": "± 354688.7535260293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20547290.43243243,
            "unit": "ns",
            "range": "± 695777.303520935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52294181.958333336,
            "unit": "ns",
            "range": "± 1275634.9750998686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102502094.55882353,
            "unit": "ns",
            "range": "± 1678880.1630372726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233263933.2816092,
            "unit": "ns",
            "range": "± 23301953.25604709"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70106.03191489361,
            "unit": "ns",
            "range": "± 9219.529084027477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313615.71276595746,
            "unit": "ns",
            "range": "± 29623.49456367228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 392484.5729166667,
            "unit": "ns",
            "range": "± 77660.23167222786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 355800.2731958763,
            "unit": "ns",
            "range": "± 61241.76631146447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4931690.333333333,
            "unit": "ns",
            "range": "± 528318.345877729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4286696.375,
            "unit": "ns",
            "range": "± 318709.42230780324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24751.817204301075,
            "unit": "ns",
            "range": "± 4675.173677188336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119900.53333333334,
            "unit": "ns",
            "range": "± 18268.1249003635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95438.34210526316,
            "unit": "ns",
            "range": "± 19590.59320907141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91747.65625,
            "unit": "ns",
            "range": "± 15635.759178934828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5243.875,
            "unit": "ns",
            "range": "± 1519.089715309104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19954.09574468085,
            "unit": "ns",
            "range": "± 2928.19939193123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1419496.2731958763,
            "unit": "ns",
            "range": "± 146220.31516235077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2973565.8988764044,
            "unit": "ns",
            "range": "± 286031.60601468844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2554117.313186813,
            "unit": "ns",
            "range": "± 154660.40971258515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18356260.760416668,
            "unit": "ns",
            "range": "± 5610945.991869004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3388194.723404255,
            "unit": "ns",
            "range": "± 243065.41020825572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3664200.1818181816,
            "unit": "ns",
            "range": "± 360998.039556703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4665239.763157895,
            "unit": "ns",
            "range": "± 478786.4733758297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5008278.829787234,
            "unit": "ns",
            "range": "± 446501.1154984595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24630771.095959596,
            "unit": "ns",
            "range": "± 3374336.9666352533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5575404.119591346,
            "unit": "ns",
            "range": "± 46813.67879098968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1798533.8884024785,
            "unit": "ns",
            "range": "± 46143.728062805356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138371.8954427084,
            "unit": "ns",
            "range": "± 21206.539901436456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2434060.1595052085,
            "unit": "ns",
            "range": "± 13269.57720209444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895398.2400568182,
            "unit": "ns",
            "range": "± 20940.10204970124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725609.3742268881,
            "unit": "ns",
            "range": "± 18860.111558573426"
          }
        ]
      }
    ]
  }
}