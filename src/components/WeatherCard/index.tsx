import './index.css'
import rain from '../../assets/rain.png'

const fetchData = async () => {

  interface IElement{
    description: string
    time: {
      startTime: string
      endTime: string
      elementValue: {
        value: string
        measures: string
      }[]
    }[]
  }

  interface IData{
    location: {
      datasetDescription: string
      locationName: string
      dataid: string
    }
  }

  interface ILocation{
    location: {
      datasetDescription: string
      locationName: string
      dataid: string
  }

  interface IWeatherResult{
    records: ILocation
    success: string
  }
  

  const response = await fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=rdec-key-123-45678-011121314")
  const responseContent = await response.json()
  console.log(responseContent)
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));
}

fetchData()

const location = 'Taipei'

const WeatherCard = () => {
  return (
    <div className='WeatherCard'>

      <div className='Head'>

        <div className='Temperature'>
          <p className='Location'>{location}</p>
          <p className='TemperatureNumber'>18°C</p>
          {/* <p className='Date'>2022/09/29</p> */}
        </div>

        <div className='Pics'>
          <img src={rain} />
        </div>

      </div>

      <div className='Calendar'>

      <div className='DayChip'>

        </div>
        
      <div className='DayChip'>

        </div>

      <div className='DayChip'>

        </div>

      <div className='DayChip'>

        </div>

      <div className='DayChip'>

        </div>

      <div className='DayChip'>

        </div>

      <div className='DayChip'>

        </div>

      </div>

    </div>
  )
}

export default WeatherCard
