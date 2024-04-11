import * as React from "react"
import Link from 'next/link'
import { getAllMovice, getTypeAvtion } from "@/service/movieService"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
export async function CardComponent1() {
const movieAll = await getAllMovice();
const allGenres = movieAll?.map((item) => {
  return item?.genre
});
const getUnique = allGenres?.filter((value, index, array) => {
  return array.indexOf(value) === index
}); 
    return (
      <>

        <Carousel opts={{align: "start",}} className="w-full ">
        <CarouselContent>
          {getUnique?.map(async (item) =>{
            const gen = await getTypeAvtion(item)
              return(
                  <>
                  {gen?.map((movie,index) => (
                     <CarouselItem key={index} className="md:basis-[25%]">
                     <Link href={`/DetialMovie/${movie?.movie_id}`}>
                       <Card>
                         <CardContent>
                           <div key={movie.movie_id} className="rounded-md bg-base-100 w-[300px]">
                               <figure className="px-4 pt-5 w-[300px] h-[120px] ">
                                 <img src={movie.image ? movie.image : "https://miro.medium.com/v2/resize:fit:1400/0*T88HPBGmt4mwOe62"} alt="movie" height={550} width={550} className="rounded-sm" />
                               </figure>
                               <div className="card-body pb-5 ">
                                 <h2 className="card-title text-start text-lg pt-5 line-clamp-1">{movie.movie_title}</h2>
                                 <p className="text-sm text-start line-clamp-2">{movie.description}</p>
                               </div>
 
                             </div>
 
                           </CardContent>
                         </Card>
                       </Link>      
                   </CarouselItem> 

                  
                  )
                  )}
                  </>
                )
              })}

        </CarouselContent>
        </Carousel> 
        
      </>
    )
}


