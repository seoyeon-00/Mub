"use client";

import { Movie } from "@/types/movie";
import Image from "next/image";
import Button from "../Common/Button";
import useMovieLike from "@/hooks/useMovieLike";
import Skeleton from "@mui/material/Skeleton";
import HeartIcon from "../Common/icons/HeartIcon";

interface MovieDetailProps {
  id: number;
  movieData: Movie;
  video: any;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ id, movieData, video }) => {
  const genreArray = movieData?.genres?.map((item) => {
    return item.name;
  });
  const { checkLikes, likesHandler } = useMovieLike({ id });

  return (
    <div className="pt-[100px]">
      <div className="text-white">
        <div className="flex">
          <div className="w-[600px]">
            {video ? (
              <iframe
                width="600"
                height="300"
                src={`https://www.youtube.com/embed/${video?.key}`}
                title={`${video.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : movieData ? (
              <div className="w-[600px]">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}`}
                  alt={movieData?.title || ""}
                  width={600}
                  height={150}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 100vw"
                />
              </div>
            ) : (
              <div className="w-[600px]">
                <Skeleton variant="rounded" width={600} height={300} />
              </div>
            )}
          </div>
          <div className="px-10 flex flex-col justify-between w-full">
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
              <Button onClick={() => {}}>보러가기</Button>
              {!checkLikes ? (
                <Button onClick={likesHandler} style={"blank"}>
                  <div className="flex gap-2 justify-center items-center">
                    <span>
                      <HeartIcon color="#e14c4c" width="18px" />
                    </span>
                    <span>찜하기</span>
                  </div>
                </Button>
              ) : (
                <Button onClick={likesHandler}>찜 해제</Button>
              )}
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
      </div>
    </div>
  );
};

export default MovieDetail;
