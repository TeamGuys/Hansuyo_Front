import Icon from "./Icon"

export const Subscribe = ({text}) => {
  return(
    <>
      <p className="w-full px-3 py-1"> {text} </p>
      <div className="w-full px-3 flex space-x-3">
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />

      </div>
    </>
  )
}