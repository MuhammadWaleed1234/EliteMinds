export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">FASTians</h3>
            <p className="text-foreground/60 text-sm">Elite minds pushing boundaries in technology and innovation</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#team" className="hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-foreground/60">Get in touch with our team</p>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-foreground/60 text-sm">
          <p>Made with love by FASTians ❤️</p>
          <p className="mt-2">© 2025 FASTians Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
