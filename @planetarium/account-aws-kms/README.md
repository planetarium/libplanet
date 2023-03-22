@planetarium/account-aws-kms
============================

An npm package for providing `AwsKmsKeyStore`, an implementation of `KeyStore`
from *@planetarium/account* that uses AWS KMS as the backend.

Required permissions
--------------------

| Method                      | Required permissions                | Required for `AwsKmsKeyStoreOptions.scopingTags` |
|-----------------------------|-------------------------------------|--------------------------------------------------|
| `AwsKmsKeyStore.list()`     | `kms:ListKeys`                      | `kms:ListResourceTags`                           |
| `AwsKmsKeyStore.get()`      | `kms:ListKeys`                      | `kms:ListResourceTags`                           |
| `AwsKmsKeyStore.generate()` | `kms:CreateKey`, `kms:GetPublicKey` | `kms:TagResource`                                |
| `AwsKmsKeyStore.delete()`   | `kms:ScheduleKeyDeletion`           |                                                  |
| `AwsKmsAccount.sign()`[^1]  | `kms:Sign`                          |                                                  |

Replace `[NUMERIC_ROOT_ACCOUNT_ID]` with your [12-digit root account ID][AWSId]:

~~~~ json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "kms:GetPublicKey",
        "kms:ScheduleKeyDeletion",
        "kms:DescribeKey",
        "kms:ListResourceTags",
        "kms:Sign",
        "kms:TagResource"
      ],
      "Resource": "arn:aws:kms:*:[NUMERIC_ROOT_ACCOUNT_ID]:key/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "kms:ListKeys",
        "kms:CreateKey"
      ],
      "Resource": "*"
    }
  ]
}
~~~~

[^1]: An `AwsKmsAccount` instance can be obtained from `AwsKmsKeyStore.get()`.
[AWSId]: https://docs.aws.amazon.com/signin/latest/userguide/FindingYourAWSId.html
