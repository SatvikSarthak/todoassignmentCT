# 📝 React To-Do List

A simple and elegant React-based To-Do List application that allows users to:

- ✅ Add, complete, delete tasks
- 🔍 Filter and sort tasks by status and time
- 💾 Persist tasks using localStorage
- 🎨 Styled with TailwindCSS for a clean UI

---

## 🚀 Features

- **Add Tasks** with input validation
- **Mark as Completed** with checkbox
- **Delete Tasks**
- **Filter** by status (Completed / Pending / All)
- **Persistent Storage** via `localStorage`

---

## 🛠️ Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

```bash
git clone (https://github.com/SatvikSarthak/todoassignmentCT.git)
cd react-todo-list
npm install
Run the App
bash
Copy
Edit
npm start
Visit http://localhost:3000 to open the app in your browser.

📁 Project Structure
css
Copy
Edit
src/
├── components/
│   └── TodoInput.jsx
├── App.jsx
├── App.css
└── index.js
 Testing Guidance
You can test the core functionalities manually:

1. Add Task
Type a task in the input field and press "Add".

It should appear in the list below.

2. Mark as Completed
Click the checkbox beside a task.

The task should get a strikethrough style and change status to "Completed".

3. Delete Task
Click the "Delete" button beside a task.

It should be removed from the list.

4. Persistence Test
Add a few tasks.

Refresh the browser.

The tasks should still be there (loaded from localStorage).

5. Clear All
Click the "Clear all tasks" button.

The list should empty and localStorage should be cleared.

6. Filtering 
Use dropdown/select options to filter by:

All, Completed, Pending

Author
Satvik Sarthak
GitHub
