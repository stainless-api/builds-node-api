# Changelog

## 0.1.0-alpha.19 (2025-05-13)

Full Changelog: [v0.1.0-alpha.18...v0.1.0-alpha.19](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.18...v0.1.0-alpha.19)

### Features

* **client:** add withOptions helper ([55d1f93](https://github.com/stainless-api/builds-node-api/commit/55d1f9391a388db243b24241ab4caafee8a3eec7))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#106](https://github.com/stainless-api/builds-node-api/issues/106)) ([1c08b28](https://github.com/stainless-api/builds-node-api/commit/1c08b28b534391c7bd5e9d845f31f670c70b0fc4))
* **client:** always overwrite when merging headers ([e4b5cec](https://github.com/stainless-api/builds-node-api/commit/e4b5cec96d57c3c911df289ff6a5029bae7a279f))
* **client:** send `X-Stainless-Timeout` in seconds ([#104](https://github.com/stainless-api/builds-node-api/issues/104)) ([cb150ed](https://github.com/stainless-api/builds-node-api/commit/cb150edfab9daeb369dbe9de0d4e68ae79e71b03))
* **client:** send all configured auth headers ([#108](https://github.com/stainless-api/builds-node-api/issues/108)) ([5e49ef8](https://github.com/stainless-api/builds-node-api/commit/5e49ef8a6f76d97b03d7fd2f8a1e7255fb22f89d))
* **internal:** fix file uploads in node 18 jest ([f302f19](https://github.com/stainless-api/builds-node-api/commit/f302f1916a5980a7b7f1e2849ba86772bfd9c3d1))
* **mcp:** remove unused tools.ts ([#107](https://github.com/stainless-api/builds-node-api/issues/107)) ([dd850ba](https://github.com/stainless-api/builds-node-api/commit/dd850ba4b63fa1ad86c06d8e7a03d0327a695d23))


### Chores

* add hash of OpenAPI spec/config inputs to .stats.yml ([58857c7](https://github.com/stainless-api/builds-node-api/commit/58857c782d1db0e4e74e2aef34693c38e32c6e19))
* **ci:** add timeout thresholds for CI jobs ([3dcdc68](https://github.com/stainless-api/builds-node-api/commit/3dcdc6878176fe1a8b24853907f2b0303ccfa8ad))
* **ci:** only use depot for staging repos ([748b336](https://github.com/stainless-api/builds-node-api/commit/748b336e9f60c8dc82c9b95637044f081a97b7a8))
* **client:** drop support for EOL node versions ([4e66fce](https://github.com/stainless-api/builds-node-api/commit/4e66fce96130c8510e6c7ff3dcdc4268b196ca61))
* **client:** minor internal fixes ([c891000](https://github.com/stainless-api/builds-node-api/commit/c8910005be2e8a3b894b8582a9ddacd2480fe1fa))
* **client:** move misc public files to new `core/` directory, deprecate old paths ([#103](https://github.com/stainless-api/builds-node-api/issues/103)) ([4c2865b](https://github.com/stainless-api/builds-node-api/commit/4c2865bb2bf8274adeea2154fca53df79ae8f995))
* **internal:** add aliases for Record and Array ([#105](https://github.com/stainless-api/builds-node-api/issues/105)) ([f36481f](https://github.com/stainless-api/builds-node-api/commit/f36481f56128473ab5dbc454ac16261d7ea0b575))
* **internal:** codegen related update ([f4d6644](https://github.com/stainless-api/builds-node-api/commit/f4d6644c95aa3b652c445a9b326938926a831789))
* **internal:** codegen related update ([b56b85d](https://github.com/stainless-api/builds-node-api/commit/b56b85d5c5207a7c68bb435668e2542203675885))
* **internal:** improve node 18 shims ([48b390e](https://github.com/stainless-api/builds-node-api/commit/48b390ead1716cda31184ee904b496e28a05db42))
* **internal:** reduce CI branch coverage ([7914c63](https://github.com/stainless-api/builds-node-api/commit/7914c6361c7d408568972f3fbcc6e4e9a2e68219))
* **internal:** refactor utils ([aa0e8a1](https://github.com/stainless-api/builds-node-api/commit/aa0e8a18133781ffaa6edc98a1d39a9ccd4e6e6a))
* **internal:** share typescript helpers ([f54f0a0](https://github.com/stainless-api/builds-node-api/commit/f54f0a0a2cbc303b1fbbecbe7a14823e9ec8c8ae))
* **internal:** upload builds and expand CI branch coverage ([d38a26d](https://github.com/stainless-api/builds-node-api/commit/d38a26dc33aeaab25a60592af5384da1c26af5c3))
* **package:** remove engines ([ecf50ef](https://github.com/stainless-api/builds-node-api/commit/ecf50ef635b909845c7ab5e33c3ef4b433de572e))
* **perf:** faster base64 decoding ([48a0980](https://github.com/stainless-api/builds-node-api/commit/48a09805e4c5fd6cac5d1b119083c21a47684ad3))


### Documentation

* **readme:** fix typo ([6fd06d4](https://github.com/stainless-api/builds-node-api/commit/6fd06d40ea59a5cedb749a3f99bf6120abaeee13))

## 0.1.0-alpha.18 (2025-03-20)

Full Changelog: [v0.1.0-alpha.17...v0.1.0-alpha.18](https://github.com/stainless-api/builds-node-api/compare/v0.1.0-alpha.17...v0.1.0-alpha.18)

### ⚠ BREAKING CHANGES

* **client:** uri encode path parameters ([#72](https://github.com/stainless-api/builds-node-api/issues/72))

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#92](https://github.com/stainless-api/builds-node-api/issues/92)) ([04fcfb8](https://github.com/stainless-api/builds-node-api/commit/04fcfb8ee32f275672a17d60f211d60bd7bb7f7b))
* **api:** api update ([#100](https://github.com/stainless-api/builds-node-api/issues/100)) ([ea56fde](https://github.com/stainless-api/builds-node-api/commit/ea56fde9c673487f85fbaa0ccf34d872ec602510))
* **client:** accept RFC6838 JSON content types ([#93](https://github.com/stainless-api/builds-node-api/issues/93)) ([2d9c17d](https://github.com/stainless-api/builds-node-api/commit/2d9c17de975b52c83ae25b58d89bfcb2a580975a))
* **client:** improve logging ([#79](https://github.com/stainless-api/builds-node-api/issues/79)) ([344d664](https://github.com/stainless-api/builds-node-api/commit/344d6640e00952b1eefd06c092731923c4c02d1e))
* **client:** send `X-Stainless-Timeout` header ([#71](https://github.com/stainless-api/builds-node-api/issues/71)) ([861184e](https://github.com/stainless-api/builds-node-api/commit/861184e16b2db20c4650890859f3ff5f104200c6))


### Bug Fixes

* **client:** fix export map for index exports, accept BunFile ([#76](https://github.com/stainless-api/builds-node-api/issues/76)) ([3c86845](https://github.com/stainless-api/builds-node-api/commit/3c868457d188504afef265ed7b20b0712c3095a1))
* **client:** fix TypeError with undefined File ([#87](https://github.com/stainless-api/builds-node-api/issues/87)) ([f712ff1](https://github.com/stainless-api/builds-node-api/commit/f712ff1637cb377319f26fad2245a1fd421770ba))
* **client:** uri encode path parameters ([#72](https://github.com/stainless-api/builds-node-api/issues/72)) ([161de71](https://github.com/stainless-api/builds-node-api/commit/161de7140299d39c751cb1d18628becefc8f98bd))
* **exports:** ensure resource imports don't require /index ([#95](https://github.com/stainless-api/builds-node-api/issues/95)) ([9a94183](https://github.com/stainless-api/builds-node-api/commit/9a941838ab32777f8c8fb7d26d055d9b95a8b9e1))
* **internal:** add mts file + crypto shim types ([#96](https://github.com/stainless-api/builds-node-api/issues/96)) ([01eb453](https://github.com/stainless-api/builds-node-api/commit/01eb453cd93e79d458bac967524693e8453e53f9))
* **internal:** clean up undefined File test ([#88](https://github.com/stainless-api/builds-node-api/issues/88)) ([e01791a](https://github.com/stainless-api/builds-node-api/commit/e01791afd6fee8c70f0b05b25aa01e5ca9c54aa9))
* **internal:** return in castToError instead of throwing ([#81](https://github.com/stainless-api/builds-node-api/issues/81)) ([9e2c68d](https://github.com/stainless-api/builds-node-api/commit/9e2c68df46639d5b9d2028f9c30c65a914969428))
* **tests:** manually reset node:buffer File ([#89](https://github.com/stainless-api/builds-node-api/issues/89)) ([3da1ac2](https://github.com/stainless-api/builds-node-api/commit/3da1ac2f68f34468897ad53ab439b7946a22171c))


### Chores

* **client:** detect node and deno timeout errors ([#69](https://github.com/stainless-api/builds-node-api/issues/69)) ([b61f88b](https://github.com/stainless-api/builds-node-api/commit/b61f88bef6824e6aaa95dd2e4308debc3506e11d))
* **client:** handle expo fetch abort errors ([#68](https://github.com/stainless-api/builds-node-api/issues/68)) ([ab3a65b](https://github.com/stainless-api/builds-node-api/commit/ab3a65b9ef6bc12abc13f9dd38b18bf21ddcdd56))
* **client:** only accept standard types for file uploads ([#84](https://github.com/stainless-api/builds-node-api/issues/84)) ([5311571](https://github.com/stainless-api/builds-node-api/commit/53115711e99f859e6c3bc143d253e564b9547465))
* **docs:** improve docs for withResponse/asResponse ([#91](https://github.com/stainless-api/builds-node-api/issues/91)) ([0e6d878](https://github.com/stainless-api/builds-node-api/commit/0e6d8785dc1003aba4e264f66f3b132bda7398b3))
* **exports:** cleaner resource index imports ([#98](https://github.com/stainless-api/builds-node-api/issues/98)) ([633472c](https://github.com/stainless-api/builds-node-api/commit/633472ca26c6f92569c1d14d8974172ab1cf675c))
* **exports:** stop using path fallbacks ([#99](https://github.com/stainless-api/builds-node-api/issues/99)) ([ea9298e](https://github.com/stainless-api/builds-node-api/commit/ea9298ec40d13ca66107444241780f91e9de5615))
* **internal:** add explicit export `type` modifier ([#67](https://github.com/stainless-api/builds-node-api/issues/67)) ([15888af](https://github.com/stainless-api/builds-node-api/commit/15888afda1e5b9c04fe33d72efe158d4fe8fb048))
* **internal:** codegen related update ([#74](https://github.com/stainless-api/builds-node-api/issues/74)) ([aa8d0fe](https://github.com/stainless-api/builds-node-api/commit/aa8d0feee87946224bb27514698b61f049646b9f))
* **internal:** codegen related update ([#78](https://github.com/stainless-api/builds-node-api/issues/78)) ([843d32f](https://github.com/stainless-api/builds-node-api/commit/843d32f1bc9be52a51ec9e4c515ba140426ca2a2))
* **internal:** constrain synckit dev dependency ([#86](https://github.com/stainless-api/builds-node-api/issues/86)) ([88ce03d](https://github.com/stainless-api/builds-node-api/commit/88ce03da09cd881e317264fc854417be067c03e3))
* **internal:** fix devcontainers setup ([#80](https://github.com/stainless-api/builds-node-api/issues/80)) ([5b73626](https://github.com/stainless-api/builds-node-api/commit/5b736268ae733698616daa2e2808a9d360936acb))
* **internal:** fix tests failing on node v18 ([#85](https://github.com/stainless-api/builds-node-api/issues/85)) ([4aa4e67](https://github.com/stainless-api/builds-node-api/commit/4aa4e67a3c9ef52bff63a5250e1ac1f996ef8a70))
* **internal:** fix tests not always being type checked ([#77](https://github.com/stainless-api/builds-node-api/issues/77)) ([bdf4826](https://github.com/stainless-api/builds-node-api/commit/bdf4826ef152bbfe42f5bea82981d2ab8896ee52))
* **internal:** minor client file refactoring ([#97](https://github.com/stainless-api/builds-node-api/issues/97)) ([b16b851](https://github.com/stainless-api/builds-node-api/commit/b16b851f0155a39ce2fa192ee666b7bed7a60f55))
* **internal:** remove extra empty newlines ([#94](https://github.com/stainless-api/builds-node-api/issues/94)) ([9b8c286](https://github.com/stainless-api/builds-node-api/commit/9b8c28645b4c18ccc8e7b6daf4a5c5eb7623c551))
* **internal:** remove unnecessary todo ([#82](https://github.com/stainless-api/builds-node-api/issues/82)) ([096c6fe](https://github.com/stainless-api/builds-node-api/commit/096c6fe767f28f483a4e30a855ef274304c9baef))
* **internal:** remove unused `isRequestOptions()` function ([#70](https://github.com/stainless-api/builds-node-api/issues/70)) ([ea62ef5](https://github.com/stainless-api/builds-node-api/commit/ea62ef59ca827dfafd44be6a83e1a07c9be0435c))
* **internal:** update eslint config ([#75](https://github.com/stainless-api/builds-node-api/issues/75)) ([957a48e](https://github.com/stainless-api/builds-node-api/commit/957a48e0d89feeacd107bf4a90b26c863232ea42))
* **types:** improved go to definition on fetchOptions ([#90](https://github.com/stainless-api/builds-node-api/issues/90)) ([4652f7b](https://github.com/stainless-api/builds-node-api/commit/4652f7b19b58496b644363b02058c2d97d8b735b))
* **types:** remove type-level dependency on some platform specifics ([#65](https://github.com/stainless-api/builds-node-api/issues/65)) ([7da0b05](https://github.com/stainless-api/builds-node-api/commit/7da0b055d754a96c886dd5362cfacfb74848282c))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#83](https://github.com/stainless-api/builds-node-api/issues/83)) ([f1b7512](https://github.com/stainless-api/builds-node-api/commit/f1b7512436a90a9151f28f34bf264dddff481dd4))

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
