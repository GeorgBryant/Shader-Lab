export const styles = {
  layout: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    background: "#08080c",
    color: "#ffffff",
    overflow: "hidden",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, sans-serif",
  },

  preview: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    minWidth: 0,
    minHeight: 0,

    background: `
      radial-gradient(
        circle at 48% 45%,
        #101526 0%,
        #090b14 38%,
        #05060a 72%,
        #020205 100%
      )
    `,

    transition:
      "transform 280ms cubic-bezier(0.22, 1, 0.36, 1)",
  },

  panel: {
    position: "relative",
    overflow: "hidden",
    background: "rgba(17, 17, 24, 0.55)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    borderLeft:
      "1px solid rgba(255, 255, 255, 0.08)",
    transition:
      "background 250ms ease, border-color 250ms ease",
  },

  panelInner: {
    position: "relative",
    minHeight: "100%",
    padding: "20px 24px",
  },

  menuParticles: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
  },

  panelContent: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    margin: "0 0 18px",
    fontSize: "18px",
    fontWeight: 500,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    opacity: 0.72,
  },

  section: {
    marginBottom: "8px",
    borderBottom: "1px solid #292936",
    transition: "opacity 220ms ease",
  },

  sectionButton: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 0",
    color: "#ffffff",
    background: "transparent",
    border: "none",
    fontFamily: "inherit",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "left",
    cursor: "pointer",
  },

  sectionArrow: {
    display: "inline-block",
    color: "#8f8f9d",
    fontSize: "20px",
    lineHeight: 1,
    transition: "transform 160ms ease",
  },

  sectionContent: {
    padding: "8px 0 18px",
  },

  control: {
    display: "block",
    marginBottom: "14px",
  },

  controlHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "6px",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "-0.01em",
  },

  value: {
    color: "#9494a8",
    fontVariantNumeric: "tabular-nums",
    fontWeight: 400,
  },

  slider: {
    width: "100%",
  },

  colorControl: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
  },

  colorSwatchWrap: {
    position: "relative",
    width: "18px",
    height: "18px",
    flexShrink: 0,
  },

  colorSwatch: {
    display: "block",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    border:
      "1px solid rgba(255, 255, 255, 0.35)",
    boxSizing: "border-box",
    cursor: "pointer",
  },

  hiddenColorInput: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
  },

  button: {
    width: "100%",
    padding: "10px 12px",
    color: "#ffffff",
    background: "#252536",
    border: "1px solid #3b3b50",
    borderRadius: "6px",
    fontFamily: "inherit",
    cursor: "pointer",
  },

  resetButton: {
    width: "100%",
    marginTop: "18px",
    padding: "12px",
    color: "#ffffff",
    background: "transparent",
    border: "1px solid #3b3b50",
    borderRadius: "6px",
    fontFamily: "inherit",
    cursor: "pointer",
  },

  publicSectionTitle: {
    margin: "22px 0 14px",
    fontSize: "24px",
    fontWeight: 600,
    letterSpacing: "-0.03em",
  },

  starToggle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "14px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
  },

  starCheckbox: {
    width: "16px",
    height: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #9494a8",
    background: "transparent",
    boxSizing: "border-box",
  },

  starCheckboxActive: {
    background: "#ffffff",
    borderColor: "#ffffff",
  },

  starCheckboxMark: {
    width: "6px",
    height: "6px",
    background: "#111118",
  },

  rotationHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "6px",
    fontSize: "14px",
    fontWeight: 500,
  },

  rotationValueGroup: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  rotationReset: {
    padding: 0,
    color: "#9494a8",
    background: "transparent",
    border: "none",
    fontFamily: "inherit",
    fontSize: "17px",
    lineHeight: 1,
    cursor: "pointer",
  },

  publicPanel: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: "320px",
    zIndex: 10,
    overflow: "hidden",
    transition:
      "transform 280ms cubic-bezier(0.22, 1, 0.36, 1)",
  },

  publicPanelCollapsed: {
    transform: "translateX(276px)",
  },

  panelToggle: {
    position: "absolute",
    top: "18px",
    right: "14px",
    zIndex: 5,
    width: "28px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    background: "rgba(255, 255, 255, 0.06)",
    border:
      "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: "4px",
    fontFamily: "inherit",
    fontSize: "18px",
    lineHeight: 1,
    cursor: "pointer",
  },


  randomizeButton: {
  width: "100%",
  padding: "9px 12px",
  marginBottom: "4px",

  color: "#ffffff",
  background: "rgba(255, 255, 255, 0.05)",

  border:
    "1px solid rgba(255, 255, 255, 0.14)",
  borderRadius: "3px",

  fontFamily: "inherit",
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "0.04em",
  textTransform: "uppercase",

  cursor: "pointer",
},
};

