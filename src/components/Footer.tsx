export function Footer() {
  return (
    <footer className="bg-gray-50 py-8 px-6 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 STD Risk Calculator. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/contact-us" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}