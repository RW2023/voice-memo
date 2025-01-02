import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        title="Note to Self"
        subtitle="Capture these thoughts"
        backgroundImage="/images/hero-image.jpg" 
        buttonLabel="Create a note"
        buttonUrl="/notes/"
      />
    </div>
  );
}
