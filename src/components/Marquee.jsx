import Marquee from "react-fast-marquee"
import { MARQUEE_CONTENT } from "../constants"
import asterick from "../assets/images/asterick.png"

const ReactMarquee = () => {
    return (
        <Marquee
            speed={250}
            pauseOnHover
            className='w-screen flex justify-start py-7 bg-primary whitespace-nowrap overflow-hidden'
            children={ 
                MARQUEE_CONTENT?.map((tech, i) => (
                    <div className="flex items-center justify-center gap-2">
                        <p id={i} className='marqueeText'>{tech}</p>
                        <img src={asterick} alt="asterick" className="w-5 h-5 opacity-40 marqueeText" />
                    </div>
                ))
            }
        />

    )
}

export default ReactMarquee