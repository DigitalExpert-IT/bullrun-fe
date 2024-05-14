import { useState, useEffect } from "react";
import { BullPasDev } from "pass-bullrun/typechain-types";
import { useNFTBullRunContract } from "./useNFTContract";
import { BigNumber } from "ethers";
import { prettyBn } from "utils";

type BaseCardType = Awaited<ReturnType<BullPasDev["listPreMinted"]>>;
type NFTType = BaseCardType & {
  id: BigNumber;
  price: number;
};

export const useNftList = () => {
  const nft = useNFTBullRunContract();
  const [data, setData] = useState<NFTType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!nft.contract) return;

      try {
        const nftList = await Promise.all(
          new Array(6).fill(null).map(async (_, cardId) => {
            const nftItem = await nft.contract!.call("listPreMinted", [cardId]);
            return {
              ...nftItem,
              price: prettyBn(nftItem, 18),
              id: BigNumber.from(cardId),
            };
          })
        );
        setData(nftList);
      } catch (error) {
        console.log("Error fetching NFT:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [nft.contract]);

  return {
    isLoading: isLoading || nft.isLoading,
    data,
  };
};
