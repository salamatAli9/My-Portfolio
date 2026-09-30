import ReactMarquee from './Marquee'
import { PROJECTS_DATA } from '../constants'

const Projects = () => {
    return (
        <main id='projects' className="w-screen min-h-screen bg-[#02050a] flex flex-col gap-24 items-center justify-start py-28 px-3 sm_desktop:px-0">
            <header className="w-screen sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] flex flex-col gap-5 px-3 sm_desktop:px-0" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                <h3 className="font-Poppins-Medium text-xl text-primary uppercase">my recent portfolio</h3>
                <h2 className="font-Poppins-SemiBold text-2xl lg_mobile:text-3xl sm_desktop:text-4xl text-white leading-relaxed"> Elevate your brand to new <br className='hidden sm_desktop:block' /> heights with our portfolio expertise </h2>
            </header>
            <div className='w-screen sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] grid grid-cols-1 sm_desktop:grid-cols-2 gap-5 px-3 sm_desktop:px-0'>
                {PROJECTS_DATA.map((port, index) => (
                    <a
                        href={port.link}
                        target='__blank'
                        key={index}
                        className='w-full rounded-md h-full overflow-hidden relative group/overlay'
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        data-aos-delay={port.delay}
                        data-aos-once="true"
                    >
                        <img
                            src={port.image}
                            alt={`Project ${index}`}
                            className='w-full h-full group-hover/overlay:scale-105 transition-all ease-in-out duration-300'
                        />
                        <section>
                            <div className='hidden absolute bottom-0 left-0 w-full h-full items-end justify-end bg-transparent group-hover/overlay:flex animate__animated animate__fadeInUp animate__faster'>
                                <div
                                    className='flex flex-col gap-2 px-5 items-start py-10'
                                    style={{
                                        background:
                                            'linear-gradient(0deg, #02050ad3 0%, rgba(2, 5, 10, 0.5802696078431373) 61%, rgba(2, 5, 10, 0) 100%)'
                                    }}
                                >
                                    <h3 className='font-Poppins-SemiBold text-white'>{port.title}</h3>
                                    <span className='flex gap-2'>
                                        <hr className='mt-1 min-w-[30px] h-1 border-primary self-start' />
                                        <p className='text-slate-200 text-xs font-Poppins-Regular'>{port.description}</p>
                                    </span>
                                </div>
                            </div>
                        </section>
                    </a>
                ))}
            </div>
            <ReactMarquee />
        </main>
    )
}

export default Projects
