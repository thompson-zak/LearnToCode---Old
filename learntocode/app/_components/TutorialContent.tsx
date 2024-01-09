'use client'
import Editor from '@monaco-editor/react';

export default function TutorialContent(props: {prompt:string, codeSkeleton:string}) {

    return (
        <div className="w-full">
            <div className="font-medium text-l">
                {props.prompt}
            </div>
            <Editor 
            height="70vh" 
            defaultLanguage="python" 
            defaultValue={props.codeSkeleton} 
            theme="vs-dark"
            />
        </div>
    )
}