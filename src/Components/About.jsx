
const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = "-.1" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-normal">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full flex gap-5 pt-10 border-t-[1px] mt-16 border-[#a1b562]">
            <div className="w-[45vw]">
                <h1 className="text-6xl font-['Neue_Montreal']">Our approach</h1>
                <button className="px-7 py-4 mt-7 uppercase bg-black rounded-full flex items-center gap-10 text-white">Read more
                    <div className="w-2 h-2 rounded-full bg-zinc-100">
                    </div>
                </button> 
            </div>
            <div className="w-[55vw] h-[65vh] rounded-lg overflow-hidden bg-[#acc35a]">
                <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About