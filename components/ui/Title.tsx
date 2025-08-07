interface TitleProps {
  title?: string;
  title2?: string;
  subtitle?: string;
}

const Title = ({ title, title2, subtitle }: TitleProps) => {
  return (
    <div className={`mx-auto text-center mb-10 mt-20`}>
      <h1 className="heading">
        {title} <span className="text-purple">{title2}</span>
      </h1>
      <p className="text-white-200 text-lg lg:text-2xl md:mt-10 my-5 text-center">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
