import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { BookOpen, Settings, Zap, Terminal, Github, ArrowLeft, ArrowRight, Code, User, Menu, X, ChevronRight, Cloud, Sparkles, List, ChevronDown, ChevronUp } from 'lucide-react';

const allDocs = [
  { id: 'setup', title: 'Getting Started', icon: <Settings size={20} />, path: '/docs/setup.md', category: 'key', description: 'Download Antigravity and start building with AI' },
  { id: 'non-dev', title: 'Complete Walkthrough', icon: <BookOpen size={20} />, path: '/docs/non-dev-guide.md', category: 'key', description: 'Step-by-step guide for complete beginners' },
  { id: 'workflow', title: 'Working with Agents', icon: <Zap size={20} />, path: '/docs/workflow.md', category: 'key', description: 'Best practices for AI collaboration' },
  { id: 'how-websites', title: 'How Webapps Run on Your Computer', icon: <Code size={20} />, path: '/docs/how-websites-work.md', category: 'useful', description: 'Understand browsers, servers, and React' },
  { id: 'hosting', title: 'Webapp Hosting', icon: <Cloud size={20} />, path: '/docs/webapp-hosting.md', category: 'useful', description: 'Free hosting guidelines for your webapps' },
  { id: 'ai-features', title: 'Adding AI Features', icon: <Sparkles size={20} />, path: '/docs/adding-ai-features.md', category: 'useful', description: 'Power your apps with Google\'s AI' },
  { id: 'ai-studio', title: 'Migrating from Google AI Studio', icon: <Zap size={20} />, path: '/docs/from-ai-studio.md', category: 'useful', description: 'Migrate prototypes to local development' },
  { id: 'git-github', title: 'Git & GitHub', icon: <Github size={20} />, path: '/docs/git-github-basics.md', category: 'useful', description: 'Version control and backing up code' },
  { id: 'markdown', title: 'Markdown for Writers', icon: <BookOpen size={20} />, path: '/docs/markdown-for-writers.md', category: 'useful', description: 'Write text better than in Word' },
  { id: 'about', title: 'About', icon: <User size={20} />, path: '/docs/about.md', category: 'other', description: 'How this website was created' },
];

const keyDocs = allDocs.filter(d => d.category === 'key');
const usefulDocs = allDocs.filter(d => d.category === 'useful');

function App() {
  const [activeDoc, setActiveDoc] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const [headings, setHeadings] = useState([]);

  const currentIndex = allDocs.findIndex(d => d.id === activeDoc);
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;

  useEffect(() => {
    if (activeDoc) {
      window.scrollTo(0, 0);
      const fetchDoc = async () => {
        setLoading(true);
        try {
          const doc = allDocs.find(d => d.id === activeDoc);
          const response = await fetch(doc.path);
          const text = await response.text();
          setContent(text);

          // Extract headings
          const extractedHeadings = [];
          const lines = text.split('\n');
          lines.forEach(line => {
            const match = line.trim().match(/^(#{1,3})\s+(.*)$/);
            if (match) {
              extractedHeadings.push({
                level: match[1].length,
                text: match[2],
                id: match[2].toLowerCase().replace(/[^\w]+/g, '-')
              });
            }
          });
          setHeadings(extractedHeadings);
        } catch (err) {
          setContent('# Error loading documentation');
        }
        setLoading(false);
      };
      fetchDoc();
      setSidebarOpen(false);
      setTocOpen(false); // Default closed on mobile, logic handled in CSS/JS
    }
  }, [activeDoc]);

  if (activeDoc) {
    return (
      <>
        <header className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a className="logo" onClick={() => setActiveDoc(null)} style={{ cursor: 'pointer' }}>
              <div className="logo-icon">
                <Terminal size={20} />
              </div>
              <span className="logo-text">Vibe Coding Guide</span>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a onClick={() => setActiveDoc('about')} style={{ color: 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none' }}>About</a>
            <a href="https://github.com/techczech/windows-vibe-guide" target="_blank" style={{ color: 'var(--text-secondary)' }}>
              <Github size={24} />
            </a>
          </div>
        </header>

        <div className="doc-layout">
          <aside className={`doc-sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-section">
              <div className="sidebar-heading">Key Guides</div>
              {keyDocs.map(doc => (
                <div
                  key={doc.id}
                  className={`sidebar-item ${activeDoc === doc.id ? 'active' : ''}`}
                  onClick={() => setActiveDoc(doc.id)}
                >
                  {doc.icon}
                  {doc.title}
                </div>
              ))}
            </div>
            <div className="sidebar-section">
              <div className="sidebar-heading">Useful Knowledge</div>
              {usefulDocs.map(doc => (
                <div
                  key={doc.id}
                  className={`sidebar-item ${activeDoc === doc.id ? 'active' : ''}`}
                  onClick={() => setActiveDoc(doc.id)}
                >
                  {doc.icon}
                  {doc.title}
                </div>
              ))}
            </div>
          </aside>

          <div className="doc-view">
            <div className="back-button" onClick={() => setActiveDoc(null)}>
              <ArrowLeft size={18} />
              Back to Home
            </div>

            <div className="mobile-toc-toggle" onClick={() => setTocOpen(!tocOpen)}>
              <List size={16} />
              <span>On this page</span>
              {tocOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>

            {tocOpen && (
              <div className="mobile-toc">
                {headings.map((heading, index) => (
                  <a
                    key={index}
                    href={`#${heading.id}`}
                    className={`toc-link level-${heading.level}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setTocOpen(false);
                      document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {heading.text}
                  </a>
                ))}
              </div>
            )}

            <div className="markdown-container">
              {loading ? (
                <div style={{ opacity: 0.5 }}>Loading...</div>
              ) : (
                <ReactMarkdown
                  components={{
                    code: ({ node, inline, className, children, ...props }) => (
                      inline ?
                        <code className="inline-code" {...props}>{children}</code> :
                        <code {...props}>{children}</code>
                    ),
                    h1: ({ children }) => {
                      const id = String(children).toLowerCase().replace(/[^\w]+/g, '-');
                      return <h1 id={id}>{children}</h1>;
                    },
                    h2: ({ children }) => {
                      const id = String(children).toLowerCase().replace(/[^\w]+/g, '-');
                      return <h2 id={id}>{children}</h2>;
                    },
                    h3: ({ children }) => {
                      const id = String(children).toLowerCase().replace(/[^\w]+/g, '-');
                      return <h3 id={id}>{children}</h3>;
                    }
                  }}
                >
                  {content}
                </ReactMarkdown>
              )}
            </div>

            <div className="doc-navigation">
              {prevDoc && (
                <div className="nav-button prev" onClick={() => setActiveDoc(prevDoc.id)}>
                  <ArrowLeft size={18} />
                  <div>
                    <span className="nav-label">Previous</span>
                    <span className="nav-title">{prevDoc.title}</span>
                  </div>
                </div>
              )}
              {nextDoc && (
                <div className="nav-button next" onClick={() => setActiveDoc(nextDoc.id)}>
                  <div>
                    <span className="nav-label">Next</span>
                    <span className="nav-title">{nextDoc.title}</span>
                  </div>
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          </div>

          <aside className="doc-toc-sidebar">
            <div className="toc-heading">On this page</div>
            <div className="toc-list">
              {headings.map((heading, index) => (
                <a
                  key={index}
                  href={`#${heading.id}`}
                  className={`toc-link level-${heading.level}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {heading.text}
                </a>
              ))}
            </div>
          </aside>
        </div>

        <footer className="footer">
          Built with <a href="https://antigravity.google">Antigravity</a> by <a href="https://dominiklukes.net">Dominik Lukes</a>
        </footer>
      </>
    );
  }

  return (
    <>
      <header className="header">
        <a className="logo" href="/">
          <div className="logo-icon">
            <Terminal size={20} />
          </div>
          Vibe Coding Guide
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a onClick={() => setActiveDoc('about')} style={{ color: 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none' }}>About</a>
          <a href="https://github.com/techczech/windows-vibe-guide" target="_blank" style={{ color: 'var(--text-secondary)' }}>
            <Github size={24} />
          </a>
        </div>
      </header>

      <section className="hero">
        <h1>Build Anything with AI on Windows</h1>
        <p>
          No coding experience required. Use Google's free Antigravity tool to create websites, apps, and tools just by chatting with an AI agent.
        </p>
        <a className="hero-cta" onClick={() => setActiveDoc('setup')} style={{ cursor: 'pointer' }}>
          Get Started <ArrowRight size={20} />
        </a>
      </section>

      <section className="cards-section">
        <h2 className="section-title">Key Guides</h2>
        <div className="cards-grid">
          {keyDocs.map(doc => (
            <div key={doc.id} className="card" onClick={() => setActiveDoc(doc.id)}>
              <div className="card-icon">
                {React.cloneElement(doc.icon, { size: 24 })}
              </div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cards-section">
        <h2 className="section-title">Useful Knowledge</h2>
        <div className="cards-grid">
          {usefulDocs.map(doc => (
            <div key={doc.id} className="card" onClick={() => setActiveDoc(doc.id)}>
              <div className="card-icon">
                {React.cloneElement(doc.icon, { size: 24 })}
              </div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        Built with <a href="https://antigravity.google">Antigravity</a> by <a href="https://dominiklukes.net">Dominik Lukes</a> •
        <a href="https://github.com/techczech/windows-vibe-guide" style={{ marginLeft: '0.5rem' }}>View Source</a>
      </footer>
    </>
  );
}

export default App;
