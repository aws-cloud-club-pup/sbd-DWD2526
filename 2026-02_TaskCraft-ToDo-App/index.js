/**
 * TaskCraft - Professional To-Do Application Logic
 *
 * CONCEPT FOCUS:
 * This file is designed for teaching how arrays, objects, events, and DOM manipulation work together.
 * 
 * CORE ARCHITECTURE:
 * 1. State: The Application State is an ARRAY of OBJECTS.
 * 2. Persistence: The State is saved to LocalStorage (as a String).
 * 3. Rendering: The UI is completely redrawn (DOM generated) based on the State Array.
 */

// --- 1. DOM Element Selection ---
// Grabbing elements from the HTML by their IDs
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const totalTasksEl = document.getElementById('total-tasks');
const completedTasksEl = document.getElementById('completed-tasks');

// --- 2. Application State Variables ---
// We try to load existing tasks from browser storage.
// If there are none, we initialize an empty Array `[]`.
const CACHE_KEY = 'taskcraft_tasks';
let tasks = JSON.parse(localStorage.getItem(CACHE_KEY)) || [];

/**
 * Array of Objects Structure Example:
 * tasks = [
 *   { id: 167812938129, text: 'Learn JavaScript Arrays', completed: true },
 *   { id: 167812938555, text: 'Master Objects', completed: false }
 * ]
 */

// --- 3. Core Functions (Business Logic) ---

/**
 * Adds a new task object to our 'tasks' array.
 * @param {string} taskText - The content of the new task.
 */
function addTask(taskText) {
    if (taskText.trim() === '') return; // Prevent empty tasks

    // TEACHING POINT: Creating a Data Object
    // We create a new Object to represent a single data record.
    const newTask = {
        id: Date.now(), // Generate a unique ID using timestamp
        text: taskText,
        completed: false // Default state
    };

    // TEACHING POINT: Array Manipulation
    // Add the new Object to the end of our Array
    tasks.push(newTask);

    // Save and update UI
    saveState();
    renderTasks();
}

/**
 * Toggles the 'completed' boolean property of a specific task object.
 * @param {number} taskId - The unique ID of the task to toggle.
 */
function toggleTask(taskId) {
    // TEACHING POINT: Finding an Object in an Array
    // We use .find() to locate the object whose ID matches the parameter.
    const taskObj = tasks.find(task => task.id === taskId);
    
    if (taskObj) {
        // Toggle the boolean (if true -> false, if false -> true)
        taskObj.completed = !taskObj.completed;
        saveState();
        renderTasks();
    }
}

/**
 * Removes a task object from the array based on its ID.
 * @param {number} taskId - The unique ID of the task to delete.
 */
function deleteTask(taskId) {
    // TEACHING POINT: Filtering an Array
    // We create a NEW array that contains all tasks EXCEPT the one with matching ID.
    tasks = tasks.filter(task => task.id !== taskId);
    
    saveState();
    renderTasks();
}

/**
 * Saves the current 'tasks' array to the browser's LocalStorage.
 * LocalStorage only accepts strings, so we must stringify our Array of Objects.
 */
function saveState() {
    localStorage.setItem(CACHE_KEY, JSON.stringify(tasks));
}

// --- 4. Rendering Function (UI Logic) ---

/**
 * Clears the current list in HTML and redraws based on the underlying 'tasks' array.
 */
function renderTasks() {
    // 1. Clear the current HTML content in the <ul>
    taskList.innerHTML = '';
    
    // 2. Count metrics
    const totalCount = tasks.length;
    // .filter returns a new array. We read its `.length` property.
    const completedCount = tasks.filter(task => task.completed).length; 
    
    // 3. Update the Header statistics
    totalTasksEl.textContent = `Total: ${totalCount}`;
    completedTasksEl.textContent = `Completed: ${completedCount}`;

    // 4. Handle Empty State UI
    if (totalCount === 0) {
        emptyState.classList.remove('hidden'); // Show empty box
    } else {
        emptyState.classList.add('hidden'); // Hide empty box
        
        // 5. Build the UI for each item in the Array
        // We loop over the Array using .forEach()
        tasks.forEach(task => {
            // Create an <li> element
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            
            // Generate the inner HTML string.
            // TEACHING POINT: Template Literals enable using variables inside strings.
            // Using FontAwesome Icons inside buttons
            li.innerHTML = `
                <button class="task-toggle" aria-label="Toggle task completion">
                    <i class="fa-solid fa-check"></i>
                </button>
                <span class="task-content">${task.text}</span>
                <div class="task-actions">
                    <button class="btn-icon btn-delete" aria-label="Delete task">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;

            // 6. Attach Event Listeners to the dynamically created buttons
            const toggleBtn = li.querySelector('.task-toggle');
            toggleBtn.addEventListener('click', () => {
                toggleTask(task.id);
            });

            const deleteBtn = li.querySelector('.btn-delete');
            deleteBtn.addEventListener('click', () => {
                deleteTask(task.id);
            });

            // 7. Append the created <li> to the <ul> DOM element
            taskList.appendChild(li);
        });
    }
}

// --- 5. Global Event Listeners Setup ---

/**
 * Listen for the physical act of submitting the form (Pressing Enter or clicking Add)
 */
taskForm.addEventListener('submit', (event) => {
    // Prevent the default browser behavior, which would reload the entire page
    event.preventDefault();

    // Grab the text the user typed
    const rawText = taskInput.value;
    
    // Pass it to our Business Logic layer
    addTask(rawText);

    // Clear the input visually
    taskInput.value = '';
    
    // Keep focus inside the input field so the user can type again immediately
    taskInput.focus();
});

// --- 6. Initialization ---
// On page load, map whatever is loaded from LocalStorage to the browser window.
renderTasks();
