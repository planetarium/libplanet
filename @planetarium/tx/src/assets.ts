import { encode, RecordValue, RecordView, Value } from "@planetarium/bencodex";
import { Address, encodeAddressSet } from "./address.js";

export interface Currency {
  ticker: string;
  decimalPlaces: number;
  minters: Set<Address> | null;
  totalSupplyTrackable: boolean;
  maximumSupply: {
    major: bigint;
    minor: bigint;
  } | null;
}

export function encodeCurrency(currency: Currency): Value {
  const minters: Value =
    currency.minters === null ? null : encodeAddressSet(currency.minters);
  const serialized: RecordValue = {
    ticker: currency.ticker,
    decimals: BigInt(currency.decimalPlaces),
    minters,
  };

  if (currency.maximumSupply !== null) {
    if (!currency.totalSupplyTrackable) {
      throw new TypeError("maximumSupply implies totalSupplyTrackable");
    }

    serialized.maximumSupplyMajor = currency.maximumSupply.major;
    serialized.maximumSupplyMinor = currency.maximumSupply.minor;
  }

  if (currency.totalSupplyTrackable) {
    serialized.totalSupplyTrackable = true;
  }

  return new RecordView(serialized, "text");
}

export async function getCurrencyHash(currency: Currency): Promise<Uint8Array> {
  const encoded = encode(encodeCurrency(currency));
  const buffer = await crypto.subtle.digest("SHA-1", encoded);
  return new Uint8Array(buffer);
}

export interface FungibleAssetValue {
  rawValue: bigint;
  currency: Currency;
}

export function encodeFungibleAssetValue(value: FungibleAssetValue): Value[] {
    return [encodeCurrency(value.currency), value.rawValue];
}

function abs(value: bigint): bigint {
  return value < 0n ? -value : value;
}

export function getSign(value: FungibleAssetValue): -1 | 0 | 1 {
  return value.rawValue < 0n ? -1 : value.rawValue > 0n ? 1 : 0;
}

export function getMajorUnit(value: FungibleAssetValue): bigint {
  return abs(value.rawValue) / 10n ** BigInt(value.currency.decimalPlaces);
}

export function getMinorUnit(value: FungibleAssetValue): bigint {
  return abs(value.rawValue) % 10n ** BigInt(value.currency.decimalPlaces);
}
