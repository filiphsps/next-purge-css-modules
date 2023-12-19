import createGlobPathArray from '@src/lib/createGlobPathArray';
import postcss from 'postcss';
import type { PurgeConfig } from '@types';

export default function createLoader(purgeConfig: PurgeConfig) {
  const content = purgeConfig?.content || [];
  const contentArray = Array.isArray(content) ? content : [content];

  return {
    loader: 'postcss-loader',
    options: {
      postcssOptions: () => ({
        config: false,
        implementation: postcss,
        plugins: [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: createGlobPathArray(contentArray),
              fontFace: purgeConfig?.fontFace,
              keyframes: purgeConfig?.keyframes,
              safelist: purgeConfig?.safelist,
              variables: purgeConfig?.variables,
            },
          ],
        ],
      }),
    },
  };
}
