import * as React from "react"
import Link from 'next/link'
import { getAllMovice } from "@/service/movieService"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
export async function CardComponent() {
  const movieAll = await getAllMovice();
  return (
    <Carousel opts={{align: "start",}} className="w-full ">
      <CarouselContent>
        {movieAll?.map((movie, index) => (
          // <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 w-[70%]">
          <CarouselItem key={index} className="md:basis-[25%]">
            <div>
              <Card>
                <CardContent>
                  <div key={movie.movie_id} className="rounded-md bg-base-100]">
                    <figure className=" relative right-10 px-10 pt-5 w-[330px] h-[160px] ">
                         <img key={index} src={movie.image ? movie.image : "https://miro.medium.com/v2/resize:fit:1400/0*T88HPBGmt4mwOe62"} alt="movie" height={550} width={550} className="rounded-sm" />
                    </figure>
                    <div className="card-body pt-5">
                      <h2 className="card-title relative text-start text-lg line-clamp-1">{movie.movie_title}</h2>
                      <p className="text-sm text-start line-clamp-2">{movie.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>      
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}
