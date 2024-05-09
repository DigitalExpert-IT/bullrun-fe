import { HStack, Stack, Text } from "@chakra-ui/react";
import { WidgetProfileBalance, WidgetProfileBtn } from "components/widget";
// import { CURRENT_CHAIN_ID, useAsyncCall } from "hooks";
import {
  useAddress,
  useBalance,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { t } from "i18next";
// import { fromBn } from "evm-bn";
// import {
//   useSponsorRewardMap,
//   useAccountMap,
//   useMatchingRewardMap,
// } from "hooks/valhalla";
// import { FLD_CONTRACT } from "constant/address";
// import { useNFTFolkContract } from "hooks/useNFTFolkContract";
// import { prettyBn } from "utils";

export const CardProfileBonus = () => {
  const address = useAddress();
  // const nftFolk = useNFTFolkContract();
  // const fld = useBalance(FLD_CONTRACT[CURRENT_CHAIN_ID]);
  // const sponsorReward = useSponsorRewardMap();
  // const matchingReward = useMatchingRewardMap();

  // const claimSponsorReward = useContractWrite(
  //   nftFolk.contract,
  //   "claimSponsorReward"
  // );
  // const claimSponsorRewardAsync = useAsyncCall(claimSponsorReward.mutateAsync);

  // const claimMatchingReward = useContractWrite(
  //   nftFolk.contract,
  //   "claimMatchingReward"
  // );

  // const claimMatchingRewardAsync = useAsyncCall(
  //   claimMatchingReward.mutateAsync
  // );

  // const handleClaimSponsorReward = async () => {
  //   await claimSponsorRewardAsync.exec({ args: [] });
  //   await sponsorReward.refetch();
  // };

  // const handleClaimMatchingReward = async () => {
  //   await claimMatchingRewardAsync.exec({ args: [] });
  //   await matchingReward.refetch();
  // };

  // const { data: account } = useAccountMap();
  // const { data: personalBuy } = useContractRead(
  //   nftFolk.contract,
  //   "personalBuy",
  //   [address]
  // );

  return (
    <Stack>
      <Stack gap={"3"} w={"full"}>
        <WidgetProfileBalance bg="#0B5454" px="1rem" rounded="xl">
          <HStack w={"full"} justifyContent={"space-between"}>
            <Text>{t("common.PersonalNft")}</Text>
            {/* <Text textAlign={"end"}>
              {`${prettyBn(personalBuy, 18)} ${fld.data?.symbol}`}
            </Text> */}
            <Text textAlign={"end"}>1000 FLD</Text>
          </HStack>
        </WidgetProfileBalance>
        <WidgetProfileBalance bg="#0B5454" px="1rem" rounded="xl">
          <HStack w={"full"} justifyContent={"space-between"}>
            <Text>{t("common.TotalNetworkMember")}</Text>
            {/* <Text textAlign={"end"}>{`${account?.totalDownline} Member`}</Text> */}
            <Text textAlign={"end"}>{`20 Member`}</Text>
          </HStack>
        </WidgetProfileBalance>
        <WidgetProfileBalance bg="#0B5454" px="1rem" rounded="xl">
          <HStack w={"full"} justifyContent={"space-between"}>
            <Stack>
              <Text>{t("common.sponsor")}</Text>
              <Text>
                {/* {`${sponsorReward.data && fromBn(sponsorReward.data, 18)} ${
                  fld.data?.symbol
                }`} */}
                9000 FLD
              </Text>
            </Stack>
            <WidgetProfileBtn
            // onClick={handleClaimSponsorReward}
            // isLoading={claimSponsorRewardAsync.isLoading}
            >
              {t("common.claim")}
            </WidgetProfileBtn>
          </HStack>
        </WidgetProfileBalance>
        <WidgetProfileBalance bg="#0B5454" px="1rem" rounded="xl">
          <HStack w={"full"} justifyContent={"space-between"}>
            <Stack>
              <Text>{t("common.matchingBonus")}</Text>
              <Text>
                {/* {`${matchingReward.data && fromBn(matchingReward.data, 18)} ${
                  fld.data?.symbol
                }`} */}
                5000 USDT
              </Text>
            </Stack>
            <WidgetProfileBtn
            // onClick={handleClaimMatchingReward}
            // isLoading={claimMatchingRewardAsync.isLoading}
            >
              {t("common.claim")}
            </WidgetProfileBtn>
          </HStack>
        </WidgetProfileBalance>
      </Stack>
    </Stack>
  );
};
