const API_URL = "https://dog.ceo/api/breed/appenzeller/images"

async function fetchData() {
    try {

        const Fetch_api = await fetch(API_URL);
        const Res_json = await Fetch_api.json();
        console.log(Res_json);

        //Getting the image element
        const imgElement = document.querySelector("#main");

        const innerHtml = Res_json.message.map((imageurl) => {
            return `<img src="${imageurl}" alt="Random image" class="url_img" height="200px" width="200px">`
        }).join('');

        imgElement.innerHTML = innerHtml;


    } catch (Error) {
        console.log("Error 404");
    }
}

function removeimg() {
    var div = document.getElementById('remove_content');
    if (div) {
        div.parentNode.removeChild(div)
    }
}