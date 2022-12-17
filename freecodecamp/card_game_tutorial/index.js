const cardObjectDefinitions = [
    {id:1, imagePath: "/images/card-KingHearts.png"},
    {id:2, imagePath: "/images/card-JackClubs.png"},
    {id:3, imagePath: "/images/card-QueenDiamonds.png"},
    {id:4, imagePath: "/images/card-AceSpades.png"},
]

const cardBackImgPath = '/images/card-back-blue.png'

const cardContainerElem = document.querySelector('.card-container')

function createCard(cardItem){
    
    // create div elements that make up a card
    const cardElem = document.createElement('div')
    const cardInnerElem = document.createElement('div')
    const cardFrontElem = document.createElement('div')
    const cardBackElem = document.createElement('div')

    // create front and back image elements for a card
    const cardFrontImg = document.createElement('img')
    const cardBackImg = document.createElement('img')

    // add class and id to card element
    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    // add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    // add class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    // add class to back card element
    addClassToElement(cardBackElem, 'card-back')

    // add src attribute and appropriate value to img element - back of card
    addSrcToImgElem(cardBackElem, cardBackImgPath)

    // add src attribute and appropriate value to img element - front of card
    addSrcToImgElem(cardFrontElem, cardBackImgPath)

    // assign class to back image element
    addClassToElement(cardBackImg, 'card-img')

    //assign class to front image element of front of card
    addClassToElement(cardFrontImg, 'card-img')

    // add front image element as child element to front card element
    addChildElement(cardFrontElem, cardFrontImg)

    // add back image element as child element to back card element
    addChildElement(cardBackElem, cardBackImg)

    // add front card element as child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem)

    // add back card element as child element to inner card element
    addChildElement(cardInnerElem, cardBackElem)

    // add inner card element as child element to card element
    addChildElement(cardElem, cardInnerElem)
}

function createElement(elemType){
    return document.createElement(elemType)
}

function addClassToElement(elem, className){
    elem.classList.add(className)
}

function addIdToElement(elem, id){
    elem.id = id
}

function addSrcToImgElem(imgElem, src){
    imgElem.src = src
}

function addChildElement(parentElem, childElem){
    parentElem.appendChild(childElem)
}