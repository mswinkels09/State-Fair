import { RideTicketHolders } from "./rides/RideTicketHolders.js";

const contentTarget = document.querySelector(".entry")

const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {       
        const ticketEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(ticketEvent)}
        })

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket") {       
        const ticketEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(ticketEvent)}
                })

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "gameTicket") {       
        const ticketEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(ticketEvent)}
                })

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sideshowTicket") {       
        const ticketEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(ticketEvent)}
                })

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "fullPackageTicket") {

        const ticketEvent = new CustomEvent("fullPackageTicketPurchased")
        
        
        eventHub.dispatchEvent(ticketEvent)
    }
})


export const fullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="person bigSpender"></div>`
        const contentTarget = document.querySelectorAll(".people");
    })
}
        


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}
