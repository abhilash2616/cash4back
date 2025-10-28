import React from 'react'
import { Store } from '@/data/brands'

interface ExtraDataProps {
    store: Store
}

const ExtraData: React.FC<ExtraDataProps> = ({ store }) => {
    return (
        <div>
            {store.extraData.map((section, index) => (
                <div key={index}>
                    <h2 className='text-[20px] font-semibold mb-2'>{section.title}</h2>
                    <p className='text-[16px] text-gray-600 mb-2'>{section.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ExtraData