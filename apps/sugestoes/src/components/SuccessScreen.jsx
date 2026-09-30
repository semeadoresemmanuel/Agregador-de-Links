import React from 'react';
import { CheckSuccessIcon } from './Icons';

export function SuccessScreen({ setStatus, isDarkMode }) {
  return (
    <div className="flex flex-col items-center">
      <div 
        className="flex flex-col items-center justify-center text-center p-12 border-2 rounded-3xl shadow-[0_0_40px_var(--primary-glow)] w-full" 
        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
      >
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="flex items-center justify-center mb-8 transition-all active:scale-95 outline-none"
          title="Voltar ao início"
          aria-label="Voltar ao início"
        >
          <div className="w-20 h-20 animate-in zoom-in duration-500 delay-150 flex items-center justify-center">
            <CheckSuccessIcon isDark={isDarkMode} className="w-20 h-20 object-contain" />
          </div>
        </button>
        <h2 
          className="text-3xl font-bold mb-4 tracking-tighter uppercase" 
          style={{ fontFamily: "'Montserrat', sans-serif", color: 'var(--text-main)' }}
        >
          OBRIGADO!
        </h2>
        <p className="max-w-xs text-lg opacity-80" style={{ color: 'var(--text-main)' }}>
          Sua sugestão foi enviada com sucesso.
        </p>
      </div>
      
      <button 
        type="button"
        onClick={() => setStatus('idle')}
        className="mt-6 px-10 py-3 rounded-2xl font-bold tracking-[0.2em] uppercase transition-all duration-500 border-2 bg-transparent text-[var(--submit-btn-text)] border-[var(--border-color)] hover:scale-105 active:scale-95 shadow-[var(--btn-shadow)]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        NOVA SUGESTÃO
      </button>
    </div>
  );
}
