// count.jsx


const employees =JSON.parse(localStorage.getItem("employees"))
// --------------------
// BASIC COUNTS
// --------------------

export const totalEmployees = employees.length;

// --------------------
// TASK LEVEL COUNTS
// --------------------

export const totalTasks = employees.reduce(
  (total, emp) => total + emp.tasks.length,
  0
);

export const totalActiveTasks = employees.reduce(
  (total, emp) =>
    total + emp.tasks.filter(task => task.active).length,
  0
);

export const totalNewTasks = employees.reduce(
  (total, emp) =>
    total + emp.tasks.filter(task => task.newTask).length,
  0
);

export const totalCompletedTasks = employees.reduce(
  (total, emp) =>
    total + emp.tasks.filter(task => task.completed).length,
  0
);

export const totalFailedTasks = employees.reduce(
  (total, emp) =>
    total + emp.tasks.filter(task => task.failed).length,
  0
);

// --------------------
// EMPLOYEE STATUS COUNTS
// --------------------

export const activeEmployees = employees.filter(
  emp => emp.status === "Active"
).length;

// --------------------
// DEPARTMENT COUNTS
// --------------------

export const departmentCounts = employees.reduce((acc, emp) => {
  acc[emp.department] = (acc[emp.department] || 0) + 1;
  return acc;
}, {});

// --------------------
// TASK CATEGORY COUNTS
// --------------------

export const taskCategoryCounts = employees.reduce((acc, emp) => {
  emp.tasks.forEach(task => {
    acc[task.category] = (acc[task.category] || 0) + 1;
  });
  return acc;
}, {});

// --------------------
// ROLE COUNTS
// --------------------

export const roleCounts = employees.reduce((acc, emp) => {
  acc[emp.role] = (acc[emp.role] || 0) + 1;
  return acc;
}, {});
