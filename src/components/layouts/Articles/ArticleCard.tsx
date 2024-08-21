const ArticleCard = ({
  title,
  desc,
  author,
  images,
}: {
  title: string;
  desc: string;
  author: string;
  images: string;
}) => {
  return (
    <div className="w-[300px] h-[425px] rounded-sm shadow-md cursor-pointer">
      <div>
        <img
          src={images}
          alt=""
          className="w-full h-[200px] bg-cover rounded-t-sm"
        />
      </div>

      <div className="p-4 space-y-2">
        <span className="text-sm text-muted-foreground">By {author}</span>
        <h3 className="text-xl font-light">{title}</h3>
        <p className="text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
