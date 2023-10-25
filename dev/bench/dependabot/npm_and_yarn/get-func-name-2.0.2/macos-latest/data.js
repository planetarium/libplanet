window.BENCHMARK_DATA = {
  "lastUpdate": 1698195155287,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e62dcbe4330bc0e15798b4f65b0789d714d781a7",
          "message": "Bump get-func-name from 2.0.0 to 2.0.2\n\nBumps [get-func-name](https://github.com/chaijs/get-func-name) from 2.0.0 to 2.0.2.\n- [Release notes](https://github.com/chaijs/get-func-name/releases)\n- [Commits](https://github.com/chaijs/get-func-name/commits/v2.0.2)\n\n---\nupdated-dependencies:\n- dependency-name: get-func-name\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-09-27T23:04:56Z",
          "tree_id": "936560849fc042d8841fb317d7b814274a9370e6",
          "url": "https://github.com/planetarium/libplanet/commit/e62dcbe4330bc0e15798b4f65b0789d714d781a7"
        },
        "date": 1695857015840,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8897656.486111112,
            "unit": "ns",
            "range": "± 432993.5099402368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22170307.833333332,
            "unit": "ns",
            "range": "± 977680.9181721845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55938363.09375,
            "unit": "ns",
            "range": "± 1700199.1380813613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111555908.0483871,
            "unit": "ns",
            "range": "± 3264581.823275286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227299672.33333334,
            "unit": "ns",
            "range": "± 3772464.7152002756"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79038.86666666667,
            "unit": "ns",
            "range": "± 13114.09160535749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297802.9,
            "unit": "ns",
            "range": "± 18081.232470825795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317345.94897959183,
            "unit": "ns",
            "range": "± 36152.10134012473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311142.57446808513,
            "unit": "ns",
            "range": "± 22472.00604251966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4054601.533333333,
            "unit": "ns",
            "range": "± 118923.34624149589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3682297.1923076925,
            "unit": "ns",
            "range": "± 58469.20681775524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19652.417525773195,
            "unit": "ns",
            "range": "± 2921.6488305339644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90500.01063829787,
            "unit": "ns",
            "range": "± 9751.493152272134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94222.58947368422,
            "unit": "ns",
            "range": "± 11594.45222481446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98032.65957446808,
            "unit": "ns",
            "range": "± 13937.106419383828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7064.938775510204,
            "unit": "ns",
            "range": "± 1091.5188988387679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19103.92391304348,
            "unit": "ns",
            "range": "± 2294.948998613056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1487253.9791666667,
            "unit": "ns",
            "range": "± 160326.1138702501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2780203.8266666667,
            "unit": "ns",
            "range": "± 135519.43863284498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2240682.05,
            "unit": "ns",
            "range": "± 215987.7827323665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12045382.275510205,
            "unit": "ns",
            "range": "± 2616837.8808161947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3379897.6,
            "unit": "ns",
            "range": "± 239108.0005690209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3610413.704301075,
            "unit": "ns",
            "range": "± 333750.88500848494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4460237.352941177,
            "unit": "ns",
            "range": "± 212277.3384556835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4511706.276595744,
            "unit": "ns",
            "range": "± 406420.391109766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16654659.716494845,
            "unit": "ns",
            "range": "± 1847384.4791204538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5796502.534635416,
            "unit": "ns",
            "range": "± 57370.22483147707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1788935.3251302084,
            "unit": "ns",
            "range": "± 20548.773984370946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1052459.51015625,
            "unit": "ns",
            "range": "± 12384.308313049438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619224.571533203,
            "unit": "ns",
            "range": "± 51062.951395115975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794144.0615234375,
            "unit": "ns",
            "range": "± 11284.16532628486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736765.4307291667,
            "unit": "ns",
            "range": "± 10154.214256495134"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5cd7ff28f987e4164cdb99019f7a5946faddaab4",
          "message": "Bump get-func-name from 2.0.0 to 2.0.2\n\nBumps [get-func-name](https://github.com/chaijs/get-func-name) from 2.0.0 to 2.0.2.\n- [Release notes](https://github.com/chaijs/get-func-name/releases)\n- [Commits](https://github.com/chaijs/get-func-name/commits/v2.0.2)\n\n---\nupdated-dependencies:\n- dependency-name: get-func-name\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-25T00:31:47Z",
          "tree_id": "c1b9d3ae1de6946bc196c5c9f291513b3d96b8ed",
          "url": "https://github.com/planetarium/libplanet/commit/5cd7ff28f987e4164cdb99019f7a5946faddaab4"
        },
        "date": 1698195093527,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8529751.94736842,
            "unit": "ns",
            "range": "± 429416.7027024883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22484439.520833332,
            "unit": "ns",
            "range": "± 1305670.3010284272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73722705.61702128,
            "unit": "ns",
            "range": "± 19667004.901247915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109872166.77777778,
            "unit": "ns",
            "range": "± 3606802.7683452684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217294262.7142857,
            "unit": "ns",
            "range": "± 2907015.6782033737"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70374.1170212766,
            "unit": "ns",
            "range": "± 10095.912532697539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328548.6868131868,
            "unit": "ns",
            "range": "± 31199.660138074898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336204.5208333333,
            "unit": "ns",
            "range": "± 37664.94075005062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324101.9731182796,
            "unit": "ns",
            "range": "± 38935.834571429514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4315535.048387097,
            "unit": "ns",
            "range": "± 283018.3636826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4374045.520408163,
            "unit": "ns",
            "range": "± 353958.2129059398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22743.08695652174,
            "unit": "ns",
            "range": "± 4269.029801126354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111950.21212121213,
            "unit": "ns",
            "range": "± 24445.44769200819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109428.80434782608,
            "unit": "ns",
            "range": "± 11591.038697768536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118832.30645161291,
            "unit": "ns",
            "range": "± 17592.189118579616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8787.91489361702,
            "unit": "ns",
            "range": "± 1043.455749555855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22161.97191011236,
            "unit": "ns",
            "range": "± 5104.063236752673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399242.35,
            "unit": "ns",
            "range": "± 168381.46728064626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2605465.0327868853,
            "unit": "ns",
            "range": "± 115762.74677445058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2405625.984848485,
            "unit": "ns",
            "range": "± 322496.03180113214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10560105.887096774,
            "unit": "ns",
            "range": "± 476695.584406333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3421259.8829787234,
            "unit": "ns",
            "range": "± 208610.9983854477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3663355.301075269,
            "unit": "ns",
            "range": "± 293888.2747236419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4354057.048780488,
            "unit": "ns",
            "range": "± 222249.47322671686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4315023.302197802,
            "unit": "ns",
            "range": "± 237488.5473865223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16153701.010204082,
            "unit": "ns",
            "range": "± 2203030.615834317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5852825.7811414935,
            "unit": "ns",
            "range": "± 287416.82591672323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857472.8436197916,
            "unit": "ns",
            "range": "± 30725.608383790808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1015860.426171875,
            "unit": "ns",
            "range": "± 13528.282733113905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2737180.0794468117,
            "unit": "ns",
            "range": "± 188606.38220343651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895020.5790318081,
            "unit": "ns",
            "range": "± 13040.837954532199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722795.2022786458,
            "unit": "ns",
            "range": "± 4669.440445902808"
          }
        ]
      }
    ]
  }
}