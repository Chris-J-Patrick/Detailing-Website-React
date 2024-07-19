const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-2 p-3 text-center ">
      <h1 className="fs-1 fw-bold mb-0">{title}</h1>
      <p className="mb-0 fs-5 text-muted text-align-center">{subtitle}</p>
    </div>
  );
};
export default PageTitle;
