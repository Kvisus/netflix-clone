import Image from "next/image";
import { useEffect, useState } from "react";
import { Film } from "../typings";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

interface Props {
  love: Film[];
}

function Banner({ love }: Props) {
  const [movie, setMovie] = useState<Film>(
    love[0]
    // love[Math.floor(Math.random() * love.length)]
  );

  useEffect(() => {
    setMovie(love[Math.floor(Math.random() * love.length)]);
  }, []);

  // console.log(movie);
  const lorem =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aut praesentium doloremque illo molestiae deserunt eaque dicta laudantium accusantium nihil repudiandae harum est exercitationem hic sit a, saepe quae maxime dolorum. Tempora voluptatum ipsum minima nemo facilis quidem, dignissimos itaque.";

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <Image src={movie.posterUrlPreview} layout="fill" objectFit="cover" />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
        {movie?.nameRu || movie?.nameOriginal || movie?.nameEn}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {lorem}
      </p>
      {/* button containter */}
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          {" "}
          Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
