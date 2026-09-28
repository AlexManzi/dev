export default function XpTitleBar({ children }) {
  return <div className="xp-title-bar">
    <span className="xp-window-icon" aria-hidden="true" />
    <span className="xp-window-title">{children}</span>
    <span className="xp-window-controls" aria-hidden="true"><span>_</span><span>□</span><span>×</span></span>
  </div>;
}
