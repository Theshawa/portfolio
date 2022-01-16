import { useState } from "react";

const Card = ({ image, title, url }) => {
  const [active, setActive] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="overflow-hidden flex-shrink-0 cursor-pointer shadow-sm bg-fg relative max-h-screen bg-cover bg-no-repeat bg-center"
    >
      <img src={image} alt="" className={`w-full h-auto `} />
      {active && (
        <p
          dangerouslySetInnerHTML={{ __html: title }}
          className="h-max h text-right absolute bottom-0 right-0 w-max max-w-[50%] flex flex-col items-end justify-end bg-fg text-bg p-[10px] text-[12px] leading-[16px]"
        ></p>
      )}
    </a>
  );
};

export default Card;
