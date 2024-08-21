import Title from "@/components/Title";
import Img1 from "@/assets/image-currency.jpg";
import Img2 from "@/assets/image-restaurant.jpg";
import Img3 from "@/assets/image-plane.jpg";
import Img4 from "@/assets/image-confetti.jpg";
import ArticleCard from "./ArticleCard";

const ArticleData = [
  {
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    image: Img1,
    author: "Claire Robinson",
  },
  {
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    image: Img2,
    author: "Wilson Hutton",
  },
  {
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    image: Img3,
    author: "Wilson Hutton",
  },
  {
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the …",
    image: Img4,
    author: "Claire Robinson",
  },
];

const Articles = () => {
  return (
    <section className="py-20">
      <div className="container space-y-8">
        <Title title="Latest Articles" />

        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-center lg:items-start lg:justify-between gap-5 lg:gap-0">
          {ArticleData.map((data, index) => (
            <ArticleCard
              key={index}
              images={data.image}
              title={data.title}
              desc={data.description}
              author={data.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
