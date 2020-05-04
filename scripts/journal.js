API.getJournalEntries().then(entries => {
    entries.forEach(entry => {
        renderEntries.render(entry)
    })
})