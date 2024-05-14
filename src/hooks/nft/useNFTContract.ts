import { useContract } from "@thirdweb-dev/react";
import { NFT_BULLRUN } from "constant/address";
import nft from "pass-bullrun/artifacts/contracts/Nft.sol/BullPasDev.json";

export const CURRENT_CHAIN_ID = (process.env.NEXT_PUBLIC_CHAIN_ID ||
  "0x38") as "0x38";

const contractAddress = NFT_BULLRUN[CURRENT_CHAIN_ID];

export const useNFTBullRunContract = () => {
  return useContract(contractAddress, nft.abi);
};
