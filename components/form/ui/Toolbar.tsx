import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  ListOrderedIcon,
  Code,
} from "lucide-react";
import { Toggle } from "./toggle";

type Props = {
  editor: Editor | null;
  setShowCode?: any;
  showCode?: boolean;
};

const Toolbar = ({ editor, setShowCode, showCode }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="border border-input bg-transparent rounded">
      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading1 className="h4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading2")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className="h4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading3")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        <Heading3 className="h4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={showCode}
        onPressedChange={() => setShowCode(!showCode)}
      >
        <Code className="h4 w-4" />
      </Toggle>
    </div>
  );
};

export default Toolbar;
