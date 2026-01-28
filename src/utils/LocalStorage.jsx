// localStorage.clear()
const employees = [
    { 
        id: 1,
        role: "employee",
        firstName: "Arjun",
        lastName: "Sharma",
        email: "arjun@e.com",
        password: "123",
        address: "Delhi, India",
        dateOfJoining: "2023-01-15",
        department: "Development",
        designation: "Developer",
        employmentType: "Full Time",
        status: "Active",
        tasks: [
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Fix login bug",
    taskDescription: "Resolve authentication issue",
    taskDate: "2024-10-10",
    taskDueDate: "2026-01-28",
    category: "Development",
  },
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "API integration",
    taskDescription: "Integrate payment gateway",
    taskDate: "2024-10-14",
    taskDueDate: "2026-01-30",
    category: "Development",
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Code cleanup",
    taskDescription: "Remove unused components",
    taskDate: "2024-10-05",
    taskDueDate: "2026-01-20",
    category: "Development",
  },
]

    },

    {
        id: 2,
        role: "employee",
        firstName: "Sneha",
        lastName: "Verma",
        email: "sneha@e.com",
        password: "123",
        address: "Noida, India",
        dateOfJoining: "2022-11-10",
        department: "Testing",
        designation: "QA Engineer",
        employmentType: "Full Time",
        status: "Active",
        tasks: [
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Test payment flow",
    taskDescription: "Manual testing of payment module",
    taskDate: "2024-10-12",
    taskDueDate: "2026-01-27",
    category: "Testing",
  },
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Automation script",
    taskDescription: "Write test cases for login",
    taskDate: "2024-10-15",
    taskDueDate: "2026-01-31",
    category: "Testing",
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Regression testing",
    taskDescription: "Test old features",
    taskDate: "2024-10-08",
    taskDueDate: "2026-01-18",
    category: "Testing",
  },
]

    },

    {
        id: 3,
        role: "employee",
        firstName: "Ravi",
        lastName: "Kumar",
        email: "ravi@e.com",
        password: "123",
        address: "Bangalore, India",
        dateOfJoining: "2021-07-01",
        department: "Development",
        designation: "Project Manager",
        employmentType: "Full Time",
        status: "Active",
        tasks: [
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Sprint planning",
    taskDescription: "Plan next sprint tasks",
    taskDate: "2024-10-11",
    taskDueDate: "2026-01-29",
    category: "Management",
  },
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Client feedback",
    taskDescription: "Gather feedback after release",
    taskDate: "2024-10-14",
    taskDueDate: "2026-02-01",
    category: "Support",
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Weekly report",
    taskDescription: "Prepare project report",
    taskDate: "2024-10-06",
    taskDueDate: "2026-01-19",
    category: "Documentation",
  },
]

    },

    {
        id: 4,
        role: "employee",
        firstName: "Priya",
        lastName: "Singh",
        email: "priya@e.com",
        password: "123",
        address: "Pune, India",
        dateOfJoining: "2023-03-20",
        department: "HR",
        designation: "HR Executive",
        employmentType: "Full Time",
        status: "Active",
        tasks: [
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Schedule interviews",
    taskDescription: "Arrange interviews for dev role",
    taskDate: "2024-10-13",
    taskDueDate: "2026-01-27",
    category: "HR",
  },
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Policy update",
    taskDescription: "Update leave policy",
    taskDate: "2024-10-16",
    taskDueDate: "2026-02-02",
    category: "HR",
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Onboarding",
    taskDescription: "Complete new hire onboarding",
    taskDate: "2024-10-07",
    taskDueDate: "2026-01-17",
    category: "HR",
  },
]

    },

    {
        id: 5,
        role: "employee",
        firstName: "Karan",
        lastName: "Mehta",
        email: "karan@e.com",
        password: "123",
        address: "Mumbai, India",
        dateOfJoining: "2022-05-18",
        department: "Sales & Marketing",
        designation: "Sales Executive",
        employmentType: "Full Time",
        status: "Active",
        tasks: [
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Client follow-up",
    taskDescription: "Follow up with warm leads",
    taskDate: "2024-10-12",
    taskDueDate: "2026-01-28",
    category: "Sales",
  },
  {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Market research",
    taskDescription: "Analyze competitor pricing",
    taskDate: "2024-10-15",
    taskDueDate: "2026-02-03",
    category: "Marketing",
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Product demo",
    taskDescription: "Demo for enterprise client",
    taskDate: "2024-10-08",
    taskDueDate: "2026-01-16",
    category: "Sales",
  },
]

    },
];

const admin = [
    {
        id: 1,
        role: "admin",
        firstName: "Deepanshu",
        email: "admin@e.com",
        password: "123",
    },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return { employees, admin };
};
