const MOCK_DATA = require('../MOCK_DATA.json')

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'

const isSameDay = (d1, d2)  => d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()


const loadDataSucces = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data
})


export const loadData = (input) => dispatch => {

  const inputDate = new Date(input.date)

  const filterOptions = v => v.flightNumber === input.flightNumber && isSameDay(new Date(v.dateDeparture), inputDate)
  const cleanData = v => {
    v.dateDeparture = new Date(v.dateDeparture)
    v.dateArrival = new Date(v.dateArrival)
    return v
  }
  
  const result = MOCK_DATA.filter(filterOptions).map(cleanData)[0]
  return !result ? dispatch(loadDataSucces({noResult: 'noResult'})) : dispatch(loadDataSucces(result))
}