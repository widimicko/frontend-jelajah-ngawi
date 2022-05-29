import BackToTop from "react-back-to-top-button";

const BackToTopButton = () => {
  return (
    <BackToTop showOnScrollUp showAt={100} speed={1500} easing="easeInOutQuint">
      <div className="bg-primary-brown rounded-circle p-3 fs-3 text-white">
        <i className="bi bi-arrow-up"></i>
      </div>
    </BackToTop>
  );
};

export default BackToTopButton;
