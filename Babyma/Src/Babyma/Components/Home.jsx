import Button from '../Layouts/button'
import mainImage from './Assets/img/Main.jpg'

function Home() {
    return (
        <div>
            <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 text-green-900 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${mainImage})` }}>
                <div className='w-full lg:w-4/5 space-y-5 mt-10'>
                    <h1 className='text-6xl font-bold gap-6'>India's First Experimental pediatric Centre</h1>
                    <p className='justify-centre'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nesciunt perferendis totam, modi unde fugit ex similique. Numquam libero dicta odio vitae voluptatum, sequi reprehenderit eligendi ipsam dolorem exercitationem? Tempora?</p>
                </div>
                <Button className='mt-2' title="See Service" />

            </div>

        </div>
    )
}

export default Home