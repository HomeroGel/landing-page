// import images from '../images.json'

// const data = images.images

function Cards() {
    return (
        
            <div className='container mx-auto mt-20'>
                <div className='flex flex-wrap gap-20 justify-center'>
                <div className='relative'>
                            <img src='./src/assets/desktop/imgEarth.jpg' alt="" className='brightness-50'/>
                            <p className='absolute top-[22rem] text-2xl w-52 px-11 text-slate-300'>Hola</p>
                        </div>
                    {/* {data.map((image, index) => (
                        <div className='relative' key={index}>
                            <img src={image.image} alt="" className='brightness-50'/>
                            <p className='absolute top-[22rem] text-2xl w-52 px-11 text-slate-300'>{image.name}</p>
                        </div>
                    ))} */}
                </div>
            </div>
        
    )
}

export default Cards