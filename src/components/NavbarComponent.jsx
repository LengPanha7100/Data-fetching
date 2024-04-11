import Image from 'next/image'
import Link from 'next/link'
export default function NavbarComponent() {
    return (
        <>
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
                <input type="text" placeholder="  Type to search..." className="input input-bordered input-primary absolute left-[77%] w-[20%] h-11 m-6 rounded-md" />
                <img src="https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x" alt="" />
            </div>
        </>
    )
}