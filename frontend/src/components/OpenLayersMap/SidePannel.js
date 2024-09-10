import React from 'react'
import Gemini from './Gemini';

const SidePannel = ({ map }) => {

    const zoomIn = (zoomAmount = 0.5) => {
        let view = map.getView();
        let zoom = view.getZoom();
        view.setZoom(zoom + zoomAmount);

        map.render();
    }

    const zoomOut = (zoomAmount = 0.5) => {
        let view = map.getView();
        let zoom = view.getZoom();
        view.setZoom(zoom - zoomAmount);

        map.render();
    }

    const gradualZoomIn = (zoomAmount = 0.5) => {
        let view = map.getView();
        let zoom = view.getZoom();
        view.animate({
            zoom: zoom + zoomAmount,
            duration: 300
        });
    }

    const gradualZoomOut = (zoomAmount = 0.5) => {
        let view = map.getView();
        let zoom = view.getZoom();
        view.animate({
            zoom: zoom - zoomAmount,
            duration: 300
        });
    }

    const possibleActions = {
        "zoomIn": gradualZoomIn,
        "zoomOut": gradualZoomOut,
    }

    return (
        <div className="sidePannel h-full bg-secondary px-3 py-5 d-flex flex-column" >
            <div className='d-flex flex-row gap-2'>
                <button onClick={zoomIn} className='btn btn-sm btn-primary'>Zoom In</button>
                <button onClick={zoomOut} className='btn btn-sm btn-primary'>Zoom Out</button>
            </div>
            <div className='d-flex flex-row gap-2 mt-2'>
                <button onClick={gradualZoomIn} className='btn btn-sm btn-primary'>GZoom In</button>
                <button onClick={gradualZoomOut} className='btn btn-sm btn-primary'>GZoom Out</button>
            </div>

            <Gemini possibleActions={possibleActions} />

        </div>
    )
}

export default SidePannel