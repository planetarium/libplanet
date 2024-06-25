CREATE TABLE IF NOT EXISTS `tx_references` (
    CONSTRAINT `uid` UNIQUE (`tx_id`, `block_hash`),

    `tx_id`         BINARY(32),
    `block_hash`    BINARY(32),
    `tx_nonce`      BIGINT
);

CREATE TABLE IF NOT EXISTS `signer_references` (
    CONSTRAINT `uid` UNIQUE (`signer`, `tx_id`),

    `signer`    BINARY(20),
    `tx_id`     BINARY(32),
    `tx_nonce`  BIGINT
);

CREATE TABLE IF NOT EXISTS `updated_address_references` (
    CONSTRAINT `uid` UNIQUE (`updated_address`, `tx_id`),

    `updated_address`   BINARY(20),
    `tx_id`             BINARY(32),
    `tx_nonce`          BIGINT
);
