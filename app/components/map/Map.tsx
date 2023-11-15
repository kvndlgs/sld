"use client";

import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapboxMapProps {
  lat: number;
  lng: number;
  zoom: number;
  geometry: any;
  initialOptions?: Omit<mapboxgl.MapboxOptions, "container">;
  onMapLoaded?(map: mapboxgl.Map): void;
  onMapRemoved?(): void;
}

function ShieldMap({ initialOptions = {}, onMapLoaded }: MapboxMapProps) {
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        coordinates: [45.328217, -73.5637455],
        geometry: {
          type: "Point",
          coordinates: [-74.0576641, 46.5355285],
        },
        properties: {
          title: "Shield Signalisation Inc",
          description: "St-Zenon, Québec",
        },
      },
      {
        type: "Feature",
        coordinates: [-73.7155804, 45.2498753],
        geometry: {
          type: "Point",
          coordinates: [-73.7155804, 45.2498753],
        },
        properties: {
          title: "Shield Signalisation Inc",
          description: "St-Rémi, Québec",
        },
      },
    ],
  };
  // this is where the map instance will be stored after initialization
  const [map, setMap] = React.useState<mapboxgl.Map>();

  // React ref to store a reference to the DOM node that will be used
  // as a required parameter `container` when initializing the mapbox-gl
  // will contain `null` by default
  const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;
    // if the window object is not found, that means
    // the component is rendered on the server
    // or the dom node is not initialized, then return early
    if (typeof window === "undefined" || node === null) return;

    // otherwise, create a map instance
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken:
        "pk.eyJ1Ijoic2hpZWxkc2lnbmFsaXNhdGlvbiIsImEiOiJjbG5lcXVnMWUwZzcxMm5udTZocGNkbTgwIn0.14VPm6ukzf4BR8Dgl-9J4w",
      style: "mapbox://styles/shieldsignalisation/clotzt9cl00ln01pe7d0y43t5",
      center: [-74.0180349, 45.789495],
      zoom: 6,
      ...initialOptions,
    });

    for (const feature in geojson.features) {
      const el = document.createElement("div");
      el.className =
        "bg-[url('https://i.imgur.com/P8yEpzI.png')] bg-cover w-[31px] h-[70px] cursor:pointer z-50";

      new mapboxgl.Marker(el)
        .setLngLat([-73.7155804, 45.2498753])
        .addTo(mapboxMap);
    }

    // save the map object to React.useState
    setMap(mapboxMap);
    if (onMapLoaded) mapboxMap.once("load", onMapLoaded);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} style={{ width: "100vw", height: "50vh" }} />;
}

export default ShieldMap;
