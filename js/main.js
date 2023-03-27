//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value // getting the value of the form that was submitted
  console.log(choice) // checking to see what the choice comes back as

  const url = `https://api.nasa.gov/planetary/apod?api_key=RCeT2oK5KqUXq45FN0p1Yzpyr9mPv9G0MU0d3BgQ&date=${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => { // return data, do the following
        console.log(data)
        if ( data.media_type === 'image' ) { //If data is an IMAGE, load as image
          document.querySelector('img').src = data.hdurl
          document.querySelector('#explanation').style.backgroundColor = 'rgba(0, 0, 0, 0.45)';
          document.querySelector('img').style.boxShadow = '0px 0px 20px 1px black';
          document.querySelector('img').style.width = "40%"
        }else if ( data.media_type.value === 'video') { //If data is a VIDEO, load as video
          document.querySelector('iframe').src = data.url
        }
      document.querySelector('#explanation').innerText = `"${data.explanation}"`
      document.querySelector('#dateInsert').innerText = `Picture from ${data.date}`
      document.querySelector('#titleInsert').innerText = data.title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

