import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import { locationData } from '../../Data/Data'
import CardContainer from '../../shared/CardContainer'
import '../../styles/Map.scss'

mapboxgl.accessToken = 'pk.eyJ1IjoibmlzaGF0cm95IiwiYSI6ImNrZWk1MTMzOTB5dnMydGxwdXdobnh6a2sifQ.oRQMU_mGX9mWCjiBu0foXQ';

let map: any = undefined

const Mapbox = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const [lng, setLng] = useState<number>(-70.9);
    const [lat, setLat] = useState<number>(42.35);
    const [zoom, setZoom] = useState<number>(2);
    const [location, setLocation] = useState<any[]>([...locationData])

    useEffect(() => {
        if (mapContainer.current) {
            map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
                center: [lng, lat],
                zoom: zoom,
            });
        }

        return () => map.remove();
    }, []);

    useEffect(() => {
        location.forEach((loc) => {
            new mapboxgl.Marker({
                color: 'blue',
                draggable: false,
            }).setLngLat(loc['location(lng/lat)']).addTo(map)
        })
    })

    return (
        <CardContainer comp='h5'>
            <div className="map-container" ref={mapContainer} />
        </CardContainer>
    )
}

export default Mapbox
