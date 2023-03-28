document.addEventListener('DOMContentLoaded', () => {
    const holes = document.querySelectorAll('.hole');
  
    holes.forEach((hole) => {
      hole.addEventListener('click', (event) => {
        const notes = event.currentTarget.dataset.notes.split(',');
        const currentNote = event.target;
  
        if (currentNote.classList.contains('note')) {
          const noteIndex = Array.from(currentNote.parentNode.children).indexOf(currentNote);
          alert(`You played the note: ${notes[noteIndex]}`);
        }
      });
    });
  });
  