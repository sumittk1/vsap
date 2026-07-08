import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Testimonials } from './collections/Testimonials'
import { BlogPosts } from './collections/BlogPosts'
import { Industries } from './collections/Industries'
import { Locations } from './collections/Locations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isPostgres = process.env.DATABASE_URI && (
  process.env.DATABASE_URI.startsWith('postgres://') || 
  process.env.DATABASE_URI.startsWith('postgresql://')
)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    Testimonials,
    BlogPosts,
    Industries,
    Locations,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'your-fallback-secret-here-for-local-dev',
  db: isPostgres
    ? postgresAdapter({
        pool: {
          connectionString: process.env.DATABASE_URI!,
        },
      })
    : sqliteAdapter({
        client: {
          url: process.env.DATABASE_URI || 'file:./payload.db',
        },
      }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
