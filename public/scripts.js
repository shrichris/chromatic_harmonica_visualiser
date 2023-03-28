  document.getElementById("scale").addEventListener("change", function (event) {
    const scaleNotes = addEquivalentNotes(event.target.value.split(",")); // Use the helper function here
    const holes = document.querySelectorAll(".hole");
  
    holes.forEach((hole) => {
      const notes = hole.dataset.notes.split(",");
      hole.classList.remove("highlighted");
  
      notes.forEach((note, index) => {
        const noteElement = hole.querySelector(`.note:nth-child(${index + 1})`);
        noteElement.classList.remove("highlighted");
  
        if (scaleNotes.includes(note)) {
          noteElement.classList.add("highlighted");
        }
      });
    });
  });

  function addEquivalentNotes(notesArray) {
    if (notesArray.includes('B#') && !notesArray.includes('C')) {
      notesArray.push('C');
    }
  
    if (notesArray.includes('C') && !notesArray.includes('B#')) {
      notesArray.push('B#');
    }
  
    if (notesArray.includes('E#') && !notesArray.includes('F')) {
      notesArray.push('F');
    }
  
    if (notesArray.includes('F') && !notesArray.includes('E#')) {
      notesArray.push('E#');
    }
  
    return notesArray;
  }
  
  
  