// https://eth-mainnet.g.alchemy.com/v2/g4vM0hgfh0ggHW353NjmsecEX3p1-w_E

//ff08b72e3a5b3482902b9da8568c32d8687cfcf49144f07e90652c02dd204ecf

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.19',
  networks: {
    ropsten : {
      url : 'https://eth-sepolia.g.alchemy.com/v2/Bfp1kSAnUtmCqL2Ey8y91Rxs-8XMFlso',
      accounts : [ 'ff08b72e3a5b3482902b9da8568c32d8687cfcf49144f07e90652c02dd204ecf' ]
    }
  }
}