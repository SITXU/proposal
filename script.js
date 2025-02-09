// Initialize EmailJS (Replace with your Public Key)
emailjs.init("pJTS6osKsee21Xb0o");

let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");

// Move the "No" button when hovered
noButton.addEventListener("mouseover", () => {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    noButton.style.position = "absolute";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
});

// Send Email when "Yes" is clicked
yesButton.addEventListener("click", () => {
    let userEmail = prompt("Enter your email to get a surprise! 💌");

    if (userEmail) {
        let params = {
            to_email: userEmail,
            message: "Yay! I knew you'd say yes! ❤️ Can't wait to celebrate together! 🎉"
        };

        emailjs.send("simran.palaioutr@gmail.com", "YOUR_TEMPLATE_ID", params)
            .then(response => {
                alert("Check your email! 💌");
            })
            .catch(error => {
                alert("Oops! Something went wrong. 😢");
                console.error(error);
            });

        document.body.innerHTML = "<h1>Yay! I knew you'd say Yes! 😍💕</h1>";
    }
});

// Create falling flowers animation
function createFlower() {
    let flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(flower);
    
    setTimeout(() => { flower.remove(); }, 5000);
}

setInterval(createFlower, 500);

