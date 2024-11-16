
import Image from 'next/image'
import React from 'react'
import Container from '../Container/Container'

const DashBoard = () => {
    return (
        <Container className='flex flex-col items-center  !px-16 bg-gradient-to-b from-black via-gray-900 to-black'>
            <Image alt='static' quality={86} width={2000} height={2000} className='w-[100%]' src={'/static.png'} />
            <h3>The values ​​we provide are our greatest assurance.</h3>

        </Container>
    )
}

export default DashBoard