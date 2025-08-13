const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Travel Journal</h3>
            <p className="text-gray-600 text-sm">
              Capture and share your travel memories with fellow adventurers
              around the world.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-gray-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/explore"
                  className="hover:text-gray-900 transition-colors"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="hover:text-gray-900 transition-colors"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 mt-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Travel Journal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
