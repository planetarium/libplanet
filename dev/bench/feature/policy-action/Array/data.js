window.BENCHMARK_DATA = {
  "lastUpdate": 1721097539543,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "3406e0388638865dc65d0e49f17ff8048e89dd10",
          "message": "temp: fix build error due to rebase",
          "timestamp": "2024-07-16T11:02:30+09:00",
          "tree_id": "b8b3773f9ae97678a42355348a63c5c88403d520",
          "url": "https://github.com/planetarium/libplanet/commit/3406e0388638865dc65d0e49f17ff8048e89dd10"
        },
        "date": 1721095833341,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10737184.92857143,
            "unit": "ns",
            "range": "± 82413.11118660697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26678496.64285714,
            "unit": "ns",
            "range": "± 270882.0715947772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67894583.06666666,
            "unit": "ns",
            "range": "± 280197.94869812677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136177187.7857143,
            "unit": "ns",
            "range": "± 349192.8316393897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272528439.26666665,
            "unit": "ns",
            "range": "± 301019.6948394067"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14106.40909090909,
            "unit": "ns",
            "range": "± 343.321542898464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110836.43617021276,
            "unit": "ns",
            "range": "± 4293.32438542045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104985.08771929824,
            "unit": "ns",
            "range": "± 4540.063727843718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91836.47826086957,
            "unit": "ns",
            "range": "± 2298.6760788364722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3045714.471264368,
            "unit": "ns",
            "range": "± 166495.52084043127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2789786.06097561,
            "unit": "ns",
            "range": "± 146813.18910964922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4893.166666666667,
            "unit": "ns",
            "range": "± 405.6989599042815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26773.795454545456,
            "unit": "ns",
            "range": "± 1757.5351807867855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22773.444444444445,
            "unit": "ns",
            "range": "± 1381.7282299255826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29260.19587628866,
            "unit": "ns",
            "range": "± 5649.913125510529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1269.408163265306,
            "unit": "ns",
            "range": "± 261.58733680748946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4910.7441860465115,
            "unit": "ns",
            "range": "± 374.6374305612895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 685948.3,
            "unit": "ns",
            "range": "± 32898.85915701199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1280607.4857142856,
            "unit": "ns",
            "range": "± 39868.79934483003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1096544.1012658228,
            "unit": "ns",
            "range": "± 56640.74225316626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9529921.97,
            "unit": "ns",
            "range": "± 1369688.7282282806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2183119.534883721,
            "unit": "ns",
            "range": "± 79466.54986678921"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2289792.9411764704,
            "unit": "ns",
            "range": "± 92883.64118775958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2627643.1666666665,
            "unit": "ns",
            "range": "± 49743.78386498038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2314803.378378378,
            "unit": "ns",
            "range": "± 77117.14325958605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2959760.8846153845,
            "unit": "ns",
            "range": "± 104616.57065172611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3054368.5518229166,
            "unit": "ns",
            "range": "± 36282.4157708913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 916532.1829659598,
            "unit": "ns",
            "range": "± 2396.376196760512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 611544.67265625,
            "unit": "ns",
            "range": "± 5221.151603756714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1644724.5738932292,
            "unit": "ns",
            "range": "± 15362.01148541643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465444.34915597097,
            "unit": "ns",
            "range": "± 709.5380418567767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 433174.30859375,
            "unit": "ns",
            "range": "± 702.2117336390584"
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
          "id": "62f1624497569651272b9ed26ab5cd93cadcf303",
          "message": "Changelog",
          "timestamp": "2024-07-16T11:26:29+09:00",
          "tree_id": "2df40c8fcf5301123e95d348135c4ba1337cbbab",
          "url": "https://github.com/planetarium/libplanet/commit/62f1624497569651272b9ed26ab5cd93cadcf303"
        },
        "date": 1721097491562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10803541.833333334,
            "unit": "ns",
            "range": "± 89012.37170072415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26622374.785714287,
            "unit": "ns",
            "range": "± 121141.05286062737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67026979.25,
            "unit": "ns",
            "range": "± 80093.05646913583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136294589.64285713,
            "unit": "ns",
            "range": "± 187089.41493784654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273115878.35714287,
            "unit": "ns",
            "range": "± 279556.9207171639"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14154.55,
            "unit": "ns",
            "range": "± 321.32873395194196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111473.14666666667,
            "unit": "ns",
            "range": "± 5626.014199723948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104771.68181818182,
            "unit": "ns",
            "range": "± 4726.659536514755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94447.8870967742,
            "unit": "ns",
            "range": "± 4248.238065266003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3066117.14,
            "unit": "ns",
            "range": "± 187533.96382371595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2770623.818681319,
            "unit": "ns",
            "range": "± 153779.90941521872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4973.357894736842,
            "unit": "ns",
            "range": "± 546.0218785225626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27621,
            "unit": "ns",
            "range": "± 1834.6696384779852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23097.397849462366,
            "unit": "ns",
            "range": "± 1772.0596720482279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29500.657894736843,
            "unit": "ns",
            "range": "± 5018.710600525329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1403.7395833333333,
            "unit": "ns",
            "range": "± 337.4655458371905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5165.577777777778,
            "unit": "ns",
            "range": "± 500.6233637272765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 697124.0652173914,
            "unit": "ns",
            "range": "± 55798.82175068691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1287146.1470588236,
            "unit": "ns",
            "range": "± 40808.14490532597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1097734.1770833333,
            "unit": "ns",
            "range": "± 71259.31875621525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9657147.6,
            "unit": "ns",
            "range": "± 1476592.774031493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185984.069767442,
            "unit": "ns",
            "range": "± 77929.23224231052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2303857.9,
            "unit": "ns",
            "range": "± 91960.75458413591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2600966.95,
            "unit": "ns",
            "range": "± 58167.62674101101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2327365.536585366,
            "unit": "ns",
            "range": "± 82295.55270429185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3015972.566666667,
            "unit": "ns",
            "range": "± 127912.73823267923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3042989.825911458,
            "unit": "ns",
            "range": "± 44130.33690792206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925720.1243722098,
            "unit": "ns",
            "range": "± 3471.050289442786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615366.3657552083,
            "unit": "ns",
            "range": "± 7356.696211105715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1641433.1971354166,
            "unit": "ns",
            "range": "± 13124.466766551264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463018.76253255206,
            "unit": "ns",
            "range": "± 900.0734614566626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428353.4142578125,
            "unit": "ns",
            "range": "± 1371.4119655166335"
          }
        ]
      }
    ]
  }
}