import Image from "next/image";
import { Film } from "../typings";

interface Props {
  //When using Firebase
  // movie: Film | DocumentData;
  movie: Film;
}

function Thumbnail({ movie }: Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={movie.posterUrlPreview || movie.posterUrl}
        className="rounded-sm
      object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}

export default Thumbnail;
