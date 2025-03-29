import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let [user, setUser] = useState([
    {
      name : "QLogo",
      time : 12,
      followerCount : 78200,
      image : "https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png  ",
      description : "Want to know how to win big? Check out how threse folk win 6000 in bounty",
      add : false
    }
  ])

  return (
    <div style={{position:"relative",background:"#dfe6e9", display:"flex", justifyContent:"center",padding:20, height:"auto", minHeight:"100vh"}}>

      <div style={{position:"fixed", left:"3%"}}>
        <ProfileComp/>
        <div style={{position : "relative", marginTop:"20px"}}>
        <ToggleMessage></ToggleMessage>
      </div>
      </div>
      <div style={{  display:"flex", flexDirection:"column",  alignItems:"center", padding:"10px 0px"}}>
        <div> Hi This is Aayushi</div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={user[0].add}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={user[0].add}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={user[0].add}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={true}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={user[0].add}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={user[0].add}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={true}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={user[0].add}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={user[0].add}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={user[0].add}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={user[0].add}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={user[0].add}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={true}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={user[0].add}></PostComp>
        </div>
        <div>
          <PostComp name={user[0].name} time={user[0].time} description={user[0].description} followerCount={user[0].followerCount} image={user[0].image} add={user[0].add}></PostComp>
        </div>
      </div>
      <div style={{position:"fixed", right:"3%",}}>
        <TrendingNow/>
      </div>
    </div>
  )
}

// const style={
//   width:200
// }

function PostComp(props){

  // let divComp;
  // if(props.add){
  //   divComp =  <div>
  //     <div> Promoted .</div>
  //   </div>
  // }
  // else{
  //   divComp = 
  //   <div>
  //     <div>{props.followerCount} followers</div>
  //     <span>{props.time}mins</span>
  //     &nbsp;
  //     <img src={"https://imgs.search.brave.com/wHg_B7Mwth2btNz6NNsv8eECtSSV_C8YmjLq4J9r9ns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzU5LzU5LzQy/LzM2MF9GXzc1OTU5/NDI5OV9HaWdpZXMz/Z1R2VU82MEdVelRZ/NDJINHExWmFrd1M2/QS5qcGc"} style={{width:"8px"}}></img>

  //   </div>
    
  // }


  return (
    <div style={{backgroundColor:"white",border:"1px solid white", borderRadius:"20px", padding:20, width:"auto",margin:"10px 0px",height:"auto", minHeight:"15vh"}}>
    {/* <div style={style}> */}
    <div style={{width:200, display:"  flex", alignItems:"center"}}>
      <img src={props.image} style={{ width:35, height:35, borderRadius:"100%", border:'1px solid white'}} ></img>
      <div style={{fontSize:10, marginLeft:10}}>
        <b>
          {props.name}
        </b>
        {/* {divComp} this uses the if condition outside easier way is :- */}

          {props.add == true ? (<div style={{color:"red"}}>Promoted</div>) : (
          <div>
          <div>{props.followerCount} followers</div>
          <span>{props.time}mins</span>
          &nbsp;
          <img src={"https://imgs.search.brave.com/wHg_B7Mwth2btNz6NNsv8eECtSSV_C8YmjLq4J9r9ns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzU5LzU5LzQy/LzM2MF9GXzc1OTU5/NDI5OV9HaWdpZXMz/Z1R2VU82MEdVelRZ/NDJINHExWmFrd1M2/QS5qcGc"} style={{width:"8px"}}></img>
          </div>)
        }

        
      </div>
    </div>
      <div style={{marginTop:"10px",fontSize:12}}> {props.description}
      </div>
    </div>
  )
}

function TrendingNow(){
  return (
    <>
        <div style={{backgroundColor:"white",border:"1px solid white", borderRadius:"10px", padding:10, width:"20vw",margin:"10px 0px"}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h2>Trending Now</h2>
          <img src="https://imgs.search.brave.com/iW2mW4QOxFXxvTvlQ5L_xXiGpqo9fP7VJxHl-mbS8kk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9pbWcv/cS5wbmc" style={{width:"10%", height:"10%"}}></img>
          </div>
          <hr/>
          <div>
            <span>curated by Linkedin News</span>
          </div>
          <div>
            <h4 style={{marginBottom:0}}>India's top 20 startups</h4>
            <span style={{fontSize:12}}>1d ago . 54,719 readers</span>
          </div>
          <div>
            <h4 style={{marginBottom:0}}>SBI Plans to hire 10,000 people</h4>
            <span style={{fontSize:12}}>8d ago . 54,719 readers</span>
          </div>
          <div>
            <h4 style={{marginBottom:0}}>What Matters to GenZ</h4>
            <span style={{fontSize:12}}>1d ago . 54,719 readers</span>
          </div>
          <div>
            <h4 style={{marginBottom:0}}>UPI Transactions</h4>
            <span style={{fontSize:12}}>1d ago . 54,719 readers</span>
          </div>
          <div>
            <h2 style={{color:"grey"}}>Play Today's quiz</h2>
            <p>Queens</p>
            <p>Pinpoint</p>
            <p>Crossclimb</p>
          </div>
        </div>
    </>
  )
}

function ProfileComp(){
  return (
  <div style={{position:"relative", width:"20vw", backgroundColor:"white"}}>
    <div style={{position:"relative",top:0,backgroundColor:"#95a5a6", width:"100%", height:"10vh"}}>
      {/* RANDOM STUFF */}
    <div style={{position:"absolute",bottom:"-50%",left:"35%", height:"10vh", width:"fit-content",height:"fit-content"}}>
      <img src="/linkdin_profile.jpg" style={{width:"5vw", borderRadius:"100"}}></img>
    </div>
    </div>
    <div style={{position:"relative", padding:"40px 20px"}}>
      <div>
        <p>Profile Views : 41,000</p>
        <p>Post Impressions : 4,000</p>
      </div>
      <div>
        <p>Unlock Premium tools & features</p>
        <h3>Try for Rs 0</h3>
      </div>
      <div>
        <h3>SAVED ITEMS</h3>
      </div>
    </div>
  </div>
  )
}

function ToggleMessage(){
  let [view, setView] = useState(false);
  
  return <div>
    <button onClick={function(){setView(view => !view)}}>Toggle Message</button>
    {view && <p>Hey There this is conditional rendering</p> }
  </div>
}

// Now moving to another app.jsx to learn more things

export default App
