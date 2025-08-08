import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./component";
const App = () => {
  return (
    <>
      <div className=" bg-primary w-full overflow-hidden md:px-10 px-0">
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>
        <div className="bg-primary ">
          <div className="w-full">
            <Hero />
          </div>
        </div>
        <div className="bg-primary sm:mx-16 mx-6 flex justify-center items-start ">
          <div className="xl:max-w-[1280px] w-full flex flex-col md:gap-30 gap-20 pb-10 md:pb-20">
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
