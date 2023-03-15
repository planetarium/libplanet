window.BENCHMARK_DATA = {
  "lastUpdate": 1678852121857,
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
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "distinct": true,
          "id": "682324937d2810f2b62b4684bf95825d14620761",
          "message": "chore: changelog",
          "timestamp": "2023-03-15T12:24:55+09:00",
          "tree_id": "b75741e53bb982ca40dc7a04594824063593e94d",
          "url": "https://github.com/planetarium/libplanet/commit/682324937d2810f2b62b4684bf95825d14620761"
        },
        "date": 1678852074152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8378489.176470588,
            "unit": "ns",
            "range": "± 167364.78807728467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23571024.255102042,
            "unit": "ns",
            "range": "± 2033158.395946478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56292543.833333336,
            "unit": "ns",
            "range": "± 3023249.531251939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 110990599.56818181,
            "unit": "ns",
            "range": "± 4142866.6180946436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 224629237.48333332,
            "unit": "ns",
            "range": "± 9971518.498998137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 353009.48876404495,
            "unit": "ns",
            "range": "± 31862.607475297318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190643.16483516485,
            "unit": "ns",
            "range": "± 13198.851937669713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195014.79775280898,
            "unit": "ns",
            "range": "± 15071.794197937912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185220.16326530612,
            "unit": "ns",
            "range": "± 22187.994849051218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11826577.176470589,
            "unit": "ns",
            "range": "± 228778.56210925756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10431395.315384615,
            "unit": "ns",
            "range": "± 481130.92419562925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20175.893617021276,
            "unit": "ns",
            "range": "± 3051.793033569571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57869.5,
            "unit": "ns",
            "range": "± 6821.94346885898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54443.19565217391,
            "unit": "ns",
            "range": "± 7469.696080345447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122570.13684210526,
            "unit": "ns",
            "range": "± 17663.64526100451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8374.725274725275,
            "unit": "ns",
            "range": "± 624.8832258187492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23863.457894736843,
            "unit": "ns",
            "range": "± 3708.8203117152048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2818978.6612903224,
            "unit": "ns",
            "range": "± 355395.3729751982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5002285.370786517,
            "unit": "ns",
            "range": "± 270063.44010424754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3863994.3917525774,
            "unit": "ns",
            "range": "± 469657.23694989254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7949368.357142857,
            "unit": "ns",
            "range": "± 224100.54902145953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4095326.188888889,
            "unit": "ns",
            "range": "± 289804.40780892334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6157205.4,
            "unit": "ns",
            "range": "± 404829.94194211916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25980797.527027026,
            "unit": "ns",
            "range": "± 1292473.7402095934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7761512.876712329,
            "unit": "ns",
            "range": "± 383480.546081543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28243671.42857143,
            "unit": "ns",
            "range": "± 1284333.6451994777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7382136.432524671,
            "unit": "ns",
            "range": "± 467805.6901151654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2124370.9797794116,
            "unit": "ns",
            "range": "± 40691.20370748874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364792.732142857,
            "unit": "ns",
            "range": "± 23508.355415414146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2796708.7810997595,
            "unit": "ns",
            "range": "± 136013.93645079818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995065.1786810427,
            "unit": "ns",
            "range": "± 62646.04516881427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 834987.2741668315,
            "unit": "ns",
            "range": "± 43186.929992873"
          }
        ]
      }
    ]
  }
}