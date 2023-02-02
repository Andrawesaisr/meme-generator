import React from 'react';

export default function Meme(){
    let memee
    // let [imgg,updateImage]=React.useState('https://i.imgflip.com/30b1gx.jpg');
    let [meme,updateMeme]=React.useState({
      topText:'',
      bottomText:'',
      randomImage:'https://i.imgflip.com/30b1gx.jpg'
    })
    let [allMemes,updateMemes]=React.useState([])

    React.useEffect(async () => {
      const res= await fetch("https://api.imgflip.com/get_memes")
          const data= await res.json()
           updateMemes(data.data.memes) 
  }, [])

     
      console.log(allMemes)
    function getImage(){
       const array= allMemes
        const radnomIndex=Math.floor(Math.random()*array.length);
         memee= array[radnomIndex].url;
        
        updateMeme((prev)=>{
          return{
              ...prev,
              randomImage:memee
          }
        })
    }
    const changeText=(event)=>{
      event.preventDefault();
      const {name,value}=event.target;
    updateMeme((data)=>{
        return{
          ...data,
            [name]: value
        }
      })
    }
    console.log(meme)

    return(
      <main>
          <div className='form'>
            <input type="text" placeholder="upper" id="upperInput" className='form--input' name="topText" value={meme.topText}  onChange={changeText}/>
            <input type="text" placeholder="lower" id="lowerInput" className='form--input' name="bottomText" value={meme.bottomText} onChange={changeText} />
            <button className='form--submit' onClick={getImage}>
            Get a new meme image  🖼
            </button>
        </div>
       
        <div className="meme">
               <img src={meme.randomImage} alt="image" className='image'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
      </main>
    )
}