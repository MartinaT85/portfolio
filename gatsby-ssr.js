import * as React from "react";

const BlockingJsForTheme = () => {
  const codeToRunOnClient = `
  (function() {
    alert('Hi')
  }
  )()
  `;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<BlockingJsForTheme />);
};
