  document.getElementById("scale").addEventListener("change", function (event) {
    const scaleNotes = event.target.value.split(",");
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
  