export default ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "RXdxKWiQLwq7z0rKAiIpKnNboFmfwA-3MOwp9dRb3LE",
      sites: [
        {
          name: 'Site 1',
          id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          buildHook: "https://api.netlify.com/build_hooks/<hook_id>",
          branch: 'main' // optional
        }
      ]
    },
  },
  // ...
});
