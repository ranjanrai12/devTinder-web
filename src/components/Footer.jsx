const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center bg-base-300 text-base-content rounded-t-lg p-6 shadow-lg border-t border-base-200">
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
          {/* Left Section - Brand & Copyright */}
          <aside className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-primary-content"
                  >
                    {/* Binary 0 (left top) */}
                    <circle cx="7" cy="7" r="2" />
                    {/* Binary 1 (right top) */}
                    <rect x="15" y="5" width="1.5" height="4" rx="0.75" />
                    {/* Binary 0 (right bottom) */}
                    <circle cx="17" cy="17" r="2" />
                    {/* Binary 1 (left bottom) */}
                    <rect x="7" y="15" width="1.5" height="4" rx="0.75" />
                    {/* Connection lines - perfectly centered */}
                    <path
                      d="M9.5 7L14.5 7M9.5 17L14.5 17"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Central connection dot */}
                    <circle cx="12" cy="12" r="1" className="fill-current" />
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DevMatches
              </span>
            </div>
            <p className="text-sm opacity-80">
              Copyright © {currentYear} - All rights reserved
            </p>
          </aside>

          {/* Center Section - Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <a
              href="/privacy-policy"
              className="link link-hover hover:link-primary transition-all duration-200 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="link link-hover hover:link-primary transition-all duration-200 font-medium"
            >
              Terms of Service
            </a>
            <a
              href="/refund-policy"
              className="link link-hover hover:link-primary transition-all duration-200 font-medium"
            >
              Refund Policy
            </a>
            <a
              href="/contact-us"
              className="link link-hover hover:link-primary transition-all duration-200 font-medium"
            >
              Contact Us
            </a>
            <a
              href="/about-us"
              className="link link-hover hover:link-primary transition-all duration-200 font-medium"
            >
              About Us
            </a>
          </nav>

          {/* Right Section - Social Media */}
          {/* <nav className="flex gap-4">
            <a 
              className="btn btn-ghost btn-circle btn-sm hover:btn-primary transition-all duration-200 hover:scale-110"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a 
              className="btn btn-ghost btn-circle btn-sm hover:btn-secondary transition-all duration-200 hover:scale-110"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a 
              className="btn btn-ghost btn-circle btn-sm hover:btn-accent transition-all duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a 
              className="btn btn-ghost btn-circle btn-sm hover:btn-info transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </nav> */}
        </div>

        {/* Bottom Section - Additional Info */}
        {/* <div className="divider my-2"></div>
        <div className="text-xs opacity-60 text-center">
          <p>Made with ❤️ using DaisyUI & Tailwind CSS</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
