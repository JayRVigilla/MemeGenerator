// after page loads set up variables and does the baiscs:
// -takes inputs and makes a meme
// -adds delete button
// functionally deletes when delete button hit
window.onload = function(){
    var memeGuts = document.getElementById("memePuts");
    var gallery = document.getElementById("memeGallery");

    //prevent reload when hitting button 
    memeGuts.addEventListener("submit", function(event){
        event.preventDefault();
    
        //var memeDeath = document.createElement("button");
        //memeDeath.innerHTML = "XX"; 

        // make meme with img in background and text overlaid
        var newMeme = document.createElement("li");
        var top = document.createElement('div');
        top.innerHTML = document.getElementById("topText").value;
        top.classList = 'tops';
        newMeme.appendChild(top);
        var pic = document.createElement('img');
        pic.src = document.getElementById("imageURL").value;
        newMeme.appendChild(pic);
        var bottom = document.createElement('div');
        bottom.innerHTML = document.getElementById("bottomText").value;
        bottom.classList = 'bottoms';
        newMeme.appendChild(bottom);
        newMeme.classList = "memes";

        // add meme to gallery and add delete button
        gallery.appendChild(newMeme);
        memeGuts.reset(); 
    })

    // remove meme when clicked
    var  daMemes = document.getElementsByClassName("memes");
    gallery.addEventListener('click', function(){
        if(event.target.tagName.toLowerCase() === 'img'){
            event.target.parentNode.remove();
        }
    })

    // when hover over, make whole meme shadowed and shrink to 80%
    gallery.addEventListener('mouseover', function(){
        if(event.target.tagName.toLowerCase() === 'img'){
            event.target.style.filter = "brightness(30%)";// shirnk to 80% and shadow
            //event.target.style.width = 80%;
        }
    })
    gallery.addEventListener('mouseout', function(){
        if(event.target.tagName.toLowerCase() === 'img'){
            event.target.style.filter = "brightness(100%)";// shirnk to 80% and shadow
            //event.target.style.width = 100%;
        }
    });
}