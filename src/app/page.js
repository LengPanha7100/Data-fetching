import { CardComponent } from "@/components/CardComponent";
// import { CardComponent1 } from "@/components/CardComponent1";
import { getAllMovice, getTypeAction } from "@/service/movieService"
// import { getTypeAvtion } from "@/service/movieService"
// import { getTypeDrama } from "@/service/movieService"
// import { getScienceFictionMovie } from "@/service/movieService";
const movieAll = await getAllMovice();
// const Action = await getTypeAvtion("Action");
// const Drama = await getTypeDrama("Drama");
// const sciece  = await getScienceFictionMovie("Science Fiction")

const allGenres = movieAll?.map((item) => {

  return item?.genre
})

const getUnique = allGenres?.filter((value, index, array) => {
  return array.indexOf(value) === index
})

export default function Home() {
  return (
    <>
      {/* get all movie */}
      <div className="bg-red-950 h-full w-screen py-7">
        <div className=" relative pt-4 left-10">
          <div className="pb-6">
            <h1 className="text-2xl text-white">All Movie &gt;</h1>
          </div>
          <CardComponent/>
          {/* <div className="flex justify-between gap-3 overflow-x-scroll w-full no-scrollbar ">
            {movieAll?.map(movie => (
              <div key={movie.movie_id} className="rounded-md bg-base-100 ">
                <figure className="px-4 pt-5 w-[300px] h-[120px] ">
                  <img src={movie.image ? movie.image : "https://miro.medium.com/v2/resize:fit:1400/0*T88HPBGmt4mwOe62"} alt="movie" height={550} width={550} className="rounded-sm" />
                </figure>
                <div className="card-body pb-5 ">
                  <h2 className="card-title text-start text-lg pt-5 line-clamp-1">{movie.movie_title}</h2>
                  <p className="text-sm text-start line-clamp-2">{movie.description}</p>
                </div>

              </div>
            )
            )}
          </div> */}
        </div>


        {getUnique?.map(async (item) => {
          const gen = await getTypeAction(item)
          return (
          
            <div className=" relative pt-4 left-10" key={item}>
              <div className="pb-6">
                <h1 className="text-2xl text-white">{item} Movie &gt;</h1>
            </div>
                 <div className="flex gap-3 overflow-x-scroll no-scrollbar">
                {gen?.map((movie,index) => (
                <div key={movie.movie_id} className="card bg-base-100 shadow-xl bg-white rounded-md w-[290px] h-[260px]">
                    <figure className="relative right-5 px-10 pt-5 w-[330px] h-[160px] ">
                         <img key={index}src={movie.image ? movie.image : "https://miro.medium.com/v2/resize:fit:1400/0*T88HPBGmt4mwOe62"} alt="movie" height={550} width={550} className="rounded-sm" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-start text-lg line-clamp-1 pl-5 pb-1">{movie.movie_title}</h2>
                      <p className="text-start text-sm text-black line-clamp-2 pl-5">{movie.description}</p>
                     
                    </div>
                  </div>
                 ))}
              </div>
            
            </div>
          )
        })}

      </div>


    </>
  )
}