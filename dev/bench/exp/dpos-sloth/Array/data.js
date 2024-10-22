window.BENCHMARK_DATA = {
  "lastUpdate": 1729564447691,
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "ce8f7ecd0fec57e750b97aba0c14170f74f33792",
          "message": "feat: make ActionEvaluator.CommitWorld to public",
          "timestamp": "2024-06-04T19:38:01+09:00",
          "tree_id": "927016d20e8d96cc4a85cb63a10d9504b5eaac5c",
          "url": "https://github.com/planetarium/libplanet/commit/ce8f7ecd0fec57e750b97aba0c14170f74f33792"
        },
        "date": 1717562956816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10793291.23076923,
            "unit": "ns",
            "range": "± 131594.46428399754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26686079.769230768,
            "unit": "ns",
            "range": "± 187579.14293712305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67298881.96666667,
            "unit": "ns",
            "range": "± 85703.63111566233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135610794.86666667,
            "unit": "ns",
            "range": "± 218610.97098102525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273578271.14285713,
            "unit": "ns",
            "range": "± 395623.0170291016"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 16005.552631578947,
            "unit": "ns",
            "range": "± 1374.0808406985798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111154.32608695653,
            "unit": "ns",
            "range": "± 4251.047458133625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105004.44736842105,
            "unit": "ns",
            "range": "± 3531.6534520339274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90234.71428571429,
            "unit": "ns",
            "range": "± 1540.1839265076517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3094222.5185185187,
            "unit": "ns",
            "range": "± 129062.63832856448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2767357.4805194805,
            "unit": "ns",
            "range": "± 141852.3690742941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4898.923913043478,
            "unit": "ns",
            "range": "± 605.9171820552662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26483.47619047619,
            "unit": "ns",
            "range": "± 1657.2871756454301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22394.227272727272,
            "unit": "ns",
            "range": "± 757.2439889320908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29591.863157894735,
            "unit": "ns",
            "range": "± 5102.00247839862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1299.7659574468084,
            "unit": "ns",
            "range": "± 268.5337096851073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4861.860215053764,
            "unit": "ns",
            "range": "± 754.4156908466349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683192.9,
            "unit": "ns",
            "range": "± 37222.04488162442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1300960.3829787234,
            "unit": "ns",
            "range": "± 49908.58988606426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1090250.3384615385,
            "unit": "ns",
            "range": "± 45945.266096695465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9385185,
            "unit": "ns",
            "range": "± 1194433.515613497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2184039.4242424243,
            "unit": "ns",
            "range": "± 68464.9451959862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291203.1333333333,
            "unit": "ns",
            "range": "± 87029.85005303954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2555581.3928571427,
            "unit": "ns",
            "range": "± 40183.77747700468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2316949.230769231,
            "unit": "ns",
            "range": "± 38349.46661983242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3017784.534883721,
            "unit": "ns",
            "range": "± 164193.48436121098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3011520.6373697915,
            "unit": "ns",
            "range": "± 49067.30416239807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920541.5039713542,
            "unit": "ns",
            "range": "± 5395.475825167489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612639.2955078125,
            "unit": "ns",
            "range": "± 4675.572423063705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1623664.8930989583,
            "unit": "ns",
            "range": "± 14713.932132132682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459182.02689034597,
            "unit": "ns",
            "range": "± 845.8278140773288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428738.6446289063,
            "unit": "ns",
            "range": "± 1467.2954258921113"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1991162a1d98a3374ec4873608e2fb340fbfbdc",
          "message": "Merge pull request #3826 from limebell/chore/vp-followup\n\nFix `ValidatorSet.ValidateBlockCommitValidators()` behavior",
          "timestamp": "2024-06-14T15:19:39+09:00",
          "tree_id": "c80a492b39105394077e23ea54aa7847da02cb35",
          "url": "https://github.com/planetarium/libplanet/commit/e1991162a1d98a3374ec4873608e2fb340fbfbdc"
        },
        "date": 1718346525920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10774524.038461538,
            "unit": "ns",
            "range": "± 102421.88831219573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26587079.92857143,
            "unit": "ns",
            "range": "± 124178.55751758574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67647812.07142857,
            "unit": "ns",
            "range": "± 110337.6628713767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135839146.14285713,
            "unit": "ns",
            "range": "± 271202.2849259477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274118469.71428573,
            "unit": "ns",
            "range": "± 349719.6685066106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15587.520833333334,
            "unit": "ns",
            "range": "± 1363.170066844321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113294.62745098039,
            "unit": "ns",
            "range": "± 4624.616459603042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105154.23076923077,
            "unit": "ns",
            "range": "± 4322.965447401453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93856.51612903226,
            "unit": "ns",
            "range": "± 2822.056317309156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3134250.911764706,
            "unit": "ns",
            "range": "± 100170.0028679631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785762.488372093,
            "unit": "ns",
            "range": "± 150531.94202386533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4799.423529411764,
            "unit": "ns",
            "range": "± 559.5651878376423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27248.215909090908,
            "unit": "ns",
            "range": "± 2336.804097400775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22592.108695652172,
            "unit": "ns",
            "range": "± 1080.7100908715106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30209.85789473684,
            "unit": "ns",
            "range": "± 4942.065144433581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1262.372340425532,
            "unit": "ns",
            "range": "± 277.18757416185224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4689.284090909091,
            "unit": "ns",
            "range": "± 486.8303523075566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 684803.7555555556,
            "unit": "ns",
            "range": "± 39302.20472117555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1262504.4285714286,
            "unit": "ns",
            "range": "± 40664.03824329429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1054213.3396226414,
            "unit": "ns",
            "range": "± 40141.75302309373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9265677.43,
            "unit": "ns",
            "range": "± 1425923.5063852777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2173823.923076923,
            "unit": "ns",
            "range": "± 27314.96805008058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283315.119047619,
            "unit": "ns",
            "range": "± 81926.80038412708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2636097.6511627906,
            "unit": "ns",
            "range": "± 84344.13212516236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2360488.236842105,
            "unit": "ns",
            "range": "± 80819.85704737794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2983335.4464285714,
            "unit": "ns",
            "range": "± 126653.01572843091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3030555.99765625,
            "unit": "ns",
            "range": "± 30900.673955500413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920768.1287109375,
            "unit": "ns",
            "range": "± 7541.366738363413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612647.9142578125,
            "unit": "ns",
            "range": "± 4440.21032657708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1621281.0430989584,
            "unit": "ns",
            "range": "± 8333.833199726674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459480.33479817706,
            "unit": "ns",
            "range": "± 413.6227775913392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424110.8057942708,
            "unit": "ns",
            "range": "± 1073.8639551414497"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe7a64bef1538836ba5bc4836f9a81c108980094",
          "message": "Merge pull request #3841 from limebell/feat/nodestate-self\n\nAdd \"self\" field to NodeState query",
          "timestamp": "2024-06-20T17:48:30+09:00",
          "tree_id": "975d44e2d619fed29ca688f6b17f938ded44e481",
          "url": "https://github.com/planetarium/libplanet/commit/fe7a64bef1538836ba5bc4836f9a81c108980094"
        },
        "date": 1718877742515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10742375.357142856,
            "unit": "ns",
            "range": "± 135019.7756094709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26690289.14285714,
            "unit": "ns",
            "range": "± 91600.16371404345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67251255.57142857,
            "unit": "ns",
            "range": "± 74065.83614877767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136532966.5,
            "unit": "ns",
            "range": "± 144851.41402773163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274012521.14285713,
            "unit": "ns",
            "range": "± 356082.0393752967"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15741.239130434782,
            "unit": "ns",
            "range": "± 1108.608011159953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113207.18,
            "unit": "ns",
            "range": "± 4525.531912315695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105944.96875,
            "unit": "ns",
            "range": "± 4777.450020400071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89805.69230769231,
            "unit": "ns",
            "range": "± 2388.715985951126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3113469.918918919,
            "unit": "ns",
            "range": "± 103838.38611124351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2726025.74,
            "unit": "ns",
            "range": "± 172070.88067971088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4833.035294117647,
            "unit": "ns",
            "range": "± 423.3251718483655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27319.44318181818,
            "unit": "ns",
            "range": "± 2102.8172829492864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22213.908450704224,
            "unit": "ns",
            "range": "± 973.2184247193842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28113.484536082473,
            "unit": "ns",
            "range": "± 5634.035511797549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1285.3684210526317,
            "unit": "ns",
            "range": "± 224.95839107613997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4772.586021505376,
            "unit": "ns",
            "range": "± 644.3160791965179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 675000.9029850747,
            "unit": "ns",
            "range": "± 27782.63767724079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1256674.1176470588,
            "unit": "ns",
            "range": "± 38032.241732680086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1061991.7272727273,
            "unit": "ns",
            "range": "± 52186.127605815236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11130956.5,
            "unit": "ns",
            "range": "± 2183470.834650503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2158097.611111111,
            "unit": "ns",
            "range": "± 44308.2906027076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273915.263157895,
            "unit": "ns",
            "range": "± 67781.26195011787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2560036.8076923075,
            "unit": "ns",
            "range": "± 30598.44676990597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2343563.1639344264,
            "unit": "ns",
            "range": "± 104840.06767424058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2877311.1,
            "unit": "ns",
            "range": "± 101520.86716224579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3054676.596875,
            "unit": "ns",
            "range": "± 46327.48177230374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924146.5159040178,
            "unit": "ns",
            "range": "± 5580.283331016152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615899.7366536459,
            "unit": "ns",
            "range": "± 4345.8763801606765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1617906.9864583334,
            "unit": "ns",
            "range": "± 5677.851266598279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469799.07122395834,
            "unit": "ns",
            "range": "± 616.1721462936277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 431867.53854166664,
            "unit": "ns",
            "range": "± 1132.6777831107613"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "2e5122639d6ec9c4bb3a03ab60b3147f8f491f82",
          "message": "temp: fix build error due to rebase",
          "timestamp": "2024-06-20T18:30:37+09:00",
          "tree_id": "40ceaa3f38c0b730776d3580087a7cae144844ec",
          "url": "https://github.com/planetarium/libplanet/commit/2e5122639d6ec9c4bb3a03ab60b3147f8f491f82"
        },
        "date": 1718878305886,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10994719.954545455,
            "unit": "ns",
            "range": "± 249683.05214420432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26880113.42857143,
            "unit": "ns",
            "range": "± 286475.85739645315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67918158.14285715,
            "unit": "ns",
            "range": "± 96949.60674483431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136708612.69230768,
            "unit": "ns",
            "range": "± 213773.7101607619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274398139.26666665,
            "unit": "ns",
            "range": "± 470585.56185587496"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15777.8375,
            "unit": "ns",
            "range": "± 790.734715932602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113073.47916666667,
            "unit": "ns",
            "range": "± 4409.107354003892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105996.31578947368,
            "unit": "ns",
            "range": "± 3396.540959884981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91973.45652173914,
            "unit": "ns",
            "range": "± 3540.6566415882785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3099443.2592592593,
            "unit": "ns",
            "range": "± 162412.56562422885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2666037.03,
            "unit": "ns",
            "range": "± 172935.69829271527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4883.304347826087,
            "unit": "ns",
            "range": "± 508.23105715158357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26839.5,
            "unit": "ns",
            "range": "± 1601.2645792650846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22020.72340425532,
            "unit": "ns",
            "range": "± 848.8110790503349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30730.610526315788,
            "unit": "ns",
            "range": "± 4808.820132849719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1135.1935483870968,
            "unit": "ns",
            "range": "± 220.54503917737605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4654.017241379311,
            "unit": "ns",
            "range": "± 364.7789665903451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 677545.9133333333,
            "unit": "ns",
            "range": "± 30697.21736755028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1297057.866197183,
            "unit": "ns",
            "range": "± 63308.65787986425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1069341.1538461538,
            "unit": "ns",
            "range": "± 53761.48963736005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10935329.38,
            "unit": "ns",
            "range": "± 2013702.1033783269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2148000.230769231,
            "unit": "ns",
            "range": "± 22888.944599062983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2265939.4615384615,
            "unit": "ns",
            "range": "± 34963.35722251556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2604550.71875,
            "unit": "ns",
            "range": "± 69166.71031679459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2327791.4166666665,
            "unit": "ns",
            "range": "± 60290.93113354011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2933053.5,
            "unit": "ns",
            "range": "± 90859.21539286178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3044500.989676339,
            "unit": "ns",
            "range": "± 42522.68223191431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921983.0782552083,
            "unit": "ns",
            "range": "± 7876.54677374068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610827.8720703125,
            "unit": "ns",
            "range": "± 3311.4350563347075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1640634.491908482,
            "unit": "ns",
            "range": "± 1939.3155887985508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459432.17940848216,
            "unit": "ns",
            "range": "± 716.3160398727977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421625.69309895835,
            "unit": "ns",
            "range": "± 1683.033289898348"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff3ac3ed0c4017a30779c83a9fd956c4573255bf",
          "message": "Merge pull request #3867 from planetarium/feature/remove-feecollector\n\nRemove `IFeeCollector` and its implementation",
          "timestamp": "2024-07-03T19:12:31+09:00",
          "tree_id": "07d0f8f57eaa6f486b6b23cd83a7e4cc91907561",
          "url": "https://github.com/planetarium/libplanet/commit/ff3ac3ed0c4017a30779c83a9fd956c4573255bf"
        },
        "date": 1720002787619,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10667613.884615384,
            "unit": "ns",
            "range": "± 122998.06025810492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26661644.733333334,
            "unit": "ns",
            "range": "± 120651.24741434751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67509684.14285715,
            "unit": "ns",
            "range": "± 78065.48534783734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136008746.85714287,
            "unit": "ns",
            "range": "± 101263.54172508875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274655721.53333336,
            "unit": "ns",
            "range": "± 716567.4437179026"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15604.29292929293,
            "unit": "ns",
            "range": "± 1361.297394763654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110333,
            "unit": "ns",
            "range": "± 2628.7139180110676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106292.04761904762,
            "unit": "ns",
            "range": "± 3431.6920448023952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92989.3,
            "unit": "ns",
            "range": "± 3298.3039168950345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3115899.2592592593,
            "unit": "ns",
            "range": "± 130076.10420713369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2742338.034883721,
            "unit": "ns",
            "range": "± 148078.07999759872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4957.465909090909,
            "unit": "ns",
            "range": "± 464.0124093877563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27865.73033707865,
            "unit": "ns",
            "range": "± 2490.3358744082407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22007.060975609755,
            "unit": "ns",
            "range": "± 1162.9169486981461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29923.76595744681,
            "unit": "ns",
            "range": "± 5133.4655781922365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1295.989010989011,
            "unit": "ns",
            "range": "± 205.13288346313436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4738.352272727273,
            "unit": "ns",
            "range": "± 409.7393351307585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 673822.7192982456,
            "unit": "ns",
            "range": "± 23907.45022683036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1282126.5135135136,
            "unit": "ns",
            "range": "± 42716.431299014475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1067043.5294117648,
            "unit": "ns",
            "range": "± 57183.17662056531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10986622.44,
            "unit": "ns",
            "range": "± 2094630.7751318808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159422.5,
            "unit": "ns",
            "range": "± 30558.23325226771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2289707.0566037735,
            "unit": "ns",
            "range": "± 92964.97348472684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2552102.230769231,
            "unit": "ns",
            "range": "± 27200.19373752647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2337990.617647059,
            "unit": "ns",
            "range": "± 95326.34315752328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4054420.5555555555,
            "unit": "ns",
            "range": "± 969884.3556607938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3046625.8227539062,
            "unit": "ns",
            "range": "± 59348.78664942304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917008.4079938616,
            "unit": "ns",
            "range": "± 4340.848762618003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614642.3858072917,
            "unit": "ns",
            "range": "± 4385.727282049368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1622172.6947916667,
            "unit": "ns",
            "range": "± 17596.491023280098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464037.58461216517,
            "unit": "ns",
            "range": "± 881.0605752805269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424385.2927058293,
            "unit": "ns",
            "range": "± 1144.075820664808"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d38202c80aea945ee74241f3d80ebf133d6dfff",
          "message": "Merge pull request #3868 from planetarium/introduce/gas-tracer\n\nwip: Introduce/gas tracer",
          "timestamp": "2024-07-12T11:58:22+09:00",
          "tree_id": "febb1fcfd6b9413d5a7f3a4f1c6c55a67c41dc82",
          "url": "https://github.com/planetarium/libplanet/commit/0d38202c80aea945ee74241f3d80ebf133d6dfff"
        },
        "date": 1720753655588,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10971367.666666666,
            "unit": "ns",
            "range": "± 94413.62348857513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26951566.4,
            "unit": "ns",
            "range": "± 92582.16645908185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68215961.64285715,
            "unit": "ns",
            "range": "± 215090.50277199314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135931893.2142857,
            "unit": "ns",
            "range": "± 694735.4320985108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279352258.6666667,
            "unit": "ns",
            "range": "± 551849.4936169083"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15638.791666666666,
            "unit": "ns",
            "range": "± 1223.8455605754964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111354.07692307692,
            "unit": "ns",
            "range": "± 5147.407163768511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104530.1129032258,
            "unit": "ns",
            "range": "± 2686.025324743103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92555.57894736843,
            "unit": "ns",
            "range": "± 2983.5037051198256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3121608.1860465114,
            "unit": "ns",
            "range": "± 113859.20978522972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2715431.14,
            "unit": "ns",
            "range": "± 187895.53882861987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4990.922222222222,
            "unit": "ns",
            "range": "± 542.4022146175037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26854.64367816092,
            "unit": "ns",
            "range": "± 1626.1311624850314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23121.145833333332,
            "unit": "ns",
            "range": "± 1943.0615559183193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28549.875,
            "unit": "ns",
            "range": "± 5413.992248648039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1109.9021739130435,
            "unit": "ns",
            "range": "± 178.10288789500532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4869.891304347826,
            "unit": "ns",
            "range": "± 604.5024555985307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 707521.8229166666,
            "unit": "ns",
            "range": "± 65770.10785951717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1260103.7741935484,
            "unit": "ns",
            "range": "± 36992.710836694736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1065509.5731707318,
            "unit": "ns",
            "range": "± 52598.58220476452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10965230.69,
            "unit": "ns",
            "range": "± 2020438.8462984846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2191169.4565217393,
            "unit": "ns",
            "range": "± 83815.2086514551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2311948.0625,
            "unit": "ns",
            "range": "± 70938.94249552261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2556407.230769231,
            "unit": "ns",
            "range": "± 31695.215380647613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2305246.28,
            "unit": "ns",
            "range": "± 91956.03842387882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2888460.048780488,
            "unit": "ns",
            "range": "± 101510.53396691183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3065750.0989583335,
            "unit": "ns",
            "range": "± 42753.082039539004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928498.0520833334,
            "unit": "ns",
            "range": "± 5667.943481824109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613255.335546875,
            "unit": "ns",
            "range": "± 5299.167406227257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1626563.6760416667,
            "unit": "ns",
            "range": "± 9313.226068163383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458429.62374441966,
            "unit": "ns",
            "range": "± 930.4399887667707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428250.7369907924,
            "unit": "ns",
            "range": "± 913.9646031515789"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "bf23258b231b4c3302d281e763e5e54d63bde93f",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-12T18:04:42+09:00",
          "tree_id": "febb1fcfd6b9413d5a7f3a4f1c6c55a67c41dc82",
          "url": "https://github.com/planetarium/libplanet/commit/bf23258b231b4c3302d281e763e5e54d63bde93f"
        },
        "date": 1720775682820,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10981628.333333334,
            "unit": "ns",
            "range": "± 90217.7243383354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27032484.785714287,
            "unit": "ns",
            "range": "± 259727.2829785352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67551933.8,
            "unit": "ns",
            "range": "± 111087.44578239768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135668053.06666666,
            "unit": "ns",
            "range": "± 177298.6951545195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278778396.6923077,
            "unit": "ns",
            "range": "± 346360.56656115473"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15165.270833333334,
            "unit": "ns",
            "range": "± 1290.2463859292566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111536.4857142857,
            "unit": "ns",
            "range": "± 3608.3952060473102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105170.97260273973,
            "unit": "ns",
            "range": "± 5200.193134694889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94716.8431372549,
            "unit": "ns",
            "range": "± 3808.3057302299094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3146592.867647059,
            "unit": "ns",
            "range": "± 149439.10264269475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2666217.76,
            "unit": "ns",
            "range": "± 186498.4177596445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4990.67032967033,
            "unit": "ns",
            "range": "± 664.8777340391247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27361.724719101123,
            "unit": "ns",
            "range": "± 2352.9373699929406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22663.283018867925,
            "unit": "ns",
            "range": "± 934.3874459394094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28059.468085106382,
            "unit": "ns",
            "range": "± 4783.333115362015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1220.3118279569892,
            "unit": "ns",
            "range": "± 246.58321544903956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4605.355555555556,
            "unit": "ns",
            "range": "± 464.20463114399297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 690047.9157894737,
            "unit": "ns",
            "range": "± 46381.899115344815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1296027.8181818181,
            "unit": "ns",
            "range": "± 48250.75807153501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1046147.074074074,
            "unit": "ns",
            "range": "± 44082.11754058934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9324784.24,
            "unit": "ns",
            "range": "± 1281479.1144735096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2190985.3076923075,
            "unit": "ns",
            "range": "± 75319.97110264206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275509.230769231,
            "unit": "ns",
            "range": "± 93423.21086569174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2591963.5454545454,
            "unit": "ns",
            "range": "± 62437.06610562981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2270852.6315789474,
            "unit": "ns",
            "range": "± 46508.87270930203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3114618.89,
            "unit": "ns",
            "range": "± 232348.41646657107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3041591.644791667,
            "unit": "ns",
            "range": "± 31064.015143278975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923110.2569010417,
            "unit": "ns",
            "range": "± 6962.880785455272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615461.3417317708,
            "unit": "ns",
            "range": "± 5336.236695785571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1610646.1147135417,
            "unit": "ns",
            "range": "± 11123.0729285958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464731.4598563058,
            "unit": "ns",
            "range": "± 674.3028836320999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422731.4629882813,
            "unit": "ns",
            "range": "± 817.8886634999426"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "985c1f787a192654603dba83f7be5bff42d3aa20",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-12T18:16:18+09:00",
          "tree_id": "6512b68e13dce93054d5efa58408c2563d333d72",
          "url": "https://github.com/planetarium/libplanet/commit/985c1f787a192654603dba83f7be5bff42d3aa20"
        },
        "date": 1720776493257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10788577.857142856,
            "unit": "ns",
            "range": "± 155089.82110072518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26541716.4,
            "unit": "ns",
            "range": "± 91294.45156180867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67843795.76666667,
            "unit": "ns",
            "range": "± 92201.95650578808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137228910.53846154,
            "unit": "ns",
            "range": "± 230045.07821389244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274749706,
            "unit": "ns",
            "range": "± 377234.45341685624"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15235.68085106383,
            "unit": "ns",
            "range": "± 926.3215489788055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111025.6603773585,
            "unit": "ns",
            "range": "± 4565.236925958019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105353.27659574468,
            "unit": "ns",
            "range": "± 4005.1879166798894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91008.025,
            "unit": "ns",
            "range": "± 3196.272376053561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3118400.3260869565,
            "unit": "ns",
            "range": "± 119053.98852403137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2724848.23,
            "unit": "ns",
            "range": "± 184976.4743341379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4769.016483516483,
            "unit": "ns",
            "range": "± 481.6341941219466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26537.275862068964,
            "unit": "ns",
            "range": "± 1888.3538708673984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23324.755102040817,
            "unit": "ns",
            "range": "± 1861.566262510139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29440.075268817203,
            "unit": "ns",
            "range": "± 4697.409052817353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1286.2527472527472,
            "unit": "ns",
            "range": "± 196.86067229877148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4736.70786516854,
            "unit": "ns",
            "range": "± 524.2698863061239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 680245.3432835821,
            "unit": "ns",
            "range": "± 32225.023049831772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272199.888888889,
            "unit": "ns",
            "range": "± 40404.02733517523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1054725.4032258065,
            "unit": "ns",
            "range": "± 40814.43602671738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9418409.68,
            "unit": "ns",
            "range": "± 1462823.4133050828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2163953.3225806453,
            "unit": "ns",
            "range": "± 64398.27086984406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2295855.9565217393,
            "unit": "ns",
            "range": "± 87050.36303012093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2592083.714285714,
            "unit": "ns",
            "range": "± 45946.02109905889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2348372.117647059,
            "unit": "ns",
            "range": "± 47883.773394390024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3042857.52020202,
            "unit": "ns",
            "range": "± 206850.07987724847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3044269.3997395835,
            "unit": "ns",
            "range": "± 51108.41430085209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921215.6200474331,
            "unit": "ns",
            "range": "± 3485.922441006739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614939.8597005209,
            "unit": "ns",
            "range": "± 4345.449947402857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1628116.7634114583,
            "unit": "ns",
            "range": "± 10995.973721627757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 456702.8776855469,
            "unit": "ns",
            "range": "± 729.1607693321598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 431922.6085030692,
            "unit": "ns",
            "range": "± 617.8357107808356"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "f47f4f3b5efd77becd70bf7b6a8d5d1dd1b4f017",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-29T16:28:24+09:00",
          "tree_id": "a6924fe3b7bfaa97a107d6e019ffae7a755be977",
          "url": "https://github.com/planetarium/libplanet/commit/f47f4f3b5efd77becd70bf7b6a8d5d1dd1b4f017"
        },
        "date": 1722308490954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10891597.92857143,
            "unit": "ns",
            "range": "± 100501.43129747287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27253281.766666666,
            "unit": "ns",
            "range": "± 127334.28950122176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67422975.4,
            "unit": "ns",
            "range": "± 115136.63293595384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136033386.46666667,
            "unit": "ns",
            "range": "± 342005.21201852773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273204766.2307692,
            "unit": "ns",
            "range": "± 236477.58427391303"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13758.560606060606,
            "unit": "ns",
            "range": "± 432.6358124475148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111483.43181818182,
            "unit": "ns",
            "range": "± 4134.187771512907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105373.31147540984,
            "unit": "ns",
            "range": "± 4699.1849773515105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90796.79166666667,
            "unit": "ns",
            "range": "± 3130.7922045409186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3056129.649484536,
            "unit": "ns",
            "range": "± 175574.93015869329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2700147.85,
            "unit": "ns",
            "range": "± 187328.0118274891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4830.788888888889,
            "unit": "ns",
            "range": "± 428.1432999223677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26673.166666666668,
            "unit": "ns",
            "range": "± 2347.7735490632735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22761.9793814433,
            "unit": "ns",
            "range": "± 1345.7601629700268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30329.822916666668,
            "unit": "ns",
            "range": "± 5152.748641044418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1349.6555555555556,
            "unit": "ns",
            "range": "± 268.4942265447995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4768.648351648351,
            "unit": "ns",
            "range": "± 645.5337218771658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 679608.1369863014,
            "unit": "ns",
            "range": "± 27977.498977509225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1295347.9142857143,
            "unit": "ns",
            "range": "± 42541.326806220015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1063521.1857142858,
            "unit": "ns",
            "range": "± 51616.38899775835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9684731.69,
            "unit": "ns",
            "range": "± 1271514.9692717397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2167206.314285714,
            "unit": "ns",
            "range": "± 60623.26681174259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2321280.966666667,
            "unit": "ns",
            "range": "± 87148.36312487719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2568958.6923076925,
            "unit": "ns",
            "range": "± 27277.855797284283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2282307.3125,
            "unit": "ns",
            "range": "± 36856.6836385094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3113664.505376344,
            "unit": "ns",
            "range": "± 346295.23690975475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3064174.5923177083,
            "unit": "ns",
            "range": "± 43687.17824639403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923516.0240885416,
            "unit": "ns",
            "range": "± 4859.364887143123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614997.6451171875,
            "unit": "ns",
            "range": "± 5429.159337486068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1633696.901171875,
            "unit": "ns",
            "range": "± 23060.144347595324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457200.0759765625,
            "unit": "ns",
            "range": "± 944.2535447893423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420936.15989583335,
            "unit": "ns",
            "range": "± 1554.4468209502713"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "cc6231734c0a453136406364b913e301cca2fa30",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-08-02T16:46:46+09:00",
          "tree_id": "d54846787daf405e740697a05174fd66793ff8b8",
          "url": "https://github.com/planetarium/libplanet/commit/cc6231734c0a453136406364b913e301cca2fa30"
        },
        "date": 1722585616846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10734483.615384616,
            "unit": "ns",
            "range": "± 88549.45018042975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26816961,
            "unit": "ns",
            "range": "± 388901.9723315692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67409408.06666666,
            "unit": "ns",
            "range": "± 128776.50015237734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136008846.93333334,
            "unit": "ns",
            "range": "± 286017.98288780637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274372342.4285714,
            "unit": "ns",
            "range": "± 223109.44690157176"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14186.85,
            "unit": "ns",
            "range": "± 322.58124639587436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112096.23255813954,
            "unit": "ns",
            "range": "± 4111.6440277941965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105291.38775510204,
            "unit": "ns",
            "range": "± 4194.026718721156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93344.19444444444,
            "unit": "ns",
            "range": "± 3119.4846077924426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3142583.1052631577,
            "unit": "ns",
            "range": "± 68997.23235503705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2791320.564516129,
            "unit": "ns",
            "range": "± 157685.80768695418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4830.360465116279,
            "unit": "ns",
            "range": "± 432.15457236804133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27398,
            "unit": "ns",
            "range": "± 1519.3418297096996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24281.01020408163,
            "unit": "ns",
            "range": "± 2070.4743430068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30910.74226804124,
            "unit": "ns",
            "range": "± 5807.120541625225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1220.7222222222222,
            "unit": "ns",
            "range": "± 205.9535252351948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5063.935483870968,
            "unit": "ns",
            "range": "± 364.92881397703746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 684061.8941176471,
            "unit": "ns",
            "range": "± 36707.2523390988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1268297,
            "unit": "ns",
            "range": "± 32459.913916314465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1082385.1529411764,
            "unit": "ns",
            "range": "± 58326.48091939558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9361543.176767677,
            "unit": "ns",
            "range": "± 1310348.8871395956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185240.785714286,
            "unit": "ns",
            "range": "± 37259.12667992299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2295798.1627906975,
            "unit": "ns",
            "range": "± 84036.35338038453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2557018.933333333,
            "unit": "ns",
            "range": "± 32533.70767695443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2375904.120689655,
            "unit": "ns",
            "range": "± 103574.1441373869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3103828.46,
            "unit": "ns",
            "range": "± 295148.5107726303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3002333.7610294116,
            "unit": "ns",
            "range": "± 60082.40794816187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918074.7362630208,
            "unit": "ns",
            "range": "± 4982.701110043641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614540.3016927083,
            "unit": "ns",
            "range": "± 8589.941084168067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1665443.5274832589,
            "unit": "ns",
            "range": "± 835.3054386462439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468027.9364908854,
            "unit": "ns",
            "range": "± 806.6161212637169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420563.23756510415,
            "unit": "ns",
            "range": "± 1272.847154537181"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "7ea0e5a69474f0b819e2329cb59d08e625b9f00e",
          "message": "feat: Upgrade BPV to handle vote power",
          "timestamp": "2024-10-08T11:46:39+09:00",
          "tree_id": "d830b82445d1f1b3f72fb10ed19bb76935908cc0",
          "url": "https://github.com/planetarium/libplanet/commit/7ea0e5a69474f0b819e2329cb59d08e625b9f00e"
        },
        "date": 1728377358221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10719745.192307692,
            "unit": "ns",
            "range": "± 86138.1693070157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26725574.714285713,
            "unit": "ns",
            "range": "± 182848.0131965127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66851486.4,
            "unit": "ns",
            "range": "± 90972.18705171064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134808708.7142857,
            "unit": "ns",
            "range": "± 165477.32012130084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272106856.15384614,
            "unit": "ns",
            "range": "± 197752.47055003137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13877.260869565218,
            "unit": "ns",
            "range": "± 349.7845073484926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110749.57142857143,
            "unit": "ns",
            "range": "± 4399.815342642309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107325.28125,
            "unit": "ns",
            "range": "± 4902.962824591412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91024.42105263157,
            "unit": "ns",
            "range": "± 2013.7964510344214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2934915.696969697,
            "unit": "ns",
            "range": "± 188258.19298616843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2714664.638888889,
            "unit": "ns",
            "range": "± 132896.5349700693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5009.6741573033705,
            "unit": "ns",
            "range": "± 515.7295092496931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27178.25842696629,
            "unit": "ns",
            "range": "± 1581.5477713022563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22306.58823529412,
            "unit": "ns",
            "range": "± 1068.7745840453529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27555.833333333332,
            "unit": "ns",
            "range": "± 3889.0096086836948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1188.321052631579,
            "unit": "ns",
            "range": "± 234.24922983807497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5065.5,
            "unit": "ns",
            "range": "± 538.6751519745817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 703732.2150537635,
            "unit": "ns",
            "range": "± 43975.90364690583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1292599.1714285715,
            "unit": "ns",
            "range": "± 41685.785552706315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1082688.706521739,
            "unit": "ns",
            "range": "± 64431.00635777437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9373370.81,
            "unit": "ns",
            "range": "± 1460748.9011054023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182580.810810811,
            "unit": "ns",
            "range": "± 73611.53684784813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2268822.7924528304,
            "unit": "ns",
            "range": "± 93364.21090656791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2593527.3,
            "unit": "ns",
            "range": "± 58927.79174915329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2310509,
            "unit": "ns",
            "range": "± 49291.54561044588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3124290.0707070706,
            "unit": "ns",
            "range": "± 268138.9156516485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3028271.94140625,
            "unit": "ns",
            "range": "± 40349.80462114488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921940.2236328125,
            "unit": "ns",
            "range": "± 5021.255993576228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618312.1927734375,
            "unit": "ns",
            "range": "± 5490.133375445659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1624784.515234375,
            "unit": "ns",
            "range": "± 24075.28408819416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463113.3055338542,
            "unit": "ns",
            "range": "± 646.1073129117631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418905.1446289063,
            "unit": "ns",
            "range": "± 1173.7244818773133"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "e87d526d07f2639f61ffba2a557b170cd43f9ff3",
          "message": "feat: Upgrade BPV to handle vote power",
          "timestamp": "2024-10-08T13:06:55+09:00",
          "tree_id": "93ff63e40a7217404d7236fa4adee603bed5f7e6",
          "url": "https://github.com/planetarium/libplanet/commit/e87d526d07f2639f61ffba2a557b170cd43f9ff3"
        },
        "date": 1728377893184,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10736898.131578946,
            "unit": "ns",
            "range": "± 233128.9766812951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26579146,
            "unit": "ns",
            "range": "± 220055.37371936464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67419068.71428572,
            "unit": "ns",
            "range": "± 60950.71134491007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135363463.64285713,
            "unit": "ns",
            "range": "± 185487.87053464717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272750214.26666665,
            "unit": "ns",
            "range": "± 448003.1644147596"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13949.333333333334,
            "unit": "ns",
            "range": "± 405.13602086496684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112884.48387096774,
            "unit": "ns",
            "range": "± 5129.685042873475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105506.8125,
            "unit": "ns",
            "range": "± 4560.003811175656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91760.58888888889,
            "unit": "ns",
            "range": "± 3490.714838371689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2955989.8160919542,
            "unit": "ns",
            "range": "± 161749.386142937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2681745.29,
            "unit": "ns",
            "range": "± 184145.1315852564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4928.881720430108,
            "unit": "ns",
            "range": "± 619.4388914216668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26488.5,
            "unit": "ns",
            "range": "± 1400.0659426177615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23265.282608695652,
            "unit": "ns",
            "range": "± 1924.1512147637038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29992.01052631579,
            "unit": "ns",
            "range": "± 4630.625424177274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1185.3440860215053,
            "unit": "ns",
            "range": "± 212.15578231591866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4841.346153846154,
            "unit": "ns",
            "range": "± 596.1507252192915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 694943.1851851852,
            "unit": "ns",
            "range": "± 34763.275743631784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1300392.847826087,
            "unit": "ns",
            "range": "± 49809.36645159886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1053972.1,
            "unit": "ns",
            "range": "± 48934.42697337428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8912556.17,
            "unit": "ns",
            "range": "± 1149789.1957957894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2173946.4318181816,
            "unit": "ns",
            "range": "± 57285.765695509595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2314103.7708333335,
            "unit": "ns",
            "range": "± 90782.88025511448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2543883.0384615385,
            "unit": "ns",
            "range": "± 34194.61791865153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2367970.2769230767,
            "unit": "ns",
            "range": "± 110404.41293822732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2924079.962962963,
            "unit": "ns",
            "range": "± 80616.85061949684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3054745.496875,
            "unit": "ns",
            "range": "± 30575.04602530594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921471.4439871652,
            "unit": "ns",
            "range": "± 3813.796307368548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612679.3267578125,
            "unit": "ns",
            "range": "± 6012.796304273747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1646416.596875,
            "unit": "ns",
            "range": "± 7218.695417155015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 470698.4700846354,
            "unit": "ns",
            "range": "± 1003.0130755844411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419732.8572265625,
            "unit": "ns",
            "range": "± 453.0148978007206"
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
          "id": "ac9cce38c1ab3ac27544eff030ee44b3ed3595dd",
          "message": "test: Change test hash values due to BPV updates",
          "timestamp": "2024-10-08T13:45:17+09:00",
          "tree_id": "9bf9aba8308c678276caeeca3678a4c3f5fbbdca",
          "url": "https://github.com/planetarium/libplanet/commit/ac9cce38c1ab3ac27544eff030ee44b3ed3595dd"
        },
        "date": 1728378930100,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10713064.307692308,
            "unit": "ns",
            "range": "± 173327.94603457375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26659062.785714287,
            "unit": "ns",
            "range": "± 154238.81067915357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66673877.266666666,
            "unit": "ns",
            "range": "± 168058.5715047273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137567157.6153846,
            "unit": "ns",
            "range": "± 236530.44671970472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274423160.0714286,
            "unit": "ns",
            "range": "± 331411.4795707931"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14028.083333333334,
            "unit": "ns",
            "range": "± 362.8420325426895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111849.64705882352,
            "unit": "ns",
            "range": "± 3581.4606456732486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105639.48,
            "unit": "ns",
            "range": "± 3739.278366700381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90044.04761904762,
            "unit": "ns",
            "range": "± 2132.0261132591804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2975982.7901234566,
            "unit": "ns",
            "range": "± 156686.7374631398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2759664.474747475,
            "unit": "ns",
            "range": "± 169852.25959659248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5006.954545454545,
            "unit": "ns",
            "range": "± 595.4328843364433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27019.055555555555,
            "unit": "ns",
            "range": "± 1711.470124087168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23893.205263157895,
            "unit": "ns",
            "range": "± 1668.0294838564926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28204.59574468085,
            "unit": "ns",
            "range": "± 4748.521728247393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1253.34375,
            "unit": "ns",
            "range": "± 196.4432596866479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5077.795698924731,
            "unit": "ns",
            "range": "± 571.2513259263421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 704096.3478260869,
            "unit": "ns",
            "range": "± 40282.101157436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1286400.6458333333,
            "unit": "ns",
            "range": "± 47498.76806890245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1066262.4430379746,
            "unit": "ns",
            "range": "± 54384.51902078122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9117858.7,
            "unit": "ns",
            "range": "± 1306438.5876674093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2180294.8260869565,
            "unit": "ns",
            "range": "± 53357.28601576714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2224527.5,
            "unit": "ns",
            "range": "± 15923.323959182986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2594599.269230769,
            "unit": "ns",
            "range": "± 40328.226238276846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2250769.6153846155,
            "unit": "ns",
            "range": "± 25863.416626380662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3068685.3163265307,
            "unit": "ns",
            "range": "± 309838.85096333595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3030461.23203125,
            "unit": "ns",
            "range": "± 47907.89606599023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928331.9005859375,
            "unit": "ns",
            "range": "± 5271.8418612214455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 611970.4594401042,
            "unit": "ns",
            "range": "± 5314.455111371166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1623757.5404947917,
            "unit": "ns",
            "range": "± 15581.44587112182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465147.3648111979,
            "unit": "ns",
            "range": "± 1192.2271894986864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418266.1728166853,
            "unit": "ns",
            "range": "± 1293.544400267066"
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
          "id": "c045fc891af5dfeb196e399ee3e227d5410c3177",
          "message": "test: Change test hash values due to BPV updates",
          "timestamp": "2024-10-08T14:11:59+09:00",
          "tree_id": "7d6f4b988ace2bcbd5a789a69c3c02a5e7ae15f2",
          "url": "https://github.com/planetarium/libplanet/commit/c045fc891af5dfeb196e399ee3e227d5410c3177"
        },
        "date": 1728379971985,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10721658,
            "unit": "ns",
            "range": "± 124366.9286754073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26439594.714285713,
            "unit": "ns",
            "range": "± 161948.3765280342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67118938.46666667,
            "unit": "ns",
            "range": "± 113781.26928947405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135637274.9,
            "unit": "ns",
            "range": "± 190855.64009398757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272355641.8,
            "unit": "ns",
            "range": "± 527810.1495139003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14020.542857142857,
            "unit": "ns",
            "range": "± 345.3993718153236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112245.78378378379,
            "unit": "ns",
            "range": "± 3134.314342307803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106641.54385964913,
            "unit": "ns",
            "range": "± 4362.2988577050555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93002.92307692308,
            "unit": "ns",
            "range": "± 2539.7075882562062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2976785.144329897,
            "unit": "ns",
            "range": "± 172590.76852068966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2726130.26,
            "unit": "ns",
            "range": "± 172011.76302659538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5389.478021978022,
            "unit": "ns",
            "range": "± 517.7063083774639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27125.170588235294,
            "unit": "ns",
            "range": "± 1510.9594112937086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22650.83146067416,
            "unit": "ns",
            "range": "± 1365.7347276362661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28995.164948453606,
            "unit": "ns",
            "range": "± 5590.371114843385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1137.9247311827958,
            "unit": "ns",
            "range": "± 195.59742577211225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4647.393258426966,
            "unit": "ns",
            "range": "± 342.41547125390633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 714779.4175824176,
            "unit": "ns",
            "range": "± 45341.49046760249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1281837.358974359,
            "unit": "ns",
            "range": "± 41906.28631808132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1051736.4561403508,
            "unit": "ns",
            "range": "± 44438.269673089446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9092272.44,
            "unit": "ns",
            "range": "± 1336542.4656878344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141651,
            "unit": "ns",
            "range": "± 27114.764231564568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2233701.6153846155,
            "unit": "ns",
            "range": "± 18033.12506444026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2557589.4615384615,
            "unit": "ns",
            "range": "± 29620.90011184497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2261336,
            "unit": "ns",
            "range": "± 22598.065684183384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3139810.409090909,
            "unit": "ns",
            "range": "± 334466.0563104104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3056330.73984375,
            "unit": "ns",
            "range": "± 40346.81742341032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917203.3525390625,
            "unit": "ns",
            "range": "± 8021.875104550303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616522.1595703125,
            "unit": "ns",
            "range": "± 4878.560523241192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635446.0985677084,
            "unit": "ns",
            "range": "± 19458.64027328183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468397.6303059896,
            "unit": "ns",
            "range": "± 1058.1188681143694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422354.4203125,
            "unit": "ns",
            "range": "± 2069.818498280085"
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
          "id": "9f2ae3694898cc0c8de50f764c04667fb7c22a8f",
          "message": "test: Change test hash values due to BPV updates",
          "timestamp": "2024-10-21T10:26:58+09:00",
          "tree_id": "5a908570fa7869eea1d7f2eca1de3ec178e83caf",
          "url": "https://github.com/planetarium/libplanet/commit/9f2ae3694898cc0c8de50f764c04667fb7c22a8f"
        },
        "date": 1729474530050,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10604931.115384616,
            "unit": "ns",
            "range": "± 112374.84238664398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26598788.785714287,
            "unit": "ns",
            "range": "± 354927.8710057599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67027874.64285714,
            "unit": "ns",
            "range": "± 173462.25194087933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134116994.73333333,
            "unit": "ns",
            "range": "± 276397.0254306725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273136522.6666667,
            "unit": "ns",
            "range": "± 247371.40267727757"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13459.74358974359,
            "unit": "ns",
            "range": "± 474.10973179926884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54615.134146341465,
            "unit": "ns",
            "range": "± 2891.8693290587134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105824.16666666667,
            "unit": "ns",
            "range": "± 4591.9882572543565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94056.8947368421,
            "unit": "ns",
            "range": "± 3233.6492212232138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2889837.8218390807,
            "unit": "ns",
            "range": "± 158083.2748349628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2794791.5681818184,
            "unit": "ns",
            "range": "± 152822.03597294094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5082.181318681319,
            "unit": "ns",
            "range": "± 587.3412575916601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26957.011235955055,
            "unit": "ns",
            "range": "± 1739.8274372005849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23416.067415730337,
            "unit": "ns",
            "range": "± 1757.0742326492175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30067.53125,
            "unit": "ns",
            "range": "± 5888.777294147385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1238.7938144329896,
            "unit": "ns",
            "range": "± 254.84030694667106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4801.114942528736,
            "unit": "ns",
            "range": "± 571.5494734387199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 691353.7263157895,
            "unit": "ns",
            "range": "± 48270.88621110194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1283120.768292683,
            "unit": "ns",
            "range": "± 46100.11799335462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1051047.7875,
            "unit": "ns",
            "range": "± 48422.83385735553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8869773.61,
            "unit": "ns",
            "range": "± 1212439.584722629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2114049.9565217393,
            "unit": "ns",
            "range": "± 52662.47854668295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2267451.205128205,
            "unit": "ns",
            "range": "± 79186.45319024935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2541195.846153846,
            "unit": "ns",
            "range": "± 39039.024906380866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2277676.046875,
            "unit": "ns",
            "range": "± 104881.32226858742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2773276.0256410255,
            "unit": "ns",
            "range": "± 87550.49105651074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3023709.960677083,
            "unit": "ns",
            "range": "± 37177.71283172685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919069.3901692708,
            "unit": "ns",
            "range": "± 9766.18190438125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 619573.1421223958,
            "unit": "ns",
            "range": "± 5155.346621819638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1645441.312220982,
            "unit": "ns",
            "range": "± 9921.902800716065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457544.95082310267,
            "unit": "ns",
            "range": "± 819.8594008519017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425210.31907552085,
            "unit": "ns",
            "range": "± 963.6264226503275"
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
          "id": "fc7769ba71198c2391c999f25f83d3196468cf46",
          "message": "test: Add test code for additional changes",
          "timestamp": "2024-10-22T10:16:44+09:00",
          "tree_id": "b081b2b11fa0f46ab079aec6128b803709b66d0b",
          "url": "https://github.com/planetarium/libplanet/commit/fc7769ba71198c2391c999f25f83d3196468cf46"
        },
        "date": 1729560289530,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10668271.083333334,
            "unit": "ns",
            "range": "± 90925.58165430807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26683768.07142857,
            "unit": "ns",
            "range": "± 152575.8699424218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66607981.928571425,
            "unit": "ns",
            "range": "± 154445.03150795918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134468139.92857143,
            "unit": "ns",
            "range": "± 341206.7439115547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270103874.85714287,
            "unit": "ns",
            "range": "± 331475.5471189175"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13555.923076923076,
            "unit": "ns",
            "range": "± 477.25726178563855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54557.25352112676,
            "unit": "ns",
            "range": "± 2665.4161225289804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106854.93333333333,
            "unit": "ns",
            "range": "± 4043.94929268632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92230.828125,
            "unit": "ns",
            "range": "± 4273.247386234307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2906475.1746031744,
            "unit": "ns",
            "range": "± 133260.38205860174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2748153.413043478,
            "unit": "ns",
            "range": "± 154768.12820858878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5231.363636363636,
            "unit": "ns",
            "range": "± 578.5166362626073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26772.79775280899,
            "unit": "ns",
            "range": "± 1476.7813217493035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23636.57,
            "unit": "ns",
            "range": "± 2567.847442898428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30410.41052631579,
            "unit": "ns",
            "range": "± 5153.93941149242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1215.2978723404256,
            "unit": "ns",
            "range": "± 262.73036301755906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4797.56043956044,
            "unit": "ns",
            "range": "± 599.2995394401185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 689871.316091954,
            "unit": "ns",
            "range": "± 44546.854435586356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1294809.037037037,
            "unit": "ns",
            "range": "± 36277.43420288609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1045944.3424657534,
            "unit": "ns",
            "range": "± 51723.01335780471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8542493.181818182,
            "unit": "ns",
            "range": "± 1214774.5759516861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2127524.423076923,
            "unit": "ns",
            "range": "± 81133.12564057701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2255897.314814815,
            "unit": "ns",
            "range": "± 62622.18429907619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2528312.8,
            "unit": "ns",
            "range": "± 47061.59736770523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2234524.2352941176,
            "unit": "ns",
            "range": "± 90985.67048664053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2754986.4545454546,
            "unit": "ns",
            "range": "± 69445.86190024704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3054593.630598958,
            "unit": "ns",
            "range": "± 40446.689175894535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917712.6468098959,
            "unit": "ns",
            "range": "± 3945.1483227514755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610774.4768229167,
            "unit": "ns",
            "range": "± 6385.0790640503155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1625510.2294921875,
            "unit": "ns",
            "range": "± 8529.097124582215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 471218.53974609374,
            "unit": "ns",
            "range": "± 962.7206457769524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420956.45882161456,
            "unit": "ns",
            "range": "± 556.794168487104"
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
          "id": "20462ef1b171c8911565f12b7eec58bd72c59361",
          "message": "test: Add test code for additional changes",
          "timestamp": "2024-10-22T10:39:13+09:00",
          "tree_id": "81c38f4dfaa53629ac86f6fe48c3f3ff443c214a",
          "url": "https://github.com/planetarium/libplanet/commit/20462ef1b171c8911565f12b7eec58bd72c59361"
        },
        "date": 1729561661162,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10751684.583333334,
            "unit": "ns",
            "range": "± 85988.56577735768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26325794.35714286,
            "unit": "ns",
            "range": "± 153071.0110683209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66619794.2,
            "unit": "ns",
            "range": "± 132660.59245317944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133603285.61538461,
            "unit": "ns",
            "range": "± 210465.79160857253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269871572.6,
            "unit": "ns",
            "range": "± 246981.55550532226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12953.71052631579,
            "unit": "ns",
            "range": "± 559.6730785800028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54301.72602739726,
            "unit": "ns",
            "range": "± 2695.213108767891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103523.54761904762,
            "unit": "ns",
            "range": "± 3505.8613235021635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91330.2,
            "unit": "ns",
            "range": "± 3454.4977901017946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2872565.6391752576,
            "unit": "ns",
            "range": "± 167941.38411586903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2760270.0789473685,
            "unit": "ns",
            "range": "± 139691.6478620215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5035.977777777778,
            "unit": "ns",
            "range": "± 669.6785112943287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26719.477272727272,
            "unit": "ns",
            "range": "± 1520.0814934088141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22510.414285714287,
            "unit": "ns",
            "range": "± 1090.0436434934597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30201.947368421053,
            "unit": "ns",
            "range": "± 5586.9152040460085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1372.5934065934066,
            "unit": "ns",
            "range": "± 246.68725040341968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4911.204301075269,
            "unit": "ns",
            "range": "± 638.8795654203807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 686408.367816092,
            "unit": "ns",
            "range": "± 33122.99444007277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1306899.8260869565,
            "unit": "ns",
            "range": "± 50188.36796766728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1050180.4838709678,
            "unit": "ns",
            "range": "± 47664.3440222721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8716340.33,
            "unit": "ns",
            "range": "± 1292369.253145469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2091666,
            "unit": "ns",
            "range": "± 23035.781098832602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2241042,
            "unit": "ns",
            "range": "± 34203.541147080075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2590659.738095238,
            "unit": "ns",
            "range": "± 52074.89326912227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2252878,
            "unit": "ns",
            "range": "± 86151.87699910018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2813759.261904762,
            "unit": "ns",
            "range": "± 102152.21278074649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3015006.3196231616,
            "unit": "ns",
            "range": "± 60507.25536513511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924921.5467247596,
            "unit": "ns",
            "range": "± 7897.903011752621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616902.4135416667,
            "unit": "ns",
            "range": "± 5830.735354709589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1619302.7388392857,
            "unit": "ns",
            "range": "± 9425.621671999415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466545.05158342636,
            "unit": "ns",
            "range": "± 645.983892330644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 412467.0939453125,
            "unit": "ns",
            "range": "± 1191.601271267084"
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
          "id": "7d6004d5fcc4cb9261f614eb96f738fe55c28ea1",
          "message": "test: Add test code for additional changes",
          "timestamp": "2024-10-22T11:07:12+09:00",
          "tree_id": "df6525dc6c3df57a21bae839857e2c0e8710c824",
          "url": "https://github.com/planetarium/libplanet/commit/7d6004d5fcc4cb9261f614eb96f738fe55c28ea1"
        },
        "date": 1729563380371,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10814811.23076923,
            "unit": "ns",
            "range": "± 117592.92404176497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26196824.714285713,
            "unit": "ns",
            "range": "± 206539.67075728448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66495019.86666667,
            "unit": "ns",
            "range": "± 125853.45955053478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134462041.8,
            "unit": "ns",
            "range": "± 353770.6573139077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271534460.26666665,
            "unit": "ns",
            "range": "± 796247.1741433118"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14543.824175824177,
            "unit": "ns",
            "range": "± 1609.0355951687789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53694.48780487805,
            "unit": "ns",
            "range": "± 2786.5240050488783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105412.31818181818,
            "unit": "ns",
            "range": "± 3933.563339717401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93391.31578947368,
            "unit": "ns",
            "range": "± 3152.8173060216095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2867315.7448979593,
            "unit": "ns",
            "range": "± 171355.0301970177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2689222.82,
            "unit": "ns",
            "range": "± 172139.17684277653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5435.419354838709,
            "unit": "ns",
            "range": "± 719.5789276372532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26654.43956043956,
            "unit": "ns",
            "range": "± 1628.6012417531201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 25103.708333333332,
            "unit": "ns",
            "range": "± 3000.669339073557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31107.702127659573,
            "unit": "ns",
            "range": "± 4915.416086982615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1255.3956043956043,
            "unit": "ns",
            "range": "± 213.6831964027785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4990.39247311828,
            "unit": "ns",
            "range": "± 572.2979321078351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 691882.5107526882,
            "unit": "ns",
            "range": "± 46887.70525913242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1289516.1914893617,
            "unit": "ns",
            "range": "± 50101.686325277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1062505.611764706,
            "unit": "ns",
            "range": "± 50047.34272002435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8724259.65,
            "unit": "ns",
            "range": "± 1279423.2906645623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2127030.6363636362,
            "unit": "ns",
            "range": "± 41526.08149395298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249882.054054054,
            "unit": "ns",
            "range": "± 74882.23023593854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2531480.476190476,
            "unit": "ns",
            "range": "± 55811.56795917765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2252760,
            "unit": "ns",
            "range": "± 66972.3713677565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2879861.254237288,
            "unit": "ns",
            "range": "± 125577.53228989831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3037702.13515625,
            "unit": "ns",
            "range": "± 27864.692993740096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 915279.8805106027,
            "unit": "ns",
            "range": "± 5087.361284583713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610046.7125651041,
            "unit": "ns",
            "range": "± 5372.103333011571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1641922.027734375,
            "unit": "ns",
            "range": "± 21410.97048955768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460550.4325125558,
            "unit": "ns",
            "range": "± 552.5153074854371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422996.58880208334,
            "unit": "ns",
            "range": "± 1211.816000352671"
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
          "id": "69004c5ad9ccc0e9156648af0b7272f95eb26779",
          "message": "test: Add test code for additional changes",
          "timestamp": "2024-10-22T11:13:35+09:00",
          "tree_id": "3c13b720884b5e04999b9b4fadaf7d4229f0af0f",
          "url": "https://github.com/planetarium/libplanet/commit/69004c5ad9ccc0e9156648af0b7272f95eb26779"
        },
        "date": 1729564391702,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10562945.153846154,
            "unit": "ns",
            "range": "± 120294.31352024789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26246886.785714287,
            "unit": "ns",
            "range": "± 136996.09555268838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67268191.93333334,
            "unit": "ns",
            "range": "± 134990.1107994141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134654229.35714287,
            "unit": "ns",
            "range": "± 193098.28774590703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271151445.71428573,
            "unit": "ns",
            "range": "± 650812.7120080682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12867.458333333334,
            "unit": "ns",
            "range": "± 330.76787856857203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53631.52,
            "unit": "ns",
            "range": "± 2678.0616192979496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107364.30487804877,
            "unit": "ns",
            "range": "± 3833.7356209023606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91809.48837209302,
            "unit": "ns",
            "range": "± 3362.264510232105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2864414.3917525774,
            "unit": "ns",
            "range": "± 164696.87200445935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2759338.4431818184,
            "unit": "ns",
            "range": "± 151941.52520456997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5324.538461538462,
            "unit": "ns",
            "range": "± 955.9752821966372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27460.775280898877,
            "unit": "ns",
            "range": "± 1806.8066113299615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23127.09677419355,
            "unit": "ns",
            "range": "± 1519.1156256227569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31278.63829787234,
            "unit": "ns",
            "range": "± 4668.128143312743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1262.021505376344,
            "unit": "ns",
            "range": "± 237.95505505902588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5129.752688172043,
            "unit": "ns",
            "range": "± 626.3292934425284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 691116.3218390804,
            "unit": "ns",
            "range": "± 41239.275994731455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1270969.2391304348,
            "unit": "ns",
            "range": "± 38236.09102024176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1042674.5416666666,
            "unit": "ns",
            "range": "± 50966.263840203406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8876308.29,
            "unit": "ns",
            "range": "± 1108685.7542015768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2138794.8571428573,
            "unit": "ns",
            "range": "± 37483.84559299593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273784.6315789474,
            "unit": "ns",
            "range": "± 48412.84347522592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2522604.5384615385,
            "unit": "ns",
            "range": "± 52378.95834797081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2258700.588235294,
            "unit": "ns",
            "range": "± 90754.65527501638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2778868.6,
            "unit": "ns",
            "range": "± 67263.46723705225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3064205.3682291666,
            "unit": "ns",
            "range": "± 21915.82409068396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922376.6986328125,
            "unit": "ns",
            "range": "± 5914.072528768541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616559.364453125,
            "unit": "ns",
            "range": "± 4845.268922853404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1653862.858984375,
            "unit": "ns",
            "range": "± 12396.940352815489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467821.56611328124,
            "unit": "ns",
            "range": "± 1127.206945573444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421515.77779715403,
            "unit": "ns",
            "range": "± 965.0665199911375"
          }
        ]
      }
    ]
  }
}