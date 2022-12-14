<<<<<<< HEAD
import { useMemo } from 'react';
import { VerticalNavigation } from '@salesforce/design-system-react';

import type { FC } from 'react';
import type { MarkdownHeading } from 'astro';
import type { IContentItem, ITableOfContents } from '../../types';

const overviewItem: IContentItem = {
  id: 'overview',
  label: 'Overview',
  slug: 'overview',
};

const TableOfContents: FC<{ headings: MarkdownHeading[] }> = ({ headings = [] }) => {
  // Creating the structure required by LDS
  const headingsForLDS: ITableOfContents[] = useMemo(() => {
    return [
      {
        id: 'on-this-page',
        label: 'On this page',
        items: [overviewItem, ...headings.map(({ text, slug }) => ({ id: slug, label: text, slug: slug }))],
      },
    ];
  }, [headings]);

  return (
    <VerticalNavigation
      categories={headingsForLDS}
      selectedId="." // If undefined is provided, the default behaviour is to mark the first navItem as selected
      onSelect={(event: any, { item }: { item: IContentItem }) => {
        const headingToScrollTo = document.querySelector(`#${item.id}`) as HTMLHeadingElement | null;
        window.scrollTo(0, headingToScrollTo?.offsetTop || 0);
      }}
    />
  );
=======
import type { FunctionalComponent } from 'preact';
import { h, Fragment } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { MarkdownHeading } from 'astro';

const TableOfContents: FunctionalComponent<{ headings: MarkdownHeading[] }> = ({
	headings = [],
}) => {
	const itemOffsets = useRef([]);
	const [activeId, setActiveId] = useState<string>(undefined);
	useEffect(() => {
		const getItemOffsets = () => {
			const titles = document.querySelectorAll('article :is(h1, h2, h3, h4)');
			itemOffsets.current = Array.from(titles).map((title) => ({
				id: title.id,
				topOffset: title.getBoundingClientRect().top + window.scrollY,
			}));
		};

		getItemOffsets();
		window.addEventListener('resize', getItemOffsets);

		return () => {
			window.removeEventListener('resize', getItemOffsets);
		};
	}, []);

	return (
		<>
			<h2 class="heading">On this page</h2>
			<ul>
				<li class={`heading-link depth-2 ${activeId === 'overview' ? 'active' : ''}`.trim()}>
					<a href="#overview">Overview</a>
				</li>
				{headings
					.filter(({ depth }) => depth > 1 && depth < 4)
					.map((heading) => (
						<li
							class={`heading-link depth-${heading.depth} ${
								activeId === heading.slug ? 'active' : ''
							}`.trim()}
						>
							<a href={`#${heading.slug}`}>{heading.text}</a>
						</li>
					))}
			</ul>
		</>
	);
>>>>>>> f504e447f718a9e93b04b204698361f67bef2abb
};

export default TableOfContents;
