function createMarkup (arr){
    return arr.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads})=>
    `<a class="gallery__link" href=${largeImageURL}>
               <img class="gallery__image" width="350"src=${webformatURL} alt=${tags} loading="lazy" />
                     <div class="info__item">
                         <b>Likes</b>
                         ${likes}
                     </div>
                     <div class="info__item">
                         <b>Views</b>
                         ${views}
                     </div>
                     <div class="info__item">
                         <b>Comments</b>
                         ${comments}
                     </div>
                     <div class="info__item">
                         <b>Downloads</b>
                         ${downloads}
                     </div>
                 
             </div>
         </a>
         `
   ).join('');
 }

 export {createMarkup}