const SuccessModel = ({ success }) => {

  return (
    <div style={{
      backgroundColor: "#C1FFC1",
      color: "#2E7D32",
      padding: "15px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      { success }
    </div>
  )
}

export default SuccessModel
