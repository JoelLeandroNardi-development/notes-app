const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const notes = require('./notes/index');

yargs(hideBin(process.argv))
    .scriptName('notes-app')
    .version('1.1.0')

    .command({
        command: 'add',
        describe: 'Add a new note',
        builder: (yargs) => yargs
        .option('title', {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        })
        .option('body', {
            describe: 'Note body',
            type: 'string',
            demandOption: true
        }),
        handler(argv) {
        notes.addNote(argv.title, argv.body);
        }
    })

    .command({
        command: 'remove',
        describe: 'Remove a note',
        builder: (yargs) => yargs
        .option('title', {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        }),
        handler(argv) {
        notes.removeNote(argv.title);
        }
    })

    .command({
        command: 'list',
        describe: 'List your notes',
        handler() {
        notes.listNotes();
        }
    })

    .command({
        command: 'read',
        describe: 'Read a note',
        builder: (yargs) => yargs
        .option('title', {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        }),
        handler(argv) {
        notes.readNote(argv.title);
        }
    })

    .demandCommand(1, 'Please specify a command')
    .strict()
    .help()
    .parse();
