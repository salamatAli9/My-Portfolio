import React from 'react';
import {
  SKILLS,
  EDUCATION,
  ACCOMPLISHMENTS,
} from '../constants';

const Accomplishments = () => {
  return (
    <main id="accomplishments" className='w-screen bg-[#09101a] flex items-start justify-center'>
      <section className='w-screen sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] h-full flex flex-col gap-24 items-start justify-start py-28 px-3 sm_desktop:px-0'>
        <header className="w-full flex flex-col gap-5 items-center justify-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" >
          <h3 className="font-Poppins-Medium text-xl text-primary uppercase text-center">education & skills</h3>
          <h2 className="font-Poppins-SemiBold text-2xl lg_mobile:text-3xl sm_desktop:text-4xl text-white leading-relaxed text-center">Building expertise, <br className="hidden sm_desktop:block" /> shaping the future</h2>
        </header>
        <section className='w-full flex flex-col gap-24'>
          <div className='flex justify-between gap-y-20 flex-wrap'>
            {ACCOMPLISHMENTS?.map((accomplishment, index) => (
              <div key={index} className='w-full sm_desktop:min-w-[48%] sm_desktop:max-w-[48%] sm_desktop:w-[48%] flex flex-col gap-7'>
                <span className='font-Poppins-Medium text-primary text-lg border border-primary w-fit p-5'> {accomplishment.date} </span>
                <h2 className='font-Poppins-SemiBold text-white text-2xl lg_mobile:text-3xl leading-normal'>
                  {accomplishment.headline}
                  {accomplishment.company &&
                    <a href="https://hazentech.com/" className="text-white" target="__blank">
                      (@<span className="navList">{accomplishment.company}</span>)
                    </a>
                  }
                </h2>
                <p className='font-Poppins-Medium text-[#A2A2A2] leading-7'> {accomplishment.content} </p>
              </div>
            ))}
            <div id="shooting_star">
              <span className="spark__container">
                <span className="spark" />
              </span>
              <span className="backdrop" />
              <span className="text" />
            </div>
            {EDUCATION?.map((accomplishment, index) => (
              <div key={index} className='w-full sm_desktop:min-w-[48%] sm_desktop:max-w-[48%] sm_desktop:w-[48%] flex flex-col gap-7'>
                <span className='font-Poppins-Medium text-primary text-lg border border-primary w-fit p-5'> {accomplishment.date} </span>
                <h2 className='font-Poppins-SemiBold text-white text-2xl lg_mobile:text-3xl leading-normal'>
                  {accomplishment.headline}
                  {accomplishment.company &&
                    <a href="https://hazentech.com/" className="text-white" target="__blank">
                      (@<span className="navList">{accomplishment.company}</span>)
                    </a>
                  }
                </h2>
                <p className='font-Poppins-Medium text-[#A2A2A2] leading-7'> {accomplishment.content} </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-y-20 flex-wrap">
            {SKILLS.map((skill, index) => (
              <div key={index} className="w-full sm_desktop:min-w-[48%] sm_desktop:max-w-[48%] sm_desktop:w-[48%] relative pl-7 pt-5 pb-10 bg-[#151c25] overflow-hidden">
                <h2 className="font-Poppins-SemiBold text-lg text-white "> {skill.language} </h2>
                <div
                  id="skillsBorderBottom"
                  className='absolute bottom-0 left-0 bg-primary h-2 rounded-r-full'
                  style={{ width: skill.proficiency }}
                  data-aos="slide-right" data-aos-duration="1500" data-aos-once="true"
                >
                  <p className="text-white text-xs absolute bottom-4 -right-5"> {skill.proficiency} </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default Accomplishments