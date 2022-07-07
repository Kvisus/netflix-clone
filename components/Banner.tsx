import Image from "next/image";
import { Film } from "../typings";

interface Props {
  triller: Film[]
}

function Banner({triller}:Props) {
  return (
    <div>
      <div className="">
        {/* <Image src={} /> */}
      </div>
    </div>
  );
}

export default Banner;
