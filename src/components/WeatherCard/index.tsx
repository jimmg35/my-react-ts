import './index.css'
import rain from '../../assets/rain.png'
import rainIcon from '../../assets/rainIcon.png'

interface IElement {
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

interface IData {
  locationName: string
  weatherElement: IElement[]
}

interface ILocation {
  locations: {
    datasetDescription: string
    locationsName: string
    dataid: string
    location: IData[]
  }[]
}

interface IWeatherResult {
  records: ILocation
  success: string
}

const fetchData = async () => {
  const response = await fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=rdec-key-123-45678-011121314")
  const responseContent = await response.json() as IWeatherResult
  const tempData = responseContent.records.locations.at(0)
  if (tempData !== undefined) {
    const countyNames: string[] = []
    for (let i = 0; i < tempData.location.length; i++) {
      const countyName = tempData.location[i].locationName
      countyNames.push(countyName)
    }
    return countyNames
  }
}

fetchData()

const location = 'Taichasdasdung'

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
          <img src={rainIcon} className='WeatherIcon' />
          <span className='WeatherTemp'>18°C</span>
        </div>

        <div className='DayChip'>
          <img src={rainIcon} className='WeatherIcon' />
          <span className='WeatherTemp'>18°C</span>
        </div>

        <div className='DayChip'>
          <img src={rainIcon} className='WeatherIcon' />
          <span className='WeatherTemp'>18°C</span>
        </div>

        <div className='DayChip'>
          <img src={rainIcon} className='WeatherIcon' />
          <span className='WeatherTemp'>18°C</span>
        </div>

        <div className='DayChip'>
          <img src={rainIcon} className='WeatherIcon' />
          <span className='WeatherTemp'>18°C</span>
        </div>

        <div className='DayChip'>
          <img src={rainIcon} className='WeatherIcon' />
          <span className='WeatherTemp'>18°C</span>
        </div>

        <div className='DayChip'>
          <img src={rainIcon} className='WeatherIcon' />
          <span className='WeatherTemp'>18°C</span>
        </div>

      </div>

    </div>
  )
}

export default WeatherCard
