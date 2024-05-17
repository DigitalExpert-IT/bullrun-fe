import { useAddress, useOwnedNFTs, useContractRead } from "@thirdweb-dev/react";
import { ZERO_ADDRESS } from "constant/address";
import { useNFTBullRunContract } from "hooks";

export const useNftOwned = () => {
  const nft = useNFTBullRunContract();
  const address = useAddress() ?? ZERO_ADDRESS;
  const getCoins = useContractRead(nft.contract, "getCoinInvestDetail", [0]);
  const nftOwned = useOwnedNFTs(nft.contract, address);

  return {
    ...nftOwned,
    coins: getCoins.data,
  };
};
