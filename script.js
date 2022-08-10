const outputList = document.getElementById("output");
const fetchButton = document.getElementById("fetching");

function fetchingDatas(method, url, data) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                return response.json().then((errData) => {
                    console.log(errData);
                    throw new Error("Something went wrong - server-side");
                });
            }
        })
        .catch((error) => {
            console.log(error);
            throw new Error("Something went wrong.");
        });
}

async function fetchPosts() {
    try {
        const listOfPosts = await fetchingDatas(
            "GET",
            "https://jsonplaceholder.typicode.com/posts"
        );
        for (const post of listOfPosts) {
            const postElement = document.importNode(
                document.getElementById("templatePost").content,
                true
            );
            postElement.querySelector(".title").textContent = post.title; // <p></p>
            postElement.querySelector(".description").textContent = post.body;
            outputList.appendChild(postElement);
        }
    } catch (error) {
        console.log(error.message);
    }
}

fetchButton.addEventListener("click", fetchPosts);