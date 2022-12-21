export const imageTransitionStyling = (isVisible) => ({
    opacity: isVisible ? 1: 0,
    top: isVisible ? 0: "100px",
    transition: "opacity 2s ease, top 2s ease",
  });