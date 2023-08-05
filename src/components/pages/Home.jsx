import About from "./About";
import ChefSection from "./ChefSection";
import CustomerReview from "./CustomerReview";
import Header from "./Header";
import OnlineBooking from "./OnlineBooking";
import OrderSection from "./OrderSection";
import OurSpecialMenu from "./OurSpecialMenu";
import SpecialSection from "./SpecialSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <OrderSection />
      <SpecialSection />
      <OurSpecialMenu />
      <OnlineBooking />
      <ChefSection />
      <CustomerReview />
      <About />
    </div>
  );
};

export default Home;
