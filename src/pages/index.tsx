import { Inter } from "next/font/google";
import { LayoutMain } from "components";
import { SectionHeader } from "components/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LayoutMain>
      <SectionHeader />
    </LayoutMain>
  );
}
