import API from "./data.js"
import renderEntries from "./entriesDOM.js"

API.getJournalEntries().then(entries => {
    entries.forEach(entry => {
        renderEntries.render(entry)
    })
})