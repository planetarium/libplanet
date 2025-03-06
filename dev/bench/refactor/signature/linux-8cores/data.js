window.BENCHMARK_DATA = {
  "lastUpdate": 1741252117477,
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
          "id": "bca1dbb3b7a668312e83c14e723eca926c034760",
          "message": "wip",
          "timestamp": "2025-03-06T17:58:03+09:00",
          "tree_id": "86937a2eddc8cf0a325db9685622660ba201d61d",
          "url": "https://github.com/planetarium/libplanet/commit/bca1dbb3b7a668312e83c14e723eca926c034760"
        },
        "date": 1741251892556,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2277200.6666666665,
            "unit": "ns",
            "range": "± 17475.93275873648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5224031.705882353,
            "unit": "ns",
            "range": "± 167401.43134964787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4316636.645833333,
            "unit": "ns",
            "range": "± 289965.7644547561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11914448.221052632,
            "unit": "ns",
            "range": "± 3644643.4645115673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23695.73157894737,
            "unit": "ns",
            "range": "± 1549.5000185552756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2194407.1666666665,
            "unit": "ns",
            "range": "± 44972.3423453728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2411169.326923077,
            "unit": "ns",
            "range": "± 98664.93924025485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3295313.649122807,
            "unit": "ns",
            "range": "± 142142.18058445305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2490099.442857143,
            "unit": "ns",
            "range": "± 120457.43285825511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2675105.87,
            "unit": "ns",
            "range": "± 763793.7075752115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2727573.066666667,
            "unit": "ns",
            "range": "± 16474.541140224585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 6748728.666666667,
            "unit": "ns",
            "range": "± 29527.14084096908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 17589701.933333334,
            "unit": "ns",
            "range": "± 166165.4059417331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25421805.464285713,
            "unit": "ns",
            "range": "± 221279.70886916158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50759459.928571425,
            "unit": "ns",
            "range": "± 181502.34660973577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243310.78723404257,
            "unit": "ns",
            "range": "± 24564.92285251356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 454850.86,
            "unit": "ns",
            "range": "± 64168.661748365615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160997.15294117646,
            "unit": "ns",
            "range": "± 8697.420477614369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1019433.0465116279,
            "unit": "ns",
            "range": "± 29172.085966156632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 897791.4506172839,
            "unit": "ns",
            "range": "± 44090.746116078946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31121.34946236559,
            "unit": "ns",
            "range": "± 4134.125368690289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108324.39,
            "unit": "ns",
            "range": "± 16486.448868107014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53559.84375,
            "unit": "ns",
            "range": "± 17773.181843693976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80032.39,
            "unit": "ns",
            "range": "± 36144.18770880308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5459.113402061856,
            "unit": "ns",
            "range": "± 2249.668683367104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23650.967032967033,
            "unit": "ns",
            "range": "± 3076.1866344570526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3928228.977120536,
            "unit": "ns",
            "range": "± 43837.48534010539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923040.8212890625,
            "unit": "ns",
            "range": "± 4653.903727773936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 719461.221875,
            "unit": "ns",
            "range": "± 6689.229341237337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1785504.687779018,
            "unit": "ns",
            "range": "± 17018.61611191182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 472643.1573486328,
            "unit": "ns",
            "range": "± 1179.218663831338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 434899.1194661458,
            "unit": "ns",
            "range": "± 2284.007878468647"
          }
        ]
      },
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
          "id": "25c9380284901d17588d7796e22da7059c325955",
          "message": "wip",
          "timestamp": "2025-03-06T18:01:19+09:00",
          "tree_id": "86937a2eddc8cf0a325db9685622660ba201d61d",
          "url": "https://github.com/planetarium/libplanet/commit/25c9380284901d17588d7796e22da7059c325955"
        },
        "date": 1741252090701,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2472892.6078431373,
            "unit": "ns",
            "range": "± 99778.04688308516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4594411.051020408,
            "unit": "ns",
            "range": "± 709556.9296869496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4308995.377777778,
            "unit": "ns",
            "range": "± 332747.7559833021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15477364.69,
            "unit": "ns",
            "range": "± 7330313.536178925"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 25825.46,
            "unit": "ns",
            "range": "± 3957.664507246564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2301906.7195121953,
            "unit": "ns",
            "range": "± 81878.10972491738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2306453.923076923,
            "unit": "ns",
            "range": "± 20460.092218192054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3516750.1666666665,
            "unit": "ns",
            "range": "± 50186.76151232751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2531541.4897959186,
            "unit": "ns",
            "range": "± 100837.23657358313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2746049.57,
            "unit": "ns",
            "range": "± 805379.5695506694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2698649.466666667,
            "unit": "ns",
            "range": "± 9105.82977207982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 6691539,
            "unit": "ns",
            "range": "± 25035.21449333464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 17367347.033333335,
            "unit": "ns",
            "range": "± 79866.39702552065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25725195.545454547,
            "unit": "ns",
            "range": "± 802115.3230163155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50641445.538461536,
            "unit": "ns",
            "range": "± 132239.07597580942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249391.82,
            "unit": "ns",
            "range": "± 30688.812956423448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 449033.97,
            "unit": "ns",
            "range": "± 52495.929301050666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155906.0483870968,
            "unit": "ns",
            "range": "± 7092.697728170438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1008653.0238095238,
            "unit": "ns",
            "range": "± 29802.95912013591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 881150.82,
            "unit": "ns",
            "range": "± 33084.22754289112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25764.217391304348,
            "unit": "ns",
            "range": "± 2593.4887501735257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104587.206185567,
            "unit": "ns",
            "range": "± 17024.796204077687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54085.692307692305,
            "unit": "ns",
            "range": "± 19269.984915921163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77643.81313131313,
            "unit": "ns",
            "range": "± 35339.573972879494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4345.27,
            "unit": "ns",
            "range": "± 1900.514188026201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26859.031914893618,
            "unit": "ns",
            "range": "± 4184.528859162527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3961424.152901786,
            "unit": "ns",
            "range": "± 24368.186301809234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 910298.5583147322,
            "unit": "ns",
            "range": "± 4969.71318996166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 716430.6669270833,
            "unit": "ns",
            "range": "± 6009.336022149609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1754842.5747767857,
            "unit": "ns",
            "range": "± 14700.815845801548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 476656.28274972097,
            "unit": "ns",
            "range": "± 1791.3906698755477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426234.97858072916,
            "unit": "ns",
            "range": "± 1867.7685634925003"
          }
        ]
      }
    ]
  }
}