
function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://instagram.com/djomusic",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "https://facebook.com/djomusic",
    },
    {
      name: "TikTok",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      url: "https://tiktok.com/@djomusic",
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: "http://youtube.com/@djomusic887",
    },
    // {
    //   name: "Spotify",
    //   icon: (
    //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
    //     </svg>
    //   ),
    //   url: "https://open.spotify.com/artist/djo",
    // },
    // {
    //   name: "Apple Music",
    //   icon: (
    //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.001-.08-.004-.12-.004H5.986c-.04 0-.08.003-.12.004-.525.015-1.046.057-1.563.15-.674.121-1.304.353-1.878.727-1.118.733-1.863 1.732-2.18 3.043-.175.72-.24 1.452-.24 2.19v11.754c0 .738.065 1.47.24 2.189.317 1.31 1.062 2.31 2.18 3.044.574.374 1.204.606 1.878.726.517.094 1.038.136 1.563.151.04.001.08.004.12.004h12.028c.04 0 .08-.003.12-.004.526-.015 1.047-.057 1.564-.151.673-.12 1.303-.352 1.577-.726 1.118-.734 1.863-1.734 2.18-3.044.175-.719.24-1.451.24-2.189V6.124z" />
    //     </svg>
    //   ),
    //   url: "https://music.apple.com/artist/djo",
    // },
    {
      name: "X (Twitter)",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "https://x.com/djomusic",
    },
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Tour", url: "#tour" },
        { name: "Store", url: "#store" },
        { name: "Mailing List", url: "#mail" },
        {
          name: "Seated",
          url: "https://go.seated.com/notifications/welcome/691420a1-0870-40b4-b992-17b335ed9b20",
        },
      ],
    },
    {
      title: "Store",
      links: [
        { name: "US / CA Store", url: "https://store.djomusic.com/" },
        { name: "GBP / EUR Store", url: "http://ukeu.djomusic.com/" },
        { name: "AUS / NZ Store", url: "https://aus.djomusic.com/" },
      ],
    },
    {
      title: "Social",
      links: [],
    },
  ];

  return (
    <footer className="relative py-20 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute bottom-1/4 right-1/4 w-88 h-88 rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mb-[50px]">
        {/* Footer Header */}
        <div className="text-center mb-16">
          <img src={"https://store.djomusic.com/cdn/shop/files/CruxDeluxe_LOGO_410x.png?v=1757606871"} alt="DJO" className="w-32 h-auto mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Thank you for being part of the DJO journey. Stay connected for the
            latest music, tours, and exclusive content.
          </p>
        </div>

        {/* Footer Links Grid */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {footerLinks.map((section, index) => (
            <>
              {section.title !== "Social" ? (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <div key={section.title} className="space-y-4">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <div className="flex justify-center gap-6 md:flex-wrap">
                      {socialLinks.map((social, index) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                          aria-label={social.name}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </>
          ))}
        </div>

        {/* Social Media Links */}
        {/* <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Follow DJO</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div> */}

        {/* Newsletter Signup */}
        {/* <div className="bg-white/5 rounded-xl p-8 border border-white/10 max-w-2xl mx-auto mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest news and exclusive content delivered to your inbox.
            </p>
            <a
              href="#mail"
              className="inline-block px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all duration-300"
            >
              Join Mailing List
            </a>
          </div>
        </div> */}

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 DJO. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
