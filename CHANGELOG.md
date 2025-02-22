# Changelog

## 0.1.0-alpha.18 (2025-02-22)

Full Changelog: [v0.1.0-alpha.17...v0.1.0-alpha.18](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.17...v0.1.0-alpha.18)

### ⚠ BREAKING CHANGES

* **client:** uri encode path parameters ([#72](https://github.com/stainless-api/builds-node-api/issues/72))

### Features

* **client:** improve logging ([#79](https://github.com/stainless-api/builds-node-api/issues/79)) ([344d664](https://github.com/stainless-api/builds-node-api/commit/344d6640e00952b1eefd06c092731923c4c02d1e))
* **client:** send `X-Stainless-Timeout` header ([#71](https://github.com/stainless-api/builds-node-api/issues/71)) ([861184e](https://github.com/stainless-api/builds-node-api/commit/861184e16b2db20c4650890859f3ff5f104200c6))


### Bug Fixes

* **client:** fix export map for index exports, accept BunFile ([#76](https://github.com/stainless-api/builds-node-api/issues/76)) ([3c86845](https://github.com/stainless-api/builds-node-api/commit/3c868457d188504afef265ed7b20b0712c3095a1))
* **client:** uri encode path parameters ([#72](https://github.com/stainless-api/builds-node-api/issues/72)) ([161de71](https://github.com/stainless-api/builds-node-api/commit/161de7140299d39c751cb1d18628becefc8f98bd))
* **internal:** return in castToError instead of throwing ([#81](https://github.com/stainless-api/builds-node-api/issues/81)) ([9e2c68d](https://github.com/stainless-api/builds-node-api/commit/9e2c68df46639d5b9d2028f9c30c65a914969428))


### Chores

* **client:** detect node and deno timeout errors ([#69](https://github.com/stainless-api/builds-node-api/issues/69)) ([b61f88b](https://github.com/stainless-api/builds-node-api/commit/b61f88bef6824e6aaa95dd2e4308debc3506e11d))
* **client:** handle expo fetch abort errors ([#68](https://github.com/stainless-api/builds-node-api/issues/68)) ([ab3a65b](https://github.com/stainless-api/builds-node-api/commit/ab3a65b9ef6bc12abc13f9dd38b18bf21ddcdd56))
* **internal:** add explicit export `type` modifier ([#67](https://github.com/stainless-api/builds-node-api/issues/67)) ([15888af](https://github.com/stainless-api/builds-node-api/commit/15888afda1e5b9c04fe33d72efe158d4fe8fb048))
* **internal:** codegen related update ([#74](https://github.com/stainless-api/builds-node-api/issues/74)) ([aa8d0fe](https://github.com/stainless-api/builds-node-api/commit/aa8d0feee87946224bb27514698b61f049646b9f))
* **internal:** codegen related update ([#78](https://github.com/stainless-api/builds-node-api/issues/78)) ([843d32f](https://github.com/stainless-api/builds-node-api/commit/843d32f1bc9be52a51ec9e4c515ba140426ca2a2))
* **internal:** fix devcontainers setup ([#80](https://github.com/stainless-api/builds-node-api/issues/80)) ([5b73626](https://github.com/stainless-api/builds-node-api/commit/5b736268ae733698616daa2e2808a9d360936acb))
* **internal:** fix tests not always being type checked ([#77](https://github.com/stainless-api/builds-node-api/issues/77)) ([bdf4826](https://github.com/stainless-api/builds-node-api/commit/bdf4826ef152bbfe42f5bea82981d2ab8896ee52))
* **internal:** remove unnecessary todo ([#82](https://github.com/stainless-api/builds-node-api/issues/82)) ([096c6fe](https://github.com/stainless-api/builds-node-api/commit/096c6fe767f28f483a4e30a855ef274304c9baef))
* **internal:** remove unused `isRequestOptions()` function ([#70](https://github.com/stainless-api/builds-node-api/issues/70)) ([ea62ef5](https://github.com/stainless-api/builds-node-api/commit/ea62ef59ca827dfafd44be6a83e1a07c9be0435c))
* **internal:** update eslint config ([#75](https://github.com/stainless-api/builds-node-api/issues/75)) ([957a48e](https://github.com/stainless-api/builds-node-api/commit/957a48e0d89feeacd107bf4a90b26c863232ea42))
* **types:** remove type-level dependency on some platform specifics ([#65](https://github.com/stainless-api/builds-node-api/issues/65)) ([7da0b05](https://github.com/stainless-api/builds-node-api/commit/7da0b055d754a96c886dd5362cfacfb74848282c))

## 0.1.0-alpha.17 (2025-01-23)

Full Changelog: [v0.1.0-alpha.16...v0.1.0-alpha.17](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.16...v0.1.0-alpha.17)

### Features

* **api:** manual updates ([#61](https://github.com/stainless-api/builds-node-api/issues/61)) ([1b14893](https://github.com/stainless-api/builds-node-api/commit/1b14893936297aff0ed8c3ecd7d9ac3b9222c772))
* **api:** manual updates ([#63](https://github.com/stainless-api/builds-node-api/issues/63)) ([5990b47](https://github.com/stainless-api/builds-node-api/commit/5990b479060665886a5cebe9c04f2aa5aaa0f9a8))

## 0.1.0-alpha.16 (2025-01-22)

Full Changelog: [v0.1.0-alpha.15...v0.1.0-alpha.16](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.15...v0.1.0-alpha.16)

### ⚠ BREAKING CHANGES

* **client:** document proxy use + clean up old code ([#57](https://github.com/stainless-api/builds-node-api/issues/57))

### Bug Fixes

* correctly send default header values ([#58](https://github.com/stainless-api/builds-node-api/issues/58)) ([6818d5a](https://github.com/stainless-api/builds-node-api/commit/6818d5a92cfa3edeeb88797b7f5e567cee31dcc4))


### Chores

* **client:** document proxy use + clean up old code ([#57](https://github.com/stainless-api/builds-node-api/issues/57)) ([18f95e7](https://github.com/stainless-api/builds-node-api/commit/18f95e7c13d5920a88aee790477824c66989cc05))
* **client:** improve node-fetch file upload errors ([#56](https://github.com/stainless-api/builds-node-api/issues/56)) ([1f48b98](https://github.com/stainless-api/builds-node-api/commit/1f48b98aaf358183b517d07da5fd44909119f1c1))
* **internal:** codegen related update ([#54](https://github.com/stainless-api/builds-node-api/issues/54)) ([a0504f2](https://github.com/stainless-api/builds-node-api/commit/a0504f2230fb783e10b1443645f5d26fdde13987))
* **internal:** minor restructuring ([#59](https://github.com/stainless-api/builds-node-api/issues/59)) ([a03e6ca](https://github.com/stainless-api/builds-node-api/commit/a03e6ca28992147f6aac63493ec28f3f99ac6e33))

## 0.1.0-alpha.15 (2025-01-17)

Full Changelog: [v0.1.0-alpha.14...v0.1.0-alpha.15](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.14...v0.1.0-alpha.15)

### Features

* **api:** api update ([#51](https://github.com/stainless-api/builds-node-api/issues/51)) ([b905142](https://github.com/stainless-api/builds-node-api/commit/b9051423c1a1ab6defd5022bb774735225b59e24))

## 0.1.0-alpha.14 (2025-01-17)

Full Changelog: [v0.1.0-alpha.13...v0.1.0-alpha.14](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.13...v0.1.0-alpha.14)

### Features

* **api:** api update ([#48](https://github.com/stainless-api/builds-node-api/issues/48)) ([f79ef74](https://github.com/stainless-api/builds-node-api/commit/f79ef742fe948626902287e38822a88137698202))

## 0.1.0-alpha.13 (2025-01-17)

Full Changelog: [v0.1.0-alpha.12...v0.1.0-alpha.13](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.12...v0.1.0-alpha.13)

### Features

* **api:** api update ([#45](https://github.com/stainless-api/builds-node-api/issues/45)) ([2e09271](https://github.com/stainless-api/builds-node-api/commit/2e09271d02a29e4da215a3dfca61422b430bce4a))

## 0.1.0-alpha.12 (2025-01-17)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Features

* **api:** api update ([#42](https://github.com/stainless-api/builds-node-api/issues/42)) ([3a5321e](https://github.com/stainless-api/builds-node-api/commit/3a5321e534c07fb09793997ff22bb78199dd8c51))

## 0.1.0-alpha.11 (2025-01-16)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Features

* **api:** manual updates ([#39](https://github.com/stainless-api/builds-node-api/issues/39)) ([2c8a920](https://github.com/stainless-api/builds-node-api/commit/2c8a920975fa8218f1987a07e0e546681d3eaa41))

## 0.1.0-alpha.10 (2025-01-14)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* **api:** api update ([#32](https://github.com/stainless-api/builds-node-api/issues/32)) ([a9b7bb5](https://github.com/stainless-api/builds-node-api/commit/a9b7bb5b6c96bea92326726adaa42c6d6aeadc44))

## 0.1.0-alpha.9 (2025-01-14)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **api:** manual updates ([#29](https://github.com/stainless-api/builds-node-api/issues/29)) ([6709824](https://github.com/stainless-api/builds-node-api/commit/67098246714dda10d36f24eb4024aa9fdcd14448))

## 0.1.0-alpha.8 (2025-01-14)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* **api:** manual updates ([#26](https://github.com/stainless-api/builds-node-api/issues/26)) ([5713519](https://github.com/stainless-api/builds-node-api/commit/57135190a9b192e1bb8b205f293f0899ce1f2d56))

## 0.1.0-alpha.7 (2025-01-14)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** manual updates ([#24](https://github.com/stainless-api/builds-node-api/issues/24)) ([f63f2b2](https://github.com/stainless-api/builds-node-api/commit/f63f2b2179f2f6a67ad6707ace02ed4779b1ad97))

## 0.1.0-alpha.6 (2025-01-14)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** api update ([#19](https://github.com/stainless-api/builds-node-api/issues/19)) ([ec51306](https://github.com/stainless-api/builds-node-api/commit/ec513069a5fcd5d68828b7969aff9176d0660e60))
* **api:** api update ([#21](https://github.com/stainless-api/builds-node-api/issues/21)) ([bc8abb7](https://github.com/stainless-api/builds-node-api/commit/bc8abb7e0f2df4e88f62b618665d2a4ef455a9ff))
* **api:** api update ([#22](https://github.com/stainless-api/builds-node-api/issues/22)) ([950133c](https://github.com/stainless-api/builds-node-api/commit/950133c31f27b3147d3eb2807c2eb9a8b9561400))

## 0.1.0-alpha.5 (2025-01-13)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.5](https://github.com/stainless-api/builds-node-api/compare/v0.0.1-alpha.0...v0.1.0-alpha.5)

### Features

* **api:** manual updates ([1633bb4](https://github.com/stainless-api/builds-node-api/commit/1633bb4ef0943e5a11ad0ca0568b5d93c574a1d8))
* **api:** manual updates ([#14](https://github.com/stainless-api/builds-node-api/issues/14)) ([e21b879](https://github.com/stainless-api/builds-node-api/commit/e21b879b8832fcfa8a2d96dca1d2facce0b85fa4))
* **api:** manual updates ([#15](https://github.com/stainless-api/builds-node-api/issues/15)) ([b92947c](https://github.com/stainless-api/builds-node-api/commit/b92947c8c96b6105d2856cd6477e9b6a404f68a8))
* **api:** manual updates ([#16](https://github.com/stainless-api/builds-node-api/issues/16)) ([859189c](https://github.com/stainless-api/builds-node-api/commit/859189cf725d1340fbafa2cbd77ead7117cb5fce))
* **api:** manual updates ([#17](https://github.com/stainless-api/builds-node-api/issues/17)) ([6031572](https://github.com/stainless-api/builds-node-api/commit/603157247e0e4add59c9a23614958554eb0f4164))
