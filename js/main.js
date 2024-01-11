// add eventlistener for button
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // getting date from input 
  const date = document.querySelector('input').value
  // put date in url 
  const url = `https://api.nasa.gov/planetary/apod?api_key=jMjDAO8IxBMV7Gf4rqhvlWj4RdOnyHSHImD9wMIo&date=${date}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data)
        // putting title in dom 
        document.querySelector('h2').innerText = data['title']
        // getting img from data 
        document.querySelector('img').src = data['hdurl']
        // checking if data has image then hidden video section 
        if(document.querySelector('img').src.includes('http')){
          document.querySelector('iframe').style.display = "none";
        }else{
          document.querySelector('img').style.display = "none";
          document.querySelector('iframe').style.display = "flex";
          document.querySelector('iframe').src = data['url']
        }
        // putting data explanation in dom
        document.querySelector('h3').innerText = data['explanation']
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

