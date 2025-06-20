interface LoadingSpinnerProps {
  message?: string;
}

export default function LoadingSpinner({ message = "Loading..." }: LoadingSpinnerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <div
        style={{
          border: "6px solid #f3f3f3",
          borderTop: "6px solid #3498db",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          animation: "spin 1s linear infinite",
          marginBottom: "1rem",
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={{ fontSize: "1.2rem", color: "#555" }}>{message}</div>
    </div>
  );
}
