import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

import { useAuth } from './hooks/useAuth';
import { useSuggestions } from './hooks/useSuggestions';

import { AdminView } from './components/AdminView';
import { AuthModal } from './components/AuthModal';
import { SuccessScreen } from './components/SuccessScreen';
import { RichTextEditor } from './components/RichTextEditor';
import { PadlockIcon, SunIcon, MoonIcon } from './components/Icons';

export default function App() {
  const { user, errorMessage, isAuthenticatedAdmin, setIsAuthenticatedAdmin } = useAuth();
  const { suggestions, deleteSuggestion, deleteAllSuggestions, addSuggestion } = useSuggestions(user, isAuthenticatedAdmin);

  const [text, setText] = useState('');
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  
  const [isAdminView, setIsAdminView] = useState(false);
  
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [authError, setAuthError] = useState(false);
  const [showAdminPassword, setShowAdminPassword] = useState(false);

  // Tema padrão ao primeiro uso: Modo Claro (false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const ADMIN_PASSCODE = 'admsemeadores*';

  useEffect(() => {
    const themeName = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', isDarkMode ? '#121212' : '#f7f7f7');
    }
  }, [isDarkMode]);

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
    setAdminPassword('');
    setAuthError(false);
    setShowAdminPassword(false);
  };

  const handleAuthSubmit = () => {
    if (adminPassword === ADMIN_PASSCODE) {
      setIsAuthenticatedAdmin(true);
      setIsAdminView(true);
      handleCloseAuthModal();
    } else {
      setAuthError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editableDiv = document.getElementById('suggestion-input');
    const content = editableDiv ? editableDiv.innerHTML : text;
    if (!user || !content.trim() || content === '<br>') return;

    setStatus('submitting');
    setSubmitError('');
    
    try {
      await addSuggestion(content);
      setTimeout(() => {
        setStatus('success');
        setText('');
        if (editableDiv) editableDiv.innerHTML = '';
      }, 600);
    } catch (error) {
      setStatus('error');
      setSubmitError(`Falha no envio: ${error.message}`);
    }
  };

  if (isAdminView && isAuthenticatedAdmin) {
    return (
      <AdminView 
        suggestions={suggestions}
        handleDelete={deleteSuggestion}
        handleDeleteAll={() => setIsConfirmModalOpen(true)}
        isDarkMode={isDarkMode}
        setIsAdminView={setIsAdminView}
        setIsAuthenticatedAdmin={setIsAuthenticatedAdmin}
        isConfirmModalOpen={isConfirmModalOpen}
        setIsConfirmModalOpen={setIsConfirmModalOpen}
        confirmDeleteAll={async () => {
          await deleteAllSuggestions();
          setIsConfirmModalOpen(false);
        }}
      />
    );
  }

  const isTextEmpty = !text.trim() || text === '<br>';

  return (
    <main 
      tabIndex="-1" 
      className="h-[100dvh] overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 outline-none" 
      style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: 'var(--bg-color)' }}
    >
      <div 
        tabIndex="-1" 
        className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700 outline-none" 
        style={{ maxWidth: 'min(32rem, calc(100vh - 16rem))' }}
      >
        {status === 'success' ? (
          <SuccessScreen setStatus={setStatus} isDarkMode={isDarkMode} />
        ) : (
          <form tabIndex="-1" onSubmit={handleSubmit} className="flex flex-col space-y-6 outline-none">
            <header className="w-full flex flex-col items-center pointer-events-none mb-[3px]">
              <div className="relative flex flex-col items-center w-full">
                <PadlockIcon 
                  isDark={isDarkMode} 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 opacity-10 pointer-events-none select-none z-0" 
                />
                <h1 
                  className="relative z-10 text-sm sm:text-base font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase leading-none text-center" 
                  style={{ color: 'var(--text-main)', fontFamily: "'Montserrat', sans-serif" }}
                >
                  Caixa de Sugestões
                </h1>
                <span 
                  className="relative z-10 text-[11px] font-medium tracking-[0.6em] sm:tracking-[0.8em] uppercase mt-2 text-center" 
                  style={{ color: 'var(--text-main)', fontFamily: "'Montserrat', sans-serif" }}
                >
                  Anônima
                </span>
              </div>
              <div 
                className="w-40 h-[1.5px] mt-[43px] opacity-60" 
                style={{ background: 'linear-gradient(to right, transparent, var(--text-main), transparent)' }} 
              />
            </header>

            <RichTextEditor text={text} setText={setText} />

            <div className="flex items-center justify-center mt-6 space-x-6">
              <button 
                type="button"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-3 rounded-2xl transition-all hover:scale-110 active:scale-90 border-2"
                style={{ color: 'var(--text-main)', borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}
                title="Alternar Tema"
                aria-label="Alternar Tema"
              >
                {isDarkMode ? <SunIcon className="w-[22px] h-[22px]" /> : <MoonIcon className="w-[22px] h-[22px]" />}
              </button>

              <button 
                type="submit" 
                disabled={status === 'submitting' || isTextEmpty} 
                className={`h-[54px] font-bold tracking-[0.2em] uppercase transition-all duration-500 border-2 flex items-center justify-center ${ 
                  status === 'submitting' 
                  ? 'w-[54px] px-0 rounded-full cursor-not-allowed' 
                  : `w-auto px-10 rounded-2xl ${isTextEmpty ? 'cursor-not-allowed opacity-80' : 'hover:scale-105 active:scale-95'}` 
                }`}
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: 'transparent',
                  borderColor: 'var(--border-color)',
                  color: 'var(--submit-btn-text)',
                  boxShadow: !isTextEmpty ? 'var(--submit-shadow)' : 'none',
                }}
              >
                {status === 'submitting' ? (
                  <Loader2 size={24} className="animate-spin" />
                ) : (
                  "SUGERIR"
                )}
              </button>

              <button 
                type="button"
                onClick={() => {
                  if (isAuthenticatedAdmin) {
                    setIsAdminView(true);
                  } else {
                    setIsAuthModalOpen(true);
                  }
                }}
                className="p-3 rounded-2xl transition-all hover:scale-110 active:scale-90 border-2"
                style={{ color: 'var(--text-main)', borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}
                title="Área do Administrador"
                aria-label="Área do Administrador"
              >
                <PadlockIcon isDark={isDarkMode} className="w-[22px] h-[22px]" />
              </button>
            </div>
            {submitError && <p className="text-red-500 text-center mt-2">{submitError}</p>}
            {errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}
          </form>
        )}
      </div>

      <AuthModal 
        isAuthModalOpen={isAuthModalOpen}
        setIsAuthModalOpen={handleCloseAuthModal}
        darkMode={isDarkMode}
        adminPassword={adminPassword}
        setAdminPassword={setAdminPassword}
        authError={authError}
        setAuthError={setAuthError}
        showAdminPassword={showAdminPassword}
        setShowAdminPassword={setShowAdminPassword}
        handleAuthSubmit={handleAuthSubmit}
      />
    </main>
  );
}
