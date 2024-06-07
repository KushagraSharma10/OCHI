
const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 text-white flex items-center gap-5 px-11 '>
        <div className="cardcontainer w-[45vw] h-[50vh]">
            <div className="relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute bottom-10 left-10 px-3 py-1 rounded-full border-[1px] border-[#CDEA68] text-[#CDEA68]'>&copy;2019-2022</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
            <div className="card relative rounded-xl w-[30vw] h-full bg-[#212121] flex items-center justify-center">
             <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />   
            <button className='absolute bottom-10 left-10 px-3 py-1 uppercase rounded-full border-[1px]  '>Rating 5.0 on clutch</button>
            </div>
            <div className="card relative rounded-xl flex items-center justify-center w-[30vw] h-full bg-[#212121]">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute bottom-10 uppercase left-10 px-3 py-1 rounded-full border-[1px]'>Business bootcamp alumini</button>
            </div>
        </div>
    </div>
  )
}

export default Cards