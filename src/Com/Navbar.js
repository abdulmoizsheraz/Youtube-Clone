import React from 'react'
function Navbar() {
  return (
    <>

<nav class="navbar  text-light sticky-top" style={{background:"black",borderBottom:"2px solid grey"}}>
  <div class="container-fluid" >
    <h3 className='text-center'><i class="fa-brands fa-youtube"></i></h3>
    <form class="d-flex flex-c" role="search">
    <div class="textbox-button-container">
  <input type="text" id="textbox"  placeholder='Search'class="textbox"/>
  <button type="button" class="button"><i class="fa-solid fa-magnifying-glass"></i></button>
</div>
    </form>
  </div>

</nav>
    </>
  )
}

export default Navbar