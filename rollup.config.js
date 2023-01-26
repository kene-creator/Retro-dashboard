import rollup from 'rollup';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    manualChunks: {
      vendor: ['lodash', 'react']
    }
  }
};
