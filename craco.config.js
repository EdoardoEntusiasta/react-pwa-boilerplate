
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      "@core": path.resolve(__dirname, 'src/core'),
      "@locales": path.resolve(__dirname, 'src/locales'),
      
      "@atoms": path.resolve(__dirname, 'src/components/atoms'),
      "@molecules": path.resolve(__dirname, 'src/components/molecules'),
      "@organisms": path.resolve(__dirname, 'src/components/organisms'),

      "@mytools": path.resolve(__dirname, 'src/my_tools'),
      "@pages": path.resolve(__dirname, 'src/pages'),

      "@models": path.resolve(__dirname, 'src/models'),
      "@interfaces": path.resolve(__dirname, 'src/interfaces'),
      "@services": path.resolve(__dirname, 'src/services'),
      "@appTypes": path.resolve(__dirname, 'src/types'),
      "@validation": path.resolve(__dirname, 'src/validation'),
      "@helpers": path.resolve(__dirname, 'src/utils'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "@hooks": path.resolve(__dirname, 'src/hooks'),
      "@theme": path.resolve(__dirname, 'src/theme'),
      "@layouts": path.resolve(__dirname, 'src/layouts'),
      '@stores': path.resolve(__dirname, 'src/stores'),
    }
  },
};