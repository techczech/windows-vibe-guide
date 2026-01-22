import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { BookOpen, Settings, Zap, Terminal, Github } from 'lucide-react';

const docs = [
  { id: 'readme', title: 'Welcome', icon: <BookOpen size={20} />, path: '/docs/readme.md' },
  { id: 'non-dev', title: 'Non-Dev Guide (Windows)', icon: <Terminal size={20} />, path: '/docs/non-dev-guide.md' },
  { id: 'git-github', title: 'Git & GitHub Basics', icon: <Github size={20} />, path: '/docs/git-github-basics.md' },
  { id: 'setup', title: 'Setup Guide', icon: <Settings size={20} />, path: '/docs/setup.md' },
  { id: 'workflow', title: 'Vibe Workflows', icon: <Zap size={20} />, path: '/docs/workflow.md' },
];

function App() {
  const [activeTab, setActiveTab] = useState('readme');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoc = async () => {
      setLoading(true);
      try {
        const doc = docs.find(d => d.id === activeTab);
        const response = await fetch(doc.path);
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setContent('# Error loading documentation');
      }
      setLoading(false);
    };
    fetchDoc();
  }, [activeTab]);

  return (
    <>
      <nav className="sidebar glass">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
          <div style={{ width: '32px', height: '32px', background: 'var(--accent-color)', borderRadius: '8px', display: 'grid', placeItems: 'center' }}>
            <Terminal size={20} color="white" />
          </div>
          <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>VIBE GUIDE</span>
        </div>

        <div style={{ flex: 1 }}>
          {docs.map(doc => (
            <div
              key={doc.id}
              className={`nav-item ${activeTab === doc.id ? 'active' : ''}`}
              onClick={() => setActiveTab(doc.id)}
            >
              {doc.icon}
              {doc.title}
            </div>
          ))}
        </div>

        <a
          href="https://github.com/techczech/windows-vibe-guide"
          target="_blank"
          className="nav-item"
          style={{ textDecoration: 'none', marginTop: 'auto' }}
        >
          <Github size={20} />
          Source Code
        </a>
      </nav>

      <main className="main-content">
        <div className="markdown-container">
          {loading ? (
            <div style={{ opacity: 0.5 }}>Loading vibe...</div>
          ) : (
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h1 {...props} />,
                h2: ({ node, ...props }) => <h2 {...props} />,
                code: ({ node, inline, ...props }) => (
                  inline ? <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }} {...props} /> : <code {...props} />
                )
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </div>

        <footer style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; 2026 Windows Vibe Coding Setup. Powered by Antigravity.
        </footer>
      </main>
    </>
  );
}

export default App;
