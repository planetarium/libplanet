window.BENCHMARK_DATA = {
  "lastUpdate": 1686143939590,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "626bf947bc1cc3f3718dbb5196f622beda682598",
          "message": "Merge pull request #3202 from greymistcube/release/1.4.0\n\n🚀 Release 1.4.0",
          "timestamp": "2023-06-07T17:56:29+09:00",
          "tree_id": "1f32bb1e8779c3a4e467e6db02a8d55373fb9578",
          "url": "https://github.com/planetarium/libplanet/commit/626bf947bc1cc3f3718dbb5196f622beda682598"
        },
        "date": 1686129884884,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13789644.294736842,
            "unit": "ns",
            "range": "± 3242755.7045754814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29619853.51098901,
            "unit": "ns",
            "range": "± 4875793.748954982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 81583671.4673913,
            "unit": "ns",
            "range": "± 18867637.766772345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 154927354.52631578,
            "unit": "ns",
            "range": "± 39558557.65322175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283431286.0543478,
            "unit": "ns",
            "range": "± 37796816.13659216"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79728.4623655914,
            "unit": "ns",
            "range": "± 12923.95305873281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 380217.68604651163,
            "unit": "ns",
            "range": "± 23311.6293372878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 391803.0786516854,
            "unit": "ns",
            "range": "± 52118.34463511967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 347199.2471910112,
            "unit": "ns",
            "range": "± 20364.191849621784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4886278.090909091,
            "unit": "ns",
            "range": "± 144699.2059751374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4473198.029411765,
            "unit": "ns",
            "range": "± 87072.66478717477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20428.945652173912,
            "unit": "ns",
            "range": "± 1350.4069827247922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100720.10752688172,
            "unit": "ns",
            "range": "± 8431.944783745823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100075.25806451614,
            "unit": "ns",
            "range": "± 12424.578361232949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126737.22916666667,
            "unit": "ns",
            "range": "± 23139.932903273133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6291.882978723404,
            "unit": "ns",
            "range": "± 895.533262848707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19441.247311827956,
            "unit": "ns",
            "range": "± 1454.1036059606258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2098614.797752809,
            "unit": "ns",
            "range": "± 308055.6792316779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3882539.908045977,
            "unit": "ns",
            "range": "± 456352.813452044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3128045.2717391304,
            "unit": "ns",
            "range": "± 264381.52653951617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15539823.670103094,
            "unit": "ns",
            "range": "± 5677732.669286381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4893913.605263158,
            "unit": "ns",
            "range": "± 1476116.8306627276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4653296.655172414,
            "unit": "ns",
            "range": "± 778962.9494093909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5550374.760869565,
            "unit": "ns",
            "range": "± 539721.2375222783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5343276.139534884,
            "unit": "ns",
            "range": "± 398868.3815379871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10950431.931034483,
            "unit": "ns",
            "range": "± 2123396.055736899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7653093.108455882,
            "unit": "ns",
            "range": "± 149584.48445202524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2281901.001838235,
            "unit": "ns",
            "range": "± 45588.00730118374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1548274.3362458881,
            "unit": "ns",
            "range": "± 24441.5631582365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3026676.646809896,
            "unit": "ns",
            "range": "± 26944.118077010375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1073877.7959449405,
            "unit": "ns",
            "range": "± 25401.091862840563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917026.9868164062,
            "unit": "ns",
            "range": "± 8405.830726036764"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29499207c2eab284a56039e818bb3c5065ce26dc",
          "message": "Merge pull request #3203 from greymistcube/prepare/1.4.1\n\n🔧 Prepare 1.4.1",
          "timestamp": "2023-06-07T21:53:39+09:00",
          "tree_id": "00a0c7681d77723219c692049b0c449a1d5aa778",
          "url": "https://github.com/planetarium/libplanet/commit/29499207c2eab284a56039e818bb3c5065ce26dc"
        },
        "date": 1686143879298,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8254701.533333333,
            "unit": "ns",
            "range": "± 76854.84359572797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25512152.30927835,
            "unit": "ns",
            "range": "± 4153211.875326691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58832568.16304348,
            "unit": "ns",
            "range": "± 9395673.107832089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 150819429.13978493,
            "unit": "ns",
            "range": "± 46688360.81283856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 334061789.6818182,
            "unit": "ns",
            "range": "± 126535660.01797318"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80134.73287671233,
            "unit": "ns",
            "range": "± 3974.4752362228337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 397140.8095238095,
            "unit": "ns",
            "range": "± 55771.96905244944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 386781.202247191,
            "unit": "ns",
            "range": "± 77878.8049095545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 369178.5588235294,
            "unit": "ns",
            "range": "± 50534.697645317334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5012162.061797753,
            "unit": "ns",
            "range": "± 933123.422442178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4011248.9864864866,
            "unit": "ns",
            "range": "± 200901.05163252534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24383.221649484534,
            "unit": "ns",
            "range": "± 5504.322303014598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132669.56818181818,
            "unit": "ns",
            "range": "± 33128.26877449677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118852.61764705883,
            "unit": "ns",
            "range": "± 13420.04399113839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124685.71348314607,
            "unit": "ns",
            "range": "± 17975.347931562417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9449.952631578948,
            "unit": "ns",
            "range": "± 1555.9854356400167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26393.989361702126,
            "unit": "ns",
            "range": "± 4734.530987534945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1672274.2333333334,
            "unit": "ns",
            "range": "± 235220.26514613244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3150718.382022472,
            "unit": "ns",
            "range": "± 204019.7019759982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2769725.6627906975,
            "unit": "ns",
            "range": "± 337752.3237646142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7124269.207317073,
            "unit": "ns",
            "range": "± 885142.6380766142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3585707.2555555557,
            "unit": "ns",
            "range": "± 252733.37338115706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3995848.465116279,
            "unit": "ns",
            "range": "± 665851.5827880326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4755201.865168539,
            "unit": "ns",
            "range": "± 362371.403906055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5088141.921686747,
            "unit": "ns",
            "range": "± 775541.477451488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11831967.117021276,
            "unit": "ns",
            "range": "± 3621696.4471827634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8900301.751662234,
            "unit": "ns",
            "range": "± 1369114.1063987443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2317939.7294694767,
            "unit": "ns",
            "range": "± 129640.1083005504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405605.7642822266,
            "unit": "ns",
            "range": "± 26998.70802120709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3102257.7837467785,
            "unit": "ns",
            "range": "± 312300.903525241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 922580.1413010817,
            "unit": "ns",
            "range": "± 24665.096662936176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762185.810593378,
            "unit": "ns",
            "range": "± 17524.02626667904"
          }
        ]
      }
    ]
  }
}