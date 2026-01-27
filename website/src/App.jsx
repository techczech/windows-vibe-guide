import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Settings, Zap, Terminal, Github, ArrowLeft, ArrowRight, Code, User, Menu, X, ChevronRight, Cloud, Sparkles, List, ChevronDown, ChevronUp, Search as SearchIcon } from 'lucide-react';

const allDocs = [
  { id: 'setup', title: 'Getting Started', icon: <Settings size={20} />, path: '/docs/setup.md', category: 'key', description: 'Download Antigravity and start building with AI' },
  { id: 'non-dev', title: 'Complete Walkthrough', icon: <BookOpen size={20} />, path: '/docs/non-dev-guide.md', category: 'key', description: 'Step-by-step guide for complete beginners' },
  { id: 'workflow', title: 'Working with Agents', icon: <Zap size={20} />, path: '/docs/workflow.md', category: 'key', description: 'Best practices for AI collaboration' },
  { id: 'how-websites', title: 'How Webapps Run', icon: <Code size={20} />, path: '/docs/how-websites-work.md', category: 'useful', description: 'Understand browsers, servers, and React' },
  { id: 'hosting', title: 'Webapp Hosting', icon: <Cloud size={20} />, path: '/docs/webapp-hosting.md', category: 'useful', description: 'Free hosting guidelines for your webapps' },
  { id: 'ai-features', title: 'Adding AI Features', icon: <Sparkles size={20} />, path: '/docs/adding-ai-features.md', category: 'useful', description: 'Power your apps with Google\'s AI' },
  { id: 'ai-studio', title: 'Migrating from AI Studio', icon: <Zap size={20} />, path: '/docs/from-ai-studio.md', category: 'useful', description: 'Migrate prototypes to local development' },
  { id: 'git-github', title: 'Git & GitHub', icon: <Github size={20} />, path: '/docs/git-github-basics.md', category: 'useful', description: 'Version control and backing up code' },
  { id: 'markdown', title: 'Markdown for Writers', icon: <BookOpen size={20} />, path: '/docs/markdown-for-writers.md', category: 'useful', description: 'Write text better than in Word' },
  { id: 'about', title: 'About', icon: <User size={20} />, path: '/docs/about.md', category: 'other', description: 'How this website was created' },
];

const keyDocs = allDocs.filter(d => d.category === 'key');
const usefulDocs = allDocs.filter(d => d.category === 'useful');

function Layout({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && !isSearchOpen) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="header" role="banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/" className="logo" style={{ cursor: 'pointer', textDecoration: 'none' }} aria-label="Windows Vibe Coding Setup Home">
            <div className="logo-icon" aria-hidden="true">
              <Terminal size={20} />
            </div>
            <span className="logo-text">Vibe Coding Guide</span>
          </Link>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} aria-label="Main navigation">
          <button
            className="search-trigger"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}
          >
            <SearchIcon size={18} />
            <span className="search-shortcut" aria-hidden="true">/</span>
          </button>
          <Link to="/docs/about" style={{ color: 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none' }}>About</Link>
          <a href="https://github.com/techczech/windows-vibe-guide" target="_blank" style={{ color: 'var(--text-secondary)' }} aria-label="GitHub Repository">
            <Github size={24} />
          </a>
        </nav>
      </header>

      <main id="main-content">
        {children}
      </main>

      <footer className="footer" role="contentinfo">
        Built with <a href="https://antigravity.google">Antigravity</a> by <a href="https://dominiklukes.net">Dominik Lukes</a> •
        <a href="https://github.com/techczech/windows-vibe-guide" style={{ marginLeft: '0.5rem' }}>View Source</a>
      </footer>

      {isSearchOpen && (
        <div className="search-overlay" onClick={() => setIsSearchOpen(false)} role="dialog" aria-modal="true" aria-label="Search documentation">
          <div className="search-modal" onClick={e => e.stopPropagation()}>
            <div className="search-input-wrapper">
              <SearchIcon size={20} color="var(--text-secondary)" aria-hidden="true" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search documentation..."
                className="search-input"
                aria-label="Search input"
                onChange={(e) => {
                  // For now, simple filtering. In prod, use a better index.
                  // This is just UI state for the prototype
                }}
              />
              <button onClick={() => setIsSearchOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }} aria-label="Close search">
                <X size={20} />
              </button>
            </div>
            <div className="search-results" role="listbox">
              {allDocs.map(doc => (
                <div
                  key={doc.id}
                  className="search-result-item"
                  role="option"
                  tabIndex={0}
                  onClick={() => {
                    navigate(`/docs/${doc.id}`);
                    setIsSearchOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      navigate(`/docs/${doc.id}`);
                      setIsSearchOpen(false);
                    }
                  }}
                >
                  <div className="search-result-icon" aria-hidden="true">{doc.icon}</div>
                  <div>
                    <div className="search-result-title">{doc.title}</div>
                    <div className="search-result-desc">{doc.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function HomePage() {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div style={{
        background: 'rgba(255, 193, 7, 0.1)',
        border: '1px solid #ffc107',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#ffc107'
      }}>
        <strong>⚠️ Archive Notice:</strong> This project has been migrated to the
        <a href="https://github.com/techczech/desktop-vibe-guide" style={{ color: '#ffc107', marginLeft: '0.5rem', fontWeight: 'bold' }}>
          Desktop Vibecoding Productivity Guide
        </a>.
        All future updates will happen there.
      </div>
      <section className="hero">
        <h1>Build Anything with AI on Windows</h1>
        <p>
          No coding experience required. Use Google's free Antigravity tool to create websites, apps, and tools just by chatting with an AI agent.
        </p>
        <Link to="/docs/setup" className="hero-cta">
          Get Started <ArrowRight size={20} />
        </Link>
      </section>

      <section className="cards-section">
        <h2 className="section-title">Key Guides</h2>
        <div className="cards-grid">
          {keyDocs.map(doc => (
            <Link key={doc.id} to={`/docs/${doc.id}`} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card-icon">
                {React.cloneElement(doc.icon, { size: 24 })}
              </div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="cards-section">
        <h2 className="section-title">Useful Knowledge</h2>
        <div className="cards-grid">
          {usefulDocs.map(doc => (
            <Link key={doc.id} to={`/docs/${doc.id}`} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card-icon">
                {React.cloneElement(doc.icon, { size: 24 })}
              </div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function DocView() {
  const { docId } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const [headings, setHeadings] = useState([]);

  const activeDoc = allDocs.find(d => d.id === docId);
  const currentIndex = allDocs.findIndex(d => d.id === docId);
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (activeDoc) {
      const fetchDoc = async () => {
        setLoading(true);
        try {
          const response = await fetch(activeDoc.path);
          const text = await response.text();
          setContent(text);

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
      setTocOpen(false);
    }
  }, [activeDoc]);

  if (!activeDoc) return <div style={{ padding: '4rem', textAlign: 'center' }}>Document not found</div>;

  return (
    <>
      <div className="doc-layout">
        <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} style={{ position: 'fixed', top: '1rem', right: '4rem', zIndex: 101 }} aria-label="Toggle Navigation">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <aside className={`doc-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-section">
            <div className="sidebar-heading">Key Guides</div>
            {keyDocs.map(doc => (
              <Link
                key={doc.id}
                to={`/docs/${doc.id}`}
                className={`sidebar-item ${activeDoc.id === doc.id ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                {doc.icon}
                {doc.title}
              </Link>
            ))}
          </div>
          <div className="sidebar-section">
            <div className="sidebar-heading">Useful Knowledge</div>
            {usefulDocs.map(doc => (
              <Link
                key={doc.id}
                to={`/docs/${doc.id}`}
                className={`sidebar-item ${activeDoc.id === doc.id ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                {doc.icon}
                {doc.title}
              </Link>
            ))}
          </div>
        </aside>

        <div className="doc-view">
          <Link to="/" className="back-button" style={{ textDecoration: 'none' }}>
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="mobile-toc-toggle" onClick={() => setTocOpen(!tocOpen)} aria-label="Toggle Table of Contents" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') setTocOpen(!tocOpen) }}>
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
            {prevDoc ? (
              <Link to={`/docs/${prevDoc.id}`} className="nav-button prev" style={{ textDecoration: 'none' }}>
                <ArrowLeft size={18} />
                <div>
                  <span className="nav-label">Previous</span>
                  <span className="nav-title">{prevDoc.title}</span>
                </div>
              </Link>
            ) : <div />}

            {nextDoc && (
              <Link to={`/docs/${nextDoc.id}`} className="nav-button next" style={{ textDecoration: 'none' }}>
                <div>
                  <span className="nav-label">Next</span>
                  <span className="nav-title">{nextDoc.title}</span>
                </div>
                <ArrowRight size={18} />
              </Link>
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
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs/:docId" element={<DocView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
