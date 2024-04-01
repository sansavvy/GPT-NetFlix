import { Link } from "react-router-dom";
import { FOOTERLINKS } from "../constants/constants";

const Footer = () => {
  return (
    <div className="bg-black text-white w-full text-sm m-0 underline underline-offset-2 p-4">
      <div className="flex flex-row m-4 p-2 justify-between">
        {FOOTERLINKS?.map((col) => (
          <div className="flex flex-col" key={col.name}>
            {col?.column?.map((value) => (
              <h6 key={value.name} className="m-2 p-2 cursor-pointer">
                {/* <Link to={{ pathname: value.link }}>{value.name}</Link> */}
                <a href={value.link} target="_blank" rel="noreferrer">
                  {value.name}
                </a>
              </h6>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
