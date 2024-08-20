import Title from "@/components/Title";
import IOnline from "@/assets/icon-online.svg";
import IBudgeting from "@/assets/icon-budgeting.svg";
import IOnboarding from "@/assets/icon-onboarding.svg";
import IApi from "@/assets/icon-api.svg";
import LeverageCard from "./LeverageCard";

const LeverageData = [
  {
    title: "Online Banking",
    desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    img: IOnline,
  },
  {
    title: "Simple Budgeting",
    desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    img: IBudgeting,
  },
  {
    title: "Fast Onboarding",
    desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    img: IOnboarding,
  },
  {
    title: "Open API",
    desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    img: IApi,
  },
];

const Leverage = () => {
  return (
    <section className="bg-gray-100 lg:h-screen flex items-center justify-center py-16">
      <div className="container lg:max-h-max space-y-10">
        <Title
          title="Why choose Easybank?"
          desc="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before."
        />

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center lg:items-start justify-center lg:justify-between gap-4 lg:gap-0">
          {LeverageData.map((data, index) => (
            <LeverageCard
              key={index}
              img={data.img}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leverage;
