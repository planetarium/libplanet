window.BENCHMARK_DATA = {
  "lastUpdate": 1741387502780,
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
          "id": "fef0a2a89cb7559296e18250fa5fe5597485c06e",
          "message": "wip",
          "timestamp": "2025-03-06T18:04:40+09:00",
          "tree_id": "5503406f1e3ef2af09b66bbbe3cf29ad74bfd98e",
          "url": "https://github.com/planetarium/libplanet/commit/fef0a2a89cb7559296e18250fa5fe5597485c06e"
        },
        "date": 1741252294000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2315597.75,
            "unit": "ns",
            "range": "± 31021.82103887813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4940401.621212121,
            "unit": "ns",
            "range": "± 554041.0394331348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4250480.304123712,
            "unit": "ns",
            "range": "± 275427.09529556235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16172328.19,
            "unit": "ns",
            "range": "± 7834530.929235056"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23479,
            "unit": "ns",
            "range": "± 1264.0721498395571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2137198.8076923075,
            "unit": "ns",
            "range": "± 22218.717808732858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2282442.076923077,
            "unit": "ns",
            "range": "± 14376.704092973572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3375385,
            "unit": "ns",
            "range": "± 42193.648320753025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2543489.2407407407,
            "unit": "ns",
            "range": "± 106241.68827830236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4005606.3076923075,
            "unit": "ns",
            "range": "± 51542.31916976026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2700495.8666666667,
            "unit": "ns",
            "range": "± 9075.68816648292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 6693960.166666667,
            "unit": "ns",
            "range": "± 23366.936016257645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 17735869.933333334,
            "unit": "ns",
            "range": "± 132165.93968593673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25599220.71875,
            "unit": "ns",
            "range": "± 772430.544447065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50520841.538461536,
            "unit": "ns",
            "range": "± 51477.19983095329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236707.73469387754,
            "unit": "ns",
            "range": "± 26499.943620850747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 429814.84,
            "unit": "ns",
            "range": "± 50554.047615372736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158882.46835443037,
            "unit": "ns",
            "range": "± 8274.838927606499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 992636.5263157894,
            "unit": "ns",
            "range": "± 32103.360339805506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 882376.6777777778,
            "unit": "ns",
            "range": "± 33530.09740129611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23839.963917525773,
            "unit": "ns",
            "range": "± 1987.207908630094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99258.26595744681,
            "unit": "ns",
            "range": "± 11853.92960063848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41312.03846153846,
            "unit": "ns",
            "range": "± 4650.118022360091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76183.60606060606,
            "unit": "ns",
            "range": "± 33625.737407229644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5378.232323232323,
            "unit": "ns",
            "range": "± 2167.874990881025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29594.298969072166,
            "unit": "ns",
            "range": "± 3161.807652030152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3846506.4283854165,
            "unit": "ns",
            "range": "± 13382.777551352017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922287.71015625,
            "unit": "ns",
            "range": "± 4581.94262780013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 719371.2934244792,
            "unit": "ns",
            "range": "± 5776.38471735686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1722524.5227864583,
            "unit": "ns",
            "range": "± 5507.093319205333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 472010.3680826823,
            "unit": "ns",
            "range": "± 1019.4404103220224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417403.6238141741,
            "unit": "ns",
            "range": "± 1406.6735528220256"
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
          "id": "8c41e5e57c2e16d9b7b6ed3a23419181e938e344",
          "message": "wip",
          "timestamp": "2025-03-06T18:18:49+09:00",
          "tree_id": "97c913525a8b1bb489e6207902e8feb0b63efdec",
          "url": "https://github.com/planetarium/libplanet/commit/8c41e5e57c2e16d9b7b6ed3a23419181e938e344"
        },
        "date": 1741253129611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2531863,
            "unit": "ns",
            "range": "± 43749.12443255733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4783567.191919192,
            "unit": "ns",
            "range": "± 768344.4937098848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4059820.1914893617,
            "unit": "ns",
            "range": "± 257860.17639637034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15212910.79,
            "unit": "ns",
            "range": "± 7069206.629855118"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22923.346153846152,
            "unit": "ns",
            "range": "± 954.41819634494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2303100.9782608696,
            "unit": "ns",
            "range": "± 88236.43221040693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2443066.5,
            "unit": "ns",
            "range": "± 11554.954637153132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2958056.69,
            "unit": "ns",
            "range": "± 479347.96096411895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2527310.8191489363,
            "unit": "ns",
            "range": "± 98201.72839001988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2673104.71,
            "unit": "ns",
            "range": "± 798147.1516578641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2703409.076923077,
            "unit": "ns",
            "range": "± 11755.253332457638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 6704822.153846154,
            "unit": "ns",
            "range": "± 93040.23129256698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 17718821.366666667,
            "unit": "ns",
            "range": "± 191495.3722547387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25496951.318181816,
            "unit": "ns",
            "range": "± 812883.9443425753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50492085.57692308,
            "unit": "ns",
            "range": "± 38724.909140116215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240353.9797979798,
            "unit": "ns",
            "range": "± 29615.670646060244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 430149.51020408166,
            "unit": "ns",
            "range": "± 47671.21091852019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154700.66666666666,
            "unit": "ns",
            "range": "± 4566.036424125062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 964736.7884615385,
            "unit": "ns",
            "range": "± 32902.69840017985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 861653.525,
            "unit": "ns",
            "range": "± 28066.793988066926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28233.4,
            "unit": "ns",
            "range": "± 3279.7206984093127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96956.95959595959,
            "unit": "ns",
            "range": "± 12807.821227288723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39121.27142857143,
            "unit": "ns",
            "range": "± 1494.9921905804326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56415.0918367347,
            "unit": "ns",
            "range": "± 26584.500376919783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3253.5204081632655,
            "unit": "ns",
            "range": "± 1241.4706857178462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22866.628865979383,
            "unit": "ns",
            "range": "± 2117.2407521326923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3773220.50078125,
            "unit": "ns",
            "range": "± 10971.151673364948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 901366.0741536458,
            "unit": "ns",
            "range": "± 5624.048780351311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 708351.1027994792,
            "unit": "ns",
            "range": "± 5604.334896196217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1698792.687779018,
            "unit": "ns",
            "range": "± 2613.2124941933707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465029.7312011719,
            "unit": "ns",
            "range": "± 1953.279159147395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421270.43766276044,
            "unit": "ns",
            "range": "± 1681.8252561555898"
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
          "id": "68837f5a29787c038172481403d3ffc141cb9ca8",
          "message": "wip",
          "timestamp": "2025-03-07T20:23:10+09:00",
          "tree_id": "84226a8ea52953f6b1317fedfe5c5b78f955e416",
          "url": "https://github.com/planetarium/libplanet/commit/68837f5a29787c038172481403d3ffc141cb9ca8"
        },
        "date": 1741387476828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2407214.419354839,
            "unit": "ns",
            "range": "± 73095.6116971802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5133214.157894737,
            "unit": "ns",
            "range": "± 109890.51368837943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4232326.229166667,
            "unit": "ns",
            "range": "± 327275.1264436143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13620423.964646464,
            "unit": "ns",
            "range": "± 5469179.879816111"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22171.55172413793,
            "unit": "ns",
            "range": "± 881.3519951659156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159035.8333333335,
            "unit": "ns",
            "range": "± 20982.626479297032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2464057.772727273,
            "unit": "ns",
            "range": "± 91098.64529405616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2971293.68,
            "unit": "ns",
            "range": "± 239085.10579717858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2520229.5727272728,
            "unit": "ns",
            "range": "± 107141.94504053346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3696814.35483871,
            "unit": "ns",
            "range": "± 110503.47363365203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2689117.214285714,
            "unit": "ns",
            "range": "± 10574.175531989182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 6665306.346153846,
            "unit": "ns",
            "range": "± 35281.60519979723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 17476426.92857143,
            "unit": "ns",
            "range": "± 119622.0767981166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25473878.772727273,
            "unit": "ns",
            "range": "± 447015.35597264516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50723376.15384615,
            "unit": "ns",
            "range": "± 360865.7544269628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256947.47474747474,
            "unit": "ns",
            "range": "± 35009.75351018261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 523492.1724137931,
            "unit": "ns",
            "range": "± 14374.98066599685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160907.23636363636,
            "unit": "ns",
            "range": "± 6167.205949283308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1016368.6428571428,
            "unit": "ns",
            "range": "± 29022.74194708322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 883988.3541666666,
            "unit": "ns",
            "range": "± 34749.83383887388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23803.147368421054,
            "unit": "ns",
            "range": "± 2038.1355631547651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108575.97959183673,
            "unit": "ns",
            "range": "± 16202.422031765976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55937.64,
            "unit": "ns",
            "range": "± 20172.29983058326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65520.5101010101,
            "unit": "ns",
            "range": "± 32237.412644157605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4065.75,
            "unit": "ns",
            "range": "± 1828.4133618296414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23527.68556701031,
            "unit": "ns",
            "range": "± 1894.2637110161963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3897361.3190104165,
            "unit": "ns",
            "range": "± 25766.379204255092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 902500.5251813616,
            "unit": "ns",
            "range": "± 4910.542126065407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 713524.1303385417,
            "unit": "ns",
            "range": "± 3389.7917858005094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1734942.6418805805,
            "unit": "ns",
            "range": "± 5506.374878395479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465410.1151936849,
            "unit": "ns",
            "range": "± 653.8071855925145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428557.8937825521,
            "unit": "ns",
            "range": "± 3259.1132014338264"
          }
        ]
      }
    ]
  }
}