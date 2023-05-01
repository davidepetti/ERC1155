require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/AhasSvv69HWtkMhEOV90vPgS0EbJvd0I',
      accounts: [
        '079dfae5a20a383b93c0aae84b5d338b0c3bf9874a5b3913892ca42fb2f364aa',
      ],
    },
  },
  etherscan: {
    apiKey: 'AEDRXVRA4TDK4SE1BTVZI3TV189HSG7VFN',
  },
};
