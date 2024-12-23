
const DetailCard = () => {
  return (
    <>
  
       <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "15px",
          padding: "16px",
          maxWidth: "350px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          // margin: "16px auto",
          fontFamily: "Arial, sans-serif",
          marginBottom:'40px'
      }}
    >
      <h2
        style={{
          color: "#1976d2",
          fontSize: "36px",
          marginBottom: "8px",
        }}
      >
        Page Foundation
      </h2>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#333",
          marginBottom: "18px",
        }}
      >
       In digital/agile transformation and product management, pages and forms are essential visual tools that represent digital products. Participants will learn how to effectively visualize, understand the interrelations of pages and forms, and use components to align with business requirements.
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <strong>Total Hours:</strong>8
        </div>
        <div>
          <strong>Interactive Practice Hours:</strong> 5
        </div>
        <div>
          <strong>Real Project Hours:</strong> 3
        </div>
      </div>
    </div>
    
    </>
    
  );
};

export default DetailCard;
