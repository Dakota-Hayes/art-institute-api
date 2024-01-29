let currentId = 250924;

async function onClick() {
    let identifier = currentId
    
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept','application/json'],
        ['AIC-User-Agent','API-Learning (Dakotagollonhayes@gmail.com)']
    ]);

    let data_request = new Request(`https://api.artic.edu/api/v1/artworks/${identifier}`,{
        method: 'GET',
        headers: headers 
    });

    let data_result = await fetch(data_request);
    let data_response = await data_result.json();
    console.log(data_response);
    let image_id = data_response.data.image_id;
    console.log(image_id);
    let image_name = data_response.data.title;
    console.log(image_name);
    let artist_name = data_response.data.artist_title;
    console.log(artist_name);
    document.getElementsByTagName('img')[0].src = ``;
    currentId = switchImage(identifier);
}

function switchImage(id){
    switch(id){
        case 250924: {
            // return '5e032f0c-42d3-74e4-1bb6-66250a8ad6c6';
            return 3752;
        }
        case 3752: {
            // return 'd0979087-dc1b-f259-a23f-169cdced27ee';
            return 6010;
        }
        case 6010: {
            // return '0a0e16c5-8510-bb2d-b2ca-424feae48d5c';
            return 3816;
        }
        case 3816: {
            // return '763257c8-fbf9-0377-54ab-ae3cee7ff7a4';
            return 11294;
        }
        case 11294: {
            // return '77ecb291-d716-f898-b491-3192a96307c8';
            return 250924;
        }
    }
}