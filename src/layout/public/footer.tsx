import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                ULK
              </div>
              <span className="font-bold text-xl">Sports League</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Kigali Independent University Sports League Management System.
              Connecting students through sports across departments and
              countries.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sports"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400"
                >
                  Sports Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/fixtures"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400"
                >
                  Match Fixtures
                </Link>
              </li>
              <li>
                <Link
                  href="/leaderboard"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400"
                >
                  Leaderboards
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400"
                >
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Kigali Independent University</li>
              <li>Kigali, Rwanda</li>
              <li>sports@ulk.ac.rw</li>
              <li>+250 788 123 456</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            &copy; 2024 ULK Sports League Management System. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
