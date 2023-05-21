import { useEffect } from "react";

const useDynamicTitle = (title) => {
  useEffect(() => {
    document.title = `Toy Car Zone ${title}`;
  }, [title]);
};

export default useDynamicTitle;
