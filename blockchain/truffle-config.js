module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 30000000,
      // from: '0xe8543ceDAd017D57cda9EEA51322af431B84D46e',
      from: '0x91DbC8EF897931d08dE34CBB846e3a357B8D1552'
    },
  },
  contracts_directory: './testing/',
  contracts_build_directory: './src/build/',
  compilers: {
    solc: {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 100
        }
      }
    }
  }
}