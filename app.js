
const yargs = require('yargs')
const notes = require('./notes.js')


//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
   
        builder:{
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'  
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type:'String'
            }
    
        },
        handler(argv ){
            notes.addNote(argv.title,argv.body) 
        }
})


// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
      notes.removeNote(argv.title)
    }

})

//create list Notes
yargs.command({
    command: 'list',
    describe:'list Notes',
    handler(){
        notes.listNotes()

    }

})
yargs.command({
    command: 'read',
    describe: 'Read a title',
    builder: {
        title: {
            describe:'Reading a title ',
            demmandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
