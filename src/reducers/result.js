import { GET_DATA_SUCCESS } from '../actions/loadData'

export default function (state = [], {type, payload}) {
	switch (type) {
    case GET_DATA_SUCCESS:
    return payload
		default:
      return state
  }
}