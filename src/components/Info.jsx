import imageVR from '../assets/desktop/image-interactive.jpg'

function Info() {
  return (
    <div className='relative container mx-auto pt-32'>
        <img className='w-8/12' src={imageVR} alt="image-vr" />
        <div className='absolute top-2/4 left-2/4 bg-white text-black w-3/6	p-28'>
            <h2 className='text-6xl pb-10'>THE LEADER IN INTERACTIVE VR</h2>
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
    </div>
  )
}

export default Info