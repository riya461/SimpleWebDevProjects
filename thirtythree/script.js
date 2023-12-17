const addBtn = document.querySelector('.add');
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach(note => addNewNote (note));
}

addBtn.addEventListener('click', () => addNewNote('Write a note'));

function addNewNote( text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="notes">
        <div class="notes-container">
            <div class="notes-header">
                
                <div class="icons">
                <button class="notes-edit"><i class="fas fa-edit"></i></button>
                <button class="notes-delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            </div>
            <div class="main ${text ? "": "hidden"}"></div>
            <div class="notes-body ">
                <textarea class="notes-body-text hidden" placeholder="" cols="52" rows="13" style="resize: none; outline: none; 
                border: none; font-size: medium;"></textarea>
            </div>

        </div>
    </div>
    `;

    const editBtn = note.querySelector('.notes-edit');
    const deleteBtn = note.querySelector('.notes-delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('.notes-body-text');

    textArea.value = text;
    main.innerHTML = marked(text);
    editBtn.addEventListener('click', () => {
        textArea.classList.toggle('hidden');
        main.classList.toggle('hidden');
    });

    deleteBtn.addEventListener('click', () => {

        note.remove();
        updateLS();
    });

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);

        updateLS();
    }
    );
 

    document.body.appendChild(note);
}


function updateLS() {

    const notesText = document.querySelectorAll('textarea');
    const notes = [];

    notesText.forEach(note => notes.push(note.value));

    localStorage.setItem('notes', JSON.stringify(notes));
}