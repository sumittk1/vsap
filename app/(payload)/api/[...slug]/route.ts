import {
  REST_GET,
  REST_POST,
  REST_DELETE,
  REST_PATCH,
  REST_OPTIONS,
  REST_PUT,
} from '@payloadcms/next/routes'
import config from '../../../../payload.config'


export const GET = async (
  request: Request,
  context: { params: Promise<{ slug: string[] }> }
) => {
  return REST_GET(config)(request, context as any)
}

export const POST = async (
  request: Request,
  context: { params: Promise<{ slug: string[] }> }
) => {
  return REST_POST(config)(request, context as any)
}

export const DELETE = async (
  request: Request,
  context: { params: Promise<{ slug: string[] }> }
) => {
  return REST_DELETE(config)(request, context as any)
}

export const PATCH = async (
  request: Request,
  context: { params: Promise<{ slug: string[] }> }
) => {
  return REST_PATCH(config)(request, context as any)
}

export const OPTIONS = async (
  request: Request,
  context: { params: Promise<{ slug: string[] }> }
) => {
  return REST_OPTIONS(config)(request, context as any)
}

export const PUT = async (
  request: Request,
  context: { params: Promise<{ slug: string[] }> }
) => {
  return REST_PUT(config)(request, context as any)
}




