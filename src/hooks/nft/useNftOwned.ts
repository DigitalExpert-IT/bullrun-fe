import { useNFTBullRunContract } from "hooks";
import { useAddress, useOwnedNFTs, NFT } from "@thirdweb-dev/react";

export const useNftOwned = () => {
  const nft = useNFTBullRunContract();
  const address = useAddress() ?? null;
  const nftOwned = useOwnedNFTs(nft.contract, address);

  return {
    ...nftOwned,
  };
};
