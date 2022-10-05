import { useEffect, useState } from "react"
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import './index.css'
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils"
import * as projection from "@arcgis/core/geometry/projection"
import SpatialReference from "@arcgis/core/geometry/SpatialReference"
import Extent from "@arcgis/core/geometry/Extent"

type Basemap = 'gray-vector' | 'satellite'

export interface IMyMap {
  basemap: Basemap
  center: number[]
  zoom: number
  id: string
  isSelectorActive: boolean
}

const MyMap = ({
  basemap,
  center,
  zoom,
  id, isSelectorActive
}: IMyMap) => {
  const [map, setmap] = useState<Map | undefined>(undefined)
  const [mapView, setmapView] = useState<MapView | undefined>(undefined)
  const [handle, sethandle] = useState<any | undefined>(undefined)

  const handleExtentChange = (view: MapView) => {
    const projectedExtent = projection.project(view.extent, new SpatialReference({ wkid: 4326 })) as Extent
    console.log(projectedExtent.xmax)
  }

  useEffect(() => {
    const map = new Map({
      basemap: basemap
    })
    const view = new MapView({
      map: map,
      center: center,
      zoom: zoom,
      container: id
    })
    setmap(map)
    setmapView(view)
  }, [])

  useEffect(() => {
    if (!isSelectorActive || !mapView || !map) {
      if (handle) handle.remove()
      return
    }
    const outputHandle = mapView.on('click', (event) => {
      console.log(event.mapPoint.longitude, event.mapPoint.latitude)
    })
    sethandle(outputHandle)
  }, [isSelectorActive])

  return (
    <div id={id} className="MyMap">

    </div>
  )
}

export default MyMap
