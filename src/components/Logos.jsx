import React from 'react'
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'

const Logos = () => {
    const brands = [
        { logo: brand1 },
        { logo: brand2 },
        { logo: brand3 },
        { logo: brand4 },
        { logo: brand5 },
    ]
    return (
        <section>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-5 items-center">
                {brands.map(({ logo, index }) => {
                    return (
                        <img key={index} src={logo} alt="" />
                    )
                })}
            </div>
        </section>
    )
}

export default Logos