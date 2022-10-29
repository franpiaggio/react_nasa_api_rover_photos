import { ACTIONS } from "./actions"
import type { Rover, Camera, Filters, FilterAction } from "@/setup/types"

function filtersReducer(state: Filters, action: FilterAction): Filters {
  switch (action.type) {
    case ACTIONS.SET_DEFAULT_ROVER:
      return { ...state, rover: action.payload.rover }

    case ACTIONS.SET_ROVER:
      const selectedRover = action.payload.rovers
        ? action.payload.rovers.filter(
            (rover: Rover) => rover.name === action.payload.roverName
          )[0]
        : null
      const camera = selectedRover ? selectedRover.cameras[0] : null
      return { ...state, rover: selectedRover, camera: camera }

    case ACTIONS.SET_DEFAULT_CAMERA:
      return { ...state, camera: action.payload.camera }

    case ACTIONS.SET_CAMERA:
      const selectedCamera = state?.rover?.cameras
        ? state.rover.cameras.filter(
            (camera: Camera) => camera.name === action.payload.cameraName
          )[0]
        : null

      return { ...state, camera: selectedCamera }
  }
  return state
}
export { filtersReducer }
