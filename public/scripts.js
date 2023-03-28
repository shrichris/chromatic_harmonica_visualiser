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
    if (notesArray.includes('B#')) {
      notesArray.push('C');
    }
  
    if (notesArray.includes('E#')) {
      notesArray.push('F');
    }
  
    return notesArray;
  }
  
  