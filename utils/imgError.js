export const imgError = ({ currentTarget }) => {
  currentTarget.onerror = null;
  currentTarget.src = "/images/error.png";
};
