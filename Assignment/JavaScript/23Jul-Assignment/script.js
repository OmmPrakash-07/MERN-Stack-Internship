let button = document.getElementById("btn")
button.addEventListener("click", () => {
    let input = document.getElementById("age")
    let age = parseInt(input.value)
    const res = document.getElementById("result");

    res.classList.remove("eligible", "not-eligible");

    if (age >= 18) {
        res.textContent = "you are eligible to vote";
        res.classList.add("eligible");
    } else {
        res.textContent = "you are not eligible to vote"
        res.classList.add("not-eligible");
    }
})