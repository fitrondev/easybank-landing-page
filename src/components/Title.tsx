const Title = ({ title, desc }: { title: string; desc?: string }) => {
  return (
    <div className="flex flex-col gap-5 lg:gap-8">
      <h3 className="text-4xl lg:text-5xl font-light text-center lg:text-start">
        {title}
      </h3>
      <p className="sm:max-w-[650px] sm:mx-auto lg:mx-0 text-[15px] lg:text-lg text-muted-foreground text-center lg:text-start">
        {desc}
      </p>
    </div>
  );
};

export default Title;
