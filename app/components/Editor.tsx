"use client"

import { Button } from '@/components/ui/button'
import {  EditorContent, useEditor, type Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


export const MenuBar = ({editor}: {editor: Editor | null}) => {
    if (!editor) {
        return null
    }

    return (
        <div className="flex flex-wrap gap-5">
            <Button 
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} 
                variant={editor.isActive("heading", {level: 1}) ? "default" : "secondary"}
                type="button">
                H1
            </Button>

            <Button 
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} 
                variant={editor.isActive("heading", {level: 2}) ? "default" : "secondary"}
                type="button">
                H2
            </Button>

            <Button 
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} 
                variant={editor.isActive("heading", {level: 3}) ? "default" : "secondary"}
                type="button">
                H3
            </Button>

            <Button 
                onClick={() => editor.chain().focus().toggleBold().run()} 
                variant={editor.isActive("bold") ? "default" : "secondary"}
                type="button">
                Bold
            </Button>

            <Button 
                onClick={() => editor.chain().focus().toggleItalic().run()} 
                variant={editor.isActive("italic") ? "default" : "secondary"}
                type="button">
                Italic
            </Button>

            <Button 
                onClick={() => editor.chain().focus().toggleStrike().run()} 
                variant={editor.isActive("strike") ? "default" : "secondary"}
                type="button">
                Strike
            </Button>
        </div>
    )
}

export function TipTapEditor() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "<p>Hello World!</p>",
        editorProps: {
            attributes: {
                class: "focus:outline-none prose prose-sm sm:prose-base min-h-[150px]",
            },
        },
    })

    return (
        <div className='flex flex-col gap-y-4'>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} className='rounded-lg border p-2 min-h[150px] mt-2'/>
        </div>
    )
}