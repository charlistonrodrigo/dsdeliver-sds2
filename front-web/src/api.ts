import axios from "axios";
import { OrderPayload } from "./Orders/types";

const API_URL = process.env.REACT_APP_API_URL;
//const API_URI = 'https://charliston-sds2.herokuapp.com';
//const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;
const mapboxToken = "pk.eyJ1IjoiY2hhcmxpc3RvbnJvZHJpZ28iLCJhIjoiY2tqcnA4cXBuMDIwaTJ5bjNpdWZiZXhoMyJ9.8AnAJ7GHhuUBu_PsklUexQ"

export function fetchProducts() {
    return axios(`${API_URL}/products`)   
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload:OrderPayload) {
    return axios.post(`${API_URL}/orders`, payload)
}