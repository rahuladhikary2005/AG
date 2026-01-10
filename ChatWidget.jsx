import React, { useState } from 'react';
import Chat from '../pages/Chat';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Floating button */}
      <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 1200 }}>
        <button
          aria-label="Open chat"
          onClick={() => setOpen(v => !v)}
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#dc3545',
            color: '#fff',
            border: 'none',
            boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
            fontSize: 22,
            cursor: 'pointer'
          }}
        >
          💬
        </button>
      </div>

      {/* Slide-up panel */}
      {open && (
        <div style={{ position: 'fixed', right: 20, bottom: 92, width: 360, maxWidth: 'calc(100% - 40px)', zIndex: 1200 }}>
          <div style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.15)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ background: '#fff', padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 600, color: '#dc3545' }}>Ambulance Assistant</div>
              <div>
                <button onClick={() => setOpen(false)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 18 }}>✕</button>
              </div>
            </div>
            <div style={{ background: '#fff' }}>
              <Chat />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
