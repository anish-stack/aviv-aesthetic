'use client';

import * as React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Toggle } from './ui/toggle';
// import Toolbar from "./ui/Toolbar";
import Toolbar from './ui/Toolbar';
import Image from '@tiptap/extension-image';

// import Heading from "@tiptop/extension-heading";
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';

import { Textarea } from '../ui/textarea';

const Editor = ({
  description,

  onChange,
}: {
  description?: string;
  onChange: (richText: string) => void;
}) => {
  const [showCode, setShowCode] = React.useState(false);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Heading.configure({
        levels: [1, 2, 3, 4],
      }),
      Image,

      BulletList.configure({
        keepMarks: true,
      }),
      OrderedList.configure({
        keepMarks: true,
        keepAttributes: false,
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: 'rounded-md border h-full border-input bg-back p-5',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className='flex flex-col justify-stretch  h-full'>
      <Toolbar editor={editor} setShowCode={setShowCode} showCode={showCode} />
      {!showCode ? (
        <>
          {' '}
          <EditorContent editor={editor} />
        </>
      ) : (
        <>
          <textarea
            className='manual-height'
            onChange={(e) => onChange(e.target.value)}
          >
            {description}
          </textarea>
        </>
      )}
    </div>
  );
};

export default Editor;
