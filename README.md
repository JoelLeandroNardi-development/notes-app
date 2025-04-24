# 🗒️ Notes App CLI
A simple and modular command-line notes application built with Node.js. Create, read, list, and delete notes right from your terminal!

---

## 🚀 Features

- Add new notes with a title and body
- List all your notes
- Read individual notes
- Remove notes by title
- Colored terminal output with [chalk](https://github.com/chalk/chalk)
- Clean and SOLID-compliant code structure

---

## 🛠️ Tech Stack

- Node.js
- yargs (for CLI argument parsing)
- chalk (for terminal styling)
- CommonJS modules

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/notes-app-cli.git
   cd notes-app-cli
   ```

2. **Install dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed (version 14+ recommended).

   Then run:

   ```bash
   npm install
   ```

## 📋 Usage

   Run commands using:

   ```bash
   node app.js <command> [options]
   ```

## 🗂 Project Structure 

``` . ├── app.js # CLI command definitions using yargs ├── notes/ │ ├── index.js # Exports core interface │ ├── noteService.js # Business logic (add, read, list, remove) │ └── noteStorage.js # Data persistence layer (fs operations) └── notes.json # Auto-generated JSON data store ```