// write your code here
fetch("http://localhost:3000/ramens")
.then(r => r.json())
.then(data => data.forEach((ramen) => {
    renderRamen(ramen)
    
    
}))

function renderRamen(ramenObj){
    const ramenMenue = document.querySelector("#ramen-menu");
    let ramenImage = document.createElement("img");
    ramenImage.src = ramenObj.image
    ramenMenue.append(ramenImage)
    handleClick(ramenImage, ramenObj)
}

function handleClick(image, ramen){
    image.addEventListener("click", ()=> {
        const detailImage = document.querySelector(".detail-image")
        detailImage.src = ramen.image

        const detailName = document.querySelector(".name")
        detailName.textContent = ramen.name

        const detailRestaurant = document.querySelector(".restaurant")
        detailRestaurant.textContent = ramen.restaurant

        const detailRating = document.querySelector("#rating-display")
        detailRating.textContent = ramen.rating

        const detailComment = document.querySelector("#comment-display")
        detailComment.textContent = ramen.comment
    })
}

function handleForm(){
    const form = document.querySelector("#new-ramen")
    form.addEventListener("submit", (event)=> {
        event.preventDefault();
        let newName = event.target["name"].value;
        let newRes = event.target["restaurant"].value;
        let newImg = event.target["image"].value
        let newRating = event.target["rating"].value
        let newComment = event.target["new-comment"].value;

        const newRamenObj = {
            name: newName,
            restaurant: newRes,
            image: newImg,
            rating: newRating,
            comment: newComment
        }
        
        // renderRamen(newRamenObj)
        fetch("http://localhost:3000/ramens", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newRamenObj)
        })
        .then(r => r.json())
        .then(data => renderRamen(data))
        
    })
}

handleForm()