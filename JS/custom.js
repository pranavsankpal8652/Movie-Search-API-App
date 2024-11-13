
const fetch_movies=async(api_url='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')=>{
    var movies_fetch=await fetch(api_url)
    // console.log(movies_fetch)
    var movies= await movies_fetch.json()
    // console.log(movies.results)
    getmovies(movies.results)
    
}
fetch_movies()

var movie_list_div=document.querySelector('.movies')
let loader=document.querySelector('#loading')
 var image='https://image.tmdb.org/t/p/w1280'
    function getmovies(movie_arr){
        movie_list_div.innerHTML=''
        if(movie_arr.length>=1)
        {
            movie_arr.forEach(movie=>{
                var img=image+movie.poster_path
                movie_list_div.innerHTML+=
                `<div class='movie'>
                    <div class='poster'>
                        <img src='${img}'>
                    </div>
                    <div class='info'>
                        <div class='title'>${movie.title}</div>
                    <div class='re_date'>${movie.release_date}</div>
                    </div>
                </div`
            
            })
            loader.style.display='none'
        }
        else{
            movie_list_div.innerHTML+='<h2>No Data Found</h2>'
        }
    }

var inp=document.querySelector('#search')
inp.addEventListener("keyup",()=>{
    // console.log(inp.value)
    var search_val=inp.value
    if(search_val!==''){
        var api_url=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search_val}`
    }
    else{
        var api_url='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
    }
   loader.style.display="block"
   setTimeout(() => {
    fetch_movies(api_url);
}, 0);
    

})