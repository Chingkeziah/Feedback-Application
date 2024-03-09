
function Header({text}){

    const header = {
      backgroundColor: '#ff6a95',
      color: '#fff'
    }
  return (
    <>
      <header style={header}>
        <h3>{text}</h3>
      </header>
    </>
  )
}

export default Header


