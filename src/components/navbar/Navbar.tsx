import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NAVIGATION } from "constant/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { DrawerMobileNav, NavbarMenu } from "components";
import Image from "next/image";
import {
  Box,
  Flex,
  Stack,
  useDisclosure,
  IconButton,
  Container,
  AspectRatio,
  Button,
  Heading,
} from "@chakra-ui/react";
import { ButtonConnectWallet } from "components/button";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setScrolled(prevScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    if (prevScrollPos === 0) {
      setScrolled(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, scrolled]);

  return (
    <Box
      pt={{ base: "2", lg: "2" }}
      pb={{ base: "2", lg: "2" }}
      w="full"
      zIndex={1000}
      bg={isOpen ? "#F16623" : scrolled ? "#F16623" : "transparent"}
      boxShadow={scrolled ? "dark-lg" : "none"}
      pos="fixed"
      transition="0.5s"
    >
      <Container maxW="container.xxl">
        <Flex alignItems="center" justify="space-around">
          <Stack
            direction="row"
            align="center"
            flex={1}
            justify="space-between"
            pos={"relative"}
          >
            <DrawerMobileNav
              data={NAVIGATION}
              isOpen={isOpen}
              onClose={onClose}
            />
            <Link href="/">
              <Heading fontWeight="extrabold">BullRun</Heading>
            </Link>
            <IconButton
              variant="ghost"
              fontSize="xl"
              icon={<GiHamburgerMenu />}
              aria-label="open-menu"
              display={{ base: "flex", md: "flex", lg: "none" }}
              onClick={onOpen}
            />
          </Stack>
          <Stack
            direction="row"
            spacing="5"
            display={{ base: "none", md: "none", lg: "flex" }}
            justify="center"
            align="center"
            flex={1}
          >
            <NavbarMenu data={NAVIGATION} />
          </Stack>
          <Flex
            alignItems="center"
            gap={2}
            flex={1}
            justify="right"
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            <ButtonConnectWallet />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
