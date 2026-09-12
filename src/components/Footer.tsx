export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 bg-[#0a0a0f]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-1 sm:col-span-2">
            <h3 className="mb-3 text-xl font-black">
              <span className="gradient-text">Stream</span>
              <span className="text-white">Vault</span>
            </h3>
            <p className="max-w-sm text-sm text-gray-400">
              StreamVault does not host, upload, or store any content on its servers. All links and media are provided by third-party sources and are indexed for convenience only.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Browse</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-brand-400">Home</a></li>
              <li><a href="/?genre=Drama" className="hover:text-brand-400">Drama</a></li>
              <li><a href="/?genre=Romance" className="hover:text-brand-400">Romance</a></li>
              <li><a href="/?genre=Collection" className="hover:text-brand-400">Collections</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://discord.com/invite/AYEsSG9TVm" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">Discord</a></li>
              <li><a href="https://arparoy.blogspot.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          © 2026 StreamVault. All content sourced from original publishers. No files stored on our servers.
        </div>
      </div>
    </footer>
  );
}
