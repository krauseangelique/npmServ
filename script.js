console.log("Salut");
const outputList = document.getElementById("output");
console.log(outputList);
const fetchButton = document.getElementById


// function
function fetchingDatas(method, url, data) {
    //"https://jsonplaceholder.typicode.com/posts"
    fetch(url, {
        // 'GET'
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((response) => {
            if (response.status >= 200 & response.status < 300) {
                return response.json();
            } else {
                return response.json().then((errData) => {
                    console.log(errData);
                    throw new Error("Semehting went wrong ");
                });
            }
        })

        .catch((error) => {
            console.log(error);
            throw new Error("Something went wrong.");
        });
}

// Call the function
fetchingDatas(data);

async function fetchPosts() {
    try {
        const responseDat = await fetchingDatas(
            'GET',
            'https://jsonplaceholder.typicode.com/posts'
        );

        outputList
    } catch (error) {
        console.log(error.message);
    }
}

fetchButton.addEventListener("click", fetchPosts);