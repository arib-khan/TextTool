// import React, {useState} from 'react'

    export default function About(props) {

      // const [myStyle,setMyStyle] = useState({
      //   color:'black',
      //   backgroundColor:'white'
      // })

      const myStyle = {
        color:props.mode === 'dark'?'white':'black',
        backgroundColor:props.mode === 'dark'?'#212529':'white'
        
      }

      // const [btntext,setBtnText] = useState("Dark Mode")

      // const toggleStyle = ()=>{
      //   if(myStyle.color === 'black'){
      //     setMyStyle({
      //       color:'white',
      //       backgroundColor:'black',
      //       border:'2px solid whitevv'
      //     })
      //     setBtnText("Light Mode")
      //   }
      //   else{
      //     setMyStyle({
      //       color:'black',
      //       backgroundColor:'white'
      //     })
      //     setBtnText("Dark Mode")
      //   }
      // }

    return (
        <div className='container' style={myStyle}>
            <h2 className='my-3'>About us</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       <strong>Effortless case conversion</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle} >Switch between uppercase and lowercase text with a single click. No more manually retyping!</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Clean up your text</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle} >Eliminate unnecessary spaces to create crisp and concise documents.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <strong>Word and character count at your fingertips</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Gain insights into the length of your text and ensure you meet word count requirements.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFore" aria-expanded="false" aria-controls="flush-collapseFore">
      <strong>Estimate your reading time</strong>
      </button>
    </h2>
    <div id="flush-collapseFore" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Get a quick idea of how long it will take to read the text you provide.</div>
    </div>
  </div>
  
</div>

        </div>
  )
}
