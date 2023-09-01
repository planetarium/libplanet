window.BENCHMARK_DATA = {
  "lastUpdate": 1693548678297,
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
          "id": "81ec0a4ca52f5a64a9bf48243f251743cb69a90a",
          "message": "test: Fix test from removing NullChainStates",
          "timestamp": "2023-08-17T18:16:20+09:00",
          "tree_id": "4341a7076278eab80dcfb26105a1ad35a391e9ba",
          "url": "https://github.com/planetarium/libplanet/commit/81ec0a4ca52f5a64a9bf48243f251743cb69a90a"
        },
        "date": 1693290065948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8725479.693548387,
            "unit": "ns",
            "range": "± 263190.03368243505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21928289.12195122,
            "unit": "ns",
            "range": "± 789445.7804239691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64637549.89361702,
            "unit": "ns",
            "range": "± 14083049.11185489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140773511.76373628,
            "unit": "ns",
            "range": "± 40573848.34855475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 304226323.030303,
            "unit": "ns",
            "range": "± 65662678.75957992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77400.34444444445,
            "unit": "ns",
            "range": "± 8232.249948653382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354605.6404494382,
            "unit": "ns",
            "range": "± 40838.07854704613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348875.6011235955,
            "unit": "ns",
            "range": "± 36661.413833225546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307770.70454545453,
            "unit": "ns",
            "range": "± 28015.108173228247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4501418.565217392,
            "unit": "ns",
            "range": "± 429492.7607896819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4171801.9845360825,
            "unit": "ns",
            "range": "± 426904.43239144364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25364.728260869564,
            "unit": "ns",
            "range": "± 5812.466131492036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105290.65625,
            "unit": "ns",
            "range": "± 15647.430245270056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104182.34782608696,
            "unit": "ns",
            "range": "± 15365.017639219022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118809.55434782608,
            "unit": "ns",
            "range": "± 20287.89847562959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8275.369565217392,
            "unit": "ns",
            "range": "± 899.0954088573583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23745.803370786518,
            "unit": "ns",
            "range": "± 4040.105228727719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1693281.4032258065,
            "unit": "ns",
            "range": "± 268378.88978538563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3334640.1839080458,
            "unit": "ns",
            "range": "± 448294.8441478783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2332194.554347826,
            "unit": "ns",
            "range": "± 318062.6050083369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7324432.720430108,
            "unit": "ns",
            "range": "± 2312486.2807124434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4213842.691489362,
            "unit": "ns",
            "range": "± 1037685.4974914228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4607497.758064516,
            "unit": "ns",
            "range": "± 1271441.9556272891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4716344.131868131,
            "unit": "ns",
            "range": "± 395745.8690371107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4233933.653846154,
            "unit": "ns",
            "range": "± 463330.64308849495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9684608.072916666,
            "unit": "ns",
            "range": "± 2481143.3879280053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6979888.136429398,
            "unit": "ns",
            "range": "± 188993.87201441827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2133067.002083333,
            "unit": "ns",
            "range": "± 79484.56458691544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1213143.486015625,
            "unit": "ns",
            "range": "± 28647.62737337589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3541341.371590909,
            "unit": "ns",
            "range": "± 143246.28070674744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876212.430169753,
            "unit": "ns",
            "range": "± 46156.076386266024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775226.9482421875,
            "unit": "ns",
            "range": "± 14366.352421660144"
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
          "id": "d567343c8a1725c2c1ad698d3904e3fafc0fb907",
          "message": "feat: Add IBlockChainState.GetStateRoot()",
          "timestamp": "2023-08-31T21:14:49+09:00",
          "tree_id": "2d064f4b20f84eb98e3ddb0da916be3aff253d67",
          "url": "https://github.com/planetarium/libplanet/commit/d567343c8a1725c2c1ad698d3904e3fafc0fb907"
        },
        "date": 1693485007707,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8537865.82142857,
            "unit": "ns",
            "range": "± 237459.9723569885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21043581.913793102,
            "unit": "ns",
            "range": "± 834656.9893660652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50734456,
            "unit": "ns",
            "range": "± 1199631.574504082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104212347.42857143,
            "unit": "ns",
            "range": "± 1779279.7208554628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210662052.73333332,
            "unit": "ns",
            "range": "± 2345465.800682837"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65098.510416666664,
            "unit": "ns",
            "range": "± 9158.216875392964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301755.9032258064,
            "unit": "ns",
            "range": "± 18081.995243927107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291112.13333333336,
            "unit": "ns",
            "range": "± 15891.18307317515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276482.51020408166,
            "unit": "ns",
            "range": "± 19653.189020884536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3972604.535714286,
            "unit": "ns",
            "range": "± 111140.67250360794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3813717.5714285714,
            "unit": "ns",
            "range": "± 64590.26333710093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20327.422680412372,
            "unit": "ns",
            "range": "± 4305.666924325457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91683.17171717172,
            "unit": "ns",
            "range": "± 12795.781682178209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90290.61616161616,
            "unit": "ns",
            "range": "± 14449.380305691717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89743.91666666667,
            "unit": "ns",
            "range": "± 11144.988078826866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5208.053191489362,
            "unit": "ns",
            "range": "± 1074.139591827636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17251.98947368421,
            "unit": "ns",
            "range": "± 1849.8390470222048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1631190.625,
            "unit": "ns",
            "range": "± 173825.93815957932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2814290.6981132077,
            "unit": "ns",
            "range": "± 117297.1626567761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2135018.707070707,
            "unit": "ns",
            "range": "± 202478.2021288506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5877485.125,
            "unit": "ns",
            "range": "± 290501.8622950386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3280649.466292135,
            "unit": "ns",
            "range": "± 180210.1636785663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3493544.40625,
            "unit": "ns",
            "range": "± 158558.17748467252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4390653.483870967,
            "unit": "ns",
            "range": "± 126292.89572335967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3910970.409090909,
            "unit": "ns",
            "range": "± 211311.7163830493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6812920.838709678,
            "unit": "ns",
            "range": "± 293486.533801121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5728339.16015625,
            "unit": "ns",
            "range": "± 155758.11321817103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1704788.2857666016,
            "unit": "ns",
            "range": "± 26508.64852427465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1005391.8569711539,
            "unit": "ns",
            "range": "± 8255.240675741454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671510.912109375,
            "unit": "ns",
            "range": "± 33722.577879806275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800102.8275390625,
            "unit": "ns",
            "range": "± 6969.362106936674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728247.8822916667,
            "unit": "ns",
            "range": "± 5752.152101367605"
          }
        ]
      },
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
          "id": "313bcd946ab2f3abff8d49358876b80ce560308c",
          "message": "test: add regression test",
          "timestamp": "2023-09-01T14:53:37+09:00",
          "tree_id": "d904cd4bae8c5d67d0e5443d1727273ff148d520",
          "url": "https://github.com/planetarium/libplanet/commit/313bcd946ab2f3abff8d49358876b80ce560308c"
        },
        "date": 1693548579408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8560091.8,
            "unit": "ns",
            "range": "± 74335.37529448162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21268615.92857143,
            "unit": "ns",
            "range": "± 170081.27965937764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53220839.928571425,
            "unit": "ns",
            "range": "± 519463.9321431742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108164417.26666667,
            "unit": "ns",
            "range": "± 574053.5355048674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214479753.26666668,
            "unit": "ns",
            "range": "± 3522059.2443946456"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67775.60416666667,
            "unit": "ns",
            "range": "± 13551.000605105199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326639.9,
            "unit": "ns",
            "range": "± 18538.593720104585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318308.06329113926,
            "unit": "ns",
            "range": "± 15561.660170597921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311928.46875,
            "unit": "ns",
            "range": "± 9633.82902298734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4099324.3571428573,
            "unit": "ns",
            "range": "± 57404.32438395231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3850723.6,
            "unit": "ns",
            "range": "± 49822.328145406565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24117.582417582416,
            "unit": "ns",
            "range": "± 2547.852298466011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112700.48947368421,
            "unit": "ns",
            "range": "± 13876.593633989098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113006.00505050505,
            "unit": "ns",
            "range": "± 9150.618298919766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114136.51041666667,
            "unit": "ns",
            "range": "± 14238.86377747798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8140.241935483871,
            "unit": "ns",
            "range": "± 773.6711314475574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24489.18556701031,
            "unit": "ns",
            "range": "± 4217.885596208863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1510903.0555555555,
            "unit": "ns",
            "range": "± 175290.98394040304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2762992.868131868,
            "unit": "ns",
            "range": "± 154407.56288401943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2003139.3695652173,
            "unit": "ns",
            "range": "± 171375.7979408788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5709812.450819672,
            "unit": "ns",
            "range": "± 254633.42973376624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3377366.8928571427,
            "unit": "ns",
            "range": "± 145114.4174839199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3546824.129032258,
            "unit": "ns",
            "range": "± 104976.51072715964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4493750.535714285,
            "unit": "ns",
            "range": "± 119459.2165575944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4038241.388888889,
            "unit": "ns",
            "range": "± 153567.03360455006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6902409.186046512,
            "unit": "ns",
            "range": "± 213883.78126797828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5766615.0109375,
            "unit": "ns",
            "range": "± 52643.99418353211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1781188.2545823317,
            "unit": "ns",
            "range": "± 27125.949288928867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1033635.2322998047,
            "unit": "ns",
            "range": "± 19671.305130863373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2465974.766867898,
            "unit": "ns",
            "range": "± 115000.82662610116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798930.199079241,
            "unit": "ns",
            "range": "± 10959.220665340057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719084.2843299279,
            "unit": "ns",
            "range": "± 7253.927455691979"
          }
        ]
      }
    ]
  }
}