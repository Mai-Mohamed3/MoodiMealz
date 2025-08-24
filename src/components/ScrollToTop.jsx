import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // لو عايزة حركة سلسة
    });
  }, [pathname]);

  return null; // مفيش حاجة هتترندر
};

export default ScrollToTop;
