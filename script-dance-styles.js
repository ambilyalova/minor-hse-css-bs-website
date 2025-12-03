async function getResponce() {
    let responce = await fetch("./dance-styles.json")
    let content = await responce.text()
    content = JSON.parse(content)

    let key
    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <h5 class="card-subtitle">${content[key].title}</h5>
        <p class="card-text">${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        </li>`
    }
}
getResponce()
