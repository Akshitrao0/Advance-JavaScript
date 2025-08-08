const propertyForSaleArr = [
    {
        propertyLocation: 'Kensington, London',
        priceGBP: 890000,
        roomsM2: [14, 18, 14, 10, 6],
        comment: 'Highly desirable location in stunning scenery!',
    },
    {
        propertyLocation: 'Wirral, Liverpool',
        priceGBP: 650000,
        roomsM2: [18, 16, 15, 14, 17, 19, 9, 8],
        comment: 'Astonishing view with a modern finish!',
    },
    {
        propertyLocation: 'Beach, Brighton',
        priceGBP: 420000,
        roomsM2: [5],
        comment: 'Beautiful interior and a spacious room.',
        
    },
    {
        propertyLocation: 'Highlands, Scotland',
        priceGBP: 550000,
        roomsM2: [6, 12, 11, 5],
        comment: 'Lots of potential, snug, a must see!',
        
    }
]


const placeholderPropertyObj = {
    propertyLocation: '1 Joe Bloggs street',
    priceGBP: 100000,
    roomsM2: [16, 12, 6, 11, 5],
    comment: 'This is the description',
    
}

function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
    return propertyArr.map(property => {
        const { propertyLocation, priceGBP, roomsM2, comment } = property
        const totalRoomSizeM2 = roomsM2.reduce((total, current) => total + current)
        return `
    <section class="card">
        <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>£${priceGBP}</h3>
            <p>${comment}</p>
            <h3>${totalRoomSizeM2} m&sup2;</h3>
        </div>
    </section>`
    })
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml()

/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

The HTML and CSS have been done for you. 
This is the HTML template 👇. Replace everything in UPPERCASE with property data.

<section class="card">
    <img src="/images/IMAGE">
    <div class="card-right">
        <h2>PROPERTY LOCATION</h2>
        <h3>PRICE GBP</h3>
        <p>COMMENT</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section> 
*/