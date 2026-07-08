import React from 'react';

export default function RichText({ content }: { content: any }) {
  if (!content) return null;

  const nodes = content.root?.children || content.children || [];

  return (
    <>
      {nodes.map((node: any, index: number) => {
        switch (node.type) {
          case 'paragraph':
            return (
              <p key={index} className="text-body-lg text-foreground/85 leading-relaxed mb-6">
                {renderChildren(node.children)}
              </p>
            );
          case 'heading': {
            const Tag = node.tag || 'h2';
            const headingClasses = {
              h1: 'text-h1 !mb-4 !mt-8',
              h2: 'text-h2 !mb-3 !mt-8',
              h3: 'text-h3 !mb-2 !mt-8',
              h4: 'text-h4 !mb-2 !mt-6',
              h5: 'text-h5 !mb-1 !mt-6',
              h6: 'text-h6 !mb-1 !mt-6',
            };
            return (
              <Tag key={index} className={headingClasses[Tag as keyof typeof headingClasses] || 'text-h3 !mb-2 !mt-8'}>
                {renderChildren(node.children)}
              </Tag>
            );
          }
          case 'list': {
            const ListTag = node.listType === 'number' ? 'ol' : 'ul';
            const listClass = node.listType === 'number' ? 'list-decimal pl-6 mb-6' : 'list-disc pl-6 mb-6';
            return (
              <ListTag key={index} className={listClass}>
                {node.children?.map((item: any, i: number) => (
                  <li key={i} className="mb-2">
                    {renderChildren(item.children)}
                  </li>
                ))}
              </ListTag>
            );
          }
          default:
            return null;
        }
      })}
    </>
  );
}

function renderChildren(children: any[]) {
  if (!children) return null;
  return children.map((child: any, index: number) => {
    if (child.type === 'text') {
      let textElement = <span key={index}>{child.text}</span>;
      if (child.format & 1) { // Bold
        textElement = <strong key={index}>{child.text}</strong>;
      }
      if (child.format & 2) { // Italic
        textElement = <em key={index}>{child.text}</em>;
      }
      return textElement;
    }
    if (child.type === 'link') {
      return (
        <a key={index} href={child.fields?.url} className="text-brand-purple hover:underline" target={child.fields?.newTab ? '_blank' : undefined} rel="noopener noreferrer">
          {renderChildren(child.children)}
        </a>
      );
    }
    return null;
  });
}
