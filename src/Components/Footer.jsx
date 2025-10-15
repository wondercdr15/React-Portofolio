const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-7">
            <a href="#beranda">Home</a>
            <a href="#tentang">About</a>
            <a href="#proyek">Project</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/wondercdr15/React-Portofolio">
                <i className="ri-github-fill ri-2x"></i>
            </a>
             <a href="https://www.instagram.com/chaed.art/">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
             <a href="https://www.tiktok.com/@chaed.art?lang=en">
                <i className="ri-tiktok-fill ri-2x"></i>
            </a>
            <a href="https://www.youtube.com/@KreatifunsStudio/videos">
                <i className="ri-youtube-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer