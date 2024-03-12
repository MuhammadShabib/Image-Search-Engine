const accssesKey = `B4eXCV0mQgZcrRoURozv22ME_apxHPI1LJnv7zjaO-A`;
const serachForm = document.getElementById("search-form");
const serachBox = document.getElementById("search-box");
const showMore = document.getElementById("show-more-btn");
const result1 = document.getElementById("search-result");

let keyword = "";
let page = 1;


async function searchImage() {
    keyword = serachBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accssesKey}&per_page= 12`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if (page === 1) {
        result1.innerHTML = ""
    }
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank"
        imageLink.appendChild(image)
        result1.appendChild(imageLink)
    })
    showMore.style.display = "block"
}
serachForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})

showMore.addEventListener("click", () => {
    page++;
    searchImage();
})