// app.js

// ——— Inline style objects ———
const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
    height: "56px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: { display: "flex", alignItems: "center", fontSize: "24px", fontWeight: "bold", color: "#FF0000", textDecoration: "none" },
  searchContainer: { flex: 1, margin: "0 24px", display: "flex" },
  searchInput: { flex: 1, padding: "6px 12px", border: "1px solid #ccc", borderRight: "none", borderRadius: "2px 0 0 2px", outline: "none" },
  searchButton: { padding: "6px 12px", border: "1px solid #ccc", backgroundColor: "#f8f8f8", borderRadius: "0 2px 2px 0", cursor: "pointer" },
  icons: { display: "flex", alignItems: "center", gap: "16px" },

  container: { display: "flex", marginTop: "16px" },
  sidebar: { width: "200px", padding: "16px", borderRight: "1px solid #eee" },
  sidebarItem: { padding: "8px 0", cursor: "pointer", color: "#555" },

  content: { flex: 1, padding: "16px", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "16px" },
  videoCard: { cursor: "pointer" },
  thumbnail: { width: "100%", borderRadius: "4px", backgroundColor: "#ddd", height: "140px", marginBottom: "8px" },
  videoTitle: { fontSize: "14px", fontWeight: "500", margin: "0 0 4px" },
  videoChannel: { fontSize: "12px", color: "#777", margin: 0 }
};

// ——— Header ———
const header = React.createElement(
  "header",
  { style: styles.header },
  [
    // Hamburger / menu icon (just three lines)
    React.createElement(
      "div",
      { key: "menu", style: { cursor: "pointer", padding: "8px" } },
      React.createElement("div", { style: { width: "18px", height: "2px", background: "#333", margin: "4px 0" } }),
      React.createElement("div", { style: { width: "18px", height: "2px", background: "#333", margin: "4px 0" } }),
      React.createElement("div", { style: { width: "18px", height: "2px", background: "#333", margin: "4px 0" } })
    ),

    // Logo
    React.createElement(
      "a",
      { key: "logo", href: "#", style: styles.logo },
      "YouTube"
    ),

    // Search bar
    React.createElement(
      "div",
      { key: "search", style: styles.searchContainer },
      React.createElement("input", { type: "text", placeholder: "Search", style: styles.searchInput }),
      React.createElement("button", { style: styles.searchButton }, "🔍")
    ),

    // Right‑side icons
    React.createElement(
      "div",
      { key: "icons", style: styles.icons },
      React.createElement("button", { title: "Create", style: { background: "none", border: "none", cursor: "pointer" } }, "🎥"),
      React.createElement("button", { title: "Apps", style: { background: "none", border: "none", cursor: "pointer" } }, "◼️"),
      React.createElement("button", { title: "Notifications", style: { background: "none", border: "none", cursor: "pointer" } }, "🔔"),
      React.createElement("div", { title: "Account", style: { width: "32px", height: "32px", borderRadius: "50%", background: "#888", cursor: "pointer" } })
    )
  ]
);

// ——— Sidebar ———
const sidebarItems = ["Home", "Trending", "Subscriptions", "Library", "History"];
const sidebar = React.createElement(
  "nav",
  { style: styles.sidebar },
  sidebarItems.map((item, i) =>
    React.createElement("div", { key: i, style: styles.sidebarItem }, item)
  )
);

// ——— Video Grid ———
function createVideoCard(index) {
  return React.createElement(
    "div",
    { key: index, style: styles.videoCard },
    React.createElement("div", { style: styles.thumbnail }),
    React.createElement("h3", { style: styles.videoTitle }, `Sample Video ${index + 1}`),
    React.createElement("p", { style: styles.videoChannel }, "Channel Name")
  );
}

const videoGrid = React.createElement(
  "section",
  { style: styles.content },
  Array.from({ length: 12 }).map((_, idx) => createVideoCard(idx))
);

// ——— Main Container ———
const main = React.createElement(
  "div",
  { key: "main", style: styles.container },
  [sidebar, videoGrid]
);

// ——— App Root ———
const app = React.createElement(
  "div",
  { id: "app" },
  [header, main]
);

// ——— Render ———
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
