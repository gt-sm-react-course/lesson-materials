import secretImage from "../assets/secret-image.jpg";

const ProtectedPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img src={secretImage} alt="Description" />
    </div>
  );
};

export default ProtectedPage;
