const networkDetails = [
  {
    chainId: "0x13881",
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    chainName: "Mumbai Testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
];

const getNetworkFromChainId = (chainId) => {
  return networkDetails.find((network) => network.chainId === chainId);
};

export { networkDetails, getNetworkFromChainId };
