const renderEntries = {
        render(entry) {
        document.querySelector(".entryLog").innerHTML += makeEntry.component(entry)
    }
}