const url = 'https://dummyjson.com/products';

async function getServerData(url) {
    
    const res = await fetch(url);
    console.log("Status:", res.status);

    const data = await res.json();
    console.log(data);

    for (const i of data.products)
    {
        productList.innerHTML +=
        `<div class="col">
            <div class="card h-200 w-80">
                <img src="${i.thumbnail}" class="card-img-top" alt="picture">
                <div class="card-body">
                    <p class="card-text">${i.description}</p>
                    <h5 class="card-title">${i.title}</h5>
                    <h5 class="card-title">${i.price}</h5>
                </div>
            </div>
        </div>`;
    }
}

getServerData(url);