/* eslint-disable react/prop-types */
export default function Main({ children, Status }) {
  return (
    <div
      className={
        Status === "ready" || Status === "finished"
          ? "main-before"
          : "main-after"
      }
    >
      {children}
    </div>
  );
}
