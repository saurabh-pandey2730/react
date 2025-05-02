import { useState , useEffect,useContext } from "react"
import MyContext from "./context/UseContext"
      
const Joke = () => {
  
  let {Name} = useContext(MyContext) 
    const [jokeData, setJokeData] = useState({})
    const[punchline, setPunchline] =useState(null)
    
    async function fetchData(){
        let response =  await  fetch('https://official-joke-api.appspot.com/random_joke') 
      let data =  await   response.json()  
        setJokeData(data)
                            }
       useEffect(()=>{

          fetchData()

       },[])

       function anotherJoke(){
        fetchData()
          if(punchline){
             setPunchline(jokeData.punchline)
          }else{
            setPunchline(null)
          }
       }
       function punchlineData(){
        //   if(punchline){
        //     setPunchline(null)
        //   }else{
        //     setPunchline(jokeData.punchline)
        //   }
         punchline? setPunchline(null):setPunchline(jokeData.punchline) 
       }
  return (
    <div className="joke"> 
        <h2>Type:- <span className="joke-type">{jokeData.type}</span></h2>
         <p style={{marginLeft:"50px"}}> setup:- {jokeData.setup}</p>
          <p style={{marginLeft:"50px"}}>punchline:-{punchline}</p> 
           <div className="joke-btn">
           <button onClick={punchlineData} >{punchline? "hide":"show"}</button>
           <button onClick={anotherJoke} >another</button> 
            <p>{Name}</p>

           </div>
    </div>
  )
}
export default Joke