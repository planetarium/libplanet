window.BENCHMARK_DATA = {
  "lastUpdate": 1681376775465,
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
        "date": 1681375814019,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1807871.1340206186,
            "unit": "ns",
            "range": "± 176169.91322227035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3525874.4444444445,
            "unit": "ns",
            "range": "± 196178.10788600452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2955560,
            "unit": "ns",
            "range": "± 304924.73099843523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7246122.340425532,
            "unit": "ns",
            "range": "± 464632.61545548134"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77393.68421052632,
            "unit": "ns",
            "range": "± 16555.18695169581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9343335,
            "unit": "ns",
            "range": "± 1029946.4953618129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24769789.247311827,
            "unit": "ns",
            "range": "± 2271589.084590554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64980304.87804878,
            "unit": "ns",
            "range": "± 2184919.9866300845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129954754.05405405,
            "unit": "ns",
            "range": "± 4352761.34001258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263365596.55172414,
            "unit": "ns",
            "range": "± 7572035.599422143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5791199.107142857,
            "unit": "ns",
            "range": "± 245235.36076584383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2015404.296875,
            "unit": "ns",
            "range": "± 25751.717999718774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1449090.1088169643,
            "unit": "ns",
            "range": "± 33724.447578802734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3296155.558894231,
            "unit": "ns",
            "range": "± 113764.64504809226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1039054.5442708334,
            "unit": "ns",
            "range": "± 14650.913253483084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1015162.8776041666,
            "unit": "ns",
            "range": "± 14560.030740775204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3767900,
            "unit": "ns",
            "range": "± 322998.29088398983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4157390.5263157897,
            "unit": "ns",
            "range": "± 356191.27663039765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5243283.5051546395,
            "unit": "ns",
            "range": "± 374047.9700409462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5344828.421052632,
            "unit": "ns",
            "range": "± 499227.09019834443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9332064.47368421,
            "unit": "ns",
            "range": "± 457420.59761345753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 439287.7551020408,
            "unit": "ns",
            "range": "± 55331.7143363851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360460.20408163266,
            "unit": "ns",
            "range": "± 43326.672672920264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319132.2916666667,
            "unit": "ns",
            "range": "± 36115.389618894624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6743975.510204081,
            "unit": "ns",
            "range": "± 501803.2552932802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4809214.285714285,
            "unit": "ns",
            "range": "± 287833.72061252565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 36705.67010309279,
            "unit": "ns",
            "range": "± 10654.947687500286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 136708.16326530612,
            "unit": "ns",
            "range": "± 20581.989291357735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124267,
            "unit": "ns",
            "range": "± 25662.392619346603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 255064.94845360826,
            "unit": "ns",
            "range": "± 43964.67578550305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 13593,
            "unit": "ns",
            "range": "± 9066.346418140958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 35192.78350515464,
            "unit": "ns",
            "range": "± 11106.888322705798"
          }
        ]
      },
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
          "id": "74ea8a2bc24b33c0bec2bfb76f78a8b124ae9f63",
          "message": "temp: account-web3: Web3KeyMetadata, need changelog\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-13T17:46:52+09:00",
          "tree_id": "4ea28583e3815c059ee13bdf2975491a7576b2ba",
          "url": "https://github.com/planetarium/libplanet/commit/74ea8a2bc24b33c0bec2bfb76f78a8b124ae9f63"
        },
        "date": 1681376726345,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1461050,
            "unit": "ns",
            "range": "± 149305.09016257152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2620531.884057971,
            "unit": "ns",
            "range": "± 122428.00824872986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2309550,
            "unit": "ns",
            "range": "± 162508.38344750603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5748380.701754386,
            "unit": "ns",
            "range": "± 246900.63894972904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56834.375,
            "unit": "ns",
            "range": "± 6222.858170952434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7685616.666666667,
            "unit": "ns",
            "range": "± 156785.22308071828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20125971.42857143,
            "unit": "ns",
            "range": "± 252212.6710309604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50979533.333333336,
            "unit": "ns",
            "range": "± 600795.1239419149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102429080,
            "unit": "ns",
            "range": "± 1073380.7633560689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204714726.66666666,
            "unit": "ns",
            "range": "± 1617691.9071259992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4903415.390625,
            "unit": "ns",
            "range": "± 30246.627407320953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523795.4947916667,
            "unit": "ns",
            "range": "± 3847.686823909378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1185092.8255208333,
            "unit": "ns",
            "range": "± 5779.422680824307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671332.51953125,
            "unit": "ns",
            "range": "± 10387.906400490343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827010.9049479166,
            "unit": "ns",
            "range": "± 2446.2350105932655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764006.2918526785,
            "unit": "ns",
            "range": "± 1823.4035039798293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3360097.8260869565,
            "unit": "ns",
            "range": "± 78403.21694214767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3498120.8333333335,
            "unit": "ns",
            "range": "± 87043.97179220579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4090503.125,
            "unit": "ns",
            "range": "± 189352.1209397061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4540561.111111111,
            "unit": "ns",
            "range": "± 89843.38751987122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7318014.285714285,
            "unit": "ns",
            "range": "± 233850.38724245332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336076.92307692306,
            "unit": "ns",
            "range": "± 11763.11052531469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274966.1538461539,
            "unit": "ns",
            "range": "± 12854.805484271692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249210.101010101,
            "unit": "ns",
            "range": "± 17687.42488236444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5458190,
            "unit": "ns",
            "range": "± 90904.00588375787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3815123.8095238097,
            "unit": "ns",
            "range": "± 86206.84372346493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26667.708333333332,
            "unit": "ns",
            "range": "± 2265.2753889360333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111665.65656565657,
            "unit": "ns",
            "range": "± 9538.623543538088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112767,
            "unit": "ns",
            "range": "± 9560.905825392289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 209727.55102040817,
            "unit": "ns",
            "range": "± 19025.169333476984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9803.535353535353,
            "unit": "ns",
            "range": "± 1746.2094885262206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26079.166666666668,
            "unit": "ns",
            "range": "± 3108.593070376529"
          }
        ]
      }
    ]
  }
}