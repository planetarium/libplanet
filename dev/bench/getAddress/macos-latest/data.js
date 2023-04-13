window.BENCHMARK_DATA = {
  "lastUpdate": 1681375578095,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "1a2a110d339b3b459fb1798d0943487ca75d6cba",
          "message": "tslib: Account.getAddress() async\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-13T17:28:20+09:00",
          "tree_id": "ef04124a7bf47b271ebd0039c0734c3f5d9f27ca",
          "url": "https://github.com/planetarium/libplanet/commit/1a2a110d339b3b459fb1798d0943487ca75d6cba"
        },
        "date": 1681375503963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7491466.2894736845,
            "unit": "ns",
            "range": "± 257271.9711521944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18263212.14285714,
            "unit": "ns",
            "range": "± 286225.25980204344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46323040.166666664,
            "unit": "ns",
            "range": "± 1347174.5068438184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91531964.2,
            "unit": "ns",
            "range": "± 1647918.5781257174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189648625.07142857,
            "unit": "ns",
            "range": "± 2315521.4564091163"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64451.42857142857,
            "unit": "ns",
            "range": "± 13348.196770760005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351689.15873015876,
            "unit": "ns",
            "range": "± 15502.084161863371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325908.47777777776,
            "unit": "ns",
            "range": "± 21854.7982134116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295575.9381443299,
            "unit": "ns",
            "range": "± 20207.55493817764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5382756.466666667,
            "unit": "ns",
            "range": "± 95556.66622545918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3907014.9516129033,
            "unit": "ns",
            "range": "± 117509.91429657862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21585.701030927834,
            "unit": "ns",
            "range": "± 3750.4227127444933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93710.34343434343,
            "unit": "ns",
            "range": "± 13722.612763775081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97089.76262626263,
            "unit": "ns",
            "range": "± 20097.8672782563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 218918.4375,
            "unit": "ns",
            "range": "± 21076.895018910112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6197.615789473684,
            "unit": "ns",
            "range": "± 2124.5046574770454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16325.397727272728,
            "unit": "ns",
            "range": "± 2280.47152333249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588256.9591836734,
            "unit": "ns",
            "range": "± 140873.68452611097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3139324.2916666665,
            "unit": "ns",
            "range": "± 121737.84200764804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2713543.2989690723,
            "unit": "ns",
            "range": "± 324658.2238790756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7032184.84375,
            "unit": "ns",
            "range": "± 182045.01522728885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3092961.371794872,
            "unit": "ns",
            "range": "± 98031.22835638691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3218934.5588235296,
            "unit": "ns",
            "range": "± 103005.09821192322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4205496.715686275,
            "unit": "ns",
            "range": "± 170205.17785946626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4188745.7555555557,
            "unit": "ns",
            "range": "± 240028.84002226472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7816175.280487805,
            "unit": "ns",
            "range": "± 258752.58769628874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6224017.700120192,
            "unit": "ns",
            "range": "± 28689.540643294335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924183.6391927083,
            "unit": "ns",
            "range": "± 10750.947975794355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1276338.0970552885,
            "unit": "ns",
            "range": "± 4898.500560499351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2500506.5270647323,
            "unit": "ns",
            "range": "± 15423.797153377214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782496.4553571428,
            "unit": "ns",
            "range": "± 3683.2430266376373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774684.6157924107,
            "unit": "ns",
            "range": "± 1924.3158400214206"
          }
        ]
      }
    ]
  }
}