export function getLandingPagePlaces() {
    const sitiosFeatures = getFeaturedPlaces()
    const sitios = getAllPlaces()
    sitios.forEach(sitio => {
        const salas = getRoomsByPlaceId(sitio._id)
        sitio.workStations = salas.length
    })
    





}