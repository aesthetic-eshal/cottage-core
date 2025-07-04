import { useState, useEffect, useRef } from 'react';
import { Book, Edit3, Save, Lock, Unlock, Plus, Trash2, Eye, EyeOff, Home, Settings, FileText, ArrowLeft } from 'lucide-react';

interface JournalEntry {
    id: string;
    title: string;
    content: string;
    password?: string;
    createdAt: string;
    updatedAt: string;
}

type Page = 'dashboard' | 'read' | 'edit' | 'settings';

const Journal = () => {
    const [entries, setEntries] = useState<JournalEntry[]>([]);
    const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
    const [currentPage, setCurrentPage] = useState<Page>('dashboard');
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');
    const [editPassword, setEditPassword] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordProtected, setIsPasswordProtected] = useState(false);
    const [unlockedEntries, setUnlockedEntries] = useState<Set<string>>(new Set());
    const [searchTerm, setSearchTerm] = useState('');

    // Cache timers
    const titleCacheTimer: any = useRef(null);
    const contentCacheTimer: any = useRef(null);
    const passwordCacheTimer: any = useRef(null);
    const searchCacheTimer: any = useRef(null);

    // Refs for focus management
    const searchInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const titleInputRef = useRef<HTMLInputElement>(null);
    const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
    const editPasswordInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const savedEntries = localStorage.getItem('journal-entries');
        if (savedEntries) {
            try {
                const parsed = JSON.parse(savedEntries);
                setEntries(parsed);
            } catch (error) {
                console.error('Error parsing saved entries:', error);
            }
        }

        // Load cached inputs
        const cachedTitle = localStorage.getItem('journal-cache-title');
        const cachedContent = localStorage.getItem('journal-cache-content');
        const cachedPassword = localStorage.getItem('journal-cache-password');
        const cachedSearch = localStorage.getItem('journal-cache-search');

        if (cachedTitle) setEditTitle(cachedTitle);
        if (cachedContent) setEditContent(cachedContent);
        if (cachedPassword) setEditPassword(cachedPassword);
        if (cachedSearch) setSearchTerm(cachedSearch);
    }, []);

    useEffect(() => {
        localStorage.setItem('journal-entries', JSON.stringify(entries));
    }, [entries]);

    // Cache handlers with delayed state updates
    const handleTitleChange = (value: string) => {
        localStorage.setItem('journal-cache-title', value);
        if (titleInputRef.current) {
            titleInputRef.current.value = value;
        }
        if (titleCacheTimer.current) {
            clearTimeout(titleCacheTimer.current);
        }
        titleCacheTimer.current = setTimeout(() => {
            setEditTitle(value);
        }, 60000);
    };

    const handleContentChange = (value: string) => {
        localStorage.setItem('journal-cache-content', value);
        if (contentTextareaRef.current) {
            contentTextareaRef.current.value = value;
        }
        if (contentCacheTimer.current) {
            clearTimeout(contentCacheTimer.current);
        }
        contentCacheTimer.current = setTimeout(() => {
            setEditContent(value);
        }, 60000);
    };

    const handlePasswordChange = (value: string) => {
        localStorage.setItem('journal-cache-password', value);
        if (editPasswordInputRef.current) {
            editPasswordInputRef.current.value = value;
        }
        if (passwordCacheTimer.current) {
            clearTimeout(passwordCacheTimer.current);
        }
        passwordCacheTimer.current = setTimeout(() => {
            setEditPassword(value);
        }, 60000);
    };

    const handleSearchChange = (value: string) => {
        localStorage.setItem('journal-cache-search', value);
        if (searchInputRef.current) {
            searchInputRef.current.value = value;
        }
        if (searchCacheTimer.current) {
            clearTimeout(searchCacheTimer.current);
        }
        searchCacheTimer.current = setTimeout(() => {
            setSearchTerm(value);
        }, 60000);
    };

    // Immediate state update for critical actions
    const flushCaches = () => {
        const title = localStorage.getItem('journal-cache-title') || editTitle;
        const content = localStorage.getItem('journal-cache-content') || editContent;
        const password = localStorage.getItem('journal-cache-password') || editPassword;
        const search = localStorage.getItem('journal-cache-search') || searchTerm;

        setEditTitle(title);
        setEditContent(content);
        setEditPassword(password);
        setSearchTerm(search);

        // Clear cache timers
        if (titleCacheTimer.current) clearTimeout(titleCacheTimer.current);
        if (contentCacheTimer.current) clearTimeout(contentCacheTimer.current);
        if (passwordCacheTimer.current) clearTimeout(passwordCacheTimer.current);
        if (searchCacheTimer.current) clearTimeout(searchCacheTimer.current);
    };

    const clearInputCaches = () => {
        localStorage.removeItem('journal-cache-title');
        localStorage.removeItem('journal-cache-content');
        localStorage.removeItem('journal-cache-password');
        localStorage.removeItem('journal-cache-search');
    };

    // Convert markdown to HTML
    const markdownToHtml = (markdown: string) => {
        return markdown
            .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold text-amber-800 mb-2">$1</h3>')
            .replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold text-amber-800 mb-2">$1</h2>')
            .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold text-amber-800 mb-3">$1</h1>')
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-amber-900">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em class="italic text-amber-700">$1</em>')
            .replace(/`(.*?)`/g, '<code class="bg-amber-50 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
            .replace(/^\- (.*$)/gm, '<li class="ml-4 text-amber-800">• $1</li>')
            .replace(/\n\n/g, '</p><p class="mb-3 text-amber-800 leading-relaxed">')
            .replace(/\n/g, '<br>')
            .replace(/^(.+)$/gm, '<p class="mb-3 text-amber-800 leading-relaxed">$1</p>')
            .replace(/<p class="mb-3 text-amber-800 leading-relaxed"><\/p>/g, '');
    };

    const createNewEntry = () => {
        const newEntry: JournalEntry = {
            id: Date.now().toString(),
            title: 'New Entry',
            content: '# Welcome to your journal\n\nStart writing your thoughts...',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        setEntries([newEntry, ...entries]);
        setSelectedEntry(newEntry);
        setEditTitle(newEntry.title);
        setEditContent(newEntry.content);
        setEditPassword('');
        setIsPasswordProtected(false);
        setCurrentPage('edit');
        clearInputCaches();

        setTimeout(() => {
            if (titleInputRef.current) {
                titleInputRef.current.focus();
            }
        }, 50);
    };

    const selectEntry = (entry: JournalEntry) => {
        if (entry.password && !unlockedEntries.has(entry.id)) {
            setSelectedEntry(entry);
            setPasswordInput('');
            setCurrentPage('read');
            return;
        }
        setSelectedEntry(entry);
        setPasswordInput('');
        setCurrentPage('read');
    };

    const unlockEntry = (entry: JournalEntry) => {
        if (entry.password === passwordInput) {
            setUnlockedEntries(new Set([...unlockedEntries, entry.id]));
            setPasswordInput('');
        } else {
            alert('Incorrect password');
        }
    };

    const startEditing = (entry: JournalEntry) => {
        setSelectedEntry(entry);
        setEditTitle(entry.title);
        setEditContent(entry.content);
        setEditPassword(entry.password || '');
        setIsPasswordProtected(!!entry.password);
        setCurrentPage('edit');
        clearInputCaches();
    };

    const saveEntry = () => {
        flushCaches();
        if (selectedEntry) {
            const title = localStorage.getItem('journal-cache-title') || editTitle;
            const content = localStorage.getItem('journal-cache-content') || editContent;
            const password = localStorage.getItem('journal-cache-password') || editPassword;

            const updatedEntry: JournalEntry = {
                ...selectedEntry,
                title,
                content,
                password: isPasswordProtected ? password : undefined,
                updatedAt: new Date().toISOString()
            };

            setEntries(entries.map(entry =>
                entry.id === selectedEntry.id ? updatedEntry : entry
            ));
            setSelectedEntry(updatedEntry);
            setCurrentPage('read');
            clearInputCaches();

            if (!isPasswordProtected) {
                setUnlockedEntries(new Set([...unlockedEntries, selectedEntry.id]));
            }
        }
    };

    const deleteEntry = (entryId: string) => {
        if (window.confirm('Are you sure you want to delete this entry?')) {
            setEntries(entries.filter(entry => entry.id !== entryId));
            if (selectedEntry?.id === entryId) {
                setSelectedEntry(null);
                setCurrentPage('dashboard');
            }
            setUnlockedEntries(new Set([...unlockedEntries].filter(id => id !== entryId)));
        }
    };

    const isEntryLocked = (entry: JournalEntry) => {
        return entry.password && !unlockedEntries.has(entry.id);
    };

    const getFilteredEntries = () => {
        const currentSearch = localStorage.getItem('journal-cache-search') || searchTerm;
        return entries.filter(entry =>
            entry.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
            entry.content.toLowerCase().includes(currentSearch.toLowerCase())
        );
    };

    const Navigation = () => (
        <nav className="bg-white/90 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-10">
            <div className="max-w-6xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <h1 className="text-2xl font-bold text-amber-900 font-serif flex items-center gap-2">
                            🌸 Cottage Journal
                        </h1>
                        <div className="flex items-center gap-1 bg-amber-100 rounded-lg p-1">
                            <button
                                onClick={() => setCurrentPage('dashboard')}
                                className={`px-3 py-1 rounded-md flex items-center gap-2 text-sm transition-colors ${currentPage === 'dashboard'
                                    ? 'bg-amber-200 text-amber-800'
                                    : 'text-amber-600 hover:bg-amber-150'
                                    }`}
                            >
                                <Home className="w-4 h-4" />
                                Dashboard
                            </button>
                            <button
                                onClick={() => setCurrentPage('settings')}
                                className={`px-3 py-1 rounded-md flex items-center gap-2 text-sm transition-colors ${currentPage === 'settings'
                                    ? 'bg-amber-200 text-amber-800'
                                    : 'text-amber-600 hover:bg-amber-150'
                                    }`}
                            >
                                <Settings className="w-4 h-4" />
                                Settings
                            </button>
                        </div>
                    </div>
                    {(currentPage === 'read' || currentPage === 'edit') && (
                        <button
                            onClick={() => setCurrentPage('dashboard')}
                            className="bg-amber-200 hover:bg-amber-300 text-amber-800 px-3 py-1 rounded-lg flex items-center gap-2 text-sm transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Dashboard
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );

    const DashboardPage = () => {
        const filteredEntries = getFilteredEntries();
        return (
            <div className="max-w-6xl mx-auto p-6">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-amber-900 mb-2">Welcome back to your journal</h2>
                    <p className="text-amber-700">A peaceful place to capture your thoughts and memories</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-amber-200 text-center">
                        <div className="text-3xl font-bold text-amber-800 mb-2">{entries.length}</div>
                        <div className="text-amber-600">Total Entries</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-amber-200 text-center">
                        <div className="text-3xl font-bold text-amber-800 mb-2">
                            {entries.filter(e => e.password).length}
                        </div>
                        <div className="text-amber-600">Protected Entries</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-amber-200 text-center">
                        <button
                            onClick={createNewEntry}
                            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            New Entry
                        </button>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-200">
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search your entries..."
                            defaultValue={searchTerm}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEntries.map((entry) => (
                        <div
                            key={entry.id}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-all cursor-pointer group"
                            onClick={() => selectEntry(entry)}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    {isEntryLocked(entry) ? (
                                        <Lock className="w-4 h-4 text-amber-600" />
                                    ) : (
                                        <FileText className="w-4 h-4 text-amber-600" />
                                    )}
                                    <h3 className="font-semibold text-amber-800 truncate">{entry.title}</h3>
                                </div>
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            startEditing(entry);
                                        }}
                                        className="text-amber-600 hover:text-amber-800 p-1"
                                    >
                                        <Edit3 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteEntry(entry.id);
                                        }}
                                        className="text-amber-400 hover:text-red-500 p-1"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <p className="text-amber-700 text-sm mb-3 line-clamp-3">
                                {entry.content.replace(/[#*`-]/g, '').substring(0, 100)}...
                            </p>
                            <div className="flex justify-between items-center text-xs text-amber-500">
                                <span>{new Date(entry.createdAt).toLocaleDateString()}</span>
                                <span>Updated {new Date(entry.updatedAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredEntries.length === 0 && (
                    <div className="text-center py-12">
                        <Book className="w-16 h-16 mx-auto mb-4 text-amber-300" />
                        <h3 className="text-xl font-semibold text-amber-800 mb-2">
                            {(localStorage.getItem('journal-cache-search') || searchTerm) ? 'No entries found' : 'No entries yet'}
                        </h3>
                        <p className="text-amber-600 mb-4">
                            {(localStorage.getItem('journal-cache-search') || searchTerm) ? 'Try adjusting your search terms' : 'Start writing your first journal entry'}
                        </p>
                        {!(localStorage.getItem('journal-cache-search') || searchTerm) && (
                            <button
                                onClick={createNewEntry}
                                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors"
                            >
                                Create Your First Entry
                            </button>
                        )}
                    </div>
                )}
            </div>
        );
    };

    const ReadPage = () => (
        <div className="max-w-4xl mx-auto p-6">
            {!selectedEntry ? (
                <div className="text-center py-12">
                    <Book className="w-16 h-16 mx-auto mb-4 text-amber-300" />
                    <p className="text-xl text-amber-600">No entry selected</p>
                </div>
            ) : isEntryLocked(selectedEntry) ? (
                <div className="max-w-md mx-auto mt-12">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-amber-200 text-center">
                        <Lock className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                        <h3 className="text-xl font-semibold text-amber-800 mb-4">
                            This entry is password protected
                        </h3>
                        <div className="space-y-4">
                            <input
                                ref={passwordInputRef}
                                type="password"
                                placeholder="Enter password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                onKeyPress={(e) => e.key === 'Enter' && unlockEntry(selectedEntry)}
                            />
                            <button
                                onClick={() => unlockEntry(selectedEntry)}
                                className="w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <Unlock className="w-4 h-4" />
                                Unlock Entry
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-amber-200">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-200">
                        <div>
                            <h1 className="text-3xl font-bold text-amber-800 mb-2">{selectedEntry.title}</h1>
                            <p className="text-amber-600">
                                Created: {new Date(selectedEntry.createdAt).toLocaleDateString()} •
                                Updated: {new Date(selectedEntry.updatedAt).toLocaleDateString()}
                            </p>
                        </div>
                        <button
                            onClick={() => startEditing(selectedEntry)}
                            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                        >
                            <Edit3 className="w-4 h-4" />
                            Edit
                        </button>
                    </div>
                    <div
                        className="prose prose-amber max-w-none"
                        dangerouslySetInnerHTML={{ __html: markdownToHtml(selectedEntry.content) }}
                    />
                </div>
            )}
        </div>
    );

    const EditPage = () => (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-amber-200">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-200">
                    <h1 className="text-2xl font-bold text-amber-800">Edit Entry</h1>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setCurrentPage(selectedEntry ? 'read' : 'dashboard')}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={saveEntry}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                        >
                            <Save className="w-4 h-4" />
                            Save Entry
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-amber-800 mb-2">
                            Entry Title
                        </label>
                        <input
                            ref={titleInputRef}
                            type="text"
                            defaultValue={editTitle}
                            onChange={(e) => handleTitleChange(e.target.value)}
                            className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            placeholder="Enter a title for your entry..."
                        />
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                        <label className="flex items-center gap-2 mb-2">
                            <input
                                type="checkbox"
                                checked={isPasswordProtected}
                                onChange={(e) => setIsPasswordProtected(e.target.checked)}
                                className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                            />
                            <span className="text-sm font-medium text-amber-800">
                                Password protect this entry
                            </span>
                        </label>
                        {isPasswordProtected && (
                            <div className="mt-2 relative">
                                <input
                                    ref={editPasswordInputRef}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter password"
                                    defaultValue={editPassword}
                                    onChange={(e) => handlePasswordChange(e.target.value)}
                                    className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-600"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-amber-800 mb-2">
                            Content (Markdown supported)
                        </label>
                        <textarea
                            ref={contentTextareaRef}
                            defaultValue={editContent}
                            onChange={(e) => handleContentChange(e.target.value)}
                            className="w-full h-96 px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none font-mono text-sm"
                            placeholder="Write your thoughts in markdown..."
                        />
                        <p className="text-xs text-amber-600 mt-1">
                            Use # for headers, **bold**, *italic*, `code`, and - for lists
                        </p>
                    </div>

                    {(localStorage.getItem('journal-cache-content') || editContent) && (
                        <div>
                            <label className="block text-sm font-medium text-amber-800 mb-2">
                                Preview
                            </label>
                            <div className="bg-white p-4 border border-amber-200 rounded-lg max-h-64 overflow-y-auto">
                                <div
                                    className="prose prose-amber max-w-none"
                                    dangerouslySetInnerHTML={{ __html: markdownToHtml(localStorage.getItem('journal-cache-content') || editContent) }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    const SettingsPage = () => (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-amber-200">
                <h1 className="text-2xl font-bold text-amber-800 mb-6">Settings</h1>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold text-amber-800 mb-3">Data Management</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button
                                onClick={() => {
                                    flushCaches();
                                    const data = JSON.stringify(entries, null, 2);
                                    const blob = new Blob([data], { type: 'application/json' });
                                    const url = URL.createObjectURL(blob);
                                    const a = document.createElement('a');
                                    a.href = url;
                                    a.download = 'journal-backup.json';
                                    a.click();
                                    URL.revokeObjectURL(url);
                                }}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Export Journal
                            </button>
                            <button
                                onClick={() => {
                                    if (window.confirm('This will delete all your entries. Are you sure?')) {
                                        setEntries([]);
                                        setSelectedEntry(null);
                                        setUnlockedEntries(new Set());
                                        clearInputCaches();
                                    }
                                }}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Clear All Data
                            </button>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-amber-800 mb-3">About</h2>
                        <p className="text-amber-700 text-sm">
                            Cottage Journal - A peaceful place for your thoughts and memories.
                            All your data is stored locally on your device.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
            <Navigation />

            {currentPage === 'dashboard' && <DashboardPage />}
            {currentPage === 'read' && <ReadPage />}
            {currentPage === 'edit' && <EditPage />}
            {currentPage === 'settings' && <SettingsPage />}
        </div>
    );
};

export default Journal;