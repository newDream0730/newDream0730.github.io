import { useState, useEffect } from 'react';
import {VerticalNavigation} from '@salesforce/design-system-react';


const sampleReportCategories = [
	{
		id: 'section_header',
		label: 'Section Header',
		items: [
			{ id: 'introduction', label: 'Introduction', link: 'en/introduction' },
			{ id: 'page_2', label: 'Page 2', link: 'en/page-2' },
			{ id: 'page_3', label: 'Page 3', link: 'en/page-3' },
		],
	},
	{
		id: 'another_section',
		label: 'Another Section',
		items: [
			{ id: 'page_4', label: 'Page 4', link: 'en/page-4' }
		],
	}
];
export default function LeftSidebars(props: any){
	const [selectedId, setSelectId] = useState('introduction');
	const [currentPage, setCurrentPage] = useState(props.currentPage);
	useEffect(() => {
		sampleReportCategories.map(category => {
			category.items.map(item => {
				console.log(item.id)
				item.link === props.currentPage ? setSelectId(item.id) : null
			})
		})
	},[currentPage]);
	const onselectionchange = (e:any, data : any) => {
		setSelectId(data.item.id)
		window.location.replace("http://localhost:3000/"+data.item.link);
		// console.log(props.currentPage, props.canonicalURL);
	}
	
	return (
		<>
			<VerticalNavigation
                id="sample-navigation"
                categories={sampleReportCategories}
                selectedId={selectedId}
                onSelect={(e:any, data : any) => onselectionchange(e,data)}
            />
		</>
	);
}
;