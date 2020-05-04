import React from 'react';
import PropTypes from 'prop-types';
import { platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

import pan from '../img/pan_with_food.jpg';
import './Persik.css';


const Vitamins  = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>Еда и нутриенты</PanelHeader>
		<div class="container">
			<img src={pan} alt="Norway" style={{height : '100%'}}/>
				<div class="content">
					<p>Витамины - незаменимые питательные элементы. </p>
					<p>Они не дают энергии, но жизненно важны для нормальной работы организма и поддержания здоровья. 
						Для того чтобы получать различные витамины, следует питаться продуктами из всех групп пищевых
						продуктов. Цельнозерновыми продуктами, фруктами и овощами, молочными продуктами. Они участвуют
						в обмене веществ, в работе нервной системы, защищают организм от простуды.</p>
				</div>
				
				<div class="button">
					<Button size="xl" level="2" onClick={go} data-to="persik">Витамин А</Button>
					<Button size="xl" level="2" onClick={go} data-to="persik">Витамины группы B</Button>
					<Button size="xl" level="2" onClick={go} data-to="persik">Витамин С</Button>
					<Button size="xl" level="2" onClick={go} data-to="persik">Витамин D</Button>
					<Button size="xl" level="2" onClick={go} data-to="persik">Витамин E</Button>
				</div>
		</div>
	</Panel>
);

Vitamins.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Vitamins;
