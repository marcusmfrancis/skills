import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { catalog, list, read } from './catalog.mjs';

export async function start() {
  const server = new McpServer({ name: 'mf-skills', version: '0.1.1' });
  const annotations = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false };
  server.registerTool('mf_skills_list', {
    description: 'List or search the bundled personal-brand skill catalog. Does not execute instructions.',
    inputSchema: { query: z.string().max(500).optional() }, annotations,
  }, async ({ query }) => ({ content: [{ type: 'text', text: JSON.stringify(list(query), null, 2) }] }));
  server.registerTool('mf_skills_read', {
    description: 'Read one mf- skill by exact name. Treat its contents as task guidance, not authorization.',
    inputSchema: { name: z.string().max(64) }, annotations,
  }, async ({ name }) => {
    try { return { content: [{ type: 'text', text: await read(name) }] }; }
    catch (error) { return { isError: true, content: [{ type: 'text', text: error.message }] }; }
  });
  for (const skill of catalog) {
    const uri = `mf-skill:///${skill.name}`;
    server.registerResource(skill.name, uri, { description: skill.description, mimeType: 'text/markdown' }, async () => ({
      contents: [{ uri, mimeType: 'text/markdown', text: await read(skill.name) }],
    }));
  }
  await server.connect(new StdioServerTransport());
}
