import React, { useState, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Jodit } from 'jodit-react';
// import { Modal } from 'antd';

const MyEditor: React.FC = () => {
  // const editor = useRef(null);
  const [content, setContent] = useState('');

  const handleExecuteCommand = (editor: any) => {
    // if (editor === 'highlight') {
    const dialog = new Jodit.modules.Dialog({});
    const textArea = document.createElement('textarea');
    // textArea.value = selectedText;

    const languageSelect = document.createElement('select');
    languageSelect.innerHTML = `
          <option value="javascript">JavaScript</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="python">Python</option>
          <!-- Thêm các ngôn ngữ khác vào đây -->
        `;

    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.addEventListener('click', () => {
      const selectedLanguage = languageSelect.value;
      const highlightedCode = `<code class="language-${selectedLanguage}">s</code>`;
      editor.selection.insertHTML(highlightedCode);
      dialog.close();
    });

    dialog.setHeader('Source code');
    dialog.setContent(textArea);
    dialog.setSize(400, 300);

    dialog.setFooter([languageSelect, okButton]);

    dialog.open();
    // }
  };

  const toolbar = useMemo(
    () => [
      ...Jodit.defaultOptions.buttons,
      {
        tooltip: 'Code',
        name: 'highlight',
        iconURL: '/signature.png',
        exec: handleExecuteCommand,
      },
    ],
    [],
  );
  const config = useMemo(
    () => ({
      readonly: false,
      buttons: toolbar,
    }),
    [toolbar],
  );

  return (
    <JoditEditor
      // ref={editor}
      value={content}
      config={config}
      // tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      // onChange={newContent => {}}
    />
  );
};

export default MyEditor;
