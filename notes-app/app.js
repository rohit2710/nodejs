const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')
const getNotes = require('./notes')
// Create add command
//command node app.js add --title="t2" --body="b2"
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

// Create remove command
//command node app.js remove --title="t2"
yargs.command({
    command: 'remove',
    describe: 'removing a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
//command node app.js list
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNote()
    }
})

// Create read command
//command node app.js read --title='t2'
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)