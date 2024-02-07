window.BENCHMARK_DATA = {
  "lastUpdate": 1707286889995,
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
          "id": "5d0510f102af048b9756cde98c5824afb734fbeb",
          "message": "Bump vite from 4.1.4 to 4.5.2\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.1.4 to 4.5.2.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v4.5.2/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v4.5.2/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-01-19T22:56:24Z",
          "tree_id": "812bb093a755767b10a763f8b7c0eec6c7cfc204",
          "url": "https://github.com/planetarium/libplanet/commit/5d0510f102af048b9756cde98c5824afb734fbeb"
        },
        "date": 1705705923912,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8391610.73,
            "unit": "ns",
            "range": "± 502244.1995099506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23245593.86170213,
            "unit": "ns",
            "range": "± 2233589.2647529026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59175549.42307692,
            "unit": "ns",
            "range": "± 574675.320403394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119564610.59523809,
            "unit": "ns",
            "range": "± 2752392.2183637074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245985079.40625,
            "unit": "ns",
            "range": "± 11341492.426071608"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39260.37362637363,
            "unit": "ns",
            "range": "± 7334.235360657504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286903.4516129032,
            "unit": "ns",
            "range": "± 21502.036479647453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285462.9520547945,
            "unit": "ns",
            "range": "± 14238.646601026354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246540.73711340205,
            "unit": "ns",
            "range": "± 33283.36777981021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3943604.3181818184,
            "unit": "ns",
            "range": "± 122351.68363738773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3456992.1923076925,
            "unit": "ns",
            "range": "± 52899.43382870402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12404.931818181818,
            "unit": "ns",
            "range": "± 843.6056821892225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57500.36666666667,
            "unit": "ns",
            "range": "± 3699.0239418624897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51409.7,
            "unit": "ns",
            "range": "± 2656.5519738701555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59594.71276595745,
            "unit": "ns",
            "range": "± 10987.950479221035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3229.053191489362,
            "unit": "ns",
            "range": "± 352.3468894052789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12179.696629213484,
            "unit": "ns",
            "range": "± 869.5931703505536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1066880.857142857,
            "unit": "ns",
            "range": "± 107781.04716297012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2178552.448979592,
            "unit": "ns",
            "range": "± 85615.1103437309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1747567.994736842,
            "unit": "ns",
            "range": "± 112870.43632600542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18627574.994382024,
            "unit": "ns",
            "range": "± 1885664.912906917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3290059.1458333335,
            "unit": "ns",
            "range": "± 295287.7456367274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3690834.712328767,
            "unit": "ns",
            "range": "± 181454.4711618439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4372465.4,
            "unit": "ns",
            "range": "± 147883.74456915783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4425255.189189189,
            "unit": "ns",
            "range": "± 220875.00925219108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27623565.688172042,
            "unit": "ns",
            "range": "± 3866177.6274518617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4223962.642447917,
            "unit": "ns",
            "range": "± 76515.2508564732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1330777.4580078125,
            "unit": "ns",
            "range": "± 16304.704556773462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 873300.7335486779,
            "unit": "ns",
            "range": "± 10646.832214352518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939956.6356534092,
            "unit": "ns",
            "range": "± 45584.715443495195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 714090.7224414062,
            "unit": "ns",
            "range": "± 59857.09598204317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 660826.7279958418,
            "unit": "ns",
            "range": "± 37440.882081006916"
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
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "284aec1c00257128db6a1c2af2e77364e332a784",
          "message": "Bump vite from 4.1.4 to 4.5.2\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.1.4 to 4.5.2.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v4.5.2/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v4.5.2/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-01-31T17:29:25+09:00",
          "tree_id": "c1aede454213ea88281b4e90088d590fffa22fa3",
          "url": "https://github.com/planetarium/libplanet/commit/284aec1c00257128db6a1c2af2e77364e332a784"
        },
        "date": 1706691421396,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9951351.618421054,
            "unit": "ns",
            "range": "± 484945.2074572265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23882279.246268656,
            "unit": "ns",
            "range": "± 1128117.5476296025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63910045.02352941,
            "unit": "ns",
            "range": "± 3445615.788850825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125172220.76086956,
            "unit": "ns",
            "range": "± 7415336.656131111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218125544.48,
            "unit": "ns",
            "range": "± 15692382.940387161"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72108.37113402062,
            "unit": "ns",
            "range": "± 22257.82503521683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239538.0101010101,
            "unit": "ns",
            "range": "± 29330.173777289823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228873.71134020618,
            "unit": "ns",
            "range": "± 24131.220951359002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194058.66666666666,
            "unit": "ns",
            "range": "± 13091.486874013346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4007737.705882353,
            "unit": "ns",
            "range": "± 119241.78684848682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3443774.8571428573,
            "unit": "ns",
            "range": "± 58170.20938703821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13436.010752688173,
            "unit": "ns",
            "range": "± 1788.7208661050622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66962.85858585859,
            "unit": "ns",
            "range": "± 10583.158104724407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67287.42424242424,
            "unit": "ns",
            "range": "± 15153.862539940314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72126.05102040817,
            "unit": "ns",
            "range": "± 16031.995619181429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7371.520833333333,
            "unit": "ns",
            "range": "± 1630.1136478247645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19425.784090909092,
            "unit": "ns",
            "range": "± 3405.642950585165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1826776.3265306123,
            "unit": "ns",
            "range": "± 410666.5181556917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3695412.8157894737,
            "unit": "ns",
            "range": "± 1042713.3827650255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3371157.293814433,
            "unit": "ns",
            "range": "± 875978.7911677944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 32235178.69587629,
            "unit": "ns",
            "range": "± 6617611.699007498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3343278.824742268,
            "unit": "ns",
            "range": "± 405491.80758108443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3379050.44,
            "unit": "ns",
            "range": "± 338216.6508376619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4307954.114583333,
            "unit": "ns",
            "range": "± 299829.4253559538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4211038.211111112,
            "unit": "ns",
            "range": "± 384806.76588565373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22960302.527472526,
            "unit": "ns",
            "range": "± 2623049.804123574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5783222.688078703,
            "unit": "ns",
            "range": "± 242375.31339240228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1747866.5412348532,
            "unit": "ns",
            "range": "± 193834.25776103692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1110105.740580241,
            "unit": "ns",
            "range": "± 121562.47285606485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661467.3131313133,
            "unit": "ns",
            "range": "± 366581.7670675055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814518.6510074013,
            "unit": "ns",
            "range": "± 85138.06643316492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755073.2483520508,
            "unit": "ns",
            "range": "± 14349.517649739113"
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
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "5ceeea8e74120037d956cc66c228eadab701b60d",
          "message": "Bump vite from 4.1.4 to 4.5.2\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.1.4 to 4.5.2.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v4.5.2/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v4.5.2/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-02-07T14:59:05+09:00",
          "tree_id": "4cd4684abfdbd605bab9d5a2d9f443f368e6d798",
          "url": "https://github.com/planetarium/libplanet/commit/5ceeea8e74120037d956cc66c228eadab701b60d"
        },
        "date": 1707286814315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7535332.583333333,
            "unit": "ns",
            "range": "± 47755.687064395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19395268.327586208,
            "unit": "ns",
            "range": "± 845898.4547968238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48186685.525,
            "unit": "ns",
            "range": "± 1591512.7806196988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100412176.25773196,
            "unit": "ns",
            "range": "± 5801808.276443046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202932288.625,
            "unit": "ns",
            "range": "± 10009249.421790702"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41265.36842105263,
            "unit": "ns",
            "range": "± 9153.609326557882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233381.8947368421,
            "unit": "ns",
            "range": "± 25787.416020829907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218755.90425531915,
            "unit": "ns",
            "range": "± 15787.248672477685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206730.0618556701,
            "unit": "ns",
            "range": "± 21451.761721949566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3925176.433333333,
            "unit": "ns",
            "range": "± 70824.1105974781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3510713.347826087,
            "unit": "ns",
            "range": "± 85603.9853769611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14033.90625,
            "unit": "ns",
            "range": "± 2369.493441659164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65289.25,
            "unit": "ns",
            "range": "± 11475.276143221427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61229.204081632655,
            "unit": "ns",
            "range": "± 11625.799782450782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68911.206185567,
            "unit": "ns",
            "range": "± 15504.568725821155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4067.6105263157897,
            "unit": "ns",
            "range": "± 973.4762921496238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22509.484210526316,
            "unit": "ns",
            "range": "± 5987.136652437524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1169547.48,
            "unit": "ns",
            "range": "± 142232.12815956026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2336176.684782609,
            "unit": "ns",
            "range": "± 169810.72796026184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1744212.587912088,
            "unit": "ns",
            "range": "± 119620.66548270627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19963134.563829787,
            "unit": "ns",
            "range": "± 2657082.426435653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2926624,
            "unit": "ns",
            "range": "± 130958.09970805989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3064266.625,
            "unit": "ns",
            "range": "± 159967.8278785666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3668805.6296296297,
            "unit": "ns",
            "range": "± 154703.96800548866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3716710.5217391304,
            "unit": "ns",
            "range": "± 226789.16343851702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22385704.755555555,
            "unit": "ns",
            "range": "± 2645529.2622824083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8394050.89586018,
            "unit": "ns",
            "range": "± 1728481.86517728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2175942.846284907,
            "unit": "ns",
            "range": "± 466394.98838463955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393760.9379725303,
            "unit": "ns",
            "range": "± 62886.8895700717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2885760.760475852,
            "unit": "ns",
            "range": "± 390542.96186530316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797608.194905599,
            "unit": "ns",
            "range": "± 106979.60252202398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717025.7311493845,
            "unit": "ns",
            "range": "± 108464.38293186759"
          }
        ]
      }
    ]
  }
}