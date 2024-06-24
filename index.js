const Button = props => {
  //  Write your code here.
  const {className, name} = props
  return(
      <button type='submit' className={className}>
        {name}
      </button>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='main-heading'>Socials</h1>
    <div className='inner-container'>
      <Button className="yellow-button" name="Like"/>
      <Button className="white-button" name="Comment"/>
      <Button className="blue-button" name="Share"/>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
