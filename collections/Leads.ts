import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'source', 'status', 'createdAt'],
  },
  access: {
    create: () => true, // Anyone can submit a lead form!
    read: ({ req: { user } }) => !!user, // Only logged-in admins can view leads
    update: ({ req: { user } }) => !!user, // Only logged-in admins can edit leads
    delete: ({ req: { user } }) => !!user, // Only logged-in admins can delete leads
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'source',
      type: 'select',
      required: true,
      defaultValue: 'general',
      options: [
        { label: 'General Contact', value: 'general' },
        { label: 'Web Design Audit', value: 'web-design' },
        { label: 'Paid Ads', value: 'paid-ads' },
        { label: 'Google Ads', value: 'google-ads' },
        { label: 'Meta Ads', value: 'meta-ads' },
        { label: 'Lead Generation', value: 'lead-gen' },
        { label: 'Local SEO', value: 'local-seo' },
        { label: 'Brand Visibility', value: 'brand-visibility' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Converted', value: 'converted' },
        { label: 'Lost', value: 'lost' },
      ],
    },
  ],
}
