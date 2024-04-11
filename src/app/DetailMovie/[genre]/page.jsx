import { getTypeAction } from "@/service/movieService";
export async function DetialMovie({params:{genre}}){
    console.log(genre);
    const movie = await getTypeAction(genre);
    console.log(movie)
    return(
        <>
           <div className="bg-red-950 h-full w-screen py-7">
           <div className=' w-screen  '>
                <Link href='/'>
                    <Image src="/image/1.png" className='absolute left-[3%]'
                        width={120}
                        height={100}
                    ></Image>
                </Link>

                <div className="flex gap-10 absolute text-white m-8 text-lg justify-end left-[44%] mr-16">
                    <div>Home</div>
                    <div>Popular</div>
                    <div>Romance</div>
                    <div>Anime</div>

                </div>
                <input type="text" placeholder="Type to search..." className="input input-bordered input-primary max-w-xs absolute left-[77%] m-6 " />
            </div>
           </div>
        </>
    )
}