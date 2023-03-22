import {
  Any,
  BitString,
  ObjectIdentifier,
  Sequence,
  verifySchema,
} from "asn1js";

// https://www.rfc-editor.org/rfc/rfc5280#section-4.1
const SubjectPublicKeyInfo = new Sequence({
  name: "subjectPublicKeyInfo",
  value: [
    new Sequence({
      name: "algorithm",
      value: [
        new ObjectIdentifier({
          name: "algorithm",
        }),
        new Any({
          name: "parameters",
          optional: true,
        }),
      ],
    }),
    new BitString({
      name: "subjectPublicKey",
    }),
  ],
});

export function parseSubjectPublicKeyInfo(buf: Uint8Array) {
  const { result, verified } = verifySchema(buf, SubjectPublicKeyInfo);
  if (!verified) {
    throw new RangeError("Failed to verify SubjectPublicKeyInfo data");
  }
  const bitstring: BitString = (result as typeof SubjectPublicKeyInfo)
    .valueBlock.value[1] as BitString;
  return bitstring.valueBlock.valueHexView;
}
