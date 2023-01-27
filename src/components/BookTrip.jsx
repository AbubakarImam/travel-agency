import React from 'react'
import icon1 from '../assets/group12.png'
import icon2 from '../assets/group11.png'
import icon3 from '../assets/group7.png'
import rome from '../assets/rectangle17.jpg'
import { FaMap, FaLocationArrow, FaLeaf } from 'react-icons/fa'

const BookTrip = () => {
    const trips = [
        {
            icon: icon1, title: "Choose Destination", id: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Urna, tortor tempus."
        },
        {
            icon: icon2, title: "Make Payment", id: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Urna, tortor tempus."
        },
        {
            icon: icon3, title: "Reach Airport on Selected Date", id: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Urna, tortor tempus."
        },
    ]
    return (
        <section className=''>
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
                <div className='flex flex-col w-full lg:w-[70%] gap-8'>
                    <div className=''>
                        <h5>Easy and Fast</h5>
                        <h2>Book Your Next Trip In 3 Easy Steps</h2>
                    </div>
                    {trips.map(({ index, icon, description, title }) => {
                        return (
                            <div key={index} className='flex flex-col lg:flex-row gap-4'>
                                <img className='h-10 w-10' src={icon} alt="" />
                                <div className='m-0'>
                                    <h5>{title}</h5>
                                    <p>{description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col gap-4 rounded-3xl p-5'>
                        <div className="">
                            <img src={rome} alt="" />
                        </div>
                        <h4>Trip to Greece</h4>
                        <h5>14-29 June</h5>
                        <div className='flex gap-4'>
                            <FaLeaf className='text-xl' />
                            <FaMap className='text-xl' />
                            <FaLocationArrow className='text-xl' />
                        </div>
                        <h3>24 people going</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookTrip