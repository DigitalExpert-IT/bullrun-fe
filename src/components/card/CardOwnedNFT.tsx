import React from "react";
import { prettyBn } from "utils";
import { TOKEN_ICON } from "constant/icon";
import { TokenList } from "./CardTokenList";
import { useAsyncCall, useNFTBullRunContract, useNftOwned } from "hooks";
import { useTranslation } from "react-i18next";
import { useContractRead } from "@thirdweb-dev/react";
import { Stack, Box, Text, Button, Image, Spinner } from "@chakra-ui/react";

export const CardOwnedNFT: React.FC<{ id: string }> = ({ id }) => {
  const nft = useNFTBullRunContract();
  const { claimReward, isStartedClaim } = useNftOwned();
  const { data, isLoading } = useContractRead(
    nft.contract,
    "getCoinInvestDetail",
    [id]
  );

  const { exec, isLoading: claimLoading } = useAsyncCall(claimReward);

  const handleClaim = async () => {
    await exec(id);
  };
  const { t } = useTranslation();

  return (
    <Box>
      <Stack
        p="0.5"
        mt="5"
        bgGradient="linear(to-r, #F96C6C, #F16623)"
        borderRadius="xl"
      >
        <Box
          borderRadius="xl"
          bg="#1E1E1E"
          px={{ base: 1.5, sm: 2, md: 5 }}
          py={5}
        >
          <Box rounded="xl" overflow="hidden" m="2">
            <Image
              src={
                "https://ik.imagekit.io/msxxxaegj/BullrunPass/nft1.png?updatedAt=1715171218991"
              }
              alt={`0`}
              objectFit="cover"
            />
          </Box>
          <Stack my="5">
            {isLoading ? (
              <Box display="flex" justifyContent="center" minH="55vh">
                <Spinner size="xl" />
              </Box>
            ) : data?.length !== 0 ? (
              data?.map((item: any, idx: number) => (
                <Box key={idx}>
                  <TokenList
                    name={
                      TOKEN_ICON[
                        item.contractAddress as "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D"
                      ].name
                    }
                    image={
                      TOKEN_ICON[
                        item.contractAddress as "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D"
                      ].url
                    }
                    amount={prettyBn(item.amount, 18)}
                  />
                </Box>
              ))
            ) : (
              <Text>Data not found</Text>
            )}
          </Stack>
          <Button
            w="full"
            rounded="lg"
            size="sm"
            variant="solid"
            colorScheme="orange"
            color="white"
            onClick={handleClaim}
            isLoading={claimLoading}
          >
            Claim
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
