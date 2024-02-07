window.BENCHMARK_DATA = {
  "lastUpdate": 1707286219633,
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
        "date": 1705705634594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3670493.923076923,
            "unit": "ns",
            "range": "± 9136.646559105779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203254.5139322917,
            "unit": "ns",
            "range": "± 21049.155027583198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768013.1819411058,
            "unit": "ns",
            "range": "± 2747.0287511206297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962611.9930245536,
            "unit": "ns",
            "range": "± 9349.682404022198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619587.7016225961,
            "unit": "ns",
            "range": "± 1035.4774155895834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569111.8636300223,
            "unit": "ns",
            "range": "± 2109.541749783838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2425018.65625,
            "unit": "ns",
            "range": "± 46091.25432934341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2558123.1666666665,
            "unit": "ns",
            "range": "± 71191.74557651168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3124949,
            "unit": "ns",
            "range": "± 72896.9701895409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3173689.619047619,
            "unit": "ns",
            "range": "± 114683.16786694409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13967691.924731182,
            "unit": "ns",
            "range": "± 1086916.394449846"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41408.448979591834,
            "unit": "ns",
            "range": "± 6670.858956999033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205955.0285714286,
            "unit": "ns",
            "range": "± 6760.716871516416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197146.44827586206,
            "unit": "ns",
            "range": "± 5156.927813189103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172663.1739130435,
            "unit": "ns",
            "range": "± 4293.081248327719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3248012.7333333334,
            "unit": "ns",
            "range": "± 42872.74948107092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2880386.466666667,
            "unit": "ns",
            "range": "± 43259.92807085141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17185.453608247422,
            "unit": "ns",
            "range": "± 2004.3543589552442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60249,
            "unit": "ns",
            "range": "± 4047.56426830064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68028.41,
            "unit": "ns",
            "range": "± 15673.760707277299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63696.7311827957,
            "unit": "ns",
            "range": "± 12162.402303231362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4295.085858585859,
            "unit": "ns",
            "range": "± 1826.5201385510848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14629.848484848484,
            "unit": "ns",
            "range": "± 2720.0610976167586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5654969,
            "unit": "ns",
            "range": "± 57586.38274552662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14902994.133333333,
            "unit": "ns",
            "range": "± 183167.89567063743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36938050.64285714,
            "unit": "ns",
            "range": "± 230455.58726761787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75558423.9,
            "unit": "ns",
            "range": "± 807667.3906608905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149882731.3846154,
            "unit": "ns",
            "range": "± 719389.6775644313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990558,
            "unit": "ns",
            "range": "± 90622.39572897846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1901703,
            "unit": "ns",
            "range": "± 78512.59532892171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1575466.6631578947,
            "unit": "ns",
            "range": "± 92303.33140510734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12763850.709677419,
            "unit": "ns",
            "range": "± 960483.5763651261"
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
        "date": 1706690443177,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2468409.406779661,
            "unit": "ns",
            "range": "± 104621.03385752735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2571979.418604651,
            "unit": "ns",
            "range": "± 95321.60362568907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3180064.972222222,
            "unit": "ns",
            "range": "± 106102.60092368443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3577355.263157895,
            "unit": "ns",
            "range": "± 78947.03971991611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13909647.831460673,
            "unit": "ns",
            "range": "± 1132265.1872957856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42239.552083333336,
            "unit": "ns",
            "range": "± 5024.558649106545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1074125.1020408163,
            "unit": "ns",
            "range": "± 122917.01281731826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1998416.734375,
            "unit": "ns",
            "range": "± 92097.4555459565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714543.2021276595,
            "unit": "ns",
            "range": "± 177787.0178856084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13147741.144444445,
            "unit": "ns",
            "range": "± 991317.790501512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5671651,
            "unit": "ns",
            "range": "± 50423.37154109619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15230655.633333333,
            "unit": "ns",
            "range": "± 164588.56614812356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36850489,
            "unit": "ns",
            "range": "± 353127.3808593394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74841164.92307693,
            "unit": "ns",
            "range": "± 428718.87089627504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150432353.35714287,
            "unit": "ns",
            "range": "± 757864.5951028462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3800446.5223958334,
            "unit": "ns",
            "range": "± 45656.84265587735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220421.4954427083,
            "unit": "ns",
            "range": "± 1973.006275469929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769022.7588704427,
            "unit": "ns",
            "range": "± 2022.9369369534236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935849.8660714286,
            "unit": "ns",
            "range": "± 7255.197832925523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603755.6586588542,
            "unit": "ns",
            "range": "± 1186.6417342922991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566482.8040597098,
            "unit": "ns",
            "range": "± 742.0246264677099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229120.34782608695,
            "unit": "ns",
            "range": "± 14599.177297259199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215799.86111111112,
            "unit": "ns",
            "range": "± 10668.723445298841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176976.08333333334,
            "unit": "ns",
            "range": "± 5788.690853108079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3283187.4285714286,
            "unit": "ns",
            "range": "± 47727.45561835659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2780990.6428571427,
            "unit": "ns",
            "range": "± 24890.99128849986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22606.222222222223,
            "unit": "ns",
            "range": "± 4318.483288065041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85169.28571428571,
            "unit": "ns",
            "range": "± 11364.270699700992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91255.74285714286,
            "unit": "ns",
            "range": "± 2846.632751193604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92563.4587628866,
            "unit": "ns",
            "range": "± 11317.907515045135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7147.6082474226805,
            "unit": "ns",
            "range": "± 861.0049791365543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17051.145833333332,
            "unit": "ns",
            "range": "± 3610.8027128521367"
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
        "date": 1707286192862,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203307.27027027027,
            "unit": "ns",
            "range": "± 10191.142303991242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197580.39024390245,
            "unit": "ns",
            "range": "± 6772.002801527952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168650.24324324325,
            "unit": "ns",
            "range": "± 5695.871669733972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3206237.7666666666,
            "unit": "ns",
            "range": "± 34428.25642750581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2817434.4285714286,
            "unit": "ns",
            "range": "± 41967.08566284973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15691.260416666666,
            "unit": "ns",
            "range": "± 2569.1286142839267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67238.59278350516,
            "unit": "ns",
            "range": "± 8068.4854166308605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52749.055555555555,
            "unit": "ns",
            "range": "± 1734.323523031295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66780.55102040817,
            "unit": "ns",
            "range": "± 12423.407595792085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3323.8854166666665,
            "unit": "ns",
            "range": "± 676.0287734423215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13358.90625,
            "unit": "ns",
            "range": "± 2840.3248408667514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39198.708333333336,
            "unit": "ns",
            "range": "± 4727.3597413949155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2349910.736842105,
            "unit": "ns",
            "range": "± 51942.201067727525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2474124.4565217393,
            "unit": "ns",
            "range": "± 94614.03646434205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3030978.9375,
            "unit": "ns",
            "range": "± 55513.2878441054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3130985.7108433736,
            "unit": "ns",
            "range": "± 166388.43336899512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13663900.851063829,
            "unit": "ns",
            "range": "± 911897.907200661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997825.2577319588,
            "unit": "ns",
            "range": "± 99965.52454161782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1862914.25,
            "unit": "ns",
            "range": "± 65117.33570620314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1615052.1966292134,
            "unit": "ns",
            "range": "± 89120.42667271839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12674793.376344087,
            "unit": "ns",
            "range": "± 905216.7824190431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5600529.2,
            "unit": "ns",
            "range": "± 17287.42464171159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14544434.466666667,
            "unit": "ns",
            "range": "± 112690.27164366856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36451828.86666667,
            "unit": "ns",
            "range": "± 179451.28128263936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73780797.91666667,
            "unit": "ns",
            "range": "± 318234.1268730128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150539851.91666666,
            "unit": "ns",
            "range": "± 388987.19591487804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3633775.8074776786,
            "unit": "ns",
            "range": "± 11257.97662747332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200152.8016826923,
            "unit": "ns",
            "range": "± 2530.947743221089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749324.9852013221,
            "unit": "ns",
            "range": "± 1871.040655015567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964323.2001201923,
            "unit": "ns",
            "range": "± 6511.194745833599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609635.4325420673,
            "unit": "ns",
            "range": "± 1418.385646952541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579098.1701660156,
            "unit": "ns",
            "range": "± 685.420348919686"
          }
        ]
      }
    ]
  }
}