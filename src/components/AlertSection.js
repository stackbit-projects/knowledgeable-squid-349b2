// src/components/AlertSection.js

const AlertSection = ({ body }) => {
    return <p>{body}</p>
}

// src/components/AlertSection.js

const AlertSection = ({ annotationPrefix, body }) => {
  return (
    <div data-sb-field-path={annotationPrefix}>
      <p data-sb-field-path=".body">{body}</p>
    </div>
  )
}

export default AlertSection


export default AlertSection
