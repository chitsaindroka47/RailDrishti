import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import Features from "@/components/Features";
import RoleCards from "@/components/RoleCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Challenges />
        <Features />
        <RoleCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;