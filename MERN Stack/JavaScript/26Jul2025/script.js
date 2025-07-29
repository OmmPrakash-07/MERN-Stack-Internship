function getProductData() {
    return new Promise((res, rej) => {
        console.log("Fetching Product....");
        setTimeout(() => {
            const productAvailable = true;

            if (productAvailable) {
                const Product = {
                    id: 101,
                    title: "Solar Panel",
                    price: 2000,
                    inStock: false,
                };
                res(Product);
            } else {
                rej("Product not found");
            }
        }, 8000);
    });
}

console.log("Trying to get product......");

async function fetchProduct() {
    try {
        const data = await getProductData();
        console.log(data);
        let container = document.getElementById("container");

        let para = document.createElement("p");
        para.textContent = data.title;

        container.append(para);
        container.classList.add("show");

    } catch (error) {
        console.log(error);
    } finally {
        document.getElementById("loader").style.display = "none";
    }
}

fetchProduct();


// getProductData()
//     .then((data) => {
//         console.log(data);
//         let container = document.getElementById("container");
//         let para = document.createElement("p");
//         para.textContent = data.title;
//         container.append(para);
//     })
//     .catch((error) => {
//         console.log(error);
//         let container = document.getElementById("container");
//         let para = document.createElement("p");
//         para.textContent = error;
//         container.append(para);
//     });