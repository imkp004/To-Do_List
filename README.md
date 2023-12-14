# To-Do_List
https://imkp004.github.io/To-Do_List/To-Do_List/index.html

**Project Description: Simple To-Do List Web App**

In this project, I created a straightforward and visually appealing To-Do List web application using HTML, CSS, and JavaScript. Let's break down the components and the process behind building this project:

**HTML Structure:**
- The HTML file provides the basic structure for the web page. It includes a head section with meta tags for character set and viewport settings, a link to an external CSS file for styling, and the title of the page.
- The body of the HTML contains a container div, an h1 heading for the title of the application, an input section for adding tasks, an unordered list (ul) to display the tasks, and a script tag linking to an external JavaScript file.

**JavaScript Functionality:**
- The JavaScript file (`script.js`) is linked at the end of the body to ensure the DOM is fully loaded before the script runs.
- The `DOMContentLoaded` event listener ensures that the script executes only after the HTML content is fully loaded.
- Two essential elements, the task input field (`taskInput`) and the task list (`taskList`), are accessed from the DOM for manipulation.
- Three functions are defined: `addTask`, `completeTask`, and `deleteTask`.
  - `addTask`: Adds a new task to the list when the "Add Task" button is clicked. It validates the input and creates a new list item with task details.
  - `completeTask`: Toggles the completion status of a task, changing its background color when the "Complete" button is clicked.
  - `deleteTask`: Removes a task from the list when the "Delete" button is clicked.

**CSS Styling:**
- The CSS file (`style.css`) is linked to enhance the visual presentation of the web app.
- Styles are applied to the body, container, heading, input section, input field, buttons, and task list to ensure a clean and user-friendly design.
- Different styles are used for normal tasks and completed tasks to provide a visual indication of task status.

**Overall Design:**
- The application features a clean and responsive design, with a max-width container for a centered layout.
- Input and button elements are styled for a pleasant user experience.
- Tasks are displayed as list items with options to mark them as completed or delete them.

**Usage:**
- Users can enter new tasks in the input field and click "Add Task" to add them to the list.
- Each task in the list is accompanied by "Complete" and "Delete" buttons for easy task management.

This project serves as a basic foundation for a To-Do List application, demonstrating how HTML, CSS, and JavaScript can be combined to create a functional and visually appealing user interface.
