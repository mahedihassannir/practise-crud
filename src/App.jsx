import { Link } from 'react-router-dom'

function App() {



  let handlelogin = (e) => {

    e.preventDefault()

    let from = e.target

    let name = from.name.value
    let email = from.email.value

    let ff = { name, email }

    console.log(ff);



    fetch('http://localhost:5000/user', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },

      body: JSON.stringify(ff)


    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })




  }


  return (
    <>
      <Link style={{ textAlign: "center" }} to="/user">go to user</Link>

      <div style={{
        textAlign: 'center', display: "flex"
      }}>
        <form style={{ margin: "0 0 0 670px" }} onSubmit={handlelogin}>

          < input name='name' type="text" />
          <br />
          <br />
          <input name='email' type="email" />


          <br />
          <br />

          <input value="add user" type="submit" />


        </form >
      </div >



    </>
  )
}

export default App
