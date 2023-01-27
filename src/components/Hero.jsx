import Navbar from "./Navbar"
import { BsPlayFill } from 'react-icons/bs'
import girlImage from '../assets/imagewithplane.png'

const Hero = () => {
    return (
        <section className="hero" id="home">
            <Navbar />
            <div className="flex flex-col-reverse md:flex-row items-center">
                <div className="desc md:w-2/5 text-center md:text-left px-4">
                    <h3 className="text-priRed font-poppins font-bold text-lg md:text-xl">Best Destinations around the world</h3>
                    <h1 className="font-volkhov">Travel, enjoy and live a new and full life</h1>
                    <p className="font-poppins mt-4">
                        Built Wicket longer admire do barton vanity itself do in it.
                        Preferred to sportsmen it engrossed listening.
                        Park gate sell they west hard for the.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
                        <a href="/" className="btn">Find out more</a>
                        <div className="flex gap-6 items-center">
                            <div className="p-4 bg-priRed rounded-full play-btn"><BsPlayFill className="text-2xl text-white" /></div>
                            <p>Play Demo</p>
                        </div>
                    </div>
                </div>
                <div className=""><img className="48rem aspect-square" src={girlImage} alt="" /></div>
            </div>
        </section>
    )
}

export default Hero