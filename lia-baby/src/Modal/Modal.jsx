export default function Modal({ children, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 40,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        background: "rgba(0, 0, 0, 0.4)", 
        backdropFilter: "blur(8px)", 
        WebkitBackdropFilter: "blur(8px)",

        zIndex: 999
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
          padding: "20px",
          borderRadius: "20px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} style={{
          color:"rgb(121, 104, 73)"
        }}>X</button>
        {children}
      </div>
    </div>
  );
}