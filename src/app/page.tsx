import HorizontalScrollCarousel from "../components/shared/HorizontalScroll";

export default function Home() {
  return (
    <main>
        <HorizontalScrollCarousel />
    </main>
  );
}

export const generateMetadata = () => {
    return {
        title: "Home",
        description: "Home",
    };
}