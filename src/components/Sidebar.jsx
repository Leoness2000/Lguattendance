function Sidebar() {
  const icons = ["⌂", "▦", "◠", "◍", "☰"];

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        {icons.map((icon, index) => (
          <button type="button" className="sidebar-icon" key={index} aria-label={`menu-item-${index + 1}`}>
            {icon}
          </button>
        ))}
      </div>

      <button type="button" className="sidebar-icon" aria-label="logout">
        ↪
      </button>
    </aside>
  );
}

export default Sidebar;