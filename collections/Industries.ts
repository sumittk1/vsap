import type { CollectionConfig } from 'payload'

export const Industries: CollectionConfig = {
  slug: 'industries',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Singular name of the industry (e.g. Clinic, Contractor)',
      },
    },
    {
      name: 'pain',
      type: 'text',
      required: true,
      admin: {
        description: 'Primary pain point (e.g. Patients, Generating Qualified Leads)',
      },
    },
    {
      name: 'searches',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'query',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'challenges',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'challenge',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'bestFitServices',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'testimonialQuote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'testimonialName',
      type: 'text',
      required: true,
    },
    {
      name: 'testimonialRole',
      type: 'text',
      required: true,
    },
    {
      name: 'faqs',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
