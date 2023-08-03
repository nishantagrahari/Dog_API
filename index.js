 function fetchImage(){
    //fetching data from API
    let promise= fetch('https://dog.ceo/api/breeds/image/random') //await can also be added

    
    // console.log(promise);
    // let data  = await promise.json()
    // console.log(data);

    promise
    .then(function(response){ 
        return response.json()
    })
    .then(function(data){             //async await
            // console.log(data);
            let url = data['message'];            
            let imageEl = document.createElement("img");
            imageEl.src = url;
            imageEl.className="img"

            let img_container = document.querySelector(".img")            
            let parent=img_container.parentNode;
            parent.replaceChild(imageEl,img_container); 
          })        
    .catch(function(err){
        console.log(error.message);
    })
        
    }


function eventListener(){
    document.getElementById("Button")
    .addEventListener("click",fetchImage)
}

eventListener()




















// promise.
// .then((response)=>{
//     data =  response.json();
//     console.log(data['message'])})
    
//     // response.json()})
//     // // .then(function(data){             //async await
//     // //         // console.log(data);
//     //         let url = data['message'];            
//     //         let imageEl = document.createElement("img");
//     //         imageEl.src = url;