import React from 'react'
import Image from 'next/image'
const Gradient = () => {
    return (
        <div className='w-full  sm:h-64 md:my-24 my-24 ' >
            <Image className='w-full' src={'/gradient.png'} alt='ssss' quality={100} width={1600} height={1600} />

        </div>
    )
}

export default Gradient