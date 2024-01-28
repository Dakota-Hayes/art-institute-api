
async function rotateImages(identifier) {
    let gallery = document.getElementsByTagName('img');
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept','application/json'],
        ['AIC-User-Agent','API-Learning (Dakotagollonhayes@gmail.com)'],
        ['Access-Control-Allow-Origin','*']
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

    let image_request = new Request(`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,{
         method: 'GET',
         headers: headers 
    });

    let image_link = await fetch(image_request);
    console.log(image_link);

}

