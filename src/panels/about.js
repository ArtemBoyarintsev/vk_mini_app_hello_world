import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';


import pan from '../img/pan_with_food.jpg';
import './container.css';

const osName = platform();


const IntroPage = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader 
			left={<PanelHeaderButton data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>} >О приложении</PanelHeader>
		<div class="container">
			<img src={pan} alt="Norway" style={{height : '100%', width:'100%'}}/>
				<div class="content">
					<p>Что мы знаем о еде?</p>
					<p>То, что она является источником энергии?</p>
					<p>Ещё порой в рекламе проскакивает необходимость принятия тех или иных витаминов и минералов</p>
					<p>Но зачем? Что это дает?</p>
					<p>Мы привыкли думать, что автомобили, самолеты, новомодный искусственный интеллект - это сложно устроенные вещи.</p>
					<p>Но что касается нашего организма? - Ни для кого не новость, что наш мозг превосходит по сложности всё перечисленное.</p>
					<p>Но почему-то топливо для нашего организма - еда и его переработка в необходимые для организма вещества обделяется вниманием</p>
					<p>Оставаясь с нами, вы сможете узнать много новой информации о необходимых витаминах, минералах. Узнаете о продуктах, богатых ими.</p>
				</div>
		</div>
		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>>
		
	</Panel>
);

IntroPage.propTypes = {
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

export default IntroPage;
