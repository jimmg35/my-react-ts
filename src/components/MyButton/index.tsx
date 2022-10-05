import './index.css'
import className from 'classnames'

interface IMyButton {
  children: React.ReactNode
  onClick: () => void
}

const MyButton = (props: IMyButton) => {
  return (
    <div className={className({
      'MyButton': true,
    })}
      onClick={props.onClick}
    >
      {/* {props.title} */}
      {props.children}
    </div>
  )
}

export default MyButton
