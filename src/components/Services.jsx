import dish from '../assets/Group48.svg'
import plane from '../assets/Group90.svg'
import mic from '../assets/Group50.svg'
import nut from '../assets/Group49.svg'

const Services = () => {
    const services = [
        { id: 1, img: dish, heading: 'Calculated Weather', pa: 'Built Wicket longer admire do barton vanity itself do in it.' },
        { id: 2, img: plane, heading: 'Calculated Weather', pa: 'Built Wicket longer admire do barton vanity itself do in it.' },
        { id: 3, img: mic, heading: 'Calculated Weather', pa: 'Built Wicket longer admire do barton vanity itself do in it.' },
        { id: 4, img: nut, heading: 'Calculated Weather', pa: 'Built Wicket longer admire do barton vanity itself do in it.' }
    ]
    return (
        <section id='services'>
            <h5>CATEGORY</h5>
            <h2>We Offer Best Services</h2>
            <div className="flex flex-col md:flex-row gap-8 p-8 md:gap-12 items-center justify-between">
                {services.map(({ img, heading, pa, id }) => {
                    return (
                        <div className="relative">
                            <div key={id} className="flex flex-col text-center items-center rounded-2xl py-8 px-6 services">
                                <div className="img"><img className='w-20 h-20' src={img} alt="" /></div>
                                <h3 className='font-sans font-semibold text-xl mt-7'>{heading}</h3>
                                <p className='font-poppins font-medium text-base mt-4'>{pa}</p>
                            </div>
                            <div className="services-active -bottom-8 -left-8 -z-10">

                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services