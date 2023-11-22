const ErrorModel = ({ error }) => {
  
  return (
    <div style={{
      backgroundColor: "#FFCCCC",
      color: "#B71C1C",
      padding: "15px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      { error }
    </div>
  )
}

export default ErrorModel
