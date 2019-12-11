
const productData = [
    {
        id: 1,
        name: "product0",
        image: "img/Untitled-3-01.png",
        description: "Mens leather jacket",
        price: 150,
        oPrice: 229,
        quantity: 11,
        sizes: ["Small", "Medium", "Large"],
        colors: ["Black", "Navy", "Brown"],
        freeEngraving: null,
        design: null,
        ratings: 4
    },
    {
        id: 2,
        name: "product1",
        image: "img/Untitled-3-02.png",
        description: "Walking shoe",
        price: 150,
        oPrice: 229,
        quantity: 11,
        sizes: ["Small", "Medium", "Large"],
        colors: ["Black", "Navy", "Brown"],
        freeEngraving: null,
        design: null,
        ratings: 4
    },
    {
        id: 3,
        name: "product2",
        image: "img/Untitled-3-03.png",
        description: "Walking shoe",
        price: 150,
        oPrice: 229,
        quantity: 11,
        sizes: ["Small", "Medium", "Large"],
        colors: ["Black", "Navy", "Brown"],
        freeEngraving: null,
        design: null,
        ratings: 4
    },
    {
        id: 4,
        name: "product2",
        image: "img/Untitled-3-04.png",
        description: "Walking shoe",
        price: 150,
        oPrice: 229,
        quantity: 11,
        sizes: ["Small", "Medium", "Large"],
        colors: ["Black", "Navy", "Brown"],
        freeEngraving: null,
        design: null,
        ratings: 4
    },
    {
        id: 5,
        name: "product2",
        image: "img/Untitled-3-05.png",
        description: "Walking shoe",
        price: 150,
        oPrice: 229,
        quantity: 11,
        sizes: ["Small", "Medium", "Large"],
        freeEngraving: true,
        design: null,
        ratings: 4
    },
    {
        id: 6,
        name: "product2",
        image: "img/Untitled-3-06.png",
        description: "Walking shoe",
        price: 150,
        oPrice: 229,
        quantity: 11,
        sizes: ["Small", "Medium", "Large"],
        freeEngraving: null,
        design: true,
        ratings: 4
    },
    {
        id: 7,
        name: "product2",
        image: "img/Untitled-3-07.png",
        description: "Walking shoe",
        price: 150,
        oPrice: 229,
        quantity: 11,
        sizes: ["Small", "Medium", "Large"],
        colors: ["Black", "Navy", "Brown"],
        freeEngraving: null,
        design: null,
        ratings: 4
    },
    {
        id: 8,
        name: "product2",
        image: "img/Untitled-3-08.png",
        description: "Walking shoe",
        price: 150,
        oPrice: 229,
        quantity: 11,
        sizes: null,
        colors: ["Black", "Navy", "Brown"],
        manufacturer: ["Canada", "China", "Indonesia"],
        freeEngraving: null,
        design: null,
        ratings: 4
    },
    {
        id: 9,
        name: "product2",
        image: "img/Untitled-3-09.png",
        description: "Walking shoe",
        price: 150,
        oPrice: 229,
        quantity: 11,
        sizes: null,
        colors: null,
        material: ["Gold", "Silver", "Diamond"],
        freeEngraving: true,
        design: null,
        ratings: 4
    },
    {
        id: 10,
        name: "product2",
        image: "img/Untitled-3-10.png",
        description: "Walking shoe",
        price: 150,
        oPrice: 229,
        quantity: 11,
        sizes: ["Small", "Medium", "Large"],
        colors: ["Black", "Navy", "Brown"],
        material: null,
        freeEngraving: null,
        design: null,
        ratings: 4
    },
]


function addProducts() {
    let container = document.getElementById("products");
    let html = "";
    for (let item of productData) {
        html +=
            `
        <li id=${item.id}>
        <div>
        <h3>${item.description}</h3>
        <div class="product-img"><img src=${item.image}></div>
            
        <form>
        `
        if (item.colors) {
            let colorHtml = "";
            for (let colorItem of item.colors) {
                colorHtml +=
                    `
                <li><label><input type="radio" name="colour" value=${colorItem}> <span>${colorItem}</span></label></li>
                `
            }

            html +=
                `
            <fieldset>
                <legend>Colours</legend>
                <ul class="colors">${colorHtml}
                </ul>
            </fieldset>
            `
        }

        if (item.sizes) {
            let sizeHtml = "";
            for (let sizeItem of item.sizes) {
                sizeHtml +=
                    `
                <li><label><input type="radio" name="colour" value=${sizeItem}> <span>${sizeItem}</span></label></li>
                `
            }

            html +=
                `
            <fieldset>
                <legend>Sizes:</legend>
                <ul class="colors">${sizeHtml}
                </ul>
            </fieldset>
            `
        }

        if (item.material) {
            let itemHtml = "";
            for (let sItem of item.material) {
                itemHtml +=
                    `
                <li><label><input type="radio" name="colour" value=${sItem}> <span>${sItem}</span></label></li>
                `
            }

            html +=
                `
            <fieldset>
                <legend>Material:</legend>
                <ul class="colors">${itemHtml}
                </ul>
            </fieldset>
            `
        }

        if (item.manufacturer) {
            let itemHtml = "";
            for (let sItem of item.manufacturer) {
                itemHtml +=
                    `
                <li><label><input type="radio" name="colour" value=${sItem}> <span>${sItem}</span></label></li>
                `
            }

            html +=
                `
            <fieldset>
                <legend>Manufacturer:</legend>
                <ul class="colors">${itemHtml}
                </ul>
            </fieldset>
            `
        }

        if (item.freeEngraving) {

            html +=
                `
            <fieldset>
                <legend>Free Engraving:</legend>
                <div class="free-engraving">
                    <input type="text" value=""><span>(Optional)</span>
                </div>
            </fieldset>
            `
        }

        if (item.design) {

            html +=
                `
            <fieldset>
                <legend>Design:</legend>
                <a class="design" href="javascript:;">Upload Image
                </a>
            </fieldset>
            `
        }

        if (item.ratings) {
            let ratingHtml = "";
            let emptyStar = 5 - item.ratings;
            for (let i = 0; i < item.ratings; i++) {
                ratingHtml +=
                    `
                <li><img class="star" src="img/star.png"></li>
                `
            }
            if (emptyStar > 0) {
                for (let i = 0; i < emptyStar; i++) {
                    ratingHtml +=
                        `
                    <li><img src="img/star-empty.png"></li>
                    `
                }
            }

            html +=
                `
            <fieldset>
                <legend>Ratings：</legend>
                <ul class="ratings">${ratingHtml}
                </ul>
            </fieldset>
            `
        }



        html +=
            `
              <p><span class="o-price">$${item.oPrice}</span><span class="price">$${item.price}</span></p>
        </form>  
        <p><a href="javascript:;" class="add">ADD</a></p>
        <a class="fav" href="javascript:;"><img src="img/fav.png"></a>
        </div>
      </li>
        `
    }
    container.innerHTML = html
}

window.onload = function () {
    addProducts();
}
