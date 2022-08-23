import { useState } from 'react';
import {Combobox} from '@salesforce/design-system-react';
import {Dropdown} from '@salesforce/design-system-react';
import {GlobalHeader} from '@salesforce/design-system-react'; 
import {GlobalHeaderFavorites} from '@salesforce/design-system-react';
import {GlobalHeaderHelp} from '@salesforce/design-system-react';
import {GlobalHeaderNotifications} from '@salesforce/design-system-react';
import {GlobalHeaderProfile} from '@salesforce/design-system-react';
import {GlobalHeaderSearch} from '@salesforce/design-system-react';
import {GlobalHeaderSetup} from '@salesforce/design-system-react';
import {GlobalHeaderTask} from '@salesforce/design-system-react';
import {IconSettings} from '@salesforce/design-system-react';
import {Popover} from '@salesforce/design-system-react';
import './Header.css';


const ipsum =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum eros, vel porta metus dignissim vitae. Fusce finibus sed magna vitae tempus. Suspendisse condimentum, arcu eu viverra vulputate, mauris odio dictum velit, in dictum lorem augue id augue. Proin nec leo convallis, aliquet mi ut, interdum nunc.';

// Notifications content is currently the contents of a generic `Popover` with markup copied from https://www.lightningdesignsystem.com/components/global-header/#Notifications. This allows content to have tab stops and focus trapping. If you need a more specific/explicit `GlobalHeaderNotification` content, please create an issue.
const HeaderNotificationsCustomContent = (props: { items: any[]; }) => (
	<ul id="header-notifications-custom-popover-content">
		{props.items.map((item) => (
			<li
				className={`slds-global-header__notification ${
					item.unread ? 'slds-global-header__notification_unread' : ''
				}`}
				key={`notification-item-${item.id}`}
			>
				<div className="slds-media slds-has-flexi-truncate slds-p-around_x-small">
					<div className="slds-media__figure">
						<span className="slds-avatar slds-avatar_small">
							<img
								alt={item.name}
								src={`/assets/${item.avatar}.jpg`}
								title={`${item.name} avatar"`}
							/>
						</span>
					</div>
					<div className="slds-media__body">
						<div className="slds-grid slds-grid_align-spread">
							<a
								href="#"
								className="slds-text-link_reset slds-has-flexi-truncate"
								onClick={(event) => event.preventDefault()}
							>
								<h3
									className="slds-truncate"
									title={`${item.name} ${item.action}`}
								>
									<strong>{`${item.name} ${item.action}`}</strong>
								</h3>
								<p className="slds-truncate" title={item.comment}>
									{item.comment}
								</p>
								<p className="slds-m-top_x-small slds-text-color_weak">
									{item.timePosted}{' '}
									{item.unread ? (
										<abbr
											className="slds-text-link slds-m-horizontal_xxx-small"
											title="unread"
										>
											●
										</abbr>
									) : null}
								</p>
							</a>
						</div>
					</div>
				</div>
			</li>
		))}
	</ul>
);
HeaderNotificationsCustomContent.displayName =
	'HeaderNotificationsCustomContent';

// Profile content is currently the contents of a generic `Popover` with markup copied from https://www.lightningdesignsystem.com/components/global-header/. This allows content to have tab stops and focus trapping. If you need a more specific/explicit `GlobalHeaderProfile` content, please create an issue.
const HeaderProfileCustomContent = (props: any) => (
	<div id="header-profile-custom-popover-content">
		<div className="slds-m-around_medium">
			<div className="slds-tile slds-tile_board slds-m-horizontal_small">
				<p className="tile__title slds-text-heading_small">Mustafa Vlaznim</p>
				<div className="slds-tile__detail">
					<p className="slds-truncate">
						<a
							className="slds-m-right_medium"
							href="#"
						>
							Settings
						</a>
						<a href="#">
							Log Out
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
);
HeaderProfileCustomContent.displayName = 'HeaderProfileCustomContent';

export default function Header(props: any){

    const [favoritesActionSelected, changefavoritesActionSelected] = useState(false);
	return (
		<IconSettings iconPath="/assets/icons">
			<GlobalHeader
				logoSrc="/assets/favicon.ico"
				onSkipToContent={() => {
					console.log('>>> Skip to Content Clicked');
				}}
				onSkipToNav={() => {
					console.log('>>> Skip to Nav Clicked');
				}}
			>
				<GlobalHeaderSearch
					combobox={
						<Combobox
							assistiveText={{ label: 'Search' }}
							events={{
								onSelect: () => {
									console.log('>>> onSelect');
								},
							}}
							id="header-search-custom-id"
							labels={{ placeholder: 'Search Salesforce' }}
							options={[
								{ id: 'email', label: 'Email' },
								{ id: 'mobile', label: 'Mobile' },
							]}
						/>
					}
				/>
				<GlobalHeaderFavorites
					actionSelected={favoritesActionSelected}
					onToggleActionSelected={(event, data) => (changefavoritesActionSelected(!data.actionSelected))}
					popover={
						<Popover
							ariaLabelledby="favorites-heading"
							body={
								<div>
									<h2
										className="slds-text-heading_small"
										id="favorites-heading"
									>
										Favorites
									</h2>
									{ipsum}
								</div>
							}
							id="header-favorites-popover-id"
						/>
					}
				/>
				<GlobalHeaderTask
					dropdown={
						<Dropdown
							id="header-task-dropdown-id"
							options={[
								{ id: 'taskOptionOne', label: 'Task Option One' },
								{ id: 'taskOptionTwo', label: 'Task Option Two' },
							]}
						/>
					}
				/>
				<GlobalHeaderHelp
					popover={
						<Popover
							ariaLabelledby="help-heading"
							body={
								<div>
									<h2 className="slds-text-heading_small" id="help-heading">
										Help and Training
									</h2>
									{ipsum}
								</div>
							}
							id="header-help-popover-id"
						/>
					}
				/>
				<GlobalHeaderSetup
					dropdown={
						<Dropdown
							id="header-setup-dropdown-id"
							options={[
								{ id: 'setupOptionOne', label: 'Setup Option One' },
								{ id: 'setupOptionTwo', label: 'Setup Option Two' },
							]}
						/>
					}
				/>
				<GlobalHeaderNotifications
					notificationCount={5}
					popover={
						<Popover
							ariaLabelledby="header-notifications-custom-popover-content"
							body={
								<HeaderNotificationsCustomContent
									items={[
										{
											action: 'mentioned you',
											avatar: 'avatar2',
											comment:
												'@jrogers Could I please have a review on my presentation deck',
											id: 1,
											name: 'Val Handerly',
											timePosted: '10 hours ago',
											unread: true,
										},
										{
											action: 'commented on your post',
											avatar: 'avatar3',
											comment: 'I totally agree with your sentiment',
											id: 2,
											name: 'Jon Rogers',
											timePosted: '13 hours ago',
											unread: true,
										},
										{
											action: 'mentioned you',
											avatar: 'avatar2',
											comment:
												"@jrogers Here's the conversation I mentioned to you",
											id: 3,
											name: 'Rebecca Stone',
											timePosted: '1 day ago',
										},
									]}
								/>
							}
							id="header-notifications-popover-id"
						/>
					}
				/>
				<GlobalHeaderProfile
					popover={
						<Popover
							body={<HeaderProfileCustomContent />}
							id="header-profile-popover-id"
						/>
					}
					userName="Mustafa Vlaznim"
				/> 
			</GlobalHeader>
		</IconSettings>
	);
}
Header.displayName = 'GlobalHeaderExample';


