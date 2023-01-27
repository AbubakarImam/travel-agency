import destination1 from '../assets/Rectangle14.png'
import destination2 from '../assets/Rectangle15.jpg'
import destination3 from '../assets/Rectangle16.png'

const Destinations = () => {
    const destination = [
        { id: 1, img: destination1 },
        { id: 2, img: destination2 },
        { id: 3, img: destination3 }
    ]
    return (
        <section>
            <div class="flex flex-col md:flex-row md:gap-4">
                {destination.map(({ id, img }) => {
                    return (

                        <div key={id} class="rounded-t-lg overflow-hidden h-96 w-80">
                            <div class="h-3/5 w-full">
                                <img className="h-full" src={img} alt="piña" />
                            </div>
                            <div className="h-2/5 w-full">
                                <div className="flex justify-between">
                                    <h5>Rome, Italty</h5>
                                    <h5>$5,42k</h5>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </section>
    )
}

export default Destinations