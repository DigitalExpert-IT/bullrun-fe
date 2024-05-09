import { Inter } from "next/font/google";
import { LayoutMain } from "components";
import { SectionHeader, SectionNFTList, SectionProfile } from "components/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LayoutMain>
      <SectionHeader />
      <SectionNFTList />
      <SectionProfile />
    </LayoutMain>
  );
}
