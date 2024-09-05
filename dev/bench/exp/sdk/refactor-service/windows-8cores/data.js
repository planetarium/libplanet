window.BENCHMARK_DATA = {
  "lastUpdate": 1725513957670,
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
          "id": "402015ba6054032ff88319c0a5a93067373a109c",
          "message": "test: Add ValidatorServiceTest",
          "timestamp": "2024-09-05T11:43:37+09:00",
          "tree_id": "3a081c4f64d27f103e92beec9ed59f40563364a4",
          "url": "https://github.com/planetarium/libplanet/commit/402015ba6054032ff88319c0a5a93067373a109c"
        },
        "date": 1725504899149,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 945692.2077922078,
            "unit": "ns",
            "range": "± 45971.45214333326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1738800,
            "unit": "ns",
            "range": "± 65128.73827289769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1557017.7083333333,
            "unit": "ns",
            "range": "± 133161.6263633995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6727115.7894736845,
            "unit": "ns",
            "range": "± 106788.379846196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30571.81818181818,
            "unit": "ns",
            "range": "± 1196.0878992056823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9937503.333333334,
            "unit": "ns",
            "range": "± 112532.55952114904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24443666.666666668,
            "unit": "ns",
            "range": "± 127175.41129516838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59848171.428571425,
            "unit": "ns",
            "range": "± 365515.3588871712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122720106.66666667,
            "unit": "ns",
            "range": "± 768618.0934142844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238470215.3846154,
            "unit": "ns",
            "range": "± 1170429.9686056643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3372548.2291666665,
            "unit": "ns",
            "range": "± 22037.338103105216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062785.0167410714,
            "unit": "ns",
            "range": "± 1812.8015815569388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724217.2721354166,
            "unit": "ns",
            "range": "± 1806.0591086718882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943056.3058035714,
            "unit": "ns",
            "range": "± 3320.157476079611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622036.71875,
            "unit": "ns",
            "range": "± 1532.7682582058328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563040.1646205357,
            "unit": "ns",
            "range": "± 1707.3644921718137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2153573.3333333335,
            "unit": "ns",
            "range": "± 37932.58054320411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2257121.4285714286,
            "unit": "ns",
            "range": "± 28139.14406252309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2752585.714285714,
            "unit": "ns",
            "range": "± 76237.35214731596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2356646.6666666665,
            "unit": "ns",
            "range": "± 43389.38096991453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2938373.3333333335,
            "unit": "ns",
            "range": "± 39649.38238875259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180864.8148148148,
            "unit": "ns",
            "range": "± 6843.345684220448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172654.54545454544,
            "unit": "ns",
            "range": "± 7358.839939319598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147756,
            "unit": "ns",
            "range": "± 3704.623237703577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2765633.3333333335,
            "unit": "ns",
            "range": "± 41784.04799282457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2453930.434782609,
            "unit": "ns",
            "range": "± 62004.42385084389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9954.395604395604,
            "unit": "ns",
            "range": "± 916.2619819331256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57322.68041237113,
            "unit": "ns",
            "range": "± 4506.442267156709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43762.96296296296,
            "unit": "ns",
            "range": "± 1072.433662337191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52709.574468085106,
            "unit": "ns",
            "range": "± 8604.200888824895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2435.483870967742,
            "unit": "ns",
            "range": "± 394.15434002274503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10540.20618556701,
            "unit": "ns",
            "range": "± 1470.4491798011952"
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
          "id": "c93be138b6aeb94e6dd62b77e8b13c0df520d77f",
          "message": "test: Add ValidatorServiceTest",
          "timestamp": "2024-09-05T14:09:29+09:00",
          "tree_id": "7149fb4ead882c2a41dbeedad23880f3b27c3672",
          "url": "https://github.com/planetarium/libplanet/commit/c93be138b6aeb94e6dd62b77e8b13c0df520d77f"
        },
        "date": 1725513636253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966962.1212121212,
            "unit": "ns",
            "range": "± 82144.62889111269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1732240.3846153845,
            "unit": "ns",
            "range": "± 71546.41509939307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1490511.6883116884,
            "unit": "ns",
            "range": "± 71893.19558979207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6831700,
            "unit": "ns",
            "range": "± 148645.20398138202"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29807.69230769231,
            "unit": "ns",
            "range": "± 266.0248687044705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9880493.333333334,
            "unit": "ns",
            "range": "± 72409.92894295513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24499585.714285713,
            "unit": "ns",
            "range": "± 203441.8868342538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60143123.333333336,
            "unit": "ns",
            "range": "± 451628.86227310053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123558750,
            "unit": "ns",
            "range": "± 420646.7305507995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239169573.33333334,
            "unit": "ns",
            "range": "± 893713.4787476567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3315605.2864583335,
            "unit": "ns",
            "range": "± 4472.094628228215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1104677.0833333333,
            "unit": "ns",
            "range": "± 1854.8496039754755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738862.5065104166,
            "unit": "ns",
            "range": "± 1520.0299764428376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1873340.5598958333,
            "unit": "ns",
            "range": "± 1922.143113016675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616791.5625,
            "unit": "ns",
            "range": "± 1736.8069393844169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576147.5285456731,
            "unit": "ns",
            "range": "± 1339.1394816034397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145565.217391304,
            "unit": "ns",
            "range": "± 50570.19971103762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2200351.282051282,
            "unit": "ns",
            "range": "± 76528.84516997452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2614223.2558139535,
            "unit": "ns",
            "range": "± 95087.50064873656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2243150,
            "unit": "ns",
            "range": "± 42062.54073796937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2812385.714285714,
            "unit": "ns",
            "range": "± 39576.91357233517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166028,
            "unit": "ns",
            "range": "± 6024.50912557045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160425.4716981132,
            "unit": "ns",
            "range": "± 6627.0978002434285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140269.23076923078,
            "unit": "ns",
            "range": "± 2275.00352211618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2683460,
            "unit": "ns",
            "range": "± 31700.806659407626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2454940,
            "unit": "ns",
            "range": "± 38468.0721043903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9287.209302325582,
            "unit": "ns",
            "range": "± 516.5032911751887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49223.170731707316,
            "unit": "ns",
            "range": "± 2621.2003084294356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43631.03448275862,
            "unit": "ns",
            "range": "± 1203.0032205977145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46850.51546391752,
            "unit": "ns",
            "range": "± 8856.34334473673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2249.4736842105262,
            "unit": "ns",
            "range": "± 252.59238217759966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8815.66265060241,
            "unit": "ns",
            "range": "± 424.6898230275038"
          }
        ]
      }
    ]
  }
}