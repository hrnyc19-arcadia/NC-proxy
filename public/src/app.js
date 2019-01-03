;(()=>{

    let listingId;
    try {
        listingId = parseInt(window.location.href.split('?')[1]);
    } catch (unacceptedURLException) {
        console.log('unacceptedURLException: param not accepted: ', parseInt(window.location.href.split('?')[1]));
        listingId = 0;
    }

    console.log('listing requested: ', listingId);
    

    fetch(`/listing?listing_id=${listingId}`, {
        method: 'GET',
        mode: 'no-cors',
        headers: { 'content-type': 'application/json' }
    })
        .then(response => response.json())
        .then(obj => {
            let rootHTMLElement = document.getElementById('lisitingRoot');
            rootHTMLElement.textContent = String(obj);
        })
        .catch(unhandledException => console.log('Rendering Error: ', unhandledException));

    let APIList = ['https://nc-service.herokuapp.com/'];

    APIList.forEach(URL => {
        fetch(`${URL}?${listingId}`, {
            method: 'GET',
            mode: 'no-cors',
            headers: { 'content-type': 'text/xml' }
        })
            .then(response => response.text())
            .then(XML => {
                console.log('API\'s data :',XML);
                let rootHTMLElement = document.getElementById('componentPlaceholder');
                let newElem = document.createElement("div");
                newelem.innerHTML = XML;
                rootHTMLElement.append(newElem);
            })
            .catch(unhandledException => console.log('Rendering Error: ', unhandledException));

    })

   const getUserPhoto=(reviewId, callback)=>{
        return fetch(`/user/photo?reviewId=${reviewId || 87}`
            , {
                method: 'GET',
                mode: 'no-cors',
                // headers:{'Content-Type': 'image/png'}           
            })
            .then(file => file.arrayBuffer())
            .then(buffer => {
                let arrayBufferView = new Uint8Array(buffer);
                let blob = new Blob([arrayBufferView], { type: "image/png" });
                let urlCreator = window.URL || window.webkitURL;
                var imageUrl = urlCreator.createObjectURL(blob);
                callback(imageUrl)
            })
            .catch(unhandledException => console.log('error fetching photo:\n', unhandledException));
    }

})()