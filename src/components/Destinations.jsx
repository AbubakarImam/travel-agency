import destination1 from '../assets/rectangle14.png'
import destination2 from '../assets/rectangle15.jpg'
import destination3 from '../assets/rectangle16.png'
import { FaLocationArrow } from 'react-icons/fa'

const Destinations = () => {
    const destination = [
        { id: 1, img: destination1, price: '$5,42k', duration: '10 days' },
        { id: 2, img: destination2, price: '$5,42k', duration: '10 days' },
        { id: 3, img: destination3, price: '$5,42k', duration: '10 days' }
    ]
    return (
        <section>
            <div className='flex flex-col items-center mb-20'>
                <h5>Top Selling</h5>
                <h2>Top Destinations</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
                {destination.map(({ id, img, duration }) => {
                    return (

                        <div key={id} className="rounded-3xl destination h-96 w-full md:w-[25%] lg:w-[30%] overflow-hidden">
                            <div className="h-3/5 w-full">
                                <img className="h-full" src={img} alt="piña" />
                            </div>
                            <div className="h-2/5 w-full p-5">
                                <div className="flex justify-between">
                                    <h5>Rome, Italty</h5>
                                    <h5>$5,42k</h5>
                                </div>
                                <p><FaLocationArrow /> {duration} Trip</p>
                            </div>
                        </div>

                    )
                })}
            </div>
        </section>
    )
}

export default Destinations