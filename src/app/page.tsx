import DrinkSection from "~/components/Sections/DrinkSection";
import EventsSections from "~/components/Sections/EventsSections";
import FoodSection from "~/components/Sections/FoodSection";
import FootballSection from "~/components/Sections/FootballSection";
import PoolSection from "~/components/Sections/PoolSection";
import SliderCarousel from "~/components/SliderCarousel/SliderCarousel";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col ">
      <SliderCarousel />
      <FootballSection />
      <PoolSection />
      <EventsSections />
      <DrinkSection />
      <FoodSection />
    </main>
  );
}
