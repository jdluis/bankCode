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
