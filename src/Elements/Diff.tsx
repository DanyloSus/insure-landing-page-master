import Card from "./Diff/Card";

const Diff = () => {
  return (
    <section className="flex justify-center mt-[305px]">
      <div className="w-[1110px] lg:w-auto lg:text-center">
        <hr />
        <h1 className="lg:text-5xl lg:my-[92px]">We're different</h1>
        <div className="flex mt-[96px] gap-[40px] items-center justify-center lg:flex-col lg:mt-0">
          <Card
            img="icon-snappy-process.svg"
            h2="Snappy Process"
            p="Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
          />
          <Card
            img="icon-affordable-prices.svg"
            h2="Affordable Prices"
            p="We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
          />
          <Card
            img="icon-people-first.svg"
            h2="People First"
            p="Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
          />
        </div>
      </div>
    </section>
  );
};

export default Diff;
