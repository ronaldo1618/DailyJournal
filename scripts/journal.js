// Daily Journal 4

fetch("http://localhost:3000/journalEntries")
    .then(entries => entries.json())
    .then(entries => {
        entries.forEach(entry => {
            const jeAsHTML = makeJournalEntryComponent(entry)
            renderJournalEntries(jeAsHTML)
        });
    })
    .catch(error => {
        console.error("fetch error", error)
    });

// HTML string template
const makeJournalEntryComponent = (journalEntry) => {
    return `
    <div>
        <h1>${journalEntry.concept}</h1>
        <p>${journalEntry.entry}<br>${journalEntry.date}</p>
    </div>
    `
}

// Accessing DOM for entryLog
const renderJournalEntries = (entry) => {
    document.querySelector(".entryLog").innerHTML += entry
}