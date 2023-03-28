  document.getElementById("scale").addEventListener("change", function (event) {
    const scaleNotes = addEquivalentNotes(event.target.value.split(",")); // Use the helper function here
    populateChordSelector(scaleNotes); // Call the helper function here
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
  
  function populateChordSelector(scaleNotes) {
    const chordSelector = document.getElementById("chord");
    chordSelector.innerHTML = '<option value="">Select a chord</option>';
  
    const chords = [
      "Major",
      "Minor",
      "Minor",
      "Major",
      "Major",
      "Minor",
      "Diminished",
    ];
  
    scaleNotes.forEach((note, index) => {
      const option = document.createElement("option");
      option.value = note;
      option.textContent = `${note} ${chords[index]}`;
      chordSelector.appendChild(option);
    });
  
    chordSelector.disabled = false;
  }
  
  document.getElementById("chord").addEventListener("change", function (event) {
    const chordRoot = event.target.value;
    const scaleNotes = addEquivalentNotes(
      document.getElementById("scale").value.split(",")
    );
  
    const intervals = [0, 2, 4];
    const chordNotes = intervals.map((interval) =>
      scaleNotes[(scaleNotes.indexOf(chordRoot) + interval) % scaleNotes.length]
    );
  
    highlightChord(chordNotes);
  });

  function highlightChord(chordNotes) {
    const holes = document.querySelectorAll(".hole");
  
    holes.forEach((hole) => {
      const notes = hole.dataset.notes.split(",");
      hole.classList.remove("highlighted");
  
      notes.forEach((note, index) => {
        const noteElement = hole.querySelector(`.note:nth-child(${index + 1})`);
        noteElement.classList.remove("highlighted");
  
        if (chordNotes.includes(note)) {
          noteElement.classList.add("highlighted");
        }
      });
    });
  }
  

