window.BENCHMARK_DATA = {
  "lastUpdate": 1698717354216,
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
          "id": "ab2a1328b2854206290ba75aefd906faa95dcc9e",
          "message": "Bump postcss from 8.4.21 to 8.4.31\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\n- [Release notes](https://github.com/postcss/postcss/releases)\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\n\n---\nupdated-dependencies:\n- dependency-name: postcss\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-04T12:00:35Z",
          "tree_id": "1bed0488e4e5e26951a5fed09d30df78dabb68c4",
          "url": "https://github.com/planetarium/libplanet/commit/ab2a1328b2854206290ba75aefd906faa95dcc9e"
        },
        "date": 1696422146020,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1551495,
            "unit": "ns",
            "range": "± 180439.81193828382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2883556.1224489794,
            "unit": "ns",
            "range": "± 253024.94806554646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2187920.4081632653,
            "unit": "ns",
            "range": "± 245082.66771071925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9909291.304347826,
            "unit": "ns",
            "range": "± 868337.0893856116"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61532.25806451613,
            "unit": "ns",
            "range": "± 9554.900419137572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8245624.561403509,
            "unit": "ns",
            "range": "± 352093.4602390504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22038810.101010103,
            "unit": "ns",
            "range": "± 1981834.1570937408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55887074,
            "unit": "ns",
            "range": "± 4064777.000719695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110822871.42857143,
            "unit": "ns",
            "range": "± 7802281.871363415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210743504,
            "unit": "ns",
            "range": "± 20105782.500764914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5115525.792910447,
            "unit": "ns",
            "range": "± 240099.3318938779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1739506.0026041667,
            "unit": "ns",
            "range": "± 30468.779377388495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323519.8874080882,
            "unit": "ns",
            "range": "± 26674.39740627718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3287077.734375,
            "unit": "ns",
            "range": "± 44763.67677559342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1127828.0294215425,
            "unit": "ns",
            "range": "± 101884.93671626947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935517.6039751838,
            "unit": "ns",
            "range": "± 18509.494311583334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3410877.0833333335,
            "unit": "ns",
            "range": "± 239445.41119633606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3623363.5416666665,
            "unit": "ns",
            "range": "± 286147.785931746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4882359.793814433,
            "unit": "ns",
            "range": "± 344995.9186533329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4486471.134020618,
            "unit": "ns",
            "range": "± 414715.3391079343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12169733.333333334,
            "unit": "ns",
            "range": "± 581888.4784669215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301510.20408163266,
            "unit": "ns",
            "range": "± 44294.69608191085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300786.4583333333,
            "unit": "ns",
            "range": "± 37094.24588599797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255061.8556701031,
            "unit": "ns",
            "range": "± 30488.493195859188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4378539.759036144,
            "unit": "ns",
            "range": "± 232025.57730106488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4064217.3469387754,
            "unit": "ns",
            "range": "± 304706.18297534453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29621.21212121212,
            "unit": "ns",
            "range": "± 10086.900706495962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99748.91304347826,
            "unit": "ns",
            "range": "± 11800.39573340161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94605.20833333333,
            "unit": "ns",
            "range": "± 14634.245128548866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110146.31578947368,
            "unit": "ns",
            "range": "± 23261.784067098604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5641.935483870968,
            "unit": "ns",
            "range": "± 1002.9654487790694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26904.040404040403,
            "unit": "ns",
            "range": "± 9213.05550139693"
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
          "id": "1691d834a585bd5b96539e3c138d3b1f111a77d9",
          "message": "Bump postcss from 8.4.21 to 8.4.31\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\n- [Release notes](https://github.com/postcss/postcss/releases)\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\n\n---\nupdated-dependencies:\n- dependency-name: postcss\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-25T00:31:37Z",
          "tree_id": "82d924812613895c5f3c2a2cf73e7fd310075947",
          "url": "https://github.com/planetarium/libplanet/commit/1691d834a585bd5b96539e3c138d3b1f111a77d9"
        },
        "date": 1698194879842,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1376598.98989899,
            "unit": "ns",
            "range": "± 105580.28330829141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2587478.846153846,
            "unit": "ns",
            "range": "± 105245.0852777132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2047705.1546391752,
            "unit": "ns",
            "range": "± 151345.49627916337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9041876,
            "unit": "ns",
            "range": "± 453057.42904273275"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55579.78723404255,
            "unit": "ns",
            "range": "± 4904.081683510681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7750983.333333333,
            "unit": "ns",
            "range": "± 259642.15892465712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21087166.666666668,
            "unit": "ns",
            "range": "± 184007.99930851866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53849738.461538464,
            "unit": "ns",
            "range": "± 323106.25068353175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106794338.46153846,
            "unit": "ns",
            "range": "± 629052.9621826522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214350871.42857143,
            "unit": "ns",
            "range": "± 2812641.1913766344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4517165.745192308,
            "unit": "ns",
            "range": "± 18568.004877740263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1436955.1231971155,
            "unit": "ns",
            "range": "± 6249.134733782847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073445.99609375,
            "unit": "ns",
            "range": "± 7651.24404524681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685832.001201923,
            "unit": "ns",
            "range": "± 20701.32446687308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842418.3872767857,
            "unit": "ns",
            "range": "± 3641.598820265169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760189.2508370535,
            "unit": "ns",
            "range": "± 5122.534802979379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3315910.5263157897,
            "unit": "ns",
            "range": "± 62951.37360373077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3435234.782608696,
            "unit": "ns",
            "range": "± 165806.88521332043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4218130.555555556,
            "unit": "ns",
            "range": "± 140198.42228467163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3962362.0689655175,
            "unit": "ns",
            "range": "± 165786.49113018325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10249723.529411765,
            "unit": "ns",
            "range": "± 282552.0741051199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256687.5,
            "unit": "ns",
            "range": "± 4834.028685613412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254545.45454545456,
            "unit": "ns",
            "range": "± 5963.837632544945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230852.04081632654,
            "unit": "ns",
            "range": "± 15521.884979534685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4074475,
            "unit": "ns",
            "range": "± 77384.95547154713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3647433.3333333335,
            "unit": "ns",
            "range": "± 91538.13017187055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23828.865979381444,
            "unit": "ns",
            "range": "± 2707.549582605652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88054.73684210527,
            "unit": "ns",
            "range": "± 6431.848422665048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69674.07407407407,
            "unit": "ns",
            "range": "± 2802.841225935877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89764.58333333333,
            "unit": "ns",
            "range": "± 8596.069838400957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5625.773195876289,
            "unit": "ns",
            "range": "± 929.5247834372436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21130.85106382979,
            "unit": "ns",
            "range": "± 2369.793176209605"
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
          "id": "537f0b60b24d70cd06e6bcc0a23f04bfc912bc2c",
          "message": "Bump postcss from 8.4.21 to 8.4.31\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\n- [Release notes](https://github.com/postcss/postcss/releases)\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\n\n---\nupdated-dependencies:\n- dependency-name: postcss\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-26T04:43:54Z",
          "tree_id": "ef92f38a3310a63caa72b8e04aab07af7a5d1b02",
          "url": "https://github.com/planetarium/libplanet/commit/537f0b60b24d70cd06e6bcc0a23f04bfc912bc2c"
        },
        "date": 1698296270971,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1301328,
            "unit": "ns",
            "range": "± 106187.30076823897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2308528.205128205,
            "unit": "ns",
            "range": "± 80026.83085828135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1851715.2173913044,
            "unit": "ns",
            "range": "± 104073.34579203179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7494240.540540541,
            "unit": "ns",
            "range": "± 246858.38434600906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44013.88888888889,
            "unit": "ns",
            "range": "± 2184.6007502938987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7085650,
            "unit": "ns",
            "range": "± 54066.565098390165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18098173.333333332,
            "unit": "ns",
            "range": "± 71099.58274607992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46445186.666666664,
            "unit": "ns",
            "range": "± 217150.7865406849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93139206.66666667,
            "unit": "ns",
            "range": "± 351692.7788093845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185304640,
            "unit": "ns",
            "range": "± 1180104.9026009752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4418198.502604167,
            "unit": "ns",
            "range": "± 4582.644559026835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1394195.4520089286,
            "unit": "ns",
            "range": "± 994.395662024396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 997351.9252232143,
            "unit": "ns",
            "range": "± 827.8355226687547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553803.0338541665,
            "unit": "ns",
            "range": "± 6644.521095557524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817278.3658854166,
            "unit": "ns",
            "range": "± 744.1436008793881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729970.4702524039,
            "unit": "ns",
            "range": "± 373.25746575388655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3015913.3333333335,
            "unit": "ns",
            "range": "± 55750.21930343371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3106550,
            "unit": "ns",
            "range": "± 67521.67800047625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3866260,
            "unit": "ns",
            "range": "± 42736.381289415294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3705662.7118644067,
            "unit": "ns",
            "range": "± 162327.2757354457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8983745,
            "unit": "ns",
            "range": "± 205311.22335590288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243148.27586206896,
            "unit": "ns",
            "range": "± 6454.268835964036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235395.45454545456,
            "unit": "ns",
            "range": "± 8676.872615939148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209149.4382022472,
            "unit": "ns",
            "range": "± 11562.88265799731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3776593.3333333335,
            "unit": "ns",
            "range": "± 50419.98564439455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3473020,
            "unit": "ns",
            "range": "± 43642.16833686036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18578.350515463917,
            "unit": "ns",
            "range": "± 2456.718119265166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80529.59183673469,
            "unit": "ns",
            "range": "± 5674.3083357724945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64124.137931034486,
            "unit": "ns",
            "range": "± 1850.0299558219112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73268.36734693877,
            "unit": "ns",
            "range": "± 8527.210502646722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4413.829787234043,
            "unit": "ns",
            "range": "± 465.728949698267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17564.21052631579,
            "unit": "ns",
            "range": "± 1649.8172554812734"
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
          "id": "1163ee106940654bae956041b68d4d3b8991e4d5",
          "message": "Bump postcss from 8.4.21 to 8.4.31\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\n- [Release notes](https://github.com/postcss/postcss/releases)\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\n\n---\nupdated-dependencies:\n- dependency-name: postcss\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-31T01:38:18Z",
          "tree_id": "4ae588d1abee33ea672dfec2d9b62f3c8b81cede",
          "url": "https://github.com/planetarium/libplanet/commit/1163ee106940654bae956041b68d4d3b8991e4d5"
        },
        "date": 1698717284096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356345.4545454546,
            "unit": "ns",
            "range": "± 134717.10137394362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2562384.8484848486,
            "unit": "ns",
            "range": "± 119573.13467552206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1964262.6373626373,
            "unit": "ns",
            "range": "± 109437.76379330011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8180644.117647059,
            "unit": "ns",
            "range": "± 212201.52398729656"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57965.26315789474,
            "unit": "ns",
            "range": "± 7109.953592646415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7826891.304347826,
            "unit": "ns",
            "range": "± 194884.09588788802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21565011.76470588,
            "unit": "ns",
            "range": "± 418042.64567498513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54465446.666666664,
            "unit": "ns",
            "range": "± 705822.9633015702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108559333.33333333,
            "unit": "ns",
            "range": "± 1066059.0654144736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220357050,
            "unit": "ns",
            "range": "± 1580777.958791177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4623070.520833333,
            "unit": "ns",
            "range": "± 19689.71115317068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1471093.5965401786,
            "unit": "ns",
            "range": "± 3247.583591524603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091483.0859375,
            "unit": "ns",
            "range": "± 2642.7282519337828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625668.8802083335,
            "unit": "ns",
            "range": "± 5659.904442175811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846810.7356770834,
            "unit": "ns",
            "range": "± 5066.791367732102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762090.3250558035,
            "unit": "ns",
            "range": "± 2310.1242184162443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3380264.5161290322,
            "unit": "ns",
            "range": "± 100436.81114142395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3319547.76119403,
            "unit": "ns",
            "range": "± 149541.88159499803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4120324.4444444445,
            "unit": "ns",
            "range": "± 153175.76676893944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4075534.6938775512,
            "unit": "ns",
            "range": "± 161301.02623022947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10271700,
            "unit": "ns",
            "range": "± 458093.75955405994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262931.5789473684,
            "unit": "ns",
            "range": "± 8983.892651255053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252421.73913043478,
            "unit": "ns",
            "range": "± 9518.027644504185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238889.79591836734,
            "unit": "ns",
            "range": "± 14833.866864155427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4303852.94117647,
            "unit": "ns",
            "range": "± 87479.38412596892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3955450,
            "unit": "ns",
            "range": "± 73559.11001817971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25481.052631578947,
            "unit": "ns",
            "range": "± 2295.6153737089667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89275.2688172043,
            "unit": "ns",
            "range": "± 5582.905895872619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69115.78947368421,
            "unit": "ns",
            "range": "± 2984.6505821861897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92067.01030927835,
            "unit": "ns",
            "range": "± 12639.519057713758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7053.061224489796,
            "unit": "ns",
            "range": "± 1267.04494925374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24354.444444444445,
            "unit": "ns",
            "range": "± 2494.3153847202116"
          }
        ]
      }
    ]
  }
}