import React, { useState, useRef, useEffect } from 'react';

const canned = [
  { q: /(emergenc|urgent|now)/i, a: 'If this is an emergency, call your local emergency number immediately. For ambulance booking, use our hotline: +1-555-1010.' },
  { q: /(book|booking|reserve)/i, a: 'To book an ambulance, please provide pickup address, destination (if any), and patient condition.' },
  { q: /(eta|arrival|how long|how soon)/i, a: 'Typical response time depends on location and traffic; we aim for under 20 minutes in urban areas.' },
  { q: /(cost|price|fare|charge)/i, a: 'Charges depend on distance and service level. For an estimate, provide pickup and drop-off locations.' },
  { q: /(contact|phone|hotline|number)/i, a: 'Our 24/7 hotline: +1-555-1010. For non-urgent queries email: support@ambulance.example' },
  { q: /(area|service area|coverage)/i, a: 'We operate across the metro area and surrounding counties. Tell me your city and I can check coverage.' },
  { q: /(insurance|insuranc)/i, a: 'We accept most major insurers; please confirm with your insurer or provide insurer name and policy details for verification.' }
];

const ambulanceTypes = [
  {
    name: 'Basic Life Support (BLS)',
    desc: 'For non-critical patients requiring basic medical care and transport. Staffed by EMTs. Suitable for routine transfers and basic on-site support.'
  },
  {
    name: 'Advanced Life Support (ALS)',
    desc: 'For critical or unstable patients needing advanced interventions (IV, cardiac monitoring). Staffed by paramedics and equipped with advanced life-saving gear.'
  },
  {
    name: 'Patient Transport / Non-Emergency',
    desc: 'Wheelchair and stretcher-capable vehicles for planned transfers (clinic, hospital, discharge). Lower-cost option for non-urgent moves.'
  }
];

function getBotResponse(text) {
  if (!text || !text.trim()) return "Please type your question.";
  if (/\b(type|types|ambulance types|which ambulance|which vehicle|ambulance options)\b/i.test(text)) {
    // return a nicely formatted list
    return ambulanceTypes.map(t => `• ${t.name}: ${t.desc}`).join('\n');
  }
  for (const item of canned) {
    if (item.q.test(text)) return item.a;
  }
  if (/hi|hello|hey/i.test(text)) return 'Hello! How can I assist you with ambulance services today?';
  return "I didn't understand that — please give more details, or call our hotline: +1-555-1010.";
}

const Chat = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello — I can help with ambulance booking, ETA, coverage, and contact info. How can I help?' }
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    // scroll to bottom whenever messages change
    try {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }
    } catch (e) {}
  }, [messages, sending]);

  const send = async (e) => {
    e && e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const userMsg = { from: 'user', text };
    setMessages(m => [...m, userMsg]);
    setInput('');
    setSending(true);
    // simulate typing delay
    await new Promise(r => setTimeout(r, 600));
    const reply = getBotResponse(text);
    setMessages(m => [...m, { from: 'bot', text: reply }]);
    setSending(false);
  };

  return (
    <div className="container py-5" style={{ maxWidth: 720 }}>
      <div className="card shadow">
        <div className="card-body">
          <h3 className="text-center text-danger mb-4">Ambulance Assistant</h3>
          <div ref={listRef} style={{ maxHeight: 320, minHeight: 240, border: '1px solid #eee', padding: 12, borderRadius: 6, overflowY: 'auto' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start', marginBottom: 8 }}>
                <div style={{ maxWidth: '80%', padding: '8px 12px', borderRadius: 12, background: m.from === 'user' ? '#dc3545' : '#f1f3f5', color: m.from === 'user' ? '#fff' : '#000' }}>
                  {m.text}
                </div>
              </div>
            ))}
            {sending && <div className="text-muted">Assistant is typing...</div>}
          </div>

          <form onSubmit={send} className="d-flex gap-2 mt-3">
            <input className="form-control" value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about booking, ETA, coverage or contact" />
            <button className="btn btn-danger" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
