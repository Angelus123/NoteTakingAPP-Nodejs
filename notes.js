const chalk = require('chalk')
const fs = require( 'fs')

//Challenge I==================== Add a notes========================
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicate = notes.filter((note) => note.title === title)
debugger
  if(duplicate.length==0){
      
         notes.push({
        title:title,
        body: body
    }) 
      saveNotes(notes)
      console.log(chalk.green.inverse('New note added'))
  } else console.log(chalk.red.inverse('Note title taken'))  
}
//challenge II .1, .2, .3 remove notes======================================

 const removeNote = (title) => { 
    const notes = loadNotes()
    const noteTokeep= notes.filter( (note) =>  note.title !== title)
   
    if(noteTokeep.length<notes.length){
    saveNotes(noteTokeep)
    console.log(chalk.green.inverse("Note removed successfully!"))
    }else{
    console.log(chalk.red.inverse("No note with such title!")) 
    }
}
// Challenge III listNotes=================================
const listNotes = () =>
 {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'))
 notes.forEach((list) => {
        console.log(list.title)})
}

//challenge IV read notes=================================

const readNotes = (title) => {

    const notes =loadNotes()
const readNote = notes.find((note) => note.title ===title)
// console.log(readNote)
if(readNote){
console.log(chalk.blue.inverse(readNote.title))
console.log(readNote.body)
}
else console.log(chalk.inverse.red('Note not found'))

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('note.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('note.json')
        const dataJSON = dataBuffer.toString()
    
        return JSON.parse(dataJSON)

    }catch(e){
        return []
         
    }   
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}
