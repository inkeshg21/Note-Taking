import Header from '@editorjs/header';
import Checklist from '@editorjs/checklist';
import List from '@editorjs/list';
import Table from '@editorjs/table';
import Code from '@editorjs/code';
import Marker from '@editorjs/marker';

import EditorJS from '@editorjs/editorjs';

const getEditor = (holder, data) => {
  const editor = new EditorJS({
    holder: String(holder),
    placeholder: 'Digite aqui',
    logLevel: 'ERROR',
    tools: {
      header: Header,
      checklist: Checklist,
      list: List,
      table: Table,
      code: Code,
      marker: {
        class: Marker,
        shortcut: 'CTRL+H',
      },
    },
    data,
  });

  return editor;
};

export default getEditor;
