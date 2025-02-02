import { Search, User } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 p-6 flex flex-col h-screen fixed">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <svg
          className="w-8 h-8 text-purple-500"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M13 10V3L4 14H7V21L16 10H13Z" fill="currentColor" />
        </svg>
        <span className="text-white text-xl font-semibold">Callock</span>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="AI-powered search..."
          className="w-full bg-gray-800 text-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none"
        />
        <Search className="w-4 h-4 absolute right-3 top-2.5 text-gray-400" />
      </div>

      {/* User Mini Profile */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-gray-400" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white">John</span>
            <span className="text-green-500 text-sm">Verified</span>
          </div>
          <div className="text-gray-400 text-sm">Researcher</div>
          <div className="text-gray-500 text-xs">0x1234...5678</div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-1">
        <a href="#" className="flex items-center text-gray-300 p-3 menu-hover">
          <span className="text-lg">Dashboard</span>
        </a>
        <a
          href="#"
          className="flex items-center text-gray-300 p-3 menu-hover bg-gray-800 rounded-lg"
        >
          <span className="text-lg">Profile</span>
        </a>
        <a
          href="#"
          className="flex items-center justify-between text-gray-300 p-3 menu-hover"
        >
          <span className="text-lg">Research Hub</span>
          <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
            New
          </span>
        </a>
        <a href="#" className="flex items-center text-gray-300 p-3 menu-hover">
          <span className="text-lg">Collaborations</span>
        </a>
        <a href="#" className="flex items-center text-gray-300 p-3 menu-hover">
          <span className="text-lg">Community</span>
        </a>
        <a
          href="#"
          className="flex items-center justify-between text-gray-300 p-3 menu-hover"
        >
          <span className="text-lg">Web3 Wallet</span>
          <span className="text-gray-400">2.5 ICP</span>
        </a>
        <a
          href="#"
          className="flex items-center justify-between text-gray-300 p-3 menu-hover"
        >
          <span className="text-lg">Notifications</span>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            3
          </span>
        </a>
      </nav>

      {/* Bottom Items */}
      <div className="mt-auto space-y-1">
        <div className="flex items-center justify-between text-gray-300 p-3">
          <span className="text-lg">Dark Mode</span>
          <div className="w-12 h-6 bg-purple-500 rounded-full relative">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
        <a href="#" className="flex items-center text-gray-300 p-3 menu-hover">
          <span className="text-lg">Help & AI Assistant</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
