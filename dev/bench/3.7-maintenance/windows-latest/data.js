window.BENCHMARK_DATA = {
  "lastUpdate": 1698646812413,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9096adbe5ba18dfe201c3ac979fc0e3eec3bab53",
          "message": "Merge pull request #3463 from OnedgeLee/release/3.7.0\n\n🚀 Release 3.7.0",
          "timestamp": "2023-10-27T22:28:05+09:00",
          "tree_id": "9407f4b60e5c3eb4c806c8f791a2846bfc6b60bd",
          "url": "https://github.com/planetarium/libplanet/commit/9096adbe5ba18dfe201c3ac979fc0e3eec3bab53"
        },
        "date": 1698414843248,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1606959.793814433,
            "unit": "ns",
            "range": "± 130142.5713879092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3128912.9411764704,
            "unit": "ns",
            "range": "± 187870.35726813323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350288.1720430106,
            "unit": "ns",
            "range": "± 147307.58403795952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11395155.681818182,
            "unit": "ns",
            "range": "± 1440640.9082485023"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65146.739130434784,
            "unit": "ns",
            "range": "± 7909.660960030323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10352478.260869564,
            "unit": "ns",
            "range": "± 391028.4973491452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27171682.978723403,
            "unit": "ns",
            "range": "± 1047777.5559060709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66796693.75,
            "unit": "ns",
            "range": "± 1294266.8063263977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134114077.77777778,
            "unit": "ns",
            "range": "± 4455835.182006438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266441444.64285713,
            "unit": "ns",
            "range": "± 11334419.811512502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5893418.06344697,
            "unit": "ns",
            "range": "± 277046.3009959459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1886954.0690104167,
            "unit": "ns",
            "range": "± 23236.899966277404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397619.9462890625,
            "unit": "ns",
            "range": "± 31624.349289539055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3315316.1328125,
            "unit": "ns",
            "range": "± 61806.26626631712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048723.076923077,
            "unit": "ns",
            "range": "± 13469.837476510775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 970796.4657738095,
            "unit": "ns",
            "range": "± 22108.8296154381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3966176.7441860465,
            "unit": "ns",
            "range": "± 144103.9172614668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4166549.438202247,
            "unit": "ns",
            "range": "± 237477.89855230143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5163645.348837209,
            "unit": "ns",
            "range": "± 274552.5560560959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4774473.076923077,
            "unit": "ns",
            "range": "± 119723.21932755504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12991434.782608695,
            "unit": "ns",
            "range": "± 1147187.4963813887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304817.7419354839,
            "unit": "ns",
            "range": "± 13736.472024141274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292783.63636363635,
            "unit": "ns",
            "range": "± 11240.481794675483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280750,
            "unit": "ns",
            "range": "± 17818.493473843948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5059533.333333333,
            "unit": "ns",
            "range": "± 128104.97959525793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4657241.666666667,
            "unit": "ns",
            "range": "± 51811.975771372905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27392.55319148936,
            "unit": "ns",
            "range": "± 3109.722504706815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111114.58333333333,
            "unit": "ns",
            "range": "± 11469.40074758799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92215.625,
            "unit": "ns",
            "range": "± 9496.008337301799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108020.40816326531,
            "unit": "ns",
            "range": "± 16700.113952223564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7046.153846153846,
            "unit": "ns",
            "range": "± 1097.9078783767377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25819.14893617021,
            "unit": "ns",
            "range": "± 1893.6950621291141"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "630d3e5a289c2ac575750f4fd85df62a6da710f1",
          "message": "Merge pull request #3466 from planetarium/use-nodejs-18\n\nUse Nodejs 18",
          "timestamp": "2023-10-30T14:38:44+09:00",
          "tree_id": "4a0fa5d771fc7399d64d5ea9217d27380f5eed9d",
          "url": "https://github.com/planetarium/libplanet/commit/630d3e5a289c2ac575750f4fd85df62a6da710f1"
        },
        "date": 1698646729046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1635212.5,
            "unit": "ns",
            "range": "± 173089.52064724985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3120379.347826087,
            "unit": "ns",
            "range": "± 205501.7930127086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2387170.5263157897,
            "unit": "ns",
            "range": "± 168973.96178215844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10794297.727272727,
            "unit": "ns",
            "range": "± 971516.3393870043"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62210.11235955056,
            "unit": "ns",
            "range": "± 6067.874514489854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9417258.490566038,
            "unit": "ns",
            "range": "± 387399.7028681013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25389565,
            "unit": "ns",
            "range": "± 566615.5312815504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65708725.423728816,
            "unit": "ns",
            "range": "± 2884988.404960457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131422930,
            "unit": "ns",
            "range": "± 3920582.2482917877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262410813.33333334,
            "unit": "ns",
            "range": "± 7697324.905837286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5846550.703125,
            "unit": "ns",
            "range": "± 130911.41930624754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1868552.0905671297,
            "unit": "ns",
            "range": "± 51058.899720442976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1392177.4832589286,
            "unit": "ns",
            "range": "± 32362.251056239253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3350428.7917564656,
            "unit": "ns",
            "range": "± 98194.02291365033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1037946.5294471154,
            "unit": "ns",
            "range": "± 27361.128700984405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 981837.8125,
            "unit": "ns",
            "range": "± 22337.059412436647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4143907.6923076925,
            "unit": "ns",
            "range": "± 64107.558856691016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4210084.042553191,
            "unit": "ns",
            "range": "± 294774.41832630435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5061131.25,
            "unit": "ns",
            "range": "± 98680.8641953106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4928296.96969697,
            "unit": "ns",
            "range": "± 228741.6096618103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12305191.07142857,
            "unit": "ns",
            "range": "± 529418.725594156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299293.0232558139,
            "unit": "ns",
            "range": "± 10667.962615072718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291224,
            "unit": "ns",
            "range": "± 11702.686940726606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270139.3617021277,
            "unit": "ns",
            "range": "± 16560.71409091704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5020962.5,
            "unit": "ns",
            "range": "± 125079.42802562455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4522807.692307692,
            "unit": "ns",
            "range": "± 66577.91752949399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24616.129032258064,
            "unit": "ns",
            "range": "± 2164.6010940155193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104737.11340206186,
            "unit": "ns",
            "range": "± 10235.592715979994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87913.82978723405,
            "unit": "ns",
            "range": "± 5909.780503971759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104657.73195876289,
            "unit": "ns",
            "range": "± 14824.352396279315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6656.8421052631575,
            "unit": "ns",
            "range": "± 933.9520958578242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24307.52688172043,
            "unit": "ns",
            "range": "± 2337.605452591799"
          }
        ]
      }
    ]
  }
}