# React Component Guide: Admin Dashboard

This guide explains the purpose, inputs (Props), local memory (State), and code usage for each component in the Admin Dashboard. Use this to study and understand how the project is put together!

---

## 1. App Component (`App.js`)
* **What it does**: The root component of the entire application. It wraps the application in a `BrowserRouter` for routing and sets up the overall two-column grid layout (Sidebar on the left, main pages on the right).
* **Props**: None.
* **State**: None.
* **Usage**: Renders `<Navbar />`, `<Sidebar />`, and defines the routing table using React Router's `<Routes>` and `<Route>` components.

---

## 2. Navbar Component (`Navbar.js`)
* **What it does**: The top header bar of the application. Displays the dashboard title, current admin greeting, and a logout button. It also manages a responsive hamburger menu toggle for mobile screen sizes.
* **Props**: None.
* **State**:
  * `isOpen` (boolean): Tracks whether the mobile collapsed menu is expanded (`true`) or hidden (`false`).
* **Usage**:
  ```jsx
  <Navbar />
  ```
  * *Beginner Concept*: Uses a click handler `onClick={() => setIsOpen(!isOpen)}` to toggle the value of `isOpen`. We use a JavaScript template literal to conditionally append the Bootstrap class `"show"` to make the menu expand:
    ```jsx
    className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
    ```

---

## 3. Sidebar Component (`Sidebar.js`)
* **What it does**: The left-hand navigation panel containing links to navigate between pages (Dashboard, Users, Products, Orders).
* **Props**: None.
* **State**: None.
* **Usage**:
  ```jsx
  <Sidebar />
  ```
  * *Beginner Concept*: Uses React Router's `<NavLink>` instead of standard HTML `<a>` tags. `<NavLink>` prevents page reloads and automatically detects when a link's destination (`to="/"`, `/users`, etc.) matches the current browser URL. We check the `isActive` status in a function to dynamically add our custom active styling class `.active-sidebar-link` (which colors the active item's text `#215E61` and adds a left border without solid background blocks):
    ```jsx
    className={({ isActive }) => `nav-link sidebar-link ${isActive ? "active-sidebar-link" : ""}`}
    ```

---

## 4. StatisticsCards Component (`StatisticsCards.js`)
* **What it does**: Renders three modern stat cards at the top of the dashboard showing the total count of users, products, and orders.
* **Props**: None.
* **State**: None.
* **Usage**:
  ```jsx
  <StatisticsCards />
  ```
  * *Beginner Concept*: Pulls counts dynamically by loading the static data arrays (from `data/Users`, `data/Products`, and `data/Orders`) and displaying their `.length` property (e.g., `{users.length}`).

---

## 5. Chart Component (`Chart.js`)
* **What it does**: Renders a beautiful visual representation of our database statistics (Users, Products, Orders) using a canvas-based **Bar Chart**.
* **Props**: None.
* **State**: None.
* **Usage**:
  ```jsx
  <Chart />
  ```
  * *Beginner Concept*: Integrates the `react-chartjs-2` library. We must "register" the modules we want (scales, bars, tooltips) from the core `chart.js` library using `ChartJS.register(...)`. We then feed two simple JavaScript objects to the `<Bar />` component:
    1. `data`: Configures labels (X-axis) and datasets (numbers, colors, border widths).
    2. `options`: Configures customization behavior like responsive sizing, fonts, and Y-axis scale increments.

---

## 6. SearchBar Component (`SearchBar.js`)
* **What it does**: A reusable input field component that allows users to filter items in the tables.
* **Props**:
  * `search` (string): The current search query string.
  * `setSearch` (function): The state updater function passed down from the parent page.
* **State**: None (it relies entirely on props, making it a "stateless" or "controlled" component).
* **Usage**:
  ```jsx
  <SearchBar search={search} setSearch={setSearch} />
  ```
  * *Beginner Concept*: This is a **controlled component**. The input's `value` is bound to the `search` prop. Whenever the user types, the `onChange` event fires, calling `setSearch(e.target.value)` to update the parent component's state, which in turn recalculates the filtered data.

---

## 7. Page Components (`Users.js`, `Products.js`, `Orders.js`)
* **What it does**: Individual views rendered for each URL route. They load static data, filter it based on search, and output a structured Bootstrap table displaying all matching records directly.
* **Props**: None.
* **State**:
  * `search` (string): Captures search input to filter names.
* **Usage**:
  ```jsx
  <Users />
  <Products />
  <Orders />
  ```
  * *Beginner Concept*: Performs client-side operations:
    1. **Filtering**: Uses `data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))` to dynamically update the items listed in the table.
    2. **UI Interactions**: Edit and Delete buttons trigger simple browser alerts (`alert(...)`) showing item details.
