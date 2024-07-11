window.BENCHMARK_DATA = {
  "lastUpdate": 1720695795874,
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
          "id": "7dccf1d6f78638504d5ef461ae43954c29cc7d36",
          "message": "Prepare 5.2.0",
          "timestamp": "2024-07-11T13:43:50+09:00",
          "tree_id": "5357d8d956b14e1ac4fcbfb0faeeebf54662bcf0",
          "url": "https://github.com/planetarium/libplanet/commit/7dccf1d6f78638504d5ef461ae43954c29cc7d36"
        },
        "date": 1720677249967,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10762780.833333334,
            "unit": "ns",
            "range": "± 100130.36081196018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26690660.53846154,
            "unit": "ns",
            "range": "± 184074.19000166544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67037355.8,
            "unit": "ns",
            "range": "± 136330.22759262577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135270119.42857143,
            "unit": "ns",
            "range": "± 122027.81388728511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273644930.8333333,
            "unit": "ns",
            "range": "± 150581.44405593173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14053.192307692309,
            "unit": "ns",
            "range": "± 384.30227886191557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109916.2741935484,
            "unit": "ns",
            "range": "± 4522.088887581928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105727.14,
            "unit": "ns",
            "range": "± 3770.604190258086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91957.11111111111,
            "unit": "ns",
            "range": "± 2520.447843803425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3052206.9743589745,
            "unit": "ns",
            "range": "± 155821.82438793272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2685154.14,
            "unit": "ns",
            "range": "± 187661.67572956035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4897.275280898876,
            "unit": "ns",
            "range": "± 468.39095346848177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26483.74074074074,
            "unit": "ns",
            "range": "± 1300.573621308861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22101.542857142857,
            "unit": "ns",
            "range": "± 1031.2789538943096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28258.308510638297,
            "unit": "ns",
            "range": "± 5156.632536728938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1060.8241758241759,
            "unit": "ns",
            "range": "± 169.04428041897407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4667.363636363636,
            "unit": "ns",
            "range": "± 401.16434508307844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 675378.0317460317,
            "unit": "ns",
            "range": "± 29279.58822862244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1266542.4324324324,
            "unit": "ns",
            "range": "± 42153.39874167294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1071988.8641975308,
            "unit": "ns",
            "range": "± 55743.18874596992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9451044.56,
            "unit": "ns",
            "range": "± 1338716.8094992137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2180429.722222222,
            "unit": "ns",
            "range": "± 72646.70275109772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291215.367647059,
            "unit": "ns",
            "range": "± 105085.46051068822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2556122.285714286,
            "unit": "ns",
            "range": "± 32517.504782758213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2310631.5263157897,
            "unit": "ns",
            "range": "± 78637.84016564931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3068190.6417910447,
            "unit": "ns",
            "range": "± 143945.2142031508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3059418.8231770834,
            "unit": "ns",
            "range": "± 29024.977550983178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 929332.1099609375,
            "unit": "ns",
            "range": "± 3542.2083610501213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 609893.774609375,
            "unit": "ns",
            "range": "± 6120.221535132795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1672298.844921875,
            "unit": "ns",
            "range": "± 9950.613306507648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468672.37346540176,
            "unit": "ns",
            "range": "± 603.8179956386651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424921.4384014423,
            "unit": "ns",
            "range": "± 710.5383170369"
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
          "id": "6ae55d917b690c6c7ba4c39ed274b6566b4cb4e3",
          "message": "Prepare 5.2.0",
          "timestamp": "2024-07-11T19:42:14+09:00",
          "tree_id": "87ce8f5e57fddf39bbd19fb45afdcd27722cb680",
          "url": "https://github.com/planetarium/libplanet/commit/6ae55d917b690c6c7ba4c39ed274b6566b4cb4e3"
        },
        "date": 1720695750654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10806242.916666666,
            "unit": "ns",
            "range": "± 75921.8400491385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26866723.42857143,
            "unit": "ns",
            "range": "± 452978.6825367451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67192047.07142857,
            "unit": "ns",
            "range": "± 107052.66001327377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135405493.7857143,
            "unit": "ns",
            "range": "± 226449.78075576748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273049737.38461536,
            "unit": "ns",
            "range": "± 243154.53973914697"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13794.32142857143,
            "unit": "ns",
            "range": "± 393.38427669829304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108784.05,
            "unit": "ns",
            "range": "± 3810.5262907924557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105124.5,
            "unit": "ns",
            "range": "± 3128.1978164667544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92385.8918918919,
            "unit": "ns",
            "range": "± 3121.4896798357863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3011390.4375,
            "unit": "ns",
            "range": "± 157359.95489523042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2753549.9494949495,
            "unit": "ns",
            "range": "± 165550.74424899268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5042.811827956989,
            "unit": "ns",
            "range": "± 521.4848778184861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26769.813186813186,
            "unit": "ns",
            "range": "± 1739.0221704042501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22076.744680851065,
            "unit": "ns",
            "range": "± 847.9976278700699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30788.273684210526,
            "unit": "ns",
            "range": "± 5735.091912380223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1042.6041666666667,
            "unit": "ns",
            "range": "± 224.36359021471168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4578.752941176471,
            "unit": "ns",
            "range": "± 413.27812340228365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681976.5970149253,
            "unit": "ns",
            "range": "± 32216.913260931982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1283361.3666666667,
            "unit": "ns",
            "range": "± 37225.96671909629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1082820.677419355,
            "unit": "ns",
            "range": "± 60855.15827983998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9552605.47,
            "unit": "ns",
            "range": "± 1390327.6967668373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2175667.0490196077,
            "unit": "ns",
            "range": "± 73757.24119225549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275292.0588235296,
            "unit": "ns",
            "range": "± 91457.60537066599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2559572.75,
            "unit": "ns",
            "range": "± 25574.504556207037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2317464.1470588236,
            "unit": "ns",
            "range": "± 73733.93967343395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2925291.6285714284,
            "unit": "ns",
            "range": "± 140362.5560890539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3048961.802864583,
            "unit": "ns",
            "range": "± 29708.27684075076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926791.6589192708,
            "unit": "ns",
            "range": "± 7370.284441656594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614117.935546875,
            "unit": "ns",
            "range": "± 5128.156160338535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1676133.9761117788,
            "unit": "ns",
            "range": "± 10880.170049793165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466843.28466796875,
            "unit": "ns",
            "range": "± 1207.184012389133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421524.8128580729,
            "unit": "ns",
            "range": "± 1001.0107746117459"
          }
        ]
      }
    ]
  }
}