import React, { useLayoutEffect, useRef } from "react";
// import { useAsyncCall } from "hooks";
// import { OwnedNftType } from "hooks/useOwnedNFTList";
import { useTranslation } from "react-i18next";
import {
  Stack,
  Box,
  AspectRatio,
  Text,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import { differenceInSeconds } from "date-fns";
import { useContractWrite } from "@thirdweb-dev/react";
// import { useNFTFolkContract } from "hooks/useNFTFolkContract";
// import { BigNumber } from "";
// import { fromBn } from "evm-bn";

export const CardOwnedNFT = () =>
  // props: OwnedNftType
  {
    // const { id, mintingPrice, cardId, percentage, tokenUri, lastGrindedAt } =
    //   props;
    const { t } = useTranslation();
    // const nft = useNFTFolkContract();
    // const farm = useContractWrite(nft.contract, "grindingCard");
    // const farmAsync = useAsyncCall(farm.mutateAsync);
    const intervalRef = useRef<NodeJS.Timer>();
    const farmTextRef = useRef<HTMLParagraphElement>(null);
    // const lastFarmedAtRef = useRef<BigNumber>(lastGrindedAt);

    // const handleFarm = async () => {
    //   const farm = await farmAsync.exec({ args: [id] });
    //   const isSuccesFarm = farm.receipt?.status === 1;
    //   if (isSuccesFarm) {
    //     lastFarmedAtRef.current = BigNumber.from(
    //       Math.round(new Date().getTime() / 1000)
    //     );
    //   }
    // };

    // useLayoutEffect(() => {
    //   intervalRef.current = setInterval(() => {
    //     if (!farmTextRef.current) return;

    //     const farmPerDay = mintingPrice.mul(percentage).div(1000);
    //     const farmPerSec = farmPerDay.div(86400);
    //     const secDiff = differenceInSeconds(
    //       new Date(),
    //       new Date(lastFarmedAtRef.current.toNumber() * 1000)
    //     );
    //     const farmValue = farmPerSec.mul(secDiff);
    //     farmTextRef.current.innerText = fromBn(farmValue, 18);
    //   }, 1000);

    //   return () => {
    //     clearInterval(intervalRef.current);
    //   };
    // }, []);

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
              {/* <AspectRatio w={{ base: "2xs", md: "xs" }} ratio={1}>
              <Box as="video" autoPlay loop muted rounded="xl">
                <source src={tokenUri} type="video/mp4" />
              </Box>
            </AspectRatio> */}
              <Image
                src={
                  "https://ik.imagekit.io/msxxxaegj/BullrunPass/nft1.png?updatedAt=1715171218991"
                }
                alt={`0`}
                objectFit="cover"
              />
            </Box>
            <Stack my="5" align="center">
              <Text fontWeight="bold" fontSize="16px">
                239.9 USDT
              </Text>
            </Stack>
            <Button
              w="full"
              rounded="lg"
              size="sm"
              variant="solid"
              colorScheme="orange"
              color="white"
              // onClick={handleFarm}
              // isLoading={farmAsync.isLoading}
            >
              <Text ref={farmTextRef} mr="1" as="span">
                0
              </Text>
              Claim
            </Button>
          </Box>
        </Stack>
      </Box>
    );
  };
