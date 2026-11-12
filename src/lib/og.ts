import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

// Open Graph cards are rendered at build time: satori lays out an SVG, sharp rasterises it to PNG.
// satori cannot read variable woff2 files, so it uses the static woff builds of the same families.

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

const colors = {
  paper: '#f4f2f8',
  ink: '#120d1d',
  muted: '#5d566e',
  line: '#dbd5e6',
  accent: '#9662d5',
};

const fontFile = (pkg: string, file: string) =>
  readFile(join(process.cwd(), 'node_modules', '@fontsource', pkg, 'files', file));

let fontsPromise: Promise<Parameters<typeof satori>[1]['fonts']> | undefined;
const loadFonts = () =>
  (fontsPromise ??= Promise.all([
    fontFile('bricolage-grotesque', 'bricolage-grotesque-latin-800-normal.woff'),
    fontFile('instrument-sans', 'instrument-sans-latin-400-normal.woff'),
    fontFile('instrument-sans', 'instrument-sans-latin-500-normal.woff'),
  ]).then(([display, regular, medium]) => [
    { name: 'Display', data: display, weight: 800 as const, style: 'normal' as const },
    { name: 'Sans', data: regular, weight: 400 as const, style: 'normal' as const },
    { name: 'Sans', data: medium, weight: 500 as const, style: 'normal' as const },
  ]));

type Style = Record<string, string | number>;
type Node = { type: string; props: { style?: Style; children?: Child | Child[] } };
type Child = Node | string;

// Minimal element factory: satori takes React-like nodes, so no JSX runtime is needed.
const h = (style: Style, ...children: Child[]): Node => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, children },
});

const titleSize = (text: string) => (text.length <= 12 ? 168 : text.length <= 18 ? 128 : text.length <= 26 ? 100 : 82);

export interface OgCard {
  /** Short label on the top right, e.g. "Trabajo" / "Work". */
  label: string;
  title: string;
  /** Optional line under the title. */
  description?: string;
  /** Bottom left. */
  footer: string;
  /** Bottom right, shown in the accent pill. */
  badge?: string;
}

export const renderOgPng = async (card: OgCard): Promise<Buffer> => {
  // satori adds padding to the box size, so the content sits in an inset frame instead of a padded root.
  const frame = h(
    {
      position: 'absolute',
      top: 64,
      left: 72,
      right: 72,
      bottom: 60,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    h(
      { justifyContent: 'space-between', alignItems: 'center' },
      h(
        { alignItems: 'flex-end', fontFamily: 'Display', fontSize: 52, letterSpacing: -1.5, lineHeight: 1 },
        'tuty',
        h({ width: 14, height: 14, borderRadius: 999, backgroundColor: colors.accent, marginLeft: 4, marginBottom: 8 }),
      ),
      h({ fontSize: 28, color: colors.muted }, card.label),
    ),
    h(
      { flexDirection: 'column' },
      h(
        {
          fontFamily: 'Display',
          fontSize: titleSize(card.title),
          letterSpacing: -4,
          lineHeight: 0.92,
          maxWidth: 1056,
        },
        card.title,
      ),
      ...(card.description
        ? [h({ marginTop: 28, fontSize: 30, lineHeight: 1.35, color: colors.muted, maxWidth: 940 }, card.description)]
        : []),
    ),
    h(
      { justifyContent: 'space-between', alignItems: 'center', borderTop: `2px solid ${colors.ink}`, paddingTop: 28 },
      h({ fontSize: 30, fontWeight: 500 }, card.footer),
      ...(card.badge
        ? [
            h(
              {
                backgroundColor: colors.accent,
                color: colors.ink,
                borderRadius: 999,
                padding: '10px 26px',
                fontSize: 28,
                fontWeight: 500,
              },
              card.badge,
            ),
          ]
        : []),
    ),
  );

  const tree = h(
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      position: 'relative',
      backgroundColor: colors.paper,
      fontFamily: 'Sans',
      color: colors.ink,
    },
    frame,
  );

  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts: await loadFonts(),
  });
  return sharp(Buffer.from(svg)).png().toBuffer();
};

/** Keeps a description to roughly two lines on the card. */
export const clip = (text: string, max = 140) =>
  text.length <= max ? text : `${text.slice(0, text.lastIndexOf(' ', max)).replace(/[,;:]$/, '')}…`;
