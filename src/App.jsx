import DataImage from './data';
import {listTools, listProyek}from './data';

function App() {
  

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className='animate__animated animate__fadeInUp animate__delay-3s'>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md"
             loading='lazy'   />
            <q> Simplicity is the soul of efficiency.
            — Austin Freeman</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, My Name Is Gouines Chaedar</h1>
          <p className="text-base/loose mb-6 opacity-50">
          I have a strong passion for both Programming and Design, especially in Website Development and Visual Design such as posters, 
          pamphlets, and banners. My interest in these fields has been growing for over four years, allowing me to develop a deep 
          understanding and creative approach to every project I take on.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-[#ffffff] text-black
           p-4 rounded-2xl hover:bg-[#B9FF31]
            ">
              Return to Home <i className="ri-arrow-left-s-line ri-lg"></i>
            </a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              More Projects <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
        loading='lazy'/>
      </div>

      {/*Tentang Saya */}
      <div className="tentang mt-32 py-10" id='tentang'>
        <div className='xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg'  data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>
        <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-md mb-10 sm:hidden'
        loading='lazy'/>
          <p className='text-base /loose mb-10'>
            Hi, I'm Gouines Chaedar — a Full Stack Web Developer and Designer specializing in UI/UX Design and Digital Products.
            I believe that design and functionality should work hand in hand, so every project I develop is not only visually 
            appealing but also delivers an optimal user experience.</p>
          <div className='flex items-center justify-between'>
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading='lazy'/>
            <div className='flex items-center gap-6'>
              <div>
                <h1 className='text-4xl mb-1'>
                  45 <span className='text-[#B9FF31]'>+</span>
                </h1>
                <p>Completed Projects</p>
              </div>
              <div>
                <h1 className='text-4xl mb-1'>
                  4 <span className='text-[#B9FF31]'>+</span>
                </h1>
                <p>Experience Years</p>
              </div>
            </div>
          </div>
        </div>

        <div className='tools mt-32'>
         <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Tools Used</h1>
          <p className='xl:w-2/5 lg:w2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once='true'>
          Here are some of the tools I usually use for website development and design.</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.map(tool =>(
            <div className='flex items-center gap-2 p-3 border border-zinc-600 rounded-md
             hover:bg-zinc-800 group' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once='true'>
              <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900' />
              <div>
                <h4 className='font-bold'>{tool.nama}</h4>
                <p className='opacity-50'>{tool.ket}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
       {/*Tentang Saya */}

       {/* Proyek */}
          <div className="proyek mt-32 py-10" id='proyek'>
            <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Project</h1>
            <p className='text-base/loose text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once='true'>
            Here are some of the projects I’ve worked on. </p>
          <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map(proyek =>(
              <div key={proyek.id} className='p-4 bg-zinc-800 rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once='true'>
                <img src={proyek.gambar} alt="Proyek Image"/>
                <div>
                  <h1 className='text-2xl font-bold my-4'>{proyek.nama}</h1>
                  <p className='text-base/loose mb-4'>{proyek.desk}</p>
                  <div className='flex flex-wrap gap-2'>
                    {proyek.tools.map((tool,index) =>(
                      <p className='py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold' key={index}>{tool}</p>
                    ))}
                  </div>
                  <div className='mt-8 text-center'>
                    <a href={proyek.link} className='bg-[#ffffff] text-black p-3 rounded-lg block border border-zinc-600
                     hover:bg-[#B9FF31]'>Lihat Website</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
       {/* Proyek */}

       {/* Kontak */}
       <div className="kontak mt-32 sm:p-10 p-0" id='kontak'>  
        <h1 className='text-4xl mb-2 font-bold text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true'>Contact</h1>
        <p className='text-base/loose text-center mb-10 opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once='true'>Let’s Connect.</p>
        <form action="https://formsubmit.co/wanstudio1711@gmail.com" method="POST"  className='bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md' autoComplete='off' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once='true'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Full Name</label>
              <input type="text" name='name' placeholder='Input Name...' className='border border-zinc-500 p-2 rounded-md'  
              required/>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Email</label>
              <input type="email" name='email' placeholder='Input Email...' className='border border-zinc-500 p-2 rounded-md' 
              required/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='pesan' className='font-semibold'>Message</label>
             <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder='message...' 
             className='border border-zinc-500 p-2 rounded-md' required></textarea>
            </div>
            <div className='text-center'>
              <button type="Submit" className='bg-[#ffffff] text-black p-3 rounded-lg w-full cursor-pointer border border-zinc-600
                     hover:bg-[#B9FF31]'>Send Message</button>
            </div>
          </div>
        </form>
       </div>
       {/* Kontak */}
    </>
  )
}

export default App
