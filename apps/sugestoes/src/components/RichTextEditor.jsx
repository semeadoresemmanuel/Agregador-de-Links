import React, { useEffect, useState } from 'react';
import { Italic, List, Underline, ListOrdered } from 'lucide-react';
import { applyWhatsAppFormatting, getCaretCharacterOffsetWithin, setCaretPosition } from '../utils/textFormatting';

export function RichTextEditor({ text, setText }) {
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
    list: false,
    orderedList: false
  });

  const updateActiveStyles = () => {
    const editor = document.getElementById('suggestion-input');
    if (!editor) return;

    const selection = window.getSelection();
    let isInside = false;
    if (selection && selection.rangeCount > 0) {
      const anchorNode = selection.anchorNode;
      if (anchorNode) {
        isInside = editor.contains(anchorNode);
      }
    }

    if (!isInside) {
      setActiveStyles({
        bold: false,
        italic: false,
        underline: false,
        list: false,
        orderedList: false
      });
      return;
    }

    setActiveStyles({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      list: document.queryCommandState('insertUnorderedList'),
      orderedList: document.queryCommandState('insertOrderedList')
    });
  };

  useEffect(() => {
    const handleSelectionChange = () => {
      updateActiveStyles();
    };
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, []);

  const clearSelectionContent = () => {
    if (!document.execCommand('insertText', false, '')) {
      document.execCommand('delete', false, null);
    }
  };

  const handleInput = (e) => {
    const editor = e.currentTarget;
    let html = editor.innerHTML;

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const node = range.startContainer;
      const offset = range.startOffset;
      if (node.nodeType === 3) {
        const textBefore = node.data.slice(0, offset);
        if ((textBefore.endsWith('- ') || textBefore.endsWith('-\u00A0')) && textBefore.trim() === '-') {
          const selectRange = document.createRange();
          selectRange.setStart(node, offset - 2);
          selectRange.setEnd(node, offset);
          selection.removeAllRanges();
          selection.addRange(selectRange);
          
          clearSelectionContent();
          document.execCommand('insertUnorderedList', false, null);
          setText(editor.innerHTML);
          updateActiveStyles();
          return;
        } else {
          const orderedTriggers = [
            { text: '1. ', trim: '1.' },
            { text: '1.\u00A0', trim: '1.' },
            { text: '1- ', trim: '1-' },
            { text: '1-\u00A0', trim: '1-' },
            { text: '1 - ', trim: '1 -' },
            { text: '1 -\u00A0', trim: '1 -' }
          ];
          
          let matchedTrigger = null;
          for (const trigger of orderedTriggers) {
            if (textBefore.endsWith(trigger.text) && textBefore.trim() === trigger.trim) {
              matchedTrigger = trigger;
              break;
            }
          }
          
          if (matchedTrigger) {
            const selectRange = document.createRange();
            selectRange.setStart(node, offset - matchedTrigger.text.length);
            selectRange.setEnd(node, offset);
            selection.removeAllRanges();
            selection.addRange(selectRange);
            
            clearSelectionContent();
            document.execCommand('insertOrderedList', false, null);
            setText(editor.innerHTML);
            updateActiveStyles();
            return;
          }
        }
      }
    }

    if (editor.textContent === '' && !editor.querySelector('ul, ol, li')) {
      if (document.queryCommandState('bold')) document.execCommand('bold', false, null);
      if (document.queryCommandState('italic')) document.execCommand('italic', false, null);
      if (document.queryCommandState('underline')) document.execCommand('underline', false, null);
      document.execCommand('fontName', false, 'inherit'); 
      if (html !== '' && html !== '<br>') {
        editor.innerHTML = '';
      }
      setText('');
      return;
    }
    
    if (html.includes('*') || html.includes('_') || html.includes('~') || html.includes('wa-fmt')) {
      const formatted = applyWhatsAppFormatting(html);
      if (formatted !== html) {
        const cursorOffset = getCaretCharacterOffsetWithin(editor);
        editor.innerHTML = formatted;
        setText(formatted);
        setCaretPosition(editor, cursorOffset);
        return;
      }
    }
    setText(html);
    updateActiveStyles();
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const node = range.startContainer;
        const offset = range.startOffset;
        
        if (node.nodeType === 3) {
          const textBefore = node.data.slice(0, offset);
          const isStartOfLineUnordered = textBefore.trim() === '-' && (offset <= 2);
          
          let matchedPrefix = null;
          const orderedPrefixes = ['1.', '1-', '1 -'];
          
          for (const prefix of orderedPrefixes) {
            if (textBefore.trim() === prefix && offset <= prefix.length + 1) {
              matchedPrefix = prefix;
              break;
            }
          }
          
          if (isStartOfLineUnordered) {
            e.preventDefault();
            const selectRange = document.createRange();
            const startOfHyphen = node.data.lastIndexOf('-', offset - 1);
            if (startOfHyphen !== -1) {
              selectRange.setStart(node, startOfHyphen);
              selectRange.setEnd(node, offset);
              selection.removeAllRanges();
              selection.addRange(selectRange);
              
              clearSelectionContent();
              document.execCommand('insertUnorderedList', false, null);
              updateActiveStyles();
            }
          } else if (matchedPrefix) {
            e.preventDefault();
            const selectRange = document.createRange();
            const startOfPrefix = node.data.lastIndexOf(matchedPrefix, offset - 1);
            if (startOfPrefix !== -1) {
              selectRange.setStart(node, startOfPrefix);
              selectRange.setEnd(node, offset);
              selection.removeAllRanges();
              selection.addRange(selectRange);
              
              clearSelectionContent();
              document.execCommand('insertOrderedList', false, null);
              updateActiveStyles();
            }
          }
        }
      }
    }
  };

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    updateActiveStyles();
    const editableDiv = document.getElementById('suggestion-input');
    if (editableDiv) editableDiv.focus();
  };

  return (
    <div className="relative group">
      <div
        id="suggestion-input"
        contentEditable
        role="textbox"
        aria-multiline="true"
        aria-label="Campo para digitar sua sugestão anônima"
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className="w-full aspect-square pt-6 pl-9 pr-9 pb-24 border-2 rounded-3xl focus:outline-none overflow-y-auto transition-all duration-500 text-lg font-normal tracking-wide shadow-[0_0_20px_rgba(0,204,0,0.1)] focus:shadow-[0_0_50px_rgba(0,204,0,0.3)] text-left whitespace-pre-wrap"
        style={{ 
          backgroundColor: 'var(--card-bg)', 
          color: 'var(--text-main)', 
          borderColor: 'var(--border-color)',
          fontFamily: "'Roboto', sans-serif",
        }}
      />
      
      <div 
        className="absolute bottom-16 left-8 right-8 h-[1px] opacity-20 pointer-events-none" 
        style={{ backgroundColor: 'var(--text-main)' }} 
      />
      
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-1 z-10" 
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <button 
          type="button" 
          onClick={() => execCommand('bold')} 
          className={`p-2 rounded-lg transition-all duration-300 ${activeStyles.bold ? 'bg-[var(--primary-color)] text-[var(--submit-btn-text)] shadow-[var(--shadow-glow)] scale-110' : 'hover:bg-[var(--primary-color)]/10 text-[var(--text-main)]'}`} 
          title="Negrito"
          aria-label="Negrito"
        >
          <span className="font-extrabold text-[17px] leading-none w-[18px] h-[18px] flex items-center justify-center">B</span>
        </button>
        <button 
          type="button" 
          onClick={() => execCommand('italic')} 
          className={`p-2 rounded-lg transition-all duration-300 ${activeStyles.italic ? 'bg-[var(--primary-color)] text-[var(--submit-btn-text)] shadow-[var(--shadow-glow)] scale-110' : 'hover:bg-[var(--primary-color)]/10 text-[var(--text-main)]'}`} 
          title="Itálico"
          aria-label="Itálico"
        >
          <Italic size={18} />
        </button>
        <button 
          type="button" 
          onClick={() => execCommand('underline')} 
          className={`p-2 rounded-lg transition-all duration-300 ${activeStyles.underline ? 'bg-[var(--primary-color)] text-[var(--submit-btn-text)] shadow-[var(--shadow-glow)] scale-110' : 'hover:bg-[var(--primary-color)]/10 text-[var(--text-main)]'}`} 
          title="Sublinhado"
          aria-label="Sublinhado"
        >
          <Underline size={18} />
        </button>

        <button 
          type="button" 
          onClick={() => execCommand('insertUnorderedList')} 
          className={`p-2 rounded-lg transition-all duration-300 ${activeStyles.list ? 'bg-[var(--primary-color)] text-[var(--submit-btn-text)] shadow-[var(--shadow-glow)] scale-110' : 'hover:bg-[var(--primary-color)]/10 text-[var(--text-main)]'}`} 
          title="Marcadores"
          aria-label="Marcadores"
        >
          <List size={18} />
        </button>
        <button 
          type="button" 
          onClick={() => execCommand('insertOrderedList')} 
          className={`p-2 rounded-lg transition-all duration-300 ${activeStyles.orderedList ? 'bg-[var(--primary-color)] text-[var(--submit-btn-text)] shadow-[var(--shadow-glow)] scale-110' : 'hover:bg-[var(--primary-color)]/10 text-[var(--text-main)]'}`} 
          title="Numeração"
          aria-label="Numeração"
        >
          <ListOrdered size={18} />
        </button>
      </div>
    </div>
  );
}
