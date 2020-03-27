import { isObject } from '@difference-engine/common'

const KM = 6378
const MI = 3963

export const toRadians = (n) => (n * Math.PI) / 180

function getHaversineFor (points, radius) {
  if (isObject(points)) {
    const {
      to: alpha = { lat: 0, lng: 0 },
      from: omega = { lat: 0, lng: 0 }
    } = points

    const LAT = toRadians(alpha.lat - omega.lat)
    const LNG = toRadians(alpha.lng - omega.lng)
    const lat = LAT / 2
    const lng = LNG / 2
    const a = Math.sin(lat) * Math.sin(lat) + Math.cos(toRadians(omega.lat)) * Math.cos(toRadians(alpha.lat)) * Math.sin(lng) * Math.sin(lng)
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
