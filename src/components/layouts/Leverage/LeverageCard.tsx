const LeverageCard = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="w-full sm:w-[280px] md:w-[300px] sm:h-[300px] flex flex-col items-center sm:items-start sm:justify-between p-2 gap-4 sm:gap-0">
      <div>
        <img src={img} alt="" />
      </div>

      <h4 className="text-2xl">{title}</h4>
      <p className="text-[15px] lg:text-lg text-muted-foreground text-center sm:text-start">
        {desc}
      </p>
    </div>
  );
};

export default LeverageCard;
