import { ThemeSwitcher } from "./theme-switcher"

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-16 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-emerald-600">CodeStudios</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Crafting exceptional digital experiences through innovative web and mobile solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Theme Switcher */}
          <div className="flex items-start justify-between md:justify-end">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
              <ThemeSwitcher />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © 2024 CodeStudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
