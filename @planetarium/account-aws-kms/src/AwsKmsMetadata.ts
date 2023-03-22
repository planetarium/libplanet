import { OriginType } from "@aws-sdk/client-kms";

export interface AwsKmsMetadata {
  customKeyStoreId?: string;
  description: string;
  multiRegion: boolean;
  origin: OriginType | string;
}

export default AwsKmsMetadata;
