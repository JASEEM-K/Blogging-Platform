import { useState } from 'react'
import { Editor, EditorState } from 'draft-js'

/**
 * @type React.FC
	*/
function Comp() {
	const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

	return <Editor editorState={editorState} onChange={setEditorState} />
}

export default Comp

