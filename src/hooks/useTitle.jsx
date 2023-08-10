import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Tasty Pizza`;
  }, [title]);
};

export default useTitle;
