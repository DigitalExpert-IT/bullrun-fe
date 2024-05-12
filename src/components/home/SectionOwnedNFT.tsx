import React, { useState } from "react";
import {
  Box,
  Heading,
  Wrap,
  WrapItem,
  Stack,
  Image,
  Container,
  Spinner,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
// import { useOwnedNFTList } from "hooks/useOwnedNFTList";
import { CardOwnedNFT } from "components/card";

const nftList = [
  {
    id: 0,
  },
  // {
  //   id: 1,
  // },
];

export const SectionOwnedNFT = () => {
  // const { data: nftList, isLoading } = useOwnedNFTList();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box mt="40" pos="relative">
      <Box textAlign="center">
        <Heading
          textTransform="uppercase"
          fontSize={{ base: "4xl", md: "5xl" }}
        >
          {t("pages.profile.myNFT")}
        </Heading>
      </Box>
      <Container maxW={"container.xxl"} w={{ base: "100%", md: "90%" }}>
        <Stack align="center" justify="center" py="10">
          <Wrap
            bg="#1E1E1E"
            w="100%"
            align="center"
            justify="center"
            rounded="50px"
            p="5"
            backdropFilter="auto"
            backdropBlur="2.5px"
            spacing="30px"
          >
            {isLoading ? (
              <Box display="flex" justifyContent="center" minH="55vh">
                <Spinner size="xl" />
              </Box>
            ) : nftList.length === 0 ? (
              <Box
                textAlign="center"
                display="flex"
                alignItems="center"
                my="10"
                minH="55vh"
              >
                <Heading>{t("error.notOwnedNft")}</Heading>
              </Box>
            ) : (
              nftList.map((item: any) => (
                <WrapItem key={item.id}>
                  <CardOwnedNFT {...item} />
                </WrapItem>
              ))
            )}
          </Wrap>
        </Stack>
      </Container>
    </Box>
  );
};
