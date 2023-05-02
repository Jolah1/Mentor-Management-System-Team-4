import React from "react";
// import { EditorInput as TinyMCEEditorInput } from "tinymce";
import { Editor } from "@tinymce/tinymce-react";

import React from "react";

function EditorInput({ onChange, value, name }) {
  const onEditorChange = (_value, _editor) => {
    const data = {
      target: {
        name,
        value: _value,
      },
    };
    if (onChange) {
      onChange(data);
    }
  };

  const toolbar =
    "undo redo | casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify |  bullist numlist checklist outdent indent | removeformat | a11ycheck code table help";
  return (
    <Editor
      apiKey={editorApiKey}
      initialValue="<p>Type the content here</p>"
      value={value}
      onEditorChange={onEditorChange}
      init={{
        height: 300,
        menubar: true,
        plugins: [
          "a11ychecker",
          "advlist",
          "advcode",
          "advtable",
          "autolink",
          "checklist",
          "export",
          "lists",
          "link",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "powerpaste",
          "formatpainter",
          "insertdatetime",
          "table",
          "help",
          "wordcount",
        ],
        toolbar,
        content_style:
          "body { font-family: Inter, sans-serif; font-size:14px }",
      }}
    />
  );
}

export default EditorInput;
