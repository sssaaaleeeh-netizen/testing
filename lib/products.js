export const categories = [
  { id: "financial", name: "Financial Management", icon: "💰" },
  { id: "hr", name: "HR & Payroll", icon: "👥" },
  { id: "inventory", name: "Inventory & Stock", icon: "📦" },
  { id: "project", name: "Project Management", icon: "📋" },
  { id: "sales", name: "Sales & CRM", icon: "📈" },
  { id: "analytics", name: "Data & Analytics", icon: "📊" },
];

export const products = [
  {
    id: "budget-planner-pro",
    name: "Business Budget Planner Pro",
    category: "financial",
    price: 29,
    originalPrice: 49,
    description:
      "A comprehensive budget planning spreadsheet designed for small to medium businesses. Track income, expenses, and forecast your financial future with automated charts and dashboards.",
    longDescription:
      "Take full control of your business finances with this professionally designed Excel workbook. Features include monthly and annual budget tracking, variance analysis, automated charts, department-wise expense breakdown, and a 12-month cash flow forecast. No formulas knowledge required — just fill in your numbers.",
    features: [
      "12-month budget tracker",
      "Automated variance analysis",
      "Department expense breakdown",
      "Cash flow forecast",
      "10+ interactive charts",
      "Printable summary reports",
    ],
    icon: "💰",
    file: "/products/budget-planner-pro.xlsx",
    badge: "Best Seller",
    badgeColor: "emerald",
    rating: 4.9,
    reviews: 128,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
  {
    id: "invoice-tracker",
    name: "Invoice & Accounts Receivable Tracker",
    category: "financial",
    price: 19,
    originalPrice: null,
    description:
      "Track all your client invoices, payment statuses, and outstanding receivables in one place. Automated aging reports and reminders.",
    longDescription:
      "Never lose track of unpaid invoices again. This ready-to-use Excel tool lets you log all your invoices, track payment dates, calculate overdue amounts, and generate aging reports automatically. Includes a client database and summary dashboard.",
    features: [
      "Invoice logging & tracking",
      "Automated aging report (30/60/90 days)",
      "Payment status dashboard",
      "Client database sheet",
      "Overdue amount calculator",
      "Monthly collection summary",
    ],
    icon: "🧾",
    file: "/products/invoice-tracker.xlsx",
    badge: "New",
    badgeColor: "blue",
    rating: 4.8,
    reviews: 64,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
  {
    id: "payroll-calculator",
    name: "Payroll Calculator & HR Sheet",
    category: "hr",
    price: 35,
    originalPrice: 55,
    description:
      "Complete payroll management for up to 50 employees. Calculate salaries, deductions, bonuses, taxes and generate pay slips automatically.",
    longDescription:
      "Handle your entire payroll process in Excel. Enter employee details once and calculate monthly salaries, overtime, bonuses, social security, and tax deductions automatically. Includes a payslip generator and annual payroll summary.",
    features: [
      "Supports up to 50 employees",
      "Auto salary & deduction calc",
      "Tax & social security formulas",
      "Bonus & overtime tracking",
      "Printable payslip generator",
      "Annual payroll summary",
    ],
    icon: "👥",
    file: "/products/payroll-calculator.xlsx",
    badge: "Popular",
    badgeColor: "violet",
    rating: 4.7,
    reviews: 92,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
  {
    id: "employee-database",
    name: "Employee Database & Leave Tracker",
    category: "hr",
    price: 22,
    originalPrice: null,
    description:
      "Organize all employee records, contracts, documents checklist and track annual leave, sick days, and absences in one sheet.",
    longDescription:
      "A clean HR management tool for growing companies. Store employee personal info, job details, contract dates, and documents status. The leave tracker auto-calculates remaining leave days, sick leave balances, and generates monthly attendance summaries.",
    features: [
      "Employee records database",
      "Annual leave balance tracker",
      "Sick leave & absence log",
      "Document checklist per employee",
      "Auto remaining leave calc",
      "Monthly attendance report",
    ],
    icon: "📋",
    file: "/products/employee-database.xlsx",
    badge: null,
    badgeColor: null,
    rating: 4.6,
    reviews: 47,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
  {
    id: "inventory-management",
    name: "Inventory Management System",
    category: "inventory",
    price: 32,
    originalPrice: 45,
    description:
      "Full inventory control: track stock levels, reorder points, supplier info, and get automatic low-stock alerts.",
    longDescription:
      "A powerful Excel-based inventory system that tracks all your products, monitors stock levels in real-time, flags items below reorder point, and manages supplier information. Includes purchase order templates and valuation reports.",
    features: [
      "Product & SKU database",
      "Real-time stock level tracking",
      "Automatic low-stock alerts",
      "Supplier database",
      "Purchase order template",
      "Stock valuation report",
    ],
    icon: "📦",
    file: "/products/inventory-management.xlsx",
    badge: "Best Seller",
    badgeColor: "emerald",
    rating: 4.9,
    reviews: 115,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
  {
    id: "project-planner",
    name: "Project Planner & Gantt Chart",
    category: "project",
    price: 25,
    originalPrice: null,
    description:
      "Plan, track and manage projects with a dynamic Gantt chart, task assignments, milestone tracking and progress reporting.",
    longDescription:
      "Manage your projects like a pro without expensive software. This Excel workbook auto-generates a Gantt chart from your task list, tracks completion percentages, highlights overdue tasks, and produces a one-page project status report.",
    features: [
      "Auto-generated Gantt chart",
      "Task & milestone tracker",
      "Team member assignment",
      "Progress percentage tracking",
      "Overdue task highlighting",
      "One-page status report",
    ],
    icon: "📅",
    file: "/products/project-planner.xlsx",
    badge: null,
    badgeColor: null,
    rating: 4.7,
    reviews: 73,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
  {
    id: "sales-tracker",
    name: "Sales Tracker & CRM Dashboard",
    category: "sales",
    price: 28,
    originalPrice: 40,
    description:
      "Track leads, deals, sales pipeline, and team performance. Includes a CRM-style client database and monthly sales dashboard.",
    longDescription:
      "Turn Excel into a lightweight CRM. Log your leads and opportunities, track deal stages and values, monitor your sales pipeline, and measure individual and team performance. The dashboard auto-updates with KPIs and charts every time you add new data.",
    features: [
      "Lead & opportunity tracking",
      "Sales pipeline visualization",
      "Client & contact database",
      "Team performance scoreboard",
      "Monthly KPI dashboard",
      "Win/loss analysis",
    ],
    icon: "📈",
    file: "/products/sales-tracker.xlsx",
    badge: "Popular",
    badgeColor: "violet",
    rating: 4.8,
    reviews: 88,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
  {
    id: "kpi-dashboard",
    name: "Business KPI Dashboard",
    category: "analytics",
    price: 38,
    originalPrice: 60,
    description:
      "A stunning executive dashboard that visualizes your most important business KPIs across finance, operations, sales, and HR.",
    longDescription:
      "Present your business performance to management and stakeholders with a professional, visually rich dashboard. Simply input your monthly data and watch 20+ metrics and charts update automatically. Covers revenue, costs, headcount, customer metrics, and more.",
    features: [
      "20+ auto-updating KPI metrics",
      "Finance, Sales, HR, Ops coverage",
      "Executive summary page",
      "Month-over-month comparisons",
      "Traffic light indicators",
      "Printable PDF-ready layout",
    ],
    icon: "📊",
    file: "/products/kpi-dashboard.xlsx",
    badge: "Premium",
    badgeColor: "amber",
    rating: 5.0,
    reviews: 56,
    compatible: "Excel 2016, 2019, 2021, Microsoft 365",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.category === categoryId);
}

export function getBadgeStyle(color) {
  const styles = {
    emerald: "bg-emerald-100 text-emerald-700",
    blue: "bg-blue-100 text-blue-700",
    violet: "bg-violet-100 text-violet-700",
    amber: "bg-amber-100 text-amber-700",
  };
  return styles[color] || "bg-gray-100 text-gray-700";
}
