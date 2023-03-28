document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

document.getElementById("scale").addEventListener("change", function (event) {
    const scaleType = event.target.options[event.target.selectedIndex].dataset.type;
    const scaleNotes = addEquivalentNotes(event.target.value.split(","));
    populateChordSelector(scaleNotes, scaleType); // Pass the scale type here

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
  
  function populateChordSelector(scaleNotes, scaleType) {
    const chordSelector = document.getElementById("chord");
    chordSelector.innerHTML = '<option value="">Select a chord</option>';
  
    const majorChords = [
      "Major",
      "Minor",
      "Minor",
      "Major",
      "Major",
      "Minor",
      "Diminished",
    ];
  
    const minorChords = [
      "Minor",
      "Diminished",
      "Major",
      "Minor",
      "Minor",
      "Major",
      "Major",
    ];
  
    const chords = scaleType === "major" ? majorChords : minorChords;
  
    scaleNotes.forEach((note, index) => {
      const option = document.createElement("option");
      option.value = index; // Store the index instead of the note
      option.textContent = `${note} ${chords[index]}`;
      chordSelector.appendChild(option);
    });
  
    chordSelector.disabled = false;
  }
  
  
  document.getElementById("chord").addEventListener("change", function (event) {
    const chordIndex = event.target.value;
    const scaleNotes = addEquivalentNotes(
      document.getElementById("scale").value.split(",")
    );
  
    const intervals = [0, 2, 4];
    const chordNotes = intervals.map((interval) =>
      scaleNotes[(parseInt(chordIndex) + interval) % scaleNotes.length]
    );
  
    highlightChord(chordNotes);
  });
  

  function highlightChord(chordNotes) {
    const holes = document.querySelectorAll(".hole");
  
    const highlightedNotes = chordNotes.flatMap((note) => {
      return addEquivalentNotes([note]);
    });
  
    holes.forEach((hole) => {
      const notes = hole.dataset.notes.split(",");
      hole.classList.remove("highlighted");
  
      notes.forEach((note, index) => {
        const noteElement = hole.querySelector(`.note:nth-child(${index + 1})`);
        noteElement.classList.remove("highlighted");
  
        if (highlightedNotes.includes(note)) {
          noteElement.classList.add("highlighted");
        }
      });
    });
  }
  

