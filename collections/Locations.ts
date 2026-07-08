import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
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
      name: 'population',
      type: 'text',
      required: true,
    },
    {
      name: 'blurb',
      type: 'textarea',
      required: true,
    },
    {
      name: 'stat',
      type: 'text',
      required: false,
      admin: {
        description: 'Highlight metric to show on listing page (e.g. 150% more calls)',
      },
    },
    {
      name: 'isCustom',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'If checked, this location will render a fully custom landing page (like London)',
      },
    },
  ],
}
