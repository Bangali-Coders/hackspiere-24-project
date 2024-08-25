import React from 'react'

const SidePannel = ({ map}) => {

    const zoomIn = () => {
        let view = map.getView();
        let zoom = view.getZoom();
        view.setZoom(zoom + 0.5);

        map.render();
    }

    const zoomOut = () => {
        let view = map.getView();
        let zoom = view.getZoom();
        view.setZoom(zoom - 0.5);

        map.render();
    }

    return (
        <div className="sidePannel h-full bg-secondary px-3 py-5 d-flex flex-column" >
            <div className='d-flex flex-row gap-2'>
                <button onClick={zoomIn} className='btn btn-sm btn-primary'>Zoom In</button>
                <button onClick={zoomOut} className='btn btn-sm btn-primary'>Zoom Out</button>
            </div>
        </div>
    )
}

export default SidePannel