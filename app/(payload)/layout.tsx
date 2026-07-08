import React from 'react'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap.js'
import config from '../../payload.config'
import type { ServerFunctionClient } from 'payload'
import '@payloadcms/next/css'
import './custom.scss'

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout importMap={importMap} config={config} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}

