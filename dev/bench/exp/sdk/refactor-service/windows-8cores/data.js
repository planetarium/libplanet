window.BENCHMARK_DATA = {
  "lastUpdate": 1725520642267,
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
          "id": "06c474f68ceb895b5bd1956b99c90499c98b268a",
          "message": "test: Add ValidatorServiceTest",
          "timestamp": "2024-09-05T14:55:55+09:00",
          "tree_id": "7149fb4ead882c2a41dbeedad23880f3b27c3672",
          "url": "https://github.com/planetarium/libplanet/commit/06c474f68ceb895b5bd1956b99c90499c98b268a"
        },
        "date": 1725516347184,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 939826.1538461539,
            "unit": "ns",
            "range": "± 43361.03621384597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1743522.857142857,
            "unit": "ns",
            "range": "± 56886.66278980817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1535580.808080808,
            "unit": "ns",
            "range": "± 125578.17361761662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6747385.294117647,
            "unit": "ns",
            "range": "± 204534.7731158378"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30591.666666666668,
            "unit": "ns",
            "range": "± 439.9552318822974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10031785.714285715,
            "unit": "ns",
            "range": "± 82830.2235543641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23979750,
            "unit": "ns",
            "range": "± 114607.69037157886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59797623.07692308,
            "unit": "ns",
            "range": "± 200790.44280811006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119127080,
            "unit": "ns",
            "range": "± 496508.6076077347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232593528.57142857,
            "unit": "ns",
            "range": "± 1015907.2454848285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3301634.795673077,
            "unit": "ns",
            "range": "± 4354.154973000934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062904.7154017857,
            "unit": "ns",
            "range": "± 1294.149458581013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744777.3828125,
            "unit": "ns",
            "range": "± 1208.0315771667445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953277.5948660714,
            "unit": "ns",
            "range": "± 5479.871899313205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627781.5011160715,
            "unit": "ns",
            "range": "± 1122.0657874402762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575250.7882254465,
            "unit": "ns",
            "range": "± 1325.559397495218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2163340,
            "unit": "ns",
            "range": "± 57590.696586630496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2176166.6666666665,
            "unit": "ns",
            "range": "± 35882.32088899703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2712509.523809524,
            "unit": "ns",
            "range": "± 61781.112848199045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2239879.1666666665,
            "unit": "ns",
            "range": "± 57891.15708673113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2879988.2352941176,
            "unit": "ns",
            "range": "± 55451.00182089749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169200,
            "unit": "ns",
            "range": "± 7227.745362857149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164167.3076923077,
            "unit": "ns",
            "range": "± 5674.702070571071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147462.5,
            "unit": "ns",
            "range": "± 2798.7794958993586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2690096.6666666665,
            "unit": "ns",
            "range": "± 35724.97858974999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2515073.3333333335,
            "unit": "ns",
            "range": "± 44624.856408999345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10476.344086021505,
            "unit": "ns",
            "range": "± 1016.964563687529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50073.80952380953,
            "unit": "ns",
            "range": "± 2669.2410837692605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43372,
            "unit": "ns",
            "range": "± 1140.2273314330519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48188.88888888889,
            "unit": "ns",
            "range": "± 7628.029984746374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2221.6494845360826,
            "unit": "ns",
            "range": "± 389.2371824382144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9579.787234042553,
            "unit": "ns",
            "range": "± 790.0700645715241"
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
          "id": "6be41046629c9c9beffd5f41232cdc67c75edcbc",
          "message": "test: Add StoreServiceTest",
          "timestamp": "2024-09-05T16:03:26+09:00",
          "tree_id": "ffba5823c87668b8fbbbe2e531e2475e452e53be",
          "url": "https://github.com/planetarium/libplanet/commit/6be41046629c9c9beffd5f41232cdc67c75edcbc"
        },
        "date": 1725520370365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1058139.7959183673,
            "unit": "ns",
            "range": "± 115517.4389831954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1825500,
            "unit": "ns",
            "range": "± 80390.92417465527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1586663.5416666667,
            "unit": "ns",
            "range": "± 107366.15081583567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6875029.0322580645,
            "unit": "ns",
            "range": "± 191915.4713123261"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30585.714285714286,
            "unit": "ns",
            "range": "± 363.43900738351147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10139385.714285715,
            "unit": "ns",
            "range": "± 69065.75303113868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24536933.333333332,
            "unit": "ns",
            "range": "± 230062.54946571958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62924057.692307696,
            "unit": "ns",
            "range": "± 552019.5293368078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124577633.33333333,
            "unit": "ns",
            "range": "± 1284018.8114257664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251724640,
            "unit": "ns",
            "range": "± 2408069.8043394485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3353070.3645833335,
            "unit": "ns",
            "range": "± 6863.597612539694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1085685.5050223214,
            "unit": "ns",
            "range": "± 1776.141423848925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732768.4700520834,
            "unit": "ns",
            "range": "± 1233.9386776193564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975314.6354166667,
            "unit": "ns",
            "range": "± 8891.538244823227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628976.5555245535,
            "unit": "ns",
            "range": "± 909.349528367551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566918.84765625,
            "unit": "ns",
            "range": "± 1762.8113379868175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121881.5789473685,
            "unit": "ns",
            "range": "± 72897.13543203396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2299326.470588235,
            "unit": "ns",
            "range": "± 43299.17045123042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2654145,
            "unit": "ns",
            "range": "± 53954.05916147552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2342062.5,
            "unit": "ns",
            "range": "± 60683.71182149937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2927907.1428571427,
            "unit": "ns",
            "range": "± 31670.50227397277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179151.17647058822,
            "unit": "ns",
            "range": "± 9680.8782329572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170949.27536231885,
            "unit": "ns",
            "range": "± 6834.807609246472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142514.8148148148,
            "unit": "ns",
            "range": "± 3975.7634684039185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2757857.1428571427,
            "unit": "ns",
            "range": "± 36875.39755792396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2544373.3333333335,
            "unit": "ns",
            "range": "± 45115.74743553149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11436.559139784946,
            "unit": "ns",
            "range": "± 1491.9920260187723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55496.84210526316,
            "unit": "ns",
            "range": "± 5486.3166854162155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44536.53846153846,
            "unit": "ns",
            "range": "± 1766.7993490117026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59868.42105263158,
            "unit": "ns",
            "range": "± 13091.748767001127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3010.3092783505153,
            "unit": "ns",
            "range": "± 565.5904982262774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10738.297872340425,
            "unit": "ns",
            "range": "± 1622.8944263014018"
          }
        ]
      }
    ]
  }
}