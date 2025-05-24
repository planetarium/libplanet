window.BENCHMARK_DATA = {
  "lastUpdate": 1748057723129,
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
          "id": "98333f41b86cc92bc328c569c756a88830127ed2",
          "message": "Merge pull request #4041 from planetarium/prepare/5.6.0\n\n🔧 Prepare 5.6.0",
          "timestamp": "2025-05-24T12:20:29+09:00",
          "tree_id": "79b0852bfd537157ef86214a4d55c3fbc3eb4d7b",
          "url": "https://github.com/planetarium/libplanet/commit/98333f41b86cc92bc328c569c756a88830127ed2"
        },
        "date": 1748057510321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061734.0206185568,
            "unit": "ns",
            "range": "± 126013.49703388089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1838662.2641509434,
            "unit": "ns",
            "range": "± 73114.03955048867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1613754.1666666667,
            "unit": "ns",
            "range": "± 154096.29041381317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6773891.666666667,
            "unit": "ns",
            "range": "± 264522.97075440834"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30336.666666666668,
            "unit": "ns",
            "range": "± 2850.052236856193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10439956.666666666,
            "unit": "ns",
            "range": "± 86065.5187854551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25042685.714285713,
            "unit": "ns",
            "range": "± 163026.6748213209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63065096.666666664,
            "unit": "ns",
            "range": "± 646231.6964710177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125477253.84615384,
            "unit": "ns",
            "range": "± 570594.346004504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252230000,
            "unit": "ns",
            "range": "± 1433251.984623978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3366884.53125,
            "unit": "ns",
            "range": "± 2990.73692138544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060216.2760416667,
            "unit": "ns",
            "range": "± 750.156603009908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749944.6498325893,
            "unit": "ns",
            "range": "± 1073.4057929459511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971606.25,
            "unit": "ns",
            "range": "± 4423.161680092044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617445.44921875,
            "unit": "ns",
            "range": "± 769.8498856289124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561621.8668619791,
            "unit": "ns",
            "range": "± 516.9099568903977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2207237.037037037,
            "unit": "ns",
            "range": "± 92166.35144251409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2355597.8260869565,
            "unit": "ns",
            "range": "± 89638.55938435432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2852842.3076923075,
            "unit": "ns",
            "range": "± 76162.96303625233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2432740,
            "unit": "ns",
            "range": "± 40693.76575629947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3064335.714285714,
            "unit": "ns",
            "range": "± 38651.96993970398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103481.08108108108,
            "unit": "ns",
            "range": "± 5153.178980956722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174752.83018867925,
            "unit": "ns",
            "range": "± 6680.960426511265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156974.48979591837,
            "unit": "ns",
            "range": "± 9124.898657530619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2702107.1428571427,
            "unit": "ns",
            "range": "± 31577.997799970555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2553406.25,
            "unit": "ns",
            "range": "± 47849.534567572686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13007.368421052632,
            "unit": "ns",
            "range": "± 1793.916558299493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59781.720430107525,
            "unit": "ns",
            "range": "± 5108.474336964599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46362.264150943396,
            "unit": "ns",
            "range": "± 1940.4823364599863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60345.454545454544,
            "unit": "ns",
            "range": "± 3213.89030756977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3068.4210526315787,
            "unit": "ns",
            "range": "± 516.3833224672195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11843.478260869566,
            "unit": "ns",
            "range": "± 1422.7588389491493"
          }
        ]
      }
    ]
  }
}