import { Center, Text, VStack, Box, Heading } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import { CopiableText } from "components/CopiableText";
// import { FLD_CONTRACT } from "constant/address";
// import { useAccountMap } from "hooks/valhalla";
import { t } from "i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { CardProfile } from "./CardProfile";
// import { CURRENT_CHAIN_ID } from "hooks/useNFTFolkContract";
// import { prettyBn } from "utils";
import { WidgetProfileBalance } from "components/widget";

// const contractFld = FLD_CONTRACT[CURRENT_CHAIN_ID as "0x38"];

export const CardProfileAddress = () => {
  const router = useRouter();
  const [defaultHost, setDefaultHost] = useState("");
  // const accountMap = useAccountMap();
  const address = useAddress() ?? "0x0";

  useEffect(() => {
    if (router.isReady) {
      setDefaultHost(
        `${window.location.protocol}//${window.location.host}/register?ref=`
      );
    }
  }, [router.isReady]);

  return (
    <CardProfile placeContent="left" align="left">
      <Box
        w="100%"
        px="2"
        display="flex"
        flexDirection="column"
        textAlign="left"
      >
        <Heading size="lg">Team Performance</Heading>
        {/* <Text fontSize="lg">{prettyBn(accountMap.data?.omzet, 18)}</Text> */}
        <Text fontSize="lg">20</Text>
      </Box>
      <VStack gap={"8"} mt="3rem">
        <WidgetProfileBalance w="full" justifyContent="center">
          <Center py={"2"}>
            <CopiableText
              alignItems={"left"}
              textAlign={"left"}
              gap={2}
              fontSize={{ base: "2xs", sm: "xs", xl: "sm" }}
              value={"tektok"}
            >
              <Text
                as={"span"}
                display={"flex"}
                justifyContent={"left"}
                alignItems={"left"}
                gap={"2"}
                fontSize={"lg"}
              >
                {t("common.contractFld")}
                <IoCopyOutline />
              </Text>
              {/* {contractFld?.toUpperCase()} */}
            </CopiableText>
          </Center>
        </WidgetProfileBalance>
        <WidgetProfileBalance justifyContent={"center"}>
          <Center py={"2"}>
            <CopiableText
              alignItems={"center"}
              textAlign={"center"}
              gap={2}
              fontSize={{ base: "2xs", sm: "xs", xl: "sm" }}
              value={defaultHost + address}
            >
              <Text
                as={"span"}
                display={"flex"}
                justifyContent={"left"}
                alignItems={"left"}
                gap={"2"}
                fontSize={"lg"}
              >
                {t("common.referralLink")}
                <IoCopyOutline />
              </Text>
              {address?.toUpperCase()}
            </CopiableText>
          </Center>
        </WidgetProfileBalance>
        <WidgetProfileBalance justifyContent={"center"} w="full">
          <Center py={"2"}>
            <Text
              alignItems={"center"}
              textAlign={"center"}
              gap={2}
              fontSize={{ base: "2xs", sm: "xs", xl: "sm" }}
            >
              <Text
                as={"span"}
                display={"flex"}
                justifyContent={"left"}
                alignItems={"left"}
                gap={"2"}
                fontSize={"xl"}
              >
                {t("common.myReferrer")}
              </Text>
              {/* {accountMap.data?.referral.toUpperCase()} */}
              0x1293810923810293820974019283
            </Text>
          </Center>
        </WidgetProfileBalance>
      </VStack>
    </CardProfile>
  );
};
