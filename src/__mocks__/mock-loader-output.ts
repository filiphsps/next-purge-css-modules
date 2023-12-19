import postcss from 'postcss';

export default {
  loader: 'postcss-loader',
  options: {
    postcssOptions: () => ({
      config: false,
      implementation: postcss,
      plugins: [
        [
          '@fullhuman/postcss-purgecss',
          {
            content: ['example'],
            fontFace: false,
            keyframes: false,
            safelist: ['body', 'html'],
            variables: false,
          },
        ],
      ],
    }),
  },
};
