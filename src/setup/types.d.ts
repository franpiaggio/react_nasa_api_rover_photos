type Rover = {
  id: number
  name: string
  landing_date: string
  launch_date: string
  status: string
  max_sol: number
  max_date: string
  total_photos: number
  cameras: Camera[]
}
type Camera = {
  id: number
  name: string
  rover_id: number
  full_name: string
}

type Filters = {
  rover: any
  camera: any
}

interface FilterAction {
  type: string
  payload: {
    rovers?: Rover[]
    rover?: Rover
    camera?: Camera
    roverName?: string
    cameraName?: string
  }
}

export type { Rover, Camera, Filters, FilterAction }
