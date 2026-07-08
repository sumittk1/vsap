import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap.js'
import config from '../../../../payload.config'

export const generateMetadata = ({ params, searchParams }: any) =>
  generatePageMetadata({ config, params, searchParams })

export default async function Page({ params, searchParams }: any) {
  return RootPage({
    config,
    importMap,
    params,
    searchParams,
  })
}


