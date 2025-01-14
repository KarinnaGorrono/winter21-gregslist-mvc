import { generateId } from "../Utils/generateId";


export class House {
    constructor(data) {
        this.id = generateId()
        this.model = data.model
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.color = data.color
        this.imgUrl = data.imgUrl
    }
}

 get Template() {

    return `

 <div class="col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.imgUrl}" alt="${this.model}-image">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.make} - ${this.model} - ${this.year}</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <div class="d-flex align-items-center">
            <p class="m-0">Color:</p>
            <div class="color-box border border-dark" style="background-color: ${this.color};"></div>
          </div>
          <i class="mdi mdi-delete selectable" onclick="app.housesController.removeHouse('${this.id}')"></i>
        </div>
      </div>
    </div>`

}