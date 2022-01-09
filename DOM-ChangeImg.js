   ////////////////////////////////////////// VERSION ALPHA //////////////////////////////////
    //BETHA: PUT A GRID AND STYLES TO THE GALERY
    //DELTA: SAVE IMG IN A LOCAL STORAGE OR DATA BASE.
/*
   <h1 id="title">Manejo Dom</h1>
    <button onclick="showImg()">Show</button>

    <form id="formImg" action="">
       Link of Img: <input type="text" name="link" value="url">
    </form>
    <button onclick="AddImg()">Add</button>


    <br>
    <div class="galery">
        <img style="width: 350px;" id="img" src="https://as1.ftcdn.net/v2/jpg/01/21/03/32/1000_F_121033205_DjPchsBLyPTJCEIbNBpkafsQMlPh7U5A.jpg" alt="">

*/

function showImg(){
      return document.getElementById('img').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png';
}

function AddImg(img){
    let formImg = document.forms['formImg'];
    let link = formImg['link'].value;
    console.log(link);

    img = link;
    const image = document. createElement('img');
    image.src = img; 
    document.querySelector('.galery').appendChild(image);

    let galery = document.getElementById('galery')
    galery.appendChild(img)
    return document.getElementById('img').src = img;
}
