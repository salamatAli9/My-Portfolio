import { SERVICES } from "../constants/db"

const Service = () => {
  return (
    <main id="service" className="w-screen h-fit bg-[#02050a] flex flex-col gap-24 items-center justify-start py-28">
        <header className="w-full max-w-[1120px] flex flex-col gap-5" data-aos="fade-right"  data-aos-duration="2000" data-aos-once="true">
            <h3 className="font-Poppins-Medium text-xl text-primary text-center uppercase">my services</h3>
            <h2 className="font-Poppins-SemiBold text-2xl lg_mobile:text-3xl sm_desktop:text-4xl text-white text-center sm_tablet:leading-relaxed">Crafting stories through <br className="hidden sm_tablet:block" /> design and innovation</h2>
        </header>
        <section className="w-screen sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] h-full sm_desktop:space-y-0 px-3 sm_desktop:px-0
        flex items-center justify-center sm_tablet:justify-between flex-col sm_tablet:flex-row flex-wrap gap-y-16 sm_tablet:gap-y-10">
            {SERVICES?.map( (service, index) => (
                <div 
                    key={index} 
                    className="relative w-full max-w-screen sm_tablet:max-w-[330px] sm_desktop:max-w-[350px] h-[350px] border-4 border-[#191919] text-white px-2 lg_mobile:px-5 pt-14 pb-0 flex flex-col gap-3 items-center justify-start" 
                    data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay={service?.delay}
                >
                    <img src={service?.img} alt={service?.headline} className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    <h2 className="font-Poppins-SemiBold text-xl uppercase">{service?.headline}</h2>
                    <p className="font-Poppins-Regular text-[#A2A2A2] text-base text-center leading-relaxed">{service?.content}</p>
                </div>
            ))}
        </section>
    </main>
  )
}

export default Service