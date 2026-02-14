/** @type {import('next').NextConfig} */
module.exports = {
  // Removed experimental taint feature due to Turbopack compatibility issues
  // The SANITY_API_READ_TOKEN is protected by server-only module imports
  logging: {
    fetches: { fullUrl: false },
  },
};
