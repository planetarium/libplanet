window.BENCHMARK_DATA = {
  "lastUpdate": 1679986102242,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aea547870cfd181eee84fb1f822cb8493dbb2587",
          "message": "Merge pull request #2919 from colibrishin/release/0.52\n\n🚀 Release 0.52.0",
          "timestamp": "2023-03-13T19:19:01+09:00",
          "tree_id": "e0cd58434e1e45efbb58c9cb5a1763293e84f4a6",
          "url": "https://github.com/planetarium/libplanet/commit/aea547870cfd181eee84fb1f822cb8493dbb2587"
        },
        "date": 1678704802380,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 11289537.077319589,
            "unit": "ns",
            "range": "± 1388090.944402035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 30815028.99484536,
            "unit": "ns",
            "range": "± 4318976.438494031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 74994926.92929293,
            "unit": "ns",
            "range": "± 6651439.94228017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 153312019.87878788,
            "unit": "ns",
            "range": "± 12830295.583943188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 282368525.53608245,
            "unit": "ns",
            "range": "± 25338798.311995715"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 92621.92391304347,
            "unit": "ns",
            "range": "± 16685.384005522006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227159.94444444444,
            "unit": "ns",
            "range": "± 12294.573612980648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228788.37209302327,
            "unit": "ns",
            "range": "± 13135.151954423682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221116.58695652173,
            "unit": "ns",
            "range": "± 8489.480062147733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15644238.689473685,
            "unit": "ns",
            "range": "± 2329778.412263763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11186321.680851065,
            "unit": "ns",
            "range": "± 1073851.7935295384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27327.054347826088,
            "unit": "ns",
            "range": "± 3892.6111391366007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69629.1649484536,
            "unit": "ns",
            "range": "± 10741.37379159863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64941.56976744186,
            "unit": "ns",
            "range": "± 3869.28867924203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134786.8440860215,
            "unit": "ns",
            "range": "± 15684.574407258862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8961.675257731958,
            "unit": "ns",
            "range": "± 1195.5951186395741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24636.793478260868,
            "unit": "ns",
            "range": "± 3636.0891970890602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713205.793478261,
            "unit": "ns",
            "range": "± 239827.37452196682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3054437.8913043477,
            "unit": "ns",
            "range": "± 345959.0513001251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2696536.829787234,
            "unit": "ns",
            "range": "± 375970.0041392111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6791663.133333334,
            "unit": "ns",
            "range": "± 639850.91205069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4264677.989690722,
            "unit": "ns",
            "range": "± 770976.6611415475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6761544.908163265,
            "unit": "ns",
            "range": "± 1353287.3039575513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 36293167.85714286,
            "unit": "ns",
            "range": "± 3881342.2146013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8580764.387755102,
            "unit": "ns",
            "range": "± 1532774.6104056924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 39939316.48,
            "unit": "ns",
            "range": "± 6994702.744084402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7406262.1421875,
            "unit": "ns",
            "range": "± 138456.96176927173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2105605.218784265,
            "unit": "ns",
            "range": "± 91254.42039916826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352354.6126302083,
            "unit": "ns",
            "range": "± 32072.19461045729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2818857.5212053573,
            "unit": "ns",
            "range": "± 179369.542115361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920121.8536879596,
            "unit": "ns",
            "range": "± 18202.445386894906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757715.8181966146,
            "unit": "ns",
            "range": "± 11184.754731059622"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "233f6f30e700db3d42c169b28bec7e9636c8ddde",
          "message": "Merge pull request #2926 from colibrishin/prepare/0.52.1\n\n🔧 Prepare 0.52.1",
          "timestamp": "2023-03-14T13:20:29+09:00",
          "tree_id": "2aef4fbff4f74ea709ce146f26d005bfcb7cdb86",
          "url": "https://github.com/planetarium/libplanet/commit/233f6f30e700db3d42c169b28bec7e9636c8ddde"
        },
        "date": 1678768788870,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8708291.690909091,
            "unit": "ns",
            "range": "± 369265.13495549373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20763787.707692306,
            "unit": "ns",
            "range": "± 968167.9146160501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53007681.836363636,
            "unit": "ns",
            "range": "± 2232096.0648654043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104053484.08888888,
            "unit": "ns",
            "range": "± 3799294.6320248577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 209118771.30769232,
            "unit": "ns",
            "range": "± 2512051.766774502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70305.95263157894,
            "unit": "ns",
            "range": "± 10223.142826469359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213585.73157894737,
            "unit": "ns",
            "range": "± 26241.848427311117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206768.22340425532,
            "unit": "ns",
            "range": "± 15930.712138166447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196262.93406593407,
            "unit": "ns",
            "range": "± 23016.317942230173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12546378.970588235,
            "unit": "ns",
            "range": "± 600978.3704847634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10169542.833333334,
            "unit": "ns",
            "range": "± 209501.08775907417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20014.308510638297,
            "unit": "ns",
            "range": "± 3819.8281453112177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54105.467741935485,
            "unit": "ns",
            "range": "± 6432.8252455863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56608.449438202246,
            "unit": "ns",
            "range": "± 6669.042784339165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117792.65625,
            "unit": "ns",
            "range": "± 15279.815559528972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7057.4631578947365,
            "unit": "ns",
            "range": "± 975.8418930461863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18086.178947368422,
            "unit": "ns",
            "range": "± 3232.375741729647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564726.3125,
            "unit": "ns",
            "range": "± 117756.16149818033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2921608.25,
            "unit": "ns",
            "range": "± 172029.61005374775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2450923.290322581,
            "unit": "ns",
            "range": "± 152951.52515340198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6135959.935897436,
            "unit": "ns",
            "range": "± 198814.38987192826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3483771.4081632653,
            "unit": "ns",
            "range": "± 271868.587518484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5649868.357894737,
            "unit": "ns",
            "range": "± 722527.8457852417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26129804.479166668,
            "unit": "ns",
            "range": "± 1659861.8093880236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6543649,
            "unit": "ns",
            "range": "± 462942.50446526805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29684772.57731959,
            "unit": "ns",
            "range": "± 1977872.304871454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6926282.657728041,
            "unit": "ns",
            "range": "± 231256.682814658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2069648.0757308467,
            "unit": "ns",
            "range": "± 62801.07305525541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355379.3852539062,
            "unit": "ns",
            "range": "± 24763.344481163258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2858285.699404762,
            "unit": "ns",
            "range": "± 65976.73555712968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937746.59359375,
            "unit": "ns",
            "range": "± 24272.612485504716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749748.9033203125,
            "unit": "ns",
            "range": "± 6584.046443133364"
          }
        ]
      },
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
          "id": "ad915fabdad7fc9ca00f933507e2196a26911431",
          "message": "Merge pull request #2946 from greymistcube/port/0.51.2-to-0.52.1\n\n🔀🚀 Port 0.51.2 to 0.52.1 and release 0.52.1",
          "timestamp": "2023-03-15T18:57:02+09:00",
          "tree_id": "c27253e5957238046518b4bd134cde83bae519e6",
          "url": "https://github.com/planetarium/libplanet/commit/ad915fabdad7fc9ca00f933507e2196a26911431"
        },
        "date": 1678875314388,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8819527.396551725,
            "unit": "ns",
            "range": "± 255491.7638369672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21550076.320987653,
            "unit": "ns",
            "range": "± 1127942.569327965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58391884.14835165,
            "unit": "ns",
            "range": "± 3260486.1545691085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 144590324.78915662,
            "unit": "ns",
            "range": "± 36434525.17239503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 234048448.515625,
            "unit": "ns",
            "range": "± 10790460.101453714"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78696.93478260869,
            "unit": "ns",
            "range": "± 10799.41292136982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210965.04395604396,
            "unit": "ns",
            "range": "± 16606.166689189817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205683.17415730338,
            "unit": "ns",
            "range": "± 14828.396638924129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206248.90206185568,
            "unit": "ns",
            "range": "± 18233.342440578806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12809922.07142857,
            "unit": "ns",
            "range": "± 226130.2678290051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10307291,
            "unit": "ns",
            "range": "± 200324.44415697252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27146.34736842105,
            "unit": "ns",
            "range": "± 3510.966438959267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53456.95263157895,
            "unit": "ns",
            "range": "± 7776.740393250179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52497.96808510638,
            "unit": "ns",
            "range": "± 6031.296318250363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127901.73157894737,
            "unit": "ns",
            "range": "± 19903.124250875804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7100.015463917526,
            "unit": "ns",
            "range": "± 950.708574711099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20058.715789473685,
            "unit": "ns",
            "range": "± 3157.7986328452143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1785558.75,
            "unit": "ns",
            "range": "± 27867.497513395258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2886025.575,
            "unit": "ns",
            "range": "± 102501.39308318804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2867167.933333333,
            "unit": "ns",
            "range": "± 49750.722319905886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6015444.242424242,
            "unit": "ns",
            "range": "± 188478.3136131035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3365055.585858586,
            "unit": "ns",
            "range": "± 248818.03223444364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5384796.090909091,
            "unit": "ns",
            "range": "± 464961.89216783183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25514872,
            "unit": "ns",
            "range": "± 818399.074030081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6735959.397590362,
            "unit": "ns",
            "range": "± 453528.7487346346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29504019.785714287,
            "unit": "ns",
            "range": "± 514930.6534966893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6754320.190167683,
            "unit": "ns",
            "range": "± 241852.52942635462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1889929.3118024555,
            "unit": "ns",
            "range": "± 32940.68931640723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301845.213169643,
            "unit": "ns",
            "range": "± 14786.861084184227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2799805.29296875,
            "unit": "ns",
            "range": "± 141049.94647566308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810178.0614085478,
            "unit": "ns",
            "range": "± 26152.823759301496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746944.3835797991,
            "unit": "ns",
            "range": "± 10811.259048263975"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ef2213aed5a36d2ae2924118074332c080c7aee",
          "message": "Merge pull request #2976 from riemannulus/0.52-maintenance\n\n🔀 Port 0.50.6 to 0.52.2",
          "timestamp": "2023-03-28T15:27:27+09:00",
          "tree_id": "02382587929633a3da45125b42ba2f0682dbcf46",
          "url": "https://github.com/planetarium/libplanet/commit/6ef2213aed5a36d2ae2924118074332c080c7aee"
        },
        "date": 1679986048465,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9261176.117977528,
            "unit": "ns",
            "range": "± 674471.4338315985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24457181.111764707,
            "unit": "ns",
            "range": "± 2502967.626318692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54587261.941176474,
            "unit": "ns",
            "range": "± 1735646.7510340118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104033429.13043478,
            "unit": "ns",
            "range": "± 2484982.297679718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 248226233.14117646,
            "unit": "ns",
            "range": "± 28099257.89632599"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74774.70967741935,
            "unit": "ns",
            "range": "± 10738.762960679698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225302.44444444444,
            "unit": "ns",
            "range": "± 15582.693412966093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221254.1505376344,
            "unit": "ns",
            "range": "± 20614.675783837698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202396.6222222222,
            "unit": "ns",
            "range": "± 18377.793425259824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12635237.487179488,
            "unit": "ns",
            "range": "± 440857.8642919943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9817389.81081081,
            "unit": "ns",
            "range": "± 330561.47500392236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24353.65625,
            "unit": "ns",
            "range": "± 4581.207537499773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71352.7808988764,
            "unit": "ns",
            "range": "± 12067.809722552996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67837.94871794872,
            "unit": "ns",
            "range": "± 3499.4780488265837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 153588.8494623656,
            "unit": "ns",
            "range": "± 24506.684146302967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9136.840425531915,
            "unit": "ns",
            "range": "± 1456.9165576595703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27477.53448275862,
            "unit": "ns",
            "range": "± 3155.1160463981305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1668448.9742268042,
            "unit": "ns",
            "range": "± 183894.2630610666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2954001.2391304346,
            "unit": "ns",
            "range": "± 138597.48622186185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2678752.44,
            "unit": "ns",
            "range": "± 349213.07117549976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6367895.923076923,
            "unit": "ns",
            "range": "± 262852.317796093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3689496.5212765955,
            "unit": "ns",
            "range": "± 303249.4459179127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5851670.397849462,
            "unit": "ns",
            "range": "± 590895.9378775394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28725698.082474228,
            "unit": "ns",
            "range": "± 2127898.650875424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6999326.776595744,
            "unit": "ns",
            "range": "± 492737.40121456794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32881324.17368421,
            "unit": "ns",
            "range": "± 2479042.252720408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7478829.620216837,
            "unit": "ns",
            "range": "± 288587.97429615754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2141861.320721294,
            "unit": "ns",
            "range": "± 111304.53614275518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370398.2667164523,
            "unit": "ns",
            "range": "± 27397.75831568398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2868811.375594429,
            "unit": "ns",
            "range": "± 108978.88025241949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 906074.2235698084,
            "unit": "ns",
            "range": "± 27521.616230924312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792318.2729003907,
            "unit": "ns",
            "range": "± 16135.857645809056"
          }
        ]
      }
    ]
  }
}