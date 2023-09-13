const imageSearch = document.getElementById("image-search");
const imageResult=document.getElementById("image-result");
const showMore=document.getElementById("show-more");

const searchBTn =document.getElementById("search-btn")
const   accessKey="lnE0BFrwLWfn4BSAFuVMBIDjV66Bli0qWnqtkP3Js90";

var keyWord=""
var page =1;
// 点击搜索按钮，获取输入框中的内容

async function searchImage(){
    keyWord=imageSearch.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}1&query=${keyWord}&client_id=${accessKey}&per_page=12`;


    const response=await fetch(url)
    const data =await response.json();
    if(page===1){
        imageResult.innerHTML="";
    }
    const results =data.results;


    results.map((result)=>{
        const image = document.createElement("img")
        image.src=result.urls.small;
        const imageLink=document.createElement("a")
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        imageResult.appendChild(imageLink);

    })

    showMore.style.display="block"

    

}
 searchBTn.addEventListener("click",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
 })

 showMore.addEventListener("click",()=>{
    page++;
    searchImage();
 })