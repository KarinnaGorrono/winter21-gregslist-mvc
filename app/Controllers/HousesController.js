import { ProxyState } from "../AppState.js"
import { House } from "../Component/House.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
    const houses = ProxyState.houses
    let template = ''
    houses.forEach(h => template += h.Template)
    document.getElementById('House Listings').innerHTML = template
}

export class HousesController {
    constructor() {
        ProxyState.on('houses', _drawHouses)
    }
    drawHouses() {
        _drawHouses()
        document.getElementById('modal-body-slot').innerHTML = getHouse()
    }

    createHouse() {
        // prevents page reload
        window.event.preventDefault()
        console.log("submitted")
        /** @type {HTMLFormElement} */
        // @ts-ignore
        const form = window.event.target
        const houseData = {
            // make: form.make.value,
            model: form.model.value,
            year: form.year.value,
            price: form.price.value,
            color: form.color.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value
        }
        housesService.createHouse(houseData)
        // clear form
        form.reset()
        // close modal
        // @ts-ignore
        bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
    }

    removeHouse(id) {
        console.log('deleting', id)
        housesService.removeHouse(id)
    }
}

