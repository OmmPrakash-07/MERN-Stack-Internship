console.log("task1....");
console.log("task2...");

setTimeout(() => {
    console.log("task3....");
}, 3000);

console.log("task4...");
console.log("task5....");

let OrderPizza = new Promise((resolve, reject) => {
    let pizzaAvailable = true;
    if (pizzaAvailable) {
        resolve("Pizza is delivered");
    } else {
        reject("Sorry, pizza is not available");
    }
});

const pizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isPizzaReady = true;
        if (isPizzaReady) {
            resolve("Pizza is ready! 🍕");
        } else {
            reject("Pizza is not ready yet. 😞");
        }
    }, 2000);
});

pizza.then((message) => {
    console.log("done: " + message);
}).catch((error) => {
    console.log("not done: " + error);
});

function getProductData() {
    return new Promise((res, rej) => {
        console.log("fetching Product....");
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
        }, 3000);
    });
}

document.getElementById("fetchBtn").addEventListener("click", () => {
    console.log("trying to get product......");
    getProductData()
        .then((data) => {
            console.log(data);
            let container = document.getElementById("container");
            container.innerHTML = "";
            let para = document.createElement("p");
            para.textContent = data.title;
            container.append(para);
        })
        .catch((error) => {
            console.log(error);
            let container = document.getElementById("container");
            container.innerHTML = "";
            let para = document.createElement("p");
            para.textContent = error;
            container.append(para);
        });
});
