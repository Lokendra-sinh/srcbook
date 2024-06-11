import z from 'zod';

export const TitleCellSchema = z.object({
  id: z.string(),
  type: z.literal('title'),
  text: z.string(),
});

export const MarkdownCellSchema = z.object({
  id: z.string(),
  type: z.literal('markdown'),
  text: z.string(),
});

export const PackageJsonCellSchema = z.object({
  id: z.string(),
  type: z.literal('package.json'),
  source: z.string(),
  filename: z.literal('package.json'),
  status: z.enum(['idle', 'running']),
});

export const CodeCellSchema = z.object({
  id: z.string(),
  type: z.literal('code'),
  source: z.string(),
  language: z.enum(['javascript', 'typescript']),
  filename: z.string(),
  status: z.enum(['idle', 'running']),
});

export const CellSchema = z.union([
  TitleCellSchema,
  MarkdownCellSchema,
  PackageJsonCellSchema,
  CodeCellSchema,
]);

///////////////////////////////////////////
// ATTRIBUTES ALLOWED IN UPDATE REQUESTS //
///////////////////////////////////////////

export const TitleCellUpdateAttrsSchema = z.object({
  text: z.string(),
});

export const MarkdownCellUpdateAttrsSchema = z.object({
  text: z.string(),
});

export const PackageJsonCellUpdateAttrsSchema = z.object({
  source: z.string(),
});

export const CodeCellUpdateAttrsSchema = z.object({
  source: z.string().optional(),
  filename: z.string().optional(),
});

export const CellUpdateAttrsSchema = z.union([
  TitleCellUpdateAttrsSchema,
  MarkdownCellUpdateAttrsSchema,
  PackageJsonCellUpdateAttrsSchema,
  CodeCellUpdateAttrsSchema,
]);
