import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import pan from '../img/pan_with_food.jpg';
import './container.css';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Еда и нутриенты</PanelHeader>
		<div class="container">
			<img src={pan} alt="Norway" style={{height : '100%'}}/>
				<div class="content">
					<p>Почему это важно?</p>
					<p>Мы привыкли думать, что автомобили, самолеты, новомодный искусственный интеллект - это сложно устроенные вещи.</p>
					<p>Но что касается нашего организма? - Ни для кого не новость, что наш мозг превосходит по сложности всё перечисленное.</p>
					<p>Но почему-то топливо для нашего организма - еда и его переработка в необходимые для организма вещества обделяется вниманием</p>
					<p>Оставаясь с нами, вы сможете узнать много новой информации о необходимых витаминах, минералах. Узнаете о продуктах, богатых ими.</p>
				</div>
		</div>
		
		{/*fetchedUser && 
		
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>*/}

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="apricot">
					Show me  Apricot, please
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
