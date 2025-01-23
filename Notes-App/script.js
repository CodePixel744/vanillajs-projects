const addNoteBtn = document.querySelector('.add-note-btn');
const addInThis = document.querySelector('.notes-container');

if (addNoteBtn) {
    addNoteBtn.addEventListener('click', createNote);
} else {
    console.log('Error: Add Note button not found');
}

function createNote() {
    const template = document.querySelector('#note-template');
    const noteElement = template.content.cloneNode(true);
    const contentHere = noteElement.querySelector('.note-content');

    if (contentHere) {
        contentHere.textContent = 'This is a new note';
        contentHere.contentEditable = true;
        contentHere.style.backgroundColor = 'red';

        const timeStamp = document.createElement('div');
        timeStamp.textContent = relativeDate();
        contentHere.appendChild(timeStamp);
    }

    const noteData = {
        id: Date.now(),
        content: 'This is my note',
        editable: true,
        backgroundColor: 'red',
        timeStamp: relativeDate()
    };

    console.log(JSON.stringify(noteData));
    addInThis.appendChild(noteElement);
}

function relativeDate() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    return `${formattedHours}:${minutes}:${seconds} ${period}`;
}

console.log('Connected successfully');
console.log(relativeDate());
