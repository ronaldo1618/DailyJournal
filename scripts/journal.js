const journalEntries = [
    {
        date: "4/19/2020",
        concept: "Query selection",
        entry: "Just reading ahead a bit.",
        mood: "Determined"
    },
    {
        date: "4/20/2020",
        concept: "DOM API manipulation",
        entry: "Trying to grasp this concept. Read up more",
        mood: "Happy"
    },
    {
        date: "4/20/2020",
        concept: "Static HTML",
        entry: "Trying to grasp this concept. Read up more",
        mood: "Happy"
    }    
]


const makeJournalEntryComponent = (journalEntry) => {
    return `
    <div>
        <h1>${journalEntry.concept}</h1>
        <p>${journalEntry.entry}<br>${journalEntry.date}</p>
    </div>
    `
}

const renderJournalEntries = (entries) => {
    const entryContainer = document.querySelector(".entryLog")
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        entryContainer.innerHTML += makeJournalEntryComponent(entry)
        
    }
}

renderJournalEntries(journalEntries)