import './index.css'

interface IMyInput {
  value: number
  placeholder?: string
  onChange: (value: number) => void
}

const MyInput = ({
  value,
  placeholder,
  onChange
}: IMyInput) => {

  return (
    <input
      type='number'
      className='MyInput'
      placeholder={placeholder ? placeholder : ''}
      value={value}
      onChange={(e) => {
        onChange(Number(e.target.value))
      }}
    />
  )
}

export default MyInput
