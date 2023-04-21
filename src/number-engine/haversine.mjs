/*
 *  https://www.movable-type.co.uk/scripts/latlong.html
 *
 *  Haversine formula:
 *    a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
 *    c = 2 ⋅ atan2( √a, √(1−a) )
 *    d = R ⋅ c
 *
 *  where φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km);
 *  note that angles need to be in radians to pass to trig functions!
 *
 *  JavaScript:
 *    var R = 6371e3; // metres
 *    var φ1 = lat1.toRadians();
 *    var φ2 = lat2.toRadians();
 *    var Δφ = (lat2-lat1).toRadians();
 *    var Δλ = (lon2-lon1).toRadians();
 *
 *    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
 *            Math.cos(φ1) * Math.cos(φ2) *
 *            Math.sin(Δλ/2) * Math.sin(Δλ/2);
 *    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
 *
 *    var d = R * c;
 */

import {
  isObject
} from '#common'

const KM = 6378
const MI = 3963

export const toRadians = (n) => (n * Math.PI) / 180

function getHaversineFor (points, radius) {
  if (isObject(points)) {
    const {
      from: alpha = { lat: 0, lng: 0 },
      to: omega = { lat: 0, lng: 0 }
    } = points

    const LAT = toRadians(omega.lat - alpha.lat)
    const LNG = toRadians(omega.lng - alpha.lng)

    const lat = LAT / 2
    const lng = LNG / 2

    const a = (
      Math.sin(lat) * Math.sin(lat) +
      Math.cos(toRadians(alpha.lat)) * Math.cos(toRadians(omega.lat)) *
      Math.sin(lng) * Math.sin(lng)
    )

    const c = 2 * (
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      )
    )

    return (radius * c) // .toFixed(2)
  }

  return NaN
}

export default function toHaversine (points) {
  return {
    km () {
      return getHaversineFor(points, KM)
    },
    mi () {
      return getHaversineFor(points, MI)
    }
  }
}
