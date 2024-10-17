import React from 'react'
import ImageGrid from '../../components/ImageGrid/imageGrid'
import AddClassToHeader from '../../components/AddClassToHeader'

const Galley = () => {
    return (
        <main style={{ paddingTop: 'var(--bs-header-height)' }}>
            <AddClassToHeader className="white_header"/>
            <div className="black_bg">
                <ImageGrid/>
            </div>
        </main>
    )
}

export default Galley
