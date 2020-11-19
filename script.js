'use strict'




function getData(username){
    const url=`https://api.github.com/users/${username}/repos`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(err => console.log('Sorry, something went wrong'))
    
}

function displayResults(responseJson) {
    $('#results-list').empty();
    
    console.log(responseJson);
    for (let i=0; i<responseJson.length; i++){
        $('#results-list').append(`
        <li>
            ${responseJson[i].name}
            <a href="${responseJson[i].html_url}">Repos</a>
        </li>`);
    }
}


function watchForm(){
   
    $('#js-form').submit(e => {
        e.preventDefault();
        console.log("App is loaded");
        const userFind=$('#search-user').val();
        console.log(userFind);
        getData(userFind);
    })
}

$(watchForm);
