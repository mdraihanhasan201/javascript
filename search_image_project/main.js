const   accessKey="lnE0BFrwLWfn4BSAFuVMBIDjV66Bli0qWnqtkP3Js90";
 
 const searchFrom = document.getElementById("search-from")
 
 const searchBox = document.getElementById("search-box")
 
 const searchResult = document.getElementById("search-from")
 
 const showMore = document.getElementById("show-more")


 var keyWord =""
 var page =1;

 async function searchImage(){
    
    keyWord = searchBox.value;

    const url =`https://api.unsplash.com/search/photos?page=${page}1&query=${keyWord}&client_id=${accessKey}`;


    const response =await fetch(url);
    const data = await response.json();
    const results =data.results;
    results.map((result)=>{
        const image = document.createElement("img")
        image.src=result.urls.small;
        const imageLink=document.createElement("a")
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

    })
    
 }
 searchFrom.addEventListener("click",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
 })