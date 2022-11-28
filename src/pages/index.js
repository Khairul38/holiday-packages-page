import HeaderSection from "../components/Home/HeaderSection/HeaderSection";
import SearchSection from "../components/Home/SearchSection/SearchSection";
import SliderSection from "../components/Home/SliderSection/SliderSection";
import TabSection from "../components/Home/TabSection/TabSection";

export default function Home() {
  return (
    <div>
      <SearchSection />
      <HeaderSection />
      <SliderSection />
      <TabSection />
    </div>
  );
}
