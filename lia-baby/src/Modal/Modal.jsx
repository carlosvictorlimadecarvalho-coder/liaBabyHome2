export default function Modal({ children, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top:0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
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