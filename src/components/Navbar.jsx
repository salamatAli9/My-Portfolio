import {
    useRef,
    useState,
    useEffect,
} from 'react'
import { Link } from 'react-scroll'
import emailjs from '@emailjs/browser'
import { NAV_LIST } from '../constants'
import Logo from '../assets/images/logo.png'
import CloseIcon from '@mui/icons-material/Close'
import { Fade as Hamburger } from 'hamburger-react'
import { CSSTransition } from 'react-transition-group'
import CircularProgress from '@mui/material/CircularProgress'

const Navbar = () => {

    const nodeRef = useRef("")
    const formRef = useRef("")
    const sidebarRef = useRef(null)
    const [error, setError] = useState("")
    const [isOpen, setOpen] = useState(false)
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault()
        setError("")
        setSuccess("")
        emailjs.sendForm('service_0xw95hl', 'template_ge60spa', formRef.current, '_lddcARM4CvqfQuKi')
            .then((result) => {
                console.log(result)
                setName("")
                setEmail("")
                setMessage("")
                setSuccess(true)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        if (success || error) {
            if (sidebarRef.current) {
                sidebarRef.current.scrollTo({
                    top: sidebarRef.current.scrollHeight,
                    behavior: "smooth",
                });
            }
        }
    }, [success, error]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
        return () => {
            document.body.style.overflowY = 'scroll'
        };
    }, [isOpen])

    return (
        <>
            <CSSTransition
                in={isOpen}
                nodeRef={nodeRef}
                timeout={600}
                classNames={{
                    enter: 'slide-left',
                    exit: 'slide-left-close',
                }}
                unmountOnExit
            >
                <>
                    <div
                        onClick={() => setOpen(false)}
                        className={`w-screen h-screen overflow-hidden fixed bg-black bg-opacity-60 z-40
                        head-enter ${!isOpen && 'head-exit'}`}
                    />
                    <div
                        ref={nodeRef}
                        onClose={() => setOpen(false)}
                        className='w-screen max-w-[400px] h-full bg-[#09101a] fixed top-0 right-0 z-50'
                    >
                        <header
                            className='w-full h-fit bg-[#141C27] px-7 py-5 sm_desktop:p-5 flex items-center justify-between'
                        >
                            <img
                                src={Logo}
                                alt="Logo"
                                className='w-1/3 h-14'
                            />
                            <span
                                className='bg-primary w-10 h-10 rounded-full hover:bg-black active:border-2 border-secondary ease-in-out duration-300 cursor-pointer flex items-center justify-center group/icon'
                                onClick={() => setOpen(false)}
                            >
                                <CloseIcon className='text-[#222] group-hover/icon:text-yellow-300' />
                            </span>
                        </header>
                        <div
                            ref={sidebarRef}
                            className='w-full h-full overflow-y-scroll flex flex-col gap-10 px-7 sm_desktop:px-10 py-20'
                        >
                            <span className='flex flex-col gap-3'>
                                <h2 className='font-Poppins-Medium text-xl text-white uppercase'>about me</h2>
                                <p className='font-Poppins-Regular text-[1rem] text-secondary leading-7'>
                                    I craft digital experiences that feel alive, simple, elegant, and meaningful. Guided by curiosity and a love for detail, I turn ideas into moments that leave a lasting impression.
                                </p>
                            </span>
                            <form
                                id='sidebar'
                                ref={formRef}
                                onSubmit={sendEmail}
                                className='w-full flex flex-col gap-7'
                            >
                                <h2 className='font-Poppins-Medium text-2xl text-white uppercase'>get in touch</h2>
                                <input type="text" name='name' className='w-full p-4 font-Poppins-Medium text-lg bg-transparent text-white border border-primary focus:outline-none' placeholder='Your Name' value={name} onInput={(e) => setName(e.target.value)} required />
                                <input type="email" name='email' className='w-full p-4 font-Poppins-Medium text-lg bg-transparent text-white border border-primary focus:outline-none' placeholder='Your Email' value={email} onInput={(e) => setEmail(e.target.value)} required />
                                <textarea name='message' className='w-full h-40 p-4 font-Poppins-Medium text-lg bg-transparent text-white border border-primary focus:outline-none resize-none' placeholder='Please enter your message..' value={message} onInput={(e) => setMessage(e.target.value)} required></textarea>
                                <button
                                    type="submit"
                                    className='min-w-32 w-fit px-10 py-3 flex items-center justify-center bg-primary rounded-md font-Poppins-Medium text-[#02050a] hover:bg-[#141c27] disabled:hover:bg-primary focus:outline-none focus:shadow-md focus:shadow-white hover:text-white disabled:hover:text-[#02050a] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition ease-in-out duration-300'
                                    disabled={success || loading || name === "" || email === '' || message === ''}
                                >
                                    {loading ? <CircularProgress size={20} /> : "Submit"}
                                </button>
                                <div className='h-40'>
                                    {success && <h2 className='w-fit p-2 rounded-md bg-[#1a4f10] font-Poppins-Regular text-sm text-primary '>Thank You for reaching out! I'll get back to you soon.</h2>}
                                    {error && <h2 className='w-fit p-2 rounded-md bg-[#ffe3e1] font-Poppins-Regular text-sm text-red-700'>"Something went wrong! Please try again."</h2>}
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            </CSSTransition>
            <nav className='w-screen h-[80px] flex justify-center bg-transparent fixed z-40'>
                <section className='w-full h-fit sm_tablet:max-w-[700px] sm_desktop:max-w-[1120px] bg-[#141C27] flex items-center justify-between p-3 sm_tablet:p-2 sm_desktop:p-0'>
                    <img
                        src={Logo}
                        alt="Logo"
                        className='w-[90px] h-[40px] sm_desktop:w-[180px] sm_desktop:h-[80px]'
                    />
                    <ul id='navList' className='hidden w-fit sm_desktop:flex items-center justify-center gap-10'>
                        {NAV_LIST?.map((listItem, index) => (
                            <Link key={index} to={listItem?.id} spy={true} smooth={true} offset={listItem?.offset} duration={0} activeClass="activeLi"                             >
                                <li className='font-Poppins-Medium text-[1rem] text-white cursor-pointer leading-[70px]'> {listItem?.title} </li>
                            </Link>
                        ))}
                    </ul>
                    <div
                        className='w-fit h-fit sm_desktop:w-[80px] sm_desktop:h-[80px] bg-primary flex items-center justify-center
                        cursor-pointer hover:bg-[#4ace92] transition ease-in-out duration-300'
                        onClick={() => setOpen(!isOpen)}
                    >
                        <div className='hidden sm_desktop:block'>
                            <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
                        </div>
                        <div className='block sm_desktop:hidden'>
                            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
                        </div>
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Navbar
