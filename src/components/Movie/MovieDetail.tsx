"use client";

import { getMovieById } from "@/services/movie";
import { Movie } from "@/types/movie";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../Common/Button";
import Loading from "../Common/Loading";

interface MovieDetailProps {
  id: number;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState<Movie | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    getMovieById(id)
      .then((result) => {
        const data = result;
        setMovieData(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const genreArray = movieData?.genres?.map((item) => {
    return item.name;
  });

  return (
    <div className="px-16 pt-[100px]">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="text-white">
          <div className="flex">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}`}
              alt={movieData?.title || ""}
              width={600}
              height={150}
            />
            <div className="px-10 flex flex-col justify-between">
              <div className="font-bold text-2xl">
                <span className="inline-block mr-2">{movieData?.title}</span>
                {genreArray?.map((item, idx) => (
                  <span
                    key={`genre-${idx}`}
                    className="text-sub inline-block px-2 py-1 text-xs font-normal border-solid border-[1px] border-sub mx-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div>
                <div className="text-xl">{movieData?.tagline}</div>
                <div className="text-fontGray">{movieData?.overview}</div>
              </div>
              <div className="flex gap-2">
                <Button text={"보러가기"} onClick={() => {}}></Button>
                <Button text={"좋아요"} onClick={() => {}}></Button>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="text-xl font-semibold">영화 정보</h2>
            <div className="bg-subBg p-7 mt-3 text-fontSub rounded-md flex flex-col gap-1">
              <div className="flex">
                <div className="w-[10%]">개봉일</div>
                <div>{movieData?.release_date}</div>
              </div>
              <div className="flex">
                <div className="w-[10%]">평점</div>
                <div>{movieData?.vote_average}</div>
              </div>
              <div className="flex">
                <div className="w-[10%]">러닝타임</div>
                <div>{movieData?.runtime}분</div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="text-xl font-semibold">비슷한 콘텐츠</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
