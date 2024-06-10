import { NextApiHandler } from "next";
import { CARD_IMAGE_MAP } from "constant/image";

import { Contract, providers } from 'ethers'
import { NFT_BULLRUN } from "constant/address";
import { abi } from "pass-bullrun/artifacts/contracts/Nft.sol/Bullcuan.json"
import { Bullcuan } from 'pass-bullrun/typechain-types'

const CURRENT_CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID ?? 0x38;
const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL ?? ""
const provider = new providers.JsonRpcProvider(RPC_URL)

/**
 * Initializes an instance of the Bullcuan NFT contract using the provided contract address, ABI, and RPC provider.
 * The contract instance is cast to the Bullcuan type for type safety.
 */
const nftContract: Contract = new Contract(
  NFT_BULLRUN[CURRENT_CHAIN_ID as "0x38"],
  abi,
  provider
) as unknown as Bullcuan;

// in this case why we should doing this, because wallet DAPP get url from param id, not list id.
// and this approach we can get nft imge on wallet 

const handler: NextApiHandler = async (req, res) => {
  const tokenId = Number(req.query.id);
  const listid = await nftContract.getTypeFromTokenId(tokenId);
  const image = CARD_IMAGE_MAP[listid.toString() as "0"];
  if (!image) {
    return res
      .status(404)
      .json({ status: 404, message: "The requested URL was not found" });
  }
  const imageTemplate = {
    name: `Bullcuan ${Number(listid) + 1}`,
    description: `NFT Bullcuan ${Number(listid) + 1}`,
    external_url: `https://bullcuan.com/api/nft/${listid}`,
    image: image,
  };

  return res.status(200).json(imageTemplate);
};

export default handler;
