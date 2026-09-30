import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';
import { PadlockIcon } from './Icons';

export function AuthModal({ 
  isAuthModalOpen, 
  setIsAuthModalOpen, 
  darkMode,
  adminPassword,
  setAdminPassword,
  authError,
  setAuthError,
  showAdminPassword,
  setShowAdminPassword,
  handleAuthSubmit
}) {
  return (
    <AnimatePresence>
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-start p-4 pt-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setIsAuthModalOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative w-full max-w-[300px] border-2 p-4 pt-6 rounded-[40px] shadow-2xl text-center"
            style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              borderColor: 'var(--border-color)',
              backgroundColor: 'var(--card-bg)'
            }}
          >
            <button 
              type="button" 
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute top-6 left-6 p-1 transition-colors hover:opacity-75"
              style={{ color: 'var(--text-main)' }}
              title="Voltar"
              aria-label="Voltar"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="mb-5 flex justify-center">
              <PadlockIcon isDark={darkMode} className="w-9 h-9" />
            </div>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-main)' }}>
              Acesso Restrito
            </h2>
            <p className="text-[10px] mb-6 leading-relaxed" style={{ color: 'var(--text-main)' }}>
              Digite a senha para entrar no<br />
              <strong className="italic">MODO ADMINISTRADOR</strong>
            </p>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type={showAdminPassword ? "text" : "password"}
                  autoFocus
                  placeholder=""
                  value={adminPassword}
                  onChange={(e) => {
                    setAdminPassword(e.target.value);
                    setAuthError(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleAuthSubmit();
                    }
                  }}
                  className={`w-full border-2 rounded-2xl px-12 py-4 text-center text-lg tracking-widest focus:outline-none transition-all italic ${
                    authError ? "border-red-500 ring-1 ring-red-500" : ""
                  }`}
                  style={{ 
                    fontFamily: "'Montserrat', sans-serif", 
                    color: 'var(--text-main)',
                    backgroundColor: 'var(--input-bg)',
                    borderColor: authError ? '#ff4444' : 'var(--border-color)' 
                  }}
                />
                <button 
                  type="button"
                  onClick={() => setShowAdminPassword(!showAdminPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-75 transition-opacity z-10"
                  style={{ color: 'var(--text-main)' }}
                  title={showAdminPassword ? "Ocultar senha" : "Ver senha"}
                  aria-label={showAdminPassword ? "Ocultar senha" : "Ver senha"}
                >
                  {showAdminPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {authError && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 font-bold mt-2 uppercase tracking-tighter"
                  >
                    Senha Incorreta! Tente novamente.
                  </motion.p>
                )}
              </div>

              <div className="pt-4">
                <button 
                  type="button"
                  onClick={handleAuthSubmit}
                  className="w-full font-bold uppercase py-4 rounded-2xl shadow-lg transition-all active:scale-95"
                  style={{ 
                    color: 'var(--submit-btn-text)',
                    backgroundColor: 'var(--primary-color)' 
                  }}
                >
                  Acessar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
