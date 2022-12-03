import { ethers } from "ethers";
import { getNetworkFromChainId } from "../utils/blockchainNetworks";

export const connectToMetaMask = async () => {
  try {
    if (!hasEthereum()) return false;
    const network = await getCurrentNetwork();
    if (network.chainId !== process.env.REACT_APP_CHAIN_ID) {
      switchToNetwork();
    }
    const connection = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    return connection;
  } catch (error) {
    return [];
  }
};

export function getActiveWallet() {
  if (!hasEthereum()) return false;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const address = signer.provider.provider.selectedAddress;
  return address;
}

export function hasEthereum() {
  return window.ethereum ? true : false;
}

export async function getCurrentNetwork() {
  if (!hasEthereum()) return false;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const network = await signer.provider._networkPromise;
  if (network.chainId.toString() === "80001") network.chainId = "0x13881";

  return network;
}

export function listenToAccountChanges(handler) {
  if (!hasEthereum()) return false;
  console.log("Listening to Account Changes");
  window.ethereum.on("accountsChanged", async (accounts) => {
    handler(accounts[0]);
  });
}

export function listenToNetworkChanges(handler) {
  if (!hasEthereum()) return false;
  console.log("Listening to Network Changes");
  window.ethereum.on("chainChanged", async (chainId) => {
    handler(chainId);
  });
}

export function switchToNetwork(chainId = null) {
  if (!hasEthereum()) return false;
  const network = getNetworkFromChainId(
    chainId || process.env.REACT_APP_CHAIN_ID
  );
  window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [network],
  });
}

export async function unmountEthListeners() {
  window.ethereum.removeListener("chainChanged", () => {});
  window.ethereum.removeListener("accountsChanged", () => {});
  window.ethereum.removeListener("message", () => {});
}
