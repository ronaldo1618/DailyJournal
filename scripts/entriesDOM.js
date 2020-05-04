import makeEntry from "./entryComponent.js"

const renderEntries = {
        render(entry) {
        document.querySelector(".entryLog").innerHTML += makeEntry.component(entry)
    }
}

export default renderEntries;