import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../MagicButton";
import Link from "next/link";

interface TitleProps {
  title?: string;
  title2?: string;
  subtitle?: string;
  button?: boolean;
  titlebutton?: string;
  positionButton?: string;
  link?: string;
}

const Title = ({
  title,
  title2,
  subtitle,
  button,
  titlebutton,
  positionButton,
  link,
}: TitleProps) => {
  return (
    <div className={`mx-auto text-center mb-10 mt-20`}>
      <h1 className="heading">
        {title} <span className="text-purple">{title2}</span>
      </h1>
      <p className="text-white-200 text-lg lg:text-2xl md:mt-10 my-5 text-center">
        {subtitle}
      </p>
      <div className="flex items-center justify-center">
        {button && (
          <Link href={`${link}`}>
            <MagicButton
              title={titlebutton}
              icon={<FaLocationArrow />}
              position={positionButton}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Title;
