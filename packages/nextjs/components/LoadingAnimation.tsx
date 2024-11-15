import loadingAnimation from "../public/lottie/loading.json";
import Lottie from "lottie-react";

const LoadingAnimation = () => {
  return (
    <div className="w-20 h-20">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default LoadingAnimation;
