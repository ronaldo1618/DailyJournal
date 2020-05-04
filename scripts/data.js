const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/journalEntries")
            .then(entries => entries.json())
    }
}

export default API;